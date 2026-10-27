import { CONSENT_LANGUAGES } from '../constants/consent-languages';

export interface ConsentChannelRender {
  channel: string;
  renderedContent: string;
}

export interface ConsentTranslation {
  languageCode: string;
  content: string;
  renders: ConsentChannelRender[];
}

export interface ConsentTranslationInput {
  languageCode: string;
  content: string;
}

export interface ChannelLanguageCombo {
  channel: string;
  languageCode: string;
}

/** Lookup structure the shared preview component consumes: translation[langCode][channel] -> rendered html/text. */
export type ChannelLanguageRenderMap = Record<string, Record<string, string>>;

export function buildRenderMap(translations: ConsentTranslation[] | undefined): ChannelLanguageRenderMap {
  const map: ChannelLanguageRenderMap = {};
  if (!translations) {
    return map;
  }
  for (const t of translations) {
    const lang = (t.languageCode || '').toLowerCase();
    map[lang] = {};
    for (const r of t.renders || []) {
      map[lang][(r.channel || '').toUpperCase()] = r.renderedContent;
    }
  }
  return map;
}
/** Language used to record a review of a channel that has no translated renders. */
export const FALLBACK_REVIEW_LANGUAGE = 'en';

/** True when this language has non-blank rendered content for the channel. */
export function hasRenderedContent(renders: ChannelLanguageRenderMap | null | undefined, lang: string, channel: string): boolean {
  const val = renders?.[lang]?.[channel];
  return typeof val === 'string' && val.trim().length > 0;
}

/**
 * Number of channel+language combinations a checker must open before approving.
 * Mirrors what the preview can actually show: one per language with content for each
 * enabled channel, and at least one per channel (its fallback view) when none has content.
 */
export function countReviewCombinations(
  channels: readonly string[],
  renders: ChannelLanguageRenderMap | null | undefined,
): number {
  const langs = CONSENT_LANGUAGES.map((l) => l.code);
  return channels.reduce(
    (sum, ch) => sum + Math.max(1, langs.filter((l) => hasRenderedContent(renders, l, ch)).length),
    0,
  );
}
