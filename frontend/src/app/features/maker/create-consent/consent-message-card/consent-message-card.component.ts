// import {
//   Component, EventEmitter, Input, Output, OnInit,
//   OnDestroy, ElementRef, ViewChild, inject, AfterViewInit
// } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { FormGroup, ReactiveFormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { Subscription } from 'rxjs';
// import { Editor } from '@tiptap/core';
// import Document from '@tiptap/extension-document';
// import Paragraph from '@tiptap/extension-paragraph';
// import Text from '@tiptap/extension-text';
// import Bold from '@tiptap/extension-bold';
// import Italic from '@tiptap/extension-italic';
// import Underline from '@tiptap/extension-underline';
// import Strike from '@tiptap/extension-strike';
// import BulletList from '@tiptap/extension-bullet-list';
// import OrderedList from '@tiptap/extension-ordered-list';
// import ListItem from '@tiptap/extension-list-item';
// import Link from '@tiptap/extension-link';
// import Image from '@tiptap/extension-image';
// import TextAlign from '@tiptap/extension-text-align';
// import Placeholder from '@tiptap/extension-placeholder';
// import History from '@tiptap/extension-history';
// import HardBreak from '@tiptap/extension-hard-break';
// import Heading from '@tiptap/extension-heading';
// import { MergeTag } from '../../../../core/models/consent.model';
// import { ApiResponse } from '../../../../core/models/api-response.model';
// import { environment } from '../../../../../environments/environment';
// import { LoggerService } from '../../../../core/services/logger.service';
// import { NotificationService } from '../../../../core/services/notification.service';
// import { AddMergeTagDialogComponent } from '../../../../shared/components/add-merge-tag-dialog/add-merge-tag-dialog.component';
// import {
//   ConsentPreviewDialogComponent,
//   ConsentPreviewDialogData,
// } from '../../../../shared/components/consent-preview-dialog/consent-preview-dialog.component';
// import { VoiceInputService } from './voice.input.service';
// import { AiInsertEvent } from './ai-content-generator/ai-content-generator.component';

// @Component({
//   selector: 'app-consent-message-card',
//   standalone: true,
//   imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule],
//   templateUrl: './consent-message-card.component.html',
//   styleUrl: './consent-message-card.component.scss',
//   providers: [VoiceInputService],
// })
// export class ConsentMessageCardComponent implements OnInit, AfterViewInit, OnDestroy {
//   private readonly dialog       = inject(MatDialog);
//   private readonly logger       = inject(LoggerService);
//   private readonly notify       = inject(NotificationService);
//   private readonly http         = inject(HttpClient);
//   private readonly voiceService = inject(VoiceInputService);

//   private savedRange: { from: number; to: number } | null = null;

//   @Input({ required: true }) form!: FormGroup;
//   @Input({ required: true }) grouped: Record<string, MergeTag[]> = {};
//   @Input({ required: true }) allTags: MergeTag[] = [];
//   @Output() readonly tagsUsedChange = new EventEmitter<string[]>();
//   @Output() readonly tagAdded       = new EventEmitter<MergeTag>();

//   @ViewChild('editorEl')   editorEl!:   ElementRef<HTMLDivElement>;
//   @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

//   editor?: Editor;
//   usedKeys = new Set<string>();

//   // ── Voice state ────────────────────────────────────────────────
//   isListening    = false;
//   liveTranscript = '';
//   private _voiceSubs = new Subscription();

//   get categories(): string[] {
//     return Object.keys(this.grouped || {});
//   }

//   categoryIcon(cat: string): string {
//     const icons: Record<string, string> = {
//       Customer: '👤', Company: '🏢', Date: '📅', Links: '🔗',
//     };
//     return icons[cat] ?? '📎';
//   }

//   isEditorReady(): boolean {
//     return !!this.editor && !this.editor.isDestroyed;
//   }

//   charCount(): number {
//     if (!this.editor) return 0;
//     return this.editor.storage['characterCount']?.characters?.()
//       ?? this.editor.getText().length;
//   }

//   private saveSelection(): void {
//     if (this.editor && !this.editor.isDestroyed) {
//       const { from, to } = this.editor.state.selection;
//       this.savedRange = { from, to };
//     }
//   }

//   // ── Lifecycle ──────────────────────────────────────────────────

//   ngOnInit(): void {
//     // existing: nothing here — kept as-is
//   }

