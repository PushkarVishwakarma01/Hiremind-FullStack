package com.hiremind.HireMind.ai.controller;

import com.hiremind.HireMind.ai.dto.ats.ATSAnalysisResponse;
import com.hiremind.HireMind.ai.dto.ats.ATSHistoryResponse;
import com.hiremind.HireMind.ai.dto.ats.ATSRequest;
import com.hiremind.HireMind.ai.service.ATSService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/ats")
@CrossOrigin(origins = {"https://hiremind.iampushkar.in","http://localhost:5173"})
public class ATSController {
    private final ATSService atsService;

    @PostMapping("/analyze")
    public ResponseEntity<ATSAnalysisResponse> analyze(
            @RequestBody ATSRequest request
    ) throws Exception {

        return ResponseEntity.ok(
                atsService.analyze(request)
        );
    }
    @GetMapping("/history")
    public ResponseEntity<List<ATSHistoryResponse>> history(
            @RequestParam Long candidateProfileId
    ) {
        return ResponseEntity.ok(
                atsService.getHistory(candidateProfileId)
        );

    }

    @GetMapping("/history/{id}")
    public ResponseEntity<ATSAnalysisResponse> getHistoryById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(
                atsService.getHistoryById(id)
        );
    }
}
