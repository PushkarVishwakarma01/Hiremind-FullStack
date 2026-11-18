package com.hiremind.HireMind.ai.dto.parsedResume;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PersonalInfo {

    private String fullName;
    private String email;
    private String phone;
    private String linkedin;
    private String github;
    private String portfolio;
    private String leetcode;
    private String location;
    private String summary;

}
