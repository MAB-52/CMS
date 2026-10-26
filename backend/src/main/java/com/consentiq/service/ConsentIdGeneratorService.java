package com.consentiq.service;

import com.consentiq.repository.ConsentRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@RequiredArgsConstructor
public class ConsentIdGeneratorService {

	private static final Logger log = LoggerFactory.getLogger(ConsentIdGeneratorService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private static final ZoneId ZONE = ZoneId.of("Asia/Kolkata");

	private final ConsentRepository consentRepository;

	private final AtomicInteger sequence = new AtomicInteger(0);
	private volatile int currentYear;

	@PostConstruct
	public void init() {
		String cu = currentUser();
		log.debug("Entering init | params: none");
		log.info("User={} | action=init | entity=ConsentIdGenerator | id=n/a", cu);
		currentYear = ZonedDateTime.now(ZONE).getYear();
		log.info("Executing DB query | method=findMaxSequenceForYear | param=year={}", currentYear);
		Integer max = consentRepository.findMaxSequenceForYear(String.valueOf(currentYear));
		log.info("DB query completed | method=findMaxSequenceForYear | present={}", max != null);
		int start = max == null ? 0 : max;
		sequence.set(start);
		log.debug("ConsentIdGenerator initialized for year {} with max sequence {}", currentYear, start);
		log.debug("Exiting init | completed successfully");
	}

	public synchronized String generateNextId() {
		String cu = currentUser();
		log.debug("Entering generateNextId | params: none");
		log.info("User={} | action=generateNextId | entity=Consent | id=n/a", cu);
		int year = ZonedDateTime.now(ZONE).getYear();
		if (year != currentYear) {
			currentYear = year;
			log.info("Executing DB query | method=findMaxSequenceForYear | param=year={}", currentYear);
			Integer max = consentRepository.findMaxSequenceForYear(String.valueOf(currentYear));
			log.info("DB query completed | method=findMaxSequenceForYear | present={}", max != null);
			sequence.set(max == null ? 0 : max);
		}
		int next = sequence.incrementAndGet();
		String id = String.format("CNS-%d-%04d", currentYear, next);
		log.debug("Generated consent id {}", id);
		log.debug("Exiting generateNextId | result=id={}", id);
		return id;
	}

	public synchronized String previewNextId() {
		String cu = currentUser();
		log.debug("Entering previewNextId | params: none");
		log.info("User={} | action=previewNextId | entity=Consent | id=n/a", cu);
		int year = ZonedDateTime.now(ZONE).getYear();
		int base = sequence.get();
		if (year != currentYear) {
			log.info("Executing DB query | method=findMaxSequenceForYear | param=year={}", year);
			Integer max = consentRepository.findMaxSequenceForYear(String.valueOf(year));
			log.info("DB query completed | method=findMaxSequenceForYear | present={}", max != null);
			base = max == null ? 0 : max;
		}
		String preview = String.format("CNS-%d-%04d", year, base + 1);
		log.debug("Exiting previewNextId | result=id={}", preview);
		return preview;
	}
}
