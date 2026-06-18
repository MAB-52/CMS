//package com.consentiq.repository;
//
//import com.consentiq.enums.CustomerConsentStatus;
//import com.consentiq.model.entity.Customer;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
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
//public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {
//
//    Optional<Customer> findByCustomerIdIgnoreCase(String customerId);
//
//    Optional<Customer> findByMobileNumber(String mobileNumber);
//
//    long count();
//
//    long countByConsentStatus(CustomerConsentStatus status);
//
//    @Query(
//            "SELECT COUNT(c) FROM Customer c WHERE (c.createdAt IS NOT NULL AND c.createdAt >= :since) "
//                    + "OR (c.createdAt IS NULL AND c.updatedAt >= :since)")
//    long countNewCustomersSince(@Param("since") Instant since);
//
//    @Query(
//            "SELECT COUNT(c) FROM Customer c WHERE c.consentValidUntil IS NOT NULL AND c.consentStatus = 'ACTIVE' "
//                    + "AND c.consentValidUntil > :today AND c.consentValidUntil <= :until")
//    long countConsentExpiringBetween(@Param("today") LocalDate today, @Param("until") LocalDate until);
//
//    @Query(
//            "SELECT COUNT(c) FROM Customer c WHERE c.consentValidUntil IS NOT NULL AND c.consentValidUntil < :today")
//    long countExpiredConsentValidity(@Param("today") LocalDate today);
//
//    @Query(
//            "SELECT COUNT(c) FROM Customer c WHERE c.consentStatus = 'PENDING' AND c.lastConsentInviteSentAt IS NOT NULL "
//                    + "AND c.lastConsentResponseAt IS NULL AND c.lastConsentInviteSentAt < :noResponseSince")
//    long countNonResponders(@Param("noResponseSince") Instant noResponseSince);
//
//    @Query("SELECT COUNT(c) FROM Customer c WHERE c.vipFlag = true")
//    long countVipCustomers();
//
//    @Query(
//            "SELECT COUNT(c) FROM Customer c WHERE c.consentStatus = 'DECLINED' AND (c.reEngagementEligibleAfter IS NULL "
//                    + "OR c.reEngagementEligibleAfter <= :now)")
//    long countDeclinedReEngagementEligible(@Param("now") Instant now);
//
//    @Query(
//            "SELECT c.id FROM Customer c WHERE (c.createdAt IS NOT NULL AND c.createdAt >= :since) "
//                    + "OR (c.createdAt IS NULL AND c.updatedAt >= :since)")
//    List<Long> findIdsNewCustomersSince(@Param("since") Instant since);
//
//    @Query(
//            "SELECT c.id FROM Customer c WHERE c.consentValidUntil IS NOT NULL AND c.consentStatus = 'ACTIVE' "
//                    + "AND c.consentValidUntil > :today AND c.consentValidUntil <= :until")
//    List<Long> findIdsConsentExpiringBetween(@Param("today") LocalDate today, @Param("until") LocalDate until);
//
//    @Query("SELECT c.id FROM Customer c WHERE c.consentValidUntil IS NOT NULL AND c.consentValidUntil < :today")
//    List<Long> findIdsExpiredConsentValidity(@Param("today") LocalDate today);
//
//    @Query(
//            "SELECT c.id FROM Customer c WHERE c.consentStatus = 'PENDING' AND c.lastConsentInviteSentAt IS NOT NULL "
//                    + "AND c.lastConsentResponseAt IS NULL AND c.lastConsentInviteSentAt < :noResponseSince")
//    List<Long> findIdsNonResponders(@Param("noResponseSince") Instant noResponseSince);
//
//    @Query("SELECT c.id FROM Customer c WHERE c.vipFlag = true")
//    List<Long> findIdsVipCustomers();
//
//    @Query(
//            "SELECT c.id FROM Customer c WHERE c.consentStatus = 'DECLINED' AND (c.reEngagementEligibleAfter IS NULL "
//                    + "OR c.reEngagementEligibleAfter <= :now)")
//    List<Long> findIdsDeclinedReEngagementEligible(@Param("now") Instant now);
//    
//    @Query("SELECT c.email FROM Customer c WHERE c.id IN :ids AND c.email IS NOT NULL AND c.email <> ''")
//    List<String> findEmailsByIds(@Param("ids") Collection<Long> ids);
//
//    @Query("SELECT c.id FROM Customer c WHERE c.lastConsentResponseAt IS NULL")
//    List<Long> findIdsByLastConsentResponseAtIsNull();
//
//    @Query("SELECT c.id FROM Customer c WHERE c.lastConsentResponseAt IS NOT NULL")
//    List<Long> findIdsByLastConsentResponseAtIsNotNull();
//
//    @Query("SELECT c.id FROM Customer c WHERE c.consentStatus IN :statuses")
//    List<Long> findIdsByConsentStatusIn(@Param("statuses") Collection<CustomerConsentStatus> statuses);
//
//    @Query("SELECT c.id FROM Customer c WHERE c.consentStatus = :status")
//    List<Long> findIdsByConsentStatus(@Param("status") CustomerConsentStatus status);
//
//    long countByLastConsentResponseAtIsNull();
//
//    long countByLastConsentResponseAtIsNotNull();
//
//    long countByConsentStatusIn(Collection<CustomerConsentStatus> statuses);
//
//    @Modifying
//    @Query(
//            "UPDATE Customer c SET c.consentStatus = :expiringSoon WHERE c.consentStatus IN :acceptedLike AND "
//                    + "c.consentValidUntil IS NOT NULL AND c.consentValidUntil > :today AND c.consentValidUntil <= :warnThrough")
//    int bulkTransitionAcceptedToExpiringSoon(
//            @Param("expiringSoon") CustomerConsentStatus expiringSoon,
//            @Param("acceptedLike") Collection<CustomerConsentStatus> acceptedLike,
//            @Param("today") LocalDate today,
//            @Param("warnThrough") LocalDate warnThrough);
//
//    @Modifying
//    @Query(
//            "UPDATE Customer c SET c.consentStatus = :expired WHERE c.consentStatus IN :preExpired AND "
//                    + "c.consentValidUntil IS NOT NULL AND c.consentValidUntil < :today")
//    int bulkTransitionToExpired(
//            @Param("expired") CustomerConsentStatus expired,
//            @Param("preExpired") Collection<CustomerConsentStatus> preExpired,
//            @Param("today") LocalDate today);
//
//    @Modifying
//    @Query(
//            "UPDATE Customer c SET c.consentStatus = :pending, c.reEngagementEligibleAfter = null WHERE c.consentStatus = :declined AND "
//                    + "c.reEngagementEligibleAfter IS NOT NULL AND c.reEngagementEligibleAfter < :now")
//    int bulkTransitionDeclinedToPending(
//            @Param("pending") CustomerConsentStatus pending,
//            @Param("declined") CustomerConsentStatus declined,
//            @Param("now") Instant now);
//    
//    @Query("SELECT COUNT(c) FROM Customer c WHERE c.consentValidUntil IS NOT NULL " +
//    	       "AND c.consentValidUntil > :today AND c.consentValidUntil <= :until")
//    	long countConsentExpiringBetweenAnyStatus(
//    	        @Param("today") LocalDate today, 
//    	        @Param("until") LocalDate until);
//
//    	@Query("SELECT c.id FROM Customer c WHERE c.consentValidUntil IS NOT NULL " +
//    	       "AND c.consentValidUntil > :today AND c.consentValidUntil <= :until")
//    	List<Long> findIdsConsentExpiringBetweenAnyStatus(
//    	        @Param("today") LocalDate today, 
//    	        @Param("until") LocalDate until);
//
//    @Query(
//            value =
//                    "SELECT DATE_FORMAT(c.last_consent_response_at, '%Y-%m') AS ym, COUNT(*) AS cnt FROM customers c "
//                            + "WHERE c.consent_status IN ('DECLINED','WITHDRAWN') AND c.last_consent_response_at IS NOT NULL "
//                            + "AND c.last_consent_response_at >= :fromInstant AND c.last_consent_response_at < :toInstant "
//                            + "GROUP BY ym ORDER BY ym",
//            nativeQuery = true)
//    List<Object[]> countRevocationsByResponseMonth(
//            @Param("fromInstant") Instant fromInstant, @Param("toInstant") Instant toInstant);
//
//    @Query(
//            value =
//                    "SELECT c.city AS city, COUNT(*) AS cnt, "
//                            + "SUM(CASE WHEN c.consent_status IN ('ACTIVE','ACCEPTED','EXPIRING_SOON') THEN 1 ELSE 0 END) AS active_like "
//                            + "FROM customers c WHERE c.city IS NOT NULL AND TRIM(c.city) <> '' "
//                            + "GROUP BY c.city ORDER BY cnt DESC LIMIT 20",
//            nativeQuery = true)
//    List<Object[]> countCustomersGroupedByCity();
//
//     /**
//      * Resolves a list of business-key customerId strings (as stored in
//      * CustomerConsentRecord.customerId) to their corresponding Customer PKs.
//      * Used by CustomerSegmentationService.collectIds() when converting
//      * record-backed segment results into Customer ids for union logic.
//      */
//     @Query("SELECT c.id FROM Customer c WHERE c.customerId IN :customerIds")
//     List<Long> findIdsByCustomerIdIn(@Param("customerIds") Collection<String> customerIds);
//}

