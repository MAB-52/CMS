import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { ConsentRule } from '../../../core/models/workflow.model';

import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';

@Component({
  selector: 'app-checker-rules-queue',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
    WorkflowStatusBadgeComponent,
  ],
  templateUrl: './checker-rules-queue.component.html',
  styleUrl:'./checker-rules-queue.component.css'
})
export class CheckerRulesQueueComponent implements OnInit {

  private readonly api = inject(ConsentRulesService);
  readonly rows = signal<ConsentRule[]>([]);
  readonly loading = signal(true);

  ngOnInit(): void {
    this.api.listPending().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.rows.set(res.data);
        }
      },
      error: () => this.loading.set(false),
    });
  }
}

