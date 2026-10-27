package com.consentiq.service;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.model.entity.Customer;
import com.consentiq.util.DeliveryChannelCatalog;
import lombok.experimental.UtilityClass;
import org.springframework.util.StringUtils;

import java.util.List;

@UtilityClass
public class ConsentRequestEmailBuilder {

    public String buildSubject(String consentTitle) {
        String t = consentTitle == null
                ? "Consent request"
                : consentTitle.trim();

        return "ConsentIQ • Action required — " + t;
    }

    public String buildHtmlBody(
            Customer customer,
            String consentTitle,
            String descriptionPlain,
            String consentLink,
            List<String> normalizedCaptureChannels,
            ConsentMailProperties mailProps,
            String publicConsentBaseUrl,
            String inviteToken,
            Long consentDbId
    ) {
        return buildHtmlBody(
                customer,
                consentTitle,
                descriptionPlain,
                consentLink,
                normalizedCaptureChannels,
                mailProps,
                publicConsentBaseUrl,
                publicConsentBaseUrl,
                inviteToken,
                consentDbId
        );
    }

    public String buildHtmlBody(
            Customer customer,
            String consentTitle,
            String descriptionPlain,
            String consentLink,
            List<String> normalizedCaptureChannels,
            ConsentMailProperties mailProps,
            String publicConsentBaseUrl,
            String apiBaseUrl,
            String inviteToken,
            Long consentDbId
    ) {
        String first = escapeHtml(firstName(customer.getFullName()));
        String org = escapeHtml(trimTo(mailProps.getOrganizationName(), 120));
        String support = escapeHtml(trimTo(mailProps.getSupportEmail(), 120));
        String title = escapeHtml(trimTo(consentTitle, 200));

        List<String> norm = normalizedCaptureChannels == null ? List.of() : normalizedCaptureChannels;
        String channelsReadable = DeliveryChannelCatalog.formatForCustomer(norm);
        String channelHeading = norm.size() <= 1 ? "Communication channel" : "Communication channels";

        String bodyIntro = escapeHtml(trimTo(
                descriptionPlain == null || descriptionPlain.isBlank()
                        ? "We need your informed consent before we proceed with this communication request."
                        : descriptionPlain,
                650
        ));

        String consentLinkEsc = escapeHtml(consentLink == null ? "" : consentLink);

        // Channel pills (one per channel label).
        StringBuilder channelPills = new StringBuilder();
        if (StringUtils.hasText(channelsReadable)) {
            for (String label : channelsReadable.split(",\\s*")) {
                channelPills.append("<span style=\"display:inline-block;margin:4px 6px 0 0;padding:6px 12px;"
                                + "border-radius:999px;background:#FFF1E9;border:1px solid #F8CBB0;color:#C9561A;"
                                + "font-size:12px;font-weight:700;line-height:16px;\">")
                        .append(escapeHtml(trimTo(label, 40)))
                        .append("</span>");
            }
        }

        // Brand palette (Interact Suite): primary #45329E, secondary #EA6B28, canvas #F7F8FC.
        String font = "'Nunito','Segoe UI',Roboto,Helvetica,Arial,sans-serif";

        return "<!DOCTYPE html>"
                + "<html lang=\"en\">"
                + "<head>"
                + "<meta charset=\"UTF-8\"/>"
                + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>"
                + "<meta name=\"x-apple-disable-message-reformatting\"/>"
                + "<title>Consent Request</title>"
                + "</head>"
                + "<body style=\"margin:0;padding:0;background:#F7F8FC;font-family:" + font + ";\">"

                // Inbox preview text (hidden in the body).
                + "<div style=\"display:none;max-height:0;overflow:hidden;opacity:0;color:#F7F8FC;\">"
                + "Hi " + first + ", please review and respond to: " + title
                + "</div>"

                // ── Outer table ──────────────────────────────────────────
                + "<table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" "
                + "bgcolor=\"#F7F8FC\" style=\"background:#F7F8FC;padding:32px 12px;\">"
                + "<tr><td align=\"center\">"

                // ── Card ────────────────────────────────────────────────
                + "<table role=\"presentation\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" "
                + "style=\"width:100%;max-width:600px;border-collapse:separate;border-radius:24px;overflow:hidden;"
                + "background:#FFFFFF;border:1px solid #E2E8F0;box-shadow:0 12px 32px rgba(23,36,69,.12);\">"

                // ── HEADER (gradient with solid fallback) ───────────────
                + "<tr><td bgcolor=\"#45329E\" style=\"background:#45329E;"
                + "background-image:linear-gradient(120deg,#45329E 0%,#45329E 45%,#7A3F8F 75%,#EA6B28 100%);"
                + "padding:24px 32px 26px 32px;\">"
                + "<table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"
                + "<td align=\"left\" style=\"font-family:" + font + ";\">"
                + "<span style=\"display:inline-block;width:34px;height:34px;line-height:34px;text-align:center;"
                + "border-radius:10px;background:rgba(255,255,255,.18);border:1px solid rgba(255,255,255,.3);"
                + "color:#FFFFFF;font-size:12px;font-weight:800;vertical-align:middle;\">CQ</span>"
                + "<span style=\"display:inline-block;margin-left:10px;vertical-align:middle;color:#FFFFFF;"
                + "font-size:18px;font-weight:800;letter-spacing:-.01em;\">Consent"
                + "<span style=\"color:#FFC9A8;\">IQ</span></span>"
                + "</td>"
                + "<td align=\"right\" style=\"font-family:" + font + ";\">"
                + "<span style=\"display:inline-block;padding:6px 12px;border-radius:999px;"
                + "background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.3);color:#FFFFFF;"
                + "font-size:11px;font-weight:700;letter-spacing:.04em;\">&#128274;&nbsp; Secure request</span>"
                + "</td>"
                + "</tr></table>"

                // Hero copy inside the header band.
                + "<div style=\"margin-top:28px;color:#FFC9A8;font-size:12px;font-weight:800;letter-spacing:.12em;"
                + "text-transform:uppercase;\">Action required</div>"
                + "<div style=\"margin-top:8px;color:#FFFFFF;font-size:26px;line-height:34px;font-weight:800;"
                + "letter-spacing:-.02em;\">Hi " + first + ", we need your consent</div>"
                + "<div style=\"margin-top:8px;color:rgba(255,255,255,.85);font-size:15px;line-height:22px;\">"
                + "Review the request below and let us know your decision. It only takes a minute.</div>"
                + "</td></tr>"

                // ── Orange accent line ──────────────────────────────────
                + "<tr><td bgcolor=\"#EA6B28\" style=\"height:4px;line-height:4px;font-size:0;background:#EA6B28;"
                + "background-image:linear-gradient(90deg,#45329E 0%,#EA6B28 100%);\">&nbsp;</td></tr>"

                // ── BODY ────────────────────────────────────────────────
                + "<tr><td style=\"padding:30px 32px 8px 32px;font-family:" + font + ";\">"

                // consent title + intro
                + "<div style=\"color:#64748B;font-size:12px;font-weight:800;letter-spacing:.08em;"
                + "text-transform:uppercase;\">Consent request</div>"
                + "<div style=\"margin-top:6px;color:#2E1475;font-size:22px;line-height:30px;font-weight:800;\">"
                + title + "</div>"
                + "<div style=\"margin-top:10px;color:#475569;font-size:15px;line-height:24px;\">"
                + bodyIntro + "</div>"

                // what you are approving
                + "<table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" "
                + "style=\"margin-top:22px;\"><tr>"
                + "<td bgcolor=\"#F3F0FB\" style=\"background:#F3F0FB;border:1px solid #E4E0F2;"
                + "border-left:4px solid #45329E;border-radius:12px;padding:16px 18px;\">"
                + "<div style=\"color:#45329E;font-size:11px;font-weight:800;letter-spacing:.08em;"
                + "text-transform:uppercase;\">What you are agreeing to</div>"
                + "<div style=\"margin-top:6px;color:#1E1B3A;font-size:14px;line-height:22px;\">"
                + "Permission to receive communications related to <strong>" + title + "</strong>.</div>"
                + "</td></tr></table>"

                // channels
                + (channelPills.length() == 0 ? "" :
                "<div style=\"margin-top:18px;\">"
                + "<div style=\"color:#64748B;font-size:11px;font-weight:800;letter-spacing:.08em;"
                + "text-transform:uppercase;\">" + escapeHtml(channelHeading) + "</div>"
                + "<div style=\"margin-top:4px;\">" + channelPills + "</div>"
                + "</div>")
                + "</td></tr>"

                // ── CTA (bulletproof button) ────────────────────────────
                + "<tr><td align=\"center\" style=\"padding:26px 32px 26px 32px;\">"
                + "<table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\"><tr>"
                // Primary action = design-system dark gradient (#2E1475 → #465599), solid fallback for Outlook.
                + "<td align=\"center\" bgcolor=\"#2E1475\" style=\"border-radius:999px;background:#2E1475;"
                + "background-image:linear-gradient(90deg,#2E1475 0%,#465599 100%);"
                + "box-shadow:0 10px 24px rgba(46,20,117,.28);\">"
                + "<a href=\"" + consentLinkEsc + "\" target=\"_blank\" style=\"display:inline-block;"
                + "padding:15px 36px;border-radius:999px;color:#FFFFFF;font-family:" + font + ";"
                + "font-size:15px;font-weight:800;letter-spacing:.02em;text-decoration:none;\">"
                + "Review &amp; respond &nbsp;&rarr;</a>"
                + "</td></tr></table>"
                + "<div style=\"margin-top:12px;color:#94A3B8;font-size:12px;line-height:18px;"
                + "font-family:" + font + ";\">&#128274; This secure link is personal to you. Please don't forward it.</div>"
                + "</td></tr>"



                // ── FOOTER ──────────────────────────────────────────────
                + "<tr><td bgcolor=\"#F7F8FC\" style=\"background:#F7F8FC;border-top:1px solid #E2E8F0;"
                + "padding:20px 32px 24px 32px;font-family:" + font + ";\">"
                + "<div style=\"color:#64748B;font-size:13px;line-height:20px;\">"
                + "Questions? Contact us at "
                + "<a href=\"mailto:" + support + "\" style=\"color:#C9561A;font-weight:700;text-decoration:none;\">"
                + support + "</a>"
                + "</div>"
                + "<div style=\"margin-top:8px;color:#94A3B8;font-size:12px;line-height:18px;\">"
                + "If you did not expect this message, you can safely ignore it.</div>"
                + "<div style=\"margin-top:14px;color:#45329E;font-size:13px;font-weight:800;\">" + org + "</div>"
                + "</td></tr>"

                + "</table>" // end card
                + "<div style=\"margin-top:16px;color:#94A3B8;font-size:11px;font-family:" + font + ";\">"
                + "Sent securely by Consent<span style=\"color:#EA6B28;font-weight:700;\">IQ</span></div>"
                + "</td></tr>"
                + "</table>" // end outer table
                + "</body></html>";
    }

    private static String firstName(String fullName) {
        if (!StringUtils.hasText(fullName)) {
            return "Customer";
        }
        String[] p = fullName.trim().split("\\s+");
        return p[0];
    }

    private static String trimTo(String s, int max) {
        if (s == null) {
            return "";
        }
        String t = s.trim();
        return t.length() <= max ? t : t.substring(0, max - 1) + "\u2026";
    }

    private static String escapeHtml(String s) {
        if (s == null) {
            return "";
        }
        return s.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;");
    }
}
