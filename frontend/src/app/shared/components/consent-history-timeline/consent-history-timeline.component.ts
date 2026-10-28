import { DatePipe } from '@angular/common';
import { Component, DestroyRef, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { TooltipModule } from 'primeng/tooltip';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { AuditService } from '../../../core/services/audit.service';
import { AuditActionMeta, auditActionMeta } from '../../../core/utils/audit-action.util';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

type HistoryFilter = 'ALL' | 'DECISIONS' | 'EDITS';

export interface HistoryItem {
  key: string;
  action: string;
  meta: AuditActionMeta;
  entityType: string;
  userName: string;
  userRole: string | null;
  description: string;
  performedAt: string;
  firstAt: string;
  count: number;
}

const AVATAR_COLORS = ['#45329E', '#0D6EFD', '#D63384', '#20C997', '#EA6B28', '#6F42C1', '#0DCAF0'];
const LINKED_PREFIX = /^\[[^\]]*linked[^\]]*\]\s*/i;

@Component({
  selector: 'app-consent-history-timeline',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    AvatarModule,
    ButtonModule,
    MessageModule,
    PaginatorModule,
    SelectButtonModule,
    SkeletonModule,
    TagModule,
    TimelineModule,
    TooltipModule,
    TimeAgoPipe,
  ],
  templateUrl: './consent-history-timeline.component.html',
  styleUrl: './consent-history-timeline.component.css',
})
export class ConsentHistoryTimelineComponent {
  private readonly audit = inject(AuditService);
  private readonly destroyRef = inject(DestroyRef);

  readonly consentDbId = input<number | null>(null);
  readonly title = input('Consent history');
  readonly subtitle = input('Every step of this consent, newest first');
  readonly showRevisionNote = input(false);
  readonly emptyHint = input('No activity yet.');

  readonly loading = signal(false);
  readonly error = signal(false);
  readonly entries = signal<AuditLogEntry[]>([]);
  readonly filter = signal<HistoryFilter>('ALL');
  readonly first = signal(0);
  readonly rows = signal(8);

  readonly filterOptions = [
    { label: 'All', value: 'ALL', icon: 'pi pi-list' },
    { label: 'Decisions', value: 'DECISIONS', icon: 'pi pi-verified' },
    { label: 'Edits', value: 'EDITS', icon: 'pi pi-pencil' },
  ];
  readonly skeletons = [1, 2, 3, 4];

  readonly items = computed<HistoryItem[]>(() => {
    const out: HistoryItem[] = [];
    for (const e of this.entries()) {
      const meta = auditActionMeta(e.action);
      const prev = out[out.length - 1];
      if (
        prev &&
        meta.group === 'edit' &&
        /_DRAFT_SAVED$/.test(e.action) &&
        prev.action === e.action &&
        prev.userName === e.userName &&
        prev.entityType === e.entityType
      ) {
        prev.count += 1;
        prev.firstAt = e.performedAt;
        continue;
      }
      out.push({
        key: String(e.id),
        action: e.action,
        meta,
        entityType: e.entityType,
        userName: e.userName || 'System',
        userRole: e.userRole ?? null,
        description: (e.description ?? '').replace(LINKED_PREFIX, ''),
        performedAt: e.performedAt,
        firstAt: e.performedAt,
        count: 1,
      });
    }
    return out;
  });

  readonly filtered = computed(() => {
    const f = this.filter();
    if (f === 'ALL') return this.items();
    if (f === 'DECISIONS') return this.items().filter((i) => i.meta.group === 'decision');
    return this.items().filter((i) => i.meta.group === 'edit');
  });

  readonly pageItems = computed(() => this.filtered().slice(this.first(), this.first() + this.rows()));

  readonly hasRule = computed(() => this.entries().some((e) => e.entityType === 'CONSENT_RULE'));

  readonly revisionNote = computed(() => {
    const list = this.entries();
    const idx = list.findIndex((e) => e.action === 'CONSENT_REVISION_REQUESTED');
    if (idx <= 0) return null;
    const resubmitted = list.slice(0, idx).some((e) => e.action === 'CONSENT_SUBMITTED');
    const decidedSince = list
      .slice(0, idx)
      .some((e) => ['CONSENT_APPROVED', 'CONSENT_REJECTED'].includes(e.action));
    if (!resubmitted || decidedSince) return null;
    const e = list[idx];
    return {
      by: e.userName || 'Checker',
      at: e.performedAt,
      text: (e.description ?? '').replace(LINKED_PREFIX, '').replace(/^Revision requested:\s*/i, ''),
    };
  });

  readonly counts = computed(() => {
    const items = this.items();
    return {
      ALL: items.length,
      DECISIONS: items.filter((i) => i.meta.group === 'decision').length,
      EDITS: items.filter((i) => i.meta.group === 'edit').length,
    } as Record<HistoryFilter, number>;
  });

  constructor() {
    effect(() => {
      const id = this.consentDbId();
      this.load(id);
    });
  }

  reload(): void {
    this.load(this.consentDbId());
  }

  private load(id: number | null): void {
    this.first.set(0);
    if (!id) {
      this.entries.set([]);
      return;
    }
    this.loading.set(true);
    this.error.set(false);
    this.audit
      .getConsentAuditTrail(id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (res) => {
          this.loading.set(false);
          this.entries.set(res.success && res.data ? res.data : []);
        },
        error: () => {
          this.loading.set(false);
          this.error.set(true);
        },
      });
  }

  countFor(value: string): number {
    return this.counts()[value as HistoryFilter] ?? 0;
  }

  setFilter(value: HistoryFilter | null): void {
    this.filter.set(value ?? 'ALL');
    this.first.set(0);
  }

  onPage(e: PaginatorState): void {
    this.first.set(e.first ?? 0);
    this.rows.set(e.rows ?? 8);
  }

  initials(name: string | null | undefined): string {
    const parts = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
  }

  avatarColor(name: string | null | undefined): string {
    let h = 0;
    for (const ch of name ?? '') h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    return AVATAR_COLORS[h % AVATAR_COLORS.length];
  }

  roleLabel(role: string | null): string {
    if (!role) return '';
    return role.charAt(0) + role.slice(1).toLowerCase();
  }
}
