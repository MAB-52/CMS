package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.MergeTagResponse;
import com.consentiq.service.MergeTagService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/merge-tags")
@RequiredArgsConstructor
@Slf4j
public class MergeTagController {

    private final MergeTagService mergeTagService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<MergeTagResponse>>> getMergeTags() {
        log.info("getMergeTags (flat list)");
        return ResponseEntity.ok(ApiResponse.success("Merge tags retrieved", mergeTagService.getAllFlat()));
    }
}
