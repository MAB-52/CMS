import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
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
import { AuditLogEntry } from '../../../../core/models/audit.model';
import { AdminService } from '../../../../core/services/admin.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { blobErrorMessage, saveBlob } from '../../../../core/utils/download.util';
import { auditActionMeta } from '../../../../core/utils/audit-action.util';
import { NotificationService } from '../../../../core/services/notification.service';

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast';

interface EntityMeta {
  label: string;
  icon: string;
  /** Design-system token used as the entity's accent colour. */
  color: string;
}

const ENTITY_META: Record<string, EntityMeta> = {
  CONSENT: { label: 'Consent', icon: 'pi pi-file-check', color: 'var(--is-primary)' },
  CONSENT_RULE: { label: 'Broadcast rule', icon: 'pi pi-sitemap', color: 'var(--is-secondary)' },
  USER: { label: 'User', icon: 'pi pi-users', color: 'var(--is-blue)' },
  SYSTEM: { label: 'System', icon: 'pi pi-cog', color: 'var(--is-text-2)' },
};

const FALLBACK_ENTITY: EntityMeta = { label: '', icon: 'pi pi-box', color: 'var(--is-text-2)' };

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];
const DAY_MS = 86_400_000;

@Component({
  selector: 'app-mis-report-audit-tab',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    DatePickerModule,
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
  templateUrl: './mis-report-audit-tab.component.html',
  styleUrls: ['../mis-tab-shared.css', './mis-report-audit-tab.component.css'],
})
export class MisReportAuditTabComponent implements OnInit, OnDestroy {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly destroy$ = new Subject<void>();
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly rows = signal<AuditLogEntry[]>([]);
  readonly actionOptions = signal<{ value: string; label: string }[]>([]);
  readonly loading = signal(false);
  readonly exporting = signal<'csv' | 'excel' | null>(null);
  readonly totalElements = signal(0);
  readonly currentPage = signal(0);
  readonly pageSize = signal(15);
  readonly skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  readonly entityOptions = [
    { value: '', label: 'All entities', icon: 'pi pi-th-large', color: 'var(--is-text-2)' },
    ...Object.entries(ENTITY_META).map(([value, m]) => ({ value, ...m })),
  ];

  entityType = '';
  action = '';
  from: Date | null = null;
  to: Date | null = null;
  performedBy = '';

  expandedRows: Record<number, boolean> = {};

  ngOnInit(): void {
    this.adminApi
      .getMisAuditActions()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.actionOptions.set([
              { value: '', label: 'All actions' },
              ...res.data.map((a) => ({ value: a, label: this.humanize(a) })),
            ]);
          }
        },
        error: (err) => this.logger.error('MisAudit', 'actions', err),
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private filterParams() {
    const end = this.to ? new Date(this.to) : null;
    end?.setHours(23, 59, 59, 999);
    const start = this.from ? new Date(this.from) : null;
    start?.setHours(0, 0, 0, 0);
    return {
      entityType: this.entityType || undefined,
      action: this.action || undefined,
      fromDate: start?.toISOString(),
      toDate: end?.toISOString(),
      performedBy: this.performedBy.trim() || undefined,
    };
  }

  activeFilterCount(): number {
    return [!!this.entityType, !!this.action, !!this.from, !!this.to, !!this.performedBy.trim()].filter(Boolean)
      .length;
  }

  load(page: number): void {
    this.loading.set(true);
    this.adminApi
      .getMisAuditReport({ page, size: this.pageSize(), ...this.filterParams() })
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
        error: (err) => {
          this.loading.set(false);
          this.logger.error('MisAudit', 'load', err);
          this.notify.error('Audit', err?.error?.message || 'Load failed.');
        },
      });
  }

  /** p-table fires this on init and on every paginator change. */
  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.pageSize();
    this.pageSize.set(rows);
    this.load(Math.floor((event.first ?? 0) / rows));
  }

  private isRangeValid(): boolean {
    if (this.from && this.to && this.from.getTime() > this.to.getTime()) {
      this.notify.warning('Audit', "'From' date must be on or before 'To' date.");
      return false;
    }
    return true;
  }

  apply(): void {
    if (!this.isRangeValid()) return;
    this.expandedRows = {};
    this.load(0);
  }

  reset(): void {
    this.entityType = '';
    this.action = '';
    this.from = null;
    this.to = null;
    this.performedBy = '';
    this.apply();
  }

  // ── Presentation helpers ────────────────────────────────────────────────

  entity(type: string | null | undefined): EntityMeta {
    if (!type) return { ...FALLBACK_ENTITY, label: '—' };
    return ENTITY_META[type] ?? { ...FALLBACK_ENTITY, label: this.humanize(type) };
  }

  /** RULE_EXECUTION_COMPLETED → "Rule execution completed". */
  humanize(code: string | null | undefined): string {
    if (!code) return '—';
    return auditActionMeta(code).label;
  }

  actionTone(code: string | null | undefined): { severity: TagSeverity; icon: string } {
    const m = auditActionMeta(code);
    return { severity: m.severity, icon: m.icon };
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

  relative(value: string | null | undefined): string {
    if (!value) return '';
    const t = new Date(value).getTime();
    if (Number.isNaN(t)) return '';
    const mins = Math.round((t - Date.now()) / 60_000);
    if (Math.abs(mins) < 1) return 'just now';
    if (Math.abs(mins) < 60) return this.relTime.format(mins, 'minute');
    const hours = Math.round(mins / 60);
    if (Math.abs(hours) < 24) return this.relTime.format(hours, 'hour');
    const days = Math.round((t - Date.now()) / DAY_MS);
    if (Math.abs(days) < 30) return this.relTime.format(days, 'day');
    return this.relTime.format(Math.round(days / 30), 'month');
  }

  /** Splits "a=1 | b=2" style descriptions into readable fragments. */
  descriptionParts(desc: string | null | undefined): { key?: string; value: string }[] {
    if (!desc) return [];
    return desc
      .split('|')
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => {
        const m = /^([\w.-]+)=(.*)$/.exec(p);
        return m ? { key: m[1], value: m[2] } : { value: p };
      });
  }

  // ── Export ──────────────────────────────────────────────────────────────

  private download(blob: Blob, base: string, ext: string): void {
    saveBlob(blob, base, ext);
  }

  exportCsv(): void {
    if (!this.isRangeValid()) return;
    this.exporting.set('csv');
    this.adminApi
      .exportMisAuditCsv(this.filterParams())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(null);
          this.download(b, 'audit-report', 'csv');
          this.notify.success('Export', 'CSV downloaded.');
        },
        error: async (err) => {
          this.exporting.set(null);
          this.notify.error('Export', await blobErrorMessage(err, 'Export failed.'));
        },
      });
  }

  exportExcel(): void {
    if (!this.isRangeValid()) return;
    this.exporting.set('excel');
    this.adminApi
      .exportMisAuditExcel(this.filterParams())
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (b) => {
          this.exporting.set(null);
          this.download(b, 'audit-report', 'xlsx');
          this.notify.success('Export', 'Excel downloaded.');
        },
        error: async (err) => {
          this.exporting.set(null);
          this.notify.error('Export', await blobErrorMessage(err, 'Export failed.'));
        },
      });
  }
}
