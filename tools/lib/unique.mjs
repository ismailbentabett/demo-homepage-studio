// Uniqueness rules for a site's concept against the library (docs/METHOD.md §1-2, CLAUDE.md rule 2).
// Compared against every registry entry (delivered sites AND reservations made at concept time by parallel
// workers) plus niche siblings that have a plan/concept.json but no registry entry yet.
import fs from "node:fs";
import path from "node:path";
import { siteDir, readJson, nicheIds, parseId, readRegistry, updateRegistry, rel } from "./common.mjs";

// The easy default hero (full-bleed video with a left scrim) may appear at most twice in the library.
export const EASY_HERO_FAMILY = 1;
const MAX_DISPLAY_USES = 6; // expanded from 3 to accommodate 54-site library
const MAX_HERO_USES = 6; // expanded from 3 to accommodate 54-site library
const SIGNATURE_JACCARD = 0.5;
const ACCENT_HUE_DEG = 12;

const STOP = new Set(["the", "a", "an", "and", "of", "to", "in", "on", "for", "with", "as", "by", "at", "is", "it", "its",
  "from", "into", "that", "this", "every", "each", "our", "your", "their", "be", "are", "or", "per", "like", "page", "site"]);

// plan/concept.json of a site (null when missing).
export function loadConcept(id) {
  return readJson(path.join(siteDir(id), "plan", "concept.json"), null);
}

// The media plan: src/media.json first (it wins), then plan/media.json.
export function loadMediaPlan(id) {
  for (const p of [["src", "media.json"], ["plan", "media.json"]]) {
    const f = path.join(siteDir(id), ...p);
    if (fs.existsSync(f)) return readJson(f);
  }
  return null;
}

// Concept -> the registry's flat shape.
export function entryFromConcept(id, c) {
  return {
    id,
    trade: parseId(id).trade,
    displayFont: c?.fonts?.display ?? null,
    textFont: c?.fonts?.text ?? null,
    heroFamily: c?.heroFamily ?? null,
    signature: { name: c?.signature?.name ?? "", summary: c?.signature?.summary ?? "" },
    paletteFamily: c?.palette?.family ?? null,
    accentHex: c?.palette?.accent ?? null,
    deepHex: c?.palette?.deep ?? null,
    tone: c?.tone ?? null,
  };
}

// Problems with the concept file itself (missing fields, bad hex).
export function conceptShapeProblems(c) {
  const p = [];
  if (!c) return ["plan/concept.json is missing. Write it in stage 2 (shape in docs/METHOD.md)."];
  const need = [["fonts.display", c.fonts?.display], ["fonts.text", c.fonts?.text], ["palette.family", c.palette?.family],
    ["palette.accent", c.palette?.accent], ["palette.deep", c.palette?.deep], ["signature.name", c.signature?.name],
    ["signature.summary", c.signature?.summary], ["heroFamily", c.heroFamily], ["thesis", c.thesis], ["tone", c.tone]];
  for (const [k, v] of need) if (v === undefined || v === null || v === "") p.push(`concept.json has no ${k}.`);
  if (c.heroFamily !== undefined && !(Number.isInteger(c.heroFamily) && c.heroFamily >= 1 && c.heroFamily <= 15)) {
    p.push(`concept.json heroFamily must be a number 1-15 (METHOD §2), not ${JSON.stringify(c.heroFamily)}.`);
  }
  for (const k of ["ink", "paper", "accent", "deep", "signal"]) {
    const v = c.palette?.[k];
    if (v !== undefined && !/^#[0-9a-f]{6}$/i.test(String(v))) p.push(`concept.json palette.${k} must be a #rrggbb hex, not ${JSON.stringify(v)}.`);
  }
  return p;
}

const norm = (s) => String(s ?? "").toLowerCase().replace(/\s+/g, " ").trim();
// "Rust + Bone" == "bone & rust"
const normFamily = (s) => norm(s).split(/\s*(?:\+|&|,|\/|\band\b|\bwith\b)\s*/).filter(Boolean).sort().join("+");

function tokens(s) {
  return new Set(norm(s).replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter((t) => t.length > 1 && !STOP.has(t))
    .map((t) => t.replace(/(ies)$/, "y").replace(/(?<=[a-z]{3})s$/, "")));
}
export function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  return inter / (A.size + B.size - inter);
}

