import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Subject, takeUntil } from 'rxjs';
import { AiContentGeneratorService, OllamaModel } from '@app/core/services/ai-content-generator.service';
import { NotificationService } from '@app/core/services/notification.service'
import { LoggerService } from '@app/core/services/logger.service';

export type InsertMode = 'insert' | 'replace' | 'append';

export interface AiInsertEvent {
  text: string;
  mode: InsertMode;
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
  styleUrl: './ai-content-generator.component.scss',
})
export class AiContentGeneratorComponent implements OnInit, OnDestroy {
  private readonly aiService  = inject(AiContentGeneratorService);
  private readonly notify     = inject(NotificationService);
  private readonly logger     = inject(LoggerService);
  private readonly _destroy$  = new Subject<void>();

  /** Emits when the user clicks Insert / Replace / Append */
  @Output() readonly insertContent = new EventEmitter<AiInsertEvent>();

  // ── Model list ─────────────────────────────────────────────────
  models: OllamaModel[]   = [];
  selectedModel           = '';
  modelsLoading           = false;
  modelsError             = '';

  // ── Generation state ───────────────────────────────────────────
  prompt                  = '';
  isGenerating            = false;
  generatedText           = '';
  generatedModel          = '';
  generatedDurationSec    = '';
  generatedTokens         = 0;
  generationError         = '';
  hasResult               = false;

  // ── Fallback model list (shown when Ollama unreachable) ────────
  readonly fallbackModels = [
    'llama3', 'llama3.1', 'mistral', 'phi3',
    'gemma', 'qwen', 'deepseek-r1', 'codellama',
  ];

  ngOnInit(): void {
    this._loadModels();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  // ── Model loading ──────────────────────────────────────────────

  private _loadModels(): void {
    this.modelsLoading = true;
    this.modelsError   = '';
    this.aiService
      .listModels()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (models) => {
          this.models        = models;
          this.modelsLoading = false;
          if (models.length > 0) {
            this.selectedModel = models[0].name;
          }
          this.logger.debug('AiContentGenerator', `Loaded ${models.length} models`);
        },
        error: (err: Error) => {
          this.modelsLoading = false;
          this.modelsError   = err.message;
          // Still allow the user to type a model name from fallback list
          this.logger.error('AiContentGenerator', 'Failed to load models', err);
        },
      });
  }

  refreshModels(): void {
    this._loadModels();
  }

  // ── Generation ─────────────────────────────────────────────────

  generate(): void {
    if (!this.selectedModel.trim()) {
      this.notify.warning('AI Generator', 'Please select a model first.');
      return;
    }
    if (!this.prompt.trim()) {
      this.notify.warning('AI Generator', 'Please enter a prompt.');
      return;
    }

    this.isGenerating    = true;
    this.generationError = '';
    this.hasResult       = false;
    this.generatedText   = '';

    this.aiService
      .generate(this.selectedModel, this.prompt)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (result) => {
          this.isGenerating       = false;
          this.hasResult          = true;
          this.generatedText      = result.text;
          this.generatedModel     = result.model;
          this.generatedDurationSec = (result.durationMs / 1000).toFixed(1) + 's';
          this.generatedTokens    = result.tokens;
          this.logger.debug(
            'AiContentGenerator',
            `Generated ${result.tokens} tokens in ${result.durationMs}ms`
          );
        },
        error: (err: Error) => {
          this.isGenerating    = false;
          this.generationError = err.message;
          this.logger.error('AiContentGenerator', 'Generation failed', err);
        },
      });
  }

  regenerate(): void {
    this.generate();
  }

  clearAll(): void {
    this.generatedText   = '';
    this.generationError = '';
    this.hasResult       = false;
    this.prompt          = '';
  }

  // ── Insert actions ─────────────────────────────────────────────

  insertIntoEditor(mode: InsertMode): void {
    if (!this.generatedText) return;
    this.insertContent.emit({ text: this.generatedText, mode });
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
