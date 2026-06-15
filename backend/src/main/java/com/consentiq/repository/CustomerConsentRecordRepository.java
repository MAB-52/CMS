//package com.consentiq.repository;
//
//import com.consentiq.enums.CustomerConsentRecordStatus;
//import com.consentiq.model.entity.CustomerConsentRecord;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import java.time.Instant;
//import java.time.LocalDate;
//import java.util.Collection;
//import java.util.List;
//import java.util.Optional;
//
//public interface CustomerConsentRecordRepository extends JpaRepository<CustomerConsentRecord, Long> {
//
//    Optional<CustomerConsentRecord> findByCustomerIdAndConsentDbId(String customerId, Long consentDbId);
//
//    List<CustomerConsentRecord> findByConsentDbIdAndStatus(Long consentDbId, CustomerConsentRecordStatus status);
//
//    List<CustomerConsentRecord> findByCustomerIdOrderByUpdatedAtDesc(String customerId);
//
//    List<CustomerConsentRecord> findByConsentDbIdOrderByUpdatedAtDesc(Long consentDbId);
//
//    @Query("SELECT r.customerId FROM CustomerConsentRecord r WHERE r.consentDbId = :consentDbId AND r.status = :status")
//    List<String> findCustomerIdsByConsentDbIdAndStatus(
//            @Param("consentDbId") Long consentDbId, @Param("status") CustomerConsentRecordStatus status);
//
//    @Query(
//            "SELECT r.customerId FROM CustomerConsentRecord r WHERE r.consentDbId = :consentDbId AND r.status IN :statuses")
//    List<String> findCustomerIdsByConsentDbIdAndStatusIn(
//            @Param("consentDbId") Long consentDbId, @Param("statuses") Collection<CustomerConsentRecordStatus> statuses);
//
//    @Query(
//            "SELECT r FROM CustomerConsentRecord r WHERE r.consentValidUntil IS NOT NULL "
//                    + "AND r.consentValidUntil BETWEEN :fromDate AND :toDate AND r.status IN :statuses")
//    List<CustomerConsentRecord> findAllByConsentValidUntilBetweenAndStatusIn(
//            @Param("fromDate") LocalDate fromDate,
//            @Param("toDate") LocalDate toDate,
//            @Param("statuses") Collection<CustomerConsentRecordStatus> statuses);
//
//    long countByConsentDbIdAndStatus(Long consentDbId, CustomerConsentRecordStatus status);
//
//    long countByConsentDbId(Long consentDbId);
//
//    @Modifying(clearAutomatically = true, flushAutomatically = true)
//    @Query(
//            "UPDATE CustomerConsentRecord r SET r.status = :newStatus, r.updatedAt = :now WHERE r.status IN :currentStatuses "
//                    + "AND r.consentValidUntil IS NOT NULL AND r.consentValidUntil < :beforeDate")
//    int bulkUpdateStatusForConsentValidUntilBefore(
//            @Param("currentStatuses") Collection<CustomerConsentRecordStatus> currentStatuses,
//            @Param("beforeDate") LocalDate beforeDate,
//            @Param("newStatus") CustomerConsentRecordStatus newStatus,
//            @Param("now") Instant now);
//
//    @Modifying(clearAutomatically = true, flushAutomatically = true)
//    @Query(
//            "UPDATE CustomerConsentRecord r SET r.status = :newStatus, r.updatedAt = :now WHERE r.status = :acceptedOnly "
//                    + "AND r.consentValidUntil IS NOT NULL AND r.consentValidUntil >= :fromDate AND r.consentValidUntil <= :toDate")
//    int bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween(
//            @Param("acceptedOnly") CustomerConsentRecordStatus acceptedOnly,
//            @Param("fromDate") LocalDate fromDate,
//            @Param("toDate") LocalDate toDate,
//            @Param("newStatus") CustomerConsentRecordStatus newStatus,
//            @Param("now") Instant now);
//    
//     // ── EXPIRED CONSENT ──────────────────────────────────────────────────────
//
//     @Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
//             + "WHERE r.consentValidUntil IS NOT NULL AND r.consentValidUntil < :today")
//     long countDistinctCustomersWithExpiredConsent(@Param("today") LocalDate today);
//
//     @Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
//             + "WHERE r.consentValidUntil IS NOT NULL AND r.consentValidUntil < :today")
//     List<String> findCustomerIdsWithExpiredConsent(@Param("today") LocalDate today);
//
//     // ── NON-RESPONDERS ───────────────────────────────────────────────────────
//     // Pending records where an invite was sent but no response has been recorded
//     // beyond the minimum wait threshold.
//
//     @Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
//             + "WHERE r.status = 'PENDING' "
//             + "AND r.lastInviteSentAt IS NOT NULL "
//             + "AND r.respondedAt IS NULL "
//             + "AND r.lastInviteSentAt < :noResponseSince")
//     long countDistinctNonResponders(@Param("noResponseSince") Instant noResponseSince);
//
//     @Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
//             + "WHERE r.status = 'PENDING' "
//             + "AND r.lastInviteSentAt IS NOT NULL "
//             + "AND r.respondedAt IS NULL "
//             + "AND r.lastInviteSentAt < :noResponseSince")
//     List<String> findCustomerIdsNonResponders(@Param("noResponseSince") Instant noResponseSince);
//
//     // ── PENDING CONSENT (PENDING + INVITED) ──────────────────────────────────
//
//     @Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
//             + "WHERE r.status IN :statuses")
//     long countDistinctCustomersByStatusIn(
//             @Param("statuses") Collection<CustomerConsentRecordStatus> statuses);
//
//     @Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
//             + "WHERE r.status IN :statuses")
//     List<String> findCustomerIdsByStatusIn(
//             @Param("statuses") Collection<CustomerConsentRecordStatus> statuses);
//
//     // ── EXPIRING CONSENT ─────────────────────────────────────────────────────
//
//     @Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
//             + "WHERE r.consentValidUntil IS NOT NULL "
//             + "AND r.consentValidUntil > :today AND r.consentValidUntil <= :until")
//     long countDistinctCustomersConsentExpiringBetween(
//             @Param("today") LocalDate today, @Param("until") LocalDate until);
//
//     @Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
//             + "WHERE r.consentValidUntil IS NOT NULL "
//             + "AND r.consentValidUntil > :today AND r.consentValidUntil <= :until")
//     List<String> findCustomerIdsConsentExpiringBetween(
//             @Param("today") LocalDate today, @Param("until") LocalDate until);
//
//     // ── ACCEPTED CONSENT ─────────────────────────────────────────────────────
//
//     @Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
//             + "WHERE r.status = :status")
//     long countDistinctCustomersByStatus(@Param("status") CustomerConsentRecordStatus status);
//
//     @Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
//             + "WHERE r.status = :status")
//     List<String> findCustomerIdsByStatus(@Param("status") CustomerConsentRecordStatus status);
//
//     // ── DECLINED / RE-ENGAGEMENT ─────────────────────────────────────────────
//     // CustomerConsentRecord has no reEngagementEligibleAfter column — that field
//     // lives on Customer.  Re-engagement eligibility is therefore still driven by
//     // the Customer entity (see CustomerSegmentationService).  No record-level
//     // query is needed here for that segment.
//}

