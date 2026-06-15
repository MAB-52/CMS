package com.consentiq.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Table(name = "on_behalf_consent_records")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OnBehalfConsentRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_id", nullable = false, length = 64)
    private String customerId;

    @Column(name = "consent_type", nullable = false, length = 200)
    private String consentType;

    @Column(name = "mode", nullable = false, length = 64)
    private String mode;

    @Column(name = "source_channel", nullable = false, length = 64)
    private String sourceChannel;

    @Column(name = "evidence_reference", length = 500)
    private String evidenceReference;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "recorded_by", nullable = false)
    private User recordedBy;

    @Column(name = "recorded_at", nullable = false)
    private Instant recordedAt;
}
