import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { CheckerStats } from '../../../core/models/consent.model';
import { AuthService } from '../../../core/services/auth.service';
import { ConsentService } from '../../../core/services/consent.service';
import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { BroadcastsService } from '../../../core/services/broadcasts.service';
import { AuditService } from '../../../core/services/audit.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { ApiResponse } from '../../../core/models/api-response.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

type PendingKind = 'CONSENT' | 'LINKED' | 'RULE';

interface PendingItem {
  key: string;
  kind: PendingKind;
  title: string;
  ref: string;
  submittedAt: string | null;
  link: (string | number)[];
}

type TagSeverity = 'success' | 'info' | 'warn' | 'danger' | 'secondary';

interface KindMeta {
  label: string;
  icon: string;
  severity: TagSeverity;
  color: string;
}

interface WaitInfo {
  label: string;
  severity: TagSeverity;
  color: string;
  tooltip: string;
}

const KIND_META: Record<PendingKind, KindMeta> = {
  CONSENT: { label: 'Consent', icon: 'pi pi-file', severity: 'info', color: 'var(--is-primary)' },
  LINKED: { label: 'Consent + rule', icon: 'pi pi-link', severity: 'warn', color: 'var(--is-secondary)' },
  RULE: { label: 'Broadcast rule', icon: 'pi pi-megaphone', severity: 'success', color: 'var(--is-success)' },
};

const DAY_MS = 86_400_000;

const ACTION_META: Record<string, { label: string; icon: string; tone: string }> = {
  APPROVED: { label: 'Approved', icon: 'task_alt', tone: 'green' },
  PUBLISHED: { label: 'Published', icon: 'public', tone: 'green' },
  REJECTED: { label: 'Rejected', icon: 'cancel', tone: 'red' },
  REVISION_REQUESTED: { label: 'Revision requested', icon: 'assignment_return', tone: 'amber' },
};

const ENTITY_LABEL: Record<string, string> = {
  CONSENT: 'Consent',
  CONSENT_RULE: 'Broadcast rule',
  BROADCAST_REQUEST: 'Broadcast',
};

