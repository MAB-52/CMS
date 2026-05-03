import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminConsentTemplate, CaptureConsentSearchResult } from '../../../core/models/admin.model';
import { AdminService } from '../../../core/services/admin.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';

const MODE_OPTIONS = ['Digital In-person', 'Verbal', 'Written'] as const;
const SOURCE_OPTIONS = ['Branch Walk-in', 'Call Centre', 'Field Agent'] as const;

@Component({
  selector: 'app-admin-capture-consent',
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './admin-capture-consent.component.html',
  styleUrl: './admin-capture-consent.component.scss',
})
export class AdminCaptureConsentComponent implements OnInit {
  private readonly adminApi = inject(AdminService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  readonly templates = signal<AdminConsentTemplate[]>([]);
  readonly searchQuery = signal('');
  readonly searchBusy = signal(false);
  readonly customer = signal<CaptureConsentSearchResult | null>(null);

  readonly leftTemplateId = signal<number | null>(null);
  readonly leftDelivery = signal<string>('');
  readonly deliveryChannels = signal<string[]>([]);

  readonly lastInviteLink = signal('');
  readonly sendBusy = signal(false);

  readonly rightTemplateId = signal<number | null>(null);
  readonly rightMode = signal<(typeof MODE_OPTIONS)[number] | ''>('');
  readonly rightSource = signal<(typeof SOURCE_OPTIONS)[number] | ''>('');
  readonly evidenceRef = signal('');
  readonly recordBusy = signal(false);

  readonly modeOptions = MODE_OPTIONS;
  readonly sourceOptions = SOURCE_OPTIONS;

  readonly infoMessage = computed(() => {
    const d = this.leftDelivery();
    const t = this.selectedLeftTemplateName();
    if (!d || !t) {
      return '';
    }
    return `We will send a consent request to the customer's registered email, asking for their permission to contact them via ${d} for ${t}.`;
  });

  readonly canCopyLink = computed(() => !!this.lastInviteLink().trim());

  ngOnInit(): void {
    this.adminApi.listConsentTemplates().subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.templates.set(res.data);
        }
      },
      error: (err) => {
        this.logger.error('AdminCaptureConsent', 'templates failed', err);
        this.notify.error('Templates', err?.error?.message || 'Could not load consent templates.');
      },
    });
  }

  selectedLeftTemplateName(): string {
    const id = this.leftTemplateId();
    if (id == null) {
      return '';
    }
    return this.templates().find((x) => x.id === id)?.consentName ?? '';
  }

  selectedRightConsentType(): string {
    const id = this.rightTemplateId();
    if (id == null) {
      return '';
    }
    return this.templates().find((x) => x.id === id)?.consentName ?? '';
  }

  onLeftTemplateChange(value: string): void {
    const id = this.parseSelectNumber(value);
    this.leftTemplateId.set(id);
    this.lastInviteLink.set('');
    this.leftDelivery.set('');

    if (id != null) {
      const tpl = this.templates().find((x) => x.id === id);
      this.deliveryChannels.set(tpl?.deliveryChannels ?? []);
    } else {
      this.deliveryChannels.set([]);
    }
  }

  onSearch(): void {
    const q = this.searchQuery().trim();
    if (!q) {
      this.notify.warning('Search', 'Enter a Customer ID or mobile number.');
      return;
    }
    this.searchBusy.set(true);
    this.customer.set(null);
    this.lastInviteLink.set('');
    this.adminApi.captureSearch(q).subscribe({
      next: (res) => {
        this.searchBusy.set(false);
        if (!res.success || !res.data) {
          this.notify.warning('Search', res.message || 'No customer found.');
          return;
        }
        this.customer.set(res.data);
      },
      error: (err) => {
        this.searchBusy.set(false);
        const msg = err?.error?.message || err?.message || 'Search failed.';
        this.logger.error('AdminCaptureConsent', 'search failed', err);
        this.notify.error('Search', msg);
      },
    });
  }

  copyLink(): void {
    const link = this.lastInviteLink();
    if (!link) {
      this.notify.info('Copy link', 'Send the request first to generate a link.');
      return;
    }
    void navigator.clipboard.writeText(link).then(
      () => this.notify.success('Copied', 'Consent link copied to clipboard.'),
      () => this.notify.error('Copy failed', 'Clipboard access was denied.'),
    );
  }

  sendLink(): void {
    const cust = this.customer();
    const tid = this.leftTemplateId();
    const delivery = this.leftDelivery();
    if (!cust) {
      this.notify.warning('Send', 'Search and select a customer first.');
      return;
    }
    if (tid == null || !delivery) {
      this.notify.warning('Send', 'Select consent type and delivery channel.');
      return;
    }
    const consentType = this.selectedLeftTemplateName();
    this.sendBusy.set(true);
    this.adminApi
      .sendConsentLink({
        customerId: cust.customerId,
        consentTemplateId: tid,
        deliveryChannel: delivery,
        consentType,
      })
      .subscribe({
        next: (res) => {
          this.sendBusy.set(false);
          if (!res.success || !res.data) {
            this.notify.error('Send', res.message || 'Send failed.');
            return;
          }
          this.lastInviteLink.set(res.data.inviteLink || '');
          this.notify.success('Sent', res.data.message || res.message || 'Email dispatched.');
        },
        error: (err) => {
          this.sendBusy.set(false);
          this.logger.error('AdminCaptureConsent', 'send-link failed', err);
          const msg = err?.error?.message || err?.message || 'Could not send consent link.';
          if (err?.status === 503) {
            this.notify.error('Email delivery failed', msg);
          } else {
            this.notify.error('Send', msg);
          }
        },
      });
  }

  recordConsent(): void {
    const cust = this.customer();
    if (!cust) {
      this.notify.warning('Record', 'Search for a customer in the left panel first.');
      return;
    }
    const tid = this.rightTemplateId();
    const mode = this.rightMode();
    const source = this.rightSource();
    if (tid == null || !mode || !source) {
      this.notify.warning('Record', 'Select consent type, mode, and source channel.');
      return;
    }
    const consentType = this.selectedRightConsentType();
    this.recordBusy.set(true);
    this.adminApi
      .recordOnBehalf({
        customerId: cust.customerId,
        consentType,
        mode,
        sourceChannel: source,
        evidenceReference: this.evidenceRef().trim() || undefined,
      })
      .subscribe({
        next: (res) => {
          this.recordBusy.set(false);
          if (!res.success) {
            this.notify.error('Record', res.message || 'Record failed.');
            return;
          }
          this.notify.success('Recorded', res.message || 'On-behalf consent recorded.');
        },
        error: (err) => {
          this.recordBusy.set(false);
          this.logger.error('AdminCaptureConsent', 'record failed', err);
          this.notify.error('Record', err?.error?.message || 'Could not record consent.');
        },
      });
  }

  resetLinkOnLeftChange(): void {
    this.lastInviteLink.set('');
  }

  parseSelectNumber(v: string): number | null {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : null;
  }
}