import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import {
  AuditLogEntry,
  MakerTrailScope,
  MakerTrailSummary,
  ReviewTypeFilter,
} from '../../../core/models/audit.model';
import { AuditService } from '../../../core/services/audit.service';
import { AuthService } from '../../../core/services/auth.service';

interface ActionMeta {
  label: string;
  icon: string;
  color: string;
}

interface EntityMeta {
  label: string;
  icon: string;
  color: string;
}

const CHECKER_DECISION_ACTIONS = new Set<string>([
  'CONSENT_APPROVED',
  'CONSENT_REJECTED',
  'CONSENT_REVISION_REQUESTED',
  'CONSENT_PUBLISHED',
  'BROADCAST_APPROVED',
  'BROADCAST_REJECTED',
  'BROADCAST_REVISION_REQUESTED',
  'RULE_APPROVED',
  'RULE_REJECTED',
  'RULE_REVISION_REQUESTED',
]);

const ACTION_TONES: [RegExp, Omit<ActionMeta, 'label'>][] = [
  [/REJECT|FAIL|ERROR|CANCEL/, { icon: 'pi pi-times-circle', color: 'var(--is-danger)' }],
  [/DELETE|REMOVE|REVOK|WITHDRAW/, { icon: 'pi pi-trash', color: 'var(--is-danger)' }],
  [/REVISION/, { icon: 'pi pi-replay', color: 'var(--is-secondary)' }],
  [/APPROV|PUBLISH|COMPLET|ACCEPT|ACTIVAT/, { icon: 'pi pi-check-circle', color: 'var(--is-success)' }],
  [/SUBMIT|SEND|SENT|REQUEST/, { icon: 'pi pi-send', color: 'var(--is-blue)' }],
  [/UPDAT|EDIT|CHANG|MODIF/, { icon: 'pi pi-pencil', color: 'var(--is-warning)' }],
  [/CREAT|ADD|UPLOAD/, { icon: 'pi pi-plus-circle', color: 'var(--is-primary)' }],
  [/RUN|EXECUT|TRIGGER|START/, { icon: 'pi pi-play-circle', color: 'var(--is-teal)' }],
];

const ENTITIES: Record<string, EntityMeta> = {
  CONSENT: { label: 'Consent', icon: 'pi pi-file-check', color: 'var(--is-primary)' },
  CONSENT_RULE: { label: 'Rule', icon: 'pi pi-sitemap', color: 'var(--is-teal)' },
  BROADCAST_REQUEST: { label: 'Broadcast', icon: 'pi pi-megaphone', color: 'var(--is-pink)' },
};

type TrailTab = 'ALL' | 'DECISIONS' | 'CONSENT' | 'BROADCAST' | 'RULE';

interface StatusMeta {
  label: string;
  icon: string;
  severity: 'success' | 'info' | 'warn' | 'danger' | 'secondary';
}

const STATUS_META: Record<string, StatusMeta> = {
  APPROVED: { label: 'Approved', icon: 'pi pi-check-circle', severity: 'success' },
  PUBLISHED: { label: 'Published', icon: 'pi pi-globe', severity: 'success' },
  REJECTED: { label: 'Rejected', icon: 'pi pi-times-circle', severity: 'danger' },
  REVISION_REQUESTED: { label: 'Revision requested', icon: 'pi pi-replay', severity: 'warn' },
  PENDING: { label: 'Pending review', icon: 'pi pi-hourglass', severity: 'info' },
};

const NOT_SUBMITTED: StatusMeta = { label: 'Not submitted', icon: 'pi pi-minus-circle', severity: 'secondary' };

const AVATAR_COLORS =['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];
const DAY_MS = 86_400_000;

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    RouterLink,
    AvatarModule,
    ButtonModule,
    DatePickerModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ProgressBarModule,
    SelectButtonModule,
    SkeletonModule,
    TableModule,
    TagModule,
    TooltipModule,
  ],
  templateUrl: './audit-trail.component.html',
  styleUrls: ['../../admin/shared/report-kit.css', './audit-trail.component.css'],
})
export class AuditTrailComponent {
  private readonly auditService = inject(AuditService);
  private readonly auth = inject(AuthService);
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly currentUserId = this.auth.getCurrentUser()?.id ?? null;
  readonly today = new Date();

