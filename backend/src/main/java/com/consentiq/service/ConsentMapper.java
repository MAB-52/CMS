//package com.consentiq.service;
//
//import com.consentiq.model.dto.response.ConsentResponse;
//import com.consentiq.model.dto.response.ConsentRuleResponse;
//import com.consentiq.model.dto.response.UserSummaryResponse;
//import com.consentiq.model.entity.Consent;
//import com.consentiq.model.entity.ConsentRule;
//import com.consentiq.model.entity.User;
//import lombok.experimental.UtilityClass;
//
//@UtilityClass
//public class ConsentMapper {
//
//    public ConsentResponse toResponse(Consent c) {
//        if (c == null) {
//            return null;
//        }
//        return ConsentResponse.builder()
//                .id(c.getId())
//                .consentId(c.getConsentId())
//                .consentName(c.getConsentName())
//                .description(c.getDescription())
//                .category(c.getCategory())
//                .validityPeriodDays(c.getValidityPeriodDays())
//                .validityStartDate(c.getValidityStartDate())
//                .validityEndDate(c.getValidityEndDate())
//                .consentMessage(c.getConsentMessage())
//                .status(c.getStatus())
//                .channelEmail(c.isChannelEmail())
//                .channelSms(c.isChannelSms())
//                .channelPush(c.isChannelPush())
//                .channelWhatsapp(c.isChannelWhatsapp())
//                .channelRcs(c.isChannelRcs())
//                
//                .tagsUsed(c.getTagsUsed())
//                .searchTags(c.getSearchTags())
//                .createdBy(toUserSummary(c.getCreatedBy()))
//                .submittedAt(c.getSubmittedAt())
//                .reviewedBy(toUserSummary(c.getReviewedBy()))
//                .reviewedAt(c.getReviewedAt())
//                .rejectionReason(c.getRejectionReason())
//                .revisionMessage(c.getRevisionMessage())
//                .publishedAt(c.getPublishedAt())
//                .createdAt(c.getCreatedAt())
//                .updatedAt(c.getUpdatedAt())
//                .linkedRuleIntent(c.isLinkedRuleIntent())
//                .linkedRule(toLinkedRuleResponse(c))
//                .build();
//    }
//
//    private static ConsentRuleResponse toLinkedRuleResponse(Consent c) {
//        if (!c.isLinkedRuleIntent()) {
//            return null;
//        }
//        ConsentRule lr = c.getLinkedRule();
//        if (lr == null) {
//            return null;
//        }
//        return ConsentRuleEntityMapper.toResponse(lr);
//    }
//
//    public UserSummaryResponse toUserSummary(User u) {
//        if (u == null) {
//            return null;
//        }
//        return UserSummaryResponse.builder()
//                .id(u.getId())
//                .fullName(u.getFullName())
//                .email(u.getEmail())
//                .role(u.getRole().name())
//                .build();
//    }
//}

package com.consentiq.service;

import com.consentiq.model.dto.response.ConsentChannelRenderDto;
import com.consentiq.model.dto.response.ConsentResponse;
import com.consentiq.model.dto.response.ConsentRuleResponse;
import com.consentiq.model.dto.response.ConsentTranslationDto;
import com.consentiq.model.dto.response.UserSummaryResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentChannelRender;
import com.consentiq.model.entity.ConsentRule;
import com.consentiq.model.entity.ConsentTranslation;
import com.consentiq.model.entity.User;
import lombok.experimental.UtilityClass;

import java.util.List;
import java.util.Map;

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
                .channelEmail(c.isChannelEmail())
                .channelSms(c.isChannelSms())
                .channelPush(c.isChannelPush())
                .channelWhatsapp(c.isChannelWhatsapp())
                .channelRcs(c.isChannelRcs())
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
                .linkedRuleIntent(c.isLinkedRuleIntent())
                .linkedRule(toLinkedRuleResponse(c))
                .translations(toTranslationDtos(c))
                .lastReviewedCombinations(c.getLastReviewedCombinations())
                .revisionFlaggedCombinations(c.getRevisionFlaggedCombinations())
                .build();
    }

    private static List<ConsentTranslationDto> toTranslationDtos(Consent c) {
        if (c.getTranslations() == null || c.getTranslations().isEmpty()) {
            return List.of();
        }
        return c.getTranslations().stream()
                .map(ConsentMapper::toTranslationDto)
                .toList();
    }

    private static ConsentTranslationDto toTranslationDto(ConsentTranslation t) {
        List<ConsentChannelRenderDto> renders =
                t.getRenders() == null
                        ? List.of()
                        : t.getRenders().stream()
                                .map(ConsentMapper::toRenderDto)
                                .toList();
        return ConsentTranslationDto.builder()
                .languageCode(t.getLanguageCode())
                .content(t.getContent())
                .renders(renders)
                .build();
    }

    private static ConsentChannelRenderDto toRenderDto(ConsentChannelRender r) {
        return ConsentChannelRenderDto.builder()
                .channel(r.getChannel())
                .renderedContent(r.getRenderedContent())
                .build();
    }

    private static ConsentRuleResponse toLinkedRuleResponse(Consent c) {
        if (!c.isLinkedRuleIntent()) {
            return null;
        }
        ConsentRule lr = c.getLinkedRule();
        if (lr == null) {
            return null;
        }
        return ConsentRuleEntityMapper.toResponse(lr);
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

