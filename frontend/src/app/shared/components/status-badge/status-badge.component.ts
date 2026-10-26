import { Component, Input } from '@angular/core';
import { ConsentStatus } from '../../../core/models/consent.model';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  template: `
    <span class="is-badge" [class]="'is-badge is-badge--' + tone" [class.is-badge--no-dot]="!dot">{{ label }}</span>
  `,
  styles: [`:host { display: inline-flex; vertical-align: middle; }`],
})
export class StatusBadgeComponent {
  @Input({ required: true }) status!: ConsentStatus;

  get dot(): boolean {
    return this.status !== 'DRAFT';
  }

  get label(): string {
    switch (this.status) {
      case 'DRAFT':
        return 'Draft';
      case 'PENDING_APPROVAL':
        return 'Pending Approval';
      case 'APPROVED':
        return 'Approved';
      case 'REJECTED':
        return 'Rejected';
      case 'PUBLISHED':
        return 'Published';
      case 'REVISION_REQUESTED':
        return 'Revision Requested';
      default:
        return String(this.status);
    }
  }

  get tone(): string {
    switch (this.status) {
      case 'DRAFT':
        return 'neutral';
      case 'PENDING_APPROVAL':
        return 'warning';
      case 'APPROVED':
        return 'success';
      case 'REJECTED':
        return 'danger';
      case 'PUBLISHED':
        return 'primary';
      case 'REVISION_REQUESTED':
        return 'orange';
      default:
        return 'neutral';
    }
  }
}
