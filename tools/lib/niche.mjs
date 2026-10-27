// Niche validation (used by tools/validate-niche.mjs and tools/next.mjs).
// validateNiche(trade) -> { trade, problems: [string], warnings: [string] }
import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { ROOT, readJson, nicheOrder } from "./common.mjs";
import { findBanned, HIGHLY_RECOMMEND, DOLLAR_RE } from "./banned.mjs";

// Phone groups (docs/NICHE-TEMPLATE.md "City pool"): niche -> group, and each group's NN range.
export const GROUPS = {
  G1: { niches: ["roofer", "hvac", "plumber", "electrician", "gutter"], from: 1, to: 15 },
  G2: { niches: ["landscaper", "painter", "general", "handyman", "siding"], from: 16, to: 30 },
  G3: { niches: ["concrete", "fencedeck", "pool", "solar", "windowdoor"], from: 31, to: 45 },
  G4: { niches: ["garagedoor", "flooring", "cleaning", "pest", "mason"], from: 46, to: 60 },
  G5: { niches: ["drywall", "insulation", "carpenter", "appliance", "locksmith"], from: 61, to: 75 },
  G6: { niches: ["moving", "demolition", "fireplace", "mechanic", "autotuneup"], from: 76, to: 90 },
  // G7-G10 reuse NN ranges with area codes no earlier group uses, so the full number stays unique.
  G7: { niches: ["tattoo", "assembly", "autobody", "tile", "mural"], from: 1, to: 15 },
  G8: { niches: ["landclearing", "excavation", "septic", "well", "farm"], from: 16, to: 30 },
  G9: { niches: ["nursery", "pinestraw", "irrigation", "junkremoval", "selfstorage"], from: 31, to: 45 },
  G10: { niches: ["consulting", "cannabis"], from: 46, to: 60 },
};

export function groupOf(trade) {
  return Object.entries(GROUPS).find(([, g]) => g.niches.includes(trade))?.[0] || null;
}

const BRIEF_SECTIONS = [
  [1, "The buyer"], [2, "The job"], [3, "What they search"], [4, "What every competitor site does"],
  [5, "Niche tools"], [6, "The three directions"], [7, "Shot list"],
];

let ajvValidate = null;
function schemaValidator() {
  if (!ajvValidate) {
    const ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);
    ajvValidate = ajv.compile(readJson(path.join(ROOT, "docs", "facts.schema.json")));
  }
  return ajvValidate;
}

// City pool from the NICHE-TEMPLATE table: group -> [{ city, state?, area, tz }]
let poolCache = null;
export function cityPool() {
  if (poolCache) return poolCache;
  poolCache = {};
  const md = fs.readFileSync(path.join(ROOT, "docs", "NICHE-TEMPLATE.md"), "utf8");
  for (const line of md.split(/\r?\n/)) {
    const m = /^\|\s*(G[1-6])\s*\|[^|]*\|[^|]*\|([^|]+)\|/.exec(line);
    if (!m) continue;
    const cities = [];
    // "Oklahoma City 405, Tulsa 918 (America/Chicago); Phoenix 602 (America/Phoenix); ..."
    for (const part of m[2].split(";")) {
      const tz = /\(([^)]+)\)/.exec(part)?.[1]?.trim();
      for (const c of part.replace(/\([^)]*\)/, "").split(",")) {
        const cm = /^\s*(.+?)\s+(\d{3})\s*$/.exec(c);
        if (!cm) continue;
        let name = cm[1].trim();
        let state = null;
        const sm = /^(.+?)\s+([A-Z]{2})$/.exec(name); // "Portland OR"
        if (sm) { name = sm[1]; state = sm[2]; }
        cities.push({ city: name, state, area: cm[2], tz });
      }
    }
    poolCache[m[1]] = cities;
  }
  return poolCache;
}

// Load the 3 facts files of a niche (missing/invalid JSON -> null).
export function loadNicheFacts(trade) {
  const out = {};
  for (const d of ["A", "B", "C"]) {
    const f = path.join(ROOT, "niches", trade, `facts-${d}.json`);
    if (!fs.existsSync(f)) { out[d] = null; continue; }
    try { out[d] = JSON.parse(fs.readFileSync(f, "utf8").replace(/^﻿/, "")); } catch { out[d] = "invalid"; }
  }
  return out;
}

// Every text field of a facts file with its path, so banned-word hits can say where they are.
// Ids, slugs, phones, emails, hours, ZIPs, timezone and the SEO title are not prose.
const NOT_PROSE = /^(id|trade|direction|biz\.(slug|initials|phone|phoneE164|email|timezone|state|schemaType|hours.*|zips.*)|proof\.(label|license))$/;
function proseFields(obj, prefix = "") {
  const out = [];
  if (typeof obj === "string") { if (!NOT_PROSE.test(prefix)) out.push([prefix, obj]); return out; }
  if (Array.isArray(obj)) { obj.forEach((v, i) => out.push(...proseFields(v, `${prefix}[${i}]`))); return out; }
  if (obj && typeof obj === "object") for (const [k, v] of Object.entries(obj)) out.push(...proseFields(v, prefix ? `${prefix}.${k}` : k));
  return out;
}

