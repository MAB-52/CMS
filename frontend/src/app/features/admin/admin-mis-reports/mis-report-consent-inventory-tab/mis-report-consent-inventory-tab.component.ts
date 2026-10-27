import { DatePipe, DecimalPipe } from '@angular/common';
import {
  Component,
  OnDestroy,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule, UIChart } from 'primeng/chart';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Subject, takeUntil } from 'rxjs';
import {
  MisConsentInventoryBundle,
  MisConsentInventoryRow,
} from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { channelVisual } from '../../../../core/utils/channel.util';

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

const STATUS_META: Record<string, { severity: TagSeverity; icon: string }> = {
  DRAFT: { severity: 'secondary', icon: 'pi pi-pencil' },
  PENDING_APPROVAL: { severity: 'warn', icon: 'pi pi-clock' },
  APPROVED: { severity: 'success', icon: 'pi pi-check-circle' },
  REJECTED: { severity: 'danger', icon: 'pi pi-times-circle' },
  PUBLISHED: { severity: 'info', icon: 'pi pi-globe' },
  REVISION_REQUESTED: { severity: 'contrast', icon: 'pi pi-replay' },
};

const CATEGORY_META: Record<string, { icon: string; color: string }> = {
  MARKETING: { icon: 'pi pi-megaphone', color: 'var(--is-secondary)' },
  TRANSACTIONAL: { icon: 'pi pi-credit-card', color: 'var(--is-blue)' },
  SERVICE: { icon: 'pi pi-cog', color: 'var(--is-teal)' },
};

const DAY_MS = 86_400_000;

