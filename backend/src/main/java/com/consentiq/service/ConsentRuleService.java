package com.consentiq.service;

import com.consentiq.enums.*;
import com.consentiq.exception.InvalidWorkflowStateException;
import com.consentiq.exception.UnauthorizedActionException;
import com.consentiq.model.dto.request.ConsentRuleLinkedDraftRequest;
import com.consentiq.model.dto.request.ConsentRuleUpsertRequest;
import com.consentiq.model.dto.request.WorkflowReviewRequest;
import com.consentiq.model.dto.response.ConsentRuleResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentRule;
import com.consentiq.model.entity.User;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.ConsentRuleRepository;
import com.consentiq.repository.UserRepository;
import com.consentiq.util.RuleNextRunUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.util.ArrayList;
import java.util.EnumSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

/**
 * Service handling the full lifecycle of a ConsentRule:
 *
 *  DRAFT  →  [saveDraft*]  →  DRAFT
 *  DRAFT / REVISION_REQUESTED  →  [submitForApproval]  →  PENDING_CHECKER_APPROVAL
 *  PENDING_CHECKER_APPROVAL    →  [reviewRule APPROVE]  →  APPROVED
 *  PENDING_CHECKER_APPROVAL    →  [reviewRule REJECT]   →  REJECTED
 *  PENDING_CHECKER_APPROVAL    →  [reviewRule REQUEST_REVISION] → REVISION_REQUESTED
 *  APPROVED                    →  [publishLive]         →  LIVE
 *
 * Key fixes applied vs. previous version:
 *  1. Consent template resolution is separate from {@code applyNonTemplateFieldsFromUpsert} /
 *     {@link #applyConsentTemplateFromId}; {@link #applyFields} composes both for standalone rules.
 *  2. saveDraft vs updateRule are now semantically distinct.
 *  3. validateForSubmit() is separate from validateDraft() so drafts are lenient
 *     and submissions are strict.
 *  4. REJECTED rules require an explicit reopen (revisionRequest cycle) before
 *     further edits — they are no longer directly editable by the maker.
 *  5. Duplicate repository method overload removed (List vs Page ambiguity fixed
 *     in ConsentRuleRepository).
 *  6. Size clamping applied consistently to all paginated endpoints.
 *  7. All state transitions and errors are logged at appropriate levels.
 */
@Service
@RequiredArgsConstructor
public class ConsentRuleService {

    private static final Logger log = LoggerFactory.getLogger(ConsentRuleService.class);

    @PersistenceContext
    private EntityManager entityManager;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private static final int MAX_PAGE_SIZE = 50;

    /** Statuses that the admin rule engine cares about. */
    private static final List<ConsentRuleStatus> ADMIN_ENGINE_STATUSES =
            List.of(ConsentRuleStatus.APPROVED, ConsentRuleStatus.LIVE);

    /** Statuses in which a maker is allowed to edit a rule. */
    private static final EnumSet<ConsentRuleStatus> EDITABLE_STATUSES =
            EnumSet.of(ConsentRuleStatus.DRAFT, ConsentRuleStatus.REVISION_REQUESTED);

    private final ConsentRuleRepository consentRuleRepository;
    private final UserRepository userRepository;
    private final ConsentRepository consentRepository;
    private final AuditService auditService;
    private final CustomerSegmentationService segmentationService;

