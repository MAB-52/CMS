package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.entity.ConsentImage;
import com.consentiq.security.UserDetailsImpl;
import com.consentiq.service.ConsentImageService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.charset.StandardCharsets;
import java.util.Map;

@RestController
@RequestMapping("/api/images")
@RequiredArgsConstructor
public class ConsentImageController {

    private static final Logger log = LoggerFactory.getLogger(ConsentImageController.class);

    private final ConsentImageService consentImageService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @PostMapping("/upload")
    @PreAuthorize("hasAnyRole('MAKER','ADMIN')")
    public ResponseEntity<ApiResponse<Map<String, String>>> upload(
            @RequestParam("file") MultipartFile file,
            Authentication authentication,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering upload | params: fileName={} | size={}",
                file != null ? file.getOriginalFilename() : null,
                file != null ? file.getSize() : 0);
        log.info("User={} | action=upload | entity=ConsentImage | id=n/a", cu);
        Long userId = ((UserDetailsImpl) authentication.getPrincipal()).getId();
        String url = consentImageService.store(file, userId);
        ResponseEntity<ApiResponse<Map<String, String>>> result =
                ResponseEntity.ok(ApiResponse.success("Image uploaded successfully", Map.of("url", url)));
        log.debug("Exiting upload | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getImage | params: id={}", id);
        log.info("User={} | action=getImage | entity=ConsentImage | id={}", cu, id);
        ConsentImage image = consentImageService.load(id);
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(image.getContentType()));
        headers.setContentDisposition(
                ContentDisposition.inline()
                        .filename(image.getFilename(), StandardCharsets.UTF_8)
                        .build());
        headers.setCacheControl("public, max-age=31536000, immutable");
        ResponseEntity<byte[]> result = ResponseEntity.ok().headers(headers).body(image.getData());
        log.debug("Exiting getImage | result={}", result.getStatusCode());
        return result;
    }
}
