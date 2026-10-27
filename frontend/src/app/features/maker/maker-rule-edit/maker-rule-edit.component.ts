import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ConsentRulesService, ConsentRuleUpsertPayload } from '../../../core/services/consent-rules.service';
import { SegmentsService } from '../../../core/services/segments.service';
import { AudienceDrillDownService } from '../../../core/services/audience-drill-down.service';
import { ConsentService } from '../../../core/services/consent.service';
import { NotificationService } from '../../../core/services/notification.service';
import { AuditService } from '../../../core/services/audit.service';
import { AudienceSegment } from '../../../core/models/workflow.model';
import { ConsentRule, PredefinedRuleScenario, WorkflowScheduleType, AudienceSegmentCode } from '../../../core/models/workflow.model';
import { AuditLogEntry } from '../../../core/models/audit.model';
import { WorkflowStatusBadgeComponent } from '../../../shared/components/workflow-status-badge/workflow-status-badge.component';
import { RecurringScheduleEditorComponent } from '../../../shared/components/recurring-schedule-editor/recurring-schedule-editor.component';
import { Subscription } from 'rxjs';

const CHANNELS = ['EMAIL', 'SMS', 'WHATSAPP', 'RCS'] as const;

@Component({
  selector: 'app-maker-rule-edit',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatIconModule,
    SelectModule,
    MultiSelectModule,
    InputTextModule,
    TextareaModule,
    WorkflowStatusBadgeComponent,
    RecurringScheduleEditorComponent,
  ],
  templateUrl: './maker-rule-edit.component.html',
  styleUrl: './maker-rule-edit.component.css',
})
export class MakerRuleEditComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly rulesApi = inject(ConsentRulesService);
  private readonly segmentsApi = inject(SegmentsService);
  private readonly drillDownApi = inject(AudienceDrillDownService);
  private readonly consentApi = inject(ConsentService);
  private readonly notify = inject(NotificationService);
  private readonly auditApi = inject(AuditService);

  readonly isNew = signal(false);
  readonly ruleId = signal<number | null>(null);
  readonly busy = signal(false);
  readonly rule = signal<ConsentRule | null>(null);
  readonly segments = signal<AudienceSegment[]>([]);
  readonly templates = signal<{ id: number; consentName: string }[]>([]);
  /** Stable options array for the segment multiselect (avoids re-filtering on every change detection). */
  readonly segmentOptions = computed(() => this.segments().filter((s) => s.selectable));
  readonly audit = signal<AuditLogEntry[]>([]);
  readonly recurringScheduleValid = signal(true);
  readonly drillDownPreview = signal<{ totalCount: number; segmentCounts: { code: string; count: number }[] } | null>(
    null,
  );

  private drillDownSub?: Subscription;

  /** Today at midnight — used as [min] for the datepicker */
  readonly minDate: Date = (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  })();

  /** Internal signals for the split date/time pickers */
  readonly scheduledDate = signal<Date | null>(null);

  /** Raw string the maker types or selects, e.g. "09:30" */
  readonly scheduledTimeInput = signal<string>('');

  /** Validation error shown under the time field */
  readonly timeInputError = signal<string | null>(null);

  /** All 30-minute slot options shown in the autocomplete dropdown */
  private readonly ALL_TIME_OPTIONS: string[] = Array.from({ length: 48 }, (_, i) => {
    const h = Math.floor(i / 2);
    const m = i % 2 === 0 ? '00' : '30';
    return `${String(h).padStart(2, '0')}:${m}`;
  });

  /** Options filtered by what the maker has typed so far */
  readonly filteredTimeOptions = computed(() => {
    const q = this.scheduledTimeInput().trim();
    if (!q) return this.ALL_TIME_OPTIONS;
    return this.ALL_TIME_OPTIONS.filter((t) => t.startsWith(q));
  });

  /** Human-readable preview shown below the pickers */
  readonly scheduledDateTimePreview = computed(() => {
    const d = this.scheduledDate();
    const t = this.scheduledTimeInput();
    if (!d || !this.isValidTime(t)) return null;
    const pad = (n: number) => String(n).padStart(2, '0');
    const day = `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
    return `${day} at ${t}`;
  });

  readonly scenarios: PredefinedRuleScenario[] = [
    'NEW_CUSTOMER_DETECTED',
    'CONSENT_NEARING_EXPIRY',
    'EXPIRED_CONSENT',
    'FIRST_SEND_NO_RESPONSE',
    'REMINDER_1_NO_RESPONSE',
    'REMINDER_2_NO_RESPONSE',
    'DECLINED_RE_ENGAGEMENT_AFTER_COOLDOWN',
    'VIP_PRIORITY_FAST_TRACK',
  ];

  readonly ruleTypeOptions = [
    { value: 'PREDEFINED_SCENARIO', label: 'Predefined scenario', icon: 'pi pi-bolt', hint: 'Built-in lifecycle trigger' },
    { value: 'CUSTOM', label: 'Custom', icon: 'pi pi-sliders-h', hint: 'Your own trigger event' },
  ];

  /** Display metadata for each predefined scenario, in the same order as `scenarios`. */
  readonly scenarioOptions: { value: PredefinedRuleScenario; label: string; icon: string; desc: string }[] = [
    { value: 'NEW_CUSTOMER_DETECTED', label: 'New customer detected', icon: 'pi pi-user-plus', desc: 'A newly onboarded customer needs consent' },
    { value: 'CONSENT_NEARING_EXPIRY', label: 'Consent nearing expiry', icon: 'pi pi-hourglass', desc: 'Consent is close to the end of its validity' },
    { value: 'EXPIRED_CONSENT', label: 'Expired consent', icon: 'pi pi-calendar-times', desc: 'Consent validity has already ended' },
    { value: 'FIRST_SEND_NO_RESPONSE', label: 'No response to first send', icon: 'pi pi-send', desc: 'Customer has not answered the first request' },
    { value: 'REMINDER_1_NO_RESPONSE', label: 'No response after reminder 1', icon: 'pi pi-bell', desc: 'Still no answer after the first reminder' },
    { value: 'REMINDER_2_NO_RESPONSE', label: 'No response after reminder 2', icon: 'pi pi-bell', desc: 'Still no answer after the second reminder' },
    { value: 'DECLINED_RE_ENGAGEMENT_AFTER_COOLDOWN', label: 'Re-engage after decline', icon: 'pi pi-replay', desc: 'Customer declined earlier and the cooldown has passed' },
    { value: 'VIP_PRIORITY_FAST_TRACK', label: 'VIP priority fast track', icon: 'pi pi-star', desc: 'Priority handling for VIP customers' },
  ];

  form: ConsentRuleUpsertPayload = {
    ruleName: '',
    ruleDescription: '',
    ruleType: 'PREDEFINED_SCENARIO',
    predefinedScenario: 'CONSENT_NEARING_EXPIRY',
    triggerEvent: '',
    primarySegment: 'CONSENT_EXPIRING',
    additionalSegmentCodes: [],
    scheduleType: 'IMMEDIATE',
    selectedSegments: ['CONSENT_EXPIRING'],
    scheduledAt: '',
    recurringCron: '',
    broadcastChannels: ['EMAIL'],
    consentTemplateId: null,
  };

  ngOnInit(): void {
    this.drillDownSub = this.drillDownApi.preview$.subscribe((res) => {
      if (res?.success && res.data) {
        this.drillDownPreview.set(res.data);
      }
    });
    this.segmentsApi.list().subscribe((s) => {
      if (s.success && s.data) {
        this.segments.set(s.data);
        this.refreshDrillDownPreview();
      }
    });
    this.consentApi.getWorkflowTemplates().subscribe((t) => {
      if (t.success && t.data)
        this.templates.set(t.data.map((x) => ({ id: x.id, consentName: x.consentName })));
    });
    this.route.paramMap.subscribe((pm) => {
      const idParam = pm.get('id')!;
      const isNew = idParam === 'new';
      this.isNew.set(isNew);
      if (isNew) {
        this.ruleId.set(null);
        this.rule.set(null);
        this.audit.set([]);
        return;
      }
      const id = Number(idParam);
      if (Number.isNaN(id)) return;
      this.ruleId.set(id);
      this.rulesApi.getById(id).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.patchFromRule(res.data);
            this.rule.set(res.data);
            this.loadAudit(id);
          }
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.drillDownSub?.unsubscribe();
  }

  onRuleTypeChange(): void {
    this.refreshDrillDownPreview();
  }

  refreshDrillDownPreview(): void {
    if (this.form.ruleType !== 'PREDEFINED_SCENARIO') {
      this.drillDownPreview.set(null);
      this.drillDownApi.schedulePreview(null);
      return;
    }
    this.drillDownApi.schedulePreview({
      ruleType: this.form.ruleType,
      predefinedScenario: this.form.predefinedScenario,
      selectedSegmentCodes: this.form.selectedSegments ?? [],
    });
  }

  segmentDisplayCount(code: string): number {
    if (this.form.ruleType === 'PREDEFINED_SCENARIO') {
      const preview = this.drillDownPreview();
      const fromPreview = preview?.segmentCounts.find((s) => s.code === code);
      if (fromPreview) return fromPreview.count;
    }
    return this.segments().find((s) => s.code === code)?.customerCount ?? 0;
  }

  audienceTotalLabel(): string | null {
    if (this.form.ruleType !== 'PREDEFINED_SCENARIO') return null;
    const preview = this.drillDownPreview();
    if (!preview) return null;
    return `Currently targets ~${preview.totalCount.toLocaleString()} customers`;
  }

  private loadAudit(id: number): void {
    this.auditApi.getEntityAuditTrail('CONSENT_RULE', id).subscribe((r) => {
      if (r.success && r.data) this.audit.set(r.data);
    });
  }

  private patchFromRule(r: ConsentRule): void {
    const allSegments = [r.primarySegment, ...(r.additionalSegmentCodes || [])].filter(
      Boolean,
    ) as string[];

    this.form = {
      ruleName: r.ruleName,
      ruleDescription: r.ruleDescription || '',
      ruleType: r.ruleType,
      predefinedScenario: r.predefinedScenario || undefined,
      triggerEvent: r.triggerEvent || '',
      primarySegment: r.primarySegment,
      additionalSegmentCodes: r.additionalSegmentCodes || [],
      selectedSegments: allSegments,
      scheduleType: r.scheduleType,
      scheduledAt: r.scheduledAt || '',
      recurringCron: r.recurringCron || '',
      broadcastChannels: r.broadcastChannels?.length ? [...r.broadcastChannels] : ['EMAIL'],
      consentTemplateId: r.consentTemplateId ?? null,
    };

    // Hydrate the split date/time pickers from existing scheduledAt ISO string
    if (r.scheduledAt) {
      const d = new Date(r.scheduledAt);
      if (!Number.isNaN(d.getTime())) {
        this.scheduledDate.set(d);
        const pad = (n: number) => String(n).padStart(2, '0');
        this.scheduledTimeInput.set(`${pad(d.getHours())}:${pad(d.getMinutes())}`);
      }
    }
    this.refreshDrillDownPreview();
  }

  // ── Date/time picker handlers ──────────────────────────────────────────────

  onDateChange(date: Date | null): void {
    this.scheduledDate.set(date);
    this.syncScheduledAt();
  }

  /** Called on every keystroke — formats input and filters autocomplete */
  onTimeInputChange(raw: string): void {
    // Auto-insert colon after 2 digits for convenience (e.g. "09" → "09:")
    let val = raw.replace(/[^0-9:]/g, '');
    if (val.length === 2 && !val.includes(':') && raw.length > this.scheduledTimeInput().length) {
      val = val + ':';
    }
    this.scheduledTimeInput.set(val);
    this.timeInputError.set(null);
    this.syncScheduledAt();
  }

  /** Validate + normalise on blur */
  onTimeInputBlur(): void {
    const val = this.scheduledTimeInput().trim();
    if (!val) return;
    if (!this.isValidTime(val)) {
      this.timeInputError.set('Enter a valid time in HH:MM format (00:00 – 23:59)');
      this.form.scheduledAt = '';
      return;
    }
    this.timeInputError.set(null);
    this.syncScheduledAt();
  }

  /** Called when the maker picks a suggestion from the autocomplete panel */
  onTimeOptionSelected(value: string): void {
    this.scheduledTimeInput.set(value);
    this.timeInputError.set(null);
    this.syncScheduledAt();
  }

  private isValidTime(val: string): boolean {
    if (!/^\d{2}:\d{2}$/.test(val)) return false;
    const [h, m] = val.split(':').map(Number);
    return h >= 0 && h <= 23 && m >= 0 && m <= 59;
  }

  /** Writes the combined date+time back into form.scheduledAt as an ISO string. */
  private syncScheduledAt(): void {
    const d = this.scheduledDate();
    const t = this.scheduledTimeInput();
    if (!d || !this.isValidTime(t)) {
      this.form.scheduledAt = '';
      return;
    }
    const [h, m] = t.split(':').map(Number);
    const combined = new Date(d);
    combined.setHours(h, m, 0, 0);
    this.form.scheduledAt = combined.toISOString();
  }

  // ── Payload helpers ────────────────────────────────────────────────────────

  private payload(): ConsentRuleUpsertPayload {
    const [first, ...rest] = this.form.selectedSegments ?? [this.form.primarySegment];
    return {
      ...this.form,
      primarySegment: (first ?? this.form.primarySegment) as AudienceSegmentCode,
      additionalSegmentCodes: rest,
      scheduledAt:
        this.form.scheduleType === 'SCHEDULED' ? this.form.scheduledAt || undefined : undefined,
      recurringCron:
        this.form.scheduleType === 'RECURRING' ? this.form.recurringCron : undefined,
      consentTemplateId: this.form.consentTemplateId ?? null,
    };
  }

  // ── Channel helpers ────────────────────────────────────────────────────────

  toggleChannel(ch: string, checked: boolean): void {
    const set = new Set(this.form.broadcastChannels || []);
    checked ? set.add(ch) : set.delete(ch);
    this.form.broadcastChannels = [...set];
  }

  channelOn(ch: string): boolean {
    return (this.form.broadcastChannels || []).includes(ch);
  }

  // ── Save / submit ──────────────────────────────────────────────────────────

  saveDraft(): void {
    this.busy.set(true);
    if (this.isNew()) {
      this.rulesApi.create(this.payload()).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success && res.data) {
            this.notify.success('Draft saved', res.message || '');
            this.isNew.set(false);
            this.ruleId.set(res.data.id);
            this.rule.set(res.data);
            this.loadAudit(res.data.id);
            void this.router.navigate(['/maker/rules', res.data.id], { replaceUrl: true });
          }
        },
        error: () => this.busy.set(false),
      });
    } else {
      const id = this.ruleId()!;
      this.rulesApi.saveDraft(id, this.payload()).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success && res.data) {
            this.notify.success('Draft saved', res.message || '');
            this.rule.set(res.data);
            this.loadAudit(id);
          }
        },
        error: () => this.busy.set(false),
      });
    }
  }

  submitForApproval(): void {
    const run = (id: number) => {
      this.rulesApi.submit(id).subscribe({
        next: (res) => {
          this.busy.set(false);
          if (res.success) {
            this.notify.success('Submitted', res.message || '');
            void this.router.navigateByUrl('/maker/rules');
          }
        },
        error: () => this.busy.set(false),
      });
    };
    this.busy.set(true);
    if (this.isNew()) {
      this.rulesApi.create(this.payload()).subscribe({
        next: (res) => {
          if (res.success && res.data) {
            this.ruleId.set(res.data.id);
            this.isNew.set(false);
            run(res.data.id);
          } else {
            this.busy.set(false);
          }
        },
        error: () => this.busy.set(false),
      });
    } else {
      run(this.ruleId()!);
    }
  }

  // ── Guards ─────────────────────────────────────────────────────────────────

  canEdit(): boolean {
    const s = this.rule()?.status;
    return this.isNew() || s === 'DRAFT' || s === 'REVISION_REQUESTED';
  }

  canSubmit(): boolean {
    return (
      this.canEdit() &&
      this.form.consentTemplateId !== null &&
      (this.form.selectedSegments?.length ?? 0) > 0
    );
  }

  canPublish(): boolean {
    return this.rule()?.status === 'APPROVED';
  }

  onScheduleTypeChange(st: WorkflowScheduleType): void {
    if (st !== 'RECURRING') this.recurringScheduleValid.set(true);
    // Reset date/time pickers when switching away from SCHEDULED
    if (st !== 'SCHEDULED') {
      this.scheduledDate.set(null);
      this.scheduledTimeInput.set('');
      this.timeInputError.set(null);
      this.form.scheduledAt = '';
    }
  }

  recurringScheduleOk(): boolean {
    if (this.form.scheduleType !== 'RECURRING') return true;
    return this.recurringScheduleValid();
  }

  feedbackBanner(): string | null {
    const r = this.rule();
    if (!r) return null;
    if (r.status === 'REJECTED' && r.rejectionReason) return `Rejected: ${r.rejectionReason}`;
    if (r.status === 'REVISION_REQUESTED' && r.revisionReason)
      return `Checker requested revision: ${r.revisionReason}`;
    if (
      r.reviewerRemarks &&
      (r.status === 'APPROVED' || r.status === 'REJECTED' || r.status === 'REVISION_REQUESTED')
    )
      return `Checker remarks: ${r.reviewerRemarks}`;
    return null;
  }

  onScenarioChange(): void {
    this.form.selectedSegments = [];
    this.refreshDrillDownPreview();
  }

  protected readonly CHANNELS = CHANNELS;
}