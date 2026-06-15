import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ConsentRulesService } from '../../../core/services/consent-rules.service';
import { ConsentRule, ConsentRuleStatus } from '../../../core/models/workflow.model';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

const PAGE_SIZE = 9;

@Component({
  selector: 'app-maker-rules-workbench',
  standalone: true,
  imports: [RouterLink, FormsModule, MatButtonModule, WorkflowStatusBadgeComponent, TimeAgoPipe],
  templateUrl: './maker-rules-workbench.component.html',
  styleUrl: './maker-rules-workbench.component.scss',
})
export class MakerRulesWorkbenchComponent implements OnInit {
  private readonly rulesApi = inject(ConsentRulesService);

  readonly rows = signal<ConsentRule[]>([]);
  readonly loading = signal(true);

  readonly page = signal(0);
  readonly hasNext = signal(false);
  statusFilter: ConsentRuleStatus | '' = '';
  searchQuery = '';

  displayedRows(): ConsentRule[] {
    const q = this.searchQuery.trim().toLowerCase();
    const list = this.rows();
    if (!q) {
      return list;
    }
    return list.filter((r) => (r.ruleName ?? '').toLowerCase().includes(q));
  }

  formatStatusLabel(status: string): string {
    return status.replace(/_/g, ' ');
  }

  readonly ruleStatuses: ConsentRuleStatus[] = [
    'DRAFT',
    'PENDING_CHECKER_APPROVAL',
    'APPROVED',
    'REJECTED',
    'REVISION_REQUESTED',
    'LIVE',
  ];

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading.set(true);
    const status = this.statusFilter ? this.statusFilter : undefined;
    this.rulesApi.mine(this.page(), PAGE_SIZE, status).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          this.rows.set(res.data.content);
          this.hasNext.set(!!res.data.hasNext);
        } else {
          this.rows.set([]);
          this.hasNext.set(false);
        }
      },
      error: () => {
        this.loading.set(false);
        this.rows.set([]);
        this.hasNext.set(false);
      },
    });
  }

  onStatusChange(): void {
    this.page.set(0);
    this.load();
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
}
