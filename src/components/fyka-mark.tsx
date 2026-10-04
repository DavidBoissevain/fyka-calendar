/**
 * The Fyka Calendar mark, "Two days": two day columns, each holding a block
 * of time. Built on the shared Fyka recipe (see app-marks.tsx in
 * notes-website): a rounded tile (25 %) with a one-hue gradient, here
 * cyan-600 → cyan-700, so it sits apart from Votes red, Retro emerald,
 * Notes steel and Watch black. Unlike the stroked app glyphs it is drawn in
 * filled white at three opacities, at 62 % of the tile.
 *
 * src/app/icon.svg draws the same mark; `npm run icons` rasterises it into
 * apple-icon.png. Change both together.
 */
export default function FykaMark({
  tile = "h-12 w-12",
  icon = "h-[62%] w-[62%]",
}: {
  tile?: string;
  icon?: string;
}) {
  return (
    <div
      className={`${tile} flex shrink-0 items-center justify-center rounded-[25%] bg-linear-to-br from-[#0891B2] to-[#0E7490] shadow-md`}
    >
      <svg className={icon} viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <rect x="4" y="3.5" width="7" height="17" rx="2.5" fillOpacity=".3" />
        <rect x="13" y="3.5" width="7" height="17" rx="2.5" fillOpacity=".3" />
        <rect x="4" y="6" width="7" height="5.5" rx="2" />
        <rect x="13" y="12" width="7" height="6" rx="2" fillOpacity=".8" />
      </svg>
    </div>
  );
}
