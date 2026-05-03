package com.consentiq.service;

import com.consentiq.model.dto.response.ConsentResponse;
import com.consentiq.model.dto.response.UserSummaryResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.User;
import lombok.experimental.UtilityClass;

@UtilityClass
public class ConsentMapper {

    public ConsentResponse toResponse(Consent c) {
        if (c == null) {
            return null;
        }
        return ConsentResponse.builder()
                .id(c.getId())
                .consentId(c.getConsentId())
                .consentName(c.getConsentName())
                .description(c.getDescription())
                .category(c.getCategory())
                .validityPeriodDays(c.getValidityPeriodDays())
                .validityStartDate(c.getValidityStartDate())
                .validityEndDate(c.getValidityEndDate())
                .consentMessage(c.getConsentMessage())
                .status(c.getStatus())
                .version(c.getVersion())
                .type(c.getType())
                .deliveryChannels(c.getDeliveryChannels())
                .tagsUsed(c.getTagsUsed())
                .searchTags(c.getSearchTags())
                .createdBy(toUserSummary(c.getCreatedBy()))
                .submittedAt(c.getSubmittedAt())
                .reviewedBy(toUserSummary(c.getReviewedBy()))
                .reviewedAt(c.getReviewedAt())
                .rejectionReason(c.getRejectionReason())
                .revisionMessage(c.getRevisionMessage())
                .publishedAt(c.getPublishedAt())
                .createdAt(c.getCreatedAt())
                .updatedAt(c.getUpdatedAt())
                .build();
    }

    public UserSummaryResponse toUserSummary(User u) {
        if (u == null) {
            return null;
        }
        return UserSummaryResponse.builder()
                .id(u.getId())
                .fullName(u.getFullName())
                .email(u.getEmail())
                .role(u.getRole().name())
                .build();
    }
}
