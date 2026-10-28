package com.consentiq.repository;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.model.entity.Consent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ConsentRepository extends JpaRepository<Consent, Long>, JpaSpecificationExecutor<Consent> {

    Optional<Consent> findByConsentId(String consentId);

    /** Row lock so two concurrent submits of the same consent run one after the other. */
    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT c FROM Consent c WHERE c.id = :id")
    Optional<Consent> findByIdForUpdate(@Param("id") Long id);

    boolean existsByConsentNameIgnoreCase(String consentName);

    boolean existsByConsentNameIgnoreCaseAndIdNot(String consentName, Long id);

    @Query(value = "SELECT MAX(CAST(SUBSTRING(consent_id, 10, 4) AS UNSIGNED)) FROM consents WHERE consent_id LIKE CONCAT('CNS-', :year, '-%')", nativeQuery = true)
    Integer findMaxSequenceForYear(@Param("year") String year);

    Page<Consent> findByCreatedById(Long userId, Pageable pageable);

    Page<Consent> findByCreatedByIdOrderByUpdatedAtDesc(Long userId, Pageable pageable);

    Page<Consent> findByCreatedByIdAndStatusOrderByUpdatedAtDesc(Long userId, ConsentStatus status, Pageable pageable);

    long countByCreatedById(Long userId);

    long countByCreatedByIdAndStatus(Long userId, ConsentStatus status);

    @Query("SELECT COUNT(c) FROM Consent c WHERE c.status = :status AND c.createdBy.id <> :checkerId AND c.linkedRuleIntent = false")
    long countPendingApprovalExcludingCreator(@Param("status") ConsentStatus status, @Param("checkerId") Long checkerId);

    @Query(
            "SELECT COUNT(c) FROM Consent c WHERE c.reviewedBy.id = :checkerId AND c.status IN ('APPROVED', 'PUBLISHED') AND c.reviewedAt >= :start")
    long countApprovedByCheckerSince(@Param("checkerId") Long checkerId, @Param("start") Instant start);

    long countByReviewedBy_IdAndStatus(Long reviewerId, ConsentStatus status);

    long countByReviewedBy_Id(Long reviewerId);

    Page<Consent> findByCreatedByIdAndStatus(Long userId, ConsentStatus status, Pageable pageable);

    Page<Consent> findByCreatedByIdAndCategory(Long userId, ConsentCategory category, Pageable pageable);

    Page<Consent> findByCreatedByIdAndStatusAndCategory(
            Long userId, ConsentStatus status, ConsentCategory category, Pageable pageable);

    Page<Consent> findByStatus(ConsentStatus status, Pageable pageable);

    Page<Consent> findByCategory(ConsentCategory category, Pageable pageable);

    Page<Consent> findByStatusAndCategory(ConsentStatus status, ConsentCategory category, Pageable pageable);

    List<Consent> findByStatusOrderBySubmittedAtDesc(ConsentStatus status);

    @Query(
            """
            SELECT DISTINCT c FROM Consent c
            LEFT JOIN FETCH c.linkedRule lr
            LEFT JOIN FETCH lr.createdBy
            WHERE c.status = :status AND c.createdBy.id <> :excludeUserId
            AND c.linkedRuleIntent = false
            ORDER BY c.submittedAt DESC
            """)
    List<Consent> findPendingApprovalExcludingCreator(
            @Param("status") ConsentStatus status,
            @Param("excludeUserId") Long excludeUserId);

    @Query(
            """
            SELECT DISTINCT c FROM Consent c
            LEFT JOIN FETCH c.linkedRule lr
            LEFT JOIN FETCH lr.createdBy
            LEFT JOIN FETCH c.createdBy
            WHERE c.linkedRuleIntent = true
            AND c.status IN :statuses
            AND c.createdBy.id <> :excludeUserId
            ORDER BY c.submittedAt DESC
            """)
    List<Consent> findLinkedByStatusExcludingCreator(
            @Param("statuses") Collection<ConsentStatus> statuses,
            @Param("excludeUserId") Long excludeUserId);

    List<Consent> findByStatusInOrderByConsentNameAsc(Collection<ConsentStatus> statuses);

    long countByStatus(ConsentStatus status);

    long countByStatusAndLinkedRuleIntent(ConsentStatus status, boolean linkedRuleIntent);

    List<Consent> findByReviewedAtIsNotNullAndSubmittedAtIsNotNull();

    List<Consent> findByCreatedBy_IdOrderByCreatedAtDesc(Long createdById);

    @Query(
            """
            SELECT DISTINCT c FROM Consent c
            LEFT JOIN FETCH c.linkedRule lr
            LEFT JOIN FETCH lr.createdBy
            WHERE c.id = :id
            """)
    Optional<Consent> findByIdWithLinkedRuleFetch(@Param("id") Long id);

    @Query(
            value =
                    "SELECT DATE(created_at) AS bucket, COUNT(*) AS cnt FROM consents WHERE created_at >= :fromInstant AND created_at < :toInstant GROUP BY DATE(created_at) ORDER BY bucket",
            nativeQuery = true)
    List<Object[]> countConsentsCreatedGroupedByDay(
            @Param("fromInstant") java.time.Instant fromInstant, @Param("toInstant") java.time.Instant toInstant);

    @Query(
            value =
                    "SELECT YEARWEEK(created_at, 3) AS yw, COUNT(*) AS cnt FROM consents WHERE created_at >= :fromInstant AND created_at < :toInstant GROUP BY YEARWEEK(created_at, 3) ORDER BY yw",
            nativeQuery = true)
    List<Object[]> countConsentsCreatedGroupedByIsoWeek(
            @Param("fromInstant") java.time.Instant fromInstant, @Param("toInstant") java.time.Instant toInstant);

    @Query(
            value =
                    "SELECT DATE_FORMAT(created_at, '%Y-%m') AS ym, COUNT(*) AS cnt FROM consents WHERE created_at >= :fromInstant AND created_at < :toInstant GROUP BY DATE_FORMAT(created_at, '%Y-%m') ORDER BY ym",
            nativeQuery = true)
    List<Object[]> countConsentsCreatedGroupedByMonth(
            @Param("fromInstant") java.time.Instant fromInstant, @Param("toInstant") java.time.Instant toInstant);

    @Query("SELECT c.status, COUNT(c) FROM Consent c GROUP BY c.status")
    List<Object[]> countConsentsGroupedByStatus();

    @Query("SELECT c.category, COUNT(c) FROM Consent c GROUP BY c.category")
    List<Object[]> countConsentsGroupedByCategory();

    @Query(
            value =
                    "SELECT DATE(COALESCE(published_at, reviewed_at)) AS bucket, COUNT(*) AS cnt FROM consents "
                            + "WHERE status IN ('PUBLISHED','APPROVED') AND COALESCE(published_at, reviewed_at) IS NOT NULL "
                            + "AND COALESCE(published_at, reviewed_at) >= :fromInstant AND COALESCE(published_at, reviewed_at) < :toInstant "
                            + "GROUP BY DATE(COALESCE(published_at, reviewed_at)) ORDER BY bucket",
            nativeQuery = true)
    List<Object[]> countConsentsActivatedGroupedByDay(
            @Param("fromInstant") java.time.Instant fromInstant, @Param("toInstant") java.time.Instant toInstant);

    @Query(
            value =
                    "SELECT YEARWEEK(COALESCE(published_at, reviewed_at), 3) AS yw, COUNT(*) AS cnt FROM consents "
                            + "WHERE status IN ('PUBLISHED','APPROVED') AND COALESCE(published_at, reviewed_at) IS NOT NULL "
                            + "AND COALESCE(published_at, reviewed_at) >= :fromInstant AND COALESCE(published_at, reviewed_at) < :toInstant "
                            + "GROUP BY YEARWEEK(COALESCE(published_at, reviewed_at), 3) ORDER BY yw",
            nativeQuery = true)
    List<Object[]> countConsentsActivatedGroupedByIsoWeek(
            @Param("fromInstant") java.time.Instant fromInstant, @Param("toInstant") java.time.Instant toInstant);

    @Query(
            value =
                    "SELECT DATE_FORMAT(COALESCE(published_at, reviewed_at), '%Y-%m') AS ym, COUNT(*) AS cnt FROM consents "
                            + "WHERE status IN ('PUBLISHED','APPROVED') AND COALESCE(published_at, reviewed_at) IS NOT NULL "
                            + "AND COALESCE(published_at, reviewed_at) >= :fromInstant AND COALESCE(published_at, reviewed_at) < :toInstant "
                            + "GROUP BY DATE_FORMAT(COALESCE(published_at, reviewed_at), '%Y-%m') ORDER BY ym",
            nativeQuery = true)
    List<Object[]> countConsentsActivatedGroupedByMonth(
            @Param("fromInstant") java.time.Instant fromInstant, @Param("toInstant") java.time.Instant toInstant);

    @Query(
            value =
                    "SELECT COUNT(*) FROM consents WHERE status IN ('PUBLISHED','APPROVED') "
                            + "AND COALESCE(published_at, reviewed_at) <= :t",
            nativeQuery = true)
    long countLiveConsentTemplatesAsOf(@Param("t") java.time.Instant t);

    @Query("""
            SELECT c FROM Consent c
            JOIN FETCH c.createdBy maker
            WHERE c.status = :status
              AND c.submittedAt IS NOT NULL
              AND c.submittedAt <= :threshold
            """)
    List<Consent> findPendingApprovalOlderThan(
            @Param("status") ConsentStatus status,
            @Param("threshold") Instant threshold
    );

    /**
     * Finds consents where the checker has requested a revision but the maker
     * has not re-submitted within the SLA window.
     *
     * Logic: status = REVISION_REQUESTED  AND  reviewedAt <= :threshold
     *
     * reviewedAt is set when the checker acts (APPROVE / REJECT / REQUEST_REVISION).
     * When it is REQUEST_REVISION the status moves to REVISION_REQUESTED and
     * reviewedAt captures that moment.  If the maker re-submits, status becomes
     * PENDING_APPROVAL again, so this query will no longer match the record.
     *
     * @param status    ConsentStatus.REVISION_REQUESTED
     * @param threshold Instant representing (now - 5 days)
     */
    @Query("""
            SELECT c FROM Consent c
            JOIN FETCH c.createdBy maker
            WHERE c.status = :status
              AND c.reviewedAt IS NOT NULL
              AND c.reviewedAt <= :threshold
            """)
    List<Consent> findRevisionRequestedOlderThan(
            @Param("status") ConsentStatus status,
            @Param("threshold") Instant threshold
    );
}