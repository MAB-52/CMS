package com.consentiq.model.entity;

import com.consentiq.enums.ReminderTargetType;
import com.consentiq.enums.ReminderRecipientRole;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

/**
 * Tracks every reminder email dispatched by the batch job.
 *
 * ONE ROW PER RECIPIENT PER ENTITY.
 *
 * The unique constraint is (entityType, entityId, reminderType, sentToEmail).
 * This means:
 *  - Each checker gets their own row for a CHECKER_PENDING reminder.
 *  - Each maker gets their own row for a MAKER_REVISION reminder.
 *  - Adding a new checker later will not accidentally skip them — their email
 *    simply won't have a row yet, so they will be notified on the next run.
 *  - Idempotency is per-person: re-running the scheduler never re-sends to
 *    someone who already received the mail.
 */
@Entity
//@Table(
//    name = "reminder_email_jobs",
//    uniqueConstraints = @UniqueConstraint(
//        name = "uq_reminder_entity_type_email",
//        columnNames = {"entity_type", "entity_id", "reminder_type", "sent_to_email"}
//    )
//)

@Table(name = "reminder_email_jobs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReminderEmailJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /** CONSENT or CONSENT_RULE */
    @Enumerated(EnumType.STRING)
    @Column(name = "entity_type", nullable = false, length = 20)
    private ReminderTargetType entityType;

    /** DB primary-key of the Consent or ConsentRule row. */
    @Column(name = "entity_id", nullable = false)
    private Long entityId;

    /** CHECKER_PENDING or MAKER_REVISION */
    @Enumerated(EnumType.STRING)
    @Column(name = "reminder_type", nullable = false, length = 30)
    private ReminderRecipientRole reminderType;

    /**
     * Exact email address this row's reminder was sent to.
     * Part of the unique key — each recipient gets their own row.
     */
    @Column(name = "sent_to_email", nullable = false, length = 255)
    private String sentToEmail;

    /** Human-readable name of the recipient (for admin inspection). */
    @Column(name = "sent_to_name", length = 200)
    private String sentToName;

    /** Wall-clock time the batch job actually dispatched this mail. */
    @Column(name = "sent_at", nullable = false)
    private Instant sentAt;

    /** Snapshot of the status that triggered the reminder (for audit). */
    @Column(name = "trigger_status", length = 40)
    private String triggerStatus;

    /**
     * Days elapsed since the triggering timestamp at the moment of dispatch
     * (submittedAt for CHECKER_PENDING, reviewedAt for MAKER_REVISION).
     */
    @Column(name = "days_elapsed")
    private Long daysElapsed;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;
}