package com.consentiq.repository;

import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.model.entity.CustomerConsentRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface CustomerConsentRecordRepository extends JpaRepository<CustomerConsentRecord, Long> {

	// ── EXISTING — unchanged ──────────────────────────────────────────────────

	Optional<CustomerConsentRecord> findByCustomerIdAndConsentDbId(String customerId, Long consentDbId);

	List<CustomerConsentRecord> findByConsentDbIdAndStatus(Long consentDbId, CustomerConsentRecordStatus status);

	List<CustomerConsentRecord> findByCustomerIdOrderByUpdatedAtDesc(String customerId);

	List<CustomerConsentRecord> findByConsentDbIdOrderByUpdatedAtDesc(Long consentDbId);

	@Query("SELECT r.customerId FROM CustomerConsentRecord r WHERE r.consentDbId = :consentDbId AND r.status = :status")
	List<String> findCustomerIdsByConsentDbIdAndStatus(@Param("consentDbId") Long consentDbId,
			@Param("status") CustomerConsentRecordStatus status);

	@Query("SELECT r.customerId FROM CustomerConsentRecord r WHERE r.consentDbId = :consentDbId AND r.status IN :statuses")
	List<String> findCustomerIdsByConsentDbIdAndStatusIn(@Param("consentDbId") Long consentDbId,
			@Param("statuses") Collection<CustomerConsentRecordStatus> statuses);

	@Query("SELECT r FROM CustomerConsentRecord r WHERE r.consentValidUntil IS NOT NULL "
			+ "AND r.consentValidUntil BETWEEN :fromDate AND :toDate AND r.status IN :statuses")
	List<CustomerConsentRecord> findAllByConsentValidUntilBetweenAndStatusIn(@Param("fromDate") LocalDate fromDate,
			@Param("toDate") LocalDate toDate, @Param("statuses") Collection<CustomerConsentRecordStatus> statuses);

	long countByConsentDbIdAndStatus(Long consentDbId, CustomerConsentRecordStatus status);

	long countByConsentDbId(Long consentDbId);

	@Modifying(clearAutomatically = true, flushAutomatically = true)
	@Query("UPDATE CustomerConsentRecord r SET r.status = :newStatus, r.updatedAt = :now "
			+ "WHERE r.status IN :currentStatuses "
			+ "AND r.consentValidUntil IS NOT NULL AND r.consentValidUntil < :beforeDate")
	int bulkUpdateStatusForConsentValidUntilBefore(
			@Param("currentStatuses") Collection<CustomerConsentRecordStatus> currentStatuses,
			@Param("beforeDate") LocalDate beforeDate, @Param("newStatus") CustomerConsentRecordStatus newStatus,
			@Param("now") Instant now);

	@Modifying(clearAutomatically = true, flushAutomatically = true)
	@Query("UPDATE CustomerConsentRecord r SET r.status = :newStatus, r.updatedAt = :now "
			+ "WHERE r.status = :acceptedOnly " + "AND r.consentValidUntil IS NOT NULL "
			+ "AND r.consentValidUntil >= :fromDate AND r.consentValidUntil <= :toDate")
	int bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween(
			@Param("acceptedOnly") CustomerConsentRecordStatus acceptedOnly, @Param("fromDate") LocalDate fromDate,
			@Param("toDate") LocalDate toDate, @Param("newStatus") CustomerConsentRecordStatus newStatus,
			@Param("now") Instant now);

	// ── SEGMENTATION COUNTS (distinct customer-level) ─────────────────────────

	// EXPIRED_CONSENT
	@Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
			+ "WHERE r.consentValidUntil IS NOT NULL AND r.consentValidUntil < :today")
	long countDistinctCustomersWithExpiredConsent(@Param("today") LocalDate today);

	@Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
			+ "WHERE r.consentValidUntil IS NOT NULL AND r.consentValidUntil < :today")
	List<String> findCustomerIdsWithExpiredConsent(@Param("today") LocalDate today);

	// NON_RESPONDER
	@Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r "
			+ "WHERE r.status = com.consentiq.enums.CustomerConsentRecordStatus.PENDING "
			+ "AND r.lastInviteSentAt IS NOT NULL " + "AND r.respondedAt IS NULL "
			+ "AND r.lastInviteSentAt < :noResponseSince")
	long countDistinctNonResponders(@Param("noResponseSince") Instant noResponseSince);

	@Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r "
			+ "WHERE r.status = com.consentiq.enums.CustomerConsentRecordStatus.PENDING "
			+ "AND r.lastInviteSentAt IS NOT NULL " + "AND r.respondedAt IS NULL "
			+ "AND r.lastInviteSentAt < :noResponseSince")
	List<String> findCustomerIdsNonResponders(@Param("noResponseSince") Instant noResponseSince);

	// PENDING_CONSENT / ACCEPTED_CONSENT — single status
	@Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r WHERE r.status = :status")
	long countDistinctCustomersByStatus(@Param("status") CustomerConsentRecordStatus status);

	@Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r WHERE r.status = :status")
	List<String> findCustomerIdsByStatus(@Param("status") CustomerConsentRecordStatus status);

	// EXPIRING_CONSENT
	@Query("""
		    SELECT COUNT(DISTINCT r.customerId)
		    FROM CustomerConsentRecord r
		    WHERE r.status =
		          com.consentiq.enums.CustomerConsentRecordStatus.EXPIRING_SOON
		""")
		long countDistinctCustomersExpiringSoon();

	@Query("""
		    SELECT DISTINCT r.customerId
		    FROM CustomerConsentRecord r
		    WHERE r.status =
		          com.consentiq.enums.CustomerConsentRecordStatus.EXPIRING_SOON
		""")
		List<String> findCustomerIdsExpiringSoon();

	// DECLINED / RE-ENGAGEMENT — reEngagementEligibleAfter lives on Customer;
	// but to identify REJECTED/WITHDRAWN customers from records:
	@Query("SELECT COUNT(DISTINCT r.customerId) FROM CustomerConsentRecord r " + "WHERE r.status IN :statuses")
	long countDistinctCustomersByStatusIn(@Param("statuses") Collection<CustomerConsentRecordStatus> statuses);

	@Query("SELECT DISTINCT r.customerId FROM CustomerConsentRecord r WHERE r.status IN :statuses")
	List<String> findCustomerIdsByStatusIn(@Param("statuses") Collection<CustomerConsentRecordStatus> statuses);

