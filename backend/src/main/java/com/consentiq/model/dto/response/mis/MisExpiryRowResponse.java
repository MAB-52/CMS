package com.consentiq.model.dto.response.mis;

import com.consentiq.enums.CustomerConsentRecordStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisExpiryRowResponse {

    private String customerId;
    private String customerName;
    private String mobileNumber;
    private String email;

    /** Derived from the most-recent CustomerConsentRecord for this customer. */
    private CustomerConsentRecordStatus consentStatus;

    private LocalDate consentValidUntil;
    private Instant   lastConsentInviteSentAt;
    private Long      daysUntilExpiry;
    private boolean   vipFlag;
}
