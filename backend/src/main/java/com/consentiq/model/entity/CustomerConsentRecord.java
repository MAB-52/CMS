//package com.consentiq.model.entity;
//
//import com.consentiq.enums.CustomerConsentRecordStatus;
//import jakarta.persistence.*;
//import lombok.*;
//import org.hibernate.annotations.CreationTimestamp;
//import org.hibernate.annotations.UpdateTimestamp;
//
//import java.time.Instant;
//import java.time.LocalDate;
//
//@Entity
//@Table(
//        name = "customer_consent_records",
//        uniqueConstraints =
//                @UniqueConstraint(name = "uk_ccr_customer_consent", columnNames = {"customer_id", "consent_db_id"}),
//        indexes = {
//            @Index(name = "idx_ccr_consent_db_id", columnList = "consent_db_id"),
//            @Index(name = "idx_ccr_customer_id", columnList = "customer_id"),
//            @Index(name = "idx_ccr_consent_status", columnList = "consent_db_id, status")
//        })
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class CustomerConsentRecord {
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(name = "customer_id", nullable = false, length = 64)
//    private String customerId;
//
//    @Column(name = "consent_db_id", nullable = false)
//    private Long consentDbId;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "status", nullable = false, length = 32)
//    @Builder.Default
//    private CustomerConsentRecordStatus status = CustomerConsentRecordStatus.PENDING;
//
//    @Column(name = "responded_at")
//    private Instant respondedAt;
//
//    @Column(name = "consent_valid_until")
//    private LocalDate consentValidUntil;
//
//    @Column(name = "last_invite_sent_at")
//    private Instant lastInviteSentAt;
//
//    @Column(name = "source_rule_id")
//    private Long sourceRuleId;
//
//    @Column(name = "source_broadcast_id")
//    private Long sourceBroadcastId;
//
//    @CreationTimestamp
//    @Column(name = "created_at", updatable = false)
//    private Instant createdAt;
//
//    @UpdateTimestamp
//    @Column(name = "updated_at", nullable = false)
//    private Instant updatedAt;
//}

package com.consentiq.model.entity;

import com.consentiq.enums.CustomerConsentRecordStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(
        name = "customer_consent_records",
        uniqueConstraints =
                @UniqueConstraint(name = "uk_ccr_customer_consent", columnNames = {"customer_id", "consent_db_id"}),
        indexes = {
            @Index(name = "idx_ccr_consent_db_id",  columnList = "consent_db_id"),
            @Index(name = "idx_ccr_customer_id",     columnList = "customer_id"),
            @Index(name = "idx_ccr_consent_status",  columnList = "consent_db_id, status")
        })
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerConsentRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_id", nullable = false, length = 64)
    private String customerId;

    @Column(name = "consent_db_id", nullable = false)
    private Long consentDbId;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 32)
    @Builder.Default
    private CustomerConsentRecordStatus status = CustomerConsentRecordStatus.PENDING;

    @Column(name = "responded_at")
    private Instant respondedAt;

    @Column(name = "consent_valid_until")
    private LocalDate consentValidUntil;

    @Column(name = "last_invite_sent_at")
    private Instant lastInviteSentAt;

    @Column(name = "source_rule_id")
    private Long sourceRuleId;

    @Column(name = "source_broadcast_id")
    private Long sourceBroadcastId;

    /**
     * Reference to the OnBehalfConsentRecord that caused this record's last
     * status update, if the update was performed by an admin on behalf of the
     * customer. Null for self-service (link-based) responses and scheduler
     * transitions (expiry, expiring-soon).
     *
     * LAZY loaded — only fetched when explicitly accessed, never on bulk reads.
     * JPA manages the FK column (on_behalf_record_id) and the constraint.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "on_behalf_record_id",
            nullable = true,
            foreignKey = @ForeignKey(name = "fk_ccr_on_behalf"))
    private OnBehalfConsentRecord onBehalfRecord;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
}