@Component({
  selector: 'app-mis-report-consent-inventory-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    ButtonModule,
    ChartModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ProgressBarModule,
    SelectModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './mis-report-consent-inventory-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', '../../shared/report-kit.css', './mis-report-consent-inventory-tab.component.css'],
})
export class MisReportConsentInventoryTabComponent implements OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify   = inject(NotificationService);
  private readonly logger   = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();
  private readonly relTime  = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly loading      = signal(false);
  readonly bundle       = signal<MisConsentInventoryBundle | null>(null);
  readonly exporting    = signal<'csv' | 'excel' | null>(null);
  readonly totalElements = signal(0);
  readonly currentPage  = signal(0);
  readonly pageSize     = signal(10);
  readonly sortBy       = signal('consentName');
  readonly sortDir      = signal<'ASC' | 'DESC'>('ASC');
  readonly skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  search         = '';
  categoryFilter = '';
  statusFilter   = '';

  readonly categories = ['MARKETING', 'TRANSACTIONAL', 'SERVICE'];
  readonly statuses   = [
    'DRAFT',
    'PENDING_APPROVAL',
    'APPROVED',
    'REJECTED',
    'PUBLISHED',
    'REVISION_REQUESTED',
  ];

  readonly categoryOptions = [
    { value: '', label: 'All categories', icon: 'pi pi-th-large', color: 'var(--is-text-2)' },
    ...this.categories.map((c) => ({ value: c, label: this.humanize(c), ...this.categoryMeta(c) })),
  ];
  readonly statusOptions = [
    { value: '', label: 'All statuses', icon: 'pi pi-th-large', severity: 'secondary' as TagSeverity },
    ...this.statuses.map((s) => ({ value: s, label: this.humanize(s), ...this.statusMeta(s) })),
  ];

  readonly donutTotal = computed(() =>
    (this.bundle()?.consentsByStatus ?? []).reduce((s, p) => s + p.count, 0),
  );

  readonly categoryMax = computed(() =>
    Math.max(1, ...(this.bundle()?.consentsByCategory ?? []).map((p) => p.count)),
  );

  /** Interact Suite chart palette (primary, secondary, then supporting utility colours). */
  readonly sliceColors = [
    '#45329E',
    '#EA6B28',
    '#20C997',
    '#0D6EFD',
    '#FFC107',
    '#D63384',
  ];

  private readonly statusChart = viewChild<UIChart>('statusChart');
  /** Index of the slice highlighted from the legend (or null). */
  readonly activeSlice = signal<number | null>(null);

  /** Chart data is recomputed only when the bundle changes (p-chart re-initialises on new data). */
  readonly statusChartData = computed(() => {
    const pts = this.bundle()?.consentsByStatus ?? [];
    return {
      labels: pts.map((p) => this.humanize(p.period)),
      datasets: [
        {
          data: pts.map((p) => p.count),
          backgroundColor: pts.map((_, i) => this.sliceColors[i % this.sliceColors.length]),
          hoverBackgroundColor: pts.map((_, i) => this.sliceColors[i % this.sliceColors.length]),
          borderColor: '#ffffff',
          borderWidth: 3,
          borderRadius: 6,
          spacing: 2,
          hoverOffset: 10,
        },
      ],
    };
  });

  readonly statusChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '66%',
    // Room for the hover offset so highlighted slices are never clipped by the canvas edge.
    layout: { padding: 14 },
    animation: { animateRotate: true, animateScale: true, duration: 900, easing: 'easeOutQuart' },
    plugins: {
      legend: { display: false },
      // Hover details are shown in the doughnut centre instead of a canvas tooltip,
      // which would otherwise sit underneath the centre label.
      tooltip: { enabled: false },
    },
    onHover: (_e: unknown, elements: { index: number }[]) => {
      this.activeSlice.set(elements.length ? elements[0].index : null);
    },
  };

  /** Legend → chart: highlight the slice (its details appear in the doughnut centre). */
  highlightSlice(index: number | null): void {
    this.activeSlice.set(index);
    const chart = this.statusChart()?.chart as
      | {
          setActiveElements(e: { datasetIndex: number; index: number }[]): void;
          update(): void;
        }
      | undefined;
    if (!chart) return;
    const active = index == null ? [] : [{ datasetIndex: 0, index }];
    chart.setActiveElements(active);
    chart.update();
  }

  /** "PENDING_APPROVAL" → "Pending approval". */
  humanize(code: string | null | undefined): string {
    if (!code) return '';
    const s = code.replace(/_/g, ' ').toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ── Data loading ─────────────────────────────────────────────────────────

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisConsentInventoryBundle({
        page,
        size:          this.pageSize(),
        category:      this.categoryFilter || undefined,
        status:        this.statusFilter   || undefined,
        search:        this.search.trim()  || undefined,
        sortBy:        this.sortBy(),
        sortDirection: this.sortDir(),
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.bundle.set(res.data);
            this.totalElements.set(res.data.page.totalElements);
            this.currentPage.set(res.data.page.currentPage);
          }
        },
        error: (e) => {
          this.loading.set(false);
          this.logger.error('MisInventory', 'load', e);
          this.notify.error('Consent inventory', e?.error?.message ?? 'Load failed.');
        },
      });
  }

  /** p-table fires this on init, on paging and on header sort — sorting stays server-side. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    if (typeof event.sortField === 'string' && event.sortField) {
      this.sortBy.set(event.sortField);
      this.sortDir.set(event.sortOrder === -1 ? 'DESC' : 'ASC');
    }
    this.load(Math.floor((event.first ?? 0) / rows));
  }

  apply(): void { this.load(0); }

  reset(): void {
    this.search = '';
    this.categoryFilter = '';
    this.statusFilter = '';
    this.apply();
  }

  activeFilterCount(): number {
    return [!!this.categoryFilter, !!this.statusFilter, !!this.search.trim()].filter(Boolean).length;
  }

  // ── Helpers ──────────────────────────────────────────────────────────────

  rows(): MisConsentInventoryRow[] {
    return this.bundle()?.page.content ?? [];
  }

  legendPct(count: number): number {
    const t = this.donutTotal();
    return t > 0 ? Math.round((count / t) * 100) : 0;
  }

  statusMeta(status: string | null | undefined): { severity: TagSeverity; icon: string } {
    return STATUS_META[status ?? ''] ?? { severity: 'secondary', icon: 'pi pi-circle' };
  }

  categoryMeta(category: string | null | undefined): { icon: string; color: string } {
    return CATEGORY_META[category ?? ''] ?? { icon: 'pi pi-tag', color: 'var(--is-primary)' };
  }

  channelVisual(channel: string): { icon: string; color: string } {
    return channelVisual(channel);
  }

  relative(value: string | null | undefined): string {
    if (!value) return '';
    const t = new Date(value).getTime();
    if (Number.isNaN(t)) return '';
    const days = Math.round((t - Date.now()) / DAY_MS);
    if (days === 0) return 'today';
    if (Math.abs(days) < 30) return this.relTime.format(days, 'day');
    if (Math.abs(days) < 365) return this.relTime.format(Math.round(days / 30), 'month');
    return this.relTime.format(Math.round(days / 365), 'year');
  }

  private dl(blob: Blob, name: string): void {
    const u = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = u;
    a.download = name;
    a.click();
    URL.revokeObjectURL(u);
  }

  exportCsv(): void {
    this.exporting.set('csv');
    this.adminApi
      .exportMisConsentInventoryCsv({
        category: this.categoryFilter || undefined,
        status:   this.statusFilter   || undefined,
        search:   this.search.trim()  || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => { this.exporting.set(null); this.dl(b, 'consent-inventory.csv');  this.notify.success('Export', 'CSV started.'); },
        error: ()  => { this.exporting.set(null); this.notify.error('Export', 'Failed.'); },
      });
  }

  exportExcel(): void {
    this.exporting.set('excel');
    this.adminApi
      .exportMisConsentInventoryExcel({
        category: this.categoryFilter || undefined,
        status:   this.statusFilter   || undefined,
        search:   this.search.trim()  || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => { this.exporting.set(null); this.dl(b, 'consent-inventory.xlsx'); this.notify.success('Export', 'Excel started.'); },
        error: ()  => { this.exporting.set(null); this.notify.error('Export', 'Failed.'); },
      });
  }
}
