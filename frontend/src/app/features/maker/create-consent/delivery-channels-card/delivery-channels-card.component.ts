
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { MergeTag } from '../../../../core/models/consent.model';
import { ChannelLanguageRenderMap } from '../../../../core/models/consent-translation.types';
import { CHANNEL_META, ChannelId, ChannelMeta } from '../../../../core/utils/channel.util';
import { ConsentChannelLanguagePreviewComponent } from '../../../../shared/components/consent-channel-language-preview/consent-channel-language-preview.component';

@Component({
  selector: 'app-delivery-channels-card',
  standalone: true,
  imports: [ReactiveFormsModule, CheckboxModule, TagModule, ConsentChannelLanguagePreviewComponent],
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

  readonly channels: { id: ChannelId; desc: string }[] = [
    { id: 'EMAIL', desc: 'HTML formatted email with full branding' },
    { id: 'SMS', desc: 'Plain text, 160 characters max' },
    { id: 'WHATSAPP', desc: 'Rich message via WhatsApp Business' },
    { id: 'RCS', desc: 'Rich Communication Services message' },
  ];

  get selectedChannels(): ChannelId[] {
    return this.channels.filter((ch) => this.isOn(ch.id)).map((ch) => ch.id);
  }

  meta(id: ChannelId): ChannelMeta {
    return CHANNEL_META[id];
  }

  isOn(id: ChannelId): boolean {
    const key = this.controlKey(id);
    return !!this.form?.controls[key]?.value;
  }

  controlKey(id: ChannelId): string {
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
