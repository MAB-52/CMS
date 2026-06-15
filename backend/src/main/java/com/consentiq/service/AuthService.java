package com.consentiq.service;

import com.consentiq.model.dto.request.LoginRequest;
import com.consentiq.model.dto.response.JwtResponse;
import com.consentiq.security.JwtTokenProvider;
import com.consentiq.security.UserDetailsImpl;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @Transactional(readOnly = true)
    public JwtResponse login(LoginRequest request) {
        String cu = currentUser();
        log.debug("Entering login | params: email={}", request.getEmail());
        log.info("User={} | action=login | entity=Auth | id=n/a", cu);
        log.debug("Transaction started | method=login | email={}", request.getEmail());
        Authentication auth =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetailsImpl user = (UserDetailsImpl) auth.getPrincipal();
        String token = jwtTokenProvider.generateToken(user);
        log.info("Processing request | entity=Auth | email={} | role={}", user.getEmail(), user.getRole());
        JwtResponse result =
                JwtResponse.builder()
                        .token(token)
                        .type("Bearer")
                        .userId(user.getId())
                        .email(user.getEmail())
                        .fullName(user.getFullName())
                        .role(user.getRole().name())
                        .build();
        log.debug("Transaction completing | method=login | email={}", request.getEmail());
        log.debug("Exiting login | result=JwtResponse present | token=****");
        return result;
    }
}