// #rrggbb -> { h (deg), s (0-1), l (0-1) }
export function hexToHsl(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(String(hex || ""));
  if (!m) return null;
  const n = parseInt(m[1], 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  if (d === 0) return { h: 0, s: 0, l };
  const s = d / (1 - Math.abs(2 * l - 1));
  let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h = (h * 60 + 360) % 360;
  return { h, s, l };
}
const hueGap = (a, b) => Math.min(Math.abs(a - b), 360 - Math.abs(a - b));

// Everyone this site must differ from: registry entries (delivered + reserved by other workers).
export function othersFor(id, registry = readRegistry()) {
  return registry.sites.filter((e) => e.id !== id);
}

// Niche siblings with a draft plan/concept.json but no reservation yet. Only a heads-up: the first one to
// reserve (stage.mjs, leaving "concept") wins, so two drafts never block each other.
export function draftSiblings(id, registry = readRegistry()) {
  const known = new Set(registry.sites.map((e) => e.id));
  const out = [];
  for (const sib of nicheIds(parseId(id).trade)) {
    if (sib === id || known.has(sib)) continue;
    const c = loadConcept(sib);
    if (c) out.push({ ...entryFromConcept(sib, c), status: "draft concept" });
  }
  return out;
}

// All collisions of `entry` (registry shape) with `others`. Returns plain-English strings.
export function collisions(entry, others) {
  const out = [];
  const trade = entry.trade;
  const sameNiche = others.filter((o) => (o.trade || parseId(o.id).trade) === trade);
  const tag = (o) => `${o.id}${o.status && o.status !== "delivered" ? ` (${o.status})` : ""}`;

  // Display font
  const disp = norm(entry.displayFont);
  if (disp) {
    const nicheHit = sameNiche.filter((o) => norm(o.displayFont) === disp);
    if (nicheHit.length) out.push(`Display font "${entry.displayFont}" is already used in this niche by ${nicheHit.map(tag).join(", ")}. Pick another display face.`);
    const uses = others.filter((o) => norm(o.displayFont) === disp);
    if (uses.length >= MAX_DISPLAY_USES) out.push(`Display font "${entry.displayFont}" is already used ${uses.length} times in the library (max ${MAX_DISPLAY_USES}): ${uses.map(tag).join(", ")}.`);
  }
  // Exact font pair
  const pair = `${disp}|${norm(entry.textFont)}`;
  const pairHit = others.filter((o) => `${norm(o.displayFont)}|${norm(o.textFont)}` === pair);
  if (disp && pairHit.length) out.push(`Font pair "${entry.displayFont}" + "${entry.textFont}" is already used by ${pairHit.map(tag).join(", ")}. Change one of the two.`);

  // Hero family
  if (entry.heroFamily != null) {
    const hf = Number(entry.heroFamily);
    const nicheHero = sameNiche.filter((o) => Number(o.heroFamily) === hf);
    if (nicheHero.length) out.push(`Hero family ${hf} is already used in this niche by ${nicheHero.map(tag).join(", ")}. Pick another family (METHOD §2).`);
    const limit = hf === EASY_HERO_FAMILY ? 2 : MAX_HERO_USES;
    const heroUses = others.filter((o) => Number(o.heroFamily) === hf);
    if (heroUses.length >= limit) out.push(`Hero family ${hf} is already used ${heroUses.length} times in the library (max ${limit}): ${heroUses.map(tag).join(", ")}.`);
  }

  // Signature system
  const sigText = `${entry.signature?.name ?? ""} ${entry.signature?.summary ?? ""}`;
  for (const o of others) {
    const nameJ = jaccard(entry.signature?.name, o.signature?.name);
    const allJ = jaccard(sigText, `${o.signature?.name ?? ""} ${o.signature?.summary ?? ""}`);
    if (Math.max(nameJ, allJ) >= SIGNATURE_JACCARD) {
      out.push(`Signature "${entry.signature?.name}" is too close to ${tag(o)} "${o.signature?.name}" (word overlap ${Math.max(nameJ, allJ).toFixed(2)}, max 0.5). Invent a different system.`);
    }
  }

  // Palette family (library-wide, METHOD/CLAUDE.md) and accent hue (within the niche)
  const fam = normFamily(entry.paletteFamily);
  if (fam) {
    const famHit = others.filter((o) => normFamily(o.paletteFamily) === fam);
    if (famHit.length) out.push(`Palette family "${entry.paletteFamily}" is already used by ${famHit.map(tag).join(", ")}. Choose a different color family.`);
  }
  const mine = hexToHsl(entry.accentHex);
  if (mine && mine.s >= 0.12) {
    for (const o of sameNiche) {
      const theirs = hexToHsl(o.accentHex);
      if (!theirs || theirs.s < 0.12) continue; // near-gray accents have no meaningful hue
      const gap = hueGap(mine.h, theirs.h);
      if (gap < ACCENT_HUE_DEG) out.push(`Accent ${entry.accentHex} is within ${gap.toFixed(0)}° of ${tag(o)}'s accent ${o.accentHex} (min ${ACCENT_HUE_DEG}°). Move the accent hue.`);
    }
  }
  return out;
}

// Hero photo / hero video reuse between siblings of the niche (they share one media pool).
export function mediaCollisions(id) {
  const plan = loadMediaPlan(id);
  if (!plan) return [];
  const out = [];
  const mine = { hero: plan.hero ?? plan.slots?.hero, heroVideo: plan.heroVideo ?? plan.slots?.heroVideo };
  for (const sib of nicheIds(parseId(id).trade)) {
    if (sib === id) continue;
    const p = loadMediaPlan(sib);
    if (!p) continue;
    const theirs = [p.hero ?? p.slots?.hero, p.heroVideo ?? p.slots?.heroVideo].filter(Boolean);
    for (const [k, v] of Object.entries(mine)) {
      if (v && theirs.includes(v)) out.push(`Media: ${k} "${v}" is already a hero of ${sib}. Pick another hero from the manifest.`);
    }
  }
  return out;
}

// Full check for one site. Returns { problems: [...], notes: [...], entry }.
// problems = collisions with the registry (blocking); notes = collisions with siblings' unreserved drafts.
export function checkSite(id, { registry = readRegistry(), media = true } = {}) {
  const concept = loadConcept(id);
  const shape = conceptShapeProblems(concept);
  if (!concept) return { problems: shape, notes: [], entry: null };
  const entry = entryFromConcept(id, concept);
  const others = othersFor(id, registry);
  const problems = [...shape, ...collisions(entry, others)];
  // a draft only matters for what the registry does not already flag
  const notes = collisions(entry, [...others, ...draftSiblings(id, registry)]).filter((n) => !problems.includes(n) && n.includes("draft concept"));
  if (media) problems.push(...mediaCollisions(id));
  return { problems, notes, entry };
}

// Check and reserve under the registry mutex, so two parallel sites cannot take the same font/hero/palette.
// Returns { problems, entry, reserved }.
export function reserveSite(id) {
  let result;
  updateRegistry((reg) => {
    result = checkSite(id, { registry: reg, media: false });
    if (result.problems.length) return reg;
    const at = new Date().toISOString();
    const old = reg.sites.find((e) => e.id === id);
    if (old?.status === "delivered") {
      result.reserved = false; // already delivered: nothing to reserve
      return reg;
    }
    reg.sites = reg.sites.filter((e) => e.id !== id);
    reg.sites.push({ ...result.entry, status: "reserved", reservedAt: at });
    result.reserved = true;
    return reg;
  });
  return result;
}

// Is there a reservation (or delivery) for this id that is newer than plan/concept.json?
export function reservationCurrent(id) {
  const e = readRegistry().sites.find((x) => x.id === id);
  if (!e) return false;
  if (e.status === "delivered") return true;
  const f = path.join(siteDir(id), "plan", "concept.json");
  if (!fs.existsSync(f)) return false;
  return Date.parse(e.reservedAt) >= fs.statSync(f).mtimeMs - 1000;
}

export { rel };
