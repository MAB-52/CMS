import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subject, takeUntil } from 'rxjs';
import {
  MisExpiryReportRow,
  customerConsentRecordStatusLabel,
} from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-mis-report-expiry-tab',
  standalone: true,
  imports: [DatePipe, FormsModule, MatButtonModule, MatButtonToggleModule, MatIconModule, MatProgressBarModule],
  templateUrl: './mis-report-expiry-tab.component.html',
  styleUrl: './mis-report-expiry-tab.component.scss',
})
export class MisReportExpiryTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();

  mode: 'EXPIRING' | 'EXPIRED' = 'EXPIRING';
  withinDays = 30;
  readonly rows = signal<MisExpiryReportRow[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal(false);
  readonly totalPages = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = 10;

  ngOnInit(): void {
    this.load(0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisExpiryReport({ type: this.mode, withinDays: this.withinDays, page, size: this.pageSize })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.rows.set(res.data.content);
            this.totalPages.set(res.data.totalPages);
            this.currentPage.set(res.data.currentPage);
          }
        },
        error: (err) => {
          this.loading.set(false);
          this.logger.error('MisExpiry', 'load', err);
          this.notify.error('Expiry', err?.error?.message || 'Load failed.');
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

  private dl(blob: Blob, n: string): void {
    const u = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }

  exportCsv(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisExpiryCsv(this.mode, this.withinDays)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.dl(b, 'expiry-report.csv');
          this.notify.success('Export', 'CSV started.');
        },
        error: () => {
          this.exporting.set(false);
          this.notify.error('Export', 'Failed.');
        },
      });
  }

  exportExcel(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisExpiryExcel(this.mode, this.withinDays)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.dl(b, 'expiry-report.xlsx');
          this.notify.success('Export', 'Excel started.');
        },
        error: () => {
          this.exporting.set(false);
          this.notify.error('Export', 'Failed.');
        },
      });
  }
}