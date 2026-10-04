import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FaqSection from "@/components/landing/faq-section";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import WaitlistSection from "@/components/landing/waitlist-section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getDictionary } from "@/lib/dictionaries";
import { alternatesFor, hasLocale, locales, ogLocales } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = getDictionary(lang);

  return {
    title: meta.title,
    description: meta.description,
    alternates: alternatesFor(lang),
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: "Fyka",
      type: "website",
      url: `/${lang}`,
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={lang} path="" />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero locale={lang} dict={dict} />
        <Features sections={dict.sections} />
        <FaqSection faq={dict.faq} />
        <WaitlistSection locale={lang} dict={dict} />
      </main>
      <SiteFooter locale={lang} path="" />
    </div>
  );
}
