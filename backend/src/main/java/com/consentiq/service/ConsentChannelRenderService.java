package com.consentiq.service;

import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentChannelRender;
import com.consentiq.model.entity.ConsentTranslation;
import com.consentiq.repository.ConsentChannelRenderRepository;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Server-side generation of per-channel rendered content from a translation's rich-text HTML.
 * Mirrors the truncation/formatting rules previously computed client-side in
 * delivery-channels-card / checker-channel-preview, so maker preview, checker preview,
 * and actual dispatch all read from the same source of truth.
 */
@Service
@RequiredArgsConstructor
public class ConsentChannelRenderService {

    private static final Logger log = LoggerFactory.getLogger(ConsentChannelRenderService.class);

    private static final int SMS_MAX = 160;
    private static final int PUSH_MAX = 100;
    private static final int WHATSAPP_MAX = 200;
    private static final int RCS_MAX = 1000;

    private final ConsentChannelRenderRepository renderRepository;

    /**
     * Regenerates all applicable channel renders for the given translation, based on
     * which channels are enabled on the parent consent.
     */
    @Transactional
    public void regenerateRendersForTranslation(Consent consent, ConsentTranslation translation) {
        String html = translation.getContent() == null ? "" : translation.getContent();
        log.debug(
                "Entering regenerateRendersForTranslation | consentId={} | lang={}",
                consent.getId(),
                translation.getLanguageCode());

        List<String> channels = new ArrayList<>();
        if (consent.isChannelEmail()) channels.add("EMAIL");
        if (consent.isChannelSms()) channels.add("SMS");
        if (consent.isChannelWhatsapp()) channels.add("WHATSAPP");
        if (consent.isChannelRcs()) channels.add("RCS");
        if (consent.isChannelPush()) channels.add("PUSH");

        for (String channel : channels) {
            String rendered = renderForChannel(html, channel);
            ConsentChannelRender entity =
                    renderRepository
                            .findByTranslation_IdAndChannel(translation.getId(), channel)
                            .orElseGet(() ->
                                    ConsentChannelRender.builder()
                                            .translation(translation)
                                            .channel(channel)
                                            .build());
            entity.setRenderedContent(rendered);
            renderRepository.save(entity);
        }

        log.debug(
                "Exiting regenerateRendersForTranslation | consentId={} | lang={} | channels={}",
                consent.getId(),
                translation.getLanguageCode(),
                channels.size());
    }

    @Transactional(readOnly = true)
    public List<ConsentChannelRender> loadRenders(Long translationId) {
        return renderRepository.findByTranslation_Id(translationId);
    }

    private String renderForChannel(String html, String channel) {
        return switch (channel) {
            case "EMAIL" -> html; // full HTML, merge-tag substitution happens at send-time
            case "SMS" -> truncate(stripHtml(html), SMS_MAX);
            case "WHATSAPP" -> truncate(stripHtml(html), WHATSAPP_MAX);
            case "RCS" -> truncate(stripHtml(html), RCS_MAX);
            case "PUSH" -> truncate(stripHtml(html), PUSH_MAX);
            default -> stripHtml(html);
        };
    }

    private String stripHtml(String html) {
        if (html == null || html.isBlank()) {
            return "";
        }
        Document doc = Jsoup.parse(html);
        Element body = doc.body();
        String text = body != null ? body.text() : doc.text();
        return text.replaceAll("\\s+", " ").trim();
    }

    private String truncate(String text, int max) {
        if (text == null) {
            return "";
        }
        return text.length() > max ? text.substring(0, Math.max(0, max - 3)) + "..." : text;
    }
}