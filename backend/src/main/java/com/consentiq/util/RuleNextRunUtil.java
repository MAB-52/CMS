package com.consentiq.util;

import com.consentiq.enums.WorkflowScheduleType;
import com.consentiq.model.entity.ConsentRule;
import lombok.experimental.UtilityClass;
import org.springframework.scheduling.support.CronExpression;
import org.springframework.util.StringUtils;

import java.time.Instant;
import java.time.ZoneId;
import java.time.ZonedDateTime;

@UtilityClass
public class RuleNextRunUtil {

    private static final ZoneId ASIA_KOLKATA = ZoneId.of("Asia/Kolkata");

    /**
     * Sets {@link ConsentRule#setNextExecutionAt(Instant)} when an approved rule is enabled for execution,
     * or after a recurring run completes.
     * <p>
     * Existing data fix: any RECURRING rule that was activated before correct cron handling may still have
     * {@code nextExecutionAt == null} while {@code executionActive == true}. After deploying this fix, recalculate
     * by deactivating then reactivating execution from the admin dashboard (calls {@code setExecutionActive} with
     * active false then true), which re-invokes this logic. Do not run a batch migration or scheduler to auto-fix
     * rows, as that could have unintended side effects.
     */
    public static void applyNextExecutionOnActivation(ConsentRule rule) {
        WorkflowScheduleType st = rule.getScheduleType();
        if (st == WorkflowScheduleType.IMMEDIATE) {
            rule.setNextExecutionAt(null);
            return;
        }
        if (st == WorkflowScheduleType.SCHEDULED) {
            rule.setNextExecutionAt(rule.getScheduledAt());
            return;
        }
        if (st == WorkflowScheduleType.RECURRING) {
            if (!StringUtils.hasText(rule.getRecurringCron())) {
                rule.setNextExecutionAt(null);
                return;
            }
            String cronStr = rule.getRecurringCron().trim();
            try {
                CronExpression cron = CronExpression.parse(cronStr);
                ZonedDateTime nowKolkata = ZonedDateTime.now(ASIA_KOLKATA);
                Instant next = nextInstantAfterFromZonedDateTime(cron, nowKolkata);
                rule.setNextExecutionAt(next);
                System.out.println("[RuleNextRunUtil] applyNextExecutionOnActivation | ruleId=" + rule.getId()
                        + " | cron=" + cronStr + " | nextExecutionAt=" + next);
            } catch (Exception ex) {
                System.out.println("[RuleNextRunUtil] applyNextExecutionOnActivation CRON_PARSE_FAILED | ruleId="
                        + rule.getId() + " | cron=" + cronStr + " | message=" + ex.getMessage());
                rule.setNextExecutionAt(null);
            }
            return;
        }
        rule.setNextExecutionAt(null);
    }

    public static void applyNextExecutionAfterCompletedRun(ConsentRule rule, Instant completedAt) {
        WorkflowScheduleType st = rule.getScheduleType();
        if (st == WorkflowScheduleType.RECURRING && StringUtils.hasText(rule.getRecurringCron())) {
            String cronStr = rule.getRecurringCron().trim();
            try {
                CronExpression cron = CronExpression.parse(cronStr);
                ZonedDateTime ref = completedAt.atZone(ASIA_KOLKATA);
                Instant next = nextInstantAfterFromZonedDateTime(cron, ref);
                rule.setNextExecutionAt(next);
                System.out.println("[RuleNextRunUtil] applyNextExecutionAfterCompletedRun | ruleId=" + rule.getId()
                        + " | cron=" + cronStr + " | completedAt=" + completedAt + " | nextExecutionAt=" + next);
            } catch (Exception ex) {
                System.out.println("[RuleNextRunUtil] applyNextExecutionAfterCompletedRun CRON_PARSE_FAILED | ruleId="
                        + rule.getId() + " | cron=" + cronStr + " | message=" + ex.getMessage());
                rule.setNextExecutionAt(null);
            }
            return;
        }
        rule.setNextExecutionAt(null);
    }

    /**
     * Next fire strictly after {@code reference} (wall clock in Asia/Kolkata), as {@link Instant}.
     */
    private static Instant nextInstantAfterFromZonedDateTime(CronExpression cron, ZonedDateTime reference) {
        ZonedDateTime next = cron.next(reference);
        if (next == null) {
            next = cron.next(reference.plusNanos(1));
        }
        return next != null ? next.toInstant() : null;
    }
}
