<!-- BEGIN:nextjs-agent-rules -->

# Next.js: ALWAYS read docs before coding

Before any Next.js work, find and read the relevant doc in `node_modules/next/dist/docs/`. Your training data is outdated — the docs are the source of truth.

<!-- END:nextjs-agent-rules -->

# Project guide rails

Next.js 16.2 (App Router, Turbopack) · React 19.2 · TypeScript strict · Tailwind CSS v4 · ESLint 9 flat config.
Distilled from the bundled docs; when a rule here and the docs disagree, the docs win — then fix this file.

## Docs to read first

If `node_modules` is missing, run `npm ci` so the docs exist. Paths are under `node_modules/next/dist/docs/01-app/`:

| Task | Doc |
| --- | --- |
| Where a file goes, routing files | `01-getting-started/02-project-structure.md` |
| `"use client"` boundaries | `01-getting-started/05-server-and-client-components.md` |
| Self-hosting, Docker, `standalone` | `02-guides/self-hosting.md`, `03-api-reference/05-config/01-next-config-js/output.md` |
| Locales, `[lang]` routing | `02-guides/internationalization.md` |
| Metadata, OG images, icons | `01-getting-started/14-metadata-and-og-images.md`, `03-api-reference/03-file-conventions/01-metadata/` |
| Images / fonts / scripts | `03-api-reference/02-components/{image,font,script}.md` |
| Anything that changed in v16 | `02-guides/upgrading/version-16.md` |
| Pre-launch checks | `02-guides/production-checklist.md` |

## Self-hosted standalone server

`next.config.ts` sets `output: "standalone"`; the `Dockerfile` runs `.next/standalone/server.js` behind a reverse proxy on EU hosting. Avoid Vercel-only features (edge functions, KV, Vercel image optimisation). Telemetry is disabled (`NEXT_TELEMETRY_DISABLED=1` in the image).
- Pages are prerendered at build (`generateStaticParams` + `dynamicParams = false`); keep them static.
- Route Handlers live in `src/app/api/` (currently only `api/waitlist`, whose storage is a marked TODO).
- `src/proxy.ts` only redirects locale-less URLs to `/en` or `/nl` by `Accept-Language`.
- No third-party trackers, analytics, embeds or font CDNs: everything is served from our own domain.

## Languages

Every page lives under `src/app/[lang]/` (the root layout too); `src/app/global-not-found.tsx` handles unmatched URLs. Locales are defined in `src/lib/i18n.ts`; all copy lives in `src/lib/dictionaries/{en,nl}.ts` (`nl` is typed against `en`, so a missing string is a type error). Server Components call `getDictionary(locale)`; Client Components get only the slice they need as a prop. Links that switch locale are plain `<a>`, not `next/link`: a client navigation between `/en` and `/nl` remounts the root layout in the browser, where the theme `<script>` can't run. English headings use Title Case, Dutch uses sentence case.
Copy is pre-launch: never describe a feature as available today.

## Structure

```
src/
  app/                 routing only: [lang]/layout.tsx, [lang]/page.tsx, [lang]/<route>/page.tsx, api/, metadata files (icon.svg, apple-icon.png, opengraph-image.tsx)
  components/          shared UI (site-header, theme-toggle, …)
    ui/                shadcn/ui components (generated; don't hand-edit, restyle via theme variables or className)
    landing/           sections used only by the home page
  lib/                 non-UI modules: i18n.ts, dictionaries/, links.ts (every external URL), waitlist.ts
public/                static assets served from /
scripts/               node build helpers run via npm scripts (`npm run icons` rasterises icon.svg to apple-icon.png)
```

- New route = new folder in `src/app/` with a `page.tsx`. Keep pages thin: compose components, don't hold markup-heavy logic.
- A component used by one feature lives in a subfolder named for it (like `components/landing/`); promote it to `components/` once a second feature needs it.
- Use `_folder` (private) inside `app/` for colocated non-route files, `(group)` to share a layout without changing the URL.
- Import through the `@/` alias (`@/components/...`, `@/lib/...`); use relative imports only for siblings in the same folder.
- External URLs go in `src/lib/links.ts`, never inline.

