package com.hiremind.HireMind.ai.dto.resumeData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PdfMetadata {

    private String title;
    private String author;
    private String subject;
    private String creator;
    private String producer;
    private String keywords;
    private String trapped;
    private Integer pageCount;
    private String pdfVersion;
    private LocalDateTime creationDate;
    private LocalDateTime modificationDate;
}