// Manifest: count approved items, whatever shape fetch-media writes.
export function approvedMediaCount(trade) {
  const f = path.join(ROOT, "niches", trade, "media", "manifest.json");
  if (!fs.existsSync(f)) return { exists: false, approved: 0 };
  let m;
  try { m = JSON.parse(fs.readFileSync(f, "utf8").replace(/^﻿/, "")); } catch { return { exists: true, approved: 0, invalid: true }; }
  const items = [];
  const collect = (v) => {
    if (Array.isArray(v)) v.forEach((x) => x && typeof x === "object" && items.push(x));
    else if (v && typeof v === "object") Object.entries(v).forEach(([k, x]) => {
      if (x && typeof x === "object" && !Array.isArray(x) && ("file" in x || "id" in x || "src" in x)) items.push({ id: k, ...x });
    });
  };
  for (const key of ["photos", "videos", "items", "media", "approved"]) collect(m[key]);
  if (Array.isArray(m)) collect(m);
  const approved = items.filter((x) => x.approved === true || x.status === "approved" || (x.status === undefined && x.approved === undefined)).length;
  return { exists: true, approved };
}

// Parse the "### A — ..." direction blocks of brief.md section 6.
function briefDirections(md) {
  const dirs = {};
  const re = /^###\s+([ABC])\s*[—–-][^\n]*\n([\s\S]*?)(?=^###\s|^##\s|(?![\s\S]))/gm;
  let m;
  while ((m = re.exec(md))) {
    const body = m[2].replace(/\*\*/g, ""); // tolerate "- **Brand:** ..." and "**4 — ...**"
    const line = (label) => new RegExp(`^-\\s*${label}:\\s*(.+)$`, "mi").exec(body)?.[1]?.trim() || null;
    dirs[m[1]] = { brand: line("Brand"), tone: line("Tone lead"), type: line("Type lead"), hero: line("Hero family") };
  }
  return dirs;
}

const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;
const nn = (phone) => /555-01(\d\d)$/.exec(phone || "")?.[1] || null;
// Full number (area code + NN): two sites may share an NN only in different area codes.
const fullPhone = (phone) => (nn(phone) ? String(phone).replace(/\D/g, "") : null);

