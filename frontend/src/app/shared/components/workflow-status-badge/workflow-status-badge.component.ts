import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type WorkflowStatusVariant =
  | 'slate'
  | 'amber'
  | 'emerald'
  | 'red'
  | 'orange'
  | 'indigo'
  | 'teal'
  | 'rose';

@Component({
  selector: 'app-workflow-status-badge',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="wf-badge" [ngClass]="'wf-' + variant">
      @if (dot) {
        <span class="dot">●</span>
      }
      {{ label }}
    </span>
  `,
  styles: `
    .wf-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-radius: 999px;
      padding: 4px 12px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.01em;
      border: 1px solid transparent;
    }
    .dot {
      font-size: 8px;
      opacity: 0.85;
    }
    .wf-slate {
      background: rgba(100, 116, 139, 0.12);
      color: #475569;
      border-color: rgba(100, 116, 139, 0.25);
    }
    .wf-amber {
      background: rgba(245, 158, 11, 0.14);
      color: #b45309;
      border-color: rgba(245, 158, 11, 0.35);
    }
    .wf-emerald {
      background: rgba(22, 163, 74, 0.12);
      color: #15803d;
      border-color: rgba(22, 163, 74, 0.28);
    }
    .wf-red {
      background: rgba(220, 38, 38, 0.1);
      color: #b91c1c;
      border-color: rgba(220, 38, 38, 0.28);
    }
    .wf-orange {
      background: rgba(234, 88, 12, 0.12);
      color: #c2410c;
      border-color: rgba(234, 88, 12, 0.3);
    }
    .wf-indigo {
      background: rgba(99, 102, 241, 0.14);
      color: #4338ca;
      border-color: rgba(99, 102, 241, 0.35);
    }
    .wf-teal {
      background: rgba(13, 148, 136, 0.12);
      color: #0f766e;
      border-color: rgba(13, 148, 136, 0.3);
    }
    .wf-rose {
      background: rgba(244, 63, 94, 0.1);
      color: #be123c;
      border-color: rgba(244, 63, 94, 0.28);
    }
  `,
})
export class WorkflowStatusBadgeComponent {
  @Input({ required: true }) status!: string;

  get dot(): boolean {
    return this.status !== 'DRAFT';
  }

  get label(): string {
    const s = this.status;
    const map: Record<string, string> = {
      DRAFT: 'Draft',
      PENDING_CHECKER_APPROVAL: 'Pending checker approval',
      PENDING_APPROVAL: 'Pending approval',
      APPROVED: 'Approved',
      REJECTED: 'Rejected',
      REVISION_REQUESTED: 'Returned for revision',
      LIVE: 'Live',
      READY_FOR_EXECUTION: 'Ready for execution',
      EXECUTED: 'Executed',
      FAILED: 'Failed',
      PARTIALLY_EXECUTED: 'Partially executed',
      PUBLISHED: 'Published',
    };
    return map[s] || s.replace(/_/g, ' ');
  }

  get variant(): WorkflowStatusVariant {
    switch (this.status) {
      case 'DRAFT':
        return 'slate';
      case 'PENDING_CHECKER_APPROVAL':
      case 'PENDING_APPROVAL':
        return 'amber';
      case 'APPROVED':
        return 'emerald';
      case 'REJECTED':
        return 'red';
      case 'REVISION_REQUESTED':
        return 'orange';
      case 'LIVE':
      case 'PUBLISHED':
        return 'indigo';
      case 'READY_FOR_EXECUTION':
        return 'teal';
      case 'EXECUTED':
        return 'emerald';
      case 'FAILED':
        return 'red';
      case 'PARTIALLY_EXECUTED':
        return 'amber';
      default:
        return 'slate';
    }
  }
}