## Code conventions

- **Server Component by default.** Add `"use client"` only to the smallest leaf that needs state, effects, event handlers or browser APIs (see `waitlist-form.tsx`: the sections stay Server Components and pass it its dictionary slice). Everything a `"use client"` file imports becomes client JS.
- Props crossing into a Client Component must be serializable (no functions, class instances); `React.ReactNode` children are fine.
- Browser APIs (`window`, `localStorage`, `matchMedia`) only inside event handlers or `useEffect`, and wrap storage access in `try/catch` — client components are still prerendered at build.
- Files: kebab-case (`site-header.tsx`). One default-exported component per file, named in PascalCase; shared constants/types as named exports.
- Type props inline (`{ faq }: { faq: Dictionary["faq"] }`) or with a local `type`; no `any`. Next 16 page/layout `params` and `searchParams` are Promises — `await` them (use the generated `PageProps<'/route'>` helper).
- Comments explain *why* (a non-obvious constraint or trade-off), as in `theme-toggle.tsx` and `control-button.ts`. Don't narrate what the code does.

## Styling

- The look follows the Fyka Notes site (`notes-website`): Poppins, the `steel` palette, `max-w-6xl px-6` columns, `text-4xl font-bold` section headings with dot lists, bordered card FAQ, the fixed blurred header with `controlButtonClass` controls, the curved steel footer. Match it; don't introduce badges, eyebrows, icon cards or new accent colours.
- UI is built from shadcn/ui (`base-nova`, Base UI primitives), themed through the CSS variables in `src/app/globals.css` (`--background`, `--foreground`, `--primary`, `--muted-foreground`, `--border`, `--input`, …, mapped onto steel). Use `bg-background`, `text-muted-foreground`, `text-steel-600` etc. instead of new hex values; add a token if a colour is genuinely new.
- Keep text at WCAG AA: white text needs `steel-600` or darker (steel-500 is 4.3:1).
- Dark mode is class-based (`.dark` on `<html>`, set before paint by the inline script in `[lang]/layout.tsx`). Style with `dark:` variants — no JS theme state, no mount guards.
- Respect reduced motion (`motion-reduce:transition-none`) on any transition or animation.

## Built-ins over hand-rolled

- `next/image` for images (always `width`, `height`, meaningful `alt`), `next/font` for fonts, `next/script` for third-party scripts, `next/link` for internal navigation (plain `<a target="_blank" rel="noopener noreferrer">` for external links).
- SEO through the Metadata API (`export const metadata` / `generateMetadata`) and metadata files in `app/` — never hand-written `<meta>` tags. Each new page sets its own `title` and `description`.

## Accessibility

Semantic elements first (`button` for actions, `a` for navigation, one `h1` per page, ordered headings). Icon-only buttons get `aria-label`; decorative SVGs get `aria-hidden="true"`. Disclosure widgets use the shadcn Accordion, which wires `aria-expanded`/`aria-controls`. Keep `eslint-config-next`'s jsx-a11y rules passing — don't disable them.

## Maintaining

- Before calling work done: `npm run lint`, `npx tsc --noEmit`, and `npm run build` (the build catches prerender errors, e.g. in `opengraph-image.tsx`). `next build` no longer lints in v16.
- Dependencies: add one only when the platform or a few lines of code won't do; prefer packages that work in Server Components. Commit `package-lock.json`; install with `npm ci`.
- Upgrading Next: read `02-guides/upgrading/` for the target version, run `npx @next/codemod@latest upgrade latest`, then lint + build. Keep `next` and `eslint-config-next` on the same version.
- Never commit `.env*`, `.next/`, or `next-env.d.ts` (already gitignored). Client-visible env vars need the `NEXT_PUBLIC_` prefix and are inlined at build time.
- Update this file when a convention changes, so the next session starts from the truth.
