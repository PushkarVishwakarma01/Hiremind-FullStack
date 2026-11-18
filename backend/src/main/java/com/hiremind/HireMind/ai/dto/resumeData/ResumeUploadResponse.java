package com.hiremind.HireMind.ai.dto.resumeData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResumeUploadResponse {
    private Long resumeId;
    private Long candidateProfileId;
    private String fileName;
    private String message;
}
