import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  inject,
} from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { MergeTag } from '../../../../core/models/consent.model';

type ChannelId = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP';

@Component({
  selector: 'app-delivery-channels-card',
  standalone: true,
  imports: [ReactiveFormsModule, MatTabsModule],
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
    { id: 'EMAIL', icon: '📧', name: 'Email', desc: 'HTML formatted email with full branding' },
    { id: 'SMS', icon: '📱', name: 'SMS', desc: 'Plain text, 160 characters max' },
    { id: 'PUSH', icon: '🔔', name: 'Push', desc: 'Mobile push notification' },
    { id: 'WHATSAPP', icon: '💬', name: 'WhatsApp', desc: 'Rich message via WhatsApp Business' },
  ];

  selected: ChannelId[] = [];
  activeTab = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form'] && this.form) {
      this.sub?.unsubscribe();
      this.sub = this.form.controls['deliveryChannels'].valueChanges.subscribe(() => this.syncFromForm());
      this.syncFromForm();
    }
    if (changes['previewHtml']) {
      this.syncFromForm();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private syncFromForm(): void {
    const v = (this.form?.controls['deliveryChannels']?.value as string[]) || [];
    this.selected = (v.filter((x) => ['EMAIL', 'SMS', 'PUSH', 'WHATSAPP'].includes(x)) as ChannelId[]) || [];
    if (this.activeTab >= this.selected.length) {
      this.activeTab = 0;
    }
  }

  isOn(id: ChannelId): boolean {
    return this.selected.includes(id);
  }

  toggle(id: ChannelId): void {
    const cur = [...((this.form.controls['deliveryChannels'].value as string[] | null) ?? [])];
    const idx = cur.indexOf(id);
    if (idx >= 0) {
      cur.splice(idx, 1);
    } else {
      cur.push(id);
    }
    this.form.controls['deliveryChannels'].setValue(cur);
    this.form.controls['deliveryChannels'].markAsDirty();
    this.selected = cur as ChannelId[];
    if (this.activeTab >= this.selected.length) {
      this.activeTab = Math.max(0, this.selected.length - 1);
    }
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
  if (!html) {
    return '';
  }
  // Create a temporary DOM element to properly decode HTML entities
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return (tmp.textContent || tmp.innerText || '')
    .replace(/\s+/g, ' ')
    .trim();
}
}
