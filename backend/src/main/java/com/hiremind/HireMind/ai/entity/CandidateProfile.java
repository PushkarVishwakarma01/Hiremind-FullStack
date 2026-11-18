package com.hiremind.HireMind.ai.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "candidate_profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CandidateProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    private String email;

    private String phone;

    private String linkedin;

    private String github;

    private String portfolio;

    private String leetcode;

    private String location;

    @Column(columnDefinition = "TEXT")
    private String summary;

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Skill> skills = new ArrayList<>();

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Education> educations = new ArrayList<>();

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Experience> experiences = new ArrayList<>();

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Project> projects = new ArrayList<>();

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Certification> certifications = new ArrayList<>();

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Achievement> achievements = new ArrayList<>();

    @OneToMany(mappedBy = "candidateProfile", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.LAZY)
    @Builder.Default
    private List<Language> languages = new ArrayList<>();

    @OneToOne(mappedBy = "candidateProfile")
    @JsonManagedReference
    private Resume resume;

    public void addSkill(Skill skill) {
        skills.add(skill);
        skill.setCandidateProfile(this);
    }

    public void addEducation(Education education) {
        educations.add(education);
        education.setCandidateProfile(this);
    }

    public void addExperience(Experience experience) {
        experiences.add(experience);
        experience.setCandidateProfile(this);
    }

    public void addProject(Project project) {
        projects.add(project);
        project.setCandidateProfile(this);
    }

    public void addCertification(Certification certification) {
        certifications.add(certification);
        certification.setCandidateProfile(this);
    }

    public void addAchievement(Achievement achievement) {
        achievements.add(achievement);
        achievement.setCandidateProfile(this);
    }

    public void addLanguage(Language language) {
        languages.add(language);
        language.setCandidateProfile(this);
    }
}