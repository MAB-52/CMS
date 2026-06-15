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
//	public String buildSubject(String consentTitle) {
//		String t = consentTitle == null ? "Consent request" : consentTitle.trim();
//		return "Action required: review your consent request — " + t;
//	}
//
//	/**
//	 * Professional HTML consent-request email. {@code normalizedCaptureChannels}
//	 * lists the channels chosen at capture time (subset of the template); labels
//	 * are shown clearly to the customer.
//	 */
//	public String buildHtmlBody(Customer customer, String consentTitle, String descriptionPlain, String consentLink,
//			List<String> normalizedCaptureChannels, ConsentMailProperties mailProps, String publicConsentBaseUrl,
//			String inviteToken, Long consentDbId) {
//		return buildHtmlBody(customer, consentTitle, descriptionPlain, consentLink, normalizedCaptureChannels,
//				mailProps, publicConsentBaseUrl, publicConsentBaseUrl, inviteToken, consentDbId);
//	}
//
//	public String buildHtmlBody(Customer customer, String consentTitle, String descriptionPlain, String consentLink,
//			List<String> normalizedCaptureChannels, ConsentMailProperties mailProps, String publicConsentBaseUrl,
//			String apiBaseUrl, String inviteToken, Long consentDbId) {
//		String first = escapeHtml(firstName(customer.getFullName()));
//		String org = escapeHtml(mailProps.getOrganizationName());
//		String support = escapeHtml(mailProps.getSupportEmail());
//		String title = escapeHtml(trimTo(consentTitle, 200));
//		List<String> norm = normalizedCaptureChannels == null ? List.of() : normalizedCaptureChannels;
//		String channelsReadable = DeliveryChannelCatalog.formatForCustomer(norm);
//		String channelsReadableEsc = escapeHtml(trimTo(channelsReadable, 220));
//		String channelHeading = norm.size() <= 1 ? escapeHtml("Delivery channel") : escapeHtml("Delivery channels");
//		String bodyIntro = escapeHtml(trimTo(descriptionPlain == null || descriptionPlain.isBlank()
//				? "We need your informed consent before we can proceed with the communication described in this request."
//				: descriptionPlain, 650));
//		String apiBase = apiBaseUrl == null ? "" : apiBaseUrl.trim();
//		String formAction = (apiBase.isEmpty() ? "" : apiBase.replaceAll("/$", "")) + "/api/public/language-preference";
//		String consentDbIdStr = consentDbId == null ? "" : String.valueOf(consentDbId);
//		String tokenEsc = escapeHtml(inviteToken == null ? "" : inviteToken);
////		String langPrefSection = "<tr><td style=\"padding:0 32px 24px 32px;\">"
////				+ "<div style=\"border:1px solid #e2e8f0;border-radius:10px;padding:18px 20px;background:#f8fafc;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;\">"
////				+ "<div style=\"font-size:15px;font-weight:800;color:#0f172a;margin-bottom:14px;\">Select your language preference for this consent</div>"
////				+ "<form method=\"post\" action=\"" + formAction + "\" style=\"margin:0;\">"
////				+ "<input type=\"hidden\" name=\"token\" value=\"" + tokenEsc + "\"/>"
////				+ "<input type=\"hidden\" name=\"consentDbId\" value=\"" + consentDbIdStr + "\"/>"
////				+ "<div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px 16px;font-size:14px;color:#334155;margin-bottom:18px;\">"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"english\" checked style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>English</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"hindi\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Hindi</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"marathi\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Marathi</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"gujarati\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Gujarati</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"bengali\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Bengali</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"tamil\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Tamil</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"telugu\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Telugu</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"malayalam\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Malayalam</span></label>"
////				+ "<label style=\"display:flex;align-items:center;gap:8px;cursor:pointer;\"><input type=\"checkbox\" name=\"lang\" value=\"urdu\" style=\"width:18px;height:18px;accent-color:#2563eb;cursor:pointer;\"/><span>Urdu</span></label>"
////				+ "</div>" + "<div style=\"text-align:center;margin-top:4px;\">"
////				+ "<button type=\"submit\" style=\"background:#2563eb;color:#ffffff;padding:12px 24px;border-radius:8px;border:none;font-weight:700;font-size:14px;cursor:pointer;\">Save my language preference</button>"
////				+ "</div>" + "</form>" + "</div>" + "</td></tr>";
//
//		return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"/>"
//				+ "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>"
//				+ "<title>Consent request</title></head>"
//				+ "<body style=\"margin:0;padding:0;background:#f1f5f9;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;\">"
//				+ "<table role=\"presentation\" width=\"100%%\" cellspacing=\"0\" cellpadding=\"0\" style=\"background:#f1f5f9;padding:32px 16px;\">"
//				+ "<tr><td align=\"center\">"
//				+ "<table role=\"presentation\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" "
//				+ "style=\"max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);\">"
//				+ "<tr><td style=\"padding:28px 32px 8px 32px;font-size:13px;letter-spacing:0.08em;color:#64748b;text-transform:uppercase;font-weight:700;\">"
//				+ org + "</td></tr>"
//				+ "<tr><td style=\"padding:8px 32px 0 32px;font-size:22px;font-weight:800;color:#0f172a;line-height:1.3;\">Your consent is requested</td></tr>"
//				+ "<tr><td style=\"padding:16px 32px 0 32px;font-size:15px;line-height:1.65;color:#334155;\">"
//				+ "<p style=\"margin:0 0 14px 0;\">Dear " + first + ",</p>" + "<p style=\"margin:0 0 14px 0;\"><strong>"
//				+ org + "</strong> is requesting your permission regarding <strong>" + title + "</strong>. "
//				+ "This consent communication is associated with the following outreach channels: <strong>"
//				+ channelsReadableEsc + "</strong>. "
//				+ "You are opening this request using the secure link we sent to your registered email address.</p>"
//				+ "<p style=\"margin:0 0 14px 0;\">" + bodyIntro + "</p>"
//				+ "<p style=\"margin:0;\">Please use the button below to open the consent review page and choose <strong>Accept</strong> or <strong>Decline</strong>.</p>"
//				+ "</td></tr>" + "<tr><td style=\"padding:20px 32px 0 32px;\">"
//				+ "<div style=\"border:1px solid #e2e8f0;border-radius:10px;padding:16px 18px;background:#f8fafc;\">"
//				+ "<div style=\"font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;\">"
//				+ channelHeading + "</div>"
//				+ "<div style=\"font-size:17px;font-weight:700;color:#0f172a;margin-top:6px;\">"
//				+ (StringUtils.hasText(channelsReadableEsc) ? channelsReadableEsc : escapeHtml("—")) + "</div>"
//				+ "<div style=\"font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;margin-top:14px;\">What you are approving</div>"
//				+ "<div style=\"font-size:17px;font-weight:700;color:#0f172a;margin-top:6px;\">" + title + "</div>"
//				+ "</div></td></tr>" + "<tr><td align=\"center\" style=\"padding:28px 32px 8px 32px;\">" + "<a href=\""
//				+ consentLink
//				+ "\" style=\"display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:10px;\">Review &amp; respond</a>"
//				+ "</td></tr>"
//				+ "<tr><td style=\"padding:0 32px 24px 32px;font-size:13px;line-height:1.6;color:#64748b;text-align:center;\">"
//				+ "If the button does not work, copy and paste this link into your browser:<br/>"
//				+ "<span style=\"word-break:break-all;color:#2563eb;\">" + consentLink + "</span></td></tr>"
////				+ langPrefSection
//				+ "<tr><td style=\"padding:0 32px 28px 32px;font-size:13px;line-height:1.6;color:#475569;border-top:1px solid #e2e8f0;\">"
//				+ "<p style=\"margin:20px 0 8px 0;\">Questions? Contact us at " + "<a href=\"mailto:" + support
//				+ "\" style=\"color:#2563eb;\">" + support + "</a>.</p>"
//				+ "<p style=\"margin:0;\">If you did not expect this message, you may ignore it.<br/><strong>" + org
//				+ "</strong></p>" + "</td></tr></table></td></tr></table></body></html>";
//	}
//
//	private static String firstName(String fullName) {
//		if (!StringUtils.hasText(fullName)) {
//			return "Customer";
//		}
//		String[] p = fullName.trim().split("\\s+");
//		return p[0];
//	}
//
//	private static String trimTo(String s, int max) {
//		if (s == null) {
//			return "";
//		}
//		String t = s.trim();
//		return t.length() <= max ? t : t.substring(0, max - 1) + "…";
//	}
//
//	private static String escapeHtml(String s) {
//		return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;");
//	}
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
                + "background:#0b0d12;"
                + "font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;"
                + "\">"

                // ── Outer table ──────────────────────────────────────────
                + "<table role=\"presentation\" width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" style=\""
                + "background:"
                + "  radial-gradient(circle at top left, rgba(168,85,247,.18), transparent 28%),"
                + "  radial-gradient(circle at bottom right, rgba(34,193,255,.12), transparent 26%),"
                + "  linear-gradient(180deg,#0b0d12 0%,#13161d 48%,#0f1117 100%);"
                + "padding:40px 16px;"
                + "\">"
                + "<tr><td align=\"center\">"

                // ── Inner card table ──────────────────────────────────────
                + "<table role=\"presentation\" width=\"640\" cellspacing=\"0\" cellpadding=\"0\" style=\""
                + "max-width:640px;"
                + "border-radius:28px;"
                + "overflow:hidden;"
                + "background:rgba(24,24,28,.94);"
                + "border:1px solid rgba(255,255,255,.08);"
                + "box-shadow:0 10px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04);"
                + "\">"

                // ── HEADER ────────────────────────────────────────────────
                + "<tr><td style=\"padding:26px 30px 0 30px;\">"
                + "<table width=\"100%\" role=\"presentation\"><tr>"
                + "<td align=\"left\">"
                + "<div style=\"color:#a855f7;font-size:13px;font-weight:800;letter-spacing:.08em;\">&#9679; ConsentIQ</div>"
                + "</td>"
                + "<td align=\"right\">"
                + "<span style=\""
                + "display:inline-block;"
                + "padding:7px 12px;"
                + "border-radius:999px;"
                + "background:rgba(139,195,74,.10);"
                + "border:1px solid rgba(139,195,74,.22);"
                + "color:#d9f99d;"
                + "font-size:11px;"
                + "font-weight:700;"
                + "\">&#128274; Secure Request</span>"
                + "</td>"
                + "</tr></table>"
                + "</td></tr>"

                // ── TOP GRADIENT LINE ─────────────────────────────────────
                + "<tr><td style=\"padding:18px 30px 0 30px;\">"
                + "<div style=\""
                + "height:2px;"
                + "border-radius:999px;"
                + "background:linear-gradient(90deg,#9333ea 0%,#ec4899 40%,#22c1ff 100%);"
                + "\"></div>"
                + "</td></tr>"

                // ── HERO ICON ─────────────────────────────────────────────
                + "<tr><td align=\"center\" style=\"padding-top:34px;\">"
                + "<div style=\""
                + "width:78px;"
                + "height:78px;"
                + "border-radius:50%;"
                + "background:linear-gradient(135deg,rgba(168,85,247,.95),rgba(236,72,153,.92));"
                + "text-align:center;"
                + "line-height:78px;"
                + "font-size:34px;"
                + "color:#ffffff;"
                + "box-shadow:0 0 0 6px rgba(255,255,255,.10),0 8px 28px rgba(168,85,247,.35);"
                + "\">&#128737;</div>"
                + "</td></tr>"

                // ── TITLE ─────────────────────────────────────────────────
                + "<tr><td align=\"center\" style=\"padding:22px 36px 10px 36px;\">"
                + "<div style=\"color:#ffffff;font-size:34px;line-height:1.2;font-weight:800;letter-spacing:-.03em;\">Consent Request</div>"
                + "<div style=\"margin-top:10px;color:#b8bcc8;font-size:15px;line-height:1.7;\">Review the details below and let us know your decision.</div>"
                + "</td></tr>"

                // ── MAIN PANEL ────────────────────────────────────────────
                + "<tr><td style=\"padding:24px 26px 0 26px;\">"
                + "<div style=\""
                + "border-radius:22px;"
                + "padding:24px;"
                + "background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.02));"
                + "border:1px solid rgba(255,255,255,.08);"
                + "\">"

                // greeting
                + "<div style=\"color:#b8bcc8;font-size:13px;margin-bottom:10px;\">"
                + "Hello, <span style=\"color:#d8b4fe;font-weight:700;\">" + first + "</span>"
                + "</div>"

                // consent title
                + "<div style=\"color:#ffffff;font-size:28px;font-weight:800;line-height:1.3;margin-bottom:16px;\">"
                + title
                + "</div>"

                // body intro
                + "<div style=\"color:#b8bcc8;font-size:14px;line-height:1.8;margin-bottom:18px;\">"
                + bodyIntro
                + "</div>"

                // what you are approving box
                + "<div style=\""
                + "margin-top:18px;"
                + "border-radius:14px;"
                + "padding:18px;"
                + "background:rgba(255,255,255,.03);"
                + "border:1px solid rgba(255,255,255,.08);"
                + "\">"
                + "<div style=\"color:#c084fc;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;margin-bottom:10px;\">What you are approving</div>"
                + "<div style=\"color:#e5e7eb;font-size:15px;line-height:1.8;\">"
                + "You are granting permission to receive communications related to <strong>" + title + "</strong>"
                + "</div>"
                + "</div>"

                // channel summary box
                + "<div style=\""
                + "margin-top:18px;"
                + "border-radius:14px;"
                + "padding:14px 16px;"
                + "background:rgba(255,255,255,.03);"
                + "border:1px solid rgba(255,255,255,.08);"
                + "\">"
                + "<table width=\"100%\" role=\"presentation\"><tr>"
                + "<td valign=\"top\" style=\""
                + "white-space:nowrap;"
                + "color:#8f96a3;"
                + "font-size:12px;"
                + "font-weight:700;"
                + "letter-spacing:.06em;"
                + "text-transform:uppercase;"
                + "\">&#128225; " + escapeHtml(channelHeading) + "</td>"
                + "<td align=\"right\" style=\"color:#ffffff;font-size:14px;font-weight:700;\">"
                + channelsReadableEsc
                + "</td>"
                + "</tr></table>"
                + "</div>"

                + "</div>" // end main panel inner div
                + "</td></tr>"

                // ── CTA BUTTON ────────────────────────────────────────────
                + "<tr><td align=\"center\" style=\"padding:30px 30px 12px 30px;\">"
                + "<a href=\"" + consentLinkEsc + "\" style=\""
                + "display:inline-block;"
                + "text-decoration:none;"
                + "background:linear-gradient(135deg,#9333ea 0%,#ec4899 100%);"
                + "color:#ffffff;"
                + "padding:16px 30px;"
                + "border-radius:16px;"
                + "font-size:15px;"
                + "font-weight:800;"
                + "box-shadow:0 10px 28px rgba(168,85,247,.32);"
                + "\">Review &amp; Respond</a>"
                + "</td></tr>"

                // ── FALLBACK URL ──────────────────────────────────────────
                + "<tr><td style=\""
                + "padding:0 34px 24px 34px;"
                + "text-align:center;"
                + "color:#8f96a3;"
                + "font-size:13px;"
                + "line-height:1.7;"
                + "\">"
                + "If the button does not work, copy and paste this link into your browser:"
                + "<div style=\"margin-top:10px;color:#22c1ff;word-break:break-all;\">"
                + consentLinkEsc
                + "</div>"
                + "</td></tr>"

                // ── FOOTER ────────────────────────────────────────────────
                + "<tr><td style=\""
                + "padding:22px 34px 30px 34px;"
                + "border-top:1px solid rgba(255,255,255,.08);"
                + "\">"
                + "<div style=\"color:#b8bcc8;font-size:13px;line-height:1.8;\">"
                + "Questions? Contact us at "
                + "<a href=\"mailto:" + support + "\" style=\"color:#22c1ff;text-decoration:none;\">" + support + "</a>"
                + "<br/><br/>"
                + "If you did not expect this message, you may safely ignore it."
                + "<br/><br/>"
                + "<strong style=\"color:#ffffff;\">" + org + "</strong>"
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