-- ConsentIQ: per-customer per-template consent tracking (additive).
-- When Flyway is enabled, this creates the table explicitly; JPA may also align schema via ddl-auto.

CREATE TABLE IF NOT EXISTS customer_consent_records (
    id BIGINT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(64) NOT NULL,
    consent_db_id BIGINT NOT NULL,
    status VARCHAR(32) NOT NULL,
    responded_at DATETIME(6) NULL,
    consent_valid_until DATE NULL,
    last_invite_sent_at DATETIME(6) NULL,
    source_rule_id BIGINT NULL,
    source_broadcast_id BIGINT NULL,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uk_ccr_customer_consent UNIQUE (customer_id, consent_db_id),
    KEY idx_ccr_consent_db_id (consent_db_id),
    KEY idx_ccr_customer_id (customer_id),
    KEY idx_ccr_consent_status (consent_db_id, status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
