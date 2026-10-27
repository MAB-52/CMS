import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
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
  CustomerConsentRecordStatus,
  MisCustomerConsentReportRow,
  customerConsentRecordStatusLabel,
} from '../../../../core/models/admin.model';
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
export class MisReportCustomerConsentTabComponent implements OnDestroy {
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

  readonly statusOptions = ALL_STATUSES.map((s) => ({ value: s, label: customerConsentRecordStatusLabel(s), ...STATUS_META[s] }));
  readonly vipOptions = [
    { value: '', label: 'All customers' },
    { value: 'true', label: 'VIP only' },
    { value: 'false', label: 'Non-VIP' },
  ];

  selectedStatuses: CustomerConsentRecordStatus[] = [];
  vipFilter: '' | 'true' | 'false' = '';
  validFrom: Date | null = null;
  validTo: Date | null = null;
  search = '';

  // ── Inline history expansion ────────────────────────────────────────────
  expandedRows: Record<string, boolean> = {};
  readonly historyLoadingFor = signal<string | null>(null);
  readonly historyByCustomer = signal<Partial<Record<string, CustomerConsentRecordRow[]>>>({});
  readonly historyPageSize = 5;

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
    return [
      this.selectedStatuses.length > 0,
      this.vipFilter !== '',
      !!this.validFrom,
      !!this.validTo,
      !!this.search.trim(),
    ].filter(Boolean).length;
  }

  private filterParams() {
    return {
      status: this.statusCsv(),
      vip: this.vipBool(),
      fromDate: this.toIsoDate(this.validFrom),
      toDate: this.toIsoDate(this.validTo),
      search: this.search.trim() || undefined,
    };
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
    this.expandedRows = {};
    this.load(0);
  }

  reset(): void {
    this.selectedStatuses = [];
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
    if (!value) return 'none';
    const t = new Date(value).getTime();
    if (Number.isNaN(t)) return 'none';
    const days = (t - Date.now()) / DAY_MS;
    if (days < 0) return 'expired';
    return days <= EXPIRY_WARN_DAYS ? 'soon' : 'ok';
  }

  private download(blob: Blob, name: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
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
          this.download(blob, 'customer-consent-report.csv');
          this.notify.success('Export', 'CSV download started.');
        },
        error: (err) => {
          this.exporting.set(null);
          this.logger.error('MisCustomerConsent', 'csv', err);
          this.notify.error('Export', err?.error?.message || 'Export failed.');
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
          this.download(blob, 'customer-consent-report.xlsx');
          this.notify.success('Export', 'Excel download started.');
        },
        error: (err) => {
          this.exporting.set(null);
          this.logger.error('MisCustomerConsent', 'excel', err);
          this.notify.error('Export', err?.error?.message || 'Export failed.');
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
