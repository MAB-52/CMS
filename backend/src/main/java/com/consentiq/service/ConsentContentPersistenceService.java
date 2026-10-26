// backend/src/main/java/com/consentiq/service/ConsentContentPersistenceService.java
package com.consentiq.service;

import com.consentiq.enums.ConsentLanguageCode;
import com.consentiq.model.dto.request.ConsentTranslationInputDto;
import com.consentiq.model.entity.Consent;
import com.consentiq.model.entity.ConsentTranslation;
import com.consentiq.repository.ConsentTranslationRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

/**
 * Upserts per-language consent content (consent_translations) on create/save/submit.
 * Does NOT generate channel renders — that is {@link ConsentChannelRenderService}'s job,
 * invoked separately by the caller after persistence.
 */
@Service
@RequiredArgsConstructor
public class ConsentContentPersistenceService {

    private static final Logger log = LoggerFactory.getLogger(ConsentContentPersistenceService.class);

    private final ConsentTranslationRepository translationRepository;

    /**
     * Upserts translations for the given consent. Ensures an 'en' row always exists,
     * falling back to {@code consent.getConsentMessage()} if no explicit English
     * translation was supplied (backward compatibility with pre-multilanguage consents).
     *
     * @return the saved translation entities (for downstream render generation)
     */
    @Transactional
    public List<ConsentTranslation> upsertTranslations(
            Consent consent, List<ConsentTranslationInputDto> incoming) {
        log.debug("Entering upsertTranslations | consentId={}", consent.getId());

        List<ConsentTranslationInputDto> normalized = normalize(incoming, consent.getConsentMessage());

        List<ConsentTranslation> result = new ArrayList<>();
        for (ConsentTranslationInputDto in : normalized) {
            String lang = in.getLanguageCode().trim().toLowerCase(Locale.ROOT);
            ConsentTranslation entity =
                    translationRepository
                            .findByConsent_IdAndLanguageCode(consent.getId(), lang)
                            .orElseGet(() ->
                                    ConsentTranslation.builder()
                                            .consent(consent)
                                            .languageCode(lang)
                                            .build());
            entity.setContent(in.getContent());
            ConsentTranslation saved = translationRepository.save(entity);
            result.add(saved);
        }

        // English mirror on the parent Consent row for backward compatibility
        normalized.stream()
                .filter(t -> ConsentLanguageCode.en.name().equals(t.getLanguageCode().toLowerCase(Locale.ROOT)))
                .findFirst()
                .ifPresent(en -> consent.setConsentMessage(en.getContent()));

        log.debug("Exiting upsertTranslations | consentId={} | count={}", consent.getId(), result.size());
        return result;
    }

    @Transactional(readOnly = true)
    public List<ConsentTranslation> loadTranslations(Long consentId) {
        return translationRepository.findByConsent_Id(consentId);
    }

    private List<ConsentTranslationInputDto> normalize(
            List<ConsentTranslationInputDto> incoming, String fallbackEnglishContent) {
        List<ConsentTranslationInputDto> list = incoming == null ? new ArrayList<>() : new ArrayList<>(incoming);

        boolean hasEnglish =
                list.stream()
                        .anyMatch(t -> StringUtils.hasText(t.getLanguageCode())
                                && "en".equalsIgnoreCase(t.getLanguageCode().trim()));

        if (!hasEnglish) {
            list.add(
                    ConsentTranslationInputDto.builder()
                            .languageCode("en")
                            .content(fallbackEnglishContent)
                            .build());
        }

        // drop entries with blank language codes defensively
        list.removeIf(t -> !StringUtils.hasText(t.getLanguageCode()));
        return list;
    }
}