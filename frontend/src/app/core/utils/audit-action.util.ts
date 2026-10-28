export type AuditTone = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';
export type AuditActionGroup = 'decision' | 'edit' | 'delivery' | 'other';

export interface AuditActionMeta {
  label: string;
  icon: string;
  severity: AuditTone;
  color: string;
  group: AuditActionGroup;
}

const KNOWN: Record<string, AuditActionMeta> = {
  CONSENT_CREATED: { label: 'Draft created', icon: 'pi pi-plus-circle', severity: 'info', color: 'var(--is-blue)', group: 'edit' },
  CONSENT_DRAFT_SAVED: { label: 'Edited', icon: 'pi pi-pencil', severity: 'secondary', color: 'var(--is-text-2)', group: 'edit' },
  CONSENT_UPDATED: { label: 'Updated', icon: 'pi pi-pencil', severity: 'secondary', color: 'var(--is-text-2)', group: 'edit' },
  CONSENT_SUBMITTED: { label: 'Submitted for approval', icon: 'pi pi-send', severity: 'info', color: 'var(--is-primary)', group: 'decision' },
  CONSENT_APPROVED: { label: 'Approved', icon: 'pi pi-check-circle', severity: 'success', color: 'var(--is-success)', group: 'decision' },
  CONSENT_PUBLISHED: { label: 'Published', icon: 'pi pi-globe', severity: 'success', color: 'var(--is-teal)', group: 'decision' },
  CONSENT_REJECTED: { label: 'Rejected', icon: 'pi pi-times-circle', severity: 'danger', color: 'var(--is-danger)', group: 'decision' },
  CONSENT_REVISION_REQUESTED: { label: 'Revision requested', icon: 'pi pi-replay', severity: 'warn', color: 'var(--is-warning)', group: 'decision' },
  CONSENT_DELETED: { label: 'Deleted', icon: 'pi pi-trash', severity: 'danger', color: 'var(--is-danger)', group: 'edit' },
  CONSENT_INVITE_SENT: { label: 'Invite sent', icon: 'pi pi-envelope', severity: 'contrast', color: 'var(--is-secondary)', group: 'delivery' },
  CONSENT_RECORDED_ON_BEHALF: { label: 'Recorded on behalf', icon: 'pi pi-user-edit', severity: 'contrast', color: 'var(--is-secondary)', group: 'delivery' },
  RULE_CREATED: { label: 'Rule created', icon: 'pi pi-plus-circle', severity: 'info', color: 'var(--is-blue)', group: 'edit' },
  RULE_DRAFT_SAVED: { label: 'Rule edited', icon: 'pi pi-pencil', severity: 'secondary', color: 'var(--is-text-2)', group: 'edit' },
  RULE_UPDATED: { label: 'Rule updated', icon: 'pi pi-pencil', severity: 'secondary', color: 'var(--is-text-2)', group: 'edit' },
  RULE_SUBMITTED: { label: 'Rule submitted', icon: 'pi pi-send', severity: 'info', color: 'var(--is-primary)', group: 'decision' },
  RULE_APPROVED: { label: 'Rule approved', icon: 'pi pi-check-circle', severity: 'success', color: 'var(--is-success)', group: 'decision' },
  RULE_REJECTED: { label: 'Rule rejected', icon: 'pi pi-times-circle', severity: 'danger', color: 'var(--is-danger)', group: 'decision' },
  RULE_REVISION_REQUESTED: { label: 'Rule revision requested', icon: 'pi pi-replay', severity: 'warn', color: 'var(--is-warning)', group: 'decision' },
  RULE_LIVE: { label: 'Rule live', icon: 'pi pi-bolt', severity: 'success', color: 'var(--is-teal)', group: 'decision' },
  RULE_TEMPLATE_LINKED: { label: 'Template linked to rule', icon: 'pi pi-link', severity: 'info', color: 'var(--is-blue)', group: 'other' },
  USER_CREATED: { label: 'User created', icon: 'pi pi-user-plus', severity: 'info', color: 'var(--is-blue)', group: 'edit' },
  USER_UPDATED: { label: 'User updated', icon: 'pi pi-user-edit', severity: 'warn', color: 'var(--is-warning)', group: 'edit' },
  USER_DELETED: { label: 'User deleted', icon: 'pi pi-user-minus', severity: 'danger', color: 'var(--is-danger)', group: 'edit' },
};

const PATTERNS: [RegExp, Omit<AuditActionMeta, 'label'>][] = [
  [/REVISION/, { icon: 'pi pi-replay', severity: 'warn', color: 'var(--is-warning)', group: 'decision' }],
  [/FAIL|ERROR|REJECT|DECLIN|DELETE|REVOK|CANCEL/, { icon: 'pi pi-times-circle', severity: 'danger', color: 'var(--is-danger)', group: 'other' }],
  [/COMPLET|SUCCESS|APPROV|ACCEPT|ACTIVAT|PUBLISH|LIVE/, { icon: 'pi pi-check-circle', severity: 'success', color: 'var(--is-success)', group: 'other' }],
  [/UPDAT|EDIT|CHANG|MODIF|SAVED/, { icon: 'pi pi-pencil', severity: 'secondary', color: 'var(--is-text-2)', group: 'edit' }],
  [/CREAT|ADD|SUBMIT/, { icon: 'pi pi-plus-circle', severity: 'info', color: 'var(--is-blue)', group: 'other' }],
  [/REQUEST|START|RUN|SEND|SENT|TRIGGER/, { icon: 'pi pi-play-circle', severity: 'contrast', color: 'var(--is-secondary)', group: 'other' }],
];

export function humanizeAction(code: string | null | undefined): string {
  if (!code) return '';
  const s = code.replace(/_/g, ' ').toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function auditActionMeta(action: string | null | undefined): AuditActionMeta {
  const code = (action ?? '').toUpperCase();
  const known = KNOWN[code];
  if (known) return known;
  const hit = PATTERNS.find(([re]) => re.test(code));
  const base = hit ? hit[1] : { icon: 'pi pi-history', severity: 'secondary' as AuditTone, color: 'var(--is-text-2)', group: 'other' as AuditActionGroup };
  return { label: humanizeAction(code), ...base };
}
