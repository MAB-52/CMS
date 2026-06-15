package com.consentiq.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Optional;

@Component
public class JwtTokenProvider {

    private static final Logger log = LoggerFactory.getLogger(JwtTokenProvider.class);

    public static final String CLAIM_TYPE = "type";
    public static final String CONSENT_SESSION = "CONSENT_SESSION";
    private static final String CLAIM_CONSENT_REQUEST_ID = "consentRequestId";

    private static final String CLAIM_USER_ID = "userId";
    private static final String CLAIM_EMAIL = "email";
    private static final String CLAIM_ROLE = "role";

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpirationMs;

    @Value("${jwt.consent-session-expiration-ms:1800000}")
    private long consentSessionExpirationMs;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private SecretKey key() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(UserDetailsImpl user) {
        String cu = currentUser();
        log.debug("Entering generateToken | params: userId={}", user != null ? user.getId() : null);
        log.info("User={} | action=generateToken | entity=Jwt | id={}", cu, user != null ? user.getId() : null);
        Date now = new Date();
        Date expiry = new Date(now.getTime() + jwtExpirationMs);
        String result =
                Jwts.builder()
                        .setSubject(user.getEmail())
                        .claim(CLAIM_USER_ID, user.getId())
                        .claim(CLAIM_EMAIL, user.getEmail())
                        .claim(CLAIM_ROLE, user.getRole().name())
                        .setIssuedAt(now)
                        .setExpiration(expiry)
                        .signWith(key())
                        .compact();
        log.info("Token issued | entity=Jwt | token=****");
        log.debug("Exiting generateToken | result=****");
        return result;
    }

    /**
     * Short-lived cookie session for public consent respond flow (not a staff login token).
     */
    public String generateConsentSessionToken(long consentRequestId) {
        String cu = currentUser();
        log.debug("Entering generateConsentSessionToken | params: consentRequestId={}", consentRequestId);
        log.info(
                "User={} | action=generateConsentSessionToken | entity=ConsentSession | id={}",
                cu,
                consentRequestId);
        Date now = new Date();
        Date expiry = new Date(now.getTime() + consentSessionExpirationMs);
        String result =
                Jwts.builder()
                        .setSubject("consent-session")
                        .claim(CLAIM_TYPE, CONSENT_SESSION)
                        .claim(CLAIM_CONSENT_REQUEST_ID, consentRequestId)
                        .setIssuedAt(now)
                        .setExpiration(expiry)
                        .signWith(key())
                        .compact();
        log.info("Consent session token issued | token=****");
        log.debug("Exiting generateConsentSessionToken | result=****");
        return result;
    }

