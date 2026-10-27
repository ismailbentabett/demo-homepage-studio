#!/usr/bin/env node
// Download Latin-subset woff2 files from Google Fonts and record them in data/fonts-catalog.json.
//
//   node tools/fetch-fonts.mjs "Family Name" [--weights 400,700] [--italic] [--class serif] [--roles display,text] [--note "..."]
//   node tools/fetch-fonts.mjs --curated          # fetch the whole curated list below (skips families already in the catalog)
//   node tools/fetch-fonts.mjs --curated --force  # re-fetch them all
//
// Variable families are saved as one file per style covering the full weight range (plus opsz / wdth axes when
// the family has them). Static families get one file per weight. Only the `/* latin */` block is kept.

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CATALOG = path.join(ROOT, 'data', 'fonts-catalog.json');
const FONT_DIR = path.join(ROOT, 'assets', 'fonts');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';
const AXES_KEPT = ['opsz', 'wdth', 'wght']; // registered axes we request (alphabetical, as the API requires)

// family, class, roles, italic, note
const CURATED = [
  // serif
  ['Fraunces', 'serif', ['display', 'text'], true, 'Soft, wonky old-style serif with an optical-size axis; warm and characterful at large sizes.'],
  ['Newsreader', 'serif', ['display', 'text'], true, 'Editorial text serif with optical sizes; newspaper calm and very readable.'],
  ['Instrument Serif', 'serif', ['display'], true, 'Condensed, high-contrast display serif; elegant big headlines, one weight.'],
  ['DM Serif Display', 'serif', ['display'], true, 'Bold high-contrast Didone-ish display serif; punchy and classic.'],
  ['Playfair Display', 'serif', ['display'], true, 'Transitional high-contrast display serif; refined, a little formal.'],
  ['Cormorant Garamond', 'serif', ['display'], true, 'Delicate Garamond with long ascenders; luxurious at large sizes only.'],
  ['Libre Caslon Text', 'serif', ['text', 'display'], true, 'Sturdy Caslon for body copy; trustworthy, bookish.'],
  ['Source Serif 4', 'serif', ['text', 'display'], true, 'Workhorse text serif with optical sizes; neutral and dependable.'],
  ['Literata', 'serif', ['text', 'display'], true, 'Contemporary book serif with optical sizes; friendly long-read texture.'],
  ['Young Serif', 'serif', ['display'], false, 'Heavy, rounded old-style serif; homely and confident.'],
  ['Gloock', 'serif', ['display'], false, 'Very high-contrast display serif with sharp wedges; dramatic.'],
  ['Bodoni Moda', 'serif', ['display'], true, 'Didone with optical sizes; fashion-magazine contrast.'],
  ['EB Garamond', 'serif', ['text', 'display'], true, 'Classic Garamond revival; old-world craft and heritage.'],
  ['Spectral', 'serif', ['text', 'display'], true, 'Sharp, screen-first text serif; crisp and literary.'],
  ['Crimson Pro', 'serif', ['text', 'display'], true, 'Old-style book face; quiet, warm body text.'],
  // grotesk / sans
  ['Inter Tight', 'grotesk', ['display', 'text'], true, 'Tightly spaced Inter for headlines; neutral Swiss tool.'],
  ['Manrope', 'grotesk', ['text', 'display'], false, 'Geometric-grotesk hybrid; modern, open and calm.'],
  ['Archivo', 'grotesk', ['display', 'text'], true, 'Grotesk with a width axis; from condensed signage to wide headlines.'],
  ['Space Grotesk', 'grotesk', ['display', 'text'], false, 'Quirky grotesk derived from Space Mono; technical character.'],
  ['Schibsted Grotesk', 'grotesk', ['text', 'display'], true, 'Newsroom grotesk; sturdy, straightforward, slightly warm.'],
  ['Hanken Grotesk', 'grotesk', ['text', 'display'], true, 'Clean neo-grotesk; friendly and very legible.'],
  ['Bricolage Grotesque', 'grotesk', ['display', 'text'], false, 'Expressive grotesque with ink traps and optical sizes; punchy display.'],
  ['Familjen Grotesk', 'grotesk', ['display', 'text'], true, 'Grotesk with quirky details; Scandinavian, approachable.'],
  ['Onest', 'grotesk', ['text', 'display'], false, 'Soft, open sans; calm UI-style body text.'],
  ['Figtree', 'grotesk', ['text', 'display'], true, 'Friendly geometric sans; clean and cheerful.'],
  ['Public Sans', 'grotesk', ['text'], true, 'Neutral, government-grade sans; plain and honest.'],
  ['Work Sans', 'grotesk', ['text', 'display'], true, 'Grotesk tuned for screens; slightly wide and workmanlike.'],
  ['Instrument Sans', 'grotesk', ['text', 'display'], true, 'Precise grotesk with a width axis; pairs with Instrument Serif.'],
  ['Geist', 'grotesk', ['text', 'display'], false, 'Swiss-inspired product sans; crisp and technical.'],
  ['Albert Sans', 'grotesk', ['text', 'display'], true, 'Geometric sans with Scandinavian roots; light and airy.'],
  ['Plus Jakarta Sans', 'grotesk', ['text', 'display'], true, 'Modern geometric sans with tall x-height; polished.'],
  ['Sora', 'grotesk', ['display', 'text'], false, 'Wide geometric sans; techy, confident headlines.'],
  ['Outfit', 'grotesk', ['display', 'text'], false, 'Round geometric sans; simple and friendly.'],
  ['Urbanist', 'grotesk', ['display', 'text'], true, 'Low-contrast geometric sans; clean, modern, a bit fashionable.'],
  ['Lexend', 'grotesk', ['text', 'display'], false, 'Wide, readability-first sans; very clear for body copy.'],
  // condensed
  ['Barlow Condensed', 'condensed', ['display'], true, 'Slightly rounded condensed grotesk; highway-sign practicality.'],
  ['Oswald', 'condensed', ['display'], false, 'Classic condensed gothic; poster headlines.'],
  ['Big Shoulders', 'condensed', ['display'], false, 'Chicago-inspired condensed display with optical sizes; industrial and bold.'],
  ['Antonio', 'condensed', ['display'], false, 'Refined tall condensed sans; sleek stacked headlines.'],
  ['Saira Condensed', 'condensed', ['display'], false, 'Squarish condensed sans; mechanical, sporty.'],
  ['Sofia Sans Condensed', 'condensed', ['display', 'text'], true, 'Condensed humanist sans; compact but warm.'],
  ['Anton', 'condensed', ['display'], false, 'Very heavy condensed impact face; loud, one weight.'],
  ['Bebas Neue', 'condensed', ['display'], false, 'All-caps condensed classic; bold signage, one weight.'],
  ['League Gothic', 'condensed', ['display'], false, 'Tall condensed gothic with a width axis; vintage poster.'],
  // slab
  ['Roboto Slab', 'slab', ['display', 'text'], false, 'Even, mechanical slab serif; sturdy and readable.'],
  ['Zilla Slab', 'slab', ['display', 'text'], true, 'Contemporary slab with a bookish feel; friendly authority.'],
  ['Bitter', 'slab', ['text', 'display'], true, 'Screen-tuned slab for reading; solid, workmanlike.'],
  ['Arvo', 'slab', ['display', 'text'], true, 'Geometric slab; blocky, honest, a bit retro.'],
  ['Aleo', 'slab', ['display', 'text'], true, 'Semi-rounded slab; soft and approachable.'],
  // mono
  ['JetBrains Mono', 'mono', ['label'], true, 'Developer mono with tall x-height; crisp labels and numbers.'],
  ['IBM Plex Mono', 'mono', ['label'], true, 'Corporate-technical mono; engineered, slightly warm.'],
  ['Space Mono', 'mono', ['label', 'display'], true, 'Retro-futurist geometric mono; quirky labels.'],
  ['DM Mono', 'mono', ['label'], true, 'Low-contrast mono; quiet captions and data.'],
  ['Martian Mono', 'mono', ['label', 'display'], false, 'Wide-capable mono with a width axis; technical display.'],
  // display / other
  ['Syne', 'display', ['display'], false, 'Art-school display grotesk that widens with weight; avant-garde.'],
  ['Unbounded', 'display', ['display'], false, 'Wide, rounded display sans; loud and contemporary.'],
  ['Darker Grotesque', 'display', ['display', 'text'], false, 'Tall, slightly condensed grotesque; fashionable headlines.'],
  ['Chivo', 'grotesk', ['display', 'text'], true, 'Grotesk with strong heavy weights; newspaper punch.'],
  ['Red Hat Display', 'display', ['display'], true, 'Geometric-humanist display sans; modern and confident.'],
  ['Epilogue', 'display', ['display', 'text'], true, 'Grotesk with distinctive heavy cuts; editorial and bold.'],
  ['Rethink Sans', 'grotesk', ['text', 'display'], true, 'Refined grotesk with quirky details; product-y and clean.'],
  ['Anybody', 'display', ['display'], true, 'Width-axis display from ultra-condensed to extra-wide; playful range.'],
  ['Climate Crisis', 'display', ['display'], false, 'Heavy display face (YEAR axis fixed at default); one big statement.'],
  ['Libre Franklin', 'grotesk', ['text', 'display'], true, 'Franklin Gothic revival; American, sturdy, trustworthy.'],
  ['Barlow', 'grotesk', ['text', 'display'], true, 'Slightly rounded grotesk; Californian highway practicality for body text.'],
  ['Kanit', 'display', ['display'], true, 'Loopless geometric sans with heavy weights; bold sporty headlines.'],
  ['Caveat', 'script', ['accent'], false, 'Casual handwriting; only for a short hand-written note or annotation, never body text.'],
];

