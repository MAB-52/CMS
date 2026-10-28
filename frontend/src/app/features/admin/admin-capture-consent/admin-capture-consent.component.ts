import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { CHANNEL_META, ChannelId, ChannelMeta } from '../../../core/utils/channel.util';
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
    FormsModule,
    DatePipe,
    ButtonModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    TagModule,
    AvatarModule,
    SkeletonModule,
    TooltipModule,
  ],
  templateUrl: './admin-capture-consent.component.html',
  styleUrl: './admin-capture-consent.component.css',
})
export class AdminCaptureConsentComponent implements OnInit {

  private readonly adminApi          = inject(AdminService);
  private readonly consentRecordsApi = inject(CustomerConsentRecordService);
  private readonly notify            = inject(NotificationService);
  private readonly logger            = inject(LoggerService);

  readonly consentStatusLabel = customerConsentStatusLabel;

  // Shared
  readonly templates     = signal<AdminConsentTemplate[]>([]);
  readonly searchQuery   = signal('');
  readonly searchBusy    = signal(false);
  readonly customer      = signal<CaptureConsentSearchResult | null>(null);
  readonly notFoundQuery = signal('');
  readonly consentHistory        = signal<CustomerConsentRecordRow[]>([]);
  readonly consentHistoryLoading = signal(false);

  // Send link (left panel)
  readonly leftTemplateId           = signal<number | null>(null);
  readonly deliveryChannels         = signal<string[]>([]);
  readonly selectedCaptureChannels  = signal<string[]>([]);
  readonly lastInviteLink           = signal('');
  readonly sendBusy                 = signal(false);

  // On-behalf (right panel)
  readonly rightTemplateId      = signal<number | null>(null);
  readonly rightMode            = signal<(typeof MODE_OPTIONS)[number] | ''>('');
  readonly rightSource          = signal<(typeof SOURCE_OPTIONS)[number] | ''>('');
  readonly evidenceRef          = signal('');
  readonly recordBusy           = signal(false);
  readonly rightConsentStatus   = signal<string>('');

  readonly rightAvailableChannels = signal<string[]>([]);
  readonly rightSelectedChannels  = signal<string[]>([]);

  // Languages
  readonly allLanguages            = ALL_LANGUAGES;
  readonly rightSelectedLanguages  = signal<string[]>([]);

  readonly modeOptions   = MODE_OPTIONS;
  readonly sourceOptions = SOURCE_OPTIONS;

  readonly STATUS_OPTIONS: { value: string; label: string; icon: string; color: string }[] = [
    { value: 'ACCEPTED',  label: 'Accepted',  icon: 'pi pi-check-circle', color: '#198754' },
    { value: 'PENDING',   label: 'Pending',   icon: 'pi pi-clock',        color: '#C98A00' },
    { value: 'WITHDRAWN', label: 'Withdrawn', icon: 'pi pi-undo',         color: '#64748B' },
    { value: 'REJECTED',  label: 'Rejected',  icon: 'pi pi-times-circle', color: '#DC3545' },
  ];

  /** Icon-labelled options for the PrimeNG selects (values unchanged from the API contract). */
  readonly modeItems = [
    { value: 'Digital In-person', icon: 'pi pi-tablet' },
    { value: 'Verbal', icon: 'pi pi-microphone' },
    { value: 'Written', icon: 'pi pi-pencil' },
  ];
  readonly sourceItems = [
    { value: 'Branch Walk-in', icon: 'pi pi-building' },
    { value: 'Call Centre', icon: 'pi pi-phone' },
    { value: 'Field Agent', icon: 'pi pi-map-marker' },
  ];

  channelMeta(ch: string): ChannelMeta {
    return CHANNEL_META[ch.toUpperCase() as ChannelId] ?? { label: ch, icon: 'pi pi-send', color: '#45329E' };
  }