    /**
     * Validates signature/expiry and returns invite row id when {@value #CONSENT_SESSION} token.
     */
    public Optional<Long> validateConsentSessionAndGetRequestId(String token) {
        String cu = currentUser();
        log.debug("Entering validateConsentSessionAndGetRequestId | params: tokenPresent={}", token != null && !token.isBlank());
        log.info("User={} | action=validateConsentSessionAndGetRequestId | entity=ConsentSession | id=n/a", cu);
        if (token == null || token.isBlank()) {
            log.warn("Empty result returned | method=validateConsentSessionAndGetRequestId | filter=tokenBlank");
            log.debug("Exiting validateConsentSessionAndGetRequestId | result=empty");
            return Optional.empty();
        }
        try {
            Claims claims = Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token).getBody();
            if (!CONSENT_SESSION.equals(claims.get(CLAIM_TYPE, String.class))) {
                log.info("Branch taken | method=validateConsentSessionAndGetRequestId | condition=type | value=nonSession");
                log.debug("Exiting validateConsentSessionAndGetRequestId | result=empty");
                return Optional.empty();
            }
            Object raw = claims.get(CLAIM_CONSENT_REQUEST_ID);
            if (raw == null) {
                log.warn("Empty result returned | method=validateConsentSessionAndGetRequestId | filter=missingClaim");
                log.debug("Exiting validateConsentSessionAndGetRequestId | result=empty");
                return Optional.empty();
            }
            Optional<Long> out =
                    raw instanceof Number n
                            ? Optional.of(n.longValue())
                            : Optional.of(Long.parseLong(raw.toString()));
            log.info("Processing request | entity=ConsentSession | present={}", out.isPresent());
            log.debug("Exiting validateConsentSessionAndGetRequestId | result=present");
            return out;
        } catch (ExpiredJwtException e) {
            log.error(
                    "Exception in validateConsentSessionAndGetRequestId | user={} | message={}",
                    cu,
                    e.getMessage(),
                    e);
            log.debug("Exiting validateConsentSessionAndGetRequestId | result=empty");
            return Optional.empty();
        } catch (MalformedJwtException | UnsupportedJwtException | SignatureException | IllegalArgumentException e) {
            log.error(
                    "Exception in validateConsentSessionAndGetRequestId | user={} | message={}",
                    cu,
                    e.getMessage(),
                    e);
            log.debug("Exiting validateConsentSessionAndGetRequestId | result=empty");
            return Optional.empty();
        }
    }

    public boolean validateToken(String token) {
        String cu = currentUser();
        log.debug("Entering validateToken | params: tokenPresent={}", token != null && !token.isBlank());
        log.info("User={} | action=validateToken | entity=Jwt | id=n/a", cu);
        if (token == null || token.isBlank()) {
            log.warn("JWT validation failed | reason=empty | user={}", cu);
            log.debug("Exiting validateToken | result=false");
            return false;
        }
        try {
            Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token);
            log.debug("Exiting validateToken | result=true");
            return true;
        } catch (ExpiredJwtException e) {
            log.error("Exception in validateToken | user={} | message={}", cu, e.getMessage(), e);
            log.debug("Exiting validateToken | result=false");
            return false;
        } catch (MalformedJwtException e) {
            log.error("Exception in validateToken | user={} | message={}", cu, e.getMessage(), e);
            log.debug("Exiting validateToken | result=false");
            return false;
        } catch (UnsupportedJwtException e) {
            log.error("Exception in validateToken | user={} | message={}", cu, e.getMessage(), e);
            log.debug("Exiting validateToken | result=false");
            return false;
        } catch (SignatureException e) {
            log.error("Exception in validateToken | user={} | message={}", cu, e.getMessage(), e);
            log.debug("Exiting validateToken | result=false");
            return false;
        } catch (IllegalArgumentException e) {
            log.error("Exception in validateToken | user={} | message={}", cu, e.getMessage(), e);
            log.debug("Exiting validateToken | result=false");
            return false;
        }
    }

    public Long getUserIdFromToken(String token) {
        String cu = currentUser();
        log.debug("Entering getUserIdFromToken | params: token=****");
        log.info("User={} | action=getUserIdFromToken | entity=Jwt | id=n/a", cu);
        Claims claims = parseClaims(token);
        Object uid = claims.get(CLAIM_USER_ID);
        Long result =
                uid instanceof Number n ? n.longValue() : Long.parseLong(uid.toString());
        log.debug("Exiting getUserIdFromToken | result={}", result);
        return result;
    }

    public String getEmailFromToken(String token) {
        String cu = currentUser();
        log.debug("Entering getEmailFromToken | params: token=****");
        log.info("User={} | action=getEmailFromToken | entity=Jwt | id=n/a", cu);
        String result = parseClaims(token).get(CLAIM_EMAIL, String.class);
        log.debug("Exiting getEmailFromToken | result={}", result);
        return result;
    }

    public String getRoleFromToken(String token) {
        String cu = currentUser();
        log.debug("Entering getRoleFromToken | params: token=****");
        log.info("User={} | action=getRoleFromToken | entity=Jwt | id=n/a", cu);
        String result = parseClaims(token).get(CLAIM_ROLE, String.class);
        log.debug("Exiting getRoleFromToken | result={}", result);
        return result;
    }

    private Claims parseClaims(String token) {
        log.debug("Entering parseClaims | params: token=****");
        Claims body = Jwts.parserBuilder().setSigningKey(key()).build().parseClaimsJws(token).getBody();
        log.debug("Exiting parseClaims | completed successfully");
        return body;
    }
}
