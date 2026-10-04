import Link from "next/link";
import FykaMark from "./fyka-mark";
import ThemeToggle from "./theme-toggle";
import { controlButtonClass } from "./control-button";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { localeNames, otherLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Metrics match the Fyka Notes / Retro / Votes header so the sites read as
 * one family: p-6 around a 44px (mobile) / 52px (desktop) control row,
 * full-bleed rather than max-width, and no bottom border.
 *
 * `path` is the current page without its locale prefix ("" or "/privacy"),
 * so the language button lands on the same page in the other language.
 */
export default function SiteHeader({
  locale,
  path,
}: {
  locale: Locale;
  path: string;
}) {
  const { nav } = getDictionary(locale);
  const target = otherLocale(locale);

  return (
    <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
      <div className="flex items-center justify-between p-6">
        <Link
          href={`/${locale}`}
          aria-label={nav.home}
          className="flex items-center gap-3"
        >
          <FykaMark tile="h-10 w-10" />
          <span className="text-lg font-bold tracking-tight sm:text-2xl">
            Fyka
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Plain <a>, not <Link>: /en and /nl share the [lang] root layout,
              so a client navigation would remount <html> in the browser,
              where the theme <script> never runs and the .dark class is lost. */}
          <a
            href={`/${target}${path}`}
            hrefLang={target}
            lang={target}
            aria-label={localeNames[target]}
            className={cn(
              buttonVariants({ variant: "outline" }),
              controlButtonClass,
              "text-sm font-semibold uppercase",
            )}
          >
            {target}
          </a>

          <ThemeToggle label={nav.theme} />

          <Link
            href={`/${locale}#waitlist`}
            className="flex h-11 items-center gap-2 rounded-lg bg-steel-600 px-4 py-2 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-steel-700 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:scale-100 md:h-13 md:rounded-xl"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="hidden sm:inline">{nav.cta}</span>
            <span className="sr-only sm:hidden">{nav.cta}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
