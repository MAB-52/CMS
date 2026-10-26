package com.consentiq.model.dto.response.mis;

import com.consentiq.enums.CustomerConsentRecordStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisRevocationRowResponse {

    private String customerId;
    private String customerName;
    private String mobileNumber;
    private String email;

    /** Derived from the most-recent CustomerConsentRecord for this customer. */
    private CustomerConsentRecordStatus consentStatus;

    private Instant lastConsentResponseAt;
    private Instant reEngagementEligibleAfter;
    private boolean vipFlag;
}
