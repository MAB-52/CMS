export type PublicInviteState = 'READY' | 'ACCEPTED' | 'REJECTED' | 'EXPIRED' | 'NOT_FOUND';

export interface PublicConsentInviteDetail {
  state: PublicInviteState;
  consentTitle: string;
  descriptionPreview: string;
  messagePreview: string;
  customerDisplayName: string;
  expiresAt: string | null;
  respondedAt: string | null;
  recordedDecision: string | null;
}
