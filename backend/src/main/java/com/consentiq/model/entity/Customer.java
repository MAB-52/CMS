package com.consentiq.model.entity;

import com.consentiq.enums.CustomerConsentStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.time.LocalDate;

@Entity
@Table(name = "customers", indexes = {
        @Index(name = "idx_customers_customer_id", columnList = "customer_id"),
        @Index(name = "idx_customers_mobile", columnList = "mobile_number")
})
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_id", nullable = false, unique = true, length = 64)
    private String customerId;

    @Column(name = "full_name", nullable = false, length = 200)
    private String fullName;

    @Column(name = "mobile_number", nullable = false, length = 32)
    private String mobileNumber;

    @Column(name = "email", length = 255)
    private String email;

//    @Enumerated(EnumType.STRING)
//    @Column(name = "consent_status", nullable = false, length = 32)
//    @Builder.Default
//    private CustomerConsentStatus consentStatus = CustomerConsentStatus.PENDING;

    /** When true, customer is eligible for VIP / priority segmentation. */
    @Column(name = "vip_flag", nullable = false)
    @Builder.Default
    private boolean vipFlag = false;

    /** End of current consent validity window (derived from accepted template or admin capture). */
    @Column(name = "consent_valid_until")
    private LocalDate consentValidUntil;

    @Column(name = "last_consent_invite_sent_at")
    private Instant lastConsentInviteSentAt;

    @Column(name = "last_consent_response_at")
    private Instant lastConsentResponseAt;

    /** After a decline, re-engagement broadcasts are allowed only on or after this instant. */
    @Column(name = "re_engagement_eligible_after")
    private Instant reEngagementEligibleAfter;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
    
    @Column(name = "city", length = 100)
    private String city;
    
    @Column(name = "account_type", length = 50)
    private String accountType;
}
