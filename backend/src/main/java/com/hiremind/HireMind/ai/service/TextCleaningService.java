package com.hiremind.HireMind.ai.service;

import org.springframework.stereotype.Service;

@Service
public class TextCleaningService {
    public String clean(String text) {

        if (text == null || text.isBlank()) {
            return "";
        }

        return text
                .replace("\r", "")
                .replace("\t", " ")
                .replace('\u00A0', ' ')       // non-breaking space
                .replaceAll("[ ]{2,}", " ")
                .replaceAll("\n{3,}", "\n\n")
                .replaceAll("[\\p{Cntrl}&&[^\n\t]]", "")
                .trim();
    }
}
