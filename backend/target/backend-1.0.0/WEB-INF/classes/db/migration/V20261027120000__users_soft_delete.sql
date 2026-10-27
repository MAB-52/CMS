-- ConsentIQ: soft delete for users with activity history.
-- Users referenced by audit logs, consents, rules etc. cannot be hard-deleted (FK + audit trail),
-- so deleting them sets deleted_at and deactivates them instead.
-- Hibernate ddl-auto=update adds this column automatically; run manually if not using Flyway.

ALTER TABLE users
    ADD COLUMN deleted_at DATETIME(6) NULL;
