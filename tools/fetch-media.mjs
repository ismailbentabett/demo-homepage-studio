#!/usr/bin/env node
// Download Pexels candidates for every media slot of a niche into niches/<trade>/media/pool/.
//
//   node tools/fetch-media.mjs <trade> [--slot name] [--per 5] [--limit-slots N] [--limit-videos N]
//                                      [--photos-only] [--videos-only] [--more] [--force]
//
// Reads niches/<trade>/media-queries.json ({photos:[{slot,queries,must,avoid}], videos:[...]}).
// Photos: landscape, saved as <cid>.webp (max 2340 wide, q80) + <cid>-1170.webp.
// Videos: an HD file up to 1920 wide, re-encoded to 1280 wide / 24 fps / H.264 / no audio / faststart,
//         at most 15 s and 15 MB, plus a <cid>-poster.webp.
// Everything is recorded in pool/index.json. Resumable: a slot that already has enough candidates is skipped
// (--more adds `--per` new ones). A Pexels id is used once across all slots of the niche.
// The API key comes from PEXELS_API_KEY in .env (or the environment). It is never printed.
// Without a key (or with --source openverse) photos come from Openverse (api.openverse.org, no key): only
// CC0, public-domain and CC BY files, landscape and at least 1600 wide, with creator, source and licence kept
// for the credit line. Openverse allows ~200 anonymous searches a day, so every answer is cached in
// pool/.openverse-cache.json and each query is retried shorter (last 2 words, then last word) only when needed.
// Videos need Pexels.
// Safe with parallel workers: a lock file niches/<trade>/media/.lock lets one process fetch at a time (the others
// wait for it), and when niches/<trade>/media/manifest.json already exists the fetch is skipped (--force fetches anyway).
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import dotenv from "dotenv";
import sharp from "sharp";
import ffmpegPath from "ffmpeg-static";
import { ROOT, die, mediaDir, readJsonFile, writeJsonFile, rel, parseArgs } from "./lib/site-paths.mjs";

dotenv.config({ path: path.join(ROOT, ".env"), quiet: true });

const { pos, opt } = parseArgs(process.argv.slice(2), ["photos-only", "videos-only", "more", "force"]);
const trade = pos[0];
if (!trade) die("Usage: node tools/fetch-media.mjs <trade> [--slot name] [--per 5] [--limit-slots N] [--limit-videos N]");
const KEY = (process.env.PEXELS_API_KEY || "").trim();
const SOURCE = opt.source || (KEY ? "pexels" : "openverse");
if (!["pexels", "openverse", "commons"].includes(SOURCE)) die("--source must be pexels, openverse or commons.");

const per = clampInt(opt.per ?? 5, 1, 10, "--per");
const limitSlots = opt["limit-slots"] !== undefined ? clampInt(opt["limit-slots"], 0, 999, "--limit-slots") : Infinity;
const limitVideos = opt["limit-videos"] !== undefined ? clampInt(opt["limit-videos"], 0, 999, "--limit-videos") : Infinity;

const MEDIA = mediaDir(trade);
const POOL = path.join(MEDIA, "pool");
const LOCK = path.join(MEDIA, ".lock");
const MANIFEST = path.join(MEDIA, "manifest.json");

