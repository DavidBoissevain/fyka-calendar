import type { Metadata } from "next";

export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Each language named in itself, for the language switch. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  nl: "Nederlands",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  nl: "nl_NL",
};

export const otherLocale = (locale: Locale): Locale =>
  locale === "en" ? "nl" : "en";

/** Canonical URL plus hreflang alternates for a path that exists in every locale. */
export function alternatesFor(
  locale: Locale,
  path = "",
): Metadata["alternates"] {
  return {
    canonical: `/${locale}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
      "x-default": `/${defaultLocale}${path}`,
    },
  };
}
