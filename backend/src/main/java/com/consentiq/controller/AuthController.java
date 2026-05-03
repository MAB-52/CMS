package com.consentiq.controller;

import com.consentiq.model.dto.request.LoginRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.JwtResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<JwtResponse>> login(@Valid @RequestBody LoginRequest request) {
        log.info("login | email={}", request.getEmail());
        JwtResponse jwt = authService.login(request);
        return ResponseEntity.ok(ApiResponse.success("Login successful", jwt));
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(Authentication authentication) {
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl user) {
            log.info("User logged out | email={}", user.getEmail());
        } else {
            log.info("User logged out | email=unknown");
        }
        return ResponseEntity.ok(ApiResponse.success("Logged out successfully", null));
    }
}
