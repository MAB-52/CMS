package com.consentiq.model.dto.response;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CaptureConsentSearchResponse {

    private String customerId;
    private String fullName;
    private String email;
    private String mobileNumber;
    private List<String> activeDeliveryChannels;
    private String consentStatus;
    private LocalDate consentValidUntil;
    private Instant lastConsentInviteSentAt;
    private Instant lastConsentResponseAt;
    private Instant reEngagementEligibleAfter;
    
    @JsonProperty("vip")  
    private boolean vip;
}
