import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { KnobModule } from 'primeng/knob';
import { SkeletonModule } from 'primeng/skeleton';
import { channelVisual } from '../../../../core/utils/channel.util';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { MisChannelPerformanceRow, MisChannelTemplatePerformanceRow } from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';

@Component({
  selector: 'app-mis-report-channel-deep-dive-tab',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    ButtonModule,
    SelectModule,
    TableModule,
    TagModule,
    TooltipModule,
    ProgressBarModule,
    KnobModule,
    SkeletonModule,
  ],
  templateUrl: './mis-report-channel-deep-dive-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', './mis-report-channel-deep-dive-tab.component.css'],
})
export class MisReportChannelDeepDiveTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();

  readonly channels = signal<MisChannelPerformanceRow[]>([]);
  readonly matrix = signal<MisChannelTemplatePerformanceRow[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal(false);

  /** Tracks which channel name is currently hovered — syncs card ↔ table row highlight */
  readonly hoveredChannel = signal<string | null>(null);

  channelFilter = '';

  readonly channelOptions = computed(() => {
    const labels = new Set(this.channels().map((c) => c.channel));
    this.matrix().forEach((r) => labels.add(r.channel));
    return [...labels].sort();
  });

  readonly totalInvites = computed(() =>
    this.channels().reduce((s, c) => s + c.totalInvitesSent, 0),
  );

  readonly avgSuccessRate = computed(() => {
    const rows = this.channels();
    if (!rows.length) return 0;
    return Math.round(rows.reduce((s, c) => s + c.successRatePercent, 0) / rows.length);
  });

  /** Options for the channel filter select (empty value = all channels). */
  readonly channelFilterOptions = computed(() => [
    { label: 'All channels', value: '', icon: 'pi pi-th-large', color: '#45329E' },
    ...this.channelOptions().map((ch) => ({ label: ch, value: ch, ...this.channelVisual(ch) })),
  ]);

  readonly topChannel = computed(() => {
    const rows = this.channels();
    if (!rows.length) return '—';
    return [...rows].sort((a, b) => b.successRatePercent - a.successRatePercent)[0].channel;
  });

  ngOnInit(): void {
    this.reload();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reload(): void {
    this.loading.set(true);
    forkJoin({
      base: this.adminApi.getMisChannelPerformance(),
      deep: this.adminApi.getMisChannelTemplatePerformance(this.channelFilter || undefined),
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ({ base, deep }) => {
          this.loading.set(false);
          if (base.success && base.data) this.channels.set(base.data);
          if (deep.success && deep.data) this.matrix.set(deep.data);
        },
        error: (e) => {
          this.loading.set(false);
          this.logger.error('MisChannelDeep', 'load', e);
          this.notify.error('Channel deep-dive', e?.error?.message ?? 'Load failed.');
        },
      });
  }

  applyFilter(): void {
    this.reload();
  }

  // ── Heat helpers ────────────────────────────────────────────────────────────

  // Interact Suite status scale: --is-red (#DC3545) → --is-green (#198754).
  heatBg(rate: number): string {
    const [r, g, b] = this.heatRgb(rate);
    return `rgba(${r},${g},${b},0.12)`;
  }

  heatColor(rate: number): string {
    const [r, g, b] = this.heatRgb(rate);
    return `rgb(${r},${g},${b})`;
  }


  private heatRgb(rate: number): [number, number, number] {
    const t = Math.max(0, Math.min(100, rate)) / 100;
    return [
      Math.round(220 + (25 - 220) * t),
      Math.round(53 + (135 - 53) * t),
      Math.round(69 + (84 - 69) * t),
    ];
  }

  rateLabel(rate: number): string {
    if (rate >= 75) return 'High';
    if (rate >= 40) return 'Medium';
    return 'Low';
  }


  // ── Channel visuals (delivery channels + capture sources) ───────────────────

  channelVisual(channel: string): { icon: string; color: string } {
    return channelVisual(channel);
  }

  rateSeverity(rate: number): 'success' | 'warn' | 'danger' {
    if (rate >= 75) return 'success';
    if (rate >= 40) return 'warn';
    return 'danger';
  }

  rateIcon(rate: number): string {
    if (rate >= 75) return 'pi pi-arrow-up-right';
    if (rate >= 40) return 'pi pi-minus';
    return 'pi pi-arrow-down-right';
  }

  invitePct(v: number): number {
    const m = this.channels().reduce((x, r) => Math.max(x, r.totalInvitesSent), 0);
    return m === 0 ? 0 : Math.round((v / m) * 100);
  }

  onChannelFilterChange(value: string | null): void {
    this.channelFilter = value ?? '';
    this.reload();
  }

  // ── Export helpers ──────────────────────────────────────────────────────────

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
      .exportMisChannelTemplatePerformanceCsv(this.channelFilter || undefined)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.dl(b, 'channel-template-performance.csv');
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
      .exportMisChannelTemplatePerformanceExcel(this.channelFilter || undefined)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(false);
          this.dl(b, 'channel-template-performance.xlsx');
          this.notify.success('Export', 'Excel started.');
        },
        error: () => {
          this.exporting.set(false);
          this.notify.error('Export', 'Failed.');
        },
      });
  }
}