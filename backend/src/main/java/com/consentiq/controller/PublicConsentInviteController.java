package com.consentiq.controller;

import com.consentiq.model.dto.request.PublicConsentRespondRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.PublicConsentInviteDetailResponse;
import com.consentiq.service.PublicConsentInviteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/public/consent-invite")
@RequiredArgsConstructor
@Slf4j
public class PublicConsentInviteController {

    private final PublicConsentInviteService publicConsentInviteService;

    @GetMapping
    public ResponseEntity<ApiResponse<PublicConsentInviteDetailResponse>> getDetails(@RequestParam String token) {
        PublicConsentInviteDetailResponse data = publicConsentInviteService.getInviteDetails(token);
        if ("NOT_FOUND".equals(data.getState())) {
            return ResponseEntity.ok(
                    ApiResponse.<PublicConsentInviteDetailResponse>builder()
                            .success(false)
                            .message("This consent link is not valid or has been removed.")
                            .data(data)
                            .errorCode("INVITE_NOT_FOUND")
                            .build());
        }
        return ResponseEntity.ok(ApiResponse.success("Consent request loaded", data));
    }

    @PostMapping("/respond")
    public ResponseEntity<ApiResponse<PublicConsentInviteDetailResponse>> respond(
            @Valid @RequestBody PublicConsentRespondRequest request) {
        PublicConsentInviteDetailResponse data = publicConsentInviteService.respond(request);
        return ResponseEntity.ok(ApiResponse.success("Your response has been recorded. Thank you.", data));
    }
}
