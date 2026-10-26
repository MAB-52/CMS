//package com.consentiq.service;
//
//import com.consentiq.config.ConsentMailProperties;
//import com.consentiq.model.entity.Customer;
//import com.consentiq.util.DeliveryChannelCatalog;
//import lombok.experimental.UtilityClass;
//import org.springframework.util.StringUtils;
//
//import java.util.List;
//
//@UtilityClass
//public class ConsentRequestEmailBuilder {
//
//    public String buildSubject(String consentTitle) {
//        String t = consentTitle == null
//                ? "Consent request"
//                : consentTitle.trim();
//
//        return "ConsentIQ • Action required — " + t;
//    }
//
//    public String buildHtmlBody(
//            Customer customer,
//            String consentTitle,
//            String descriptionPlain,
//            String consentLink,
//            List<String> normalizedCaptureChannels,
//            ConsentMailProperties mailProps,
//            String publicConsentBaseUrl,
//            String inviteToken,
//            Long consentDbId
//    ) {
//        return buildHtmlBody(
//                customer,
//                consentTitle,
//                descriptionPlain,
//                consentLink,
//                normalizedCaptureChannels,
//                mailProps,
//                publicConsentBaseUrl,
//                publicConsentBaseUrl,
//                inviteToken,
//                consentDbId
//        );
//    }
//
//    public String buildHtmlBody(
//            Customer customer,
//            String consentTitle,
//            String descriptionPlain,
//            String consentLink,
//            List<String> normalizedCaptureChannels,
//            ConsentMailProperties mailProps,
//            String publicConsentBaseUrl,
//            String apiBaseUrl,
//            String inviteToken,
//            Long consentDbId
//    ) {
//        String first = escapeHtml(firstName(customer.getFullName()));
//        String org = escapeHtml(trimTo(mailProps.getOrganizationName(), 120));
//        String support = escapeHtml(trimTo(mailProps.getSupportEmail(), 120));
//        String title = escapeHtml(trimTo(consentTitle, 200));
//
//        List<String> norm = normalizedCaptureChannels == null ? List.of() : normalizedCaptureChannels;
//        String channelsReadable = DeliveryChannelCatalog.formatForCustomer(norm);
//        String channelsReadableEsc = escapeHtml(trimTo(channelsReadable, 220));
//        String channelHeading = norm.size() <= 1 ? "Communication channel" : "Communication channels";
//
//        String bodyIntro = escapeHtml(trimTo(
//                descriptionPlain == null || descriptionPlain.isBlank()
//                        ? "We need your informed consent before we proceed with this communication request."
//                        : descriptionPlain,
//                650
//        ));
//
//        String consentLinkEsc = escapeHtml(consentLink == null ? "" : consentLink);
//
//        return "<!DOCTYPE html>"
//                + "<html lang=\"en\">"
//                + "<head>"
//                + "<meta charset=\"UTF-8\"/>"
//                + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>"
//                + "<title>Consent Request</title>"
//                + "</head>"
//                + "<body style=\""
//                + "margin:0;"
//                + "padding:0;"
//                + "background:#0b0d12;"
//                + "font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
//                + "\">"
//
//                // ── Outer table ──────────────────────────────────────────
//                + "<table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\""
//                + "background:"
//                + "  radial-gradient(circle at top left, rgba(168,85,247,.18), transparent 28%),"
//                + "  radial-gradient(circle at bottom right, rgba(34,193,255,.12), transparent 26%),"
//                + "  linear-gradient(180deg,#0b0d12 0%,#13161d 48%,#0f1117 100%);"
//                + "padding:40px 16px;"
//                + "\">"
//                + "<tr><td align=\"center\">"
//
//                // ── Inner card table ──────────────────────────────────────
//                + "<table role=\"presentation\" width=\"640\" cellspacing=\"0\" cellpadding=\"0\" style=\""
//                + "max-width:640px;"
//                + "border-radius:28px;"
//                + "overflow:hidden;"
//                + "background:rgba(24,24,28,.94);"
//                + "border:1px solid rgba(255,255,255,.08);"
//                + "box-shadow:0 10px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04);"
//                + "\">"
//
//                // ── HEADER ────────────────────────────────────────────────
//                + "<tr><td style=\"padding:26px 30px 0 30px;\">"
//                + "<table width=\"100%\" role=\"presentation\"><tr>"
//                + "<td align=\"left\">"
//                + "<div style=\"color:#a855f7;font-size:13px;font-weight:800;letter-spacing:.08em;\">&#9679; ConsentIQ</div>"
//                + "</td>"
//                + "<td align=\"right\">"
//                + "<span style=\""
//                + "display:inline-block;"
//                + "padding:7px 12px;"
//                + "border-radius:999px;"
//                + "background:rgba(139,195,74,.10);"
//                + "border:1px solid rgba(139,195,74,.22);"
//                + "color:#d9f99d;"
//                + "font-size:11px;"
//                + "font-weight:700;"
//                + "\">&#128274; Secure Request</span>"
//                + "</td>"
//                + "</tr></table>"
//                + "</td></tr>"
//
//                // ── TOP GRADIENT LINE ─────────────────────────────────────
//                + "<tr><td style=\"padding:18px 30px 0 30px;\">"
//                + "<div style=\""
//                + "height:2px;"
//                + "border-radius:999px;"
//                + "background:linear-gradient(90deg,#9333ea 0%,#ec4899 40%,#22c1ff 100%);"
//                + "\"></div>"
//                + "</td></tr>"
//
//                // ── HERO ICON ─────────────────────────────────────────────
//                + "<tr><td align=\"center\" style=\"padding-top:34px;\">"
//                + "<div style=\""
//                + "width:78px;"
//                + "height:78px;"
//                + "border-radius:50%;"
//                + "background:linear-gradient(135deg,rgba(168,85,247,.95),rgba(236,72,153,.92));"
//                + "text-align:center;"
//                + "line-height:78px;"
//                + "font-size:34px;"
//                + "color:#ffffff;"
//                + "box-shadow:0 0 0 6px rgba(255,255,255,.10),0 8px 28px rgba(168,85,247,.35);"
//                + "\">&#128737;</div>"
//                + "</td></tr>"
//
//                // ── TITLE ─────────────────────────────────────────────────
//                + "<tr><td align=\"center\" style=\"padding:22px 36px 10px 36px;\">"
//                + "<div style=\"color:#ffffff;font-size:34px;line-height:1.2;font-weight:800;letter-spacing:-.03em;\">Consent Request</div>"
//                + "<div style=\"margin-top:10px;color:#b8bcc8;font-size:15px;line-height:1.7;\">Review the details below and let us know your decision.</div>"
//                + "</td></tr>"
//
//                // ── MAIN PANEL ────────────────────────────────────────────
//                + "<tr><td style=\"padding:24px 26px 0 26px;\">"
//                + "<div style=\""
//                + "border-radius:22px;"
//                + "padding:24px;"
//                + "background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.02));"
//                + "border:1px solid rgba(255,255,255,.08);"
//                + "\">"
//
//                // greeting
//                + "<div style=\"color:#b8bcc8;font-size:13px;margin-bottom:10px;\">"
//                + "Hello, <span style=\"color:#d8b4fe;font-weight:700;\">" + first + "</span>"
//                + "</div>"
//
//                // consent title
//                + "<div style=\"color:#ffffff;font-size:28px;font-weight:800;line-height:1.3;margin-bottom:16px;\">"
//                + title
//                + "</div>"
//
//                // body intro
//                + "<div style=\"color:#b8bcc8;font-size:14px;line-height:1.8;margin-bottom:18px;\">"
//                + bodyIntro
//                + "</div>"
//
//                // what you are approving box
//                + "<div style=\""
//                + "margin-top:18px;"
//                + "border-radius:14px;"
//                + "padding:18px;"
//                + "background:rgba(255,255,255,.03);"
//                + "border:1px solid rgba(255,255,255,.08);"
//                + "\">"
//                + "<div style=\"color:#c084fc;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;\">What you are approving</div>"
//                + "<div style=\"color:#e5e7eb;font-size:15px;line-height:1.8;\">"
//                + "You are granting permission to receive communications related to <strong>" + title + "</strong>"
//                + "</div>"
//                + "</div>"
//
//                // channel summary box
//                + "<div style=\""
//                + "margin-top:18px;"
//                + "border-radius:14px;"
//                + "padding:14px 16px;"
//                + "background:rgba(255,255,255,.03);"
//                + "border:1px solid rgba(255,255,255,.08);"
//                + "\">"
//                + "<table width=\"100%\" role=\"presentation\"><tr>"
//                + "<td valign=\"top\" style=\""
//                + "white-space:nowrap;"
//                + "color:#8f96a3;"
//                + "font-size:12px;"
//                + "font-weight:700;"
//                + "letter-spacing:.06em;"
//                + "text-transform:uppercase;"
//                + "\">&#128225; " + escapeHtml(channelHeading) + "</td>"
//                + "<td align=\"right\" style=\"color:#ffffff;font-size:14px;font-weight:700;\">"
//                + channelsReadableEsc
//                + "</td>"
//                + "</tr></table>"
//                + "</div>"
//
//                + "</div>" // end main panel inner div
//                + "</td></tr>"
//
//                // ── CTA BUTTON ────────────────────────────────────────────
//                + "<tr><td align=\"center\" style=\"padding:30px 30px 12px 30px;\">"
//                + "<a href=\"" + consentLinkEsc + "\" style=\""
//                + "display:inline-block;"
//                + "text-decoration:none;"
//                + "background:linear-gradient(135deg,#9333ea 0%,#ec4899 100%);"
//                + "color:#ffffff;"
//                + "padding:16px 30px;"
//                + "border-radius:16px;"
//                + "font-size:15px;"
//                + "font-weight:800;"
//                + "box-shadow:0 10px 28px rgba(168,85,247,.32);"
//                + "\">Review &amp; Respond</a>"
//                + "</td></tr>"
//
//                // ── FALLBACK URL ──────────────────────────────────────────
////                + "<tr><td style=\""
////                + "padding:0 34px 24px 34px;"
////                + "text-align:center;"
////                + "color:#8f96a3;"
////                + "font-size:13px;"
////                + "line-height:1.7;"
////                + "\">"
////                + "If the button does not work, copy and paste this link into your browser:"
////                + "<div style=\"margin-top:10px;color:#22c1ff;word-break:break-all;\">"
////                + consentLinkEsc
////                + "</div>"
////                + "</td></tr>"
//
//                // ── FOOTER ────────────────────────────────────────────────
//                + "<tr><td style=\""
//                + "padding:22px 34px 30px 34px;"
//                + "border-top:1px solid rgba(255,255,255,.08);"
//                + "\">"
//                + "<div style=\"color:#b8bcc8;font-size:13px;line-height:1.8;\">"
//                + "Questions? Contact us at "
//                + "<a href=\"mailto:" + support + "\" style=\"color:#22c1ff;text-decoration:none;\">" + support + "</a>"
//                + "<br/><br/>"
//                + "If you did not expect this message, you may safely ignore it."
//                + "<br/><br/>"
//                + "<strong style=\"color:#ffffff;\">" + org + "</strong>"
//                + "</div>"
//                + "</td></tr>"
//
//                + "</table>" // end inner card table
//                + "</td></tr>"
//                + "</table>" // end outer table
//                + "</body></html>";
//    }
//
//    private static String firstName(String fullName) {
//        if (!StringUtils.hasText(fullName)) {
//            return "Customer";
//        }
//        String[] p = fullName.trim().split("\\s+");
//        return p[0];
//    }
//
//    private static String trimTo(String s, int max) {
//        if (s == null) {
//            return "";
//        }
//        String t = s.trim();
//        return t.length() <= max ? t : t.substring(0, max - 1) + "\u2026";
//    }
//
//    private static String escapeHtml(String s) {
//        if (s == null) {
//            return "";
//        }
//        return s.replace("&", "&amp;")
//                .replace("<", "&lt;")
//                .replace(">", "&gt;")
//                .replace("\"", "&quot;");
//    }
//}

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
        String channelsReadableEsc = escapeHtml(trimTo(channelsReadable, 220));
        String channelHeading = norm.size() <= 1 ? "Communication channel" : "Communication channels";
 
        String bodyIntro = escapeHtml(trimTo(
                descriptionPlain == null || descriptionPlain.isBlank()
                        ? "We need your informed consent before we proceed with this communication request."
                        : descriptionPlain,
                650
        ));
 
        String consentLinkEsc = escapeHtml(consentLink == null ? "" : consentLink);
 
        return "<!DOCTYPE html>"
                + "<html lang=\"en\">"
                + "<head>"
                + "<meta charset=\"UTF-8\"/>"
                + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>"
                + "<title>Consent Request</title>"
                + "</head>"
                + "<body style=\""
                + "margin:0;"
                + "padding:0;"
                + "background:#f0f2f5;"
                + "font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
                + "\">"
 
                // ── Outer table ──────────────────────────────────────────
                + "<table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\""
                + "background:#f0f2f5;"
                + "padding:32px 16px;"
                + "\">"
                + "<tr><td align=\"center\">"
 
                // ── Inner card table ──────────────────────────────────────
                + "<table role=\"presentation\" width=\"620\" cellspacing=\"0\" cellpadding=\"0\" style=\""
                + "max-width:620px;"
                + "border-radius:8px;"
                + "overflow:hidden;"
                + "background:#ffffff;"
                + "border:1px solid #e2e6ea;"
                + "box-shadow:0 2px 12px rgba(0,0,0,.08);"
                + "\">"
 
                // ── HEADER ────────────────────────────────────────────────
                + "<tr><td style=\"background:#1a2e4a;padding:22px 32px;\">"
                + "<table width=\"100%\" role=\"presentation\"><tr>"
                + "<td align=\"left\">"
                + "<span style=\"color:#ffffff;font-size:15px;font-weight:700;letter-spacing:.04em;\">ConsentIQ</span>"
                + "</td>"
                + "<td align=\"right\">"
                + "<span style=\""
                + "display:inline-block;"
                + "padding:5px 11px;"
                + "border-radius:4px;"
                + "background:#e8f5e9;"
                + "color:#2e7d32;"
                + "font-size:11px;"
                + "font-weight:700;"
                + "letter-spacing:.04em;"
                + "\">&#128274; Secure Request</span>"
                + "</td>"
                + "</tr></table>"
                + "</td></tr>"
 
                // ── ACCENT LINE ───────────────────────────────────────────
                + "<tr><td style=\"padding:0;\">"
                + "<div style=\"height:3px;background:linear-gradient(90deg,#1a6fbf 0%,#0ea5e9 100%);\"></div>"
                + "</td></tr>"
 
                // ── HERO ICON ─────────────────────────────────────────────
                + "<tr><td align=\"center\" style=\"padding:36px 32px 20px 32px;\">"
                + "<div style=\""
                + "width:64px;"
                + "height:64px;"
                + "border-radius:50%;"
                + "background:#1a2e4a;"
                + "text-align:center;"
                + "line-height:64px;"
                + "font-size:28px;"
                + "margin:0 auto 20px auto;"
                + "\">&#128737;</div>"
                + "<div style=\"color:#1a2e4a;font-size:26px;font-weight:800;letter-spacing:-.02em;margin-bottom:8px;\">Consent Request</div>"
                + "<div style=\"color:#64748b;font-size:14px;line-height:1.6;\">Review the details below and let us know your decision.</div>"
                + "</td></tr>"
 
                // ── MAIN PANEL ────────────────────────────────────────────
                + "<tr><td style=\"padding:0 28px 24px 28px;\">"
                + "<div style=\""
                + "border-radius:8px;"
                + "padding:24px;"
                + "background:#f8fafc;"
                + "border:1px solid #e2e8f0;"
                + "\">"
 
                // greeting
                + "<div style=\"color:#475569;font-size:13px;margin-bottom:12px;\">"
                + "Hello, <span style=\"color:#1a2e4a;font-weight:700;\">" + first + "</span>"
                + "</div>"
 
                // consent title
                + "<div style=\"color:#1a2e4a;font-size:22px;font-weight:800;line-height:1.3;margin-bottom:14px;\">"
                + title
                + "</div>"
 
                // body intro
                + "<div style=\"color:#475569;font-size:14px;line-height:1.8;margin-bottom:18px;\">"
                + bodyIntro
                + "</div>"
 
                // what you are approving box
                + "<div style=\""
                + "margin-top:16px;"
                + "border-radius:6px;"
                + "padding:16px;"
                + "background:#eff6ff;"
                + "border:1px solid #bfdbfe;"
                + "\">"
                + "<div style=\"color:#1a4fa3;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px;\">What you are approving</div>"
                + "<div style=\"color:#1e3a5f;font-size:14px;line-height:1.7;\">"
                + "You are granting permission to receive communications related to <strong>" + title + "</strong>"
                + "</div>"
                + "</div>"
 
                // channel summary box
                + "<div style=\""
                + "margin-top:14px;"
                + "border-radius:6px;"
                + "padding:12px 16px;"
                + "background:#f0fdf4;"
                + "border:1px solid #bbf7d0;"
                + "\">"
                + "<table width=\"100%\" role=\"presentation\"><tr>"
                + "<td valign=\"top\" style=\""
                + "white-space:nowrap;"
                + "color:#166534;"
                + "font-size:12px;"
                + "font-weight:700;"
                + "letter-spacing:.06em;"
                + "text-transform:uppercase;"
                + "\">&#128225; " + escapeHtml(channelHeading) + "</td>"
                + "<td align=\"right\" style=\"color:#14532d;font-size:14px;font-weight:700;\">"
                + channelsReadableEsc
                + "</td>"
                + "</tr></table>"
                + "</div>"
 
                + "</div>" // end main panel inner div
                + "</td></tr>"
 
                // ── CTA BUTTON ────────────────────────────────────────────
                + "<tr><td align=\"center\" style=\"padding:8px 32px 28px 32px;\">"
                + "<a href=\"" + consentLinkEsc + "\" style=\""
                + "display:inline-block;"
                + "text-decoration:none;"
                + "background:#1a6fbf;"
                + "color:#ffffff;"
                + "padding:14px 32px;"
                + "border-radius:6px;"
                + "font-size:15px;"
                + "font-weight:700;"
                + "letter-spacing:.02em;"
                + "box-shadow:0 2px 8px rgba(26,111,191,.25);"
                + "\">Review &amp; Respond</a>"
                + "</td></tr>"
 
                // ── FALLBACK URL ──────────────────────────────────────────
//                + "<tr><td style=\""
//                + "padding:0 34px 24px 34px;"
//                + "text-align:center;"
//                + "color:#8f96a3;"
//                + "font-size:13px;"
//                + "line-height:1.7;"
//                + "\">"
//                + "If the button does not work, copy and paste this link into your browser:"
//                + "<div style=\"margin-top:10px;color:#22c1ff;word-break:break-all;\">"
//                + consentLinkEsc
//                + "</div>"
//                + "</td></tr>"
 
                // ── FOOTER ────────────────────────────────────────────────
                + "<tr><td style=\""
                + "padding:20px 32px 28px 32px;"
                + "border-top:1px solid #e2e8f0;"
                + "background:#f8fafc;"
                + "\">"
                + "<div style=\"color:#64748b;font-size:13px;line-height:1.8;\">"
                + "Questions? Contact us at "
                + "<a href=\"mailto:" + support + "\" style=\"color:#1a6fbf;text-decoration:none;\">" + support + "</a>"
                + "<br/><br/>"
                + "If you did not expect this message, you may safely ignore it."
                + "<br/><br/>"
                + "<strong style=\"color:#1a2e4a;\">" + org + "</strong>"
                + "</div>"
                + "</td></tr>"
 
                + "</table>" // end inner card table
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