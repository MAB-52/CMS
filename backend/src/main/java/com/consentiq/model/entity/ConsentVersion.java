package com.consentiq.model.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.util.Map;

@Entity
@Table(name = "consent_versions")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsentVersion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "consent_id", nullable = false)
    private Consent consent;

    @Column(name = "version_number", nullable = false)
    private Integer versionNumber;

    @Column(name = "consent_message_snapshot", columnDefinition = "LONGTEXT")
    private String consentMessageSnapshot;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "changed_fields", columnDefinition = "json")
    private Map<String, Map<String, String>> changedFields;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "changed_by", nullable = false)
    private User changedBy;

    @Column(name = "changed_at", nullable = false)
    private Instant changedAt;
}
