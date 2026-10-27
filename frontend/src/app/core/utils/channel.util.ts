import { Consent } from '../models/consent.model';

export type ChannelId = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP' | 'RCS';

export interface ChannelMeta {
  label: string;
  /** PrimeIcons class. */
  icon: string;
  /** Identity colour used for icon tiles and chips. */
  color: string;
}

/** Single source for channel naming, iconography and colour across maker and checker screens. */
export const CHANNEL_META: Record<ChannelId, ChannelMeta> = {
  EMAIL:    { label: 'Email',    icon: 'pi pi-envelope', color: '#D93025' },
  SMS:      { label: 'SMS',      icon: 'pi pi-inbox',    color: '#0A84FF' },
  PUSH:     { label: 'Push',     icon: 'pi pi-bell',     color: '#FF9500' },
  WHATSAPP: { label: 'WhatsApp', icon: 'pi pi-whatsapp', color: '#1FA855' },
  RCS:      { label: 'RCS',      icon: 'pi pi-send',     color: '#6F42C1' },
};

/**
 * Returns the list of enabled channel IDs for a consent,
 * derived from the individual boolean fields.
 *
 * Replaces every previous usage of `c.deliveryChannels`.
 *
 * Example:
 *   getChannels(c)            // ['EMAIL', 'SMS']
 *   getChannels(c).join(', ') // 'EMAIL, SMS'
 */
export function getChannels(c: Consent): ChannelId[] {
  const result: ChannelId[] = [];
  if (c.channelEmail)    result.push('EMAIL');
  if (c.channelSms)      result.push('SMS');
  if (c.channelPush)     result.push('PUSH');
  if (c.channelWhatsapp) result.push('WHATSAPP');
  if (c.channelRcs)      result.push('RCS');
  return result;
}

/**
 * Convenience: comma-separated channel string ready for display.
 * Replaces `(c.deliveryChannels || []).join(', ')` in templates and components.
 *
 * Example:
 *   channelsLabel(c) // 'Email, SMS'
 */
export function channelsLabel(c: Consent): string {
  return getChannels(c)
    .map((id) => CHANNEL_META[id].label)
    .join(', ');
}

/**
 * Icon + colour for any channel label coming from MIS reports, including
 * assisted-capture sources (Branch, Call Centre, Field Agent) not in CHANNEL_META.
 */
export function channelVisual(channel: string | null | undefined): { icon: string; color: string } {
  const key = (channel ?? '').trim().toUpperCase().replace(/\s+/g, '_');
  const meta = CHANNEL_META[key as ChannelId];
  if (meta) return { icon: meta.icon, color: meta.color };
  const ch = key.toLowerCase();
  if (ch.includes('branch')) return { icon: 'pi pi-building', color: '#0F766E' };
  if (ch.includes('call')) return { icon: 'pi pi-phone', color: '#0DCAF0' };
  if (ch.includes('field') || ch.includes('agent')) return { icon: 'pi pi-map-marker', color: '#C98A00' };
  return { icon: 'pi pi-send', color: '#45329E' };
}
