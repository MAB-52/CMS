// import { DatePipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { AdminConsentTemplate, CaptureConsentSearchResult, customerConsentStatusLabel } from '../../../core/models/admin.model';
// import { CustomerConsentRecordRow } from '../../../core/models/customer-consent-record.model';
// import { AdminService } from '../../../core/services/admin.service';
// import { CustomerConsentRecordService } from '../../../core/services/customer-consent-record.service';
// import { NotificationService } from '../../../core/services/notification.service';
// import { LoggerService } from '../../../core/services/logger.service';
// import { Component, OnInit, inject, signal, computed } from '@angular/core';

// const MODE_OPTIONS = ['Digital In-person', 'Verbal', 'Written'] as const;
// const SOURCE_OPTIONS = ['Branch Walk-in', 'Call Centre', 'Field Agent'] as const;

// @Component({
//   selector: 'app-admin-capture-consent',
//   standalone: true,
//   imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule, MatExpansionModule, DatePipe, SlicePipe, UpperCasePipe, LowerCasePipe],
//   templateUrl: './admin-capture-consent.component.html',
//   styleUrl: './admin-capture-consent.component.scss',
// })
// export class AdminCaptureConsentComponent implements OnInit {
//   private readonly adminApi = inject(AdminService);
//   private readonly consentRecordsApi = inject(CustomerConsentRecordService);
//   private readonly notify = inject(NotificationService);
//   private readonly logger = inject(LoggerService);

//   readonly consentStatusLabel = customerConsentStatusLabel;

//   readonly templates = signal<AdminConsentTemplate[]>([]);
//   readonly searchQuery = signal('');
//   readonly searchBusy = signal(false);
//   readonly customer = signal<CaptureConsentSearchResult | null>(null);

//   readonly consentHistory = signal<CustomerConsentRecordRow[]>([]);
//   readonly consentHistoryLoading = signal(false);

//   readonly leftTemplateId = signal<number | null>(null);
//   readonly deliveryChannels = signal<string[]>([]);
//   readonly selectedCaptureChannels = signal<string[]>([]);

//   readonly lastInviteLink = signal('');
//   readonly sendBusy = signal(false);

//   readonly rightTemplateId = signal<number | null>(null);
//   readonly rightMode = signal<(typeof MODE_OPTIONS)[number] | ''>('');
//   readonly rightSource = signal<(typeof SOURCE_OPTIONS)[number] | ''>('');
//   readonly evidenceRef = signal('');
//   readonly recordBusy = signal(false);
//   readonly rightConsentStatus = signal<string>('');

//   readonly modeOptions = MODE_OPTIONS;
//   readonly sourceOptions = SOURCE_OPTIONS;

//   readonly STATUS_OPTIONS: { value: string; label: string }[] = [
//     { value: 'ACCEPTED', label: 'Accepted' },
//     { value: 'PENDING', label: 'Pending' },
//     { value: 'WITHDRAWN', label: 'Withdrawn' },
//     { value: 'REJECTED', label: 'Rejected' },
//   ];

//   readonly infoMessage = computed(() => {
//     const channels = this.selectedCaptureChannels();
//     const t = this.selectedLeftTemplateName();
//     if (!channels.length || !t) return '';
//     return `We will email a secure link to the customer's registered address. Channels recorded for this consent: ${channels.join(', ')}.`;
//   });

//   readonly channelSelectionHint = computed(() => {
//     const allowed = this.deliveryChannels();
//     if (!allowed.length) return '';
//     const hasEmailOnTemplate = allowed.some((c) => /email/i.test(c));
//     if (!hasEmailOnTemplate) {
//       return 'This template does not include Email. Use another capture method or add Email to the template.';
//     }
//     return 'Select one or more channels allowed for this template. Email must be selected so the secure link can be delivered.';
//   });

//   readonly canCopyLink = computed(() => !!this.lastInviteLink().trim());

//   ngOnInit(): void {
//     this.adminApi.listConsentTemplates().subscribe({
//       next: (res) => {
//         if (res.success && res.data) this.templates.set(res.data);
//       },
//       error: (err) => {
//         this.logger.error('AdminCaptureConsent', 'templates failed', err);
//         this.notify.error('Templates', err?.error?.message || 'Could not load consent templates.');
//       },
//     });
//   }

