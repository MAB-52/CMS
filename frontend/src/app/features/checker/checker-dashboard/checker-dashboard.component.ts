import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CheckerStats, Consent } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { AuditService } from '../../../core/services/audit.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-checker-dashboard',
  standalone: true,
  imports: [RouterLink, MatButtonModule, TimeAgoPipe],
  templateUrl: './checker-dashboard.component.html',
  styleUrl: './checker-dashboard.component.scss',
})
export class CheckerDashboardComponent implements OnInit {
  private readonly api = inject(ConsentService);
  private readonly audit = inject(AuditService);

  readonly stats = signal<CheckerStats | null>(null);
  readonly pending = signal<Consent[]>([]);
  readonly feed = signal<AuditLogEntry[]>([]);

  ngOnInit(): void {
    this.api.getCheckerStats().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.stats.set(res.data);
        }
      },
    });
    this.api.getPendingApprovals().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.pending.set(res.data.slice(0, 3));
        }
      },
    });
    this.audit.getMyActivity(0, 15).subscribe({
      next: (res) => {
        if (res.success && res.data?.content) {
          const rows = res.data.content.filter((e) => e.action.startsWith('CONSENT_'));
          this.feed.set(rows.slice(0, 8));
        }
      },
    });
  }
}
