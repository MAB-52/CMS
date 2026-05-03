import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpErrorResponse } from '@angular/common/http';
import { AuditService } from '../../../core/services/audit.service';
import { LoggerService } from '../../../core/services/logger.service';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-audit-trail',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatButtonModule, MatTooltipModule, RouterLink, TimeAgoPipe],
  templateUrl: './audit-trail.component.html',
  styleUrl: './audit-trail.component.scss',
})
export class AuditTrailComponent implements OnInit {
  private readonly auditService = inject(AuditService);
  private readonly logger = inject(LoggerService);

  rows: AuditLogEntry[] = [];
  page = 0;
  size = 20;
  hasNext = false;
  displayedColumns = ['action', 'description', 'entity', 'when'] as const;

  ngOnInit(): void {
    this.reload();
  }

  reload(): void {
    this.auditService.getMyActivity(this.page, this.size).subscribe({
      next: (res) => {
        if (!res.success || !res.data) {
          return;
        }
        this.rows = res.data.content;
        this.hasNext = res.data.hasNext;
      },
      error: (err: HttpErrorResponse) => {
        this.logger.error('AuditTrailComponent', 'load failed', err);
      },
    });
  }

  prev(): void {
    this.page = Math.max(0, this.page - 1);
    this.reload();
  }

  next(): void {
    if (this.hasNext) {
      this.page += 1;
      this.reload();
    }
  }
}
