import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastConfig {
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

const DEFAULT_DURATION: Record<ToastType, number> = {
  success: 3000,
  error: 6000,
  warning: 5000,
  info: 4000,
};

/** Suppress repeat adds of the same toast content within this window (ms). */
const TOAST_THROTTLE_MS = 1500;

/** Must match the `key` on the <p-toast> in ToastContainerComponent. */
export const APP_TOAST_KEY = 'app';

const PRIME_SEVERITY: Record<ToastType, 'success' | 'error' | 'warn' | 'info'> = {
  success: 'success',
  error: 'error',
  warning: 'warn',
  info: 'info',
};

/** Thin facade over PrimeNG's MessageService that adds de-duplication and throttling. */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly messages = inject(MessageService);
  private readonly onceKeys = new Set<string>();
  /** Content keys of toasts currently on screen. */
  private readonly visibleContent = new Set<string>();
  /** Last time a toast with this content key was actually queued. */
  private readonly lastQueuedAtByContent = new Map<string, number>();

  success(title: string, message?: string): void {
    this.push({ type: 'success', title, message, duration: DEFAULT_DURATION.success });
  }

  error(title: string, message?: string): void {
    this.push({ type: 'error', title, message, duration: DEFAULT_DURATION.error });
  }

  warning(title: string, message?: string): void {
    this.push({ type: 'warning', title, message, duration: DEFAULT_DURATION.warning });
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
    this.push({ type: 'info', title, message, duration: DEFAULT_DURATION.info });
  }

  /** Called by the toast container when PrimeNG removes a toast (timeout or close click). */
  released(contentKey: string | undefined): void {
    if (contentKey) {
      this.visibleContent.delete(contentKey);
    }
  }

  static contentKey(cfg: Pick<ToastConfig, 'type' | 'title' | 'message'>): string {
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
    const contentKey = NotificationService.contentKey(cfg);
    if (this.visibleContent.has(contentKey)) {
      return;
    }

    const now = Date.now();
    const lastQueued = this.lastQueuedAtByContent.get(contentKey);
    if (lastQueued !== undefined && now - lastQueued < TOAST_THROTTLE_MS) {
      return;
    }

    this.pruneThrottleMap(now);
    this.lastQueuedAtByContent.set(contentKey, now);
    this.visibleContent.add(contentKey);

    const duration = cfg.duration ?? DEFAULT_DURATION[cfg.type];
    this.messages.add({
      key: APP_TOAST_KEY,
      severity: PRIME_SEVERITY[cfg.type],
      summary: cfg.title,
      detail: cfg.message,
      life: duration,
      closable: true,
      data: { contentKey },
    });
  }
}
