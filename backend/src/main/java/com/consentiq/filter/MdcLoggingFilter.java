package com.consentiq.filter;

import com.consentiq.security.JwtTokenProvider;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

@Slf4j
public class MdcLoggingFilter extends OncePerRequestFilter {

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
        String requestId = UUID.randomUUID().toString();
        MDC.put(MDC_REQUEST_ID, requestId);
        String userId = resolveUserId(request);
        MDC.put(MDC_USER_ID, userId);
        long start = System.currentTimeMillis();
        log.debug("→ {} {} | User: {} | ReqId: {}", request.getMethod(), request.getRequestURI(), userId, requestId);
        try {
            filterChain.doFilter(request, response);
        } finally {
            long ms = System.currentTimeMillis() - start;
            log.debug(
                    "← {} {} | Status: {} | Time: {}ms",
                    request.getMethod(),
                    request.getRequestURI(),
                    response.getStatus(),
                    ms);
            MDC.remove(MDC_REQUEST_ID);
            MDC.remove(MDC_USER_ID);
        }
    }

    private String resolveUserId(HttpServletRequest request) {
        String bearer = request.getHeader("Authorization");
        if (!StringUtils.hasText(bearer) || !bearer.startsWith("Bearer ")) {
            return "anonymous";
        }
        String token = bearer.substring(7);
        try {
            if (jwtTokenProvider.validateToken(token)) {
                return String.valueOf(jwtTokenProvider.getUserIdFromToken(token));
            }
        } catch (Exception ignored) {
            return "anonymous";
        }
        return "anonymous";
    }
}
