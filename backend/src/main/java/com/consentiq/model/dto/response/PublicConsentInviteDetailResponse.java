package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Public-facing invite detail for the customer consent response page.
 * {@code state} drives UI: READY allows accept/decline; terminal states show confirmation only.
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PublicConsentInviteDetailResponse {

    /** READY | ACCEPTED | REJECTED | EXPIRED | NOT_FOUND */
    private String state;

    private String consentTitle;

    /** Short plain-text summary from consent description */
    private String descriptionPreview;

    /** Plain-text preview of consent message body */
    private String messagePreview;

    /** Display name for greeting */
    private String customerDisplayName;

    private String expiresAt;

    private String respondedAt;

    /** When state is ACCEPTED or REJECTED, echoes the decision */
    private String recordedDecision;
}
