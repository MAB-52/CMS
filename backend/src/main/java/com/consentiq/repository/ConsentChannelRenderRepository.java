// backend/src/main/java/com/consentiq/repository/ConsentChannelRenderRepository.java
package com.consentiq.repository;

import com.consentiq.model.entity.ConsentChannelRender;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ConsentChannelRenderRepository extends JpaRepository<ConsentChannelRender, Long> {

    List<ConsentChannelRender> findByTranslation_Id(Long translationId);

    Optional<ConsentChannelRender> findByTranslation_IdAndChannel(Long translationId, String channel);

    void deleteByTranslation_Id(Long translationId);
}