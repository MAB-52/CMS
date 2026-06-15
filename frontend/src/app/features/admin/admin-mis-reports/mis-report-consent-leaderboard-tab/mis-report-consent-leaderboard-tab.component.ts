import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, takeUntil } from 'rxjs';
import { MisConsentLeaderboardRow } from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-mis-report-consent-leaderboard-tab',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './mis-report-consent-leaderboard-tab.component.html',
  styleUrl: './mis-report-consent-leaderboard-tab.component.scss',
})
export class MisReportConsentLeaderboardTabComponent implements OnInit, OnDestroy {
  private readonly adminApi  = inject(AdminService);
  private readonly notify    = inject(NotificationService);
  private readonly logger    = inject(LoggerService);
  private readonly destroy$  = new Subject<void>();

  readonly rows         = signal<MisConsentLeaderboardRow[]>([]);
  readonly loading      = signal(false);
  readonly exporting    = signal(false);
  readonly totalPages   = signal(0);
  readonly currentPage  = signal(0);

  readonly pageSize = 10;

  /** Drives skeleton rows — array length = pageSize, values irrelevant */
  readonly skRows = Array(this.pageSize).fill(0);

  sortKey: 'REACH' | 'ACCEPTANCE' | 'REENGAGEMENT' = 'REACH';
  expandedId: number | null = null;

  // ── Lifecycle ─────────────────────────────────────────────────────────────────
  ngOnInit(): void { this.load(0); }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data ──────────────────────────────────────────────────────────────────────
  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisConsentPerformanceLeaderboard({ page, size: this.pageSize, sort: this.sortKey })
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
        error: (e) => {
          this.loading.set(false);
          this.logger.error('MisLeaderboard', 'load', e);
          this.notify.error('Leaderboard', e?.error?.message ?? 'Load failed.');
        },
      });
  }

  applySort(): void { this.load(0); }

  prev(): void {
    const p = this.currentPage();
    if (p > 0) this.load(p - 1);
  }

  next(): void {
    const p = this.currentPage();
    if (p < this.totalPages() - 1) this.load(p + 1);
  }

  // ── Row helpers ───────────────────────────────────────────────────────────────
  toggle(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  medal(rankIndex: number): string {
    if (this.currentPage() !== 0) return '';
    return ['🥇', '🥈', '🥉'][rankIndex] ?? '';
  }

  sparkWidth(pct: number): string {
    return `${Math.max(4, Math.min(100, pct ?? 0))}%`;
  }

  // ── Exports ───────────────────────────────────────────────────────────────────
  private dl(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const a   = Object.assign(document.createElement('a'), { href: url, download: filename });
    a.click();
    URL.revokeObjectURL(url);
  }

  exportCsv(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisConsentPerformanceLeaderboardCsv(this.sortKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.dl(b, 'consent-performance-leaderboard.csv');
          this.notify.success('Export', 'CSV download started.');
        },
        error: () => {
          this.exporting.set(false);
          this.notify.error('Export', 'CSV export failed.');
        },
      });
  }

  exportExcel(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisConsentPerformanceLeaderboardExcel(this.sortKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.dl(b, 'consent-performance-leaderboard.xlsx');
          this.notify.success('Export', 'Excel download started.');
        },
        error: () => {
          this.exporting.set(false);
          this.notify.error('Export', 'Excel export failed.');
        },
      });
  }
}
