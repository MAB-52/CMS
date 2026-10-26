

import { DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Consent } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { ChannelId, getChannels } from '../../../core/utils/channel.util';
import { ConsentTypeLabelPipe } from '../../../shared/pipes/consent-type-label.pipe';

const CHANNEL_CHIP_LABEL: Record<ChannelId, string> = {
  EMAIL: 'Email',
  SMS: 'SMS',
  PUSH: 'Push',
  WHATSAPP: 'WhatsApp',
  RCS: 'RCS',
};

export type SortOption = 'date' | 'name' | 'type';

@Component({
  selector: 'app-linked-approvals',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    DatePipe,
    ConsentTypeLabelPipe,
  ],
  templateUrl: './linked-approvals.component.html',
  styleUrls: ['../checker-shared.css', './linked-approvals.component.css'],
})
export class LinkedApprovalsComponent implements OnInit {
  private readonly consentApi = inject(ConsentService);

  // ── Core data signals ──────────────────────────────────────────────────
  readonly list = signal<Consent[]>([]);
  readonly loading = signal(true);

  // ── UI state signals ────────────────────────────────────────────────────
  readonly searchQuery = signal('');
  readonly sortBy = signal<SortOption>('date');
  readonly sortAsc = signal(false); // false = descending (Date ↓ default)

  // ── Derived filtered + sorted list ──────────────────────────────────────
  readonly filteredList = computed<Consent[]>(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const sort = this.sortBy();
    const asc = this.sortAsc();

    let result = this.list().filter((c) => {
      if (!q) return true;
      const inName = c.consentName?.toLowerCase().includes(q);
      const inId   = c.consentId?.toLowerCase().includes(q);
      const inRule = c.linkedRule?.ruleName?.toLowerCase().includes(q);
      const inCat  = c.category?.toLowerCase().includes(q);
      return inName || inId || inRule || inCat;
    });

    result = [...result].sort((a, b) => {
      if (sort === 'name') {
        return (a.consentName ?? '').localeCompare(b.consentName ?? '');
      }
      if (sort === 'type') {
        return (a.type ?? '').localeCompare(b.type ?? '');
      }
      const tA = new Date(a.submittedAt ?? 0).getTime();
      const tB = new Date(b.submittedAt ?? 0).getTime();
      return asc ? tA - tB : tB - tA;
    });

    return result;
  });

  // ── Shared helpers ──────────────────────────────────────────────────────
  readonly getChannels = getChannels;
  readonly channelChipLabel = CHANNEL_CHIP_LABEL;

  // ──────────────────────────────────────────────────────────────────────
  ngOnInit(): void {
    this.reload();
  }

  // ── Data reload ─────────────────────────────────────────────────────────
  reload(): void {
    this.loading.set(true);
    this.consentApi.getLinkedPendingApprovals().subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data) {
          this.list.set(res.data);
        }
      },
      error: () => this.loading.set(false),
    });
  }

  // ── Sort button handler ─────────────────────────────────────────────────
  onSortBtnClick(val: SortOption): void {
    if (this.sortBy() === val && val === 'date') {
      this.sortAsc.update(v => !v);
    }
    this.sortBy.set(val);
  }

  /** Apply button handler — sort is already reactive via signals. */
  applySort(): void {
    // No-op: filteredList() reacts to sortBy() and sortAsc() automatically.
  }

  /** Checker-facing label for consent workflow status on the linked queue. */
  linkedConsentStatusLabel(status: string | undefined): string {
    switch (status) {
      case 'PENDING_APPROVAL':   return 'Pending approval';
      case 'REVISION_REQUESTED': return 'Revision requested';
      default:                   return status ?? '—';
    }
  }
}