package com.consentiq.model.dto.request;

import com.consentiq.enums.UserRole;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateUserRequest {

    @Size(max = 100, message = "Full name must not exceed 100 characters")
    private String fullName;

    @Email(message = "Must be a valid email address")
    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;

    // null means "do not change password"
    @Size(min = 8, max = 100, message = "Password must be between 8 and 100 characters")
    private String password;

    private UserRole role;

    private Boolean active;
}