package com.consentiq.model.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Entity
@Table(
        name = "consent_one_time_codes",
        uniqueConstraints = @UniqueConstraint(name = "uk_consent_one_time_code", columnNames = "code"),
        indexes = @Index(name = "idx_cotc_consent_request_id", columnList = "consent_request_id"))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentOneTimeCode {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 64)
    private String code;

    @Column(name = "consent_request_id", nullable = false)
    private Long consentRequestId;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    @Column(nullable = false)
    @Builder.Default
    private boolean used = false;
}
