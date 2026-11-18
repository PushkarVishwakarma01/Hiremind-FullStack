package com.hiremind.HireMind.ai.controller;

import com.hiremind.HireMind.ai.entity.Resume;
import com.hiremind.HireMind.ai.service.AiResumeService;
import com.hiremind.HireMind.ai.dto.resumeData.ResumeParseResponse;
import com.hiremind.HireMind.ai.dto.resumeData.ResumeUploadResponse;
import com.hiremind.HireMind.ai.service.ResumeParserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/resume")
@RequiredArgsConstructor
@CrossOrigin(origins = {"https://hiremind.iampushkar.in","http://localhost:5173"})
public class ResumeControler {
    private final ResumeParserService resumeService;
    private final ResumeParserService resumeParserService;

    private final AiResumeService aiResumeService;

    @PostMapping("/upload")
    public ResponseEntity<ResumeParseResponse> uploadResume(
            @RequestParam("file") MultipartFile file) throws IOException {

        ResumeParseResponse response = resumeService.parseResume(file);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/upload-ai")
    public ResponseEntity<ResumeUploadResponse> uploadAiResume(@RequestParam("file") MultipartFile file)
            throws Exception {

        Resume savedResume = aiResumeService.processResume(file);

        ResumeUploadResponse response = ResumeUploadResponse.builder()
                .resumeId(savedResume.getId())
                .candidateProfileId(savedResume.getCandidateProfile().getId())
                .fileName(savedResume.getOriginalFileName())
                .message("Resume uploaded and parsed successfully.")
                .build();

        return ResponseEntity.ok(response);
    }


}


