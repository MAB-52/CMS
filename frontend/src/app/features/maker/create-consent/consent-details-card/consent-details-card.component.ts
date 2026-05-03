import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
    StatusBadgeComponent,
  ],
  templateUrl: './consent-details-card.component.html',
  styleUrl: './consent-details-card.component.scss',
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
    { value: '30', label: '30 Days' },
    { value: '60', label: '60 Days' },
    { value: '90', label: '90 Days' },
    { value: '180', label: '6 Months' },
    { value: '365', label: '1 Year' },
    { value: '730', label: '2 Years' },
    { value: 'custom', label: 'Custom Range' },
  ];

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
