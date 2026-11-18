package com.hiremind.HireMind.ai.dto.parsedResume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Experience {
    private String company;
    private String role;
    private String duration;
    private List<String> responsibilities;
}
