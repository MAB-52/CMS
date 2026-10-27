import { Component, computed, input } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { CHANNEL_META, ChannelId } from '../../../core/utils/channel.util';

/** Delivery-channel pill: channel icon + name in the channel's identity colour. */
@Component({
  selector: 'app-channel-chip',
  standalone: true,
  imports: [TagModule],
  template: `
    <p-tag
      [value]="meta().label"
      [icon]="meta().icon"
      [rounded]="true"
      styleClass="channel-chip"
      [style]="{ '--ch': meta().color }"
    />
  `,
  styles: `
    :host { display: inline-flex; }
    :host ::ng-deep .channel-chip {
      gap: 6px;
      padding: 4px 12px 4px 10px;
      border: 1px solid color-mix(in srgb, var(--ch) 22%, white);
      background: color-mix(in srgb, var(--ch) 9%, white);
      color: color-mix(in srgb, var(--ch) 82%, black);
      font-family: var(--is-font);
      font-size: var(--is-fs-xs);
      font-weight: var(--is-fw-bold);
    }
    :host ::ng-deep .channel-chip .p-tag-icon { color: var(--ch); font-size: 12px; }
  `,
})
export class ChannelChipComponent {
  readonly channel = input.required<ChannelId>();
  readonly meta = computed(() => CHANNEL_META[this.channel()]);
}
