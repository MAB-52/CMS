package com.consentiq.repository;

import com.consentiq.model.entity.ConsentTranslation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ConsentTranslationRepository extends JpaRepository<ConsentTranslation, Long> {

    List<ConsentTranslation> findByConsent_Id(Long consentId);

    Optional<ConsentTranslation> findByConsent_IdAndLanguageCode(Long consentId, String languageCode);

    @Query("SELECT DISTINCT t.languageCode FROM ConsentTranslation t WHERE t.consent.id = :consentId")
    List<String> findDistinctLanguageCodesByConsentId(@Param("consentId") Long consentId);

    void deleteByConsent_IdAndLanguageCode(Long consentId, String languageCode);
}