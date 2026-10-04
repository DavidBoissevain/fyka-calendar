import Link from "next/link";
import FykaMark from "./fyka-mark";
import { getDictionary } from "@/lib/dictionaries";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/links";

const linkClass = "text-sm text-white/70 transition-colors hover:text-white";

function Brand({ tagline }: { tagline: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <FykaMark tile="h-10 w-10" />
        <span className="text-xl font-bold">Fyka</span>
      </div>
      <p className="text-sm text-white/60">{tagline}</p>
    </div>
  );
}

export default function SiteFooter({
  locale,
  path,
}: {
  locale: Locale;
  path: string;
}) {
  const { footer } = getDictionary(locale);
  const home = `/${locale}`;

  return (
    <footer className="relative mt-auto pt-24 md:pt-32">
      {/* Curved top edge, matching the slab fill below it */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          className="relative -ml-px block h-24 w-[calc(100%+2px)] md:h-32"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,160 C240,280 480,280 720,160 C960,40 1200,40 1440,160 L1440,320 L0,320 Z"
            className="fill-steel-900 dark:fill-slate-950"
          />
        </svg>
      </div>

      <div className="relative -mt-px bg-steel-900 px-6 pt-8 pb-12 text-white dark:bg-slate-950">
        <div className="mx-auto max-w-4xl">
          {/* Brand sits above the columns on mobile, inside them on desktop */}
          <div className="mb-8 flex justify-center text-center md:hidden">
            <Brand tagline={footer.tagline} />
          </div>

          <div className="grid grid-cols-3 justify-items-center gap-6 md:grid-cols-4 md:justify-items-start md:gap-16">
            <div className="hidden md:block">
              <Brand tagline={footer.tagline} />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">{footer.productTitle}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={`${home}#features`} className={linkClass}>
                    {footer.features}
                  </Link>
                </li>
                <li>
                  <Link href={`${home}#faq`} className={linkClass}>
                    {footer.faq}
                  </Link>
                </li>
                <li>
                  <Link href={`${home}#waitlist`} className={linkClass}>
                    {footer.waitlist}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">{footer.languageTitle}</h3>
              <ul className="space-y-3">
                {locales.map((l) => (
                  <li key={l}>
                    {/* Plain <a> for a full load: see the language button in site-header.tsx */}
                    <a
                      href={`/${l}${path}`}
                      hrefLang={l}
                      lang={l}
                      aria-current={l === locale ? "page" : undefined}
                      className={`${linkClass} aria-[current=page]:text-white`}
                    >
                      {localeNames[l]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">{footer.legalTitle}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href={`${home}/privacy`} className={linkClass}>
                    {footer.privacy}
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className={linkClass}>
                    {footer.contact}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/15 pt-8 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Fyka. {footer.status}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
