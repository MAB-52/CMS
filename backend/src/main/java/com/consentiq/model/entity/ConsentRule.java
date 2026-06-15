package com.consentiq.model.entity;

import com.consentiq.enums.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "consent_rules")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "rule_name", nullable = false, length = 200)
    private String ruleName;

    @Column(name = "rule_description", columnDefinition = "TEXT")
    private String ruleDescription;

    @Enumerated(EnumType.STRING)
    @Column(name = "rule_type", nullable = false, length = 40)
    private ConsentRuleType ruleType;

    @Enumerated(EnumType.STRING)
    @Column(name = "predefined_scenario", length = 64)
    private PredefinedRuleScenario predefinedScenario;

    @Column(name = "trigger_event", length = 200)
    private String triggerEvent;

    @Enumerated(EnumType.STRING)
    @Column(name = "primary_segment", length = 64)
    private AudienceSegmentCode primarySegment;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "additional_segments", columnDefinition = "json")
    private List<String> additionalSegmentCodes;

    @Enumerated(EnumType.STRING)
    @Column(name = "schedule_type", nullable = false, length = 32)
    @Builder.Default
    private WorkflowScheduleType scheduleType = WorkflowScheduleType.IMMEDIATE;

    @Column(name = "scheduled_at")
    private Instant scheduledAt;

    @Column(name = "recurring_cron", length = 120)
    private String recurringCron;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "broadcast_channels", columnDefinition = "json")
    private List<String> broadcastChannels;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consent_template_id")
    private Consent consentTemplate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 40)
    @Builder.Default
    private ConsentRuleStatus status = ConsentRuleStatus.DRAFT;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "created_by", nullable = false)
    private User createdBy;

    @Column(name = "submitted_at")
    private Instant submittedAt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "reviewed_by")
    private User reviewedBy;

    @Column(name = "reviewed_at")
    private Instant reviewedAt;

    @Column(name = "reviewer_remarks", columnDefinition = "TEXT")
    private String reviewerRemarks;

    @Column(name = "rejection_reason", columnDefinition = "TEXT")
    private String rejectionReason;

    @Column(name = "revision_reason", columnDefinition = "TEXT")
    private String revisionReason;

    @Column(name = "approved_at")
    private Instant approvedAt;

    @Column(name = "published_at")
    private Instant publishedAt;

    /** When true, Admin (or legacy publish-live) has enabled this rule for the execution engine. */
    @Column(name = "execution_active", nullable = false)
    @Builder.Default
    private boolean executionActive = false;

    @Column(name = "last_executed_at")
    private Instant lastExecutedAt;

    @Column(name = "next_execution_at")
    private Instant nextExecutionAt;

    @Column(name = "execution_running", nullable = false)
    @Builder.Default
    private boolean executionRunning = false;

    @Column(name = "last_execution_outcome", length = 32)
    private String lastExecutionOutcome;

    @Column(name = "last_execution_summary", columnDefinition = "TEXT")
    private String lastExecutionSummary;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}
