/**
 * Rasterises src/app/icon.svg into src/app/apple-icon.png.
 *
 * Run with `npm run icons` after changing the mark. Browsers use icon.svg
 * directly; iOS needs a PNG and draws its own rounded mask, so the tile is
 * rendered square (rx 0) to avoid black corners.
 */
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "app");
const SIZE = 180;

const svg = (await readFile(join(app, "icon.svg"), "utf8")).replace(
  /<svg /,
  `<svg width="${SIZE}" height="${SIZE}" `,
).replace(/rx="6"/, 'rx="0"');

const png = await sharp(Buffer.from(svg)).png().toBuffer();
const out = join(app, "apple-icon.png");
await writeFile(out, png);
console.log(`Wrote ${out} (${png.length} bytes, ${SIZE}x${SIZE})`);
