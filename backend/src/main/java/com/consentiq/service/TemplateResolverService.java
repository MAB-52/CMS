//package com.consentiq.service;
//
//import java.lang.reflect.Field;
//import java.time.LocalDate;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//import org.springframework.stereotype.Service;
//
//import com.consentiq.model.entity.Consent;
//import com.consentiq.model.entity.ConsentBroadcastRequest;
//import com.consentiq.model.entity.Customer;
//import com.consentiq.model.entity.MergeTag;
//import com.consentiq.repository.MergeTagRepository;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//
//@Service
//@RequiredArgsConstructor
//@Slf4j
//public class TemplateResolverService {
//
//	private final MergeTagRepository mergeTagRepository;
//
//
//	public String resolve(String htmlContent, Customer customer, ConsentBroadcastRequest b, List<MergeTag> allTags) {
//		if (htmlContent == null)
//			return "";
//
//		Map<String, String> staticVars = buildStaticVars(customer, b);
//
//		for (Map.Entry<String, String> entry : staticVars.entrySet()) {
//			String pattern = "\\{\\{\\s*" + java.util.regex.Pattern.quote(entry.getKey()) + "\\s*\\}\\}";
//			htmlContent = htmlContent.replaceAll(pattern, java.util.regex.Matcher.quoteReplacement(entry.getValue()));
//		}
//
//		for (MergeTag tag : allTags) {
//			if (!htmlContent.contains(tag.getTagKey()))
//				continue;
//			String replacement;
//			if (tag.getCustomerField() != null && !tag.getCustomerField().isBlank()) {
//				replacement = getCustomerFieldValue(customer, tag.getCustomerField(), tag);
//			} else {
//				replacement = tag.getSampleValue() != null ? tag.getSampleValue() : "";
//			}
//			htmlContent = htmlContent.replace(tag.getTagKey(), replacement);
//			log.debug("Resolved tag {} → '{}'", tag.getTagKey(), replacement);
//		}
//
//		return htmlContent;
//	}
//
//	/**
//	 * Builds the same static variables your old resolveTemplateHtml() had. These
//	 * cover system/consent-level values not tied to a single Customer field.
//	 */
//	private Map<String, String> buildStaticVars(Customer customer, ConsentBroadcastRequest b) {
//		Consent consent = b != null ? b.getConsentTemplate() : null;
//
//		String today = LocalDate.now().toString();
//		String companyName = "ConsentIQ";
//		String validityDate = consent != null && consent.getValidityEndDate() != null
//				? consent.getValidityEndDate().toString()
//				: "";
//		String validityPeriod = consent != null && consent.getValidityPeriodDays() != null
//				? consent.getValidityPeriodDays() + " days"
//				: "";
//		String consentLink = consent != null ? "https://your-domain.com/consent/" + consent.getId() : "";
//		String optOutLink = "https://your-domain.com/opt-out/" + customer.getId();
//
//		Map<String, String> vars = new HashMap<>();
//		// These KEY names must match what's stored in merge_tags.tag_key
//		// e.g. tag_key = "{{CUSTOMER_NAME}}" → key here = "CUSTOMER_NAME"
//		vars.put("CUSTOMER_NAME",
//				escapeHtml(customer.getFullName() != null ? customer.getFullName() : "Valued Customer"));
//		vars.put("CUSTOMER_ID", escapeHtml(customer.getCustomerId() != null ? customer.getCustomerId() : ""));
//		vars.put("ACCOUNT_NUMBER", escapeHtml(customer.getCustomerId() != null ? customer.getCustomerId() : ""));
//		vars.put("MOBILE_NUMBER", escapeHtml(customer.getMobileNumber() != null ? customer.getMobileNumber() : ""));
//		vars.put("EMAIL_ADDRESS", escapeHtml(customer.getEmail() != null ? customer.getEmail() : ""));
//		vars.put("COMPANY_NAME", escapeHtml(companyName));
//		vars.put("DATE", today);
//		vars.put("VALIDITY_DATE", validityDate);
//		vars.put("VALIDITY_PERIOD", validityPeriod);
//		vars.put("OPT_OUT_LINK", optOutLink);
//		vars.put("CONSENT_LINK", consentLink);
//		return vars;
//	}
//
//	private String getCustomerFieldValue(Customer customer, String fieldName, MergeTag tag) {
//		try {
//			Class<?> clazz = customer.getClass();
//			while (clazz != null) {
//				try {
//					Field field = clazz.getDeclaredField(fieldName);
//					field.setAccessible(true);
//					Object value = field.get(customer);
//					if (value == null)
//						return "";
//
//					if (value instanceof Boolean boolVal) {
//						if (boolVal) {
//							return tag.getTrueLabel() != null && !tag.getTrueLabel().isBlank() ? tag.getTrueLabel()
//									: "Yes";
//						} else {
//							return tag.getFalseLabel() != null && !tag.getFalseLabel().isBlank() ? tag.getFalseLabel()
//									: "No";
//						}
//					}
//
//					return escapeHtml(value.toString());
//				} catch (NoSuchFieldException e) {
//					clazz = clazz.getSuperclass();
//				}
//			}
//			return "";
//		} catch (IllegalAccessException e) {
//			log.error("Cannot access field '{}': {}", fieldName, e.getMessage());
//			return "";
//		}
//	}
//
//	private String escapeHtml(String text) {
//		if (text == null)
//			return "";
//		return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("\"", "&quot;");
//	}
//
//	public String resolve(String htmlContent, Customer customer, ConsentBroadcastRequest b) {
//		return resolve(htmlContent, customer, b, mergeTagRepository.findAll());
//	}
//}