  initials(name: string | null | undefined): string {
    const parts = (name || '').trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return '?';
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  statusSeverity(status: string): 'success' | 'warn' | 'danger' | 'secondary' | 'info' | 'contrast' {
    switch (status) {
      case 'ACCEPTED': return 'success';
      case 'PENDING': return 'warn';
      case 'EXPIRING_SOON': return 'warn';
      case 'REJECTED': return 'danger';
      case 'EXPIRED': return 'contrast';
      default: return 'secondary';
    }
  }

  statusIcon(status: string): string {
    switch (status) {
      case 'ACCEPTED': return 'pi pi-check-circle';
      case 'PENDING': return 'pi pi-clock';
      case 'EXPIRING_SOON': return 'pi pi-hourglass';
      case 'REJECTED': return 'pi pi-times-circle';
      case 'EXPIRED': return 'pi pi-calendar-times';
      case 'WITHDRAWN': return 'pi pi-undo';
      default: return 'pi pi-circle';
    }
  }

  /** "EXPIRING_SOON" → "Expiring soon". */
  humanize(code: string | null | undefined): string {
    if (!code) return '';
    const s = code.replace(/_/g, ' ').toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  // Computed
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

  ngOnInit(): void {
    this.adminApi.listConsentTemplates().subscribe({
      next: (res) => { if (res.success && res.data) this.templates.set(res.data); },
      error: (err) => {
        this.logger.error('AdminCaptureConsent', 'templates failed', err);
        this.notify.error('Templates', err?.error?.message || 'Could not load consent templates.');
      },
    });
  }

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

  onLeftTemplateChange(value: string | number | null): void {
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

  onRightTemplateChange(value: string | number | null): void {
    const id = this.parseSelectNumber(value);
    this.rightTemplateId.set(id);
    this.rightSelectedChannels.set([]);
    this.rightSelectedLanguages.set([]);
    this.rightAvailableChannels.set([]);

    if (id == null) return;

    const tpl = this.templates().find((x) => x.id === id);
    const channels: string[] = [];
    if (tpl?.channelEmail)    channels.push('EMAIL');
    if (tpl?.channelSms)      channels.push('SMS');
    if (tpl?.channelPush)     channels.push('PUSH');
    if (tpl?.channelWhatsapp) channels.push('WHATSAPP');
    if (tpl?.channelRcs)      channels.push('RCS');

    this.rightAvailableChannels.set(channels);

    const cust = this.customer();
    if (!cust) return;

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

        const available = this.rightAvailableChannels();
        this.rightSelectedChannels.set(pre.filter((c) => available.includes(c)));
      },
      error: () => { /* non-fatal */ },
    });

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
    const labels: Record<string, string> = { EMAIL: 'Email', SMS: 'SMS', PUSH: 'Push', WHATSAPP: 'WhatsApp', RCS: 'RCS' };
    return labels[ch] ?? ch;
  }

  onSearch(): void {
    const q = this.searchQuery().trim();
    if (!q) { this.notify.warning('Search', 'Enter a Customer ID or mobile number.'); return; }
    this.searchBusy.set(true);
    this.customer.set(null);
    this.consentHistory.set([]);
    this.lastInviteLink.set('');
    this.notFoundQuery.set('');
    this.adminApi.captureSearch(q).subscribe({
      next: (res) => {
        this.searchBusy.set(false);
        if (!res.success || !res.data) { this.notFoundQuery.set(q); return; }
        this.customer.set(res.data);
        this.loadConsentHistory(res.data.customerId);
      },
      error: (err) => {
        this.searchBusy.set(false);
        this.logger.error('AdminCaptureConsent', 'search failed', err);
        if (err?.status === 400 || err?.status === 404) {
          this.notFoundQuery.set(q);
          return;
        }
        this.notify.error('Search', err?.error?.message || err?.message || 'Search failed.');
      },
    });
  }

