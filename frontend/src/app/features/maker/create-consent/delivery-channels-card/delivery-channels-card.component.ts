
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MergeTag } from '../../../../core/models/consent.model';
import { ChannelLanguageRenderMap } from '../../../../core/models/consent-translation.types';
import { ConsentChannelLanguagePreviewComponent } from '../../../../shared/components/consent-channel-language-preview/consent-channel-language-preview.component';

type ChannelId = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP' | 'RCS';

@Component({
  selector: 'app-delivery-channels-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule, ConsentChannelLanguagePreviewComponent],
  templateUrl: './delivery-channels-card.component.html',
  styleUrl: './delivery-channels-card.component.css',
})
export class DeliveryChannelsCardComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) mergeTags: MergeTag[] = [];
  /** Live render map built from draft-before-first-save content, or from persisted translations after save. */
  @Input({ required: true }) renders: ChannelLanguageRenderMap = {};
  @Input() initialChannel: string | null = null;
  @Input() initialLanguage: string | null = null;

  readonly channels: { id: ChannelId; icon: string; name: string; desc: string }[] = [
    { id: 'EMAIL', icon: '📧', name: 'Email', desc: 'HTML formatted email with full branding' },
    { id: 'SMS', icon: '📱', name: 'SMS', desc: 'Plain text, 160 characters max' },
    { id: 'WHATSAPP', icon: '💬', name: 'WhatsApp', desc: 'Rich message via WhatsApp Business' },
    { id: 'RCS', icon: '🌐', name: 'RCS', desc: 'Rich Communication Services message' },
  ];

  get selectedChannels(): ChannelId[] {
    return this.channels.filter((ch) => this.isOn(ch.id)).map((ch) => ch.id);
  }

  isOn(id: ChannelId): boolean {
    const key = this.controlKey(id);
    return !!this.form?.controls[key]?.value;
  }

  toggle(id: ChannelId): void {
    const key = this.controlKey(id);
    const ctrl = this.form.controls[key];
    if (!ctrl) return;
    ctrl.setValue(!ctrl.value);
    ctrl.markAsDirty();
  }

  private controlKey(id: ChannelId): string {
    const map: Record<ChannelId, string> = {
      EMAIL: 'channelEmail',
      SMS: 'channelSms',
      PUSH: 'channelPush',
      WHATSAPP: 'channelWhatsapp',
      RCS: 'channelRcs',
    };
    return map[id];
  }
}