package com.consentiq.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.consentiq.model.entity.CustomerChannelPreference;

public interface CustomerChannelPreferenceRepository extends JpaRepository<CustomerChannelPreference, Long> {
    Optional<CustomerChannelPreference> findByCustomerIdAndConsentDbId(String customerId, Long consentDbId);
    
 // ADD this method to the existing repository interface:
    List<CustomerChannelPreference> findByConsentDbIdAndCustomerIdIn(
            Long consentDbId, List<String> customerIds);
}