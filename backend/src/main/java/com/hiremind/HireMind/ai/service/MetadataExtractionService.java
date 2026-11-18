package com.hiremind.HireMind.ai.service;

import com.hiremind.HireMind.ai.dto.resumeData.PdfMetadata;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDDocumentInformation;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Calendar;

@Service
@Slf4j
public class MetadataExtractionService {
    public PdfMetadata extractMetadata(PDDocument document) throws IOException {

            PDDocumentInformation info = document.getDocumentInformation();

            PdfMetadata metadata = PdfMetadata.builder()
                    .title(info.getTitle())
                    .author(info.getAuthor())
                    .subject(info.getSubject())
                    .creator(info.getCreator())
                    .producer(info.getProducer())
                    .keywords(info.getKeywords())
                    .trapped(info.getTrapped())
                    .pageCount(document.getNumberOfPages())
                    .pdfVersion(String.valueOf(document.getVersion()))
                    .creationDate(convert(info.getCreationDate()))
                    .modificationDate(convert(info.getModificationDate()))
                    .build();

            log.info("Metadata extracted successfully.");

            return metadata;
    }

    private LocalDateTime convert(Calendar calendar) {

        if (calendar == null) {
            return null;
        }

        return LocalDateTime.ofInstant(
                calendar.toInstant(),
                ZoneId.systemDefault()
        );
    }
}
