// // export type PublicInviteState = 'READY' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'NOT_FOUND';
// export type PublicInviteState = 'REJECTED' | 'ACCEPTED' | 'READY' | 'NOT_FOUND' | 'WITHDRAWN' | 'EXPIRED';


// export interface PublicConsentInviteDetail {
//   state: PublicInviteState;
//   consentTitle: string;
//   descriptionPreview: string;
//   messagePreview: string;
//   customerDisplayName: string;
//   expiresAt: string | null;
//   respondedAt: string | null;
//   recordedDecision: string | null;
//   /** Human-readable channels selected when the invite was sent, e.g. "Email, SMS". */
//   deliveryChannelsSummary?: string | null;
//   consentDbId?: number;
//   // ADD to PublicConsentInviteDetail interface:
//   availableChannels: string[];   // e.g. ['EMAIL', 'SMS'] — from template
//   validityPeriodDays?: number | null;
// }


export type PublicInviteState = 'REJECTED' | 'ACCEPTED' | 'READY' | 'NOT_FOUND' | 'WITHDRAWN' | 'EXPIRED';

export interface PublicConsentInviteDetail {
  state: PublicInviteState;
  consentTitle: string;
  descriptionPreview: string;
  messagePreview: string;
  resolvedMessageHtml?: string | null;
  customerDisplayName: string;
  expiresAt: string | null;
  respondedAt: string | null;
  recordedDecision: string | null;
  deliveryChannelsSummary?: string | null;
  consentDbId?: number;
  availableChannels: string[];
  validityPeriodDays?: number | null;
}