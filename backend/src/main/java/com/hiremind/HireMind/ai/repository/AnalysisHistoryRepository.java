package com.hiremind.HireMind.ai.repository;

import com.hiremind.HireMind.ai.entity.AnalysisHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnalysisHistoryRepository extends JpaRepository<AnalysisHistory,Long> {
    List<AnalysisHistory> findByCandidateProfileIdOrderByAnalyzedAtDesc(Long profileId);
}
