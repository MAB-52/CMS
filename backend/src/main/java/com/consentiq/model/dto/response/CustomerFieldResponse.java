//New 
package com.consentiq.model.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomerFieldResponse {
    private String fieldKey;   // matches Customer entity field name exactly
    private String fieldLabel; // human-readable label shown in dropdown
    private String fieldType; // "STRING", "BOOLEAN", "DATE", "NUMBER"
}