//   selectedLeftTemplateName(): string {
//     const id = this.leftTemplateId();
//     if (id == null) return '';
//     return this.templates().find((x) => x.id === id)?.consentName ?? '';
//   }

//   selectedRightConsentType(): string {
//     const id = this.rightTemplateId();
//     if (id == null) return '';
//     return this.templates().find((x) => x.id === id)?.consentName ?? '';
//   }

//   onLeftTemplateChange(value: string): void {
//     const id = this.parseSelectNumber(value);
//     this.leftTemplateId.set(id);
//     this.lastInviteLink.set('');
//     this.selectedCaptureChannels.set([]);
//     if (id != null) {
//       const tpl = this.templates().find((x) => x.id === id);
//       const channels: string[] = [];
//       if (tpl?.channelEmail)    channels.push('EMAIL');
//       if (tpl?.channelSms)      channels.push('SMS');
//       if (tpl?.channelPush)     channels.push('PUSH');
//       if (tpl?.channelWhatsapp) channels.push('WHATSAPP');
//       if (tpl?.channelRcs)      channels.push('RCS');
//       this.deliveryChannels.set(channels);
//     } else {
//       this.deliveryChannels.set([]);
//     }
//   }

//   isChannelSelected(ch: string): boolean {
//     return this.selectedCaptureChannels().includes(ch);
//   }

//   toggleChannel(ch: string, checked: boolean): void {
//     const allowed = this.deliveryChannels();
//     const set = new Set(this.selectedCaptureChannels());
//     if (checked) set.add(ch);
//     else set.delete(ch);
//     const ordered = allowed.filter((x) => set.has(x));
//     this.selectedCaptureChannels.set(ordered);
//     this.resetLinkOnLeftChange();
//   }

//   private selectionIncludesEmail(): boolean {
//     return this.selectedCaptureChannels().some((c) => /email/i.test(c));
//   }

//   onSearch(): void {
//     const q = this.searchQuery().trim();
//     if (!q) {
//       this.notify.warning('Search', 'Enter a Customer ID or mobile number.');
//       return;
//     }
//     this.searchBusy.set(true);
//     this.customer.set(null);
//     this.consentHistory.set([]);
//     this.lastInviteLink.set('');
//     this.adminApi.captureSearch(q).subscribe({
//       next: (res) => {
//         this.searchBusy.set(false);
//         if (!res.success || !res.data) {
//           this.notify.warning('Search', res.message || 'No customer found.');
//           return;
//         }
//         this.customer.set(res.data);
//         this.loadConsentHistory(res.data.customerId);
//       },
//       error: (err) => {
//         this.searchBusy.set(false);
//         const msg = err?.error?.message || err?.message || 'Search failed.';
//         this.logger.error('AdminCaptureConsent', 'search failed', err);
//         this.notify.error('Search', msg);
//       },
//     });
//   }

//   copyLink(): void {
//     const link = this.lastInviteLink();
//     if (!link) {
//       this.notify.info('Copy link', 'Send the request first to generate a link.');
//       return;
//     }
//     void navigator.clipboard.writeText(link).then(
//       () => this.notify.success('Copied', 'Consent link copied to clipboard.'),
//       () => this.notify.error('Copy failed', 'Clipboard access was denied.'),
//     );
//   }

//   sendLink(): void {
//     const cust = this.customer();
//     const tid = this.leftTemplateId();
//     const selected = this.selectedCaptureChannels();
//     if (!cust) { this.notify.warning('Send', 'Search and select a customer first.'); return; }
//     if (tid == null) { this.notify.warning('Send', 'Select a consent template.'); return; }
//     if (!selected.length) { this.notify.warning('Send', 'Select at least one delivery channel.'); return; }
//     if (!this.selectionIncludesEmail()) {
//       this.notify.warning('Send', "Select Email as one of the channels. The secure consent link is delivered to the customer's registered mailbox.");
//       return;
//     }
//     const consentType = this.selectedLeftTemplateName();
//     this.sendBusy.set(true);
//     this.adminApi.sendConsentLink({ customerId: cust.customerId, consentTemplateId: tid, deliveryChannels: [...selected], consentType }).subscribe({
//       next: (res) => {
//         this.sendBusy.set(false);
//         if (!res.success || !res.data) { this.notify.error('Send', res.message || 'Send failed.'); return; }
//         this.lastInviteLink.set(res.data.inviteLink || '');
//         this.notify.success('Sent', res.data.message || res.message || 'Email dispatched.');
//       },
//       error: (err) => {
//         this.sendBusy.set(false);
//         this.logger.error('AdminCaptureConsent', 'send-link failed', err);
//         const msg = err?.error?.message || err?.message || 'Could not send consent link.';
//         this.notify.error(err?.status === 503 ? 'Email delivery failed' : 'Send', msg);
//       },
//     });
//   }

