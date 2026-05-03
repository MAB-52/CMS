import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuditService } from '../../../../core/services/audit.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { AuditLogEntry } from '../../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-audit-activity-card',
  standalone: true,
  imports: [MatButtonModule, TimeAgoPipe, RouterLink],
  templateUrl: './audit-activity-card.component.html',
  styleUrl: './audit-activity-card.component.scss',
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
