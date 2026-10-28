package com.consentiq.service;

import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.enums.CustomerCurrentStatus;
import com.consentiq.model.dto.response.CustomerConsentSummary;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.Customer;
import com.consentiq.model.entity.CustomerConsentRecord;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.CustomerConsentRecordRepository;
import com.consentiq.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class CustomerCurrentStatusService {

    private static final Logger log = LoggerFactory.getLogger(CustomerCurrentStatusService.class);

    public static final ZoneId ZONE = ZoneId.of("Asia/Kolkata");

    private final CustomerConsentRecordRepository recordRepository;
    private final CustomerRepository customerRepository;
    private final ConsentRepository consentRepository;

    public static LocalDate today() {
        return LocalDate.now(ZONE);
    }

    public static boolean isActive(CustomerConsentRecord r, LocalDate today) {
        return (r.getStatus() == CustomerConsentRecordStatus.ACCEPTED
                || r.getStatus() == CustomerConsentRecordStatus.EXPIRING_SOON)
                && (r.getConsentValidUntil() == null || !r.getConsentValidUntil().isBefore(today));
    }

    public static Instant lastActivity(CustomerConsentRecord r) {
        return Stream.of(r.getRespondedAt(), r.getLastInviteSentAt(), r.getCreatedAt())
                .filter(Objects::nonNull)
                .max(Comparator.naturalOrder())
                .orElse(Instant.EPOCH);
    }

    public static CustomerCurrentStatus derive(List<CustomerConsentRecord> records, LocalDate today) {
        if (records == null || records.isEmpty()) {
            return CustomerCurrentStatus.NO_CONSENT;
        }
        if (records.stream().anyMatch(r -> isActive(r, today))) {
            return CustomerCurrentStatus.ACTIVE;
        }
        CustomerConsentRecord latest = records.stream()
                .max(Comparator.comparing(CustomerCurrentStatusService::lastActivity)
                        .thenComparing(r -> r.getId() == null ? 0L : r.getId()))
                .orElseThrow();
        return switch (latest.getStatus()) {
            case PENDING -> CustomerCurrentStatus.PENDING;
            case REJECTED -> CustomerCurrentStatus.DECLINED;
            case WITHDRAWN -> CustomerCurrentStatus.WITHDRAWN;
            case UNRESPONSIVE -> CustomerCurrentStatus.UNRESPONSIVE;
            case ACCEPTED, EXPIRING_SOON, EXPIRED -> CustomerCurrentStatus.EXPIRED;
        };
    }

    @Transactional
    public CustomerCurrentStatus recompute(String customerId) {
        if (customerId == null) {
            return null;
        }
        return customerRepository.findByCustomerIdIgnoreCase(customerId).map(c -> {
            List<CustomerConsentRecord> records = recordRepository.findByCustomerIdIn(List.of(c.getCustomerId()));
            CustomerCurrentStatus status = derive(records, today());
            if (status != c.getCurrentConsentStatus()) {
                customerRepository.updateCurrentConsentStatus(status, List.of(c.getId()));
            }
            return status;
        }).orElse(null);
    }

    @Transactional
    public int recomputeAll() {
        LocalDate today = today();
        Map<String, List<CustomerConsentRecord>> byCustomer = new HashMap<>();
        for (CustomerConsentRecord r : recordRepository.findAll()) {
            if (r.getCustomerId() != null) {
                byCustomer.computeIfAbsent(r.getCustomerId().toLowerCase(Locale.ROOT), k -> new ArrayList<>()).add(r);
            }
        }
        Map<CustomerCurrentStatus, List<Long>> changed = new HashMap<>();
        for (Customer c : customerRepository.findAll()) {
            CustomerCurrentStatus status =
                    derive(byCustomer.get(c.getCustomerId().toLowerCase(Locale.ROOT)), today);
            if (status != c.getCurrentConsentStatus()) {
                changed.computeIfAbsent(status, k -> new ArrayList<>()).add(c.getId());
            }
        }
        int total = 0;
        for (Map.Entry<CustomerCurrentStatus, List<Long>> e : changed.entrySet()) {
            total += customerRepository.updateCurrentConsentStatus(e.getKey(), e.getValue());
        }
        log.info("CustomerCurrentStatusService | recomputeAll | changed={}", total);
        return total;
    }

    public static String displayStatus(CustomerConsentRecord r, LocalDate today) {
        if ((r.getStatus() == CustomerConsentRecordStatus.ACCEPTED
                || r.getStatus() == CustomerConsentRecordStatus.EXPIRING_SOON)
                && r.getConsentValidUntil() != null && r.getConsentValidUntil().isBefore(today)) {
            return CustomerConsentRecordStatus.EXPIRED.name();
        }
        return r.getStatus().name();
    }

    @Transactional(readOnly = true)
    public Map<String, List<CustomerConsentRecord>> recordsByCustomer(Collection<String> customerIds) {
        Map<String, List<CustomerConsentRecord>> out = new HashMap<>();
        if (customerIds == null || customerIds.isEmpty()) {
            return out;
        }
        for (CustomerConsentRecord r : recordRepository.findByCustomerIdIn(customerIds)) {
            if (r.getCustomerId() != null) {
                out.computeIfAbsent(r.getCustomerId().toLowerCase(Locale.ROOT), k -> new ArrayList<>()).add(r);
            }
        }
        return out;
    }

    @Transactional(readOnly = true)
    public Map<String, List<CustomerConsentSummary>> summaries(Map<String, List<CustomerConsentRecord>> byCustomer) {
        LocalDate today = today();
        Set<Long> consentIds = byCustomer.values().stream().flatMap(List::stream)
                .map(CustomerConsentRecord::getConsentDbId).filter(Objects::nonNull).collect(Collectors.toSet());
        Map<Long, String> names = new HashMap<>();
        for (Consent c : consentRepository.findAllById(consentIds)) {
            names.put(c.getId(), c.getConsentName());
        }
        Map<String, List<CustomerConsentSummary>> out = new HashMap<>();
        byCustomer.forEach((key, records) -> out.put(key, records.stream()
                .sorted(Comparator.comparing(CustomerCurrentStatusService::lastActivity).reversed())
                .map(r -> CustomerConsentSummary.builder()
                        .consentDbId(r.getConsentDbId())
                        .consentName(names.getOrDefault(r.getConsentDbId(), "Consent #" + r.getConsentDbId()))
                        .status(displayStatus(r, today))
                        .respondedAt(r.getRespondedAt())
                        .lastInviteSentAt(r.getLastInviteSentAt())
                        .consentValidUntil(r.getConsentValidUntil())
                        .build())
                .toList()));
        return out;
    }

    public static LocalDate nextExpiry(List<CustomerConsentRecord> records, LocalDate today) {
        if (records == null) {
            return null;
        }
        return records.stream()
                .filter(r -> isActive(r, today))
                .map(CustomerConsentRecord::getConsentValidUntil)
                .filter(Objects::nonNull)
                .min(Comparator.naturalOrder())
                .orElse(null);
    }

    public static String summaryText(List<CustomerConsentSummary> consents) {
        if (consents == null || consents.isEmpty()) {
            return "";
        }
        return consents.stream()
                .map(c -> c.getConsentName() + ": " + c.getStatus()
                        + (c.getConsentValidUntil() != null ? " (" + c.getConsentValidUntil() + ")" : ""))
                .collect(Collectors.joining("; "));
    }
}