//   recordConsent(): void {
//     const cust = this.customer();
//     if (!cust) { this.notify.warning('Record', 'Search for a customer first.'); return; }
//     const tid = this.rightTemplateId();
//     const mode = this.rightMode();
//     const source = this.rightSource();
//     const status = this.rightConsentStatus();
//     if (tid == null || !mode || !source || !status) {
//       this.notify.warning('Record', 'Select consent type, mode, source channel, and consent status.');
//       return;
//     }
//     const consentType = this.selectedRightConsentType();
//     this.recordBusy.set(true);
//     this.adminApi.recordOnBehalf({
//       customerId: cust.customerId,
//       consentType,
//       consentTemplateId: tid!,
//       mode,
//       sourceChannel: source,
//       consentStatus: status,
//       evidenceReference: this.evidenceRef().trim() || undefined,
//     }).subscribe({
//       next: (res) => {
//         this.recordBusy.set(false);
//         if (!res.success) { this.notify.error('Record', res.message || 'Record failed.'); return; }
//         this.customer.set({ ...cust, consentStatus: status });
//         this.notify.success('Recorded', res.message || 'On-behalf consent recorded successfully.');
//       },
//       error: (err) => {
//         this.recordBusy.set(false);
//         this.logger.error('AdminCaptureConsent', 'record failed', err);
//         const msg = err?.error?.message || err?.error?.errors?.consentStatus || err?.message || 'Could not record consent.';
//         this.notify.error('Record', msg);
//       },
//     });
//   }

//   resetLinkOnLeftChange(): void {
//     this.lastInviteLink.set('');
//   }

//   parseSelectNumber(v: string): number | null {
//     const n = Number(v);
//     return Number.isFinite(n) && n > 0 ? n : null;
//   }

//   recordStatusClass(status: string): string {
//     const map: Record<string, string> = {
//       ACCEPTED: 'ccr-pill ccr-pill--accepted',
//       REJECTED: 'ccr-pill ccr-pill--rejected',
//       WITHDRAWN: 'ccr-pill ccr-pill--withdrawn',
//       PENDING: 'ccr-pill ccr-pill--pending',
//       EXPIRING_SOON: 'ccr-pill ccr-pill--expiring',
//       EXPIRED: 'ccr-pill ccr-pill--expired',
//     };
//     return map[status] ?? 'ccr-pill';
//   }

//   private loadConsentHistory(customerId: string): void {
//     this.consentHistoryLoading.set(true);
//     this.consentRecordsApi.getRecordsByCustomer(customerId).subscribe({
//       next: (res) => {
//         this.consentHistoryLoading.set(false);
//         this.consentHistory.set(res.success && res.data ? res.data : []);
//       },
//       error: () => {
//         this.consentHistoryLoading.set(false);
//         this.consentHistory.set([]);
//       },
//     });
//   }

//   channelLabel(ch: string): string {
//     const labels: Record<string, string> = { EMAIL: 'Email', SMS: 'SMS', PUSH: 'Push', WHATSAPP: 'WhatsApp', RCS: 'RCS' };
//     return labels[ch] ?? ch;
//   }
// }

import { DatePipe, SlicePipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  AdminConsentTemplate,
  CaptureConsentSearchResult,
  customerConsentStatusLabel,
} from '../../../core/models/admin.model';
import { CustomerConsentRecordRow } from '../../../core/models/customer-consent-record.model';
import { AdminService } from '../../../core/services/admin.service';
import { CustomerConsentRecordService } from '../../../core/services/customer-consent-record.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';
import { Component, OnInit, inject, signal, computed } from '@angular/core';

const MODE_OPTIONS    = ['Digital In-person', 'Verbal', 'Written'] as const;
const SOURCE_OPTIONS  = ['Branch Walk-in', 'Call Centre', 'Field Agent'] as const;

const ALL_LANGUAGES = [
  'english', 'hindi', 'marathi', 'gujarati',
  'bengali', 'tamil', 'telugu', 'malayalam', 'urdu',
];

