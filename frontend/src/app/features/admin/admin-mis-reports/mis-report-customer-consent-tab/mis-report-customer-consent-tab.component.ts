import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import {
  CustomerConsentRecordStatus,
  MisCustomerConsentReportRow,
  customerConsentRecordStatusLabel,
} from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
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
  ],
  templateUrl: './mis-report-customer-consent-tab.component.html',
  styleUrl: './mis-report-customer-consent-tab.component.scss',
})
export class MisReportCustomerConsentTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
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
}