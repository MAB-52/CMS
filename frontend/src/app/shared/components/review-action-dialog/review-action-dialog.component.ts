import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface ReviewActionDialogData {
  title: string;
  icon?: string;
  iconColor?: string;
  textareaLabel: string;
  placeholder: string;
  confirmLabel: string;
  confirmColor: 'primary' | 'warn' | 'accent' | 'success' | 'warning';
  minLength: number;
}

@Component({
  selector: 'app-review-action-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  template: `
    <div class="dlg">
      <div class="head">
        @if (data.icon) {
          <span class="ico" [style.color]="data.iconColor || '#d97706'">{{ data.icon }}</span>
        }
        <h2 mat-dialog-title class="ttl">{{ data.title }}</h2>
      </div>
      <mat-dialog-content>
        <mat-form-field appearance="outline" class="full">
          <mat-label>{{ data.textareaLabel }}</mat-label>
          <textarea matInput rows="6" [formControl]="text" [placeholder]="data.placeholder"></textarea>
          <mat-hint align="end">{{ (text.value || '').length }} characters (min {{ data.minLength }})</mat-hint>
        </mat-form-field>
        @if (submitted && text.invalid) {
          <p class="err">Please enter at least {{ data.minLength }} characters.</p>
        }
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button type="button" mat-stroked-button class="ciq-btn-secondary" mat-dialog-close>Cancel</button>
        @if (data.confirmColor === 'success') {
          <button type="button" mat-flat-button class="ciq-btn-success" (click)="submit()">{{ data.confirmLabel }}</button>
        } @else if (data.confirmColor === 'warning') {
          <button type="button" mat-flat-button class="ciq-btn-warning" (click)="submit()">{{ data.confirmLabel }}</button>
        } @else if (data.confirmColor === 'warn') {
          <button type="button" mat-flat-button color="warn" (click)="submit()">{{ data.confirmLabel }}</button>
        } @else {
          <button type="button" mat-flat-button color="primary" (click)="submit()">{{ data.confirmLabel }}</button>
        }
      </mat-dialog-actions>
    </div>
  `,
  styles: [
    `
      .dlg {
        padding-top: 4px;
      }
      .head {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .ico {
        font-size: 28px;
      }
      .ttl {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
      }
      .full {
        width: 100%;
        margin-top: 8px;
      }
      .err {
        color: #b91c1c;
        font-size: 13px;
        margin: 0 0 8px;
      }
    `,
  ],
})
export class ReviewActionDialogComponent {
  readonly data = inject<ReviewActionDialogData>(MAT_DIALOG_DATA);
  private readonly ref = inject(MatDialogRef<ReviewActionDialogComponent, string | null>);

  readonly text = new FormControl<string>('', { nonNullable: true });
  submitted = false;

  constructor() {
    const d = this.data;
    this.text.setValidators([Validators.required, Validators.minLength(d.minLength)]);
  }

  submit(): void {
    this.submitted = true;
    this.text.markAsTouched();
    if (this.text.invalid) {
      return;
    }
    this.ref.close(this.text.value.trim());
  }
}
