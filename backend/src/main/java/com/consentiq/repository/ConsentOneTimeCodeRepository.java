package com.consentiq.repository;

import com.consentiq.model.entity.ConsentOneTimeCode;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConsentOneTimeCodeRepository extends JpaRepository<ConsentOneTimeCode, Long> {

    Optional<ConsentOneTimeCode> findByCode(String code);
}
