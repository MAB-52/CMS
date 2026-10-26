package com.consentiq.repository;

import com.consentiq.model.entity.ConsentRuleExecution;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ConsentRuleExecutionRepository extends JpaRepository<ConsentRuleExecution, Long> {

    List<ConsentRuleExecution> findByConsentRule_IdOrderByStartedAtDesc(Long ruleId);

    Page<ConsentRuleExecution> findByConsentRule_IdOrderByStartedAtDesc(Long consentRuleId, Pageable pageable);

    List<ConsentRuleExecution> findTop15ByOrderByStartedAtDesc();
    
    Page<ConsentRuleExecution> findAllByOrderByStartedAtDesc(Pageable pageable);
}
