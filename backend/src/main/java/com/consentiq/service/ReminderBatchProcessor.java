package com.consentiq.service;

import com.consentiq.enums.ConsentRuleStatus;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.ReminderRecipientRole;
import com.consentiq.enums.ReminderTargetType;
import com.consentiq.enums.UserRole;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentRule;
import com.consentiq.model.entity.User;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.ConsentRuleRepository;
import com.consentiq.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

/**
 * Core batch-processing service that drives all reminder emails.
 *
 * TRANSACTION DESIGN
 * ──────────────────
 * This class is intentionally NOT @Transactional at the class or method level.
 *
 * Each recipient's email + DB row is handled atomically via
 * ReminderJobPersistenceService.save() which runs in Propagation.REQUIRES_NEW —
 * meaning each row is committed immediately in its own independent transaction
 * the moment the email succeeds.
 *
 * This ensures:
 *  - A send failure for checker B never rolls back checker A's already-committed row.
 *  - All checkers for a given consent are processed independently.
 *  - Every scheduler run sends fresh emails and logs a new row per recipient —
 *    the reminder_email_jobs table is a full audit log, not an idempotency gate.
 *
 * DB RECORD DESIGN — one row per send per recipient per entity
 * ─────────────────────────────────────────────────────────────
 * Each successful send inserts a new row. Re-running the scheduler adds more rows.
 * There is NO unique constraint — the table is a pure audit log.
 *
 * Example — consent id=10, 3 checkers, after 2 scheduler runs:
 *   id=1 | CONSENT | 10 | CHECKER_PENDING | anita@example.com   | run 1
 *   id=2 | CONSENT | 10 | CHECKER_PENDING | amit@gmail.com      | run 1
 *   id=3 | CONSENT | 10 | CHECKER_PENDING | john@gmail.com      | run 1
 *   id=4 | CONSENT | 10 | CHECKER_PENDING | anita@example.com   | run 2
 *   id=5 | CONSENT | 10 | CHECKER_PENDING | amit@gmail.com      | run 2
 *   id=6 | CONSENT | 10 | CHECKER_PENDING | john@gmail.com      | run 2
 *
 * SCENARIOS
 * ─────────
 *  1. Consent  in PENDING_APPROVAL         > 5 days → remind ALL checkers
 *  2. Rule     in PENDING_CHECKER_APPROVAL > 5 days → remind ALL checkers
 *  3. Consent  in REVISION_REQUESTED       > 5 days → remind the maker
 *  4. Rule     in REVISION_REQUESTED       > 5 days → remind the maker
 */
@Service
@RequiredArgsConstructor
public class ReminderBatchProcessor {

    private static final Logger log = LoggerFactory.getLogger(ReminderBatchProcessor.class);

    @Value("${consentiq.reminder.sla-days:5}")
    private int slaDays;

    private final ConsentRepository             consentRepository;
    private final ConsentRuleRepository         consentRuleRepository;
    private final UserRepository                userRepository;
    private final ReminderEmailService          reminderEmailService;
    private final ReminderJobPersistenceService persistenceService;  // REQUIRES_NEW per row

    // ─────────────────────────────────────────────────────────────────────────
    // ENTRY POINT — called by ReminderScheduler
    // ─────────────────────────────────────────────────────────────────────────

