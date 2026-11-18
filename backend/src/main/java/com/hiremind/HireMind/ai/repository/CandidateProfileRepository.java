package com.hiremind.HireMind.ai.repository;

import com.hiremind.HireMind.ai.entity.CandidateProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CandidateProfileRepository extends JpaRepository<CandidateProfile,Long> {
}
