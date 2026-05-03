import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ConsentStatus } from '../../../core/models/consent.model';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [NgClass],
  template: `
    <span class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold" [ngClass]="classes">
      @if (dot) {
        <span class="text-[10px]">●</span>
      }
      {{ label }}
    </span>
  `,
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

  get classes(): Record<string, boolean> {
    return {
      'bg-slate-200 text-slate-700': this.status === 'DRAFT',
      'bg-amber-100 text-amber-700': this.status === 'PENDING_APPROVAL',
      'bg-emerald-100 text-emerald-700': this.status === 'APPROVED',
      'bg-red-100 text-red-700': this.status === 'REJECTED',
      'bg-violet-600 text-white': this.status === 'PUBLISHED',
      'bg-orange-100 text-orange-700': this.status === 'REVISION_REQUESTED',
    };
  }
}
