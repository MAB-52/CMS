import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Consent, ConsentStatus } from '../../../core/models/consent.model';
import { ConsentService } from '../../../core/services/consent.service';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { StatusBadgeComponent } from '../../../shared/components/status-badge/status-badge.component';
import { ConsentTypeLabelPipe } from '../../../shared/pipes/consent-type-label.pipe';
import { TimeAgoPipe } from '../../../shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-my-consents',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    StatusBadgeComponent,
    ConsentTypeLabelPipe,
    TimeAgoPipe,
  ],
  templateUrl: './my-consents.component.html',
  styleUrl: './my-consents.component.scss',
})
export class MyConsentsComponent implements OnInit {
  private readonly api = inject(ConsentService);
  private readonly auth = inject(AuthService);
  private readonly notify = inject(NotificationService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly rows = signal<Consent[]>([]);
  readonly loading = signal(true);
  readonly filter = signal<ConsentStatus | 'ALL'>('ALL');
  search = '';
  sort: 'updated' | 'name' = 'updated';

  readonly tabs: { key: ConsentStatus | 'ALL'; label: string }[] = [
    { key: 'ALL', label: 'All' },
    { key: 'DRAFT', label: 'Draft' },
    { key: 'PENDING_APPROVAL', label: 'Pending' },
    { key: 'APPROVED', label: 'Approved' },
    { key: 'PUBLISHED', label: 'Published' },
    { key: 'REVISION_REQUESTED', label: 'Revision' },
  ];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((q) => {
      const s = q.get('status') as ConsentStatus | null;
      if (s && this.tabs.some((t) => t.key === s)) {
        this.filter.set(s);
      }
    });
    this.reload();
  }

  setFilter(k: ConsentStatus | 'ALL'): void {
    this.filter.set(k);
    void this.router.navigate([], { relativeTo: this.route, queryParams: k === 'ALL' ? {} : { status: k } });
    this.reload();
  }

  reload(): void {
    this.loading.set(true);
    const st = this.filter();
    this.api.getMyConsents(0, 50, st === 'ALL' ? undefined : st).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (res.success && res.data?.content) {
          let list = res.data.content;
          const q = this.search.trim().toLowerCase();
          if (q) {
            list = list.filter(
              (c) => c.consentName.toLowerCase().includes(q) || c.consentId.toLowerCase().includes(q),
            );
          }
          if (this.sort === 'name') {
            list = [...list].sort((a, b) => a.consentName.localeCompare(b.consentName));
          } else {
            list = [...list].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
          }
          this.rows.set(list);
        }
      },
      error: () => {
        this.loading.set(false);
      },
    });
  }

  isAdmin(): boolean {
    return this.auth.getRole() === 'ADMIN';
  }

  delete(c: Consent): void {
    if (!confirm(`Delete ${c.consentName}?`)) {
      return;
    }
    this.api.deleteConsent(c.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Deleted', res.message || 'Consent removed.');
          this.reload();
        }
      },
    });
  }

  publish(c: Consent): void {
    this.api.publishConsent(c.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Published', res.message || 'Live.');
          this.reload();
        }
      },
    });
  }

  duplicateNav(c: Consent): void {
    void this.router.navigate(['/maker/consents/new'], { state: { from: c } });
  }

  submit(c: Consent): void {
    this.api.submitForApproval(c.id).subscribe({
      next: (res) => {
        if (res.success) {
          this.notify.success('Submitted', res.message || 'Sent for approval.');
          this.reload();
        }
      },
    });
  }
}