// ---------- one fetcher per trade ----------
function lockOwnerAlive() {
  try {
    const info = JSON.parse(fs.readFileSync(LOCK, "utf8"));
    if (Date.now() - Date.parse(info.at) > 3 * 3600 * 1000) return false; // older than 3 h: stale
    try { process.kill(info.pid, 0); return true; } catch (e) { return e.code === "EPERM"; }
  } catch {
    return false; // unreadable lock: treat as stale
  }
}
async function takeLock() {
  fs.mkdirSync(MEDIA, { recursive: true });
  const started = Date.now();
  let told = false;
  for (;;) {
    try {
      fs.writeFileSync(LOCK, JSON.stringify({ pid: process.pid, at: new Date().toISOString() }), { flag: "wx" });
      return;
    } catch (e) {
      if (e.code !== "EEXIST") throw e;
    }
    if (!lockOwnerAlive()) { fs.rmSync(LOCK, { force: true }); continue; }
    if (!told) { console.log(`Another process is fetching ${trade} media (${rel(LOCK)}); waiting for it...`); told = true; }
    if (Date.now() - started > 45 * 60 * 1000) die(`Still locked after 45 minutes: ${rel(LOCK)}. Delete it if no fetch is running.`);
    await sleep(5000);
  }
}
const releaseLock = () => {
  try {
    if (JSON.parse(fs.readFileSync(LOCK, "utf8")).pid === process.pid) fs.rmSync(LOCK, { force: true });
  } catch {}
};
if (fs.existsSync(MANIFEST) && !opt.force) {
  console.log(`${rel(MANIFEST)} already exists: the ${trade} library is set up, nothing to fetch (use --force to fetch more).`);
  process.exit(0);
}
if (SOURCE === "pexels" && !KEY) die("PEXELS_API_KEY is not set. Add a line PEXELS_API_KEY=... to .env in the project root (free key from pexels.com/api).");
await takeLock();
process.on("exit", releaseLock);
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => process.exit(130));
if (fs.existsSync(MANIFEST) && !opt.force) {
  console.log(`${rel(MANIFEST)} was written while waiting: nothing to fetch.`);
  process.exit(0);
}
const INDEX = path.join(POOL, "index.json");
const queriesFile = path.join(ROOT, "niches", trade, "media-queries.json");
const queries = readJsonFile(queriesFile);

let photoSlots = queries.photos || [];
let videoSlots = queries.videos || [];
if (opt.slot) {
  photoSlots = photoSlots.filter((s) => s.slot === opt.slot);
  videoSlots = videoSlots.filter((s) => s.slot === opt.slot);
  if (!photoSlots.length && !videoSlots.length) {
    die(`No slot "${opt.slot}" in ${rel(queriesFile)}. Slots: ${[...(queries.photos || []), ...(queries.videos || [])].map((s) => s.slot).join(", ")}`);
  }
}
photoSlots = opt["videos-only"] ? [] : photoSlots.slice(0, limitSlots);
videoSlots = opt["photos-only"] ? [] : videoSlots.slice(0, limitVideos);

const index = readJsonFile(INDEX, { trade, updated: null, candidates: {}, slots: {} });
index.candidates ||= {};
index.slots ||= {};
const usedPexels = new Set(Object.values(index.candidates).map((c) => `${c.kind}:${c.pexelsId}`));
const saveIndex = () => {
  index.updated = new Date().toISOString();
  writeJsonFile(INDEX, index);
};

// ---------- Pexels API (polite: >= 1.2 s between calls, honours the hourly limit, retries a 429) ----------
let lastCall = 0;
let remaining = null;
async function api(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    const wait = lastCall + 1200 - Date.now();
    if (wait > 0) await sleep(wait);
    lastCall = Date.now();
    if (remaining !== null && remaining < 3) die("Pexels hourly request limit is almost used up. Run again in an hour; finished slots are kept.");
    let res;
    try {
      res = await fetch(url, { headers: { Authorization: KEY } });
    } catch (e) {
      console.warn(`  network error (${e.message}); retrying`);
      await sleep(3000);
      continue;
    }
    const rem = res.headers.get("x-ratelimit-remaining");
    if (rem !== null) remaining = Number(rem);
    if (res.status === 429) {
      const ra = Number(res.headers.get("retry-after")) || 30;
      console.warn(`  Pexels says slow down; waiting ${ra} s`);
      await sleep(ra * 1000);
      continue;
    }
    if (res.status === 401 || res.status === 403) die("Pexels refused the API key (401/403). Check PEXELS_API_KEY in .env.");
    if (!res.ok) throw new Error(`Pexels answered ${res.status} for a search`);
    return res.json();
  }
  throw new Error("Pexels kept refusing; try again later");
}

async function download(url, file, headers = {}) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, { headers, signal: AbortSignal.timeout(120000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, buf);
      return buf;
    } catch (e) {
      if (attempt === 2) throw new Error(`download failed (${e.message})`);
      await sleep(/429/.test(e.message) ? 20000 * (attempt + 1) : 2000);
    }
  }
}