    // ─────────────────────────────────────────────────────────────────────────
    // MAKER OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Creates a new rule as DRAFT.
     * Runs full field validation including consent template lookup.
     */
    @Transactional
    public ConsentRuleResponse createRule(
            ConsentRuleUpsertRequest req, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering createRule | params: userId={}", userId);
        log.info("User={} | action=createRule | entity=ConsentRule | id=n/a", cu);
        log.debug("Transaction started | method=createRule | id=n/a");
        try {
            log.info("[RULE] createRule — userId={}", userId);
            User user = loadUser(userId);
            assertMakerOrAdmin(user);

            validateDraft(req);

            ConsentRule entity = new ConsentRule();
            entity.setStatus(ConsentRuleStatus.DRAFT);
            applyFields(entity, req, user);

            log.info("Executing DB query | method=save | param=ConsentRule");
            ConsentRule saved = consentRuleRepository.save(entity);
            log.info("DB query completed | method=save | result=completed");
            log.info("[RULE] Created rule id={} name='{}' by userId={}", saved.getId(), saved.getRuleName(), userId);

            auditService.log(userId, "RULE_CREATED", "CONSENT_RULE", saved.getId(),
                    saved.getRuleName(), "Rule draft created", http);

            ConsentRuleResponse res = toResponse(saved);
            log.debug("Transaction completing | method=createRule | id=n/a");
            log.debug("Exiting createRule | result=id={}", saved.getId());
            return res;
        } catch (Exception e) {
            log.error("Exception in createRule | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Full update of a rule — replaces all fields.
     * Only allowed on DRAFT or REVISION_REQUESTED rules owned by the caller.
     */
    @Transactional
    public ConsentRuleResponse updateRule(
            Long id, ConsentRuleUpsertRequest req, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering updateRule | params: ruleId={},userId={}", id, userId);
        log.info("User={} | action=updateRule | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=updateRule | id={}", id);
        try {
        log.info("[RULE] updateRule — ruleId={} userId={}", id, userId);
        ConsentRule rule = findRule(id);
        assertOwnerOrAdmin(rule, userId);
        assertEditable(rule.getStatus());
        validateDraft(req);

        applyFields(rule, req, rule.getCreatedBy());

        log.info("Executing DB query | method=save | param=ConsentRule");
        ConsentRule saved = consentRuleRepository.save(rule);
        log.info("DB query completed | method=save | result=completed");
        log.info("[RULE] Updated rule id={} status={}", saved.getId(), saved.getStatus());

        auditService.log(userId, "RULE_UPDATED", "CONSENT_RULE", saved.getId(),
                saved.getRuleName(), "Rule updated", http);

        ConsentRuleResponse res = toResponse(saved);
        log.debug("Transaction completing | method=updateRule | id={}", id);
        log.debug("Exiting updateRule | result=id={}", saved.getId());
        return res;
        } catch (Exception e) {
            log.error("Exception in updateRule | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Saves a draft without changing status — semantically a partial/autosave.
     * Runs the same validation as updateRule so data is always consistent,
     * but is a distinct audit event.
     */
    @Transactional
    public ConsentRuleResponse saveDraft(
            Long id, ConsentRuleUpsertRequest req, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering saveDraft | params: ruleId={},userId={}", id, userId);
        log.info("User={} | action=saveDraft | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=saveDraft | id={}", id);
        try {
        log.info("[RULE] saveDraft — ruleId={} userId={}", id, userId);
        ConsentRule rule = findRule(id);
        assertOwnerOrAdmin(rule, userId);
        assertEditable(rule.getStatus());
        validateDraft(req);

        applyFields(rule, req, rule.getCreatedBy());

        log.info("Executing DB query | method=save | param=ConsentRule");
        ConsentRule saved = consentRuleRepository.save(rule);
        log.info("DB query completed | method=save | result=completed");
        log.info("[RULE] Draft saved ruleId={}", saved.getId());

        auditService.log(userId, "RULE_DRAFT_SAVED", "CONSENT_RULE", saved.getId(),
                saved.getRuleName(), "Draft saved", http);

        ConsentRuleResponse res = toResponse(saved);
        log.debug("Transaction completing | method=saveDraft | id={}", id);
        log.debug("Exiting saveDraft | result=id={}", saved.getId());
        return res;
        } catch (Exception e) {
            log.error("Exception in saveDraft | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Submits a rule for checker approval.
     * Runs full submission-level validation (stricter than draft validation).
     * Only DRAFT or REVISION_REQUESTED rules may be submitted.
     */
    @Transactional
    public ConsentRuleResponse submitForApproval(Long id, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering submitForApproval | params: ruleId={},userId={}", id, userId);
        log.info("User={} | action=submitForApproval | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=submitForApproval | id={}", id);
        try {
        log.info("[RULE] submitForApproval — ruleId={} userId={}", id, userId);
        ConsentRule rule = findRule(id);
        assertOwnerOrAdmin(rule, userId);

        if (!EDITABLE_STATUSES.contains(rule.getStatus())) {
            log.warn("[RULE] Submit rejected — ruleId={} currentStatus={}", id, rule.getStatus());
            throw new InvalidWorkflowStateException(rule.getStatus().name(), "SUBMIT");
        }

        // Reconstruct request from entity and run submission-level validation
        ConsentRuleUpsertRequest snapshot = toUpsertSnapshot(rule);
        validateForSubmit(snapshot, rule);

        rule.setStatus(ConsentRuleStatus.PENDING_CHECKER_APPROVAL);
        rule.setSubmittedAt(Instant.now());
        rule.setRejectionReason(null);
        rule.setRevisionReason(null);

        log.info("Executing DB query | method=save | param=ConsentRule");
        ConsentRule saved = consentRuleRepository.save(rule);
        log.info("DB query completed | method=save | result=completed");
        log.info("[RULE] Submitted ruleId={} for checker approval", saved.getId());

        auditService.log(userId, "RULE_SUBMITTED", "CONSENT_RULE", saved.getId(),
                saved.getRuleName(), "Submitted for checker approval", http);

        ConsentRuleResponse res = toResponse(saved);
        log.debug("Transaction completing | method=submitForApproval | id={}", id);
        log.debug("Exiting submitForApproval | result=id={}", saved.getId());
        return res;
        } catch (Exception e) {
            log.error("Exception in submitForApproval | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Submits a linked-workflow rule for checker approval without requiring a consent template id
     * (template is wired after the paired consent is approved).
     */
    @Transactional
    public ConsentRuleResponse submitLinkedRuleForApproval(Long id, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering submitLinkedRuleForApproval | params: ruleId={},userId={}", id, userId);
        log.info("User={} | action=submitLinkedRuleForApproval | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=submitLinkedRuleForApproval | id={}", id);
        try {
            log.info("[RULE] submitLinkedRuleForApproval — ruleId={} userId={}", id, userId);
            ConsentRule rule = findRule(id);
            assertOwnerOrAdmin(rule, userId);

            if (!rule.isLinkedToConsentWorkflow()) {
                log.warn("[RULE] submitLinked rejected — ruleId={} not a linked-workflow rule", id);
                throw new IllegalArgumentException("Rule is not part of the linked consent+rule workflow.");
            }

            if (!EDITABLE_STATUSES.contains(rule.getStatus())) {
                log.warn("[RULE] Submit linked rejected — ruleId={} currentStatus={}", id, rule.getStatus());
                throw new InvalidWorkflowStateException(rule.getStatus().name(), "SUBMIT_LINKED");
            }

            validateLinkedRuleForSubmit(rule);

            rule.setStatus(ConsentRuleStatus.PENDING_CHECKER_APPROVAL);
            rule.setSubmittedAt(Instant.now());
            rule.setRejectionReason(null);
            rule.setRevisionReason(null);

            log.info("Executing DB query | method=save | param=ConsentRule");
            ConsentRule saved = consentRuleRepository.save(rule);
            log.info("DB query completed | method=save | result=completed");
            log.info("[RULE] Submitted linked ruleId={} for checker approval", saved.getId());

            auditService.log(userId, "RULE_SUBMITTED", "CONSENT_RULE", saved.getId(),
                    saved.getRuleName(), "Linked rule submitted for checker approval", http);

            ConsentRuleResponse res = toResponse(saved);
            log.debug("Transaction completing | method=submitLinkedRuleForApproval | id={}", id);
            log.debug("Exiting submitLinkedRuleForApproval | result=id={}", saved.getId());
            return res;
        } catch (Exception e) {
            log.error("Exception in submitLinkedRuleForApproval | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Wires the now-{@link ConsentStatus#APPROVED} consent onto the linked rule as {@code consentTemplate}.
     * Uses {@link ConsentRepository} only (never {@code ConsentService}) to avoid circular beans.
     * <p>Callers updating consent in the same transaction should ensure persistence is flushed before
     * this method runs so {@code APPROVED} is visible when loading by id (this method calls {@code flush}).
     */
    @Transactional
    public void autoLinkTemplateOnConsentApproval(Long consentId) {
        String cu = currentUser();
        log.debug("Entering autoLinkTemplateOnConsentApproval | params: consentId={}", consentId);
        log.info("User={} | action=autoLinkTemplateOnConsentApproval | entity=ConsentRule | id=n/a", cu);
        entityManager.flush();
        Consent consent =
                consentRepository
                        .findById(consentId)
                        .orElseThrow(() -> new IllegalArgumentException("Consent not found: id=" + consentId));
        if (consent.getStatus() != ConsentStatus.APPROVED) {
            throw new IllegalArgumentException(
                    "Consent must be APPROVED before linking template to rule; status=" + consent.getStatus());
        }
        if (!consent.isLinkedRuleIntent() || consent.getLinkedRule() == null) {
            log.debug("Exiting autoLinkTemplateOnConsentApproval | branch=no_linked_rule consentId={}", consentId);
            return;
        }
        ConsentRule rule = consent.getLinkedRule();
        log.info("Executing DB query | method=save | param=ConsentRule auto-link template consentId={}", consentId);
        rule.setConsentTemplate(consent);
        consentRuleRepository.save(rule);
        log.info("DB query completed | method=save | linked ruleId={} templateConsentId={}", rule.getId(), consentId);
        Long actorId = consent.getReviewedBy() != null ? consent.getReviewedBy().getId() : null;
        if (actorId != null) {
            auditService.log(
                    actorId,
                    "RULE_TEMPLATE_LINKED",
                    "CONSENT_RULE",
                    rule.getId(),
                    rule.getRuleName(),
                    "Consent template linked after approval (consentId=" + consentId + ")",
                    null);
        }
        log.debug("Exiting autoLinkTemplateOnConsentApproval | consentId={} ruleId={}", consentId, rule.getId());
    }

    /**
     * Approves the paired broadcast rule when its linked consent is approved via {@code ConsentService.reviewConsent}.
     * Invoked in the same transaction after {@link #autoLinkTemplateOnConsentApproval}; does not use the public
     * {@link #reviewRule} endpoint path.
     */
//    public void approveLinkedRuleAfterConsentApproval(Long ruleId, User checker, Long checkerId, HttpServletRequest http) {
//        String cu = currentUser();
//        log.debug("Entering approveLinkedRuleAfterConsentApproval | params: ruleId={}, checkerId={}", ruleId, checkerId);
//        log.info(
//                "User={} | action=approveLinkedRuleAfterConsentApproval | entity=ConsentRule | id={}",
//                cu,
//                ruleId);
//        ConsentRule rule = findRule(ruleId);
//        if (!rule.isLinkedToConsentWorkflow()) {
//            log.error(
//                    "[RULE] approveLinkedRuleAfterConsentApproval — ruleId={} is not linked-to-consent workflow",
//                    ruleId);
//            throw new IllegalStateException(
//                    "Linked consent approval requires rule " + ruleId + " to be linked-to-consent workflow");
//        }
//        if (rule.getStatus() != ConsentRuleStatus.PENDING_CHECKER_APPROVAL) {
//            log.warn(
//                    "[RULE] approveLinkedRuleAfterConsentApproval rejected — ruleId={} status={} (expected PENDING_CHECKER_APPROVAL)",
//                    ruleId,
//                    rule.getStatus());
//            throw new InvalidWorkflowStateException(rule.getStatus().name(), "LINKED_CONSENT_APPROVE_CASCADE");
//        }
//        if (rule.getCreatedBy().getId().equals(checkerId)) {
//            log.warn("[RULE] Self-review attempt (linked cascade) — ruleId={} checkerId={}", ruleId, checkerId);
//            throw new UnauthorizedActionException("You cannot review a rule that you created.");
//        }
//        WorkflowReviewRequest req = WorkflowReviewRequest.builder()
//                .action("APPROVE")
//                .remarks(null)
//                .build();
//        handleApprove(rule, checker, req, checkerId, http);
//        log.info("Executing DB query | method=save | param=ConsentRule (linked approve cascade)");
//        consentRuleRepository.save(rule);
//        log.info("DB query completed | method=save | linked ruleId={} status={}", rule.getId(), rule.getStatus());
//        log.debug("Exiting approveLinkedRuleAfterConsentApproval | ruleId={}", ruleId);
//    }

    public void approveLinkedRuleAfterConsentApproval(
            Long ruleId, User checker, Long checkerId, String approveReason, HttpServletRequest http) {

        ConsentRule rule = findRule(ruleId);

        if (!rule.isLinkedToConsentWorkflow()) {
            throw new IllegalStateException(
                    "Linked consent approval requires rule " + ruleId + " to be linked-to-consent workflow");
        }
        if (rule.getStatus() != ConsentRuleStatus.PENDING_CHECKER_APPROVAL) {
            throw new InvalidWorkflowStateException(rule.getStatus().name(), "LINKED_CONSENT_APPROVE_CASCADE");
        }
        if (rule.getCreatedBy().getId().equals(checkerId)) {
            throw new UnauthorizedActionException("You cannot review a rule that you created.");
        }

        WorkflowReviewRequest req = WorkflowReviewRequest.builder()
                .action("APPROVE")
                .approveReason(approveReason)
                .remarks(null)
                .build();

        handleApprove(rule, checker, req, checkerId, http);
        consentRuleRepository.save(rule);
        log.debug("Exiting approveLinkedRuleAfterConsentApproval | ruleId={}", ruleId);
    }

    /**
     * Applies non-template fields from a linked draft request (used when creating the paired rule).
     */
    public void applyNonTemplateFields(ConsentRule target, ConsentRuleLinkedDraftRequest req, User createdBy) {
        applyRuleCore(
                target,
                req.getRuleName(),
                req.getRuleDescription(),
                req.getRuleType(),
                req.getPredefinedScenario(),
                req.getTriggerEvent(),
                req.getPrimarySegment(),
                req.getAdditionalSegmentCodes(),
                req.getScheduleType(),
                req.getScheduledAt(),
                req.getRecurringCron(),
                req.getBroadcastChannels(),
                createdBy);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // CHECKER OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Checker reviews a pending rule: APPROVE, REJECT, or REQUEST_REVISION.
     * A checker cannot review their own rule.
     */
    @Transactional
    public ConsentRuleResponse reviewRule(
            Long id, WorkflowReviewRequest request, Long checkerId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering reviewRule | params: ruleId={},checkerId={}", id, checkerId);
        log.info("User={} | action=reviewRule | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=reviewRule | id={}", id);
        try {
        log.info("[RULE] reviewRule — ruleId={} checkerId={} action={}",
                id, checkerId, request.getAction());

        User checker = loadUser(checkerId);
        if (checker.getRole() != UserRole.CHECKER && checker.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("REVIEW_RULE");
        }

        ConsentRule rule = findRule(id);

        if (rule.getStatus() != ConsentRuleStatus.PENDING_CHECKER_APPROVAL) {
            log.warn("[RULE] Review rejected — ruleId={} status={} is not PENDING_CHECKER_APPROVAL",
                    id, rule.getStatus());
            throw new InvalidWorkflowStateException(rule.getStatus().name(), request.getAction());
        }

        if (rule.getCreatedBy().getId().equals(checkerId)) {
            log.warn("[RULE] Self-review attempt — ruleId={} checkerId={}", id, checkerId);
            throw new UnauthorizedActionException("You cannot review a rule that you created.");
        }

        String action = request.getAction().trim().toUpperCase(Locale.ROOT);

        switch (action) {
            case "APPROVE" -> handleApprove(rule, checker, request, checkerId, http);
            case "REJECT" -> handleReject(rule, checker, request, checkerId, http);
            case "REQUEST_REVISION" -> handleRequestRevision(rule, checker, request, checkerId, http);
            default -> {
                log.error("[RULE] Unknown review action='{}' for ruleId={}", action, id);
                throw new IllegalArgumentException("Unsupported review action: " + action);
            }
        }

        log.info("Executing DB query | method=save | param=ConsentRule");
        ConsentRule saved = consentRuleRepository.save(rule);
        log.info("DB query completed | method=save | result=completed");
        log.info("[RULE] Review complete — ruleId={} newStatus={}", saved.getId(), saved.getStatus());
        ConsentRuleResponse res = toResponse(saved);
        log.debug("Transaction completing | method=reviewRule | id={}", id);
        log.debug("Exiting reviewRule | result=id={}", saved.getId());
        return res;
        } catch (Exception e) {
            log.error("Exception in reviewRule | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // ADMIN / PUBLISH OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Publishes an APPROVED rule to LIVE, enabling execution.
     * Only the rule owner or an ADMIN may do this.
     */
    @Transactional
    public ConsentRuleResponse publishLive(Long id, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.debug("Entering publishLive | params: ruleId={},userId={}", id, userId);
        log.info("User={} | action=publishLive | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=publishLive | id={}", id);
        try {
        log.info("[RULE] publishLive — ruleId={} userId={}", id, userId);
        ConsentRule rule = findRule(id);
        assertOwnerOrAdmin(rule, userId);
        assertMakerOrAdmin(loadUser(userId));

        if (rule.getStatus() != ConsentRuleStatus.APPROVED) {
            log.warn("[RULE] Publish rejected — ruleId={} status={}", id, rule.getStatus());
            throw new InvalidWorkflowStateException(rule.getStatus().name(), "PUBLISH_LIVE");
        }

        rule.setStatus(ConsentRuleStatus.LIVE);
        rule.setPublishedAt(Instant.now());
        rule.setExecutionActive(true);
        RuleNextRunUtil.applyNextExecutionOnActivation(rule);

        log.info("Executing DB query | method=save | param=ConsentRule");
        ConsentRule saved = consentRuleRepository.save(rule);
        log.info("DB query completed | method=save | result=completed");
        log.info("[RULE] Rule is now LIVE — ruleId={} nextExecution={}", saved.getId(), saved.getNextExecutionAt());

        auditService.log(userId, "RULE_LIVE", "CONSENT_RULE", saved.getId(),
                saved.getRuleName(), "Rule published / live", http);

        ConsentRuleResponse res = toResponse(saved);
        log.debug("Transaction completing | method=publishLive | id={}", id);
        log.debug("Exiting publishLive | result=id={}", saved.getId());
        return res;
        } catch (Exception e) {
            log.error("Exception in publishLive | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // READ OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public ConsentRuleResponse getById(Long id, Long userId, UserRole role) {
        String cu = currentUser();
        log.debug("Entering getById | params: ruleId={},userId={},role={}", id, userId, role);
        log.info("User={} | action=getById | entity=ConsentRule | id={}", cu, id);
        log.debug("Transaction started | method=getById | id={}", id);
        try {
        ConsentRule rule = findRule(id);
        authorizeRead(rule, userId, role);
        ConsentRuleResponse res = toResponse(rule);
        log.debug("Transaction completing | method=getById | id={}", id);
        log.debug("Exiting getById | result=id={}", res.getId());
        return res;
        } catch (Exception e) {
            log.error("Exception in getById | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /** Returns the calling maker's own rules, optionally filtered by status. */
    @Transactional(readOnly = true)
    public PagedResponse<ConsentRuleResponse> listForMaker(
            Long userId, ConsentRuleStatus status, int page, int size) {
        String cu = currentUser();
        log.debug("Entering listForMaker | params: userId={},status={},page={},size={}", userId, status, page, size);
        log.info("User={} | action=listForMaker | entity=ConsentRule | id=n/a", cu);
        log.debug("Transaction started | method=listForMaker | id=n/a");
        try {
        Pageable pageable = PageRequest.of(page, clampSize(size));
        log.info("Executing DB query | method=findByCreatedById* | param=userId,status");
        Page<ConsentRule> p = status == null
                ? consentRuleRepository.findByCreatedByIdOrderByUpdatedAtDesc(userId, pageable)
                : consentRuleRepository.findByCreatedByIdAndStatusOrderByUpdatedAtDesc(userId, status, pageable);
        log.info("DB query completed | method=findByCreatedById* | size={}", p.getContent().size());

        PagedResponse<ConsentRuleResponse> res = mapPage(p);
        log.debug("Transaction completing | method=listForMaker | id=n/a");
        log.debug("Exiting listForMaker | result=totalElements={}", res.getTotalElements());
        return res;
        } catch (Exception e) {
            log.error("Exception in listForMaker | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /** Returns all rules currently awaiting checker review (oldest first). */
    @Transactional(readOnly = true)
    public List<ConsentRuleResponse> listPendingForChecker() {
        String cu = currentUser();
        log.debug("Entering listPendingForChecker | params: none");
        log.info("User={} | action=listPendingForChecker | entity=ConsentRule | id=n/a", cu);
        log.debug("Transaction started | method=listPendingForChecker | id=n/a");
        try {
        log.info("Executing DB query | method=findByStatusOrderBySubmittedAtAsc | param=PENDING_CHECKER_APPROVAL");
        List<ConsentRuleResponse> res = consentRuleRepository
                .findByStatusOrderBySubmittedAtAsc(ConsentRuleStatus.PENDING_CHECKER_APPROVAL)
                .stream()
                .filter(r -> !r.isLinkedToConsentWorkflow())
                .map(this::toResponse)
                .toList();
        log.info("DB query completed | method=findByStatusOrderBySubmittedAtAsc | size={}", res.size());
        log.debug("Transaction completing | method=listPendingForChecker | id=n/a");
        log.debug("Exiting listPendingForChecker | result=size={}", res.size());
        return res;
        } catch (Exception e) {
            log.error("Exception in listPendingForChecker | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    /** Returns paginated APPROVED + LIVE rules for the admin rule engine. */
    @Transactional(readOnly = true)
    public PagedResponse<ConsentRuleResponse> listApprovedForAdminRuleEngine(int page, int size) {
        String cu = currentUser();
        log.debug("Entering listApprovedForAdminRuleEngine | params: page={},size={}", page, size);
        log.info("User={} | action=listApprovedForAdminRuleEngine | entity=ConsentRule | id=n/a", cu);
        log.debug("Transaction started | method=listApprovedForAdminRuleEngine | id=n/a");
        try {
        Pageable pageable = PageRequest.of(page, clampSize(size));
        log.info("Executing DB query | method=findByStatusInOrderByApprovedAtDesc | param=ADMIN_ENGINE_STATUSES");
        Page<ConsentRule> result = consentRuleRepository
                .findByStatusInOrderByApprovedAtDesc(ADMIN_ENGINE_STATUSES, pageable);
        log.info("DB query completed | method=findByStatusInOrderByApprovedAtDesc | size={}", result.getContent().size());
        PagedResponse<ConsentRuleResponse> res = mapPage(result);
        log.debug("Transaction completing | method=listApprovedForAdminRuleEngine | id=n/a");
        log.debug("Exiting listApprovedForAdminRuleEngine | result=totalElements={}", res.getTotalElements());
        return res;
        } catch (Exception e) {
            log.error("Exception in listApprovedForAdminRuleEngine | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PRIVATE — REVIEW HANDLERS
    // ─────────────────────────────────────────────────────────────────────────
    
//    private void handleApprove(
//            ConsentRule rule, User checker, WorkflowReviewRequest req,
//            Long checkerId, HttpServletRequest http) {
//
//        rule.setStatus(ConsentRuleStatus.APPROVED);
//        rule.setReviewedBy(checker);
//        rule.setReviewedAt(Instant.now());
//        rule.setApprovedAt(Instant.now());
//        rule.setRejectionReason(null);
//        rule.setRevisionReason(null);
//        rule.setReviewerRemarks(req.getRemarks());
//
//        // ── Execution state ──────────────────────────────────────────────────────
//        // IMMEDIATE rules: auto-activate on approval so the scheduler picks them up
//        // without requiring admin to manually activate.
//        // All other schedule types (SCHEDULED, RECURRING) remain inactive —
//        // admin must explicitly activate them as before.
//        if (rule.getScheduleType() == WorkflowScheduleType.IMMEDIATE) {
//            rule.setExecutionActive(true);
//            RuleNextRunUtil.applyNextExecutionOnActivation(rule);
//            log.info("[RULE] IMMEDIATE rule auto-activated on approval — ruleId={}", rule.getId());
//        } else {
//            // Non-immediate rules: admin must explicitly activate (existing behaviour)
//            rule.setExecutionActive(false);
//            rule.setNextExecutionAt(null);
//        }
//
//        rule.setExecutionRunning(false);
//        rule.setLastExecutedAt(null);
//        rule.setLastExecutionOutcome(null);
//        rule.setLastExecutionSummary(null);
//
//        log.info("[RULE] APPROVED ruleId={} by checkerId={}", rule.getId(), checkerId);
//        auditService.log(checkerId, "RULE_APPROVED", "CONSENT_RULE", rule.getId(),
//                rule.getRuleName(),
//                StringUtils.hasText(req.getRemarks()) ? req.getRemarks() : "Approved",
//                http);
//    }
    
    private void handleApprove(
            ConsentRule rule, User checker, WorkflowReviewRequest req,
            Long checkerId, HttpServletRequest http) {

        rule.setStatus(ConsentRuleStatus.APPROVED);
        rule.setReviewedBy(checker);
        rule.setReviewedAt(Instant.now());
        rule.setApprovedAt(Instant.now());
        rule.setRejectionReason(null);
        rule.setRevisionReason(null);
        rule.setReviewerRemarks(req.getRemarks());

        if (!StringUtils.hasText(req.getApproveReason())) {
            throw new IllegalArgumentException("Approval reason is required.");
        }
        rule.setApproveReason(req.getApproveReason().trim());

        // Auto-activate on approval for all schedule types (IMMEDIATE / SCHEDULED / RECURRING).
        // The admin toggle remains available to deactivate/reactivate later if needed.
        rule.setExecutionActive(true);
        rule.setExecutionRunning(false);
        rule.setLastExecutedAt(null);
        rule.setLastExecutionOutcome(null);
        rule.setLastExecutionSummary(null);
        RuleNextRunUtil.applyNextExecutionOnActivation(rule);

        log.info("[RULE] APPROVED + auto-activated ruleId={} scheduleType={} by checkerId={}",
                rule.getId(), rule.getScheduleType(), checkerId);
        auditService.log(checkerId, "RULE_APPROVED", "CONSENT_RULE", rule.getId(),
                rule.getRuleName(),
                StringUtils.hasText(req.getRemarks()) ? req.getRemarks() : "Approved",
                http);
    }

    private void handleReject(
            ConsentRule rule, User checker, WorkflowReviewRequest req,
            Long checkerId, HttpServletRequest http) {

        if (!StringUtils.hasText(req.getReason())) {
            throw new IllegalArgumentException("Rejection reason is required.");
        }
        rule.setStatus(ConsentRuleStatus.REJECTED);
        rule.setRejectionReason(req.getReason().trim());
        rule.setReviewedBy(checker);
        rule.setReviewedAt(Instant.now());
        rule.setReviewerRemarks(req.getRemarks());

        log.info("[RULE] REJECTED ruleId={} by checkerId={} reason='{}'",
                rule.getId(), checkerId, req.getReason());
        auditService.log(checkerId, "RULE_REJECTED", "CONSENT_RULE", rule.getId(),
                rule.getRuleName(), req.getReason().trim(), http);
    }

    private void handleRequestRevision(
            ConsentRule rule, User checker, WorkflowReviewRequest req,
            Long checkerId, HttpServletRequest http) {

        if (!StringUtils.hasText(req.getRevisionMessage())) {
            throw new IllegalArgumentException("Revision message is required.");
        }
        rule.setStatus(ConsentRuleStatus.REVISION_REQUESTED);
        rule.setRevisionReason(req.getRevisionMessage().trim());
        rule.setReviewedBy(checker);
        rule.setReviewedAt(Instant.now());
        rule.setReviewerRemarks(req.getRemarks());

        log.info("[RULE] REVISION_REQUESTED ruleId={} by checkerId={}", rule.getId(), checkerId);
        auditService.log(checkerId, "RULE_REVISION_REQUESTED", "CONSENT_RULE", rule.getId(),
                rule.getRuleName(), req.getRevisionMessage().trim(), http);
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PRIVATE — VALIDATION
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Validates fields that must be consistent on every save (draft or full).
     * Does NOT enforce submission-only rules (VIP segment check etc.).
     */
    private void validateDraft(ConsentRuleUpsertRequest req) {
        validateDraftSegmentScheduleAndScenario(
                req.getRuleType(),
                req.getPredefinedScenario(),
                req.getPrimarySegment(),
                req.getAdditionalSegmentCodes(),
                req.getScheduleType(),
                req.getScheduledAt(),
                req.getRecurringCron());
        if (req.getConsentTemplateId() == null) {
            throw new IllegalArgumentException("Consent template is required.");
        }
    }

    /**
     * Same structural validation as {@link #validateDraft(ConsentRuleUpsertRequest)} but without any
     * consent-template requirement (linked workflow until approval).
     */
    public void validateDraftWithoutTemplate(ConsentRuleLinkedDraftRequest req) {
        validateDraftSegmentScheduleAndScenario(
                req.getRuleType(),
                req.getPredefinedScenario(),
                req.getPrimarySegment(),
                req.getAdditionalSegmentCodes(),
                req.getScheduleType(),
                req.getScheduledAt(),
                req.getRecurringCron());
    }

    private void validateDraftSegmentScheduleAndScenario(
            ConsentRuleType ruleType,
            PredefinedRuleScenario predefinedScenario,
            AudienceSegmentCode primarySegment,
            List<String> additionalSegmentCodes,
            WorkflowScheduleType scheduleType,
            Instant scheduledAt,
            String recurringCron) {

        if (ruleType == ConsentRuleType.PREDEFINED_SCENARIO && predefinedScenario == null) {
            throw new IllegalArgumentException("Predefined scenario is required for scenario-based rules.");
        }

        segmentationService.validateSelectableSegments(List.of(primarySegment.name()));
        if (additionalSegmentCodes != null && !additionalSegmentCodes.isEmpty()) {
            segmentationService.validateSelectableSegments(additionalSegmentCodes);
        }

        if (scheduleType == WorkflowScheduleType.SCHEDULED && scheduledAt == null) {
            throw new IllegalArgumentException("Scheduled date/time is required for scheduled rules.");
        }
        if (scheduleType == WorkflowScheduleType.RECURRING && !StringUtils.hasText(recurringCron)) {
            throw new IllegalArgumentException("Recurring schedule requires a cron expression.");
        }
    }

    /**
     * Additional validation run only on submit (not on save-draft / update).
     * Validates business invariants that depend on live system state.
     */
    private void validateForSubmit(ConsentRuleUpsertRequest snapshot, ConsentRule rule) {
        validateDraft(snapshot);
        validateVipFastTrackIfApplicable(rule);
    }

    private void validateLinkedRuleForSubmit(ConsentRule rule) {
        validateDraftWithoutTemplate(toLinkedDraftSnapshot(rule));
        assertBroadcastChannelsPresent(rule);
        validateVipFastTrackIfApplicable(rule);
    }

    private void assertBroadcastChannelsPresent(ConsentRule rule) {
        if (rule.getBroadcastChannels() == null || rule.getBroadcastChannels().isEmpty()) {
            throw new IllegalArgumentException("At least one broadcast channel is required.");
        }
    }

    private void validateVipFastTrackIfApplicable(ConsentRule rule) {
        if (rule.getRuleType() == ConsentRuleType.PREDEFINED_SCENARIO
                && rule.getPredefinedScenario() == PredefinedRuleScenario.VIP_PRIORITY_FAST_TRACK) {

            List<AudienceSegmentCode> codes = new ArrayList<>();
            codes.add(rule.getPrimarySegment());
            if (rule.getAdditionalSegmentCodes() != null) {
                for (String raw : rule.getAdditionalSegmentCodes()) {
                    codes.add(segmentationService.parseRequired(raw));
                }
            }
            Set<Long> baseIds = segmentationService.resolveScenarioBaseIds(PredefinedRuleScenario.VIP_PRIORITY_FAST_TRACK);
            int intersectedCount = segmentationService.countDistinctRecipientsIntersection(baseIds, codes);

            if (intersectedCount <= 0) {
                throw new IllegalArgumentException(
                        "VIP fast-track scenario cannot be submitted while no customers match the intersected audience.");
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PRIVATE — FIELD MAPPING
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Applies all fields from the request onto the target entity (standalone rules: template + fields).
     */
    private void applyFields(ConsentRule target, ConsentRuleUpsertRequest req, User createdBy) {
        applyNonTemplateFieldsFromUpsert(target, req, createdBy);
        applyConsentTemplateFromId(target, req.getConsentTemplateId());
    }

    private void applyNonTemplateFieldsFromUpsert(ConsentRule target, ConsentRuleUpsertRequest req, User createdBy) {
        applyRuleCore(
                target,
                req.getRuleName(),
                req.getRuleDescription(),
                req.getRuleType(),
                req.getPredefinedScenario(),
                req.getTriggerEvent(),
                req.getPrimarySegment(),
                req.getAdditionalSegmentCodes(),
                req.getScheduleType(),
                req.getScheduledAt(),
                req.getRecurringCron(),
                req.getBroadcastChannels(),
                createdBy);
    }

    private void applyRuleCore(
            ConsentRule target,
            String ruleName,
            String ruleDescription,
            ConsentRuleType ruleType,
            PredefinedRuleScenario predefinedScenario,
            String triggerEvent,
            AudienceSegmentCode primarySegment,
            List<String> additionalSegmentCodes,
            WorkflowScheduleType scheduleType,
            Instant scheduledAt,
            String recurringCron,
            List<String> broadcastChannels,
            User createdBy) {

        target.setRuleName(ruleName.trim());
        target.setRuleDescription(ruleDescription);
        target.setRuleType(ruleType);
        target.setPredefinedScenario(predefinedScenario);
        target.setTriggerEvent(StringUtils.hasText(triggerEvent) ? triggerEvent.trim() : null);
        target.setPrimarySegment(primarySegment);
        target.setAdditionalSegmentCodes(
                additionalSegmentCodes == null ? new ArrayList<>() : new ArrayList<>(additionalSegmentCodes));
        target.setScheduleType(scheduleType);
        target.setScheduledAt(scheduledAt);
        target.setRecurringCron(StringUtils.hasText(recurringCron) ? recurringCron.trim() : null);
        target.setBroadcastChannels(
                broadcastChannels == null ? new ArrayList<>() : new ArrayList<>(broadcastChannels));

        if (target.getId() == null) {
            target.setCreatedBy(createdBy);
        }
    }

    private void applyConsentTemplateFromId(ConsentRule target, Long consentTemplateId) {
        log.info("Executing DB query | method=findById | param=consentTemplateId");
        Consent template =
                consentRepository
                        .findById(consentTemplateId)
                        .orElseThrow(
                                () -> {
                                    log.error("[RULE] Consent template not found — id={}", consentTemplateId);
                                    return new IllegalArgumentException(
                                            "Consent template not found: id=" + consentTemplateId);
                                });
        log.info("DB query completed | method=findById | present=true");

        if (template.getStatus() != ConsentStatus.PUBLISHED && template.getStatus() != ConsentStatus.APPROVED) {
            log.warn("[RULE] Consent template id={} has invalid status={}", template.getId(), template.getStatus());
            throw new IllegalArgumentException(
                    "Consent template must be in APPROVED or PUBLISHED status, " + "but found: " + template.getStatus());
        }

        target.setConsentTemplate(template);
        log.debug("[RULE] Consent template applied — templateId={} name='{}'", template.getId(), template.getConsentName());
    }

    /**
     * Reconstructs a lightweight request snapshot from a saved entity.
     * Used by submitForApproval to run validation against the persisted state.
     */
    private ConsentRuleUpsertRequest toUpsertSnapshot(ConsentRule r) {
        Long templateId = (r.getConsentTemplate() != null) ? r.getConsentTemplate().getId() : null;
        return ConsentRuleUpsertRequest.builder()
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
                .broadcastChannels(
                        r.getBroadcastChannels() == null
                                ? new ArrayList<>()
                                : new ArrayList<>(r.getBroadcastChannels()))
                .consentTemplateId(templateId)
                .build();
    }

    private ConsentRuleLinkedDraftRequest toLinkedDraftSnapshot(ConsentRule r) {
        List<String> channels =
                r.getBroadcastChannels() == null ? new ArrayList<>() : new ArrayList<>(r.getBroadcastChannels());
        return ConsentRuleLinkedDraftRequest.builder()
                .ruleName(r.getRuleName())
                .ruleDescription(r.getRuleDescription())
                .ruleType(r.getRuleType())
                .predefinedScenario(r.getPredefinedScenario())
                .triggerEvent(r.getTriggerEvent())
                .primarySegment(r.getPrimarySegment())
                .additionalSegmentCodes(
                        r.getAdditionalSegmentCodes() == null
                                ? null
                                : new ArrayList<>(r.getAdditionalSegmentCodes()))
                .scheduleType(r.getScheduleType())
                .scheduledAt(r.getScheduledAt())
                .recurringCron(r.getRecurringCron())
                .broadcastChannels(channels)
                .build();
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PRIVATE — AUTHORIZATION
    // ─────────────────────────────────────────────────────────────────────────

    private void assertMakerOrAdmin(User user) {
        if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
            throw new UnauthorizedActionException("MANAGE_RULES");
        }
    }

    /**
     * Asserts that the calling user is either the rule owner or an ADMIN.
     *
     * FIX: renamed from validateOwner to assertOwnerOrAdmin to match the
     * assertX naming convention used elsewhere. Logic is the same.
     */
    private void assertOwnerOrAdmin(ConsentRule rule, Long userId) {
        User user = loadUser(userId);
        if (user.getRole() == UserRole.ADMIN) {
            return;
        }
        if (!rule.getCreatedBy().getId().equals(userId)) {
            throw new UnauthorizedActionException("You can only modify your own rules.");
        }
    }

    /**
     * Asserts that the rule is in a state that allows maker edits.
     *
     * FIX: REJECTED is removed from editable statuses. A rejected rule cannot
     * be directly edited — the checker must issue REQUEST_REVISION to move it
     * back to REVISION_REQUESTED before the maker can touch it again.
     */
    private void assertEditable(ConsentRuleStatus status) {
        if (!EDITABLE_STATUSES.contains(status)) {
            log.warn("[RULE] Edit blocked — status={} is not editable", status);
            throw new InvalidWorkflowStateException(status.name(), "EDIT");
        }
    }

    private void authorizeRead(ConsentRule rule, Long userId, UserRole role) {
        if (role == UserRole.ADMIN || role == UserRole.CHECKER) {
            return;
        }
        if (role == UserRole.MAKER && rule.getCreatedBy().getId().equals(userId)) {
            return;
        }
        throw new UnauthorizedActionException("VIEW_RULE");
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PRIVATE — LOADERS & MAPPERS
    // ─────────────────────────────────────────────────────────────────────────

    private ConsentRule findRule(Long id) {
        log.info("Executing DB query | method=findById | param=ruleId");
        ConsentRule rule = consentRuleRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("[RULE] Rule not found — id={}", id);
                    return new IllegalArgumentException("Rule not found: id=" + id);
                });
        log.info("DB query completed | method=findById | present=true");
        return rule;
    }

    private User loadUser(Long id) {
        log.info("Executing DB query | method=findById | param=userId");
        User user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("[RULE] User not found — id={}", id);
                    return new IllegalArgumentException("User not found: id=" + id);
                });
        log.info("DB query completed | method=findById | present=true");
        return user;
    }

    private int clampSize(int size) {
        return Math.min(MAX_PAGE_SIZE, Math.max(1, size));
    }

    private ConsentRuleResponse toResponse(ConsentRule r) {
        return ConsentRuleEntityMapper.toResponse(r);
    }

    private PagedResponse<ConsentRuleResponse> mapPage(Page<ConsentRule> p) {
        return PagedResponse.<ConsentRuleResponse>builder()
                .content(p.getContent().stream().map(this::toResponse).toList())
                .totalElements(p.getTotalElements())
                .totalPages(p.getTotalPages())
                .currentPage(p.getNumber())
                .pageSize(p.getSize())
                .hasNext(p.hasNext())
                .hasPrevious(p.hasPrevious())
                .build();
    }

    /**
     * Saves a draft of a linked-workflow rule without requiring/validating a consent template.
     * Mirrors saveDraft but uses non-template field application, since the template is
     * auto-wired after the paired consent is approved.
     */
    @Transactional
    public ConsentRuleResponse saveLinkedDraft(
            Long id, ConsentRuleLinkedDraftRequest req, Long userId, HttpServletRequest http) {
        String cu = currentUser();
        log.info("User={} | action=saveLinkedDraft | entity=ConsentRule | id={}", cu, id);
        ConsentRule rule = findRule(id);
        assertOwnerOrAdmin(rule, userId);
        assertEditable(rule.getStatus());

        if (!rule.isLinkedToConsentWorkflow()) {
            throw new IllegalArgumentException("Rule is not part of the linked consent+rule workflow.");
        }

        validateDraftWithoutTemplate(req);
        applyNonTemplateFields(rule, req, rule.getCreatedBy());

        ConsentRule saved = consentRuleRepository.save(rule);
        auditService.log(userId, "RULE_DRAFT_SAVED", "CONSENT_RULE", saved.getId(),
                saved.getRuleName(), "Linked draft saved", http);
        return toResponse(saved);
    }
    
}