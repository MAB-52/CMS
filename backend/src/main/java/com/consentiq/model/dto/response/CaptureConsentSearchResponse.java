package com.consentiq.model.dto.response;

import java.util.List;

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
}
