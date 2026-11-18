package com.hiremind.HireMind.ai.dto.parsedResume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParsedResume {
    private PersonalInfo personalInfo;
    private List<Skill> skills;
    private List<Education> education;
    private List<Experience> experience;
    private List<Project> projects;
    private List<Certification> certifications;
    private List<Achievement> achievements;
    private List<Language> languages;

}