@Component({
  selector: 'app-checker-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    TooltipModule,
    ButtonModule,
    PaginatorModule,
    TagModule,
    SkeletonModule,
    TimeAgoPipe,
  ],
  templateUrl: './checker-dashboard.component.html',
  styleUrl: './checker-dashboard.component.css',
})
export class CheckerDashboardComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly api = inject(ConsentService);
  private readonly rulesApi = inject(ConsentRulesService);
  private readonly broadcastsApi = inject(BroadcastsService);
  private readonly audit = inject(AuditService);

  readonly stats = signal<CheckerStats | null>(null);
  readonly statsError = signal(false);
  readonly pendingItems = signal<PendingItem[]>([]);
  readonly pendingCount = signal<number | null>(null);
  readonly pendingLoading = signal(true);
  readonly pendingError = signal(false);
  readonly feed = signal<AuditLogEntry[]>([]);
  readonly feedLoading = signal(true);
  readonly feedError = signal(false);
  readonly feedPage = signal(0);
  readonly feedSize = signal(5);
  readonly feedTotal = signal(0);

  readonly pendingPage = signal(0);
  readonly pendingSize = signal(5);

  readonly pagedPending = computed(() => {
    const start = this.pendingPage() * this.pendingSize();
    return this.pendingItems().slice(start, start + this.pendingSize());
  });
  readonly skeletons = [1, 2, 3];

  ngOnInit(): void {
    if (!this.auth.isLoggedIn() || this.auth.isLoggingOut) {
      return;
    }
    this.loadStats();
    this.loadPending();
    this.loadFeed();
  }

  refresh(): void {
    this.loadStats();
    this.loadPending();
    this.loadFeed();
  }

  loadStats(): void {
    this.statsError.set(false);
    this.api.getCheckerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        } else {
          this.statsError.set(true);
        }
      },
      error: () => this.statsError.set(true),
    });
  }

  loadPending(): void {
    this.pendingLoading.set(true);
    this.pendingError.set(false);
    this.pendingPage.set(0);
    forkJoin({
      consents: this.safe(this.api.getPendingApprovals()),
      linked: this.safe(this.api.getLinkedPendingApprovals()),
      rules: this.safe(this.rulesApi.listPending()),
      broadcasts: this.safe(this.broadcastsApi.listPending()),
    }).subscribe(({ consents, linked, rules, broadcasts }) => {
      this.pendingLoading.set(false);
      if (!consents && !linked && !rules && !broadcasts) {
        this.pendingError.set(true);
        this.pendingCount.set(null);
        this.pendingItems.set([]);
        return;
      }
      const items: PendingItem[] = [
        ...(consents ?? []).map((c) => ({
          key: `c-${c.id}`,
          kind: 'CONSENT' as const,
          title: c.consentName,
          ref: c.consentId,
          submittedAt: c.submittedAt || c.updatedAt || null,
          link: ['/checker/consents', c.id, 'review'],
        })),
        ...(linked ?? []).map((c) => ({
          key: `l-${c.id}`,
          kind: 'LINKED' as const,
          title: c.consentName,
          ref: c.consentId,
          submittedAt: c.submittedAt || c.updatedAt || null,
          link: ['/checker/linked-pending', c.id],
        })),
        ...(rules ?? []).map((r) => ({
          key: `r-${r.id}`,
          kind: 'RULE' as const,
          title: r.ruleName,
          ref: `Rule #${r.id}`,
          submittedAt: r.submittedAt || r.updatedAt || null,
          link: ['/checker/rules', r.id, 'review'],
        })),
      ];
      items.sort((a, b) => this.time(a.submittedAt) - this.time(b.submittedAt));
      this.pendingItems.set(items);
      this.pendingCount.set(items.length + (broadcasts ?? []).length);
    });
  }

  onPendingPage(e: PaginatorState): void {
    this.pendingSize.set(e.rows ?? this.pendingSize());
    this.pendingPage.set(e.page ?? 0);
  }

  onFeedPage(e: PaginatorState): void {
    this.feedSize.set(e.rows ?? this.feedSize());
    this.feedPage.set(e.page ?? 0);
    this.loadFeed();
  }

  loadFeed(): void {
    this.feedLoading.set(true);
    this.feedError.set(false);
    this.audit.getMyReviews({ page: this.feedPage(), size: this.feedSize(), type: 'ALL' }).subscribe({
      next: (res) => {
        this.feedLoading.set(false);
        this.feed.set(res.success && res.data ? res.data.page.content : []);
        this.feedTotal.set(res.success && res.data ? res.data.page.totalElements : 0);
      },
      error: () => {
        this.feedLoading.set(false);
        this.feedError.set(true);
      },
    });
  }

  kindMeta(kind: PendingKind): KindMeta {
    return KIND_META[kind];
  }

  waitInfo(iso: string | null): WaitInfo {
    const t = iso ? new Date(iso).getTime() : NaN;
    if (Number.isNaN(t)) {
      return { label: '—', severity: 'secondary', color: 'var(--is-text-3)', tooltip: 'Submission time unknown' };
    }
    const ms = Math.max(0, Date.now() - t);
    const min = Math.floor(ms / 60_000);
    const hr = Math.floor(ms / 3_600_000);
    const day = Math.floor(ms / DAY_MS);
    const label =
      day >= 1 ? `${day} day${day === 1 ? '' : 's'}` : hr >= 1 ? `${hr} hr${hr === 1 ? '' : 's'}` : `${Math.max(1, min)} min`;
    const tooltip =
      'Submitted ' +
      new Date(t).toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true });
    if (ms > 3 * DAY_MS) {
      return { label, severity: 'danger', color: 'var(--is-danger)', tooltip };
    }
    if (ms >= DAY_MS) {
      return { label, severity: 'warn', color: 'var(--is-warning)', tooltip };
    }
    return { label, severity: 'secondary', color: 'var(--is-text-3)', tooltip };
  }

  actionMeta(action: string): { label: string; icon: string; tone: string } {
    const key = Object.keys(ACTION_META).find((k) => action.endsWith(k));
    return key ? ACTION_META[key] : { label: this.humanize(action), icon: 'history', tone: 'indigo' };
  }

  entityLabel(type: string | null | undefined): string {
    return ENTITY_LABEL[(type ?? '').toUpperCase()] ?? 'Item';
  }

  private humanize(code: string): string {
    const s = code.toLowerCase().replace(/_/g, ' ');
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  private time(value: string | null): number {
    const t = value ? new Date(value).getTime() : NaN;
    return Number.isNaN(t) ? Number.MAX_SAFE_INTEGER : t;
  }

  private safe<T>(source: Observable<ApiResponse<T[]>>): Observable<T[] | null> {
    return source.pipe(
      map((res) => (res.success ? res.data ?? [] : null)),
      catchError(() => of(null)),
    );
  }
}
