package com.hiremind.HireMind.ai.dto.resumeData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ResumeParseResponse {
    private String fileName;
    private Integer pageCount;
    private String extractedText;
    private HyperlinkData hyperlinks;
    private PdfMetadata metadata;
//    private ParsedResume parsedResume;
}
