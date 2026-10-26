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
  templateUrl: './workflow-status-badge.component.html',
  styleUrl: './workflow-status-badge.component.css',
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

  /** Maps a workflow variant onto the shared design-system badge tone. */
  toneFor(variant: WorkflowStatusVariant): string {
    const tones: Record<WorkflowStatusVariant, string> = {
      slate: 'neutral',
      amber: 'warning',
      emerald: 'success',
      red: 'danger',
      orange: 'orange',
      indigo: 'primary',
      teal: 'teal',
      rose: 'danger',
    };
    return tones[variant];
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