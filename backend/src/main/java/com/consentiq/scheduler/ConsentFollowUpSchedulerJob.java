package com.consentiq.scheduler;
 
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.enums.ConsentStatus;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentInviteToken;
import com.consentiq.model.entity.ConsentOneTimeCode;
import com.consentiq.model.entity.Customer;
import com.consentiq.model.entity.CustomerConsentRecord;
import com.consentiq.repository.ConsentInviteTokenRepository;
import com.consentiq.repository.ConsentOneTimeCodeRepository;
import com.consentiq.repository.ConsentRepository;
import com.consentiq.repository.CustomerConsentRecordRepository;
import com.consentiq.repository.CustomerRepository;
import com.consentiq.service.ConsentRequestEmailBuilder;
import com.consentiq.service.EmailDispatchService;
import com.consentiq.util.DeliveryChannelCatalog;
import com.consentiq.util.HtmlTextUtil;

import org.springframework.util.StringUtils;
import lombok.RequiredArgsConstructor;
 
/**

* Scheduler: Consent Follow-Up Email Job

*

* Runs daily at 10:00 AM IST.

*

* Logic per tick:

*

*   STEP 1 — Mark UNRESPONSIVE:

*     Any PENDING record where followUpCount >= 3 AND 5 days have passed

*     since the last invite → bulk-update status to UNRESPONSIVE. No more

*     emails are ever sent to these users for this consent.

*

*   STEP 2 — Send follow-ups:

*     For each remaining PENDING record where followUpCount < 3 AND 5 days

*     have passed since lastInviteSentAt:

*       a. Load the Customer and Consent template.

*       b. Skip silently if either is missing or the consent is not PUBLISHED/APPROVED.

*       c. Skip if customer has no email.

*       d. Generate a fresh ConsentInviteToken + ConsentOneTimeCode (same as

*          the rule engine does) so the follow-up link is valid for 14 days.

*       e. Send the HTML email via EmailDispatchService.

*       f. Update lastInviteSentAt = now, followUpCount++, save record.

*

* Configuration (application.properties):

*   consentiq.followup.interval-days=5        # days between follow-ups  (default 5)

*   consentiq.followup.max-follow-ups=3       # max follow-ups before UNRESPONSIVE (default 3)

*   consentiq.followup.token-validity-days=14 # how long the link stays valid (default 14)

*/

@Component

@RequiredArgsConstructor

public class ConsentFollowUpSchedulerJob {
 
    private static final Logger log = LoggerFactory.getLogger(ConsentFollowUpSchedulerJob.class);
 
    // ── Dependencies ──────────────────────────────────────────────────────────
 
    private final CustomerConsentRecordRepository recordRepository;

    private final CustomerRepository              customerRepository;

    private final ConsentRepository               consentRepository;

    private final ConsentInviteTokenRepository    inviteTokenRepository;

    private final ConsentOneTimeCodeRepository    consentOneTimeCodeRepository;

    private final EmailDispatchService            emailDispatchService;

    private final ConsentMailProperties           consentMailProperties;
 
    // ── Config ────────────────────────────────────────────────────────────────
 
    @Value("${consentiq.followup.interval-days:5}")

    private int followUpIntervalDays;
 
    @Value("${consentiq.followup.max-follow-ups:3}")

    private int maxFollowUps;
 
    @Value("${consentiq.followup.token-validity-days:14}")

    private int tokenValidityDays;
 
    @Value("${app.public-consent-base-url:http://localhost:4200}")

    private String publicConsentBaseUrl;
 
    // ── Scheduler entry point ─────────────────────────────────────────────────
 
    /**

     * Runs every day at 10:00 AM IST (UTC+5:30 → 04:30 UTC).

     * Cron: second minute hour day month weekday

     */

    @Scheduled(cron = "0 0 10 * * ?", zone = "Asia/Kolkata")

