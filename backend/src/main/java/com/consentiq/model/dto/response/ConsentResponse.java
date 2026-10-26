package com.consentiq.model.dto.response;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.ConsentType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentResponse {

    private Long id;
    private String consentId;
    private String consentName;
    private String description;
    private ConsentCategory category;
    private Integer validityPeriodDays;
    private LocalDate validityStartDate;
    private LocalDate validityEndDate;
    private String consentMessage;
    private ConsentStatus status;
    private Integer version;
    private ConsentType type;
//    private List<String> deliveryChannels;
    private boolean channelEmail;
    private boolean channelSms;
    private boolean channelPush;
    private boolean channelWhatsapp;
    private boolean channelRcs;
    private List<String> tagsUsed;
    private String searchTags;
    private UserSummaryResponse createdBy;
    private Instant submittedAt;
    private UserSummaryResponse reviewedBy;
    private Instant reviewedAt;
    private String rejectionReason;
    private String revisionMessage;
    private Instant publishedAt;
    private Instant createdAt;
    private Instant updatedAt;

    /** True when this consent was created with the linked broadcast-rule workflow. */
    private boolean linkedRuleIntent;

    /** Populated for checker pending list when {@link #linkedRuleIntent} is true and a linked rule exists. */
    private ConsentRuleResponse linkedRule;
    
    
    private List<ConsentTranslationDto> translations;
    private List<Map<String, String>> lastReviewedCombinations;
    private List<Map<String, String>> revisionFlaggedCombinations;
}
