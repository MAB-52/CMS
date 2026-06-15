package com.consentiq.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(JwtAuthFilter.class);

    private final JwtTokenProvider jwtTokenProvider;
    private final UserDetailsServiceImpl userDetailsService;

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
        log.info("User={} | action=doFilterInternal | entity=JwtAuth | id=n/a", currentUser);
        try {
            String jwt = resolveToken(request);
            if (StringUtils.hasText(jwt) && jwtTokenProvider.validateToken(jwt)) {
                log.info("Branch taken | method=doFilterInternal | condition=tokenValid | value=true");
                String email = jwtTokenProvider.getEmailFromToken(jwt);
                log.info("Processing request | entity=User | id=****");
                UserDetails userDetails = userDetailsService.loadUserByUsername(email);
                UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(
                                userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);
                log.debug("JWT authentication successful | user={}", email);
            } else {
                log.info("Branch taken | method=doFilterInternal | condition=tokenValid | value=false");
            }
        } catch (Exception e) {
            log.error("Exception in doFilterInternal | user={} | message={}", currentUser, e.getMessage(), e);
        }
        filterChain.doFilter(request, response);
        log.debug("Exiting doFilterInternal | completed successfully");
    }

    private String resolveToken(HttpServletRequest request) {
        log.debug("Entering resolveToken | params: uri={}", request.getRequestURI());
        String bearer = request.getHeader("Authorization");
        if (StringUtils.hasText(bearer) && bearer.startsWith("Bearer ")) {
            log.info("Branch taken | method=resolveToken | condition=bearerPresent | value=true");
            log.debug("Exiting resolveToken | result=****");
            return bearer.substring(7);
        }
        log.info("Branch taken | method=resolveToken | condition=bearerPresent | value=false");
        log.debug("Exiting resolveToken | result=null");
        return null;
    }
}
