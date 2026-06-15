//package com.consentiq.model.entity;
//
//import jakarta.persistence.*;
//import lombok.*;
//import org.hibernate.annotations.CreationTimestamp;
//import org.hibernate.annotations.JdbcTypeCode;
//import org.hibernate.annotations.UpdateTimestamp;
//import org.hibernate.type.SqlTypes;
//
//import java.time.Instant;
//import java.util.List;
//
//@Entity
//@Table(
//        name = "customer_language_preferences",
//        uniqueConstraints =
//                @UniqueConstraint(name = "uk_customer_consent_lang_pref", columnNames = {"customer_id", "consent_db_id"}))
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class CustomerLanguagePreference {
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
//    @Column(name = "invite_token", nullable = false, length = 64)
//    private String inviteToken;
//
//    @JdbcTypeCode(SqlTypes.JSON)
//    @Column(name = "selected_languages", columnDefinition = "json")
//    private List<String> selectedLanguages;
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
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;

import java.time.Instant;
import java.util.List;

@Entity
@Table(
        name = "customer_language_preferences",
        uniqueConstraints =
                @UniqueConstraint(name = "uk_customer_consent_lang_pref",
                        columnNames = {"customer_id", "consent_db_id"}))
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerLanguagePreference {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "customer_id", nullable = false, length = 64)
    private String customerId;

    @Column(name = "consent_db_id", nullable = false)
    private Long consentDbId;

    /**
     * Token used when saved via public consent link.
     * Null when saved via admin on-behalf capture.
     */
    @Column(name = "invite_token", length = 64)
    private String inviteToken;

    /**
     * Reference to the OnBehalfConsentRecord when this preference was saved
     * by an admin on behalf of the customer.  Null for self-service flow.
     */
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(
            name = "on_behalf_record_id",
            nullable = true,
            foreignKey = @ForeignKey(name = "fk_clp_on_behalf"))
    private OnBehalfConsentRecord onBehalfRecord;

    @JdbcTypeCode(SqlTypes.JSON)
    @Column(name = "selected_languages", columnDefinition = "json")
    private List<String> selectedLanguages;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}
