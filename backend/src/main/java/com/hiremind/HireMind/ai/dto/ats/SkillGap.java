package com.hiremind.HireMind.ai.dto.ats;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SkillGap {
    private String name;

    /**
     * HIGH
     * MEDIUM
     * LOW
     */
    private String priority;

    /**
     * Why this skill is important for this JD.
     */
    private String reason;
}
