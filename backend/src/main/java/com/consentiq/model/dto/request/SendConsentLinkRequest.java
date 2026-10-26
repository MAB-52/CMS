package com.consentiq.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SendConsentLinkRequest {

    @NotBlank
    private String customerId;

    @NotNull
    private Long consentTemplateId;

    /**
     * One or more delivery channels chosen at capture time. Each entry must match a channel configured on the
     * consent template (case-insensitive / synonym tolerant).
     */
    @NotEmpty
    private List<String> deliveryChannels;

    /** Display label for consent type (usually template name). */
    @NotBlank
    private String consentType;
}
