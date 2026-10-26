#!/usr/bin/env node
// Approve a pool candidate into a niche's media library.
//
//   node tools/approve-media.mjs <trade> <slot> <candidateId> [--key name] [--alt "text"] [--draft]
//   node tools/approve-media.mjs <trade> --auto          (first candidate of every slot not approved yet, status "draft")
//   node tools/approve-media.mjs <trade> --list          (what is approved)
//
// Copies the files to niches/<trade>/media/approved/ as <key>.webp + <key>-1170.webp (photos) or
// <key>.mp4 + <key>-poster.webp (videos) and writes niches/<trade>/media/manifest.json.
// The key defaults to the slot name. Shape of manifest.json: docs/BUILD-CONTRACT.md §3 "Manifest".
import fs from "node:fs";
import path from "node:path";
import { die, mediaDir, readJsonFile, writeJsonFile, rel, parseArgs } from "./lib/site-paths.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["auto", "list", "draft"]);
const [trade, slot, cid] = pos;
if (!trade) die("Usage: node tools/approve-media.mjs <trade> <slot> <candidateId> | <trade> --auto | <trade> --list");

const MEDIA = mediaDir(trade);
const POOL = path.join(MEDIA, "pool");
const APPROVED = path.join(MEDIA, "approved");
const MANIFEST = path.join(MEDIA, "manifest.json");
const index = readJsonFile(path.join(POOL, "index.json"), null);
const manifest = readJsonFile(MANIFEST, { trade, updated: null, photos: {}, videos: {} });
manifest.photos ||= {};
manifest.videos ||= {};

if (opt.list) {
  for (const [k, p] of Object.entries(manifest.photos)) console.log(`photo ${k}: ${p.candidate} (${p.status}) ${p.w}x${p.h} "${p.alt}"`);
  for (const [k, v] of Object.entries(manifest.videos)) console.log(`video ${k}: ${v.candidate} (${v.status}) ${v.w}x${v.h} ${v.duration}s "${v.alt}"`);
  process.exit(0);
}
if (!index) die(`No pool yet for ${trade}. Run: node tools/fetch-media.mjs ${trade}`);

const KEY_RE = /^[a-z0-9][a-z0-9-]*$/i;

function approve(slotName, candId, { key = slotName, alt, status = "approved" } = {}) {
  const c = index.candidates[candId];
  if (!c) die(`No candidate "${candId}" in the pool. Candidates of ${slotName}: ${(index.slots[slotName] || []).join(", ") || "none"}`);
  if (c.slot !== slotName) die(`${candId} belongs to slot "${c.slot}", not "${slotName}".`);
  if (!KEY_RE.test(key)) die(`Key "${key}" must be letters, digits and dashes.`);
  // The same Pexels file must not be approved under two keys.
  for (const [k, e] of [...Object.entries(manifest.photos), ...Object.entries(manifest.videos)]) {
    if (e.pexelsId === c.pexelsId && k !== key) die(`${candId} is already approved as "${k}". One file, one key.`);
  }
  fs.mkdirSync(APPROVED, { recursive: true });
  const credit = { name: c.photographer, url: c.url || c.photographerUrl, source: c.source || "Pexels", ...(c.license ? { license: c.license, licenseUrl: c.licenseUrl } : {}) };
  const base = { slot: slotName, pexelsId: c.pexelsId, candidate: candId, status, credit, alt: alt || c.alt };
  if (c.kind === "photo") {
    copy(c.file, `${key}.webp`);
    copy(c.small, `${key}-1170.webp`);
    delete manifest.videos[key];
    manifest.photos[key] = { file: `${key}.webp`, small: `${key}-1170.webp`, w: c.w, h: c.h, color: c.color, ...base };
  } else {
    copy(c.file, `${key}.mp4`);
    copy(c.poster, `${key}-poster.webp`);
    delete manifest.photos[key];
    manifest.videos[key] = { file: `${key}.mp4`, poster: `${key}-poster.webp`, w: c.w, h: c.h, duration: c.duration, ...base };
  }
  console.log(`${c.kind} ${key} <- ${candId} (${status})`);
}

function copy(poolRel, name) {
  const src = path.join(POOL, poolRel);
  if (!fs.existsSync(src)) die(`Pool file missing: ${rel(src)}. Run fetch-media again for that slot.`);
  fs.copyFileSync(src, path.join(APPROVED, name));
}

if (opt.auto) {
  let n = 0;
  for (const [slotName, cids] of Object.entries(index.slots)) {
    if (manifest.photos[slotName] || manifest.videos[slotName]) continue;
    const first = cids.find((x) => index.candidates[x]);
    if (!first) continue;
    approve(slotName, first, { status: "draft" });
    n++;
  }
  console.log(n ? `Auto-approved ${n} slots as "draft". Review them with node tools/contact-sheet.mjs ${trade} --approved` : "Nothing new to approve.");
} else {
  if (!slot || !cid) die("Give a slot and a candidate id, e.g. node tools/approve-media.mjs drywall hero-A1 p11427055 (or --auto).");
  approve(slot, cid, { key: opt.key || slot, alt: typeof opt.alt === "string" ? opt.alt : undefined, status: opt.draft ? "draft" : "approved" });
}

manifest.trade = trade;
manifest.updated = new Date().toISOString();
writeJsonFile(MANIFEST, manifest);
console.log(`${rel(MANIFEST)}: ${Object.keys(manifest.photos).length} photos, ${Object.keys(manifest.videos).length} videos`);
