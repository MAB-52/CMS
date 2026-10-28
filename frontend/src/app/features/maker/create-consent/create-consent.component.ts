
import { Component, OnDestroy, OnInit, ViewChild, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { debounceTime, finalize, merge, Subscription } from 'rxjs';
import {
  Consent,
  ConsentCategory,
  ConsentCreatePayload,
  ConsentRuleLinkedDraftPayload,
  ConsentStatus,
  LinkedConsentAndRuleCreatePayload,
} from '../../../core/models/consent.model';
import {
  AudienceSegment,
  AudienceSegmentCode,
  ConsentRule,
  ConsentRuleType,
  PredefinedRuleScenario,
  WorkflowScheduleType,
} from '../../../core/models/workflow.model';
import { ConsentRulesService, ConsentRuleUpsertPayload } from '../../../core/services/consent-rules.service';
import { ConsentService } from '../../../core/services/consent.service';
import { SegmentsService } from '../../../core/services/segments.service';
import { AudienceDrillDownService } from '../../../core/services/audience-drill-down.service';
import { MergeTagService } from '../../../core/services/merge-tag.service';
import { NotificationService } from '../../../core/services/notification.service';
import { LoggerService } from '../../../core/services/logger.service';
import { notBlank } from '../../../core/validators/form-validators';
import { groupMergeTagsByCategory } from '../../../core/utils/merge-tags.util';
import type { MergeTag } from '../../../core/models/consent.model';
import { ConsentLanguageCode, DEFAULT_LANGUAGE } from '../../../core/constants/consent-languages';
import { ChannelLanguageRenderMap, buildRenderMap, ConsentTranslationInput } from '../../../core/models/consent-translation.types';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { computed } from '@angular/core';
import { ConsentDetailsCardComponent, validityError } from './consent-details-card/consent-details-card.component';
import { ConsentMessageCardComponent } from './consent-message-card/consent-message-card.component';
import { ConsentTemplateRecordsComponent } from '../consent-template-records/consent-template-records.component';
import { AiContentGeneratorComponent, AiInsertEvent } from './consent-message-card/ai-content-generator/ai-content-generator.component';
import { DeliveryChannelsCardComponent } from './delivery-channels-card/delivery-channels-card.component';
import { RecurringScheduleEditorComponent } from '../../../shared/components/recurring-schedule-editor/recurring-schedule-editor.component';
import { AuditActivityCardComponent } from './audit-activity-card/audit-activity-card.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ShellDockComponent } from '../../../shared/layout/app-shell/shell-dock.component';

import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { RULE_TYPE_OPTIONS, SCENARIO_OPTIONS } from '../../../core/constants/rule-options';

const LINKED_RULE_CHANNELS = ['EMAIL', 'SMS', 'WHATSAPP', 'RCS'] as const;

@Component({
  selector: 'app-create-consent',
  standalone: true,
  imports: [
    ButtonModule,
    TooltipModule,
    ShellDockComponent,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ConsentDetailsCardComponent,
    ConsentMessageCardComponent,
    DeliveryChannelsCardComponent,
    AuditActivityCardComponent,
    ConsentTemplateRecordsComponent,
    AiContentGeneratorComponent,
    RecurringScheduleEditorComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatAutocompleteModule,
    SelectModule,
    MultiSelectModule,
    InputTextModule,
    TextareaModule,
  ],
  templateUrl: './create-consent.component.html',
  styleUrls: ['../../../shared/styles/rule-fields.css', './create-consent.component.css'],
})
export class CreateConsentComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly api = inject(ConsentService);
  private readonly rulesApi = inject(ConsentRulesService);
  private readonly segmentsApi = inject(SegmentsService);
  private readonly drillDownApi = inject(AudienceDrillDownService);
  private readonly mergeApi = inject(MergeTagService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);

  @ViewChild('msgCard') msgCard!: ConsentMessageCardComponent;
  @ViewChild(AuditActivityCardComponent) auditCard?: AuditActivityCardComponent;

  readonly form = this.fb.nonNullable.group({
    consentName: ['', [Validators.required, notBlank, Validators.maxLength(200)]],
    description: ['', [Validators.required, notBlank, Validators.maxLength(1000)]],
    category: this.fb.nonNullable.control<ConsentCategory>('MARKETING', Validators.required),
    validityPreset: this.fb.nonNullable.control('365'),
    validityStartDate: [''],
    validityEndDate: [''],
    consentMessage: [''],
    channelEmail: this.fb.nonNullable.control(false),
    channelSms: this.fb.nonNullable.control(false),
    channelPush: this.fb.nonNullable.control(false),
    channelWhatsapp: this.fb.nonNullable.control(false),
    channelRcs: this.fb.nonNullable.control(false),
    tagsUsed: this.fb.nonNullable.control<string[]>([]),
  });

  mergeTags: MergeTag[] = [];
  grouped: Record<string, MergeTag[]> = {};

  readonly consentDbId = signal<number | null>(null);
  readonly consentIdPreview = signal('');
  readonly idLoading = signal(false);
  readonly loadedStatus = signal<ConsentStatus | null>(null);
  readonly lastSaved = signal<string | null>(null);
  /** True while a manual Save Draft or Submit request is in flight (blocks double-clicks). */
  readonly saving = signal(false);
  readonly autosaveBusy = signal(false);
  readonly formSubmitted = signal(false);
  readonly previewHtml = signal('');
  readonly viewOnly = signal(false);
  readonly revisionMessage = signal('');
  readonly rejectionReason = signal('');
  private loadedConsent: Consent | null = null;

  // ── Per-language content + render state ────────────────────────────────────
  readonly activeLanguages = signal<ConsentLanguageCode[]>([DEFAULT_LANGUAGE]);
  readonly activeEditorLanguage = signal<ConsentLanguageCode>(DEFAULT_LANGUAGE);
  readonly languageContentMap = signal<Record<string, string>>({ en: '' });
  readonly renderMap = signal<ChannelLanguageRenderMap>({});
  readonly channelFlags = signal<Record<'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP' | 'RCS', boolean>>({
    EMAIL: false, SMS: false, PUSH: false, WHATSAPP: false, RCS: false,
  });
  readonly flaggedInitialChannel = signal<string | null>(null);
  readonly flaggedInitialLanguage = signal<string | null>(null);

  /** Optional paired broadcast rule: only before first persist on create route. */
  readonly createLinkedBroadcastRule = signal(false);
  readonly linkedRuleDbId = signal<number | null>(null);
  readonly linkedRuleConsentTemplateId = signal<number | null>(null);
  readonly segments = signal<AudienceSegment[]>([]);
  readonly segmentOptions = computed(() => this.segments().filter((s) => s.selectable));
  readonly ruleTypeOptions = RULE_TYPE_OPTIONS;
  readonly scenarioOptions = SCENARIO_OPTIONS;
  readonly drillDownPreview = signal<{ totalCount: number; segmentCounts: { code: string; count: number }[] } | null>(
    null,
  );
  readonly recurringScheduleValid = signal(true);
  readonly linkedBusy = signal(false);

  // ── Scheduled date/time split fields ──────────────────────────────────────

  readonly minDate = new Date();

  /** The Date object for the date-picker half */
  readonly scheduledDate = signal<Date | null>(null);

  /** Raw text the user types in the time field */
  readonly scheduledTimeInput = signal('');

  /** Validation error shown under the time field */
  readonly timeInputError = signal('');

  /** Full human-readable preview once both parts are valid */
  readonly scheduledDateTimePreview = signal('');

  /** Time options shown in autocomplete dropdown (every 30 min) */
  readonly filteredTimeOptions = signal<string[]>([]);


  private readonly ALL_TIME_OPTIONS: string[] = (() => {
    const opts: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (const m of [0, 30]) {
        opts.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
      }
    }
    return opts;
  })();

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

  linkedRuleForm: {
    ruleDescription: string;
    ruleType: ConsentRuleType;
    predefinedScenario: PredefinedRuleScenario | undefined;
    triggerEvent: string;
    selectedSegments: string[];
    scheduleType: WorkflowScheduleType;
    scheduledAt: string;
    recurringCron: string;
    broadcastChannels: string[];
  } = {
      ruleDescription: '',
      ruleType: 'CUSTOM',
      predefinedScenario: undefined,
      triggerEvent: '',
      selectedSegments: [],
      scheduleType: 'IMMEDIATE',
      scheduledAt: '',
      recurringCron: '',
      broadcastChannels: ['EMAIL'],
    };

  protected readonly CHANNELS = LINKED_RULE_CHANNELS;

  private autoTimer?: ReturnType<typeof setInterval>;
  private subs = new Subscription();

  ngOnInit(): void {
    this.subs.add(
      this.drillDownApi.preview$.subscribe((res) => {
        if (res?.success && res.data) {
          this.drillDownPreview.set(res.data);
        }
      }),
    );
    this.subs.add(
      this.segmentsApi.list().subscribe((s) => {
        if (s.success && s.data) {
          this.segments.set(s.data);
          this.linkedRuleForm.selectedSegments = this.selectableOnly(this.linkedRuleForm.selectedSegments);
          this.refreshDrillDownPreview();
        }
      }),
    );

    this.subs.add(
      this.mergeApi.getMergeTags().subscribe({
        next: (tags) => {
          this.mergeTags = tags;
          this.grouped = groupMergeTagsByCategory(tags);
        },
        error: () => {
          /* merge service toasts */
        },
      }),
    );

    this.subs.add(
      this.form.controls.consentMessage.valueChanges.pipe(debounceTime(300)).subscribe((v) => {
        this.previewHtml.set(v || '');
      }),
    );

    const channelControls = [
      { control: this.form.controls.channelEmail, key: 'EMAIL' },
      { control: this.form.controls.channelSms, key: 'SMS' },
      { control: this.form.controls.channelWhatsapp, key: 'WHATSAPP' },
      { control: this.form.controls.channelPush, key: 'PUSH' },
      { control: this.form.controls.channelRcs, key: 'RCS' },
    ] as const;

    const syncChannels = () => {
      if (!this.createLinkedBroadcastRule()) {
        return;
      }

      const selected = channelControls.filter(({ control }) => control.value).map(({ key }) => key);

      this.linkedRuleForm.broadcastChannels = selected.length ? [...selected] : ['EMAIL'];
    };

    const refreshChannelFlags = () => {
      const v = this.form.getRawValue();
      this.channelFlags.set({
        EMAIL: v.channelEmail, SMS: v.channelSms, PUSH: v.channelPush,
        WHATSAPP: v.channelWhatsapp, RCS: v.channelRcs,
      });
    };

    this.subs.add(
      merge(...channelControls.map(({ control }) => control.valueChanges)).subscribe(() => {
        syncChannels();
        refreshChannelFlags();
      }),
    );
    refreshChannelFlags();

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.loadConsent(Number(idParam));
    } else {
      const dup = history.state?.['from'] as Consent | undefined;
      if (dup) {
        this.applyDuplicateAsNew(dup);
      } else {
        this.prefetchConsentId();
      }
    }

    this.viewOnly.set(this.route.snapshot.queryParamMap.get('view') === '1');
    this.subs.add(
      this.route.queryParamMap.subscribe((q) => {
        this.viewOnly.set(q.get('view') === '1');
      }),
    );

    this.autoTimer = setInterval(() => void this.tryAutoSave(), 120_000);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
    }
  }

  private applyDuplicateAsNew(c: Consent): void {
    this.consentDbId.set(null);
    this.loadedStatus.set(null);
    this.revisionMessage.set('');
    this.createLinkedBroadcastRule.set(false);
    this.linkedRuleDbId.set(null);
    this.linkedRuleConsentTemplateId.set(null);
    // Reset language state on duplicate
    if (c.translations && c.translations.length) {
      const langs = c.translations.map((t) => t.languageCode as ConsentLanguageCode);
      this.activeLanguages.set([DEFAULT_LANGUAGE, ...langs.filter((l) => l !== DEFAULT_LANGUAGE)]);
      const contentMap: Record<string, string> = {};
      for (const t of c.translations) {
        contentMap[t.languageCode] = t.content;
      }
      if (!contentMap[DEFAULT_LANGUAGE]) {
        contentMap[DEFAULT_LANGUAGE] = c.consentMessage || '';
      }
      this.languageContentMap.set(contentMap);
    } else {
      this.activeLanguages.set([DEFAULT_LANGUAGE]);
      this.languageContentMap.set({ en: c.consentMessage || '' });
    }
    this.activeEditorLanguage.set(DEFAULT_LANGUAGE);
    this.renderMap.set({});
    this.flaggedInitialChannel.set(null);
    this.flaggedInitialLanguage.set(null);
    this.prefetchConsentId();
    const preset = this.inferPreset(c);
    this.form.reset({
      consentName: `${c.consentName} (Copy)`.slice(0, 200),
      description: c.description || '',
      category: c.category,
      validityPreset: preset,
      validityStartDate: c.validityStartDate ? String(c.validityStartDate).slice(0, 10) : '',
      validityEndDate: c.validityEndDate ? String(c.validityEndDate).slice(0, 10) : '',
      consentMessage: c.consentMessage || '',
      channelEmail: c.channelEmail ?? false,
      channelSms: c.channelSms ?? false,
      channelPush: c.channelPush ?? false,
      channelWhatsapp: c.channelWhatsapp ?? false,
      channelRcs: c.channelRcs ?? false,
      tagsUsed: [...(c.tagsUsed || [])],
    });
    this.previewHtml.set(c.consentMessage || '');
    this.resetLinkedRuleFormDefaults();
  }

  private prefetchConsentId(): void {
    this.idLoading.set(true);
    this.subs.add(
      this.api.generateConsentId().subscribe({
        next: (res) => {
          this.idLoading.set(false);
          if (res.success && res.data?.consentId) {
            this.consentIdPreview.set(res.data.consentId);
          }
        },
        error: () => {
          this.idLoading.set(false);
        },
      }),
    );
  }

  private loadConsent(id: number): void {
    this.subs.add(
      this.api.getConsentById(id).subscribe({
        next: (res) => {
          if (!res.success || !res.data) {
            return;
          }
          const c = res.data;
          this.patchFromConsent(c);
        },
        error: () => {
          void this.router.navigate(['/maker/consents']);
        },
      }),
    );
  }

  private patchFromConsent(c: Consent): void {
    this.consentDbId.set(c.id);
    this.consentIdPreview.set(c.consentId);
    this.loadedStatus.set(c.status);
    this.revisionMessage.set(c.revisionMessage || '');
    this.rejectionReason.set(c.rejectionReason || '');
    this.loadedConsent = c;
    const preset = this.inferPreset(c);
    this.form.patchValue({
      consentName: c.consentName,
      description: c.description || '',
      category: c.category,
      validityPreset: preset,
      validityStartDate: c.validityStartDate ? String(c.validityStartDate).slice(0, 10) : '',
      validityEndDate: c.validityEndDate ? String(c.validityEndDate).slice(0, 10) : '',
      consentMessage: c.consentMessage || '',
      channelEmail: c.channelEmail ?? false,
      channelSms: c.channelSms ?? false,
      channelPush: c.channelPush ?? false,
      channelWhatsapp: c.channelWhatsapp ?? false,
      channelRcs: c.channelRcs ?? false,
      tagsUsed: [...(c.tagsUsed || [])],
    });
    this.previewHtml.set(c.consentMessage || '');

    if (c.translations && c.translations.length) {
      const langs = c.translations.map((t) => t.languageCode as ConsentLanguageCode);
      this.activeLanguages.set([DEFAULT_LANGUAGE, ...langs.filter((l) => l !== DEFAULT_LANGUAGE)]);
      const contentMap: Record<string, string> = {};
      for (const t of c.translations) {
        contentMap[t.languageCode] = t.content;
      }
      if (!contentMap[DEFAULT_LANGUAGE]) {
        contentMap[DEFAULT_LANGUAGE] = c.consentMessage || '';
      }
      this.languageContentMap.set(contentMap);
      this.renderMap.set(buildRenderMap(c.translations));
    } else {
      this.activeLanguages.set([DEFAULT_LANGUAGE]);
      this.languageContentMap.set({ en: c.consentMessage || '' });
      this.renderMap.set({});
    }

    // Auto-select flagged channel+language on reopening a REVISION_REQUESTED consent
    if (c.status === 'REVISION_REQUESTED' && c.revisionFlaggedCombinations?.length) {
      const first = c.revisionFlaggedCombinations[0];
      this.flaggedInitialChannel.set(first['channel'] ?? null);
      this.flaggedInitialLanguage.set(first['languageCode'] ?? null);
      if (first['languageCode']) {
        this.activeEditorLanguage.set(first['languageCode'] as ConsentLanguageCode);
      }
    } else {
      this.flaggedInitialChannel.set(null);
      this.flaggedInitialLanguage.set(null);
    }

    const canHydrateLinked =
      (c.status === 'DRAFT' || c.status === 'REVISION_REQUESTED') && !!c.linkedRuleIntent && !!c.linkedRule;
    if (canHydrateLinked) {
      this.createLinkedBroadcastRule.set(true);
      this.linkedRuleDbId.set(c.linkedRule!.id);
      this.hydrateLinkedRuleFormFromRule(c.linkedRule!);
    } else {
      this.createLinkedBroadcastRule.set(false);
      this.linkedRuleDbId.set(null);
      this.linkedRuleConsentTemplateId.set(null);
      this.resetLinkedRuleFormDefaults();
    }
    if (this.isReadOnlyStatus(c.status) || this.viewOnly()) {
      this.form.disable({ emitEvent: false });
    }
  }

  private inferPreset(c: Consent): string {
    if (c.validityStartDate && c.validityEndDate) {
      return 'custom';
    }
    const d = c.validityPeriodDays;
    const presets = [15, 30, 60, 90, 180, 365, 730];
    if (d != null && presets.includes(d)) {
      return String(d);
    }
    return '365';
  }

  isReadOnlyStatus(s: ConsentStatus): boolean {
    return s === 'PENDING_APPROVAL' || s === 'APPROVED' || s === 'PUBLISHED' || s === 'REJECTED';
  }

  editable(): boolean {
    const s = this.loadedStatus();
    if (this.viewOnly()) {
      return false;
    }
    return !s || s === 'DRAFT' || s === 'REVISION_REQUESTED';
  }

  nameOk(): boolean {
    return !!this.form.controls.consentName.value?.trim();
  }

  /** Everything still missing before the consent can be submitted, in form order. */
  submitBlockers(): string[] {
    const v = this.form.getRawValue();
    const out: string[] = [];
    if (!this.nameOk()) out.push('Consent name is required');
    if (!v.description?.trim()) out.push('Description is required');
    if (!v.category) out.push('Category must be selected');
    const vErr = validityError(v.validityPreset, v.validityStartDate, v.validityEndDate);
    if (vErr) out.push(vErr);
    // stripHtmlClient decodes &nbsp; so "<p>&nbsp;</p>" counts as empty
    if (!this.stripHtmlClient(v.consentMessage || '')) out.push('Consent message is required');
    if (!(v.channelEmail || v.channelSms || v.channelPush || v.channelWhatsapp || v.channelRcs)) {
      out.push('At least one channel is required');
    }
    return out;
  }

  canSubmit(): boolean {
    return this.submitBlockers().length === 0 && !!this.consentDbId();
  }

  showLinkedCheckbox(): boolean {
    return !this.consentDbId() && this.isCreatePage() && this.editable();
  }

  showPersistedLinkedPairOptIn(): boolean {
    return this.linkedRuleDbId() != null && !!this.consentDbId() && this.createLinkedBroadcastRule();
  }

  showLinkedRulePanel(): boolean {
    return this.createLinkedBroadcastRule() && (this.showLinkedCheckbox() || this.showPersistedLinkedPairOptIn());
  }

  showLinkedActions(): boolean {
    const persisted = this.showPersistedLinkedPairOptIn() && this.editable();
    const createPath =
      this.createLinkedBroadcastRule() && !this.consentDbId() && this.isCreatePage() && this.editable();
    return createPath || persisted;
  }

  showStandaloneDraftSubmit(): boolean {
    return !this.showLinkedActions();
  }

  consentSectionReadyForLinked(): boolean {
    return this.submitBlockers().length === 0;
  }

  onLinkedToggle(checked: boolean): void {
    this.createLinkedBroadcastRule.set(checked);
    if (checked) {
      const map: Record<string, boolean> = {
        EMAIL: this.form.controls.channelEmail.value,
        SMS: this.form.controls.channelSms.value,
        WHATSAPP: this.form.controls.channelWhatsapp.value,
        PUSH: this.form.controls.channelPush.value,
        RCS: this.form.controls.channelRcs.value,
      };
      const selected = Object.entries(map)
        .filter(([, v]) => v)
        .map(([k]) => k);
      this.linkedRuleForm.broadcastChannels = selected.length ? selected : ['EMAIL'];
      this.refreshDrillDownPreview();
    } else {
      this.resetLinkedRuleFormDefaults();
    }
  }

  onLinkedRuleTypeChange(rt: ConsentRuleType): void {
    this.linkedRuleForm.ruleType = rt;
    if (rt === 'PREDEFINED_SCENARIO' && !this.linkedRuleForm.predefinedScenario) {
      this.linkedRuleForm.predefinedScenario = 'CONSENT_NEARING_EXPIRY';
    }
    this.refreshDrillDownPreview();
  }

  refreshDrillDownPreview(): void {
    if (!this.showLinkedRulePanel() || this.linkedRuleForm.ruleType !== 'PREDEFINED_SCENARIO') {
      this.drillDownPreview.set(null);
      this.drillDownApi.schedulePreview(null);
      return;
    }
    this.drillDownApi.schedulePreview({
      ruleType: this.linkedRuleForm.ruleType,
      predefinedScenario: this.linkedRuleForm.predefinedScenario,
      selectedSegmentCodes: this.linkedRuleForm.selectedSegments ?? [],
    });
  }

  segmentDisplayCount(code: string): number {
    if (this.linkedRuleForm.ruleType === 'PREDEFINED_SCENARIO') {
      const preview = this.drillDownPreview();
      const fromPreview = preview?.segmentCounts.find((s) => s.code === code);
      if (fromPreview) return fromPreview.count;
    }
    return this.segments().find((s) => s.code === code)?.customerCount ?? 0;
  }

  audienceTotalLabel(): string | null {
    if (this.linkedRuleForm.ruleType !== 'PREDEFINED_SCENARIO') return null;
    const preview = this.drillDownPreview();
    if (!preview) return null;
    return `Currently targets ~${preview.totalCount.toLocaleString()} customers`;
  }

  linkedFieldsDisabled(): boolean {
    return !this.editable();
  }

  private resetLinkedRuleFormDefaults(): void {
    this.linkedRuleForm = {
      ruleDescription: '',
      ruleType: 'CUSTOM',
      predefinedScenario: undefined,
      triggerEvent: '',
      selectedSegments: [],
      scheduleType: 'IMMEDIATE',
      scheduledAt: '',
      recurringCron: '',
      broadcastChannels: ['EMAIL'],
    };
    this.recurringScheduleValid.set(true);
    this.refreshDrillDownPreview();
  }

  private toLocalInputFromIso(iso: string | null | undefined): string {
    if (!iso) {
      return '';
    }
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) {
      return '';
    }
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }

  onDateChange(date: Date | null): void {
    this.scheduledDate.set(date);
    this._syncScheduledAt();
  }

  onTimeInputChange(val: string): void {
    this.scheduledTimeInput.set(val);
    this.timeInputError.set('');

    // Filter autocomplete list as user types
    const filtered = this.ALL_TIME_OPTIONS.filter(t => t.startsWith(val));
    this.filteredTimeOptions.set(filtered);

    if (val.length === 5) {
      this._validateAndSync();
    } else {
      this.scheduledDateTimePreview.set('');
      this.linkedRuleForm.scheduledAt = '';
    }
  }

  onTimeInputBlur(): void {
    if (this.scheduledTimeInput()) {
      this._validateAndSync();
    }
    this.filteredTimeOptions.set([]);
  }

  onTimeOptionSelected(val: string): void {
    this.scheduledTimeInput.set(val);
    this.timeInputError.set('');
    this.filteredTimeOptions.set([]);
    this._validateAndSync();
  }

  private _validateAndSync(): void {
    const raw = this.scheduledTimeInput();
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(raw);
    if (!match) {
      this.timeInputError.set('Enter a valid time in HH:MM (24-hour) format.');
      this.scheduledDateTimePreview.set('');
      this.linkedRuleForm.scheduledAt = '';
      return;
    }
    this.timeInputError.set('');
    this._syncScheduledAt();
  }

  private _syncScheduledAt(): void {
    const date = this.scheduledDate();
    const time = this.scheduledTimeInput();
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(time);

    if (!date || !match) {
      this.scheduledDateTimePreview.set('');
      this.linkedRuleForm.scheduledAt = '';
      return;
    }

    const combined = new Date(date);
    combined.setHours(Number(match[1]), Number(match[2]), 0, 0);

    // Store ISO string back into the form model
    this.linkedRuleForm.scheduledAt = combined.toISOString();

    // Build a readable preview: "27 Jun 2026, 14:30"
    this.scheduledDateTimePreview.set(
      combined.toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    );
  }

  /** Call this when schedule type changes away from SCHEDULED to reset fields */
  onScheduleTypeChange(st: WorkflowScheduleType): void {
    if (st !== 'SCHEDULED') {
      this.scheduledDate.set(null);
      this.scheduledTimeInput.set('');
      this.timeInputError.set('');
      this.scheduledDateTimePreview.set('');
      this.filteredTimeOptions.set([]);
      this.linkedRuleForm.scheduledAt = '';
    }
    if (st !== 'RECURRING') {
      this.recurringScheduleValid.set(true);
    }
  }

  private hydrateLinkedRuleFormFromRule(r: ConsentRule): void {
    const segs = [r.primarySegment, ...(r.additionalSegmentCodes || [])].filter(Boolean) as string[];
    this.linkedRuleForm = {
      ruleDescription: r.ruleDescription || '',
      ruleType: r.ruleType,
      predefinedScenario: r.predefinedScenario || undefined,
      triggerEvent: r.triggerEvent || '',
      selectedSegments: this.selectableOnly(segs),
      scheduleType: r.scheduleType,
      scheduledAt: r.scheduleType === 'SCHEDULED' ? this.toLocalInputFromIso(r.scheduledAt) : '',
      recurringCron: r.recurringCron || '',
      broadcastChannels: r.broadcastChannels?.length ? [...r.broadcastChannels] : ['EMAIL'],
    };
    if (r.scheduleType === 'SCHEDULED' && r.scheduledAt) {
      const d = new Date(r.scheduledAt);
      this.scheduledDate.set(d);
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      this.scheduledTimeInput.set(`${hh}:${mm}`);
      this._syncScheduledAt();
    }
    this.linkedRuleConsentTemplateId.set(r.consentTemplateId ?? null);
    this.recurringScheduleValid.set(true);
    this.refreshDrillDownPreview();
  }

  private ruleUpsertPayload(): ConsentRuleUpsertPayload {
    const v = this.form.getRawValue();
    const ruleName = v.consentName.trim();
    const [first, ...rest] = this.linkedRuleForm.selectedSegments ?? [];
    const primary = (first ?? 'CONSENT_EXPIRING') as AudienceSegmentCode;
    const tid = this.linkedRuleConsentTemplateId() ?? this.consentDbId() ?? null;
    return {
      ruleName,
      ruleDescription: this.linkedRuleForm.ruleDescription?.trim() || undefined,
      ruleType: this.linkedRuleForm.ruleType,
      predefinedScenario:
        this.linkedRuleForm.ruleType === 'PREDEFINED_SCENARIO'
          ? this.linkedRuleForm.predefinedScenario ?? null
          : null,
      triggerEvent:
        this.linkedRuleForm.ruleType === 'CUSTOM'
          ? this.linkedRuleForm.triggerEvent?.trim() || undefined
          : undefined,
      primarySegment: primary,
      additionalSegmentCodes: rest.length ? rest : [],
      selectedSegments: [...(this.linkedRuleForm.selectedSegments ?? [])],
      scheduleType: this.linkedRuleForm.scheduleType,
      scheduledAt:
        this.linkedRuleForm.scheduleType === 'SCHEDULED'
          ? this.toIso(this.linkedRuleForm.scheduledAt) ?? null
          : null,
      recurringCron: this.linkedRuleForm.scheduleType === 'RECURRING' ? this.linkedRuleForm.recurringCron || null : null,
      broadcastChannels: [...(this.linkedRuleForm.broadcastChannels || [])],
      consentTemplateId: tid,
    };
  }

  // onScheduleTypeChange(st: WorkflowScheduleType): void {
  //   if (st !== 'RECURRING') {
  //     this.recurringScheduleValid.set(true);
  //   }
  // }

  recurringScheduleOk(): boolean {
    if (this.linkedRuleForm.scheduleType !== 'RECURRING') {
      return true;
    }
    return this.recurringScheduleValid();
  }

  selectableSegments(): AudienceSegment[] {
    return this.segments().filter((s) => s.selectable);
  }

  toggleChannel(ch: string, checked: boolean): void {
    const set = new Set(this.linkedRuleForm.broadcastChannels || []);
    if (checked) {
      set.add(ch);
    } else {
      set.delete(ch);
    }
    this.linkedRuleForm.broadcastChannels = [...set];
  }

  private selectableOnly(codes: string[] | null | undefined): string[] {
    const list = codes ?? [];
    const loaded = this.segments();
    if (!loaded.length) {
      return [...list];
    }
    const allowed = new Set(loaded.filter((x) => x.selectable).map((x) => x.code));
    return list.filter((c) => allowed.has(c));
  }

  linkedHasNonEmailChannel(): boolean {
    return (this.linkedRuleForm.broadcastChannels || []).some((c) => c !== 'EMAIL');
  }

  channelOn(ch: string): boolean {
    return (this.linkedRuleForm.broadcastChannels || []).includes(ch);
  }

  /** Everything still missing in the paired broadcast rule, in form order. */
  linkedRuleBlockers(): string[] {
    const out: string[] = [];
    if ((this.linkedRuleForm.selectedSegments ?? []).length === 0) {
      out.push('Select at least one audience segment');
    }
    if ((this.linkedRuleForm.broadcastChannels ?? []).length === 0) {
      out.push('Select at least one broadcast channel');
    }
    if (this.linkedRuleForm.ruleType === 'PREDEFINED_SCENARIO' && !this.linkedRuleForm.predefinedScenario) {
      out.push('Choose a predefined scenario');
    }
    if (this.linkedRuleForm.scheduleType === 'SCHEDULED') {
      const at = this.linkedRuleForm.scheduledAt?.trim();
      if (!at) {
        out.push('Pick the scheduled date and time');
      } else if (new Date(at).getTime() <= Date.now()) {
        out.push('Scheduled date and time must be in the future');
      }
    }
    if (this.linkedRuleForm.scheduleType === 'RECURRING' && !this.recurringScheduleOk()) {
      out.push('Complete the recurring schedule');
    }
    return out;
  }

  linkedRuleSubmitReady(): boolean {
    return this.linkedRuleBlockers().length === 0;
  }

  /** Shows everything missing in the consent and the paired rule; false when the submit must stop. */
  private warnLinkedBlockers(): boolean {
    const blockers = [...this.submitBlockers(), ...this.linkedRuleBlockers()];
    if (blockers.length) {
      this.notify.warning('Cannot submit yet', blockers.join('; '));
      return false;
    }
    return true;
  }

  private toIso(local: string): string | undefined {
    if (!local) {
      return undefined;
    }
    const d = new Date(local);
    return Number.isNaN(d.getTime()) ? undefined : d.toISOString();
  }

  private linkedRulePayload(): ConsentRuleLinkedDraftPayload {
    const v = this.form.getRawValue();
    const ruleName = v.consentName.trim();
    const [first, ...rest] = this.linkedRuleForm.selectedSegments ?? [];
    const primary = (first ?? 'CONSENT_EXPIRING') as AudienceSegmentCode;
    return {
      ruleName,
      ruleDescription: this.linkedRuleForm.ruleDescription?.trim() || undefined,
      ruleType: this.linkedRuleForm.ruleType,
      predefinedScenario:
        this.linkedRuleForm.ruleType === 'PREDEFINED_SCENARIO'
          ? this.linkedRuleForm.predefinedScenario ?? null
          : null,
      triggerEvent:
        this.linkedRuleForm.ruleType === 'CUSTOM'
          ? this.linkedRuleForm.triggerEvent?.trim() || undefined
          : undefined,
      primarySegment: primary,
      additionalSegmentCodes: rest.length ? rest : undefined,
      scheduleType: this.linkedRuleForm.scheduleType,
      scheduledAt:
        this.linkedRuleForm.scheduleType === 'SCHEDULED'
          ? this.toIso(this.linkedRuleForm.scheduledAt) ?? null
          : null,
      recurringCron: this.linkedRuleForm.scheduleType === 'RECURRING' ? this.linkedRuleForm.recurringCron || null : null,
      broadcastChannels: [...(this.linkedRuleForm.broadcastChannels || [])],
    };
  }

  private buildLinkedCreatePayload(): LinkedConsentAndRuleCreatePayload {
    return {
      consent: this.buildPayload(),
      rule: this.linkedRulePayload(),
      createLinkedRule: true,
    };
  }

  submitLinkedForApproval(): void {
    if (this.linkedBusy()) {
      return;
    }
    if (this.consentDbId() && this.linkedRuleDbId()) {
      this.resubmitPersistedLinkedPair();
      return;
    }
    this.formSubmitted.set(true);
    this.form.markAllAsTouched();
    if (!this.warnLinkedBlockers()) {
      return;
    }
    const body = this.buildLinkedCreatePayload();
    this.linkedBusy.set(true);
    this.subs.add(
      this.api.createLinkedConsentAndRule(body).subscribe({
        next: (res) => {
          if (!res.success || !res.data?.consent?.id) {
            this.linkedBusy.set(false);
            return;
          }
          const cid = res.data.consent.id;
          this.consentDbId.set(cid);
          this.consentIdPreview.set(res.data.consent.consentId);
          this.loadedStatus.set('DRAFT');
          this.linkedRuleDbId.set(res.data.rule?.id ?? null);
          this.subs.add(
            this.api.submitLinked(cid).subscribe({
              next: (r2) => {
                this.linkedBusy.set(false);
                if (r2.success && r2.data?.consent) {
                  this.consentIdPreview.set(r2.data.consent.consentId);
                  this.markSubmitted(r2.data.consent.status);
                  this.notify.success('Submitted', r2.message || 'Linked consent and rule submitted for approval.');
                  void this.router.navigate(['/maker/consents', cid, 'edit'], { replaceUrl: true });
                }
              },
              error: (err) => {
                this.linkedBusy.set(false);
                this.showSaveError(err, 'Not submitted');
                void this.router.navigate(['/maker/consents', cid, 'edit'], { replaceUrl: true });
              },
            }),
          );
        },
        error: (err) => {
          this.linkedBusy.set(false);
          this.showSaveError(err, 'Not submitted');
        },
      }),
    );
  }

  private resubmitPersistedLinkedPair(): void {
    this.formSubmitted.set(true);
    this.form.markAllAsTouched();
    if (!this.warnLinkedBlockers()) {
      return;
    }
    const cid = this.consentDbId()!;
    const rid = this.linkedRuleDbId()!;
    this.linkedBusy.set(true);
    this.subs.add(
      this.api.saveDraft(cid, this.buildPayload()).subscribe({
        next: (res) => {
          if (!res.success) {
            this.linkedBusy.set(false);
            return;
          }
          this.subs.add(
            this.rulesApi.saveLinkedDraft(rid, this.linkedRulePayload()).subscribe({
              next: (r2) => {
                if (!r2.success) {
                  this.linkedBusy.set(false);
                  return;
                }
                this.subs.add(
                  this.api.submitLinked(cid).subscribe({
                    next: (r3) => {
                      this.linkedBusy.set(false);
                      if (r3.success && r3.data?.consent) {
                        this.markSubmitted(r3.data.consent.status);
                        this.notify.success('Submitted', r3.message || 'Linked pair submitted for approval.');
                        void this.router.navigate(['/maker/consents', cid, 'edit'], { replaceUrl: true });
                      }
                    },
                    error: (err) => {
                      this.linkedBusy.set(false);
                      this.showSaveError(err, 'Not submitted');
                    },
                  }),
                );
              },
              error: (err) => {
                this.linkedBusy.set(false);
                this.showSaveError(err, 'Not submitted');
              },
            }),
          );
        },
        error: (err) => {
          this.linkedBusy.set(false);
          this.showSaveError(err, 'Not submitted');
        },
      }),
    );
  }

  onTagsFromMessage(keys: string[]): void {
    const cur = new Set([...(this.form.controls.tagsUsed.value || [])]);
    for (const k of keys) {
      cur.add(k);
    }
    this.form.controls.tagsUsed.setValue(Array.from(cur));
  }

  onLanguagesChange(langs: ConsentLanguageCode[]): void {
    this.activeLanguages.set(langs);
    const map = { ...this.languageContentMap() };
    for (const l of langs) {
      if (!(l in map)) {
        map[l] = '';
      }
    }
    this.languageContentMap.set(map);
  }

  onActiveEditorLanguageChange(lang: ConsentLanguageCode): void {
    this.activeEditorLanguage.set(lang);
  }

  onLanguageContentChange(event: { languageCode: string; content: string }): void {
    this.languageContentMap.update((m) => ({ ...m, [event.languageCode]: event.content }));
  }

  private buildPayload(): ConsentCreatePayload {
    const v = this.form.getRawValue();
    let days = Number.parseInt(v.validityPreset, 10);
    let start: string | undefined;
    let end: string | undefined;
    if (v.validityPreset === 'custom') {
      start = v.validityStartDate || undefined;
      end = v.validityEndDate || undefined;
      if (start && end) {
        const d0 = new Date(start);
        const d1 = new Date(end);
        days = Math.max(1, Math.ceil((d1.getTime() - d0.getTime()) / 86400000));
      } else {
        days = 365;
      }
    }
    if (!Number.isFinite(days) || days < 1) {
      days = 365;
    }

    const contentMap = this.languageContentMap();
    const translations: ConsentTranslationInput[] = this.activeLanguages().map((lang) => ({
      languageCode: lang,
      content: contentMap[lang] ?? (lang === 'en' ? v.consentMessage || '' : ''),
    }));

    return {
      consentName: v.consentName.trim(),
      description: v.description,
      category: v.category,
      validityPeriodDays: days,
      validityStartDate: v.validityPreset === 'custom' ? start : undefined,
      validityEndDate: v.validityPreset === 'custom' ? end : undefined,
      consentMessage: v.consentMessage || '',
      channelEmail: v.channelEmail,
      channelSms: v.channelSms,
      channelPush: v.channelPush,
      channelWhatsapp: v.channelWhatsapp,
      channelRcs: v.channelRcs,
      tagsUsed: [...(v.tagsUsed || [])],
      searchTags: (v.tagsUsed || []).join(','),
      translations,
    };
  }

  saveDraft(): void {
    // A double-click must not create two consents or send two saves
    if (!this.editable() || this.saving()) {
      return;
    }
    if (this.createLinkedBroadcastRule() && !this.consentDbId()) {
      this.notify.warning(
        'Linked workflow',
        'Uncheck “Create paired broadcast rule” to save a consent-only draft, or use “Submit linked for approval”.',
      );
      return;
    }
    this.formSubmitted.set(true);
    if (this.form.controls.consentName.invalid) {
      this.notify.warning('Validation', 'Please enter a consent name before saving.');
      return;
    }
    this.form.controls.consentName.markAsTouched();
    const payload = this.buildPayload();
    const id = this.consentDbId();
    this.saving.set(true);
    if (!id) {
      this.subs.add(
        this.api.createConsent(payload).pipe(finalize(() => this.saving.set(false))).subscribe({
          next: (res) => {
            if (res.success && res.data) {
              this.consentDbId.set(res.data.id);
              this.consentIdPreview.set(res.data.consentId);
              this.loadedStatus.set(res.data.status);
              this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
              this.notify.success('Draft saved', res.message || 'Draft created.');
              if (res.data.translations) {
                this.renderMap.set(buildRenderMap(res.data.translations));
              }
              void this.router.navigate(['/maker/consents', res.data.id, 'edit'], { replaceUrl: true });
            }
          },
          error: (err) => this.showSaveError(err),
        }),
      );
      return;
    }
    if (this.linkedRuleDbId() != null && this.createLinkedBroadcastRule()) {
      this.autosaveBusy.set(true);
      this.subs.add(
        this.api.saveDraft(id, payload).subscribe({
          next: (res) => {
            if (!res.success) {
              this.autosaveBusy.set(false);
              this.saving.set(false);
              return;
            }
            const rid = this.linkedRuleDbId()!;
            this.subs.add(
              this.rulesApi
                .saveLinkedDraft(rid, this.linkedRulePayload())
                .pipe(finalize(() => this.saving.set(false)))
                .subscribe({
                  next: (r2) => {
                    this.autosaveBusy.set(false);
                    if (r2.success) {
                      this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
                      this.notify.success('Draft saved', res.message || 'Consent and linked rule saved.');
                      this.auditCard?.load();
                    }
                  },
                  error: (err) => {
                    this.autosaveBusy.set(false);
                    this.showSaveError(err);
                  },
                }),
            );
          },
          error: (err) => {
            this.autosaveBusy.set(false);
            this.saving.set(false);
            this.showSaveError(err);
          },
        }),
      );
      return;
    }
    this.autosaveBusy.set(true);
    this.subs.add(
      this.api.saveDraft(id, payload).pipe(finalize(() => this.saving.set(false))).subscribe({
        next: (res) => {
          this.autosaveBusy.set(false);
          if (res.success && res.data) {
            this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
            this.notify.success('Draft saved', res.message || 'Saved.');
            this.auditCard?.load();
            if (res.data.translations) {
              this.renderMap.set(buildRenderMap(res.data.translations));
            }
          }
        },
        error: (err) => {
          this.autosaveBusy.set(false);
          this.showSaveError(err);
        },
      }),
    );
  }

  /** Save/submit failed: tell the user why (field errors, server message, or offline). */
  private showSaveError(
    err: { status?: number; error?: { message?: string; errorCode?: string; data?: unknown } },
    title = 'Draft not saved',
  ): void {
    let msg = err?.error?.message || 'Please try again.';
    if (err?.status === 0) {
      msg = 'Cannot reach the server. Check your connection — your changes are still on this page.';
    } else if (err?.error?.errorCode === 'VALIDATION_ERROR' && err.error.data && typeof err.error.data === 'object') {
      msg = Object.values(err.error.data as Record<string, string>).join('; ') || msg;
    }
    this.notify.error(title, msg);
  }

  private tryAutoSave(): void {
    if (this.createLinkedBroadcastRule() && !this.consentDbId()) {
      return;
    }
    if (!this.editable() || !this.consentDbId() || !this.nameOk() || this.saving() || this.autosaveBusy()) {
      return;
    }
    this.logger.debug('CreateConsent', 'Auto-save tick');
    this.autosaveBusy.set(true);
    const id = this.consentDbId()!;
    this.subs.add(
      this.api.saveDraft(id, this.buildPayload()).subscribe({
        next: (res) => {
          this.autosaveBusy.set(false);
          if (res.success) {
            this.lastSaved.set(new Date().toLocaleTimeString('en-IN', { hour12: false }));
            this.auditCard?.load();
            const rid = this.linkedRuleDbId();
            if (rid != null && this.createLinkedBroadcastRule()) {
              this.subs.add(this.rulesApi.saveLinkedDraft(rid, this.linkedRulePayload()).subscribe());
            }
          }
        },
        error: () => {
          this.autosaveBusy.set(false);
        },
      }),
    );
  }

  submitForApproval(): void {
    // A double-click must produce exactly one submission
    if (this.saving()) {
      return;
    }
    this.formSubmitted.set(true);
    this.form.markAllAsTouched();
    const blockers = this.submitBlockers();
    if (blockers.length) {
      this.notify.warning('Cannot submit yet', blockers.join('; '));
      return;
    }
    const id = this.consentDbId();
    if (!id) {
      this.notify.warning('Cannot submit yet', 'Save the draft first.');
      return;
    }
    this.saving.set(true);
    this.subs.add(
      this.api.saveDraft(id, this.buildPayload()).subscribe({
        next: (saved) => {
          if (!saved.success) {
            this.saving.set(false);
            this.notify.error('Not submitted', saved.message || 'The draft could not be saved. Please try again.');
            return;
          }
          this.subs.add(
            this.api
              .submitForApproval(id)
              .pipe(finalize(() => this.saving.set(false)))
              .subscribe({
                next: (res) => {
                  if (res.success && res.data) {
                    this.markSubmitted(res.data.status);
                    this.notify.success('Submitted', res.message || 'Submitted for approval.');
                    void this.router.navigate(['/maker/consents', id, 'edit'], { replaceUrl: true });
                  }
                },
                error: (err) => this.showSaveError(err, 'Not submitted'),
              }),
          );
        },
        error: (err) => {
          this.saving.set(false);
          this.showSaveError(err, 'Not submitted');
        },
      }),
    );
  }

  duplicateAsNew(): void {
    if (!this.loadedConsent) {
      return;
    }
    void this.router.navigate(['/maker/consents/new'], { state: { from: this.loadedConsent } });
  }

  private markSubmitted(status: ConsentStatus): void {
    this.loadedStatus.set(status);
    this.form.disable({ emitEvent: false });
    this.auditCard?.load();
  }

  isCreatePage(): boolean {
    return !this.route.snapshot.paramMap.get('id');
  }

  progress(): { details: boolean; message: boolean; channels: boolean; ready: boolean } {
    const d = this.form.controls.description.value?.trim() && this.form.controls.category.valid;
    const m = !!this.stripHtmlClient(this.form.controls.consentMessage.value || '');
    const fv = this.form.getRawValue();
    const c = fv.channelEmail || fv.channelSms || fv.channelPush || fv.channelWhatsapp || fv.channelRcs;
    return {
      details: this.nameOk() && !!d,
      message: m,
      channels: c,
      ready: this.canSubmit(),
    };
  }

  onTagAdded(newTag: MergeTag): void {
    this.subs.add(
      this.mergeApi.getMergeTags().subscribe((tags: MergeTag[]) => {
        this.mergeTags = tags;
        this.grouped = groupMergeTagsByCategory(tags);
      }),
    );
  }

  onLinkedScenarioChange(): void {
    this.linkedRuleForm.selectedSegments = [];
    this.refreshDrillDownPreview();
  }

  onAiInsert(event: AiInsertEvent): void {
    if (!this.editable()) {
      this.notify.warning('View only', 'This consent can no longer be edited.');
      return;
    }
    const lang = event.languageCode || this.activeEditorLanguage();

    // Make sure the editor is showing the language we're inserting into,
    // so the visible editor and the stored content stay in sync.
    if (this.activeEditorLanguage() !== lang) {
      this.activeEditorLanguage.set(lang as ConsentLanguageCode);
    }

    // Write directly into the per-language map — authoritative source of truth.
    // (append/replace/insert all resolve to "set this language's content".)
    const existing = this.languageContentMap()[lang] ?? '';
    let next: string;
    if (event.mode === 'append' && existing) {
      next = existing + '\n' + event.text;
    } else {
      next = event.text; // 'replace' and 'insert' on a fresh language both just set content
    }
    this.languageContentMap.update((m) => ({ ...m, [lang]: next }));

    // Mirror English into the form control for submit-validation back-compat.
    if (lang === 'en') {
      this.form.controls.consentMessage.setValue(next, { emitEvent: true });
    }

    // Let the editor re-render from the updated map on the next tick.
    this.msgCard.syncFromLanguageMap(lang);
  }

  private stripHtmlClient(html: string): string {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  private truncateClient(text: string, max: number): string {
    return text.length > max ? text.slice(0, max - 3) + '...' : text;
  }

  /** Client-side fallback so preview isn't empty before first save; server renderMap wins once populated. */
  readonly liveRenderMap = computed<ChannelLanguageRenderMap>(() => {
    const server = this.renderMap();
    if (!this.editable() && server && Object.keys(server).length) {
      return server;
    }
    const contentMap = this.languageContentMap();
    const flags = this.channelFlags();
    const channels: string[] = [];
    if (flags.EMAIL) channels.push('EMAIL');
    if (flags.SMS) channels.push('SMS');
    if (flags.WHATSAPP) channels.push('WHATSAPP');
    if (flags.PUSH) channels.push('PUSH');
    if (flags.RCS) channels.push('RCS');

    const map: ChannelLanguageRenderMap = {};
    for (const lang of this.activeLanguages()) {
      map[lang] = {};
      const html = contentMap[lang] ?? '';
      for (const ch of channels) {
        if (ch === 'EMAIL') map[lang][ch] = html;
        else if (ch === 'SMS') map[lang][ch] = this.truncateClient(this.stripHtmlClient(html), 160);
        else if (ch === 'WHATSAPP') map[lang][ch] = this.truncateClient(this.stripHtmlClient(html), 200);
        else if (ch === 'RCS') map[lang][ch] = this.truncateClient(this.stripHtmlClient(html), 1000);
        else if (ch === 'PUSH') map[lang][ch] = this.truncateClient(this.stripHtmlClient(html), 100);
      }
    }
    return map;
  });



}