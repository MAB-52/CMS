//package com.consentiq.service;
//
//import com.consentiq.model.dto.request.LoginRequest;
//import com.consentiq.model.dto.response.JwtResponse;
//import com.consentiq.security.JwtTokenProvider;
//import com.consentiq.security.UserDetailsImpl;
//import lombok.RequiredArgsConstructor;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//@Service
//@RequiredArgsConstructor
//public class AuthService {
//
//    private static final Logger log = LoggerFactory.getLogger(AuthService.class);
//
//    private final AuthenticationManager authenticationManager;
//    private final JwtTokenProvider jwtTokenProvider;
//
//    private static String currentUser() {
//        return SecurityContextHolder.getContext().getAuthentication() != null
//                ? SecurityContextHolder.getContext().getAuthentication().getName()
//                : "anonymous";
//    }
//
//    @Transactional(readOnly = true)
//    public JwtResponse login(LoginRequest request) {
//        String cu = currentUser();
//        log.debug("Entering login | params: email={}", request.getEmail());
//        log.info("User={} | action=login | entity=Auth | id=n/a", cu);
//        log.debug("Transaction started | method=login | email={}", request.getEmail());
//        Authentication auth =
//                authenticationManager.authenticate(
//                        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
//        UserDetailsImpl user = (UserDetailsImpl) auth.getPrincipal();
//        String token = jwtTokenProvider.generateToken(user);
//        log.info("Processing request | entity=Auth | email={} | role={}", user.getEmail(), user.getRole());
//        JwtResponse result =
//                JwtResponse.builder()
//                        .token(token)
//                        .type("Bearer")
//                        .userId(user.getId())
//                        .email(user.getEmail())
//                        .fullName(user.getFullName())
//                        .role(user.getRole().name())
//                        .build();
//        log.debug("Transaction completing | method=login | email={}", request.getEmail());
//        log.debug("Exiting login | result=JwtResponse present | token=****");
//        return result;
//    }
//}


package com.consentiq.service;

import com.consentiq.exception.AccountUnavailableException;
import com.consentiq.model.dto.request.LoginRequest;
import com.consentiq.model.dto.response.JwtResponse;
import com.consentiq.model.entity.User;
import com.consentiq.repository.UserRepository;
import com.consentiq.security.JwtTokenProvider;
import com.consentiq.security.UserDetailsImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class AuthService {

    private static final Logger log = LoggerFactory.getLogger(AuthService.class);

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;
    private final SessionAlertService sessionAlertService;
    private final PasswordEncoder passwordEncoder;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    /**
     * Spring checks "enabled" before the password, so a DisabledException alone would let anyone
     * probe which emails exist. Only reveal the account state when the password is also correct;
     * otherwise answer exactly like a wrong password.
     */
    private RuntimeException unavailableAccount(LoginRequest request) {
        User user = userRepository.findByEmailIgnoreCase(request.getEmail().trim()).orElse(null);
        if (user == null || !passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new BadCredentialsException("Bad credentials");
        }
        if (user.getDeletedAt() != null) {
            log.warn("Login rejected | reason=account_deleted | email={}", user.getEmail());
            return new AccountUnavailableException(
                    "This account has been removed. Please contact your administrator if you need access.",
                    "ACCOUNT_DELETED");
        }
        log.warn("Login rejected | reason=account_deactivated | email={}", user.getEmail());
        return new AccountUnavailableException(
                "Your account has been deactivated. Please contact your administrator to restore access.",
                "ACCOUNT_DISABLED");
    }

    @Transactional
    public JwtResponse login(LoginRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.debug("Entering login | params: email={}", request.getEmail());
        log.info("User={} | action=login | entity=Auth | id=n/a", cu);
        log.debug("Transaction started | method=login | email={}", request.getEmail());

        Authentication auth;
        try {
            auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        } catch (DisabledException e) {
            throw unavailableAccount(request);
        }
        UserDetailsImpl principal = (UserDetailsImpl) auth.getPrincipal();

        User user = userRepository.findById(principal.getId())
                .orElseThrow(() -> new IllegalStateException("User vanished after authentication: " + principal.getId()));

        String newIp = extractClientIp(httpRequest);
        String newDevice = httpRequest.getHeader("User-Agent");
        Instant newLoginTime = Instant.now();
        boolean hadPriorSession = user.getLastLoginAt() != null; // true => person A already had an active session

        // This is the actual "kick out person A" step — bumping this number
        // instantly invalidates every token issued before this moment.
        user.setTokenVersion(user.getTokenVersion() + 1);
        user.setLastLoginAt(newLoginTime);
        user.setLastLoginIp(newIp);
        user.setLastLoginDevice(newDevice);
        userRepository.save(user);

        UserDetailsImpl updatedPrincipal = UserDetailsImpl.fromUser(user);
        String token = jwtTokenProvider.generateToken(updatedPrincipal);

        log.info("Processing request | entity=Auth | email={} | role={}", user.getEmail(), user.getRole());

        if (hadPriorSession) {
            log.info("Branch taken | method=login | condition=priorSession | value=true | email={}", user.getEmail());
            sessionAlertService.sendSessionTakeoverAlert(
                    user.getEmail(), user.getFullName(), newIp, newDevice, newLoginTime);
        }

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

    private String extractClientIp(HttpServletRequest request) {
        String xff = request.getHeader("X-Forwarded-For");
        return (xff != null && !xff.isBlank()) ? xff.split(",")[0].trim() : request.getRemoteAddr();
    }
}
