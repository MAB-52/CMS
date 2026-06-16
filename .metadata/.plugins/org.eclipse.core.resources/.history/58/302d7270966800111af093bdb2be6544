package com.consentiq.enums;

/**
 * Identifies which scenario triggered a reminder email.
 *
 * CHECKER_PENDING  — the checker has not approved / rejected / requested
 *                    revision within the SLA window (5 days after submission).
 *
 * MAKER_REVISION   — the maker has not re-submitted after the checker
 *                    requested a revision within the SLA window (5 days
 *                    after reviewedAt was set to REVISION_REQUESTED).
 */
public enum ReminderRecipientRole {
    CHECKER_PENDING,
    MAKER_REVISION
}