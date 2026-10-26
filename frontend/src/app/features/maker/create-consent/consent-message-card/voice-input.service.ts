import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

export interface VoiceResult {
  finalText:   string;
  interimText: string;
}

@Injectable()  // No providedIn:'root' — provided in component providers[]
export class VoiceInputService implements OnDestroy {

  readonly result$    = new Subject<VoiceResult>();
  readonly listening$ = new BehaviorSubject<boolean>(false);
  readonly error$     = new Subject<string>();

  private recognition:   any    = null;
  private shouldRestart  = false;
  private restartPending = false;
  private currentLang    = 'en-US';

  constructor(private zone: NgZone) {}

  get isSupported(): boolean {
    return !!(
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition
    );
  }

  start(lang = 'en-US'): void {
    if (!this.isSupported) {
      this.error$.next('Speech recognition is not supported in this browser.');
      return;
    }
    if (this.listening$.value) return;
    this.currentLang   = lang;
    this.shouldRestart = true;
    this._createAndStart(lang);
  }

  stop(): void {
    this.shouldRestart  = false;
    this.restartPending = false;
    if (this.recognition) {
      // Null handlers BEFORE stop() to prevent the onend auto-restart
      this.recognition.onstart  = null;
      this.recognition.onresult = null;
      this.recognition.onerror  = null;
      this.recognition.onend    = null;
      try { this.recognition.stop(); } catch { /* already stopped */ }
      this.recognition = null;
    }
    this.listening$.next(false);
  }

  toggle(lang = 'en-US'): void {
    this.listening$.value ? this.stop() : this.start(lang);
  }

  private _createAndStart(lang: string): void {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const rec = new SR();
    this.recognition = rec;

    rec.lang            = lang;
    rec.continuous      = true;
    rec.interimResults  = true;
    rec.maxAlternatives = 1;

    rec.onstart = () => {
      this.zone.run(() => {
        this.restartPending = false;
        this.listening$.next(true);
      });
    };

    rec.onresult = (event: any) => {
      this.zone.run(() => {
        let finalText   = '';
        let interimText = '';

        // ✅ Start from event.resultIndex (NOT 0) to avoid reprocessing
        // old results — this is what prevents duplicate/repeated words
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const result     = event.results[i];
          const transcript = result[0].transcript;
          if (result.isFinal) {
            const clean = transcript.replace(/\s+/g, ' ').trim();
            if (clean) finalText += (finalText ? ' ' : '') + clean;
          } else {
            interimText += transcript;
          }
        }

        this.result$.next({ finalText, interimText });
      });
    };

    rec.onerror = (event: any) => {
      this.zone.run(() => {
        // These are non-fatal; onend fires next and we auto-restart
        const ignorable = ['no-speech', 'audio-capture', 'aborted'];
        if (!ignorable.includes(event.error)) {
          this.error$.next(`Voice error: ${event.error}`);
          this.shouldRestart = false;
          this.listening$.next(false);
        }
      });
    };

    rec.onend = () => {
      this.zone.run(() => {
        this.listening$.next(false);
        if (this.shouldRestart && !this.restartPending) {
          this.restartPending = true;
          // 300ms debounce prevents tight restart loops on immediate errors
          setTimeout(() => {
            if (this.shouldRestart) this._createAndStart(this.currentLang);
          }, 300);
        }
      });
    };

    try { rec.start(); } catch (e) {
      console.warn('[VoiceInputService] rec.start() threw:', e);
    }
  }

  ngOnDestroy(): void { this.stop(); }
}