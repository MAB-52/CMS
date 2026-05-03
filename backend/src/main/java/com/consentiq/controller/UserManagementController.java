package com.consentiq.controller;

import com.consentiq.model.dto.request.CreateUserRequest;
import com.consentiq.model.dto.request.UpdateUserRequest;
import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.PagedResponse;
import com.consentiq.model.dto.response.UserRowResponse;
import com.consentiq.service.UserManagementService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/users")
@RequiredArgsConstructor
@Slf4j
@PreAuthorize("hasRole('ADMIN')")
public class UserManagementController {

    private final UserManagementService userManagementService;

    // GET /api/admin/users?page=0&size=10&search=john&role=MAKER&active=true&sortDir=DESC
    @GetMapping
    public ResponseEntity<ApiResponse<PagedResponse<UserRowResponse>>> listUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String search,
            @RequestParam(required = false) String role,
            @RequestParam(required = false) String active,
            @RequestParam(defaultValue = "DESC") String sortDir) {
        PagedResponse<UserRowResponse> data =
                userManagementService.listUsers(page, size, search, role, active, sortDir);
        return ResponseEntity.ok(ApiResponse.success("Users retrieved", data));
    }

    // GET /api/admin/users/{id}
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserRowResponse>> getUser(@PathVariable Long id) {
        UserRowResponse data = userManagementService.getUser(id);
        return ResponseEntity.ok(ApiResponse.success("User retrieved", data));
    }

    // POST /api/admin/users
    @PostMapping
    public ResponseEntity<ApiResponse<UserRowResponse>> createUser(
            @Valid @RequestBody CreateUserRequest request) {
        UserRowResponse data = userManagementService.createUser(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("User created successfully", data));
    }

    // PATCH /api/admin/users/{id}
    @PatchMapping("/{id}")
    public ResponseEntity<ApiResponse<UserRowResponse>> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request) {
        UserRowResponse data = userManagementService.updateUser(id, request);
        return ResponseEntity.ok(ApiResponse.success("User updated successfully", data));
    }

    // DELETE /api/admin/users/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteUser(@PathVariable Long id) {
        userManagementService.deleteUser(id);
        return ResponseEntity.ok(ApiResponse.success("User deleted successfully", null));
    }
}