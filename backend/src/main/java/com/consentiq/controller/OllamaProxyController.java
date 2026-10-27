package com.consentiq.controller;

import java.time.Duration;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.client.RestTemplate;

import jakarta.servlet.http.HttpServletRequest;

/**
 * Server-side proxy to the Ollama instance running on the same host as this backend.
 * The browser calls these endpoints (JWT-protected); the backend forwards to Ollama on
 * localhost, so Ollama never has to be exposed outside the server.
 */
@RestController
@RequestMapping("/api/ai/ollama")
public class OllamaProxyController {

    private static final Logger log = LoggerFactory.getLogger(OllamaProxyController.class);

    private final RestTemplate ollamaClient;
    private final String ollamaBaseUrl;

    public OllamaProxyController(
            RestTemplateBuilder builder,
            @Value("${ollama.base-url:http://localhost:11434}") String ollamaBaseUrl,
            @Value("${ollama.read-timeout-seconds:300}") long readTimeoutSeconds) {
        this.ollamaBaseUrl = ollamaBaseUrl.replaceAll("/+$", "");
        this.ollamaClient = builder
                .setConnectTimeout(Duration.ofSeconds(5))
                .setReadTimeout(Duration.ofSeconds(readTimeoutSeconds))
                .build();
    }

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/tags")
    public ResponseEntity<String> listModels(HttpServletRequest httpRequest) {
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                currentUser());
        return forward(() -> ollamaClient.getForEntity(ollamaBaseUrl + "/api/tags", String.class), "tags");
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generate(@RequestBody Map<String, Object> body, HttpServletRequest httpRequest) {
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={} | model={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                currentUser(),
                body.get("model"));
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        return forward(
                () -> ollamaClient.postForEntity(
                        ollamaBaseUrl + "/api/generate", new HttpEntity<>(body, headers), String.class),
                "generate");
    }

    private ResponseEntity<String> forward(OllamaCall call, String action) {
        try {
            ResponseEntity<String> upstream = call.execute();
            return ResponseEntity.status(upstream.getStatusCode())
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(upstream.getBody());
        } catch (RestClientResponseException e) {
            log.warn("Ollama {} returned {} | body={}", action, e.getStatusCode(), e.getResponseBodyAsString());
            return ResponseEntity.status(e.getStatusCode())
                    .contentType(MediaType.APPLICATION_JSON)
                    .body(e.getResponseBodyAsString());
        } catch (ResourceAccessException e) {
            log.error("Ollama unreachable at {} | action={} | message={}", ollamaBaseUrl, action, e.getMessage());
            return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)
                    .contentType(MediaType.APPLICATION_JSON)
                    .body("{\"error\":\"Ollama is not reachable on the server\"}");
        }
    }

    @FunctionalInterface
    private interface OllamaCall {
        ResponseEntity<String> execute();
    }
}
