import { DatePipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import {
  AuditLogEntry,
  ReviewDecisionFilter,
  ReviewHistorySummary,
  ReviewTypeFilter,
} from '../../../core/models/audit.model';
import { AuditService } from '../../../core/services/audit.service';

type DecisionKind = 'approved' | 'rejected' | 'revision' | 'published' | 'other';

interface DecisionMeta {
  kind: DecisionKind;
  label: string;
  icon: string;
  color: string;
}

interface EntityMeta {
  label: string;
  icon: string;
  color: string;
}

interface DayGroup {
  key: string;
  label: string;
  date: Date;
  entries: AuditLogEntry[];
}

const DECISIONS: Record<DecisionKind, DecisionMeta> = {
  approved: { kind: 'approved', label: 'Approved', icon: 'pi pi-check-circle', color: 'var(--is-success)' },
  rejected: { kind: 'rejected', label: 'Rejected', icon: 'pi pi-times-circle', color: 'var(--is-danger)' },
  revision: { kind: 'revision', label: 'Revision requested', icon: 'pi pi-replay', color: 'var(--is-secondary)' },
  published: { kind: 'published', label: 'Published', icon: 'pi pi-globe', color: 'var(--is-blue)' },
  other: { kind: 'other', label: 'Action', icon: 'pi pi-bolt', color: 'var(--is-text-2)' },
};

const ENTITIES: Record<string, EntityMeta> = {
  CONSENT: { label: 'Consent', icon: 'pi pi-file-check', color: 'var(--is-primary)' },
  CONSENT_RULE: { label: 'Rule', icon: 'pi pi-sitemap', color: 'var(--is-teal)' },
  BROADCAST_REQUEST: { label: 'Broadcast', icon: 'pi pi-megaphone', color: 'var(--is-pink)' },
};

const DAY_MS = 86_400_000;

@Component({
  selector: 'app-review-history',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    FormsModule,
    RouterLink,
    ButtonModule,
    DatePickerModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PaginatorModule,
    ProgressBarModule,
    SelectModule,
    SelectButtonModule,
    SkeletonModule,
    TooltipModule,
  ],
  templateUrl: './review-history.component.html',
  styleUrls: ['../../admin/shared/report-kit.css', './review-history.component.css'],
})
export class ReviewHistoryComponent implements OnInit {
  private readonly audit = inject(AuditService);
  private readonly relTime = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  readonly rows = signal<AuditLogEntry[]>([]);
  readonly summary = signal<ReviewHistorySummary | null>(null);
  readonly loading = signal(true);
  readonly page = signal(0);
  readonly size = signal(15);
  readonly totalElements = signal(0);
  readonly expanded = signal<Set<number>>(new Set());
  readonly skeletonRows = [1, 2, 3, 4];
  readonly today = new Date();

  search = '';
  type: ReviewTypeFilter = 'ALL';
  decision: ReviewDecisionFilter = 'ALL';
  range: Date[] | null = null;

  readonly typeOptions = computed(() => {
    const s = this.summary();
    return [
      { value: 'ALL', label: 'All', icon: 'pi pi-th-large', count: s?.total },
      { value: 'CONSENT', label: 'Consents', icon: ENTITIES['CONSENT'].icon, count: s?.consents },
      { value: 'RULE', label: 'Rules', icon: ENTITIES['CONSENT_RULE'].icon, count: s?.rules },
      { value: 'BROADCAST', label: 'Broadcasts', icon: ENTITIES['BROADCAST_REQUEST'].icon, count: s?.broadcasts },
    ];
  });

  readonly decisionOptions: { value: ReviewDecisionFilter; label: string; icon: string; color: string }[] = [
    { value: 'ALL', label: 'All decisions', icon: 'pi pi-list', color: 'var(--is-text-2)' },
    { value: 'APPROVED', label: 'Approved', icon: DECISIONS.approved.icon, color: DECISIONS.approved.color },
    { value: 'REJECTED', label: 'Rejected', icon: DECISIONS.rejected.icon, color: DECISIONS.rejected.color },
    { value: 'REVISION_REQUESTED', label: 'Revision requested', icon: DECISIONS.revision.icon, color: DECISIONS.revision.color },
    { value: 'PUBLISHED', label: 'Published', icon: DECISIONS.published.icon, color: DECISIONS.published.color },
  ];

