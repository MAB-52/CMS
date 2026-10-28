import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule, TableRowExpandEvent } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Subject, takeUntil } from 'rxjs';
import {
  AdminConsentTemplate,
  CustomerConsentRecordStatus,
  CustomerConsentSummary,
  MisCustomerConsentReportRow,
  customerConsentRecordStatusLabel,
} from '../../../../core/models/admin.model';
import {
  CONSENT_STATUS_FILTER_OPTIONS,
  CUSTOMER_STATUS_OPTIONS,
  ConsentSummaryChip,
  StatusMeta as SharedStatusMeta,
  consentStatusMeta,
  consentSummaryChip,
  customerStatusMeta,
} from '../../../../core/utils/consent-status.util';
import { blobErrorMessage, saveBlob } from '../../../../core/utils/download.util';
import { CustomerConsentRecordRow } from '../../../../core/models/customer-consent-record.model';
import { AdminService } from '../../../../core/services/admin.service';
import { CustomerConsentRecordService } from '../../../../core/services/customer-consent-record.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

interface StatusMeta {
  severity: TagSeverity;
  icon: string;
}

const STATUS_META: Record<CustomerConsentRecordStatus, StatusMeta> = {
  ACCEPTED: { severity: 'success', icon: 'pi pi-check-circle' },
  PENDING: { severity: 'info', icon: 'pi pi-clock' },
  REJECTED: { severity: 'danger', icon: 'pi pi-times-circle' },
  WITHDRAWN: { severity: 'secondary', icon: 'pi pi-undo' },
  EXPIRING_SOON: { severity: 'warn', icon: 'pi pi-hourglass' },
  EXPIRED: { severity: 'contrast', icon: 'pi pi-ban' },
};

const ALL_STATUSES = Object.keys(STATUS_META) as CustomerConsentRecordStatus[];

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#FD7E14', '#6F42C1', '#0DCAF0'];

/** Days before expiry at which "valid until" is flagged as expiring. */
const EXPIRY_WARN_DAYS = 30;
const DAY_MS = 86_400_000;