@Component({
  selector: 'app-admin-capture-consent',
  standalone: true,
  imports: [
    FormsModule, MatButtonModule, MatProgressSpinnerModule,
    MatExpansionModule, DatePipe, SlicePipe, UpperCasePipe, LowerCasePipe,
  ],
  templateUrl: './admin-capture-consent.component.html',
  styleUrl:    './admin-capture-consent.component.scss',
})
export class AdminCaptureConsentComponent implements OnInit {

  private readonly adminApi          = inject(AdminService);
  private readonly consentRecordsApi = inject(CustomerConsentRecordService);
  private readonly notify            = inject(NotificationService);
  private readonly logger            = inject(LoggerService);

  readonly consentStatusLabel = customerConsentStatusLabel;

  // ── Shared ────────────────────────────────────────────────────────────────
  readonly templates     = signal<AdminConsentTemplate[]>([]);
  readonly searchQuery   = signal('');
  readonly searchBusy    = signal(false);
  readonly customer      = signal<CaptureConsentSearchResult | null>(null);
  readonly consentHistory        = signal<CustomerConsentRecordRow[]>([]);
  readonly consentHistoryLoading = signal(false);

  // ── Send link (left panel) ────────────────────────────────────────────────
  readonly leftTemplateId          = signal<number | null>(null);
  readonly deliveryChannels        = signal<string[]>([]);
  readonly selectedCaptureChannels = signal<string[]>([]);
  readonly lastInviteLink          = signal('');
  readonly sendBusy                = signal(false);

  // ── On-behalf (right panel) ───────────────────────────────────────────────
  readonly rightTemplateId     = signal<number | null>(null);
  readonly rightMode           = signal<(typeof MODE_OPTIONS)[number] | ''>('');
  readonly rightSource         = signal<(typeof SOURCE_OPTIONS)[number] | ''>('');
  readonly evidenceRef         = signal('');
  readonly recordBusy          = signal(false);
  readonly rightConsentStatus  = signal<string>('');

  // Channels for on-behalf panel — derived from selected template
  readonly rightAvailableChannels  = signal<string[]>([]);
  readonly rightSelectedChannels   = signal<string[]>([]);

  // Languages — all are always available; pre-populate from existing prefs
  readonly allLanguages            = ALL_LANGUAGES;
  readonly rightSelectedLanguages  = signal<string[]>([]);

  readonly modeOptions   = MODE_OPTIONS;
  readonly sourceOptions = SOURCE_OPTIONS;

  readonly STATUS_OPTIONS: { value: string; label: string }[] = [
    { value: 'ACCEPTED',  label: 'Accepted'  },
    { value: 'PENDING',   label: 'Pending'   },
    { value: 'WITHDRAWN', label: 'Withdrawn' },
    { value: 'REJECTED',  label: 'Rejected'  },
  ];

  // ── Computed ──────────────────────────────────────────────────────────────

  readonly infoMessage = computed(() => {
    const channels = this.selectedCaptureChannels();
    const t = this.selectedLeftTemplateName();
    if (!channels.length || !t) return '';
    return `We will email a secure link to the customer's registered address. Channels recorded: ${channels.join(', ')}.`;
  });

  readonly channelSelectionHint = computed(() => {
    const allowed = this.deliveryChannels();
    if (!allowed.length) return '';
    const hasEmail = allowed.some((c) => /email/i.test(c));
    if (!hasEmail) return 'This template does not include Email. Use another capture method or add Email to the template.';
    return 'Select one or more channels. Email must be selected so the secure link can be delivered.';
  });

  readonly canCopyLink = computed(() => !!this.lastInviteLink().trim());

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  ngOnInit(): void {
    this.adminApi.listConsentTemplates().subscribe({
      next: (res) => { if (res.success && res.data) this.templates.set(res.data); },
      error: (err) => {
        this.logger.error('AdminCaptureConsent', 'templates failed', err);
        this.notify.error('Templates', err?.error?.message || 'Could not load consent templates.');
      },
    });
  }

  // ── Template name helpers ─────────────────────────────────────────────────

  selectedLeftTemplateName(): string {
    const id = this.leftTemplateId();
    if (id == null) return '';
    return this.templates().find((x) => x.id === id)?.consentName ?? '';
  }

