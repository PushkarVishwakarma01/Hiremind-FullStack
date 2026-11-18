package com.hiremind.HireMind.ai.dto.resumeData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HyperlinkData {
    private String linkedin;

    private String github;

    private String portfolio;

    private String leetcode;
}
