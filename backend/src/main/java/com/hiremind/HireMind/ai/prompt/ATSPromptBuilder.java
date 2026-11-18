package com.hiremind.HireMind.ai.prompt;

import com.hiremind.HireMind.ai.entity.*;
import org.springframework.stereotype.Component;

import java.util.stream.Collectors;

@Component
public class ATSPromptBuilder {
    public static String build(
            Resume resume,
            CandidateProfile profile,
            String jobDescription
    ) {

        String skills = profile.getSkills().stream()
                .map(Skill::getName)
                .collect(Collectors.joining(", "));

        String education = profile.getEducations().stream()
                .map(e -> String.format(
                        "%s in %s (%s - %s)\nInstitution: %s\nCGPA: %s",
                        e.getDegree(),
                        e.getFieldOfStudy(),
                        e.getStartYear(),
                        e.getEndYear(),
                        e.getInstitution(),
                        e.getCgpa()
                ))
                .collect(Collectors.joining("\n\n"));

        String experience = profile.getExperiences().stream()
                .map(e -> String.format(
                        """
                        Company: %s
                        Role: %s
                        Duration: %s
                        Responsibilities:
                        %s
                        """,
                        e.getCompany(),
                        e.getRole(),
                        e.getDuration(),
                        e.getResponsibilities()
                ))
                .collect(Collectors.joining("\n"));

        String projects = profile.getProjects().stream()
                .map(p -> String.format(
                        """
                        Project: %s
                        Description: %s
                        Technologies: %s
                        """,
                        p.getName(),
                        p.getDescription(),
                        p.getTechnologies()
                ))
                .collect(Collectors.joining("\n"));

        String certifications = profile.getCertifications().stream()
                .map(c -> c.getName() + " (" + c.getIssuer() + ")")
                .collect(Collectors.joining("\n"));

        String achievements = profile.getAchievements().stream()
                .map(a -> a.getTitle() + " : " + a.getDescription())
                .collect(Collectors.joining("\n"));

        String languages = profile.getLanguages().stream()
                .map(l -> l.getName() + " (" + l.getProficiency() + ")")
                .collect(Collectors.joining(", "));

        return """
You are HireMind AI.

You are an expert ATS (Applicant Tracking System), Senior Technical Recruiter, and Career Coach.

Analyze the candidate against the provided Job Description.

==================================================
PERSONAL INFORMATION
==================================================

Name:
%s

Email:
%s

Phone:
%s

Location:
%s

LinkedIn:
%s

GitHub:
%s

Portfolio:
%s

LeetCode:
%s

==================================================
SUMMARY
==================================================

%s

==================================================
SKILLS
==================================================

%s

==================================================
EDUCATION
==================================================

%s

==================================================
EXPERIENCE
==================================================

%s

==================================================
PROJECTS
==================================================

%s

==================================================
CERTIFICATIONS
==================================================

%s

==================================================
ACHIEVEMENTS
==================================================

%s

==================================================
LANGUAGES
==================================================

%s

==================================================
ORIGINAL RESUME TEXT
==================================================

%s

==================================================
JOB DESCRIPTION
==================================================

%s

==================================================
RETURN ONLY VALID JSON
==================================================

{
  "scores": {
    "overallScore": 0,
    "keywordScore": 0,
    "experienceScore": 0,
    "projectScore": 0,
    "educationScore": 0,
    "resumeQualityScore": 0
  },

  "matchedSkills": [],

  "missingSkills": [
    {
      "name": "",
      "priority": "HIGH",
      "reason": ""
    }
  ],

  "strengths": [],

  "weaknesses": [],

  "resumeSuggestions": [],

  "learningRoadmap": [],

  "interviewQuestions": []
}
matchedSkills should include only:

- Programming languages
- Frameworks
- Libraries
- Databases
- Cloud platforms
- DevOps tools
- Messaging systems
- Technologies explicitly mentioned in the JD

Do not include:
- Soft skills
- General concepts
- Academic subjects
- Generic programming principles
Scores Guidelines

overallScore:
Overall ATS match between resume and job description.

keywordScore:
Based on technical keyword matching only.

experienceScore:
Score the candidate's practical experience from internships, freelance work, personal projects, hackathons, and professional experience.
Do NOT return 0 unless absolutely no relevant experience exists.

projectScore:
Based on quality, complexity, and relevance of projects.

educationScore:
Based on education relevance and academic achievements.

resumeQualityScore:
Based on formatting, clarity, quantified achievements, and ATS friendliness.
Rules:

- Return JSON ONLY.
- No markdown.
- No explanation.
- Scores must be between 0 and 100.
- matchedSkills must contain ONLY technical skills.
- missingSkills must contain ONLY missing technical skills.
- priority must be HIGH, MEDIUM or LOW.
- Resume suggestions must be actionable.
- Learning roadmap must focus on missing skills.
- Interview questions must match the job description.
"""
                .formatted(
                        profile.getFullName(),
                        profile.getEmail(),
                        profile.getPhone(),
                        profile.getLocation(),
                        profile.getLinkedin(),
                        profile.getGithub(),
                        profile.getPortfolio(),
                        profile.getLeetcode(),

                        profile.getSummary(),

                        skills,

                        education,

                        experience,

                        projects,

                        certifications,

                        achievements,

                            languages,

                        resume.getExtractedText(),

                        jobDescription
                );
    }

}
