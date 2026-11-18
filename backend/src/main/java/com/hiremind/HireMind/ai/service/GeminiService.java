package com.hiremind.HireMind.ai.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.hiremind.HireMind.ai.dto.Content;
import com.hiremind.HireMind.ai.dto.GeminiRequest;
import com.hiremind.HireMind.ai.dto.GeminiResponse;
import com.hiremind.HireMind.ai.dto.Part;
import com.hiremind.HireMind.ai.dto.ats.ATSAnalysisResponse;
import com.hiremind.HireMind.ai.dto.parsedResume.ParsedResume;
import com.hiremind.HireMind.ai.prompt.ResumePromptBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

@Service
@RequiredArgsConstructor
public class GeminiService {
    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final RestClient restClient;

    private final ResumePromptBuilder promptBuilder;

    private final ObjectMapper objectMapper;

    private String generateContent(String prompt) {

        GeminiRequest request =
                new GeminiRequest(
                        List.of(
                                new Content(
                                        List.of(
                                                new Part(prompt)
                                        )
                                )
                        )
                );

        GeminiResponse response = restClient.post()
                .uri(apiUrl + "?key=" + apiKey)
                .body(request)
                .retrieve()
                .body(GeminiResponse.class);

        if (response == null
                || response.getCandidates() == null
                || response.getCandidates().isEmpty()) {

            throw new RuntimeException("No response from Gemini.");
        }

        return response.getCandidates()
                .get(0)
                .getContent()
                .getParts()
                .get(0)
                .getText()
                .replace("```json", "")
                .replace("```", "")
                .trim();
    }

    public ParsedResume parseResume(String resumeText) {

        String prompt = promptBuilder.buildResumePrompt(resumeText);
        String json = generateContent(prompt);

        try {
            return objectMapper.readValue(json, ParsedResume.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public ATSAnalysisResponse analyzeATS(String prompt) {

        String json = generateContent(prompt);

        try {
            return objectMapper.readValue(json, ATSAnalysisResponse.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }








//    public ParsedResume parseResume(String resumeText) {
//
//        String prompt = promptBuilder.buildResumePrompt(resumeText);
//
//        GeminiRequest request =
//                new GeminiRequest(
//                        List.of(
//                                new Content(
//                                        List.of(
//                                                new Part(prompt)
//                                        )
//                                )
//                        )
//                );
//
//        GeminiResponse response = restClient.post()
//                        .uri(apiUrl + "?key=" + apiKey)
//                        .body(request)
//                        .retrieve()
//                        .body(GeminiResponse.class);
//
//        if (response == null
//                || response.getCandidates() == null
//                || response.getCandidates().isEmpty()) {
//
//            throw new RuntimeException("No response from Gemini.");
//        }
//
//        String json =  response.getCandidates()
//                .get(0)
//                .getContent()
//                .getParts()
//                .getFirst()
//                .getText();
//        return objectMapper.readValue(json, ParsedResume.class);
//    }
//
//    public ATSAnalysisResponse analyzeATS(String prompt) throws Exception {
//
//        String response = callGemini(prompt);   // Reuse your existing Gemini API method
//
//        // Sometimes Gemini returns ```json ... ```
//        response = response.replace("```json", "")
//                .replace("```", "")
//                .trim();
//
//        ObjectMapper mapper = new ObjectMapper();
//
//        return mapper.readValue(response, ATSAnalysisResponse.class);
//    }
}
