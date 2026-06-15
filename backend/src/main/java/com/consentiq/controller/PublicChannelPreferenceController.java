package com.consentiq.controller;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.CustomerChannelPreferenceResponse;
import com.consentiq.service.CustomerChannelPreferenceService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/channel-preference")
@RequiredArgsConstructor
public class PublicChannelPreferenceController {

    private static final Logger log = LoggerFactory.getLogger(PublicChannelPreferenceController.class);

    private final CustomerChannelPreferenceService channelPreferenceService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping
    public ResponseEntity<ApiResponse<CustomerChannelPreferenceResponse>> get(
            @RequestParam String token,
            @RequestParam Long consentDbId,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering get | params: token=**** | consentDbId={}", consentDbId);
        log.info("User={} | action=get | entity=ChannelPreference | id={}", cu, consentDbId);
        CustomerChannelPreferenceResponse body =
                channelPreferenceService.getPreference(token, consentDbId);
        ResponseEntity<ApiResponse<CustomerChannelPreferenceResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Channel preference loaded", body));
        log.debug("Exiting get | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<CustomerChannelPreferenceResponse>> save(
            @RequestParam String token,
            @RequestParam Long consentDbId,
            @RequestParam List<String> channels,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering save | params: token=**** | consentDbId={} | channelCount={}",
                consentDbId,
                channels != null ? channels.size() : 0);
        log.info("User={} | action=save | entity=ChannelPreference | id={}", cu, consentDbId);
        CustomerChannelPreferenceResponse body =
                channelPreferenceService.savePreference(token, consentDbId, channels);
        ResponseEntity<ApiResponse<CustomerChannelPreferenceResponse>> result =
                ResponseEntity.ok(ApiResponse.success("Channel preference saved", body));
        log.debug("Exiting save | result={}", result.getStatusCode());
        return result;
    }
}
