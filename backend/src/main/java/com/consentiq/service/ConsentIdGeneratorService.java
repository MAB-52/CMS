package com.consentiq.service;

import com.consentiq.repository.ConsentRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConsentIdGeneratorService {

    private static final ZoneId ZONE = ZoneId.of("Asia/Kolkata");

    private final ConsentRepository consentRepository;

    private final AtomicInteger sequence = new AtomicInteger(0);
    private volatile int currentYear;

    @PostConstruct
    public void init() {
        currentYear = ZonedDateTime.now(ZONE).getYear();
        Integer max = consentRepository.findMaxSequenceForYear(String.valueOf(currentYear));
        int start = max == null ? 0 : max;
        sequence.set(start);
        log.debug("ConsentIdGenerator initialized for year {} with max sequence {}", currentYear, start);
    }

    public synchronized String generateNextId() {
        int year = ZonedDateTime.now(ZONE).getYear();
        if (year != currentYear) {
            currentYear = year;
            Integer max = consentRepository.findMaxSequenceForYear(String.valueOf(currentYear));
            sequence.set(max == null ? 0 : max);
        }
        int next = sequence.incrementAndGet();
        String id = String.format("CNS-%d-%04d", currentYear, next);
        log.debug("Generated consent id {}", id);
        return id;
    }

    public synchronized String previewNextId() {
        int year = ZonedDateTime.now(ZONE).getYear();
        int base = sequence.get();
        if (year != currentYear) {
            Integer max = consentRepository.findMaxSequenceForYear(String.valueOf(year));
            base = max == null ? 0 : max;
        }
        return String.format("CNS-%d-%04d", year, base + 1);
    }
}
