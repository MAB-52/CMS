package com.consentiq.service;

import com.consentiq.enums.UserRole;
import com.consentiq.model.dto.request.CreateUserRequest;
import com.consentiq.model.dto.request.UpdateUserRequest;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.UserRowResponse;
import com.consentiq.model.entity.User;
import com.consentiq.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class UserManagementService {

	private static final Logger log = LoggerFactory.getLogger(UserManagementService.class);

	private static String currentUser() {
		return SecurityContextHolder.getContext().getAuthentication() != null
				? SecurityContextHolder.getContext().getAuthentication().getName()
				: "anonymous";
	}

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Transactional(readOnly = true)
	public PagedResponse<UserRowResponse> listUsers(
			int page, int size, String search, String role, String activeFilter, String sortDir) {

		String cu = currentUser();
		log.debug("Entering listUsers | params: page={} | size={} | role={} | activeFilter={}", page, size, role,
				activeFilter);
		log.info("User={} | action=listUsers | entity=User | id=n/a", cu);
		log.debug("Transaction started | method=listUsers | id=n/a");

		UserRole roleEnum = parseRole(role);
		Boolean activeEnum = parseActive(activeFilter);
		String searchParam = StringUtils.hasText(search) ? search.trim() : null;

		Sort sort = Sort.by(
				"ASC".equalsIgnoreCase(sortDir) ? Sort.Direction.ASC : Sort.Direction.DESC,
				"createdAt");
		Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)), sort);

		log.info("Executing DB query | method=findByFilters | param=searchPresent={}", searchParam != null);
		Page<User> pg = userRepository.findByFilters(roleEnum, activeEnum, searchParam, pageable);
		log.info("DB query completed | method=findByFilters | size={}", pg.getContent().size());
		List<UserRowResponse> rows = pg.getContent().stream().map(this::toRow).toList();

		PagedResponse<UserRowResponse> result = PagedResponse.<UserRowResponse>builder()
				.content(rows)
				.totalElements(pg.getTotalElements())
				.totalPages(pg.getTotalPages())
				.currentPage(pg.getNumber())
				.pageSize(pg.getSize())
				.hasNext(pg.hasNext())
				.hasPrevious(pg.hasPrevious())
				.build();
		log.debug("Transaction completing | method=listUsers | id=n/a");
		log.debug("Exiting listUsers | result=totalElements={}", result.getTotalElements());
		return result;
	}

	@Transactional(readOnly = true)
	public UserRowResponse getUser(Long id) {
		String cu = currentUser();
		log.debug("Entering getUser | params: id={}", id);
		log.info("User={} | action=getUser | entity=User | id={}", cu, id != null ? String.valueOf(id) : "n/a");
		log.debug("Transaction started | method=getUser | id={}", id);
		log.info("Executing DB query | method=findById | param=id={}", id);
		User user = userRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
		log.info("DB query completed | method=findById | present=true");
		UserRowResponse result = toRow(user);
		log.debug("Transaction completing | method=getUser | id={}", id);
		log.debug("Exiting getUser | result=userId={}", result.getId());
		return result;
	}

	@Transactional
	public UserRowResponse createUser(CreateUserRequest req) {
		String cu = currentUser();
		log.debug("Entering createUser | params: email={}", req.getEmail());
		log.info("User={} | action=createUser | entity=User | id=n/a", cu);
		log.debug("Transaction started | method=createUser | id=n/a");
		String email = req.getEmail().trim().toLowerCase(Locale.ROOT);
		log.info("Executing DB query | method=existsByEmailIgnoreCase | param=email={}", email);
		boolean exists = userRepository.existsByEmailIgnoreCase(email);
		log.info("DB query completed | method=existsByEmailIgnoreCase | present={}", exists);
		if (exists) {
			throw new IllegalArgumentException("A user with this email already exists.");
		}
		User user = User.builder()
				.fullName(req.getFullName().trim())
				.email(email)
				.password(passwordEncoder.encode(req.getPassword()))
				.role(req.getRole())
				.active(true)
				.build();
		log.info("Executing DB query | method=save | param=email={}", email);
		User saved = userRepository.save(user);
		log.info("DB query completed | method=save | completed");
		log.info("User created | id={} | email={} | role={}", saved.getId(), saved.getEmail(), saved.getRole());
		UserRowResponse result = toRow(saved);
		log.debug("Transaction completing | method=createUser | id=n/a");
		log.debug("Exiting createUser | result=userId={}", result.getId());
		return result;
	}

	@Transactional
	public UserRowResponse updateUser(Long id, UpdateUserRequest req) {
		String cu = currentUser();
		log.debug("Entering updateUser | params: id={}", id);
		log.info("User={} | action=updateUser | entity=User | id={}", cu, id != null ? String.valueOf(id) : "n/a");
		log.debug("Transaction started | method=updateUser | id={}", id);
		log.info("Executing DB query | method=findById | param=id={}", id);
		User user = userRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
		log.info("DB query completed | method=findById | present=true");

		if (StringUtils.hasText(req.getFullName())) {
			user.setFullName(req.getFullName().trim());
		}
		if (StringUtils.hasText(req.getEmail())) {
			String newEmail = req.getEmail().trim().toLowerCase(Locale.ROOT);
			if (!newEmail.equals(user.getEmail())) {
				log.info("Executing DB query | method=existsByEmailIgnoreCase | param=email={}", newEmail);
				boolean taken = userRepository.existsByEmailIgnoreCase(newEmail);
				log.info("DB query completed | method=existsByEmailIgnoreCase | present={}", taken);
				if (taken) {
					throw new IllegalArgumentException("A user with this email already exists.");
				}
			}
			user.setEmail(newEmail);
		}
		if (StringUtils.hasText(req.getPassword())) {
			user.setPassword(passwordEncoder.encode(req.getPassword()));
		}
		if (req.getRole() != null) {
			user.setRole(req.getRole());
		}
		if (req.getActive() != null) {
			user.setActive(req.getActive());
		}

		log.info("Executing DB query | method=save | param=id={}", id);
		User saved = userRepository.save(user);
		log.info("DB query completed | method=save | completed");
		log.info("User updated | id={} | email={}", saved.getId(), saved.getEmail());
		UserRowResponse result = toRow(saved);
		log.debug("Transaction completing | method=updateUser | id={}", id);
		log.debug("Exiting updateUser | result=userId={}", result.getId());
		return result;
	}

	@Transactional
	public void deleteUser(Long id) {
		String cu = currentUser();
		log.debug("Entering deleteUser | params: id={}", id);
		log.info("User={} | action=deleteUser | entity=User | id={}", cu, id != null ? String.valueOf(id) : "n/a");
		log.debug("Transaction started | method=deleteUser | id={}", id);
		log.info("Executing DB query | method=findById | param=id={}", id);
		User user = userRepository.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
		log.info("DB query completed | method=findById | present=true");
		log.info("Executing DB query | method=delete | param=id={}", id);
		userRepository.delete(user);
		log.info("DB query completed | method=delete | completed");
		log.info("User deleted | id={} | email={}", id, user.getEmail());
		log.debug("Transaction completing | method=deleteUser | id={}", id);
		log.debug("Exiting deleteUser | completed successfully");
	}

	private UserRowResponse toRow(User u) {
		return UserRowResponse.builder()
				.id(u.getId())
				.fullName(u.getFullName())
				.email(u.getEmail())
				.role(u.getRole())
				.active(u.getActive())
				.createdAt(u.getCreatedAt())
				.updatedAt(u.getUpdatedAt())
				.build();
	}

	private UserRole parseRole(String raw) {
		if (!StringUtils.hasText(raw) || "ALL".equalsIgnoreCase(raw.trim())) {
			return null;
		}
		try {
			return UserRole.valueOf(raw.trim().toUpperCase(Locale.ROOT));
		} catch (IllegalArgumentException e) {
			String cu = currentUser();
			log.error("Exception in parseRole | user={} | message={}", cu, e.getMessage(), e);
			throw new IllegalArgumentException("Invalid role filter. Use ADMIN, MAKER, CHECKER, or ALL.");
		}
	}

	private Boolean parseActive(String raw) {
		if (!StringUtils.hasText(raw) || "ALL".equalsIgnoreCase(raw.trim())) {
			return null;
		}
		return switch (raw.trim().toLowerCase(Locale.ROOT)) {
			case "true", "active" -> true;
			case "false", "inactive" -> false;
			default -> throw new IllegalArgumentException("Invalid active filter. Use true, false, or ALL.");
		};
	}
}
