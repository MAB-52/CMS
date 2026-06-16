package com.consentiq.repository;

import com.consentiq.enums.ConsentRuleStatus;
import com.consentiq.model.entity.ConsentRule;
import jakarta.persistence.LockModeType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

/**
 * Repository for ConsentRule entities.
 *
 * The old code had two overloads of findByStatusInOrderByApprovedAtDesc —
 * one returning List and one returning Page — causing a Spring Data startup
 * ambiguity error. Fixed by giving each a distinct name:
 *
 *   findByStatusInOrderByApprovedAtDesc     → paginated  (ConsentRuleService admin engine)
 *   findAllByStatusInOrderByApprovedAtDesc  → flat list  (ConsentRuleExecutionService)
 */
public interface ConsentRuleRepository extends JpaRepository<ConsentRule, Long> {

    // ── Maker queries ─────────────────────────────────────────────────────────

    Page<ConsentRule> findByCreatedByIdOrderByUpdatedAtDesc(Long userId, Pageable pageable);

    Page<ConsentRule> findByCreatedByIdAndStatusOrderByUpdatedAtDesc(
            Long userId, ConsentRuleStatus status, Pageable pageable);

    // ── Checker queries ───────────────────────────────────────────────────────

    List<ConsentRule> findByStatusOrderBySubmittedAtAsc(ConsentRuleStatus status);

    // ── Admin / rule-engine queries ───────────────────────────────────────────

    /**
     * Paginated — used by ConsentRuleService#listApprovedForAdminRuleEngine.
     */
    Page<ConsentRule> findByStatusInOrderByApprovedAtDesc(
            Collection<ConsentRuleStatus> statuses, Pageable pageable);

    /**
     * Flat list — used by ConsentRuleExecutionService (dashboard stats,
     * scheduler scan, etc.) where pagination is not needed.
     * Distinct name avoids the Spring Data overload ambiguity.
     */
    List<ConsentRule> findAllByStatusInOrderByApprovedAtDesc(
            Collection<ConsentRuleStatus> statuses);

    // ── Counters ──────────────────────────────────────────────────────────────

    long countByStatus(ConsentRuleStatus status);

    long countByCreatedByIdAndStatus(Long userId, ConsentRuleStatus status);

    long countByStatusInAndExecutionActive(
            Collection<ConsentRuleStatus> statuses, boolean executionActive);

    // ── Execution engine ──────────────────────────────────────────────────────

    /**
     * Pessimistic write lock used by the execution engine to prevent
     * concurrent rule execution on the same record.
     */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT r FROM ConsentRule r WHERE r.id = :id")
    Optional<ConsentRule> findByIdForUpdate(@Param("id") Long id);

    /**
     * Finds all LIVE rules that have execution enabled and are not already
     * running, with their next-execution time due.
     * Used by the scheduler to pick up eligible rules.
     */
    @Query("""
            SELECT r FROM ConsentRule r
            WHERE r.status = com.consentiq.enums.ConsentRuleStatus.LIVE
              AND r.executionActive = true
              AND r.executionRunning = false
              AND (r.nextExecutionAt IS NULL OR r.nextExecutionAt <= CURRENT_TIMESTAMP)
            ORDER BY r.nextExecutionAt ASC NULLS FIRST
            """)
    List<ConsentRule> findDueForExecution();
    
    @Query("""
            SELECT r FROM ConsentRule r
            JOIN FETCH r.createdBy maker
            WHERE r.status = :status
              AND r.submittedAt IS NOT NULL
              AND r.submittedAt <= :threshold
            """)
    List<ConsentRule> findPendingApprovalOlderThan(
            @Param("status") ConsentRuleStatus status,
            @Param("threshold") Instant threshold
    );
 
    /**
     * Finds rules where the checker has requested a revision but the maker
     * has not re-submitted within the SLA window.
     *
     * Logic: status = REVISION_REQUESTED  AND  reviewedAt <= :threshold
     *
     * Note: in ConsentRule the revision reason is stored in {@code revisionReason}
     * (not revisionMessage as in Consent) — the query itself does not need this
     * field, but the batch processor reads it from the entity to include it in
     * the reminder email body.
     *
     * @param status    ConsentRuleStatus.REVISION_REQUESTED
     * @param threshold Instant representing (now - 5 days)
     */
    @Query("""
            SELECT r FROM ConsentRule r
            JOIN FETCH r.createdBy maker
            WHERE r.status = :status
              AND r.reviewedAt IS NOT NULL
              AND r.reviewedAt <= :threshold
            """)
    List<ConsentRule> findRevisionRequestedOlderThan(
            @Param("status") ConsentRuleStatus status,
            @Param("threshold") Instant threshold
    );
}