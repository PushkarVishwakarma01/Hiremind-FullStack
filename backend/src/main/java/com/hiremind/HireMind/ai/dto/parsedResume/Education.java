package com.hiremind.HireMind.ai.dto.parsedResume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Education {
    private String institution;
    private String degree;
    private String fieldOfStudy;
    private String cgpa;
    private String startYear;
    private String endYear;
}
