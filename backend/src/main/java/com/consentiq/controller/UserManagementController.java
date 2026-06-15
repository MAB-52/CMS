package com.consentiq.controller;

import com.consentiq.model.dto.request.CreateUserRequest;
import com.consentiq.model.dto.request.UpdateUserRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.UserRowResponse;
import com.consentiq.service.UserManagementService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/users")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class UserManagementController {

    private static final Logger log = LoggerFactory.getLogger(UserManagementController.class);

    private final UserManagementService userManagementService;

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping
    public ResponseEntity<ApiResponse<PagedResponse<UserRowResponse>>> listUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String role,
            @RequestParam(required = false) String active,
            @RequestParam(defaultValue = "DESC") String sortDir,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug(
                "Entering listUsers | params: page={} | size={} | search={} | role={} | active={} | sortDir={}",
                page,
                size,
                search,
                role,
                active,
                sortDir);
        log.info("User={} | action=listUsers | entity=User | id=n/a", cu);
        PagedResponse<UserRowResponse> data =
                userManagementService.listUsers(page, size, search, role, active, sortDir);
        ResponseEntity<ApiResponse<PagedResponse<UserRowResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Users retrieved", data));
        log.debug("Exiting listUsers | result={}", result.getStatusCode());
        return result;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserRowResponse>> getUser(
            @PathVariable Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getUser | params: id={}", id);
        log.info("User={} | action=getUser | entity=User | id={}", cu, id);
        UserRowResponse data = userManagementService.getUser(id);
        ResponseEntity<ApiResponse<UserRowResponse>> result =
                ResponseEntity.ok(ApiResponse.success("User retrieved", data));
        log.debug("Exiting getUser | result={}", result.getStatusCode());
        return result;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<UserRowResponse>> createUser(
            @Valid @RequestBody CreateUserRequest request, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering createUser | params: email={}", request.getEmail());
        log.info("User={} | action=createUser | entity=User | id=n/a", cu);
        UserRowResponse data = userManagementService.createUser(request);
        ResponseEntity<ApiResponse<UserRowResponse>> result =
                ResponseEntity.status(HttpStatus.CREATED)
                        .body(ApiResponse.success("User created successfully", data));
        log.debug("Exiting createUser | result={}", result.getStatusCode());
        return result;
    }

    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse<UserRowResponse>> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request,
            HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering updateUser | params: id={}", id);
        log.info("User={} | action=updateUser | entity=User | id={}", cu, id);
        UserRowResponse data = userManagementService.updateUser(id, request);
        ResponseEntity<ApiResponse<UserRowResponse>> result =
                ResponseEntity.ok(ApiResponse.success("User updated successfully", data));
        log.debug("Exiting updateUser | result={}", result.getStatusCode());
        return result;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteUser(@PathVariable Long id, HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering deleteUser | params: id={}", id);
        log.info("User={} | action=deleteUser | entity=User | id={}", cu, id);
        userManagementService.deleteUser(id);
        ResponseEntity<ApiResponse<Void>> result =
                ResponseEntity.ok(ApiResponse.success("User deleted successfully", null));
        log.debug("Exiting deleteUser | result={}", result.getStatusCode());
        return result;
    }
}
