import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
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
import { channelVisual } from '../../../../core/utils/channel.util';

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

const WORKFLOW_META: Record<MisConsentWorkflowStatus, { label: string; severity: TagSeverity; icon: string }> = {
  DRAFT: { label: 'Draft', severity: 'secondary', icon: 'pi pi-pencil' },
  PENDING_APPROVAL: { label: 'Pending approval', severity: 'warn', icon: 'pi pi-clock' },
  APPROVED: { label: 'Approved', severity: 'success', icon: 'pi pi-check-circle' },
  REJECTED: { label: 'Rejected', severity: 'danger', icon: 'pi pi-times-circle' },
  PUBLISHED: { label: 'Published', severity: 'info', icon: 'pi pi-globe' },
  REVISION_REQUESTED: { label: 'Revision requested', severity: 'contrast', icon: 'pi pi-replay' },
};

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];

/** TAT bands (hours) used to colour turnaround chips. */
const TAT_FAST_H = 24;
const TAT_SLOW_H = 72;

@Component({
  selector: 'app-mis-report-operational-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    DatePickerModule,
    ProgressBarModule,
    SelectModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './mis-report-operational-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', '../../shared/report-kit.css', './mis-report-operational-tab.component.css'],
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
  readonly tatTotal = signal(0);
  readonly tatPage = signal(0);
  readonly tatPageSize = signal(10);
  readonly loading = signal(false);
  readonly channelsLoading = signal(true);
  readonly agentsLoading = signal(true);
  readonly exportingTat = signal<'csv' | 'excel' | null>(null);
  readonly skeletonRows = Array.from({ length: 5 }, (_, i) => i);

  tatStatus: MisConsentWorkflowStatus | '' = '';
  tatCreatorId: number | '' = '';
  tatFrom: Date | null = null;
  tatTo: Date | null = null;
  readonly creatorOptions = signal<MisAgentPerformanceRow[]>([]);

  readonly statusOptions = [
    { value: '', label: 'All statuses', icon: 'pi pi-th-large', severity: 'secondary' as TagSeverity },
    ...Object.entries(WORKFLOW_META).map(([value, m]) => ({ value, ...m })),
  ];
  readonly creatorSelectOptions = computed(() => [
    { value: '', label: 'All creators' },
    ...this.creatorOptions().map((m) => ({ value: m.userId, label: m.fullName })),
  ]);

  // ── Channel roll-ups ────────────────────────────────────────────────────
  readonly totalInvites = computed(() => this.channels().reduce((s, c) => s + c.totalInvitesSent, 0));
  readonly totalAccepted = computed(() => this.channels().reduce((s, c) => s + c.acceptedCount, 0));
  readonly overallSuccess = computed(() => {
    const t = this.totalInvites();
    return t ? (this.totalAccepted() / t) * 100 : 0;
  });
  readonly activeChannels = computed(() => this.channels().filter((c) => c.totalInvitesSent > 0).length);
  readonly maxInvites = computed(() => this.channels().reduce((m, c) => Math.max(m, c.totalInvitesSent), 0));

  ngOnInit(): void {
    this.reloadChannels();
    this.reloadAgents();
    this.reloadCreators();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  reloadChannels(): void {
    this.channelsLoading.set(true);
    this.adminApi
      .getMisChannelPerformance()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.channelsLoading.set(false);
          if (res.success && res.data) {
            this.channels.set(res.data);
          }
        },
        error: (e) => {
          this.channelsLoading.set(false);
          this.logger.error('MisOp', 'channels', e);
        },
      });
  }

  reloadAgents(): void {
    this.agentsLoading.set(true);
    this.adminApi
      .getMisAgentPerformance({ page: 0, size: 50 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.agentsLoading.set(false);
          if (res.success && res.data) {
            this.agents.set(res.data.content);
          }
        },
        error: (e) => {
          this.agentsLoading.set(false);
          this.logger.error('MisOp', 'agents', e);
        },
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

  private tatParams() {
    const start = this.tatFrom ? new Date(this.tatFrom) : null;
    start?.setHours(0, 0, 0, 0);
    const end = this.tatTo ? new Date(this.tatTo) : null;
    end?.setHours(23, 59, 59, 999);
    return {
      fromDate: start?.toISOString(),
      toDate: end?.toISOString(),
      status: this.tatStatus || undefined,
      creatorId: this.tatCreatorId === '' ? undefined : this.tatCreatorId,
    };
  }

  tatFilterCount(): number {
    return [!!this.tatFrom, !!this.tatTo, !!this.tatStatus, this.tatCreatorId !== ''].filter(Boolean).length;
  }

  loadTat(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisTatReport({ page, size: this.tatPageSize(), ...this.tatParams() })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.tatSummary.set(res.data.summary);
            this.tatRows.set(res.data.page.content);
            this.tatTotal.set(res.data.page.totalElements);
            this.tatPage.set(res.data.page.currentPage);
          }
        },
        error: (err) => {
          this.loading.set(false);
          this.notify.error('TAT', err?.error?.message || 'Load failed.');
        },
      });
  }

  /** p-table fires this on init and on every paginator change. */
  onTatLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.tatPageSize();
    this.tatPageSize.set(rows);
    this.loadTat(Math.floor((event.first ?? 0) / rows));
  }

  applyTat(): void {
    this.loadTat(0);
  }

  resetTat(): void {
    this.tatStatus = '';
    this.tatCreatorId = '';
    this.tatFrom = null;
    this.tatTo = null;
    this.applyTat();
  }

  // ── Presentation helpers ────────────────────────────────────────────────

  channelVisual(channel: string): { icon: string; color: string } {
    return channelVisual(channel);
  }

  volumePct(v: number): number {
    const m = this.maxInvites();
    return m ? (v / m) * 100 : 0;
  }

  /** Good-is-high colour for success / SLA percentages. */
  rateColor(pct: number | null | undefined): string {
    const p = pct ?? 0;
    if (p >= 75) return 'var(--is-success)';
    if (p >= 40) return 'var(--is-warning)';
    return 'var(--is-danger)';
  }

  /** Good-is-low colour for drop-off percentages. */
  dropColor(pct: number | null | undefined): string {
    const p = pct ?? 0;
    if (p <= 25) return 'var(--is-success)';
    if (p <= 60) return 'var(--is-warning)';
    return 'var(--is-danger)';
  }

  workflow(status: string | null | undefined): { label: string; severity: TagSeverity; icon: string } {
    return (
      WORKFLOW_META[status as MisConsentWorkflowStatus] ?? {
        label: status ?? '—',
        severity: 'secondary',
        icon: 'pi pi-circle',
      }
    );
  }

  tatTone(hours: number | null | undefined): 'fast' | 'mid' | 'slow' | 'none' {
    if (hours == null) return 'none';
    if (hours <= TAT_FAST_H) return 'fast';
    if (hours <= TAT_SLOW_H) return 'mid';
    return 'slow';
  }

  tatHint(hours: number | null | undefined): string {
    const t = this.tatTone(hours);
    if (t === 'none') return 'Not reviewed yet — no turnaround time';
    if (t === 'fast') return `Reviewed within ${TAT_FAST_H}h`;
    if (t === 'mid') return `Reviewed within ${TAT_SLOW_H}h`;
    return `Took longer than ${TAT_SLOW_H}h`;
  }

  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }

  avatarColor(seed: string | null | undefined): string {
    let h = 0;
    for (const ch of seed ?? '') h = (h * 31 + ch.charCodeAt(0)) | 0;
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
  }

  // ── Export ──────────────────────────────────────────────────────────────

  private dl(blob: Blob, n: string): void {
    const u = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = u;
    a.download = n;
    a.click();
    URL.revokeObjectURL(u);
  }

  exportTatCsv(): void {
    this.exportingTat.set('csv');
    this.adminApi
      .exportMisTatCsv(this.tatParams())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exportingTat.set(null);
          this.dl(b, 'tat-report.csv');
          this.notify.success('Export', 'CSV started.');
        },
        error: () => {
          this.exportingTat.set(null);
          this.notify.error('Export', 'Failed.');
        },
      });
  }

  exportTatExcel(): void {
    this.exportingTat.set('excel');
    this.adminApi
      .exportMisTatExcel(this.tatParams())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exportingTat.set(null);
          this.dl(b, 'tat-report.xlsx');
          this.notify.success('Export', 'Excel started.');
        },
        error: () => {
          this.exportingTat.set(null);
          this.notify.error('Export', 'Failed.');
        },
      });
  }
}
