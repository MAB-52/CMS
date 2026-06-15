package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {

    @Builder.Default
    private String type = "Bearer";
    private String token;
    private Long userId;
    private String email;
    private String fullName;
    private String role;
}
