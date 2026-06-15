package com.consentiq.service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Element;
import org.jsoup.nodes.Node;
import org.jsoup.nodes.TextNode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ConsentTranslationService {

	private static final Logger log = LoggerFactory.getLogger(ConsentTranslationService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private final RestTemplate restTemplate;

	@Value("${consentiq.translation.libretranslate.url:http://localhost:5000}")
	private String libretranslateUrl;

	@Value("${consentiq.translation.indictrans2.url:http://localhost:8000}")
	private String indictrans2Url;

	@Value("${consentiq.translation.enabled:false}")
	private boolean enabled;

	/**
	 * Translates a single HTML string to a target language. Returns original on any failure.
	 */
	public String translateHtml(String htmlContent, String targetLanguage) {
		String cu = currentUser();
		log.debug("Entering translateHtml | params: targetLanguage={}", targetLanguage);
		log.info("User={} | action=translateHtml | entity=ConsentTranslation | id=n/a", cu);
		if (!enabled) {
			log.debug("Exiting translateHtml | result=disabled passthrough");
			return htmlContent;
		}
		if (htmlContent == null) {
			log.debug("Exiting translateHtml | result=empty");
			return "";
		}
		String lang = normalizeLanguageKey(targetLanguage);
		if (!StringUtils.hasText(lang) || isEnglish(lang)) {
			log.debug("Exiting translateHtml | result=englishOrBlank passthrough");
			return htmlContent;
		}
		try {
			Optional<String> libreCode = mapLanguageToLibreTranslateCode(lang);
			if (libreCode.isEmpty()) {
				log.warn("Translation skipped | no LibreTranslate mapping for lang={}", lang);
				log.debug("Exiting translateHtml | result=noMapping passthrough");
				return htmlContent;
			}
			String result = translateHtmlLibreTranslate(htmlContent, libreCode.get());
			log.debug("Exiting translateHtml | result=translated");
			return result;
		} catch (Exception ex) {
			log.error("Exception in translateHtml | user={} | message={}", cu, ex.getMessage(), ex);
			log.warn("Translation failed | lang={} | {}", lang, ex.getMessage());
			log.debug("Exiting translateHtml | result=failure passthrough");
			return htmlContent;
		}
	}

	/**
	 * Returns a map of { languageKey -> translatedHtml } for all non-English languages in the list.
	 * English key maps to the original htmlContent unchanged.
	 */
	public Map<String, String> translateForAllLanguages(String htmlContent, List<String> languages) {
		String cu = currentUser();
		log.debug("Entering translateForAllLanguages | params: languagesSize={}",
				languages != null ? languages.size() : 0);
		log.info("User={} | action=translateForAllLanguages | entity=ConsentTranslation | id=n/a", cu);
		Map<String, String> out = new LinkedHashMap<>();
		if (languages == null || languages.isEmpty()) {
			log.debug("Exiting translateForAllLanguages | result=empty map");
			return out;
		}
		if (!enabled) {
			for (String raw : languages) {
				String key = normalizeLanguageKey(raw);
				if (StringUtils.hasText(key)) {
					out.put(key, htmlContent);
				}
			}
			log.debug("Exiting translateForAllLanguages | result=size={}", out.size());
			return out;
		}
		for (String raw : languages) {
			String key = normalizeLanguageKey(raw);
			if (!StringUtils.hasText(key)) {
				continue;
			}
			if (isEnglish(key)) {
				out.put(key, htmlContent);
			} else {
				out.put(key, translateHtml(htmlContent, key));
			}
		}
		log.debug("Exiting translateForAllLanguages | result=size={}", out.size());
		return out;
	}

	private String translateHtmlIndicTrans2(String htmlContent, String languageKey) {
		String cu = currentUser();
		try {
			var doc = Jsoup.parse(htmlContent);
			Element root = doc.body() != null ? doc.body() : doc;
			List<TextNode> textNodes = new ArrayList<>();
			collectTranslatableTextNodes(root, textNodes);
			String tgt = mapLanguageKeyToIndicTrans2TgtLang(languageKey);
			if (tgt == null) {
				return htmlContent;
			}
			for (TextNode tn : textNodes) {
				String original = tn.text();
				if (!StringUtils.hasText(original)) {
					continue;
				}
				String translated = callIndicTrans2Plain(original, tgt);
				tn.text(translated);
			}
			return doc.outerHtml();
		} catch (Exception ex) {
			log.error("Exception in translateHtmlIndicTrans2 | user={} | message={}", cu, ex.getMessage(), ex);
			log.warn("IndicTrans2 HTML translation failed | lang={} | {}", languageKey, ex.getMessage());
			return htmlContent;
		}
	}

	private void collectTranslatableTextNodes(Element element, List<TextNode> sink) {
		if ("script".equalsIgnoreCase(element.tagName()) || "style".equalsIgnoreCase(element.tagName())) {
			return;
		}
		for (Node child : element.childNodes()) {
			if (child instanceof TextNode tn) {
				if (StringUtils.hasText(tn.text())) {
					sink.add(tn);
				}
			} else if (child instanceof Element el) {
				collectTranslatableTextNodes(el, sink);
			}
		}
	}

	private String callIndicTrans2Plain(String plainText, String tgtLang) {
		String base = indictrans2Url != null ? indictrans2Url.replaceAll("/$", "") : "";
		String url = base + "/translate";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		Map<String, Object> body = new LinkedHashMap<>();
		body.put("text", plainText);
		body.put("src_lang", "eng_Latn");
		body.put("tgt_lang", tgtLang);
		body.put("is_html", Boolean.FALSE);
		HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
		@SuppressWarnings("unchecked")
		Map<String, Object> resp = restTemplate.postForObject(url, entity, Map.class);
		if (resp == null) {
			throw new IllegalStateException("empty response");
		}
		Object translated = resp.get("translated_text");
		if (translated == null) {
			translated = resp.get("translatedText");
		}
		if (translated == null) {
			throw new IllegalStateException("missing translated_text");
		}
		return String.valueOf(translated);
	}

	private String translateHtmlLibreTranslate(String htmlContent, String libreTargetCode) {
		String base = libretranslateUrl != null ? libretranslateUrl.replaceAll("/$", "") : "";
		String url = base + "/translate";
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		Map<String, String> body = new LinkedHashMap<>();
		body.put("q", htmlContent);
		body.put("source", "en");
		body.put("target", libreTargetCode);
		body.put("format", "html");
		HttpEntity<Map<String, String>> entity = new HttpEntity<>(body, headers);
		@SuppressWarnings("unchecked")
		Map<String, Object> resp = restTemplate.postForObject(url, entity, Map.class);
		if (resp == null) {
			throw new IllegalStateException("empty response");
		}
		Object translated = resp.get("translatedText");
		if (translated == null) {
			translated = resp.get("translated_text");
		}
		if (translated == null) {
			throw new IllegalStateException("missing translatedText");
		}
		return String.valueOf(translated);
	}

	private static String normalizeLanguageKey(String raw) {
		if (raw == null) {
			return "";
		}
		return raw.trim().toLowerCase(Locale.ROOT);
	}

	private static boolean isEnglish(String langLower) {
		return "english".equals(langLower) || "en".equals(langLower);
	}

	private static String mapLanguageKeyToIndicTrans2TgtLang(String languageKey) {
		if (languageKey == null) {
			return null;
		}
		return switch (languageKey.toLowerCase(Locale.ROOT)) {
			case "hindi" -> "hin_Deva";
			case "marathi" -> "mar_Deva";
			case "gujarati" -> "guj_Gujr";
			case "bengali" -> "ben_Beng";
			case "tamil" -> "tam_Taml";
			case "telugu" -> "tel_Telu";
			case "malayalam" -> "mal_Mlym";
			case "urdu" -> "urd_Arab";
			default -> null;
		};
	}

	private static Optional<String> mapLanguageToLibreTranslateCode(String languageKey) {
		if (languageKey == null) {
			return Optional.empty();
		}
		String code = switch (languageKey.toLowerCase(Locale.ROOT)) {
			case "hindi" -> "hi";
			case "marathi" -> "mr";
			case "gujarati" -> "gu";
			case "bengali" -> "bn";
			case "tamil" -> "ta";
			case "telugu" -> "te";
			case "malayalam" -> "ml";
			case "urdu" -> "ur";
			case "french" -> "fr";
			case "spanish" -> "es";
			case "german" -> "de";
			case "portuguese" -> "pt";
			case "italian" -> "it";
			case "dutch" -> "nl";
			case "russian" -> "ru";
			case "chinese" -> "zh";
			case "japanese" -> "ja";
			case "korean" -> "ko";
			case "arabic" -> "ar";
			default -> null;
		};
		return Optional.ofNullable(code);
	}
}
