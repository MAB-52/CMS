package com.consentiq.controller;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.consentiq.model.dto.response.ApiResponse;
import com.consentiq.model.dto.response.CustomerFieldResponse;
import com.consentiq.model.entity.Customer;

import jakarta.persistence.Transient;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/customer-fields")
public class CustomerFieldController {

    private static final Logger log = LoggerFactory.getLogger(CustomerFieldController.class);

    private static final Set<String> EXCLUDED_FIELDS = Set.of(
        "id",
        "createdAt",
        "updatedAt",
        "lastConsentInviteSentAt",
        "lastConsentResponseAt",
        "reEngagementEligibleAfter"
    );

    private static String currentUser() {
        return SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getName()
                : "anonymous";
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<CustomerFieldResponse>>> getFields(HttpServletRequest httpRequest) {
        String cu = currentUser();
        log.info(
                "HTTP REQUEST | method={} | uri={} | user={}",
                httpRequest.getMethod(),
                httpRequest.getRequestURI(),
                cu);
        log.debug("Entering getFields | params: none");
        log.info("User={} | action=getFields | entity=CustomerField | id=n/a", cu);
        List<CustomerFieldResponse> fields = new ArrayList<>();

        for (Field field : Customer.class.getDeclaredFields()) {
            String fieldName = field.getName();
            if (EXCLUDED_FIELDS.contains(fieldName)) continue;
            if (java.lang.reflect.Modifier.isStatic(field.getModifiers())) continue;
            if (field.isAnnotationPresent(Transient.class)) continue;

            fields.add(new CustomerFieldResponse(
                fieldName,
                toLabel(fieldName),
                resolveFieldType(field)
            ));
        }

        ResponseEntity<ApiResponse<List<CustomerFieldResponse>>> result =
                ResponseEntity.ok(ApiResponse.success("Customer fields loaded", fields));
        log.debug("Exiting getFields | result={}", result.getStatusCode());
        return result;
    }

    private String toLabel(String camelCase) {
        String spaced = camelCase.replaceAll("([A-Z])", " $1");
        return Character.toUpperCase(spaced.charAt(0)) + spaced.substring(1);
    }

    private String resolveFieldType(Field field) {
        Class<?> type = field.getType();
        if (type == boolean.class || type == Boolean.class) return "BOOLEAN";
        if (type == int.class || type == Integer.class
         || type == long.class || type == Long.class
         || type == double.class || type == Double.class) return "NUMBER";
        if (type == java.time.LocalDate.class
         || type == java.time.Instant.class
         || type == java.time.LocalDateTime.class) return "DATE";
        return "STRING";
    }
}
