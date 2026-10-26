#!/usr/bin/env node
// Static check of a built site (no browser).
//
//   node tools/check-static.mjs <id>                 checks sites/<trade>/<dir>/dist against src + facts.json
//   node tools/check-static.mjs --copy <file.md>     only the banned-word check, on a copy file
//
// Writes sites/<trade>/<dir>/qa/static.json {blockers, warnings, at}. Prints "STATIC CHECK: clean" or the list.
// Exit code 1 when there is any blocker or warning.
// The rules: docs/DEMO-RULES.md, docs/METHOD.md §4 (rhythm), docs/BUILD-CONTRACT.md.
import fs from "node:fs";
import path from "node:path";
import { die, siteFromId, readJsonFile, writeJsonFile, rel, parseArgs } from "./lib/site-paths.mjs";
import { findBanned, DOLLAR_RE } from "./lib/banned.mjs";
import { parse, elements, hasClass, classes, closest, textOf, describe, lineOf, decode, walk } from "./lib/html-lite.mjs";

const { pos, opt } = parseArgs(process.argv.slice(2), []);

// ---------------------------------------------------------------- extra rules (on top of banned.mjs)
// `unless`: allowed only when the fact exists AND a sample label sits next to the word.
const EXTRA_RULES = [
  { id: "license", label: "license / licence (only with proof.license, labelled sample)", re: /\blicen[cs]es?\b/gi, fact: (f) => !!f?.proof?.license },
  { id: "learn-more", label: '"learn more" (say what the link opens)', re: /\blearn more\b/gi },
  { id: "get-started", label: '"get started" (say what happens)', re: /\bget started\b/gi },
  { id: "submit", label: '"submit" (say "Send my request")', re: /\bsubmit\b/gi },
  { id: "tailored", label: '"tailored"', re: /\btailor(ed|-made)\b/gi },
  { id: "before-after", label: "before/after (stock photos are not this business's jobs)", re: /\bbefore\s*(\/|&|and|&amp;)\s*after\b/gi },
];
// banned.mjs rules that pass only with the fact AND a sample label next to them.
const NEEDS_SAMPLE = new Set(["insured", "guarantee", "warranty", "family-owned", "licensed", "license"]);
const FIGCAPTION_OURS = /\bour (work|team|crew|job|project)s?\b/gi;

function scanText(text, facts) {
  const out = [];
  if (!text) return out;
  const loose = findBanned(text, null); // every hit, as if no facts
  const strict = new Set(findBanned(text, facts).map((h) => `${h.id}@${h.index}`));
  for (const h of loose) out.push({ ...h, factOk: !strict.has(`${h.id}@${h.index}`) });
  for (const r of EXTRA_RULES) {
    r.re.lastIndex = 0;
    let m;
    while ((m = r.re.exec(text))) out.push({ id: r.id, label: r.label, match: m[0], index: m.index, factOk: r.fact ? r.fact(facts) : false });
  }
  return out;
}

// ---------------------------------------------------------------- --copy mode
if (opt.copy) {
  const file = path.resolve(String(opt.copy));
  if (!fs.existsSync(file)) die(`File not found: ${opt.copy}`);
  const text = fs.readFileSync(file, "utf8");
  const facts = opt.facts ? readJsonFile(path.resolve(String(opt.facts))) : null;
  const hits = scanText(text, facts).filter((h) => !h.factOk || NEEDS_SAMPLE.has(h.id));
  if (!hits.length) { console.log("COPY CHECK: clean"); process.exit(0); }
  for (const h of hits) console.log(`- line ${lineOf(text, h.index)}: "${h.match}" -> ${h.label}${h.factOk ? " (true per facts, but label it sample on the page)" : ""}`);
  process.exit(1);
}

// ---------------------------------------------------------------- inputs
const site = siteFromId(pos[0]);
const DIST = opt.dist ? path.resolve(String(opt.dist)) : path.join(site.siteDir, "dist");
const SRC = path.join(site.siteDir, "src");
const distHtmlFile = path.join(DIST, "index.html");
if (!fs.existsSync(distHtmlFile)) die(`${rel(distHtmlFile)} is missing. Run first: node tools/build.mjs ${site.id}`);
const facts = readJsonFile(opt.facts ? path.resolve(String(opt.facts)) : path.join(site.siteDir, "facts.json"));
const html = fs.readFileSync(distHtmlFile, "utf8");
const readIf = (f) => (fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "");
const distJs = readIf(path.join(DIST, "app.js"));
const srcFiles = ["index.html", "style.css", "app.js"].map((f) => ({ name: `src/${f}`, text: readIf(path.join(SRC, f)) }));
const root = parse(html);

