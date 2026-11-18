package com.hiremind.HireMind.config;

import com.hiremind.HireMind.model.AuthProvider;
import com.hiremind.HireMind.model.User;
import com.hiremind.HireMind.repository.UserRepo;
import com.hiremind.HireMind.service.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.time.LocalDateTime;

@Component
@Slf4j
@RequiredArgsConstructor
public class OAuth2AuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    private final UserRepo userRepo;
    private final JwtService jwtService;

    @Value("${app.oauth2.redirect-uri}")
    private String redirectUri;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {

        OAuth2User oAuth2User = (OAuth2User) authentication.getPrincipal();
        String email = oAuth2User.getAttribute("email");
        String name = oAuth2User.getAttribute("name");

        User user = userRepo.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setEmail(email);
            user.setName(name);
            user.setProvider(AuthProvider.GOOGLE);
            userRepo.save(user);
        }


        String ip = getClientIp(request);

        log.info("""
            ===========================
            LOGIN SUCCESS
            Name     : {}
            Email    : {}
            Provider : GOOGLE
            IP       : {}
            Time     : {}
            ===========================
            """,
                name,
                email,
                ip,
                LocalDateTime.now());

        String token = jwtService.generateToken(user.getEmail());

        String targetUrl = UriComponentsBuilder.fromUriString(redirectUri)
                .queryParam("token", token)
                .build().toUriString();

        response.sendRedirect(targetUrl);
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