package com.hiremind.HireMind.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    private String password; // null for OAuth-only accounts

    private String role = "USER";

    @Enumerated(EnumType.STRING)
    private AuthProvider provider = AuthProvider.LOCAL;
}