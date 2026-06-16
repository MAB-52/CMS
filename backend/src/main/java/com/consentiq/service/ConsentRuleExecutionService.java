package com.consentiq.service;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.enums.AudienceSegmentCode;
import com.consentiq.enums.BroadcastExecutionStatus;
import com.consentiq.enums.ConsentRuleStatus;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.CustomerConsentStatus;
import com.consentiq.enums.UserRole;
import com.consentiq.enums.WorkflowScheduleType;
import com.consentiq.exception.UnauthorizedActionException;
import com.consentiq.model.dto.dispatch.BatchDispatchResult;
import com.consentiq.model.dto.response.AdminRuleEngineDashboardStatsResponse;
import com.consentiq.model.dto.response.ConsentRuleExecutionResponse;
import com.consentiq.model.dto.response.RuleAudiencePreviewBreakdownResponse;
import com.consentiq.model.dto.response.ConsentRuleResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.ConsentOneTimeCode;
import com.consentiq.model.entity.ConsentRule;
import com.consentiq.model.entity.ConsentRuleExecution;
import com.consentiq.model.entity.Customer;
import com.consentiq.model.entity.CustomerLanguagePreference;
import com.consentiq.model.entity.User;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.ConsentOneTimeCodeRepository;
import com.consentiq.repository.ConsentRuleExecutionRepository;
import com.consentiq.repository.ConsentRuleRepository;
import com.consentiq.repository.CustomerLanguagePreferenceRepository;
import com.consentiq.repository.CustomerRepository;
import com.consentiq.repository.UserRepository;
import com.consentiq.util.DeliveryChannelCatalog;
import com.consentiq.util.HtmlTextUtil;
import com.consentiq.util.RuleNextRunUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.data.domain.Sort;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ConsentRuleExecutionService {

	private static final Logger log = LoggerFactory.getLogger(ConsentRuleExecutionService.class);

	/** Zone used to resolve "today" consistently with the refresh job. */
	private static final ZoneId SEGMENTATION_ZONE = ZoneId.of("Asia/Kolkata");

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final List<ConsentRuleStatus> ADMIN_MANAGEABLE = List.of(ConsentRuleStatus.APPROVED,
			ConsentRuleStatus.LIVE);

	private final ConsentRuleRepository consentRuleRepository;
	private final ConsentRuleExecutionRepository executionRepository;
	private final CustomerSegmentationService segmentationService;
	private static final String INVITE_EMAIL_TOKEN_SEP = ":::";

	private final ConsentInviteTokenRepository inviteTokenRepository;
	private final ConsentOneTimeCodeRepository consentOneTimeCodeRepository;
	private final CustomerLanguagePreferenceRepository customerLanguagePreferenceRepository;
	private final CustomerRepository customerRepository;
	private final BatchEmailDispatchService batchEmailDispatchService;
	private final ConsentMailProperties consentMailProperties;
	private final AuditService auditService;
	private final UserRepository userRepository;
	private final ConsentTranslationService consentTranslationService;
	private final CustomerConsentRecordService customerConsentRecordService;

	@Value("${app.public-consent-base-url:http://localhost:4200}")
	private String publicConsentBaseUrl;

	@Value("${consentiq.api.base-url:http://localhost:8086}")
	private String apiBaseUrl;

	@Value("${consentiq.batch.email-chunk-size:100}")
	private int emailChunkSize;

	@Value("${consentiq.batch.chunk-delay-ms:200}")
	private long emailChunkDelayMs;

	@Value("${consentiq.batch.max-retries:3}")
	private int emailMaxRetries;

	@Value("${consentiq.batch.retry-delay-ms:500}")
	private long emailRetryDelayMs;

	@Transactional(readOnly = true)
	public AdminRuleEngineDashboardStatsResponse getDashboardStats() {
		String cu = currentUser();
		log.debug("Entering getDashboardStats | params: none");
		log.info("User={} | action=getDashboardStats | entity=ConsentRuleEngine | id=n/a", cu);
		log.debug("Transaction started | method=getDashboardStats | id=n/a");
		try {
			log.info("Executing DB query | method=findAllByStatusInOrderByApprovedAtDesc | param=ADMIN_MANAGEABLE");
			List<ConsentRule> allApproved = consentRuleRepository
					.findAllByStatusInOrderByApprovedAtDesc(ADMIN_MANAGEABLE);
			log.info("DB query completed | method=findAllByStatusInOrderByApprovedAtDesc | size={}",
					allApproved.size());
			long approved = allApproved.size();
			log.info("Executing DB query | method=countByStatusInAndExecutionActive | param=active=true");
			long activeExec = consentRuleRepository.countByStatusInAndExecutionActive(ADMIN_MANAGEABLE, true);
			log.info("DB query completed | method=countByStatusInAndExecutionActive | result={}", activeExec);
			long inactiveExec = Math.max(0, approved - activeExec);
			long pendingImmediate = allApproved.stream().filter(ConsentRule::isExecutionActive)
					.filter(r -> r.getScheduleType() == WorkflowScheduleType.IMMEDIATE)
					.filter(r -> r.getLastExecutedAt() == null).count();
			Instant since = Instant.now().minus(24, ChronoUnit.HOURS);
			long recentRuleRuns = allApproved.stream()
					.filter(r -> r.getLastExecutedAt() != null && !r.getLastExecutedAt().isBefore(since)).count();
			log.info("Executing DB query | method=findTop15ByOrderByStartedAtDesc | param=n/a");
			List<ConsentRuleExecutionResponse> recent = executionRepository.findTop15ByOrderByStartedAtDesc().stream()
					.map(this::toExecutionResponse).collect(Collectors.toList());
			log.info("DB query completed | method=findTop15ByOrderByStartedAtDesc | size={}", recent.size());
			AdminRuleEngineDashboardStatsResponse res = AdminRuleEngineDashboardStatsResponse.builder()
					.approvedRulesCount(approved)
					.activeForExecutionCount(activeExec).inactiveForExecutionCount(inactiveExec)
					.pendingImmediateFirstRunCount(pendingImmediate).executedInLast24HoursCount(recentRuleRuns)
					.recentExecutions(recent).build();
			log.debug("Transaction completing | method=getDashboardStats | id=n/a");
			log.debug("Exiting getDashboardStats | result=approvedRulesCount={}", approved);
			return res;
		} catch (Exception e) {
			log.error("Exception in getDashboardStats | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	@Transactional(readOnly = true)
	public int previewAudienceCount(Long ruleId) {
		String cu = currentUser();
		log.debug("Entering previewAudienceCount | params: ruleId={}", ruleId);
		log.info("User={} | action=previewAudienceCount | entity=ConsentRule | id={}", cu, ruleId);
		log.debug("Transaction started | method=previewAudienceCount | id={}", ruleId);
		try {
			ConsentRule rule = loadRuleReadOnly(ruleId);
			assertAdminManageable(rule);
			int n = resolveRecipients(rule).size();
			log.debug("Transaction completing | method=previewAudienceCount | id={}", ruleId);
			log.debug("Exiting previewAudienceCount | result={}", n);
			return n;
		} catch (Exception e) {
			log.error("Exception in previewAudienceCount | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	@Transactional(readOnly = true)
	public RuleAudiencePreviewBreakdownResponse previewAudienceBreakdown(Long ruleId) {
		String cu = currentUser();
		log.debug("Entering previewAudienceBreakdown | params: ruleId={}", ruleId);
		log.info("User={} | action=previewAudienceBreakdown | entity=ConsentRule | id={}", cu, ruleId);
		log.debug("Transaction started | method=previewAudienceBreakdown | id={}", ruleId);
		try {
			ConsentRule rule = loadRuleReadOnly(ruleId);
			assertAdminManageable(rule);
			List<AudienceSegmentCode> codes = new ArrayList<>();
			codes.add(rule.getPrimarySegment());
			if (rule.getAdditionalSegmentCodes() != null) {
				for (String raw : rule.getAdditionalSegmentCodes()) {
					codes.add(segmentationService.parseRequired(raw));
				}
			}
			List<Customer> gross = segmentationService.getDistinctRecipients(codes);
			int grossAudienceCount = gross.size();
			List<Customer> eligible = new ArrayList<>(gross);
			if (rule.getConsentTemplate() != null) {
				// CHANGED: exclude only customers who are accepted AND still within
				// validity (date-aware), so the preview matches the live execution
				// audience and doesn't suppress date-lapsed customers between 4 AM runs.
				LocalDate today = LocalDate.now(SEGMENTATION_ZONE);
				Set<String> acceptedIds = customerConsentRecordService
						.getActivelyAcceptedCustomerIdsForTemplate(rule.getConsentTemplate().getId(), today);
				if (!acceptedIds.isEmpty()) {
					eligible = gross.stream().filter(c -> !acceptedIds.contains(c.getCustomerId())).toList();
				}
			}
			int inviteEligibleCount = eligible.size();
			int alreadyAcceptedExcludedCount = Math.max(0, grossAudienceCount - inviteEligibleCount);
			RuleAudiencePreviewBreakdownResponse res = RuleAudiencePreviewBreakdownResponse.builder()
					.grossAudienceCount(grossAudienceCount)
					.inviteEligibleCount(inviteEligibleCount).alreadyAcceptedExcludedCount(alreadyAcceptedExcludedCount)
					.build();
			log.debug("Transaction completing | method=previewAudienceBreakdown | id={}", ruleId);
			log.debug("Exiting previewAudienceBreakdown | result=gross={},eligible={}", grossAudienceCount,
					inviteEligibleCount);
			return res;
		} catch (Exception e) {
			log.error("Exception in previewAudienceBreakdown | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	@Transactional(readOnly = true)
	public List<ConsentRuleExecutionResponse> listExecutions(Long ruleId) {
		String cu = currentUser();
		log.debug("Entering listExecutions | params: ruleId={}", ruleId);
		log.info("User={} | action=listExecutions | entity=ConsentRuleExecution | id={}", cu, ruleId);
		log.debug("Transaction started | method=listExecutions | id={}", ruleId);
		try {
			ConsentRule rule = loadRuleReadOnly(ruleId);
			assertAdminManageable(rule);
			log.info("Executing DB query | method=findByConsentRule_IdOrderByStartedAtDesc | param=ruleId");
			List<ConsentRuleExecutionResponse> res = executionRepository.findByConsentRule_IdOrderByStartedAtDesc(ruleId).stream()
					.map(this::toExecutionResponse).collect(Collectors.toList());
			log.info("DB query completed | method=findByConsentRule_IdOrderByStartedAtDesc | size={}", res.size());
			log.debug("Transaction completing | method=listExecutions | id={}", ruleId);
			log.debug("Exiting listExecutions | result=size={}", res.size());
			return res;
		} catch (Exception e) {
			log.error("Exception in listExecutions | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	@Transactional
	public void setExecutionActive(Long ruleId, boolean active, Long adminUserId, HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering setExecutionActive | params: ruleId={},active={},adminUserId={}", ruleId, active, adminUserId);
		log.info("User={} | action=setExecutionActive | entity=ConsentRule | id={}", cu, ruleId);
		log.debug("Transaction started | method=setExecutionActive | id={}", ruleId);
		try {
			User admin = loadUser(adminUserId);
			if (admin.getRole() != UserRole.ADMIN) {
				throw new UnauthorizedActionException("RULE_EXECUTION_ACTIVE");
			}
			log.info("Executing DB query | method=findByIdForUpdate | param=ruleId");
			ConsentRule rule = consentRuleRepository.findByIdForUpdate(ruleId)
					.orElseThrow(() -> new IllegalArgumentException("Rule not found."));
			log.info("DB query completed | method=findByIdForUpdate | present=true");
			assertAdminManageable(rule);
			rule.setExecutionActive(active);
			if (active) {
				RuleNextRunUtil.applyNextExecutionOnActivation(rule);
			} else {
				rule.setNextExecutionAt(null);
			}
			log.info("Executing DB query | method=save | param=ConsentRule");
			consentRuleRepository.save(rule);
			log.info("DB query completed | method=save | result=completed");
			auditService.log(adminUserId, active ? "RULE_EXECUTION_ACTIVATED" : "RULE_EXECUTION_DEACTIVATED",
					"CONSENT_RULE", rule.getId(), rule.getRuleName(),
					active ? "Rule enabled for automatic/manual engine execution" : "Rule disabled for engine execution",
					http);
			log.debug("Transaction completing | method=setExecutionActive | id={}", ruleId);
			log.debug("Exiting setExecutionActive | completed successfully");
		} catch (Exception e) {
			log.error("Exception in setExecutionActive | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	@Transactional
	public ConsentRuleExecutionResponse executeManual(Long ruleId, Long adminUserId, HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering executeManual | params: ruleId={},adminUserId={}", ruleId, adminUserId);
		log.info("User={} | action=executeManual | entity=ConsentRule | id={}", cu, ruleId);
		log.debug("Transaction started | method=executeManual | id={}", ruleId);
		try {
			User admin = loadUser(adminUserId);
			if (admin.getRole() != UserRole.ADMIN) {
				throw new UnauthorizedActionException("RULE_MANUAL_RUN");
			}
			log.info("Executing DB query | method=findByIdForUpdate | param=ruleId");
			ConsentRule rule = consentRuleRepository.findByIdForUpdate(ruleId)
					.orElseThrow(() -> new IllegalArgumentException("Rule not found."));
			log.info("DB query completed | method=findByIdForUpdate | present=true");
			assertAdminManageable(rule);
			if (!rule.isExecutionActive()) {
				throw new IllegalArgumentException("Activate this rule before running it from the Admin dashboard.");
			}
			auditService.log(adminUserId, "RULE_MANUAL_RUN_REQUESTED", "CONSENT_RULE", rule.getId(), rule.getRuleName(),
					"Manual rule execution started", http);
			ConsentRuleExecutionResponse res = runExecutionLocked(rule, admin, "MANUAL", http);
			log.debug("Transaction completing | method=executeManual | id={}", ruleId);
			log.debug("Exiting executeManual | result=executionId={}", res.getId());
			return res;
		} catch (Exception e) {
			log.error("Exception in executeManual | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	/**
	 * Invoked by the scheduler for automatic runs (no HTTP context).
	 */
	@Transactional
	public boolean tryAutomaticExecute(Long ruleId) {
		String cu = currentUser();
		log.debug("Entering tryAutomaticExecute | params: ruleId={}", ruleId);
		log.info("User={} | action=tryAutomaticExecute | entity=ConsentRule | id={}", cu, ruleId);
		log.debug("Transaction started | method=tryAutomaticExecute | id={}", ruleId);
		try {
			log.info("Executing DB query | method=findByIdForUpdate | param=ruleId");
			ConsentRule rule = consentRuleRepository.findByIdForUpdate(ruleId)
					.orElseThrow(() -> new IllegalArgumentException("Rule not found."));
			log.info("DB query completed | method=findByIdForUpdate | present=true");
			if (!eligibleForAutomaticNow(rule, Instant.now())) {
				log.debug("Transaction completing | method=tryAutomaticExecute | id={}", ruleId);
				log.debug("Exiting tryAutomaticExecute | result=false");
				return false;
			}
			log.info("Executing DB query | method=findFirstByRoleOrderByIdAsc | param=ADMIN");
			User systemActor = userRepository.findFirstByRoleOrderByIdAsc(UserRole.ADMIN).orElseThrow(
					() -> new IllegalStateException("No admin user exists to attribute system rule execution."));
			log.info("DB query completed | method=findFirstByRoleOrderByIdAsc | present=true");
			auditService.log(systemActor.getId(), "RULE_AUTO_RUN_REQUESTED", "CONSENT_RULE", rule.getId(),
					rule.getRuleName(), "Automatic rule execution started", null);
			runExecutionLocked(rule, systemActor, "AUTOMATIC", null);
			log.debug("Transaction completing | method=tryAutomaticExecute | id={}", ruleId);
			log.debug("Exiting tryAutomaticExecute | result=true");
			return true;
		} catch (Exception e) {
			log.error("Exception in tryAutomaticExecute | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	@Transactional(readOnly = true)
	public List<Long> findRuleIdsEligibleForSchedulerScan() {
		String cu = currentUser();
		log.debug("Entering findRuleIdsEligibleForSchedulerScan | params: none");
		log.info("User={} | action=findRuleIdsEligibleForSchedulerScan | entity=ConsentRule | id=n/a", cu);
		log.debug("Transaction started | method=findRuleIdsEligibleForSchedulerScan | id=n/a");
		try {
			log.info("Executing DB query | method=findAllByStatusInOrderByApprovedAtDesc | param=ADMIN_MANAGEABLE");
			List<ConsentRule> rules = consentRuleRepository.findAllByStatusInOrderByApprovedAtDesc(ADMIN_MANAGEABLE);
			List<Long> res = rules.stream()
					.filter(ConsentRule::isExecutionActive).filter(r -> !r.isExecutionRunning())
					.filter(r -> r.getConsentTemplate() != null).map(ConsentRule::getId).collect(Collectors.toList());
			log.info("DB query completed | method=findAllByStatusInOrderByApprovedAtDesc | size={}", rules.size());
			log.debug("Transaction completing | method=findRuleIdsEligibleForSchedulerScan | id=n/a");
			log.debug("Exiting findRuleIdsEligibleForSchedulerScan | result=size={}", res.size());
			return res;
		} catch (Exception e) {
			log.error("Exception in findRuleIdsEligibleForSchedulerScan | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}

	private boolean eligibleForAutomaticNow(ConsentRule r, Instant now) {
		final boolean eligible;
		if (!r.isExecutionActive() || r.isExecutionRunning()) {
			eligible = false;
		} else if (r.getConsentTemplate() == null) {
			eligible = false;
		} else if (r.getStatus() != ConsentRuleStatus.APPROVED && r.getStatus() != ConsentRuleStatus.LIVE) {
			eligible = false;
		} else {
			eligible = switch (r.getScheduleType()) {
			case IMMEDIATE -> r.getLastExecutedAt() == null;
			case SCHEDULED ->
				r.getScheduledAt() != null && !now.isBefore(r.getScheduledAt()) && r.getLastExecutedAt() == null;
			case RECURRING -> StringUtils.hasText(r.getRecurringCron()) && r.getNextExecutionAt() != null
					&& !now.isBefore(r.getNextExecutionAt());
			};
		}
		// TEMP(debug): trace scheduler eligibility — remove after stabilizing recurring
		// runs
		System.out.println("[DEBUG rule scheduler] eligibleForAutomaticNow | ruleId=" + r.getId() + " | scheduleType="
				+ r.getScheduleType() + " | executionActive=" + r.isExecutionActive() + " | executionRunning="
				+ r.isExecutionRunning() + " | lastExecutedAt=" + r.getLastExecutedAt() + " | nextExecutionAt="
				+ r.getNextExecutionAt() + " | now=" + now + " | returning=" + eligible);
		return eligible;
	}

	private ConsentRuleExecutionResponse runExecutionLocked(ConsentRule rule, User actor, String triggerType,
			HttpServletRequest http) {
		if (rule.isExecutionRunning()) {
			throw new IllegalStateException("An execution is already in progress for this rule.");
		}
		rule.setExecutionRunning(true);
		log.info("Executing DB query | method=save | param=ConsentRule");
		consentRuleRepository.save(rule);
		log.info("DB query completed | method=save | result=completed");
		// TEMP(debug): trace rule execution lifecycle — remove after stabilizing
		// recurring runs
		System.out.println("[DEBUG rule execution] runExecutionLocked start | ruleId=" + rule.getId()
				+ " | triggerType=" + triggerType);

		Instant started = Instant.now();
		List<Customer> recipients = resolveRecipients(rule);
		int evaluated = recipients.size();

		BroadcastExecutionStatus outcome;
		Map<String, Object> channelResults = new LinkedHashMap<>();
		String summary;
		Integer execChunksTotal = null;
		Integer execChunksCompleted = null;
		String execProgressNotes = null;

		try {
			validateTemplateAndChannels(rule);
			if (evaluated == 0) {
				outcome = BroadcastExecutionStatus.FAILED;
				summary = "No eligible customers matched the configured audience segments.";
				channelResults.put("_engine", Map.of("status", "NO_AUDIENCE", "message", summary));
			} else {
				DispatchChannelsResult dispatched = dispatchChannels(rule, recipients);
				channelResults = dispatched.channelResults();
				execChunksTotal = dispatched.chunksTotal();
				execChunksCompleted = dispatched.chunksCompleted();
				execProgressNotes = dispatched.progressNotes();
				outcome = resolveExecutionStatus(channelResults);
				summary = "Rule \"" + rule.getRuleName() + "\" | evaluated=" + evaluated + " | outcome=" + outcome;
			}
		} catch (Exception ex) {
			log.error("Exception in runExecutionLocked | user={} | message={}", currentUser(), ex.getMessage(), ex);
			outcome = BroadcastExecutionStatus.FAILED;
			summary = "Execution failed: " + ex.getMessage();
			channelResults.clear();
			channelResults.put("_engine", Map.of("status", "FAILED", "error", ex.getMessage()));
		} finally {
			rule.setExecutionRunning(false);
		}

		Instant completed = Instant.now();
		rule.setLastExecutedAt(completed);
		rule.setLastExecutionOutcome(outcome.name());
		rule.setLastExecutionSummary(summary);
		RuleNextRunUtil.applyNextExecutionAfterCompletedRun(rule, completed);
		log.info("Executing DB query | method=save | param=ConsentRule");
		consentRuleRepository.save(rule);
		log.info("DB query completed | method=save | result=completed");

		log.info("Executing DB query | method=save | param=ConsentRuleExecution");
		ConsentRuleExecution saved = executionRepository.save(ConsentRuleExecution.builder().consentRule(rule)
				.triggerType(triggerType).triggeredBy("AUTOMATIC".equals(triggerType) ? null : actor).status(outcome)
				.audienceEvaluated(evaluated).eligibleCount(evaluated).channelResults(channelResults)
				.summaryNotes(summary).startedAt(started).completedAt(completed).chunksTotal(execChunksTotal)
				.chunksCompleted(execChunksCompleted).progressNotes(execProgressNotes).build());
		log.info("DB query completed | method=save | result=completed");

		auditService.log(actor.getId(),
				outcome == BroadcastExecutionStatus.SUCCESS ? "RULE_EXECUTION_COMPLETED"
						: outcome == BroadcastExecutionStatus.PARTIAL ? "RULE_EXECUTION_PARTIAL"
								: "RULE_EXECUTION_FAILED",
				"CONSENT_RULE", rule.getId(), rule.getRuleName(), summary, http);

		// TEMP(debug): trace rule execution lifecycle — remove after stabilizing
		// recurring runs
		System.out.println("[DEBUG rule execution] runExecutionLocked end | ruleId=" + rule.getId() + " | outcome="
				+ outcome + " | nextExecutionAt=" + rule.getNextExecutionAt());

		return toExecutionResponse(saved);
	}

	private void validateTemplateAndChannels(ConsentRule rule) {
		Consent template = rule.getConsentTemplate();
		if (template == null) {
			throw new IllegalArgumentException("Rule has no consent template mapped.");
		}
		if (template.getStatus() != ConsentStatus.PUBLISHED && template.getStatus() != ConsentStatus.APPROVED) {
			throw new IllegalArgumentException("Consent template is not available for execution.");
		}
		List<String> configured = buildChannelList(template);
		if (configured.isEmpty()) {
			throw new IllegalArgumentException("Consent template has no delivery channels configured.");
		}
		Set<String> allowed = DeliveryChannelCatalog.allowedKeysFromTemplate(configured);
		List<String> selectedNorm = DeliveryChannelCatalog.normalizeAndDedupe(rule.getBroadcastChannels());
		if (selectedNorm.isEmpty()) {
			throw new IllegalArgumentException("Rule has no channels configured.");
		}
		// ── CHANGED: don't throw per-channel; just ensure at least one channel
		// overlaps ──
		boolean anySupported = selectedNorm.stream().anyMatch(allowed::contains);
		if (!anySupported) {
			throw new IllegalArgumentException(
					"None of the rule's configured channels are available on the mapped consent template. "
							+ "Supported: " + DeliveryChannelCatalog
									.formatForCustomer(DeliveryChannelCatalog.normalizeAndDedupe(configured)));
		}
		if (selectedNorm.contains("EMAIL") && !StringUtils.hasText(template.getConsentName())) {
			throw new IllegalArgumentException("Consent template is missing a display name for email.");
		}
	}

	private DispatchChannelsResult dispatchChannels(ConsentRule rule, List<Customer> recipients) {
		Map<String, Object> map = new LinkedHashMap<>();
		Consent template = rule.getConsentTemplate();
		List<String> configured = buildChannelList(template);
		Set<String> allowed = DeliveryChannelCatalog.allowedKeysFromTemplate(configured);

		// Only dispatch channels supported by the template; unsupported ones are
		// skipped silently
		List<String> channels = DeliveryChannelCatalog.normalizeAndDedupe(rule.getBroadcastChannels()).stream()
				.filter(allowed::contains).collect(Collectors.toList());

		List<String> captureChannels = new ArrayList<>(channels);
		Integer chunksTotal = null;
		Integer chunksCompleted = null;
		String progressNotes = null;

		for (String ch : channels) {
			Map<String, Object> row = new LinkedHashMap<>();

			if ("EMAIL".equals(ch)) {
				BatchDispatchResult batch = batchEmailDispatchService.dispatchHtmlEmails(recipients,
						c -> prepareConsentInviteToken(rule, template, c, captureChannels),
						c -> buildConsentInviteSubject(template),
						(c, token) -> buildConsentInviteHtml(rule, template, c, captureChannels, token), emailChunkSize,
						emailChunkDelayMs, emailMaxRetries, emailRetryDelayMs);
				chunksTotal = batch.chunksTotal();
				chunksCompleted = batch.chunksCompleted();
				progressNotes = batch.progressNotes();
				String rowStatus = batch.totalFailed() <= 0 ? "SENT"
						: batch.totalDelivered() <= 0 ? "FAILED" : "PARTIAL";
				row.put("status", rowStatus);
				row.put("attempted", batch.totalAttempted());
				row.put("delivered", batch.totalDelivered());
				if (!batch.failedRecipientIdentifiers().isEmpty()) {
					row.put("failures", batch.failedRecipientIdentifiers().size());
					row.put("error",
							"Delivery issues for " + batch.failedRecipientIdentifiers().size() + " recipient(s).");
				}
			} else {
				int attempted = recipients.size();
				int delivered = 0;
				List<String> failures = new ArrayList<>();
				log.warn("Rule engine channel '{}' is not yet implemented for automated dispatch.", ch);
				failures.addAll(recipients.stream().map(Customer::getCustomerId).toList());
				String status = failures.isEmpty() ? "SENT" : delivered == 0 ? "FAILED" : "PARTIAL";
				row.put("status", status);
				row.put("attempted", attempted);
				row.put("delivered", delivered);
				if (!failures.isEmpty()) {
					row.put("failures", failures.size());
					row.put("error", "Delivery issues for " + failures.size() + " recipient(s).");
				}
			}
			map.put(ch, row);
		}
		return new DispatchChannelsResult(map, chunksTotal, chunksCompleted, progressNotes);
	}

	private String prepareConsentInviteToken(ConsentRule rule, Consent template, Customer customer,
			List<String> captureChannels) {
		String token = UUID.randomUUID().toString().replace("-", "");
		Instant now = Instant.now();
		String summaryPlain = DeliveryChannelCatalog.formatForCustomer(captureChannels);
		ConsentInviteToken entity = ConsentInviteToken.builder().token(token).customerId(customer.getCustomerId())
				.consentDbId(template.getId()).deliveryChannel(summaryPlain).captureDeliveryChannels(captureChannels)
				.consentTypeLabel(consentTypeLabel(rule)).createdAt(now).expiresAt(now.plus(14, ChronoUnit.DAYS))
				.build();
		log.info("Executing DB query | method=save | param=ConsentInviteToken");
		inviteTokenRepository.save(entity);
		log.info("DB query completed | method=save | result=completed");
		String opaqueCode = UUID.randomUUID().toString().replace("-", "");
		log.info("Executing DB query | method=save | param=ConsentOneTimeCode");
		consentOneTimeCodeRepository.save(ConsentOneTimeCode.builder().code(opaqueCode).consentRequestId(entity.getId())
				.createdAt(now).expiresAt(now.plus(15, ChronoUnit.MINUTES)).used(false).build());
		log.info("DB query completed | method=save | result=completed");
		customer.setLastConsentInviteSentAt(now);
		if (customer.getLastConsentResponseAt() == null) {
//			customer.setConsentStatus(CustomerConsentStatus.INVITED);
			customer.setLastConsentInviteSentAt(now);
		}
		log.info("Executing DB query | method=save | param=Customer");
		customerRepository.save(customer);
		log.info("DB query completed | method=save | result=completed");
		customerConsentRecordService.upsertOnInviteSent(customer.getCustomerId(), template.getId(), rule.getId(), null);
		return opaqueCode + INVITE_EMAIL_TOKEN_SEP + token;
	}

	private static String buildConsentInviteSubject(Consent template) {
		return ConsentRequestEmailBuilder.buildSubject(template.getConsentName());
	}

	private String buildConsentInviteHtml(ConsentRule rule, Consent template, Customer customer,
			List<String> captureChannels, String token) {
		String inviteToken = token;
		String opaqueCode = token;
		int sep = token.indexOf(INVITE_EMAIL_TOKEN_SEP);
		if (sep >= 0) {
			opaqueCode = token.substring(0, sep);
			inviteToken = token.substring(sep + INVITE_EMAIL_TOKEN_SEP.length());
		}
		String link = publicConsentBaseUrl.replaceAll("/$", "") + "/public/consent/verify?code=" + opaqueCode;
		String descriptionPlain = HtmlTextUtil.stripToPlain(template.getDescription(), 2000);
		if (StringUtils.hasText(rule.getRuleDescription())) {
			descriptionPlain = trimJoin("Reason for this request: "
					+ HtmlTextUtil.stripToPlain(rule.getRuleDescription(), 1200) + "\n\n" + descriptionPlain);
		}
		String html = ConsentRequestEmailBuilder.buildHtmlBody(customer, template.getConsentName(), descriptionPlain,
				link, captureChannels, consentMailProperties, publicConsentBaseUrl, apiBaseUrl, inviteToken,
				template.getId());
		html = translateConsentInviteEmailIfPreferred(customer, template.getId(), html);
		return html;
	}

	private String translateConsentInviteEmailIfPreferred(Customer customer, Long consentDbId, String html) {
		try {
			String firstNonEnglish = findFirstNonEnglishLanguagePreference(customer.getCustomerId(), consentDbId);
			if (firstNonEnglish == null) {
				return html;
			}
			return consentTranslationService.translateHtml(html, firstNonEnglish);
		} catch (Exception ex) {
			log.warn("Consent invite translation skipped | customerId={} | {}", customer.getCustomerId(),
					ex.getMessage());
			return html;
		}
	}

	private String findFirstNonEnglishLanguagePreference(String customerId, Long consentDbId) {
		log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId,consentDbId");
		Optional<CustomerLanguagePreference> prefOpt = customerLanguagePreferenceRepository
				.findByCustomerIdAndConsentDbId(customerId, consentDbId);
		log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", prefOpt.isPresent());
		if (prefOpt.isEmpty()) {
			return null;
		}
		List<String> langs = prefOpt.get().getSelectedLanguages();
		if (langs == null || langs.isEmpty()) {
			return null;
		}
		for (String raw : langs) {
			if (raw == null) {
				continue;
			}
			String v = raw.trim().toLowerCase(Locale.ROOT);
			if (!"english".equals(v) && !"en".equals(v)) {
				return v;
			}
		}
		return null;
	}

	private static String trimJoin(String s) {
		if (s == null) {
			return "";
		}
		String t = s.trim();
		return t.length() > 4000 ? t.substring(0, 3999) + "…" : t;
	}

	private String consentTypeLabel(ConsentRule rule) {
		if (rule.getPredefinedScenario() != null) {
			return humanizeEnum(rule.getPredefinedScenario().name());
		}
		return "Custom rule";
	}

	private static String humanizeEnum(String raw) {
		if (raw == null || raw.isBlank()) {
			return "Consent";
		}
		String[] p = raw.toLowerCase(Locale.ROOT).split("_");
		StringBuilder sb = new StringBuilder();
		for (String part : p) {
			if (sb.length() > 0) {
				sb.append(' ');
			}
			if (!part.isEmpty()) {
				sb.append(Character.toUpperCase(part.charAt(0))).append(part.substring(1));
			}
		}
		return sb.toString();
	}

	private List<Customer> resolveRecipients(ConsentRule rule) {
		List<AudienceSegmentCode> codes = new ArrayList<>();
		codes.add(rule.getPrimarySegment());
		if (rule.getAdditionalSegmentCodes() != null) {
			for (String raw : rule.getAdditionalSegmentCodes()) {
				codes.add(segmentationService.parseRequired(raw));
			}
		}
		List<Customer> recipients = segmentationService.getDistinctRecipients(codes);
		if (rule.getConsentTemplate() != null) {
			// CHANGED: exclude only accepted-AND-still-valid customers (date-aware).
			// Previously this used status=ACCEPTED, which kept date-lapsed customers
			// suppressed until the 4 AM job flipped them to EXPIRED — meaning a
			// recurring/scheduled re-invite to expiring customers could be silently
			// dropped for up to a day. Resolving by date keeps the exclusion in step
			// with the now-live EXPIRING/EXPIRED segments.
			LocalDate today = LocalDate.now(SEGMENTATION_ZONE);
			Set<String> acceptedIds = customerConsentRecordService
					.getActivelyAcceptedCustomerIdsForTemplate(rule.getConsentTemplate().getId(), today);
			if (!acceptedIds.isEmpty()) {
				recipients = recipients.stream().filter(c -> !acceptedIds.contains(c.getCustomerId())).toList();
			}
		}
		return recipients;
	}

	private BroadcastExecutionStatus resolveExecutionStatus(Map<String, Object> channelResults) {
		if (channelResults.isEmpty()) {
			return BroadcastExecutionStatus.FAILED;
		}
		if (channelResults.containsKey("_engine")) {
			Object st = ((Map<?, ?>) channelResults.get("_engine")).get("status");
			if ("NO_AUDIENCE".equals(String.valueOf(st))) {
				return BroadcastExecutionStatus.FAILED;
			}
		}
		boolean anyFailed = channelResults.entrySet().stream().filter(e -> !"_engine".equals(e.getKey()))
				.anyMatch(e -> e.getValue() instanceof Map<?, ?> m && "FAILED".equals(String.valueOf(m.get("status"))));
		boolean anyPartial = channelResults.entrySet().stream().filter(e -> !"_engine".equals(e.getKey())).anyMatch(
				e -> e.getValue() instanceof Map<?, ?> m && "PARTIAL".equals(String.valueOf(m.get("status"))));
		boolean allFailed = channelResults.entrySet().stream().filter(e -> !"_engine".equals(e.getKey()))
				.allMatch(e -> e.getValue() instanceof Map<?, ?> m && "FAILED".equals(String.valueOf(m.get("status"))));
		if (allFailed) {
			return BroadcastExecutionStatus.FAILED;
		}
		if (anyFailed || anyPartial) {
			return BroadcastExecutionStatus.PARTIAL;
		}
		return BroadcastExecutionStatus.SUCCESS;
	}

	private ConsentRule loadRuleReadOnly(Long id) {
		log.info("Executing DB query | method=findById | param=ruleId");
		ConsentRule r = consentRuleRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Rule not found."));
		log.info("DB query completed | method=findById | present=true");
		return r;
	}

	private void assertAdminManageable(ConsentRule rule) {
		if (!ADMIN_MANAGEABLE.contains(rule.getStatus())) {
			throw new IllegalArgumentException("Only checker-approved rules appear in the Admin rule engine.");
		}
	}

	private User loadUser(Long id) {
		log.info("Executing DB query | method=findById | param=userId");
		User u = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found."));
		log.info("DB query completed | method=findById | present=true");
		return u;
	}

	private ConsentRuleExecutionResponse toExecutionResponse(ConsentRuleExecution ex) {
		ConsentRule r = ex.getConsentRule();
		return ConsentRuleExecutionResponse.builder().id(ex.getId()).consentRuleId(r.getId()).ruleName(r.getRuleName())
				.triggerType(ex.getTriggerType())
				.triggeredByUserId(ex.getTriggeredBy() != null ? ex.getTriggeredBy().getId() : null)
				.triggeredByName(ex.getTriggeredBy() != null ? ex.getTriggeredBy().getFullName() : null)
				.status(ex.getStatus()).audienceEvaluated(ex.getAudienceEvaluated())
				.eligibleCount(ex.getEligibleCount()).channelResults(ex.getChannelResults())
				.summaryNotes(ex.getSummaryNotes()).startedAt(ex.getStartedAt()).completedAt(ex.getCompletedAt())
				.chunksTotal(ex.getChunksTotal()).chunksCompleted(ex.getChunksCompleted())
				.progressNotes(ex.getProgressNotes()).build();
	}

	private record DispatchChannelsResult(Map<String, Object> channelResults, Integer chunksTotal,
			Integer chunksCompleted, String progressNotes) {
	}

	private ConsentRuleResponse toRuleResponse(ConsentRule r) {
		return ConsentRuleResponse.builder().id(r.getId()).ruleName(r.getRuleName()).ruleType(r.getRuleType())
				.primarySegment(r.getPrimarySegment()).scheduleType(r.getScheduleType())
				.broadcastChannels(r.getBroadcastChannels())
				.consentTemplateName(r.getConsentTemplate() != null ? r.getConsentTemplate().getConsentName() : null)
				.status(r.getStatus()).executionActive(r.isExecutionActive()).lastExecutedAt(r.getLastExecutedAt())
				.nextExecutionAt(r.getNextExecutionAt()).lastExecutionOutcome(r.getLastExecutionOutcome()).build();
	}

	private static List<String> buildChannelList(Consent c) {
		List<String> channels = new ArrayList<>();
		if (c.isChannelEmail())
			channels.add("EMAIL");
		if (c.isChannelSms())
			channels.add("SMS");
		if (c.isChannelPush())
			channels.add("PUSH");
		if (c.isChannelWhatsapp())
			channels.add("WHATSAPP");
		if (c.isChannelRcs())
			channels.add("RCS");
		return channels;
	}

	@Transactional(readOnly = true)
	public PagedResponse<ConsentRuleExecutionResponse> listAllExecutionsPaged(int page, int size) {
		String cu = currentUser();
		log.debug("Entering listAllExecutionsPaged | params: page={},size={}", page, size);
		log.info("User={} | action=listAllExecutionsPaged | entity=ConsentRuleExecution | id=n/a", cu);
		log.debug("Transaction started | method=listAllExecutionsPaged | id=n/a");
		try {
			Pageable pageable = PageRequest.of(page, size, Sort.by("startedAt").descending());
			log.info("Executing DB query | method=findAllByOrderByStartedAtDesc | param=pageable");
			Page<ConsentRuleExecution> result = executionRepository.findAllByOrderByStartedAtDesc(pageable);
			log.info("DB query completed | method=findAllByOrderByStartedAtDesc | size={}", result.getContent().size());
			List<ConsentRuleExecutionResponse> content = result.getContent()
					.stream().map(this::toExecutionResponse).collect(Collectors.toList());
			PagedResponse<ConsentRuleExecutionResponse> res = new PagedResponse<>(
					content,
					result.getTotalElements(),
					result.getTotalPages(),
					result.getNumber(),
					result.getSize(),
					result.hasNext(),
					result.hasPrevious()
			);
			log.debug("Transaction completing | method=listAllExecutionsPaged | id=n/a");
			log.debug("Exiting listAllExecutionsPaged | result=totalElements={}", res.getTotalElements());
			return res;
		} catch (Exception e) {
			log.error("Exception in listAllExecutionsPaged | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}
}