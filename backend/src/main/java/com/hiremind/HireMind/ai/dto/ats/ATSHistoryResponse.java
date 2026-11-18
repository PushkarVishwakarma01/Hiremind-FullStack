package com.hiremind.HireMind.ai.dto.ats;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ATSHistoryResponse {
    private Long id;
    private Long resumeId;
    private Long candidateProfileId;
    private Integer overallScore;
    private String jobDescription;
    private LocalDateTime analyzedAt;
}
