package com.consentiq.repository;

import com.consentiq.enums.CustomerConsentStatus;
import com.consentiq.model.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {

    Optional<Customer> findByCustomerIdIgnoreCase(String customerId);

    Optional<Customer> findByMobileNumber(String mobileNumber);

    long count();

    long countByConsentStatus(CustomerConsentStatus status);
}
