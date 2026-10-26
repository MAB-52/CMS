import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { LoadingService } from '../../../core/services/loading.service';

/**
 * Global HTTP activity indicator: a slim, non-blocking gradient bar at the
 * top of the page so background requests (e.g. auto-save) never interrupt the user.
 */
@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    @if (loading.isLoading$ | async) {
      <div class="lo-bar" role="progressbar" aria-label="Loading" aria-busy="true">
        <span class="lo-bar__runner"></span>
      </div>
    }
  `,
  styles: [`
    .lo-bar {
      position: fixed;
      inset: 0 0 auto 0;
      height: 3px;
      z-index: var(--is-z-overlay);
      overflow: hidden;
      background: color-mix(in srgb, var(--is-primary) 12%, transparent);
      pointer-events: none;
    }
    .lo-bar__runner {
      position: absolute;
      inset: 0;
      background: var(--is-grad-banner);
      transform-origin: left;
      animation: is-progress-indeterminate 1.1s ease-in-out infinite;
    }
  `],
})
export class LoadingOverlayComponent {
  readonly loading = inject(LoadingService);
}
