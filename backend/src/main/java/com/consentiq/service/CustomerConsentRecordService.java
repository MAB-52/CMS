package com.consentiq.service;

import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.model.dto.response.CustomerConsentRecordResponse;
import com.consentiq.model.dto.response.CustomerConsentRecordStatsResponse;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.Customer;
import com.consentiq.model.entity.CustomerConsentRecord;
import com.consentiq.model.entity.OnBehalfConsentRecord;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.CustomerConsentRecordRepository;
import com.consentiq.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerConsentRecordService {

    private static final Logger log = LoggerFactory.getLogger(CustomerConsentRecordService.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private final CustomerConsentRecordRepository recordRepository;
    private final CustomerRepository customerRepository;
    private final ConsentRepository consentRepository;

    @Transactional
    public CustomerConsentRecord upsertOnInviteSent(
            String customerId, Long consentDbId, Long sourceRuleId, Long sourceBroadcastId) {
        String cu = currentUser();
        log.debug("Entering upsertOnInviteSent | params: customerId={},consentDbId={},sourceRuleId={},sourceBroadcastId={}",
                customerId, consentDbId, sourceRuleId, sourceBroadcastId);
        log.info("User={} | action=upsertOnInviteSent | entity=CustomerConsentRecord | id={}",
                cu, consentDbId != null ? String.valueOf(consentDbId) : "n/a");
        log.debug("Transaction started | method=upsertOnInviteSent | id={}", consentDbId);
        try {
            Instant now = Instant.now();
            log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId,consentDbId");
            Optional<CustomerConsentRecord> existing =
                    recordRepository.findByCustomerIdAndConsentDbId(customerId, consentDbId);
            log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", existing.isPresent());
            if (existing.isEmpty()) {
                CustomerConsentRecord created = CustomerConsentRecord.builder()
                        .customerId(customerId)
                        .consentDbId(consentDbId)
                        .status(CustomerConsentRecordStatus.PENDING)
                        .lastInviteSentAt(now)
                        .sourceRuleId(sourceRuleId)
                        .sourceBroadcastId(sourceBroadcastId)
                        .build();
                log.info("Executing DB query | method=save | param=CustomerConsentRecord");
                CustomerConsentRecord saved = recordRepository.save(created);
                log.info("DB query completed | method=save | result=completed");
                log.debug("Transaction completing | method=upsertOnInviteSent | id={}", consentDbId);
                log.debug("Exiting upsertOnInviteSent | result=id={}", saved.getId());
                return saved;
            }
            CustomerConsentRecord r = existing.get();
            r.setLastInviteSentAt(now);
            if (r.getStatus() != CustomerConsentRecordStatus.ACCEPTED) {
                r.setStatus(CustomerConsentRecordStatus.PENDING);
            }
            if (sourceRuleId != null) {
                r.setSourceRuleId(sourceRuleId);
            }
            if (sourceBroadcastId != null) {
                r.setSourceBroadcastId(sourceBroadcastId);
            }
            log.info("Executing DB query | method=save | param=CustomerConsentRecord");
            CustomerConsentRecord saved = recordRepository.save(r);
            log.info("DB query completed | method=save | result=completed");
            log.debug("Transaction completing | method=upsertOnInviteSent | id={}", consentDbId);
            log.debug("Exiting upsertOnInviteSent | result=id={}", saved.getId());
            return saved;
        } catch (Exception e) {
            log.error("Exception in upsertOnInviteSent | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional
    public CustomerConsentRecord updateOnResponse(
            String customerId,
            Long consentDbId,
            CustomerConsentRecordStatus newStatus,
            Instant respondedAt,
            LocalDate consentValidUntil) {
        return updateOnResponse(customerId, consentDbId, newStatus, respondedAt, consentValidUntil, null);
    }

    @Transactional
    public CustomerConsentRecord updateOnResponse(
            String customerId,
            Long consentDbId,
            CustomerConsentRecordStatus newStatus,
            Instant respondedAt,
            LocalDate consentValidUntil,
            OnBehalfConsentRecord onBehalfRecord) {
        String cu = currentUser();
        log.debug("Entering updateOnResponse | params: customerId={},consentDbId={},newStatus={},onBehalf={}",
                customerId, consentDbId, newStatus, onBehalfRecord != null);
        log.info("User={} | action=updateOnResponse | entity=CustomerConsentRecord | id={}",
                cu, consentDbId != null ? String.valueOf(consentDbId) : "n/a");
        log.debug("Transaction started | method=updateOnResponse | id={}", consentDbId);
        try {
            log.info("Executing DB query | method=findByCustomerIdAndConsentDbId | param=customerId,consentDbId");
            Optional<CustomerConsentRecord> existingOpt =
                    recordRepository.findByCustomerIdAndConsentDbId(customerId, consentDbId);
            log.info("DB query completed | method=findByCustomerIdAndConsentDbId | present={}", existingOpt.isPresent());
            CustomerConsentRecord r = existingOpt
                    .orElseGet(() -> CustomerConsentRecord.builder()
                            .customerId(customerId)
                            .consentDbId(consentDbId)
                            .status(CustomerConsentRecordStatus.PENDING)
                            .build());

            r.setStatus(newStatus);
            r.setRespondedAt(respondedAt);

            if (newStatus == CustomerConsentRecordStatus.ACCEPTED) {
                r.setConsentValidUntil(consentValidUntil);
            } else {
                r.setConsentValidUntil(null);
            }

            r.setOnBehalfRecord(onBehalfRecord);

            log.info("Executing DB query | method=save | param=CustomerConsentRecord");
            CustomerConsentRecord saved = recordRepository.save(r);
            log.info("DB query completed | method=save | result=completed");

            log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerId");
            Optional<Customer> custOpt = customerRepository.findByCustomerIdIgnoreCase(customerId);
            log.info("DB query completed | method=findByCustomerIdIgnoreCase | present={}", custOpt.isPresent());
            custOpt.ifPresent(customer -> {
                customer.setLastConsentResponseAt(respondedAt);
                switch (newStatus) {
                    case ACCEPTED -> {
                        customer.setConsentValidUntil(consentValidUntil);
                        customer.setReEngagementEligibleAfter(null);
                    }
                    case REJECTED, WITHDRAWN -> {
                        customer.setConsentValidUntil(null);
                    }
                    default -> { /* scheduler-driven */ }
                }
                log.info("Executing DB query | method=save | param=Customer");
                customerRepository.save(customer);
                log.info("DB query completed | method=save | result=completed");
                log.info("updateOnResponse | customerId={} | status={} | respondedAt={} | onBehalf={}",
                        customerId, newStatus, respondedAt,
                        onBehalfRecord != null ? onBehalfRecord.getId() : "null");
            });

            log.debug("Transaction completing | method=updateOnResponse | id={}", consentDbId);
            log.debug("Exiting updateOnResponse | result=id={}", saved.getId());
            return saved;
        } catch (Exception e) {
            log.error("Exception in updateOnResponse | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public Set<String> getAcceptedCustomerIdsForTemplate(Long consentDbId) {
        String cu = currentUser();
        log.debug("Entering getAcceptedCustomerIdsForTemplate | params: consentDbId={}", consentDbId);
        log.info("User={} | action=getAcceptedCustomerIdsForTemplate | entity=CustomerConsentRecord | id={}",
                cu, consentDbId != null ? String.valueOf(consentDbId) : "n/a");
        log.debug("Transaction started | method=getAcceptedCustomerIdsForTemplate | id={}", consentDbId);
        try {
            log.info("Executing DB query | method=findCustomerIdsByConsentDbIdAndStatus | param=ACCEPTED");
            Set<String> res = new LinkedHashSet<>(
                    recordRepository.findCustomerIdsByConsentDbIdAndStatus(
                            consentDbId, CustomerConsentRecordStatus.ACCEPTED));
            log.info("DB query completed | method=findCustomerIdsByConsentDbIdAndStatus | size={}", res.size());
            log.debug("Transaction completing | method=getAcceptedCustomerIdsForTemplate | id={}", consentDbId);
            log.debug("Exiting getAcceptedCustomerIdsForTemplate | result=size={}", res.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in getAcceptedCustomerIdsForTemplate | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public Set<String> getAcceptedOrExpiringSoonCustomerIdsForTemplate(Long consentDbId) {
        String cu = currentUser();
        log.debug("Entering getAcceptedOrExpiringSoonCustomerIdsForTemplate | params: consentDbId={}", consentDbId);
        log.info("User={} | action=getAcceptedOrExpiringSoonCustomerIdsForTemplate | entity=CustomerConsentRecord | id={}",
                cu, consentDbId != null ? String.valueOf(consentDbId) : "n/a");
        log.debug("Transaction started | method=getAcceptedOrExpiringSoonCustomerIdsForTemplate | id={}", consentDbId);
        try {
            log.info("Executing DB query | method=findCustomerIdsByConsentDbIdAndStatusIn | param=ACCEPTED,EXPIRING_SOON");
            Set<String> res = new LinkedHashSet<>(
                    recordRepository.findCustomerIdsByConsentDbIdAndStatusIn(
                            consentDbId,
                            List.of(CustomerConsentRecordStatus.ACCEPTED,
                                    CustomerConsentRecordStatus.EXPIRING_SOON)));
            log.info("DB query completed | method=findCustomerIdsByConsentDbIdAndStatusIn | size={}", res.size());
            log.debug("Transaction completing | method=getAcceptedOrExpiringSoonCustomerIdsForTemplate | id={}", consentDbId);
            log.debug("Exiting getAcceptedOrExpiringSoonCustomerIdsForTemplate | result=size={}", res.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in getAcceptedOrExpiringSoonCustomerIdsForTemplate | user={} | message={}",
                    cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public List<CustomerConsentRecordResponse> getRecordsForCustomer(String customerId) {
        String cu = currentUser();
        log.debug("Entering getRecordsForCustomer | params: customerId={}", customerId);
        log.info("User={} | action=getRecordsForCustomer | entity=CustomerConsentRecord | id={}", cu, customerId);
        log.debug("Transaction started | method=getRecordsForCustomer | id={}", customerId);
        try {
            log.info("Executing DB query | method=findByCustomerIdOrderByUpdatedAtDesc | param=customerId");
            List<CustomerConsentRecord> rows =
                    recordRepository.findByCustomerIdOrderByUpdatedAtDesc(customerId);
            log.info("DB query completed | method=findByCustomerIdOrderByUpdatedAtDesc | size={}", rows.size());
            List<CustomerConsentRecordResponse> res = mapToResponses(rows);
            log.debug("Transaction completing | method=getRecordsForCustomer | id={}", customerId);
            log.debug("Exiting getRecordsForCustomer | result=size={}", res.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in getRecordsForCustomer | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public List<CustomerConsentRecordResponse> getRecordsForTemplate(Long consentDbId) {
        String cu = currentUser();
        log.debug("Entering getRecordsForTemplate | params: consentDbId={}", consentDbId);
        log.info("User={} | action=getRecordsForTemplate | entity=CustomerConsentRecord | id={}",
                cu, consentDbId != null ? String.valueOf(consentDbId) : "n/a");
        log.debug("Transaction started | method=getRecordsForTemplate | id={}", consentDbId);
        try {
            log.info("Executing DB query | method=findByConsentDbIdOrderByUpdatedAtDesc | param=consentDbId");
            List<CustomerConsentRecord> rows =
                    recordRepository.findByConsentDbIdOrderByUpdatedAtDesc(consentDbId);
            log.info("DB query completed | method=findByConsentDbIdOrderByUpdatedAtDesc | size={}", rows.size());
            List<CustomerConsentRecordResponse> res = mapToResponses(rows);
            log.debug("Transaction completing | method=getRecordsForTemplate | id={}", consentDbId);
            log.debug("Exiting getRecordsForTemplate | result=size={}", res.size());
            return res;
        } catch (Exception e) {
            log.error("Exception in getRecordsForTemplate | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional(readOnly = true)
    public CustomerConsentRecordStatsResponse getStatsForTemplate(Long consentDbId) {
        String cu = currentUser();
        log.debug("Entering getStatsForTemplate | params: consentDbId={}", consentDbId);
        log.info("User={} | action=getStatsForTemplate | entity=CustomerConsentRecord | id={}",
                cu, consentDbId != null ? String.valueOf(consentDbId) : "n/a");
        log.debug("Transaction started | method=getStatsForTemplate | id={}", consentDbId);
        try {
            log.info("Executing DB query | method=countByConsentDbId | param=consentDbId");
            long total = recordRepository.countByConsentDbId(consentDbId);
            log.info("DB query completed | method=countByConsentDbId | result={}", total);

            log.info("Executing DB query | method=countByConsentDbIdAndStatus | param=ACCEPTED");
            long acceptedCount = recordRepository.countByConsentDbIdAndStatus(
                    consentDbId, CustomerConsentRecordStatus.ACCEPTED);
            log.info("DB query completed | method=countByConsentDbIdAndStatus | result={}", acceptedCount);

            log.info("Executing DB query | method=countByConsentDbIdAndStatus | param=REJECTED");
            long rejectedCount = recordRepository.countByConsentDbIdAndStatus(
                    consentDbId, CustomerConsentRecordStatus.REJECTED);
            log.info("DB query completed | method=countByConsentDbIdAndStatus | result={}", rejectedCount);

            log.info("Executing DB query | method=countByConsentDbIdAndStatus | param=WITHDRAWN");
            long withdrawnCount = recordRepository.countByConsentDbIdAndStatus(
                    consentDbId, CustomerConsentRecordStatus.WITHDRAWN);
            log.info("DB query completed | method=countByConsentDbIdAndStatus | result={}", withdrawnCount);

            log.info("Executing DB query | method=countByConsentDbIdAndStatus | param=PENDING");
            long pendingCount = recordRepository.countByConsentDbIdAndStatus(
                    consentDbId, CustomerConsentRecordStatus.PENDING);
            log.info("DB query completed | method=countByConsentDbIdAndStatus | result={}", pendingCount);

            log.info("Executing DB query | method=countByConsentDbIdAndStatus | param=EXPIRING_SOON");
            long expiringSoonCount = recordRepository.countByConsentDbIdAndStatus(
                    consentDbId, CustomerConsentRecordStatus.EXPIRING_SOON);
            log.info("DB query completed | method=countByConsentDbIdAndStatus | result={}", expiringSoonCount);

            log.info("Executing DB query | method=countByConsentDbIdAndStatus | param=EXPIRED");
            long expiredCount = recordRepository.countByConsentDbIdAndStatus(
                    consentDbId, CustomerConsentRecordStatus.EXPIRED);
            log.info("DB query completed | method=countByConsentDbIdAndStatus | result={}", expiredCount);

            CustomerConsentRecordStatsResponse res = CustomerConsentRecordStatsResponse.builder()
                    .consentDbId(consentDbId)
                    .totalRecords(total)
                    .acceptedCount(acceptedCount)
                    .rejectedCount(rejectedCount)
                    .withdrawnCount(withdrawnCount)
                    .pendingCount(pendingCount)
                    .expiringSoonCount(expiringSoonCount)
                    .expiredCount(expiredCount)
                    .build();
            log.debug("Transaction completing | method=getStatsForTemplate | id={}", consentDbId);
            log.debug("Exiting getStatsForTemplate | result=totalRecords={}", total);
            return res;
        } catch (Exception e) {
            log.error("Exception in getStatsForTemplate | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    @Transactional
    public void refreshExpiryStatuses(LocalDate today, LocalDate warnThrough) {
        String cu = currentUser();
        log.debug("Entering refreshExpiryStatuses | params: today={},warnThrough={}", today, warnThrough);
        log.info("User={} | action=refreshExpiryStatuses | entity=CustomerConsentRecord | id=n/a", cu);
        log.debug("Transaction started | method=refreshExpiryStatuses | id=n/a");
        try {
            Instant now = Instant.now();
            log.info("Executing DB query | method=bulkUpdateStatusForConsentValidUntilBefore | param=n/a");
            int toExpired = recordRepository.bulkUpdateStatusForConsentValidUntilBefore(
                    List.of(CustomerConsentRecordStatus.ACCEPTED,
                            CustomerConsentRecordStatus.EXPIRING_SOON),
                    today,
                    CustomerConsentRecordStatus.EXPIRED,
                    now);
            log.info("DB query completed | method=bulkUpdateStatusForConsentValidUntilBefore | result={}", toExpired);

            log.info("Executing DB query | method=bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween | param=n/a");
            int toExpiringSoon = recordRepository
                    .bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween(
                            CustomerConsentRecordStatus.ACCEPTED,
                            today,
                            warnThrough,
                            CustomerConsentRecordStatus.EXPIRING_SOON,
                            now);
            log.info("DB query completed | method=bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween | result={}",
                    toExpiringSoon);

            log.info("CustomerConsentRecordService.refreshExpiryStatuses | EXPIRED transitions={} | EXPIRING_SOON transitions={}",
                    toExpired, toExpiringSoon);
            log.debug("Transaction completing | method=refreshExpiryStatuses | id=n/a");
            log.debug("Exiting refreshExpiryStatuses | completed successfully");
        } catch (Exception e) {
            log.error("Exception in refreshExpiryStatuses | user={} | message={}", cu, e.getMessage(), e);
            throw e;
        }
    }

    private List<CustomerConsentRecordResponse> mapToResponses(List<CustomerConsentRecord> rows) {
        if (rows.isEmpty()) {
            return List.of();
        }
        Map<String, Customer> customers = loadCustomersByCustomerId(rows);
        Set<Long> consentIds = rows.stream()
                .map(CustomerConsentRecord::getConsentDbId)
                .collect(Collectors.toSet());
        log.info("Executing DB query | method=findAllById | param=consentIds");
        Map<Long, Consent> consents = consentRepository.findAllById(consentIds).stream()
                .collect(Collectors.toMap(Consent::getId, c -> c));
        log.info("DB query completed | method=findAllById | size={}", consents.size());
        List<CustomerConsentRecordResponse> out = new ArrayList<>(rows.size());
        for (CustomerConsentRecord r : rows) {
            out.add(mapRow(r, consents, customers));
        }
        return out;
    }

    private Map<String, Customer> loadCustomersByCustomerId(List<CustomerConsentRecord> records) {
        Map<String, Customer> out = new HashMap<>();
        for (CustomerConsentRecord r : records) {
            String cid = r.getCustomerId();
            if (cid == null) {
                continue;
            }
            String key = cid.toLowerCase(Locale.ROOT);
            if (out.containsKey(key)) {
                continue;
            }
            log.info("Executing DB query | method=findByCustomerIdIgnoreCase | param=customerId");
            Optional<Customer> oc = customerRepository.findByCustomerIdIgnoreCase(cid);
            log.info("DB query completed | method=findByCustomerIdIgnoreCase | present={}", oc.isPresent());
            oc.ifPresent(c -> out.put(key, c));
        }
        return out;
    }

    private CustomerConsentRecordResponse mapRow(
            CustomerConsentRecord r,
            Map<Long, Consent> consents,
            Map<String, Customer> customersByLowerId) {
        String key = r.getCustomerId() != null
                ? r.getCustomerId().toLowerCase(Locale.ROOT) : "";
        Customer cu = customersByLowerId.get(key);
        Consent co = consents.get(r.getConsentDbId());

        Long onBehalfRecordId = null;
        if (r.getOnBehalfRecord() != null) {
            try {
                onBehalfRecordId = r.getOnBehalfRecord().getId();
            } catch (Exception ignored) {
                // Proxy not initialized in read-only context
            }
        }

        return CustomerConsentRecordResponse.builder()
                .id(r.getId())
                .customerId(r.getCustomerId())
                .consentDbId(r.getConsentDbId())
                .consentName(co != null ? co.getConsentName() : null)
                .customerFullName(cu != null ? cu.getFullName() : null)
                .status(r.getStatus())
                .respondedAt(r.getRespondedAt())
                .consentValidUntil(r.getConsentValidUntil())
                .lastInviteSentAt(r.getLastInviteSentAt())
                .sourceRuleId(r.getSourceRuleId())
                .sourceBroadcastId(r.getSourceBroadcastId())
                .onBehalfRecordId(onBehalfRecordId)
                .createdAt(r.getCreatedAt())
                .updatedAt(r.getUpdatedAt())
                .build();
    }
}