const blockers = [];
const warnings = [];
const at = (el) => (el ? `${describe(el)} (dist line ${lineOf(html, el.pos)})` : "");
const block = (code, msg, where = "") => blockers.push({ code, msg, where });
const warn = (code, msg, where = "") => warnings.push({ code, msg, where });
const norm = (s) => String(s || "").replace(/\s+/g, " ").trim();
const short = (s, n = 70) => { s = norm(s); return s.length > n ? s.slice(0, n - 1) + "…" : s; };

const body = elements(root, (e) => e.tag === "body")[0] || root;
const all = elements(body);

// ---------------------------------------------------------------- visible text, grouped by block
const BLOCK_TAGS = new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "figcaption", "blockquote", "dt", "dd", "td", "th",
  "button", "a", "label", "legend", "summary", "option", "caption", "small", "cite", "address", "q"]);
const SKIP = new Set(["script", "style", "template", "noscript", "svg", "title"]);
const blocks = new Map(); // element -> text
walk(body, (n) => {
  if (n.type === "el" && SKIP.has(n.tag) && n.tag !== "noscript") return false;
  if (n.type !== "text") return;
  const t = decode(n.text);
  if (!t.trim()) return;
  let owner = n.parent;
  while (owner && owner.tag !== "#root" && !BLOCK_TAGS.has(owner.tag) && !/^(div|section|footer|header|article|aside|figure|main|form|fieldset|nav)$/.test(owner.tag)) owner = owner.parent;
  blocks.set(owner, (blocks.get(owner) || "") + " " + t);
});
const blockList = [...blocks.entries()].map(([el, text]) => ({ el, text: norm(text) }));

// A sample label next to el: el or a close ancestor (not a whole section) holds .sample-tag or the word "sample".
const NEAR_TAGS = /^(li|article|figure|blockquote|dl|div|aside|footer|p|span|small|dd|dt|figcaption|td|tr|tbody|table|ul|ol|cite|q|label|address)$/;
function sampleNear(el) {
  let p = el;
  for (let k = 0; p && k < 4 && p.tag !== "#root"; k++, p = p.parent) {
    if (k > 0 && !NEAR_TAGS.test(p.tag)) break;
    if (elements(p, (e) => hasClass(e, "sample-tag")).length || hasClass(p, "sample-tag")) return true;
    if (/\bsample\b/i.test(textOf(p))) return true;
  }
  return false;
}

// ---------------------------------------------------------------- 1. banned words
const ATTR_TEXT = ["alt", "title", "aria-label", "placeholder", "data-thanks", "aria-description"];
const textSources = [...blockList];
for (const el of all) {
  for (const a of ATTR_TEXT) if (el.attrs[a]) textSources.push({ el, text: el.attrs[a], attr: a });
}
const metaDesc = elements(root, (e) => e.tag === "meta" && (e.attrs.name || "").toLowerCase() === "description")[0];
const titleEl = elements(root, (e) => e.tag === "title")[0];
const titleText = titleEl ? norm(textOf({ type: "el", tag: "x", children: titleEl.children })) : "";
if (metaDesc) textSources.push({ el: metaDesc, text: metaDesc.attrs.content || "", attr: "content", head: true });
if (titleEl) textSources.push({ el: titleEl, text: titleText, head: true });