// ---------- Openverse (no key; ~20 searches a minute, ~200 a day) ----------
const OV_CACHE = path.join(POOL, ".openverse-cache.json");
const ovCache = readJsonFile(OV_CACHE, {});
const OV_LICENSES = new Set(["cc0", "pdm", "by", "by-sa"]);
const OV_UA = "demo-homepage-studio/1.0 (local media fetch; low-volume CC image search)";
const OV_SOURCE_NAMES = { wikimedia: "Wikimedia Commons", flickr: "Flickr", rawpixel: "rawpixel", stocksnap: "StockSnap", nappy: "nappy" };
let ovLast = 0;
async function ovSearch(q) {
  if (ovCache[q]) return ovCache[q];
  const url = `https://api.openverse.org/v1/images/?q=${encodeURIComponent(q)}&license=cc0,pdm,by&size=large&aspect_ratio=wide&page_size=20&mature=false`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const wait = ovLast + 3500 - Date.now();
    if (wait > 0) await sleep(wait);
    ovLast = Date.now();
    let res;
    try { res = await fetch(url, { headers: { "User-Agent": OV_UA }, signal: AbortSignal.timeout(60000) }); }
    catch (e) { console.warn(`  network error (${e.message}); retrying`); await sleep(5000); continue; }
    if (res.status === 429) {
      const ra = Number(res.headers.get("retry-after")) || 60;
      if (ra > 600) die(`Openverse daily limit reached (retry in ${Math.round(ra / 60)} min). Finished slots and cached searches are kept; run again later.`);
      console.warn(`  Openverse says slow down; waiting ${ra} s`);
      await sleep(ra * 1000);
      continue;
    }
    if (res.status >= 500) { console.warn(`  Openverse answered ${res.status}; switching to Wikimedia Commons for this run`); ovDown = true; return commonsSearch(q); }
    if (!res.ok) throw new Error(`Openverse answered ${res.status} for a search`);
    const j = await res.json();
    ovCache[q] = (j.results || []).map((r) => ({
      id: r.id, url: r.url, landing: r.foreign_landing_url, creator: r.creator, creatorUrl: r.creator_url,
      license: r.license, licenseVersion: r.license_version, licenseUrl: r.license_url, source: r.source,
      title: r.title, w: r.width, h: r.height,
    }));
    writeJsonFile(OV_CACHE, ovCache);
    return ovCache[q];
  }
  console.warn("  Openverse unreachable; switching to Wikimedia Commons for this run");
  ovDown = true;
  return commonsSearch(q);
}
// Wikimedia Commons (no key): the fallback when Openverse is down, or the only source with --source commons.
// Downloads Commons' own 2340-wide rendition, not the original, so it is fast.
let ovDown = opt.source === "commons";
let cmLast = 0;
let dlLast = 0; // upload.wikimedia.org answers 429 to fast downloads: one every 2.5 s, back off on 429
const stripTags = (s) => String(s || "").replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
async function commonsSearch(q) {
  const key = `commons:${q}`;
  if (ovCache[key]) return ovCache[key];
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrsearch=${encodeURIComponent(q + " filetype:bitmap")}&gsrlimit=30&prop=imageinfo&iiprop=url|size|extmetadata&iiurlwidth=2340`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const wait = cmLast + 1000 - Date.now();
    if (wait > 0) await sleep(wait);
    cmLast = Date.now();
    let res;
    try { res = await fetch(url, { headers: { "User-Agent": OV_UA }, signal: AbortSignal.timeout(60000) }); }
    catch (e) { console.warn(`  Commons network error (${e.message}); retrying`); await sleep(5000); continue; }
    if (!res.ok) { console.warn(`  Commons answered ${res.status}; retrying`); await sleep(10000); continue; }
    const j = await res.json();
    const pages = Object.values(j.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    ovCache[key] = pages.map((p) => {
      const i = p.imageinfo?.[0] || {};
      const m = i.extmetadata || {};
      const ln = stripTags(m.LicenseShortName?.value);
      const license = /^CC0/i.test(ln) ? "cc0" : /public domain|^PD/i.test(ln) ? "pdm" : /^CC BY-SA/i.test(ln) ? "by-sa" : /^CC BY \d/i.test(ln) ? "by" : "other";
      return {
        id: `c${String(p.pageid).padStart(11, "0")}`, url: i.thumburl || i.url, landing: i.descriptionurl,
        creator: stripTags(m.Artist?.value).slice(0, 80), creatorUrl: null, license,
        licenseVersion: (ln.match(/\d(\.\d)?/) || [""])[0], licenseUrl: stripTags(m.LicenseUrl?.value) || i.descriptionurl,
        source: "wikimedia", title: stripTags(m.ImageDescription?.value).slice(0, 140) || p.title.replace(/^File:|\.\w+$/g, ""),
        w: i.width, h: i.height,
      };
    });
    writeJsonFile(OV_CACHE, ovCache);
    return ovCache[key];
  }
  throw new Error("Wikimedia Commons kept failing; try again later");
}
async function photoSearch(q) { return ovDown ? commonsSearch(q) : ovSearch(q); }
function shorter(q) {
  const w = q.trim().split(/\s+/);
  return [w.length > 2 ? w.slice(-2).join(" ") : null, w.length > 1 ? w[w.length - 1] : null].filter(Boolean);
}
async function fetchPhotoSlotOpenverse(spec) {
  const slot = spec.slot;
  const have = (index.slots[slot] || []).filter((cid) => index.candidates[cid]);
  const want = opt.more ? have.length + per : per;
  if (have.length >= want) { console.log(`${slot}: ${have.length} candidates already, skipped`); return; }
  const dir = path.join(POOL, slot);
  let added = 0;
  const tried = new Set();
  const order = [...(spec.queries || []), ...(spec.queries || []).flatMap(shorter)];
  for (const q of order) {
    if (have.length + added >= want) break;
    if (tried.has(q)) continue;
    tried.add(q);
    for (const r of await photoSearch(q)) {
      if (have.length + added >= want) break;
      if (usedPexels.has(`photo:ov:${r.id}`) || !OV_LICENSES.has(r.license)) continue;
      if (!r.w || r.w < r.h * 1.2 || r.w < 1600) continue;
      const cid = `o${r.id.replace(/-/g, "").slice(0, 12)}`;
      try {
        if (r.source === "wikimedia") { const w = dlLast + 2500 - Date.now(); if (w > 0) await sleep(w); dlLast = Date.now(); }
        const raw = await download(r.url, path.join(POOL, ".tmp", `${cid}.img`), { "User-Agent": OV_UA });
        const large = path.join(dir, `${cid}.webp`);
        const small = path.join(dir, `${cid}-1170.webp`);
        fs.mkdirSync(dir, { recursive: true });
        const info = await sharp(raw).rotate().resize({ width: 2340, withoutEnlargement: true }).webp({ quality: 80 }).toFile(large);
        if (info.width < 1600) { fs.rmSync(large, { force: true }); continue; }
        await sharp(raw).rotate().resize({ width: 1170, withoutEnlargement: true }).webp({ quality: 80 }).toFile(small);
        const { dominant } = await sharp(raw).stats();
        index.candidates[cid] = {
          id: cid, kind: "photo", slot, pexelsId: `ov:${r.id}`,
          photographer: cleanCreator(r.creator), photographerUrl: r.creatorUrl || r.landing, url: r.landing,
          source: OV_SOURCE_NAMES[r.source] || r.source,
          license: r.license === "by" ? `CC BY ${r.licenseVersion || ""}`.trim() : r.license === "by-sa" ? `CC BY-SA ${r.licenseVersion || ""}`.trim() : r.license === "cc0" ? "CC0" : "Public domain",
          licenseUrl: r.licenseUrl, alt: cleanAlt(r.title) || spec.must || slot, w: info.width, h: info.height,
          color: dominant ? "#" + [dominant.r, dominant.g, dominant.b].map((x) => x.toString(16).padStart(2, "0")).join("") : null,
          sha: sha(fs.readFileSync(large)), file: `${slot}/${cid}.webp`, small: `${slot}/${cid}-1170.webp`, query: q,
        };
        (index.slots[slot] ||= []).push(cid);
        usedPexels.add(`photo:ov:${r.id}`);
        added++;
        saveIndex();
        console.log(`${slot}: + ${cid} ${info.width}x${info.height} ${index.candidates[cid].license} by ${r.creator} via ${r.source} ("${q}")`);
      } catch (e) {
        console.warn(`${slot}: skipped ${cid}: ${e.message}`);
      }
    }
  }
  if (have.length + added < want) console.warn(`${slot}: only ${have.length + added} of ${want} found; add simpler queries to ${rel(queriesFile)}`);
}

// ---------- photos ----------
async function fetchPhotoSlot(spec) {
  if (SOURCE !== "pexels") return fetchPhotoSlotOpenverse(spec);
  const slot = spec.slot;
  const have = (index.slots[slot] || []).filter((cid) => index.candidates[cid]);
  const want = opt.more ? have.length + per : per;
  if (have.length >= want) {
    console.log(`${slot}: ${have.length} candidates already, skipped`);
    return;
  }
  const dir = path.join(POOL, slot);
  let added = 0;
  for (const q of spec.queries || []) {
    if (have.length + added >= want) break;
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(q)}&orientation=landscape&size=large&per_page=20`;
    const data = await api(url);
    for (const p of data.photos || []) {
      if (have.length + added >= want) break;
      if (usedPexels.has(`photo:${p.id}`)) continue;
      if (p.width < p.height * 1.2 || p.width < 1600) continue; // landscape and big enough
      const cid = `p${p.id}`;
      try {
        const raw = await download(`${p.src.original}?auto=compress&cs=tinysrgb&w=2340`, path.join(POOL, ".tmp", `${cid}.jpg`));
        const large = path.join(dir, `${cid}.webp`);
        const small = path.join(dir, `${cid}-1170.webp`);
        fs.mkdirSync(dir, { recursive: true });
        const info = await sharp(raw).rotate().resize({ width: 2340, withoutEnlargement: true }).webp({ quality: 80 }).toFile(large);
        await sharp(raw).rotate().resize({ width: 1170, withoutEnlargement: true }).webp({ quality: 80 }).toFile(small);
        index.candidates[cid] = {
          id: cid, kind: "photo", slot, pexelsId: p.id,
          photographer: p.photographer, photographerUrl: p.photographer_url, url: p.url,
          alt: cleanAlt(p.alt) || spec.must || slot, w: info.width, h: info.height, color: p.avg_color || null,
          sha: sha(fs.readFileSync(large)), file: rel(large).replace(/^niches\/[^/]+\/media\/pool\//, ""),
          small: rel(small).replace(/^niches\/[^/]+\/media\/pool\//, ""), query: q,
        };
        (index.slots[slot] ||= []).push(cid);
        usedPexels.add(`photo:${p.id}`);
        added++;
        saveIndex();
        console.log(`${slot}: + ${cid} ${info.width}x${info.height} by ${p.photographer} ("${q}")`);
      } catch (e) {
        console.warn(`${slot}: skipped ${cid}: ${e.message}`);
      }
    }
  }
  if (have.length + added < want) console.warn(`${slot}: only ${have.length + added} of ${want} found; add more queries to ${rel(queriesFile)}`);
}

// ---------- videos ----------
async function fetchVideoSlot(spec) {
  const slot = spec.slot;
  const have = (index.slots[slot] || []).filter((cid) => index.candidates[cid]);
  const want = opt.more ? have.length + per : per;
  if (have.length >= want) {
    console.log(`${slot}: ${have.length} candidates already, skipped`);
    return;
  }
  const dir = path.join(POOL, slot);
  let added = 0;
  for (const q of spec.queries || []) {
    if (have.length + added >= want) break;
    const url = `https://api.pexels.com/videos/search?query=${encodeURIComponent(q)}&orientation=landscape&size=medium&per_page=15`;
    const data = await api(url);
    for (const v of data.videos || []) {
      if (have.length + added >= want) break;
      if (usedPexels.has(`video:${v.id}`)) continue;
      if (v.duration < 4 || v.duration > 60) continue;
      const file = pickVideoFile(v.video_files || []);
      if (!file) continue;
      const cid = `v${v.id}`;
      try {
        const tmp = path.join(POOL, ".tmp", `${cid}-src.mp4`);
        await download(file.link, tmp);
        fs.mkdirSync(dir, { recursive: true });
        const out = path.join(dir, `${cid}.mp4`);
        encodeVideo(tmp, out, 28);
        if (fs.statSync(out).size > 15 * 1024 * 1024) encodeVideo(tmp, out, 32);
        if (fs.statSync(out).size > 15 * 1024 * 1024) throw new Error("still over 15 MB after re-encoding");
        const posterPng = path.join(POOL, ".tmp", `${cid}-poster.png`);
        runFfmpeg(["-y", "-ss", v.duration > 2 ? "1" : "0", "-i", out, "-frames:v", "1", posterPng]);
        const poster = path.join(dir, `${cid}-poster.webp`);
        const pinfo = await sharp(posterPng).webp({ quality: 78 }).toFile(poster);
        index.candidates[cid] = {
          id: cid, kind: "video", slot, pexelsId: v.id,
          photographer: v.user?.name || "Pexels", photographerUrl: v.user?.url || "https://www.pexels.com", url: v.url,
          alt: spec.must ? firstClause(spec.must) : slot, w: pinfo.width, h: pinfo.height,
          duration: Math.min(15, Math.round(v.duration)), color: null,
          sha: sha(fs.readFileSync(out)), file: `${slot}/${cid}.mp4`, poster: `${slot}/${cid}-poster.webp`,
          bytes: fs.statSync(out).size, query: q,
        };
        (index.slots[slot] ||= []).push(cid);
        usedPexels.add(`video:${v.id}`);
        added++;
        saveIndex();
        console.log(`${slot}: + ${cid} ${pinfo.width}x${pinfo.height} ${index.candidates[cid].duration}s ${(index.candidates[cid].bytes / 1048576).toFixed(1)} MB by ${v.user?.name} ("${q}")`);
      } catch (e) {
        console.warn(`${slot}: skipped ${cid}: ${e.message}`);
      }
    }
  }
  if (have.length + added < want) console.warn(`${slot}: only ${have.length + added} of ${want} found; add more queries to ${rel(queriesFile)}`);
}

// The widest MP4 that is at most 1920 wide (and at least 1280 when one exists).
function pickVideoFile(files) {
  const mp4 = files.filter((f) => f.file_type === "video/mp4" && f.width && f.width <= 1920 && f.width >= f.height);
  mp4.sort((a, b) => b.width - a.width);
  return mp4.find((f) => f.width >= 1280) || null;
}

function encodeVideo(src, out, crf) {
  runFfmpeg(["-y", "-i", src, "-t", "15", "-vf", "scale=1280:-2,fps=24", "-c:v", "libx264", "-crf", String(crf),
    "-preset", "slow", "-pix_fmt", "yuv420p", "-an", "-movflags", "+faststart", out]);
}

function runFfmpeg(args) {
  const r = spawnSync(ffmpegPath, ["-hide_banner", "-loglevel", "error", ...args], { encoding: "utf8" });
  if (r.status !== 0) throw new Error(`ffmpeg failed: ${(r.stderr || "").trim().split("\n").pop()}`);
}

// ---------- helpers ----------
function sha(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex").slice(0, 16);
}
// Commons creator fields can carry wiki markup, user pages and e-mail addresses: keep only a plain name.
function cleanCreator(s) {
  const n = String(s || "").replace(/\[[^\]]*\]|\([^)]*\)/g, " ").replace(/^Category:/i, "").replace(/\S+@\S+|\S+ at \S+\.\w+/g, " ").replace(/\s+/g, " ").trim();
  return n || "Unknown creator";
}

