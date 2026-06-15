import {
  Component,
  Input,
  OnChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MergeTag } from '../../../core/models/consent.model';

type ChannelId = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP' | 'RCS';

@Component({
  selector: 'app-checker-channel-preview',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './checker-channel-preview.component.html',
  styleUrl: './checker-channel-preview.component.scss',
})
export class CheckerChannelPreviewComponent implements OnChanges {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() channelEmail    = false;
  @Input() channelSms      = false;
  @Input() channelPush     = false;
  @Input() channelWhatsapp = false;
  @Input() channelRcs      = false;
  @Input({ required: true }) messageHtml = '';
  @Input() mergeTags: MergeTag[] = [];

  activeTab = 0;

  readonly channelMeta: Record<ChannelId, { icon: string; name: string }> = {
    EMAIL:    { icon: '📧', name: 'Email' },
    SMS:      { icon: '📱', name: 'SMS' },
    PUSH:     { icon: '🔔', name: 'Push' },
    WHATSAPP: { icon: '💬', name: 'WhatsApp' },
    RCS:      { icon: '🌐', name: 'RCS' },
  };

  get activeChannels(): ChannelId[] {
    const order: { id: ChannelId; flag: boolean }[] = [
      { id: 'EMAIL',    flag: this.channelEmail },
      { id: 'SMS',      flag: this.channelSms },
      { id: 'PUSH',     flag: this.channelPush },
      { id: 'WHATSAPP', flag: this.channelWhatsapp },
      { id: 'RCS',      flag: this.channelRcs },
    ];
    return order.filter(c => c.flag).map(c => c.id);
  }

  ngOnChanges(): void {
    if (this.activeTab >= this.activeChannels.length) {
      this.activeTab = 0;
    }
  }

  tabLabel(id: ChannelId): string {
    const m = this.channelMeta[id];
    return `${m.icon} ${m.name}`;
  }

  processedEmailHtml(): SafeHtml {
    let html = this.messageHtml || '';
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
      .map(img => img.getAttribute('src') || '')
      .filter(src => !!src);
  }

  private stripHtml(html: string): string {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  smsBody(): string {
    const t = this.stripHtml(this.messageHtml);
    return t.length > 160 ? t.slice(0, 157) + '...' : t;
  }

  smsLen(): number {
    return this.stripHtml(this.messageHtml).length;
  }

  pushBody(): string {
    return this.stripHtml(this.messageHtml).slice(0, 100);
  }

  waData(): { text: string; images: string[] } {
    return {
      text: this.stripHtml(this.messageHtml).slice(0, 200),
      images: this.extractImages(this.messageHtml),
    };
  }

  rcsData(): { text: string; images: string[] } {
    return {
      text: this.stripHtml(this.messageHtml).slice(0, 1000),
      images: this.extractImages(this.messageHtml),
    };
  }
}