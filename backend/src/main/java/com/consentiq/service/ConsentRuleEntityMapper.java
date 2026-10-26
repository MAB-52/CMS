//package com.consentiq.service;
//
//import com.consentiq.model.dto.response.ConsentRuleResponse;
//import com.consentiq.model.entity.ConsentRule;
//import lombok.experimental.UtilityClass;
//
///**
// * Maps {@link ConsentRule} entities to {@link ConsentRuleResponse} for API layers (shared by
// * {@link ConsentRuleService} and {@link ConsentMapper}).
// */
//@UtilityClass
//public class ConsentRuleEntityMapper {
//
//    public ConsentRuleResponse toResponse(ConsentRule r) {
//        if (r == null) {
//            return null;
//        }
//        return ConsentRuleResponse.builder()
//                .id(r.getId())
//                .ruleName(r.getRuleName())
//                .ruleDescription(r.getRuleDescription())
//                .ruleType(r.getRuleType())
//                .predefinedScenario(r.getPredefinedScenario())
//                .triggerEvent(r.getTriggerEvent())
//                .primarySegment(r.getPrimarySegment())
//                .additionalSegmentCodes(r.getAdditionalSegmentCodes())
//                .scheduleType(r.getScheduleType())
//                .scheduledAt(r.getScheduledAt())
//                .recurringCron(r.getRecurringCron())
//                .broadcastChannels(r.getBroadcastChannels())
//                .consentTemplateId(r.getConsentTemplate() != null ? r.getConsentTemplate().getId() : null)
//                .consentTemplateName(r.getConsentTemplate() != null ? r.getConsentTemplate().getConsentName() : null)
//                .status(r.getStatus())
//                .createdById(r.getCreatedBy().getId())
//                .createdByName(r.getCreatedBy().getFullName())
//                .createdAt(r.getCreatedAt())
//                .updatedAt(r.getUpdatedAt())
//                .submittedAt(r.getSubmittedAt())
//                .reviewedById(r.getReviewedBy() != null ? r.getReviewedBy().getId() : null)
//                .reviewedByName(r.getReviewedBy() != null ? r.getReviewedBy().getFullName() : null)
//                .reviewedAt(r.getReviewedAt())
//                .reviewerRemarks(r.getReviewerRemarks())
//                .rejectionReason(r.getRejectionReason())
//                .revisionReason(r.getRevisionReason())
//                .approvedAt(r.getApprovedAt())
//                .publishedAt(r.getPublishedAt())
//                .executionActive(r.isExecutionActive())
//                .executionRunning(r.isExecutionRunning())
//                .lastExecutedAt(r.getLastExecutedAt())
//                .nextExecutionAt(r.getNextExecutionAt())
//                .lastExecutionOutcome(r.getLastExecutionOutcome())
//                .lastExecutionSummary(r.getLastExecutionSummary())
//                .build();
//    }
//}

package com.consentiq.service;

import com.consentiq.model.dto.response.ConsentRuleResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentRule;
import com.consentiq.model.entity.ConsentTranslation;
import lombok.experimental.UtilityClass;

import java.util.List;

/**
 * Maps {@link ConsentRule} entities to {@link ConsentRuleResponse} for API layers (shared by
 * {@link ConsentRuleService} and {@link ConsentMapper}).
 */
@UtilityClass
public class ConsentRuleEntityMapper {

    public ConsentRuleResponse toResponse(ConsentRule r) {
        if (r == null) {
            return null;
        }
        return ConsentRuleResponse.builder()
                .id(r.getId())
                .ruleName(r.getRuleName())
                .ruleDescription(r.getRuleDescription())
                .ruleType(r.getRuleType())
                .predefinedScenario(r.getPredefinedScenario())
                .triggerEvent(r.getTriggerEvent())
                .primarySegment(r.getPrimarySegment())
                .additionalSegmentCodes(r.getAdditionalSegmentCodes())
                .scheduleType(r.getScheduleType())
                .scheduledAt(r.getScheduledAt())
                .recurringCron(r.getRecurringCron())
                .broadcastChannels(r.getBroadcastChannels())
                .consentTemplateId(r.getConsentTemplate() != null ? r.getConsentTemplate().getId() : null)
                .consentTemplateName(r.getConsentTemplate() != null ? r.getConsentTemplate().getConsentName() : null)
                .consentTemplateLanguages(toTemplateLanguages(r.getConsentTemplate()))
                .status(r.getStatus())
                .createdById(r.getCreatedBy().getId())
                .createdByName(r.getCreatedBy().getFullName())
                .createdAt(r.getCreatedAt())
                .updatedAt(r.getUpdatedAt())
                .submittedAt(r.getSubmittedAt())
                .reviewedById(r.getReviewedBy() != null ? r.getReviewedBy().getId() : null)
                .reviewedByName(r.getReviewedBy() != null ? r.getReviewedBy().getFullName() : null)
                .reviewedAt(r.getReviewedAt())
                .reviewerRemarks(r.getReviewerRemarks())
                .rejectionReason(r.getRejectionReason())
                .revisionReason(r.getRevisionReason())
                .approvedAt(r.getApprovedAt())
                .publishedAt(r.getPublishedAt())
                .executionActive(r.isExecutionActive())
                .executionRunning(r.isExecutionRunning())
                .lastExecutedAt(r.getLastExecutedAt())
                .nextExecutionAt(r.getNextExecutionAt())
                .lastExecutionOutcome(r.getLastExecutionOutcome())
                .lastExecutionSummary(r.getLastExecutionSummary())
                .build();
    }

    /**
     * Distinct language codes available on the linked consent template, uppercased for display
     * (e.g. "EN", "HI"), matching the existing broadcastChannels display convention.
     * Empty list when no template is linked or no translations exist yet.
     */
    private static List<String> toTemplateLanguages(Consent template) {
        if (template == null || template.getTranslations() == null || template.getTranslations().isEmpty()) {
            return List.of();
        }
        return template.getTranslations().stream()
                .map(ConsentTranslation::getLanguageCode)
                .filter(java.util.Objects::nonNull)
                .map(String::toUpperCase)
                .distinct()
                .toList();
    }
}
