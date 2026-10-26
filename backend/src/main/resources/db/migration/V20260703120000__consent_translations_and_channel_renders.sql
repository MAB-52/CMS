-- backend/src/main/resources/db/migration/V20260703120000__consent_translations_and_channel_renders.sql

CREATE TABLE IF NOT EXISTS consent_translations (
    id BIGINT NOT NULL AUTO_INCREMENT,
    consent_id BIGINT NOT NULL,
    language_code VARCHAR(10) NOT NULL,
    content LONGTEXT NULL,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uk_consent_translation_lang UNIQUE (consent_id, language_code),
    CONSTRAINT fk_consent_translation_consent FOREIGN KEY (consent_id) REFERENCES consents (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS consent_channel_renders (
    id BIGINT NOT NULL AUTO_INCREMENT,
    consent_translation_id BIGINT NOT NULL,
    channel VARCHAR(20) NOT NULL,
    rendered_content LONGTEXT NULL,
    created_at DATETIME(6) NOT NULL,
    updated_at DATETIME(6) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT uk_channel_render UNIQUE (consent_translation_id, channel),
    CONSTRAINT fk_channel_render_translation FOREIGN KEY (consent_translation_id) REFERENCES consent_translations (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE consents
    ADD COLUMN last_reviewed_combinations JSON NULL,
    ADD COLUMN revision_flagged_combinations JSON NULL;