package com.consentiq.repository;

import com.consentiq.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {

    Optional<Customer> findByCustomerIdIgnoreCase(String customerId);

    Optional<Customer> findByMobileNumber(String mobileNumber);

    long count();

    // ── NEW_CUSTOMERS / EXISTING_CUSTOMERS ────────────────────────────────────

    long countByLastConsentResponseAtIsNull();

    long countByLastConsentResponseAtIsNotNull();

    @Query("SELECT c.id FROM Customer c WHERE c.lastConsentResponseAt IS NULL")
    List<Long> findIdsByLastConsentResponseAtIsNull();

    @Query("SELECT c.id FROM Customer c WHERE c.lastConsentResponseAt IS NOT NULL")
    List<Long> findIdsByLastConsentResponseAtIsNotNull();

    // ── NEW_CUSTOMER (date-range variant) ─────────────────────────────────────

    @Query("SELECT COUNT(c) FROM Customer c WHERE (c.createdAt IS NOT NULL AND c.createdAt >= :since) "
            + "OR (c.createdAt IS NULL AND c.updatedAt >= :since)")
    long countNewCustomersSince(@Param("since") Instant since);

    @Query("SELECT c.id FROM Customer c WHERE (c.createdAt IS NOT NULL AND c.createdAt >= :since) "
            + "OR (c.createdAt IS NULL AND c.updatedAt >= :since)")
    List<Long> findIdsNewCustomersSince(@Param("since") Instant since);

    // ── VIP ───────────────────────────────────────────────────────────────────

    @Query("SELECT COUNT(c) FROM Customer c WHERE c.vipFlag = true")
    long countVipCustomers();

    @Query("SELECT c.id FROM Customer c WHERE c.vipFlag = true")
    List<Long> findIdsVipCustomers();

    // ── DECLINED / RE-ENGAGEMENT ──────────────────────────────────────────────
    // reEngagementEligibleAfter lives only on Customer — cannot move to record.
    // These queries no longer filter by consentStatus; they rely solely on
    // lastConsentResponseAt being set (customer has responded at least once)
    // and the re-engagement window having passed.

    @Query("SELECT COUNT(c) FROM Customer c "
            + "WHERE c.lastConsentResponseAt IS NOT NULL "
            + "AND (c.reEngagementEligibleAfter IS NULL OR c.reEngagementEligibleAfter <= :now)")
    long countDeclinedReEngagementEligible(@Param("now") Instant now);

    @Query("SELECT c.id FROM Customer c "
            + "WHERE c.lastConsentResponseAt IS NOT NULL "
            + "AND (c.reEngagementEligibleAfter IS NULL OR c.reEngagementEligibleAfter <= :now)")
    List<Long> findIdsDeclinedReEngagementEligible(@Param("now") Instant now);

    // ── EMAIL LOOKUP ──────────────────────────────────────────────────────────

    @Query("SELECT c.email FROM Customer c WHERE c.id IN :ids AND c.email IS NOT NULL AND c.email <> ''")
    List<String> findEmailsByIds(@Param("ids") Collection<Long> ids);

    // ── RESOLVE business-key strings → PKs ───────────────────────────────────

    @Query("SELECT c.id FROM Customer c WHERE c.customerId IN :customerIds")
    List<Long> findIdsByCustomerIdIn(@Param("customerIds") Collection<String> customerIds);
    
    @Query("""
    	    SELECT c.customerId
    	    FROM Customer c
    	    WHERE (c.createdAt IS NOT NULL AND c.createdAt >= :since)
    	       OR (c.createdAt IS NULL AND c.updatedAt >= :since)
    	""")
    	List<String> findCustomerIdsNewCustomersSince(
    	        @Param("since") Instant since);

    @Query("""
        SELECT COUNT(c) FROM Customer c
        WHERE ((c.createdAt IS NOT NULL AND c.createdAt >= :since)
            OR (c.createdAt IS NULL AND c.updatedAt >= :since))
        AND c.customerId NOT IN :respondedCustomerIds
    """)
    long countNewCustomersSinceExcluding(
        @Param("since") Instant since,
        @Param("respondedCustomerIds") Collection<String> respondedCustomerIds);

    @Query("""
        SELECT c.id FROM Customer c
        WHERE ((c.createdAt IS NOT NULL AND c.createdAt >= :since)
            OR (c.createdAt IS NULL AND c.updatedAt >= :since))
        AND c.customerId NOT IN :respondedCustomerIds
    """)
    List<Long> findIdsNewCustomersSinceExcluding(
        @Param("since") Instant since,
        @Param("respondedCustomerIds") Collection<String> respondedCustomerIds);
}
