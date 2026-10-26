package com.consentiq.filter;

import com.consentiq.security.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

public class MdcLoggingFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(MdcLoggingFilter.class);

    private static final String MDC_REQUEST_ID = "requestId";
    private static final String MDC_USER_ID = "userId";

    private final JwtTokenProvider jwtTokenProvider;

    public MdcLoggingFilter(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        String currentUser =
                SecurityContextHolder.getContext().getAuthentication() != null
                        ? SecurityContextHolder.getContext().getAuthentication().getName()
                        : "anonymous";
        log.debug(
                "Entering doFilterInternal | params: method={} | uri={}",
                request.getMethod(),
                request.getRequestURI());
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                request.getMethod(),
                request.getRequestURI(),
                currentUser);
        log.info("User={} | action=doFilterInternal | entity=MdcLogging | id=n/a", currentUser);
        String requestId = UUID.randomUUID().toString();
        MDC.put(MDC_REQUEST_ID, requestId);
        String userId = resolveUserId(request);
        MDC.put(MDC_USER_ID, userId);
        long start = System.currentTimeMillis();
        log.debug("request start | method={} | uri={} | mdcUserId={} | reqId={}", request.getMethod(), request.getRequestURI(), userId, requestId);
        try {
            filterChain.doFilter(request, response);
        } finally {
            long ms = System.currentTimeMillis() - start;
            log.debug(
                    "request end | method={} | uri={} | status={} | durationMs={}",
                    request.getMethod(),
                    request.getRequestURI(),
                    response.getStatus(),
                    ms);
            MDC.remove(MDC_REQUEST_ID);
            MDC.remove(MDC_USER_ID);
        }
        log.debug("Exiting doFilterInternal | completed successfully");
    }

    private String resolveUserId(HttpServletRequest request) {
        log.debug("Entering resolveUserId | params: uri={}", request.getRequestURI());
        String bearer = request.getHeader("Authorization");
        if (!StringUtils.hasText(bearer) || !bearer.startsWith("Bearer ")) {
            log.info("Branch taken | method=resolveUserId | condition=bearer | value=absent");
            log.debug("Exiting resolveUserId | result=anonymous");
            return "anonymous";
        }
        String token = bearer.substring(7);
        try {
            if (jwtTokenProvider.validateToken(token)) {
                log.info("Branch taken | method=resolveUserId | condition=validToken | value=true");
                String id = String.valueOf(jwtTokenProvider.getUserIdFromToken(token));
                log.debug("Exiting resolveUserId | result={}", id);
                return id;
            }
        } catch (Exception e) {
            log.error("Exception in resolveUserId | user=anonymous | message={}", e.getMessage(), e);
        }
        log.info("Branch taken | method=resolveUserId | condition=validToken | value=false");
        log.debug("Exiting resolveUserId | result=anonymous");
        return "anonymous";
    }
}