const CLASS_FROM_CATEGORY = { 'Serif': 'serif', 'Sans Serif': 'grotesk', 'Display': 'display', 'Monospace': 'mono', 'Handwriting': 'script' };

function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

function parseArgs(argv) {
  const o = { family: null, weights: null, italic: false, cls: null, roles: null, note: null, curated: false, force: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--weights') o.weights = argv[++i].split(',').map(Number).filter(Boolean);
    else if (a === '--italic') o.italic = true;
    else if (a === '--class') o.cls = argv[++i];
    else if (a === '--roles') o.roles = argv[++i].split(',');
    else if (a === '--note') o.note = argv[++i];
    else if (a === '--curated') o.curated = true;
    else if (a === '--force') o.force = true;
    else if (!a.startsWith('--')) o.family = a;
  }
  return o;
}

let metaCache = null;
async function metadata() {
  if (metaCache) return metaCache;
  try {
    const r = await fetch('https://fonts.google.com/metadata/fonts', { headers: { 'user-agent': UA } });
    const t = (await r.text()).replace(/^\)\]\}'\s*/, '');
    metaCache = new Map(JSON.parse(t).familyMetadataList.map((f) => [f.family, f]));
  } catch (e) {
    console.warn('! could not read Google Fonts metadata, guessing axes:', e.message);
    metaCache = new Map();
  }
  return metaCache;
}

