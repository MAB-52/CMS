export type ConsentLanguageCode = 'en' | 'hi' | 'mr' | 'ur';

export interface ConsentLanguageMeta {
  code: ConsentLanguageCode;
  label: string;
  rtl: boolean;
}

/**
 * Static v1 language catalog. Extensible later without schema changes —
 * just add an entry here and a matching enum value on the backend
 * (ConsentLanguageCode.java).
 */
export const CONSENT_LANGUAGES: ConsentLanguageMeta[] = [
  { code: 'en', label: 'English', rtl: false },
  { code: 'hi', label: 'Hindi', rtl: false },
  { code: 'mr', label: 'Marathi', rtl: false },
  { code: 'ur', label: 'Urdu', rtl: true },
];

export const DEFAULT_LANGUAGE: ConsentLanguageCode = 'en';

export function isRtl(code: string): boolean {
  return CONSENT_LANGUAGES.find((l) => l.code === code)?.rtl ?? false;
}

export function labelFor(code: string): string {
  return CONSENT_LANGUAGES.find((l) => l.code === code)?.label ?? code.toUpperCase();
}

/** Languages that require human verification of AI-generated translation accuracy. */
export function requiresTranslationVerification(code: string): boolean {
  return code !== DEFAULT_LANGUAGE;
}