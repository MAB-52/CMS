package com.consentiq.model.dto.response.mis;

import lombok.Builder;
import lombok.Value;

import java.time.Instant;

@Value
@Builder
public class MisDemographicLifecycleResponse {
    /** Customers first seen on or after the window start. */
    long newCustomersInWindow;
    /** Customers created before the window start. */
    long existingCustomersBeforeWindow;
    /** Among new customers in window: with active-like consent status. */
    long newCustomersWithActiveConsent;
    /** Among existing cohort: with active-like consent status. */
    long existingCustomersWithActiveConsent;
    double newCustomerAdoptionRatePercent;
    double existingCustomerAdoptionRatePercent;
    Instant windowStart;
    Instant windowEnd;
}