    public void runFollowUpJob() {

        log.info("ConsentFollowUpSchedulerJob | START");

        Instant now    = Instant.now();

        Instant cutoff = now.minus(followUpIntervalDays, ChronoUnit.DAYS);
 
        // ── STEP 1: Mark UNRESPONSIVE ─────────────────────────────────────────

        int unresponsiveCount = markUnresponsive(cutoff, now);

        log.info("ConsentFollowUpSchedulerJob | STEP 1 done | marked UNRESPONSIVE={}", unresponsiveCount);
 
        // ── STEP 2: Send follow-up emails ─────────────────────────────────────

        FollowUpSummary summary = sendFollowUps(cutoff, now);

        log.info("ConsentFollowUpSchedulerJob | STEP 2 done | sent={} | skipped={} | failed={}",

                summary.sent(), summary.skipped(), summary.failed());
 
        log.info("ConsentFollowUpSchedulerJob | END | unresponsive={} | sent={} | skipped={} | failed={}",

                unresponsiveCount, summary.sent(), summary.skipped(), summary.failed());

    }
 
    // ── STEP 1 ────────────────────────────────────────────────────────────────
 
    /**

     * Bulk-updates all PENDING records that have exhausted their follow-ups

     * (followUpCount >= maxFollowUps) AND 5 days have passed since the last send.

     * Runs in its own transaction so the entity cache is clean before STEP 2.

     */

    @Transactional

    public int markUnresponsive(Instant cutoff, Instant now) {

        try {

            int rows = recordRepository.bulkMarkUnresponsive(cutoff, maxFollowUps, now);

            log.info("markUnresponsive | rows updated to UNRESPONSIVE={}", rows);

            return rows;

        } catch (Exception e) {

            log.error("markUnresponsive | failed | message={}", e.getMessage(), e);

            return 0;

        }

    }
 
    // ── STEP 2 ────────────────────────────────────────────────────────────────
 
    /**

     * Loads all PENDING records due for a follow-up, then processes each one

     * individually so a failure on one record does not abort the entire batch.

     */

    public FollowUpSummary sendFollowUps(Instant cutoff, Instant now) {

        List<CustomerConsentRecord> due = loadDueRecords(cutoff);

        log.info("sendFollowUps | records due for follow-up={}", due.size());
 
        int sent = 0, skipped = 0, failed = 0;
 
        for (CustomerConsentRecord record : due) {

            FollowUpResult result = processSingleRecord(record, now);

            switch (result) {

                case SENT    -> sent++;

                case SKIPPED -> skipped++;

                case FAILED  -> failed++;

            }

        }

        return new FollowUpSummary(sent, skipped, failed);

    }
 
    @Transactional(readOnly = true)

    public List<CustomerConsentRecord> loadDueRecords(Instant cutoff) {

        try {

            return recordRepository.findPendingRecordsDueForFollowUp(cutoff, maxFollowUps);

        } catch (Exception e) {

            log.error("loadDueRecords | failed to query | message={}", e.getMessage(), e);

            return List.of();

        }

    }
 
    /**

     * Processes one PENDING record:

     *   - validates customer + consent exist and are usable

     *   - creates a fresh token + OTP

     *   - sends the follow-up email

     *   - increments followUpCount and updates lastInviteSentAt

     *

     * Each record runs in its own transaction so failures are isolated.

     */

    @Transactional

