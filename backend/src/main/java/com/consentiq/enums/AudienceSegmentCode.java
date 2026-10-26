package com.consentiq.enums;

/**
 * System-defined audience segments resolved from persisted customer + consent lifecycle data.
 */
public enum AudienceSegmentCode {
    NEW_CUSTOMER,
    NEW_CUSTOMERS,
    EXISTING_CUSTOMERS,
    PENDING_CONSENT,
    CONSENT_EXPIRING,
    EXPIRING_CONSENT,
    EXPIRED_CONSENT,
    NON_RESPONDER,
    VIP,
    DECLINED_RE_ENGAGEMENT,
    DECLINED_CUSTOMERS,
    ACCEPTED_CONSENT,
    NEW_CUSTOMERS_NOT_RESPONDED,
}
