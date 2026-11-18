package com.hiremind.HireMind.ai.dto.parsedResume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    private String name;
    private String description;
    private List<String> technologies;
}
