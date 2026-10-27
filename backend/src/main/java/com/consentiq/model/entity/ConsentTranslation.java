package com.consentiq.model.entity;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.consentiq.util.HtmlTextUtil;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(
        name = "consent_translations",
        uniqueConstraints = @UniqueConstraint(
                name = "uk_consent_translation_lang",
                columnNames = {"consent_id", "language_code"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentTranslation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "consent_id", nullable = false)
    private Consent consent;

    @Column(name = "language_code", nullable = false, length = 10)
    private String languageCode;

    @Column(name = "content", columnDefinition = "LONGTEXT")
    private String content;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
    
    @OneToMany(mappedBy = "translation", fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<ConsentChannelRender> renders = new ArrayList<>();

    /** Strip script/event handlers on every save path so stored translation HTML is always safe to render. */
    @PrePersist
    @PreUpdate
    void sanitizeContent() {
        content = HtmlTextUtil.sanitizeRichHtml(content);
    }
}