const seenBanned = new Set();
for (const s of textSources) {
  const hits = scanText(s.text, facts);
  const inCaption = s.el.tag === "figcaption" || closest(s.el, (e) => e.tag === "figcaption");
  if (inCaption) {
    FIGCAPTION_OURS.lastIndex = 0;
    let m;
    while ((m = FIGCAPTION_OURS.exec(s.text))) hits.push({ id: "caption-ours", label: 'stock photo captioned as "our work/team/crew"', match: m[0], index: m.index, factOk: false });
  }
  for (const h of hits) {
    if (h.factOk && !NEEDS_SAMPLE.has(h.id)) continue; // true per facts
    if (h.factOk && NEEDS_SAMPLE.has(h.id)) {
      if (!s.head && sampleNear(s.el)) continue; // true and labelled
      const k = `label|${h.id}|${s.el.pos}`;
      if (seenBanned.has(k)) continue;
      seenBanned.add(k);
      block("claim-unlabelled", `"${h.match}" is true in facts.json but has no sample label next to it (DEMO-RULES §2). Text: "${short(s.text)}"`, at(s.el));
      continue;
    }
    const k = `${h.id}|${s.el.pos}|${s.attr || ""}`;
    if (seenBanned.has(k)) continue;
    seenBanned.add(k);
    block("banned", `"${h.match}" -> ${h.label}${s.attr ? ` (in ${s.attr}="")` : ""}. Text: "${short(s.text)}"`, at(s.el));
  }
}

// ---------------------------------------------------------------- 2. literal facts in src (they must come from tokens)
const p = facts.proof || {};
const b = facts.biz || {};
const literal = [];
const addLit = (value, what, word = false) => {
  const v = norm(value);
  if (!v || v.length < 3) return;
  literal.push({ v, what, word });
  if (v.includes("&")) literal.push({ v: v.replace(/&/g, "&amp;"), what, word });
};
addLit(b.name, "biz.name");
if (b.short && b.short.length >= 4) addLit(b.short, "biz.short");
addLit(b.owner, "biz.owner");
addLit(b.email, "biz.email");
if (b.phone) {
  addLit(b.phone, "biz.phone");
  const d = String(b.phone).replace(/\D/g, "");
  if (d.length >= 10) {
    const t = d.slice(-10);
    addLit(t, "biz.phone digits");
    addLit(`${t.slice(3, 6)}-${t.slice(6)}`, "biz.phone");
    addLit(`${t.slice(0, 3)}-${t.slice(3, 6)}-${t.slice(6)}`, "biz.phone");
    addLit(`${t.slice(0, 3)}.${t.slice(3, 6)}.${t.slice(6)}`, "biz.phone");
  }
}
addLit(b.phoneE164, "biz.phoneE164");
addLit(p.license, "proof.license");
addLit(b.city, "biz.city", true);
for (const a of b.areas || []) addLit(typeof a === "string" ? a : a?.name, "biz.areas", true);
for (const z of b.zips || []) addLit(z, "biz.zips", true);
for (const r of p.reviews || []) {
  addLit(String(r.text || "").slice(0, 30), "proof.reviews text");
  addLit(r.name, "proof.reviews name", true);
}
const priceStrings = [];
(function collect(v) {
  if (typeof v === "string") priceStrings.push(v);
  else if (Array.isArray(v)) v.forEach(collect);
  else if (v && typeof v === "object") Object.values(v).forEach(collect);
})(p.prices);
for (const s of priceStrings) { const m = s.match(DOLLAR_RE); if (m) for (const x of m) addLit(x, "proof.prices"); }
if (p.rating !== undefined && p.reviewCount) addLit(`${p.reviewCount} reviews`, "proof.reviewCount");

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
for (const f of srcFiles) {
  if (!f.text) continue;
  // comments do not count
  const text = f.name.endsWith(".html") ? f.text.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, " "))
    : f.text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
  const seen = new Set();
  for (const l of literal) {
    const re = new RegExp(l.word ? `(?<![\\w-])${esc(l.v)}(?![\\w-])` : esc(l.v), "gi");
    let m;
    while ((m = re.exec(text))) {
      const line = lineOf(text, m.index);
      const k = `${l.what}|${line}`;
      if (seen.has(k)) continue;
      seen.add(k);
      block("literal-fact", `"${m[0]}" is typed into the source; use the token for ${l.what} (CLAUDE.md: facts only through tokens).`, `${f.name} line ${line}`);
    }
  }
}