//   ngAfterViewInit(): void {
//     const initialValue = (this.form.controls['consentMessage'].value as string) || '';

//     this.editor = new Editor({
//       element: this.editorEl.nativeElement,
//       extensions: [
//         Document,
//         Paragraph,
//         Text,
//         HardBreak,
//         Bold,
//         Italic,
//         Underline,
//         Strike,
//         BulletList,
//         OrderedList,
//         ListItem,
//         History,
//         Heading.configure({ levels: [1, 2, 3] }),
//         Link.configure({
//           openOnClick: false,
//           HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' },
//         }),
//         Image.configure({
//           inline: false,
//           HTMLAttributes: { class: 'editor-image' },
//         }),
//         TextAlign.configure({ types: ['heading', 'paragraph'] }),
//         Placeholder.configure({
//           placeholder: 'Write your consent message here. Use the tags below to insert dynamic customer fields…',
//         }),
//       ],
//       content: initialValue,
//       onBlur: () => {
//         this.saveSelection();
//       },
//       onUpdate: ({ editor }) => {
//         const html = editor.getHTML();
//         this.form.controls['consentMessage'].setValue(html, { emitEvent: true });
//         this.usedKeys = this.detectUsedTags(html);
//         this.tagsUsedChange.emit(Array.from(this.usedKeys));
//       },
//     });

//     this.usedKeys = this.detectUsedTags(initialValue);
//     this.tagsUsedChange.emit(Array.from(this.usedKeys));
//     this._subscribeVoice();
//   }

//   ngOnDestroy(): void {
//     this.editor?.destroy();
//     this.voiceService.stop();
//     this._voiceSubs.unsubscribe();
//   }

//   // ── Toolbar actions ────────────────────────────────────────────

//   toggleBold():        void { this.editor?.chain().focus().toggleBold().run(); }
//   toggleItalic():      void { this.editor?.chain().focus().toggleItalic().run(); }
//   toggleUnderline():   void { this.editor?.chain().focus().toggleUnderline().run(); }
//   toggleStrike():      void { this.editor?.chain().focus().toggleStrike().run(); }
//   toggleBulletList():  void { this.editor?.chain().focus().toggleBulletList().run(); }
//   toggleOrderedList(): void { this.editor?.chain().focus().toggleOrderedList().run(); }
//   setAlignLeft():      void { this.editor?.chain().focus().setTextAlign('left').run(); }
//   setAlignCenter():    void { this.editor?.chain().focus().setTextAlign('center').run(); }
//   setAlignRight():     void { this.editor?.chain().focus().setTextAlign('right').run(); }
//   undo():              void { this.editor?.chain().focus().undo().run(); }
//   redo():              void { this.editor?.chain().focus().redo().run(); }

//   isActive(name: string, attrs?: Record<string, unknown>): boolean {
//     return this.editor?.isActive(name, attrs) ?? false;
//   }

//   setLink(): void {
//     const prev = this.editor?.getAttributes('link')['href'] as string ?? '';
//     const url = window.prompt('Enter URL', prev);
//     if (url === null) return;
//     if (!url) {
//       this.editor?.chain().focus().unsetLink().run();
//       return;
//     }
//     this.editor?.chain().focus().setLink({ href: url }).run();
//   }

//   // ── Image upload ───────────────────────────────────────────────

//   triggerImageUpload(): void {
//     this.imageInput.nativeElement.value = '';
//     this.imageInput.nativeElement.click();
//   }

//   onImageSelected(event: Event): void {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith('image/')) {
//       this.notify.error('Image', 'Only image files are supported.');
//       return;
//     }

//     if (file.size > 2 * 1024 * 1024) {
//       this.notify.error('Image', 'Image must be under 2 MB.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);

//     this.notify.info('Image', 'Uploading image…');

//     this.http.post<ApiResponse<{ url: string }>>(`${environment.apiUrl}/images/upload`, formData).subscribe({
//       next: (res) => {
//         const path = res.data?.url;
//         if (!path) {
//           this.notify.error('Image', 'Upload succeeded but no URL was returned.');
//           return;
//         }
//         const src = path.startsWith('http')
//           ? path
//           : `${environment.apiUrl.replace(/\/api\/?$/, '')}${path}`;
//         this.editor?.chain().focus().setImage({ src }).run();
//         this.logger.debug('ConsentMessageCard', `Image inserted from URL ${src}`);
//       },
//       error: (err: HttpErrorResponse) => {
//         const body = err.error as ApiResponse<unknown> | undefined;
//         const msg = body?.message || err.message || 'Upload failed.';
//         this.notify.error('Image', msg);
//         this.logger.error('ConsentMessageCard', 'Image upload failed', err);
//       },
//     });
//   }

