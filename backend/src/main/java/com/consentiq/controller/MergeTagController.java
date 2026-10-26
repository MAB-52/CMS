package com.consentiq.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consentiq.model.dto.request.CreateMergeTagRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.MergeTagResponse;
import com.consentiq.service.MergeTagService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/merge-tags")
@RequiredArgsConstructor
public class MergeTagController {

    private static final Logger log = LoggerFactory.getLogger(MergeTagController.class);

    private final MergeTagService mergeTagService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<MergeTagResponse>>> getMergeTags(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getMergeTags | params: none");
        log.info("User={} | action=getMergeTags | entity=MergeTag | id=n/a", cu);
        List<MergeTagResponse> data = mergeTagService.getAllFlat();
        ResponseEntity<ApiResponse<List<MergeTagResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Merge tags retrieved", data));
        log.debug("Exiting getMergeTags | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<MergeTagResponse>> createMergeTag(
            @RequestBody @Valid CreateMergeTagRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering createMergeTag | params: tagKey={}", request.getTagKey());
        log.info("User={} | action=createMergeTag | entity=MergeTag | id=n/a", cu);
        MergeTagResponse data = mergeTagService.create(request);
        ResponseEntity<ApiResponse<MergeTagResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Merge tag created", data));
        log.debug("Exiting createMergeTag | result={}", result.getStatusCode());
        return result;
    }
}
