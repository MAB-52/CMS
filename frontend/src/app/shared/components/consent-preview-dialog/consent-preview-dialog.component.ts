import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MergeTag } from '../../../core/models/consent.model';
import { sanitizeRichHtml } from '../../../core/utils/safe-html.util';

export interface ConsentPreviewDialogData {
  html: string;
  mergeTags: MergeTag[];
  dir?: 'ltr' | 'rtl';
}

@Component({
  selector: 'app-consent-preview-dialog',
  standalone: true,
  imports: [MatDialogModule, ButtonModule, TooltipModule],
  templateUrl: './consent-preview-dialog.component.html',
  styleUrls: ['./consent-preview-dialog.component.css'],
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

    return this.sanitizer.bypassSecurityTrustHtml(sanitizeRichHtml(html));
  }

  private escape(s: string): string {
    return s
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }
}