package com.consentiq.model.entity;

import java.time.Instant;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "consents")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Consent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "consent_id", nullable = false, unique = true, length = 20)
    private String consentId;

    @Column(name = "consent_name", nullable = false, length = 200)
    private String consentName;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private ConsentCategory category;

    @Column(name = "validity_period_days")
    private Integer validityPeriodDays;

    @Column(name = "validity_start_date")
    private LocalDate validityStartDate;

    @Column(name = "validity_end_date")
    private LocalDate validityEndDate;

    @Column(name = "consent_message", columnDefinition = "LONGTEXT")
    private String consentMessage;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    @Builder.Default
    private ConsentStatus status = ConsentStatus.DRAFT;
    
    @Column(name = "channel_email", nullable = false)
    @Builder.Default
    private boolean channelEmail = false;

    @Column(name = "channel_sms", nullable = false)
    @Builder.Default
    private boolean channelSms = false;

    @Column(name = "channel_push", nullable = false)
    @Builder.Default
    private boolean channelPush = false;

    @Column(name = "channel_whatsapp", nullable = false)
    @Builder.Default
    private boolean channelWhatsapp = false;

    @Column(name = "channel_rcs", nullable = false)
    @Builder.Default
    private boolean channelRcs = false;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "tags_used", columnDefinition = "json")
    private List<String> tagsUsed;

    @Column(name = "search_tags", length = 500)
    private String searchTags;

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

    @Column(name = "rejection_reason", columnDefinition = "TEXT")
    private String rejectionReason;

    @Column(name = "revision_message", columnDefinition = "TEXT")
    private String revisionMessage;

    @Column(name = "published_at")
    private Instant publishedAt;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;

    @Column(name = "approve_reason", columnDefinition = "TEXT")
    private String approveReason;

    /** When true, the maker opted to create a broadcast rule paired with this consent. */
    @Column(name = "linked_rule_intent", nullable = false)
    @Builder.Default
    private boolean linkedRuleIntent = false;

    /** Paired broadcast rule (DRAFT onward); FK lives on consents.linked_rule_id. */
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "linked_rule_id")
    private ConsentRule linkedRule;
    
    
 // Addition to backend/src/main/java/com/consentiq/model/entity/Consent.java
 // Add these fields inside the existing class:

     @org.hibernate.annotations.JdbcTypeCode(org.hibernate.type.SqlTypes.JSON)
     @Column(name = "last_reviewed_combinations", columnDefinition = "json")
     private List<Map<String, String>> lastReviewedCombinations;

     @org.hibernate.annotations.JdbcTypeCode(org.hibernate.type.SqlTypes.JSON)
     @Column(name = "revision_flagged_combinations", columnDefinition = "json")
     private List<Map<String, String>> revisionFlaggedCombinations;

     @OneToMany(mappedBy = "consent", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
     @Builder.Default
     private List<ConsentTranslation> translations = new ArrayList<>();
}
