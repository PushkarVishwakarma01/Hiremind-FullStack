package com.hiremind.HireMind.ai.service;

import com.hiremind.HireMind.ai.dto.resumeData.HyperlinkData;
import com.hiremind.HireMind.ai.dto.resumeData.PdfMetadata;
import com.hiremind.HireMind.ai.dto.resumeData.ResumeParseResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
@RequiredArgsConstructor
@Slf4j
public class ResumeParserService {
    private final PdfExtractionService pdfExtractionService;
    private final TextCleaningService textCleaningService;
    private final HyperlinkExtractionService hyperlinkExtractionService;
    private final MetadataExtractionService metadataExtractionService;

    public ResumeParseResponse parseResume(MultipartFile file) throws IOException {

        validateFile(file);

        try (PDDocument document = Loader.loadPDF(file.getBytes())) {

            String text = textCleaningService.clean(pdfExtractionService.extractText(document));

            HyperlinkData links = hyperlinkExtractionService.extractLinks(document);

            PdfMetadata metadata = metadataExtractionService.extractMetadata(document);

            return ResumeParseResponse.builder()
                    .fileName(file.getOriginalFilename())
                    .pageCount(document.getNumberOfPages())
                    .extractedText(text)
                    .hyperlinks(links)
                    .metadata(metadata)
                    .build();
        }
    }

    private void validateFile(MultipartFile file) {

        if (file == null || file.isEmpty()) {
            throw new IllegalArgumentException("Resume file cannot be empty.");
        }

        if (!"application/pdf".equals(file.getContentType())) {
            throw new IllegalArgumentException("Only PDF files are supported.");
        }
    }
}
