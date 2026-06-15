package com.consentiq.scheduler;

import com.consentiq.service.ConsentRuleExecutionService;
import com.consentiq.service.SchedulerExecutionFacade;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Picks up eligible rules on a fixed delay; each run is a separate transaction via
 * {@link SchedulerExecutionFacade}.
 */
@Component
@RequiredArgsConstructor
public class ConsentRuleSchedulerJob {

    private static final Logger log = LoggerFactory.getLogger(ConsentRuleSchedulerJob.class);

    private final ConsentRuleExecutionService consentRuleExecutionService;
    private final SchedulerExecutionFacade schedulerExecutionFacade;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @Scheduled(fixedDelayString = "${consentiq.rule-engine.scan-interval-ms:60000}")
    public void scanAndExecuteDueRules() {
        String cu = currentUser();
        log.debug("Entering scanAndExecuteDueRules | params: none");
        log.info("User={} | action=scanAndExecuteDueRules | entity=ConsentRule | id=n/a", cu);
        try {
            log.info("Executing DB query | method=findRuleIdsEligibleForSchedulerScan | param=n/a");
            List<Long> ids = consentRuleExecutionService.findRuleIdsEligibleForSchedulerScan();
            log.info(
                    "Query returned {} record(s) | method=findRuleIdsEligibleForSchedulerScan | param=n/a",
                    ids.size());
            log.debug(
                    "scheduler tick | candidateRuleIds | count={} | listSizeLoggedOnly",
                    ids.size());
            int scanned = ids.size();
            int triggered = 0;
            for (Long id : ids) {
                try {
                    if (schedulerExecutionFacade.tryAutomaticRuleExecution(id)) {
                        triggered++;
                    }
                } catch (Exception ex) {
                    log.error(
                            "Exception in scanAndExecuteDueRules loop | user={} | ruleId={} | message={}",
                            cu,
                            id,
                            ex.getMessage(),
                            ex);
                }
            }
            if (scanned > 0) {
                log.info("Processing request | entity=ConsentRule | scanned={} | triggered={}", scanned, triggered);
            }
            log.debug("Exiting scanAndExecuteDueRules | completed successfully");
        } catch (Exception ex) {
            log.error("Exception in scanAndExecuteDueRules | user={} | message={}", cu, ex.getMessage(), ex);
            log.debug("Exiting scanAndExecuteDueRules | completed with error");
        }
    }
}
