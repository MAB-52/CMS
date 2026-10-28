package com.consentiq.repository;

import com.consentiq.model.entity.AuditLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.Instant;
import java.util.Collection;
import java.util.List;

public interface AuditLogRepository extends JpaRepository<AuditLog, Long>, JpaSpecificationExecutor<AuditLog> {

    long countByAction(String action);

    Page<AuditLog> findByUser_IdOrderByPerformedAtDesc(Long userId, Pageable pageable);

    Page<AuditLog> findAllByOrderByPerformedAtDesc(Pageable pageable);

    List<AuditLog> findByEntityTypeAndEntityIdOrderByPerformedAtDesc(String entityType, Long entityId);

    @Query("SELECT DISTINCT a.action FROM AuditLog a ORDER BY a.action")
    List<String> findDistinctActions();
    
    @Query("""
    	    SELECT a FROM AuditLog a
    	    WHERE a.action IN :actions
    	      AND (
    	        (a.entityType = 'CONSENT' AND a.entityId IN (
    	            SELECT c.id FROM Consent c WHERE c.createdBy.id = :userId))
    	        OR (a.entityType = 'CONSENT_RULE' AND a.entityId IN (
    	            SELECT r.id FROM ConsentRule r WHERE r.createdBy.id = :userId))
    	    )
    	    ORDER BY a.performedAt DESC
    	    """)
    	Page<AuditLog> findCheckerDecisionsOnMakerEntities(
    	        @Param("userId") Long userId,
    	        @Param("actions") Collection<String> actions,
    	        Pageable pageable);

    /** A checker's own review decisions, filtered and paged in the database. */
    @Query("""
            SELECT a FROM AuditLog a
            WHERE a.user.id = :userId
              AND a.action IN :actions
              AND a.performedAt >= :from
              AND a.performedAt < :to
              AND (:search IS NULL
                   OR LOWER(a.entityName)  LIKE LOWER(CONCAT('%', :search, '%'))
                   OR LOWER(a.description) LIKE LOWER(CONCAT('%', :search, '%')))
            ORDER BY a.performedAt DESC
            """)
    Page<AuditLog> findMyReviews(
            @Param("userId") Long userId,
            @Param("actions") Collection<String> actions,
            @Param("from") Instant from,
            @Param("to") Instant to,
            @Param("search") String search,
            Pageable pageable);

    /** [action, count] for a user's actions in the given set — powers review summary cards. */
    @Query("""
            SELECT a.action, COUNT(a) FROM AuditLog a
            WHERE a.user.id = :userId AND a.action IN :actions AND a.performedAt >= :since
            GROUP BY a.action
            """)
    List<Object[]> countMyActionsSince(
            @Param("userId") Long userId,
            @Param("actions") Collection<String> actions,
            @Param("since") Instant since);

    @Query("""
            SELECT a FROM AuditLog a
            WHERE (
                    (:scope <> 'DECISIONS' AND a.user.id = :userId)
                 OR (:scope <> 'MINE' AND a.action IN :decisionActions AND (
                        (a.entityType = 'CONSENT' AND a.entityId IN (
                            SELECT c.id FROM Consent c WHERE c.createdBy.id = :userId))
                     OR (a.entityType = 'CONSENT_RULE' AND a.entityId IN (
                            SELECT r.id FROM ConsentRule r WHERE r.createdBy.id = :userId))))
                  )
              AND (:entityType = 'ALL' OR a.entityType = :entityType)
              AND a.performedAt >= :from
              AND a.performedAt < :to
              AND (:search IS NULL
                   OR LOWER(a.entityName)  LIKE LOWER(CONCAT('%', :search, '%'))
                   OR LOWER(a.description) LIKE LOWER(CONCAT('%', :search, '%')))
            ORDER BY a.performedAt DESC
            """)
    Page<AuditLog> findMakerTrail(
            @Param("userId") Long userId,
            @Param("scope") String scope,
            @Param("decisionActions") Collection<String> decisionActions,
            @Param("entityType") String entityType,
            @Param("from") Instant from,
            @Param("to") Instant to,
            @Param("search") String search,
            Pageable pageable);

    long countByUser_Id(Long userId);

    @Query("""
            SELECT a.action, COUNT(a) FROM AuditLog a
            WHERE a.action IN :decisionActions AND (
                    (a.entityType = 'CONSENT' AND a.entityId IN (
                        SELECT c.id FROM Consent c WHERE c.createdBy.id = :userId))
                 OR (a.entityType = 'CONSENT_RULE' AND a.entityId IN (
                        SELECT r.id FROM ConsentRule r WHERE r.createdBy.id = :userId)))
            GROUP BY a.action
            """)
    List<Object[]> countDecisionsOnMakerEntities(
            @Param("userId") Long userId,
            @Param("decisionActions") Collection<String> decisionActions);

    @Query("""
            SELECT a FROM AuditLog a JOIN FETCH a.user
            WHERE a.entityType = :entityType
              AND a.entityId IN :entityIds
              AND a.action IN :actions
            ORDER BY a.performedAt DESC, a.id DESC
            """)
    List<AuditLog> findReviewEvents(
            @Param("entityType") String entityType,
            @Param("entityIds") Collection<Long> entityIds,
            @Param("actions") Collection<String> actions);
}
