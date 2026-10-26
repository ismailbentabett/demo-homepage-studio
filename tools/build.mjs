#!/usr/bin/env node
// Build one site: sites/<trade>/<dir>/src  ->  sites/<trade>/<dir>/dist (self-contained, opens from file://).
//
//   node tools/build.mjs <id> [--facts path] [--out dir] [--allow-missing-kit]
//
// The rules are in docs/BUILD-CONTRACT.md. In short: tokens {{path|filter}}, repeaters <!-- each -->,
// <!-- if -->, macros [[...]], fonts from data/fonts-catalog.json, kit modules from kit/lib, vendor files
// from vendor/, media from niches/<trade>/media/manifest.json through src/media.json (or plan/media.json).
// Any refusal of §7 stops the build with exit 1 and a plain message.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { ROOT, die, siteFromId, readJsonFile, rel, parseArgs, kb, dirSize } from "./lib/site-paths.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), ["allow-missing-kit"]);
if (!pos[0]) die("Usage: node tools/build.mjs <id> [--facts path] [--out dir] [--allow-missing-kit]");
const site = siteFromId(pos[0]);
const SRC = path.join(site.siteDir, "src");
const OUT = opt.out ? path.resolve(opt.out) : path.join(site.siteDir, "dist");
const ALLOW_MISSING_KIT = !!opt["allow-missing-kit"];
const warnings = [];
const warn = (m) => warnings.push(m);

if (!fs.existsSync(SRC)) die(`${rel(SRC)} does not exist. The builder writes src/index.html, style.css, app.js and site.config.json first.`);
const factsFile = opt.facts ? path.resolve(opt.facts) : path.join(site.siteDir, "facts.json");
const facts = readJsonFile(factsFile);
const config = readJsonFile(path.join(SRC, "site.config.json"));
const readSrc = (name, required) => {
  const f = path.join(SRC, name);
  if (!fs.existsSync(f)) {
    if (required) die(`${rel(f)} is missing.`);
    return "";
  }
  return fs.readFileSync(f, "utf8").replace(/^﻿/, "");
};
const rawHtml = readSrc("index.html", true);
const rawCss = readSrc("style.css", false);
const rawJs = readSrc("app.js", false);

