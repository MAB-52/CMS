import { CustomerConsentSummary, CustomerCurrentStatus } from '../models/admin.model';

export type StatusSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

export interface StatusMeta {
  label: string;
  severity: StatusSeverity;
  icon: string;
}

export const CUSTOMER_STATUS_META: Record<CustomerCurrentStatus, StatusMeta> = {
  ACTIVE: { label: 'Active', severity: 'success', icon: 'pi pi-check-circle' },
  PENDING: { label: 'Pending response', severity: 'warn', icon: 'pi pi-clock' },
  DECLINED: { label: 'Declined', severity: 'danger', icon: 'pi pi-times-circle' },
  WITHDRAWN: { label: 'Withdrawn', severity: 'secondary', icon: 'pi pi-undo' },
  EXPIRED: { label: 'Expired', severity: 'contrast', icon: 'pi pi-ban' },
  UNRESPONSIVE: { label: 'Unresponsive', severity: 'secondary', icon: 'pi pi-volume-off' },
  NO_CONSENT: { label: 'No consent', severity: 'secondary', icon: 'pi pi-minus-circle' },
};

export const CONSENT_STATUS_META: Record<string, StatusMeta> = {
  ACCEPTED: { label: 'Accepted', severity: 'success', icon: 'pi pi-check-circle' },
  EXPIRING_SOON: { label: 'Expiring soon', severity: 'warn', icon: 'pi pi-hourglass' },
  PENDING: { label: 'Pending', severity: 'info', icon: 'pi pi-clock' },
  REJECTED: { label: 'Declined', severity: 'danger', icon: 'pi pi-times-circle' },
  WITHDRAWN: { label: 'Withdrawn', severity: 'secondary', icon: 'pi pi-undo' },
  EXPIRED: { label: 'Expired', severity: 'contrast', icon: 'pi pi-ban' },
  UNRESPONSIVE: { label: 'Unresponsive', severity: 'secondary', icon: 'pi pi-volume-off' },
};

export const CUSTOMER_STATUS_OPTIONS: ({ value: CustomerCurrentStatus } & StatusMeta)[] = (
  Object.keys(CUSTOMER_STATUS_META) as CustomerCurrentStatus[]
).map((value) => ({ value, ...CUSTOMER_STATUS_META[value] }));

export const CONSENT_STATUS_FILTER_OPTIONS: ({ value: string } & StatusMeta)[] = [
  { value: 'ACCEPTED', ...CONSENT_STATUS_META['ACCEPTED'] },
  { value: 'PENDING', ...CONSENT_STATUS_META['PENDING'] },
  { value: 'DECLINED', ...CONSENT_STATUS_META['REJECTED'] },
  { value: 'WITHDRAWN', ...CONSENT_STATUS_META['WITHDRAWN'] },
  { value: 'EXPIRED', ...CONSENT_STATUS_META['EXPIRED'] },
  { value: 'UNRESPONSIVE', ...CONSENT_STATUS_META['UNRESPONSIVE'] },
];

export function customerStatusMeta(status: string | null | undefined): StatusMeta {
  return CUSTOMER_STATUS_META[(status ?? 'NO_CONSENT') as CustomerCurrentStatus] ?? CUSTOMER_STATUS_META.NO_CONSENT;
}

export function consentStatusMeta(status: string | null | undefined): StatusMeta {
  return CONSENT_STATUS_META[status ?? ''] ?? { label: status || '—', severity: 'secondary', icon: 'pi pi-circle' };
}

export interface ConsentSummaryChip {
  total: number;
  declined: number;
  pending: number;
  tooltip: string;
}

export function consentSummaryChip(consents: CustomerConsentSummary[] | null | undefined): ConsentSummaryChip {
  const list = consents ?? [];
  const declined = list.filter((c) => c.status === 'REJECTED' || c.status === 'WITHDRAWN').length;
  const pending = list.filter((c) => c.status === 'PENDING').length;
  const tooltip = list.length
    ? list.map((c) => `${c.consentName}: ${consentStatusMeta(c.status).label}`).join('\n')
    : 'No consent records yet';
  return { total: list.length, declined, pending, tooltip };
}
