package com.consentiq.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Serves broadcast email inline images written by {@link com.consentiq.service.ConsentBroadcastEmailInlineImageService}.
 * Exposed without authentication under {@code /api/public/**}.
 */
@RestController
@RequestMapping("/api/public/broadcast-email-images")
public class PublicBroadcastEmailImageController {

    private static final Logger log = LoggerFactory.getLogger(PublicBroadcastEmailImageController.class);

    private static final Pattern SAFE_FILE =
            Pattern.compile("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.(png|jpg|jpeg|gif|webp)$",
                    Pattern.CASE_INSENSITIVE);

    @Value("${consentiq.broadcast.email-images.storage-dir:}")
    private String storageDir;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> getImage(@PathVariable String fileName, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getImage | params: fileName={}", fileName);
        log.info("User={} | action=getImage | entity=BroadcastEmailImage | id=n/a", cu);
        if (!StringUtils.hasText(storageDir) || !SAFE_FILE.matcher(fileName).matches()) {
            log.warn("Empty result returned | method=getImage | filter=invalidPathOrPattern | user={}", cu);
            ResponseEntity<Resource> notFound = ResponseEntity.notFound().build();
            log.debug("Exiting getImage | result={}", notFound.getStatusCode());
            return notFound;
        }
        Path dir = Paths.get(storageDir).toAbsolutePath().normalize();
        Path file = dir.resolve(fileName).normalize();
        if (!file.startsWith(dir) || !Files.isRegularFile(file)) {
            log.warn("No record found | entity=BroadcastEmailImage | id={} | user={}", fileName, cu);
            ResponseEntity<Resource> notFound = ResponseEntity.notFound().build();
            log.debug("Exiting getImage | result={}", notFound.getStatusCode());
            return notFound;
        }
        try {
            byte[] bytes = Files.readAllBytes(file);
            MediaType mediaType = mediaTypeForFileName(fileName);
            ByteArrayResource body = new ByteArrayResource(bytes);
            ResponseEntity<Resource> ok =
                    ResponseEntity.ok()
                            .header(HttpHeaders.CACHE_CONTROL, "public, max-age=31536000, immutable")
                            .contentType(mediaType)
                            .contentLength(bytes.length)
                            .body(body);
            log.debug("Exiting getImage | result={}", ok.getStatusCode());
            return ok;
        } catch (IOException ex) {
            log.error("Exception in getImage | user={} | message={}", cu, ex.getMessage(), ex);
            ResponseEntity<Resource> notFound = ResponseEntity.notFound().build();
            log.debug("Exiting getImage | result={}", notFound.getStatusCode());
            return notFound;
        }
    }

    private static MediaType mediaTypeForFileName(String fileName) {
        String lower = fileName.toLowerCase(Locale.ROOT);
        if (lower.endsWith(".png")) {
            return MediaType.IMAGE_PNG;
        }
        if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
            return MediaType.IMAGE_JPEG;
        }
        if (lower.endsWith(".gif")) {
            return MediaType.IMAGE_GIF;
        }
        if (lower.endsWith(".webp")) {
            return MediaType.parseMediaType("image/webp");
        }
        return MediaType.APPLICATION_OCTET_STREAM;
    }
}
