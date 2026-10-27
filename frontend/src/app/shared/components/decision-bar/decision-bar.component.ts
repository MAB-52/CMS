import { Component, computed, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ShellDockComponent } from '../../layout/app-shell/shell-dock.component';

/**
 * Checker decision bar (Approve / Request revision / Reject), rendered in the shell's
 * fixed bottom dock. Subtitle content is projected so callers can add emphasis.
 */
@Component({
  selector: 'app-decision-bar',
  standalone: true,
  imports: [ButtonModule, TagModule, ShellDockComponent],
  templateUrl: './decision-bar.component.html',
  styleUrl: './decision-bar.component.css',
})
export class DecisionBarComponent {
  readonly title = input.required<string>();
  /** Disables every action (e.g. not decidable, or a request is in flight). */
  readonly disabled = input(false);
  /** Shows a loading spinner on the buttons while a decision is being submitted. */
  readonly busy = input(false);
  /** Combination review progress; the tracker is hidden when `total` is null. */
  readonly viewed = input<number | null>(null);
  readonly total = input<number | null>(null);
  readonly revisionLabel = input('Request Revision');

  readonly approve = output<void>();
  readonly revise = output<void>();
  readonly reject = output<void>();

  readonly allViewed = computed(() => {
    const total = this.total();
    return total === null || (this.viewed() ?? 0) >= total;
  });

  readonly approveDisabled = computed(() => this.disabled() || this.busy() || !this.allViewed());
}
