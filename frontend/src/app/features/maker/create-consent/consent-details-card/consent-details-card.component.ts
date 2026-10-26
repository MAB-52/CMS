import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { ConsentCategory, ConsentStatus } from '../../../../core/models/consent.model';
import { StatusBadgeComponent } from '../../../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-consent-details-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StatusBadgeComponent,
  ],
  // Scoped to this component only — does not affect any other date pickers in the app
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  templateUrl: './consent-details-card.component.html',
  styleUrl: './consent-details-card.component.css',
})
export class ConsentDetailsCardComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input() status: ConsentStatus | null = null;
  @Input() consentIdPreview = '';
  @Input() idLoading = false;
  @Input() submitted = false;

  readonly categories: { value: ConsentCategory; label: string; icon: string }[] = [
    { value: 'MARKETING', label: 'Marketing', icon: '🎯' },
    { value: 'TRANSACTIONAL', label: 'Transactional', icon: '💳' },
    { value: 'SERVICE', label: 'Service', icon: '🔧' },
  ];

  readonly presets: { value: string; label: string }[] = [
    { value: '15', label: '15 Days' },
    { value: '30', label: '30 Days' },
    { value: '60', label: '60 Days' },
    { value: '90', label: '90 Days' },
    { value: '180', label: '6 Months' },
    { value: '365', label: '1 Year' },
    { value: '730', label: '2 Years' },
    { value: 'custom', label: 'Custom Range' },
  ];

  /** Today at midnight — used as the floor for the Start Date picker. */
  readonly todayDate: Date = (() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  })();

  // ---- Datepicker helpers (string control <-> Date for the calendar UI) ----

  /** Converts the control's 'YYYY-MM-DD' string into a Date for display in the picker. */
  parseDateStr(value: string | null | undefined): Date | null {
    if (!value) {
      return null;
    }
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  /** Converts a Date back to 'YYYY-MM-DD' so the form control keeps the same string format it always had. */
  private formatDateStr(d: Date | null): string {
    if (!d) {
      return '';
    }
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  }

  /** Start Date can never be before today. */
  startMinDate(): Date {
    return this.todayDate;
  }

  /** End Date can never be before the chosen Start Date (falls back to today if Start isn't set yet). */
  endMinDate(): Date {
    return this.parseDateStr(this.form.controls['validityStartDate'].value) ?? this.todayDate;
  }

  onStartDateChange(event: MatDatepickerInputEvent<Date>): void {
    const ctrl = this.form.controls['validityStartDate'];
    ctrl.setValue(this.formatDateStr(event.value));
    ctrl.markAsTouched();
    ctrl.markAsDirty();
  }

  onEndDateChange(event: MatDatepickerInputEvent<Date>): void {
    const ctrl = this.form.controls['validityEndDate'];
    ctrl.setValue(this.formatDateStr(event.value));
    ctrl.markAsTouched();
    ctrl.markAsDirty();
  }

  // ---- everything below is unchanged ----

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
        errs.push('Consent Name is required');
      }
      if (n.hasError('maxlength')) {
        errs.push('Consent Name must be at most 200 characters');
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
    const p = this.form.controls['validityPreset'];
    if (p.value === 'custom') {
      const s = this.form.controls['validityStartDate'].value;
      const e = this.form.controls['validityEndDate'].value;
      if (this.submitted && (!s || !e)) {
        errs.push('Custom validity requires start and end dates');
      }
    }
    return errs;
  }
}