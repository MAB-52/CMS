// frontend/src/app/shared/components/consent-channel-language-preview/consent-channel-language-preview.component.ts

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MergeTag } from '../../../core/models/consent.model';
import { ChannelLanguageRenderMap } from '../../../core/models/consent-translation.types';
import { CONSENT_LANGUAGES, isRtl, labelFor, requiresTranslationVerification } from '../../../core/constants/consent-languages';

type ChannelId = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP' | 'RCS';

const CHANNEL_META: Record<ChannelId, { icon: string; name: string }> = {
  EMAIL: { icon: '📧', name: 'Email' },
  SMS: { icon: '📱', name: 'SMS' },
  PUSH: { icon: '🔔', name: 'Push' },
  WHATSAPP: { icon: '💬', name: 'WhatsApp' },
  RCS: { icon: '🌐', name: 'RCS' },
};

@Component({
  selector: 'app-consent-channel-language-preview',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './consent-channel-language-preview.component.html',
  styleUrl: './consent-channel-language-preview.component.css',
})
export class ConsentChannelLanguagePreviewComponent implements OnChanges {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() channelEmail = false;
  @Input() channelSms = false;
  @Input() channelPush = false;
  @Input() channelWhatsapp = false;
  @Input() channelRcs = false;

  /** channel -> language -> rendered content, from consent.translations via buildRenderMap() */
  @Input({ required: true }) renders: ChannelLanguageRenderMap = {};

  @Input() mergeTags: MergeTag[] = [];
  @Input() readOnly = false;
  @Input() initialChannel: string | null = null;
  @Input() initialLanguage: string | null = null;

  /** Live progress counters passed from the parent (checker review screens). */
  @Input() viewedCount = 0;
  @Input() totalCombinations = 0;

  /** Emitted whenever the checker (or maker) actually views a channel+language combination. */
  @Output() readonly combinationViewed = new EventEmitter<{ channel: string; languageCode: string }>();

  activeChannelTab = 0;
  activeLanguageTab = 0;

  get activeChannels(): ChannelId[] {
    const order: { id: ChannelId; flag: boolean }[] = [
      { id: 'EMAIL', flag: this.channelEmail },
      { id: 'SMS', flag: this.channelSms },
      { id: 'PUSH', flag: this.channelPush },
      { id: 'WHATSAPP', flag: this.channelWhatsapp },
      { id: 'RCS', flag: this.channelRcs },
    ];
    return order.filter((c) => c.flag).map((c) => c.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['renders'] || changes['channelEmail'] || changes['channelSms'] || changes['channelPush'] || changes['channelWhatsapp'] || changes['channelRcs']) {
      this.applyInitialSelection();
    }
  }

  private applyInitialSelection(): void {
    const channels = this.activeChannels;
    if (!channels.length) {
      return;
    }
    let chIdx = 0;
    if (this.initialChannel) {
      const found = channels.indexOf(this.initialChannel.toUpperCase() as ChannelId);
      if (found >= 0) {
        chIdx = found;
      }
    }
    this.activeChannelTab = chIdx;
    this.syncLanguageTabForChannel(channels[chIdx]);
  }

  private syncLanguageTabForChannel(channel: ChannelId): void {
    const langs = this.languagesForChannel(channel);
    if (!langs.length) {
      this.activeLanguageTab = 0;
      return;
    }
    let langIdx = 0;
    if (this.initialLanguage) {
      const found = langs.indexOf(this.initialLanguage.toLowerCase());
      if (found >= 0) {
        langIdx = found;
      }
    }
    this.activeLanguageTab = langIdx;
    this.emitViewed(channel, langs[langIdx]);
  }

  onChannelTabChange(idx: number): void {
    this.activeChannelTab = idx;
    const channel = this.activeChannels[idx];
    if (channel) {
      this.syncLanguageTabForChannel(channel);
    }
  }

  onLanguageTabChange(idx: number): void {
    this.activeLanguageTab = idx;
    const channel = this.activeChannels[this.activeChannelTab];
    const langs = this.languagesForChannel(channel);
    if (channel && langs[idx]) {
      this.emitViewed(channel, langs[idx]);
    }
  }

  private emitViewed(channel: string, languageCode: string): void {
    this.combinationViewed.emit({ channel, languageCode });
  }

  /** Languages that actually have rendered content for this channel, in catalog order. */
  languagesForChannel(channel: ChannelId): string[] {
    return CONSENT_LANGUAGES
      .map((l) => l.code)
      .filter((code) => this.hasContentForLangChannel(code, channel));
  }

  private hasContentForLangChannel(lang: string, channel: string): boolean {
    const val = this.renders?.[lang]?.[channel];
    return typeof val === 'string' && val.trim().length > 0;
  }


  currentChannel(): ChannelId | null {
    return this.activeChannels[this.activeChannelTab] ?? null;
  }

  currentLanguage(): string | null {
    const channel = this.currentChannel();
    if (!channel) {
      return null;
    }
    const langs = this.languagesForChannel(channel);
    return langs[this.activeLanguageTab] ?? null;
  }

  currentContent(): string {
    const channel = this.currentChannel();
    const lang = this.currentLanguage();
    if (!channel || !lang) {
      return '';
    }
    return this.renders?.[lang]?.[channel] ?? this.renders?.[channel]?.[lang] ?? '';
  }

  showLanguageTabs(): boolean {
    const channel = this.currentChannel();
    if (!channel) {
      return false;
    }
    return this.languagesForChannel(channel).length > 1;
  }

  showTranslationBanner(): boolean {
    const lang = this.currentLanguage();
    return !!lang && requiresTranslationVerification(lang);
  }

  isCurrentRtl(): boolean {
    const lang = this.currentLanguage();
    return !!lang && isRtl(lang);
  }

  languageLabel(code: string): string {
    return labelFor(code);
  }

  tabLabel(id: ChannelId): string {
    const m = CHANNEL_META[id];
    return `${m.icon} ${m.name}`;
  }

  processedEmailHtml(): SafeHtml {
    let html = this.currentContent() || '';
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      html = html.replace(new RegExp(key, 'g'), t.sampleValue || '');
    }
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  extractImages(html: string): string[] {
    if (!html) return [];
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return Array.from(tmp.querySelectorAll('img'))
      .map((img) => img.getAttribute('src') || '')
      .filter((src) => !!src);
  }

  smsBody(): string {
    return this.currentContent();
  }

  smsLen(): number {
    return this.currentContent().length;
  }

  pushBody(): string {
    return this.currentContent();
  }

  waImages(): string[] {
    return this.extractImages(this.currentContent());
  }
}