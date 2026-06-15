package com.consentiq.service;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.consentiq.model.dto.request.CreateMergeTagRequest;
import com.consentiq.model.dto.response.MergeTagResponse;
import com.consentiq.model.entity.MergeTag;
import com.consentiq.repository.MergeTagRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MergeTagService {

    private static final Logger log = LoggerFactory.getLogger(MergeTagService.class);

    private final MergeTagRepository mergeTagRepository;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @Transactional(readOnly = true)
    public Map<String, List<MergeTagResponse>> getAllGroupedByCategory() {
        String cu = currentUser();
        log.debug("Entering getAllGroupedByCategory | params: none");
        log.info("User={} | action=getAllGroupedByCategory | entity=MergeTag | id=n/a", cu);
        log.debug("Transaction started | method=getAllGroupedByCategory | id=n/a");
        log.info("Executing DB query | method=findAllByOrderByTagCategoryAscTagLabelAsc | param=n/a");
        List<MergeTag> tags = mergeTagRepository.findAllByOrderByTagCategoryAscTagLabelAsc();
        log.info(
                "Query returned {} record(s) | method=findAllByOrderByTagCategoryAscTagLabelAsc | param=n/a",
                tags.size());
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
        log.debug("Transaction completing | method=getAllGroupedByCategory | id=n/a");
        log.debug("Exiting getAllGroupedByCategory | result=mapSize={}", grouped.size());
        return grouped;
    }

    @Transactional(readOnly = true)
    public List<MergeTagResponse> getAllFlat() {
        String cu = currentUser();
        log.debug("Entering getAllFlat | params: none");
        log.info("User={} | action=getAllFlat | entity=MergeTag | id=n/a", cu);
        log.debug("Transaction started | method=getAllFlat | id=n/a");
        log.info("Executing DB query | method=findAllByOrderByTagCategoryAscTagLabelAsc | param=n/a");
        List<MergeTag> rows = mergeTagRepository.findAllByOrderByTagCategoryAscTagLabelAsc();
        log.info(
                "Query returned {} record(s) | method=findAllByOrderByTagCategoryAscTagLabelAsc | param=n/a",
                rows.size());
        List<MergeTagResponse> result =
                rows.stream()
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
        log.debug("Transaction completing | method=getAllFlat | id=n/a");
        log.debug("Exiting getAllFlat | result=size={}", result.size());
        return result;
    }

    @Transactional
    public MergeTagResponse create(CreateMergeTagRequest req) {
        String cu = currentUser();
        log.debug("Entering create | params: tagKey={}", req.getTagKey());
        log.info("User={} | action=create | entity=MergeTag | id=n/a", cu);
        log.debug("Transaction started | method=create | tagKey={}", req.getTagKey());
        log.info("Executing DB query | method=existsByTagKey | param={}", req.getTagKey());
        boolean exists = mergeTagRepository.existsByTagKey(req.getTagKey());
        log.info("Query completed | method=existsByTagKey | exists={} | param={}", exists, req.getTagKey());
        if (exists) {
            log.info("Branch taken | method=create | condition=existsByTagKey | value=true");
            throw new IllegalArgumentException("Tag key already exists: " + req.getTagKey());
        }
        MergeTag tag =
                MergeTag.builder()
                        .tagKey(req.getTagKey())
                        .tagLabel(req.getTagLabel())
                        .tagCategory(req.getTagCategory())
                        .sampleValue(req.getSampleValue())
                        .customerField(req.getCustomerField())
                        .trueLabel(req.getTrueLabel())
                        .falseLabel(req.getFalseLabel())
                        .build();
        log.info("Executing DB query | method=save | param=tagKey={}", req.getTagKey());
        tag = mergeTagRepository.save(tag);
        log.info("Query returned 1 record(s) | method=save | param=tagKey={}", req.getTagKey());
        MergeTagResponse result =
                MergeTagResponse.builder()
                        .id(tag.getId())
                        .tagKey(tag.getTagKey())
                        .tagLabel(tag.getTagLabel())
                        .tagCategory(tag.getTagCategory())
                        .sampleValue(tag.getSampleValue())
                        .customerField(tag.getCustomerField())
                        .trueLabel(tag.getTrueLabel())
                        .falseLabel(tag.getFalseLabel())
                        .build();
        log.debug("Transaction completing | method=create | tagKey={}", req.getTagKey());
        log.debug("Exiting create | result=id={}", result.getId());
        return result;
    }
}