//	@Query("""
//			SELECT COUNT(DISTINCT r.customerId)
//			FROM CustomerConsentRecord r
//			WHERE r.status = com.consentiq.enums.CustomerConsentRecordStatus.REJECTED
//			""")
//	long countDistinctRejectedCustomers();
//
//	@Query("""
//			SELECT DISTINCT r.customerId
//			FROM CustomerConsentRecord r
//			WHERE r.status = com.consentiq.enums.CustomerConsentRecordStatus.REJECTED
//			""")
//	List<String> findRejectedCustomerIds();
	
	@Query("""
		       SELECT COUNT(DISTINCT r.customerId)
		       FROM CustomerConsentRecord r
		       WHERE r.status IN (
		           com.consentiq.enums.CustomerConsentRecordStatus.REJECTED,
		           com.consentiq.enums.CustomerConsentRecordStatus.WITHDRAWN
		       )
		       """)
		long countDistinctDeclinedCustomers();
	
	@Query("""
		       SELECT DISTINCT r.customerId
		       FROM CustomerConsentRecord r
		       WHERE r.status IN (
		           com.consentiq.enums.CustomerConsentRecordStatus.REJECTED,
		           com.consentiq.enums.CustomerConsentRecordStatus.WITHDRAWN
		       )
		       """)
		List<String> findDeclinedCustomerIds();
	
	@Query("""
		    SELECT COUNT(DISTINCT r.customerId)
		    FROM CustomerConsentRecord r
		    WHERE r.id IN (
		        SELECT MAX(x.id)
		        FROM CustomerConsentRecord x
		        GROUP BY x.customerId
		    )
		    AND r.customerId IN :customerIds
		    AND r.lastInviteSentAt IS NOT NULL
		    AND r.respondedAt IS NULL
		""")
		long countLatestNeverRespondedCustomers(
		        @Param("customerIds") Collection<String> customerIds);
	
	@Query("""
		    SELECT DISTINCT r.customerId
		    FROM CustomerConsentRecord r
		    WHERE r.id IN (
		        SELECT MAX(x.id)
		        FROM CustomerConsentRecord x
		        GROUP BY x.customerId
		    )
		    AND r.customerId IN :customerIds
		    AND r.lastInviteSentAt IS NOT NULL
		    AND r.respondedAt IS NULL
		""")
		List<String> findLatestNeverRespondedCustomerIds(
		        @Param("customerIds") Collection<String> customerIds);
}