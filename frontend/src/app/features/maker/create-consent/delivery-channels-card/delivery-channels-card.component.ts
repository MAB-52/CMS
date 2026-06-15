import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MergeTag } from '../../../../core/models/consent.model';
 
type ChannelId = 'EMAIL' | 'SMS'| 'WHATSAPP' | 'RCS';
 
@Component({
  selector: 'app-delivery-channels-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatTabsModule],
  templateUrl: './delivery-channels-card.component.html',
  styleUrl: './delivery-channels-card.component.scss',
})
export class DeliveryChannelsCardComponent implements OnChanges, OnDestroy {
  private readonly sanitizer = inject(DomSanitizer);
  private sub?: Subscription;
 
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) previewHtml = '';
  @Input({ required: true }) mergeTags: MergeTag[] = [];
 
  readonly channels: {
    id: ChannelId;
    icon: string;
    name: string;
    desc: string;
  }[] = [
    { id: 'EMAIL',    icon: '📧', name: 'Email',    desc: 'HTML formatted email with full branding' },
    { id: 'SMS',      icon: '📱', name: 'SMS',      desc: 'Plain text, 160 characters max' },
    { id: 'WHATSAPP', icon: '💬', name: 'WhatsApp', desc: 'Rich message via WhatsApp Business' },
    { id: 'RCS',      icon: '🌐', name: 'RCS',      desc: 'Rich Communication Services message' },
  ];
 
  activeTab = 0;
 
  get selectedChannels(): ChannelId[] {
    return this.channels
      .filter((ch) => this.isOn(ch.id))
      .map((ch) => ch.id);
  }
 
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'] && this.form) {
      this.sub?.unsubscribe();
      this.sub = this.form.valueChanges.subscribe(() => {
        const sel = this.selectedChannels;
        if (this.activeTab >= sel.length) {
          this.activeTab = Math.max(0, sel.length - 1);
        }
      });
    }
  }
 
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
 
  tabIcon(id: ChannelId): string {
    return this.channels.find((c) => c.id === id)?.icon ?? '';
  }
 
  tabLabel(id: ChannelId): string {
    return this.channels.find((c) => c.id === id)?.name ?? id;
  }
 
  tabHeader(id: ChannelId): string {
    return `${this.tabIcon(id)} ${this.tabLabel(id)}`;
  }
 
  processedEmailHtml(): SafeHtml {
    let html = this.previewHtml || '';
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
    const imgs = tmp.querySelectorAll('img');
    return Array.from(imgs).map(img => img.getAttribute('src') || '').filter(src => !!src);
  }
 
  waBodyWithImages(): { text: string; images: string[] } {
    return {
      text: this.stripHtml(this.previewHtml).slice(0, 200),
      images: this.extractImages(this.previewHtml),
    };
  }
 
  rcsBodyWithImages(): { text: string; images: string[] } {
    return {
      text: this.stripHtml(this.previewHtml).slice(0, 1000),
      images: this.extractImages(this.previewHtml),
    };
  }
 
  smsText(): string {
    return this.stripHtml(this.previewHtml);
  }
 
  smsBody(): string {
    const t = this.smsText();
    return t.length > 160 ? t.slice(0, 157) + '...' : t;
  }
 
  smsLen(): number {
    return this.smsText().length;
  }
 
  pushBody(): string {
    return this.stripHtml(this.previewHtml).slice(0, 100);
  }
 
  waBody(): string {
    return this.stripHtml(this.previewHtml).slice(0, 200);
  }
 
  private stripHtml(html: string): string {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '')
      .replace(/\s+/g, ' ')
      .trim();
  }
 
  private controlKey(id: ChannelId): string {
    const map: Record<ChannelId, string> = {
      EMAIL:    'channelEmail',
      SMS:      'channelSms',
      WHATSAPP: 'channelWhatsapp',
      RCS:      'channelRcs',
    };
    return map[id];
  }
}