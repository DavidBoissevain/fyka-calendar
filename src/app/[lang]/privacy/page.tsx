import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getDictionary } from "@/lib/dictionaries";
import { alternatesFor, hasLocale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/links";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { privacy } = getDictionary(lang);

  return {
    title: `${privacy.title} - Fyka`,
    description: privacy.description,
    alternates: alternatesFor(lang, "/privacy"),
  };
}

// TODO: replace with the real privacy policy before launch.
export default async function Privacy({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { privacy } = getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader locale={lang} path="/privacy" />

      <main id="main" tabIndex={-1} className="outline-none">
        <section className="pt-44 pb-24 sm:pt-52">
          <div className="mx-auto max-w-2xl px-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {privacy.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">{privacy.lead}</p>

            <div className="mt-14 space-y-12">
              {privacy.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <section>
                <h2 className="text-lg font-semibold">
                  {privacy.contactTitle}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {privacy.contactBody}{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-steel-600 underline underline-offset-4 transition-colors hover:text-steel-700 dark:text-steel-300 dark:hover:text-steel-200"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={lang} path="/privacy" />
    </div>
  );
}
