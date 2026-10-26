package com.consentiq.model.dto.response;

import com.consentiq.enums.CustomerConsentStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminCustomerRowResponse {

    private String customerId;
    private String customerName;
    private String mobileNumber;
    private String email;
    private CustomerConsentStatus consentStatus;
    private Instant lastUpdated;
}
