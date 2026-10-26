package com.consentiq.repository;

import com.consentiq.model.entity.AuditLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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
}
