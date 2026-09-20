import en from "@/lib/i18n/en";
import es from "@/lib/i18n/es";
import type { Dictionary, Locale } from "@/lib/i18n/types";

export type { Dictionary, Locale } from "@/lib/i18n/types";
export { localePath } from "@/lib/i18n/types";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale] ?? en;
