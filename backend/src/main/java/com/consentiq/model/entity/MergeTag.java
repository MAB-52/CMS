package com.consentiq.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "merge_tags")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MergeTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "tag_key", nullable = false, unique = true, length = 50)
    private String tagKey;

    @Column(name = "tag_label", nullable = false, length = 100)
    private String tagLabel;

    @Column(name = "tag_category", nullable = false, length = 50)
    private String tagCategory;

    @Column(name = "sample_value", length = 200)
    private String sampleValue;
    
    @Column(name = "customer_field", length = 100)
    private String customerField;
    
    @Column(name = "true_label", length = 100)
    private String trueLabel;   // e.g. "VIP"

    @Column(name = "false_label", length = 100)
    private String falseLabel;  // e.g. "Normal User"
}
