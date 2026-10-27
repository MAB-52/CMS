package com.consentiq.repository;

import java.util.Optional;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.consentiq.enums.UserRole;
import com.consentiq.model.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    
    Optional<User> findByEmailIgnoreCase(String email);

    Optional<User> findFirstByRoleOrderByIdAsc(UserRole role);

    Optional<User> findFirstByRoleAndDeletedAtIsNullOrderByIdAsc(UserRole role);

    List<User> findByRoleAndDeletedAtIsNull(UserRole role);

    /**
     * 1 when any table still references this user (a hard delete would violate an FK and
     * erase attributable history), else 0. Keep in sync with entities that hold a User.
     */
    @Query(value = """
            SELECT CASE WHEN
                   EXISTS (SELECT 1 FROM audit_logs                WHERE user_id = :id)
                OR EXISTS (SELECT 1 FROM consents                  WHERE created_by = :id OR reviewed_by = :id)
                OR EXISTS (SELECT 1 FROM consent_images            WHERE uploaded_by = :id)
                OR EXISTS (SELECT 1 FROM consent_rules             WHERE created_by = :id OR reviewed_by = :id)
                OR EXISTS (SELECT 1 FROM consent_rule_executions   WHERE triggered_by_user_id = :id)
                OR EXISTS (SELECT 1 FROM consent_versions          WHERE changed_by = :id)
                OR EXISTS (SELECT 1 FROM on_behalf_consent_records WHERE recorded_by = :id)
            THEN 1 ELSE 0 END
            """, nativeQuery = true)
    long hasActivityHistory(@Param("id") Long id);

    boolean existsByEmail(String email);
    
    boolean existsByEmailIgnoreCase(String email);
    
    @Query("""
            SELECT u FROM User u
            WHERE u.deletedAt IS NULL
              AND (:role IS NULL OR u.role = :role)
              AND (:active IS NULL OR u.active = :active)
              AND (:search IS NULL
                   OR LOWER(u.fullName) LIKE LOWER(CONCAT('%', :search, '%'))
                   OR LOWER(u.email)    LIKE LOWER(CONCAT('%', :search, '%')))
            """)
    Page<User> findByFilters(
            @Param("role") UserRole role,
            @Param("active") Boolean active,
            @Param("search") String search,
            Pageable pageable);

    Page<User> findByRoleOrderByFullNameAsc(UserRole role, Pageable pageable);

    List<User> findByRole(UserRole role);
}
