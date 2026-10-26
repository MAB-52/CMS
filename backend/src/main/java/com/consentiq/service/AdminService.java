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

            long denom = active + pending + declined;
            double consentRate = denom == 0 ? 0.0 : Math.round(1000.0 * active / denom) / 10.0;

            log.info("Executing DB query | method=countByStatus | param=PENDING_APPROVAL");
            long pendingMc = consentRepository.countByStatus(ConsentStatus.PENDING_APPROVAL);
            log.info("DB query completed | method=countByStatus | result={}", pendingMc);

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
                double[] demo = { 34, 26, 22, 12, 6 };
                for (int i = 0; i < channelOrder.size(); i++) {
                    channelRows.add(AdminMisDashboardResponse.ChannelPerformanceRow.builder()
                            .channel(channelOrder.get(i)).percentage(demo[i]).build());
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
            long ruleMc = auditLogRepository.countByAction("CONSENT_REVISION_REQUESTED");
            log.info("DB query completed | method=countByAction | result={}", ruleMc);
            log.info("Executing DB query | method=countByAction | param=CONSENT_PUBLISHED");
            long broadcastMc = auditLogRepository.countByAction("CONSENT_PUBLISHED");
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
                    .mapToDouble(c -> ChronoUnit.HOURS.between(c.getSubmittedAt(), c.getReviewedAt()))
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
        String cu = currentUser();
        log.debug("Entering getCustomers | params: page={},size={},mobileNumber={},customerId={},consentStatusFilter={},sortBy={},sortDir={}",
                page, size, mobileNumber, customerId, consentStatusFilter, sortBy, sortDir);
        log.info("User={} | action=getCustomers | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getCustomers | id=n/a");
        try {
            CustomerConsentRecordStatus statusEnum = parseStatusFilter(consentStatusFilter);
            Specification<Customer> spec = customerSpec(mobileNumber, customerId, statusEnum);
            Sort sort = resolveSort(sortBy, sortDir);
            Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)), sort);
            log.info("Executing DB query | method=findAll | param=spec,pageable");
            Page<Customer> pg = customerRepository.findAll(spec, pageable);
            log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
            List<AdminCustomerRowResponse> rows = pg.getContent().stream().map(this::toRow).toList();
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
        String cu = currentUser();
        log.debug("Entering exportCustomersCsv | params: mobileNumber={},customerId={},consentStatusFilter={}",
                mobileNumber, customerId, consentStatusFilter);
        log.info("User={} | action=exportCustomersCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportCustomersCsv | id=n/a");
        try {
            CustomerConsentRecordStatus statusEnum = parseStatusFilter(consentStatusFilter);
            Specification<Customer> spec = customerSpec(mobileNumber, customerId, statusEnum);
            log.info("Executing DB query | method=findAll | param=spec,sort");
            List<Customer> all = customerRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "updatedAt"));
            log.info("DB query completed | method=findAll | size={}", all.size());
            try (OutputStreamWriter w = new OutputStreamWriter(outputStream, StandardCharsets.UTF_8)) {
                w.write("Customer ID,Customer Name,Mobile Number,Email,Consent Status,Last Updated\n");
                for (Customer c : all) {
                    String statusName = deriveConsentStatusForCustomer(c.getCustomerId());
                    w.write(csvEscape(c.getCustomerId()));
                    w.write(',');
                    w.write(csvEscape(c.getFullName()));
                    w.write(',');
                    w.write(csvEscape(c.getMobileNumber()));
                    w.write(',');
                    w.write(csvEscape(c.getEmail() == null ? "" : c.getEmail()));
                    w.write(',');
                    w.write(csvEscape(statusName != null ? statusName : ""));
                    w.write(',');
                    w.write(csvEscape(c.getUpdatedAt().toString()));
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
            List<Consent> list = consentRepository
                    .findByStatusInOrderByConsentNameAsc(List.of(ConsentStatus.PUBLISHED, ConsentStatus.APPROVED));
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
            if (template.getStatus() != ConsentStatus.PUBLISHED && template.getStatus() != ConsentStatus.APPROVED) {
                throw new IllegalArgumentException("Selected consent is not available as a template");
            }
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
            String summaryPlain = DeliveryChannelCatalog.formatForCustomer(selectedNorm);
            String token = UUID.randomUUID().toString().replace("-", "");
            Instant now = Instant.now();
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
                    .expiresAt(now.plus(15, ChronoUnit.MINUTES))
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

             if (template.getStatus() != ConsentStatus.PUBLISHED
                     && template.getStatus() != ConsentStatus.APPROVED) {
                 throw new IllegalArgumentException(
                         "Selected consent template is not PUBLISHED or APPROVED.");
             }

             log.info("Executing DB query | method=save | param=OnBehalfConsentRecord");
             OnBehalfConsentRecord savedRec = onBehalfConsentRecordRepository.save(
                     OnBehalfConsentRecord.builder()
                             .customerId(req.getCustomerId().trim())
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
                 LocalDate validUntil = recordStatus == CustomerConsentRecordStatus.ACCEPTED
                         ? LocalDate.now().plusYears(1)
                         : null;

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
        if (v == null) return "";
        boolean needsQuote = v.contains(",") || v.contains("\"") || v.contains("\n");
        String escaped = v.replace("\"", "\"\"");
        return needsQuote ? "\"" + escaped + "\"" : escaped;
    }

    /**
     * Parses the status filter string into a CustomerConsentRecordStatus.
     * Returns null for null / blank / "ALL".
     */
    private CustomerConsentRecordStatus parseStatusFilter(String raw) {
        if (!StringUtils.hasText(raw) || "ALL".equalsIgnoreCase(raw.trim())) {
            return null;
        }
        try {
            return CustomerConsentRecordStatus.valueOf(raw.trim().toUpperCase(Locale.ROOT));
        } catch (IllegalArgumentException ex) {
            String cu = currentUser();
            log.error("Exception in parseStatusFilter | user={} | message={}", cu, ex.getMessage(), ex);
            throw new IllegalArgumentException(
                    "Invalid consentStatus filter. Use a valid CustomerConsentRecordStatus name or ALL.");
        }
    }

    /**
     * Builds a JPA Specification for Customer filtering.
     * Status filtering uses a subquery into customer_consent_records
     * because Customer no longer holds a consentStatus field.
     */
    private Specification<Customer> customerSpec(String mobileNumber, String customerId,
            CustomerConsentRecordStatus status) {
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
                // Subquery: customer must have at least one record with the given status
                Subquery<String> sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                sub.select(recRoot.get("customerId"))
                   .where(cb.equal(recRoot.get("status"), status));
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
        return Sort.by(dir, prop);
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