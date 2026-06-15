import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError, switchMap } from 'rxjs';

export interface OllamaModel {
  name: string;
  modified_at: string;
  size: number;
}

export interface OllamaModelsResponse {
  models: OllamaModel[];
}

export interface GenerateResult {
  text: string;
  model: string;
  durationMs: number;
  tokens: number;
}

@Injectable({ providedIn: 'root' })
export class AiContentGeneratorService {
  /** Default Ollama base URL — override via environment if needed */
  private readonly ollamaBase = 'http://localhost:11434';

  constructor(private readonly http: HttpClient) {}

  /** Fetch list of locally-installed Ollama models */
  listModels(): Observable<OllamaModel[]> {
    return this.http
      .get<OllamaModelsResponse>(`${this.ollamaBase}/api/tags`)
      .pipe(
        map(r => r.models ?? []),
        catchError(this._handleError)
      );
  }

  /**
   * Call Ollama /api/generate (non-streaming) and return the full response.
   */
  // generate(model: string, prompt: string): Observable<GenerateResult> {
  //   const start = Date.now();
  //   return this.http
  //     .post<{
  //       response: string;
  //       model: string;
  //       eval_count?: number;
  //       prompt_eval_count?: number;
  //     }>(`${this.ollamaBase}/api/generate`, {
  //       model,
  //       prompt,
  //       stream: false,
  //     })
  //     .pipe(
  //       map(r => ({
  //         text: r.response ?? '',
  //         model: r.model ?? model,
  //         durationMs: Date.now() - start,
  //         tokens: (r.eval_count ?? 0) + (r.prompt_eval_count ?? 0),
  //       })),
  //       catchError(this._handleError)
  //     );
  // }


   /**
   * Generate content via Ollama, then immediately unload the model
   * from memory (keep_alive: 0) so it does not linger in `ollama ps`.
   */
  generate(model: string, prompt: string): Observable<GenerateResult> {
    const start = Date.now();

    return this.http
      .post<{
        response: string;
        model: string;
        eval_count?: number;
        prompt_eval_count?: number;
      }>(`${this.ollamaBase}/api/generate`, {
        model,
        prompt,
        stream: false,
      })
      .pipe(
        // After generation succeeds, unload the model, then pass result through
        switchMap(r => {
          const result: GenerateResult = {
            text: r.response ?? '',
            model: r.model ?? model,
            durationMs: Date.now() - start,
            tokens: (r.eval_count ?? 0) + (r.prompt_eval_count ?? 0),
          };

          // Unload the model by setting keep_alive to 0.
          // We fire-and-forget this — if it fails the user already has their result.
          return this.http
            .post<unknown>(`${this.ollamaBase}/api/generate`, {
              model,
              prompt: '',
              keep_alive: 0,
            })
            .pipe(
              // Regardless of unload success/failure, emit the original result
              map(() => result),
              catchError(() => {
                // Unload failed silently — still return the generated result
                return [result];
              })
            );
        }),
        catchError(this._handleError)
      );
  }


  private _handleError(err: HttpErrorResponse): Observable<never> {
    const msg =
      err.status === 0
        ? 'Cannot reach Ollama. Make sure it is running on localhost:11434.'
        : `Ollama error ${err.status}: ${err.statusText}`;
    return throwError(() => new Error(msg));
  }
}
