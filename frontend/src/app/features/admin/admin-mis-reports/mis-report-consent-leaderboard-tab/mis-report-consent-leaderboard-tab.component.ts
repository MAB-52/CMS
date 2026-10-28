import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Subject, takeUntil } from 'rxjs';
import { MisConsentLeaderboardRow } from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { blobErrorMessage, saveBlob } from '../../../../core/utils/download.util';
import { channelVisual } from '../../../../core/utils/channel.util';

type SortKey = 'REACH' | 'ACCEPTANCE' | 'REENGAGEMENT';

interface SortOption {
  value: SortKey;
  label: string;
  icon: string;
  hint: string;
}

const SORT_OPTIONS: SortOption[] = [
  { value: 'REACH', label: 'Reach', icon: 'pi pi-users', hint: 'Ranked by distinct customers invited' },
  { value: 'ACCEPTANCE', label: 'Acceptance', icon: 'pi pi-check-circle', hint: 'Ranked by share of invites accepted; templates with fewer than 5 invites rank last' },
  { value: 'REENGAGEMENT', label: 'Re-engagement', icon: 'pi pi-replay', hint: 'Ranked by share of customers re-engaged' },
];

/** Gold / silver / bronze for the top three overall ranks. */
const MEDALS = [
  { label: 'Gold', color: '#F5A400' },
  { label: 'Silver', color: '#8A97AB' },
  { label: 'Bronze', color: '#C46A2B' },
];

@Component({
  selector: 'app-mis-report-consent-leaderboard-tab',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    ButtonModule,
    ProgressBarModule,
    SelectButtonModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './mis-report-consent-leaderboard-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', '../../shared/report-kit.css', './mis-report-consent-leaderboard-tab.component.css'],
})
export class MisReportConsentLeaderboardTabComponent implements OnDestroy {
  private readonly adminApi  = inject(AdminService);
  private readonly notify    = inject(NotificationService);
  private readonly logger    = inject(LoggerService);
  private readonly destroy$  = new Subject<void>();

  readonly rows          = signal<MisConsentLeaderboardRow[]>([]);
  readonly loading       = signal(false);
  readonly exporting     = signal<'csv' | 'excel' | null>(null);
  readonly totalElements = signal(0);
  readonly currentPage   = signal(0);
  readonly pageSize      = signal(10);
  readonly sortKey       = signal<SortKey>('REACH');
  readonly skeletonRows  = Array.from({ length: 6 }, (_, i) => i);

  readonly sortOptions = SORT_OPTIONS;
  readonly sortHint = computed(() => SORT_OPTIONS.find((o) => o.value === this.sortKey())?.hint ?? '');

  /** Podium only makes sense on the first page, where ranks 1–3 live. */
  readonly podium = computed(() => (this.currentPage() === 0 ? this.rows().slice(0, 3) : []));

  expandedRows: Record<number, boolean> = {};

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data ──────────────────────────────────────────────────────────────────────
  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisConsentPerformanceLeaderboard({ page, size: this.pageSize(), sort: this.sortKey() })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.rows.set(res.data.content);
            this.totalElements.set(res.data.totalElements);
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

  /** p-table fires this on init and on every paginator change. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    this.load(Math.floor((event.first ?? 0) / rows));
  }

  /** p-selectButton emits null when the active option is clicked again — keep a selection. */
  setSort(value: SortKey | null): void {
    if (!value || value === this.sortKey()) return;
    this.sortKey.set(value);
    this.expandedRows = {};
    this.load(0);
  }

  // ── Row helpers ───────────────────────────────────────────────────────────────
  rank(rowIndex: number): number {
    // p-table's rowIndex is absolute in lazy mode (includes the page offset).
    return rowIndex + 1;
  }

  medal(rank: number): { label: string; color: string } | null {
    return MEDALS[rank - 1] ?? null;
  }

  /** Value that drives the current ranking, for the podium cards. */
  metric(r: MisConsentLeaderboardRow): { value: number; unit: string; label: string } {
    switch (this.sortKey()) {
      case 'ACCEPTANCE':
        return { value: r.acceptanceRatePercent, unit: '%', label: 'acceptance' };
      case 'REENGAGEMENT':
        return { value: r.reEngagementRatePercent, unit: '%', label: 're-engagement' };
      default:
        return { value: this.reach(r), unit: '', label: 'customers reached' };
    }
  }

  /** Good-is-high colour for rate percentages. */
  reach(r: MisConsentLeaderboardRow): number {
    return r.distinctCustomersReached ?? r.totalRecipientsInvited;
  }

  repeatInvites(r: MisConsentLeaderboardRow): number {
    return Math.max(0, (r.totalRecipientsInvited ?? 0) - this.reach(r));
  }

  rateColor(pct: number | null | undefined): string {
    const p = pct ?? 0;
    if (p >= 60) return 'var(--is-success)';
    if (p >= 25) return 'var(--is-warning)';
    return 'var(--is-danger)';
  }

  channelVisual(channel: string): { icon: string; color: string } {
    return channelVisual(channel);
  }

  // ── Exports ───────────────────────────────────────────────────────────────────
  private dl(blob: Blob, base: string, ext: string): void {
    saveBlob(blob, base, ext);
  }

  exportCsv(): void {
    this.exporting.set('csv');
    this.adminApi
      .exportMisConsentPerformanceLeaderboardCsv(this.sortKey())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(null);
          this.dl(b, 'consent-performance-leaderboard', 'csv');
          this.notify.success('Export', 'CSV downloaded.');
        },
        error: async (err) => {
          this.exporting.set(null);
          this.notify.error('Export', await blobErrorMessage(err, 'CSV export failed.'));
        },
      });
  }

  exportExcel(): void {
    this.exporting.set('excel');
    this.adminApi
      .exportMisConsentPerformanceLeaderboardExcel(this.sortKey())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(null);
          this.dl(b, 'consent-performance-leaderboard', 'xlsx');
          this.notify.success('Export', 'Excel downloaded.');
        },
        error: async (err) => {
          this.exporting.set(null);
          this.notify.error('Export', await blobErrorMessage(err, 'Excel export failed.'));
        },
      });
  }
}
