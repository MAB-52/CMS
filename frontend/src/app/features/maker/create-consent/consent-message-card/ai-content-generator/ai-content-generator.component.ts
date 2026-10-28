
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, takeUntil, firstValueFrom } from 'rxjs';
import { AiContentGeneratorService, OllamaModel } from '../../../../../core/services/ai-content-generator.service';
import { NotificationService } from '../../../../../core/services/notification.service';
import { LoggerService } from '../../../../../core/services/logger.service';
import { CONSENT_LANGUAGES, ConsentLanguageCode, DEFAULT_LANGUAGE } from '../../../../../core/constants/consent-languages';

export type InsertMode = 'insert' | 'replace' | 'append';

export interface AiInsertEvent {
  text: string;
  mode: InsertMode;
  languageCode: string;
}

@Component({
  selector: 'app-ai-content-generator',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
  templateUrl: './ai-content-generator.component.html',
  styleUrl: './ai-content-generator.component.css',
})
export class AiContentGeneratorComponent implements OnInit, OnChanges, OnDestroy {
  private readonly aiService = inject(AiContentGeneratorService);
  private readonly notify = inject(NotificationService);
  private readonly logger = inject(LoggerService);
  private readonly _destroy$ = new Subject<void>();

  /** Emits when the user clicks Insert / Replace / Append */
  @Output() readonly insertContent = new EventEmitter<AiInsertEvent>();

  readonly consentLanguages = CONSENT_LANGUAGES;
  selectedLanguages: ConsentLanguageCode[] = [DEFAULT_LANGUAGE];

  @Input() activeLanguage: ConsentLanguageCode = DEFAULT_LANGUAGE;
  /** Current English (source) content from the editor, used to translate into other languages. */
  @Input() englishContent = '';
  @Output() readonly languagesChange = new EventEmitter<ConsentLanguageCode[]>();
  @Output() readonly activeLanguageChange = new EventEmitter<ConsentLanguageCode>();

  @Input() set initialSelectedLanguages(langs: ConsentLanguageCode[] | undefined) {
    if (langs && langs.length) {
      this.selectedLanguages = [DEFAULT_LANGUAGE, ...langs.filter((l) => l !== DEFAULT_LANGUAGE)];
    }
  }

  // ── Model list ─────────────────────────────────────────────────
  models: OllamaModel[] = [];
  selectedModel = '';
  modelsLoading = false;
  modelsError = '';

  // ── Generation state ───────────────────────────────────────────
  prompt = '';
  isGenerating = false;
  generatedText = '';
  generatedModel = '';
  generatedDurationSec = '';
  generatedTokens = 0;
  generationError = '';
  hasResult = false;

  resultsByLanguage: Record<string, { text: string; model: string; durationSec: string; tokens: number }> = {};


  // ── Fallback model list (shown when Ollama unreachable) ────────
  readonly fallbackModels = [
    'qwen',
    'deepseek-r1',
    'codellama',
  ];

