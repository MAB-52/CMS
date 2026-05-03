package com.consentiq.service;

import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.entity.AuditLog;
import com.consentiq.model.entity.User;
import com.consentiq.repository.AuditLogRepository;
import com.consentiq.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuditService {

    private final AuditLogRepository auditLogRepository;
    private final UserRepository userRepository;

    @Async("auditExecutor")
    public void log(
            Long userId,
            String action,
            String entityType,
            Long entityId,
            String entityName,
            String description,
            HttpServletRequest request) {
        try {
            User user =
                    userRepository.findById(userId).orElseThrow(() -> new IllegalStateException("User not found"));
            String ip = extractIp(request);
            AuditLog entry =
                    AuditLog.builder()
                            .user(user)
                            .action(action)
                            .entityType(entityType)
                            .entityId(entityId)
                            .entityName(entityName)
                            .description(description)
                            .ipAddress(ip)
                            .performedAt(Instant.now())
                            .build();
            auditLogRepository.save(entry);
            log.info("AUDIT | user={} action={} entity={}", userId, action, entityName);
        } catch (Exception e) {
            log.error("Failed to persist audit log | user={} action={}", userId, action, e);
        }
    }

    private String extractIp(HttpServletRequest request) {
        if (request == null) {
            return null;
        }
        String forwarded = request.getHeader("X-Forwarded-For");
        if (forwarded != null && !forwarded.isBlank()) {
            return forwarded.split(",")[0].trim();
        }
        return request.getRemoteAddr();
    }

    @Transactional(readOnly = true)
    public PagedResponse<AuditLogResponse> getMyActivity(Long userId, int page, int size) {
        Page<AuditLog> p =
                auditLogRepository.findByUser_IdOrderByPerformedAtDesc(userId, PageRequest.of(page, size));
        return toPaged(p);
    }

    @Transactional(readOnly = true)
    public List<AuditLogResponse> getConsentAuditTrail(Long consentDbId) {
        List<AuditLog> logs =
                auditLogRepository.findByEntityTypeAndEntityIdOrderByPerformedAtDesc("CONSENT", consentDbId);
        return logs.stream().map(this::toResponse).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public PagedResponse<AuditLogResponse> getAllActivity(int page, int size) {
        Page<AuditLog> p = auditLogRepository.findAllByOrderByPerformedAtDesc(PageRequest.of(page, size));
        return toPaged(p);
    }

    private PagedResponse<AuditLogResponse> toPaged(Page<AuditLog> p) {
        List<AuditLogResponse> content = p.getContent().stream().map(this::toResponse).collect(Collectors.toList());
        return PagedResponse.<AuditLogResponse>builder()
                .content(content)
                .totalElements(p.getTotalElements())
                .totalPages(p.getTotalPages())
                .currentPage(p.getNumber())
                .pageSize(p.getSize())
                .hasNext(p.hasNext())
                .hasPrevious(p.hasPrevious())
                .build();
    }

    private AuditLogResponse toResponse(AuditLog a) {
        return AuditLogResponse.builder()
                .id(a.getId())
                .userId(a.getUser().getId())
                .userName(a.getUser().getFullName())
                .action(a.getAction())
                .entityType(a.getEntityType())
                .entityId(a.getEntityId())
                .entityName(a.getEntityName())
                .description(a.getDescription())
                .ipAddress(a.getIpAddress())
                .performedAt(a.getPerformedAt())
                .build();
    }
}
