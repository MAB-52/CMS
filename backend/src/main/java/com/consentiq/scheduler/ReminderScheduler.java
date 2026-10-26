package com.consentiq.scheduler;

import com.consentiq.service.ReminderBatchProcessor;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Spring scheduler that triggers the reminder email batch once per day.
 *
 * Schedule
 * ────────
 * Default cron: every day at 08:00 IST (02:30 UTC).
 * Override via property: consentiq.reminder.cron
 *
 * The scheduler simply delegates to ReminderBatchProcessor.processAllReminders().
 * All business logic, idempotency, and transaction management live in the
 * processor — keeping this class as thin as possible.
 *
 * Enabling scheduling
 * ───────────────────
 * Add @EnableScheduling to your main application class if not already present:
 *
 *   @SpringBootApplication
 *   @EnableScheduling
 *   public class ConsentIqApplication { ... }
 */
@Component
@RequiredArgsConstructor
public class ReminderScheduler {

    private static final Logger log = LoggerFactory.getLogger(ReminderScheduler.class);

    private final ReminderBatchProcessor reminderBatchProcessor;

    /**
     * Fires daily at 08:00 IST (02:30 UTC) by default.
     *
     * To override set in application.properties:
     *   consentiq.reminder.cron=0 30 2 * * ?
     *
     * For local testing:
     *   consentiq.reminder.cron=0 * * * * ?   # every minute
     */
    @Scheduled(cron = "${consentiq.reminder.cron:0 30 2 * * ?}", zone = "UTC")
    public void runReminderBatch() {
        log.info("[REMINDER-SCHEDULER] Reminder batch triggered by scheduler");
        try {
            reminderBatchProcessor.processAllReminders();
            log.info("[REMINDER-SCHEDULER] Reminder batch finished successfully");
        } catch (Exception e) {
            // Catch-all so the scheduler thread never dies silently.
            log.error("[REMINDER-SCHEDULER] Reminder batch failed | error={}", e.getMessage(), e);
        }
    }
}