  ngOnInit(): void {
    this._loadModels();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Input changes are handled reactively via the initialSelectedLanguages setter.
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  isLanguageSelected(code: ConsentLanguageCode): boolean {
    return this.selectedLanguages.includes(code);
  }

  toggleLanguage(code: ConsentLanguageCode): void {
    if (code === DEFAULT_LANGUAGE) {
      return; // English always selected, cannot deselect
    }

    if (this.selectedLanguages.includes(code)) {
      this.selectedLanguages = this.selectedLanguages.filter((l) => l !== code);
      if (this.activeLanguage === code) {
        this.setActiveLanguage(DEFAULT_LANGUAGE);
      }
    } else {
      this.selectedLanguages = [...this.selectedLanguages, code];
      this.setActiveLanguage(code); // make the newly added language active so generation targets it
    }

    this.languagesChange.emit(this.selectedLanguages);
  }

  setActiveLanguage(code: ConsentLanguageCode): void {
  this.activeLanguage = code;
  this.activeLanguageChange.emit(code);

  const cached = this.resultsByLanguage[code];
  if (cached) {
    this.generatedText = cached.text;
    this.generatedModel = cached.model;
    this.generatedDurationSec = cached.durationSec;
    this.generatedTokens = cached.tokens;
    this.hasResult = true;
  } else {
    this.generatedText = '';
    this.hasResult = false;
  }
}

  // ── Model loading ──────────────────────────────────────────────
  private _loadModels(): void {
    this.modelsLoading = true;
    this.modelsError = '';

    this.aiService
      .listModels()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (models) => {
          this.models = models;
          this.modelsLoading = false;

          if (models.length > 0) {
            this.selectedModel = models[0].name;
          }

          this.logger.debug('AiContentGenerator', `Loaded ${models.length} models`);
        },
        error: (err: Error) => {
          this.modelsLoading = false;
          this.modelsError = err.message;
          this.logger.error('AiContentGenerator', 'Failed to load models', err);
        },
      });
  }

  refreshModels(): void {
    this._loadModels();
  }

  // ── Generation ─────────────────────────────────────────────────
  /** Strip TipTap HTML down to plain text for translation prompts. */
  private stripHtml(html: string): string {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  private cleanModelText(raw: string): string {
    return (raw || '')
      .replace(/<think>[\s\S]*?<\/think>/gi, '')
      .replace(/^[\s\S]*?<\/think>/i, '')
      .replace(/^\s*```[a-z]*\s*\n?/i, '')
      .replace(/\n?\s*```\s*$/i, '')
      .trim();
  }

  private toEditorHtml(text: string): string {
    const escape = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    return text
      .split(/\n\s*\n/)
      .map((block) => block.trim())
      .filter(Boolean)
      .map((block) => `<p>${escape(block).replace(/\n/g, '<br>')}</p>`)
      .join('');
  }

  // ── Generation ─────────────────────────────────────────────────
  async generate(): Promise<void> {
  if (!this.selectedModel.trim()) {
    this.notify.warning('AI Generator', 'Please select a model first.');
    return;
  }

  const targets = [...this.selectedLanguages]; // always includes 'en'
  const hasEnglishContent = !!this.stripHtml(this.englishContent);
  const wantsFreshGeneration = this.prompt.trim().length > 0;

  if (!wantsFreshGeneration && !hasEnglishContent) {
    this.notify.warning('AI Generator', 'Please enter a prompt.');
    return;
  }

  // Only re-run English if the user typed new instructions, or there's no English yet.
  // Otherwise reuse the existing English content as the translation source (saves a call
  // and stops a blank/old prompt from clobbering English you already wrote).
  const shouldRegenerateEnglish =
    targets.includes(DEFAULT_LANGUAGE) && (wantsFreshGeneration || !hasEnglishContent);

  const orderedTargets = [
    ...(shouldRegenerateEnglish ? [DEFAULT_LANGUAGE] : []),
    ...targets.filter((l) => l !== DEFAULT_LANGUAGE),
  ];

  this.isGenerating = true;
  this.generationError = '';
  this.hasResult = false;
  this.generatedText = '';

  let sourceText = this.stripHtml(this.englishContent);

  try {
    for (const lang of orderedTargets) {
      const isTranslation = lang !== DEFAULT_LANGUAGE;
      const targetLangMeta = this.consentLanguages.find((l) => l.code === lang);
      const targetLabel = targetLangMeta?.label ?? lang;

      let finalPrompt: string;
      if (isTranslation && sourceText) {
        finalPrompt =
          `Translate the text between <SRC> tags into ${targetLabel}. ` +
          `Your entire response must be written in ${targetLabel}, using its native script — not English, not transliteration. ` +
          `Output ONLY the translation. Do not ask questions. Do not add notes, greetings, or English commentary. ` +
          `Leave [bracketed] and {{BRACED}} tokens unchanged.\n` +
          `<SRC>\n${sourceText}\n</SRC>`;
      } else if (isTranslation) {
        finalPrompt =
          `You are a professional copywriter. Write the following consent message entirely in ${targetLabel}, ` +
          `using its native script. Keep any [bracketed placeholders] and {{DOUBLE_BRACE_TAGS}} exactly as written, in English.\n\n${this.prompt}`;
      } else {
        finalPrompt = this.prompt;
      }

      const result = await firstValueFrom(this.aiService.generate(this.selectedModel, finalPrompt));
      const text = this.cleanModelText(result.text);
      if (!text) {
        throw new Error(`The model returned no content for ${targetLabel}. Try again or pick another model.`);
      }

      this.resultsByLanguage[lang] = {
        text,
        model: result.model,
        durationSec: (result.durationMs / 1000).toFixed(1) + 's',
        tokens: result.tokens,
      };

      if (lang === DEFAULT_LANGUAGE) {
        sourceText = text;
      }

      this.insertContent.emit({ text: this.toEditorHtml(text), mode: 'replace', languageCode: lang });
      this.logger.debug('AiContentGenerator', `Generated ${result.tokens} tokens for "${lang}" in ${result.durationMs}ms`);
    }

    const activeResult = this.resultsByLanguage[this.activeLanguage];
    if (activeResult) {
      this.generatedText = activeResult.text;
      this.generatedModel = activeResult.model;
      this.generatedDurationSec = activeResult.durationSec;
      this.generatedTokens = activeResult.tokens;
    }
    this.hasResult = true;

    const generatedFor = orderedTargets
      .map((l) => this.consentLanguages.find((x) => x.code === l)?.label ?? l)
      .join(', ');
    this.notify.success('AI Generator', `Generated content for: ${generatedFor}`);
  } catch (err) {
    this.generationError = (err as Error).message;
    this.logger.error('AiContentGenerator', 'Generation failed', err as Error);
  } finally {
    this.isGenerating = false;
  }
}

regenerate(): void {
  this.generate();
}

clearAll(): void {
  this.generatedText = '';
  this.generationError = '';
  this.hasResult = false;
  this.prompt = '';
  this.resultsByLanguage = {};
}

  // ── Insert actions ─────────────────────────────────────────────
  insertIntoEditor(mode: InsertMode): void {
    if (!this.generatedText) return;

    this.insertContent.emit({ text: this.toEditorHtml(this.generatedText), mode, languageCode: this.activeLanguage });

    this.notify.success(
      'AI Generator',
      mode === 'replace'
        ? 'Content replaced in editor.'
        : mode === 'append'
        ? 'Content appended to editor.'
        : 'Content inserted into editor.'
    );
  }

  copyToClipboard(): void {
    if (!this.generatedText) return;

    navigator.clipboard
      .writeText(this.generatedText)
      .then(() => this.notify.success('AI Generator', 'Copied to clipboard.'))
      .catch(() => this.notify.error('AI Generator', 'Copy failed.'));
  }
}