  private refreshCustomer(customerId: string): void {
    this.adminApi.captureSearch(customerId).subscribe({
      next: (res) => {
        if (res.success && res.data) {
          this.customer.set(res.data);
        }
      },
      error: () => undefined,
    });
    this.loadConsentHistory(customerId);
  }

  sendBlockReason(): string {
    const cust = this.customer();
    if (!cust) return '';
    if (!cust.email?.trim()) return "This customer has no registered email. Use 'Take consent on behalf' instead.";
    if (this.leftTemplateId() != null && !this.deliveryChannels().some((c) => /email/i.test(c))) {
      return 'This template has no Email channel, so a link cannot be emailed.';
    }
    return '';
  }

  captureSummary(row: CustomerConsentRecordRow): string {
    const parts = [
      row.captureMode ? `Mode: ${this.humanize(row.captureMode)}` : '',
      row.sourceChannel ? `Source: ${this.humanize(row.sourceChannel)}` : '',
      `Evidence: ${row.evidenceReference || '—'}`,
      row.recordedByName ? `Recorded by ${row.recordedByName}` : '',
    ];
    return parts.filter(Boolean).join(' · ');
  }

  copyLink(): void {
    const link = this.lastInviteLink();
    if (!link) { this.notify.info('Copy link', 'Send the request first to generate a link.'); return; }
    void navigator.clipboard.writeText(link).then(
      () => this.notify.success('Copied', 'Consent link copied to clipboard.'),
      () => this.notify.error('Copy failed', 'Clipboard access was denied.'),
    );
  }

  sendLink(): void {
    const cust = this.customer();
    const tid  = this.leftTemplateId();
    const selected = this.selectedCaptureChannels();
    if (!cust)          { this.notify.warning('Send', 'Search and select a customer first.'); return; }
    if (!cust.email?.trim()) {
      this.notify.warning('Send', "This customer has no registered email address. Use 'Take consent on behalf' instead.");
      return;
    }
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
        this.refreshCustomer(cust.customerId);
      },
      error: (err) => {
        this.sendBusy.set(false);
        this.logger.error('AdminCaptureConsent', 'send-link failed', err);
        this.notify.error(err?.status === 503 ? 'Email delivery failed' : 'Send',
          err?.error?.message || err?.message || 'Could not send consent link.');
      },
    });
  }

  recordConsent(): void {
    const cust   = this.customer();
    const tid    = this.rightTemplateId();
    const mode   = this.rightMode();
    const source = this.rightSource();
    const status = this.rightConsentStatus();

    if (!cust) { this.notify.warning('Record', 'Search for a customer first.'); return; }
    const missing: string[] = [];
    if (tid == null) missing.push('Consent type');
    if (!mode) missing.push('Mode');
    if (!source) missing.push('Source channel');
    if (!status) missing.push('Consent status');
    if (missing.length) {
      this.notify.warning('Record', `Please select: ${missing.join(', ')}.`);
      return;
    }

    this.recordBusy.set(true);
    this.adminApi.recordOnBehalf({
      customerId:          cust.customerId,
      consentType:         this.selectedRightConsentType(),
      consentTemplateId:   tid!,
      mode,
      sourceChannel:       source,
      consentStatus:       status,
      evidenceReference:   this.evidenceRef().trim() || undefined,
      selectedChannels:    this.rightSelectedChannels().length ? [...this.rightSelectedChannels()] : undefined,
      selectedLanguages:   this.rightSelectedLanguages().length ? [...this.rightSelectedLanguages()] : undefined,
    }).subscribe({
      next: (res) => {
        this.recordBusy.set(false);
        if (!res.success) { this.notify.error('Record', res.message || 'Record failed.'); return; }
        this.refreshCustomer(cust.customerId);
        this.rightMode.set('');
        this.rightSource.set('');
        this.rightConsentStatus.set('');
        this.evidenceRef.set('');
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

  resetLinkOnLeftChange(): void { this.lastInviteLink.set(''); }

  parseSelectNumber(v: string | number | null): number | null {
    if (v == null || v === '') return null;
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