    public void processAllReminders() {
        log.info("[REMINDER-BATCH] Starting | slaDays={}", slaDays);
        Instant threshold = Instant.now().minus(slaDays, ChronoUnit.DAYS);

        processCheckerPendingConsents(threshold);
        processCheckerPendingRules(threshold);
        processMakerRevisionConsents(threshold);
        processMakerRevisionRules(threshold);

        log.info("[REMINDER-BATCH] Completed");
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SCENARIO 1 — Checker reminders for stale PENDING_APPROVAL consents
    // ─────────────────────────────────────────────────────────────────────────

    public void processCheckerPendingConsents(Instant threshold) {
        log.info("[REMINDER-BATCH] Scenario 1 | PENDING_APPROVAL consents older than {}", threshold);

        List<Consent> staleConsents = consentRepository
                .findPendingApprovalOlderThan(ConsentStatus.PENDING_APPROVAL, threshold);

        log.info("[REMINDER-BATCH] Scenario 1 | Found {} stale consent(s)", staleConsents.size());
        if (staleConsents.isEmpty()) return;

        List<User> allCheckers = userRepository.findByRole(UserRole.CHECKER);
        if (allCheckers.isEmpty()) {
            log.warn("[REMINDER-BATCH] Scenario 1 | No CHECKER users found — skipping");
            return;
        }

        log.info("[REMINDER-BATCH] Scenario 1 | {} checker(s) in system: {}",
                allCheckers.size(),
                allCheckers.stream().map(User::getEmail).toList());

        for (Consent consent : staleConsents) {
            long daysElapsed = computeDaysElapsed(consent.getSubmittedAt());
            log.info("[REMINDER-BATCH] Scenario 1 | Processing consentId={} consentName='{}' "
                    + "submittedAt={} daysElapsed={}",
                    consent.getId(), consent.getConsentName(),
                    consent.getSubmittedAt(), daysElapsed);

            for (User checker : allCheckers) {
                processOneCheckerForConsent(consent, checker, daysElapsed);
            }
        }
    }

    /**
     * Sends a reminder email and persists one audit row for a single
     * (consent, checker) pair. No idempotency check — every scheduler run
     * produces a new email + a new row, giving a full send history.
     *
     * Isolated in its own try/catch so a failure for one checker never
     * prevents the remaining checkers in the loop from being processed.
     */
    private void processOneCheckerForConsent(Consent consent, User checker, long daysElapsed) {
        try {
            reminderEmailService.sendCheckerReminderForConsent(consent, checker, daysElapsed);

            persistenceService.save(
                    ReminderTargetType.CONSENT,
                    consent.getId(),
                    ReminderRecipientRole.CHECKER_PENDING,
                    checker.getEmail(),
                    checker.getFullName(),
                    ConsentStatus.PENDING_APPROVAL.name(),
                    daysElapsed);

            log.info("[REMINDER-BATCH] Scenario 1 | Sent + saved | consentId={} "
                    + "checkerEmail={} daysElapsed={}",
                    consent.getId(), checker.getEmail(), daysElapsed);

        } catch (Exception e) {
            log.error("[REMINDER-BATCH] Scenario 1 | Failed | consentId={} "
                    + "checkerEmail={} error={}",
                    consent.getId(), checker.getEmail(), e.getMessage(), e);
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SCENARIO 2 — Checker reminders for stale PENDING_CHECKER_APPROVAL rules
    // ─────────────────────────────────────────────────────────────────────────

    public void processCheckerPendingRules(Instant threshold) {
        log.info("[REMINDER-BATCH] Scenario 2 | PENDING_CHECKER_APPROVAL rules older than {}", threshold);

        List<ConsentRule> staleRules = consentRuleRepository
                .findPendingApprovalOlderThan(ConsentRuleStatus.PENDING_CHECKER_APPROVAL, threshold);

        log.info("[REMINDER-BATCH] Scenario 2 | Found {} stale rule(s)", staleRules.size());
        if (staleRules.isEmpty()) return;

        List<User> allCheckers = userRepository.findByRole(UserRole.CHECKER);
        if (allCheckers.isEmpty()) {
            log.warn("[REMINDER-BATCH] Scenario 2 | No CHECKER users found — skipping");
            return;
        }

        log.info("[REMINDER-BATCH] Scenario 2 | {} checker(s) in system: {}",
                allCheckers.size(),
                allCheckers.stream().map(User::getEmail).toList());

        for (ConsentRule rule : staleRules) {
            long daysElapsed = computeDaysElapsed(rule.getSubmittedAt());
            log.info("[REMINDER-BATCH] Scenario 2 | Processing ruleId={} ruleName='{}' "
                    + "submittedAt={} daysElapsed={}",
                    rule.getId(), rule.getRuleName(),
                    rule.getSubmittedAt(), daysElapsed);

            for (User checker : allCheckers) {
                processOneCheckerForRule(rule, checker, daysElapsed);
            }
        }
    }

    /**
     * Sends a reminder email and persists one audit row for a single
     * (rule, checker) pair. No idempotency check — every scheduler run
     * produces a new email + a new row.
     */
    private void processOneCheckerForRule(ConsentRule rule, User checker, long daysElapsed) {
        try {
            reminderEmailService.sendCheckerReminderForRule(rule, checker, daysElapsed);

            persistenceService.save(
                    ReminderTargetType.CONSENT_RULE,
                    rule.getId(),
                    ReminderRecipientRole.CHECKER_PENDING,
                    checker.getEmail(),
                    checker.getFullName(),
                    ConsentRuleStatus.PENDING_CHECKER_APPROVAL.name(),
                    daysElapsed);

            log.info("[REMINDER-BATCH] Scenario 2 | Sent + saved | ruleId={} "
                    + "checkerEmail={} daysElapsed={}",
                    rule.getId(), checker.getEmail(), daysElapsed);

        } catch (Exception e) {
            log.error("[REMINDER-BATCH] Scenario 2 | Failed | ruleId={} "
                    + "checkerEmail={} error={}",
                    rule.getId(), checker.getEmail(), e.getMessage(), e);
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SCENARIO 3 — Maker reminders for stale REVISION_REQUESTED consents
    // ─────────────────────────────────────────────────────────────────────────

    public void processMakerRevisionConsents(Instant threshold) {
        log.info("[REMINDER-BATCH] Scenario 3 | REVISION_REQUESTED consents older than {}", threshold);

        List<Consent> staleConsents = consentRepository
                .findRevisionRequestedOlderThan(ConsentStatus.REVISION_REQUESTED, threshold);

        log.info("[REMINDER-BATCH] Scenario 3 | Found {} stale consent(s)", staleConsents.size());

        for (Consent consent : staleConsents) {
            processOneMakerForConsent(consent);
        }
    }

    /**
     * Sends a revision reminder to the maker and persists one audit row.
     * No idempotency check — every scheduler run produces a new email + row.
     *
     * Reads revisionMessage (Consent) — different field name from ConsentRule
     * which uses revisionReason. Both are set by their respective review methods.
     */
    private void processOneMakerForConsent(Consent consent) {
        try {
            User maker = consent.getCreatedBy();

            String revisionReason = StringUtils.hasText(consent.getRevisionMessage())
                    ? consent.getRevisionMessage()
                    : "Please review the checker's comments and resubmit.";

            long daysElapsed = computeDaysElapsed(consent.getReviewedAt());

            log.info("[REMINDER-BATCH] Scenario 3 | Processing consentId={} consentName='{}' "
                    + "makerEmail={} daysElapsed={}",
                    consent.getId(), consent.getConsentName(),
                    maker.getEmail(), daysElapsed);

            reminderEmailService.sendMakerRevisionReminderForConsent(
                    consent, maker, revisionReason, daysElapsed);

            persistenceService.save(
                    ReminderTargetType.CONSENT,
                    consent.getId(),
                    ReminderRecipientRole.MAKER_REVISION,
                    maker.getEmail(),
                    maker.getFullName(),
                    ConsentStatus.REVISION_REQUESTED.name(),
                    daysElapsed);

            log.info("[REMINDER-BATCH] Scenario 3 | Sent + saved | consentId={} "
                    + "makerEmail={} daysElapsed={}",
                    consent.getId(), maker.getEmail(), daysElapsed);

        } catch (Exception e) {
            log.error("[REMINDER-BATCH] Scenario 3 | Failed | consentId={} error={}",
                    consent.getId(), e.getMessage(), e);
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // SCENARIO 4 — Maker reminders for stale REVISION_REQUESTED rules
    // ─────────────────────────────────────────────────────────────────────────

    public void processMakerRevisionRules(Instant threshold) {
        log.info("[REMINDER-BATCH] Scenario 4 | REVISION_REQUESTED rules older than {}", threshold);

        List<ConsentRule> staleRules = consentRuleRepository
                .findRevisionRequestedOlderThan(ConsentRuleStatus.REVISION_REQUESTED, threshold);

        log.info("[REMINDER-BATCH] Scenario 4 | Found {} stale rule(s)", staleRules.size());

        for (ConsentRule rule : staleRules) {
            processOneMakerForRule(rule);
        }
    }

    /**
     * Sends a revision reminder to the maker and persists one audit row.
     * No idempotency check — every scheduler run produces a new email + row.
     *
     * Reads revisionReason (ConsentRule) — different field name from Consent
     * which uses revisionMessage. Both are set by their respective review methods.
     */
    private void processOneMakerForRule(ConsentRule rule) {
        try {
            User maker = rule.getCreatedBy();

            String revisionReason = StringUtils.hasText(rule.getRevisionReason())
                    ? rule.getRevisionReason()
                    : "Please review the checker's comments and resubmit.";

            long daysElapsed = computeDaysElapsed(rule.getReviewedAt());

            log.info("[REMINDER-BATCH] Scenario 4 | Processing ruleId={} ruleName='{}' "
                    + "makerEmail={} daysElapsed={}",
                    rule.getId(), rule.getRuleName(),
                    maker.getEmail(), daysElapsed);

            reminderEmailService.sendMakerRevisionReminderForRule(
                    rule, maker, revisionReason, daysElapsed);

            persistenceService.save(
                    ReminderTargetType.CONSENT_RULE,
                    rule.getId(),
                    ReminderRecipientRole.MAKER_REVISION,
                    maker.getEmail(),
                    maker.getFullName(),
                    ConsentRuleStatus.REVISION_REQUESTED.name(),
                    daysElapsed);

            log.info("[REMINDER-BATCH] Scenario 4 | Sent + saved | ruleId={} "
                    + "makerEmail={} daysElapsed={}",
                    rule.getId(), maker.getEmail(), daysElapsed);

        } catch (Exception e) {
            log.error("[REMINDER-BATCH] Scenario 4 | Failed | ruleId={} error={}",
                    rule.getId(), e.getMessage(), e);
        }
    }

    // ─────────────────────────────────────────────────────────────────────────
    // PRIVATE HELPERS
    // ─────────────────────────────────────────────────────────────────────────

    private long computeDaysElapsed(Instant since) {
        if (since == null) return 0L;
        return ChronoUnit.DAYS.between(since, Instant.now());
    }
}