  selectedRightConsentType(): string {
    const id = this.rightTemplateId();
    if (id == null) return '';
    return this.templates().find((x) => x.id === id)?.consentName ?? '';
  }

  // ── Left panel: send link ─────────────────────────────────────────────────

  onLeftTemplateChange(value: string): void {
    const id = this.parseSelectNumber(value);
    this.leftTemplateId.set(id);
    this.lastInviteLink.set('');
    this.selectedCaptureChannels.set([]);
    if (id != null) {
      const tpl = this.templates().find((x) => x.id === id);
      const channels: string[] = [];
      if (tpl?.channelEmail)    channels.push('EMAIL');
      if (tpl?.channelSms)      channels.push('SMS');
      if (tpl?.channelPush)     channels.push('PUSH');
      if (tpl?.channelWhatsapp) channels.push('WHATSAPP');
      if (tpl?.channelRcs)      channels.push('RCS');
      this.deliveryChannels.set(channels);
    } else {
      this.deliveryChannels.set([]);
    }
  }

  isChannelSelected(ch: string): boolean {
    return this.selectedCaptureChannels().includes(ch);
  }

  toggleChannel(ch: string, checked: boolean): void {
    const allowed = this.deliveryChannels();
    const set = new Set(this.selectedCaptureChannels());
    if (checked) set.add(ch); else set.delete(ch);
    this.selectedCaptureChannels.set(allowed.filter((x) => set.has(x)));
    this.resetLinkOnLeftChange();
  }

  private selectionIncludesEmail(): boolean {
    return this.selectedCaptureChannels().some((c) => /email/i.test(c));
  }

  // ── Right panel: on-behalf template change ────────────────────────────────

  // onRightTemplateChange(value: string): void {
  //   const id = this.parseSelectNumber(value);
  //   this.rightTemplateId.set(id);
  //   this.rightSelectedChannels.set([]);
  //   this.rightSelectedLanguages.set([]);
  //   this.rightAvailableChannels.set([]);

  //   if (id == null) return;

  //   const tpl = this.templates().find((x) => x.id === id);
  //   const channels: string[] = [];
  //   if (tpl?.channelEmail)    channels.push('EMAIL');
  //   if (tpl?.channelSms)      channels.push('SMS');
  //   if (tpl?.channelPush)     channels.push('PUSH');
  //   if (tpl?.channelWhatsapp) channels.push('WHATSAPP');
  //   if (tpl?.channelRcs)      channels.push('RCS');
  //   this.rightAvailableChannels.set(channels);

  //   const cust = this.customer();
  //   if (!cust) return;

  //   // Load existing channel preferences for this customer+template
  //   this.adminApi.getChannelPreferenceForAdmin(cust.customerId, id).subscribe({
  //     next: (res) => {
  //       if (!res.success || !res.data) return;
  //       const d = res.data;
  //       const pre: string[] = [];
  //       if (d.prefEmail)    pre.push('EMAIL');
  //       if (d.prefSms)      pre.push('SMS');
  //       if (d.prefPush)     pre.push('PUSH');
  //       if (d.prefWhatsapp) pre.push('WHATSAPP');
  //       if (d.prefRcs)      pre.push('RCS');
  //       // Only pre-select channels that are still on the template
  //       this.rightSelectedChannels.set(pre.filter((c) => channels.includes(c)));
  //     },
  //     error: () => { /* non-fatal — just no pre-selection */ },
  //   });

  //   // Load existing language preferences for this customer+template
  //   this.adminApi.getLanguagePreferenceForAdmin(cust.customerId, id).subscribe({
  //     next: (res) => {
  //       if (res.success && res.data) this.rightSelectedLanguages.set(res.data);
  //     },
  //     error: () => { /* non-fatal */ },
  //   });
  // }

  // ── Right panel: on-behalf template change ────────────────────────────────

