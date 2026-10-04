"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { CircleCheckIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import {
  EMAIL_MAX_LENGTH,
  EMAIL_PATTERN,
  type WaitlistError,
  type WaitlistRequest,
  type WaitlistResponse,
} from "@/lib/waitlist";

type Status = "idle" | "submitting" | "success" | WaitlistError | "error";

export default function WaitlistForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: Dictionary["waitlist"];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const inputId = `${id}-email`;
  const noteId = `${id}-note`;
  const errorId = `${id}-error`;

  // The form is replaced by the confirmation, so move focus there; otherwise
  // keyboard and screen reader users are left on a button that no longer exists.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();

    // Our own check instead of the browser's, so the message is in the
    // page's language rather than the browser's.
    if (email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) {
      setStatus("invalid_email");
      inputRef.current?.focus();
      return;
    }

    setStatus("submitting");
    const body: WaitlistRequest = {
      email,
      locale,
      company: String(data.get("company") ?? ""),
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = (await res.json()) as WaitlistResponse;
      setStatus("ok" in result ? "success" : result.error);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Alert
        ref={successRef}
        role="status"
        tabIndex={-1}
        className="mx-auto max-w-lg rounded-xl px-5 py-4 text-left text-base outline-none"
      >
        <CircleCheckIcon aria-hidden="true" className="text-primary" />
        <AlertTitle>{copy.successTitle}</AlertTitle>
        <AlertDescription>{copy.success}</AlertDescription>
      </Alert>
    );
  }

  const error =
    status === "invalid_email" || status === "unavailable" || status === "error"
      ? copy[status]
      : null;
  const submitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="mx-auto w-full max-w-lg">
      <Field data-invalid={status === "invalid_email" || undefined}>
        <FieldLabel htmlFor={inputId} className="sr-only">
          {copy.label}
        </FieldLabel>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            ref={inputRef}
            id={inputId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder={copy.placeholder}
            aria-invalid={status === "invalid_email" || undefined}
            aria-describedby={error ? `${errorId} ${noteId}` : noteId}
            className="h-12 rounded-xl bg-white px-4 text-[15px] md:text-[15px] dark:bg-card/50"
          />
          {/* Notes' download button, on steel-600 instead of 500: white on
              steel-500 is 4.3:1, just under AA. */}
          <Button
            type="submit"
            disabled={submitting}
            className="h-12 shrink-0 rounded-xl bg-steel-600 px-7 text-[15px] font-medium text-white hover:bg-steel-700 hover:shadow-lg hover:shadow-steel-500/20 active:scale-[0.98] motion-reduce:transition-none"
          >
            {submitting && <Spinner aria-hidden="true" />}
            {submitting ? copy.submitting : copy.submit}
          </Button>
        </div>

        {/* Honeypot for bots. Off-screen and out of the tab order, so people never fill it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <FieldError id={errorId} className="text-center">
          {error}
        </FieldError>
        <FieldDescription id={noteId} className="text-center last:mt-1">
          {copy.note}{" "}
          <Link href={`/${locale}/privacy`}>{copy.privacy}</Link>
        </FieldDescription>
      </Field>
    </form>
  );
}
