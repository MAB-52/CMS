import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import { AuditLogEntry } from '../../../../core/models/audit.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-mis-report-audit-tab',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './mis-report-audit-tab.component.html',
  styleUrl: './mis-report-audit-tab.component.scss',
})
export class MisReportAuditTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();

  readonly rows = signal<AuditLogEntry[]>([]);
  readonly actions = signal<string[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal(false);
  readonly totalPages = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = 15;

  entityType = '';
  action = '';
  from = '';
  to = '';
  performedBy = '';

  ngOnInit(): void {
    this.adminApi
      .getMisAuditActions()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.actions.set(res.data);
          }
        },
        error: (err) => this.logger.error('MisAudit', 'actions', err),
      });
    this.load(0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  iso(s: string): string | undefined {
    if (!s) {
      return undefined;
    }
    return new Date(s + 'T00:00:00').toISOString();
  }

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisAuditReport({
        page,
        size: this.pageSize,
        entityType: this.entityType || undefined,
        action: this.action || undefined,
        fromDate: this.iso(this.from),
        toDate: this.to ? new Date(this.to + 'T23:59:59').toISOString() : undefined,
        performedBy: this.performedBy.trim() || undefined,
      })
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
          this.logger.error('MisAudit', 'load', err);
          this.notify.error('Audit', err?.error?.message || 'Load failed.');
        },
      });
  }

  apply(): void {
    this.load(0);
  }

  prev(): void {
    const p = this.currentPage();
    if (p > 0) {
      this.load(p - 1);
    }
  }

  next(): void {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) {
      this.load(p + 1);
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
      .exportMisAuditCsv({
        entityType: this.entityType || undefined,
        action: this.action || undefined,
        fromDate: this.iso(this.from),
        toDate: this.to ? new Date(this.to + 'T23:59:59').toISOString() : undefined,
        performedBy: this.performedBy.trim() || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.download(b, 'audit-report.csv');
          this.notify.success('Export', 'CSV started.');
        },
        error: (err) => {
          this.exporting.set(false);
          this.notify.error('Export', err?.error?.message || 'Failed.');
        },
      });
  }

  exportExcel(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisAuditExcel({
        entityType: this.entityType || undefined,
        action: this.action || undefined,
        fromDate: this.iso(this.from),
        toDate: this.to ? new Date(this.to + 'T23:59:59').toISOString() : undefined,
        performedBy: this.performedBy.trim() || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.download(b, 'audit-report.xlsx');
          this.notify.success('Export', 'Excel started.');
        },
        error: (err) => {
          this.exporting.set(false);
          this.notify.error('Export', err?.error?.message || 'Failed.');
        },
      });
  }
}
