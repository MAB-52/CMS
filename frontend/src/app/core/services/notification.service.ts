import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastConfig {
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  dismissible?: boolean;
}

export interface Toast extends ToastConfig {
  id: string;
  progressKey: number;
}

const DEFAULT_DURATION: Record<ToastType, number> = {
  success: 3000,
  error: 6000,
  warning: 5000,
  info: 4000,
};

/** Max simultaneous toasts; overflow evicts oldest of same type or oldest overall. */
const MAX_VISIBLE_TOASTS = 3;

/** Suppress repeat adds of the same toast content within this window (ms). */
const TOAST_THROTTLE_MS = 1500;

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly toasts$ = new BehaviorSubject<Toast[]>([]);
  private readonly onceKeys = new Set<string>();
  /** Last time a toast with this content key was actually queued. */
  private readonly lastQueuedAtByContent = new Map<string, number>();
  private seq = 0;

  readonly toasts = this.toasts$.asObservable();

  success(title: string, message?: string): void {
    this.push({ type: 'success', title, message, duration: DEFAULT_DURATION.success, dismissible: false });
  }

  error(title: string, message?: string): void {
    this.push({ type: 'error', title, message, duration: DEFAULT_DURATION.error, dismissible: true });
  }

  warning(title: string, message?: string): void {
    this.push({ type: 'warning', title, message, duration: DEFAULT_DURATION.warning, dismissible: true });
  }

  /** Shows a warning toast at most once per key until {@link clearOnceKeys} runs (e.g. after login). */
  warnOnce(key: string, displayMessage: string): void {
    if (this.onceKeys.has(key)) {
      return;
    }
    this.onceKeys.add(key);
    this.warning('Session expired', displayMessage);
  }

  clearOnceKeys(): void {
    this.onceKeys.clear();
  }

  info(title: string, message?: string): void {
    this.push({ type: 'info', title, message, duration: DEFAULT_DURATION.info, dismissible: false });
  }

  dismiss(id: string): void {
    this.toasts$.next(this.toasts$.value.filter((t) => t.id !== id));
  }

  private static contentKey(cfg: Pick<ToastConfig, 'type' | 'title' | 'message'>): string {
    const msg = cfg.message ?? '';
    return `${cfg.type}\u001f${cfg.title}\u001f${msg}`;
  }

  private pruneThrottleMap(now: number): void {
    const cutoff = now - TOAST_THROTTLE_MS;
    for (const [key, t] of this.lastQueuedAtByContent) {
      if (t < cutoff) {
        this.lastQueuedAtByContent.delete(key);
      }
    }
  }

  private push(cfg: ToastConfig): void {
    const visible = this.toasts$.value;
    const msgNorm = cfg.message ?? '';
    const duplicateVisible = visible.some(
      (t) => t.type === cfg.type && t.title === cfg.title && (t.message ?? '') === msgNorm,
    );
    if (duplicateVisible) {
      return;
    }

    const contentKey = NotificationService.contentKey(cfg);
    const now = Date.now();
    const lastQueued = this.lastQueuedAtByContent.get(contentKey);
    if (lastQueued !== undefined && now - lastQueued < TOAST_THROTTLE_MS) {
      return;
    }

    let next = [...visible];
    if (next.length >= MAX_VISIBLE_TOASTS) {
      const idxOldestSameType = next.findIndex((t) => t.type === cfg.type);
      if (idxOldestSameType >= 0) {
        next.splice(idxOldestSameType, 1);
      } else {
        next.shift();
      }
    }

    const id = crypto.randomUUID();
    const duration = cfg.duration ?? DEFAULT_DURATION[cfg.type];
    const toast: Toast = {
      ...cfg,
      id,
      duration,
      dismissible: cfg.dismissible ?? (cfg.type === 'error' || cfg.type === 'warning'),
      progressKey: ++this.seq,
    };

    this.pruneThrottleMap(now);
    this.lastQueuedAtByContent.set(contentKey, now);
    this.toasts$.next([...next, toast]);
    setTimeout(() => this.dismiss(id), duration);
  }
}
