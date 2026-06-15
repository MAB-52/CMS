//package com.consentiq.model.entity;
//
//import jakarta.persistence.*;
//import lombok.*;
//import org.hibernate.annotations.CreationTimestamp;
//import org.hibernate.annotations.UpdateTimestamp;
//import java.time.Instant;
//
//@Entity
//@Table(
//        name = "customer_channel_preferences",
//        uniqueConstraints = @UniqueConstraint(
//                name = "uk_customer_channel_pref",
//                columnNames = {"customer_id", "consent_db_id"}))
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class CustomerChannelPreference {
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
//    /** Token that was used when the preference was last saved — for audit. */
//    @Column(name = "invite_token", nullable = false, length = 64)
//    private String inviteToken;
//
//    @Column(name = "pref_email", nullable = false)
//    @Builder.Default
//    private boolean prefEmail = false;
//
//    @Column(name = "pref_sms", nullable = false)
//    @Builder.Default
//    private boolean prefSms = false;
//
//    @Column(name = "pref_push", nullable = false)
//    @Builder.Default
//    private boolean prefPush = false;
//
//    @Column(name = "pref_whatsapp", nullable = false)
//    @Builder.Default
//    private boolean prefWhatsapp = false;
//
//    @Column(name = "pref_rcs", nullable = false)
//    @Builder.Default
//    private boolean prefRcs = false;
//
//    @CreationTimestamp
//    @Column(name = "created_at", updatable = false)
//    private Instant createdAt;
//
//    @UpdateTimestamp
//    @Column(name = "updated_at")
//    private Instant updatedAt;
//}

package com.consentiq.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

@Entity
@Table(
        name = "customer_channel_preferences",
        uniqueConstraints = @UniqueConstraint(
                name = "uk_customer_channel_pref",
                columnNames = {"customer_id", "consent_db_id"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerChannelPreference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_id", nullable = false, length = 64)
    private String customerId;

    @Column(name = "consent_db_id", nullable = false)
    private Long consentDbId;

    /**
     * Token that was used when the preference was last saved via the public
     * consent link flow.  Null when saved via admin on-behalf capture.
     */
    @Column(name = "invite_token", length = 64)
    private String inviteToken;

    /**
     * Reference to the OnBehalfConsentRecord when this preference was saved
     * by an admin on behalf of the customer.  Null for self-service (link-based) flow.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "on_behalf_record_id",
            nullable = true,
            foreignKey = @ForeignKey(name = "fk_ccp_on_behalf"))
    private OnBehalfConsentRecord onBehalfRecord;

    @Column(name = "pref_email", nullable = false)
    @Builder.Default
    private boolean prefEmail = false;

    @Column(name = "pref_sms", nullable = false)
    @Builder.Default
    private boolean prefSms = false;

    @Column(name = "pref_push", nullable = false)
    @Builder.Default
    private boolean prefPush = false;

    @Column(name = "pref_whatsapp", nullable = false)
    @Builder.Default
    private boolean prefWhatsapp = false;

    @Column(name = "pref_rcs", nullable = false)
    @Builder.Default
    private boolean prefRcs = false;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}
