import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MergeTag } from '../../../core/models/consent.model';

export interface ConsentPreviewDialogData {
  html: string;
  mergeTags: MergeTag[];
}

@Component({
  selector: 'app-consent-preview-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div class="dlg">
      <div class="dlg-head">
        <h2 mat-dialog-title class="dlg-title">👁 Message Preview</h2>
        <button type="button" class="dlg-x" mat-dialog-close aria-label="Close">×</button>
      </div>
      <mat-dialog-content>
        <div class="dlg-info">
          ℹ️ Dynamic fields shown with sample values for preview only. Actual values will be used in production.
        </div>
        <div class="dlg-preview" [innerHTML]="sanitized"></div>
      </mat-dialog-content>
      <mat-dialog-actions align="center">
        <button mat-flat-button class="ciq-btn-secondary" mat-dialog-close>Close</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [
    `
      .dlg {
        max-height: 90vh;
        display: flex;
        flex-direction: column;
      }
      .dlg-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 8px;
      }
      .dlg-title {
        margin: 0;
        font-size: 18px;
        font-weight: 700;
      }
      .dlg-x {
        border: none;
        background: transparent;
        font-size: 22px;
        cursor: pointer;
        color: #64748b;
      }
      .dlg-info {
        background: #eff6ff;
        border: 1px solid #bfdbfe;
        border-radius: 8px;
        padding: 12px 14px;
        font-size: 13px;
        color: #1e40af;
        margin-bottom: 16px;
      }
      .dlg-preview {
        background: #fff;
        padding: 32px;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-size: 15px;
        line-height: 1.8;
        overflow: auto;
        max-height: 60vh;
      }
      :host ::ng-deep .preview-tag {
        background: #e0e7ff;
        color: #4338ca;
        padding: 2px 8px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 13px;
      }
    `,
  ],
})
export class ConsentPreviewDialogComponent {
  readonly data = inject<ConsentPreviewDialogData>(MAT_DIALOG_DATA);
  private readonly sanitizer = inject(DomSanitizer);

  get sanitized(): SafeHtml {
    let html = this.data.html || '';
    for (const t of this.data.mergeTags || []) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(key, 'g');
      const span = `<span class="preview-tag">${this.escape(t.sampleValue || '')}</span>`;
      html = html.replace(re, span);
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private escape(s: string): string {
    return s
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }
}
