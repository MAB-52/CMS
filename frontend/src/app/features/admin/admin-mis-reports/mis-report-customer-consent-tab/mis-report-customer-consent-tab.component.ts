import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
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

const ALL_STATUSES: CustomerConsentRecordStatus[] = [
  'ACCEPTED',
  'PENDING',
  'REJECTED',
  'WITHDRAWN',
  'EXPIRING_SOON',
  'EXPIRED',
];

@Component({
  selector: 'app-mis-report-customer-consent-tab',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './mis-report-customer-consent-tab.component.html',
  styleUrl: './mis-report-customer-consent-tab.component.scss',
})
export class MisReportCustomerConsentTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly consentRecordsApi = inject(CustomerConsentRecordService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();

  readonly rows = signal<MisCustomerConsentReportRow[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal(false);
  readonly totalPages = signal(0);
  readonly totalElements = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = 10;

  readonly allStatuses = ALL_STATUSES;
  selectedStatuses: CustomerConsentRecordStatus[] = [];
  vipFilter: '' | 'true' | 'false' = '';
  validFrom = '';
  validTo = '';
  search = '';

  // ── Inline history expansion ────────────────────────────────────────────
  readonly expandedCustomerIds = signal<Set<string>>(new Set());
  readonly historyLoadingFor = signal<string | null>(null);
  readonly historyByCustomer = signal<Record<string, CustomerConsentRecordRow[]>>({});
  
  // ── History Pagination (New State Added) ───────────────────────────────
  readonly historyPageSize = 5;
  readonly historyPageByCustomer = signal<Record<string, number>>({});

  ngOnInit(): void {
    this.load(0);
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

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisCustomerConsentReport({
        page,
        size: this.pageSize,
        status: this.statusCsv(),
        vip: this.vipBool(),
        fromDate: this.validFrom || undefined,
        toDate: this.validTo || undefined,
        search: this.search.trim() || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (!res.success || !res.data) {
            this.notify.warning('Customer consent', res.message || 'No data.');
            return;
          }
          this.rows.set(res.data.content);
          this.totalPages.set(res.data.totalPages);
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

  apply(): void { this.load(0); }

  prev(): void {
    const p = this.currentPage();
    if (p > 0) this.load(p - 1);
  }

  next(): void {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) this.load(p + 1);
  }

  label(s: string | null | undefined): string {
    return customerConsentRecordStatusLabel(s);
  }

  badgeClass(status: string | null | undefined): string {
    switch (status) {
      case 'ACCEPTED':      return 'badge badge--active';
      case 'PENDING':       return 'badge badge--pending';
      case 'REJECTED':      return 'badge badge--declined';
      case 'WITHDRAWN':     return 'badge badge--withdrawn';
      case 'EXPIRING_SOON': return 'badge badge--expiring';
      case 'EXPIRED':       return 'badge badge--expired';
      default:              return 'badge';
    }
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
    this.exporting.set(true);
    this.adminApi
      .exportMisCustomerConsentCsv({
        status: this.statusCsv(),
        vip: this.vipBool(),
        fromDate: this.validFrom || undefined,
        toDate: this.validTo || undefined,
        search: this.search.trim() || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          this.exporting.set(false);
          this.download(blob, 'customer-consent-report.csv');
          this.notify.success('Export', 'CSV download started.');
        },
        error: (err) => {
          this.exporting.set(false);
          this.logger.error('MisCustomerConsent', 'csv', err);
          this.notify.error('Export', err?.error?.message || 'Export failed.');
        },
      });
  }

  exportExcel(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisCustomerConsentExcel({
        status: this.statusCsv(),
        vip: this.vipBool(),
        fromDate: this.validFrom || undefined,
        toDate: this.validTo || undefined,
        search: this.search.trim() || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob) => {
          this.exporting.set(false);
          this.download(blob, 'customer-consent-report.xlsx');
          this.notify.success('Export', 'Excel download started.');
        },
        error: (err) => {
          this.exporting.set(false);
          this.logger.error('MisCustomerConsent', 'excel', err);
          this.notify.error('Export', err?.error?.message || 'Export failed.');
        },
      });
  }

  // ── View consent history (Inline expand) ────────────────────────────────

  toggleHistory(row: MisCustomerConsentReportRow): void {
    const id = row.customerId;
    const currentSet = new Set(this.expandedCustomerIds());

    if (currentSet.has(id)) {
      currentSet.delete(id);
      this.expandedCustomerIds.set(currentSet);
      return;
    }

    currentSet.add(id);
    this.expandedCustomerIds.set(currentSet);

    // Initialize history page to 0 if not set
    if (this.historyPageByCustomer()[id] === undefined) {
      this.historyPageByCustomer.set({ ...this.historyPageByCustomer(), [id]: 0 });
    }

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

  historyStatusClass(status: string | null | undefined): string {
    return 'cc-status cc-status--' + (status?.toString()?.toLowerCase() ?? '');
  }

  // ── History Pagination Helpers (New Logic) ─────────────────────────────
  
  getPaginatedHistory(customerId: string): CustomerConsentRecordRow[] {
    const allRecords = this.historyByCustomer()[customerId] ?? [];
    const currentPage = this.historyPageByCustomer()[customerId] ?? 0;
    const startIndex = currentPage * this.historyPageSize;
    return allRecords.slice(startIndex, startIndex + this.historyPageSize);
  }

  getHistoryTotalPages(customerId: string): number {
    const totalRecords = (this.historyByCustomer()[customerId] ?? []).length;
    return Math.ceil(totalRecords / this.historyPageSize) || 1;
  }

  getHistoryCurrentPage(customerId: string): number {
    return this.historyPageByCustomer()[customerId] ?? 0;
  }

  prevHistoryPage(customerId: string): void {
    const cur = this.getHistoryCurrentPage(customerId);
    if (cur > 0) {
      this.historyPageByCustomer.set({ ...this.historyPageByCustomer(), [customerId]: cur - 1 });
    }
  }

  nextHistoryPage(customerId: string): void {
    const cur = this.getHistoryCurrentPage(customerId);
    if (cur < this.getHistoryTotalPages(customerId) - 1) {
      this.historyPageByCustomer.set({ ...this.historyPageByCustomer(), [customerId]: cur + 1 });
    }
  }
}