// ---------------------------------------------------------------- §7 refusals on the raw source
function lineOf(src, idx) {
  return src.slice(0, idx).split("\n").length;
}
const ALLOWED_URL = /^https?:\/\/(schema\.org|www\.w3\.org\/(2000\/svg|1999\/xlink|XML\/1998\/namespace))/;
for (const [name, text] of [["index.html", rawHtml], ["style.css", rawCss], ["app.js", rawJs]]) {
  const m = /<script[^>]*\bsrc\s*=\s*["']?https?:/i.exec(text);
  if (m) die(`src/${name} line ${lineOf(text, m.index)}: <script src="http..."> is not allowed. Use a vendor file (site.config.json "vendor").`);
  const urlRe = /https?:\/\/[^\s"'<>)]+/gi;
  let u;
  while ((u = urlRe.exec(text))) {
    if (!ALLOWED_URL.test(u[0])) {
      die(`src/${name} line ${lineOf(text, u.index)}: external URL ${u[0]}. Nothing may leave the page; only https://schema.org (and SVG namespaces) are allowed.`);
    }
  }
}
{
  const m = /<\/?(html|head|body)\b/i.exec(rawHtml);
  if (m) die(`src/index.html line ${lineOf(rawHtml, m.index)}: <${m[1]}> found. src/index.html is body content only; the build writes <html>, <head> and <body>.`);
}

// ---------------------------------------------------------------- facts lookup
const ctx = { ...facts, hours: facts.biz?.hours, year: String(new Date().getFullYear()) };

function lookup(p) {
  let v = ctx;
  for (const part of p.split(".")) {
    if (v == null) return undefined;
    v = Array.isArray(v) && /^\d+$/.test(part) ? v[Number(part)] : v[part];
  }
  return v;
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

// Where did a token come from? Used in error messages only.
function where(text) {
  for (const [name, src] of [["index.html", rawHtml], ["style.css", rawCss]]) {
    const i = src.indexOf(text);
    if (i !== -1) return ` (src/${name} line ${lineOf(src, i)})`;
  }
  return "";
}

function knownFields(p) {
  const parent = p.includes(".") ? lookup(p.split(".").slice(0, -1).join(".")) : ctx;
  if (parent && typeof parent === "object") {
    const keys = Array.isArray(parent) ? [`0..${parent.length - 1}`] : Object.keys(parent);
    return ` Known here: ${keys.join(", ")}.`;
  }
  return "";
}

// ---------------------------------------------------------------- hours helpers
const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_SHORT = { mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun" };
const DAY_FULL = { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" };
function clock(t) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 && h < 24 ? "pm" : "am";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  if (h === 0 && m === 0) return "midnight";
  if (h === 12 && m === 0) return "noon";
  return `${h12}${m ? `:${String(m).padStart(2, "0")}` : ""} ${suffix}`;
}
const span = (d) => (Array.isArray(d) ? `${clock(d[0])} – ${clock(d[1])}` : "Closed");
// Consecutive days with the same hours: [{days:["mon",...], hours}]
function hourGroups(hours) {
  const groups = [];
  for (const d of DAYS) {
    const h = hours?.[d] ?? null;
    const last = groups[groups.length - 1];
    if (last && JSON.stringify(last.hours) === JSON.stringify(h)) last.days.push(d);
    else groups.push({ days: [d], hours: h });
  }
  return groups;
}
const groupLabel = (g) => (g.days.length === 1 ? DAY_SHORT[g.days[0]] : `${DAY_SHORT[g.days[0]]}–${DAY_SHORT[g.days[g.days.length - 1]]}`);

function hoursTable(hours) {
  const rows = DAYS.map((d) => `<div><dt>${DAY_SHORT[d]}</dt><dd>${esc(span(hours?.[d]))}</dd></div>`).join("");
  return `<dl class="hours">${rows}</dl>`;
}
function hoursToday(hours) {
  // Static text for no-JS; the opennow module replaces it with "Open now · until 6 pm".
  const open = hourGroups(hours).filter((g) => g.hours);
  const text = open.length ? open.map((g) => `${groupLabel(g)} ${span(g.hours)}`).join(" · ") : "Call for hours";
  return `<span data-open-now>${esc(text)}</span>`;
}

// ---------------------------------------------------------------- tokens
function tokenValue(expr, { raw = false } = {}) {
  const [p, filter] = expr.split("|").map((s) => s.trim());
  if (p.startsWith(".") || p.startsWith("#")) die(`{{${expr}}} is only allowed inside <!-- each -->${where(`{{${expr}}}`)}.`);
  const v = lookup(p);
  if (v === undefined || v === null) die(`Unknown token {{${expr}}}${where(`{{${expr}}}`)}: facts.json has no "${p}".${knownFields(p)}`);
  if (filter) {
    if (filter === "list" || filter === "csv") {
      if (!Array.isArray(v)) die(`{{${expr}}}: "${p}" is not a list.`);
      const items = v.map((x) => (typeof x === "object" ? x.name ?? JSON.stringify(x) : String(x)));
      const s = filter === "csv" ? items.join(",") : items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
      return raw ? s : esc(s);
    }
    if (filter === "table" || filter === "today") {
      if (p !== "hours" && p !== "biz.hours") die(`{{${expr}}}: |${filter} works only on hours.`);
      return filter === "table" ? hoursTable(v) : hoursToday(v);
    }
    die(`Unknown filter |${filter} in {{${expr}}}${where(`{{${expr}}}`)}. Filters: list, csv, table, today.`);
  }
  if (typeof v === "object") die(`{{${expr}}}${where(`{{${expr}}}`)} is a ${Array.isArray(v) ? "list" : "group"}, not a value. Use {{${p}|list}}, an index ({{${p}.0}}) or <!-- each ${p} -->.${knownFields(p + ".x")}`);
  return raw ? String(v) : esc(v);
}
const TOKEN_RE = /\{\{\s*([^{}]+?)\s*\}\}/g;
const resolveTokens = (s, opts) => s.replace(TOKEN_RE, (_, e) => tokenValue(e, opts));

// ---------------------------------------------------------------- each / if
// Item tokens become absolute paths ({{.name}} -> {{services.3.name}}) so that macro arguments keep one word each.
function expandEach(html) {
  const EACH_RE = /<!--\s*each\s+([\w.]+)(?:\s+(\d+)?:(\d+)?)?\s*-->([\s\S]*?)<!--\s*\/each\s*-->/g;
  const out = html.replace(EACH_RE, (whole, p, a, b, inner) => {
    if (/<!--\s*each\s/.test(inner)) die(`Nested <!-- each --> is not supported${where(whole.slice(0, 40))}.`);
    const list = lookup(p);
    if (!Array.isArray(list)) die(`<!-- each ${p} -->${where(`each ${p}`)}: facts.json has no list "${p}".${knownFields(p)}`);
    const start = a ? Number(a) : 0;
    const end = b ? Number(b) : list.length;
    let s = "";
    for (let i = start; i < Math.min(end, list.length); i++) {
      s += inner
        .replace(/\{\{\s*#2\s*\}\}/g, String(i + 1).padStart(2, "0"))
        .replace(/\{\{\s*#\s*\}\}/g, String(i + 1))
        .replace(/\{\{\s*\.\s*(\|[^}]*)?\}\}/g, (_, f) => `{{${p}.${i}${f || ""}}}`)
        .replace(/\{\{\s*\.([\w.]+)\s*(\|[^}]*)?\}\}/g, (_, field, f) => `{{${p}.${i}.${field}${f || ""}}}`)
        .replace(/<!--\s*if\s+(!?)\.([\w.]+)\s*-->/g, (_, neg, field) => `<!-- if ${neg}${p}.${i}.${field} -->`);
    }
    return s;
  });
  const left = /<!--\s*\/?each\b/.exec(out);
  if (left) die(`An <!-- each --> has no matching <!-- /each -->${where(out.slice(left.index, left.index + 30))}.`);
  return out;
}

function truthy(p) {
  const v = lookup(p);
  if (Array.isArray(v)) return v.length > 0;
  return !!v;
}
function expandIf(html) {
  // innermost first: an if whose body has no other if
  const IF_RE = /<!--\s*if\s+(!?)([\w.]+)\s*-->((?:(?!<!--\s*if\s)[\s\S])*?)<!--\s*\/if\s*-->/;
  let s = html;
  let m;
  while ((m = IF_RE.exec(s))) {
    const [whole, neg, p, body] = m;
    const [yes, no = ""] = body.split(/<!--\s*else\s*-->/);
    const keep = truthy(p) !== !!neg ? yes : no;
    s = s.slice(0, m.index) + keep + s.slice(m.index + whole.length);
  }
  const left = /<!--\s*(\/if|if\s|else\s*-->)/.exec(s);
  if (left) die(`An <!-- if --> is not closed with <!-- /if -->${where(s.slice(left.index, left.index + 30))}.`);
  return s;
}

// ---------------------------------------------------------------- media
const mediaPlanFile = [path.join(SRC, "media.json"), path.join(site.siteDir, "plan", "media.json")].find((f) => fs.existsSync(f));
const mediaPlan = mediaPlanFile ? readJsonFile(mediaPlanFile) : {};
const manifestTrade = mediaPlan.manifest || site.trade;
const MEDIA_DIR = path.join(ROOT, "niches", manifestTrade, "media");
const manifestFile = path.join(MEDIA_DIR, "manifest.json");
const manifest = readJsonFile(manifestFile, { photos: {}, videos: {} });
manifest.photos ||= {};
manifest.videos ||= {};

// slot name -> manifest key (or list of keys). Top-level strings/lists and the "slots" object both count.
const slotMap = {};
for (const [k, v] of Object.entries(mediaPlan)) {
  if (k === "manifest" || k === "note" || k === "slots") continue;
  if (typeof v === "string" || Array.isArray(v)) slotMap[k] = v;
}
Object.assign(slotMap, mediaPlan.slots || {});

const usedMedia = new Map(); // manifest key -> {kind, entry}
function media(ref, want) {
  let key = ref;
  let slot = null;
  if (typeof slotMap[ref] === "string") {
    slot = ref;
    key = slotMap[ref];
  } else if (Array.isArray(slotMap[ref])) {
    die(`Media slot "${ref}" is a list. Use one item: [[img ${ref}.0]], [[img ${ref}.1]] ...`);
  } else {
    const m = /^(.+)\.(\d+)$/.exec(ref);
    if (m && Array.isArray(slotMap[m[1]])) {
      key = slotMap[m[1]][Number(m[2])];
      slot = ref;
      if (!key) die(`Media slot "${m[1]}" has only ${slotMap[m[1]].length} items; "${ref}" does not exist.`);
    }
  }
  const photo = manifest.photos[key];
  const video = manifest.videos[key];
  const entry = want === "video" ? video : photo;
  if (!entry) {
    const otherKind = want === "video" ? photo : video;
    if (otherKind) die(`"${ref}" is a ${want === "video" ? "photo" : "video"} in the manifest; use [[${want === "video" ? "img" : "video"} ${ref}]].`);
    const slots = Object.keys(slotMap);
    const keys = Object.keys(want === "video" ? manifest.videos : manifest.photos);
    die(`Unknown media key "${ref}"${slot ? ` (slot ${slot} -> "${key}")` : ""}${where(ref)}. ` +
      (slots.length ? `Slots in ${rel(mediaPlanFile)}: ${slots.join(", ")}. ` : "No media plan (src/media.json). ") +
      `${want === "video" ? "Videos" : "Photos"} in ${rel(manifestFile)}: ${keys.join(", ") || "none"}.`);
  }
  if (entry.status === "draft") warn(`${key} is still a draft in the manifest (approve it with tools/approve-media.mjs).`);
  usedMedia.set(key, { kind: want, entry });
  return { key, slot: slot || ref, entry };
}

// ---------------------------------------------------------------- macros
const preloads = []; // <link rel=preload> for eager images
const ICON_IDS = new Set([...rawHtml.matchAll(/\bid\s*=\s*["']i-([\w-]+)["']/g)].map((m) => m[1]));
const icon = (name) => {
  if (!ICON_IDS.has(name)) die(`[[i ${name}]]: no <symbol id="i-${name}"> in the sprite of src/index.html. Icons there: ${[...ICON_IDS].join(", ") || "none"}.`);
  return `<svg class="i" aria-hidden="true" focusable="false"><use href="#i-${name}"/></svg>`;
};
const serviceNames = new Set((facts.services || []).flatMap((s) => [s.name, s.short].filter(Boolean)));
const CREDITS_MARK = "\u0000CREDITS\u0000";
const attr = (s) => (s ? ` ${s}` : "");

function imgTag(ref, attrs = "") {
  const { key, slot, entry } = media(ref, "photo");
  let a = attrs.trim();
  const eager = /(^|\s)eager(\s|$)/.test(a);
  a = a.replace(/(^|\s)eager(?=\s|$)/g, " ").trim();
  const w = 1170;
  const h = entry.w && entry.h ? Math.round((w * entry.h) / entry.w) : 780;
  const src = `media/${entry.small || entry.file}`;
  const srcset = entry.small ? `media/${entry.small} 1170w, media/${entry.file} 2340w` : "";
  const sizes = /\bsizes\s*=/.test(a) ? "" : ' sizes="100vw"';
  const alt = /\balt\s*=/.test(a) ? "" : ` alt="${esc(entry.alt || "")}"`;
  if (eager) preloads.push(`<link rel="preload" as="image" href="${src}"${srcset ? ` imagesrcset="${srcset}" imagesizes="100vw"` : ""} fetchpriority="high">`);
  const loading = eager ? ' fetchpriority="high"' : ' loading="lazy"';
  return `<img src="${src}"${srcset ? ` srcset="${srcset}"${sizes}` : ""}${alt} width="${w}" height="${h}"${loading} decoding="async" data-photo="${esc(key)}" data-slot="${esc(slot)}"${attr(a)}>`;
}

function macro(body) {
  const parts = body.split("|").map((p) => p.trim());
  // Tokens inside arguments are resolved after the split, so "Roof repair" stays one argument.
  const head = parts[0].split(/\s+/).map((x) => resolveTokens(x, { raw: true }));
  const extra = parts.slice(1).map((p) => resolveTokens(p));
  const [kind, ...args] = head;
  switch (kind) {
    case "img":
      if (!args[0]) die(`[[img]] needs a media key.`);
      return imgTag(args[0], extra[0]);
    case "frame": {
      if (!args[0]) die(`[[frame]] needs a media key.`);
      const { entry } = media(args[0], "photo");
      const cls = args.slice(1).join(" ");
      return `<figure class="frame${cls ? ` ${esc(cls)}` : ""}" data-fallback="${esc(entry.alt || "")}"${attr(extra[0])}>${imgTag(args[0], extra[1])}</figure>`;
    }
    case "video": {
      if (!args[0]) die(`[[video]] needs a media key.`);
      const { key, entry } = media(args[0], "video");
      const cls = args.slice(1).join(" ");
      const alt = esc(entry.alt || "");
      return `<figure class="vid${cls ? ` ${esc(cls)}` : ""}"><video muted loop playsinline preload="none" poster="media/${entry.poster}" data-src="media/${entry.file}" data-video aria-label="${alt}" data-photo="${esc(key)}"${attr(extra[0])}></video>` +
        `<button class="vid-btn" type="button" data-vid-btn aria-pressed="false">Pause background video</button></figure>`;
    }
    case "purl": {
      if (!args[0]) die(`[[purl]] needs a media key.`);
      const { entry } = media(args[0], "photo");
      return `media/${args[1] === "1170" && entry.small ? entry.small : entry.file}`;
    }
    case "credits":
      return CREDITS_MARK;
    case "i":
      if (!args[0]) die(`[[i]] needs an icon name.`);
      return icon(args[0]);
    case "tel":
      return `<a class="tel-plain" href="tel:${esc(facts.biz.phoneE164)}">${esc(facts.biz.phone)}</a>`;
    case "call":
      return `<a class="btn btn-call${args.length ? ` ${esc(args.join(" "))}` : ""}" href="tel:${esc(facts.biz.phoneE164)}">${icon("phone")}<span>Call ${esc(facts.biz.phone)}</span></a>`;
    case "quote": {
      // [[quote <service> <cls...> | label]]: the service is one argument (a token or a one-word name).
      const svc = args[0] || "";
      if (svc && !serviceNames.has(svc)) warn(`[[quote ${svc}]]: "${svc}" is not a service name or short name in facts.json, so the form will not preselect it.`);
      const cls = args.slice(1).join(" ");
      const label = parts[1] ? extra[0] : "Price it";
      return `<a class="btn${cls ? ` ${esc(cls)}` : ""}" href="#contact"${svc ? ` data-service="${esc(svc)}"` : ""}>${label}</a>`;
    }
    case "sample": {
      const label = [...args, ...extra].join(" ").trim();
      const base = facts.proof?.label || "Sample";
      const text = !label ? base : /^sample\b/i.test(label) ? label : `${base} ${label}`;
      return `<span class="sample-tag">${esc(text)}</span>`;
    }
    default:
      die(`Unknown macro [[${body.slice(0, 40)}]]${where(`[[${body.slice(0, 20)}`)}. Macros: img, frame, video, purl, credits, i, tel, call, quote, sample.`);
  }
}
const MACRO_RE = /\[\[(.+?)\]\]/gs;

// ---------------------------------------------------------------- expand the page
let body = expandEach(rawHtml);
body = expandIf(body);
body = body.replace(MACRO_RE, (_, m) => macro(m));
body = resolveTokens(body);
// CSS may use [[purl key]] (and [[purl key 1170]]) for backgrounds; nothing else.
let css = rawCss.replace(MACRO_RE, (_, m) => {
  if (!/^\s*purl\s/.test(m)) die(`src/style.css: only [[purl key]] is allowed in CSS, found [[${m}]].`);
  return macro(m);
});
if (/\{\{|\}\}/.test(css)) die("src/style.css: tokens {{...}} are not allowed in CSS.");
{
  const left = /\{\{|\[\[/.exec(body);
  if (left) die(`Unresolved "${body.slice(left.index, left.index + 30)}" in the page. Check the token / macro spelling.`);
}

// Credits for every media file used (second pass, so files used after [[credits]] count too).
{
  // Media with no credit on file (placeholders) gets no credit line rather than a false "by unknown".
  const credited = [...usedMedia.entries()].filter(([, { entry }]) => entry.credit?.name);
  const items = credited.map(([key, { kind, entry }]) => {
    // Commons names can carry wiki markup or an e-mail address: print a plain name only.
    const who = esc(String(entry.credit.name).replace(/\[[^\]]*\]|\([^)]*\)/g, " ").replace(/^Category:/i, "").replace(/\S+@\S+|\S+ at \S+\.\w+/g, " ").replace(/\s+/g, " ").trim() || "Unknown creator");
    const url = entry.credit?.url ? ` href="${esc(entry.credit.url)}" rel="noopener" target="_blank"` : "";
    const src = esc(entry.credit.source || "Pexels");
    const lic = entry.credit.license ? `, ${entry.credit.licenseUrl ? `<a href="${esc(entry.credit.licenseUrl)}" rel="noopener license" target="_blank">${esc(entry.credit.license)}</a>` : esc(entry.credit.license)}` : "";
    return `<li>${kind === "video" ? "Video" : "Photo"} by ${who} on ${url ? `<a${url}>${src}</a>` : `<span>${src}</span>`}${lic}</li>`;
  });
  body = body.split(CREDITS_MARK).join(`<ul class="credits">${items.join("")}</ul>`);
}

// ---------------------------------------------------------------- fonts
const catalog = readJsonFile(path.join(ROOT, "data", "fonts-catalog.json"));
const catalogFonts = catalog.fonts || [];
const fontFaces = [];
const fontPreloads = [];
const fontFiles = []; // [{from, to}]
for (const f of config.fonts || []) {
  const entry = catalogFonts.find((c) => c.family.toLowerCase() === String(f.family).toLowerCase());
  if (!entry) die(`Font "${f.family}" is not in data/fonts-catalog.json. Pick one from the catalog or fetch it: node tools/fetch-fonts.mjs "${f.family}"`);
  const styles = ["normal", ...(f.italic ? ["italic"] : [])];
  const weights = (f.weights && f.weights.length ? f.weights : [400]).map(Number);
  for (const style of styles) {
    const files = entry.files.filter((x) => x.style === style);
    if (!files.length) die(`Font "${entry.family}" has no ${style} files in the catalog.`);
    const chosen = new Set();
    for (const w of weights) {
      const file = files.find((x) => {
        const [lo, hi = lo] = String(x.weight).split(/\s+/).map(Number);
        return w >= lo && w <= hi;
      });
      if (!file) die(`Font "${entry.family}" has no weight ${w} (${style}). Available: ${files.map((x) => x.weight).join(", ")}.`);
      chosen.add(file);
    }
    for (const file of chosen) {
      const from = path.join(ROOT, file.file);
      if (!fs.existsSync(from)) die(`Font file missing: ${file.file}. Run node tools/fetch-fonts.mjs "${entry.family}".`);
      const to = `fonts/${entry.slug}/${path.basename(file.file)}`;
      fontFiles.push({ from, to });
      fontFaces.push(`@font-face{font-family:"${entry.family}";src:url("${to}") format("woff2");font-weight:${file.weight};font-style:${style};font-display:swap}`);
      if (f.preload && style === "normal" && fontPreloads.length < 3 && !fontPreloads.some((p) => p.includes(to))) {
        fontPreloads.push(`<link rel="preload" as="font" type="font/woff2" href="${to}" crossorigin>`);
      }
    }
  }
}
const displayFont = (config.fonts || [])[0];

// ---------------------------------------------------------------- kit + vendor
const KIT = path.join(ROOT, "kit");
const kitFile = (name) => path.join(KIT, "lib", `${name}.js`);
function kitPart(name, required) {
  const f = kitFile(name);
  if (fs.existsSync(f)) return `/* kit: ${name} */\n${fs.readFileSync(f, "utf8")}`;
  if (!required) return null;
  if (ALLOW_MISSING_KIT) {
    warn(`kit/lib/${name}.js is missing (skipped because of --allow-missing-kit).`);
    return null;
  }
  const have = fs.existsSync(path.join(KIT, "lib")) ? fs.readdirSync(path.join(KIT, "lib")).filter((x) => x.endsWith(".js")).map((x) => x.slice(0, -3)) : [];
  die(`Module "${name}" is not in kit/lib (site.config.json "modules"). Modules: ${have.join(", ") || "none"}.`);
}
const modules = (config.modules || []).filter((m) => m !== "core");
const jsParts = [kitPart("core", true)];
for (const m of modules) jsParts.push(kitPart(m, true));
if (!modules.includes("media-fallback")) jsParts.push(kitPart("media-fallback", false)); // always on when present
jsParts.push(rawJs.trim() ? `/* site: src/app.js */\n${rawJs}` : null);
const appJs = jsParts.filter(Boolean).join("\n;\n");

let baseCss = "";
if (fs.existsSync(path.join(KIT, "base.css"))) baseCss = fs.readFileSync(path.join(KIT, "base.css"), "utf8");
else if (ALLOW_MISSING_KIT) warn("kit/base.css is missing (skipped because of --allow-missing-kit).");
else die("kit/base.css is missing. The kit must exist before a site can be built.");

const vendorIndex = readJsonFile(path.join(ROOT, "vendor", "vendor.json"), { libs: {} }).libs || {};
const vendorOrder = [];
function addVendor(name, chain = []) {
  const key = Object.keys(vendorIndex).find((k) => k.toLowerCase() === String(name).toLowerCase());
  if (!key) die(`Vendor file "${name}" is not in vendor/ (site.config.json "vendor"). Available: ${Object.keys(vendorIndex).join(", ")}.`);
  if (vendorOrder.includes(key)) return;
  if (chain.includes(key)) return;
  for (const need of vendorIndex[key].needs || []) addVendor(need, [...chain, key]);
  const file = path.join(ROOT, vendorIndex[key].file);
  if (!fs.existsSync(file)) die(`Vendor file missing on disk: ${vendorIndex[key].file}.`);
  vendorOrder.push(key);
}
for (const v of config.vendor || []) addVendor(v);
const vendorFiles = vendorOrder.flatMap((k) => [vendorIndex[k].file, vendorIndex[k].css].filter(Boolean));

// ---------------------------------------------------------------- head
const biz = facts.biz || {};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": config.jsonLd?.type || biz.schemaType || "HomeAndConstructionBusiness",
  name: biz.name,
  description: facts.seo?.description,
  telephone: biz.phoneE164 || biz.phone,
  email: biz.email,
  areaServed: [biz.city, ...(biz.areas || [])].filter(Boolean).map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: hourGroups(biz.hours).filter((g) => g.hours).map((g) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: g.days.map((d) => DAY_FULL[d]),
    opens: g.hours[0],
    closes: g.hours[1],
  })),
};
const swFacts = {
  biz: {
    name: biz.name, short: biz.short, phone: biz.phone, phoneE164: biz.phoneE164, sms: biz.sms, email: biz.email,
    city: biz.city, state: biz.state, timezone: biz.timezone, areas: biz.areas, zips: biz.zips, hours: biz.hours, emergency: biz.emergency,
  },
  services: (facts.services || []).map((s) => ({ name: s.name, short: s.short })),
  proof: { label: facts.proof?.label, prices: facts.proof?.prices },
  // short aliases for modules
  hours: biz.hours, timezone: biz.timezone, zips: biz.zips, areas: biz.areas, phone: biz.phone, phoneE164: biz.phoneE164,
};
const jsonScript = (o) => JSON.stringify(o).replace(/</g, "\\u003c");
const title = facts.seo?.title || biz.name;
const description = facts.seo?.description || "";
const theme = config.themeColor || config.favicon?.bg || "#111111";
const GATE = "document.documentElement.classList.add('sw-js'); if(matchMedia('(prefers-reduced-motion: no-preference)').matches) document.documentElement.classList.add('sw-motion')";

const head = [
  `<meta charset="utf-8">`,
  `<meta name="viewport" content="width=device-width, initial-scale=1">`,
  `<title>${esc(title)}</title>`,
  `<meta name="description" content="${esc(description)}">`,
  `<meta name="robots" content="noindex, nofollow">`,
  `<meta name="theme-color" content="${esc(theme)}">`,
  `<meta property="og:type" content="website">`,
  `<meta property="og:title" content="${esc(title)}">`,
  `<meta property="og:description" content="${esc(description)}">`,
  `<meta property="og:image" content="og.jpg">`,
  `<meta property="og:image:width" content="1200">`,
  `<meta property="og:image:height" content="630">`,
  `<meta name="twitter:card" content="summary_large_image">`,
  `<meta name="twitter:title" content="${esc(title)}">`,
  `<meta name="twitter:description" content="${esc(description)}">`,
  `<meta name="twitter:image" content="og.jpg">`,
  `<link rel="icon" href="icons/favicon.svg" type="image/svg+xml">`,
  `<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">`,
  `<script type="application/ld+json">${jsonScript(jsonLd)}</script>`,
  `<script>${GATE}</script>`,
  ...fontPreloads,
  ...preloads,
  ...vendorFiles.filter((f) => f.endsWith(".css")).map((f) => `<link rel="stylesheet" href="${f}">`),
  `<style>\n${fontFaces.join("\n")}\n${baseCss}\n${css}\n</style>`,
];
const scripts = [
  `<script type="application/json" id="sw-facts">${jsonScript(swFacts)}</script>`,
  ...vendorFiles.filter((f) => f.endsWith(".js")).map((f) => `<script defer src="${f}"></script>`),
  `<script defer src="app.js"></script>`,
];
const lang = esc(config.lang || "en");
const indexHtml = `<!doctype html>\n<html lang="${lang}">\n<head>\n${head.join("\n")}\n</head>\n<body>\n${body.trim()}\n${scripts.join("\n")}\n</body>\n</html>\n`;

// ---------------------------------------------------------------- write dist
fs.mkdirSync(OUT, { recursive: true });
for (const name of ["index.html", "app.js", "og.jpg", "media", "fonts", "vendor", "icons"]) fs.rmSync(path.join(OUT, name), { recursive: true, force: true });
fs.writeFileSync(path.join(OUT, "index.html"), indexHtml);
fs.writeFileSync(path.join(OUT, "app.js"), appJs + "\n");

const copy = (from, to) => {
  const dest = path.join(OUT, to);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(from, dest);
};
let mediaCount = 0;
for (const [key, { kind, entry }] of usedMedia) {
  for (const f of kind === "video" ? [entry.file, entry.poster] : [entry.file, entry.small]) {
    if (!f) continue;
    const from = path.join(MEDIA_DIR, "approved", f);
    if (!fs.existsSync(from)) die(`Media file missing for "${key}": ${rel(from)}. Approve it again with tools/approve-media.mjs.`);
    copy(from, `media/${f}`);
    mediaCount++;
  }
}
for (const { from, to } of fontFiles) copy(from, to);
for (const f of vendorFiles) copy(path.join(ROOT, f), f);

// Icons: SVG favicon drawn from the glyph + 180px apple-touch PNG.
const fav = config.favicon || {};
const glyph = esc(String(fav.glyph || biz.initials || biz.name?.[0] || "S").slice(0, 3));
const favBg = fav.bg || theme;
const favFg = fav.fg || "#ffffff";
const fontSize = glyph.length > 2 ? 22 : glyph.length > 1 ? 30 : 40;
const favSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${esc(favBg)}"/>` +
  `<text x="32" y="${32 + fontSize * 0.36}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="${fontSize}" fill="${esc(favFg)}">${glyph}</text></svg>`;
fs.mkdirSync(path.join(OUT, "icons"), { recursive: true });
fs.writeFileSync(path.join(OUT, "icons", "favicon.svg"), favSvg);
await sharp(Buffer.from(favSvg), { density: 300 }).resize(180, 180).png().toFile(path.join(OUT, "icons", "apple-touch-icon.png"));

// OG image: the ogPhoto slot, a scrim, the business name in the display font (Playwright), or a plain SVG fallback.
await writeOgImage();

async function writeOgImage() {
  const out = path.join(OUT, "og.jpg");
  let photoBuf = null;
  const ogRef = config.ogPhoto || (slotMap.hero ? "hero" : Object.keys(manifest.photos)[0]);
  if (ogRef) {
    try {
      const { entry } = media(ogRef, "photo");
      usedMedia.delete(undefined);
      photoBuf = await sharp(path.join(MEDIA_DIR, "approved", entry.file)).resize(1200, 630, { fit: "cover" }).jpeg({ quality: 82 }).toBuffer();
    } catch (e) {
      warn(`OG photo "${ogRef}" could not be used (${e.message}); the OG image is a plain color.`);
    }
  }
  if (!photoBuf) photoBuf = await sharp({ create: { width: 1200, height: 630, channels: 3, background: favBg } }).jpeg().toBuffer();
  const name = biz.name || "";
  const fontFile = displayFont && fontFiles.find((f) => f.to.includes(`/${catalogFonts.find((c) => c.family.toLowerCase() === displayFont.family.toLowerCase())?.slug}/`) && !/italic/.test(f.to));
  try {
    const { chromium } = await import("playwright");
    const browser = await chromium.launch();
    try {
      const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
      const fontCss = fontFile ? `@font-face{font-family:"OG";src:url(data:font/woff2;base64,${fs.readFileSync(fontFile.from).toString("base64")}) format("woff2");font-weight:100 900}` : "";
      await page.setContent(`<!doctype html><html><head><style>${fontCss}
        html,body{margin:0;width:1200px;height:630px;overflow:hidden}
        body{background:url(data:image/jpeg;base64,${photoBuf.toString("base64")}) center/cover;font-family:"OG",Georgia,serif;color:#fff}
        .s{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 20%,rgba(0,0,0,.78) 100%)}
        .t{position:absolute;left:64px;right:64px;bottom:56px}
        h1{margin:0;font-size:${name.length > 28 ? 64 : 80}px;line-height:1.02;font-weight:700;letter-spacing:-.01em}
        p{margin:14px 0 0;font:600 26px/1.2 system-ui,sans-serif;opacity:.9}
        </style></head><body><div class="s"></div><div class="t"><h1>${esc(name)}</h1><p>${esc([biz.tradeLabel, biz.city && `${biz.city}, ${biz.state}`].filter(Boolean).join(" · "))}</p></div></body></html>`);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: out, type: "jpeg", quality: 84 });
    } finally {
      await browser.close();
    }
  } catch (e) {
    warn(`OG image drawn without the display font (Playwright: ${String(e.message).split("\n")[0]}).`);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset=".2" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".78"/></linearGradient></defs>` +
      `<rect width="1200" height="630" fill="url(#g)"/><text x="64" y="560" font-family="Georgia, serif" font-weight="700" font-size="72" fill="#fff">${esc(name)}</text></svg>`;
    await sharp(photoBuf).composite([{ input: Buffer.from(svg) }]).jpeg({ quality: 84 }).toFile(out);
  }
}

// ---------------------------------------------------------------- summary
for (const w of warnings) console.log(`warning: ${w}`);
const size = (f) => (fs.existsSync(f) ? fs.statSync(f).size : 0);
console.log(`BUILD ${site.id}: index.html ${kb(size(path.join(OUT, "index.html")))} · app.js ${kb(size(path.join(OUT, "app.js")))} · media ${mediaCount} files · dist ${kb(dirSize(OUT))} -> ${rel(OUT)}`);
