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
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    private final BatchEmailDispatchService emailDispatchService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @Transactional
    public JwtResponse login(LoginRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.debug("Entering login | params: email={}", request.getEmail());
        log.info("User={} | action=login | entity=Auth | id=n/a", cu);
        log.debug("Transaction started | method=login | email={}", request.getEmail());

        Authentication auth =
                authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
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
            try {
                sendSessionTakeoverAlert(user, newIp, newDevice, newLoginTime);
            } catch (Exception e) {
                // Never fail B's login because the email to A failed to send
                log.error("Exception sending session takeover alert | user={} | message={}", cu, e.getMessage(), e);
            }
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

    // This runs the moment B logs in — it notifies A, BEFORE A's browser even
    // notices anything is wrong. A only gets rejected on their NEXT request.
    private void sendSessionTakeoverAlert(User user, String ip, String device, Instant time) {
        String subject = "Security Alert: New login to your ConsentIQ account";
        String html = """
                <p>Hi %s,</p>
                <p>A new login to your ConsentIQ account (%s) was just detected:</p>
                <ul>
                  <li>Time: %s</li>
                  <li>IP Address: %s</li>
                  <li>Device/Browser: %s</li>
                </ul>
                <p>Your previous session has been logged out. If this was you, no action is needed.</p>
               
                """.formatted(user.getFullName(), user.getEmail(), time, ip, device == null ? "Unknown" : device);
        emailDispatchService.sendSmtpHtmlEmail(user.getEmail(), subject, html);
    }

    private String extractClientIp(HttpServletRequest request) {
        String xff = request.getHeader("X-Forwarded-For");
        return (xff != null && !xff.isBlank()) ? xff.split(",")[0].trim() : request.getRemoteAddr();
    }
}
