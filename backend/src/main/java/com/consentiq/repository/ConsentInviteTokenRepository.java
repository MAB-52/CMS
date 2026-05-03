package com.consentiq.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.consentiq.model.entity.ConsentInviteToken;

public interface ConsentInviteTokenRepository extends JpaRepository<ConsentInviteToken, Long> {

    Optional<ConsentInviteToken> findByToken(String token);
    
    List<ConsentInviteToken> findByCustomerId(String customerId);
}
