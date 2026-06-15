import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './mis-report-channel-deep-dive-tab.component.html',
  styleUrl: './mis-report-channel-deep-dive-tab.component.scss',
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

  heatBg(rate: number): string {
    const t = Math.max(0, Math.min(100, rate)) / 100;
    const r = Math.round(239 + (34 - 239) * t);
    const g = Math.round(68 + (197 - 68) * t);
    const b = Math.round(68 + (94 - 68) * t);
    return `rgba(${r},${g},${b},0.14)`;
  }

  heatColor(rate: number): string {
    const t = Math.max(0, Math.min(100, rate)) / 100;
    const r = Math.round(185 + (21 - 185) * t);
    const g = Math.round(28 + (163 - 28) * t);
    const b = Math.round(28 + (74 - 28) * t);
    return `rgb(${r},${g},${b})`;
  }

  heatGradient(rate: number): string {
    const color = this.heatColor(rate);
    return `linear-gradient(90deg, ${color}cc, ${color})`;
  }

  rateLabel(rate: number): string {
    if (rate >= 75) return 'High';
    if (rate >= 40) return 'Medium';
    return 'Low';
  }

  barWidth(v: number, list: MisChannelPerformanceRow[]): string {
    const m = list.reduce((x, r) => Math.max(x, r.totalInvitesSent), 1);
    return `${m === 0 ? 0 : (v / m) * 100}%`;
  }

  // ── Channel icon mapping ────────────────────────────────────────────────────

  channelIcon(channel: string): string {
    const ch = (channel ?? '').toLowerCase();
    if (ch.includes('email'))     return 'email';
    if (ch.includes('sms'))       return 'sms';
    if (ch.includes('whatsapp'))  return 'chat';
    if (ch.includes('push'))      return 'notifications';
    return 'send';
  }

  channelBadgeClass(channel: string): string {
    const ch = (channel ?? '').toLowerCase();
    if (ch.includes('email'))    return 'channel-badge channel-badge--email';
    if (ch.includes('sms'))      return 'channel-badge channel-badge--sms';
    if (ch.includes('whatsapp')) return 'channel-badge channel-badge--whatsapp';
    if (ch.includes('push'))     return 'channel-badge channel-badge--push';
    return 'channel-badge channel-badge--default';
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