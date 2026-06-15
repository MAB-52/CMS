import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
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
    <div class="dlg" [attr.data-color]="data.confirmColor">

      <!-- Header -->
      <div class="head">
        @if (data.icon) {
          <div class="icon-wrap" [attr.data-color]="data.confirmColor">
            <span class="ico">{{ data.icon }}</span>
          </div>
        }
        <div>
          <h2 class="ttl">{{ data.title }}</h2>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Content -->
      <mat-dialog-content class="content">
        <mat-form-field appearance="outline" floatLabel="always" class="full">
          <mat-label>{{ data.textareaLabel }}</mat-label>
          <textarea
            matInput
            rows="4"
            [formControl]="text"
            [placeholder]="data.placeholder"
          ></textarea>
          <mat-hint align="end">
            {{ (text.value || '').length }} / min {{ data.minLength }}
          </mat-hint>
        </mat-form-field>

        @if (submitted && text.invalid) {
          <p class="err">Please enter at least {{ data.minLength }} characters.</p>
        }
      </mat-dialog-content>

      <!-- Actions -->
      <mat-dialog-actions class="actions">
        <button type="button" mat-button class="cancel-btn" mat-dialog-close>
          Cancel
        </button>
        <button type="button" mat-flat-button class="confirm-btn" (click)="submit()">
          {{ data.confirmLabel }}
        </button>
      </mat-dialog-actions>

    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    /* ── SHELL ── */
    .dlg {
      width: 560px;
      max-width: 100%;
      border-radius: 20px;
      background: #ffffff;
      overflow: hidden;
      box-shadow:
        0 4px 6px rgba(15, 23, 42, 0.04),
        0 24px 56px rgba(15, 23, 42, 0.14);
    }

    /* ── HEADER ── */
    .head {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 24px 24px 20px;
    }

    /* icon */
    .icon-wrap {
      width: 46px;
      height: 46px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .icon-wrap[data-color='warn']    { background: #fef2f2; }
    .icon-wrap[data-color='success'] { background: #f0fdf4; }
    .icon-wrap[data-color='warning'] { background: #fffbeb; }
    .icon-wrap[data-color='primary'] { background: #eff6ff; }
    .icon-wrap[data-color='accent']  { background: #f5f3ff; }

    .ico {
      font-size: 22px;
      line-height: 1;
    }

    .ttl {
      margin: 0;
      font-size: 19px;
      font-weight: 700;
      letter-spacing: -0.02em;
      color: #0f172a;
      line-height: 1.25;
    }

    /* ── DIVIDER ── */
    .divider {
      height: 1px;
      background: #f1f5f9;
      margin: 0 24px;
    }

    /* ── CONTENT ── */
    .content {
      padding: 20px 24px 4px !important;
      overflow: visible !important;
      max-height: unset !important;
    }

    .full { width: 100%; }

    /* field wrapper */
    ::ng-deep .full .mat-mdc-text-field-wrapper {
      border-radius: 12px !important;
      background: #f8fafc !important;
      transition:
        background 0.15s ease,
        box-shadow 0.15s ease;
    }

    /* outline */
    ::ng-deep .full .mdc-notched-outline__leading,
    ::ng-deep .full .mdc-notched-outline__notch,
    ::ng-deep .full .mdc-notched-outline__trailing {
      border-color: #e2e8f0 !important;
      transition: border-color 0.15s ease;
    }

    ::ng-deep .full .mdc-notched-outline__notch {
      border-right: none !important;
    }

    /* hover */
    ::ng-deep .full:hover .mdc-notched-outline__leading,
    ::ng-deep .full:hover .mdc-notched-outline__notch,
    ::ng-deep .full:hover .mdc-notched-outline__trailing {
      border-color: #cbd5e1 !important;
    }

    /* focus */
    ::ng-deep .full.mat-focused .mdc-notched-outline__leading,
    ::ng-deep .full.mat-focused .mdc-notched-outline__notch,
    ::ng-deep .full.mat-focused .mdc-notched-outline__trailing {
      border-color: #3b82f6 !important;
      border-width: 1.5px !important;
    }

    ::ng-deep .full.mat-focused .mat-mdc-text-field-wrapper {
      background: #ffffff !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.10);
    }

    /* label */
    ::ng-deep .full .mat-mdc-floating-label {
      color: #64748b !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    ::ng-deep .full.mat-focused .mat-mdc-floating-label {
      color: #3b82f6 !important;
    }

    /* textarea */
    ::ng-deep .full textarea.mat-mdc-input-element {
      color: #0f172a !important;
      font-size: 14px !important;
      font-weight: 400;
      line-height: 1.65 !important;
      resize: none !important;
      min-height: 96px !important;
    }

    ::ng-deep .full textarea.mat-mdc-input-element::placeholder {
      color: #94a3b8 !important;
    }

    /* infix padding */
    ::ng-deep .full .mat-mdc-form-field-infix {
      padding-top: 20px !important;
      padding-bottom: 10px !important;
    }

    /* hint */
    ::ng-deep .full .mat-mdc-form-field-hint {
      font-size: 11px;
      font-weight: 600;
      color: #94a3b8;
    }

    ::ng-deep .full .mat-mdc-form-field-subscript-wrapper {
      margin-top: 6px;
      padding-inline: 2px;
    }

    /* ── ERROR ── */
    .err {
      margin: 6px 0 0;
      font-size: 12px;
      font-weight: 600;
      color: #ef4444;
      display: flex;
      align-items: center;
      gap: 5px;

      &::before {
        content: '⚠';
        font-size: 11px;
      }
    }

    /* ── ACTIONS ── */
    .actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      padding: 16px 24px 20px !important;
      min-height: unset !important;
      margin-top: 0 !important;
    }

    /* cancel */
    .cancel-btn {
      height: 40px;
      padding: 0 20px !important;
      border-radius: 10px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      color: #64748b !important;
      letter-spacing: 0;
      transition: background 0.15s ease, color 0.15s ease;

      &:hover {
        background: #f1f5f9 !important;
        color: #334155 !important;
      }
    }

    /* confirm */
    .confirm-btn {
      height: 40px;
      padding: 0 22px !important;
      border-radius: 10px !important;
      font-size: 14px !important;
      font-weight: 600 !important;
      letter-spacing: 0;
      color: #ffffff !important;
      transition: filter 0.15s ease, transform 0.15s ease;

      &:hover { filter: brightness(1.07); }
      &:active { transform: scale(0.98); }
    }

    .dlg[data-color='warn']    .confirm-btn { background: #ef4444 !important; }
    .dlg[data-color='success'] .confirm-btn { background: #16a34a !important; }
    .dlg[data-color='warning'] .confirm-btn { background: #d97706 !important; }
    .dlg[data-color='primary'] .confirm-btn { background: #2563eb !important; }
    .dlg[data-color='accent']  .confirm-btn { background: #7c3aed !important; }

    /* ── MOBILE ── */
    @media (max-width: 560px) {
      .dlg { width: 100%; }
      .head { padding: 20px 18px 16px; }
      .divider { margin: 0 18px; }
      .content { padding: 16px 18px 4px !important; }
      .actions {
        padding: 14px 18px 18px !important;
        flex-direction: column-reverse;
        gap: 8px;
      }
      .cancel-btn,
      .confirm-btn { width: 100%; height: 44px; }
      .ttl { font-size: 17px; }
    }
  `],
})
export class ReviewActionDialogComponent {
  readonly data = inject<ReviewActionDialogData>(MAT_DIALOG_DATA);

  private readonly ref = inject(
    MatDialogRef<ReviewActionDialogComponent, string | null>
  );

  readonly text = new FormControl<string>('', { nonNullable: true });
  submitted = false;

  constructor() {
    this.text.setValidators([
      Validators.required,
      Validators.minLength(this.data.minLength),
    ]);
  }

  submit(): void {
    this.submitted = true;
    this.text.markAsTouched();
    if (this.text.invalid) return;
    this.ref.close(this.text.value.trim());
  }
}