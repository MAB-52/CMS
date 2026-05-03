package com.consentiq.service;

import com.consentiq.config.ConsentMailProperties;
import com.consentiq.model.entity.Customer;
import lombok.experimental.UtilityClass;
import org.springframework.util.StringUtils;

@UtilityClass
public class ConsentRequestEmailBuilder {

    public String buildSubject(String consentTitle) {
        String t = consentTitle == null ? "Consent request" : consentTitle.trim();
        return "Action required: review your consent request — " + t;
    }

    /**
     * Professional HTML consent-request email. Sent to the customer's registered email regardless of
     * the template's delivery channel selection.
     */
    public String buildHtmlBody(
            Customer customer,
            String consentTitle,
            String descriptionPlain,
            String consentLink,
            String deliveryChannelLabel,
            ConsentMailProperties mailProps) {
        String first = escapeHtml(firstName(customer.getFullName()));
        String org = escapeHtml(mailProps.getOrganizationName());
        String support = escapeHtml(mailProps.getSupportEmail());
        String title = escapeHtml(trimTo(consentTitle, 200));
        String channel = escapeHtml(trimTo(deliveryChannelLabel, 80));
        String bodyIntro =
                escapeHtml(
                        trimTo(
                                descriptionPlain == null || descriptionPlain.isBlank()
                                        ? "We need your informed consent before we can proceed with the communication described in this request."
                                        : descriptionPlain,
                                650));

        return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"/>"
                + "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>"
                + "<title>Consent request</title></head>"
                + "<body style=\"margin:0;padding:0;background:#f1f5f9;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;\">"
                + "<table role=\"presentation\" width=\"100%%\" cellspacing=\"0\" cellpadding=\"0\" style=\"background:#f1f5f9;padding:32px 16px;\">"
                + "<tr><td align=\"center\">"
                + "<table role=\"presentation\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" "
                + "style=\"max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.08);\">"
                + "<tr><td style=\"padding:28px 32px 8px 32px;font-size:13px;letter-spacing:0.08em;color:#64748b;text-transform:uppercase;font-weight:700;\">"
                + org
                + "</td></tr>"
                + "<tr><td style=\"padding:8px 32px 0 32px;font-size:22px;font-weight:800;color:#0f172a;line-height:1.3;\">Your consent is requested</td></tr>"
                + "<tr><td style=\"padding:16px 32px 0 32px;font-size:15px;line-height:1.65;color:#334155;\">"
                + "<p style=\"margin:0 0 14px 0;\">Dear "
                + first
                + ",</p>"
                + "<p style=\"margin:0 0 14px 0;\"><strong>"
                + org
                + "</strong> is requesting your permission regarding <strong>"
                + title
                + "</strong>. "
                + "The outreach channel indicated for ongoing communication is <strong>"
                + channel
                + "</strong>. "
                + "This secure email is sent to your registered address so you can review and respond independently of that channel.</p>"
                + "<p style=\"margin:0 0 14px 0;\">"
                + bodyIntro
                + "</p>"
                + "<p style=\"margin:0;\">Please use the button below to open the consent review page and choose <strong>Accept</strong> or <strong>Decline</strong>.</p>"
                + "</td></tr>"
                + "<tr><td style=\"padding:20px 32px 0 32px;\">"
                + "<div style=\"border:1px solid #e2e8f0;border-radius:10px;padding:16px 18px;background:#f8fafc;\">"
                + "<div style=\"font-size:12px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.06em;\">What you are approving</div>"
                + "<div style=\"font-size:17px;font-weight:700;color:#0f172a;margin-top:6px;\">"
                + title
                + "</div>"
                + "</div></td></tr>"
                + "<tr><td align=\"center\" style=\"padding:28px 32px 8px 32px;\">"
                + "<a href=\""
                + consentLink
                + "\" style=\"display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:10px;\">Review &amp; respond</a>"
                + "</td></tr>"
                + "<tr><td style=\"padding:0 32px 24px 32px;font-size:13px;line-height:1.6;color:#64748b;text-align:center;\">"
                + "If the button does not work, copy and paste this link into your browser:<br/>"
                + "<span style=\"word-break:break-all;color:#2563eb;\">"
                + consentLink
                + "</span></td></tr>"
                + "<tr><td style=\"padding:0 32px 28px 32px;font-size:13px;line-height:1.6;color:#475569;border-top:1px solid #e2e8f0;\">"
                + "<p style=\"margin:20px 0 8px 0;\">Questions? Contact us at "
                + "<a href=\"mailto:"
                + support
                + "\" style=\"color:#2563eb;\">"
                + support
                + "</a>.</p>"
                + "<p style=\"margin:0;\">If you did not expect this message, you may ignore it.<br/><strong>"
                + org
                + "</strong></p>"
                + "</td></tr></table></td></tr></table></body></html>";
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
        return t.length() <= max ? t : t.substring(0, max - 1) + "…";
    }

    private static String escapeHtml(String s) {
        return s.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;");
    }
}
