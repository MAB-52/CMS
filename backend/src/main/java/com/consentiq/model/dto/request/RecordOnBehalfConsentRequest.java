package com.consentiq.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecordOnBehalfConsentRequest {

    @NotBlank
    private String customerId;

    @NotBlank
    private String consentType;

    @NotBlank
    private String mode;

    @NotBlank
    private String sourceChannel;

    private String evidenceReference;
}