// Validate one niche. `cache` lets --all reuse loaded facts.
export function validateNiche(trade, cache = {}) {
  const problems = [];
  const warnings = [];
  const P = (m) => problems.push(m);
  const W = (m) => warnings.push(m);
  const order = nicheOrder();
  if (!order.includes(trade)) {
    P(`"${trade}" is not in data/niche-order.json.`);
    return { trade, problems, warnings };
  }
  const nicheRoot = path.join(ROOT, "niches", trade);
  const group = groupOf(trade);
  const range = GROUPS[group];

  // --- brief.md ---
  const briefFile = path.join(nicheRoot, "brief.md");
  let dirs = {};
  if (!fs.existsSync(briefFile)) P(`niches/${trade}/brief.md is missing. Write it from docs/NICHE-TEMPLATE.md.`);
  else {
    const md = fs.readFileSync(briefFile, "utf8");
    for (const [n, title] of BRIEF_SECTIONS) {
      // "## N." must exist; a different title is only a warning (briefs word them freely)
      const h = new RegExp(`^##\\s+${n}\\.\\s*(.*)$`, "m").exec(md);
      if (!h) P(`brief.md: section "## ${n}. ${title}" is missing.`);
      else if (!h[1].toLowerCase().startsWith(title.toLowerCase())) W(`brief.md: section ${n} is titled "${h[1].trim()}"; the template calls it "${title}".`);
    }
    dirs = briefDirections(md);
    for (const d of ["A", "B", "C"]) {
      const x = dirs[d];
      if (!x) { P(`brief.md: direction "### ${d} — ..." is missing in section 6.`); continue; }
      for (const [k, label] of [["brand", "Brand"], ["tone", "Tone lead"], ["type", "Type lead"], ["hero", "Hero family"]]) {
        if (!x[k]) P(`brief.md: direction ${d} has no "- ${label}: ..." line.`);
      }
      if (x.hero && !/^\d{1,2}\b/.test(x.hero)) P(`brief.md: direction ${d} hero family must start with its number (1-15), e.g. "- Hero family: 9 horizontal filmstrip".`);
    }
    // the three directions must differ in tone lead, type lead and hero family
    for (const [k, label] of [["tone", "tone lead"], ["type", "type lead"], ["hero", "hero family"]]) {
      const firstWord = (s) => (k === "hero" ? /^\d+/.exec(s || "")?.[0] : String(s || "").split(/[\s(]/)[0].toLowerCase());
      const seen = {};
      for (const d of ["A", "B", "C"]) {
        const v = dirs[d]?.[k] && firstWord(dirs[d][k]);
        if (!v) continue;
        if (seen[v]) P(`brief.md: directions ${seen[v]} and ${d} share the same ${label} ("${v}"). Each direction needs its own.`);
        else seen[v] = d;
      }
    }
  }

  // --- facts-A/B/C.json ---
  const facts = cache[trade] || loadNicheFacts(trade);
  const validate = schemaValidator();
  const ok = {};
  for (const d of ["A", "B", "C"]) {
    const f = facts[d];
    const name = `facts-${d}.json`;
    if (f === null) { P(`${name} is missing.`); continue; }
    if (f === "invalid") { P(`${name} is not valid JSON.`); continue; }
    if (!validate(f)) {
      for (const e of validate.errors.slice(0, 12)) {
        const extra = e.params?.additionalProperty ? ` ("${e.params.additionalProperty}")` : "";
        P(`${name}: ${e.instancePath || "(top)"} ${e.message}${extra}`);
      }
      if (validate.errors.length > 12) P(`${name}: ...and ${validate.errors.length - 12} more schema errors.`);
    }
    ok[d] = f;
    if (f.id !== `${trade}-${d}`) P(`${name}: id is "${f.id}", must be "${trade}-${d}".`);
    if (f.trade !== trade) P(`${name}: trade is "${f.trade}", must be "${trade}".`);
    if (f.direction !== d) P(`${name}: direction is "${f.direction}", must be "${d}".`);
    const biz = f.biz || {};

    // phone: NN in the group's range, phone and phoneE164 agree
    const n = nn(biz.phone);
    if (n && range && (+n < range.from || +n > range.to)) {
      P(`${name}: phone ${biz.phone} uses 555-01${n}; ${trade} is in ${group}, which uses 01${String(range.from).padStart(2, "0")}-01${String(range.to).padStart(2, "0")}.`);
    }
    const digits = String(biz.phone || "").replace(/\D/g, "");
    if (biz.phoneE164 && digits && biz.phoneE164 !== `+1${digits}`) P(`${name}: phoneE164 ${biz.phoneE164} does not match phone ${biz.phone} (expected +1${digits}).`);

    // email slug = biz.slug
    const slug = /^hello@([a-z0-9-]+)\.example$/.exec(biz.email || "")?.[1];
    if (slug && biz.slug && slug !== biz.slug) P(`${name}: email ${biz.email} must use the slug "${biz.slug}" (hello@${biz.slug}.example).`);

    // city must be in the group's pool, with its area code and time zone
    const pool = cityPool()[group] || [];
    const pc = pool.find((c) => c.city.toLowerCase() === String(biz.city || "").toLowerCase() && (!c.state || c.state === biz.state));
    if (biz.city && !pc) P(`${name}: city "${biz.city}, ${biz.state}" is not in the ${group} city pool (docs/NICHE-TEMPLATE.md).`);
    else if (pc) {
      if (biz.phone && biz.phone.slice(1, 4) !== pc.area) P(`${name}: ${biz.city} uses area code ${pc.area}, phone has (${biz.phone.slice(1, 4)}).`);
      if (pc.tz && biz.timezone !== pc.tz) P(`${name}: ${biz.city} is in ${pc.tz}, timezone says ${biz.timezone}.`);
    }

    // brand line in the brief names this business and city
    const dx = dirs[d];
    if (dx?.brand && biz.name && !dx.brand.toLowerCase().includes(biz.name.toLowerCase())) {
      P(`brief.md direction ${d} Brand line ("${dx.brand}") does not name ${biz.name} from ${name}.`);
    }

    // banned words in facts prose (conditional claims allowed when the facts make them true)
    for (const [field, text] of proseFields(f)) {
      // the field that states the fact may use its own word
      const skip = field === "proof.guarantee" ? ["guarantee", "warranty", "years-in-business"] : [];
      for (const h of findBanned(text, f, { skip })) P(`${name}: ${field} uses ${h.label}: "${h.match}".`);
      // dollar amounts only inside proof.prices
      if (!field.startsWith("proof.prices")) {
        const prices = new Set((f.proof?.prices || []).flatMap((p) => [p.from, p.to].filter(Boolean)).map((s) => s.replace(/\s/g, "")));
        for (const m of String(text).matchAll(DOLLAR_RE)) {
          if (!prices.has(m[0].replace(/\s/g, ""))) P(`${name}: ${field} has a price "${m[0]}" that is not in proof.prices.`);
        }
      }
    }

    // prices: "to" must not be below "from"
    for (const [i, p] of (f.proof?.prices || []).entries()) {
      const num = (s) => +String(s || "").replace(/[$,]/g, "");
      if (p.to && num(p.to) < num(p.from)) P(`${name}: proof.prices[${i}] "${p.item}" has to (${p.to}) below from (${p.from}).`);
    }

    // SEO lengths (also in the schema; repeated here with a plainer message)
    const t = f.seo?.title || "", ds = f.seo?.description || "";
    if (t && (t.length < 50 || t.length > 60)) P(`${name}: seo.title is ${t.length} characters; it must be 50-60.`);
    if (ds && (ds.length < 120 || ds.length > 155)) P(`${name}: seo.description is ${ds.length} characters; it must be 120-155.`);

    // soft checks
    for (const [i, s] of (f.services || []).entries()) {
      const w = words(s.blurb);
      if (w < 8 || w > 18) W(`${name}: services[${i}] blurb is ${w} words (aim for 8-18).`);
    }
    const towns = new Set([biz.city, ...(biz.areas || [])].map((x) => String(x || "").toLowerCase()));
    for (const [i, r] of (f.proof?.reviews || []).entries()) {
      const w = words(r.text);
      if (w < 18 || w > 60) W(`${name}: proof.reviews[${i}] is ${w} words (aim for 18-60).`);
      if (r.town && !towns.has(r.town.toLowerCase())) W(`${name}: proof.reviews[${i}] town "${r.town}" is not the city or one of biz.areas.`);
    }
  }

  // --- inside the niche ---
  const cities = {};
  for (const [d, f] of Object.entries(ok)) {
    const c = `${f.biz?.city}, ${f.biz?.state}`;
    if (cities[c]) P(`facts-${cities[c]}.json and facts-${d}.json are both in ${c}. The three sites need 3 different cities.`);
    else cities[c] = d;
  }
  let hr = 0;
  for (const f of Object.values(ok)) for (const r of f.proof?.reviews || []) hr += (String(r.text).match(HIGHLY_RECOMMEND) || []).length;
  if (hr > 1) P(`"highly recommend" appears ${hr} times in this niche's reviews; at most once per niche.`);

  // --- across niches: phone NN, business names, cities within the group ---
  const idx = order.indexOf(trade);
  for (const other of order) {
    if (other === trade) continue;
    const of = cache[other] || loadNicheFacts(other);
    cache[other] = of;
    const later = idx > order.indexOf(other); // blame the niche that comes later in the order
    const report = (m) => (later ? P(m) : W(`${m} (${other} must change)`));
    for (const [d, f] of Object.entries(ok)) {
      for (const [od, o] of Object.entries(of)) {
        if (!o || o === "invalid") continue;
        const a = fullPhone(f.biz?.phone), b = fullPhone(o.biz?.phone);
        if (a && a === b) report(`facts-${d}.json phone ${f.biz.phone} is already used by ${other}-${od}. Every site needs its own number.`);
        if (f.biz?.name && o.biz?.name && f.biz.name.toLowerCase() === o.biz.name.toLowerCase()) report(`facts-${d}.json business name "${f.biz.name}" is already used by ${other}-${od}.`);
        if (groupOf(other) === group && f.biz?.city && f.biz.city === o.biz?.city && f.biz.state === o.biz?.state) {
          report(`facts-${d}.json city ${f.biz.city} is already used by ${other}-${od} in ${group}. Each city once per group.`);
        }
      }
    }
  }

  // --- media-queries.json ---
  const mq = readJson(path.join(nicheRoot, "media-queries.json"), null);
  if (!mq) P(`niches/${trade}/media-queries.json is missing.`);
  else {
    const photos = Array.isArray(mq.photos) ? mq.photos : [];
    const videos = Array.isArray(mq.videos) ? mq.videos : [];
    const hero = photos.filter((p) => /^hero-/.test(p.slot || "")).length;
    const shared = photos.length - hero;
    if (hero < 9) P(`media-queries.json has ${hero} hero slots; needs at least 9 (3 per direction).`);
    if (shared < 25) P(`media-queries.json has ${shared} shared photo slots; needs at least 25.`);
    if (videos.length < 4) P(`media-queries.json has ${videos.length} video slots; needs at least 4.`);
    const slots = new Set();
    for (const p of [...photos, ...videos]) {
      if (!p.slot) P(`media-queries.json: an entry has no "slot".`);
      else if (slots.has(p.slot)) P(`media-queries.json: slot "${p.slot}" appears twice.`);
      else slots.add(p.slot);
      if (!Array.isArray(p.queries) || p.queries.length === 0) P(`media-queries.json: slot "${p.slot}" has no queries.`);
    }
  }
  return { trade, problems, warnings };
}
