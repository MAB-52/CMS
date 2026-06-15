package com.consentiq.controller;

import com.consentiq.model.dto.request.LoginRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.JwtResponse;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    private final AuthService authService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<JwtResponse>> login(
            @Valid @RequestBody LoginRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering login | params: email={}", request.getEmail());
        log.info("User={} | action=login | entity=Auth | id=n/a", cu);
        JwtResponse jwt = authService.login(request);
        ResponseEntity<ApiResponse<JwtResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Login successful", jwt));
        log.debug("Exiting login | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout(
            Authentication authentication, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering logout | params: authPresent={}", authentication != null);
        log.info("User={} | action=logout | entity=Auth | id=n/a", cu);
        if (authentication != null && authentication.getPrincipal() instanceof UserDetailsImpl user) {
            log.info("Branch taken | method=logout | condition=principal | value=user | email={}", user.getEmail());
        } else {
            log.info("Branch taken | method=logout | condition=principal | value=unknown");
        }
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(ApiResponse.success("Logged out successfully", null));
        log.debug("Exiting logout | result={}", result.getStatusCode());
        return result;
    }
}
