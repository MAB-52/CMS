-- ConsentIQ: Optional linked consent template + broadcast rule (1:1 via consents.linked_rule_id).
-- FK direction: consents.linked_rule_id -> consent_rules(id). No second FK on consent_rules.

ALTER TABLE consent_rules
    ADD COLUMN is_linked_to_consent_workflow BOOLEAN NOT NULL DEFAULT FALSE;

ALTER TABLE consents
    ADD COLUMN linked_rule_intent BOOLEAN NOT NULL DEFAULT FALSE,
    ADD COLUMN linked_rule_id BIGINT NULL;

ALTER TABLE consents
    ADD CONSTRAINT fk_consents_linked_rule
        FOREIGN KEY (linked_rule_id) REFERENCES consent_rules (id);

CREATE UNIQUE INDEX uk_consents_linked_rule_id ON consents (linked_rule_id);
