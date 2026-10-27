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
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TabsModule } from 'primeng/tabs';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { MergeTag } from '../../../core/models/consent.model';
import {
  ChannelLanguageRenderMap,
  FALLBACK_REVIEW_LANGUAGE,
  hasRenderedContent,
} from '../../../core/models/consent-translation.types';
import { CHANNEL_META, ChannelId } from '../../../core/utils/channel.util';
import { sanitizeRichHtml } from '../../../core/utils/safe-html.util';
import { CONSENT_LANGUAGES, isRtl, labelFor, requiresTranslationVerification } from '../../../core/constants/consent-languages';

/** GSM-7 single-message limit; longer texts are split into 153-char segments. */
const SMS_SINGLE = 160;
const SMS_SEGMENT = 153;

@Component({
  selector: 'app-consent-channel-language-preview',
  standalone: true,
  imports: [DatePipe, NgTemplateOutlet, FormsModule, TabsModule, SelectButtonModule, TagModule],
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
  /** Consent body (HTML) shown for channels that have no per-language render yet. */
  @Input() fallbackContent: string | null = null;

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

  readonly senderName = 'ConsentIQ';
  readonly senderEmail = 'noreply@consentiq.com';
  readonly recipientEmail = 'john.doe@example.com';
  readonly emailSubject = 'Action Required: Consent Request';
  readonly today = new Date();

  private readonly textCache = new Map<string, string>();

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
      // No translated render for this channel — opening its tab still counts as reviewing it,
      // otherwise the checker could never reach the required combination count.
      this.activeLanguageTab = 0;
      this.emitViewed(channel, FALLBACK_REVIEW_LANGUAGE);
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

  /** p-tabs emits the selected channel id. */
  onChannelSelect(id: string | number | undefined): void {
    const idx = this.activeChannels.indexOf(id as ChannelId);
    if (idx >= 0 && idx !== this.activeChannelTab) {
      this.onChannelTabChange(idx);
    }
  }

  /** p-selectbutton emits the selected language code. */
  onLanguageSelect(code: string | null): void {
    const channel = this.currentChannel();
    if (!channel || !code) {
      return;
    }
    const idx = this.languagesForChannel(channel).indexOf(code);
    if (idx >= 0) {
      this.onLanguageTabChange(idx);
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

  /** Cached so p-selectbutton receives a stable options array between change-detection passes. */
  private langOptionsCache: { key: string; options: { label: string; value: string }[] } = { key: '', options: [] };

  languageOptions(): { label: string; value: string }[] {
    const channel = this.currentChannel();
    const codes = channel ? this.languagesForChannel(channel) : [];
    const key = `${channel}|${codes.join(',')}`;
    if (key !== this.langOptionsCache.key) {
      this.langOptionsCache = { key, options: codes.map((code) => ({ label: labelFor(code), value: code })) };
    }
    return this.langOptionsCache.options;
  }

  private hasContentForLangChannel(lang: string, channel: string): boolean {
    return hasRenderedContent(this.renders, lang, channel);
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

  /** Raw content for the current tab: the language render, else the consent body. */
  currentContent(): string {
    const channel = this.currentChannel();
    const lang = this.currentLanguage();
    if (channel && lang) {
      const rendered = this.renders?.[lang]?.[channel] ?? this.renders?.[channel]?.[lang];
      if (rendered) {
        return rendered;
      }
    }
    return this.fallbackContent ?? '';
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

  channelName(id: ChannelId): string {
    return CHANNEL_META[id].label;
  }

  channelIcon(id: ChannelId): string {
    return CHANNEL_META[id].icon;
  }

  private applyMergeTags(value: string): string {
    let out = value;
    for (const t of this.mergeTags) {
      const key = t.tagKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      out = out.replace(new RegExp(key, 'g'), t.sampleValue || '');
    }
    return out;
  }

  processedEmailHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(sanitizeRichHtml(this.applyMergeTags(this.currentContent() || '')));
  }

  /** Plain-text body for chat-style channels, with merge tags filled by sample values. */
  messageText(): string {
    return this.applyMergeTags(this.toPlainText(this.currentContent()));
  }

  /** Channel renders are already plain text; the HTML fallback is flattened keeping line breaks. */
  private toPlainText(value: string): string {
    if (!value || !/<[a-z][\s\S]*>/i.test(value)) {
      return (value || '').trim();
    }
    const cached = this.textCache.get(value);
    if (cached !== undefined) {
      return cached;
    }
    const withBreaks = value
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|li|h[1-6])>/gi, '\n');
    const doc = new DOMParser().parseFromString(withBreaks, 'text/html');
    const text = (doc.body.textContent || '').replace(/\n{3,}/g, '\n\n').trim();
    if (this.textCache.size > 20) {
      this.textCache.clear();
    }
    this.textCache.set(value, text);
    return text;
  }

  private readonly imageCache = new Map<string, string[]>();

  extractImages(html: string): string[] {
    if (!html || !/<img\b/i.test(html)) return [];
    const cached = this.imageCache.get(html);
    if (cached) return cached;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const srcs = Array.from(doc.querySelectorAll('img'))
      .map((img) => img.getAttribute('src') || '')
      .filter((src) => !!src);
    if (this.imageCache.size > 20) this.imageCache.clear();
    this.imageCache.set(html, srcs);
    return srcs;
  }

  messageImages(): string[] {
    const fromRender = this.extractImages(this.currentContent());
    return fromRender.length ? fromRender : this.extractImages(this.fallbackContent ?? '');
  }

  smsLen(): number {
    return this.messageText().length;
  }

  smsSegments(): number {
    const len = this.smsLen();
    return len <= SMS_SINGLE ? 1 : Math.ceil(len / SMS_SEGMENT);
  }

  smsOverLimit(): boolean {
    return this.smsLen() > SMS_SINGLE;
  }
}