//   // ── Merge tag logic ────────────────────────────────────────────

//   insertTag(tag: MergeTag): void {
//     if (!this.isEditorReady()) {
//       this.notify.warning('Editor', 'Editor is still loading, please wait.');
//       return;
//     }

//     let chain = this.editor!.chain().focus();

//     if (this.savedRange) {
//       chain = chain.setTextSelection(this.savedRange);
//     }

//     chain
//       .insertContent(`<span style="color:#6366f1;font-weight:600"> ${tag.tagKey} </span>`)
//       .run();

//     this.savedRange = null;
//     this.logger.debug('ConsentMessageCard', `Inserted merge tag ${tag.tagKey}`);
//   }

//   detectUsedTags(html: string): Set<string> {
//     const found = new Set<string>();
//     const re = /\{\{[A-Z_]+\}\}/g;
//     let m: RegExpExecArray | null;
//     while ((m = re.exec(html)) !== null) {
//       if (this.allTags.some((t) => t.tagKey === m![0])) found.add(m[0]);
//     }
//     return found;
//   }

//   openPreview(): void {
//     const html = (this.form.controls['consentMessage'].value as string) || '';
//     if (!html.replace(/<[^>]+>/g, '').trim()) {
//       this.notify.warning('Preview', '⚠️ Please write a consent message first before previewing.');
//       return;
//     }
//     const data: ConsentPreviewDialogData = { html, mergeTags: this.allTags };
//     this.dialog.open(ConsentPreviewDialogComponent, {
//       width: '760px', maxHeight: '90vh', data,
//     });
//   }

//   openAddTagDialog(): void {
//     const ref = this.dialog.open(AddMergeTagDialogComponent, {
//       width: '480px',
//       disableClose: true,
//     });

//     ref.afterClosed().subscribe((newTag: MergeTag | null) => {
//       if (!newTag) return;
//       this.tagAdded.emit(newTag);
//       this.insertTag(newTag);
//     });
//   }

//   // ── Voice input ────────────────────────────────────────────────

//   toggleVoiceInput(): void {
//     this.voiceService.toggle();
//   }

//   private _subscribeVoice(): void {
//     this._voiceSubs.add(
//       this.voiceService.listening$.subscribe(listening => {
//         this.isListening = listening;
//         if (!listening) {
//           this.liveTranscript = '';
//         }
//       })
//     );

//     this._voiceSubs.add(
//       this.voiceService.result$.subscribe(({ finalText, interimText }) => {
//         this.liveTranscript = interimText;

//         if (finalText) {
//           this.liveTranscript = '';
//           this._insertVoiceText(finalText);
//         }
//       })
//     );

//     this._voiceSubs.add(
//       this.voiceService.error$.subscribe(msg => {
//         this.logger.error('ConsentMessageCard', msg);
//         // this.notify.error('Voice', msg);  // uncomment if you want toasts
//       })
//     );
//   }

//   private _insertVoiceText(text: string): void {
//     if (!text || !this.isEditorReady()) return;
//     const toInsert = text.endsWith(' ') ? text : text + ' ';
//     this.editor!.chain().focus().insertContent(toInsert).run();
//   }

//   // ── AI insert handler ← NEW ────────────────────────────────────

//   /**
//    * Called by the parent component which receives (insertContent)
//    * from AiContentGeneratorComponent and forwards it here via @ViewChild.
//    *
//    * Modes:
//    *  - 'insert'  → insert at the saved cursor position (or current end)
//    *  - 'replace' → clear the entire editor, then set the new content
//    *  - 'append'  → append after all existing content
//    */
//   handleAiInsert(event: AiInsertEvent): void {
//     if (!this.isEditorReady()) {
//       this.notify.warning('Editor', 'Editor is still loading, please wait.');
//       return;
//     }

//     const plainText = event.text;

//     switch (event.mode) {
//       case 'replace': {
//         this.editor!
//           .chain()
//           .focus()
//           .clearContent()
//           .insertContent(plainText)
//           .run();
//         this.logger.debug('ConsentMessageCard', 'AI content replaced editor');
//         break;
//       }

