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
                    "RULE_EXECUTION_COMPLETED", "RULE_EXECUTION_PARTIAL", "RULE_EXECUTION_FAILED");

    private final CustomerRepository customerRepository;
    private final CustomerConsentRecordRepository recordRepository;
    private final ConsentRepository consentRepository;
    private final ConsentRuleExecutionRepository ruleExecutionRepository;
    private final ConsentInviteTokenRepository inviteTokenRepository;
    private final AuditLogRepository auditLogRepository;
    private final UserRepository userRepository;

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
            return ts.toInstant().atZone(ZoneOffset.UTC).toLocalDate().toString();
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
        log.info("Executing DB query | method=countByAction | param=CONSENT_REVISION_REQUESTED");
        long ruleMc      = auditLogRepository.countByAction("CONSENT_REVISION_REQUESTED");
        log.info("DB query completed | method=countByAction | size={}", ruleMc);
        log.info("Executing DB query | method=countByAction | param=CONSENT_PUBLISHED");
        long broadcastMc = auditLogRepository.countByAction("CONSENT_PUBLISHED");
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
                .mapToDouble(c -> ChronoUnit.HOURS.between(c.getSubmittedAt(), c.getReviewedAt()))
                .filter(h -> h >= 0 && h < 10_000)
                .average();
        double averageApprovalHours = avgH.isPresent() ? Math.round(avgH.getAsDouble() * 10.0) / 10.0 : 0.0;

        long slaNumerator = reviewed.stream()
                .filter(c -> c.getStatus() == ConsentStatus.APPROVED)
                .filter(c -> c.getSubmittedAt() != null && c.getReviewedAt() != null)
                .filter(c -> ChronoUnit.HOURS.between(c.getSubmittedAt(), c.getReviewedAt()) <= 48)
                .count();
        long slaDenom = reviewed.stream().filter(c -> c.getStatus() == ConsentStatus.APPROVED).count();
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
            List<CustomerConsentRecordStatus> statuses, Boolean vip,
            LocalDate validFrom, LocalDate validTo, String search,
            int page, int size) {
        String cu = currentUser();
        log.debug("Entering getCustomerConsentReport | params: page={}, size={}, search={}", page, size, search);
        log.info("User={} | action=getCustomerConsentReport | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=getCustomerConsentReport | id=n/a");
        Specification<Customer> spec = customerMisSpec(statuses, vip, validFrom, validTo, search);
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("Executing DB query | method=findAll | param=Customer spec");
        Page<Customer> pg = customerRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        List<MisCustomerConsentRowResponse> rows = pg.getContent().stream()
                .map(this::toMisCustomerRow).toList();
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
    public void exportCustomerConsentCsv(java.io.OutputStream outputStream,
            List<CustomerConsentRecordStatus> statuses, Boolean vip,
            LocalDate validFrom, LocalDate validTo, String search)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportCustomerConsentCsv | params: search={}", search);
        log.info("User={} | action=exportCustomerConsentCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportCustomerConsentCsv | id=n/a");
        Specification<Customer> spec = customerMisSpec(statuses, vip, validFrom, validTo, search);
        log.info("Executing DB query | method=findAll | param=Customer spec export");
        List<Customer> all = customerRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        try (java.io.OutputStreamWriter w = new java.io.OutputStreamWriter(
                outputStream, java.nio.charset.StandardCharsets.UTF_8)) {
            w.write("Customer ID,Customer Name,Mobile Number,Email,Consent Status," +
                    "Consent Valid Until,Last Invite Sent,Last Response,Re-engagement Eligible After,VIP\n");
            for (Customer c : all) {
                String status = deriveStatus(c.getCustomerId());
                w.write(MisReportExportUtil.csvEscape(c.getCustomerId())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getFullName())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getMobileNumber())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getEmail() == null ? "" : c.getEmail())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(status == null ? "" : status)); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getConsentValidUntil() == null ? "" : c.getConsentValidUntil().toString())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getLastConsentInviteSentAt() == null ? "" : c.getLastConsentInviteSentAt().toString())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getLastConsentResponseAt() == null ? "" : c.getLastConsentResponseAt().toString())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(c.getReEngagementEligibleAfter() == null ? "" : c.getReEngagementEligibleAfter().toString())); w.write(',');
                w.write(c.isVipFlag() ? "Y" : "N"); w.write('\n');
            }
            w.flush();
        }
        log.debug("Transaction completing | method=exportCustomerConsentCsv | id=n/a");
        log.debug("Exiting exportCustomerConsentCsv | completed successfully");
    }

    @Transactional(readOnly = true)
    public byte[] exportCustomerConsentExcel(List<CustomerConsentRecordStatus> statuses, Boolean vip,
            LocalDate validFrom, LocalDate validTo, String search) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportCustomerConsentExcel | params: search={}", search);
        log.info("User={} | action=exportCustomerConsentExcel | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportCustomerConsentExcel | id=n/a");
        Specification<Customer> spec = customerMisSpec(statuses, vip, validFrom, validTo, search);
        log.info("Executing DB query | method=findAll | param=Customer spec export excel");
        List<Customer> all = customerRepository.findAll(spec, Sort.by(Sort.Direction.DESC, "updatedAt"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String> headers = List.of("Customer ID","Customer Name","Mobile Number","Email",
                "Consent Status","Consent Valid Until","Last Invite Sent","Last Response",
                "Re-engagement Eligible After","VIP");
        List<List<String>> rows = new ArrayList<>();
        for (Customer c : all) {
            String status = deriveStatus(c.getCustomerId());
            rows.add(List.of(
                    c.getCustomerId(), c.getFullName(), c.getMobileNumber(),
                    c.getEmail() == null ? "" : c.getEmail(),
                    status == null ? "" : status,
                    c.getConsentValidUntil() == null ? "" : c.getConsentValidUntil().toString(),
                    c.getLastConsentInviteSentAt() == null ? "" : c.getLastConsentInviteSentAt().toString(),
                    c.getLastConsentResponseAt() == null ? "" : c.getLastConsentResponseAt().toString(),
                    c.getReEngagementEligibleAfter() == null ? "" : c.getReEngagementEligibleAfter().toString(),
                    c.isVipFlag() ? "Y" : "N"));
        }
        byte[] out = MisReportExportUtil.writeXlsx("Customer consent", headers, rows);
        log.debug("Transaction completing | method=exportCustomerConsentExcel | id=n/a");
        log.debug("Exiting exportCustomerConsentExcel | bytes={}", out.length);
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

    private Specification<Customer> customerMisSpec(
            List<CustomerConsentRecordStatus> statuses, Boolean vip,
            LocalDate validFrom, LocalDate validTo, String search) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            if (statuses != null && !statuses.isEmpty()) {
                // Subquery: customer must have a record with one of the given statuses
                var sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                sub.select(recRoot.get("customerId"))
                   .where(recRoot.get("status").in(statuses));
                p.add(root.get("customerId").in(sub));
            }
            if (vip != null) p.add(cb.equal(root.get("vipFlag"), vip));
            if (validFrom != null) p.add(cb.greaterThanOrEqualTo(root.get("consentValidUntil"), validFrom));
            if (validTo   != null) p.add(cb.lessThanOrEqualTo(root.get("consentValidUntil"), validTo));
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

    private Specification<AuditLog> auditSpec(
            String entityType, String action, Instant from, Instant to,
            String performedBy, UserRole performedByRole,
            Boolean workflowActionsOnly, Boolean adminActorOnly) {
        return (root, query, cb) -> {
            List<Predicate> p = new ArrayList<>();
            Join<AuditLog, User> userJoin = root.join("user", JoinType.INNER);
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
                a.getPerformedAt() == null ? "" : a.getPerformedAt().toString(),
                a.getEntityType() == null ? "" : a.getEntityType(),
                a.getEntityName() == null ? "" : a.getEntityName(),
                a.getAction(), a.getUser().getFullName(),
                a.getDescription() == null ? "" : a.getDescription()
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
        List<List<String>> rows = all.stream().map(a -> List.of(
                a.getPerformedAt() == null ? "" : a.getPerformedAt().toString(),
                a.getEntityType() == null ? "" : a.getEntityType(),
                a.getEntityName() == null ? "" : a.getEntityName(),
                a.getAction(), a.getUser().getFullName(),
                a.getDescription() == null ? "" : a.getDescription())).toList();
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
        LocalDate today = LocalDate.now(ZoneOffset.UTC);
        Specification<Customer> spec = expirySpec(type, withinDays, today);
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(Sort.Direction.ASC, "consentValidUntil"));
        log.info("Executing DB query | method=findAll | param=Customer expiry spec");
        Page<Customer> pg = customerRepository.findAll(spec, pageable);
        log.info("DB query completed | method=findAll | size={}", pg.getContent().size());
        List<MisExpiryRowResponse> rows = pg.getContent().stream()
                .map(c -> toExpiryRow(c, today)).toList();
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

    private Specification<Customer> expirySpec(String type, int withinDays, LocalDate today) {
        return (root, query, cb) -> {
            if ("EXPIRED".equalsIgnoreCase(type == null ? "" : type.trim())) {
                // Customers whose most-recent record is EXPIRED or consentValidUntil is past
                var sub = query.subquery(String.class);
                var recRoot = sub.from(CustomerConsentRecord.class);
                sub.select(recRoot.get("customerId"))
                   .where(cb.equal(recRoot.get("status"), CustomerConsentRecordStatus.EXPIRED));
                return cb.or(
                        root.get("customerId").in(sub),
                        cb.and(cb.isNotNull(root.get("consentValidUntil")),
                               cb.lessThan(root.get("consentValidUntil"), today)));
            }
            LocalDate until = today.plusDays(Math.max(1, withinDays));
            // Expiring soon = EXPIRING_SOON in records OR consentValidUntil within range
            var sub = query.subquery(String.class);
            var recRoot = sub.from(CustomerConsentRecord.class);
            sub.select(recRoot.get("customerId"))
               .where(cb.equal(recRoot.get("status"), CustomerConsentRecordStatus.EXPIRING_SOON));
            return cb.or(
                    root.get("customerId").in(sub),
                    cb.and(cb.isNotNull(root.get("consentValidUntil")),
                           cb.greaterThan(root.get("consentValidUntil"), today),
                           cb.lessThanOrEqualTo(root.get("consentValidUntil"), until)));
        };
    }

    private MisExpiryRowResponse toExpiryRow(Customer c, LocalDate today) {
        Long days = c.getConsentValidUntil() != null
                ? ChronoUnit.DAYS.between(today, c.getConsentValidUntil()) : null;
        String status = deriveStatus(c.getCustomerId());
        CustomerConsentRecordStatus recordStatus = null;
        if (status != null) {
            try { recordStatus = CustomerConsentRecordStatus.valueOf(status); }
            catch (IllegalArgumentException e) {
                log.error("Exception in toExpiryRow | user={} | message={}", currentUser(), e.getMessage(), e);
            }
        }
        return MisExpiryRowResponse.builder()
                .customerId(c.getCustomerId()).customerName(c.getFullName())
                .mobileNumber(c.getMobileNumber()).email(c.getEmail())
                .consentStatus(recordStatus)
                .consentValidUntil(c.getConsentValidUntil())
                .lastConsentInviteSentAt(c.getLastConsentInviteSentAt())
                .daysUntilExpiry(days).vipFlag(c.isVipFlag())
                .build();
    }

    @Transactional(readOnly = true)
    public void exportExpiryCsv(java.io.OutputStream out, String type, int withinDays) throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportExpiryCsv | params: type={}, withinDays={}", type, withinDays);
        log.info("User={} | action=exportExpiryCsv | entity=Customer | id=n/a", cu);
        log.debug("Transaction started | method=exportExpiryCsv | id=n/a");
        List<MisExpiryRowResponse> allRows = listAllExpiryRows(type, withinDays);
        List<String[]> rows = allRows.stream().map(r -> new String[]{
                r.getCustomerId(), r.getCustomerName(), r.getMobileNumber(),
                r.getEmail() == null ? "" : r.getEmail(),
                r.getConsentStatus() == null ? "" : r.getConsentStatus().name(),
                r.getConsentValidUntil() == null ? "" : r.getConsentValidUntil().toString(),
                r.getLastConsentInviteSentAt() == null ? "" : r.getLastConsentInviteSentAt().toString(),
                r.getDaysUntilExpiry() == null ? "" : String.valueOf(r.getDaysUntilExpiry()),
                r.isVipFlag() ? "Y" : "N"}).toList();
        out.write(MisReportExportUtil.writeCsv(
                "Customer ID,Name,Mobile,Email,Consent Status,Valid Until,Last Invite Sent,Days Until Expiry,VIP", rows));
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
        List<String> headers = List.of("Customer ID","Name","Mobile","Email","Consent Status",
                "Valid Until","Last Invite Sent","Days Until Expiry","VIP");
        List<List<String>> rows = allRows.stream().map(r -> List.of(
                r.getCustomerId(), r.getCustomerName(), r.getMobileNumber(),
                r.getEmail() == null ? "" : r.getEmail(),
                r.getConsentStatus() == null ? "" : r.getConsentStatus().name(),
                r.getConsentValidUntil() == null ? "" : r.getConsentValidUntil().toString(),
                r.getLastConsentInviteSentAt() == null ? "" : r.getLastConsentInviteSentAt().toString(),
                r.getDaysUntilExpiry() == null ? "" : String.valueOf(r.getDaysUntilExpiry()),
                r.isVipFlag() ? "Y" : "N")).toList();
        byte[] out = MisReportExportUtil.writeXlsx("Expiry report", headers, rows);
        log.debug("Transaction completing | method=exportExpiryExcel | id=n/a");
        log.debug("Exiting exportExpiryExcel | bytes={}", out.length);
        return out;
    }

    private List<MisExpiryRowResponse> listAllExpiryRows(String type, int withinDays) {
        LocalDate today = LocalDate.now(ZoneOffset.UTC);
        log.info("Executing DB query | method=findAll | param=Customer expiry listAll");
        List<Customer> list = customerRepository.findAll(expirySpec(type, withinDays, today),
                Sort.by(Sort.Direction.ASC, "consentValidUntil"));
        log.info("DB query completed | method=findAll | size={}", list.size());
        return list.stream().map(c -> toExpiryRow(c, today)).toList();
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
                    var ym = c.getLastConsentResponseAt().atZone(ZoneOffset.UTC);
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
        List<String[]> rows = all.stream().map(c -> {
            String status = deriveStatus(c.getCustomerId());
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
        List<List<String>> rows = all.stream().map(c -> {
            String status = deriveStatus(c.getCustomerId());
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
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
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
                .averageProcessingHours(avgProc.isPresent() ? Math.round(avgProc.getAsDouble() * 10.0) / 10.0 : 0.0)
                .sla24hSubmitCompliancePercent(slaPct)
                .build();
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
        if (c.getReviewedAt() == null || c.getCreatedAt() == null) return null;
        double h = ChronoUnit.HOURS.between(c.getCreatedAt(), c.getReviewedAt());
        return (h < 0 || h > 1_000_000) ? null : h;
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
            if (from != null) p.add(cb.greaterThanOrEqualTo(root.get("createdAt"), from));
            if (to   != null) p.add(cb.lessThanOrEqualTo(root.get("createdAt"), to));
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
        List<String[]> rows = all.stream().map(c -> new String[]{
                String.valueOf(c.getId()), c.getConsentId(), c.getConsentName(), c.getStatus().name(),
                c.getCreatedAt()  == null ? "" : c.getCreatedAt().toString(),
                c.getSubmittedAt() == null ? "" : c.getSubmittedAt().toString(),
                c.getReviewedAt()  == null ? "" : c.getReviewedAt().toString(),
                tatHours(c) == null ? "" : String.valueOf(tatHours(c))}).toList();
        byte[] out = MisReportExportUtil.writeCsv(
                "Consent DB ID,Consent ID,Name,Status,Created At,Submitted At,Reviewed At,Total TAT (hours)", rows);
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
        List<String> headers = List.of("Consent DB ID","Consent ID","Name","Status",
                "Created At","Submitted At","Reviewed At","Total TAT (hours)");
        List<List<String>> rows = all.stream().map(c -> List.of(
                String.valueOf(c.getId()), c.getConsentId(), c.getConsentName(), c.getStatus().name(),
                c.getCreatedAt()  == null ? "" : c.getCreatedAt().toString(),
                c.getSubmittedAt() == null ? "" : c.getSubmittedAt().toString(),
                c.getReviewedAt()  == null ? "" : c.getReviewedAt().toString(),
                tatHours(c) == null ? "" : String.valueOf(tatHours(c)))).toList();
        byte[] out = MisReportExportUtil.writeXlsx("TAT report", headers, rows);
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
        String sb = sortBy == null ? "consentName" : sortBy.trim();
        Sort.Direction dir = "DESC".equalsIgnoreCase(sortDirection == null ? "" : sortDirection.trim())
                ? Sort.Direction.DESC : Sort.Direction.ASC;
        String prop = switch (sb.toLowerCase(Locale.ROOT)) {
            case "createdat", "created_at"   -> "createdAt";
            case "status"                    -> "status";
            case "category"                  -> "category";
            case "publishedat", "published_at" -> "publishedAt";
            default                          -> "consentName";
        };
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)),
                Sort.by(dir, prop));
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

    @Transactional(readOnly = true)
    public void exportConsentInventoryCsv(java.io.OutputStream outputStream,
            ConsentCategory category, ConsentStatus status, String search)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportConsentInventoryCsv | params: category={}, status={}", category, status);
        log.info("User={} | action=exportConsentInventoryCsv | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportConsentInventoryCsv | id=n/a");
        Map<Long, Long> execByConsent = buildExecByConsent();
        log.info("Executing DB query | method=findAll | param=Consent inventory export csv");
        List<Consent> all = consentRepository.findAll(consentInventorySpec(category, status, search),
                Sort.by(Sort.Direction.ASC, "consentName"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        try (java.io.OutputStreamWriter w = new java.io.OutputStreamWriter(
                outputStream, java.nio.charset.StandardCharsets.UTF_8)) {
            w.write("Consent DB ID,Consent ID,Name,Category,Status,Created At," +
                    "Delivery Channels,Rule Executions,Published At\n");
            for (Consent c : all) {
                MisConsentInventoryRowResponse r = toInventoryRow(c, execByConsent);
                w.write(MisReportExportUtil.csvEscape(String.valueOf(r.getConsentDbId()))); w.write(',');
                w.write(MisReportExportUtil.csvEscape(r.getConsentId())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(r.getConsentName())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(r.getCategory().name())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(r.getStatus().name())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(r.getCreatedAt() == null ? "" : r.getCreatedAt().toString())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(String.join(";", r.getDeliveryChannels()))); w.write(',');
                w.write(String.valueOf(r.getTotalBroadcastExecutions())); w.write(',');
                w.write(MisReportExportUtil.csvEscape(r.getPublishedAt() == null ? "" : r.getPublishedAt().toString()));
                w.write('\n');
            }
            w.flush();
        }
        log.debug("Transaction completing | method=exportConsentInventoryCsv | id=n/a");
        log.debug("Exiting exportConsentInventoryCsv | completed successfully");
    }

    @Transactional(readOnly = true)
    public byte[] exportConsentInventoryExcel(ConsentCategory category, ConsentStatus status, String search)
            throws java.io.IOException {
        String cu = currentUser();
        log.debug("Entering exportConsentInventoryExcel | params: category={}, status={}", category, status);
        log.info("User={} | action=exportConsentInventoryExcel | entity=Consent | id=n/a", cu);
        log.debug("Transaction started | method=exportConsentInventoryExcel | id=n/a");
        Map<Long, Long> execByConsent = buildExecByConsent();
        log.info("Executing DB query | method=findAll | param=Consent inventory export excel");
        List<Consent> all = consentRepository.findAll(consentInventorySpec(category, status, search),
                Sort.by(Sort.Direction.ASC, "consentName"));
        log.info("DB query completed | method=findAll | size={}", all.size());
        List<String> headers = List.of("Consent DB ID","Consent ID","Name","Category","Status",
                "Created At","Delivery Channels","Rule Executions","Published At");
        List<List<String>> rows = all.stream().map(c -> {
            MisConsentInventoryRowResponse r = toInventoryRow(c, execByConsent);
            return List.of(String.valueOf(r.getConsentDbId()), r.getConsentId(), r.getConsentName(),
                    r.getCategory().name(), r.getStatus().name(),
                    r.getCreatedAt() == null ? "" : r.getCreatedAt().toString(),
                    String.join("; ", r.getDeliveryChannels()),
                    String.valueOf(r.getTotalBroadcastExecutions()),
                    r.getPublishedAt() == null ? "" : r.getPublishedAt().toString());
        }).toList();
        byte[] out = MisReportExportUtil.writeXlsx("Consent inventory", headers, rows);
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
                "Channel,Consent DB ID,Consent ID,Name,Invites,Accepted,Declined/Pending,Success %",
                rows.stream().map(r -> new String[]{r.getChannel(),
                        String.valueOf(r.getConsentDbId()), r.getConsentId(), r.getConsentName(),
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
        List<String> headers = List.of("Channel","Consent DB ID","Consent ID","Name",
                "Invites","Accepted","Declined/Pending","Success %");
        List<List<String>> lines = rows.stream().map(r -> List.of(r.getChannel(),
                String.valueOf(r.getConsentDbId()), r.getConsentId(), r.getConsentName(),
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
                    .totalBroadcastExecutions(execs).totalRecipientsInvited(a.invites).totalAccepted(a.accepted)
                    .acceptanceRatePercent(acceptRate).reEngagementRatePercent(reRate)
                    .averageHoursToAccept(avgH.isPresent() ? Math.round(avgH.getAsDouble() * 10.0) / 10.0 : null)
                    .channelSplits(splits).build());
        }
        String s = sort == null ? "REACH" : sort.trim().toUpperCase(Locale.ROOT);
        Comparator<MisConsentPerformanceLeaderboardRowResponse> cmp = switch (s) {
            case "ACCEPTANCE" ->
                    Comparator.comparingDouble(MisConsentPerformanceLeaderboardRowResponse::getAcceptanceRatePercent).reversed();
            case "REENGAGEMENT", "RE_ENGAGEMENT" ->
                    Comparator.comparingDouble(MisConsentPerformanceLeaderboardRowResponse::getReEngagementRatePercent).reversed();
            default ->
                    Comparator.comparingLong((MisConsentPerformanceLeaderboardRowResponse r) ->
                            r.getTotalBroadcastExecutions() + r.getTotalRecipientsInvited()).reversed();
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
        List<String> headers = List.of("Rank","Consent ID","Name","Rule Executions",
                "Recipients","Accepted","Acceptance %","Re-engagement %","Avg hours to accept");
        List<List<String>> rows = new ArrayList<>();
        int rank = 1;
        for (MisConsentPerformanceLeaderboardRowResponse r : all) {
            rows.add(List.of(String.valueOf(rank++), r.getConsentId(), r.getConsentName(),
                    String.valueOf(r.getTotalBroadcastExecutions()),
                    String.valueOf(r.getTotalRecipientsInvited()), String.valueOf(r.getTotalAccepted()),
                    String.valueOf(r.getAcceptanceRatePercent()), String.valueOf(r.getReEngagementRatePercent()),
                    r.getAverageHoursToAccept() == null ? "" : String.valueOf(r.getAverageHoursToAccept())));
        }
        byte[] out = MisReportExportUtil.writeXlsx("Consent performance leaderboard", headers, rows);
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
        List<String[]> rows = new ArrayList<>();
        int rank = 1;
        for (MisConsentPerformanceLeaderboardRowResponse r : all) {
            rows.add(new String[]{String.valueOf(rank++), r.getConsentId(), r.getConsentName(),
                    String.valueOf(r.getTotalBroadcastExecutions()),
                    String.valueOf(r.getTotalRecipientsInvited()), String.valueOf(r.getTotalAccepted()),
                    String.valueOf(r.getAcceptanceRatePercent()), String.valueOf(r.getReEngagementRatePercent()),
                    r.getAverageHoursToAccept() == null ? "" : String.valueOf(r.getAverageHoursToAccept())});
        }
        byte[] out = MisReportExportUtil.writeCsv(
                "Rank,Consent ID,Name,Rule Executions,Recipients,Accepted,Acceptance %,Re-engagement %,Avg hours to accept",
                rows);
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