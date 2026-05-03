package com.consentiq.model.entity;

import com.consentiq.enums.CustomerConsentStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

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

    @Enumerated(EnumType.STRING)
    @Column(name = "consent_status", nullable = false, length = 32)
    @Builder.Default
    private CustomerConsentStatus consentStatus = CustomerConsentStatus.PENDING;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
}
