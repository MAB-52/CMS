package com.consentiq.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;

@Entity
@Table(
        name = "consent_channel_renders",
        uniqueConstraints = @UniqueConstraint(
                name = "uk_channel_render",
                columnNames = {"consent_translation_id", "channel"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentChannelRender {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "consent_translation_id", nullable = false)
    private ConsentTranslation translation;

    /** EMAIL / SMS / WHATSAPP / RCS / PUSH */
    @Column(name = "channel", nullable = false, length = 20)
    private String channel;

    @Column(name = "rendered_content", columnDefinition = "LONGTEXT")
    private String renderedContent;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}