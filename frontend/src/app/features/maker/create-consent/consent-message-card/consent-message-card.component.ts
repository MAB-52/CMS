import { Component, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { QuillModule, QuillEditorComponent } from 'ngx-quill';
import Quill from 'quill';
import { MergeTag } from '../../../../core/models/consent.model';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';
import {
  ConsentPreviewDialogComponent,
  ConsentPreviewDialogData,
} from '../../../../shared/components/consent-preview-dialog/consent-preview-dialog.component';

@Component({
  selector: 'app-consent-message-card',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule, QuillModule],
  templateUrl: './consent-message-card.component.html',
  styleUrl: './consent-message-card.component.scss',
})
export class ConsentMessageCardComponent {
  private readonly dialog = inject(MatDialog);
  private readonly logger = inject(LoggerService);
  private readonly notify = inject(NotificationService);

  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) grouped: Record<string, MergeTag[]> = {};
  @Input({ required: true }) allTags: MergeTag[] = [];

  @Output() readonly tagsUsedChange = new EventEmitter<string[]>();

  @ViewChild('editor') quillComp?: QuillEditorComponent;

  quillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'bullet' }, { list: 'ordered' }],
      [{ indent: '-1' }, { indent: '+1' }],
      ['link'],
    ],
  };

  private quill?: Quill;

  get categories(): string[] {
    return Object.keys(this.grouped || {});
  }

  categoryIcon(cat: string): string {
    switch (cat) {
      case 'Customer':
        return '👤';
      case 'Company':
        return '🏢';
      case 'Date':
        return '📅';
      case 'Links':
        return '🔗';
      default:
        return '📎';
    }
  }

  isQuillReady(): boolean {
    return !!(this.quill || this.quillComp?.quillEditor);
  }

  usedKeys = new Set<string>();

  get usedKeysList(): string {
    return Array.from(this.usedKeys).join(', ');
  }

  charCount(): number {
    const html = (this.form.controls['consentMessage'].value as string) || '';
    const div = typeof document !== 'undefined' ? document.createElement('div') : null;
    if (!div) {
      return html.length;
    }
    div.innerHTML = html;
    return (div.textContent || '').length;
  }

  onEditorCreated(q: Quill): void {
    this.quill = q;
  }

  onContentChanged(event: { html?: string | null }): void {
    const html = event.html ?? '';
    /** Do not call setValue here: formControlName already syncs the control; double-writes cause RTL/cursor bugs. */
    this.usedKeys = this.detectUsedTags(html);
    this.tagsUsedChange.emit(Array.from(this.usedKeys));
  }

  detectUsedTags(html: string): Set<string> {
    const found = new Set<string>();
    const re = /\{\{[A-Z_]+\}\}/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      const key = m[0];
      if (this.allTags.some((t) => t.tagKey === key)) {
        found.add(key);
      }
    }
    return found;
  }

  insertTag(tag: MergeTag): void {
    const q = this.quill || this.quillComp?.quillEditor;
    if (!q) {
      this.logger.warn('ConsentMessageCard', 'Quill not initialized');
      this.notify.warning('Editor', 'Editor is still loading, please wait.');
      return;
    }
    const range = q.getSelection(true);
    const index = range ? range.index : q.getLength();
    const length = range && range.length ? range.length : 0;
    if (length > 0) {
      q.deleteText(index, length, 'user');
    }
    const insert = ` ${tag.tagKey} `;
    q.insertText(index, insert, 'user');
    try {
      q.formatText(index, insert.trim().length, 'color', '#6366f1');
    } catch {
      /* ignore */
    }
    const newIndex = index + insert.length;
    q.setSelection(newIndex, 0, 'silent');
    setTimeout(() => q.focus(), 50);
    this.logger.debug('ConsentMessageCard', `Inserted merge tag ${tag.tagKey}`);
  }

  openPreview(): void {
    const html = (this.form.controls['consentMessage'].value as string) || '';
    const text = html.replace(/<[^>]+>/g, '').trim();
    if (!text) {
      this.notify.warning('Preview', '⚠️ Please write a consent message first before previewing.');
      return;
    }
    const data: ConsentPreviewDialogData = {
      html,
      mergeTags: this.allTags,
    };
    this.dialog.open(ConsentPreviewDialogComponent, {
      width: '760px',
      maxHeight: '90vh',
      data,
    });
  }
}