  readonly rows = signal<AuditLogEntry[]>([]);
  readonly summary = signal<MakerTrailSummary | null>(null);
  readonly loading = signal(false);
  readonly page = signal(0);
  readonly size = signal(15);
  readonly totalElements = signal(0);
  readonly skeletonRows = Array.from({ length: 6 }, (_, i) => i);

  expandedRows: Record<number, boolean> = {};

  tab: TrailTab = 'ALL';
  search = '';
  range: Date[] | null = null;

  readonly tabOptions = computed(() => {
    const s = this.summary();
    return [
      { value: 'ALL', label: 'All', icon: 'pi pi-list', count: s?.total },
      { value: 'DECISIONS', label: 'Checker decisions', icon: 'pi pi-verified', count: s?.checkerDecisions },
      { value: 'CONSENT', label: 'Consents', icon: ENTITIES['CONSENT'].icon, count: undefined },
      { value: 'BROADCAST', label: 'Broadcasts', icon: ENTITIES['BROADCAST_REQUEST'].icon, count: undefined },
      { value: 'RULE', label: 'Rules', icon: ENTITIES['CONSENT_RULE'].icon, count: undefined },
    ];
  });

  private get scope(): MakerTrailScope {
    return this.tab === 'DECISIONS' ? 'DECISIONS' : 'ALL';
  }

  private get type(): ReviewTypeFilter {
    return this.tab === 'CONSENT' || this.tab === 'RULE' || this.tab === 'BROADCAST' ? this.tab : 'ALL';
  }

  load(): void {
    this.loading.set(true);
    const [start, end] = this.range ?? [];
    const last = end ?? start;
    this.auditService
      .getMakerTrail({
        page: this.page(),
        size: this.size(),
        scope: this.scope,
        type: this.type,
        search: this.search,
        from: start ? this.startOfDay(start).toISOString() : undefined,
        to: last ? new Date(this.startOfDay(last).getTime() + DAY_MS).toISOString() : undefined,
      })
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          if (res.success && res.data) {
            this.rows.set(res.data.page.content);
            this.totalElements.set(res.data.page.totalElements);
            this.summary.set(res.data.summary);
          }
        },
        error: () => {
          this.loading.set(false);
          this.rows.set([]);
          this.totalElements.set(0);
        },
      });
  }

  onLazyLoad(event: TableLazyLoadEvent): void {
    const rows = event.rows ?? this.size();
    this.size.set(rows);
    this.page.set(Math.floor((event.first ?? 0) / rows));
    this.expandedRows = {};
    this.load();
  }

  apply(): void {
    this.page.set(0);
    this.expandedRows = {};
    this.load();
  }

  setTab(value: TrailTab | null): void {
    if (!value || value === this.tab) return;
    this.tab = value;
    this.apply();
  }

  onRangeChange(): void {
    if (!this.range || this.range[1] || !this.range[0]) this.apply();
  }

  reset(): void {
    this.tab = 'ALL';
    this.search = '';
    this.range = null;
    this.apply();
  }

  activeFilterCount(): number {
    return [this.tab !== 'ALL', !!this.search.trim(), !!this.range?.[0]].filter(Boolean).length;
  }

  statusOf(code: string | null | undefined): StatusMeta {
    return STATUS_META[(code ?? '').toUpperCase()] ?? NOT_SUBMITTED;
  }

  isDecision(e: AuditLogEntry): boolean {
    return CHECKER_DECISION_ACTIONS.has(e.action);
  }

  isMine(e: AuditLogEntry): boolean {
    return this.currentUserId != null && e.userId === this.currentUserId;
  }

  actionOf(action: string | null | undefined): ActionMeta {
    const code = (action ?? '').toUpperCase();
    const tone = ACTION_TONES.find(([re]) => re.test(code))?.[1] ?? { icon: 'pi pi-bolt', color: 'var(--is-text-2)' };
    return { label: this.humanize(code), ...tone };
  }

  entityOf(type: string | null | undefined): EntityMeta {
    return ENTITIES[(type ?? '').toUpperCase()] ?? { label: this.humanize(type) || 'Item', icon: 'pi pi-box', color: 'var(--is-text-2)' };
  }

  humanize(code: string | null | undefined): string {
    if (!code) return '';
    const s = code.toLowerCase().replace(/_/g, ' ');
    return s.charAt(0).toUpperCase() + s.slice(1);
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
    const days = Math.round(hours / 24);
    if (Math.abs(days) < 30) return this.relTime.format(days, 'day');
    return this.relTime.format(Math.round(days / 30), 'month');
  }

  private startOfDay(d: Date): Date {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
}
