package com.consentiq.model.entity;

import com.consentiq.enums.InviteTokenResponseStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.util.List;

@Entity
@Table(
        name = "consent_invite_tokens",
        uniqueConstraints = @UniqueConstraint(name = "uk_consent_invite_token", columnNames = "token"))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentInviteToken {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 64)
    private String token;

    @Column(name = "customer_id", nullable = false, length = 64)
    private String customerId;

    @Column(name = "consent_db_id", nullable = false)
    private Long consentDbId;

    /**
     * Human-readable summary of capture-time channel selection (for reporting and legacy reads).
     * May be longer when multiple channels are stored.
     */
    @Column(name = "delivery_channel", nullable = false, length = 512)
    private String deliveryChannel;

    /** Channels selected at capture consent; must be a subset of the consent template's configured channels. */
    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "capture_delivery_channels", columnDefinition = "json")
    private List<String> captureDeliveryChannels;

    @Column(name = "consent_type_label", nullable = false, length = 300)
    private String consentTypeLabel;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "expires_at", nullable = false)
    private Instant expiresAt;

    @Enumerated(EnumType.STRING)
    @Column(
            name = "response_status",
            nullable = false,
            length = 20,
            columnDefinition = "varchar(20) not null default 'PENDING'")
    @Builder.Default
    private InviteTokenResponseStatus responseStatus = InviteTokenResponseStatus.PENDING;

    @Column(name = "responded_at")
    private Instant respondedAt;
}
