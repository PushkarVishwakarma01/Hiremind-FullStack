package com.hiremind.HireMind.ai.repository;

import com.hiremind.HireMind.ai.entity.Resume;
import jakarta.persistence.Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository 
public interface ResumeRepository extends JpaRepository<Resume,Long> {
}
