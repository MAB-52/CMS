package com.consentiq.util;

import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentInviteToken;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Normalizes delivery channel strings from templates and capture requests for comparison and display.
 */
public final class DeliveryChannelCatalog {

    private DeliveryChannelCatalog() {}

    public static String normalizeKey(String raw) {
        if (!StringUtils.hasText(raw)) {
            return "EMAIL";
        }
        String u = raw.trim().toUpperCase(Locale.ROOT);
        if (u.contains("WHATSAPP")) {
            return "WHATSAPP";
        }
        if (u.contains("SMS")) {
            return "SMS";
        }
        if (u.contains("EMAIL")) {
            return "EMAIL";
        }
        if (u.contains("RCS")) {
            return "RCS";
        }
        if (u.contains("PUSH")) {
            return "PUSH";
        }
        return u.replaceAll("[^A-Z0-9_]", "_");
    }

    public static String displayLabel(String normalizedKey) {
        if (!StringUtils.hasText(normalizedKey)) {
            return "";
        }
        return switch (normalizedKey) {
            case "EMAIL" -> "Email";
            case "SMS" -> "SMS";
            case "WHATSAPP" -> "WhatsApp";
            case "PUSH" -> "Push";
            case "RCS" -> "RCS";
            default -> capitalizeWords(normalizedKey.replace('_', ' ').toLowerCase(Locale.ROOT));
        };
    }

    private static String capitalizeWords(String s) {
        String[] p = s.trim().split("\\s+");
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < p.length; i++) {
            if (i > 0) {
                sb.append(' ');
            }
            if (p[i].isEmpty()) {
                continue;
            }
            sb.append(Character.toUpperCase(p[i].charAt(0))).append(p[i].substring(1));
        }
        return sb.toString();
    }

    /** Preserves first-seen order of normalized keys. */
    public static List<String> normalizeAndDedupe(List<String> raw) {
        if (raw == null) {
            return List.of();
        }
        Set<String> seen = new LinkedHashSet<>();
        List<String> out = new ArrayList<>();
        for (String r : raw) {
            if (!StringUtils.hasText(r)) {
                continue;
            }
            String k = normalizeKey(r);
            if (seen.add(k)) {
                out.add(k);
            }
        }
        return out;
    }

    public static Set<String> allowedKeysFromTemplate(List<String> templateChannels) {
        if (templateChannels == null) {
            return Set.of();
        }
        return templateChannels.stream().map(DeliveryChannelCatalog::normalizeKey).collect(Collectors.toSet());
    }

    public static String formatForCustomer(List<String> normalizedKeys) {
        if (normalizedKeys == null || normalizedKeys.isEmpty()) {
            return "";
        }
        return normalizedKeys.stream().map(DeliveryChannelCatalog::displayLabel).collect(Collectors.joining(", "));
    }

    public static String sentenceForCommunication(List<String> normalizedKeys) {
        String labels = formatForCustomer(normalizedKeys);
        if (!StringUtils.hasText(labels)) {
            return "";
        }
        if (normalizedKeys.size() == 1) {
            return "Delivery channel: " + labels + ".";
        }
        return "Delivery channels: " + labels + ".";
    }

    /**
     * Reads capture-time channel selection from a token, supporting legacy rows that only stored
     * {@link ConsentInviteToken#getDeliveryChannel()} as a single label or comma-separated summary.
     */
    public static List<String> normalizedFromInviteToken(ConsentInviteToken t) {
        if (t.getCaptureDeliveryChannels() != null && !t.getCaptureDeliveryChannels().isEmpty()) {
            return normalizeAndDedupe(t.getCaptureDeliveryChannels());
        }
        if (!StringUtils.hasText(t.getDeliveryChannel())) {
            return List.of();
        }
        String d = t.getDeliveryChannel().trim();
        if (d.contains(",")) {
            return normalizeAndDedupe(Arrays.stream(d.split(",")).map(String::trim).filter(StringUtils::hasText).toList());
        }
        return List.of(normalizeKey(d));
    }
    
    public static List<String> fromConsentEntity(Consent c) {
        List<String> channels = new ArrayList<>();
        if (c.isChannelEmail())    channels.add("EMAIL");
        if (c.isChannelSms())      channels.add("SMS");
        if (c.isChannelPush())     channels.add("PUSH");
        if (c.isChannelWhatsapp()) channels.add("WHATSAPP");
        if (c.isChannelRcs())      channels.add("RCS");
        return channels;
    }
}
