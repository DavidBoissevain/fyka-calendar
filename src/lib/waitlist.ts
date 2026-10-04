import type { Locale } from "./i18n";

/**
 * Deliberately loose (something@something.tld): the real check will be the
 * confirmation email once storage exists. Shared by the form and the API
 * route so both reject the same input.
 */
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const EMAIL_MAX_LENGTH = 254;

export type WaitlistRequest = {
  email: string;
  locale: Locale;
  /** Honeypot: hidden from people, so anything in it came from a bot. */
  company: string;
};

export type WaitlistError = "bad_request" | "invalid_email" | "unavailable";

export type WaitlistResponse = { ok: true } | { error: WaitlistError };
