package com.hiremind.HireMind.ai.service;

import com.hiremind.HireMind.ai.dto.resumeData.HyperlinkData;
import lombok.extern.slf4j.Slf4j;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.interactive.action.PDAction;
import org.apache.pdfbox.pdmodel.interactive.action.PDActionURI;
import org.apache.pdfbox.pdmodel.interactive.annotation.PDAnnotation;
import org.apache.pdfbox.pdmodel.interactive.annotation.PDAnnotationLink;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@Slf4j
public class HyperlinkExtractionService {
    public HyperlinkData extractLinks(PDDocument document) throws IOException {

        HyperlinkData links = HyperlinkData.builder().build();

            for (PDPage page : document.getPages()) {

                for (PDAnnotation annotation : page.getAnnotations()) {

                    if (!(annotation instanceof PDAnnotationLink link)) {
                        continue;
                    }

                    PDAction action = link.getAction();

                    if (!(action instanceof PDActionURI uriAction)) {
                        continue;
                    }

                    String url = uriAction.getURI();

                    if (url == null || url.isBlank()) {
                        continue;
                    }

                    log.info("Found URL: {}", url);

                    classifyUrl(url, links);
                }
            }

        return links;
    }

    /**
     * Classifies URLs into known categories.
     */
    private void classifyUrl(String url, HyperlinkData links) {

        String lower = url.toLowerCase();

        if (lower.contains("linkedin")) {
            links.setLinkedin(url);
        }

        else if (lower.contains("github")) {
            links.setGithub(url);
        }

        else if (lower.contains("leetcode")) {
            links.setLeetcode(url);
        }

        else {
            // Any unknown website becomes portfolio
            links.setPortfolio(url);
        }
    }

}
