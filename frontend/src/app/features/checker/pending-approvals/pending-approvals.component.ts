import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Consent, ConsentType } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { MergeTag } from '../../../core/models/consent.model';

import { channelsLabel } from '../../../core/utils/channel.util';
import { ConsentTypeLabelPipe } from '../../../shared/pipes/consent-type-label.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';
import { ConsentPreviewDialogComponent, ConsentPreviewDialogData } from '../../../shared/components/consent-preview-dialog/consent-preview-dialog.component';

@Component({
  selector: 'app-pending-approvals',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ConsentTypeLabelPipe,
    TimeAgoPipe,
  ],
  templateUrl: './pending-approvals.component.html',
  styleUrl: './pending-approvals.component.css',
})
export class PendingApprovalsComponent implements OnInit {
  private readonly api = inject(ConsentService);
  private readonly mergeApi = inject(MergeTagService);
  private readonly dialog = inject(MatDialog);
  private readonly router = inject(Router);

  readonly list = signal<Consent[]>([]);
  readonly filtered = signal<Consent[]>([]);
  readonly loading = signal(true);
  readonly mergeTags = signal<MergeTag[]>([]);
  search = '';
  private searchTimer?: ReturnType<typeof setTimeout>;
  typeFilter: ConsentType | 'ALL' = 'ALL';
  sort: 'date' | 'name' = 'date';

  ngOnInit(): void {
    this.mergeApi.getMergeTags().subscribe({
      next: (t) => this.mergeTags.set(t),
      error: () => {
        /* notified */
      },
    });
    this.reload();
  }

  reload(): void {
    this.loading.set(true);
    this.api.getPendingApprovals().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.list.set(res.data);
          this.applyFilters();
        }
      },
      error: () => this.loading.set(false),
    });
  }

  onSearchChange(value: string): void {
    this.search = value;
    clearTimeout(this.searchTimer);
    this.searchTimer = setTimeout(() => this.applyFilters(), 250);
  }

  clearSearch(): void {
    clearTimeout(this.searchTimer);
    this.search = '';
    this.applyFilters();
  }

  applyFilters(): void {
    let rows = [...this.list()];
    if (this.typeFilter !== 'ALL') {
      rows = rows.filter((c) => c.type === this.typeFilter);
    }
    const q = this.search.trim().toLowerCase();
    if (q) {
      rows = rows.filter((c) =>
        [c.consentName, c.consentId, c.createdBy?.fullName, c.category]
          .some((v) => (v ?? '').toString().toLowerCase().includes(q)),
      );
    }
    if (this.sort === 'name') {
      rows.sort((a, b) => a.consentName.localeCompare(b.consentName));
    } else {
      rows.sort((a, b) => (a.submittedAt < b.submittedAt ? 1 : -1));
    }
    this.filtered.set(rows);
  }

  preview(c: Consent): void {
    const data: ConsentPreviewDialogData = {
      html: c.consentMessage || '<p><em>No message body.</em></p>',
      mergeTags: this.mergeTags(),
    };
    this.dialog.open(ConsentPreviewDialogComponent, { width: '760px', maxHeight: '90vh', data });
  }

  review(c: Consent): void {
    void this.router.navigate(['/checker/consents', c.id, 'review']);
  }

  typeClass(t: ConsentType): string {
    switch (t) {
      case 'NEW_TEMPLATE':
        return 'pill blue';
      case 'VERSION_UPDATE':
        return 'pill orange';
      case 'RENEWAL':
        return 'pill green';
      default:
        return 'pill';
    }
  }

  channels(c: Consent): string {
    return channelsLabel(c);
  }
}