import { DatePipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, takeUntil } from 'rxjs';
import {
  MisConsentInventoryBundle,
  MisConsentInventoryRow,
} from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

// chart.js types — imported only for typing; the actual lib is loaded dynamically.
// Run: npm install chart.js   (if not already in package.json)
import type {
  Chart as ChartType,
  ChartEvent,
  ActiveElement,
} from 'chart.js';

@Component({
  selector: 'app-mis-report-consent-inventory-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    TitleCasePipe,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './mis-report-consent-inventory-tab.component.html',
  styleUrl: './mis-report-consent-inventory-tab.component.scss',
})
export class MisReportConsentInventoryTabComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  private readonly adminApi = inject(AdminService);
  private readonly notify   = inject(NotificationService);
  private readonly logger   = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();

  readonly loading      = signal(false);
  readonly bundle       = signal<MisConsentInventoryBundle | null>(null);
  readonly exporting    = signal(false);
  readonly totalPages   = signal(0);
  readonly currentPage  = signal(0);
  readonly pageSize     = 10;
  readonly sortBy       = signal('consentName');
  readonly sortDir      = signal<'ASC' | 'DESC'>('ASC');

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

  // ── Pie tooltip (driven by signals so Angular CD handles it) ──────────────
  readonly tooltipVisible = signal(false);
  readonly tooltipLabel   = signal('');
  readonly tooltipCount   = signal(0);
  readonly tooltipPct     = signal(0);
  readonly tooltipX       = signal(0);
  readonly tooltipY       = signal(0);

  readonly donutTotal = computed(() =>
    (this.bundle()?.consentsByStatus ?? []).reduce((s, p) => s + p.count, 0),
  );

  readonly categoryMax = computed(() =>
    Math.max(1, ...(this.bundle()?.consentsByCategory ?? []).map((p) => p.count)),
  );

  readonly sliceColors = [
    '#185FA5',
    '#22c55e',
    '#f59e0b',
    '#ef4444',
    '#8b5cf6',
    '#94a3b8',
  ];

  // Typed via the import-type above; assigned after dynamic import resolves.
  private pieChart: ChartType<'doughnut'> | null = null;

  ngOnInit(): void {
    this.load(0);
  }

  ngAfterViewInit(): void { /* chart built after data arrives */ }

  ngOnDestroy(): void {
    this.pieChart?.destroy();
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Dynamically imports chart.js (avoids SSR/type-declaration issues),
   * then builds a two-dataset doughnut for the pseudo-3-D effect.
   */
  async initPieChart(): Promise<void> {
    const canvas = document.getElementById('statusPieCanvas') as HTMLCanvasElement | null;
    if (!canvas) return;

    // Dynamic import — chart.js must be in package.json
    const {
      Chart,
      ArcElement,
      DoughnutController,
      Tooltip,
      Legend,
    } = await import('chart.js');

    Chart.register(ArcElement, DoughnutController, Tooltip, Legend);

    this.pieChart?.destroy();

    const pts   = this.bundle()?.consentsByStatus ?? [];
    const total = this.donutTotal();

    this.pieChart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: pts.map((p) => p.period),
        datasets: [
          {
            // Main slices
            data:            pts.map((p) => p.count),
            backgroundColor: this.sliceColors,
            borderColor:     '#ffffff',
            borderWidth:     3,
            hoverOffset:     14,
            hoverBorderWidth: 0,
          },
          {
            // Shadow ring — gives the pseudo-3-D depth
            data:            pts.map((p) => p.count),
            backgroundColor: this.sliceColors.map((c) => c + '44'),
            borderColor:     'transparent',
            borderWidth:     0,
            hoverOffset:     0,
            weight:          0.18,
          },
        ],
      },
      options: {
        cutout:    '58%',
        responsive: false,
        animation: { animateRotate: true, duration: 800, easing: 'easeOutQuart' },
        plugins: {
          legend:  { display: false },
          tooltip: { enabled: false },
        },
        onHover: (event: ChartEvent, elements: ActiveElement[]) => {
          canvas.style.cursor = elements.length ? 'pointer' : 'default';

          const main = elements.find((e: ActiveElement) => e.datasetIndex === 0);
          if (main) {
            const idx = main.index;
            const p   = pts[idx];
            const pct = total > 0 ? Math.round((p.count / total) * 100) : 0;
            const native = event.native as MouseEvent;
            this.tooltipLabel.set(p.period);
            this.tooltipCount.set(p.count);
            this.tooltipPct.set(pct);
            this.tooltipX.set(native.clientX + 14);
            this.tooltipY.set(native.clientY - 10);
            this.tooltipVisible.set(true);
          } else {
            this.tooltipVisible.set(false);
          }
        },
      },
    });

    canvas.addEventListener('mouseleave', () => this.tooltipVisible.set(false));
  }

  // ── Sorting ──────────────────────────────────────────────────────────────

  setSort(col: string): void {
    if (this.sortBy() === col) {
      this.sortDir.set(this.sortDir() === 'ASC' ? 'DESC' : 'ASC');
    } else {
      this.sortBy.set(col);
      this.sortDir.set('ASC');
    }
    this.load(0);
  }

  sortIcon(col: string): string {
    if (this.sortBy() !== col) return 'unfold_more';
    return this.sortDir() === 'ASC' ? 'arrow_upward' : 'arrow_downward';
  }

  // ── Data loading ─────────────────────────────────────────────────────────

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisConsentInventoryBundle({
        page,
        size:          this.pageSize,
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
            this.totalPages.set(res.data.page.totalPages);
            this.currentPage.set(res.data.page.currentPage);
            // Wait one tick for Angular to render the canvas, then init chart
            setTimeout(() => this.initPieChart(), 0);
          }
        },
        error: (e) => {
          this.loading.set(false);
          this.logger.error('MisInventory', 'load', e);
          this.notify.error('Consent inventory', e?.error?.message ?? 'Load failed.');
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

  // ── Helpers ──────────────────────────────────────────────────────────────

  rows(): MisConsentInventoryRow[] {
    return this.bundle()?.page.content ?? [];
  }

  legendPct(count: number): number {
    const t = this.donutTotal();
    return t > 0 ? Math.round((count / t) * 100) : 0;
  }

  /** Returns a human-readable label from a SCREAMING_SNAKE_CASE status string. */
  formatStatus(status: string): string {
    return status
      .toLowerCase()
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());
  }

  badgeClass(status: string): string {
    switch (status) {
      case 'PUBLISHED':
      case 'APPROVED':
        return 'badge badge--ok';
      case 'PENDING_APPROVAL':
      case 'REVISION_REQUESTED':
        return 'badge badge--warn';
      case 'REJECTED':
        return 'badge badge--bad';
      default:
        return 'badge badge--default';
    }
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
    this.exporting.set(true);
    this.adminApi
      .exportMisConsentInventoryCsv({
        category: this.categoryFilter || undefined,
        status:   this.statusFilter   || undefined,
        search:   this.search.trim()  || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => { this.exporting.set(false); this.dl(b, 'consent-inventory.csv');  this.notify.success('Export', 'CSV started.'); },
        error: ()  => { this.exporting.set(false); this.notify.error('Export', 'Failed.'); },
      });
  }

  exportExcel(): void {
    this.exporting.set(true);
    this.adminApi
      .exportMisConsentInventoryExcel({
        category: this.categoryFilter || undefined,
        status:   this.statusFilter   || undefined,
        search:   this.search.trim()  || undefined,
      })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => { this.exporting.set(false); this.dl(b, 'consent-inventory.xlsx'); this.notify.success('Export', 'Excel started.'); },
        error: ()  => { this.exporting.set(false); this.notify.error('Export', 'Failed.'); },
      });
  }
}
