import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AuditService } from '../../../core/services/audit.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

const CHECKER_REVIEW_HISTORY_ACTIONS = new Set<string>([
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

type ReviewHistoryTypeFilter = 'all' | 'consents' | 'broadcasts' | 'rules';

@Component({
  selector: 'app-review-history',
  standalone: true,
  imports: [RouterLink, FormsModule, MatButtonModule, TimeAgoPipe],
  templateUrl: './review-history.component.html',
  styleUrl: './review-history.component.scss',
})
export class ReviewHistoryComponent implements OnInit {
  private readonly audit = inject(AuditService);

  readonly rows = signal<AuditLogEntry[]>([]);
  readonly loading = signal(true);
  readonly page = signal(0);
  readonly size = signal(15);
  readonly hasNext = signal(false);
  readonly searchQuery = signal('');
  readonly typeFilter = signal<ReviewHistoryTypeFilter>('all');

  readonly displayedRows = computed(() => {
    let list = this.rows();
    const tf = this.typeFilter();
    if (tf !== 'all') {
      list = list.filter((e) => this.matchesTypeFilter(e, tf));
    }
    const q = this.searchQuery().trim().toLowerCase();
    if (q) {
      list = list.filter(
        (e) =>
          (e.entityName ?? '').toLowerCase().includes(q) || (e.description ?? '').toLowerCase().includes(q),
      );
    }
    return list;
  });

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.audit.getMyActivity(this.page(), this.size()).subscribe({
      next: (res) => {
        this.loading.set(false);
        const content = res.success && res.data?.content ? res.data.content : [];
        const filtered = content.filter((e) => CHECKER_REVIEW_HISTORY_ACTIONS.has(e.action));
        this.rows.set(filtered);
        this.hasNext.set(!!res.data?.hasNext);
      },
      error: () => {
        this.loading.set(false);
        this.rows.set([]);
        this.hasNext.set(false);
      },
    });
  }

  nextPage(): void {
    if (this.hasNext()) {
      this.page.update((p) => p + 1);
      this.load();
    }
  }

  prevPage(): void {
    if (this.page() > 0) {
      this.page.update((p) => p - 1);
      this.load();
    }
  }

  formatActionLabel(action: string): string {
    return (action ?? '').replace(/_/g, ' ');
  }

  entityChipLabel(entityType: string): string {
    const t = (entityType ?? '').toUpperCase();
    if (t === 'CONSENT_RULE') {
      return 'RULE';
    }
    if (t === 'BROADCAST_REQUEST') {
      return 'BROADCAST';
    }
    if (t === 'CONSENT') {
      return 'CONSENT';
    }
    return t || '—';
  }

  entityChipKind(entityType: string): 'consent' | 'broadcast' | 'rule' | 'other' {
    const t = (entityType ?? '').toUpperCase();
    if (t === 'CONSENT') {
      return 'consent';
    }
    if (t === 'BROADCAST_REQUEST') {
      return 'broadcast';
    }
    if (t === 'CONSENT_RULE') {
      return 'rule';
    }
    return 'other';
  }

  actionBadgeTone(action: string): 'ok' | 'bad' | 'warn' | 'neutral' {
    const a = (action ?? '').toUpperCase();
    if (a.endsWith('_APPROVED') || a === 'CONSENT_PUBLISHED') {
      return 'ok';
    }
    if (a.endsWith('_REJECTED')) {
      return 'bad';
    }
    if (a.endsWith('_REVISION_REQUESTED')) {
      return 'warn';
    }
    return 'neutral';
  }

  private matchesTypeFilter(e: AuditLogEntry, tf: Exclude<ReviewHistoryTypeFilter, 'all'>): boolean {
    const t = (e.entityType ?? '').toUpperCase();
    const a = (e.action ?? '').toUpperCase();
    if (tf === 'consents') {
      return t === 'CONSENT' || a.startsWith('CONSENT_');
    }
    if (tf === 'broadcasts') {
      return t === 'BROADCAST_REQUEST' || a.startsWith('BROADCAST_');
    }
    if (tf === 'rules') {
      return t === 'CONSENT_RULE' || a.startsWith('RULE_');
    }
    return true;
  }
}