  onRightTemplateChange(value: string): void {
    const id = this.parseSelectNumber(value);
    this.rightTemplateId.set(id);
    this.rightSelectedChannels.set([]);
    this.rightSelectedLanguages.set([]);
    this.rightAvailableChannels.set([]);

    if (id == null) return;

    // Build available channels from template boolean flags
    const tpl = this.templates().find((x) => x.id === id);
    const channels: string[] = [];
    if (tpl?.channelEmail)    channels.push('EMAIL');
    if (tpl?.channelSms)      channels.push('SMS');
    if (tpl?.channelPush)     channels.push('PUSH');
    if (tpl?.channelWhatsapp) channels.push('WHATSAPP');
    if (tpl?.channelRcs)      channels.push('RCS');

    // Set available channels BEFORE making API calls
    this.rightAvailableChannels.set(channels);

    const cust = this.customer();
    if (!cust) return;

    // Load existing channel preferences — use this.rightAvailableChannels()
    // (signal read) inside subscribe so we always get the latest value,
    // not a stale closure variable.
    this.adminApi.getChannelPreferenceForAdmin(cust.customerId, id).subscribe({
      next: (res) => {
        if (!res.success || !res.data) return;
        const d = res.data;
        const pre: string[] = [];
        if (d.prefEmail)    pre.push('EMAIL');
        if (d.prefSms)      pre.push('SMS');
        if (d.prefPush)     pre.push('PUSH');
        if (d.prefWhatsapp) pre.push('WHATSAPP');
        if (d.prefRcs)      pre.push('RCS');

        // Filter against the signal read (not closure) to get latest available channels
        const available = this.rightAvailableChannels();
        this.rightSelectedChannels.set(pre.filter((c) => available.includes(c)));
      },
      error: () => { /* non-fatal */ },
    });

    // Load existing language preferences
    this.adminApi.getLanguagePreferenceForAdmin(cust.customerId, id).subscribe({
      next: (res) => {
        if (res.success && res.data && res.data.length > 0) {
          this.rightSelectedLanguages.set(res.data);
        }
      },
      error: () => { /* non-fatal */ },
    });
  }

  isRightChannelSelected(ch: string): boolean {
    return this.rightSelectedChannels().includes(ch);
  }

  toggleRightChannel(ch: string, checked: boolean): void {
    const set = new Set(this.rightSelectedChannels());
    if (checked) set.add(ch); else set.delete(ch);
    // Preserve template order
    this.rightSelectedChannels.set(
      this.rightAvailableChannels().filter((c) => set.has(c))
    );
  }

  isLanguageSelected(lang: string): boolean {
    return this.rightSelectedLanguages().includes(lang);
  }

  toggleLanguage(lang: string, checked: boolean): void {
    const set = new Set(this.rightSelectedLanguages());
    if (checked) set.add(lang); else set.delete(lang);
    this.rightSelectedLanguages.set(this.allLanguages.filter((l) => set.has(l)));
  }

  formatLanguage(lang: string): string {
    return lang.charAt(0).toUpperCase() + lang.slice(1);
  }

  channelLabel(ch: string): string {
    const labels: Record<string, string> = {
      EMAIL: 'Email', SMS: 'SMS', PUSH: 'Push', WHATSAPP: 'WhatsApp', RCS: 'RCS',
    };
    return labels[ch] ?? ch;
  }

  // ── Search ────────────────────────────────────────────────────────────────

  onSearch(): void {
    const q = this.searchQuery().trim();
    if (!q) { this.notify.warning('Search', 'Enter a Customer ID or mobile number.'); return; }
    this.searchBusy.set(true);
    this.customer.set(null);
    this.consentHistory.set([]);
    this.lastInviteLink.set('');
    this.adminApi.captureSearch(q).subscribe({
      next: (res) => {
        this.searchBusy.set(false);
        if (!res.success || !res.data) { this.notify.warning('Search', res.message || 'No customer found.'); return; }
        this.customer.set(res.data);
        this.loadConsentHistory(res.data.customerId);
      },
      error: (err) => {
        this.searchBusy.set(false);
        this.logger.error('AdminCaptureConsent', 'search failed', err);
        this.notify.error('Search', err?.error?.message || err?.message || 'Search failed.');
      },
    });
  }

  // ── Copy link ─────────────────────────────────────────────────────────────

  copyLink(): void {
    const link = this.lastInviteLink();
    if (!link) { this.notify.info('Copy link', 'Send the request first to generate a link.'); return; }
    void navigator.clipboard.writeText(link).then(
      () => this.notify.success('Copied', 'Consent link copied to clipboard.'),
      () => this.notify.error('Copy failed', 'Clipboard access was denied.'),
    );
  }

  // ── Send link ─────────────────────────────────────────────────────────────

