package com.hiremind.HireMind.ai.prompt;

import org.springframework.stereotype.Component;

@Component
public class ResumePromptBuilder {
    public String buildResumePrompt(String resumeText) {

        return """
                You are an expert ATS Resume Parser.

                Your task is to extract structured information from the resume.

                Rules:

                1. Return ONLY valid JSON.
                2. Do NOT wrap the response inside markdown.
                3. Do NOT explain anything.
                4. If a field is missing, use null.
                5. Keep all extracted values exactly as written.
                6. Return ONLY valid JSON.
                The JSON MUST EXACTLY follow the schema below.
                Do NOT simplify nested objects.
                Every object inside arrays MUST contain all fields shown.
                Never return arrays of strings when the schema expects objects.
                If data is unavailable use null.

                JSON Schema:

                {
                  "personalInfo": {
                    "fullName": "",
                    "email": "",
                    "phone": "",
                    "linkedin": "",
                    "github": "",
                    "portfolio": "",
                    "leetcode": "",
                    "location": "",
                    "summary": ""
                  },
                  "skills": [
                    {
                      "name": "",
                      "category": ""
                    }
                  ],
                  "education": [
                    {
                      "institution": "",
                      "degree": "",
                      "fieldOfStudy": "",
                      "cgpa": "",
                      "startYear": "",
                      "endYear": ""
                    }
                  ],
                  "experience":[
                     {
                        "company":"",
                        "role":"",
                        "duration":"",
                        "responsibilities":[]
                     }
                  ],
                  "projects":[
                    {
                        "name":"",
                        "description":"",
                        "technologies":[]
                    }
                  ],
                  "certifications": [
                    {
                        "name":"",
                        "issuer":""
                    }
                  ],
                  "achievements":[
                    {
                      "title":"",
                      "description":""
                    }
                  ],
                  "languages":[
                     {
                        "name":"",
                        "proficiency":""
                     }
                  ]
                }

                Resume:
                 
                %s
                """.formatted(resumeText);

    }
}
