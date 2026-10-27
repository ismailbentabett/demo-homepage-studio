#!/usr/bin/env node
// Contact sheets to review a niche's media by eye.
//
//   node tools/contact-sheet.mjs <trade> [--pool | --approved]     (default --pool)
//
// --pool:     one row per slot (up to 6 candidates), 6 slots per sheet -> media/contact-sheet-pool-01.jpg ...
// --approved: a grid of every approved photo / video poster       -> media/contact-sheet-approved-01.jpg ...
// Each tile is labelled "slot · candidate id" (videos also show their length).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { die, mediaDir, readJsonFile, rel, parseArgs } from "./lib/site-paths.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["pool", "approved"]);
const trade = pos[0];
if (!trade) die("Usage: node tools/contact-sheet.mjs <trade> [--pool | --approved]");
const mode = opt.approved ? "approved" : "pool";
const MEDIA = mediaDir(trade);

const TW = 300, TH = 200, LABEL = 26, GAP = 8, COLS = 6;
const CELL_H = TH + LABEL;

// Build the list of tiles: [{group, label, file}]
let rows = [];
if (mode === "pool") {
  const index = readJsonFile(path.join(MEDIA, "pool", "index.json"), null);
  if (!index) die(`No pool for ${trade}. Run: node tools/fetch-media.mjs ${trade}`);
  for (const [slot, cids] of Object.entries(index.slots)) {
    const tiles = cids.map((cid) => index.candidates[cid]).filter(Boolean).slice(0, COLS).map((c) => ({
      label: `${slot} · ${c.id}${c.kind === "video" ? ` · ${c.duration}s` : ""}`,
      file: path.join(MEDIA, "pool", c.kind === "video" ? c.poster : c.small || c.file),
      video: c.kind === "video",
    }));
    if (tiles.length) rows.push(tiles);
  }
} else {
  const manifest = readJsonFile(path.join(MEDIA, "manifest.json"), null);
  if (!manifest) die(`No manifest for ${trade}. Approve media first: node tools/approve-media.mjs ${trade} --auto`);
  const tiles = [
    ...Object.entries(manifest.photos || {}).map(([k, p]) => ({ label: `${k} · ${p.candidate}${p.status === "draft" ? " · draft" : ""}`, file: path.join(MEDIA, "approved", p.small || p.file) })),
    ...Object.entries(manifest.videos || {}).map(([k, v]) => ({ label: `${k} · ${v.candidate} · ${v.duration}s${v.status === "draft" ? " · draft" : ""}`, file: path.join(MEDIA, "approved", v.poster), video: true })),
  ];
  for (let i = 0; i < tiles.length; i += COLS) rows.push(tiles.slice(i, i + COLS));
}
if (!rows.length) die("Nothing to show.");

// Remove old sheets of this mode first.
for (const f of fs.readdirSync(MEDIA)) if (f.startsWith(`contact-sheet-${mode}-`)) fs.rmSync(path.join(MEDIA, f));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ROWS_PER_SHEET = 6;
const written = [];
for (let s = 0; s * ROWS_PER_SHEET < rows.length; s++) {
  const sheetRows = rows.slice(s * ROWS_PER_SHEET, (s + 1) * ROWS_PER_SHEET);
  const width = GAP + Math.max(...sheetRows.map((r) => r.length)) * (TW + GAP);
  const height = GAP + sheetRows.length * (CELL_H + GAP);
  const layers = [];
  for (let r = 0; r < sheetRows.length; r++) {
    for (let c = 0; c < sheetRows[r].length; c++) {
      const t = sheetRows[r][c];
      const left = GAP + c * (TW + GAP);
      const top = GAP + r * (CELL_H + GAP);
      let thumb;
      try {
        thumb = await sharp(t.file).resize(TW, TH, { fit: "cover" }).jpeg({ quality: 82 }).toBuffer();
      } catch {
        thumb = await sharp({ create: { width: TW, height: TH, channels: 3, background: "#552222" } }).jpeg().toBuffer();
        t.label += " · MISSING";
      }
      layers.push({ input: thumb, left, top });
      const badge = t.video ? `<rect x="${TW - 58}" y="6" width="52" height="20" rx="4" fill="#000" fill-opacity=".7"/><text x="${TW - 32}" y="20" font-family="Arial, sans-serif" font-size="12" fill="#fff" text-anchor="middle">VIDEO</text>` : "";
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${TW}" height="${CELL_H}">${badge}<rect y="${TH}" width="${TW}" height="${LABEL}" fill="#1b1b1b"/><text x="8" y="${TH + 18}" font-family="Arial, sans-serif" font-size="13" fill="#eee">${esc(t.label)}</text></svg>`;
      layers.push({ input: Buffer.from(svg), left, top });
    }
  }
  const out = path.join(MEDIA, `contact-sheet-${mode}-${String(s + 1).padStart(2, "0")}.jpg`);
  await sharp({ create: { width, height, channels: 3, background: "#2a2a2a" } }).composite(layers).jpeg({ quality: 84 }).toFile(out);
  written.push(rel(out));
}
console.log(`Wrote ${written.length} sheet(s): ${written.join(", ")}`);
