import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import {
  MisAgentPerformanceRow,
  MisChannelPerformanceRow,
  MisConsentWorkflowStatus,
  MisTatConsentRow,
  MisTatSummary,
} from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-mis-report-operational-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  templateUrl: './mis-report-operational-tab.component.html',
  styleUrl: './mis-report-operational-tab.component.scss',
})
export class MisReportOperationalTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();

  readonly channels = signal<MisChannelPerformanceRow[]>([]);
  readonly agents = signal<MisAgentPerformanceRow[]>([]);
  readonly tatRows = signal<MisTatConsentRow[]>([]);
  readonly tatSummary = signal<MisTatSummary | null>(null);
  readonly tatTotalPages = signal(0);
  readonly tatPage = signal(0);
  readonly loading = signal(false);
  readonly exportingTat = signal(false);

  readonly tatPageSize = 10;
  tatStatus: MisConsentWorkflowStatus | '' = '';
  tatCreatorId: number | '' = '';
  tatFrom = '';
  tatTo = '';
  creatorOptions = signal<MisAgentPerformanceRow[]>([]);

  ngOnInit(): void {
    this.reloadChannels();
    this.reloadAgents();
    this.reloadCreators();
    this.loadTat(0);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reloadChannels(): void {
    this.adminApi
      .getMisChannelPerformance()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.channels.set(res.data);
          }
        },
        error: (e) => this.logger.error('MisOp', 'channels', e),
      });
  }

  reloadAgents(): void {
    this.adminApi
      .getMisAgentPerformance({ page: 0, size: 50 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.agents.set(res.data.content);
          }
        },
        error: (e) => this.logger.error('MisOp', 'agents', e),
      });
  }

  reloadCreators(): void {
    this.adminApi
      .getMisAgentPerformance({ page: 0, size: 200 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.creatorOptions.set(res.data.content);
          }
        },
        error: (e) => this.logger.error('MisOp', 'creators', e),
      });
  }

  isoStart(s: string): string | undefined {
    return s ? new Date(s + 'T00:00:00').toISOString() : undefined;
  }

  isoEnd(s: string): string | undefined {
    return s ? new Date(s + 'T23:59:59').toISOString() : undefined;
  }

  loadTat(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisTatReport({
        page,
        size: this.tatPageSize,
        fromDate: this.isoStart(this.tatFrom),
        toDate: this.isoEnd(this.tatTo),
        status: this.tatStatus || undefined,
        creatorId: this.tatCreatorId === '' ? undefined : this.tatCreatorId,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.tatSummary.set(res.data.summary);
            this.tatRows.set(res.data.page.content);
            this.tatTotalPages.set(res.data.page.totalPages);
            this.tatPage.set(res.data.page.currentPage);
          }
        },
        error: (err) => {
          this.loading.set(false);
          this.notify.error('TAT', err?.error?.message || 'Load failed.');
        },
      });
  }

  applyTat(): void {
    this.loadTat(0);
  }

  prevTat(): void {
    const p = this.tatPage();
    if (p > 0) {
      this.loadTat(p - 1);
    }
  }

  nextTat(): void {
    const p = this.tatPage();
    if (p < this.tatTotalPages() - 1) {
      this.loadTat(p + 1);
    }
  }

  barWidth(v: number, list: MisChannelPerformanceRow[]): string {
    const m = list.reduce((x, r) => Math.max(x, r.totalInvitesSent), 1);
    const pct = m === 0 ? 0 : (v / m) * 100;
    return `${pct}%`;
  }

  private dl(blob: Blob, n: string): void {
    const u = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }

  exportTatCsv(): void {
    this.exportingTat.set(true);
    this.adminApi
      .exportMisTatCsv({
        fromDate: this.isoStart(this.tatFrom),
        toDate: this.isoEnd(this.tatTo),
        status: this.tatStatus || undefined,
        creatorId: this.tatCreatorId === '' ? undefined : this.tatCreatorId,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exportingTat.set(false);
          this.dl(b, 'tat-report.csv');
          this.notify.success('Export', 'CSV started.');
        },
        error: () => {
          this.exportingTat.set(false);
          this.notify.error('Export', 'Failed.');
        },
      });
  }

  exportTatExcel(): void {
    this.exportingTat.set(true);
    this.adminApi
      .exportMisTatExcel({
        fromDate: this.isoStart(this.tatFrom),
        toDate: this.isoEnd(this.tatTo),
        status: this.tatStatus || undefined,
        creatorId: this.tatCreatorId === '' ? undefined : this.tatCreatorId,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exportingTat.set(false);
          this.dl(b, 'tat-report.xlsx');
          this.notify.success('Export', 'Excel started.');
        },
        error: () => {
          this.exportingTat.set(false);
          this.notify.error('Export', 'Failed.');
        },
      });
  }
}
