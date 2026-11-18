package com.hiremind.HireMind.ai.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Entity
@Table(name = "analysis_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Component
public class AnalysisHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * Resume used for analysis
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

    /**
     * Candidate profile
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "candidate_profile_id", nullable = false)
    private CandidateProfile candidateProfile;

    /**
     * Job Description entered by user
     */
    @Column(columnDefinition = "TEXT", nullable = false)
    private String jobDescription;

    /**
     * Complete AI response
     */
    @Column(columnDefinition = "TEXT", nullable = false)
    private String analysisJson;

    /**
     * Overall ATS score
     */
    private Integer overallScore;

    @Builder.Default
    private LocalDateTime analyzedAt = LocalDateTime.now();

}
