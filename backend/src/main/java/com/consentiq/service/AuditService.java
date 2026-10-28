package com.consentiq.service;

import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.MakerTrailResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.ReviewHistoryResponse;
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
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
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
	public void log(Long userId, String action, String entityType, Long entityId, String entityName, String description,
			HttpServletRequest request) {
		write(userId, action, entityType, entityId, entityName, description, request, Instant.now());
	}

	@Async("auditExecutor")
	public void logAt(Long userId, String action, String entityType, Long entityId, String entityName,
			String description, HttpServletRequest request, Instant performedAt) {
		write(userId, action, entityType, entityId, entityName, description, request,
				performedAt != null ? performedAt : Instant.now());
	}

	private void write(Long userId, String action, String entityType, Long entityId, String entityName,
			String description, HttpServletRequest request, Instant performedAt) {
		String cu = currentUser();
		log.debug("Entering log | params: userId={} | action={} | entityType={} | entityId={}", userId, action,
				entityType, entityId);
		log.info("User={} | action=log | entity=AuditLog | id={}", cu,
				entityId != null ? String.valueOf(entityId) : "n/a");
		try {
			log.info("Executing DB query | method=findById | param=userId={}", userId);
			User user = userRepository.findById(userId).orElseThrow(() -> new IllegalStateException("User not found"));
			log.info("DB query completed | method=findById | present=true");
			String ip = extractIp(request);
			AuditLog entry = AuditLog.builder().user(user).action(action).entityType(entityType).entityId(entityId)
					.entityName(entityName).description(description).ipAddress(ip).performedAt(performedAt).build();
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

//	@Transactional(readOnly = true)
//	public PagedResponse<AuditLogResponse> getMyActivity(Long userId, int page, int size) {
//		String cu = currentUser();
//		log.debug("Entering getMyActivity | params: userId={} | page={} | size={}", userId, page, size);
//		log.info("User={} | action=getMyActivity | entity=AuditLog | id={}", cu,
//				userId != null ? String.valueOf(userId) : "n/a");
//		log.debug("Transaction started | method=getMyActivity | id={}", userId);
//		log.info("Executing DB query | method=findByUser_IdOrderByPerformedAtDesc | param=userId={}", userId);
//		Page<AuditLog> p =
//				auditLogRepository.findByUser_IdOrderByPerformedAtDesc(userId, PageRequest.of(page, size));
//		log.info("DB query completed | method=findByUser_IdOrderByPerformedAtDesc | size={}", p.getContent().size());
//		PagedResponse<AuditLogResponse> result = toPaged(p);
//		log.debug("Transaction completing | method=getMyActivity | id={}", userId);
//		log.debug("Exiting getMyActivity | result=totalElements={}", result.getTotalElements());
//		return result;
//	}

	private static final List<String> CHECKER_DECISION_ACTIONS = List.of("CONSENT_APPROVED", "CONSENT_REJECTED",
			"CONSENT_REVISION_REQUESTED", "BROADCAST_APPROVED", "BROADCAST_REJECTED",
			"BROADCAST_REVISION_REQUESTED", "RULE_APPROVED", "RULE_REJECTED", "RULE_REVISION_REQUESTED");

	@Transactional(readOnly = true)
	public PagedResponse<AuditLogResponse> getMyActivity(Long userId, int page, int size) {
		String cu = currentUser();
		log.debug("Entering getMyActivity | params: userId={} | page={} | size={}", userId, page, size);
		log.info("User={} | action=getMyActivity | entity=AuditLog | id={}", cu,
				userId != null ? String.valueOf(userId) : "n/a");

		// Existing: maker's own actions (unchanged)
		log.info("Executing DB query | method=findByUser_IdOrderByPerformedAtDesc | param=userId={}", userId);
		Page<AuditLog> ownActions = auditLogRepository.findByUser_IdOrderByPerformedAtDesc(userId,
				PageRequest.of(0, Integer.MAX_VALUE));
		log.info("DB query completed | method=findByUser_IdOrderByPerformedAtDesc | size={}",
				ownActions.getContent().size());

		// New: checker decisions on this maker's consents/rules
		log.info("Executing DB query | method=findCheckerDecisionsOnMakerEntities | param=userId={}", userId);
		Page<AuditLog> checkerDecisions = auditLogRepository.findCheckerDecisionsOnMakerEntities(userId,
				CHECKER_DECISION_ACTIONS, PageRequest.of(0, Integer.MAX_VALUE));
		log.info("DB query completed | method=findCheckerDecisionsOnMakerEntities | size={}",
				checkerDecisions.getContent().size());

		// Merge, dedupe, sort desc by performedAt
		List<AuditLog> merged = new ArrayList<>();
		merged.addAll(ownActions.getContent());
		merged.addAll(checkerDecisions.getContent());
		merged = merged.stream().distinct().sorted((a, b) -> b.getPerformedAt().compareTo(a.getPerformedAt()))
				.collect(Collectors.toList());

		// Manual pagination over the merged list
		int from = Math.min(page * size, merged.size());
		int to = Math.min(from + size, merged.size());
		List<AuditLog> pageContent = merged.subList(from, to);

		List<AuditLogResponse> responseContent = pageContent.stream().map(this::toResponse)
				.collect(Collectors.toList());
		PagedResponse<AuditLogResponse> result = PagedResponse.<AuditLogResponse>builder().content(responseContent)
				.totalElements((long) merged.size()).totalPages((int) Math.ceil((double) merged.size() / size))
				.currentPage(page).pageSize(size).hasNext(to < merged.size()).hasPrevious(page > 0).build();

		log.debug("Transaction completing | method=getMyActivity | id={}", userId);
		log.debug("Exiting getMyActivity | result=totalElements={}", result.getTotalElements());
		return result;
	}

	/**
	 * A checker's own review decisions, filtered and paged in the database, plus summary counts.
	 *
	 * @param type     ALL | CONSENT | RULE | BROADCAST — restricts to that entity's decision actions
	 * @param decision ALL | APPROVED | REJECTED | REVISION_REQUESTED | PUBLISHED
	 * @param from     inclusive lower bound on performedAt, or null
	 * @param to       exclusive upper bound on performedAt, or null
	 */
	@Transactional(readOnly = true)
	public ReviewHistoryResponse getMyReviews(Long userId, int page, int size, String type, String decision,
			String search, Instant from, Instant to) {
		String cu = currentUser();
		log.debug("Entering getMyReviews | params: userId={} | page={} | size={} | type={} | decision={}", userId,
				page, size, type, decision);
		log.info("User={} | action=getMyReviews | entity=AuditLog | id={}", cu, userId);

		String typePrefix = switch (type == null ? "ALL" : type.trim().toUpperCase()) {
			case "CONSENT" -> "CONSENT_";
			case "RULE" -> "RULE_";
			case "BROADCAST" -> "BROADCAST_";
			default -> "";
		};
		String decisionSuffix = decision == null || "ALL".equalsIgnoreCase(decision.trim()) ? ""
				: "_" + decision.trim().toUpperCase();
		List<String> actions = CHECKER_DECISION_ACTIONS.stream()
				.filter(a -> a.startsWith(typePrefix) && a.endsWith(decisionSuffix)).toList();

		PagedResponse<AuditLogResponse> pageData;
		if (actions.isEmpty()) {
			pageData = PagedResponse.<AuditLogResponse>builder().content(List.of()).totalElements(0L).totalPages(0)
					.currentPage(0).pageSize(size).hasNext(false).hasPrevious(false).build();
		} else {
			String searchParam = search != null && !search.isBlank() ? search.trim() : null;
			log.info("Executing DB query | method=findMyReviews | param=actions={}", actions.size());
			Page<AuditLog> p = auditLogRepository.findMyReviews(userId, actions,
					from != null ? from : Instant.EPOCH,
					to != null ? to : Instant.parse("9999-12-31T00:00:00Z"),
					searchParam,
					PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size))));
			log.info("DB query completed | method=findMyReviews | size={}", p.getContent().size());
			pageData = markLinked(toPaged(p));
		}

		ReviewHistoryResponse.Summary.SummaryBuilder sb = ReviewHistoryResponse.Summary.builder();
		long total = 0, approved = 0, rejected = 0, revision = 0, published = 0, consents = 0, rules = 0,
				broadcasts = 0;
		for (Object[] row : auditLogRepository.countMyActionsSince(userId, CHECKER_DECISION_ACTIONS, Instant.EPOCH)) {
			String action = (String) row[0];
			long n = ((Number) row[1]).longValue();
			total += n;
			if (action.endsWith("_APPROVED")) approved += n;
			else if (action.endsWith("_REJECTED")) rejected += n;
			else if (action.endsWith("_REVISION_REQUESTED")) revision += n;
			else if (action.endsWith("_PUBLISHED")) published += n;
			if (action.startsWith("CONSENT_")) consents += n;
			else if (action.startsWith("RULE_")) rules += n;
			else if (action.startsWith("BROADCAST_")) broadcasts += n;
		}
		long last7 = auditLogRepository
				.countMyActionsSince(userId, CHECKER_DECISION_ACTIONS, Instant.now().minus(7, ChronoUnit.DAYS))
				.stream().mapToLong(r -> ((Number) r[1]).longValue()).sum();
		ReviewHistoryResponse result = ReviewHistoryResponse.builder().page(pageData)
				.summary(sb.total(total).approved(approved).rejected(rejected).revisionRequested(revision)
						.published(published).consents(consents).rules(rules).broadcasts(broadcasts)
						.last7Days(last7).build())
				.build();
		log.debug("Exiting getMyReviews | result=totalElements={}", pageData.getTotalElements());
		return result;
	}

	@Transactional(readOnly = true)
	public MakerTrailResponse getMakerTrail(Long userId, int page, int size, String scope, String type,
			String search, Instant from, Instant to) {
		String cu = currentUser();
		log.debug("Entering getMakerTrail | params: userId={} | page={} | size={} | scope={} | type={}", userId, page,
				size, scope, type);
		log.info("User={} | action=getMakerTrail | entity=AuditLog | id={}", cu, userId);

		String scopeParam = switch (scope == null ? "ALL" : scope.trim().toUpperCase()) {
			case "MINE" -> "MINE";
			case "DECISIONS" -> "DECISIONS";
			default -> "ALL";
		};
		String entityType = switch (type == null ? "ALL" : type.trim().toUpperCase()) {
			case "CONSENT" -> "CONSENT";
			case "RULE" -> "CONSENT_RULE";
			case "BROADCAST" -> "BROADCAST_REQUEST";
			default -> "ALL";
		};
		String searchParam = search != null && !search.isBlank() ? search.trim() : null;

		log.info("Executing DB query | method=findMakerTrail | param=scope={} | entityType={}", scopeParam, entityType);
		Page<AuditLog> p = auditLogRepository.findMakerTrail(userId, scopeParam, CHECKER_DECISION_ACTIONS, entityType,
				from != null ? from : Instant.EPOCH,
				to != null ? to : Instant.parse("9999-12-31T00:00:00Z"),
				searchParam,
				PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size))));
		log.info("DB query completed | method=findMakerTrail | size={}", p.getContent().size());

		long mine = auditLogRepository.countByUser_Id(userId);
		long decisions = 0, approved = 0, rejected = 0, revision = 0;
		for (Object[] row : auditLogRepository.countDecisionsOnMakerEntities(userId, CHECKER_DECISION_ACTIONS)) {
			String action = (String) row[0];
			long n = ((Number) row[1]).longValue();
			decisions += n;
			if (action.endsWith("_APPROVED") || action.endsWith("_PUBLISHED")) approved += n;
			else if (action.endsWith("_REJECTED")) rejected += n;
			else if (action.endsWith("_REVISION_REQUESTED")) revision += n;
		}

		MakerTrailResponse result = MakerTrailResponse.builder()
				.page(markLinked(toPagedWithReview(p)))
				.summary(MakerTrailResponse.Summary.builder().total(mine + decisions).myActions(mine)
						.checkerDecisions(decisions).approved(approved).rejected(rejected).revisionRequested(revision)
						.build())
				.build();
		log.debug("Exiting getMakerTrail | result=totalElements={}", p.getTotalElements());
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
		List<AuditLog> logs = auditLogRepository.findConsentHistory(consentDbId);
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
		List<AuditLog> logs = auditLogRepository.findByEntityTypeAndEntityIdOrderByPerformedAtDesc(entityType,
				entityId);
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
		return PagedResponse.<AuditLogResponse>builder().content(content).totalElements(p.getTotalElements())
				.totalPages(p.getTotalPages()).currentPage(p.getNumber()).pageSize(p.getSize()).hasNext(p.hasNext())
				.hasPrevious(p.hasPrevious()).build();
	}

	@Transactional(readOnly = true)
	public long[] checkerDecisionCounts(Long checkerId, Instant startOfToday) {
		long approvedToday = 0;
		for (Object[] row : auditLogRepository.countMyActionsSince(checkerId, CHECKER_DECISION_ACTIONS, startOfToday)) {
			String action = (String) row[0];
			if (action.endsWith("_APPROVED") || action.endsWith("_PUBLISHED")) {
				approvedToday += ((Number) row[1]).longValue();
			}
		}
		long rejected = 0, total = 0;
		for (Object[] row : auditLogRepository.countMyActionsSince(checkerId, CHECKER_DECISION_ACTIONS, Instant.EPOCH)) {
			long n = ((Number) row[1]).longValue();
			total += n;
			if (((String) row[0]).endsWith("_REJECTED")) {
				rejected += n;
			}
		}
		return new long[] { approvedToday, rejected, total };
	}

	private static final List<String> SUBMIT_ACTIONS = List.of("CONSENT_SUBMITTED", "RULE_SUBMITTED",
			"BROADCAST_SUBMITTED");

	private PagedResponse<AuditLogResponse> markLinked(PagedResponse<AuditLogResponse> paged) {
		Set<Long> consentIds = new HashSet<>();
		Set<Long> ruleIds = new HashSet<>();
		for (AuditLogResponse r : paged.getContent()) {
			if (r.getEntityId() == null) {
				continue;
			}
			if ("CONSENT".equals(r.getEntityType())) {
				consentIds.add(r.getEntityId());
			} else if ("CONSENT_RULE".equals(r.getEntityType())) {
				ruleIds.add(r.getEntityId());
			}
		}
		Set<Long> linkedConsents = consentIds.isEmpty() ? Set.of()
				: new HashSet<>(auditLogRepository.findLinkedConsentIds(consentIds));
		Set<Long> linkedRules = ruleIds.isEmpty() ? Set.of()
				: new HashSet<>(auditLogRepository.findLinkedRuleIds(ruleIds));
		for (AuditLogResponse r : paged.getContent()) {
			boolean linked = ("CONSENT".equals(r.getEntityType()) && linkedConsents.contains(r.getEntityId()))
					|| ("CONSENT_RULE".equals(r.getEntityType()) && linkedRules.contains(r.getEntityId()));
			r.setLinked(linked);
		}
		return paged;
	}

	private PagedResponse<AuditLogResponse> toPagedWithReview(Page<AuditLog> p) {
		Map<String, Set<Long>> idsByType = new HashMap<>();
		for (AuditLog a : p.getContent()) {
			if (a.getEntityType() != null && a.getEntityId() != null) {
				idsByType.computeIfAbsent(a.getEntityType(), k -> new HashSet<>()).add(a.getEntityId());
			}
		}
		List<String> reviewActions = new ArrayList<>(CHECKER_DECISION_ACTIONS);
		reviewActions.addAll(SUBMIT_ACTIONS);
		Map<String, AuditLog> latestByEntity = new HashMap<>();
		for (Map.Entry<String, Set<Long>> e : idsByType.entrySet()) {
			for (AuditLog ev : auditLogRepository.findReviewEvents(e.getKey(), e.getValue(), reviewActions)) {
				latestByEntity.putIfAbsent(ev.getEntityType() + ":" + ev.getEntityId(), ev);
			}
		}
		PagedResponse<AuditLogResponse> paged = toPaged(p);
		for (int i = 0; i < p.getContent().size(); i++) {
			AuditLog row = p.getContent().get(i);
			AuditLogResponse out = paged.getContent().get(i);
			AuditLog source = CHECKER_DECISION_ACTIONS.contains(row.getAction())
					? row
					: latestByEntity.get(row.getEntityType() + ":" + row.getEntityId());
			if (source == null) {
				continue;
			}
			String status = reviewStatus(source.getAction());
			out.setCheckerStatus(status);
			if (!"PENDING".equals(status)) {
				out.setCheckerName(source.getUser().getFullName());
			}
		}
		return paged;
	}

	private static String reviewStatus(String action) {
		if (action.endsWith("_REVISION_REQUESTED")) return "REVISION_REQUESTED";
		if (action.endsWith("_APPROVED")) return "APPROVED";
		if (action.endsWith("_PUBLISHED")) return "PUBLISHED";
		if (action.endsWith("_REJECTED")) return "REJECTED";
		return "PENDING";
	}

	private AuditLogResponse toResponse(AuditLog a) {
		return AuditLogResponse.builder().id(a.getId()).userId(a.getUser().getId()).userName(a.getUser().getFullName())
				.userRole(a.getUser().getRole() != null ? a.getUser().getRole().name() : null)
				.action(a.getAction()).entityType(a.getEntityType()).entityId(a.getEntityId())
				.entityName(a.getEntityName()).description(a.getDescription()).ipAddress(a.getIpAddress())
				.performedAt(a.getPerformedAt()).build();
	}
}
