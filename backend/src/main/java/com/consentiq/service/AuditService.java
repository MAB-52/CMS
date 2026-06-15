package com.consentiq.service;

import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.entity.AuditLog;
import com.consentiq.model.entity.User;
import com.consentiq.repository.AuditLogRepository;
import com.consentiq.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuditService {

	private static final Logger log = LoggerFactory.getLogger(AuditService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

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
		String cu = currentUser();
		log.debug("Entering log | params: userId={} | action={} | entityType={} | entityId={}", userId, action,
				entityType, entityId);
		log.info("User={} | action=log | entity=AuditLog | id={}", cu, entityId != null ? String.valueOf(entityId) : "n/a");
		try {
			log.info("Executing DB query | method=findById | param=userId={}", userId);
			User user =
					userRepository.findById(userId).orElseThrow(() -> new IllegalStateException("User not found"));
			log.info("DB query completed | method=findById | present=true");
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
			log.info("Executing DB query | method=save | param=action={}", action);
			auditLogRepository.save(entry);
			log.info("DB query completed | method=save | completed");
			log.info("AUDIT | user={} action={} entity={}", userId, action, entityName);
			log.debug("Exiting log | completed successfully");
		} catch (Exception e) {
			log.error("Exception in log | user={} | message={}", cu, e.getMessage(), e);
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
		String cu = currentUser();
		log.debug("Entering getMyActivity | params: userId={} | page={} | size={}", userId, page, size);
		log.info("User={} | action=getMyActivity | entity=AuditLog | id={}", cu,
				userId != null ? String.valueOf(userId) : "n/a");
		log.debug("Transaction started | method=getMyActivity | id={}", userId);
		log.info("Executing DB query | method=findByUser_IdOrderByPerformedAtDesc | param=userId={}", userId);
		Page<AuditLog> p =
				auditLogRepository.findByUser_IdOrderByPerformedAtDesc(userId, PageRequest.of(page, size));
		log.info("DB query completed | method=findByUser_IdOrderByPerformedAtDesc | size={}", p.getContent().size());
		PagedResponse<AuditLogResponse> result = toPaged(p);
		log.debug("Transaction completing | method=getMyActivity | id={}", userId);
		log.debug("Exiting getMyActivity | result=totalElements={}", result.getTotalElements());
		return result;
	}

	@Transactional(readOnly = true)
	public List<AuditLogResponse> getConsentAuditTrail(Long consentDbId) {
		String cu = currentUser();
		log.debug("Entering getConsentAuditTrail | params: consentDbId={}", consentDbId);
		log.info("User={} | action=getConsentAuditTrail | entity=AuditLog | id={}", cu,
				consentDbId != null ? String.valueOf(consentDbId) : "n/a");
		log.debug("Transaction started | method=getConsentAuditTrail | id={}", consentDbId);
		log.info("Executing DB query | method=findByEntityTypeAndEntityIdOrderByPerformedAtDesc | param=consentDbId={}",
				consentDbId);
		List<AuditLog> logs =
				auditLogRepository.findByEntityTypeAndEntityIdOrderByPerformedAtDesc("CONSENT", consentDbId);
		log.info("DB query completed | method=findByEntityTypeAndEntityIdOrderByPerformedAtDesc | size={}",
				logs.size());
		List<AuditLogResponse> result = logs.stream().map(this::toResponse).collect(Collectors.toList());
		log.debug("Transaction completing | method=getConsentAuditTrail | id={}", consentDbId);
		log.debug("Exiting getConsentAuditTrail | result=size={}", result.size());
		return result;
	}

	@Transactional(readOnly = true)
	public List<AuditLogResponse> getAuditTrail(String entityType, Long entityId) {
		String cu = currentUser();
		log.debug("Entering getAuditTrail | params: entityType={} | entityId={}", entityType, entityId);
		log.info("User={} | action=getAuditTrail | entity=AuditLog | id={}", cu,
				entityId != null ? String.valueOf(entityId) : "n/a");
		log.debug("Transaction started | method=getAuditTrail | id={}", entityId);
		log.info("Executing DB query | method=findByEntityTypeAndEntityIdOrderByPerformedAtDesc | param=entityType={}",
				entityType);
		List<AuditLog> logs =
				auditLogRepository.findByEntityTypeAndEntityIdOrderByPerformedAtDesc(entityType, entityId);
		log.info("DB query completed | method=findByEntityTypeAndEntityIdOrderByPerformedAtDesc | size={}",
				logs.size());
		List<AuditLogResponse> result = logs.stream().map(this::toResponse).collect(Collectors.toList());
		log.debug("Transaction completing | method=getAuditTrail | id={}", entityId);
		log.debug("Exiting getAuditTrail | result=size={}", result.size());
		return result;
	}

	@Transactional(readOnly = true)
	public PagedResponse<AuditLogResponse> getAllActivity(int page, int size) {
		String cu = currentUser();
		log.debug("Entering getAllActivity | params: page={} | size={}", page, size);
		log.info("User={} | action=getAllActivity | entity=AuditLog | id=n/a", cu);
		log.debug("Transaction started | method=getAllActivity | id=n/a");
		log.info("Executing DB query | method=findAllByOrderByPerformedAtDesc | param=page={}", page);
		Page<AuditLog> p = auditLogRepository.findAllByOrderByPerformedAtDesc(PageRequest.of(page, size));
		log.info("DB query completed | method=findAllByOrderByPerformedAtDesc | size={}", p.getContent().size());
		PagedResponse<AuditLogResponse> result = toPaged(p);
		log.debug("Transaction completing | method=getAllActivity | id=n/a");
		log.debug("Exiting getAllActivity | result=totalElements={}", result.getTotalElements());
		return result;
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
