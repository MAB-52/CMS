package com.consentiq.model.dto.request;

import java.util.List;

import com.consentiq.enums.CustomerConsentStatus;

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
public class RecordOnBehalfConsentRequest {

    @NotBlank
    private String customerId;
    
    @NotNull
    private Long consentTemplateId;

    @NotBlank
    private String consentType;

    @NotBlank
    private String mode;

    @NotBlank
    private String sourceChannel;

    private String evidenceReference;
    
    @NotNull(message = "Consent status is required")
    private CustomerConsentStatus consentStatus;
    
    /**
     * Delivery channels selected by the admin for this customer+consent.
     * Must be a subset of the channels configured on the consent template.
     * Optional — if not provided, channel preference is not updated.
     */
    private List<String> selectedChannels;
 
    /**
     * Languages selected by the admin for this customer+consent.
     * Optional — if not provided, language preference is not updated.
     */
    private List<String> selectedLanguages;
}
