package com.consentiq.model.entity;

import com.consentiq.enums.BroadcastExecutionStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.util.Map;

@Entity
@Table(name = "consent_rule_executions")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentRuleExecution {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "consent_rule_id", nullable = false)
    private ConsentRule consentRule;

    /** MANUAL or AUTOMATIC */
    @Column(name = "trigger_type", nullable = false, length = 20)
    private String triggerType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "triggered_by_user_id")
    private User triggeredBy;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private BroadcastExecutionStatus status;

    @Column(name = "audience_evaluated", nullable = false)
    private int audienceEvaluated;

    @Column(name = "eligible_count", nullable = false)
    private int eligibleCount;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "channel_results", columnDefinition = "json")
    private Map<String, Object> channelResults;

    @Column(name = "summary_notes", columnDefinition = "TEXT")
    private String summaryNotes;

    @Column(name = "started_at", nullable = false)
    private Instant startedAt;

    @Column(name = "completed_at")
    private Instant completedAt;

    /** Optional batch progress for email dispatch (chunks are sized via consentiq.batch.email-chunk-size). */
    @Column(name = "chunks_total")
    private Integer chunksTotal;

    @Column(name = "chunks_completed")
    private Integer chunksCompleted;

    @Column(name = "progress_notes", columnDefinition = "TEXT")
    private String progressNotes;
}
