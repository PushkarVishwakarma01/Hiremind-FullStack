package com.hiremind.HireMind.ai.mapper;


import tools.jackson.databind.ObjectMapper;
//import tools.jackson.core.JsonProcessingException;
import com.hiremind.HireMind.ai.dto.parsedResume.*;
import com.hiremind.HireMind.ai.entity.*;
import com.hiremind.HireMind.ai.entity.Education;
import com.hiremind.HireMind.ai.entity.Skill;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class ResumeMapper {

    private final ObjectMapper objectMapper;

    public Resume toResumeEntity(String originalFileName,
                                 String extractedText,
                                 Integer pageCount,
                                 ParsedResume parsedResume){

        Resume resume = Resume.builder()
                .originalFileName(originalFileName)
                .extractedText(extractedText)
                .parsedJson(objectMapper.writeValueAsString(parsedResume))
                .pageCount(pageCount)
                .uploadedAt(LocalDateTime.now())
                .build();

        CandidateProfile profile =
                toCandidateProfile(parsedResume);

        resume.setCandidateProfile(profile);
        profile.setResume(resume);

        return resume;
    }
    private CandidateProfile toCandidateProfile(ParsedResume parsedResume) {

        PersonalInfo info =
                parsedResume.getPersonalInfo();
        if (info == null) {
            info = new PersonalInfo();
        }

        CandidateProfile profile =
                CandidateProfile.builder()
                        .fullName(info.getFullName())
                        .email(info.getEmail())
                        .phone(info.getPhone())
                        .linkedin(info.getLinkedin())
                        .github(info.getGithub())
                        .portfolio(info.getPortfolio())
                        .leetcode(info.getLeetcode())
                        .location(info.getLocation())
                        .summary(info.getSummary())
                        .build();

        mapSkills(profile, parsedResume);

        mapEducation(profile, parsedResume);

        mapExperience(profile, parsedResume);

        mapProjects(profile, parsedResume);

        mapCertifications(profile, parsedResume);

        mapAchievements(profile, parsedResume);

        mapLanguages(profile, parsedResume);

        return profile;
    }

    private void mapLanguages(CandidateProfile profile, ParsedResume parsedResume) {
        if (parsedResume.getLanguages() == null) {
            return;
        }
        for (com.hiremind.HireMind.ai.dto.parsedResume.Language dto
                : parsedResume.getLanguages()) {

            com.hiremind.HireMind.ai.entity.Language language =
                    com.hiremind.HireMind.ai.entity.Language.builder()
                            .name(dto.getName())
                            .proficiency(dto.getProficiency())
                            .build();

            profile.addLanguage(language);
        }
    }

    private void mapAchievements(CandidateProfile profile, ParsedResume parsedResume) {
        if (parsedResume.getAchievements() == null) {
            return;
        }
        for (com.hiremind.HireMind.ai.dto.parsedResume.Achievement dto
                : parsedResume.getAchievements()) {

            com.hiremind.HireMind.ai.entity.Achievement achievement =
                    com.hiremind.HireMind.ai.entity.Achievement.builder()
                            .title(dto.getTitle())
                            .description(dto.getDescription())
                            .build();

            profile.addAchievement(achievement);
        }
    }

    private void mapProjects(CandidateProfile profile, ParsedResume parsedResume){
        if (parsedResume.getProjects() == null) {
            return;
        }
        for (com.hiremind.HireMind.ai.dto.parsedResume.Project dto
                : parsedResume.getProjects()) {

            com.hiremind.HireMind.ai.entity.Project project =
                    com.hiremind.HireMind.ai.entity.Project.builder()
                            .name(dto.getName())
                            .description(dto.getDescription())
                            .technologies( objectMapper.writeValueAsString(dto.getTechnologies()))
                            .build();

            profile.addProject(project);
        }
    }

    private void mapCertifications(CandidateProfile profile, ParsedResume parsedResume) {
        if (parsedResume.getCertifications() == null) {
            return;
        }
        for (com.hiremind.HireMind.ai.dto.parsedResume.Certification dto
                : parsedResume.getCertifications()) {

            com.hiremind.HireMind.ai.entity.Certification certification =
                    com.hiremind.HireMind.ai.entity.Certification.builder()
                            .name(dto.getName())
                            .issuer(dto.getIssuer())
                            .build();

            profile.addCertification(certification);
        }
    }

    private void mapExperience(CandidateProfile profile, ParsedResume parsedResume){
        if (parsedResume.getExperience() == null) {
            return;
        }
        for (com.hiremind.HireMind.ai.dto.parsedResume.Experience dto
                : parsedResume.getExperience()) {

            com.hiremind.HireMind.ai.entity.Experience experience =
                    com.hiremind.HireMind.ai.entity.Experience.builder()
                            .company(dto.getCompany())
                            .role(dto.getRole())
                            .duration(dto.getDuration())
                            .responsibilities( objectMapper.writeValueAsString(dto.getResponsibilities()))
                            .build();

            profile.addExperience(experience);
        }
    }

    private void mapSkills(CandidateProfile profile,
                           ParsedResume parsedResume) {

        if (parsedResume.getSkills() == null) {
            return;
        }

        for (com.hiremind.HireMind.ai.dto.parsedResume.Skill dto
                : parsedResume.getSkills()) {

            Skill skill = Skill.builder()
                    .name(dto.getName())
                    .category(dto.getCategory())
                    .build();

            profile.addSkill(skill);
        }

    }
    private void mapEducation(CandidateProfile profile,
                              ParsedResume parsedResume) {

        if (parsedResume.getEducation() == null) {
            return;
        }

        for (com.hiremind.HireMind.ai.dto.parsedResume.Education dto
                : parsedResume.getEducation()) {

            com.hiremind.HireMind.ai.entity.Education education =
                    com.hiremind.HireMind.ai.entity.Education.builder()
                            .institution(dto.getInstitution())
                            .degree(dto.getDegree())
                            .fieldOfStudy(dto.getFieldOfStudy())
                            .cgpa(dto.getCgpa())
                            .startYear(dto.getStartYear())
                            .endYear(dto.getEndYear())
                            .build();

            profile.addEducation(education);
        }

    }
}