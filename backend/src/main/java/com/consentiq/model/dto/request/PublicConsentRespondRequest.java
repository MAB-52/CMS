package com.consentiq.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PublicConsentRespondRequest {

    @NotBlank
    private String token;

    @NotBlank
    @Pattern(regexp = "^(?i)(ACCEPT|DECLINE)$")
    private String decision;
}
