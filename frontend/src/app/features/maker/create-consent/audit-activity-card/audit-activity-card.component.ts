import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuditService } from '../../../../core/services/audit.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { AuditLogEntry } from '../../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-audit-activity-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, TimeAgoPipe, RouterLink],
  templateUrl: './audit-activity-card.component.html',
  styleUrl: './audit-activity-card.component.css',
})
export class AuditActivityCardComponent implements OnChanges {
  private readonly audit = inject(AuditService);
  private readonly logger = inject(LoggerService);

  @Input() consentDbId: number | null = null;

  entries: AuditLogEntry[] = [];
  loading = false;
  error = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['consentDbId']) {
      this.load();
    }
  }

  load(): void {
    if (!this.consentDbId) {
      this.entries = [];
      return;
    }
    this.loading = true;
    this.error = false;
    this.audit.getConsentAuditTrail(this.consentDbId).subscribe({
      next: (res) => {
        this.loading = false;
        if (res.success && res.data) {
          this.entries = res.data.slice(0, 5);
        }
      },
      error: (err) => {
        this.loading = false;
        this.error = true;
        this.logger.error('AuditActivityCard', 'load failed', err);
      },
    });
  }

  /** Material icon + design-system tone for the timeline dot. */
  timelineIcon(action: string): { icon: string; tone: string } {
    const map: Record<string, { icon: string; tone: string }> = {
      CONSENT_CREATED: { icon: 'add_circle', tone: 'primary' },
      CONSENT_SUBMITTED: { icon: 'send', tone: 'warning' },
      CONSENT_APPROVED: { icon: 'check_circle', tone: 'success' },
      CONSENT_REJECTED: { icon: 'cancel', tone: 'danger' },
      CONSENT_PUBLISHED: { icon: 'public', tone: 'primary' },
      CONSENT_REVISION_REQUESTED: { icon: 'assignment_return', tone: 'orange' },
      CONSENT_UPDATED: { icon: 'edit', tone: 'info' },
      CONSENT_DRAFT_SAVED: { icon: 'save', tone: 'neutral' },
    };
    return map[action] ?? { icon: 'history', tone: 'neutral' };
  }

  iconFor(action: string): string {
    switch (action) {
      case 'CONSENT_CREATED':
        return '🔵';
      case 'CONSENT_SUBMITTED':
        return '🟡';
      case 'CONSENT_APPROVED':
        return '🟢';
      case 'CONSENT_REJECTED':
        return '🔴';
      case 'CONSENT_PUBLISHED':
        return '🟣';
      case 'CONSENT_REVISION_REQUESTED':
        return '🟠';
      case 'CONSENT_UPDATED':
        return '🔷';
      case 'CONSENT_DRAFT_SAVED':
        return '⚫';
      default:
        return '⚪';
    }
  }
}
