package com.hiremind.HireMind.ai.dto.ats;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ATSAnalysisResponse {
    /**
     * Overall ATS Score Breakdown
     */
    private ScoreCard scores;

    /**
     * Technical skills found in both resume and JD
     */
    private List<String> matchedSkills;

    /**
     * Missing technical skills
     */
    private List<SkillGap> missingSkills;

    /**
     * Candidate strengths
     */
    private List<String> strengths;

    /**
     * Candidate weaknesses
     */
    private List<String> weaknesses;

    /**
     * Suggestions to improve resume
     */
    private List<String> resumeSuggestions;

    /**
     * Recommended learning path
     */
    private List<String> learningRoadmap;

    /**
     * Expected interview questions
     */
    private List<String> interviewQuestions;
}
