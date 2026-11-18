package com.hiremind.HireMind.ai.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "resumes")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Resume {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String originalFileName;

    @Column(columnDefinition = "TEXT")
    private String extractedText;

    @Column(columnDefinition = "TEXT")
    private String parsedJson;

    private Integer pageCount;

    @Builder.Default
    private LocalDateTime uploadedAt = LocalDateTime.now() ;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "candidate_profile_id")
    @JsonManagedReference
    private CandidateProfile candidateProfile;

}