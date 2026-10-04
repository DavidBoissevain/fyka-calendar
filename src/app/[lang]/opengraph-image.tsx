import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionaries";
import { defaultLocale, hasLocale, locales } from "@/lib/i18n";

export const alt = "Fyka";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Rendered at build time, so these reads happen in the repo, not in the
// running container.
const font = (weight: 400 | 600) =>
  readFile(
    join(process.cwd(), "src", "app", "[lang]", "_og", `poppins-latin-${weight}-normal.woff`),
  );

const STEEL_950 = "#1E2733";
const STEEL_200 = "#C3CFDF";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const { hero, waitlistSection } = getDictionary(hasLocale(lang) ? lang : defaultLocale);
  const [regular, semibold] = await Promise.all([font(400), font(600)]);
  const icon = await readFile(join(process.cwd(), "src", "app", "icon.svg"));
  const iconSrc = `data:image/svg+xml;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: `linear-gradient(135deg, ${STEEL_950} 0%, #0F172A 100%)`,
          color: "#fff",
          fontFamily: "Poppins",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> only */}
          <img src={iconSrc} width={112} height={112} alt="" />
          <div style={{ display: "flex", fontSize: 120, fontWeight: 600, letterSpacing: -4 }}>
            Fyka
          </div>
        </div>
        <div style={{ marginTop: 36, fontSize: 52, fontWeight: 600, lineHeight: 1.2 }}>
          {hero.title}
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: STEEL_200 }}>
          {waitlistSection.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Poppins", data: regular, weight: 400, style: "normal" },
        { name: "Poppins", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
