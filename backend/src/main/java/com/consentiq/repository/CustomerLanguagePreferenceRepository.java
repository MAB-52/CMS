package com.consentiq.repository;

import com.consentiq.model.entity.CustomerLanguagePreference;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CustomerLanguagePreferenceRepository extends JpaRepository<CustomerLanguagePreference, Long> {

    Optional<CustomerLanguagePreference> findByCustomerIdAndConsentDbId(String customerId, Long consentDbId);
}
