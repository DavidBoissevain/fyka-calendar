import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Dictionary } from "@/lib/dictionaries";

export default function FaqSection({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section className="py-24 sm:py-32" id="faq" aria-labelledby="faq-title">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          <h2 id="faq-title" className="text-4xl font-bold">
            {faq.title}
          </h2>

          {/* shadcn Accordion styled as the Fyka Notes FAQ cards */}
          <Accordion className="gap-3">
            {faq.items.map((item) => (
              <AccordionItem
                key={item.question}
                className="rounded-lg border border-border bg-white dark:bg-card/50"
              >
                <AccordionTrigger className="px-6 py-5 text-lg font-semibold hover:no-underline **:data-[slot=accordion-trigger-icon]:size-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