@Component({
  selector: 'app-mis-report-customer-consent-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    DatePickerModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MultiSelectModule,
    ProgressBarModule,
    SelectModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './mis-report-customer-consent-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', './mis-report-customer-consent-tab.component.css'],
})
export class MisReportCustomerConsentTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly consentRecordsApi = inject(CustomerConsentRecordService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly rows = signal<MisCustomerConsentReportRow[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal<'csv' | 'excel' | null>(null);
  readonly totalElements = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = signal(10);
  readonly skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  readonly statusOptions = CUSTOMER_STATUS_OPTIONS;
  readonly consentStatusOptions = CONSENT_STATUS_FILTER_OPTIONS;
  readonly templates = signal<AdminConsentTemplate[]>([]);
  readonly vipOptions = [
    { value: '', label: 'All customers' },
    { value: 'true', label: 'VIP only' },
    { value: 'false', label: 'Non-VIP' },
  ];

  selectedStatuses: string[] = [];
  selectedConsentStatuses: string[] = [];
  selectedTemplateId: number | null = null;
  private applied: ReturnType<MisReportCustomerConsentTabComponent['buildParams']> = {
    status: undefined,
    consentStatus: undefined,
    consentDbId: null,
    vip: undefined,
    fromDate: undefined,
    toDate: undefined,
    search: undefined,
  };
  vipFilter: '' | 'true' | 'false' = '';
  validFrom: Date | null = null;
  validTo: Date | null = null;
  search = '';

  // ── Inline history expansion ────────────────────────────────────────────
  expandedRows: Record<string, boolean> = {};
  readonly historyLoadingFor = signal<string | null>(null);
  readonly historyByCustomer = signal<Partial<Record<string, CustomerConsentRecordRow[]>>>({});
  readonly historyPageSize = 5;

  ngOnInit(): void {
    this.adminApi.listConsentTemplates().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => this.templates.set(res.success && res.data ? res.data : []),
      error: () => this.templates.set([]),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  statusCsv(): string | undefined {
    if (!this.selectedStatuses.length) return undefined;
    return this.selectedStatuses.join(',');
  }

  vipBool(): boolean | undefined {
    if (this.vipFilter === 'true') return true;
    if (this.vipFilter === 'false') return false;
    return undefined;
  }

  activeFilterCount(): number {
    const a = this.applied;
    return [!!a.status, !!a.consentStatus, a.consentDbId != null, a.vip !== undefined, !!a.fromDate, !!a.toDate, !!a.search]
      .filter(Boolean).length;
  }

  private buildParams() {
    return {
      status: this.statusCsv(),
      consentStatus: this.selectedConsentStatuses.length ? this.selectedConsentStatuses.join(',') : undefined,
      consentDbId: this.selectedTemplateId as number | null,
      vip: this.vipBool(),
      fromDate: this.toIsoDate(this.validFrom),
      toDate: this.toIsoDate(this.validTo),
      search: this.search.trim() || undefined,
    };
  }

  private filterParams() {
    return this.applied;
  }

  /** Local calendar date as yyyy-MM-dd (avoids the UTC shift of toISOString). */
  private toIsoDate(d: Date | null): string | undefined {
    if (!d) return undefined;
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${mm}-${dd}`;
  }

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisCustomerConsentReport({ page, size: this.pageSize(), ...this.filterParams() })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (!res.success || !res.data) {
            this.rows.set([]);
            this.totalElements.set(0);
            this.notify.warning('Customer consent', res.message || 'No data.');
            return;
          }
          this.rows.set(res.data.content);
          this.totalElements.set(res.data.totalElements);
          this.currentPage.set(res.data.currentPage);
        },
        error: (err) => {
          this.loading.set(false);
          this.logger.error('MisCustomerConsent', 'load', err);
          this.notify.error('Customer consent', err?.error?.message || 'Load failed.');
        },
      });
  }

  /** p-table fires this on init and on every paginator change. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    this.load(Math.floor((event.first ?? 0) / rows));
  }

  private isRangeValid(): boolean {
    if (this.validFrom && this.validTo && this.validFrom.getTime() > this.validTo.getTime()) {
      this.notify.warning('Customer consent', "'From' date must be on or before 'To' date.");
      return false;
    }
    return true;
  }

  apply(): void {
    if (!this.isRangeValid()) return;
    this.applied = this.buildParams();
    this.expandedRows = {};
    this.load(0);
  }

  reset(): void {
    this.selectedStatuses = [];
    this.selectedConsentStatuses = [];
    this.selectedTemplateId = null;
    this.vipFilter = '';
    this.validFrom = null;
    this.validTo = null;
    this.search = '';
    this.apply();
  }

  label(s: string | null | undefined): string {
    return customerConsentRecordStatusLabel(s);
  }

  statusMeta(status: string | null | undefined): StatusMeta {
    return STATUS_META[status as CustomerConsentRecordStatus] ?? { severity: 'secondary', icon: 'pi pi-circle' };
  }

  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }

  avatarColor(seed: string): string {
    let h = 0;
    for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
  }

  /** "in 3 days", "2 months ago" … for secondary date captions. */
  relative(value: string | null | undefined): string {
    if (!value) return '';
    const t = new Date(value).getTime();
    if (Number.isNaN(t)) return '';
    const diffDays = Math.round((t - Date.now()) / DAY_MS);
    const abs = Math.abs(diffDays);
    if (abs < 1) return 'today';
    if (abs < 30) return this.relTime.format(diffDays, 'day');
    if (abs < 365) return this.relTime.format(Math.round(diffDays / 30), 'month');
    return this.relTime.format(Math.round(diffDays / 365), 'year');
  }

  validity(value: string | null | undefined): 'expired' | 'soon' | 'ok' | 'none' {
    const days = this.daysUntil(value);
    if (days === null) return 'none';
    if (days < 0) return 'expired';
    return days <= EXPIRY_WARN_DAYS ? 'soon' : 'ok';
  }

  private daysUntil(value: string | null | undefined): number | null {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(value ?? '');
    if (!m) return null;
    const target = new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).getTime();
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    return Math.round((target - today) / DAY_MS);
  }

  customerStatus(row: MisCustomerConsentReportRow): SharedStatusMeta {
    return customerStatusMeta(row.currentStatus);
  }

  consentStatus(c: CustomerConsentSummary): SharedStatusMeta {
    return consentStatusMeta(c.status);
  }

  summaryChip(row: MisCustomerConsentReportRow): ConsentSummaryChip {
    return consentSummaryChip(row.consents);
  }

  exportCsv(): void {
    if (!this.isRangeValid()) return;
    this.exporting.set('csv');
    this.adminApi
      .exportMisCustomerConsentCsv(this.filterParams())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          this.exporting.set(null);
          saveBlob(blob, 'customer-consent-report', 'csv');
          this.notify.success('Export', `CSV with ${this.totalElements()} row(s) downloaded.`);
        },
        error: async (err) => {
          this.exporting.set(null);
          this.logger.error('MisCustomerConsent', 'csv', err);
          this.notify.error('Export', await blobErrorMessage(err, 'Export failed.'));
        },
      });
  }

  exportExcel(): void {
    if (!this.isRangeValid()) return;
    this.exporting.set('excel');
    this.adminApi
      .exportMisCustomerConsentExcel(this.filterParams())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          this.exporting.set(null);
          saveBlob(blob, 'customer-consent-report', 'xlsx');
          this.notify.success('Export', `Excel with ${this.totalElements()} row(s) downloaded.`);
        },
        error: async (err) => {
          this.exporting.set(null);
          this.logger.error('MisCustomerConsent', 'excel', err);
          this.notify.error('Export', await blobErrorMessage(err, 'Export failed.'));
        },
      });
  }

  // ── View consent history (Inline expand) ────────────────────────────────

  onRowExpand(event: TableRowExpandEvent): void {
    const id = (event.data as MisCustomerConsentReportRow).customerId;
    if (this.historyByCustomer()[id]) return;

    this.historyLoadingFor.set(id);
    this.consentRecordsApi.getRecordsByCustomer(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.historyLoadingFor.set(null);
          const records: CustomerConsentRecordRow[] = res.success && res.data ? res.data : [];
          this.historyByCustomer.set({ ...this.historyByCustomer(), [id]: records });
        },
        error: (err) => {
          this.historyLoadingFor.set(null);
          this.logger.error('MisCustomerConsent', 'history', err);
          this.notify.error('Consent history', err?.error?.message || 'Could not load consent history.');
        },
      });
  }

  /** Per-status counts for the summary chips above a customer's history. */
  historySummary(customerId: string): { status: CustomerConsentRecordStatus; count: number }[] {
    const records = this.historyByCustomer()[customerId] ?? [];
    return ALL_STATUSES
      .map((status) => ({ status, count: records.filter((r) => r.status === status).length }))
      .filter((s) => s.count > 0);
  }
}
