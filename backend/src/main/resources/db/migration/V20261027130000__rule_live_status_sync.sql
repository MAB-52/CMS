-- Rule status now tracks execution activation (active ⇔ LIVE, inactive ⇔ APPROVED).
-- Run manually once: the project uses spring.jpa.hibernate.ddl-auto, not Flyway.
UPDATE consent_rules SET status = 'LIVE'     WHERE status = 'APPROVED' AND execution_active = true;
UPDATE consent_rules SET status = 'APPROVED' WHERE status = 'LIVE'     AND execution_active = false;
