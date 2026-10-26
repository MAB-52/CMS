package com.consentiq.model.dto.response.mis;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MisExecutiveKpisResponse {

    private long totalConsentsCollected;
    private long activeConsents;
    private long expiredConsents;
    private long revokedConsents;
    private long pendingConsentRequests;
    /** active / total customers × 100 */
    private double consentAcceptanceRatePercent;

    private long vipTotalCustomers;
    private long vipActiveConsents;
    private double vipConsentRatePercent;

    private long nonVipTotalCustomers;
    private long nonVipActiveConsents;
    private double nonVipConsentRatePercent;

    /** Same numerator/denominator as consent acceptance for directory-wide compliance view. */
    private double complianceScorePercent;

    /**
     * Share of approved consent workflows where {@code reviewedAt - submittedAt} is at most 48 hours.
     * Uses {@link com.consentiq.model.entity.Consent} timestamps (same basis as average approval time on the MIS
     * dashboard). A stricter regulatory view could pair {@code CONSENT_SUBMITTED} / {@code CONSENT_APPROVED} audit rows
     * per consent entity.
     */
    private double sla48hAdherencePercent;

    private MisMakerCheckerSnapshot makerChecker;
}
