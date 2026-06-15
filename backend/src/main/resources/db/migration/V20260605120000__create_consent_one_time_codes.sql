-- One-time opaque codes for public consent email links (exchange → CONSENT_SESSION cookie).

CREATE TABLE IF NOT EXISTS consent_one_time_codes (
    id BIGINT NOT NULL AUTO_INCREMENT,
    code VARCHAR(64) NOT NULL,
    consent_request_id BIGINT NOT NULL,
    created_at DATETIME(6) NOT NULL,
    expires_at DATETIME(6) NOT NULL,
    used BIT(1) NOT NULL DEFAULT b'0',
    PRIMARY KEY (id),
    CONSTRAINT uk_consent_one_time_code UNIQUE (code),
    KEY idx_cotc_consent_request_id (consent_request_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
