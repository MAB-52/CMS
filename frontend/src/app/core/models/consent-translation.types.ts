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
    map[t.languageCode] = {};
    for (const r of t.renders || []) {
      map[t.languageCode][r.channel] = r.renderedContent;
    }
  }
  return map;
}