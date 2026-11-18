package com.hiremind.HireMind.ai.dto.resumeData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PdfExtractionResult {
    private Integer pageCount;
    private String extractedText;
    private HyperlinkData hyperlinks;
    private PdfMetadata metadata;
}
