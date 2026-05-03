import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../../../core/services/loading.service';

@Component({
  selector: 'app-loading-overlay',
  standalone: true,
  imports: [AsyncPipe, MatProgressSpinnerModule],
  template: `
    @if (loading.isLoading$ | async) {
      <div class="fixed inset-0 z-[2000] flex items-center justify-center bg-black/30">
        <mat-spinner diameter="48"></mat-spinner>
      </div>
    }
  `,
})
export class LoadingOverlayComponent {
  readonly loading = inject(LoadingService);
}