//       case 'append': {
//         const docEnd = this.editor!.state.doc.content.size;
//         this.editor!
//           .chain()
//           .focus()
//           .setTextSelection(docEnd)
//           .insertContent('\n' + plainText)
//           .run();
//         this.logger.debug('ConsentMessageCard', 'AI content appended');
//         break;
//       }

//       case 'insert':
//       default: {
//         let chain = this.editor!.chain().focus();
//         if (this.savedRange) {
//           chain = chain.setTextSelection(this.savedRange);
//           this.savedRange = null;
//         }
//         chain.insertContent(plainText).run();
//         this.logger.debug('ConsentMessageCard', 'AI content inserted at cursor');
//         break;
//       }
//     }
//   }
// }


import {
  Component, EventEmitter, Input, Output, OnInit,
  OnDestroy, ElementRef, ViewChild, inject, AfterViewInit
} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';
import History from '@tiptap/extension-history';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import { MergeTag } from '../../../../core/models/consent.model';
import { ApiResponse } from '../../../../core/models/api-response.model';
import { environment } from '../../../../../environments/environment';
import { LoggerService } from '../../../../core/services/logger.service';
import { NotificationService } from '../../../../core/services/notification.service';
import { AddMergeTagDialogComponent } from '../../../../shared/components/add-merge-tag-dialog/add-merge-tag-dialog.component';
import {
  ConsentPreviewDialogComponent,
  ConsentPreviewDialogData,
} from '../../../../shared/components/consent-preview-dialog/consent-preview-dialog.component';
import { VoiceInputService } from './voice.input.service';
import { AiInsertEvent } from './ai-content-generator/ai-content-generator.component';

