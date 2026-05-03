package com.consentiq.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SendConsentLinkRequest {

    @NotBlank
    private String customerId;

    @NotNull
    private Long consentTemplateId;

    @NotBlank
    private String deliveryChannel;

    /** Display label for consent type (usually template name). */
    @NotBlank
    private String consentType;
}