  /** Share of each decision kind, for the stacked distribution bar. */
  readonly distribution = computed(() => {
    const s = this.summary();
    if (!s?.total) return [];
    return [
      { ...DECISIONS.approved, count: s.approved },
      { ...DECISIONS.revision, count: s.revisionRequested },
      { ...DECISIONS.rejected, count: s.rejected },
      { ...DECISIONS.published, count: s.published },
    ]
      .filter((d) => d.count > 0)
      .map((d) => ({ ...d, pct: (d.count / s.total) * 100 }));
  });

  readonly approvalRate = computed(() => {
    const s = this.summary();
    const decided = (s?.approved ?? 0) + (s?.rejected ?? 0) + (s?.revisionRequested ?? 0);
    return decided ? ((s?.approved ?? 0) / decided) * 100 : 0;
  });

  /** Entries grouped by local calendar day, newest first (server already sorts desc). */
  readonly groups = computed<DayGroup[]>(() => {
    const out: DayGroup[] = [];
    for (const e of this.rows()) {
      const d = new Date(e.performedAt);
      const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      let g = out[out.length - 1];
      if (!g || g.key !== key) {
        g = { key, label: this.dayLabel(d), date: d, entries: [] };
        out.push(g);
      }
      g.entries.push(e);
    }
    return out;
  });

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    const [start, end] = this.range ?? [];
    const last = end ?? start;
    this.audit
      .getMyReviews({
        page: this.page(),
        size: this.size(),
        type: this.type,
        decision: this.decision,
        search: this.search,
        from: start ? this.startOfDay(start).toISOString() : undefined,
        // Exclusive upper bound: the day after the last selected day.
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

  apply(): void {
    this.page.set(0);
    this.expanded.set(new Set());
    this.load();
  }

  setType(value: ReviewTypeFilter | null): void {
    if (!value || value === this.type) return;
    this.type = value;
    this.apply();
  }

  /** Clicking a summary card filters by that decision. */
  filterDecision(value: ReviewDecisionFilter): void {
    this.decision = this.decision === value ? 'ALL' : value;
    this.apply();
  }

  onRangeChange(): void {
    // Apply once a full range (or a cleared range) is chosen.
    if (!this.range || this.range[1] || !this.range[0]) this.apply();
  }

  reset(): void {
    this.search = '';
    this.type = 'ALL';
    this.decision = 'ALL';
    this.range = null;
    this.apply();
  }

  activeFilterCount(): number {
    return [!!this.search.trim(), this.type !== 'ALL', this.decision !== 'ALL', !!this.range?.[0]].filter(Boolean).length;
  }

  onPage(e: PaginatorState): void {
    this.size.set(e.rows ?? this.size());
    this.page.set(e.page ?? 0);
    this.expanded.set(new Set());
    this.load();
  }

  toggle(id: number): void {
    const next = new Set(this.expanded());
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this.expanded.set(next);
  }

  // ── Presentation helpers ────────────────────────────────────────────────

  decisionOf(action: string | null | undefined): DecisionMeta {
    const a = (action ?? '').toUpperCase();
    if (a.endsWith('_APPROVED')) return DECISIONS.approved;
    if (a.endsWith('_REJECTED')) return DECISIONS.rejected;
    if (a.endsWith('_REVISION_REQUESTED')) return DECISIONS.revision;
    if (a.endsWith('_PUBLISHED')) return DECISIONS.published;
    return DECISIONS.other;
  }

  entityOf(type: string | null | undefined): EntityMeta {
    return ENTITIES[(type ?? '').toUpperCase()] ?? { label: type || 'Item', icon: 'pi pi-box', color: 'var(--is-text-2)' };
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

  private dayLabel(d: Date): string {
    const diff = Math.round((this.startOfDay(new Date()).getTime() - this.startOfDay(d).getTime()) / DAY_MS);
    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    return d.toLocaleDateString('en-GB', { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' });
  }
}
