import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import WaitlistForm from "./waitlist-form";

export default function WaitlistSection({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section
      className="border-t border-border py-24 sm:py-32"
      id="waitlist"
      aria-labelledby="waitlist-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-lg text-center">
          <h2 id="waitlist-title" className="text-4xl font-bold">
            {dict.waitlistSection.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.waitlistSection.body}
          </p>
          <div className="mt-8">
            <WaitlistForm locale={locale} copy={dict.waitlist} />
          </div>
        </div>
      </div>
    </section>
  );
}
