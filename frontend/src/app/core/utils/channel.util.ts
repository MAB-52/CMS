import { Consent } from '../models/consent.model';

export type ChannelId = 'EMAIL' | 'SMS' | 'PUSH' | 'WHATSAPP' | 'RCS';

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
  const labels: Record<ChannelId, string> = {
    EMAIL:    'Email',
    SMS:      'SMS',
    PUSH:     'Push',
    WHATSAPP: 'WhatsApp',
    RCS:      'RCS',
  };
  return getChannels(c)
    .map((id) => labels[id])
    .join(', ');
}
