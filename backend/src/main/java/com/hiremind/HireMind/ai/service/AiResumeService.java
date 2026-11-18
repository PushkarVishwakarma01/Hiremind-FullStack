package com.hiremind.HireMind.ai.service;

import com.hiremind.HireMind.ai.dto.parsedResume.ParsedResume;
import com.hiremind.HireMind.ai.entity.Resume;
import com.hiremind.HireMind.ai.mapper.ResumeMapper;
import com.hiremind.HireMind.ai.repository.ResumeRepository;
import com.hiremind.HireMind.ai.dto.resumeData.ResumeParseResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class AiResumeService {
    private final ResumeParserService parserService;

    private final GeminiService geminiService;

    private final ResumeMapper resumeMapper;

    private final ResumeRepository resumeRepository;

    public Resume processResume(MultipartFile file) throws Exception {

        // Step 1: Extract resume text
        ResumeParseResponse extractedResume = parserService.parseResume(file);

        // Step 2: Parse using Gemini
        ParsedResume parsedResume = geminiService.parseResume(extractedResume.getExtractedText());

        // Step 3: Convert DTO -> Entity
        Resume resume = resumeMapper.toResumeEntity(
                extractedResume.getFileName(),
                extractedResume.getExtractedText(),
                extractedResume.getPageCount(),
                parsedResume
        );

        // Step 4: Save to DB
        return resumeRepository.save(resume);
    }
}