  sendLink(): void {
    const cust = this.customer();
    const tid  = this.leftTemplateId();
    const selected = this.selectedCaptureChannels();
    if (!cust)          { this.notify.warning('Send', 'Search and select a customer first.'); return; }
    if (tid == null)    { this.notify.warning('Send', 'Select a consent template.'); return; }
    if (!selected.length) { this.notify.warning('Send', 'Select at least one delivery channel.'); return; }
    if (!this.selectionIncludesEmail()) {
      this.notify.warning('Send', "Select Email as one of the channels. The secure consent link is delivered to the customer's registered mailbox.");
      return;
    }
    this.sendBusy.set(true);
    this.adminApi.sendConsentLink({
      customerId: cust.customerId,
      consentTemplateId: tid,
      deliveryChannels: [...selected],
      consentType: this.selectedLeftTemplateName(),
    }).subscribe({
      next: (res) => {
        this.sendBusy.set(false);
        if (!res.success || !res.data) { this.notify.error('Send', res.message || 'Send failed.'); return; }
        this.lastInviteLink.set(res.data.inviteLink || '');
        this.notify.success('Sent', res.data.message || res.message || 'Email dispatched.');
      },
      error: (err) => {
        this.sendBusy.set(false);
        this.logger.error('AdminCaptureConsent', 'send-link failed', err);
        this.notify.error(err?.status === 503 ? 'Email delivery failed' : 'Send',
          err?.error?.message || err?.message || 'Could not send consent link.');
      },
    });
  }

  // ── Record on-behalf ──────────────────────────────────────────────────────

  recordConsent(): void {
    const cust   = this.customer();
    const tid    = this.rightTemplateId();
    const mode   = this.rightMode();
    const source = this.rightSource();
    const status = this.rightConsentStatus();

    if (!cust) { this.notify.warning('Record', 'Search for a customer first.'); return; }
    if (tid == null || !mode || !source || !status) {
      this.notify.warning('Record', 'Select consent type, mode, source channel, and consent status.');
      return;
    }

    this.recordBusy.set(true);
    this.adminApi.recordOnBehalf({
      customerId:         cust.customerId,
      consentType:        this.selectedRightConsentType(),
      consentTemplateId:  tid!,
      mode,
      sourceChannel:      source,
      consentStatus:      status,
      evidenceReference:  this.evidenceRef().trim() || undefined,
      selectedChannels:   this.rightSelectedChannels().length
                            ? [...this.rightSelectedChannels()]
                            : undefined,
      selectedLanguages:  this.rightSelectedLanguages().length
                            ? [...this.rightSelectedLanguages()]
                            : undefined,
    }).subscribe({
      next: (res) => {
        this.recordBusy.set(false);
        if (!res.success) { this.notify.error('Record', res.message || 'Record failed.'); return; }
        this.customer.set({ ...cust, consentStatus: status });
        // Refresh consent history to show new entry
        this.loadConsentHistory(cust.customerId);
        this.notify.success('Recorded', res.message || 'On-behalf consent recorded successfully.');
      },
      error: (err) => {
        this.recordBusy.set(false);
        this.logger.error('AdminCaptureConsent', 'record failed', err);
        this.notify.error('Record',
          err?.error?.message || err?.error?.errors?.consentStatus || err?.message || 'Could not record consent.');
      },
    });
  }

  // ── Misc helpers ──────────────────────────────────────────────────────────

  resetLinkOnLeftChange(): void { this.lastInviteLink.set(''); }

  parseSelectNumber(v: string): number | null {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : null;
  }

  recordStatusClass(status: string): string {
    const map: Record<string, string> = {
      ACCEPTED:      'ccr-pill ccr-pill--accepted',
      REJECTED:      'ccr-pill ccr-pill--rejected',
      WITHDRAWN:     'ccr-pill ccr-pill--withdrawn',
      PENDING:       'ccr-pill ccr-pill--pending',
      EXPIRING_SOON: 'ccr-pill ccr-pill--expiring',
      EXPIRED:       'ccr-pill ccr-pill--expired',
    };
    return map[status] ?? 'ccr-pill';
  }

  private loadConsentHistory(customerId: string): void {
    this.consentHistoryLoading.set(true);
    this.consentRecordsApi.getRecordsByCustomer(customerId).subscribe({
      next: (res) => {
        this.consentHistoryLoading.set(false);
        this.consentHistory.set(res.success && res.data ? res.data : []);
      },
      error: () => {
        this.consentHistoryLoading.set(false);
        this.consentHistory.set([]);
      },
    });
  }
}