@Component({
  selector: 'app-consent-message-card',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './consent-message-card.component.html',
  styleUrl: './consent-message-card.component.scss',
  providers: [VoiceInputService],
})
export class ConsentMessageCardComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly dialog       = inject(MatDialog);
  private readonly logger       = inject(LoggerService);
  private readonly notify       = inject(NotificationService);
  private readonly http         = inject(HttpClient);
  private readonly voiceService = inject(VoiceInputService);

  private savedRange: { from: number; to: number } | null = null;

  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) grouped: Record<string, MergeTag[]> = {};
  @Input({ required: true }) allTags: MergeTag[] = [];
  @Output() readonly tagsUsedChange = new EventEmitter<string[]>();
  @Output() readonly tagAdded       = new EventEmitter<MergeTag>();

  @ViewChild('editorEl')   editorEl!:   ElementRef<HTMLDivElement>;
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;

  editor?: Editor;
  usedKeys = new Set<string>();
  private _editorUpdating = false; // prevents form→editor→form loop

  // ── Voice state ────────────────────────────────────────────────
  isListening    = false;
  liveTranscript = '';
  private _voiceSubs = new Subscription();

  get categories(): string[] {
    return Object.keys(this.grouped || {});
  }

  categoryIcon(cat: string): string {
    const icons: Record<string, string> = {
      Customer: '👤', Company: '🏢', Date: '📅', Links: '🔗',
    };
    return icons[cat] ?? '📎';
  }

  isEditorReady(): boolean {
    return !!this.editor && !this.editor.isDestroyed;
  }

  charCount(): number {
    if (!this.editor) return 0;
    return this.editor.storage['characterCount']?.characters?.()
      ?? this.editor.getText().length;
  }

  private saveSelection(): void {
    if (this.editor && !this.editor.isDestroyed) {
      const { from, to } = this.editor.state.selection;
      this.savedRange = { from, to };
    }
  }

  // ── Lifecycle ──────────────────────────────────────────────────

  ngOnInit(): void {
    // existing: nothing here — kept as-is
  }

  ngAfterViewInit(): void {
    const initialValue = (this.form.controls['consentMessage'].value as string) || '';

    this.editor = new Editor({
      element: this.editorEl.nativeElement,
      extensions: [
        Document,
        Paragraph,
        Text,
        HardBreak,
        Bold,
        Italic,
        Underline,
        Strike,
        BulletList,
        OrderedList,
        ListItem,
        History,
        Heading.configure({ levels: [1, 2, 3] }),
        Link.configure({
          openOnClick: false,
          HTMLAttributes: { target: '_blank', rel: 'noopener noreferrer' },
        }),
        Image.configure({
          inline: false,
          HTMLAttributes: { class: 'editor-image' },
        }),
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
        Placeholder.configure({
          placeholder: 'Write your consent message here. Use the tags below to insert dynamic customer fields…',
        }),
      ],
      content: initialValue,
      onBlur: () => {
        this.saveSelection();
      },
      onUpdate: ({ editor }) => {
        if (this._editorUpdating) return; // skip if we triggered this ourselves
        const html = editor.getHTML();
        this.form.controls['consentMessage'].setValue(html, { emitEvent: true });
        this.usedKeys = this.detectUsedTags(html);
        this.tagsUsedChange.emit(Array.from(this.usedKeys));
      },
    });

    this.usedKeys = this.detectUsedTags(initialValue);
    this.tagsUsedChange.emit(Array.from(this.usedKeys));
    this._subscribeVoice();

    // Sync editor when the form value is set externally
    // (e.g. loadConsent → patchFromConsent for REVISION_REQUESTED consents)
    this._voiceSubs.add(
      this.form.controls['consentMessage'].valueChanges.subscribe((html: string) => {
        if (!this.editor || this.editor.isDestroyed) return;
        const editorHtml = this.editor.getHTML();
        // Only update editor if value genuinely differs (i.e. came from outside, not from onUpdate)
        if (html !== editorHtml) {
          this._editorUpdating = true;
          // this.editor.commands.setContent(html || '', false);
          this.editor.commands.setContent(html || '', { emitUpdate: false });
          this._editorUpdating = false;
          this.usedKeys = this.detectUsedTags(html || '');
          this.tagsUsedChange.emit(Array.from(this.usedKeys));
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
    this.voiceService.stop();
    this._voiceSubs.unsubscribe();
  }

  // ── Toolbar actions ────────────────────────────────────────────

  toggleBold():        void { this.editor?.chain().focus().toggleBold().run(); }
  toggleItalic():      void { this.editor?.chain().focus().toggleItalic().run(); }
  toggleUnderline():   void { this.editor?.chain().focus().toggleUnderline().run(); }
  toggleStrike():      void { this.editor?.chain().focus().toggleStrike().run(); }
  toggleBulletList():  void { this.editor?.chain().focus().toggleBulletList().run(); }
  toggleOrderedList(): void { this.editor?.chain().focus().toggleOrderedList().run(); }
  setAlignLeft():      void { this.editor?.chain().focus().setTextAlign('left').run(); }
  setAlignCenter():    void { this.editor?.chain().focus().setTextAlign('center').run(); }
  setAlignRight():     void { this.editor?.chain().focus().setTextAlign('right').run(); }
  undo():              void { this.editor?.chain().focus().undo().run(); }
  redo():              void { this.editor?.chain().focus().redo().run(); }

  isActive(name: string, attrs?: Record<string, unknown>): boolean {
    return this.editor?.isActive(name, attrs) ?? false;
  }

  setLink(): void {
    const prev = this.editor?.getAttributes('link')['href'] as string ?? '';
    const url = window.prompt('Enter URL', prev);
    if (url === null) return;
    if (!url) {
      this.editor?.chain().focus().unsetLink().run();
      return;
    }
    this.editor?.chain().focus().setLink({ href: url }).run();
  }

  // ── Image upload ───────────────────────────────────────────────

  triggerImageUpload(): void {
    this.imageInput.nativeElement.value = '';
    this.imageInput.nativeElement.click();
  }

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.notify.error('Image', 'Only image files are supported.');
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      this.notify.error('Image', 'Image must be under 2 MB.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    this.notify.info('Image', 'Uploading image…');

    this.http.post<ApiResponse<{ url: string }>>(`${environment.apiUrl}/images/upload`, formData).subscribe({
      next: (res) => {
        const path = res.data?.url;
        if (!path) {
          this.notify.error('Image', 'Upload succeeded but no URL was returned.');
          return;
        }
        const src = path.startsWith('http')
          ? path
          : `${environment.apiUrl.replace(/\/api\/?$/, '')}${path}`;
        this.editor?.chain().focus().setImage({ src }).run();
        this.logger.debug('ConsentMessageCard', `Image inserted from URL ${src}`);
      },
      error: (err: HttpErrorResponse) => {
        const body = err.error as ApiResponse<unknown> | undefined;
        const msg = body?.message || err.message || 'Upload failed.';
        this.notify.error('Image', msg);
        this.logger.error('ConsentMessageCard', 'Image upload failed', err);
      },
    });
  }

  // ── Merge tag logic ────────────────────────────────────────────

  insertTag(tag: MergeTag): void {
    if (!this.isEditorReady()) {
      this.notify.warning('Editor', 'Editor is still loading, please wait.');
      return;
    }

    let chain = this.editor!.chain().focus();

    if (this.savedRange) {
      chain = chain.setTextSelection(this.savedRange);
    }

    chain
      .insertContent(`<span style="color:#6366f1;font-weight:600"> ${tag.tagKey} </span>`)
      .run();

    this.savedRange = null;
    this.logger.debug('ConsentMessageCard', `Inserted merge tag ${tag.tagKey}`);
  }

  detectUsedTags(html: string): Set<string> {
    const found = new Set<string>();
    const re = /\{\{[A-Z_]+\}\}/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      if (this.allTags.some((t) => t.tagKey === m![0])) found.add(m[0]);
    }
    return found;
  }

  openPreview(): void {
    const html = (this.form.controls['consentMessage'].value as string) || '';
    if (!html.replace(/<[^>]+>/g, '').trim()) {
      this.notify.warning('Preview', '⚠️ Please write a consent message first before previewing.');
      return;
    }
    const data: ConsentPreviewDialogData = { html, mergeTags: this.allTags };
    this.dialog.open(ConsentPreviewDialogComponent, {
      width: '760px', maxHeight: '90vh', data,
    });
  }

  openAddTagDialog(): void {
    const ref = this.dialog.open(AddMergeTagDialogComponent, {
      width: '480px',
      disableClose: true,
    });

    ref.afterClosed().subscribe((newTag: MergeTag | null) => {
      if (!newTag) return;
      this.tagAdded.emit(newTag);
      this.insertTag(newTag);
    });
  }

  // ── Voice input ────────────────────────────────────────────────

  toggleVoiceInput(): void {
    this.voiceService.toggle();
  }

  private _subscribeVoice(): void {
    this._voiceSubs.add(
      this.voiceService.listening$.subscribe(listening => {
        this.isListening = listening;
        if (!listening) {
          this.liveTranscript = '';
        }
      })
    );

    this._voiceSubs.add(
      this.voiceService.result$.subscribe(({ finalText, interimText }) => {
        this.liveTranscript = interimText;

        if (finalText) {
          this.liveTranscript = '';
          this._insertVoiceText(finalText);
        }
      })
    );

    this._voiceSubs.add(
      this.voiceService.error$.subscribe(msg => {
        this.logger.error('ConsentMessageCard', msg);
        // this.notify.error('Voice', msg);  // uncomment if you want toasts
      })
    );
  }

  private _insertVoiceText(text: string): void {
    if (!text || !this.isEditorReady()) return;
    const toInsert = text.endsWith(' ') ? text : text + ' ';
    this.editor!.chain().focus().insertContent(toInsert).run();
  }

  // ── AI insert handler ────────────────────────────────────────────

  /**
   * Called by the parent component which receives (insertContent)
   * from AiContentGeneratorComponent and forwards it here via @ViewChild.
   *
   * Modes:
   *  - 'insert'  → insert at the saved cursor position (or current end)
   *  - 'replace' → clear the entire editor, then set the new content
   *  - 'append'  → append after all existing content
   */
  handleAiInsert(event: AiInsertEvent): void {
    if (!this.isEditorReady()) {
      this.notify.warning('Editor', 'Editor is still loading, please wait.');
      return;
    }

    const plainText = event.text;

    switch (event.mode) {
      case 'replace': {
        this.editor!
          .chain()
          .focus()
          .clearContent()
          .insertContent(plainText)
          .run();
        this.logger.debug('ConsentMessageCard', 'AI content replaced editor');
        break;
      }

      case 'append': {
        const docEnd = this.editor!.state.doc.content.size;
        this.editor!
          .chain()
          .focus()
          .setTextSelection(docEnd)
          .insertContent('\n' + plainText)
          .run();
        this.logger.debug('ConsentMessageCard', 'AI content appended');
        break;
      }

      case 'insert':
      default: {
        let chain = this.editor!.chain().focus();
        if (this.savedRange) {
          chain = chain.setTextSelection(this.savedRange);
          this.savedRange = null;
        }
        chain.insertContent(plainText).run();
        this.logger.debug('ConsentMessageCard', 'AI content inserted at cursor');
        break;
      }
    }
  }
}