    public FollowUpResult processSingleRecord(CustomerConsentRecord record, Instant now) {

        String customerId  = record.getCustomerId();

        Long   consentDbId = record.getConsentDbId();
 
        try {

            // ── 1. Load customer ──────────────────────────────────────────────

            Optional<Customer> customerOpt = customerRepository.findByCustomerIdIgnoreCase(customerId);

            if (customerOpt.isEmpty()) {

                log.warn("processSingleRecord | customer not found | customerId={} | consentDbId={} | SKIP",

                        customerId, consentDbId);

                return FollowUpResult.SKIPPED;

            }

            Customer customer = customerOpt.get();
 
            if (!StringUtils.hasText(customer.getEmail())) {

                log.warn("processSingleRecord | customer has no email | customerId={} | consentDbId={} | SKIP",

                        customerId, consentDbId);

                return FollowUpResult.SKIPPED;

            }
 
            // ── 2. Load consent ───────────────────────────────────────────────

            Optional<Consent> consentOpt = consentRepository.findById(consentDbId);

            if (consentOpt.isEmpty()) {

                log.warn("processSingleRecord | consent not found | consentDbId={} | customerId={} | SKIP",

                        consentDbId, customerId);

                return FollowUpResult.SKIPPED;

            }

            Consent consent = consentOpt.get();
 
            if (consent.getStatus() != ConsentStatus.PUBLISHED
&& consent.getStatus() != ConsentStatus.APPROVED) {

                log.warn("processSingleRecord | consent not PUBLISHED/APPROVED | consentDbId={} | status={} | SKIP",

                        consentDbId, consent.getStatus());

                return FollowUpResult.SKIPPED;

            }
 
            // ── 3. Build channel list from the template ───────────────────────

            List<String> captureChannels = buildChannelList(consent);

            if (captureChannels.isEmpty()) {

                log.warn("processSingleRecord | consent has no channels | consentDbId={} | SKIP", consentDbId);

                return FollowUpResult.SKIPPED;

            }

            // Follow-up is sent via email only — confirm EMAIL is a configured channel

            if (!captureChannels.contains("EMAIL")) {

                log.warn("processSingleRecord | consent does not include EMAIL channel | consentDbId={} | SKIP",

                        consentDbId);

                return FollowUpResult.SKIPPED;

            }
 
            // ── 4. Create fresh ConsentInviteToken (14-day validity) ──────────

            String token = UUID.randomUUID().toString().replace("-", "");

            String channelSummary = DeliveryChannelCatalog.formatForCustomer(captureChannels);
 
            ConsentInviteToken inviteToken = ConsentInviteToken.builder()

                    .token(token)

                    .customerId(customerId)

                    .consentDbId(consentDbId)

                    .deliveryChannel(channelSummary)

                    .captureDeliveryChannels(captureChannels)

                    .consentTypeLabel("Follow-up")

                    .createdAt(now)

                    .expiresAt(now.plus(tokenValidityDays, ChronoUnit.DAYS))

                    .build();

            inviteTokenRepository.save(inviteToken);
 
            // ── 5. Create one-time code (15-min validity for the verify link) ─

            String opaqueCode = UUID.randomUUID().toString().replace("-", "");

            consentOneTimeCodeRepository.save(ConsentOneTimeCode.builder()

                    .code(opaqueCode)

                    .consentRequestId(inviteToken.getId())

                    .createdAt(now)

                    .expiresAt(now.plus(15, ChronoUnit.MINUTES))

                    .used(false)

                    .build());
 
            // ── 6. Build the consent link ─────────────────────────────────────

            String consentLink = publicConsentBaseUrl.replaceAll("/$", "")

                    + "/public/consent/verify?code=" + opaqueCode;
 
            // ── 7. Build email subject + HTML body ────────────────────────────

            String subject = buildFollowUpSubject(consent.getConsentName(),

                    record.getFollowUpCount() + 1);
 
            String descriptionPlain = HtmlTextUtil.stripToPlain(consent.getDescription(), 2000);
 
            String html = ConsentRequestEmailBuilder.buildHtmlBody(

                    customer,

                    consent.getConsentName(),

                    descriptionPlain,

                    consentLink,

                    captureChannels,

                    consentMailProperties,

                    publicConsentBaseUrl,

                    token,

                    consentDbId

            );
 
            // ── 8. Send email ─────────────────────────────────────────────────

            emailDispatchService.sendHtml(customer.getEmail(), subject, html);
 
            // ── 9. Update record: increment followUpCount + refresh lastInviteSentAt

            record.setLastInviteSentAt(now);

            record.setFollowUpCount(record.getFollowUpCount() + 1);

            recordRepository.save(record);
 
            log.info("processSingleRecord | follow-up sent | customerId={} | consentDbId={} | followUpCount={}",

                    customerId, consentDbId, record.getFollowUpCount());
 
            return FollowUpResult.SENT;
 
        } catch (Exception e) {

            log.error("processSingleRecord | FAILED | customerId={} | consentDbId={} | message={}",

                    customerId, consentDbId, e.getMessage(), e);

            return FollowUpResult.FAILED;

        }

    }
 
    // ── Helpers ───────────────────────────────────────────────────────────────
 
    /**

     * Builds the follow-up email subject.

     * followUpNumber is 1, 2, or 3.

     * Example: "ConsentIQ • Follow-up 1 of 3 — My Consent Title"

     */

    private String buildFollowUpSubject(String consentName, int followUpNumber) {

        String title = consentName == null ? "Consent request" : consentName.trim();

        return "ConsentIQ • Follow-up Email " + title;

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
 
    // ── Inner types ───────────────────────────────────────────────────────────
 
    enum FollowUpResult {

        SENT, SKIPPED, FAILED

    }
 
    record FollowUpSummary(int sent, int skipped, int failed) {}

}
