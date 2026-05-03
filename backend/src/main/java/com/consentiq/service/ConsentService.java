package com.consentiq.service;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.ConsentType;
import com.consentiq.enums.UserRole;
import com.consentiq.exception.ConsentNotFoundException;
import com.consentiq.exception.DuplicateConsentException;
import com.consentiq.exception.InvalidConsentStateException;
import com.consentiq.exception.UnauthorizedActionException;
import com.consentiq.model.dto.request.ConsentCreateRequest;
import com.consentiq.model.dto.request.ConsentReviewRequest;
import com.consentiq.model.dto.request.ConsentUpdateRequest;
import com.consentiq.model.dto.response.CheckerStatsResponse;
import com.consentiq.model.dto.response.ConsentDiffResponse;
import com.consentiq.model.dto.response.ConsentResponse;
import com.consentiq.model.dto.response.ConsentVersionResponse;
import com.consentiq.model.dto.response.MakerStatsResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentVersion;
import com.consentiq.model.entity.User;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.ConsentVersionRepository;
import com.consentiq.repository.UserRepository;
import com.consentiq.security.UserDetailsImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConsentService {

    private final ConsentRepository consentRepository;
    private final ConsentVersionRepository consentVersionRepository;
    private final UserRepository userRepository;
    private final ConsentIdGeneratorService consentIdGeneratorService;
    private final AuditService auditService;

    @Transactional
    public ConsentResponse createConsent(ConsentCreateRequest request, Long userId, HttpServletRequest http) {
        log.info("Creating consent | user={} name={}", userId, request.getConsentName());
        User user = loadUser(userId);
        assertMakerOrAdmin(user);
        if (consentRepository.existsByConsentNameIgnoreCase(request.getConsentName())) {
            throw new DuplicateConsentException(request.getConsentName());
        }
        String consentId = consentIdGeneratorService.generateNextId();
        ConsentType type = request.getType() != null ? request.getType() : ConsentType.NEW_TEMPLATE;
        Consent entity =
                Consent.builder()
                        .consentId(consentId)
                        .consentName(request.getConsentName())
                        .description(request.getDescription())
                        .category(request.getCategory())
                        .validityPeriodDays(request.getValidityPeriodDays())
                        .validityStartDate(request.getValidityStartDate())
                        .validityEndDate(request.getValidityEndDate())
                        .consentMessage(request.getConsentMessage())
                        .status(ConsentStatus.DRAFT)
                        .version(1)
                        .type(type)
                        .deliveryChannels(
                                request.getDeliveryChannels() == null
                                        ? new ArrayList<>()
                                        : new ArrayList<>(request.getDeliveryChannels()))
                        .tagsUsed(
                                request.getTagsUsed() == null
                                        ? new ArrayList<>()
                                        : new ArrayList<>(request.getTagsUsed()))
                        .searchTags(request.getSearchTags())
                        .createdBy(user)
                        .build();
        Consent saved = consentRepository.save(entity);
        auditService.log(
                userId,
                "CONSENT_CREATED",
                "CONSENT",
                saved.getId(),
                saved.getConsentName(),
                "Consent draft created",
                http);
        log.info("Consent created | id={} dbId={}", saved.getConsentId(), saved.getId());
        return ConsentMapper.toResponse(saved);
    }

    @Transactional
    public ConsentResponse updateConsent(Long dbId, ConsentUpdateRequest request, Long userId, HttpServletRequest http) {
        log.info("Updating consent | dbId={} user={}", dbId, userId);
        Consent consent = findConsent(dbId);
        validateOwner(consent, userId);
        validateEditableStatus(consent.getStatus());
        if (consentRepository.existsByConsentNameIgnoreCaseAndIdNot(request.getConsentName(), dbId)) {
            throw new DuplicateConsentException(request.getConsentName());
        }
        User user = loadUser(userId);
        Map<String, Map<String, String>> changed = computeDiff(consent, request);
        saveVersionSnapshot(consent, user, changed);
        applyUpdates(consent, request, true);
        Consent saved = consentRepository.save(consent);
        auditService.log(
                userId,
                "CONSENT_UPDATED",
                "CONSENT",
                saved.getId(),
                saved.getConsentName(),
                "Consent updated",
                http);
        log.info("Consent updated | id={} version={}", saved.getConsentId(), saved.getVersion());
        return ConsentMapper.toResponse(saved);
    }

    @Transactional
    public ConsentResponse saveDraft(Long dbId, ConsentUpdateRequest request, Long userId, HttpServletRequest http) {
        log.info("Updating consent (draft save) | dbId={} user={}", dbId, userId);
        Consent consent = findConsent(dbId);
        validateOwner(consent, userId);
        validateEditableStatus(consent.getStatus());
        if (consentRepository.existsByConsentNameIgnoreCaseAndIdNot(request.getConsentName(), dbId)) {
            throw new DuplicateConsentException(request.getConsentName());
        }
        User user = loadUser(userId);
        Map<String, Map<String, String>> changed = computeDiff(consent, request);
        saveVersionSnapshot(consent, user, changed);
        applyUpdates(consent, request, true);
        Consent saved = consentRepository.save(consent);
        auditService.log(
                userId,
                "CONSENT_DRAFT_SAVED",
                "CONSENT",
                saved.getId(),
                saved.getConsentName(),
                "Draft saved",
                http);
        log.debug("Draft auto-saved | id={}", saved.getConsentId());
        return ConsentMapper.toResponse(saved);
    }

    @Transactional
    public ConsentResponse submitForApproval(Long dbId, Long userId, HttpServletRequest http) {
        log.info("Submitting for approval | dbId={} user={}", dbId, userId);
        Consent consent = findConsent(dbId);
        validateOwner(consent, userId);
        if (consent.getStatus() != ConsentStatus.DRAFT && consent.getStatus() != ConsentStatus.REVISION_REQUESTED) {
            throw new InvalidConsentStateException(consent.getStatus().name(), "SUBMIT");
        }
        if (!StringUtils.hasText(consent.getConsentMessage())) {
            throw new IllegalArgumentException("Consent message cannot be empty before submitting for approval");
        }
        if (consent.getDeliveryChannels() == null || consent.getDeliveryChannels().isEmpty()) {
            throw new IllegalArgumentException("At least one delivery channel must be selected");
        }
        consent.setStatus(ConsentStatus.PENDING_APPROVAL);
        consent.setSubmittedAt(Instant.now());
        Consent saved = consentRepository.save(consent);
        auditService.log(
                userId,
                "CONSENT_SUBMITTED",
                "CONSENT",
                saved.getId(),
                saved.getConsentName(),
                "Submitted for approval",
                http);
        log.info("Consent submitted | id={}", saved.getConsentId());
        return ConsentMapper.toResponse(saved);
    }

    @Transactional
    public ConsentResponse reviewConsent(Long dbId, ConsentReviewRequest request, Long checkerId, HttpServletRequest http) {
        log.info("Review action={} | dbId={} checker={}", request.getAction(), dbId, checkerId);
        User checker = loadUser(checkerId);
        if (checker.getRole() != UserRole.CHECKER && checker.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("REVIEW_CONSENT");
        }
        Consent consent = findConsent(dbId);
        String action = request.getAction().trim().toUpperCase(Locale.ROOT);

        if ("PUBLISH".equals(action)) {
            if (consent.getStatus() != ConsentStatus.APPROVED) {
                throw new InvalidConsentStateException(consent.getStatus().name(), "PUBLISH");
            }
            consent.setStatus(ConsentStatus.PUBLISHED);
            consent.setPublishedAt(Instant.now());
            Consent saved = consentRepository.save(consent);
            auditService.log(
                    checkerId,
                    "CONSENT_PUBLISHED",
                    "CONSENT",
                    saved.getId(),
                    saved.getConsentName(),
                    "Consent published",
                    http);
            log.info("Consent PUBLISHED | id={}", saved.getConsentId());
            return ConsentMapper.toResponse(saved);
        }

        if (consent.getStatus() != ConsentStatus.PENDING_APPROVAL) {
            throw new InvalidConsentStateException(consent.getStatus().name(), action);
        }
        if (consent.getCreatedBy().getId().equals(checkerId)) {
            throw new UnauthorizedActionException("You cannot approve a consent that you created");
        }

        switch (action) {
            case "APPROVE" -> {
                consent.setStatus(ConsentStatus.APPROVED);
                consent.setReviewedBy(checker);
                consent.setReviewedAt(Instant.now());
                consent.setRejectionReason(null);
                log.info("Consent APPROVED | id={}", consent.getConsentId());
                auditService.log(
                        checkerId,
                        "CONSENT_APPROVED",
                        "CONSENT",
                        consent.getId(),
                        consent.getConsentName(),
                        "Approved by checker",
                        http);
            }
            case "REJECT" -> {
                if (!StringUtils.hasText(request.getReason())) {
                    throw new IllegalArgumentException("Rejection reason is required");
                }
                consent.setStatus(ConsentStatus.REJECTED);
                consent.setRejectionReason(request.getReason());
                consent.setReviewedBy(checker);
                consent.setReviewedAt(Instant.now());
                log.info("Consent REJECTED | id={} reason={}", consent.getConsentId(), request.getReason());
                auditService.log(
                        checkerId,
                        "CONSENT_REJECTED",
                        "CONSENT",
                        consent.getId(),
                        consent.getConsentName(),
                        request.getReason(),
                        http);
            }
            case "REQUEST_REVISION" -> {
                if (!StringUtils.hasText(request.getRevisionMessage())) {
                    throw new IllegalArgumentException("Revision message is required when requesting changes");
                }
                consent.setStatus(ConsentStatus.REVISION_REQUESTED);
                consent.setRevisionMessage(request.getRevisionMessage());
                consent.setReviewedBy(checker);
                consent.setReviewedAt(Instant.now());
                log.info("Revision requested | id={}", consent.getConsentId());
                auditService.log(
                        checkerId,
                        "CONSENT_REVISION_REQUESTED",
                        "CONSENT",
                        consent.getId(),
                        consent.getConsentName(),
                        request.getRevisionMessage(),
                        http);
            }
            default -> throw new IllegalArgumentException(
                    "Unknown action '"
                            + request.getAction()
                            + "'. Valid values: APPROVE, REJECT, REQUEST_REVISION, PUBLISH");
        }
        Consent saved = consentRepository.save(consent);
        return ConsentMapper.toResponse(saved);
    }

    @Transactional(readOnly = true)
    public ConsentDiffResponse getConsentDiff(Long dbId) {
        Consent consent = findConsent(dbId);
        ConsentVersion latest =
                consentVersionRepository
                        .findTopByConsent_IdOrderByChangedAtDesc(dbId)
                        .orElse(null);
        if (latest == null || latest.getChangedFields() == null || latest.getChangedFields().isEmpty()) {
            log.debug("Diff computed | dbId={} changes={}", dbId, 0);
            int prev = consent.getVersion() > 1 ? consent.getVersion() - 1 : 1;
            return ConsentDiffResponse.builder()
                    .consentDbId(consent.getId())
                    .consentName(consent.getConsentName())
                    .currentVersion(consent.getVersion())
                    .previousVersion(prev)
                    .differences(List.of())
                    .build();
        }
        List<ConsentDiffResponse.FieldDiff> diffs = new ArrayList<>();
        for (Map.Entry<String, Map<String, String>> e : latest.getChangedFields().entrySet()) {
            Map<String, String> pair = e.getValue();
            String oldV = pair.getOrDefault("old", "");
            String newV = pair.getOrDefault("new", "");
            diffs.add(
                    ConsentDiffResponse.FieldDiff.builder()
                            .fieldName(e.getKey())
                            .fieldLabel(labelForField(e.getKey()))
                            .oldValue(oldV)
                            .newValue(newV)
                            .modified(!Objects.equals(oldV, newV))
                            .build());
        }
        int prevVer = consent.getVersion() > 1 ? consent.getVersion() - 1 : 1;
        log.debug("Diff computed | dbId={} changes={}", dbId, diffs.size());
        return ConsentDiffResponse.builder()
                .consentDbId(consent.getId())
                .consentName(consent.getConsentName())
                .currentVersion(consent.getVersion())
                .previousVersion(prevVer)
                .differences(diffs)
                .build();
    }

    @Transactional(readOnly = true)
    public PagedResponse<ConsentResponse> getMyConsents(Long userId, int page, int size, ConsentStatus status) {
        User user = loadUser(userId);
        if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("VIEW_MY_CONSENTS");
        }
        PageRequest pr = PageRequest.of(page, size);
        Page<Consent> result =
                status == null
                        ? consentRepository.findByCreatedByIdOrderByUpdatedAtDesc(userId, pr)
                        : consentRepository.findByCreatedByIdAndStatusOrderByUpdatedAtDesc(userId, status, pr);
        List<ConsentResponse> content =
                result.getContent().stream().map(ConsentMapper::toResponse).collect(Collectors.toList());
        return PagedResponse.<ConsentResponse>builder()
                .content(content)
                .totalElements(result.getTotalElements())
                .totalPages(result.getTotalPages())
                .currentPage(result.getNumber())
                .pageSize(result.getSize())
                .hasNext(result.hasNext())
                .hasPrevious(result.hasPrevious())
                .build();
    }

    @Transactional(readOnly = true)
    public MakerStatsResponse getMakerStats(Long userId) {
        User user = loadUser(userId);
        if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("VIEW_MAKER_STATS");
        }
        return MakerStatsResponse.builder()
                .total(consentRepository.countByCreatedById(userId))
                .draft(consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.DRAFT))
                .pendingApproval(
                        consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.PENDING_APPROVAL))
                .approved(consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.APPROVED))
                .published(consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.PUBLISHED))
                .revisionRequested(
                        consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.REVISION_REQUESTED))
                .build();
    }

    @Transactional(readOnly = true)
    public CheckerStatsResponse getCheckerStats(Long checkerId) {
        User user = loadUser(checkerId);
        if (user.getRole() != UserRole.CHECKER && user.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("VIEW_CHECKER_STATS");
        }
        ZoneId zone = ZoneId.of("Asia/Kolkata");
        Instant startOfDay = LocalDate.now(zone).atStartOfDay(zone).toInstant();
        long pending =
                consentRepository.countPendingApprovalExcludingCreator(ConsentStatus.PENDING_APPROVAL, checkerId);
        long approvedToday = consentRepository.countApprovedByCheckerSince(checkerId, startOfDay);
        long rejectedTotal = consentRepository.countByReviewedBy_IdAndStatus(checkerId, ConsentStatus.REJECTED);
        long totalReviewed = consentRepository.countByReviewedBy_Id(checkerId);
        return CheckerStatsResponse.builder()
                .pendingReview(pending)
                .approvedToday(approvedToday)
                .rejectedTotal(rejectedTotal)
                .totalReviewed(totalReviewed)
                .build();
    }

    @Transactional(readOnly = true)
    public PagedResponse<ConsentResponse> getAllConsents(
            int page,
            int size,
            ConsentStatus status,
            ConsentCategory category,
            Long userId,
            UserRole role) {
        PageRequest pr = PageRequest.of(page, size);
        Page<Consent> result;
        boolean makerScope = role == UserRole.MAKER;
        if (makerScope) {
            if (status != null && category != null) {
                result = consentRepository.findByCreatedByIdAndStatusAndCategory(userId, status, category, pr);
            } else if (status != null) {
                result = consentRepository.findByCreatedByIdAndStatus(userId, status, pr);
            } else if (category != null) {
                result = consentRepository.findByCreatedByIdAndCategory(userId, category, pr);
            } else {
                result = consentRepository.findByCreatedById(userId, pr);
            }
        } else {
            if (status != null && category != null) {
                result = consentRepository.findByStatusAndCategory(status, category, pr);
            } else if (status != null) {
                result = consentRepository.findByStatus(status, pr);
            } else if (category != null) {
                result = consentRepository.findByCategory(category, pr);
            } else {
                result = consentRepository.findAll(pr);
            }
        }
        List<ConsentResponse> content =
                result.getContent().stream().map(ConsentMapper::toResponse).collect(Collectors.toList());
        return PagedResponse.<ConsentResponse>builder()
                .content(content)
                .totalElements(result.getTotalElements())
                .totalPages(result.getTotalPages())
                .currentPage(result.getNumber())
                .pageSize(result.getSize())
                .hasNext(result.hasNext())
                .hasPrevious(result.hasPrevious())
                .build();
    }

    @Transactional(readOnly = true)
    public List<ConsentResponse> getPendingApprovals(Long checkerId) {
        List<Consent> list =
                consentRepository.findPendingApprovalExcludingCreator(ConsentStatus.PENDING_APPROVAL, checkerId);
        log.info("Pending approvals fetched | checker={} count={}", checkerId, list.size());
        return list.stream().map(ConsentMapper::toResponse).collect(Collectors.toList());
    }

    @Transactional
    public void deleteConsent(Long dbId, Long userId, HttpServletRequest http) {
        Consent consent = findConsent(dbId);
        validateOwner(consent, userId);
        if (consent.getStatus() != ConsentStatus.DRAFT) {
            throw new InvalidConsentStateException(consent.getStatus().name(), "DELETE");
        }
        log.warn("Consent deleted | id={} by user={}", consent.getConsentId(), userId);
        auditService.log(
                userId,
                "CONSENT_DELETED",
                "CONSENT",
                consent.getId(),
                consent.getConsentName(),
                "Consent deleted",
                http);
        consentRepository.delete(consent);
    }

    @Transactional(readOnly = true)
    public ConsentResponse getConsentById(Long dbId) {
        return ConsentMapper.toResponse(findConsent(dbId));
    }

    @Transactional(readOnly = true)
    public List<ConsentVersionResponse> getVersionHistory(Long dbId) {
        findConsent(dbId);
        return consentVersionRepository.findByConsent_IdOrderByChangedAtDesc(dbId).stream()
                .map(
                        v ->
                                ConsentVersionResponse.builder()
                                        .id(v.getId())
                                        .versionNumber(v.getVersionNumber())
                                        .consentMessageSnapshot(v.getConsentMessageSnapshot())
                                        .changedFields(v.getChangedFields())
                                        .changedBy(ConsentMapper.toUserSummary(v.getChangedBy()))
                                        .changedAt(v.getChangedAt())
                                        .build())
                .collect(Collectors.toList());
    }

    public String previewNextConsentId() {
        return consentIdGeneratorService.previewNextId();
    }

    private Consent findConsent(Long dbId) {
        return consentRepository.findById(dbId).orElseThrow(() -> new ConsentNotFoundException(dbId));
    }

    private User loadUser(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    private void assertMakerOrAdmin(User user) {
        if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("CREATE_CONSENT");
        }
    }

    private void validateOwner(Consent consent, Long userId) {
        if (!consent.getCreatedBy().getId().equals(userId)) {
            User current = loadUser(userId);
            if (current.getRole() != UserRole.ADMIN) {
                throw new UnauthorizedActionException("EDIT_CONSENT");
            }
        }
    }

    private void validateEditableStatus(ConsentStatus status) {
        if (status != ConsentStatus.DRAFT && status != ConsentStatus.REVISION_REQUESTED) {
            throw new InvalidConsentStateException(status.name(), "UPDATE");
        }
    }

    private void saveVersionSnapshot(Consent old, User changedBy, Map<String, Map<String, String>> changedFields) {
        Map<String, Map<String, String>> fieldsToStore =
                changedFields.isEmpty() ? new HashMap<>() : new LinkedHashMap<>(changedFields);
        ConsentVersion version =
                ConsentVersion.builder()
                        .consent(old)
                        .versionNumber(old.getVersion() + 1)
                        .consentMessageSnapshot(old.getConsentMessage())
                        .changedFields(fieldsToStore)
                        .changedBy(changedBy)
                        .changedAt(Instant.now())
                        .build();
        consentVersionRepository.save(version);
    }

    private void applyUpdates(Consent c, ConsentUpdateRequest r, boolean bumpVersion) {
        c.setConsentName(r.getConsentName());
        c.setDescription(r.getDescription());
        c.setCategory(r.getCategory());
        c.setValidityPeriodDays(r.getValidityPeriodDays());
        c.setValidityStartDate(r.getValidityStartDate());
        c.setValidityEndDate(r.getValidityEndDate());
        c.setConsentMessage(r.getConsentMessage());
        c.setDeliveryChannels(
                r.getDeliveryChannels() == null ? new ArrayList<>() : new ArrayList<>(r.getDeliveryChannels()));
        c.setTagsUsed(r.getTagsUsed() == null ? new ArrayList<>() : new ArrayList<>(r.getTagsUsed()));
        c.setSearchTags(r.getSearchTags());
        if (bumpVersion) {
            c.setVersion(c.getVersion() + 1);
            if (c.getVersion() > 1) {
                c.setType(ConsentType.VERSION_UPDATE);
            }
        }
        if (r.getType() != null && c.getVersion() <= 1) {
            c.setType(r.getType());
        }
    }

    private Map<String, Map<String, String>> computeDiff(Consent old, ConsentUpdateRequest r) {
        Map<String, Map<String, String>> map = new LinkedHashMap<>();
        putIfChanged(map, "consentName", str(old.getConsentName()), str(r.getConsentName()));
        putIfChanged(map, "description", str(old.getDescription()), str(r.getDescription()));
        putIfChanged(map, "category", str(old.getCategory()), str(r.getCategory()));
        putIfChanged(map, "validityPeriodDays", str(old.getValidityPeriodDays()), str(r.getValidityPeriodDays()));
        putIfChanged(map, "validityStartDate", str(old.getValidityStartDate()), str(r.getValidityStartDate()));
        putIfChanged(map, "validityEndDate", str(old.getValidityEndDate()), str(r.getValidityEndDate()));
        putIfChanged(map, "consentMessage", str(old.getConsentMessage()), str(r.getConsentMessage()));
        putIfChanged(
                map,
                "deliveryChannels",
                str(old.getDeliveryChannels()),
                str(r.getDeliveryChannels()));
        putIfChanged(map, "tagsUsed", str(old.getTagsUsed()), str(r.getTagsUsed()));
        putIfChanged(map, "searchTags", str(old.getSearchTags()), str(r.getSearchTags()));
        return map;
    }

    private void putIfChanged(Map<String, Map<String, String>> map, String key, String oldV, String newV) {
        if (!Objects.equals(oldV, newV)) {
            map.put(key, Map.of("old", oldV == null ? "" : oldV, "new", newV == null ? "" : newV));
        }
    }

    private String str(Object o) {
        return o == null ? "" : String.valueOf(o);
    }

    private String labelForField(String field) {
        return switch (field) {
            case "consentName" -> "Consent Name";
            case "description" -> "Description";
            case "category" -> "Category";
            case "validityPeriodDays" -> "Validity Period (Days)";
            case "validityStartDate" -> "Validity Start Date";
            case "validityEndDate" -> "Validity End Date";
            case "consentMessage" -> "Consent Message";
            case "deliveryChannels" -> "Delivery Channels";
            case "tagsUsed" -> "Tags Used";
            case "searchTags" -> "Search Tags";
            default -> field;
        };
    }

    public static Long currentUserId() {
        Object p = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (p instanceof UserDetailsImpl u) {
            return u.getId();
        }
        return null;
    }
}
