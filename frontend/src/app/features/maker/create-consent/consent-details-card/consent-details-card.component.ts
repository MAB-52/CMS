import { Component, DestroyRef, Input, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';
import { ConsentCategory, ConsentStatus } from '../../../../core/models/consent.model';
import { StatusBadgeComponent } from '../../../../shared/components/status-badge/status-badge.component';

/** Validity must be 1–3650 days; a custom range needs both dates and end strictly after start. */
export function validityError(preset: string, start: string | null | undefined, end: string | null | undefined): string | null {
  if (preset !== 'custom') {
    return null;
  }
  if (!start || !end) {
    return 'Custom validity requires start and end dates';
  }
  const days = Math.ceil((new Date(end).getTime() - new Date(start).getTime()) / 86400000);
  if (!Number.isFinite(days) || days < 1) {
    return 'Validity end date must be after the start date';
  }
  if (days > 3650) {
    return 'Validity can be at most 3650 days (10 years)';
  }
  return null;
}

@Component({
  selector: 'app-consent-details-card',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    MessageModule,
    SelectModule,
    TextareaModule,
    TooltipModule,
    StatusBadgeComponent,
  ],
  templateUrl: './consent-details-card.component.html',
  styleUrl: './consent-details-card.component.css',
})
export class ConsentDetailsCardComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  @Input({ required: true }) form!: FormGroup;
  @Input() status: ConsentStatus | null = null;
  @Input() consentIdPreview = '';
  @Input() idLoading = false;
  @Input() submitted = false;

  readonly categories: { value: ConsentCategory; label: string; icon: string; color: string; hint: string }[] = [
    { value: 'MARKETING', label: 'Marketing', icon: 'pi pi-megaphone', color: 'var(--is-secondary)', hint: 'Promotions, offers and newsletters' },
    { value: 'TRANSACTIONAL', label: 'Transactional', icon: 'pi pi-credit-card', color: 'var(--is-blue)', hint: 'Account, payment and order messages' },
    { value: 'SERVICE', label: 'Service', icon: 'pi pi-cog', color: 'var(--is-teal)', hint: 'Service updates and notifications' },
  ];

  readonly presets: { value: string; label: string }[] = [
    { value: '15', label: '15 days' },
    { value: '30', label: '30 days' },
    { value: '60', label: '60 days' },
    { value: '90', label: '90 days' },
    { value: '180', label: '6 months' },
    { value: '365', label: '1 year' },
    { value: '730', label: '2 years' },
    { value: 'custom', label: 'Custom range' },
  ];

  readonly todayDate: Date = (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  })();

  length(name: string): number {
    return (this.form.controls[name].value as string | null)?.length ?? 0;
  }

  invalid(name: string): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || this.submitted);
  }

  startDate: Date | null = null;
  endDate: Date | null = null;
  endMin: Date = this.addDays(this.todayDate, 1);

  ngOnInit(): void {
    this.syncFromForm();
    for (const name of ['validityStartDate', 'validityEndDate']) {
      this.form.controls[name].valueChanges
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => this.syncFromForm());
    }
  }

  private syncFromForm(): void {
    const start = this.parseDateStr(this.form.controls['validityStartDate'].value);
    const end = this.parseDateStr(this.form.controls['validityEndDate'].value);
    if (!this.sameDay(start, this.startDate)) this.startDate = start;
    if (!this.sameDay(end, this.endDate)) this.endDate = end;
    const min = this.addDays(start ?? this.todayDate, 1);
    if (!this.sameDay(min, this.endMin)) this.endMin = min;
  }

  private addDays(d: Date, n: number): Date {
    const out = new Date(d);
    out.setDate(out.getDate() + n);
    return out;
  }

  private sameDay(a: Date | null, b: Date | null): boolean {
    if (!a || !b) return a === b;
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  parseDateStr(value: string | null | undefined): Date | null {
    if (!value) {
      return null;
    }
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(value);
    const d = m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  private formatDateStr(d: Date | null): string {
    if (!d) {
      return '';
    }
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  onStartDateChange(value: Date | null): void {
    this.setDate('validityStartDate', value);
    if (value && this.endDate && this.endDate <= value) {
      this.setDate('validityEndDate', null);
    }
  }

  onEndDateChange(value: Date | null): void {
    this.setDate('validityEndDate', value);
  }

  private setDate(name: string, value: Date | null): void {
    const ctrl = this.form.controls[name];
    const next = this.formatDateStr(value);
    if (ctrl.value !== next) {
      ctrl.setValue(next);
    }
    ctrl.markAsTouched();
    ctrl.markAsDirty();
  }

  addTag(raw: string): void {
    const v = raw.replace(/,/g, '').trim();
    if (!v) {
      return;
    }
    const cur = (this.form.controls['tagsUsed'].value as string[]) || [];
    if (cur.includes(v)) {
      return;
    }
    this.form.controls['tagsUsed'].setValue([...cur, v]);
  }

  removeTag(tag: string): void {
    const cur = (this.form.controls['tagsUsed'].value as string[]) || [];
    this.form.controls['tagsUsed'].setValue(cur.filter((t) => t !== tag));
  }

  validationErrors(): string[] {
    const errs: string[] = [];
    const n = this.form.controls['consentName'];
    if (n.touched || this.submitted) {
      if (n.hasError('required')) {
        errs.push('Consent name is required');
      }
      if (n.hasError('maxlength')) {
        errs.push('Consent name must be at most 200 characters');
      }
    }
    const d = this.form.controls['description'];
    if (d.touched || this.submitted) {
      if (d.hasError('required')) {
        errs.push('Description is required');
      }
      if (d.hasError('maxlength')) {
        errs.push('Description must be at most 1000 characters');
      }
    }
    const c = this.form.controls['category'];
    if (c.touched || this.submitted) {
      if (c.hasError('required')) {
        errs.push('Category must be selected');
      }
    }
    const s = this.form.controls['validityStartDate'];
    const e = this.form.controls['validityEndDate'];
    if (s.touched || e.touched || this.submitted) {
      const vErr = validityError(this.form.controls['validityPreset'].value, s.value, e.value);
      if (vErr) {
        errs.push(vErr);
      }
    }
    return errs;
  }
}
