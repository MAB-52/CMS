package com.consentiq.model.dto.response;

import com.consentiq.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRowResponse {
    private Long id;
    private String fullName;
    private String email;
    private UserRole role;
    private Boolean active;
    private Instant createdAt;
    private Instant updatedAt;
}