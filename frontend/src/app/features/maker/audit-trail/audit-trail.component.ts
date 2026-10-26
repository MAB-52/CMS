import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpErrorResponse } from '@angular/common/http';
import { AuditService } from '../../../core/services/audit.service';
import { LoggerService } from '../../../core/services/logger.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { NgIf } from '@angular/common';

// Actions that represent a checker decision on something the maker submitted
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

type AuditTypeFilter = 'all' | 'consents' | 'broadcasts' | 'rules' | 'decisions';

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [
    NgIf,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    RouterLink,
    FormsModule,
    TimeAgoPipe,
  ],
  templateUrl: './audit-trail.component.html',
  styleUrl: './audit-trail.component.css',
})
export class AuditTrailComponent implements OnInit {
  private readonly auditService = inject(AuditService);
  private readonly logger = inject(LoggerService);

  readonly rows = signal<AuditLogEntry[]>([]);
  readonly loading = signal(true);
  readonly page = signal(0);
  readonly size = signal(20);
  readonly hasNext = signal(false);
  readonly typeFilter = signal<AuditTypeFilter>('all');

  displayedColumns = ['action', 'description', 'entity', 'status' ,'checker', 'when'] as const;

  readonly displayedRows = computed(() => {
    const tf = this.typeFilter();
    const list = this.rows();
    if (tf === 'all') {
      return list;
    }
    if (tf === 'decisions') {
      return list.filter((e) => CHECKER_DECISION_ACTIONS.has(e.action));
    }
    return list.filter((e) => this.matchesTypeFilter(e, tf));
  });

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.loading.set(true);
    this.auditService.getMyActivity(this.page(), this.size()).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success || !res.data) {
          this.rows.set([]);
          this.hasNext.set(false);
          return;
        }
        this.rows.set(res.data.content);
        this.hasNext.set(res.data.hasNext);
      },
      error: (err: HttpErrorResponse) => {
        this.loading.set(false);
        this.rows.set([]);
        this.hasNext.set(false);
        this.logger.error('AuditTrailComponent', 'load failed', err);
      },
    });
  }

  prev(): void {
    this.page.update((p) => Math.max(0, p - 1));
    this.reload();
  }

  next(): void {
    if (this.hasNext()) {
      this.page.update((p) => p + 1);
      this.reload();
    }
  }

  /** Is this row a checker decision (vs the maker's own action)? */
  isCheckerDecision(e: AuditLogEntry): boolean {
    return CHECKER_DECISION_ACTIONS.has(e.action);
  }

  formatActionLabel(action: string): string {
    return (action ?? '').replace(/_/g, ' ');
  }

  entityChipLabel(entityType: string): string {
    const t = (entityType ?? '').toUpperCase();
    if (t === 'CONSENT_RULE') return 'RULE';
    if (t === 'BROADCAST_REQUEST') return 'BROADCAST';
    if (t === 'CONSENT') return 'CONSENT';
    return t || '—';
  }

  entityChipKind(entityType: string): 'consent' | 'broadcast' | 'rule' | 'other' {
    const t = (entityType ?? '').toUpperCase();
    if (t === 'CONSENT') return 'consent';
    if (t === 'BROADCAST_REQUEST') return 'broadcast';
    if (t === 'CONSENT_RULE') return 'rule';
    return 'other';
  }

  /** Status pill shown in the "status" column for checker decisions */
  actionBadgeTone(action: string): 'ok' | 'bad' | 'warn' | 'neutral' {
    const a = (action ?? '').toUpperCase();
    if (a.endsWith('_APPROVED') || a === 'CONSENT_PUBLISHED') return 'ok';
    if (a.endsWith('_REJECTED')) return 'bad';
    if (a.endsWith('_REVISION_REQUESTED')) return 'warn';
    return 'neutral';
  }

  statusLabel(action: string): string {
    const a = (action ?? '').toUpperCase();
    if (a.endsWith('_APPROVED') || a === 'CONSENT_PUBLISHED') return 'Approved';
    if (a.endsWith('_REJECTED')) return 'Rejected';
    if (a.endsWith('_REVISION_REQUESTED')) return 'Revision requested';
    return '—';
  }

  private matchesTypeFilter(e: AuditLogEntry, tf: Exclude<AuditTypeFilter, 'all' | 'decisions'>): boolean {
    const t = (e.entityType ?? '').toUpperCase();
    const a = (e.action ?? '').toUpperCase();
    if (tf === 'consents') return t === 'CONSENT' || a.startsWith('CONSENT_');
    if (tf === 'broadcasts') return t === 'BROADCAST_REQUEST' || a.startsWith('BROADCAST_');
    if (tf === 'rules') return t === 'CONSENT_RULE' || a.startsWith('RULE_');
    return true;
  }
}