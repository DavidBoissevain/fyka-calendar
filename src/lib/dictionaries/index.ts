import type { Locale } from "@/lib/i18n";
import en, { type Dictionary } from "./en";
import nl from "./nl";

export type { Dictionary };

// Import only from Server Components: pass client components the slice they
// need, so the other language never ends up in the browser bundle.
const dictionaries: Record<Locale, Dictionary> = { en, nl };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];
