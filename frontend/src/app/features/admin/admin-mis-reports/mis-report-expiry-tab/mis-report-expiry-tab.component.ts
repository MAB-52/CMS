import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnDestroy, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Subject, takeUntil } from 'rxjs';
import {
  CustomerConsentRecordStatus,
  MisExpiryReportRow,
  customerConsentRecordStatusLabel,
} from '../../../../core/models/admin.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { blobErrorMessage, saveBlob } from '../../../../core/utils/download.util';
import { NotificationService } from '../../../../core/services/notification.service';

type ExpiryMode = 'EXPIRING' | 'EXPIRED';
type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

const STATUS_META: Record<CustomerConsentRecordStatus, { severity: TagSeverity; icon: string }> = {
  ACCEPTED: { severity: 'success', icon: 'pi pi-check-circle' },
  PENDING: { severity: 'info', icon: 'pi pi-clock' },
  REJECTED: { severity: 'danger', icon: 'pi pi-times-circle' },
  WITHDRAWN: { severity: 'secondary', icon: 'pi pi-undo' },
  EXPIRING_SOON: { severity: 'warn', icon: 'pi pi-hourglass' },
  EXPIRED: { severity: 'contrast', icon: 'pi pi-ban' },
};

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];
const DAY_MS = 86_400_000;

@Component({
  selector: 'app-mis-report-expiry-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    ProgressBarModule,
    SelectButtonModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './mis-report-expiry-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', '../../shared/report-kit.css', './mis-report-expiry-tab.component.css'],
})
export class MisReportExpiryTabComponent implements OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly modeOptions = [
    { value: 'EXPIRING', label: 'Expiring soon', icon: 'pi pi-hourglass' },
    { value: 'EXPIRED', label: 'Expired', icon: 'pi pi-ban' },
  ];
  readonly windowOptions = [30, 60, 90].map((d) => ({ value: d, label: `${d} days` }));

  mode: ExpiryMode = 'EXPIRING';
  withinDays = 30;
  readonly rows = signal<MisExpiryReportRow[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal<'csv' | 'excel' | null>(null);
  readonly totalElements = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = signal(10);
  readonly skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisExpiryReport({ type: this.mode, withinDays: this.withinDays, page, size: this.pageSize() })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.rows.set(res.data.content.map((r) => ({ ...r, rowKey: `${r.customerId}:${r.consentDbId ?? ''}` })));
            this.totalElements.set(res.data.totalElements);
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

  /** p-table fires this on init and on every paginator change. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    this.load(Math.floor((event.first ?? 0) / rows));
  }

  apply(): void { this.load(0); }

  /** p-selectButton emits null when the active option is clicked again — keep a selection. */
  setMode(value: ExpiryMode | null): void {
    if (!value || value === this.mode) return;
    this.mode = value;
    this.apply();
  }

  setWindow(value: number | null): void {
    if (!value || value === this.withinDays) return;
    this.withinDays = value;
    this.apply();
  }

  // ── Presentation helpers ────────────────────────────────────────────────

  label(s: string | null | undefined): string {
    return customerConsentRecordStatusLabel(s);
  }

  statusMeta(status: string | null | undefined): { severity: TagSeverity; icon: string } {
    return STATUS_META[status as CustomerConsentRecordStatus] ?? { severity: 'secondary', icon: 'pi pi-circle' };
  }

  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }

  avatarColor(seed: string): string {
    let h = 0;
    for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) | 0;
    return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
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

  /** Urgency tone for the days-until-expiry countdown. */
  urgency(days: number | null | undefined): 'expired' | 'critical' | 'soon' | 'ok' {
    if (days == null) return 'ok';
    if (days < 0) return 'expired';
    if (days <= 7) return 'critical';
    if (days <= 30) return 'soon';
    return 'ok';
  }

  /** Share of the selected window still remaining (drives the countdown bar). */
  remainingPct(days: number | null | undefined): number {
    if (days == null || days < 0) return 0;
    return Math.min(100, Math.round((days / this.withinDays) * 100));
  }

  absDays(days: number | null | undefined): number {
    return Math.abs(days ?? 0);
  }

  daysLabel(days: number | null | undefined): string {
    if (days == null) return '—';
    const n = Math.abs(days);
    if (days === 0) return 'Expires today';
    return days < 0 ? `Expired ${n} day${n === 1 ? '' : 's'} ago` : `${n} day${n === 1 ? '' : 's'} left`;
  }

  // ── Export ──────────────────────────────────────────────────────────────

  private dl(blob: Blob, base: string, ext: string): void {
    saveBlob(blob, base, ext);
  }

  exportCsv(): void {
    this.exporting.set('csv');
    this.adminApi
      .exportMisExpiryCsv(this.mode, this.withinDays)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(null);
          this.dl(b, 'expiry-report', 'csv');
          this.notify.success('Export', `CSV with ${this.totalElements()} consent(s) downloaded.`);
        },
        error: async (err) => {
          this.exporting.set(null);
          this.notify.error('Export', await blobErrorMessage(err, 'Export failed.'));
        },
      });
  }

  exportExcel(): void {
    this.exporting.set('excel');
    this.adminApi
      .exportMisExpiryExcel(this.mode, this.withinDays)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(null);
          this.dl(b, 'expiry-report', 'xlsx');
          this.notify.success('Export', `Excel with ${this.totalElements()} consent(s) downloaded.`);
        },
        error: async (err) => {
          this.exporting.set(null);
          this.notify.error('Export', await blobErrorMessage(err, 'Export failed.'));
        },
      });
  }
}