function cleanAlt(s) {
  return String(s || "").replace(/\s+/g, " ").trim();
}
function firstClause(s) {
  return String(s).split(/[,;]/).map((x) => x.trim()).find((x) => x && !/^(slow|landscape|\d)/i.test(x)) || String(s);
}
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}
function clampInt(v, min, max, name) {
  const n = Number(v);
  if (!Number.isInteger(n) || n < min || n > max) die(`${name} must be a whole number from ${min} to ${max}.`);
  return n;
}

// ---------- run ----------
console.log(`fetch-media ${trade} (${SOURCE}): ${photoSlots.length} photo slots, ${videoSlots.length} video slots, ${per} per slot`);
let failed = 0;
for (const s of photoSlots) {
  try { await fetchPhotoSlot(s); } catch (e) { failed++; console.warn(`${s.slot}: ${e.message}`); }
}
if (SOURCE !== "pexels" && videoSlots.length) console.warn(`Openverse has no usable video: ${videoSlots.length} video slot(s) skipped (they need PEXELS_API_KEY).`);
for (const s of SOURCE !== "pexels" ? [] : videoSlots) {
  try { await fetchVideoSlot(s); } catch (e) { failed++; console.warn(`${s.slot}: ${e.message}`); }
}
fs.rmSync(path.join(POOL, ".tmp"), { recursive: true, force: true });
saveIndex();
const total = Object.keys(index.candidates).length;
console.log(`Done. ${total} candidates in ${rel(INDEX)}${remaining !== null ? ` (Pexels requests left this hour: ${remaining})` : ""}.`);
console.log(`Next: node tools/contact-sheet.mjs ${trade} --pool, then node tools/approve-media.mjs ${trade} <slot> <candidateId>`);
if (failed) process.exit(1);
