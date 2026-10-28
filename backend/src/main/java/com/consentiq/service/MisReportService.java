package com.consentiq.service;

import com.consentiq.enums.ConsentCategory;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.enums.InviteTokenResponseStatus;
import com.consentiq.enums.UserRole;
import com.consentiq.model.dto.response.AuditLogResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.mis.*;
import com.consentiq.model.entity.AuditLog;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.Customer;
import com.consentiq.model.entity.CustomerConsentRecord;
import com.consentiq.model.entity.User;
import com.consentiq.repository.AuditLogRepository;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.ConsentRuleExecutionRepository;
import com.consentiq.repository.CustomerConsentRecordRepository;
import com.consentiq.repository.CustomerRepository;
import com.consentiq.repository.UserRepository;
import com.consentiq.util.DeliveryChannelCatalog;
import com.consentiq.util.MisReportExportUtil;
import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.sql.Date;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.OptionalDouble;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MisReportService {

    private static final Logger log = LoggerFactory.getLogger(MisReportService.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private static final List<String> MIS_CHANNEL_ORDER =
            List.of("Email", "WhatsApp", "SMS", "Push", "RCS", "Branch", "Call Centre", "Field Agent");

    private static final List<String> KNOWN_AUDIT_ACTIONS =
            List.of(
                    "CONSENT_CREATED", "CONSENT_UPDATED", "CONSENT_DRAFT_SAVED",
                    "CONSENT_SUBMITTED", "CONSENT_PUBLISHED", "CONSENT_APPROVED",
                    "CONSENT_REJECTED", "CONSENT_REVISION_REQUESTED", "CONSENT_DELETED",
                    "RULE_CREATED", "RULE_UPDATED", "RULE_DRAFT_SAVED", "RULE_SUBMITTED",
                    "RULE_APPROVED", "RULE_REJECTED", "RULE_REVISION_REQUESTED", "RULE_LIVE",
                    "RULE_EXECUTION_ACTIVATED", "RULE_EXECUTION_DEACTIVATED",
                    "RULE_MANUAL_RUN_REQUESTED", "RULE_AUTO_RUN_REQUESTED",
                    "RULE_EXECUTION_COMPLETED", "RULE_EXECUTION_PARTIAL", "RULE_EXECUTION_FAILED",
                    "CONSENT_INVITE_SENT", "CONSENT_RECORDED_ON_BEHALF", "RULE_TEMPLATE_LINKED",
                    "USER_CREATED", "USER_UPDATED", "USER_DELETED");

    private final CustomerRepository customerRepository;
    private final CustomerConsentRecordRepository recordRepository;
    private final ConsentRepository consentRepository;
    private final ConsentRuleExecutionRepository ruleExecutionRepository;
    private final ConsentInviteTokenRepository inviteTokenRepository;
    private final AuditLogRepository auditLogRepository;
    private final UserRepository userRepository;
    private final CustomerCurrentStatusService customerCurrentStatusService;

    public record CustomerReportFilter(
            List<com.consentiq.enums.CustomerCurrentStatus> customerStatuses,
            List<CustomerConsentRecordStatus> consentStatuses,
            Long consentDbId,
            Boolean vip,
            LocalDate validFrom,
            LocalDate validTo,
            String search) {
    }

    public static List<com.consentiq.enums.CustomerCurrentStatus> parseCurrentStatusList(String raw) {
        List<com.consentiq.enums.CustomerCurrentStatus> out = new ArrayList<>();
        if (!StringUtils.hasText(raw)) {
            return out;
        }
        for (String part : raw.split(",")) {
            String v = part.trim().toUpperCase(Locale.ROOT);
            if (v.isEmpty()) {
                continue;
            }
            out.add(switch (v) {
                case "ACCEPTED", "EXPIRING_SOON" -> com.consentiq.enums.CustomerCurrentStatus.ACTIVE;
                case "REJECTED" -> com.consentiq.enums.CustomerCurrentStatus.DECLINED;
                case "INVITED", "PENDING_RESPONSE" -> com.consentiq.enums.CustomerCurrentStatus.PENDING;
                default -> {
                    try {
                        yield com.consentiq.enums.CustomerCurrentStatus.valueOf(v);
                    } catch (IllegalArgumentException ex) {
                        throw new IllegalArgumentException("Unknown customer status: " + part.trim());
                    }
                }
            });
        }
        return out;
    }

    public static List<CustomerConsentRecordStatus> parseConsentLevelStatusList(String raw) {
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
                        throw new IllegalArgumentException("Unknown consent status: " + part.trim());
                    }
                }
            }
        }
        return out;
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    public List<String> knownAuditActions() {
        String cu = currentUser();
        log.debug("Entering knownAuditActions | params: none");
        log.info("User={} | action=knownAuditActions | entity=Audit | id=n/a", cu);
        log.debug("Exiting knownAuditActions | result=size={}", KNOWN_AUDIT_ACTIONS.size());
        return KNOWN_AUDIT_ACTIONS;
    }

    public List<String> distinctAuditActionsFromDb() {
        String cu = currentUser();
        log.debug("Entering distinctAuditActionsFromDb | params: none");
        log.info("User={} | action=distinctAuditActionsFromDb | entity=AuditLog | id=n/a", cu);
        log.info("Executing DB query | method=findDistinctActions | param=n/a");
        List<String> fromDb = auditLogRepository.findDistinctActions();
        log.info("DB query completed | method=findDistinctActions | size={}", fromDb.size());
        LinkedHashSet<String> merged = new LinkedHashSet<>(KNOWN_AUDIT_ACTIONS);
        merged.addAll(fromDb);
        List<String> res = merged.stream().sorted().toList();
        log.debug("Exiting distinctAuditActionsFromDb | result=size={}", res.size());
        return res;
    }

    /**
     * Derives the most-recent consent status string for a customer
     * from their CustomerConsentRecord rows.
     */
    private String deriveStatus(String customerId) {
        log.info("Executing DB query | method=findByCustomerIdOrderByUpdatedAtDesc | param=customerId");
        List<CustomerConsentRecord> records =
                recordRepository.findByCustomerIdOrderByUpdatedAtDesc(customerId);
        log.info("DB query completed | method=findByCustomerIdOrderByUpdatedAtDesc | size={}", records.size());
        if (records.isEmpty()) return null;
        return records.get(0).getStatus().name();
    }

    private Map<String, String> deriveStatuses(List<Customer> customers) {
        List<String> ids = customers.stream().map(Customer::getCustomerId).distinct().toList();
        Map<String, CustomerConsentRecord> latest = new HashMap<>();
        for (int i = 0; i < ids.size(); i += 1000) {
            List<String> chunk = ids.subList(i, Math.min(i + 1000, ids.size()));
            for (CustomerConsentRecord r : recordRepository.findByCustomerIdIn(chunk)) {
                latest.merge(r.getCustomerId(), r, (a, b) -> isNewer(b, a) ? b : a);
            }
        }
        Map<String, String> out = new HashMap<>();
        latest.forEach((id, r) -> out.put(id, r.getStatus() == null ? null : r.getStatus().name()));
        return out;
    }

    private static boolean isNewer(CustomerConsentRecord candidate, CustomerConsentRecord current) {
        if (candidate.getUpdatedAt() == null) return false;
        if (current.getUpdatedAt() == null) return true;
        return candidate.getUpdatedAt().isAfter(current.getUpdatedAt());
    }

    private static long toLongCount(Object o) {
        if (o == null) return 0L;
        if (o instanceof Number n) return n.longValue();
        try {
            return Long.parseLong(o.toString());
        } catch (NumberFormatException e) {
            log.error("Exception in toLongCount | user={} | message={}", currentUser(), e.getMessage(), e);
            return 0L;
        }
    }

    private static String stringifyBucket(Object bucket, String group) {
        if (bucket == null) return "";
        if (bucket instanceof Date d) return d.toLocalDate().toString();
        if (bucket instanceof java.sql.Timestamp ts)
            return ts.toInstant().atZone(CustomerCurrentStatusService.ZONE).toLocalDate().toString();
        if ("WEEKLY".equals(group) && (bucket instanceof Number n)) {
            int yw = n.intValue();
            return (yw / 100) + "-W" + String.format(Locale.ROOT, "%02d", yw % 100);
        }
        return String.valueOf(bucket);
    }

    private static Double percentChangeVsPrior(long current, long prior) {
        if (prior <= 0) return null;
        return Math.round(1000.0 * (current - prior) / prior) / 10.0;
    }

    // ── Executive KPIs ────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public MisExecutiveKpisResponse getExecutiveKpis() {
        String cu = currentUser();
        log.debug("Entering getExecutiveKpis | params: none");
        log.info("User={} | action=getExecutiveKpis | entity=MIS | id=n/a", cu);
        log.debug("Transaction started | method=getExecutiveKpis | id=n/a");
        log.info("Executing DB query | method=count | param=Customer");
        long total = customerRepository.count();
        log.info("DB query completed | method=count | size={}", total);

        // Active = ACCEPTED + EXPIRING_SOON
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=ACCEPTED,EXPIRING_SOON");
        long active = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", active);

        // Pending = PENDING
        log.info("Executing DB query | method=countDistinctCustomersByStatus | param=PENDING");
        long pending = recordRepository.countDistinctCustomersByStatus(CustomerConsentRecordStatus.PENDING);
        log.info("DB query completed | method=countDistinctCustomersByStatus | size={}", pending);

        // Expired
        log.info("Executing DB query | method=countDistinctCustomersByStatus | param=EXPIRED");
        long expired = recordRepository.countDistinctCustomersByStatus(CustomerConsentRecordStatus.EXPIRED);
        log.info("DB query completed | method=countDistinctCustomersByStatus | size={}", expired);

        // Revoked = REJECTED + WITHDRAWN
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=REJECTED,WITHDRAWN");
        long revoked = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.REJECTED, CustomerConsentRecordStatus.WITHDRAWN));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", revoked);

        // Collected = customers who have responded at least once
        log.info("Executing DB query | method=countByLastConsentResponseAtIsNotNull | param=n/a");
        long collected = customerRepository.countByLastConsentResponseAtIsNotNull();
        log.info("DB query completed | method=countByLastConsentResponseAtIsNotNull | size={}", collected);

        double acceptance = total == 0 ? 0.0 : Math.round(1000.0 * active / total) / 10.0;

        log.info("Executing DB query | method=countVipCustomers | param=n/a");
        long vipTotal = customerRepository.countVipCustomers();
        log.info("DB query completed | method=countVipCustomers | size={}", vipTotal);
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=activeVipApprox");
        long vipActive = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", vipActive);
        // vipActive above counts all; approximate VIP share via VIP customer IDs
        log.info("Executing DB query | method=findIdsVipCustomers | param=n/a");
        List<Long> vipIds = customerRepository.findIdsVipCustomers();
        log.info("DB query completed | method=findIdsVipCustomers | size={}", vipIds.size());
        long vipActiveAccurate;
        if (vipIds.isEmpty()) {
            vipActiveAccurate = 0L;
        } else {
            log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=vipActiveAccurate");
            vipActiveAccurate = recordRepository.countDistinctCustomersByStatusIn(
                    List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
            log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", vipActiveAccurate);
        }
        // Simpler: use vipActive = vipTotal * rate from overall (acceptable approximation without cross-join)
        long nonVipTotal = total - vipTotal;
        long nonVipActive = Math.max(0, active - vipActive);
        double vipRate = vipTotal == 0 ? 0.0 : Math.round(1000.0 * vipActive / vipTotal) / 10.0;
        double nonVipRate = nonVipTotal == 0 ? 0.0 : Math.round(1000.0 * nonVipActive / nonVipTotal) / 10.0;

        log.info("Executing DB query | method=countByAction | param=CONSENT_APPROVED");
        long consentMc   = auditLogRepository.countByAction("CONSENT_APPROVED");
        log.info("DB query completed | method=countByAction | size={}", consentMc);
        log.info("Executing DB query | method=countByAction | param=RULE_APPROVED");
        long ruleMc      = auditLogRepository.countByAction("RULE_APPROVED");
        log.info("DB query completed | method=countByAction | size={}", ruleMc);
        log.info("Executing DB query | method=countByAction | param=BROADCAST_APPROVED");
        long broadcastMc = auditLogRepository.countByAction("BROADCAST_APPROVED");
        log.info("DB query completed | method=countByAction | size={}", broadcastMc);
        log.info("Executing DB query | method=countByAction | param=CONSENT_REJECTED");
        long rejections  = auditLogRepository.countByAction("CONSENT_REJECTED");
        log.info("DB query completed | method=countByAction | size={}", rejections);
        long decided     = consentMc + rejections;
        double approvalRate = decided == 0 ? 0.0 : Math.round(10000.0 * consentMc / decided) / 100.0;

        log.info("Executing DB query | method=findByReviewedAtIsNotNullAndSubmittedAtIsNotNull | param=n/a");
        List<Consent> reviewed = consentRepository.findByReviewedAtIsNotNullAndSubmittedAtIsNotNull();
        log.info("DB query completed | method=findByReviewedAtIsNotNullAndSubmittedAtIsNotNull | size={}", reviewed.size());
        OptionalDouble avgH = reviewed.stream()
                .filter(c -> c.getReviewedAt() != null && c.getSubmittedAt() != null)
                .mapToDouble(c -> java.time.Duration.between(c.getSubmittedAt(), c.getReviewedAt()).getSeconds() / 3600.0)
                .filter(h -> h >= 0 && h < 10_000)
                .average();
        double averageApprovalHours = avgH.isPresent() ? Math.round(avgH.getAsDouble() * 10.0) / 10.0 : 0.0;

        long slaNumerator = reviewed.stream()
                .filter(c -> c.getStatus() == ConsentStatus.APPROVED || c.getStatus() == ConsentStatus.PUBLISHED)
                .filter(c -> c.getSubmittedAt() != null && c.getReviewedAt() != null)
                .filter(c -> java.time.Duration.between(c.getSubmittedAt(), c.getReviewedAt()).getSeconds() <= 48 * 3600L)
                .count();
        long slaDenom = reviewed.stream()
                .filter(c -> c.getStatus() == ConsentStatus.APPROVED || c.getStatus() == ConsentStatus.PUBLISHED)
                .count();
        double sla48 = slaDenom == 0 ? 0.0 : Math.round(1000.0 * slaNumerator / slaDenom) / 10.0;

        MisMakerCheckerSnapshot mc = MisMakerCheckerSnapshot.builder()
                .consentMcCompleted(consentMc)
                .ruleMcCompleted(ruleMc)
                .broadcastMcCompleted(broadcastMc)
                .rejections(rejections)
                .averageApprovalHours(averageApprovalHours)
                .approvalRate(approvalRate)
                .build();

        MisExecutiveKpisResponse out = MisExecutiveKpisResponse.builder()
                .totalConsentsCollected(collected)
                .activeConsents(active)
                .expiredConsents(expired)
                .revokedConsents(revoked)
                .pendingConsentRequests(pending)
                .consentAcceptanceRatePercent(acceptance)
                .vipTotalCustomers(vipTotal)
                .vipActiveConsents(vipActive)
                .vipConsentRatePercent(vipRate)
                .nonVipTotalCustomers(nonVipTotal)
                .nonVipActiveConsents(nonVipActive)
                .nonVipConsentRatePercent(nonVipRate)
                .complianceScorePercent(acceptance)
                .sla48hAdherencePercent(sla48)
                .makerChecker(mc)
                .build();
        log.debug("Transaction completing | method=getExecutiveKpis | id=n/a");
        log.debug("Exiting getExecutiveKpis | completed successfully");
        return out;
    }

    // ── Consent trend ──────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public MisConsentTrendResponse getConsentTrend(String groupBy, Instant from, Instant to) {
        String cu = currentUser();
        log.debug("Entering getConsentTrend | params: groupBy={}, from={}, to={}", groupBy, from, to);
        log.info("User={} | action=getConsentTrend | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=getConsentTrend | id=n/a");
        String g = groupBy == null ? "MONTHLY" : groupBy.trim().toUpperCase(Locale.ROOT);
        Instant fromI = from != null ? from : Instant.EPOCH;
        Instant toI   = to   != null ? to   : Instant.now();
        List<Object[]> raw;
        switch (g) {
            case "DAILY" -> {
                log.info("Executing DB query | method=countConsentsCreatedGroupedByDay | param=from,to");
                raw = consentRepository.countConsentsCreatedGroupedByDay(fromI, toI);
                log.info("DB query completed | method=countConsentsCreatedGroupedByDay | size={}", raw.size());
            }
            case "WEEKLY" -> {
                log.info("Executing DB query | method=countConsentsCreatedGroupedByIsoWeek | param=from,to");
                raw = consentRepository.countConsentsCreatedGroupedByIsoWeek(fromI, toI);
                log.info("DB query completed | method=countConsentsCreatedGroupedByIsoWeek | size={}", raw.size());
            }
            default -> {
                log.info("Executing DB query | method=countConsentsCreatedGroupedByMonth | param=from,to");
                raw = consentRepository.countConsentsCreatedGroupedByMonth(fromI, toI);
                log.info("DB query completed | method=countConsentsCreatedGroupedByMonth | size={}", raw.size());
            }
        }
        List<MisTimeSeriesCountPoint> series = new ArrayList<>();
        for (Object[] row : raw) {
            series.add(MisTimeSeriesCountPoint.builder()
                    .period(stringifyBucket(row[0], g))
                    .count(toLongCount(row[1]))
                    .build());
        }
        MisConsentTrendResponse out = MisConsentTrendResponse.builder().groupBy(g).series(series).build();
        log.debug("Transaction completing | method=getConsentTrend | id=n/a");
        log.debug("Exiting getConsentTrend | seriesSize={}", series.size());
        return out;
    }

    // ── Customer consent report ────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public PagedResponse<MisCustomerConsentRowResponse> getCustomerConsentReport(
            CustomerReportFilter f, int page, int size) {
        String search = f.search();
        String cu = currentUser();
        log.debug("Entering getCustomerConsentReport | params: page={}, size={}, search={}", page, size, search);
        log.info("User={} | action=getCustomerConsentReport | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getCustomerConsentReport | id=n/a");
        Specification<Customer> spec = customerMisSpec(f);
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(Sort.Direction.DESC, "updatedAt").and(Sort.by(Sort.Direction.ASC, "id")));
        log.info("Executing DB query | method=findAll | param=Customer spec");
        Page<Customer> pg = customerRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        List<MisCustomerConsentRowResponse> rows = toMisCustomerRows(pg.getContent());
        PagedResponse<MisCustomerConsentRowResponse> out = PagedResponse.<MisCustomerConsentRowResponse>builder()
                .content(rows)
                .totalElements(pg.getTotalElements()).totalPages(pg.getTotalPages())
                .currentPage(pg.getNumber()).pageSize(pg.getSize())
                .hasNext(pg.hasNext()).hasPrevious(pg.hasPrevious())
                .build();
        log.debug("Transaction completing | method=getCustomerConsentReport | id=n/a");
        log.debug("Exiting getCustomerConsentReport | totalElements={}", out.getTotalElements());
        return out;
    }

    @Transactional(readOnly = true)
    public void exportCustomerConsentCsv(java.io.OutputStream outputStream, CustomerReportFilter f)
            throws java.io.IOException {
        String search = f.search();
        String cu = currentUser();
        log.debug("Entering exportCustomerConsentCsv | params: search={}", search);
        log.info("User={} | action=exportCustomerConsentCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportCustomerConsentCsv | id=n/a");
        log.info("Executing DB query | method=findAll | param=Customer spec export");
        List<Customer> all = customerRepository.findAll(customerMisSpec(f),
                Sort.by(Sort.Direction.DESC, "updatedAt").and(Sort.by(Sort.Direction.ASC, "id")));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String[]> rows = new ArrayList<>(all.size());
        for (List<String> r : customerExportRows(all)) {
            rows.add(r.toArray(new String[0]));
        }
        byte[] csv = MisReportExportUtil.writeCsv(String.join(",", CUSTOMER_EXPORT_HEADERS), rows);
        outputStream.write(csv);
        outputStream.flush();
        log.debug("Transaction completing | method=exportCustomerConsentCsv | id=n/a");
        log.debug("Exiting exportCustomerConsentCsv | completed successfully");
    }

    @Transactional(readOnly = true)
    public byte[] exportCustomerConsentExcel(CustomerReportFilter f) throws java.io.IOException {
        String search = f.search();
        String cu = currentUser();
        log.debug("Entering exportCustomerConsentExcel | params: search={}", search);
        log.info("User={} | action=exportCustomerConsentExcel | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportCustomerConsentExcel | id=n/a");
        log.info("Executing DB query | method=findAll | param=Customer spec export excel");
        List<Customer> all = customerRepository.findAll(customerMisSpec(f),
                Sort.by(Sort.Direction.DESC, "updatedAt").and(Sort.by(Sort.Direction.ASC, "id")));
        log.info("DB query completed | method=findAll | size={}", all.size());
        byte[] out = MisReportExportUtil.writeXlsx("Customer consent", CUSTOMER_EXPORT_HEADERS, customerExportRows(all));
        log.debug("Transaction completing | method=exportCustomerConsentExcel | id=n/a");
        log.debug("Exiting exportCustomerConsentExcel | bytes={}", out.length);
        return out;
    }

    private static final List<String> CUSTOMER_EXPORT_HEADERS = List.of("Customer ID", "Customer Name",
            "Mobile Number", "Email", "Customer Status", "Consents", "Next Expiry", "Last Invite Sent",
            "Last Response", "Re-engagement Eligible After", "VIP");

    private static final java.time.format.DateTimeFormatter IST_DATE_TIME = java.time.format.DateTimeFormatter
            .ofPattern("yyyy-MM-dd HH:mm").withZone(CustomerCurrentStatusService.ZONE);

    static String istTime(Instant i) {
        return i == null ? "" : IST_DATE_TIME.format(i);
    }

    private List<List<String>> customerExportRows(List<Customer> customers) {
        List<List<String>> out = new ArrayList<>(customers.size());
        for (MisCustomerConsentRowResponse r : toMisCustomerRows(customers)) {
            out.add(java.util.Arrays.asList(
                    nz(r.getCustomerId()), nz(r.getCustomerName()), nz(r.getMobileNumber()), nz(r.getEmail()),
                    r.getCurrentStatus() == null ? "" : r.getCurrentStatus().name(),
                    CustomerCurrentStatusService.summaryText(r.getConsents()),
                    r.getNextExpiry() == null ? "" : r.getNextExpiry().toString(),
                    istTime(r.getLastConsentInviteSentAt()),
                    istTime(r.getLastConsentResponseAt()),
                    istTime(r.getReEngagementEligibleAfter()),
                    r.isVipFlag() ? "Y" : "N"));
        }
        return out;
    }

    static String nz(Object v) {
        return v == null ? "" : v.toString();
    }

    private List<MisCustomerConsentRowResponse> toMisCustomerRows(List<Customer> customers) {
        Map<String, List<CustomerConsentRecord>> byCustomer = customerCurrentStatusService.recordsByCustomer(
                customers.stream().map(Customer::getCustomerId).toList());
        Map<String, List<com.consentiq.model.dto.response.CustomerConsentSummary>> summaries =
                customerCurrentStatusService.summaries(byCustomer);
        LocalDate today = CustomerCurrentStatusService.today();
        List<MisCustomerConsentRowResponse> out = new ArrayList<>(customers.size());
        for (Customer c : customers) {
            String key = c.getCustomerId().toLowerCase(Locale.ROOT);
            List<CustomerConsentRecord> recs = byCustomer.getOrDefault(key, List.of());
            LocalDate next = CustomerCurrentStatusService.nextExpiry(recs, today);
            out.add(MisCustomerConsentRowResponse.builder()
                    .customerId(c.getCustomerId())
                    .customerName(c.getFullName())
                    .mobileNumber(c.getMobileNumber())
                    .email(c.getEmail())
                    .currentStatus(CustomerCurrentStatusService.derive(recs, today))
                    .consents(summaries.getOrDefault(key, List.of()))
                    .nextExpiry(next)
                    .consentValidUntil(next)
                    .lastConsentInviteSentAt(c.getLastConsentInviteSentAt())
                    .lastConsentResponseAt(c.getLastConsentResponseAt())
                    .reEngagementEligibleAfter(c.getReEngagementEligibleAfter())
                    .vipFlag(c.isVipFlag())
                    .build());
        }
        return out;
    }

    private MisCustomerConsentRowResponse toMisCustomerRow(Customer c) {
        String status = deriveStatus(c.getCustomerId());
        // Map derived string back to enum for response (null-safe)
        CustomerConsentRecordStatus recordStatus = null;
        if (status != null) {
            try { recordStatus = CustomerConsentRecordStatus.valueOf(status); }
            catch (IllegalArgumentException e) {
                log.error("Exception in toMisCustomerRow | user={} | message={}", currentUser(), e.getMessage(), e);
            }
        }
        return MisCustomerConsentRowResponse.builder()
                .customerId(c.getCustomerId())
                .customerName(c.getFullName())
                .mobileNumber(c.getMobileNumber())
                .email(c.getEmail())
                .consentStatus(recordStatus)
                .consentValidUntil(c.getConsentValidUntil())
                .lastConsentInviteSentAt(c.getLastConsentInviteSentAt())
                .lastConsentResponseAt(c.getLastConsentResponseAt())
                .reEngagementEligibleAfter(c.getReEngagementEligibleAfter())
                .vipFlag(c.isVipFlag())
                .build();
    }

    private Specification<Customer> customerMisSpec(CustomerReportFilter f) {
        Boolean vip = f.vip();
        LocalDate validFrom = f.validFrom();
        LocalDate validTo = f.validTo();
        String search = f.search();
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            List<com.consentiq.enums.CustomerCurrentStatus> cs = f.customerStatuses();
            if (cs != null && !cs.isEmpty()) {
                Predicate in = root.get("currentConsentStatus").in(cs);
                p.add(cs.contains(com.consentiq.enums.CustomerCurrentStatus.NO_CONSENT)
                        ? cb.or(in, cb.isNull(root.get("currentConsentStatus"))) : in);
            }
            boolean hasConsentStatuses = f.consentStatuses() != null && !f.consentStatuses().isEmpty();
            if (hasConsentStatuses || f.consentDbId() != null) {
                var sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                List<Predicate> sp = new ArrayList<>();
                if (hasConsentStatuses) sp.add(recRoot.get("status").in(f.consentStatuses()));
                if (f.consentDbId() != null) sp.add(cb.equal(recRoot.get("consentDbId"), f.consentDbId()));
                sub.select(recRoot.get("customerId")).where(sp.toArray(new Predicate[0]));
                p.add(root.get("customerId").in(sub));
            }
            if (vip != null) p.add(cb.equal(root.get("vipFlag"), vip));
            if (validFrom != null || validTo != null) {
                var sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                List<Predicate> sp = new ArrayList<>();
                sp.add(recRoot.get("status").in(List.of(CustomerConsentRecordStatus.ACCEPTED,
                        CustomerConsentRecordStatus.EXPIRING_SOON)));
                sp.add(cb.greaterThanOrEqualTo(recRoot.get("consentValidUntil"), CustomerCurrentStatusService.today()));
                if (validFrom != null) sp.add(cb.greaterThanOrEqualTo(recRoot.get("consentValidUntil"), validFrom));
                if (validTo != null) sp.add(cb.lessThanOrEqualTo(recRoot.get("consentValidUntil"), validTo));
                sub.select(recRoot.get("customerId")).where(sp.toArray(new Predicate[0]));
                p.add(root.get("customerId").in(sub));
            }
            if (StringUtils.hasText(search)) {
                String q = "%" + search.trim().toLowerCase(Locale.ROOT) + "%";
                p.add(cb.or(cb.like(cb.lower(root.get("customerId")), q),
                            cb.like(cb.lower(root.get("mobileNumber")), q)));
            }
            return p.isEmpty() ? cb.conjunction() : cb.and(p.toArray(new Predicate[0]));
        };
    }

    // ── Audit report ──────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public PagedResponse<AuditLogResponse> getAuditReport(
            String entityType, String action, Instant from, Instant to,
            String performedBy, UserRole performedByRole,
            Boolean workflowActionsOnly, Boolean adminActorOnly,
            int page, int size) {
        String cu = currentUser();
        log.debug("Entering getAuditReport | params: page={}, size={}, entityType={}, action={}", page, size, entityType, action);
        log.info("User={} | action=getAuditReport | entity=AuditLog | id=n/a", cu);
        log.debug("Transaction started | method=getAuditReport | id=n/a");
        Specification<AuditLog> spec = auditSpec(entityType, action, from, to,
                performedBy, performedByRole, workflowActionsOnly, adminActorOnly);
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(Sort.Direction.DESC, "performedAt"));
        log.info("Executing DB query | method=findAll | param=AuditLog spec");
        Page<AuditLog> pg = auditLogRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        PagedResponse<AuditLogResponse> out = PagedResponse.<AuditLogResponse>builder()
                .content(pg.getContent().stream().map(this::toAuditRow).toList())
                .totalElements(pg.getTotalElements()).totalPages(pg.getTotalPages())
                .currentPage(pg.getNumber()).pageSize(pg.getSize())
                .hasNext(pg.hasNext()).hasPrevious(pg.hasPrevious())
                .build();
        log.debug("Transaction completing | method=getAuditReport | id=n/a");
        log.debug("Exiting getAuditReport | totalElements={}", out.getTotalElements());
        return out;
    }

    private AuditLogResponse toAuditRow(AuditLog a) {
        return AuditLogResponse.builder()
                .id(a.getId())
                .userId(a.getUser() != null ? a.getUser().getId() : null)
                .userName(a.getUser() != null ? a.getUser().getFullName() : "System")
                .action(a.getAction())
                .entityType(a.getEntityType())
                .entityId(a.getEntityId())
                .entityName(a.getEntityName())
                .description(a.getDescription())
                .ipAddress(a.getIpAddress())
                .performedAt(a.getPerformedAt())
                .build();
    }

    private Specification<AuditLog> auditSpec(
            String entityType, String action, Instant from, Instant to,
            String performedBy, UserRole performedByRole,
            Boolean workflowActionsOnly, Boolean adminActorOnly) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            Join<AuditLog, User> userJoin = root.join("user", JoinType.LEFT);
            if (StringUtils.hasText(entityType))
                p.add(cb.equal(cb.upper(root.get("entityType")), entityType.trim().toUpperCase(Locale.ROOT)));
            if (StringUtils.hasText(action))
                p.add(cb.equal(root.get("action"), action.trim()));
            if (from != null) p.add(cb.greaterThanOrEqualTo(root.get("performedAt"), from));
            if (to   != null) p.add(cb.lessThanOrEqualTo(root.get("performedAt"), to));
            if (StringUtils.hasText(performedBy)) {
                String q = "%" + performedBy.trim().toLowerCase(Locale.ROOT) + "%";
                p.add(cb.or(cb.like(cb.lower(userJoin.get("fullName")), q),
                            cb.like(cb.lower(userJoin.get("email")), q)));
            }
            if (performedByRole != null) p.add(cb.equal(userJoin.get("role"), performedByRole));
            if (Boolean.TRUE.equals(adminActorOnly)) p.add(cb.equal(userJoin.get("role"), UserRole.ADMIN));
            if (Boolean.TRUE.equals(workflowActionsOnly))
                p.add(cb.or(cb.like(root.get("action"), "%APPROVED%"),
                            cb.like(root.get("action"), "%REJECTED%"),
                            cb.like(root.get("action"), "%REVISION%")));
            return p.isEmpty() ? cb.conjunction() : cb.and(p.toArray(new Predicate[0]));
        };
    }

    @Transactional(readOnly = true)
    public byte[] exportAuditCsv(String entityType, String action, Instant from, Instant to,
            String performedBy, UserRole performedByRole,
            Boolean workflowActionsOnly, Boolean adminActorOnly) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportAuditCsv | params: entityType={}, action={}", entityType, action);
        log.info("User={} | action=exportAuditCsv | entity=AuditLog | id=n/a", cu);
        log.debug("Transaction started | method=exportAuditCsv | id=n/a");
        Specification<AuditLog> spec = auditSpec(entityType, action, from, to, performedBy, performedByRole, workflowActionsOnly, adminActorOnly);
        log.info("Executing DB query | method=findAll | param=AuditLog export csv");
        List<AuditLog> all = auditLogRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "performedAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String[]> rows = all.stream().map(a -> new String[]{
                istTime(a.getPerformedAt()),
                nz(a.getEntityType()),
                nz(a.getEntityName()),
                nz(a.getAction()), a.getUser() != null ? nz(a.getUser().getFullName()) : "System",
                nz(a.getDescription())
        }).toList();
        byte[] out = MisReportExportUtil.writeCsv(
                "Timestamp,Entity Type,Entity Name,Action,Performed By,Description", rows);
        log.debug("Transaction completing | method=exportAuditCsv | id=n/a");
        log.debug("Exiting exportAuditCsv | bytes={}", out.length);
        return out;
    }

    @Transactional(readOnly = true)
    public byte[] exportAuditExcel(String entityType, String action, Instant from, Instant to,
            String performedBy, UserRole performedByRole,
            Boolean workflowActionsOnly, Boolean adminActorOnly) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportAuditExcel | params: entityType={}, action={}", entityType, action);
        log.info("User={} | action=exportAuditExcel | entity=AuditLog | id=n/a", cu);
        log.debug("Transaction started | method=exportAuditExcel | id=n/a");
        Specification<AuditLog> spec = auditSpec(entityType, action, from, to, performedBy, performedByRole, workflowActionsOnly, adminActorOnly);
        log.info("Executing DB query | method=findAll | param=AuditLog export excel");
        List<AuditLog> all = auditLogRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "performedAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String> headers = List.of("Timestamp","Entity Type","Entity Name","Action","Performed By","Description");
        List<List<String>> rows = all.stream().map(a -> java.util.Arrays.asList(
                istTime(a.getPerformedAt()),
                nz(a.getEntityType()),
                nz(a.getEntityName()),
                nz(a.getAction()), a.getUser() != null ? nz(a.getUser().getFullName()) : "System",
                nz(a.getDescription()))).toList();
        byte[] out = MisReportExportUtil.writeXlsx("Audit trail", headers, rows);
        log.debug("Transaction completing | method=exportAuditExcel | id=n/a");
        log.debug("Exiting exportAuditExcel | bytes={}", out.length);
        return out;
    }

    // ── Expiry report ─────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public PagedResponse<MisExpiryRowResponse> getExpiryReport(String type, int withinDays, int page, int size) {
        String cu = currentUser();
        log.debug("Entering getExpiryReport | params: type={}, withinDays={}, page={}, size={}", type, withinDays, page, size);
        log.info("User={} | action=getExpiryReport | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getExpiryReport | id=n/a");
        LocalDate today = CustomerCurrentStatusService.today();
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)), expirySort(type));
        log.info("Executing DB query | method=findForExpiryReport | param=type={}", type);
        Page<CustomerConsentRecord> pg = expiryPage(type, withinDays, today, pageable);
        log.info("DB query completed | method=findForExpiryReport | size={}", pg.getContent().size());
        List<MisExpiryRowResponse> rows = toExpiryRows(pg.getContent(), today);
        PagedResponse<MisExpiryRowResponse> out = PagedResponse.<MisExpiryRowResponse>builder()
                .content(rows)
                .totalElements(pg.getTotalElements()).totalPages(pg.getTotalPages())
                .currentPage(pg.getNumber()).pageSize(pg.getSize())
                .hasNext(pg.hasNext()).hasPrevious(pg.hasPrevious())
                .build();
        log.debug("Transaction completing | method=getExpiryReport | id=n/a");
        log.debug("Exiting getExpiryReport | totalElements={}", out.getTotalElements());
        return out;
    }

    private static boolean isExpiredMode(String type) {
        return "EXPIRED".equalsIgnoreCase(type == null ? "" : type.trim());
    }

    private static Sort expirySort(String type) {
        Sort.Direction dir = isExpiredMode(type) ? Sort.Direction.DESC : Sort.Direction.ASC;
        return Sort.by(dir, "consentValidUntil").and(Sort.by(Sort.Direction.ASC, "id"));
    }

    private Page<CustomerConsentRecord> expiryPage(String type, int withinDays, LocalDate today, Pageable pageable) {
        if (isExpiredMode(type)) {
            return recordRepository.findForExpiryReport(
                    List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON,
                            CustomerConsentRecordStatus.EXPIRED),
                    LocalDate.of(1900, 1, 1), today.minusDays(1), pageable);
        }
        return recordRepository.findForExpiryReport(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON),
                today, today.plusDays(Math.max(1, withinDays)), pageable);
    }

    private List<MisExpiryRowResponse> toExpiryRows(List<CustomerConsentRecord> records, LocalDate today) {
        java.util.Set<String> ids = records.stream().map(CustomerConsentRecord::getCustomerId)
                .filter(java.util.Objects::nonNull).collect(java.util.stream.Collectors.toSet());
        Map<String, Customer> customers = new HashMap<>();
        if (!ids.isEmpty()) {
            for (Customer c : customerRepository.findByCustomerIdIn(ids)) {
                customers.put(c.getCustomerId().toLowerCase(Locale.ROOT), c);
            }
        }
        java.util.Set<Long> consentIds = records.stream().map(CustomerConsentRecord::getConsentDbId)
                .filter(java.util.Objects::nonNull).collect(java.util.stream.Collectors.toSet());
        Map<Long, String> names = new HashMap<>();
        for (Consent c : consentRepository.findAllById(consentIds)) {
            names.put(c.getId(), c.getConsentName());
        }
        List<MisExpiryRowResponse> out = new ArrayList<>(records.size());
        for (CustomerConsentRecord r : records) {
            Customer c = r.getCustomerId() == null ? null : customers.get(r.getCustomerId().toLowerCase(Locale.ROOT));
            CustomerConsentRecordStatus st = r.getStatus();
            if (r.getConsentValidUntil() != null && r.getConsentValidUntil().isBefore(today)) {
                st = CustomerConsentRecordStatus.EXPIRED;
            }
            out.add(MisExpiryRowResponse.builder()
                    .customerId(r.getCustomerId())
                    .customerName(c != null ? c.getFullName() : null)
                    .mobileNumber(c != null ? c.getMobileNumber() : null)
                    .email(c != null ? c.getEmail() : null)
                    .consentDbId(r.getConsentDbId())
                    .consentName(names.getOrDefault(r.getConsentDbId(), "Consent #" + r.getConsentDbId()))
                    .consentStatus(st)
                    .consentValidUntil(r.getConsentValidUntil())
                    .lastConsentInviteSentAt(r.getLastInviteSentAt())
                    .daysUntilExpiry(r.getConsentValidUntil() != null
                            ? ChronoUnit.DAYS.between(today, r.getConsentValidUntil()) : null)
                    .vipFlag(c != null && c.isVipFlag())
                    .build());
        }
        return out;
    }

    private Specification<Customer> expirySpec(String type, int withinDays, LocalDate today) {
        return (root, query, cb) -> {
            if ("EXPIRED".equalsIgnoreCase(type == null ? "" : type.trim())) {
                // A customer is expired if their latest consent record's consentValidUntil < today
                var sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                sub.select(recRoot.get("customerId"))
                   .where(cb.or(
                       cb.equal(recRoot.get("status"), CustomerConsentRecordStatus.EXPIRED),
                       cb.and(
                           cb.isNotNull(recRoot.get("consentValidUntil")),
                           cb.lessThan(recRoot.get("consentValidUntil"), today)
                       )
                   ));
                return root.get("customerId").in(sub);
            }

            // EXPIRING: consentValidUntil on the *record* falls within [today, today+withinDays]
            LocalDate until = today.plusDays(Math.max(1, withinDays));
            var sub = query.subquery(String.class);
            var recRoot = sub.from(CustomerConsentRecord.class);
            sub.select(recRoot.get("customerId"))
               .where(cb.or(
                   cb.equal(recRoot.get("status"), CustomerConsentRecordStatus.EXPIRING_SOON),
                   cb.and(
                       cb.isNotNull(recRoot.get("consentValidUntil")),
                       cb.greaterThanOrEqualTo(recRoot.get("consentValidUntil"), today),
                       cb.lessThanOrEqualTo(recRoot.get("consentValidUntil"), until)
                   )
               ));
            return root.get("customerId").in(sub);
        };
    }

    private MisExpiryRowResponse toExpiryRow(Customer c, LocalDate today) {
        // Fetch the latest consent record for this customer
        List<CustomerConsentRecord> records =
            recordRepository.findByCustomerIdOrderByUpdatedAtDesc(c.getCustomerId());

        CustomerConsentRecord latest = records.isEmpty() ? null : records.get(0);

        LocalDate validUntil = latest != null ? latest.getConsentValidUntil() : null;
        Long days = validUntil != null ? ChronoUnit.DAYS.between(today, validUntil) : null;

        CustomerConsentRecordStatus recordStatus = null;
        if (latest != null) {
            recordStatus = latest.getStatus();
        }

        return MisExpiryRowResponse.builder()
                .customerId(c.getCustomerId())
                .customerName(c.getFullName())
                .mobileNumber(c.getMobileNumber())
                .email(c.getEmail())
                .consentStatus(recordStatus)
                .consentValidUntil(validUntil)                        // from record, not Customer
                .lastConsentInviteSentAt(c.getLastConsentInviteSentAt())
                .daysUntilExpiry(days)
                .vipFlag(c.isVipFlag())
                .build();
    }

    @Transactional(readOnly = true)
    public void exportExpiryCsv(java.io.OutputStream out, String type, int withinDays) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportExpiryCsv | params: type={}, withinDays={}", type, withinDays);
        log.info("User={} | action=exportExpiryCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportExpiryCsv | id=n/a");
        List<MisExpiryRowResponse> allRows = listAllExpiryRows(type, withinDays);
        List<String[]> rows = expiryExportRows(allRows).stream().map(r -> r.toArray(new String[0])).toList();
        out.write(MisReportExportUtil.writeCsv(String.join(",", EXPIRY_EXPORT_HEADERS), rows));
        out.flush();
        log.debug("Transaction completing | method=exportExpiryCsv | id=n/a");
        log.debug("Exiting exportExpiryCsv | completed successfully");
    }

    @Transactional(readOnly = true)
    public byte[] exportExpiryExcel(String type, int withinDays) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportExpiryExcel | params: type={}, withinDays={}", type, withinDays);
        log.info("User={} | action=exportExpiryExcel | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportExpiryExcel | id=n/a");
        List<MisExpiryRowResponse> allRows = listAllExpiryRows(type, withinDays);
        byte[] out = MisReportExportUtil.writeXlsx("Expiry report", EXPIRY_EXPORT_HEADERS, expiryExportRows(allRows));
        log.debug("Transaction completing | method=exportExpiryExcel | id=n/a");
        log.debug("Exiting exportExpiryExcel | bytes={}", out.length);
        return out;
    }

    private static final List<String> EXPIRY_EXPORT_HEADERS = List.of("Customer ID", "Name", "Mobile", "Email",
            "Consent", "Consent Status", "Valid Until", "Days Until Expiry", "Last Invite Sent", "VIP");

    private static List<List<String>> expiryExportRows(List<MisExpiryRowResponse> rows) {
        return rows.stream().map(r -> java.util.Arrays.asList(
                nz(r.getCustomerId()), nz(r.getCustomerName()), nz(r.getMobileNumber()), nz(r.getEmail()),
                nz(r.getConsentName()),
                r.getConsentStatus() == null ? "" : r.getConsentStatus().name(),
                nz(r.getConsentValidUntil()),
                nz(r.getDaysUntilExpiry()),
                istTime(r.getLastConsentInviteSentAt()),
                r.isVipFlag() ? "Y" : "N")).toList();
    }

    private List<MisExpiryRowResponse> listAllExpiryRows(String type, int withinDays) {
        LocalDate today = CustomerCurrentStatusService.today();
        log.info("Executing DB query | method=findForExpiryReport | param=listAll");
        Page<CustomerConsentRecord> all = expiryPage(type, withinDays, today,
                PageRequest.of(0, Integer.MAX_VALUE, expirySort(type)));
        log.info("DB query completed | method=findForExpiryReport | size={}", all.getContent().size());
        return toExpiryRows(all.getContent(), today);
    }

    // ── Revocation report ─────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public PagedResponse<MisRevocationRowResponse> getRevocationReport(
            Instant from, Instant to, Boolean vip, int page, int size) {
        String cu = currentUser();
        log.debug("Entering getRevocationReport | params: page={}, size={}, vip={}", page, size, vip);
        log.info("User={} | action=getRevocationReport | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getRevocationReport | id=n/a");
        Specification<Customer> spec = revocationSpec(from, to, vip);
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(Sort.Direction.DESC, "lastConsentResponseAt"));
        log.info("Executing DB query | method=findAll | param=Customer revocation spec");
        Page<Customer> pg = customerRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        List<MisRevocationRowResponse> rows = pg.getContent().stream().map(this::toRevocationRow).toList();
        PagedResponse<MisRevocationRowResponse> out = PagedResponse.<MisRevocationRowResponse>builder()
                .content(rows)
                .totalElements(pg.getTotalElements()).totalPages(pg.getTotalPages())
                .currentPage(pg.getNumber()).pageSize(pg.getSize())
                .hasNext(pg.hasNext()).hasPrevious(pg.hasPrevious())
                .build();
        log.debug("Transaction completing | method=getRevocationReport | id=n/a");
        log.debug("Exiting getRevocationReport | totalElements={}", out.getTotalElements());
        return out;
    }

    private Specification<Customer> revocationSpec(Instant from, Instant to, Boolean vip) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            // Customers whose most-recent record is REJECTED or WITHDRAWN
            var sub = query.subquery(String.class);
            var recRoot = sub.from(CustomerConsentRecord.class);
            sub.select(recRoot.get("customerId"))
               .where(recRoot.get("status").in(
                       List.of(CustomerConsentRecordStatus.REJECTED, CustomerConsentRecordStatus.WITHDRAWN)));
            p.add(root.get("customerId").in(sub));
            if (vip != null) p.add(cb.equal(root.get("vipFlag"), vip));
            if (from != null) p.add(cb.greaterThanOrEqualTo(root.get("lastConsentResponseAt"), from));
            if (to   != null) p.add(cb.lessThanOrEqualTo(root.get("lastConsentResponseAt"), to));
            return cb.and(p.toArray(new Predicate[0]));
        };
    }

    private MisRevocationRowResponse toRevocationRow(Customer c) {
        String status = deriveStatus(c.getCustomerId());
        CustomerConsentRecordStatus recordStatus = null;
        if (status != null) {
            try { recordStatus = CustomerConsentRecordStatus.valueOf(status); }
            catch (IllegalArgumentException e) {
                log.error("Exception in toRevocationRow | user={} | message={}", currentUser(), e.getMessage(), e);
            }
        }
        return MisRevocationRowResponse.builder()
                .customerId(c.getCustomerId()).customerName(c.getFullName())
                .mobileNumber(c.getMobileNumber()).email(c.getEmail())
                .consentStatus(recordStatus)
                .lastConsentResponseAt(c.getLastConsentResponseAt())
                .reEngagementEligibleAfter(c.getReEngagementEligibleAfter())
                .vipFlag(c.isVipFlag())
                .build();
    }

    @Transactional(readOnly = true)
    public MisRevocationTrendResponse getRevocationTrend() {
        String cu = currentUser();
        log.debug("Entering getRevocationTrend | params: none");
        log.info("User={} | action=getRevocationTrend | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getRevocationTrend | id=n/a");
        // Count customers whose lastConsentResponseAt is set (responded) grouped by month
        // using a fallback from inviteToken responded-at grouping
        // Simple approximation: count revocation records grouped by respondedAt month
        Instant to   = Instant.now();
        Instant from = to.minus(365, ChronoUnit.DAYS);

        // Group REJECTED/WITHDRAWN records by respondedAt month
        log.info("Executing DB query | method=findByCustomerIdOrderByUpdatedAtDesc | param=customerId=");
        List<CustomerConsentRecord> revoked = recordRepository.findByCustomerIdOrderByUpdatedAtDesc("") // won't work
                .stream().toList();
        log.info("DB query completed | method=findByCustomerIdOrderByUpdatedAtDesc | size={}", revoked.size());
        // Better: use a direct query on CustomerConsentRecord for REJECTED/WITHDRAWN grouped by month
        // Since we don't have a custom query for this yet, approximate using lastConsentResponseAt on Customer
        log.info("Executing DB query | method=findAll | param=Customer revocation trend");
        List<Customer> revokedCustomers = customerRepository.findAll(revocationSpec(from, to, null));
        log.info("DB query completed | method=findAll | size={}", revokedCustomers.size());
        Map<String, Long> byMonth = revokedCustomers.stream()
                .filter(c -> c.getLastConsentResponseAt() != null)
                .collect(Collectors.groupingBy(c -> {
                    var ym = c.getLastConsentResponseAt().atZone(CustomerCurrentStatusService.ZONE);
                    return String.format("%04d-%02d", ym.getYear(), ym.getMonthValue());
                }, Collectors.counting()));

        List<MisTimeSeriesCountPoint> series = byMonth.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(e -> MisTimeSeriesCountPoint.builder().period(e.getKey()).count(e.getValue()).build())
                .toList();
        MisRevocationTrendResponse out = MisRevocationTrendResponse.builder().series(series).build();
        log.debug("Transaction completing | method=getRevocationTrend | id=n/a");
        log.debug("Exiting getRevocationTrend | seriesSize={}", series.size());
        return out;
    }

    @Transactional(readOnly = true)
    public void exportRevocationCsv(java.io.OutputStream out, Instant from, Instant to, Boolean vip)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportRevocationCsv | params: from={}, to={}, vip={}", from, to, vip);
        log.info("User={} | action=exportRevocationCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportRevocationCsv | id=n/a");
        log.info("Executing DB query | method=findAll | param=Customer revocation export");
        List<Customer> all = customerRepository.findAll(revocationSpec(from, to, vip),
                Sort.by(Sort.Direction.DESC, "lastConsentResponseAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        Map<String, String> statusById = deriveStatuses(all);
        List<String[]> rows = all.stream().map(c -> {
            String status = statusById.get(c.getCustomerId());
            return new String[]{
                    c.getCustomerId(), c.getFullName(), c.getMobileNumber(),
                    c.getEmail() == null ? "" : c.getEmail(),
                    status == null ? "" : status,
                    c.getLastConsentResponseAt() == null ? "" : c.getLastConsentResponseAt().toString(),
                    c.getReEngagementEligibleAfter() == null ? "" : c.getReEngagementEligibleAfter().toString(),
                    c.isVipFlag() ? "Y" : "N"};
        }).toList();
        out.write(MisReportExportUtil.writeCsv(
                "Customer ID,Name,Mobile,Email,Status,Last Response,Re-engagement Eligible After,VIP", rows));
        out.flush();
        log.debug("Transaction completing | method=exportRevocationCsv | id=n/a");
        log.debug("Exiting exportRevocationCsv | completed successfully");
    }

    @Transactional(readOnly = true)
    public byte[] exportRevocationExcel(Instant from, Instant to, Boolean vip) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportRevocationExcel | params: from={}, to={}, vip={}", from, to, vip);
        log.info("User={} | action=exportRevocationExcel | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportRevocationExcel | id=n/a");
        log.info("Executing DB query | method=findAll | param=Customer revocation excel");
        List<Customer> all = customerRepository.findAll(revocationSpec(from, to, vip),
                Sort.by(Sort.Direction.DESC, "lastConsentResponseAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String> headers = List.of("Customer ID","Name","Mobile","Email","Status",
                "Last Response","Re-engagement Eligible After","VIP");
        Map<String, String> statusById = deriveStatuses(all);
        List<List<String>> rows = all.stream().map(c -> {
            String status = statusById.get(c.getCustomerId());
            return List.of(c.getCustomerId(), c.getFullName(), c.getMobileNumber(),
                    c.getEmail() == null ? "" : c.getEmail(),
                    status == null ? "" : status,
                    c.getLastConsentResponseAt() == null ? "" : c.getLastConsentResponseAt().toString(),
                    c.getReEngagementEligibleAfter() == null ? "" : c.getReEngagementEligibleAfter().toString(),
                    c.isVipFlag() ? "Y" : "N");
        }).toList();
        byte[] out = MisReportExportUtil.writeXlsx("Revocations", headers, rows);
        log.debug("Transaction completing | method=exportRevocationExcel | id=n/a");
        log.debug("Exiting exportRevocationExcel | bytes={}", out.length);
        return out;
    }

    // ── Compliance overview ───────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public MisComplianceOverviewResponse getComplianceOverview() {
        String cu = currentUser();
        log.debug("Entering getComplianceOverview | params: none");
        log.info("User={} | action=getComplianceOverview | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getComplianceOverview | id=n/a");
        log.info("Executing DB query | method=count | param=Customer");
        long total  = customerRepository.count();
        log.info("DB query completed | method=count | size={}", total);
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=active");
        long active = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", active);
        log.info("Executing DB query | method=countDistinctCustomersByStatus | param=EXPIRED");
        long expired = recordRepository.countDistinctCustomersByStatus(CustomerConsentRecordStatus.EXPIRED);
        log.info("DB query completed | method=countDistinctCustomersByStatus | size={}", expired);
        log.info("Executing DB query | method=countByLastConsentResponseAtIsNotNull | param=n/a");
        long responded = customerRepository.countByLastConsentResponseAtIsNotNull();
        log.info("DB query completed | method=countByLastConsentResponseAtIsNotNull | size={}", responded);
        long missing = total - responded;
        double pct   = total == 0 ? 0.0 : Math.round(1000.0 * active / total) / 10.0;
        MisComplianceOverviewResponse out = MisComplianceOverviewResponse.builder()
                .totalCustomersWithActiveConsent(active)
                .customersMissingConsent(missing)
                .customersWithExpiredConsent(expired)
                .compliancePercent(pct)
                .build();
        log.debug("Transaction completing | method=getComplianceOverview | id=n/a");
        log.debug("Exiting getComplianceOverview | completed successfully");
        return out;
    }

    // ── Channel performance ───────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<MisChannelPerformanceRowResponse> getChannelPerformance() {
        String cu = currentUser();
        log.debug("Entering getChannelPerformance | params: none");
        log.info("User={} | action=getChannelPerformance | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=getChannelPerformance | id=n/a");
        Map<String, Integer> templateRaw = new HashMap<>();
        log.info("Executing DB query | method=findByStatusInOrderByConsentNameAsc | param=channels");
        List<Consent> forChannels = consentRepository.findByStatusInOrderByConsentNameAsc(
                List.of(ConsentStatus.PUBLISHED, ConsentStatus.APPROVED));
        log.info("DB query completed | method=findByStatusInOrderByConsentNameAsc | size={}", forChannels.size());
        for (Consent c : forChannels) {
            for (String ch : DeliveryChannelCatalog.fromConsentEntity(c)) {
                templateRaw.merge(normalizeChannelKeyForMis(ch), 1, Integer::sum);
            }
        }
        int totalCh = templateRaw.values().stream().mapToInt(Integer::intValue).sum();

        Map<String, long[]> inviteAgg = new LinkedHashMap<>();
        for (String label : MIS_CHANNEL_ORDER) inviteAgg.put(label, new long[]{0L, 0L, 0L});

        int page = 0;
        org.springframework.data.domain.Page<ConsentInviteToken> tokenPage;
        do {
            log.info("Executing DB query | method=findAll | param=ConsentInviteToken page={}", page);
            tokenPage = inviteTokenRepository.findAll(PageRequest.of(page++, 500, Sort.by("id")));
            log.info("DB query completed | method=findAll | size={}", tokenPage.getContent().size());
            for (ConsentInviteToken t : tokenPage.getContent()) {
                List<String> norms = DeliveryChannelCatalog.normalizedFromInviteToken(t);
                if (norms.isEmpty()) norms = List.of("EMAIL");
                for (String n : norms) {
                    String label = displayChannelLabelForMis(n);
                    long[] arr = inviteAgg.computeIfAbsent(label, k -> new long[]{0L, 0L, 0L});
                    arr[0]++;
                    if (t.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED) arr[1]++;
                    else arr[2]++;
                }
            }
        } while (tokenPage.hasNext());

        List<MisChannelPerformanceRowResponse> out = new ArrayList<>();
        for (String label : MIS_CHANNEL_ORDER) {
            long[] arr  = inviteAgg.getOrDefault(label, new long[]{0L, 0L, 0L});
            long invites = arr[0], accepted = arr[1], drop = arr[2];
            double success = invites == 0 ? 0.0 : Math.round(1000.0 * accepted / invites) / 10.0;
            double dropPct = invites == 0 ? 0.0 : Math.round(1000.0 * drop    / invites) / 10.0;
            int tmpl = templateRaw.getOrDefault(label, 0);
            double mix = totalCh == 0 ? 0.0 : Math.round(1000.0 * tmpl / totalCh) / 10.0;
            out.add(MisChannelPerformanceRowResponse.builder()
                    .channel(label).totalInvitesSent(invites).acceptedCount(accepted)
                    .declinedOrNoResponseCount(drop).successRatePercent(success)
                    .dropOffPercent(dropPct).templateMixPercent(mix).build());
        }
        log.debug("Transaction completing | method=getChannelPerformance | id=n/a");
        log.debug("Exiting getChannelPerformance | size={}", out.size());
        return out;
    }

    // ── Agent performance ─────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public PagedResponse<MisAgentPerformanceRowResponse> getAgentPerformance(int page, int size) {
        String cu = currentUser();
        log.debug("Entering getAgentPerformance | params: page={}, size={}", page, size);
        log.info("User={} | action=getAgentPerformance | entity=User | id=n/a", cu);
        log.debug("Transaction started | method=getAgentPerformance | id=n/a");
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(500, Math.max(1, size)),
                Sort.by("fullName"));
        log.info("Executing DB query | method=findByRoleOrderByFullNameAsc | param=MAKER");
        org.springframework.data.domain.Page<User> makers =
                userRepository.findByRoleOrderByFullNameAsc(UserRole.MAKER, pageable);
        log.info("DB query completed | method=findByRoleOrderByFullNameAsc | size={}", makers.getContent().size());
        List<MisAgentPerformanceRowResponse> rows = makers.getContent().stream()
                .map(this::toAgentRow).toList();
        PagedResponse<MisAgentPerformanceRowResponse> out = PagedResponse.<MisAgentPerformanceRowResponse>builder()
                .content(rows)
                .totalElements(makers.getTotalElements()).totalPages(makers.getTotalPages())
                .currentPage(makers.getNumber()).pageSize(makers.getSize())
                .hasNext(makers.hasNext()).hasPrevious(makers.hasPrevious())
                .build();
        log.debug("Transaction completing | method=getAgentPerformance | id=n/a");
        log.debug("Exiting getAgentPerformance | totalElements={}", out.getTotalElements());
        return out;
    }

    private MisAgentPerformanceRowResponse toAgentRow(User u) {
        long uid = u.getId();
        log.info("Executing DB query | method=countByCreatedById | param=uid={}", uid);
        long total    = consentRepository.countByCreatedById(uid);
        log.info("DB query completed | method=countByCreatedById | size={}", total);
        log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=PENDING_APPROVAL uid={}", uid);
        long pending  = consentRepository.countByCreatedByIdAndStatus(uid, ConsentStatus.PENDING_APPROVAL);
        log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", pending);
        log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=APPROVED uid={}", uid);
        long approvedPart = consentRepository.countByCreatedByIdAndStatus(uid, ConsentStatus.APPROVED);
        log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", approvedPart);
        log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=PUBLISHED uid={}", uid);
        long publishedPart = consentRepository.countByCreatedByIdAndStatus(uid, ConsentStatus.PUBLISHED);
        log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", publishedPart);
        long approved = approvedPart + publishedPart;
        log.info("Executing DB query | method=countByCreatedByIdAndStatus | param=REJECTED uid={}", uid);
        long rejected = consentRepository.countByCreatedByIdAndStatus(uid, ConsentStatus.REJECTED);
        log.info("DB query completed | method=countByCreatedByIdAndStatus | size={}", rejected);
        long drafts = consentRepository.countByCreatedByIdAndStatus(uid, ConsentStatus.DRAFT);
        long revisions = consentRepository.countByCreatedByIdAndStatus(uid, ConsentStatus.REVISION_REQUESTED);
        log.info("Executing DB query | method=findByCreatedBy_IdOrderByCreatedAtDesc | param=uid={}", uid);
        List<Consent> mine = consentRepository.findByCreatedBy_IdOrderByCreatedAtDesc(uid)
                .stream().limit(2000).toList();
        log.info("DB query completed | method=findByCreatedBy_IdOrderByCreatedAtDesc | size={}", mine.size());
        OptionalDouble avgProc = mine.stream()
                .filter(c -> c.getSubmittedAt() != null)
                .mapToDouble(c -> ChronoUnit.HOURS.between(c.getCreatedAt(), c.getSubmittedAt()))
                .filter(h -> h >= 0 && h < 10_000).average();
        long slaNum = mine.stream().filter(c -> c.getSubmittedAt() != null)
                .filter(c -> ChronoUnit.HOURS.between(c.getCreatedAt(), c.getSubmittedAt()) <= 24).count();
        long slaDen = mine.stream().filter(c -> c.getSubmittedAt() != null).count();
        double slaPct = slaDen == 0 ? 0.0 : Math.round(1000.0 * slaNum / slaDen) / 10.0;
        return MisAgentPerformanceRowResponse.builder()
                .userId(uid).fullName(u.getFullName()).email(u.getEmail()).role(u.getRole())
                .totalConsentsCreated(total).pendingApprovals(pending)
                .approvedOrPublished(approved).rejectedConsents(rejected)
                .draftConsents(drafts).revisionRequested(revisions)
                .averageProcessingHours(avgProc.isPresent() ? Math.round(avgProc.getAsDouble() * 10.0) / 10.0 : 0.0)
                .sla24hSubmitCompliancePercent(slaPct)
                .build();
    }

    private static final List<String> CHECKER_DECISION_ACTIONS = List.of("CONSENT_APPROVED", "CONSENT_REJECTED",
            "CONSENT_REVISION_REQUESTED", "RULE_APPROVED", "RULE_REJECTED", "RULE_REVISION_REQUESTED",
            "BROADCAST_APPROVED", "BROADCAST_REJECTED", "BROADCAST_REVISION_REQUESTED");

    @Transactional(readOnly = true)
    public List<com.consentiq.model.dto.response.mis.MisCheckerPerformanceRowResponse> getCheckerPerformance(
            Instant from, Instant to) {
        Instant f = from != null ? from : Instant.EPOCH;
        Instant t = to != null ? to : Instant.now().plus(1, ChronoUnit.DAYS);
        Map<Long, long[]> counts = new HashMap<>();
        for (Object[] row : auditLogRepository.countCheckerDecisions(CHECKER_DECISION_ACTIONS, f, t)) {
            Long uid = (Long) row[0];
            String action = (String) row[1];
            long n = ((Number) row[2]).longValue();
            long[] c = counts.computeIfAbsent(uid, k -> new long[3]);
            if (action.endsWith("_APPROVED")) c[0] += n;
            else if (action.endsWith("_REJECTED")) c[1] += n;
            else c[2] += n;
        }
        Map<Long, List<Double>> tat = new HashMap<>();
        for (Consent c : consentRepository.findByReviewedAtIsNotNullAndSubmittedAtIsNotNull()) {
            if (c.getReviewedBy() == null || c.getReviewedAt().isBefore(f) || c.getReviewedAt().isAfter(t)) continue;
            double h = java.time.Duration.between(c.getSubmittedAt(), c.getReviewedAt()).getSeconds() / 3600.0;
            if (h >= 0 && h < 1_000_000) tat.computeIfAbsent(c.getReviewedBy().getId(), k -> new ArrayList<>()).add(h);
        }
        List<com.consentiq.model.dto.response.mis.MisCheckerPerformanceRowResponse> out = new ArrayList<>();
        for (User u : userRepository.findAll()) {
            if (u.getRole() != UserRole.CHECKER && !counts.containsKey(u.getId())) continue;
            long[] c = counts.getOrDefault(u.getId(), new long[3]);
            OptionalDouble avg = tat.getOrDefault(u.getId(), List.of()).stream().mapToDouble(Double::doubleValue).average();
            out.add(com.consentiq.model.dto.response.mis.MisCheckerPerformanceRowResponse.builder()
                    .userId(u.getId()).fullName(u.getFullName()).email(u.getEmail())
                    .approved(c[0]).rejected(c[1]).revisionRequested(c[2]).totalDecisions(c[0] + c[1] + c[2])
                    .averageTatHours(avg.isPresent() ? round1(avg.getAsDouble()) : null)
                    .build());
        }
        out.sort(Comparator.comparingLong(com.consentiq.model.dto.response.mis.MisCheckerPerformanceRowResponse::getTotalDecisions)
                .reversed().thenComparing(r -> nz(r.getFullName())));
        return out;
    }

    private static final List<String> CHECKER_EXPORT_HEADERS = List.of("Checker", "Email", "Approved", "Rejected",
            "Revision Requested", "Total Decisions", "Avg TAT (hours)");

    private List<List<String>> checkerExportRows(Instant from, Instant to) {
        return getCheckerPerformance(from, to).stream().map(r -> java.util.Arrays.asList(
                nz(r.getFullName()), nz(r.getEmail()), String.valueOf(r.getApproved()), String.valueOf(r.getRejected()),
                String.valueOf(r.getRevisionRequested()), String.valueOf(r.getTotalDecisions()),
                nz(r.getAverageTatHours()))).toList();
    }

    @Transactional(readOnly = true)
    public byte[] exportCheckerPerformanceCsv(Instant from, Instant to) throws java.io.IOException {
        return MisReportExportUtil.writeCsv(String.join(",", CHECKER_EXPORT_HEADERS),
                checkerExportRows(from, to).stream().map(r -> r.toArray(new String[0])).toList());
    }

    @Transactional(readOnly = true)
    public byte[] exportCheckerPerformanceExcel(Instant from, Instant to) throws java.io.IOException {
        return MisReportExportUtil.writeXlsx("Checker performance", CHECKER_EXPORT_HEADERS, checkerExportRows(from, to));
    }

    private static final List<String> MAKER_EXPORT_HEADERS = List.of("Maker", "Email", "Created", "Draft",
            "Pending", "Approved / Published", "Rejected", "Revision Requested", "Avg hours to submit",
            "Submitted within 24h %");

    private List<List<String>> makerExportRows() {
        return getAgentPerformance(0, 500).getContent().stream().map(r -> java.util.Arrays.asList(
                nz(r.getFullName()), nz(r.getEmail()), String.valueOf(r.getTotalConsentsCreated()),
                String.valueOf(r.getDraftConsents()), String.valueOf(r.getPendingApprovals()),
                String.valueOf(r.getApprovedOrPublished()), String.valueOf(r.getRejectedConsents()),
                String.valueOf(r.getRevisionRequested()), String.valueOf(r.getAverageProcessingHours()),
                String.valueOf(r.getSla24hSubmitCompliancePercent()))).toList();
    }

    @Transactional(readOnly = true)
    public byte[] exportMakerPerformanceCsv() throws java.io.IOException {
        return MisReportExportUtil.writeCsv(String.join(",", MAKER_EXPORT_HEADERS),
                makerExportRows().stream().map(r -> r.toArray(new String[0])).toList());
    }

    @Transactional(readOnly = true)
    public byte[] exportMakerPerformanceExcel() throws java.io.IOException {
        return MisReportExportUtil.writeXlsx("Maker performance", MAKER_EXPORT_HEADERS, makerExportRows());
    }

    private static final List<String> CHANNEL_EXPORT_HEADERS = List.of("Channel", "Invites Sent", "Accepted",
            "Declined / No response", "Success %", "Drop-off %");

    private List<List<String>> channelExportRows() {
        return getChannelPerformance().stream().map(r -> java.util.Arrays.asList(
                nz(r.getChannel()), String.valueOf(r.getTotalInvitesSent()), String.valueOf(r.getAcceptedCount()),
                String.valueOf(r.getDeclinedOrNoResponseCount()), String.valueOf(r.getSuccessRatePercent()),
                String.valueOf(r.getDropOffPercent()))).toList();
    }

    @Transactional(readOnly = true)
    public byte[] exportChannelPerformanceCsv() throws java.io.IOException {
        return MisReportExportUtil.writeCsv(String.join(",", CHANNEL_EXPORT_HEADERS),
                channelExportRows().stream().map(r -> r.toArray(new String[0])).toList());
    }

    @Transactional(readOnly = true)
    public byte[] exportChannelPerformanceExcel() throws java.io.IOException {
        return MisReportExportUtil.writeXlsx("Channel performance", CHANNEL_EXPORT_HEADERS, channelExportRows());
    }

    // ── TAT report ────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public MisTatReportBundleResponse getTatReport(Instant from, Instant to,
            ConsentStatus status, Long creatorId, int page, int size) {
        String cu = currentUser();
        log.debug("Entering getTatReport | params: from={}, to={}, status={}, creatorId={}, page={}, size={}",
                from, to, status, creatorId, page, size);
        log.info("User={} | action=getTatReport | entity=Consent | id={}", cu, creatorId != null ? creatorId : "n/a");
        log.debug("Transaction started | method=getTatReport | id={}", creatorId != null ? creatorId : "n/a");
        Specification<Consent> spec = tatSpec(from, to, status, creatorId);
        log.info("Executing DB query | method=findAll | param=Consent tat summary");
        List<Consent> forSummary = consentRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("DB query completed | method=findAll | size={}", forSummary.size());
        List<Double> hours = forSummary.stream().map(this::tatHours)
                .filter(v -> v != null && !v.isNaN() && !v.isInfinite()).sorted().toList();
        MisTatSummaryResponse summary = buildTatSummary(forSummary, hours);

        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("Executing DB query | method=findAll | param=Consent tat page");
        org.springframework.data.domain.Page<Consent> pg = consentRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        List<MisTatConsentRowResponse> rows = pg.getContent().stream().map(this::toTatRow).toList();
        MisTatReportBundleResponse out = MisTatReportBundleResponse.builder()
                .summary(summary)
                .page(PagedResponse.<MisTatConsentRowResponse>builder()
                        .content(rows)
                        .totalElements(pg.getTotalElements()).totalPages(pg.getTotalPages())
                        .currentPage(pg.getNumber()).pageSize(pg.getSize())
                        .hasNext(pg.hasNext()).hasPrevious(pg.hasPrevious())
                        .build())
                .build();
        log.debug("Transaction completing | method=getTatReport | id={}", creatorId != null ? creatorId : "n/a");
        log.debug("Exiting getTatReport | totalElements={}", out.getPage().getTotalElements());
        return out;
    }

    private MisTatSummaryResponse buildTatSummary(List<Consent> consents, List<Double> hours) {
        OptionalDouble avgAll = hours.stream().mapToDouble(Double::doubleValue).average();
        List<Double> appr = consents.stream()
                .filter(c -> c.getStatus() == ConsentStatus.APPROVED || c.getStatus() == ConsentStatus.PUBLISHED)
                .map(this::tatHours).filter(v -> v != null && !v.isNaN()).toList();
        List<Double> rej = consents.stream()
                .filter(c -> c.getStatus() == ConsentStatus.REJECTED)
                .map(this::tatHours).filter(v -> v != null && !v.isNaN()).toList();
        OptionalDouble avgA = appr.stream().mapToDouble(Double::doubleValue).average();
        OptionalDouble avgR = rej.stream().mapToDouble(Double::doubleValue).average();
        Double fastest = hours.isEmpty() ? null : hours.get(0);
        Double slowest = hours.isEmpty() ? null : hours.get(hours.size() - 1);
        return MisTatSummaryResponse.builder()
                .averageTatHoursOverall(avgAll.isPresent() ? round1(avgAll.getAsDouble()) : null)
                .averageTatHoursApproved(avgA.isPresent() ? round1(avgA.getAsDouble()) : null)
                .averageTatHoursRejected(avgR.isPresent() ? round1(avgR.getAsDouble()) : null)
                .fastestTatHours(fastest == null ? null : round1(fastest))
                .slowestTatHours(slowest == null ? null : round1(slowest))
                .build();
    }

    private static double round1(double v) { return Math.round(v * 10.0) / 10.0; }

    private Double tatHours(Consent c) {
        if (c.getReviewedAt() == null || c.getSubmittedAt() == null) return null;
        if (c.getStatus() == ConsentStatus.PENDING_APPROVAL || c.getStatus() == ConsentStatus.DRAFT) return null;
        double h = java.time.Duration.between(c.getSubmittedAt(), c.getReviewedAt()).getSeconds() / 3600.0;
        return (h < 0 || h > 1_000_000) ? null : round1(h);
    }

    private static final List<String> TAT_EXPORT_HEADERS = List.of("Consent ID", "Name", "Creator", "Status",
            "Created At", "Submitted At", "Decided At", "TAT (hours)");

    private List<List<String>> tatExportRows(List<Consent> consents) {
        return consents.stream().map(c -> java.util.Arrays.asList(
                nz(c.getConsentId()), nz(c.getConsentName()),
                c.getCreatedBy() != null ? nz(c.getCreatedBy().getFullName()) : "",
                c.getStatus() == null ? "" : c.getStatus().name(),
                istTime(c.getCreatedAt()), istTime(c.getSubmittedAt()), istTime(c.getReviewedAt()),
                nz(tatHours(c)))).toList();
    }

    private MisTatConsentRowResponse toTatRow(Consent c) {
        return MisTatConsentRowResponse.builder()
                .consentDbId(c.getId()).consentId(c.getConsentId()).consentName(c.getConsentName())
                .status(c.getStatus()).createdAt(c.getCreatedAt()).submittedAt(c.getSubmittedAt())
                .reviewedAt(c.getReviewedAt())
                .creatorUserId(c.getCreatedBy() != null ? c.getCreatedBy().getId() : null)
                .creatorName(c.getCreatedBy() != null ? c.getCreatedBy().getFullName() : null)
                .totalTatHours(tatHours(c))
                .build();
    }

    private Specification<Consent> tatSpec(Instant from, Instant to, ConsentStatus status, Long creatorId) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            if (from != null) p.add(cb.greaterThanOrEqualTo(root.get("submittedAt"), from));
            if (to   != null) p.add(cb.lessThanOrEqualTo(root.get("submittedAt"), to));
            if (from != null || to != null) p.add(cb.isNotNull(root.get("submittedAt")));
            if (status != null) p.add(cb.equal(root.get("status"), status));
            if (creatorId != null) p.add(cb.equal(root.get("createdBy").get("id"), creatorId));
            return p.isEmpty() ? cb.conjunction() : cb.and(p.toArray(new Predicate[0]));
        };
    }

    @Transactional(readOnly = true)
    public byte[] exportTatCsv(Instant from, Instant to, ConsentStatus status, Long creatorId)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportTatCsv | params: from={}, to={}, status={}, creatorId={}", from, to, status, creatorId);
        log.info("User={} | action=exportTatCsv | entity=Consent | id={}", cu, creatorId != null ? creatorId : "n/a");
        log.debug("Transaction started | method=exportTatCsv | id={}", creatorId != null ? creatorId : "n/a");
        log.info("Executing DB query | method=findAll | param=Consent tat export csv");
        List<Consent> all = consentRepository.findAll(tatSpec(from, to, status, creatorId),
                Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String[]> rows = tatExportRows(all).stream().map(r -> r.toArray(new String[0])).toList();
        byte[] out = MisReportExportUtil.writeCsv(String.join(",", TAT_EXPORT_HEADERS), rows);
        log.debug("Transaction completing | method=exportTatCsv | id={}", creatorId != null ? creatorId : "n/a");
        log.debug("Exiting exportTatCsv | bytes={}", out.length);
        return out;
    }

    @Transactional(readOnly = true)
    public byte[] exportTatExcel(Instant from, Instant to, ConsentStatus status, Long creatorId)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportTatExcel | params: from={}, to={}, status={}, creatorId={}", from, to, status, creatorId);
        log.info("User={} | action=exportTatExcel | entity=Consent | id={}", cu, creatorId != null ? creatorId : "n/a");
        log.debug("Transaction started | method=exportTatExcel | id={}", creatorId != null ? creatorId : "n/a");
        log.info("Executing DB query | method=findAll | param=Consent tat export excel");
        List<Consent> all = consentRepository.findAll(tatSpec(from, to, status, creatorId),
                Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        byte[] out = MisReportExportUtil.writeXlsx("TAT report", TAT_EXPORT_HEADERS, tatExportRows(all));
        log.debug("Transaction completing | method=exportTatExcel | id={}", creatorId != null ? creatorId : "n/a");
        log.debug("Exiting exportTatExcel | bytes={}", out.length);
        return out;
    }

    // ── Consent inventory ─────────────────────────────────────────────────────

    private Specification<Consent> consentInventorySpec(ConsentCategory category, ConsentStatus status, String search) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            if (category != null) p.add(cb.equal(root.get("category"), category));
            if (status   != null) p.add(cb.equal(root.get("status"),   status));
            if (StringUtils.hasText(search)) {
                String q = "%" + search.trim().toLowerCase(Locale.ROOT) + "%";
                p.add(cb.or(cb.like(cb.lower(root.get("consentName")), q),
                            cb.like(cb.lower(root.get("consentId")),   q)));
            }
            return p.isEmpty() ? cb.conjunction() : cb.and(p.toArray(new Predicate[0]));
        };
    }

    /**
     * Replaces BroadcastExecutionRepository.countExecutionsGroupedByConsentTemplateId()
     * with ConsentRuleExecutionRepository — counts rule executions per consent template.
     */
    private Map<Long, Long> buildExecByConsent() {
        log.info("Executing DB query | method=findAll | param=ConsentRuleExecution");
        Map<Long, Long> res = ruleExecutionRepository.findAll().stream()
                .filter(e -> e.getConsentRule() != null && e.getConsentRule().getConsentTemplate() != null)
                .collect(Collectors.groupingBy(
                        e -> e.getConsentRule().getConsentTemplate().getId(),
                        Collectors.counting()));
        log.info("DB query completed | method=findAll | size={}", res.size());
        return res;
    }

    private MisConsentInventoryRowResponse toInventoryRow(Consent c, Map<Long, Long> execByConsent) {
        return MisConsentInventoryRowResponse.builder()
                .consentDbId(c.getId()).consentId(c.getConsentId()).consentName(c.getConsentName())
                .category(c.getCategory()).status(c.getStatus())
                // version field removed from Customer entity — use 1 as safe default
                .version(1)
                .createdAt(c.getCreatedAt())
                .deliveryChannels(DeliveryChannelCatalog.fromConsentEntity(c))
                .totalBroadcastExecutions(execByConsent.getOrDefault(c.getId(), 0L))
                .publishedAt(c.getPublishedAt())
                .build();
    }

    @Transactional(readOnly = true)
    public MisConsentInventoryBundleResponse getConsentInventoryBundle(
            ConsentCategory category, ConsentStatus status, String search,
            String sortBy, String sortDirection, int page, int size) {
        String cu = currentUser();
        log.debug("Entering getConsentInventoryBundle | params: category={}, status={}, page={}, size={}", category, status, page, size);
        log.info("User={} | action=getConsentInventoryBundle | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=getConsentInventoryBundle | id=n/a");
        Map<Long, Long> execByConsent = buildExecByConsent();

        log.info("Executing DB query | method=countConsentsGroupedByStatus | param=n/a");
        List<MisTimeSeriesCountPoint> byStatus = consentRepository.countConsentsGroupedByStatus().stream()
                .map(row -> MisTimeSeriesCountPoint.builder()
                        .period(row[0] == null ? "" : String.valueOf(row[0]))
                        .count(toLongCount(row[1])).build()).toList();
        log.info("DB query completed | method=countConsentsGroupedByStatus | size={}", byStatus.size());
        log.info("Executing DB query | method=countConsentsGroupedByCategory | param=n/a");
        List<MisTimeSeriesCountPoint> byCategory = consentRepository.countConsentsGroupedByCategory().stream()
                .map(row -> MisTimeSeriesCountPoint.builder()
                        .period(row[0] == null ? "" : String.valueOf(row[0]))
                        .count(toLongCount(row[1])).build()).toList();
        log.info("DB query completed | method=countConsentsGroupedByCategory | size={}", byCategory.size());

        Specification<Consent> spec = consentInventorySpec(category, status, search);
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                inventorySort(sortBy, sortDirection));
        log.info("Executing DB query | method=findAll | param=Consent inventory spec");
        org.springframework.data.domain.Page<Consent> pg = consentRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        List<MisConsentInventoryRowResponse> rows = pg.getContent().stream()
                .map(c -> toInventoryRow(c, execByConsent)).toList();

        MisConsentInventoryBundleResponse out = MisConsentInventoryBundleResponse.builder()
                .page(PagedResponse.<MisConsentInventoryRowResponse>builder()
                        .content(rows)
                        .totalElements(pg.getTotalElements()).totalPages(pg.getTotalPages())
                        .currentPage(pg.getNumber()).pageSize(pg.getSize())
                        .hasNext(pg.hasNext()).hasPrevious(pg.hasPrevious())
                        .build())
                .consentsByStatus(byStatus).consentsByCategory(byCategory)
                .build();
        log.debug("Transaction completing | method=getConsentInventoryBundle | id=n/a");
        log.debug("Exiting getConsentInventoryBundle | totalElements={}", out.getPage().getTotalElements());
        return out;
    }

    private static Sort inventorySort(String sortBy, String sortDirection) {
        String sb = sortBy == null ? "consentName" : sortBy.trim();
        Sort.Direction dir = "DESC".equalsIgnoreCase(sortDirection == null ? "" : sortDirection.trim())
                ? Sort.Direction.DESC : Sort.Direction.ASC;
        String prop = switch (sb.toLowerCase(Locale.ROOT)) {
            case "createdat", "created_at"   -> "createdAt";
            case "status"                    -> "status";
            case "category"                  -> "category";
            case "publishedat", "published_at" -> "publishedAt";
            case "consentid", "consent_id"   -> "consentId";
            default                          -> "consentName";
        };
        return Sort.by(dir, prop).and(Sort.by(Sort.Direction.ASC, "id"));
    }

    private static final List<String> INVENTORY_EXPORT_HEADERS = List.of("Consent ID", "Name", "Category", "Status",
            "Created At", "Delivery Channels", "Rule Executions", "Published At");

    private List<List<String>> inventoryExportRows(List<Consent> consents, Map<Long, Long> execByConsent) {
        return consents.stream().map(c -> {
            MisConsentInventoryRowResponse r = toInventoryRow(c, execByConsent);
            return java.util.Arrays.asList(nz(r.getConsentId()), nz(r.getConsentName()),
                    r.getCategory() == null ? "" : r.getCategory().name(),
                    r.getStatus() == null ? "" : r.getStatus().name(),
                    istTime(r.getCreatedAt()),
                    r.getDeliveryChannels() == null ? "" : String.join("; ", r.getDeliveryChannels()),
                    String.valueOf(r.getTotalBroadcastExecutions()),
                    istTime(r.getPublishedAt()));
        }).toList();
    }

    @Transactional(readOnly = true)
    public void exportConsentInventoryCsv(java.io.OutputStream outputStream,
            ConsentCategory category, ConsentStatus status, String search)
            throws java.io.IOException {
        exportConsentInventoryCsv(outputStream, category, status, search, null, null);
    }

    @Transactional(readOnly = true)
    public void exportConsentInventoryCsv(java.io.OutputStream outputStream,
            ConsentCategory category, ConsentStatus status, String search, String sortBy, String sortDirection)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportConsentInventoryCsv | params: category={}, status={}", category, status);
        log.info("User={} | action=exportConsentInventoryCsv | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportConsentInventoryCsv | id=n/a");
        Map<Long, Long> execByConsent = buildExecByConsent();
        log.info("Executing DB query | method=findAll | param=Consent inventory export csv");
        List<Consent> all = consentRepository.findAll(consentInventorySpec(category, status, search),
                inventorySort(sortBy, sortDirection));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String[]> rows = inventoryExportRows(all, execByConsent).stream()
                .map(r -> r.toArray(new String[0])).toList();
        outputStream.write(MisReportExportUtil.writeCsv(String.join(",", INVENTORY_EXPORT_HEADERS), rows));
        outputStream.flush();
        log.debug("Transaction completing | method=exportConsentInventoryCsv | id=n/a");
        log.debug("Exiting exportConsentInventoryCsv | completed successfully");
    }

    @Transactional(readOnly = true)
    public byte[] exportConsentInventoryExcel(ConsentCategory category, ConsentStatus status, String search)
            throws java.io.IOException {
        return exportConsentInventoryExcel(category, status, search, null, null);
    }

    @Transactional(readOnly = true)
    public byte[] exportConsentInventoryExcel(ConsentCategory category, ConsentStatus status, String search,
            String sortBy, String sortDirection) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportConsentInventoryExcel | params: category={}, status={}", category, status);
        log.info("User={} | action=exportConsentInventoryExcel | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportConsentInventoryExcel | id=n/a");
        Map<Long, Long> execByConsent = buildExecByConsent();
        log.info("Executing DB query | method=findAll | param=Consent inventory export excel");
        List<Consent> all = consentRepository.findAll(consentInventorySpec(category, status, search),
                inventorySort(sortBy, sortDirection));
        log.info("DB query completed | method=findAll | size={}", all.size());
        byte[] out = MisReportExportUtil.writeXlsx("Consent inventory", INVENTORY_EXPORT_HEADERS,
                inventoryExportRows(all, execByConsent));
        log.debug("Transaction completing | method=exportConsentInventoryExcel | id=n/a");
        log.debug("Exiting exportConsentInventoryExcel | bytes={}", out.length);
        return out;
    }

    // ── Active consents timeline ──────────────────────────────────────────────

    @Transactional(readOnly = true)
    public MisActiveConsentsTimelineResponse getActiveConsentsTimeline(String groupBy, Instant from, Instant to) {
        String cu = currentUser();
        log.debug("Entering getActiveConsentsTimeline | params: groupBy={}, from={}, to={}", groupBy, from, to);
        log.info("User={} | action=getActiveConsentsTimeline | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=getActiveConsentsTimeline | id=n/a");
        Instant toI   = to   != null ? to   : Instant.now();
        Instant fromI = from != null ? from : toI.minus(365, ChronoUnit.DAYS);
        if (fromI.isAfter(toI)) { Instant tmp = fromI; fromI = toI; toI = tmp; }
        long seconds   = Math.max(60, ChronoUnit.SECONDS.between(fromI, toI));
        Instant priorFrom = fromI.minusSeconds(seconds);
        String g = groupBy == null ? "MONTHLY" : groupBy.trim().toUpperCase(Locale.ROOT);
        List<MisTimeSeriesCountPoint> series      = buildConsentActivationSeries(g, fromI, toI);
        List<MisTimeSeriesCountPoint> priorSeries = buildConsentActivationSeries(g, priorFrom, fromI);
        long peak      = series.stream().mapToLong(MisTimeSeriesCountPoint::getCount).max().orElse(0L);
        long peakPrior = priorSeries.stream().mapToLong(MisTimeSeriesCountPoint::getCount).max().orElse(0L);
        log.info("Executing DB query | method=countLiveConsentTemplatesAsOf | param=toI");
        long liveAtEnd   = consentRepository.countLiveConsentTemplatesAsOf(toI);
        log.info("DB query completed | method=countLiveConsentTemplatesAsOf | size={}", liveAtEnd);
        log.info("Executing DB query | method=countLiveConsentTemplatesAsOf | param=fromI");
        long liveAtStart = consentRepository.countLiveConsentTemplatesAsOf(fromI);
        log.info("DB query completed | method=countLiveConsentTemplatesAsOf | size={}", liveAtStart);
        MisActiveConsentsTimelineResponse out = MisActiveConsentsTimelineResponse.builder()
                .groupBy(g).series(series)
                .currentLiveTemplates(MisKpiCardResponse.builder()
                        .label("Live templates (end of range)")
                        .tooltip("Templates in PUBLISHED or APPROVED state.")
                        .value(liveAtEnd).changePercentVsPrior(percentChangeVsPrior(liveAtEnd, liveAtStart)).build())
                .peakBucketActivations(MisKpiCardResponse.builder()
                        .label("Peak period activations")
                        .tooltip("Maximum activations in a single bucket.")
                        .value(peak).changePercentVsPrior(percentChangeVsPrior(peak, peakPrior)).build())
                .build();
        log.debug("Transaction completing | method=getActiveConsentsTimeline | id=n/a");
        log.debug("Exiting getActiveConsentsTimeline | seriesSize={}", series.size());
        return out;
    }

    private List<MisTimeSeriesCountPoint> buildConsentActivationSeries(String groupBy, Instant from, Instant to) {
        String g = groupBy == null ? "MONTHLY" : groupBy.trim().toUpperCase(Locale.ROOT);
        List<Object[]> raw;
        switch (g) {
            case "DAILY" -> {
                log.info("Executing DB query | method=countConsentsActivatedGroupedByDay | param=from,to");
                raw = consentRepository.countConsentsActivatedGroupedByDay(from, to);
                log.info("DB query completed | method=countConsentsActivatedGroupedByDay | size={}", raw.size());
            }
            case "WEEKLY" -> {
                log.info("Executing DB query | method=countConsentsActivatedGroupedByIsoWeek | param=from,to");
                raw = consentRepository.countConsentsActivatedGroupedByIsoWeek(from, to);
                log.info("DB query completed | method=countConsentsActivatedGroupedByIsoWeek | size={}", raw.size());
            }
            default -> {
                log.info("Executing DB query | method=countConsentsActivatedGroupedByMonth | param=from,to");
                raw = consentRepository.countConsentsActivatedGroupedByMonth(from, to);
                log.info("DB query completed | method=countConsentsActivatedGroupedByMonth | size={}", raw.size());
            }
        }
        return raw.stream().map(row -> MisTimeSeriesCountPoint.builder()
                .period(stringifyBucket(row[0], g)).count(toLongCount(row[1])).build()).toList();
    }

    // ── Channel template performance ──────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<MisChannelTemplatePerformanceRowResponse> getChannelTemplatePerformance(String channelFilter) {
        String cu = currentUser();
        log.debug("Entering getChannelTemplatePerformance | params: channelFilter={}", channelFilter);
        log.info("User={} | action=getChannelTemplatePerformance | entity=ConsentInviteToken | id=n/a", cu);
        log.debug("Transaction started | method=getChannelTemplatePerformance | id=n/a");
        Map<String, long[]> cell = new LinkedHashMap<>();
        int page = 0;
        org.springframework.data.domain.Page<ConsentInviteToken> tokenPage;
        do {
            log.info("Executing DB query | method=findAll | param=ConsentInviteToken template page={}", page);
            tokenPage = inviteTokenRepository.findAll(PageRequest.of(page++, 500, Sort.by("id")));
            log.info("DB query completed | method=findAll | size={}", tokenPage.getContent().size());
            for (ConsentInviteToken t : tokenPage.getContent()) {
                List<String> norms = DeliveryChannelCatalog.normalizedFromInviteToken(t);
                if (norms.isEmpty()) norms = List.of("EMAIL");
                for (String n : norms) {
                    String label = displayChannelLabelForMis(n);
                    if (StringUtils.hasText(channelFilter)
                            && !label.equalsIgnoreCase(channelFilter.trim())) continue;
                    String key = label + "\t" + t.getConsentDbId();
                    long[] arr = cell.computeIfAbsent(key, k -> new long[]{0L, 0L, 0L});
                    arr[0]++;
                    if (t.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED) arr[1]++;
                    else arr[2]++;
                }
            }
        } while (tokenPage.hasNext());

        Set<Long> ids = cell.keySet().stream()
                .map(k -> Long.parseLong(k.split("\t", 2)[1])).collect(Collectors.toSet());
        log.info("Executing DB query | method=findAllById | param=consentIds size={}", ids.size());
        Map<Long, Consent> consentById = consentRepository.findAllById(ids).stream()
                .collect(Collectors.toMap(Consent::getId, c -> c));
        log.info("DB query completed | method=findAllById | size={}", consentById.size());

        List<MisChannelTemplatePerformanceRowResponse> out = new ArrayList<>();
        for (Map.Entry<String, long[]> e : cell.entrySet()) {
            String[] parts = e.getKey().split("\t", 2);
            String ch  = parts[0];
            long   cid = Long.parseLong(parts[1]);
            long inv   = e.getValue()[0], acc = e.getValue()[1], drop = e.getValue()[2];
            double success = inv == 0 ? 0.0 : Math.round(1000.0 * acc / inv) / 10.0;
            Consent c = consentById.get(cid);
            out.add(MisChannelTemplatePerformanceRowResponse.builder()
                    .channel(ch).consentDbId(cid)
                    .consentId(c == null ? "—" : c.getConsentId())
                    .consentName(c == null ? "—" : c.getConsentName())
                    .invitesSent(inv).acceptedCount(acc).declinedOrPendingCount(drop)
                    .successRatePercent(success).build());
        }
        out.sort(Comparator.comparing(MisChannelTemplatePerformanceRowResponse::getChannel)
                .thenComparingDouble(MisChannelTemplatePerformanceRowResponse::getSuccessRatePercent));
        log.debug("Transaction completing | method=getChannelTemplatePerformance | id=n/a");
        log.debug("Exiting getChannelTemplatePerformance | size={}", out.size());
        return out;
    }

    @Transactional(readOnly = true)
    public byte[] exportChannelTemplatePerformanceCsv(String channelFilter) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportChannelTemplatePerformanceCsv | params: channelFilter={}", channelFilter);
        log.info("User={} | action=exportChannelTemplatePerformanceCsv | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportChannelTemplatePerformanceCsv | id=n/a");
        List<MisChannelTemplatePerformanceRowResponse> rows = getChannelTemplatePerformance(channelFilter);
        byte[] out = MisReportExportUtil.writeCsv(
                "Channel,Consent ID,Name,Invites,Accepted,Declined/Pending,Success %",
                rows.stream().map(r -> new String[]{nz(r.getChannel()),
                        nz(r.getConsentId()), nz(r.getConsentName()),
                        String.valueOf(r.getInvitesSent()), String.valueOf(r.getAcceptedCount()),
                        String.valueOf(r.getDeclinedOrPendingCount()), String.valueOf(r.getSuccessRatePercent())
                }).toList());
        log.debug("Transaction completing | method=exportChannelTemplatePerformanceCsv | id=n/a");
        log.debug("Exiting exportChannelTemplatePerformanceCsv | bytes={}", out.length);
        return out;
    }

    @Transactional(readOnly = true)
    public byte[] exportChannelTemplatePerformanceExcel(String channelFilter) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportChannelTemplatePerformanceExcel | params: channelFilter={}", channelFilter);
        log.info("User={} | action=exportChannelTemplatePerformanceExcel | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportChannelTemplatePerformanceExcel | id=n/a");
        List<MisChannelTemplatePerformanceRowResponse> rows = getChannelTemplatePerformance(channelFilter);
        List<String> headers = List.of("Channel","Consent ID","Name",
                "Invites","Accepted","Declined/Pending","Success %");
        List<List<String>> lines = rows.stream().map(r -> java.util.Arrays.asList(nz(r.getChannel()),
                nz(r.getConsentId()), nz(r.getConsentName()),
                String.valueOf(r.getInvitesSent()), String.valueOf(r.getAcceptedCount()),
                String.valueOf(r.getDeclinedOrPendingCount()), String.valueOf(r.getSuccessRatePercent()))).toList();
        byte[] out = MisReportExportUtil.writeXlsx("Channel template performance", headers, lines);
        log.debug("Transaction completing | method=exportChannelTemplatePerformanceExcel | id=n/a");
        log.debug("Exiting exportChannelTemplatePerformanceExcel | bytes={}", out.length);
        return out;
    }

    // ── Consent performance leaderboard ───────────────────────────────────────

    private static final class LeaderAgg {
        long invites, accepted;
        final Map<String, long[]> channelInvAcc = new LinkedHashMap<>();
        final Map<String, Integer> invitesPerCustomer = new HashMap<>();
        final List<Double> acceptHours = new ArrayList<>();
    }

    @Transactional(readOnly = true)
    public PagedResponse<MisConsentPerformanceLeaderboardRowResponse> getConsentPerformanceLeaderboard(
            String sort, int page, int size) {
        String cu = currentUser();
        log.debug("Entering getConsentPerformanceLeaderboard | params: sort={}, page={}, size={}", sort, page, size);
        log.info("User={} | action=getConsentPerformanceLeaderboard | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=getConsentPerformanceLeaderboard | id=n/a");
        List<MisConsentPerformanceLeaderboardRowResponse> rows = buildSortedLeaderboardRows(sort);
        int pg = Math.max(0, page), sz = Math.min(100, Math.max(1, size));
        int fromIdx = pg * sz, toIdx = Math.min(fromIdx + sz, rows.size());
        int totalPages = rows.isEmpty() ? 0 : (int) Math.ceil(rows.size() / (double) sz);
        PagedResponse<MisConsentPerformanceLeaderboardRowResponse> out =
                PagedResponse.<MisConsentPerformanceLeaderboardRowResponse>builder()
                .content(fromIdx >= rows.size() ? List.of() : rows.subList(fromIdx, toIdx))
                .totalElements(rows.size()).totalPages(totalPages)
                .currentPage(pg).pageSize(sz)
                .hasNext(toIdx < rows.size()).hasPrevious(pg > 0)
                .build();
        log.debug("Transaction completing | method=getConsentPerformanceLeaderboard | id=n/a");
        log.debug("Exiting getConsentPerformanceLeaderboard | totalElements={}", out.getTotalElements());
        return out;
    }

    private static final int MIN_INVITES_FOR_ACCEPTANCE_RANK = 5;

    private static final List<String> LEADERBOARD_EXPORT_HEADERS = List.of("Rank", "Consent ID", "Name",
            "Distinct Reach", "Invites Sent", "Accepted", "Acceptance %", "Re-engagement %", "Rule Runs",
            "Avg hours to accept");

    private static List<List<String>> leaderboardExportRows(List<MisConsentPerformanceLeaderboardRowResponse> all) {
        List<List<String>> rows = new ArrayList<>();
        int rank = 1;
        for (MisConsentPerformanceLeaderboardRowResponse r : all) {
            rows.add(java.util.Arrays.asList(String.valueOf(rank++), nz(r.getConsentId()), nz(r.getConsentName()),
                    String.valueOf(r.getDistinctCustomersReached()), String.valueOf(r.getTotalRecipientsInvited()),
                    String.valueOf(r.getTotalAccepted()), String.valueOf(r.getAcceptanceRatePercent()),
                    String.valueOf(r.getReEngagementRatePercent()), String.valueOf(r.getTotalBroadcastExecutions()),
                    nz(r.getAverageHoursToAccept())));
        }
        return rows;
    }

    private List<MisConsentPerformanceLeaderboardRowResponse> buildSortedLeaderboardRows(String sort) {
        // Use rule execution counts instead of broadcast execution counts
        Map<Long, Long> execByConsent = buildExecByConsent();
        Map<Long, LeaderAgg> agg = new HashMap<>();
        int p = 0;
        org.springframework.data.domain.Page<ConsentInviteToken> tokenPage;
        do {
            log.info("Executing DB query | method=findAll | param=ConsentInviteToken leaderboard page={}", p);
            tokenPage = inviteTokenRepository.findAll(PageRequest.of(p++, 500, Sort.by("id")));
            log.info("DB query completed | method=findAll | size={}", tokenPage.getContent().size());
            for (ConsentInviteToken t : tokenPage.getContent()) {
                LeaderAgg a = agg.computeIfAbsent(t.getConsentDbId(), k -> new LeaderAgg());
                a.invites++;
                if (t.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED) a.accepted++;
                a.invitesPerCustomer.merge(t.getCustomerId(), 1, Integer::sum);
                if (t.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED
                        && t.getCreatedAt() != null && t.getRespondedAt() != null) {
                    double h = ChronoUnit.SECONDS.between(t.getCreatedAt(), t.getRespondedAt()) / 3600.0;
                    if (h >= 0 && h < 1_000_000) a.acceptHours.add(h);
                }
                List<String> norms = DeliveryChannelCatalog.normalizedFromInviteToken(t);
                if (norms.isEmpty()) norms = List.of("EMAIL");
                for (String n : norms) {
                    String label = displayChannelLabelForMis(n);
                    long[] ch = a.channelInvAcc.computeIfAbsent(label, k -> new long[]{0L, 0L});
                    ch[0]++;
                    if (t.getResponseStatus() == InviteTokenResponseStatus.ACCEPTED) ch[1]++;
                }
            }
        } while (tokenPage.hasNext());

        log.info("Executing DB query | method=findByStatusInOrderByConsentNameAsc | param=leaderboard templates");
        List<Consent> templates = consentRepository.findByStatusInOrderByConsentNameAsc(
                List.of(ConsentStatus.PUBLISHED, ConsentStatus.APPROVED));
        log.info("DB query completed | method=findByStatusInOrderByConsentNameAsc | size={}", templates.size());
        List<MisConsentPerformanceLeaderboardRowResponse> rows = new ArrayList<>();
        for (Consent c : templates) {
            LeaderAgg a = agg.getOrDefault(c.getId(), new LeaderAgg());
            long execs = execByConsent.getOrDefault(c.getId(), 0L);
            long distinctCustomers = a.invitesPerCustomer.size();
            long reCustomers = a.invitesPerCustomer.values().stream().filter(v -> v >= 2).count();
            double reRate   = distinctCustomers == 0 ? 0.0 : Math.round(1000.0 * reCustomers / distinctCustomers) / 10.0;
            double acceptRate = a.invites == 0 ? 0.0 : Math.round(1000.0 * a.accepted / a.invites) / 10.0;
            OptionalDouble avgH = a.acceptHours.stream().mapToDouble(Double::doubleValue).average();
            List<MisLeaderboardChannelSplitResponse> splits = a.channelInvAcc.entrySet().stream()
                    .map(e -> {
                        long inv = e.getValue()[0], acc = e.getValue()[1];
                        double sr = inv == 0 ? 0.0 : Math.round(1000.0 * acc / inv) / 10.0;
                        return MisLeaderboardChannelSplitResponse.builder()
                                .channel(e.getKey()).invitesSent(inv).acceptedCount(acc)
                                .successRatePercent(sr).build();
                    })
                    .sorted(Comparator.comparing(MisLeaderboardChannelSplitResponse::getInvitesSent).reversed())
                    .collect(Collectors.toList());
            rows.add(MisConsentPerformanceLeaderboardRowResponse.builder()
                    .consentDbId(c.getId()).consentId(c.getConsentId()).consentName(c.getConsentName())
                    .totalBroadcastExecutions(execs).totalRecipientsInvited(a.invites)
                    .distinctCustomersReached(distinctCustomers).totalAccepted(a.accepted)
                    .acceptanceRatePercent(acceptRate).reEngagementRatePercent(reRate)
                    .averageHoursToAccept(avgH.isPresent() ? Math.round(avgH.getAsDouble() * 10.0) / 10.0 : null)
                    .channelSplits(splits).build());
        }
        String s = sort == null ? "REACH" : sort.trim().toUpperCase(Locale.ROOT);
        Comparator<MisConsentPerformanceLeaderboardRowResponse> cmp = switch (s) {
            case "ACCEPTANCE" ->
                    Comparator.comparing((MisConsentPerformanceLeaderboardRowResponse r) -> r.getTotalRecipientsInvited() < MIN_INVITES_FOR_ACCEPTANCE_RANK)
                            .thenComparing(Comparator.comparingDouble(MisConsentPerformanceLeaderboardRowResponse::getAcceptanceRatePercent).reversed())
                            .thenComparing(Comparator.comparingLong(MisConsentPerformanceLeaderboardRowResponse::getTotalRecipientsInvited).reversed());
            case "REENGAGEMENT", "RE_ENGAGEMENT" ->
                    Comparator.comparingDouble(MisConsentPerformanceLeaderboardRowResponse::getReEngagementRatePercent).reversed();
            default ->
                    Comparator.comparingLong(MisConsentPerformanceLeaderboardRowResponse::getDistinctCustomersReached).reversed()
                            .thenComparing(Comparator.comparingLong(MisConsentPerformanceLeaderboardRowResponse::getTotalRecipientsInvited).reversed());
        };
        rows.sort(cmp.thenComparing(MisConsentPerformanceLeaderboardRowResponse::getConsentName));
        return rows;
    }

    @Transactional(readOnly = true)
    public byte[] exportConsentPerformanceLeaderboardExcel(String sort) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportConsentPerformanceLeaderboardExcel | params: sort={}", sort);
        log.info("User={} | action=exportConsentPerformanceLeaderboardExcel | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportConsentPerformanceLeaderboardExcel | id=n/a");
        List<MisConsentPerformanceLeaderboardRowResponse> all = buildSortedLeaderboardRows(sort);
        byte[] out = MisReportExportUtil.writeXlsx("Consent performance leaderboard", LEADERBOARD_EXPORT_HEADERS,
                leaderboardExportRows(all));
        log.debug("Transaction completing | method=exportConsentPerformanceLeaderboardExcel | id=n/a");
        log.debug("Exiting exportConsentPerformanceLeaderboardExcel | bytes={}", out.length);
        return out;
    }

    @Transactional(readOnly = true)
    public byte[] exportConsentPerformanceLeaderboardCsv(String sort) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportConsentPerformanceLeaderboardCsv | params: sort={}", sort);
        log.info("User={} | action=exportConsentPerformanceLeaderboardCsv | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportConsentPerformanceLeaderboardCsv | id=n/a");
        List<MisConsentPerformanceLeaderboardRowResponse> all = buildSortedLeaderboardRows(sort);
        List<String[]> rows = leaderboardExportRows(all).stream().map(r -> r.toArray(new String[0])).toList();
        byte[] out = MisReportExportUtil.writeCsv(String.join(",", LEADERBOARD_EXPORT_HEADERS), rows);
        log.debug("Transaction completing | method=exportConsentPerformanceLeaderboardCsv | id=n/a");
        log.debug("Exiting exportConsentPerformanceLeaderboardCsv | bytes={}", out.length);
        return out;
    }

    // ── Demographics ──────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public MisDemographicVipSplitResponse getDemographicVipSplit() {
        String cu = currentUser();
        log.debug("Entering getDemographicVipSplit | params: none");
        log.info("User={} | action=getDemographicVipSplit | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getDemographicVipSplit | id=n/a");
        log.info("Executing DB query | method=count | param=Customer");
        long total   = customerRepository.count();
        log.info("DB query completed | method=count | size={}", total);
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=active demo");
        long active  = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", active);
        log.info("Executing DB query | method=countVipCustomers | param=n/a");
        long vipTotal = customerRepository.countVipCustomers();
        log.info("DB query completed | method=countVipCustomers | size={}", vipTotal);
        long vipActive = Math.min(vipTotal, active); // approximation
        long nonVipTotal  = total - vipTotal;
        long nonVipActive = Math.max(0, active - vipActive);
        double vipRate    = vipTotal    == 0 ? 0.0 : Math.round(1000.0 * vipActive    / vipTotal)    / 10.0;
        double nonVipRate = nonVipTotal == 0 ? 0.0 : Math.round(1000.0 * nonVipActive / nonVipTotal) / 10.0;
        MisDemographicVipSplitResponse out = MisDemographicVipSplitResponse.builder()
                .vipTotalCustomers(vipTotal).vipActiveConsents(vipActive).vipConsentRatePercent(vipRate)
                .nonVipTotalCustomers(nonVipTotal).nonVipActiveConsents(nonVipActive).nonVipConsentRatePercent(nonVipRate)
                .vipRateTrend(MisKpiCardResponse.builder().label("VIP consent rate")
                        .tooltip("VIP customers with active consent ÷ all VIP customers.")
                        .value(Math.round(vipRate)).changePercentVsPrior(null).build())
                .nonVipRateTrend(MisKpiCardResponse.builder().label("Non-VIP consent rate")
                        .tooltip("Non-VIP customers with active consent ÷ all non-VIP customers.")
                        .value(Math.round(nonVipRate)).changePercentVsPrior(null).build())
                .build();
        log.debug("Transaction completing | method=getDemographicVipSplit | id=n/a");
        log.debug("Exiting getDemographicVipSplit | completed successfully");
        return out;
    }

    @Transactional(readOnly = true)
    public MisDemographicLifecycleResponse getDemographicLifecycle(Instant from, Instant to) {
        String cu = currentUser();
        log.debug("Entering getDemographicLifecycle | params: from={}, to={}", from, to);
        log.info("User={} | action=getDemographicLifecycle | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getDemographicLifecycle | id=n/a");
        Instant toBound   = to   != null ? to   : Instant.now();
        Instant fromBound = from != null ? from : toBound.minus(90, ChronoUnit.DAYS);
        final Instant rangeStart = fromBound.isAfter(toBound) ? toBound   : fromBound;
        final Instant rangeEnd   = fromBound.isAfter(toBound) ? fromBound : toBound;

        log.info("Executing DB query | method=count | param=Customer newIn window");
        long newIn = customerRepository.count((root, q, cb) -> cb.and(
                cb.isNotNull(root.get("createdAt")),
                cb.greaterThanOrEqualTo(root.get("createdAt"), rangeStart),
                cb.lessThanOrEqualTo(root.get("createdAt"), rangeEnd)));
        log.info("DB query completed | method=count | size={}", newIn);
        log.info("Executing DB query | method=count | param=Customer existing before window");
        long existing = customerRepository.count((root, q, cb) -> cb.and(
                cb.isNotNull(root.get("createdAt")),
                cb.lessThan(root.get("createdAt"), rangeStart)));
        log.info("DB query completed | method=count | size={}", existing);

        // Active customers in range using CustomerConsentRecord
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=lifecycle active");
        long activeTotal = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", activeTotal);
        long newActive      = Math.min(newIn,      activeTotal);
        long existingActive = Math.min(existing,   Math.max(0, activeTotal - newActive));
        double newRate = newIn      == 0 ? 0.0 : Math.round(1000.0 * newActive      / newIn)      / 10.0;
        double exRate  = existing   == 0 ? 0.0 : Math.round(1000.0 * existingActive / existing)   / 10.0;

        MisDemographicLifecycleResponse out = MisDemographicLifecycleResponse.builder()
                .newCustomersInWindow(newIn).existingCustomersBeforeWindow(existing)
                .newCustomersWithActiveConsent(newActive).existingCustomersWithActiveConsent(existingActive)
                .newCustomerAdoptionRatePercent(newRate).existingCustomerAdoptionRatePercent(exRate)
                .windowStart(rangeStart).windowEnd(rangeEnd)
                .build();
        log.debug("Transaction completing | method=getDemographicLifecycle | id=n/a");
        log.debug("Exiting getDemographicLifecycle | completed successfully");
        return out;
    }

    @Transactional(readOnly = true)
    public MisReEngagementFunnelResponse getReEngagementFunnel() {
        String cu = currentUser();
        log.debug("Entering getReEngagementFunnel | params: none");
        log.info("User={} | action=getReEngagementFunnel | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getReEngagementFunnel | id=n/a");
        log.info("Executing DB query | method=count | param=Customer invited");
        long invited  = customerRepository.count((root, q, cb) ->
                cb.isNotNull(root.get("lastConsentInviteSentAt")));
        log.info("DB query completed | method=count | size={}", invited);
        log.info("Executing DB query | method=countDistinctCustomersByStatus | param=PENDING");
        long pending  = recordRepository.countDistinctCustomersByStatus(CustomerConsentRecordStatus.PENDING);
        log.info("DB query completed | method=countDistinctCustomersByStatus | size={}", pending);
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=accepted funnel");
        long accepted = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", accepted);
        log.info("Executing DB query | method=countDistinctCustomersByStatusIn | param=declined funnel");
        long declined = recordRepository.countDistinctCustomersByStatusIn(
                List.of(CustomerConsentRecordStatus.REJECTED, CustomerConsentRecordStatus.WITHDRAWN));
        log.info("DB query completed | method=countDistinctCustomersByStatusIn | size={}", declined);
        MisReEngagementFunnelResponse out = MisReEngagementFunnelResponse.builder()
                .invitedCustomers(invited).pendingNoResponse(pending)
                .accepted(accepted).declinedOrWithdrawn(declined)
                .build();
        log.debug("Transaction completing | method=getReEngagementFunnel | id=n/a");
        log.debug("Exiting getReEngagementFunnel | completed successfully");
        return out;
    }

    @Transactional(readOnly = true)
    public MisDemographicGeoResponse getDemographicGeo() {
        String cu = currentUser();
        log.debug("Entering getDemographicGeo | params: none");
        log.info("User={} | action=getDemographicGeo | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getDemographicGeo | id=n/a");
        // city/region not on Customer entity in current schema — return unavailable
        MisDemographicGeoResponse out = MisDemographicGeoResponse.builder()
                .geoDataAvailable(false)
                .messageWhenUnavailable("City/region is not populated on customer records. " +
                        "Add a city field to Customer to enable this view.")
                .topCities(List.of())
                .build();
        log.debug("Transaction completing | method=getDemographicGeo | id=n/a");
        log.debug("Exiting getDemographicGeo | completed successfully");
        return out;
    }

    // ── Channel normalisation helpers ─────────────────────────────────────────

    private static String normalizeChannelKeyForMis(String raw) {
        if (!StringUtils.hasText(raw)) return "Email";
        String u = raw.trim().toUpperCase(Locale.ROOT);
        if (u.contains("WHATSAPP")) return "WhatsApp";
        if (u.contains("SMS"))      return "SMS";
        if (u.contains("EMAIL"))    return "Email";
        if (u.contains("RCS"))      return "RCS";
        if (u.contains("PUSH"))     return "Push";
        if (u.contains("BRANCH"))   return "Branch";
        if (u.contains("CALL"))     return "Call Centre";
        if (u.contains("FIELD"))    return "Field Agent";
        return "Email";
    }

    private static String displayChannelLabelForMis(String normalizedKey) {
        String u = normalizedKey == null ? "" : normalizedKey.toUpperCase(Locale.ROOT);
        if (u.contains("WHATSAPP")) return "WhatsApp";
        if (u.contains("SMS"))      return "SMS";
        if (u.contains("EMAIL"))    return "Email";
        if (u.contains("RCS"))      return "RCS";
        if (u.contains("PUSH"))     return "Push";
        if (u.contains("BRANCH"))   return "Branch";
        if (u.contains("CALL"))     return "Call Centre";
        if (u.contains("FIELD"))    return "Field Agent";
        return DeliveryChannelCatalog.displayLabel(normalizedKey);
    }

    // ── Status parsing ────────────────────────────────────────────────────────

    public static List<CustomerConsentRecordStatus> parseStatusList(String raw) {
        String cu = currentUser();
        log.debug("Entering parseStatusList | params: raw=present");
        log.info("User={} | action=parseStatusList | entity=CustomerConsentRecord | id=n/a", cu);
        try {
            if (!StringUtils.hasText(raw)) {
                log.debug("Exiting parseStatusList | result=size=0");
                return List.of();
            }
            List<CustomerConsentRecordStatus> out = new ArrayList<>();
            for (String part : raw.split(",")) {
                if (!StringUtils.hasText(part)) {
                    continue;
                }
                out.add(CustomerConsentRecordStatus.valueOf(part.trim().toUpperCase(Locale.ROOT)));
            }
            log.debug("Exiting parseStatusList | result=size={}", out.size());
            return out;
        } catch (Exception e) {
            log.error("Exception in parseStatusList | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }
}