async function getCss(query) {
  const url = 'https://fonts.googleapis.com/css2?family=' + query + '&display=swap';
  const r = await fetch(url, { headers: { 'user-agent': UA } });
  if (!r.ok) throw new Error('Google Fonts answered ' + r.status + ' for ' + url);
  return r.text();
}

// Returns [{ style, weight, stretch, url }] for the latin blocks only.
function latinFaces(css) {
  const out = [];
  const re = /\/\*\s*([a-z0-9-]+)\s*\*\/\s*@font-face\s*\{([^}]*)\}/g;
  let m;
  while ((m = re.exec(css))) {
    if (m[1] !== 'latin') continue;
    const body = m[2];
    const get = (p) => { const x = body.match(new RegExp(p + ':\\s*([^;]+);')); return x ? x[1].trim() : null; };
    const url = (body.match(/url\(([^)]+)\)\s*format\('woff2'\)/) || [])[1];
    if (!url) continue;
    out.push({ style: get('font-style') || 'normal', weight: get('font-weight') || '400', stretch: get('font-stretch'), url });
  }
  return out;
}

function buildQuery(family, meta, opts) {
  const fam = family.replace(/ /g, '+');
  const axes = (meta?.axes || []).filter((a) => AXES_KEPT.includes(a.tag));
  const hasItalic = meta ? Object.keys(meta.fonts || {}).some((k) => k.endsWith('i')) : true;
  const italic = opts.italic && hasItalic;
  const wght = axes.find((a) => a.tag === 'wght');
  if (axes.length && (wght || !meta)) {
    // Variable: full ranges (weight range clipped to --weights if given)
    const ranges = axes.map((a) => {
      if (a.tag === 'wght' && opts.weights?.length) {
        const lo = Math.max(a.min, Math.min(...opts.weights)), hi = Math.min(a.max, Math.max(...opts.weights));
        return lo === hi ? String(lo) : lo + '..' + hi;
      }
      return a.min + '..' + a.max;
    }).join(',');
    const tags = axes.map((a) => a.tag).join(',');
    if (italic) return { q: `${fam}:ital,${tags}@0,${ranges};1,${ranges}`, variable: true, axes };
    return { q: `${fam}:${tags}@${ranges}`, variable: true, axes };
  }
  // Static
  const avail = meta ? Object.keys(meta.fonts || {}).filter((k) => /^\d+$/.test(k)).map(Number) : [400, 700];
  let ws = opts.weights?.length ? opts.weights.filter((w) => avail.includes(w)) : avail.filter((w) => w >= 300);
  if (!ws.length) ws = avail.length ? [avail.includes(400) ? 400 : avail[0]] : [400];
  ws.sort((a, b) => a - b);
  if (ws.length === 1 && ws[0] === 400 && !italic) return { q: fam, variable: false, axes: [] };
  const availItalic = meta ? Object.keys(meta.fonts || {}).filter((k) => k.endsWith('i')).map((k) => Number(k.slice(0, -1))) : ws;
  if (italic) {
    const tuples = ws.map((w) => '0,' + w).concat(ws.filter((w) => availItalic.includes(w)).map((w) => '1,' + w));
    return { q: `${fam}:ital,wght@${tuples.join(';')}`, variable: false, axes: [] };
  }
  return { q: `${fam}:wght@${ws.join(';')}`, variable: false, axes: [] };
}

