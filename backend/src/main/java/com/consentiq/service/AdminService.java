package com.consentiq.service;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.enums.CustomerConsentStatus;
import com.consentiq.enums.InviteTokenResponseStatus;
import com.consentiq.model.dto.request.RecordOnBehalfConsentRequest;
import com.consentiq.model.dto.request.SendConsentLinkRequest;
import com.consentiq.model.dto.response.*;
import com.consentiq.model.entity.*;
import com.consentiq.repository.*;
import com.consentiq.util.DeliveryChannelCatalog;
import com.consentiq.util.HtmlTextUtil;
import com.consentiq.util.MisReportExportUtil;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Subquery;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.time.Instant;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import java.util.OptionalDouble;
import java.util.Set;
import java.util.TreeMap;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AdminService {

    private static final Logger log = LoggerFactory.getLogger(AdminService.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private final CustomerRepository customerRepository;
    private final CustomerConsentRecordRepository recordRepository;
    private final ConsentRepository consentRepository;
    private final ConsentInviteTokenRepository inviteTokenRepository;
    private final ConsentOneTimeCodeRepository consentOneTimeCodeRepository;
    private final OnBehalfConsentRecordRepository onBehalfConsentRecordRepository;
    private final UserRepository userRepository;
    private final EmailDispatchService emailDispatchService;
    private final AuditLogRepository auditLogRepository;
    private final ConsentMailProperties consentMailProperties;
    private final CustomerConsentRecordService customerConsentRecordService;
    private final CustomerChannelPreferenceService customerChannelPreferenceService;
    private final CustomerLanguagePreferenceService customerLanguagePreferenceService;
    private final AuditService auditService;
    private final CustomerCurrentStatusService customerCurrentStatusService;
    private final com.consentiq.repository.ConsentRuleRepository consentRuleRepository;

    @Value("${app.public-consent-base-url:http://localhost:4200}")
    private String publicConsentBaseUrl;

    // ── Dashboard ─────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public AdminDashboardStatsResponse getDashboardStats() {
        String cu = currentUser();
        log.debug("Entering getDashboardStats | params: none");
        log.info("User={} | action=getDashboardStats | entity=Dashboard | id=n/a", cu);
        log.debug("Transaction started | method=getDashboardStats | id=n/a");
        try {
            log.info("Executing DB query | method=count | param=n/a");
            long total = customerRepository.count();
            log.info("DB query completed | method=count | result={}", total);

            log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=ACCEPTED,EXPIRING_SOON");
            long active = recordRepository.countDistinctCustomersByStatusIn(
                    List.of(CustomerConsentRecordStatus.ACCEPTED,
                            CustomerConsentRecordStatus.EXPIRING_SOON));
            log.info("DB query completed | method=countDistinctCustomersByStatusIn | result={}", active);

            log.info("Executing DB query | method=countDistinctCustomersByStatus | param=PENDING");
            long pending = recordRepository.countDistinctCustomersByStatus(
                    CustomerConsentRecordStatus.PENDING);
            log.info("DB query completed | method=countDistinctCustomersByStatus | result={}", pending);

            log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=REJECTED,WITHDRAWN");
            long declined = recordRepository.countDistinctCustomersByStatusIn(
                    List.of(CustomerConsentRecordStatus.REJECTED,
                            CustomerConsentRecordStatus.WITHDRAWN));
            log.info("DB query completed | method=countDistinctCustomersByStatusIn | result={}", declined);

            AdminDashboardStatsResponse res = AdminDashboardStatsResponse.builder()
                    .totalCustomers(total)
                    .activeConsents(active)
                    .pendingResponse(pending)
                    .declined(declined)
                    .build();
            log.debug("Transaction completing | method=getDashboardStats | id=n/a");
            log.debug("Exiting getDashboardStats | result=totalCustomers={},activeConsents={},pendingResponse={},declined={}",
                    total, active, pending, declined);
            return res;
        } catch (Exception e) {
            log.error("Exception in getDashboardStats | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public AdminMisDashboardResponse getMisDashboard() {
        String cu = currentUser();
        log.debug("Entering getMisDashboard | params: none");
        log.info("User={} | action=getMisDashboard | entity=MisDashboard | id=n/a", cu);
        log.debug("Transaction started | method=getMisDashboard | id=n/a");
        try {
            log.info("Executing DB query | method=count | param=n/a");
            long totalCustomers = customerRepository.count();
            log.info("DB query completed | method=count | result={}", totalCustomers);

            Map<com.consentiq.enums.CustomerCurrentStatus, Long> byStatus =
                    new java.util.EnumMap<>(com.consentiq.enums.CustomerCurrentStatus.class);
            for (Object[] row : customerRepository.countByCurrentConsentStatus()) {
                com.consentiq.enums.CustomerCurrentStatus st = row[0] == null
                        ? com.consentiq.enums.CustomerCurrentStatus.NO_CONSENT
                        : (com.consentiq.enums.CustomerCurrentStatus) row[0];
                byStatus.merge(st, ((Number) row[1]).longValue(), Long::sum);
            }
            long active = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.ACTIVE, 0L);
            long pending = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.PENDING, 0L);
            long declined = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.DECLINED, 0L);
            long withdrawn = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.WITHDRAWN, 0L);
            long expired = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.EXPIRED, 0L);
            long unresponsive = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.UNRESPONSIVE, 0L);
            long noConsent = byStatus.getOrDefault(com.consentiq.enums.CustomerCurrentStatus.NO_CONSENT, 0L);
            long other = Math.max(0, totalCustomers - active - pending - declined);

            long withConsent = totalCustomers - noConsent;
            double consentRate = withConsent <= 0 ? 0.0 : Math.round(1000.0 * active / withConsent) / 10.0;

            long pendingMcConsents = consentRepository.countByStatusAndLinkedRuleIntent(ConsentStatus.PENDING_APPROVAL, false);
            long pendingMcLinked = consentRepository.countByStatusAndLinkedRuleIntent(ConsentStatus.PENDING_APPROVAL, true);
            long pendingMcRules = consentRuleRepository.countByStatusAndIsLinkedToConsentWorkflow(
                    com.consentiq.enums.ConsentRuleStatus.PENDING_CHECKER_APPROVAL, false);
            long pendingMcBroadcasts = 0L;
            long pendingMc = pendingMcConsents + pendingMcLinked + pendingMcRules + pendingMcBroadcasts;

            List<String> channelOrder = List.of("Email", "WhatsApp", "SMS", "Push", "RCS");
            Map<String, Integer> raw = new HashMap<>();
            log.info("Executing DB query | method=findByStatusInOrderByConsentNameAsc | param=PUBLISHED,APPROVED");
            List<Consent> forChannels = consentRepository
                    .findByStatusInOrderByConsentNameAsc(
                            List.of(ConsentStatus.PUBLISHED, ConsentStatus.APPROVED));
            log.info("DB query completed | method=findByStatusInOrderByConsentNameAsc | size={}", forChannels.size());

            for (Consent c : forChannels) {
                if (c.isChannelEmail())    raw.merge("Email",    1, Integer::sum);
                if (c.isChannelSms())      raw.merge("SMS",      1, Integer::sum);
                if (c.isChannelPush())     raw.merge("Push",     1, Integer::sum);
                if (c.isChannelWhatsapp()) raw.merge("WhatsApp", 1, Integer::sum);
                if (c.isChannelRcs())      raw.merge("RCS",      1, Integer::sum);
            }
            int totalCh = raw.values().stream().mapToInt(Integer::intValue).sum();
            List<AdminMisDashboardResponse.ChannelPerformanceRow> channelRows = new ArrayList<>();
            if (totalCh == 0) {
                for (String label : channelOrder) {
                    channelRows.add(AdminMisDashboardResponse.ChannelPerformanceRow.builder()
                            .channel(label).percentage(0.0).build());
                }
            } else {
                for (String label : channelOrder) {
                    int count = raw.getOrDefault(label, 0);
                    double pct = Math.round(1000.0 * count / totalCh) / 10.0;
                    channelRows.add(AdminMisDashboardResponse.ChannelPerformanceRow.builder()
                            .channel(label).percentage(pct).build());
                }
            }

            log.info("Executing DB query | method=countByAction | param=CONSENT_APPROVED");
            long consentMc = auditLogRepository.countByAction("CONSENT_APPROVED");
            log.info("DB query completed | method=countByAction | result={}", consentMc);
            log.info("Executing DB query | method=countByAction | param=CONSENT_REVISION_REQUESTED");
            long ruleMc = auditLogRepository.countByAction("RULE_APPROVED");
            log.info("DB query completed | method=countByAction | result={}", ruleMc);
            log.info("Executing DB query | method=countByAction | param=CONSENT_PUBLISHED");
            long broadcastMc = auditLogRepository.countByAction("BROADCAST_APPROVED");
            log.info("DB query completed | method=countByAction | result={}", broadcastMc);
            log.info("Executing DB query | method=countByAction | param=CONSENT_REJECTED");
            long rejections = auditLogRepository.countByAction("CONSENT_REJECTED");
            log.info("DB query completed | method=countByAction | result={}", rejections);
            long decided = consentMc + rejections;
            double approvalRate = decided == 0 ? 0.0
                    : Math.round(10000.0 * consentMc / decided) / 100.0;

            log.info("Executing DB query | method=findByReviewedAtIsNotNullAndSubmittedAtIsNotNull | param=n/a");
            List<Consent> reviewed = consentRepository
                    .findByReviewedAtIsNotNullAndSubmittedAtIsNotNull();
            log.info("DB query completed | method=findByReviewedAtIsNotNullAndSubmittedAtIsNotNull | size={}",
                    reviewed.size());
            OptionalDouble avgH = reviewed.stream()
                    .filter(c -> c.getReviewedAt() != null && c.getSubmittedAt() != null)
                    .mapToDouble(c -> java.time.Duration.between(c.getSubmittedAt(), c.getReviewedAt()).getSeconds() / 3600.0)
                    .filter(h -> h >= 0 && h < 10_000)
                    .average();
            double averageApprovalHours = avgH.isPresent()
                    ? Math.round(avgH.getAsDouble() * 10.0) / 10.0 : 0.0;

            AdminMisDashboardResponse.MisKpiSummary kpi =
                    AdminMisDashboardResponse.MisKpiSummary.builder()
                            .totalCustomers(totalCustomers)
                            .consentRate(consentRate)
                            .activeConsents(active)
                            .pendingResponse(pending)
                            .declined(declined)
                            .pendingMcApprovals(pendingMc)
                            .withdrawn(withdrawn)
                            .expired(expired)
                            .unresponsive(unresponsive)
                            .noConsent(noConsent)
                            .other(other)
                            .pendingMcConsents(pendingMcConsents)
                            .pendingMcLinked(pendingMcLinked)
                            .pendingMcRules(pendingMcRules)
                            .pendingMcBroadcasts(pendingMcBroadcasts)
                            .build();
            AdminMisDashboardResponse.MakerCheckerMis mc =
                    AdminMisDashboardResponse.MakerCheckerMis.builder()
                            .consentMcCompleted(consentMc)
                            .ruleMcCompleted(ruleMc)
                            .broadcastMcCompleted(broadcastMc)
                            .rejections(rejections)
                            .averageApprovalHours(averageApprovalHours)
                            .approvalRate(approvalRate)
                            .build();
            AdminMisDashboardResponse res = AdminMisDashboardResponse.builder()
                    .kpi(kpi)
                    .channelPerformance(Collections.unmodifiableList(channelRows))
                    .makerChecker(mc)
                    .build();
            log.debug("Transaction completing | method=getMisDashboard | id=n/a");
            log.debug("Exiting getMisDashboard | result=kpiBuilt=true,channelRowsSize={}", channelRows.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in getMisDashboard | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    // ── Customer list / export ────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public PagedResponse<AdminCustomerRowResponse> getCustomers(int page, int size, String mobileNumber,
            String customerId, String consentStatusFilter, String sortBy, String sortDir) {
        return getCustomers(page, size, mobileNumber, customerId, consentStatusFilter, null, null, sortBy, sortDir);
    }

    @Transactional(readOnly = true)
    public PagedResponse<AdminCustomerRowResponse> getCustomers(int page, int size, String mobileNumber,
            String customerId, String consentStatusFilter, String consentStatuses, Long consentDbId,
            String sortBy, String sortDir) {
        String cu = currentUser();
        log.debug("Entering getCustomers | params: page={},size={},mobileNumber={},customerId={},consentStatusFilter={},sortBy={},sortDir={}",
                page, size, mobileNumber, customerId, consentStatusFilter, sortBy, sortDir);
        log.info("User={} | action=getCustomers | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getCustomers | id=n/a");
        try {
            com.consentiq.enums.CustomerCurrentStatus statusEnum = parseStatusFilter(consentStatusFilter);
            Specification<Customer> spec = customerSpec(mobileNumber, customerId, statusEnum,
                    parseConsentLevelStatuses(consentStatuses), consentDbId);
            Sort sort = resolveSort(sortBy, sortDir);
            Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)), sort);
            log.info("Executing DB query | method=findAll | param=spec,pageable");
            Page<Customer> pg = customerRepository.findAll(spec, pageable);
            log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
            List<AdminCustomerRowResponse> rows = toRows(pg.getContent());
            PagedResponse<AdminCustomerRowResponse> res = PagedResponse.<AdminCustomerRowResponse>builder()
                    .content(rows)
                    .totalElements(pg.getTotalElements())
                    .totalPages(pg.getTotalPages())
                    .currentPage(pg.getNumber())
                    .pageSize(pg.getSize())
                    .hasNext(pg.hasNext())
                    .hasPrevious(pg.hasPrevious())
                    .build();
            log.debug("Transaction completing | method=getCustomers | id=n/a");
            log.debug("Exiting getCustomers | result=totalElements={},contentSize={}", res.getTotalElements(), rows.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in getCustomers | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public void exportCustomersCsv(OutputStream outputStream, String mobileNumber, String customerId,
            String consentStatusFilter) throws java.io.IOException {
        exportCustomersCsv(outputStream, mobileNumber, customerId, consentStatusFilter, null, null, null, null);
    }

    @Transactional(readOnly = true)
    public void exportCustomersCsv(OutputStream outputStream, String mobileNumber, String customerId,
            String consentStatusFilter, String consentStatuses, Long consentDbId, String sortBy, String sortDir)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportCustomersCsv | params: mobileNumber={},customerId={},consentStatusFilter={}",
                mobileNumber, customerId, consentStatusFilter);
        log.info("User={} | action=exportCustomersCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportCustomersCsv | id=n/a");
        try {
            com.consentiq.enums.CustomerCurrentStatus statusEnum = parseStatusFilter(consentStatusFilter);
            Specification<Customer> spec = customerSpec(mobileNumber, customerId, statusEnum,
                    parseConsentLevelStatuses(consentStatuses), consentDbId);
            log.info("Executing DB query | method=findAll | param=spec,sort");
            List<Customer> all = customerRepository.findAll(spec, resolveSort(sortBy, sortDir));
            log.info("DB query completed | method=findAll | size={}", all.size());
            List<AdminCustomerRowResponse> rows = toRows(all);
            java.time.format.DateTimeFormatter fmt = java.time.format.DateTimeFormatter
                    .ofPattern("yyyy-MM-dd HH:mm").withZone(CustomerCurrentStatusService.ZONE);
            try (OutputStreamWriter w = new OutputStreamWriter(outputStream, StandardCharsets.UTF_8)) {
                w.write('\uFEFF');
                w.write("Customer ID,Customer Name,Mobile Number,Email,Customer Status,Consents,Last Updated\n");
                for (AdminCustomerRowResponse r : rows) {
                    w.write(csvEscape(r.getCustomerId()));
                    w.write(',');
                    w.write(csvEscape(r.getCustomerName()));
                    w.write(',');
                    w.write(csvEscape(r.getMobileNumber()));
                    w.write(',');
                    w.write(csvEscape(r.getEmail() == null ? "" : r.getEmail()));
                    w.write(',');
                    w.write(csvEscape(r.getCurrentStatus() != null ? r.getCurrentStatus().name() : ""));
                    w.write(',');
                    w.write(csvEscape(CustomerCurrentStatusService.summaryText(r.getConsents())));
                    w.write(',');
                    w.write(csvEscape(r.getLastUpdated() != null ? fmt.format(r.getLastUpdated()) : ""));
                    w.write('\n');
                }
                w.flush();
            }
            log.debug("Transaction completing | method=exportCustomersCsv | id=n/a");
            log.debug("Exiting exportCustomersCsv | completed successfully");
        } catch (Exception e) {
            log.error("Exception in exportCustomersCsv | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    // ── Capture search ────────────────────────────────────────────────────────

 // ── Capture search ────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public CaptureConsentSearchResponse searchCustomerForCapture(String query) {
        String cu = currentUser();
        log.debug("Entering searchCustomerForCapture | params: query=present");
        log.info("User={} | action=searchCustomerForCapture | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=searchCustomerForCapture | id=n/a");
        try {
            if (!StringUtils.hasText(query)) {
                throw new IllegalArgumentException("Search query is required");
            }
            String q = query.trim();
            String mobileKey = q.replaceAll("\\s+", "");
            log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerIdKey");
            Optional<Customer> byCustomerId = customerRepository.findByCustomerIdIgnoreCase(q);
            log.info("DB query completed | method=findByCustomerIdIgnoreCase | present={}", byCustomerId.isPresent());
            Customer c = byCustomerId
                    .or(() -> {
                        log.info("Executing DB query | method=findByMobileNumber | param=n/a");
                        Optional<Customer> byMobile = customerRepository.findByMobileNumber(mobileKey);
                        log.info("DB query completed | method=findByMobileNumber | present={}", byMobile.isPresent());
                        return byMobile;
                    })
                    .or(() -> {
                        String digits = q.replaceAll("[^0-9]", "");
                        if (!q.matches("^[+0-9\\s()\\-]+$") || digits.length() < 10) {
                            return Optional.empty();
                        }
                        return customerRepository.findFirstByMobileNumberEndingWith(digits.substring(digits.length() - 10));
                    })
                    .orElseThrow(() -> new IllegalArgumentException(
                            "No customer found for the given Customer ID or mobile number"));

            TreeMap<String, String> channelsByNorm = new TreeMap<>();
            log.info("Executing DB query | method=findByCustomerId | param=customerId");
            List<ConsentInviteToken> tokens = inviteTokenRepository.findByCustomerId(c.getCustomerId());
            log.info("DB query completed | method=findByCustomerId | size={}", tokens.size());
            for (ConsentInviteToken t : tokens) {
                if (t.getResponseStatus() == null
                        || t.getResponseStatus() != InviteTokenResponseStatus.ACCEPTED) {
                    continue;
                }
                for (String k : DeliveryChannelCatalog.normalizedFromInviteToken(t)) {
                    channelsByNorm.putIfAbsent(k, DeliveryChannelCatalog.displayLabel(k));
                }
            }
            List<String> activeChannels = new ArrayList<>(channelsByNorm.values());

            String derivedStatus = deriveConsentStatusForCustomer(c.getCustomerId());

            CaptureConsentSearchResponse res = CaptureConsentSearchResponse.builder()
                    .customerId(c.getCustomerId())
                    .fullName(c.getFullName())
                    .email(c.getEmail())
                    .mobileNumber(c.getMobileNumber())
                    .activeDeliveryChannels(activeChannels)
                    .consentStatus(derivedStatus)
                    .consentValidUntil(c.getConsentValidUntil())
                    .lastConsentInviteSentAt(c.getLastConsentInviteSentAt())
                    .lastConsentResponseAt(c.getLastConsentResponseAt())
                    .reEngagementEligibleAfter(c.getReEngagementEligibleAfter())
                    .vip(c.isVipFlag())
                    .build();
            log.debug("Transaction completing | method=searchCustomerForCapture | id={}", c.getCustomerId());
            log.debug("Exiting searchCustomerForCapture | result=customerId={}", res.getCustomerId());
            return res;
        } catch (Exception e) {
            log.error("Exception in searchCustomerForCapture | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }
    
    // ── Consent templates ─────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<AdminConsentTemplateResponse> listConsentTemplates() {
        String cu = currentUser();
        log.debug("Entering listConsentTemplates | params: none");
        log.info("User={} | action=listConsentTemplates | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=listConsentTemplates | id=n/a");
        try {
            log.info("Executing DB query | method=findByStatusInOrderByConsentNameAsc | param=PUBLISHED,APPROVED");
            LocalDate todayIst = LocalDate.now(java.time.ZoneId.of("Asia/Kolkata"));
            List<Consent> list = consentRepository
                    .findByStatusInOrderByConsentNameAsc(List.of(ConsentStatus.PUBLISHED)).stream()
                    .filter(c -> c.getValidityEndDate() == null || !c.getValidityEndDate().isBefore(todayIst))
                    .toList();
            log.info("DB query completed | method=findByStatusInOrderByConsentNameAsc | size={}", list.size());
            List<AdminConsentTemplateResponse> res = list.stream()
                    .map(c -> AdminConsentTemplateResponse.builder()
                            .id(c.getId())
                            .consentId(c.getConsentId())
                            .consentName(c.getConsentName())
                            .channelEmail(c.isChannelEmail())
                            .channelSms(c.isChannelSms())
                            .channelPush(c.isChannelPush())
                            .channelWhatsapp(c.isChannelWhatsapp())
                            .channelRcs(c.isChannelRcs())
                            .build())
                    .toList();
            log.debug("Transaction completing | method=listConsentTemplates | id=n/a");
            log.debug("Exiting listConsentTemplates | result=size={}", res.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in listConsentTemplates | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    // ── Send capture link ─────────────────────────────────────────────────────

    private static void assertTemplateValidityNotEnded(Consent template) {
        if (template.getValidityEndDate() != null
                && template.getValidityEndDate().isBefore(LocalDate.now(java.time.ZoneId.of("Asia/Kolkata")))) {
            throw new IllegalArgumentException("This consent template's validity period has ended.");
        }
    }

    private void assertNotAlreadyAccepted(String customerId, Long consentDbId) {
        recordRepository.findByCustomerIdAndConsentDbId(customerId, consentDbId).ifPresent(r -> {
            LocalDate today = LocalDate.now(java.time.ZoneId.of("Asia/Kolkata"));
            LocalDate validUntil = r.getConsentValidUntil();
            if (r.getStatus() == CustomerConsentRecordStatus.ACCEPTED
                    && (validUntil == null || !validUntil.isBefore(today))) {
                throw new IllegalArgumentException("Customer has already accepted this consent"
                        + (validUntil != null ? " (valid until " + validUntil + ")" : "") + ".");
            }
        });
    }

    private static jakarta.servlet.http.HttpServletRequest currentRequest() {
        var attrs = org.springframework.web.context.request.RequestContextHolder.getRequestAttributes();
        return attrs instanceof org.springframework.web.context.request.ServletRequestAttributes s ? s.getRequest() : null;
    }

    private void expirePendingInvites(String customerId, Long consentDbId, Instant now) {
        List<ConsentInviteToken> pending = inviteTokenRepository.findByCustomerId(customerId).stream()
                .filter(t -> consentDbId.equals(t.getConsentDbId()))
                .filter(t -> t.getResponseStatus() == null || t.getResponseStatus() == InviteTokenResponseStatus.PENDING)
                .filter(t -> t.getExpiresAt() != null && t.getExpiresAt().isAfter(now))
                .toList();
        if (pending.isEmpty()) {
            return;
        }
        pending.forEach(t -> t.setExpiresAt(now));
        inviteTokenRepository.saveAll(pending);
        List<ConsentOneTimeCode> codes = consentOneTimeCodeRepository
                .findByConsentRequestIdIn(pending.stream().map(ConsentInviteToken::getId).toList());
        codes.forEach(c -> {
            c.setUsed(true);
            c.setExpiresAt(now);
        });
        consentOneTimeCodeRepository.saveAll(codes);
    }

    @Transactional
    public SendConsentLinkResponse sendCaptureLink(SendConsentLinkRequest req, Long adminUserId) {
        String cu = currentUser();
        log.debug("Entering sendCaptureLink | params: adminUserId={},consentTemplateId={},customerId=present",
                adminUserId, req.getConsentTemplateId());
        log.info("User={} | action=sendCaptureLink | entity=ConsentInvite | id={}", cu, req.getConsentTemplateId());
        log.debug("Transaction started | method=sendCaptureLink | id={}", req.getConsentTemplateId());
        try {
            log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerId");
            Customer customer = customerRepository.findByCustomerIdIgnoreCase(req.getCustomerId().trim())
                    .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
            log.info("DB query completed | method=findByCustomerIdIgnoreCase | present=true");
            if (!StringUtils.hasText(customer.getEmail())) {
                throw new IllegalArgumentException("Customer has no registered email on file");
            }
            log.info("Executing DB query | method=findById | param=consentTemplateId");
            Consent template = consentRepository.findById(req.getConsentTemplateId())
                    .orElseThrow(() -> new IllegalArgumentException("Consent template not found"));
            log.info("DB query completed | method=findById | present=true");
            if (template.getStatus() != ConsentStatus.PUBLISHED) {
                throw new IllegalArgumentException("Only published consent templates can be sent.");
            }
            assertTemplateValidityNotEnded(template);
            List<String> configured = buildChannelList(template);
            if (configured.isEmpty()) {
                throw new IllegalArgumentException(
                        "This consent template has no delivery channels configured. Configure channels on the template before capture.");
            }
            Set<String> allowed = DeliveryChannelCatalog.allowedKeysFromTemplate(configured);
            List<String> selectedNorm = DeliveryChannelCatalog.normalizeAndDedupe(req.getDeliveryChannels());
            if (selectedNorm.isEmpty()) {
                throw new IllegalArgumentException("Select at least one delivery channel.");
            }
            if (!allowed.contains("EMAIL")) {
                throw new IllegalArgumentException(
                        "This consent template does not include Email. Add Email to the template's delivery channels to use send-link capture, or use another capture method.");
            }
            if (!selectedNorm.contains("EMAIL")) {
                throw new IllegalArgumentException(
                        "Select Email as one of the delivery channels. The secure consent link is delivered to the customer's registered mailbox.");
            }
            for (String s : selectedNorm) {
                if (!allowed.contains(s)) {
                    String allowedReadable = DeliveryChannelCatalog
                            .formatForCustomer(DeliveryChannelCatalog.normalizeAndDedupe(configured));
                    throw new IllegalArgumentException(
                            "One or more selected channels are not allowed for this consent template. Allowed channels: "
                                    + allowedReadable + ".");
                }
            }
            assertNotAlreadyAccepted(customer.getCustomerId(), template.getId());
            String summaryPlain = DeliveryChannelCatalog.formatForCustomer(selectedNorm);
            String token = UUID.randomUUID().toString().replace("-", "");
            Instant now = Instant.now();
            expirePendingInvites(customer.getCustomerId(), template.getId(), now);
            ConsentInviteToken entity = ConsentInviteToken.builder()
                    .token(token)
                    .customerId(customer.getCustomerId())
                    .consentDbId(template.getId())
                    .deliveryChannel(summaryPlain)
                    .captureDeliveryChannels(selectedNorm)
                    .consentTypeLabel(req.getConsentType())
                    .createdAt(now)
                    .expiresAt(now.plus(14, ChronoUnit.DAYS))
                    .build();
            log.info("Executing DB query | method=save | param=ConsentInviteToken");
            inviteTokenRepository.save(entity);
            log.info("DB query completed | method=save | result=completed");
            String opaqueCode = UUID.randomUUID().toString().replace("-", "");
            log.info("Executing DB query | method=save | param=ConsentOneTimeCode");
            consentOneTimeCodeRepository.save(ConsentOneTimeCode.builder()
                    .code(opaqueCode)
                    .consentRequestId(entity.getId())
                    .createdAt(now)
                    .expiresAt(now.plus(24, ChronoUnit.HOURS))
                    .used(false)
                    .build());
            log.info("DB query completed | method=save | result=completed");
            String link = publicConsentBaseUrl.replaceAll("/$", "") + "/public/consent/verify?code=" + opaqueCode;
            String descriptionPlain = HtmlTextUtil.stripToPlain(template.getDescription(), 2000);
            String subject = ConsentRequestEmailBuilder.buildSubject(template.getConsentName());
            String html = ConsentRequestEmailBuilder.buildHtmlBody(customer, template.getConsentName(),
                    descriptionPlain, link, selectedNorm, consentMailProperties, publicConsentBaseUrl,
                    token, template.getId());
            emailDispatchService.sendHtml(customer.getEmail(), subject, html);
            customerConsentRecordService.upsertOnInviteSent(customer.getCustomerId(), template.getId(), null, null);
            auditService.log(adminUserId, "CONSENT_INVITE_SENT", "CONSENT", template.getId(), template.getConsentName(),
                    "Consent link emailed to " + customer.getCustomerId() + " via " + summaryPlain, currentRequest());
            customer.setLastConsentInviteSentAt(now);
            log.info("Executing DB query | method=save | param=Customer");
            customerRepository.save(customer);
            log.info("DB query completed | method=save | result=completed");
            log.info("Executing DB query | method=findById | param=adminUserId");
            Optional<User> adminOpt = userRepository.findById(adminUserId);
            log.info("DB query completed | method=findById | present={}", adminOpt.isPresent());
            adminOpt.ifPresent(u -> log.info("send-link audit | admin={} | customer={}", u.getEmail(),
                    customer.getCustomerId()));
            SendConsentLinkResponse res = SendConsentLinkResponse.builder()
                    .inviteLink(link)
                    .message("Consent link emailed to " + customer.getEmail())
                    .build();
            log.debug("Transaction completing | method=sendCaptureLink | id={}", req.getConsentTemplateId());
            log.debug("Exiting sendCaptureLink | result=inviteLink=****,message=sent");
            return res;
        } catch (Exception e) {
            log.error("Exception in sendCaptureLink | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

 // ── Record on-behalf consent ──────────────────────────────────────────────

//    @Transactional
//    public void recordOnBehalfConsent(RecordOnBehalfConsentRequest req, Long adminUserId) {
//
//        User admin = userRepository.findById(adminUserId)
//                .orElseThrow(() -> new IllegalArgumentException("Admin user not found"));
//
//        Customer customer = customerRepository.findByCustomerIdIgnoreCase(req.getCustomerId().trim())
//                .orElseThrow(() -> new IllegalArgumentException("Customer ID not found"));
//
//        log.info("Received consentStatus = {}", req.getConsentStatus());
//        log.info("Customer current status BEFORE update = {}",
//                deriveConsentStatusForCustomer(customer.getCustomerId()));
//
//        if (req.getConsentStatus() != null) {
//            Long consentDbId = resolveConsentDbIdForOnBehalf(customer.getCustomerId());
//
//            // FIX: if no existing record found, resolve via the consent name from the request
//            if (consentDbId == null && StringUtils.hasText(req.getConsentType())) {
//                consentDbId = consentRepository
//                        .findByStatusInOrderByConsentNameAsc(
//                                List.of(ConsentStatus.PUBLISHED, ConsentStatus.APPROVED))
//                        .stream()
//                        .filter(c -> c.getConsentName().equalsIgnoreCase(req.getConsentType().trim()))
//                        .map(Consent::getId)
//                        .findFirst()
//                        .orElse(null);
//                if (consentDbId != null) {
//                    log.info("recordOnBehalfConsent | no existing record; resolved consentDbId={} "
//                            + "from consentType name for customerId={}", consentDbId, customer.getCustomerId());
//                }
//            }
//
//            if (consentDbId != null) {
//                CustomerConsentRecordStatus recordStatus = mapToRecordStatus(req.getConsentStatus());
//                LocalDate validUntil = recordStatus == CustomerConsentRecordStatus.ACCEPTED
//                        ? LocalDate.now().plusYears(1)
//                        : null;
//                customerConsentRecordService.updateOnResponse(
//                        customer.getCustomerId(),
//                        consentDbId,
//                        recordStatus,
//                        Instant.now(),
//                        validUntil);
//
//                log.info("recordOnBehalfConsent | CustomerConsentRecord updated | customerId={} | "
//                        + "consentDbId={} | newStatus={}", customer.getCustomerId(), consentDbId, recordStatus);
//            } else {
//                log.warn("recordOnBehalfConsent | could not resolve consentDbId for customerId={} "
//                        + "with consentType='{}'; CustomerConsentRecord NOT updated",
//                        customer.getCustomerId(), req.getConsentType());
//            }
//        }
//
//        OnBehalfConsentRecord rec = OnBehalfConsentRecord.builder()
//                .customerId(req.getCustomerId().trim())
//                .consentType(req.getConsentType())
//                .mode(req.getMode())
//                .sourceChannel(req.getSourceChannel())
//                .evidenceReference(req.getEvidenceReference())
//                .recordedBy(admin)
//                .recordedAt(Instant.now())
//                .build();
//
//        onBehalfConsentRecordRepository.save(rec);
//
//        log.info("on-behalf consent recorded | customerId={} | status={} | by={}",
//                req.getCustomerId(), req.getConsentStatus(), admin.getEmail());
//    }

 // ─────────────────────────────────────────────────────────────────────────────
 // Replace recordOnBehalfConsent() in AdminService with this method.
 // Key change: OnBehalfConsentRecord saved FIRST, then passed as an object
 // to the 6-arg updateOnResponse overload so JPA manages the FK.
 // All other logic (fallback consentDbId resolution, logging) unchanged.
 // ─────────────────────────────────────────────────────────────────────────────

//    @Transactional
//    public void recordOnBehalfConsent(RecordOnBehalfConsentRequest req, Long adminUserId) {
//
//        User admin = userRepository.findById(adminUserId)
//                .orElseThrow(() -> new IllegalArgumentException("Admin user not found"));
//
//        Customer customer = customerRepository.findByCustomerIdIgnoreCase(req.getCustomerId().trim())
//                .orElseThrow(() -> new IllegalArgumentException("Customer ID not found"));
//
//        log.info("Received consentStatus={} consentTemplateId={} customerId={}",
//                req.getConsentStatus(), req.getConsentTemplateId(), customer.getCustomerId());
//
//        // ── 1. Validate the selected consent template exists and is available ──
//        Consent template = consentRepository.findById(req.getConsentTemplateId())
//                .orElseThrow(() -> new IllegalArgumentException(
//                        "Consent template not found: id=" + req.getConsentTemplateId()));
//
//        if (template.getStatus() != ConsentStatus.PUBLISHED
//                && template.getStatus() != ConsentStatus.APPROVED) {
//            throw new IllegalArgumentException(
//                    "Selected consent template is not PUBLISHED or APPROVED.");
//        }
//
//        // ── 2. Save OnBehalfConsentRecord FIRST so its generated id is available
//        OnBehalfConsentRecord savedRec = onBehalfConsentRecordRepository.save(
//                OnBehalfConsentRecord.builder()
//                        .customerId(req.getCustomerId().trim())
//                        .consentType(req.getConsentType())
//                        .mode(req.getMode())
//                        .sourceChannel(req.getSourceChannel())
//                        .evidenceReference(req.getEvidenceReference())
//                        .recordedBy(admin)
//                        .recordedAt(Instant.now())
//                        .build());
//
//        log.info("recordOnBehalfConsent | OnBehalfConsentRecord saved | id={}", savedRec.getId());
//
//        // ── 3. Upsert CustomerConsentRecord using the EXACT template id ────────
//        //       updateOnResponse uses orElseGet internally — creates a new record
//        //       if none exists for (customerId, consentTemplateId), updates if it does.
//        if (req.getConsentStatus() != null) {
//            CustomerConsentRecordStatus recordStatus = mapToRecordStatus(req.getConsentStatus());
//            LocalDate validUntil = recordStatus == CustomerConsentRecordStatus.ACCEPTED
//                    ? LocalDate.now().plusYears(1)
//                    : null;
//
//            customerConsentRecordService.updateOnResponse(
//                    customer.getCustomerId(),
//                    template.getId(),       // ← direct id, no name lookup
//                    recordStatus,
//                    Instant.now(),
//                    validUntil,
//                    savedRec);
//
//            log.info("recordOnBehalfConsent | CustomerConsentRecord upserted | "
//                    + "customerId={} | consentDbId={} | consentName='{}' | "
//                    + "newStatus={} | onBehalfRecordId={}",
//                    customer.getCustomerId(), template.getId(),
//                    template.getConsentName(), recordStatus, savedRec.getId());
//        }
//
//        log.info("on-behalf consent recorded | customerId={} | status={} | by={} | onBehalfRecordId={}",
//                req.getCustomerId(), req.getConsentStatus(), admin.getEmail(), savedRec.getId());
//    }
    
 // ── Add these two fields to AdminService's @RequiredArgsConstructor dependencies ──
 // private final CustomerChannelPreferenceService customerChannelPreferenceService;
 // private final CustomerLanguagePreferenceService customerLanguagePreferenceService;
 //
 // Replace the recordOnBehalfConsent method with this:

     @Transactional
     public void recordOnBehalfConsent(RecordOnBehalfConsentRequest req, Long adminUserId) {
         String cu = currentUser();
         log.debug("Entering recordOnBehalfConsent | params: adminUserId={},consentTemplateId={}",
                 adminUserId, req.getConsentTemplateId());
         log.info("User={} | action=recordOnBehalfConsent | entity=OnBehalfConsent | id={}",
                 cu, req.getConsentTemplateId() != null ? String.valueOf(req.getConsentTemplateId()) : "n/a");
         log.debug("Transaction started | method=recordOnBehalfConsent | id={}", req.getConsentTemplateId());
         try {
             log.info("Executing DB query | method=findById | param=adminUserId");
             User admin = userRepository.findById(adminUserId)
                     .orElseThrow(() -> new IllegalArgumentException("Admin user not found"));
             log.info("DB query completed | method=findById | present=true");

             log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerId");
             Customer customer = customerRepository.findByCustomerIdIgnoreCase(req.getCustomerId().trim())
                     .orElseThrow(() -> new IllegalArgumentException("Customer ID not found"));
             log.info("DB query completed | method=findByCustomerIdIgnoreCase | present=true");

             log.info("Received consentStatus={} consentTemplateId={} customerId={}",
                     req.getConsentStatus(), req.getConsentTemplateId(), customer.getCustomerId());

             log.info("Executing DB query | method=findById | param=consentTemplateId");
             Consent template = consentRepository.findById(req.getConsentTemplateId())
                     .orElseThrow(() -> new IllegalArgumentException(
                             "Consent template not found: id=" + req.getConsentTemplateId()));
             log.info("DB query completed | method=findById | present=true");

             if (template.getStatus() != ConsentStatus.PUBLISHED) {
                 throw new IllegalArgumentException(
                         "Only published consent templates can be recorded.");
             }
             assertTemplateValidityNotEnded(template);

             log.info("Executing DB query | method=save | param=OnBehalfConsentRecord");
             OnBehalfConsentRecord savedRec = onBehalfConsentRecordRepository.save(
                     OnBehalfConsentRecord.builder()
                             .customerId(customer.getCustomerId())
                             .consentType(req.getConsentType())
                             .mode(req.getMode())
                             .sourceChannel(req.getSourceChannel())
                             .evidenceReference(req.getEvidenceReference())
                             .recordedBy(admin)
                             .recordedAt(Instant.now())
                             .build());
             log.info("DB query completed | method=save | result=completed");

             log.info("recordOnBehalfConsent | OnBehalfConsentRecord saved | id={}", savedRec.getId());

             if (req.getConsentStatus() != null) {
                 CustomerConsentRecordStatus recordStatus = mapToRecordStatus(req.getConsentStatus());
                 LocalDate validUntil = null;
                 if (recordStatus == CustomerConsentRecordStatus.ACCEPTED) {
                     LocalDate today = LocalDate.now(java.time.ZoneId.systemDefault());
                     if (template.getValidityPeriodDays() != null && template.getValidityPeriodDays() > 0) {
                         validUntil = today.plusDays(template.getValidityPeriodDays());
                     } else if (template.getValidityEndDate() != null) {
                         validUntil = template.getValidityEndDate();
                     } else {
                         validUntil = today.plusYears(1);
                     }
                 }
                 if (recordStatus != CustomerConsentRecordStatus.PENDING) {
                     expirePendingInvites(customer.getCustomerId(), template.getId(), Instant.now());
                 }

                 customerConsentRecordService.updateOnResponse(
                         customer.getCustomerId(),
                         template.getId(),
                         recordStatus,
                         Instant.now(),
                         validUntil,
                         savedRec);

                 log.info("recordOnBehalfConsent | CustomerConsentRecord upserted | "
                         + "customerId={} | consentDbId={} | consentName='{}' | "
                         + "newStatus={} | onBehalfRecordId={}",
                         customer.getCustomerId(), template.getId(),
                         template.getConsentName(), recordStatus, savedRec.getId());
             }

             if (req.getSelectedChannels() != null && !req.getSelectedChannels().isEmpty()) {
                 customerChannelPreferenceService.saveOnBehalfPreference(
                         customer.getCustomerId(),
                         template.getId(),
                         req.getSelectedChannels(),
                         savedRec);

                 log.info("recordOnBehalfConsent | channel preferences saved | customerId={} channels={}",
                         customer.getCustomerId(), req.getSelectedChannels());
             }

             if (req.getSelectedLanguages() != null && !req.getSelectedLanguages().isEmpty()) {
                 customerLanguagePreferenceService.saveOnBehalfPreference(
                         customer.getCustomerId(),
                         template.getId(),
                         req.getSelectedLanguages(),
                         savedRec);

                 log.info("recordOnBehalfConsent | language preferences saved | customerId={} languages={}",
                         customer.getCustomerId(), req.getSelectedLanguages());
             }

             String evidence = StringUtils.hasText(req.getEvidenceReference()) ? req.getEvidenceReference().trim() : "—";
             auditService.log(adminUserId, "CONSENT_RECORDED_ON_BEHALF", "CONSENT", template.getId(),
                     template.getConsentName(),
                     "Recorded " + (req.getConsentStatus() != null ? req.getConsentStatus() : "consent")
                             + " on behalf of " + customer.getCustomerId()
                             + " · mode " + req.getMode() + " · source " + req.getSourceChannel()
                             + " · evidence " + evidence,
                     currentRequest());
             log.info("on-behalf consent recorded | customerId={} | status={} | by={} | onBehalfRecordId={}",
                     req.getCustomerId(), req.getConsentStatus(), admin.getEmail(), savedRec.getId());
             log.debug("Transaction completing | method=recordOnBehalfConsent | id={}", savedRec.getId());
             log.debug("Exiting recordOnBehalfConsent | completed successfully");
         } catch (Exception e) {
             log.error("Exception in recordOnBehalfConsent | user={} | message={}", cu, e.getMessage(), e);
             throw e;
         }
     }
    
    // ── Private helpers ───────────────────────────────────────────────────────

    /**
     * Derives the effective consent status for a customer from their most recent
     * CustomerConsentRecord, ordered by updatedAt DESC.
     * Returns the status name as a String, or null if no records exist.
     */
    private String deriveConsentStatusForCustomer(String customerId) {
        log.info("Executing DB query | method=findByCustomerIdOrderByUpdatedAtDesc | param=customerId");
        List<CustomerConsentRecord> records =
                recordRepository.findByCustomerIdOrderByUpdatedAtDesc(customerId);
        log.info("DB query completed | method=findByCustomerIdOrderByUpdatedAtDesc | size={}", records.size());
        if (records.isEmpty()) {
            return null;
        }
        return records.get(0).getStatus().name();
    }

    /**
     * Finds the most relevant consentDbId for an on-behalf capture.
     * Priority: PENDING first (most actionable), then most recently updated record.
     */
    private Long resolveConsentDbIdForOnBehalf(String customerId) {
        log.info("Executing DB query | method=findByCustomerIdOrderByUpdatedAtDesc | param=customerId");
        List<CustomerConsentRecord> records =
                recordRepository.findByCustomerIdOrderByUpdatedAtDesc(customerId);
        log.info("DB query completed | method=findByCustomerIdOrderByUpdatedAtDesc | size={}", records.size());
        if (records.isEmpty()) {
            return null;
        }
        return records.stream()
                .filter(r -> r.getStatus() == CustomerConsentRecordStatus.PENDING)
                .map(CustomerConsentRecord::getConsentDbId)
                .findFirst()
                .orElse(records.get(0).getConsentDbId());
    }

    /**
     * Maps CustomerConsentStatus (the request-level enum) to
     * CustomerConsentRecordStatus (the record-level enum).
     * Only map values that exist in CustomerConsentStatus.
     */
    private static CustomerConsentRecordStatus mapToRecordStatus(CustomerConsentStatus s) {
        return switch (s) {
            case ACCEPTED  -> CustomerConsentRecordStatus.ACCEPTED;
            case PENDING   -> CustomerConsentRecordStatus.PENDING;
            case WITHDRAWN -> CustomerConsentRecordStatus.WITHDRAWN;
            case REJECTED -> CustomerConsentRecordStatus.REJECTED;
           
            default -> throw new IllegalArgumentException(
                    "Unsupported CustomerConsentStatus: " + s);
        };
    }

    /**
     * Maps a CustomerConsentRecordStatus name back to CustomerConsentStatus
     * for display purposes (e.g. in AdminCustomerRowResponse).
     */
    private static CustomerConsentStatus parseToCustomerConsentStatus(String recordStatusName) {
        if (recordStatusName == null) return null;
        return switch (recordStatusName) {
            case "ACCEPTED" 				 -> CustomerConsentStatus.ACCEPTED;
            case "EXPIRING_SOON"             -> CustomerConsentStatus.EXPIRING_SOON;
            case "REJECTED"                  -> CustomerConsentStatus.REJECTED;
            case "WITHDRAWN"                 -> CustomerConsentStatus.WITHDRAWN;
            case "PENDING"                   -> CustomerConsentStatus.PENDING;
            default                          -> null;
        };
    }

    private static String csvEscape(String v) {
        return MisReportExportUtil.csvEscape(v);
    }

    /**
     * Parses the status filter string into a CustomerConsentRecordStatus.
     * Returns null for null / blank / "ALL".
     */
    private com.consentiq.enums.CustomerCurrentStatus parseStatusFilter(String raw) {
        if (!StringUtils.hasText(raw) || "ALL".equalsIgnoreCase(raw.trim())) {
            return null;
        }
        String v = raw.trim().toUpperCase(Locale.ROOT);
        return switch (v) {
            case "ACTIVE", "ACCEPTED", "EXPIRING_SOON" -> com.consentiq.enums.CustomerCurrentStatus.ACTIVE;
            case "PENDING", "INVITED", "PENDING_RESPONSE" -> com.consentiq.enums.CustomerCurrentStatus.PENDING;
            case "DECLINED", "REJECTED" -> com.consentiq.enums.CustomerCurrentStatus.DECLINED;
            case "WITHDRAWN" -> com.consentiq.enums.CustomerCurrentStatus.WITHDRAWN;
            case "EXPIRED" -> com.consentiq.enums.CustomerCurrentStatus.EXPIRED;
            case "UNRESPONSIVE" -> com.consentiq.enums.CustomerCurrentStatus.UNRESPONSIVE;
            case "NO_CONSENT", "NONE" -> com.consentiq.enums.CustomerCurrentStatus.NO_CONSENT;
            default -> throw new IllegalArgumentException("Unknown customer status filter: " + raw);
        };
    }

    private List<CustomerConsentRecordStatus> parseConsentLevelStatuses(String raw) {
        List<CustomerConsentRecordStatus> out = new ArrayList<>();
        if (!StringUtils.hasText(raw)) {
            return out;
        }
        for (String part : raw.split(",")) {
            String v = part.trim().toUpperCase(Locale.ROOT);
            switch (v) {
                case "" -> { }
                case "ACCEPTED", "ACTIVE" -> {
                    out.add(CustomerConsentRecordStatus.ACCEPTED);
                    out.add(CustomerConsentRecordStatus.EXPIRING_SOON);
                }
                case "DECLINED", "REJECTED" -> out.add(CustomerConsentRecordStatus.REJECTED);
                case "PENDING", "INVITED" -> out.add(CustomerConsentRecordStatus.PENDING);
                default -> {
                    try {
                        out.add(CustomerConsentRecordStatus.valueOf(v));
                    } catch (IllegalArgumentException ex) {
                        throw new IllegalArgumentException("Unknown consent status filter: " + part.trim());
                    }
                }
            }
        }
        return out;
    }

    /**
     * Builds a JPA Specification for Customer filtering.
     * Status filtering uses a subquery into customer_consent_records
     * because Customer no longer holds a consentStatus field.
     */
    private Specification<Customer> customerSpec(String mobileNumber, String customerId,
            com.consentiq.enums.CustomerCurrentStatus status, List<CustomerConsentRecordStatus> consentStatuses,
            Long consentDbId) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            if (StringUtils.hasText(mobileNumber)) {
                p.add(cb.like(cb.lower(root.get("mobileNumber")),
                        "%" + mobileNumber.trim().toLowerCase(Locale.ROOT) + "%"));
            }
            if (StringUtils.hasText(customerId)) {
                p.add(cb.like(cb.lower(root.get("customerId")),
                        "%" + customerId.trim().toLowerCase(Locale.ROOT) + "%"));
            }
            if (status != null) {
                if (status == com.consentiq.enums.CustomerCurrentStatus.NO_CONSENT) {
                    p.add(cb.or(cb.isNull(root.get("currentConsentStatus")),
                            cb.equal(root.get("currentConsentStatus"), status)));
                } else {
                    p.add(cb.equal(root.get("currentConsentStatus"), status));
                }
            }
            boolean hasConsentStatuses = consentStatuses != null && !consentStatuses.isEmpty();
            if (hasConsentStatuses || consentDbId != null) {
                Subquery<String> sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                List<Predicate> sp = new ArrayList<>();
                if (hasConsentStatuses) {
                    sp.add(recRoot.get("status").in(consentStatuses));
                }
                if (consentDbId != null) {
                    sp.add(cb.equal(recRoot.get("consentDbId"), consentDbId));
                }
                sub.select(recRoot.get("customerId")).where(sp.toArray(new Predicate[0]));
                p.add(root.get("customerId").in(sub));
            }
            return p.isEmpty() ? cb.conjunction() : cb.and(p.toArray(new Predicate[0]));
        };
    }

    private Sort resolveSort(String sortBy, String sortDir) {
        String prop = switch (sortBy == null ? "" : sortBy.trim().toLowerCase(Locale.ROOT)) {
            case "customerid"              -> "customerId";
            case "fullname", "customername" -> "fullName";
            case "mobilenumber"            -> "mobileNumber";
            case "email"                   -> "email";
            default                        -> "updatedAt";
        };
        Sort.Direction dir = "ASC".equalsIgnoreCase(sortDir == null ? "" : sortDir.trim())
                ? Sort.Direction.ASC : Sort.Direction.DESC;
        return Sort.by(dir, prop).and(Sort.by(Sort.Direction.ASC, "id"));
    }

    private List<AdminCustomerRowResponse> toRows(List<Customer> customers) {
        Map<String, List<CustomerConsentRecord>> byCustomer = customerCurrentStatusService.recordsByCustomer(
                customers.stream().map(Customer::getCustomerId).toList());
        Map<String, List<com.consentiq.model.dto.response.CustomerConsentSummary>> summaries =
                customerCurrentStatusService.summaries(byCustomer);
        LocalDate today = CustomerCurrentStatusService.today();
        List<AdminCustomerRowResponse> out = new ArrayList<>();
        for (Customer c : customers) {
            String key = c.getCustomerId().toLowerCase(Locale.ROOT);
            List<CustomerConsentRecord> recs = byCustomer.getOrDefault(key, List.of());
            out.add(AdminCustomerRowResponse.builder()
                    .customerId(c.getCustomerId())
                    .customerName(c.getFullName())
                    .mobileNumber(c.getMobileNumber())
                    .email(c.getEmail())
                    .currentStatus(CustomerCurrentStatusService.derive(recs, today))
                    .consents(summaries.getOrDefault(key, List.of()))
                    .nextExpiry(CustomerCurrentStatusService.nextExpiry(recs, today))
                    .lastUpdated(c.getUpdatedAt())
                    .build());
        }
        return out;
    }

    private AdminCustomerRowResponse toRow(Customer c) {
        String statusName = deriveConsentStatusForCustomer(c.getCustomerId());
        CustomerConsentStatus displayStatus = parseToCustomerConsentStatus(statusName);
        return AdminCustomerRowResponse.builder()
                .customerId(c.getCustomerId())
                .customerName(c.getFullName())
                .mobileNumber(c.getMobileNumber())
                .email(c.getEmail())
                .consentStatus(displayStatus)
                .lastUpdated(c.getUpdatedAt())
                .build();
    }

    private static List<String> buildChannelList(Consent c) {
        List<String> channels = new ArrayList<>();
        if (c.isChannelEmail())    channels.add("EMAIL");
        if (c.isChannelSms())      channels.add("SMS");
        if (c.isChannelPush())     channels.add("PUSH");
        if (c.isChannelWhatsapp()) channels.add("WHATSAPP");
        if (c.isChannelRcs())      channels.add("RCS");
        return channels;
    }

    private static String normalizeChannelKey(String raw) {
        if (raw == null || raw.isBlank()) return "Email";
        String u = raw.trim().toUpperCase(Locale.ROOT);
        if (u.contains("WHATSAPP")) return "WhatsApp";
        if (u.contains("SMS"))      return "SMS";
        if (u.contains("EMAIL"))    return "Email";
        if (u.contains("RCS"))      return "RCS";
        if (u.contains("PUSH"))     return "Push";
        return "Email";
    }
    
 // ── Add these two methods to AdminService ─────────────────────────────────────
 // Also add these two dependencies to AdminService's constructor fields:
 //   private final CustomerChannelPreferenceService customerChannelPreferenceService;
 //   private final CustomerLanguagePreferenceService customerLanguagePreferenceService;

     /**
      * Returns existing channel preferences for a customer+consent for the admin UI.
      * Delegates to CustomerChannelPreferenceService.
      */
     @Transactional(readOnly = true)
     public CustomerChannelPreferenceResponse getChannelPreferenceForAdmin(
             String customerId, Long consentTemplateId) {
         String cu = currentUser();
         log.debug("Entering getChannelPreferenceForAdmin | params: customerId={},consentTemplateId={}",
                 customerId, consentTemplateId);
         log.info("User={} | action=getChannelPreferenceForAdmin | entity=ChannelPreference | id={}",
                 cu, consentTemplateId != null ? String.valueOf(consentTemplateId) : "n/a");
         log.debug("Transaction started | method=getChannelPreferenceForAdmin | id={}", consentTemplateId);
         try {
             CustomerChannelPreferenceResponse res =
                     customerChannelPreferenceService.getPreferenceForAdmin(customerId, consentTemplateId);
             log.debug("Transaction completing | method=getChannelPreferenceForAdmin | id={}", consentTemplateId);
             log.debug("Exiting getChannelPreferenceForAdmin | result=customerId={}", res != null ? customerId : "n/a");
             return res;
         } catch (Exception e) {
             log.error("Exception in getChannelPreferenceForAdmin | user={} | message={}", cu, e.getMessage(), e);
             throw e;
         }
     }

     /**
      * Returns existing language preferences for a customer+consent for the admin UI.
      * Delegates to CustomerLanguagePreferenceService.
      */
     @Transactional(readOnly = true)
     public List<String> getLanguagePreferenceForAdmin(
             String customerId, Long consentTemplateId) {
         String cu = currentUser();
         log.debug("Entering getLanguagePreferenceForAdmin | params: customerId={},consentTemplateId={}",
                 customerId, consentTemplateId);
         log.info("User={} | action=getLanguagePreferenceForAdmin | entity=LanguagePreference | id={}",
                 cu, consentTemplateId != null ? String.valueOf(consentTemplateId) : "n/a");
         log.debug("Transaction started | method=getLanguagePreferenceForAdmin | id={}", consentTemplateId);
         try {
             List<String> res = customerLanguagePreferenceService.getLanguagesForAdmin(customerId, consentTemplateId);
             log.debug("Transaction completing | method=getLanguagePreferenceForAdmin | id={}", consentTemplateId);
             log.debug("Exiting getLanguagePreferenceForAdmin | result=size={}", res != null ? res.size() : 0);
             return res;
         } catch (Exception e) {
             log.error("Exception in getLanguagePreferenceForAdmin | user={} | message={}", cu, e.getMessage(), e);
             throw e;
         }
     }
}