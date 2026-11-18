package com.hiremind.HireMind.ai.dto.ats;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ScoreCard {
    private Integer overallScore;
    private Integer keywordScore;
    private Integer experienceScore;
    private Integer projectScore;
    private Integer educationScore;
    private Integer resumeQualityScore;
}
