package com.hiremind.HireMind.service;

import com.hiremind.HireMind.dto.auth.*;
import com.hiremind.HireMind.model.User;
import com.hiremind.HireMind.repository.UserRepo;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthService {
    private final UserRepo userRepo;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(12);

    public AuthResponse register(RegisterRequest request, HttpServletRequest servletRequest) {
        if (userRepo.existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        userRepo.save(user);

        String ip = getClientIp(servletRequest);

        log.info("""
                ===========================
                NEW USER REGISTERED
                Name     : {}
                Email    : {}
                Provider : LOCAL
                IP       : {}
                Time     : {}
                ===========================
                """,
                user.getName(),
                user.getEmail(),
                ip,
                LocalDateTime.now());

        String token = jwtService.generateToken(user.getEmail());
        return buildResponse(user, token);
    }

    public AuthResponse login(LoginRequest request, HttpServletRequest servletRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        User user = userRepo.findByEmail(request.getEmail());

        String ip = getClientIp(servletRequest);

        log.info("""
                ===========================
                LOGIN SUCCESS
                Name     : {}
                Email    : {}
                Provider : LOCAL
                IP       : {}
                Time     : {}
                ===========================
                """,
                user.getName(),
                user.getEmail(),
                ip,
                LocalDateTime.now());

        String token = jwtService.generateToken(user.getEmail());
        return buildResponse(user, token);
    }

    private AuthResponse buildResponse(User user, String token) {
        return AuthResponse.builder()
                .token(token)
                .user(UserResponse.builder()
                        .id(user.getId())
                        .name(user.getName())
                        .email(user.getEmail())
                        .build())
                .build();
    }
    private String getClientIp(HttpServletRequest request) {

        String ip = request.getHeader("CF-Connecting-IP");

        if (ip == null || ip.isBlank()) {
            ip = request.getHeader("X-Forwarded-For");
        }

        if (ip == null || ip.isBlank()) {
            ip = request.getRemoteAddr();
        }

        return ip;
    }
}