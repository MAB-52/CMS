package com.consentiq.repository;

import com.consentiq.model.entity.MergeTag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MergeTagRepository extends JpaRepository<MergeTag, Long> {

    List<MergeTag> findAllByOrderByTagCategoryAscTagLabelAsc();

    boolean existsByTagKey(String tagKey);
}