// ---------------------------------------------------------------- 3. dollar amounts
const priceOk = (m) => priceStrings.some((s) => s.replace(/\s+/g, "").includes(m.replace(/\s+/g, "")));
for (const s of textSources) {
  DOLLAR_RE.lastIndex = 0;
  let m;
  while ((m = DOLLAR_RE.exec(s.text))) {
    if (!priceOk(m[0])) block("dollar", `"${m[0]}" is not one of facts.json proof.prices (prices only from the sample price list).`, at(s.el));
  }
}
const srcJs = srcFiles.find((f) => f.name === "src/app.js").text;
{
  const re = /\$\s?\d/g;
  let m;
  while ((m = re.exec(srcJs))) block("dollar-js", `A dollar amount ("${srcJs.slice(m.index, m.index + 8).trim()}…") is written in app.js; prices come from facts.`, `src/app.js line ${lineOf(srcJs, m.index)}`);
}

// ---------------------------------------------------------------- 4. outside addresses
const creditHrefs = new Set(elements(root, (e) => e.tag === "a" && closest(e, (x) => x.tag === "ul" && hasClass(x, "credits"))).map((a) => a.attrs.href));
const URL_OK = /^https?:\/\/(schema\.org|www\.w3\.org)(\/|$)/i;
function scanUrls(text, name, htmlMode) {
  const re = /https?:\/\/[^\s"'<>)\\`]+/gi;
  let m;
  while ((m = re.exec(text))) {
    const u = m[0];
    if (URL_OK.test(u)) continue;
    if (htmlMode && [...creditHrefs].some((h) => h && decode(h).startsWith(decode(u))) &&/^https?:\/\/([a-z0-9-]+\.)*(pexels\.com|wikimedia\.org|creativecommons\.org|openverse\.org|flickr\.com)\//i.test(u)) continue;
    block("external-url", `Outside address ${short(u, 80)} (the page must work offline; only schema.org, w3.org and photo-credit / licence links inside ul.credits are allowed).`, `${name} line ${lineOf(text, m.index)}`);
  }
  if (htmlMode) {
    const re2 = /(?:src|href|srcset|poster|data)\s*=\s*["']\s*\/\/|url\(\s*["']?\/\//gi;
    while ((m = re2.exec(text))) block("external-url", `Protocol-relative address "${text.slice(m.index, m.index + 40)}…"`, `${name} line ${lineOf(text, m.index)}`);
  }
}
scanUrls(html, "dist/index.html", true);
scanUrls(distJs, "dist/app.js", false);

// ---------------------------------------------------------------- 5. head
const h1s = elements(body, (e) => e.tag === "h1");
if (h1s.length !== 1) block("h1", `The page has ${h1s.length} <h1>; it needs exactly one.`, h1s.slice(0, 3).map(at).join("; "));
{
  let last = 0;
  for (const h of elements(body, (e) => /^h[1-6]$/.test(e.tag))) {
    const lv = Number(h.tag[1]);
    if (last && lv > last + 1) warn("heading-jump", `Heading jumps from h${last} to h${lv}: "${short(textOf(h), 50)}"`, at(h));
    last = lv;
  }
}
if (!titleText) block("title", "No <title>.");
else if (titleText.length < 50 || titleText.length > 60) block("title", `<title> is ${titleText.length} characters (needs 50-60): "${titleText}"`);
const descText = norm(metaDesc?.attrs.content);
if (!descText) block("description", "No meta description.");
else if (descText.length < 120 || descText.length > 155) block("description", `Meta description is ${descText.length} characters (needs 120-155): "${descText}"`);
const robots = elements(root, (e) => e.tag === "meta" && (e.attrs.name || "").toLowerCase() === "robots")[0];
if (!robots || !/noindex/i.test(robots.attrs.content || "")) block("noindex", 'Missing <meta name="robots" content="noindex"> (demos must not be indexed).');

// ---------------------------------------------------------------- 6. photos used once
const photoUse = new Map();
for (const el of all) if (el.attrs["data-photo"]) {
  const k = el.attrs["data-photo"];
  photoUse.set(k, [...(photoUse.get(k) || []), el]);
}
for (const [k, els] of photoUse) if (els.length > 1) block("photo-twice", `Photo "${k}" is used ${els.length} times (each photo once per page).`, els.map(at).join("; "));

// ---------------------------------------------------------------- 7. signature, hooks, rhythm
const sig = all.filter((e) => "data-sw-signature" in e.attrs);
if (!sig.length) block("signature", "No element with data-sw-signature (the one signature moment).");
const hooks = all.filter((e) => "data-hook" in e.attrs || "data-sw-signature" in e.attrs);
if (hooks.length < 3) block("hooks", `Only ${hooks.length} [data-hook] moments (needs at least 3, one of them data-sw-signature).`);

const DARK = new Set(["t-deep", "t-ink", "t-night", "t-dark", "t-black"]);
const LIGHT = new Set(["t-light", "t-paper", "t-white", "t-cream", "t-bone", "t-mist"]);
const toneOf = (el) => {
  const t = classes(el).filter((c) => c.startsWith("t-"));
  if (!t.length) return null;
  const c = t[0];
  return { cls: c, cat: DARK.has(c) ? "dark" : LIGHT.has(c) ? "light" : c === "t-mid" ? "mid" : "color" };
};
const sections = elements(body, (e) => e.tag === "section" && !closest(e.parent, (x) => x.tag === "section"));
if (sections.length < 8 || sections.length > 12) block("sections", `The page has ${sections.length} top-level <section>s (needs 8-12).`);
const tones = sections.map((s) => ({ s, tone: toneOf(s) }));
for (const { s, tone } of tones) if (!tone) warn("tone-missing", "Section has no tone class (t-deep, t-paper, t-brand ...).", at(s));
for (let i = 0; i < tones.length; i++) {
  const a = tones[i], b2 = tones[i + 1], c = tones[i + 2];
  if (b2 && a.tone?.cat === "dark" && b2.tone?.cat === "dark") block("rhythm", `Two dark sections touch (${a.tone.cls}, ${b2.tone.cls}).`, `${at(a.s)} + ${at(b2.s)}`);
  if (c && a.tone && a.tone.cat === b2.tone?.cat && a.tone.cat === c.tone?.cat) block("rhythm", `Three ${a.tone.cat} sections in a row (${a.tone.cls}, ${b2.tone.cls}, ${c.tone.cls}).`, at(a.s));
}
if (!all.some((e) => hasClass(e, "t-deep"))) block("rhythm", "No .t-deep section (METHOD §4 needs one deep band).");
if (!tones.some((t) => t.tone?.cat === "color")) block("rhythm", "No colour band (a t-<brand/accent> section, METHOD §4).");
if (!all.some((e) => hasClass(e, "break"))) block("rhythm", "No .break (the full-bleed interruption, METHOD §4).");
const layouts = sections.map((s) => s.attrs["data-layout"]).filter(Boolean);
if (layouts.length) {
  if (new Set(layouts).size < 3) block("layout", `Only ${new Set(layouts).size} layout families in data-layout (needs at least 3).`);
  for (let i = 0; i + 1 < sections.length; i++) {
    const x = sections[i].attrs["data-layout"], y = sections[i + 1].attrs["data-layout"];
    if (x && x === y) block("layout", `Two neighbouring sections share layout "${x}".`, `${at(sections[i])} + ${at(sections[i + 1])}`);
  }
}

// ---------------------------------------------------------------- 8. links and the form
const ids = new Map();
for (const el of elements(root)) if (el.attrs.id) ids.set(el.attrs.id, (ids.get(el.attrs.id) || 0) + 1);
for (const [id, n] of ids) if (n > 1) block("duplicate-id", `id="${id}" is used ${n} times.`);
for (const a of all.filter((e) => e.tag === "a")) {
  const h = a.attrs.href;
  if (h === undefined) { warn("link", `<a> without href: "${short(textOf(a), 40)}"`, at(a)); continue; }
  if (h === "#" || h === "") { block("link", `Link goes nowhere (href="${h}"): "${short(textOf(a), 40)}"`, at(a)); continue; }
  if (h.startsWith("#") && !ids.has(decodeURIComponent(h.slice(1)))) block("link", `Link to ${h} but no element has that id.`, at(a));
}
if ((ids.get("contact") || 0) !== 1) block("contact", `Needs exactly one element with id="contact" (found ${ids.get("contact") || 0}).`);
const forms = all.filter((e) => e.tag === "form" && "data-lead" in e.attrs);
if (!forms.length) block("form", "No form[data-lead] (the 4-step lead form, contract §6).");
for (const f of forms) {
  const inner = elements(f);
  if (!inner.some((e) => e.tag === "input" && e.attrs.name === "website2")) block("form", 'The lead form has no website2 honeypot input (contract §6).', at(f));
  const steps = inner.filter((e) => "data-step" in e.attrs).length;
  if (steps !== 4) warn("form", `The lead form has ${steps} [data-step] steps (the contract asks for 4).`, at(f));
  if (f.attrs.action) block("form", `The lead form has action="${f.attrs.action}" (it must never send).`, at(f));
}

// ---------------------------------------------------------------- 9. sample labels next to reviews, rating, prices, licence
const needLabel = [];
for (const r of p.reviews || []) if (r.text) needLabel.push({ needle: norm(r.text).slice(0, 30), what: "review" });
if (p.rating !== undefined) needLabel.push({ needle: String(p.rating), what: "rating", word: true });
for (const s of priceStrings) { const m = s.match(DOLLAR_RE); if (m) needLabel.push({ needle: m[0], what: "price" }); }
if (p.license) needLabel.push({ needle: String(p.license), what: "licence number" });
for (const n of needLabel) {
  const re = n.word ? new RegExp(`(?<![\\d.])${esc(n.needle)}(?![\\d])`) : null;
  for (const blk of blockList) {
    const hit = re ? re.test(blk.text) : blk.text.includes(n.needle);
    if (!hit) continue;
    if (!sampleNear(blk.el)) block("sample-label", `A ${n.what} is shown without a sample label next to it ("Sample review", "Sample rating", "Sample pricing", "Licence # (sample)"). Text: "${short(blk.text)}"`, at(blk.el));
  }
}

// ---------------------------------------------------------------- 10. footer
const footer = elements(body, (e) => e.tag === "footer").pop();
if (!footer) block("footer", "No <footer>.");
else {
  const ft = norm(textOf(footer));
  const disc = norm(facts.demo?.disclaimer);
  if (disc && !ft.includes(disc.slice(0, 40))) block("footer", "The footer does not show {{demo.disclaimer}} (DEMO-RULES §3).", at(footer));
  if (!elements(footer, (e) => e.tag === "ul" && hasClass(e, "credits")).length) block("footer", "The footer has no photo credits list ([[credits]]).", at(footer));
}

// ---------------------------------------------------------------- 11. images and inline handlers
for (const img of all.filter((e) => e.tag === "img")) {
  const miss = ["alt", "width", "height"].filter((a) => !(a in img.attrs));
  if (miss.length) block("img", `<img> without ${miss.join(", ")}: ${short(img.attrs.src || "", 50)}`, at(img));
}
for (const el of elements(root)) {
  for (const a of el.attrOrder || []) if (/^on[a-z]+$/.test(a)) block("inline-js", `Inline handler ${a}="" (no inline JavaScript).`, at(el));
}

// ---------------------------------------------------------------- 12. placeholders and build leftovers
const PLACEHOLDER = /\{\{|\}\}|\[\[|\]\]|\blorem\b|\bipsum\b|\bTODO\b|\bTBD\b|\bXXX\b|\bundefined\b|\bNaN\b|\[object Object\]/;
for (const s of textSources) {
  const m = PLACEHOLDER.exec(s.text);
  if (m) block("placeholder", `Placeholder or build leftover "${m[0]}" in ${s.attr ? `${s.attr}=""` : "the text"}: "${short(s.text)}"`, at(s.el));
}
for (const el of elements(root)) {
  for (const a of ["src", "href", "srcset", "poster", "content"]) {
    const v = el.attrs[a];
    if (v && /\{\{|\[\[|undefined|\bnull\b/.test(v)) block("placeholder", `${a}="${short(v, 50)}" looks unfinished.`, at(el));
  }
}

// ---------------------------------------------------------------- report
const report = { blockers, warnings, at: new Date().toISOString() };
writeJsonFile(path.join(site.siteDir, "qa", "static.json"), report);
if (!blockers.length && !warnings.length) {
  console.log("STATIC CHECK: clean");
  process.exit(0);
}
console.log(`STATIC CHECK ${site.id}: ${blockers.length} blocker(s), ${warnings.length} warning(s)  -> ${rel(path.join(site.siteDir, "qa", "static.json"))}`);
for (const x of blockers) console.log(`BLOCKER [${x.code}] ${x.msg}${x.where ? `\n    at ${x.where}` : ""}`);
for (const x of warnings) console.log(`warning [${x.code}] ${x.msg}${x.where ? `\n    at ${x.where}` : ""}`);
process.exit(1);
