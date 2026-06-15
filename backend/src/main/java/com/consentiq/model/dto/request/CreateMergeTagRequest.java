package com.consentiq.model.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateMergeTagRequest {
 @NotBlank
 @Size(max = 50)
 private String tagKey;       // e.g. "{{customer_age}}"

 @NotBlank
 @Size(max = 100)
 private String tagLabel;     // e.g. "Customer Age"

 @NotBlank
 @Size(max = 50)
 private String tagCategory;  // e.g. "Customer"

 @Size(max = 200)
 private String sampleValue;  // e.g. "30"
 
 private String customerField;
 
 private String trueLabel;   // ← add
 private String falseLabel;  // ← add
}