import type { Dictionary } from "@/lib/dictionaries";

// Bullet dot. `className` sets the top margin that centres it on the first
// line of text.
function Dot({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`h-2 w-2 shrink-0 rounded-full bg-steel-400 ${className}`}
    />
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 text-lg">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-4">
          <Dot className="mt-2.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Anchor ids for the header/footer links. "features" is the second block so
// the footer's Features link lands on the feature list itself.
const blocks = [
  { key: "why", id: "why" },
  { key: "features", id: "features" },
  { key: "data", id: "your-data" },
] as const;

export default function Features({
  sections,
}: {
  sections: Dictionary["sections"];
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6">
      <div className="border-t border-border" />

      <div className="space-y-24 pt-24 sm:space-y-32 sm:pt-32">
        {blocks.map(({ key, id }) => {
          const block = sections[key];
          return (
            <section
              key={id}
              id={id}
              aria-labelledby={`${id}-title`}
              className="grid items-start gap-12 lg:grid-cols-[1fr_2fr]"
            >
              <div className="space-y-6">
                <h2 id={`${id}-title`} className="text-4xl font-bold">
                  {block.title}
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {block.intro}
                </p>
              </div>
              <FeatureList items={block.items} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