package com.consentiq.service;

import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentImage;
import com.consentiq.model.entity.Customer;
import com.consentiq.model.entity.MergeTag;
import com.consentiq.repository.ConsentImageRepository;
import com.consentiq.repository.MergeTagRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class TemplateResolverService {

    private static final Logger log = LoggerFactory.getLogger(TemplateResolverService.class);

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    private final MergeTagRepository mergeTagRepository;
    private final ConsentImageRepository consentImageRepository;

    /**
     * Primary entry point. Resolves a consent's HTML content for a given customer,
     * substituting merge tags with real customer data and embedding images as base64.
     * No broadcast context — uses only the consent template and customer record.
     */
    public String resolve(String htmlContent, Customer customer, Consent consent) {
        String cu = currentUser();
        log.debug("Entering resolve | params: consentId={} | customerId={}",
                consent != null && consent.getId() != null ? consent.getId() : null,
                customer != null && customer.getId() != null ? customer.getId() : null);
        log.info("User={} | action=resolve | entity=Template | id={}", cu,
                consent != null && consent.getId() != null ? String.valueOf(consent.getId()) : "n/a");
        log.info("Executing DB query | method=findAll | param=MergeTag");
        List<MergeTag> allTags = mergeTagRepository.findAll();
        log.info("DB query completed | method=findAll | size={}", allTags.size());
        String result = resolve(htmlContent, customer, consent, allTags);
        log.debug("Exiting resolve | result=length={}", result != null ? result.length() : 0);
        return result;
    }

    /**
     * Overload accepting pre-loaded tags (avoids repeated DB hits in bulk scenarios).
     */
    public String resolve(String htmlContent, Customer customer, Consent consent, List<MergeTag> allTags) {
        String cu = currentUser();
        log.debug("Entering resolve | params: consentId={} | tagCount={}",
                consent != null && consent.getId() != null ? consent.getId() : null,
                allTags != null ? allTags.size() : 0);
        log.info("User={} | action=resolve | entity=Template | id={}", cu,
                consent != null && consent.getId() != null ? String.valueOf(consent.getId()) : "n/a");
        if (htmlContent == null) {
            log.debug("Exiting resolve | result=empty");
            return "";
        }

        // 1. Replace static/system variables ({{CUSTOMER_NAME}}, {{DATE}}, etc.)
        Map<String, String> staticVars = buildStaticVars(customer, consent);
        for (Map.Entry<String, String> entry : staticVars.entrySet()) {
            String pattern = "\\{\\{\\s*" + Pattern.quote(entry.getKey()) + "\\s*\\}\\}";
            htmlContent = htmlContent.replaceAll(pattern, Matcher.quoteReplacement(entry.getValue()));
        }

        // 2. Replace dynamic merge tags ({{tag_key}} → customer field value)
        for (MergeTag tag : allTags) {
            if (!htmlContent.contains(tag.getTagKey())) continue;
            String replacement;
            if (tag.getCustomerField() != null && !tag.getCustomerField().isBlank()) {
                replacement = getCustomerFieldValue(customer, tag.getCustomerField(), tag);
            } else {
                replacement = tag.getSampleValue() != null ? tag.getSampleValue() : "";
            }
            htmlContent = htmlContent.replace(tag.getTagKey(), replacement);
            log.debug("Resolved tag {} → '{}'", tag.getTagKey(), replacement);
        }

        // 3. Embed images referenced by ID as base64 data URIs
        //    Supports patterns like: src="/api/consent-images/42" or src="/api/images/42"
        htmlContent = embedImages(htmlContent);

        log.debug("Exiting resolve | result=length={}", htmlContent != null ? htmlContent.length() : 0);
        return htmlContent;
    }

    /**
     * Builds static variable substitutions. Mirrors the original commented-out map,
     * but derives consent-level values directly from the Consent entity instead of
     * a ConsentBroadcastRequest wrapper.
     */
    private Map<String, String> buildStaticVars(Customer customer, Consent consent) {
        String today = LocalDate.now().toString();
        String companyName = "ConsentIQ";

        String validityDate = consent != null && consent.getValidityEndDate() != null
                ? consent.getValidityEndDate().toString()
                : "";
        String validityPeriod = consent != null && consent.getValidityPeriodDays() != null
                ? consent.getValidityPeriodDays() + " days"
                : "";
        // Public consent response URL — adjust base URL via @Value if needed
        String consentLink = consent != null
                ? "https://your-domain.com/consent/" + consent.getId()
                : "";
        String optOutLink = "https://your-domain.com/opt-out/" + customer.getId();

        Map<String, String> vars = new HashMap<>();
        vars.put("CUSTOMER_NAME",    escapeHtml(customer.getFullName() != null ? customer.getFullName() : "Valued Customer"));
        vars.put("CUSTOMER_ID",      escapeHtml(customer.getCustomerId() != null ? customer.getCustomerId() : ""));
        vars.put("ACCOUNT_NUMBER",   escapeHtml(customer.getCustomerId() != null ? customer.getCustomerId() : ""));
        vars.put("MOBILE_NUMBER",    escapeHtml(customer.getMobileNumber() != null ? customer.getMobileNumber() : ""));
        vars.put("EMAIL_ADDRESS",    escapeHtml(customer.getEmail() != null ? customer.getEmail() : ""));
        vars.put("COMPANY_NAME",     escapeHtml(companyName));
        vars.put("DATE",             today);
        vars.put("VALIDITY_DATE",    validityDate);
        vars.put("VALIDITY_PERIOD",  validityPeriod);
        vars.put("OPT_OUT_LINK",     optOutLink);
        vars.put("CONSENT_LINK",     consentLink);
        return vars;
    }

    /**
     * Scans HTML for image src attributes pointing to the consent-image API endpoint
     * (e.g. src="/api/consent-images/7" or src="/api/images/7") and replaces them
     * with inline base64 data URIs so the public page renders without auth headers.
     */
    private String embedImages(String html) {
        // Matches: src="/api/consent-images/123" or src="/api/images/123"
        Pattern imgPattern = Pattern.compile(
                "src=[\"']/api/(?:consent-)?images/(\\d+)[\"']",
                Pattern.CASE_INSENSITIVE
        );
        Matcher m = imgPattern.matcher(html);
        StringBuffer sb = new StringBuffer();
        while (m.find()) {
            long imageId = Long.parseLong(m.group(1));
            String replacement;
            try {
                log.info("Executing DB query | method=findById | param=id={}", imageId);
                ConsentImage img = consentImageRepository.findById(imageId).orElse(null);
                log.info("DB query completed | method=findById | present={}", img != null);
                if (img != null && img.getData() != null) {
                    String b64 = Base64.getEncoder().encodeToString(img.getData());
                    String dataUri = "data:" + img.getContentType() + ";base64," + b64;
                    replacement = "src=\"" + dataUri + "\"";
                    log.debug("Embedded image id={} ({} bytes)", imageId, img.getData().length);
                } else {
                    log.warn("Image id={} not found or empty; leaving src intact", imageId);
                    replacement = m.group(0); // leave unchanged
                }
            } catch (Exception e) {
                String cu = currentUser();
                log.error("Exception in embedImages | user={} | message={}", cu, e.getMessage(), e);
                replacement = m.group(0);
            }
            m.appendReplacement(sb, Matcher.quoteReplacement(replacement));
        }
        m.appendTail(sb);
        return sb.toString();
    }

    /**
     * Reflectively reads a Customer field by name. Handles Boolean fields with
     * true/false labels from the MergeTag configuration, matching the original logic.
     */
    private String getCustomerFieldValue(Customer customer, String fieldName, MergeTag tag) {
        try {
            Class<?> clazz = customer.getClass();
            while (clazz != null) {
                try {
                    Field field = clazz.getDeclaredField(fieldName);
                    field.setAccessible(true);
                    Object value = field.get(customer);
                    if (value == null) return "";

                    if (value instanceof Boolean boolVal) {
                        if (boolVal) {
                            return (tag.getTrueLabel() != null && !tag.getTrueLabel().isBlank())
                                    ? tag.getTrueLabel() : "Yes";
                        } else {
                            return (tag.getFalseLabel() != null && !tag.getFalseLabel().isBlank())
                                    ? tag.getFalseLabel() : "No";
                        }
                    }
                    return escapeHtml(value.toString());
                } catch (NoSuchFieldException e) {
                    clazz = clazz.getSuperclass();
                }
            }
            return "";
        } catch (IllegalAccessException e) {
            String cu = currentUser();
            log.error("Exception in getCustomerFieldValue | user={} | message={}", cu, e.getMessage(), e);
            return "";
        }
    }

    private String escapeHtml(String text) {
        if (text == null) return "";
        return text.replace("&", "&amp;")
                   .replace("<", "&lt;")
                   .replace(">", "&gt;")
                   .replace("\"", "&quot;");
    }
}