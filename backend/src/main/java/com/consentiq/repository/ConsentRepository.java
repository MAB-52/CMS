package com.consentiq.repository;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.model.entity.Consent;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface ConsentRepository extends JpaRepository<Consent, Long> {

    Optional<Consent> findByConsentId(String consentId);

    boolean existsByConsentNameIgnoreCase(String consentName);

    boolean existsByConsentNameIgnoreCaseAndIdNot(String consentName, Long id);

    @Query(value = "SELECT MAX(CAST(SUBSTRING(consent_id, 10, 4) AS UNSIGNED)) FROM consents WHERE consent_id LIKE CONCAT('CNS-', :year, '-%')", nativeQuery = true)
    Integer findMaxSequenceForYear(@Param("year") String year);

    Page<Consent> findByCreatedById(Long userId, Pageable pageable);

    Page<Consent> findByCreatedByIdOrderByUpdatedAtDesc(Long userId, Pageable pageable);

    Page<Consent> findByCreatedByIdAndStatusOrderByUpdatedAtDesc(Long userId, ConsentStatus status, Pageable pageable);

    long countByCreatedById(Long userId);

    long countByCreatedByIdAndStatus(Long userId, ConsentStatus status);

    @Query("SELECT COUNT(c) FROM Consent c WHERE c.status = :status AND c.createdBy.id <> :checkerId")
    long countPendingApprovalExcludingCreator(@Param("status") ConsentStatus status, @Param("checkerId") Long checkerId);

    @Query(
            "SELECT COUNT(c) FROM Consent c WHERE c.reviewedBy.id = :checkerId AND c.status = 'APPROVED' AND c.reviewedAt >= :start")
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

    @Query("SELECT c FROM Consent c WHERE c.status = :status AND c.createdBy.id <> :excludeUserId ORDER BY c.submittedAt DESC")
    List<Consent> findPendingApprovalExcludingCreator(
            @Param("status") ConsentStatus status,
            @Param("excludeUserId") Long excludeUserId);

    List<Consent> findByStatusInOrderByConsentNameAsc(Collection<ConsentStatus> statuses);

    long countByStatus(ConsentStatus status);

    List<Consent> findByReviewedAtIsNotNullAndSubmittedAtIsNotNull();
}
