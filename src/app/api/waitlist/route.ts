import { defaultLocale, hasLocale } from "@/lib/i18n";
import {
  EMAIL_MAX_LENGTH,
  EMAIL_PATTERN,
  type WaitlistResponse,
} from "@/lib/waitlist";

const reply = (body: WaitlistResponse, status = 200) =>
  Response.json(body, { status });

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return reply({ error: "bad_request" }, 400);
  }
  if (typeof body !== "object" || body === null) {
    return reply({ error: "bad_request" }, 400);
  }
  const { email, locale, company } = body as Record<string, unknown>;

  // Honeypot filled in: a bot. Answer like a success so it learns nothing.
  if (typeof company === "string" && company !== "") {
    return reply({ ok: true });
  }

  const address = typeof email === "string" ? email.trim() : "";
  if (address.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(address)) {
    return reply({ error: "invalid_email" }, 400);
  }
  const lang = typeof locale === "string" && hasLocale(locale) ? locale : defaultLocale;

  // ───────────────────────────────────────────────────────────────────────
  // TODO(waitlist-storage): persist the signup with an EU-owned provider.
  //
  //   - Store { email: address, locale: lang, createdAt } and dedupe on email
  //     (answer { ok: true } for duplicates, so the form can't be used to
  //     check whether someone signed up).
  //   - Send a confirmation email (double opt-in) before treating the
  //     address as subscribed, and support removal on request: the privacy
  //     page promises both.
  //   - Rate-limit this route, here or in the reverse proxy.
  //   - Never log the address itself.
  //
  // Until that exists, production refuses signups instead of telling people
  // they're on a list that doesn't exist. Development accepts and drops them
  // so the form can be tried out.
  // ───────────────────────────────────────────────────────────────────────
  if (process.env.NODE_ENV === "production") {
    return reply({ error: "unavailable" }, 503);
  }
  console.info(`[waitlist] storage not implemented; dropped a "${lang}" signup`);
  return reply({ ok: true }, 201);
}
