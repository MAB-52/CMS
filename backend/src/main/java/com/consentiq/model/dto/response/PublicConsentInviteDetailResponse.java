package com.consentiq.model.dto.response;

import java.util.List;
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
    /** READY | ACCEPTED | REJECTED | WITHDRAWN | EXPIRED | NOT_FOUND */
    private String state;
    private String consentTitle;
    /** Short plain-text summary from consent description */
    private String descriptionPreview;
    /** Plain-text preview of consent message body */
    private String messagePreview;
    /**
     * Full resolved HTML of the consent message with merge tags substituted
     * and images embedded as base64 data URIs. Render via [innerHTML] on the public page.
     */
    private String resolvedMessageHtml;
    /** Display name for greeting */
    private String customerDisplayName;
    private String expiresAt;
    private String respondedAt;
    /** When state is ACCEPTED, REJECTED, or WITHDRAWN, echoes the decision */
    private String recordedDecision;
    /**
     * Human-readable list of delivery channels selected when this invite was sent
     * (e.g. "Email, SMS").
     */
    private String deliveryChannelsSummary;
    private Long consentDbId;
    /**
     * Channel keys configured on the consent template (e.g. ["EMAIL", "SMS"]).
     * Used by the public page to render channel-preference checkboxes.
     * Only channels that are true on the template are included.
     */
    private List<String> availableChannels;
    private Integer validityPeriodDays;
}