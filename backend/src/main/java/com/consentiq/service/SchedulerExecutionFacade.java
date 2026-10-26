package com.consentiq.service;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Runs scheduler-triggered work in {@link Propagation#REQUIRES_NEW} so each tick uses an isolated transaction.
 */
@Service
@RequiredArgsConstructor
public class SchedulerExecutionFacade {

    private static final Logger log = LoggerFactory.getLogger(SchedulerExecutionFacade.class);

    private final ConsentRuleExecutionService consentRuleExecutionService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW, rollbackFor = Exception.class)
    public boolean tryAutomaticRuleExecution(Long ruleId) {
        String cu = currentUser();
        log.debug("Entering tryAutomaticRuleExecution | params: ruleId={}", ruleId);
        log.info("User={} | action=tryAutomaticRuleExecution | entity=ConsentRule | id={}", cu, ruleId);
        log.debug("Transaction started | method=tryAutomaticRuleExecution | ruleId={}", ruleId);
        log.info("Executing rule engine | method=tryAutomaticExecute | param={}", ruleId);
        boolean result = consentRuleExecutionService.tryAutomaticExecute(ruleId);
        log.info("Processing request | entity=ConsentRule | id={} | outcome={}", ruleId, result);
        log.debug("Transaction completing | method=tryAutomaticRuleExecution | ruleId={}", ruleId);
        log.debug("Exiting tryAutomaticRuleExecution | result={}", result);
        return result;
    }
}
