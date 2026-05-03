import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuditService } from '../../../core/services/audit.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-review-history',
  standalone: true,
  imports: [RouterLink, MatButtonModule, TimeAgoPipe],
  templateUrl: './review-history.component.html',
  styleUrl: './review-history.component.scss',
})
export class ReviewHistoryComponent implements OnInit {
  private readonly audit = inject(AuditService);

  readonly rows = signal<AuditLogEntry[]>([]);
  page = 0;
  size = 25;
  hasNext = false;

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.audit.getMyActivity(this.page, this.size).subscribe({
      next: (res) => {
        if (res.success && res.data?.content) {
          const filtered = res.data.content.filter(
            (e) =>
              e.action === 'CONSENT_APPROVED' ||
              e.action === 'CONSENT_REJECTED' ||
              e.action === 'CONSENT_REVISION_REQUESTED' ||
              e.action === 'CONSENT_PUBLISHED',
          );
          this.rows.set(filtered);
          this.hasNext = res.data.hasNext;
        }
      },
    });
  }

  nextPage(): void {
    if (this.hasNext) {
      this.page++;
      this.load();
    }
  }

  prevPage(): void {
    this.page = Math.max(0, this.page - 1);
    this.load();
  }
}
