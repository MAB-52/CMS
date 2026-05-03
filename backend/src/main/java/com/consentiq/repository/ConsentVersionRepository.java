package com.consentiq.repository;

import com.consentiq.model.entity.ConsentVersion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConsentVersionRepository extends JpaRepository<ConsentVersion, Long> {

    Optional<ConsentVersion> findTopByConsent_IdOrderByChangedAtDesc(Long consentDbId);

    List<ConsentVersion> findByConsent_IdOrderByChangedAtDesc(Long consentDbId);
}
