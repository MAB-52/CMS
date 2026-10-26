package com.consentiq.scheduler;

import com.consentiq.enums.CustomerConsentRecordStatus;
import com.consentiq.repository.CustomerConsentRecordRepository;
import com.consentiq.service.CustomerConsentRecordService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CustomerConsentStatusRefreshJob {

    private static final Logger log = LoggerFactory.getLogger(CustomerConsentStatusRefreshJob.class);

    private final CustomerConsentRecordRepository recordRepository;
    private final CustomerConsentRecordService customerConsentRecordService;

    @Value("${consentiq.segmentation.expiry-warning-days:10}")
    private int expiryWarningDays;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

//    @Scheduled(cron = "0 */1 * * * ?") //Runs every Minute
    @Scheduled(cron = "0 0 4 * * ?", zone = "Asia/Kolkata") // Runs everyday at 4 AM
    @Transactional
    public void refreshConsentStatuses() {
        String cu = currentUser();
        log.debug("Entering refreshConsentStatuses | params: none");
        log.info("User={} | action=refreshConsentStatuses | entity=CustomerConsentRecord | id=n/a", cu);
        log.debug("Transaction started | method=refreshConsentStatuses | id=n/a");
        ZoneId zone = ZoneId.systemDefault();
        LocalDate today = LocalDate.now(zone);
        LocalDate warnThrough = today.plusDays(expiryWarningDays);
        log.info(
                "Processing request | entity=CustomerConsentRecord | today={} | warnThrough={}",
                today,
                warnThrough);

        log.info(
                "Executing DB query | method=bulkUpdateStatusForConsentValidUntilBefore | param=today={}",
                today);
        int toExpired =
                recordRepository.bulkUpdateStatusForConsentValidUntilBefore(
                        List.of(CustomerConsentRecordStatus.ACCEPTED, CustomerConsentRecordStatus.EXPIRING_SOON),
                        today,
                        CustomerConsentRecordStatus.EXPIRED,
                        Instant.now());
        log.info(
                "Query completed | method=bulkUpdateStatusForConsentValidUntilBefore | rowsUpdated={}",
                toExpired);
        log.info("CustomerConsentStatusRefreshJob | set EXPIRED | rows={}", toExpired);

        log.info(
                "Executing DB query | method=bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween | param=today={}",
                today);
        int toExpiringSoon =
                recordRepository.bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween(
                        CustomerConsentRecordStatus.ACCEPTED,
                        today,
                        warnThrough,
                        CustomerConsentRecordStatus.EXPIRING_SOON,
                        Instant.now());
        log.info(
                "Query completed | method=bulkUpdateAcceptedToExpiringSoonForConsentValidUntilBetween | rowsUpdated={}",
                toExpiringSoon);
        log.info("CustomerConsentStatusRefreshJob | set EXPIRING_SOON | rows={}", toExpiringSoon);

        log.info("Executing service | method=refreshExpiryStatuses | param=today,warnThrough");
        customerConsentRecordService.refreshExpiryStatuses(today, warnThrough);
        log.info("Service completed | method=refreshExpiryStatuses | param=today,warnThrough");

        log.info(
                "CustomerConsentStatusRefreshJob | done | EXPIRED={} | EXPIRING_SOON={}",
                toExpired,
                toExpiringSoon);
        log.debug("Transaction completing | method=refreshConsentStatuses | id=n/a");
        log.debug("Exiting refreshConsentStatuses | completed successfully");
    }
}
