package com.consentiq.service;

import com.consentiq.enums.UserRole;
import com.consentiq.model.dto.request.CreateUserRequest;
import com.consentiq.model.dto.request.UpdateUserRequest;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.UserRowResponse;
import com.consentiq.model.entity.User;
import com.consentiq.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserManagementService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public PagedResponse<UserRowResponse> listUsers(
            int page, int size, String search, String role, String activeFilter, String sortDir) {

        UserRole roleEnum = parseRole(role);
        Boolean activeEnum = parseActive(activeFilter);
        String searchParam = StringUtils.hasText(search) ? search.trim() : null;

        Sort sort = Sort.by(
                "ASC".equalsIgnoreCase(sortDir) ? Sort.Direction.ASC : Sort.Direction.DESC,
                "createdAt");
        Pageable pageable = PageRequest.of(Math.max(0, page), Math.min(100, Math.max(1, size)), sort);

        Page<User> pg = userRepository.findByFilters(roleEnum, activeEnum, searchParam, pageable);
        List<UserRowResponse> rows = pg.getContent().stream().map(this::toRow).toList();

        return PagedResponse.<UserRowResponse>builder()
                .content(rows)
                .totalElements(pg.getTotalElements())
                .totalPages(pg.getTotalPages())
                .currentPage(pg.getNumber())
                .pageSize(pg.getSize())
                .hasNext(pg.hasNext())
                .hasPrevious(pg.hasPrevious())
                .build();
    }

    @Transactional(readOnly = true)
    public UserRowResponse getUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
        return toRow(user);
    }

    @Transactional
    public UserRowResponse createUser(CreateUserRequest req) {
        String email = req.getEmail().trim().toLowerCase(Locale.ROOT);
        if (userRepository.existsByEmailIgnoreCase(email)) {
            throw new IllegalArgumentException("A user with this email already exists.");
        }
        User user = User.builder()
                .fullName(req.getFullName().trim())
                .email(email)
                .password(passwordEncoder.encode(req.getPassword()))
                .role(req.getRole())
                .active(true)
                .build();
        User saved = userRepository.save(user);
        log.info("User created | id={} | email={} | role={}", saved.getId(), saved.getEmail(), saved.getRole());
        return toRow(saved);
    }

    @Transactional
    public UserRowResponse updateUser(Long id, UpdateUserRequest req) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));

        if (StringUtils.hasText(req.getFullName())) {
            user.setFullName(req.getFullName().trim());
        }
        if (StringUtils.hasText(req.getEmail())) {
            String newEmail = req.getEmail().trim().toLowerCase(Locale.ROOT);
            if (!newEmail.equals(user.getEmail()) && userRepository.existsByEmailIgnoreCase(newEmail)) {
                throw new IllegalArgumentException("A user with this email already exists.");
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

        User saved = userRepository.save(user);
        log.info("User updated | id={} | email={}", saved.getId(), saved.getEmail());
        return toRow(saved);
    }

    @Transactional
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("User not found with id: " + id));
        userRepository.delete(user);
        log.info("User deleted | id={} | email={}", id, user.getEmail());
    }

    // ── helpers ────────────────────────────────────────────────────────────────

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