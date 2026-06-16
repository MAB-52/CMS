package com.consentiq.service;

import com.consentiq.enums.ReminderRecipientRole;
import com.consentiq.enums.ReminderTargetType;
import com.consentiq.model.entity.ReminderEmailJob;
import com.consentiq.repository.ReminderEmailJobRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

/**
 * Isolated persistence service for reminder job rows.
 *
 * WHY A SEPARATE SERVICE?
 * ───────────────────────
 * Spring's @Transactional only creates a NEW transaction when the call crosses
 * a bean boundary. If saveReminderJob() were a private method in
 * ReminderBatchProcessor, Propagation.REQUIRES_NEW would be ignored and the
 * save would still join the outer transaction.
 *
 * By moving the save into its own @Service bean with Propagation.REQUIRES_NEW,
 * every row is committed in its own independent transaction the moment the
 * email send succeeds. A subsequent failure for a different recipient cannot
 * roll back rows that were already committed.
 */
@Service
@RequiredArgsConstructor
public class ReminderJobPersistenceService {

    private static final Logger log = LoggerFactory.getLogger(ReminderJobPersistenceService.class);

    private final ReminderEmailJobRepository reminderEmailJobRepository;

    /**
     * Saves one ReminderEmailJob row in its own independent transaction.
     *
     * Propagation.REQUIRES_NEW suspends any outer transaction and commits
     * this insert immediately — even if the caller's transaction later
     * rolls back, this row stays in the DB.
     *
     * The unique constraint (entity_type, entity_id, reminder_type, sent_to_email)
     * is the final safety net: a duplicate insert throws a constraint violation
     * which is caught by the caller, preventing any double-send scenario.
     */
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void save(
            ReminderTargetType entityType,
            Long entityId,
            ReminderRecipientRole reminderType,
            String sentToEmail,
            String sentToName,
            String triggerStatus,
            long daysElapsed) {

        ReminderEmailJob job = ReminderEmailJob.builder()
                .entityType(entityType)
                .entityId(entityId)
                .reminderType(reminderType)
                .sentToEmail(sentToEmail)
                .sentToName(sentToName)
                .sentAt(Instant.now())
                .triggerStatus(triggerStatus)
                .daysElapsed(daysElapsed)
                .build();

        reminderEmailJobRepository.save(job);

        log.debug("[REMINDER-BATCH] Job row committed | entityType={} entityId={} "
                + "reminderType={} sentToEmail={}",
                entityType, entityId, reminderType, sentToEmail);
    }
}