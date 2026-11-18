package com.hiremind.HireMind.ai.controller;

import com.hiremind.HireMind.ai.dto.parsedResume.ParsedResume;
import com.hiremind.HireMind.ai.entity.Resume;
import com.hiremind.HireMind.ai.service.AiResumeService;
import com.hiremind.HireMind.ai.service.GeminiService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class GeminiController {

    private final GeminiService geminiService;
    private final AiResumeService aiResumeService;

    @GetMapping("/test")
    public ParsedResume testAI() throws Exception {

        return geminiService.parseResume(
                "John Doe is a Java Developer skilled in Spring Boot, React and PostgreSQL."
        );
    }

}
