package com.consentiq.service;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.UserRole;
import com.consentiq.exception.ConsentNotFoundException;
import com.consentiq.exception.DuplicateConsentException;
import com.consentiq.exception.InvalidConsentStateException;
import com.consentiq.exception.UnauthorizedActionException;
import com.consentiq.model.dto.request.ConsentCreateRequest;
import com.consentiq.model.dto.request.ConsentReviewRequest;
import com.consentiq.model.dto.request.ConsentUpdateRequest;
import com.consentiq.model.dto.response.AdminConsentTemplateResponse;
import com.consentiq.model.dto.response.CheckerStatsResponse;
import com.consentiq.model.dto.response.ConsentDiffResponse;
import com.consentiq.model.dto.response.ConsentResponse;
import com.consentiq.model.dto.response.ConsentVersionResponse;
import com.consentiq.model.dto.response.MakerStatsResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentVersion;
import com.consentiq.model.entity.User;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.ConsentVersionRepository;
import com.consentiq.repository.UserRepository;
import com.consentiq.security.UserDetailsImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ConsentService {
	private static final Logger log = LoggerFactory.getLogger(ConsentService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private final ConsentRepository consentRepository;
	private final ConsentVersionRepository consentVersionRepository;
	private final UserRepository userRepository;
	private final ConsentIdGeneratorService consentIdGeneratorService;
	private final AuditService auditService;

	@Transactional
	public ConsentResponse createConsent(ConsentCreateRequest request, Long userId, HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering createConsent | params: userId={}, consentName={}", userId, request.getConsentName());
		log.info("User={} | action=createConsent | entity=Consent | id=n/a", cu);
		log.debug("Transaction started | method=createConsent | id=n/a");
		User user = loadUser(userId);
		assertMakerOrAdmin(user);
		log.info("Executing DB query | method=existsByConsentNameIgnoreCase | param=consentName={}",
				request.getConsentName());
		boolean nameTaken = consentRepository.existsByConsentNameIgnoreCase(request.getConsentName());
		log.info("DB query completed | method=existsByConsentNameIgnoreCase | present={}", nameTaken);
		if (nameTaken) {
			throw new DuplicateConsentException(request.getConsentName());
		}
		String consentId = consentIdGeneratorService.generateNextId();
		Consent entity = Consent.builder().consentId(consentId).consentName(request.getConsentName())
				.description(request.getDescription()).category(request.getCategory())
				.validityPeriodDays(request.getValidityPeriodDays()).validityStartDate(request.getValidityStartDate())
				.validityEndDate(request.getValidityEndDate()).consentMessage(request.getConsentMessage())
				.status(ConsentStatus.DRAFT).channelEmail(request.isChannelEmail()).channelSms(request.isChannelSms())
				.channelPush(request.isChannelPush()).channelWhatsapp(request.isChannelWhatsapp())
				.channelRcs(request.isChannelRcs())
				.tagsUsed(request.getTagsUsed() == null ? new ArrayList<>() : new ArrayList<>(request.getTagsUsed()))
				.searchTags(request.getSearchTags()).createdBy(user).build();
		log.info("Executing DB query | method=save | param=Consent");
		Consent saved = consentRepository.save(entity);
		log.info("DB query completed | method=save | completed=true");
		auditService.log(userId, "CONSENT_CREATED", "CONSENT", saved.getId(), saved.getConsentName(),
				"Consent draft created", http);
		log.debug("Transaction completing | method=createConsent | id={}", saved.getConsentId());
		log.debug("Exiting createConsent | consentId={}", saved.getConsentId());
		return ConsentMapper.toResponse(saved);
	}

	@Transactional
	public ConsentResponse updateConsent(Long dbId, ConsentUpdateRequest request, Long userId,
			HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering updateConsent | params: dbId={}, userId={}, consentName={}", dbId, userId,
				request.getConsentName());
		log.info("User={} | action=updateConsent | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=updateConsent | id={}", dbId);
		Consent consent = findConsent(dbId);
		validateOwner(consent, userId);
		validateEditableStatus(consent.getStatus());
		log.info("Executing DB query | method=existsByConsentNameIgnoreCaseAndIdNot | param=consentName={}, dbId={}",
				request.getConsentName(), dbId);
		boolean nameClash = consentRepository.existsByConsentNameIgnoreCaseAndIdNot(request.getConsentName(), dbId);
		log.info("DB query completed | method=existsByConsentNameIgnoreCaseAndIdNot | present={}", nameClash);
		if (nameClash) {
			throw new DuplicateConsentException(request.getConsentName());
		}
		User user = loadUser(userId);
		Map<String, Map<String, String>> changed = computeDiff(consent, request);
		saveVersionSnapshot(consent, user, changed);
		applyUpdates(consent, request);
		log.info("Executing DB query | method=save | param=Consent");
		Consent saved = consentRepository.save(consent);
		log.info("DB query completed | method=save | completed=true");
		auditService.log(userId, "CONSENT_UPDATED", "CONSENT", saved.getId(), saved.getConsentName(), "Consent updated",
				http);
		log.debug("Transaction completing | method=updateConsent | id={}", saved.getConsentId());
		log.debug("Exiting updateConsent | consentId={}", saved.getConsentId());
		return ConsentMapper.toResponse(saved);
	}

	@Transactional
	public ConsentResponse saveDraft(Long dbId, ConsentUpdateRequest request, Long userId, HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering saveDraft | params: dbId={}, userId={}", dbId, userId);
		log.info("User={} | action=saveDraft | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=saveDraft | id={}", dbId);
		Consent consent = findConsent(dbId);
		validateOwner(consent, userId);
		validateEditableStatus(consent.getStatus());
		log.info("Executing DB query | method=existsByConsentNameIgnoreCaseAndIdNot | param=consentName={}, dbId={}",
				request.getConsentName(), dbId);
		boolean nameClash = consentRepository.existsByConsentNameIgnoreCaseAndIdNot(request.getConsentName(), dbId);
		log.info("DB query completed | method=existsByConsentNameIgnoreCaseAndIdNot | present={}", nameClash);
		if (nameClash) {
			throw new DuplicateConsentException(request.getConsentName());
		}
		User user = loadUser(userId);
		Map<String, Map<String, String>> changed = computeDiff(consent, request);
		saveVersionSnapshot(consent, user, changed);
		applyUpdates(consent, request);
		log.info("Executing DB query | method=save | param=Consent");
		Consent saved = consentRepository.save(consent);
		log.info("DB query completed | method=save | completed=true");
		auditService.log(userId, "CONSENT_DRAFT_SAVED", "CONSENT", saved.getId(), saved.getConsentName(), "Draft saved",
				http);
		log.debug("Transaction completing | method=saveDraft | id={}", saved.getConsentId());
		log.debug("Exiting saveDraft | consentId={}", saved.getConsentId());
		return ConsentMapper.toResponse(saved);
	}

	@Transactional
	public ConsentResponse submitForApproval(Long dbId, Long userId, HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering submitForApproval | params: dbId={}, userId={}", dbId, userId);
		log.info("User={} | action=submitForApproval | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=submitForApproval | id={}", dbId);
		Consent consent = findConsent(dbId);
		validateOwner(consent, userId);
		if (consent.getStatus() != ConsentStatus.DRAFT && consent.getStatus() != ConsentStatus.REVISION_REQUESTED) {
			throw new InvalidConsentStateException(consent.getStatus().name(), "SUBMIT");
		}
		if (!StringUtils.hasText(consent.getConsentMessage())) {
			throw new IllegalArgumentException("Consent message cannot be empty before submitting for approval");
		}
		boolean anyChannel = consent.isChannelEmail() || consent.isChannelSms() || consent.isChannelPush()
				|| consent.isChannelWhatsapp() || consent.isChannelRcs();
		if (!anyChannel) {
			throw new IllegalArgumentException("At least one delivery channel must be selected");
		}
		consent.setStatus(ConsentStatus.PENDING_APPROVAL);
		consent.setSubmittedAt(Instant.now());
		log.info("Executing DB query | method=save | param=Consent");
		Consent saved = consentRepository.save(consent);
		log.info("DB query completed | method=save | completed=true");
		auditService.log(userId, "CONSENT_SUBMITTED", "CONSENT", saved.getId(), saved.getConsentName(),
				"Submitted for approval", http);
		log.debug("Transaction completing | method=submitForApproval | id={}", saved.getConsentId());
		log.debug("Exiting submitForApproval | consentId={}", saved.getConsentId());
		return ConsentMapper.toResponse(saved);
	}

	@Transactional
	public ConsentResponse reviewConsent(Long dbId, ConsentReviewRequest request, Long checkerId,
			HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering reviewConsent | params: dbId={}, checkerId={}, action={}", dbId, checkerId,
				request.getAction());
		log.info("User={} | action=reviewConsent | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=reviewConsent | id={}", dbId);
		User checker = loadUser(checkerId);
		if (checker.getRole() != UserRole.CHECKER && checker.getRole() != UserRole.ADMIN) {
			throw new UnauthorizedActionException("REVIEW_CONSENT");
		}
		Consent consent = findConsent(dbId);
		String action = request.getAction().trim().toUpperCase(Locale.ROOT);
		if ("PUBLISH".equals(action)) {
			if (consent.getStatus() != ConsentStatus.APPROVED) {
				throw new InvalidConsentStateException(consent.getStatus().name(), "PUBLISH");
			}
			consent.setStatus(ConsentStatus.PUBLISHED);
			consent.setPublishedAt(Instant.now());
			log.info("Executing DB query | method=save | param=Consent");
			Consent saved = consentRepository.save(consent);
			log.info("DB query completed | method=save | completed=true");
			auditService.log(checkerId, "CONSENT_PUBLISHED", "CONSENT", saved.getId(), saved.getConsentName(),
					"Consent published", http);
			log.debug("Transaction completing | method=reviewConsent | id={}", saved.getConsentId());
			log.debug("Exiting reviewConsent | consentId={}, branch=PUBLISH", saved.getConsentId());
			return ConsentMapper.toResponse(saved);
		}
		if (consent.getStatus() != ConsentStatus.PENDING_APPROVAL) {
			throw new InvalidConsentStateException(consent.getStatus().name(), action);
		}
		if (consent.getCreatedBy().getId().equals(checkerId)) {
			throw new UnauthorizedActionException("You cannot approve a consent that you created");
		}
		switch (action) {
//            case "APPROVE" -> {
//                consent.setStatus(ConsentStatus.APPROVED);
//                consent.setReviewedBy(checker);
//                consent.setReviewedAt(Instant.now());
//                consent.setRejectionReason(null);
		case "APPROVE" -> {
			if (!StringUtils.hasText(request.getApproveReason())) {
				throw new IllegalArgumentException("Approval reason is required.");
			}
			consent.setStatus(ConsentStatus.APPROVED);
			consent.setReviewedBy(checker);
			consent.setReviewedAt(Instant.now());
			consent.setRejectionReason(null);
			consent.setApproveReason(request.getApproveReason().trim());
			auditService.log(checkerId, "CONSENT_APPROVED", "CONSENT", consent.getId(), consent.getConsentName(),
					"Approved by checker", http);
		}
		case "REJECT" -> {
			if (!StringUtils.hasText(request.getReason())) {
				throw new IllegalArgumentException("Rejection reason is required");
			}
			consent.setStatus(ConsentStatus.REJECTED);
			consent.setRejectionReason(request.getReason());
			consent.setReviewedBy(checker);
			consent.setReviewedAt(Instant.now());
			auditService.log(checkerId, "CONSENT_REJECTED", "CONSENT", consent.getId(), consent.getConsentName(),
					request.getReason(), http);
		}
		case "REQUEST_REVISION" -> {
			if (!StringUtils.hasText(request.getRevisionMessage())) {
				throw new IllegalArgumentException("Revision message is required when requesting changes");
			}
			consent.setStatus(ConsentStatus.REVISION_REQUESTED);
			consent.setRevisionMessage(request.getRevisionMessage());
			consent.setReviewedBy(checker);
			consent.setReviewedAt(Instant.now());
			auditService.log(checkerId, "CONSENT_REVISION_REQUESTED", "CONSENT", consent.getId(),
					consent.getConsentName(), request.getRevisionMessage(), http);
		}
		default -> throw new IllegalArgumentException("Unknown action '" + request.getAction()
				+ "'. Valid values: APPROVE, REJECT, REQUEST_REVISION, PUBLISH");
		}
		log.info("Executing DB query | method=save | param=Consent");
		Consent saved = consentRepository.save(consent);
		log.info("DB query completed | method=save | completed=true");
		log.debug("Transaction completing | method=reviewConsent | id={}", saved.getConsentId());
		log.debug("Exiting reviewConsent | consentId={}, action={}", saved.getConsentId(), action);
		return ConsentMapper.toResponse(saved);
	}

	@Transactional(readOnly = true)
	public ConsentDiffResponse getConsentDiff(Long dbId) {
		String cu = currentUser();
		log.debug("Entering getConsentDiff | params: dbId={}", dbId);
		log.info("User={} | action=getConsentDiff | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=getConsentDiff | id={}", dbId);
		Consent consent = findConsent(dbId);
		log.info("Executing DB query | method=findTopByConsent_IdOrderByChangedAtDesc | param=dbId={}", dbId);
		ConsentVersion latest = consentVersionRepository.findTopByConsent_IdOrderByChangedAtDesc(dbId).orElse(null);
		log.info("DB query completed | method=findTopByConsent_IdOrderByChangedAtDesc | present={}", latest != null);
		if (latest == null || latest.getChangedFields() == null || latest.getChangedFields().isEmpty()) {
			log.debug("Transaction completing | method=getConsentDiff | id={}", dbId);
			log.debug("Exiting getConsentDiff | dbId={}, changes=0", dbId);
			return ConsentDiffResponse.builder().consentDbId(consent.getId()).consentName(consent.getConsentName())
					.differences(List.of()).build();
		}
		List<ConsentDiffResponse.FieldDiff> diffs = new ArrayList<>();
		for (Map.Entry<String, Map<String, String>> e : latest.getChangedFields().entrySet()) {
			Map<String, String> pair = e.getValue();
			String oldV = pair.getOrDefault("old", "");
			String newV = pair.getOrDefault("new", "");
			diffs.add(
					ConsentDiffResponse.FieldDiff.builder().fieldName(e.getKey()).fieldLabel(labelForField(e.getKey()))
							.oldValue(oldV).newValue(newV).modified(!Objects.equals(oldV, newV)).build());
		}
		log.debug("Transaction completing | method=getConsentDiff | id={}", dbId);
		log.debug("Exiting getConsentDiff | dbId={}, changes={}", dbId, diffs.size());
		return ConsentDiffResponse.builder().consentDbId(consent.getId()).consentName(consent.getConsentName())
				.differences(diffs).build();
	}

	@Transactional(readOnly = true)
	public PagedResponse<ConsentResponse> getMyConsents(Long userId, int page, int size, ConsentStatus status) {
		String cu = currentUser();
		log.debug("Entering getMyConsents | params: userId={}, page={}, size={}, status={}", userId, page, size,
				status);
		log.info("User={} | action=getMyConsents | entity=Consent | id={}", cu, userId);
		log.debug("Transaction started | method=getMyConsents | id={}", userId);
		User user = loadUser(userId);
		if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
			throw new UnauthorizedActionException("VIEW_MY_CONSENTS");
		}
		PageRequest pr = PageRequest.of(page, size);
		Page<Consent> result;
		if (status == null) {
			log.info("Executing DB query | method=findByCreatedByIdOrderByUpdatedAtDesc | param=userId={}", userId);
			result = consentRepository.findByCreatedByIdOrderByUpdatedAtDesc(userId, pr);
			log.info("DB query completed | method=findByCreatedByIdOrderByUpdatedAtDesc | size={}",
					result.getContent().size());
		} else {
			log.info(
					"Executing DB query | method=findByCreatedByIdAndStatusOrderByUpdatedAtDesc | param=userId={}, status={}",
					userId, status);
			result = consentRepository.findByCreatedByIdAndStatusOrderByUpdatedAtDesc(userId, status, pr);
			log.info("DB query completed | method=findByCreatedByIdAndStatusOrderByUpdatedAtDesc | size={}",
					result.getContent().size());
		}
		List<ConsentResponse> content = result.getContent().stream().map(ConsentMapper::toResponse)
				.collect(Collectors.toList());
		PagedResponse<ConsentResponse> out = PagedResponse.<ConsentResponse>builder().content(content)
				.totalElements(result.getTotalElements()).totalPages(result.getTotalPages())
				.currentPage(result.getNumber()).pageSize(result.getSize()).hasNext(result.hasNext())
				.hasPrevious(result.hasPrevious()).build();
		log.debug("Transaction completing | method=getMyConsents | id={}", userId);
		log.debug("Exiting getMyConsents | totalElements={}", out.getTotalElements());
		return out;
	}

	@Transactional(readOnly = true)
	public MakerStatsResponse getMakerStats(Long userId) {
		String cu = currentUser();
		log.debug("Entering getMakerStats | params: userId={}", userId);
		log.info("User={} | action=getMakerStats | entity=Consent | id={}", cu, userId);
		log.debug("Transaction started | method=getMakerStats | id={}", userId);
		User user = loadUser(userId);
		if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
			throw new UnauthorizedActionException("VIEW_MAKER_STATS");
		}
		log.info("Executing DB query | method=countByCreatedById | param=userId={}", userId);
		long total = consentRepository.countByCreatedById(userId);
		log.info("DB query completed | method=countByCreatedById | size={}", total);
		log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=userId={}, status=DRAFT", userId);
		long draft = consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.DRAFT);
		log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", draft);
		log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=userId={}, status=PENDING_APPROVAL",
				userId);
		long pendingApproval = consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.PENDING_APPROVAL);
		log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", pendingApproval);
		log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=userId={}, status=APPROVED", userId);
		long approved = consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.APPROVED);
		log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", approved);
		log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=userId={}, status=PUBLISHED", userId);
		long published = consentRepository.countByCreatedByIdAndStatus(userId, ConsentStatus.PUBLISHED);
		log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", published);
		log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=userId={}, status=REVISION_REQUESTED",
				userId);
		long revisionRequested = consentRepository.countByCreatedByIdAndStatus(userId,
				ConsentStatus.REVISION_REQUESTED);
		log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", revisionRequested);
		MakerStatsResponse out = MakerStatsResponse.builder().total(total).draft(draft).pendingApproval(pendingApproval)
				.approved(approved).published(published).revisionRequested(revisionRequested).build();
		log.debug("Transaction completing | method=getMakerStats | id={}", userId);
		log.debug("Exiting getMakerStats | userId={}", userId);
		return out;
	}

	@Transactional(readOnly = true)
	public CheckerStatsResponse getCheckerStats(Long checkerId) {
		String cu = currentUser();
		log.debug("Entering getCheckerStats | params: checkerId={}", checkerId);
		log.info("User={} | action=getCheckerStats | entity=Consent | id={}", cu, checkerId);
		log.debug("Transaction started | method=getCheckerStats | id={}", checkerId);
		User user = loadUser(checkerId);
		if (user.getRole() != UserRole.CHECKER && user.getRole() != UserRole.ADMIN) {
			throw new UnauthorizedActionException("VIEW_CHECKER_STATS");
		}
		ZoneId zone = ZoneId.of("Asia/Kolkata");
		Instant startOfDay = LocalDate.now(zone).atStartOfDay(zone).toInstant();
		log.info("Executing DB query | method=countPendingApprovalExcludingCreator | param=checkerId={}", checkerId);
		long pending = consentRepository.countPendingApprovalExcludingCreator(ConsentStatus.PENDING_APPROVAL,
				checkerId);
		log.info("DB query completed | method=countPendingApprovalExcludingCreator | size={}", pending);
		log.info("Executing DB query | method=countApprovedByCheckerSince | param=checkerId={}", checkerId);
		long approvedToday = consentRepository.countApprovedByCheckerSince(checkerId, startOfDay);
		log.info("DB query completed | method=countApprovedByCheckerSince | size={}", approvedToday);
		log.info("Executing DB query | method=countByReviewedBy_IdAndStatus | param=checkerId={}, status=REJECTED",
				checkerId);
		long rejectedTotal = consentRepository.countByReviewedBy_IdAndStatus(checkerId, ConsentStatus.REJECTED);
		log.info("DB query completed | method=countByReviewedBy_IdAndStatus | size={}", rejectedTotal);
		log.info("Executing DB query | method=countByReviewedBy_Id | param=checkerId={}", checkerId);
		long totalReviewed = consentRepository.countByReviewedBy_Id(checkerId);
		log.info("DB query completed | method=countByReviewedBy_Id | size={}", totalReviewed);
		CheckerStatsResponse out = CheckerStatsResponse.builder().pendingReview(pending).approvedToday(approvedToday)
				.rejectedTotal(rejectedTotal).totalReviewed(totalReviewed).build();
		log.debug("Transaction completing | method=getCheckerStats | id={}", checkerId);
		log.debug("Exiting getCheckerStats | checkerId={}", checkerId);
		return out;
	}

	@Transactional(readOnly = true)
	public PagedResponse<ConsentResponse> getAllConsents(int page, int size, ConsentStatus status,
			ConsentCategory category, Long userId, UserRole role) {
		String cu = currentUser();
		log.debug("Entering getAllConsents | params: page={}, size={}, status={}, category={}, userId={}, role={}",
				page, size, status, category, userId, role);
		log.info("User={} | action=getAllConsents | entity=Consent | id={}", cu, userId != null ? userId : "n/a");
		log.debug("Transaction started | method=getAllConsents | id={}", userId != null ? userId : "n/a");
		PageRequest pr = PageRequest.of(page, size);
		Page<Consent> result;
		boolean makerScope = role == UserRole.MAKER;
		if (makerScope) {
			if (status != null && category != null) {
				log.info("Executing DB query | method=findByCreatedByIdAndStatusAndCategory | param=userId={}", userId);
				result = consentRepository.findByCreatedByIdAndStatusAndCategory(userId, status, category, pr);
				log.info("DB query completed | method=findByCreatedByIdAndStatusAndCategory | size={}",
						result.getContent().size());
			} else if (status != null) {
				log.info("Executing DB query | method=findByCreatedByIdAndStatus | param=userId={}", userId);
				result = consentRepository.findByCreatedByIdAndStatus(userId, status, pr);
				log.info("DB query completed | method=findByCreatedByIdAndStatus | size={}",
						result.getContent().size());
			} else if (category != null) {
				log.info("Executing DB query | method=findByCreatedByIdAndCategory | param=userId={}", userId);
				result = consentRepository.findByCreatedByIdAndCategory(userId, category, pr);
				log.info("DB query completed | method=findByCreatedByIdAndCategory | size={}",
						result.getContent().size());
			} else {
				log.info("Executing DB query | method=findByCreatedById | param=userId={}", userId);
				result = consentRepository.findByCreatedById(userId, pr);
				log.info("DB query completed | method=findByCreatedById | size={}", result.getContent().size());
			}
		} else {
			if (status != null && category != null) {
				log.info("Executing DB query | method=findByStatusAndCategory | param=status={}, category={}", status,
						category);
				result = consentRepository.findByStatusAndCategory(status, category, pr);
				log.info("DB query completed | method=findByStatusAndCategory | size={}", result.getContent().size());
			} else if (status != null) {
				log.info("Executing DB query | method=findByStatus | param=status={}", status);
				result = consentRepository.findByStatus(status, pr);
				log.info("DB query completed | method=findByStatus | size={}", result.getContent().size());
			} else if (category != null) {
				log.info("Executing DB query | method=findByCategory | param=category={}", category);
				result = consentRepository.findByCategory(category, pr);
				log.info("DB query completed | method=findByCategory | size={}", result.getContent().size());
			} else {
				log.info("Executing DB query | method=findAll | param=Pageable");
				result = consentRepository.findAll(pr);
				log.info("DB query completed | method=findAll | size={}", result.getContent().size());
			}
		}
		List<ConsentResponse> content = result.getContent().stream().map(ConsentMapper::toResponse)
				.collect(Collectors.toList());
		PagedResponse<ConsentResponse> out = PagedResponse.<ConsentResponse>builder().content(content)
				.totalElements(result.getTotalElements()).totalPages(result.getTotalPages())
				.currentPage(result.getNumber()).pageSize(result.getSize()).hasNext(result.hasNext())
				.hasPrevious(result.hasPrevious()).build();
		log.debug("Transaction completing | method=getAllConsents | id={}", userId != null ? userId : "n/a");
		log.debug("Exiting getAllConsents | totalElements={}", out.getTotalElements());
		return out;
	}

	@Transactional(readOnly = true)
	public List<ConsentResponse> getPendingApprovals(Long checkerId) {
		String cu = currentUser();
		log.debug("Entering getPendingApprovals | params: checkerId={}", checkerId);
		log.info("User={} | action=getPendingApprovals | entity=Consent | id={}", cu, checkerId);
		log.debug("Transaction started | method=getPendingApprovals | id={}", checkerId);
		log.info("Executing DB query | method=findPendingApprovalExcludingCreator | param=checkerId={}", checkerId);
		List<Consent> list = consentRepository.findPendingApprovalExcludingCreator(ConsentStatus.PENDING_APPROVAL,
				checkerId);
		log.info("DB query completed | method=findPendingApprovalExcludingCreator | size={}", list.size());
		List<ConsentResponse> out = list.stream().map(ConsentMapper::toResponse).collect(Collectors.toList());
		log.debug("Transaction completing | method=getPendingApprovals | id={}", checkerId);
		log.debug("Exiting getPendingApprovals | size={}", out.size());
		return out;
	}

	@Transactional
	public void deleteConsent(Long dbId, Long userId, HttpServletRequest http) {
		String cu = currentUser();
		log.debug("Entering deleteConsent | params: dbId={}, userId={}", dbId, userId);
		log.info("User={} | action=deleteConsent | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=deleteConsent | id={}", dbId);
		Consent consent = findConsent(dbId);
		validateOwner(consent, userId);
		if (consent.getStatus() != ConsentStatus.DRAFT) {
			throw new InvalidConsentStateException(consent.getStatus().name(), "DELETE");
		}
		auditService.log(userId, "CONSENT_DELETED", "CONSENT", consent.getId(), consent.getConsentName(),
				"Consent deleted", http);
		log.info("Executing DB query | method=delete | param=Consent dbId={}", dbId);
		consentRepository.delete(consent);
		log.info("DB query completed | method=delete | completed=true");
		log.debug("Transaction completing | method=deleteConsent | id={}", dbId);
		log.debug("Exiting deleteConsent | completed successfully");
	}

	@Transactional(readOnly = true)
	public ConsentResponse getConsentById(Long dbId) {
		String cu = currentUser();
		log.debug("Entering getConsentById | params: dbId={}", dbId);
		log.info("User={} | action=getConsentById | entity=Consent | id={}", cu, dbId);
		log.debug("Transaction started | method=getConsentById | id={}", dbId);
		ConsentResponse out = ConsentMapper.toResponse(findConsent(dbId));
		log.debug("Transaction completing | method=getConsentById | id={}", dbId);
		log.debug("Exiting getConsentById | dbId={}", dbId);
		return out;
	}

	@Transactional(readOnly = true)
	public List<ConsentVersionResponse> getVersionHistory(Long dbId) {
		String cu = currentUser();
		log.debug("Entering getVersionHistory | params: dbId={}", dbId);
		log.info("User={} | action=getVersionHistory | entity=ConsentVersion | id={}", cu, dbId);
		log.debug("Transaction started | method=getVersionHistory | id={}", dbId);
		findConsent(dbId);
		log.info("Executing DB query | method=findByConsent_IdOrderByChangedAtDesc | param=dbId={}", dbId);
		List<ConsentVersion> versions = consentVersionRepository.findByConsent_IdOrderByChangedAtDesc(dbId);
		log.info("DB query completed | method=findByConsent_IdOrderByChangedAtDesc | size={}", versions.size());
		List<ConsentVersionResponse> out = versions.stream()
				.map(v -> ConsentVersionResponse.builder().id(v.getId()).versionNumber(v.getVersionNumber())
						.consentMessageSnapshot(v.getConsentMessageSnapshot()).changedFields(v.getChangedFields())
						.changedBy(ConsentMapper.toUserSummary(v.getChangedBy())).changedAt(v.getChangedAt()).build())
				.collect(Collectors.toList());
		log.debug("Transaction completing | method=getVersionHistory | id={}", dbId);
		log.debug("Exiting getVersionHistory | size={}", out.size());
		return out;
	}

	public String previewNextConsentId() {
		String cu = currentUser();
		log.debug("Entering previewNextConsentId | params: none");
		log.info("User={} | action=previewNextConsentId | entity=ConsentId | id=n/a", cu);
		String next = consentIdGeneratorService.previewNextId();
		log.debug("Exiting previewNextConsentId | result=present");
		return next;
	}

	public List<AdminConsentTemplateResponse> listWorkflowTemplates() {
		String cu = currentUser();
		log.debug("Entering listWorkflowTemplates | params: none");
		log.info("User={} | action=listWorkflowTemplates | entity=Consent | id=n/a", cu);
		log.info("Executing DB query | method=findByStatusInOrderByConsentNameAsc | param=statuses=PUBLISHED,APPROVED");
		List<Consent> templates = consentRepository
				.findByStatusInOrderByConsentNameAsc(List.of(ConsentStatus.PUBLISHED, ConsentStatus.APPROVED));
		log.info("DB query completed | method=findByStatusInOrderByConsentNameAsc | size={}", templates.size());
		List<AdminConsentTemplateResponse> out = templates.stream()
				.map(c -> AdminConsentTemplateResponse.builder().id(c.getId()).consentId(c.getConsentId())
						.consentName(c.getConsentName()).channelEmail(c.isChannelEmail()).channelSms(c.isChannelSms())
						.channelPush(c.isChannelPush()).channelWhatsapp(c.isChannelWhatsapp())
						.channelRcs(c.isChannelRcs()).build())
				.toList();
		log.debug("Exiting listWorkflowTemplates | size={}", out.size());
		return out;
	}

	private Consent findConsent(Long dbId) {
		log.info("Executing DB query | method=findById | param=dbId={}", dbId);
		Consent c = consentRepository.findById(dbId).orElseThrow(() -> new ConsentNotFoundException(dbId));
		log.info("DB query completed | method=findById | present=true");
		return c;
	}

	private User loadUser(Long id) {
		log.info("Executing DB query | method=findById | param=userId={}", id);
		User u = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
		log.info("DB query completed | method=findById | present=true");
		return u;
	}

	private void assertMakerOrAdmin(User user) {
		if (user.getRole() != UserRole.MAKER && user.getRole() != UserRole.ADMIN) {
			throw new UnauthorizedActionException("CREATE_CONSENT");
		}
	}

	private void validateOwner(Consent consent, Long userId) {
		if (!consent.getCreatedBy().getId().equals(userId)) {
			User current = loadUser(userId);
			if (current.getRole() != UserRole.ADMIN) {
				throw new UnauthorizedActionException("EDIT_CONSENT");
			}
		}
	}

	private void validateEditableStatus(ConsentStatus status) {
		if (status != ConsentStatus.DRAFT && status != ConsentStatus.REVISION_REQUESTED) {
			throw new InvalidConsentStateException(status.name(), "UPDATE");
		}
	}

	private void saveVersionSnapshot(Consent old, User changedBy, Map<String, Map<String, String>> changedFields) {
		Map<String, Map<String, String>> fieldsToStore = changedFields.isEmpty() ? new HashMap<>()
				: new LinkedHashMap<>(changedFields);
		ConsentVersion version = ConsentVersion.builder().consent(old).versionNumber(0)
				.consentMessageSnapshot(old.getConsentMessage()).changedFields(fieldsToStore).changedBy(changedBy)
				.changedAt(Instant.now()).build();
		log.info("Executing DB query | method=save | param=ConsentVersion");
		consentVersionRepository.save(version);
		log.info("DB query completed | method=save | completed=true");
	}

	private void applyUpdates(Consent c, ConsentUpdateRequest r) {
		c.setConsentName(r.getConsentName());
		c.setDescription(r.getDescription());
		c.setCategory(r.getCategory());
		c.setValidityPeriodDays(r.getValidityPeriodDays());
		c.setValidityStartDate(r.getValidityStartDate());
		c.setValidityEndDate(r.getValidityEndDate());
		c.setConsentMessage(r.getConsentMessage());
		c.setChannelEmail(r.isChannelEmail());
		c.setChannelSms(r.isChannelSms());
		c.setChannelPush(r.isChannelPush());
		c.setChannelWhatsapp(r.isChannelWhatsapp());
		c.setChannelRcs(r.isChannelRcs());
		c.setTagsUsed(r.getTagsUsed() == null ? new ArrayList<>() : new ArrayList<>(r.getTagsUsed()));
		c.setSearchTags(r.getSearchTags());
	}

	private Map<String, Map<String, String>> computeDiff(Consent old, ConsentUpdateRequest r) {
		Map<String, Map<String, String>> map = new LinkedHashMap<>();
		putIfChanged(map, "consentName", str(old.getConsentName()), str(r.getConsentName()));
		putIfChanged(map, "description", str(old.getDescription()), str(r.getDescription()));
		putIfChanged(map, "category", str(old.getCategory()), str(r.getCategory()));
		putIfChanged(map, "validityPeriodDays", str(old.getValidityPeriodDays()), str(r.getValidityPeriodDays()));
		putIfChanged(map, "validityStartDate", str(old.getValidityStartDate()), str(r.getValidityStartDate()));
		putIfChanged(map, "validityEndDate", str(old.getValidityEndDate()), str(r.getValidityEndDate()));
		putIfChanged(map, "consentMessage", str(old.getConsentMessage()), str(r.getConsentMessage()));
		putIfChanged(map, "channelEmail", str(old.isChannelEmail()), str(r.isChannelEmail()));
		putIfChanged(map, "channelSms", str(old.isChannelSms()), str(r.isChannelSms()));
		putIfChanged(map, "channelPush", str(old.isChannelPush()), str(r.isChannelPush()));
		putIfChanged(map, "channelWhatsapp", str(old.isChannelWhatsapp()), str(r.isChannelWhatsapp()));
		putIfChanged(map, "channelRcs", str(old.isChannelRcs()), str(r.isChannelRcs()));
		putIfChanged(map, "tagsUsed", str(old.getTagsUsed()), str(r.getTagsUsed()));
		putIfChanged(map, "searchTags", str(old.getSearchTags()), str(r.getSearchTags()));
		return map;
	}

	private void putIfChanged(Map<String, Map<String, String>> map, String key, String oldV, String newV) {
		if (!Objects.equals(oldV, newV)) {
			map.put(key, Map.of("old", oldV == null ? "" : oldV, "new", newV == null ? "" : newV));
		}
	}

	private String str(Object o) {
		return o == null ? "" : String.valueOf(o);
	}

	private String labelForField(String field) {
		return switch (field) {
		case "consentName" -> "Consent Name";
		case "description" -> "Description";
		case "category" -> "Category";
		case "validityPeriodDays" -> "Validity Period (Days)";
		case "validityStartDate" -> "Validity Start Date";
		case "validityEndDate" -> "Validity End Date";
		case "consentMessage" -> "Consent Message";
		case "deliveryChannels" -> "Delivery Channels";
		case "tagsUsed" -> "Tags Used";
		case "searchTags" -> "Search Tags";
		default -> field;
		};
	}

	public static Long currentUserId() {
		String cu = currentUser();
		log.debug("Entering currentUserId | params: none");
		log.info("User={} | action=currentUserId | entity=User | id=n/a", cu);
		try {
			Object p = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			if (p instanceof UserDetailsImpl u) {
				Long id = u.getId();
				log.debug("Exiting currentUserId | id={}", id);
				return id;
			}
			log.debug("Exiting currentUserId | id=null");
			return null;
		} catch (Exception e) {
			log.error("Exception in currentUserId | user={} | message={}", cu, e.getMessage(), e);
			throw e;
		}
	}
}