async function readCatalog() {
  try { return JSON.parse(await fs.readFile(CATALOG, 'utf8')); } catch { return { fonts: [] }; }
}
async function writeCatalog(cat) {
  cat.fonts.sort((a, b) => a.family.localeCompare(b.family));
  await fs.mkdir(path.dirname(CATALOG), { recursive: true });
  await fs.writeFile(CATALOG, JSON.stringify(cat, null, 2) + '\n');
}

export async function fetchFamily(family, opts = {}) {
  const meta = (await metadata()).get(family);
  if ((await metadata()).size && !meta) throw new Error('not on Google Fonts: ' + family);
  const { q, variable, axes } = buildQuery(family, meta, opts);
  const faces = latinFaces(await getCss(q));
  if (!faces.length) throw new Error('no latin woff2 in the CSS for ' + family);
  const slug = slugify(family);
  const dir = path.join(FONT_DIR, slug);
  await fs.mkdir(dir, { recursive: true });
  const files = [];
  const seen = new Set();
  for (const f of faces) {
    const key = f.weight + '|' + f.style;
    if (seen.has(key)) continue;
    seen.add(key);
    const r = await fetch(f.url, { headers: { 'user-agent': UA } });
    if (!r.ok) throw new Error('download failed ' + r.status + ' ' + f.url);
    const buf = Buffer.from(await r.arrayBuffer());
    const name = `${slug}-${f.weight.replace(/\s+/g, '-')}-${f.style}.woff2`;
    await fs.writeFile(path.join(dir, name), buf);
    const entry = { weight: f.weight, style: f.style, file: `assets/fonts/${slug}/${name}`, bytes: buf.length };
    if (f.stretch && f.stretch !== '100%') entry.stretch = f.stretch;
    files.push(entry);
  }
  const axisInfo = {};
  for (const a of axes) axisInfo[a.tag] = [a.min, a.max];
  return {
    family,
    slug,
    class: opts.cls || CLASS_FROM_CATEGORY[meta?.category] || 'grotesk',
    roles: opts.roles || (meta?.category === 'Display' ? ['display'] : ['display', 'text']),
    variable,
    ...(variable ? { axes: axisInfo } : {}),
    files,
    license: 'OFL',
    note: opts.note || '',
  };
}

async function upsert(entry) {
  const cat = await readCatalog();
  const i = cat.fonts.findIndex((f) => f.family === entry.family);
  if (i >= 0) cat.fonts[i] = { ...cat.fonts[i], ...entry, note: entry.note || cat.fonts[i].note };
  else cat.fonts.push(entry);
  await writeCatalog(cat);
}

async function main() {
  const o = parseArgs(process.argv.slice(2));
  if (o.curated) {
    const cat = await readCatalog();
    const have = new Set(cat.fonts.map((f) => f.family));
    const done = new Set();
    let ok = 0, fail = 0;
    for (const [family, cls, roles, italic, note] of CURATED) {
      if (done.has(family)) continue;
      done.add(family);
      if (have.has(family) && !o.force) { ok++; continue; }
      try {
        const e = await fetchFamily(family, { cls, roles, italic, note });
        await upsert(e);
        ok++;
        console.log('ok  ', family, e.files.map((f) => f.weight + ' ' + f.style).join(', '));
      } catch (e) {
        fail++;
        console.warn('skip', family, '-', e.message);
      }
    }
    console.log(`\n${ok} families in the catalog from the curated list, ${fail} skipped.`);
    return;
  }
  if (!o.family) {
    console.error('Usage: node tools/fetch-fonts.mjs "Family Name" [--weights 400,700] [--italic] [--class serif] [--roles display,text] [--note "..."]\n       node tools/fetch-fonts.mjs --curated [--force]');
    process.exit(1);
  }
  try {
    const e = await fetchFamily(o.family, o);
    await upsert(e);
    console.log('ok', o.family, '->', e.files.map((f) => f.file).join(', '));
  } catch (e) {
    console.error('Could not fetch', o.family + ':', e.message);
    process.exit(1);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) main();
