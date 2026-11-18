package com.hiremind.HireMind.ai.service;


import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@Slf4j
public class PdfExtractionService {
    public String extractText(PDDocument file) throws IOException {

        PDFTextStripper stripper = new PDFTextStripper();

        return stripper.getText(file);
    }
}
