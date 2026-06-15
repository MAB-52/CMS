-- ConsentIQ: Admin broadcast activation gate (scheduler + UI).
-- Table name matches JPA @Table on ConsentBroadcastRequest.
-- Run manually if not using Flyway, or enable Flyway in the application.

ALTER TABLE consent_broadcast_requests
    ADD COLUMN broadcast_active BOOLEAN NOT NULL DEFAULT TRUE,
    ADD COLUMN broadcast_running BOOLEAN NOT NULL DEFAULT FALSE;
