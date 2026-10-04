import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import WaitlistForm from "./waitlist-form";

export default function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <section className="relative overflow-x-clip pt-44 pb-24 sm:pt-52 sm:pb-32">
      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-steel-50/60 via-transparent to-transparent dark:from-slate-800/40" />
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="fade-up mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            {dict.hero.intro}
          </p>
          <div className="mt-10 w-full">
            <WaitlistForm locale={locale} copy={dict.waitlist} />
          </div>
        </div>
      </div>
    </section>
  );
}
