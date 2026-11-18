package com.hiremind.HireMind.ai.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hiremind.HireMind.ai.dto.ats.ATSAnalysisResponse;
import com.hiremind.HireMind.ai.dto.ats.ATSHistoryResponse;
import com.hiremind.HireMind.ai.dto.ats.ATSRequest;
import com.hiremind.HireMind.ai.entity.AnalysisHistory;
import com.hiremind.HireMind.ai.entity.CandidateProfile;
import com.hiremind.HireMind.ai.entity.Resume;
import com.hiremind.HireMind.ai.prompt.ATSPromptBuilder;
import com.hiremind.HireMind.ai.repository.AnalysisHistoryRepository;
import com.hiremind.HireMind.ai.repository.ResumeRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ATSService {
    private final ResumeRepository resumeRepository;
    private final GeminiService geminiService;
    private final ATSPromptBuilder promptBuilder;
    private final AnalysisHistory analysisHistory;
    private final ObjectMapper objectMapper;
    private final AnalysisHistoryRepository analysisHistoryRepository;

    public ATSAnalysisResponse analyze(ATSRequest request) throws Exception {

        Resume resume = resumeRepository.findById(request.getResumeId())
                .orElseThrow(() -> new RuntimeException("Resume not found"));

        CandidateProfile profile = resume.getCandidateProfile();

        String prompt = ATSPromptBuilder.build(
                resume,
                profile,
                request.getJobDescription()
        );
        ATSAnalysisResponse response = geminiService.analyzeATS(prompt);

        saveAnalysisHistory(
                resume,
                profile,
                request.getJobDescription(),
                response
        );

        return geminiService.analyzeATS(prompt);

    }
    private void saveAnalysisHistory(
            Resume resume,
            CandidateProfile profile,
            String jobDescription,
            ATSAnalysisResponse response
    ) {

        try {

            AnalysisHistory history = AnalysisHistory.builder()
                    .resume(resume)
                    .candidateProfile(profile)
                    .jobDescription(jobDescription)
                    .overallScore(response.getScores().getOverallScore())
                    .analysisJson(objectMapper.writeValueAsString(response))
                    .build();

            analysisHistoryRepository.save(history);

        } catch (Exception e) {

            throw new RuntimeException("Failed to save ATS History.", e);

        }
    }
    public List<ATSHistoryResponse> getHistory(Long profileId) {

        return analysisHistoryRepository
                .findByCandidateProfileIdOrderByAnalyzedAtDesc(profileId)
                .stream()
                .map(this::mapToResponse)
                .toList();
    }
    private ATSHistoryResponse mapToResponse(AnalysisHistory history) {

        return ATSHistoryResponse.builder()
                .id(history.getId())
                .resumeId(history.getResume().getId())
                .candidateProfileId(history.getCandidateProfile().getId())
                .overallScore(history.getOverallScore())
                .jobDescription(history.getJobDescription())
                .analyzedAt(history.getAnalyzedAt())
                .build();

    }
    public ATSAnalysisResponse getHistoryById(Long id) {

        AnalysisHistory history = analysisHistoryRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("ATS history not found"));

        try {
            return objectMapper.readValue(
                    history.getAnalysisJson(),
                    ATSAnalysisResponse.class
            );
        } catch (Exception e) {
            throw new RuntimeException("Unable to parse stored analysis.", e);
        }
    }
}
