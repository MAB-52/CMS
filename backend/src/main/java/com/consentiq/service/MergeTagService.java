package com.consentiq.service;

import com.consentiq.model.dto.response.MergeTagResponse;
import com.consentiq.model.entity.MergeTag;
import com.consentiq.repository.MergeTagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MergeTagService {

    private final MergeTagRepository mergeTagRepository;

    @Transactional(readOnly = true)
    public Map<String, List<MergeTagResponse>> getAllGroupedByCategory() {
        List<MergeTag> tags = mergeTagRepository.findAllByOrderByTagCategoryAscTagLabelAsc();
        Map<String, List<MergeTagResponse>> grouped = new LinkedHashMap<>();
        for (MergeTag t : tags) {
            MergeTagResponse r =
                    MergeTagResponse.builder()
                            .id(t.getId())
                            .tagKey(t.getTagKey())
                            .tagLabel(t.getTagLabel())
                            .tagCategory(t.getTagCategory())
                            .sampleValue(t.getSampleValue())
                            .build();
            grouped.computeIfAbsent(t.getTagCategory(), k -> new java.util.ArrayList<>()).add(r);
        }
        return grouped;
    }

    @Transactional(readOnly = true)
    public List<MergeTagResponse> getAllFlat() {
        return mergeTagRepository.findAllByOrderByTagCategoryAscTagLabelAsc().stream()
                .map(
                        t ->
                                MergeTagResponse.builder()
                                        .id(t.getId())
                                        .tagKey(t.getTagKey())
                                        .tagLabel(t.getTagLabel())
                                        .tagCategory(t.getTagCategory())
                                        .sampleValue(t.getSampleValue())
                                        .build())
                .collect(Collectors.toList());
    }
}
