#!/usr/bin/env node
/* Builds one themed chat widget per built site.
   Reads: sites/<trade>/<dir>/{plan/concept.json, src/style.css, facts.json, dist/index.html}
   Writes: widgets/chat/themes/<id>/{theme.css, config.js, embed.html, preview.html}
           widgets/chat/fonts/<slug>/*.woff2, widgets/chat/themes/<id>/fonts.css
           widgets/chat/index.html (gallery), widgets/chat/qa/contrast.json
   Usage: node widgets/chat/tools/build.mjs [id ...]      (no ids = every built site) */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const W = path.resolve(HERE, '..');
const ROOT = path.resolve(W, '..', '..');
const catalog = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/fonts-catalog.json'), 'utf8')).fonts;
const only = process.argv.slice(2);

/* ---------- colour ---------- */
const hex = h => { h = h.replace('#', ''); if (h.length === 3) h = [...h].map(c => c + c).join(''); return [0, 2, 4].map(i => parseInt(h.slice(i, i + 2), 16)); };
const toHex = rgb => '#' + rgb.map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
const mix = (a, b, t) => toHex(hex(a).map((v, i) => v + (hex(b)[i] - v) * t));
const lum = h => { const [r, g, b] = hex(h).map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const cr = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
const isDark = h => lum(h) < 0.18;
/* push fg toward black or white (whichever helps) until it reaches the ratio against bg */
function ensure(fg, bg, ratio = 4.5) {
  if (cr(fg, bg) >= ratio) return fg;
  const target = isDark(bg) ? '#ffffff' : '#000000';
  for (let t = 0.05; t <= 1.0001; t += 0.05) { const c = mix(fg, target, t); if (cr(c, bg) >= ratio) return c; }
  return target;
}
const best = (bg, ...opts) => opts.reduce((a, b) => (cr(b, bg) > cr(a, bg) ? b : a));
const rgba = (h, a) => `rgba(${hex(h).join(',')},${a})`;

/* ---------- site discovery ---------- */
function sites() {
  const out = [];
  for (const t of fs.readdirSync(path.join(ROOT, 'sites'))) {
    const td = path.join(ROOT, 'sites', t); if (!fs.statSync(td).isDirectory()) continue;
    for (const v of fs.readdirSync(td)) {
      const d = path.join(td, v);
      if (!fs.existsSync(path.join(d, 'dist/index.html')) || !fs.existsSync(path.join(d, 'plan/concept.json'))) continue;
      const id = `${t}-${v}`; if (only.length && !only.includes(id)) continue;
      out.push({ id, trade: t, dir: v, d });
    }
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

/* ---------- reading the site's design ---------- */
function radius(css) {
  const root = {}; for (const m of css.matchAll(/(--[\w-]+)\s*:\s*([^;}]+)[;}]/g)) if (!(m[1] in root)) root[m[1]] = m[2].trim();
  const resolve = v => { for (let i = 0; i < 6 && /var\(/.test(v); i++) v = v.replace(/var\((--[\w-]+)(?:,\s*([^)]*))?\)/, (_, n, fb) => root[n] || fb || '0'); return v.trim(); };
  const px = v => /999|9999|100vmax|100vh/.test(v) ? 999 : /rem/.test(v) ? parseFloat(v) * 16 : parseFloat(v);
  // the site's corner language = its most used single border-radius (circles and per-corner values ignored)
  const tally = {};
  for (const m of css.matchAll(/border-radius\s*:\s*([^;}]+)/g)) {
    const v = resolve(m[1]); if (/%|inherit|\s/.test(v)) continue;
    const n = px(v); if (!isNaN(n)) tally[n] = (tally[n] || 0) + 1;
  }
  const top = Object.entries(tally).sort((x, y) => y[1] - x[1])[0];
  return top ? +top[0] : 0;
}
const fontOf = fam => fam ? catalog.find(f => f.family.toLowerCase() === String(fam).toLowerCase()) : null;
const MOTIFS = [
  ['tape', /tape/], ['stamp', /stamp|plate|plaque|mark/], ['dial', /dial|ring|clock|stopwatch|winding|degree/],
  ['ticket', /receipt|ticket|tag|card|punch|carbon|weigh|tint|order/], ['layers', /layer|strata|stack|cross-section|band|contour|sequence|schedule|stripe/],
  ['grid', /grid|panel|diagram|plan|bond/], ['ruler', /rule|tick|gauge|scale|rail|odometer|thermometer|pole|kerf|string|track|line/]
];
const motifOf = name => { const n = String(name || '').toLowerCase(); for (const [m, rx] of MOTIFS) if (rx.test(n)) return m; return 'ruler'; };
const TZ = { 'America/New_York': 'Eastern time', 'America/Detroit': 'Eastern time', 'America/Indiana/Indianapolis': 'Eastern time', 'America/Kentucky/Louisville': 'Eastern time', 'America/Chicago': 'Central time', 'America/Denver': 'Mountain time', 'America/Boise': 'Mountain time', 'America/Phoenix': 'Arizona time', 'America/Los_Angeles': 'Pacific time', 'America/Anchorage': 'Alaska time' };

function anchors(html) {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]));
  const pick = list => list.find(i => ids.has(i)) || null;
  return { contact: pick(['contact', 'quote', 'estimate', 'book', 'booking', 'request', 'form', 'call']), prices: pick(['prices', 'pricing', 'price', 'estimator', 'cost', 'costs', 'rates']) };
}

/* ---------- theme ---------- */
function theme(s, concept, css) {
  const p = concept.palette, tone = concept.tone || 'light-led';
  const ink = p.ink, paper = p.paper, accent = p.accent, deep = p.deep || ink, signal = p.signal || accent;
  const onAccent = best(accent, '#ffffff', ink, paper, '#000000');
  const v = {};
  if (tone === 'dark-led') {
    const surf = isDark(deep) ? deep : ink;
    Object.assign(v, {
      surface: surf, 'surface-ink': ensure(paper, surf, 7), muted: ensure(mix(paper, surf, 0.3), surf), rule: mix(paper, surf, 0.82),
      'head-bg': mix(surf, '#000000', 0.28), 'bot-bg': mix(surf, paper, 0.13), 'me-bg': accent, 'me-ink': onAccent,
      'launch-bg': accent, 'launch-ink': onAccent
    });
    v['head-ink'] = ensure(paper, v['head-bg'], 7); v['head-muted'] = ensure(mix(paper, v['head-bg'], 0.3), v['head-bg']); v['head-rule'] = mix(paper, v['head-bg'], 0.8);
    v['bot-ink'] = ensure(paper, v['bot-bg'], 7);
  } else if (tone === 'color-led') {
    Object.assign(v, {
      surface: paper, 'surface-ink': ensure(ink, paper, 7), muted: ensure(mix(ink, paper, 0.32), paper), rule: mix(ink, paper, 0.84),
      'head-bg': accent, 'head-ink': onAccent, 'bot-bg': mix(paper, ink, 0.06), 'me-bg': deep, 'me-ink': ensure(paper, deep, 4.5),
      'launch-bg': accent, 'launch-ink': onAccent
    });
    v['head-muted'] = ensure(mix(onAccent, accent, 0.22), accent); v['head-rule'] = mix(onAccent, accent, 0.72);
    v['bot-ink'] = ensure(ink, v['bot-bg'], 7);
  } else {
    const lb = cr(accent, paper) >= 3 ? accent : deep;
    Object.assign(v, {
      surface: paper, 'surface-ink': ensure(ink, paper, 7), muted: ensure(mix(ink, paper, 0.32), paper), rule: mix(ink, paper, 0.84),
      'head-bg': mix(paper, ink, 0.035), 'bot-bg': mix(paper, ink, 0.06), 'me-bg': ink, 'me-ink': ensure(paper, ink, 4.5),
      'launch-bg': lb, 'launch-ink': best(lb, '#ffffff', ink, paper)
    });
    v['head-ink'] = ensure(ink, v['head-bg'], 7); v['head-muted'] = ensure(mix(ink, v['head-bg'], 0.32), v['head-bg']); v['head-rule'] = mix(ink, v['head-bg'], 0.84);
    v['bot-ink'] = ensure(ink, v['bot-bg'], 7);
  }
  v.accent = accent; v['on-accent'] = onAccent;
  v['accent-ink'] = ensure(accent, v.surface, 4.5);
  v.signal = signal; v.mid = p.mid || mix(v['surface-ink'], v.surface, 0.5);
  v.focus = cr(signal, v.surface) >= 3 ? signal : ensure(accent, v.surface, 3);
  v.ok = ensure(isDark(v.surface) ? '#5fc48a' : '#2f7d4f', v.surface, 4.5);

  // type
  const fd = fontOf(concept.fonts.display), ft = fontOf(concept.fonts.text), fa = fontOf(concept.fonts.accent);
  const stack = (f, fb) => f ? `"${f.family}", ${fb}` : fb;
  const fbOf = f => !f ? 'system-ui, sans-serif' : f.class === 'serif' || f.class === 'slab' ? 'Georgia, serif' : f.class === 'mono' ? 'ui-monospace, monospace' : 'system-ui, sans-serif';
  v['f-display'] = stack(fd, fbOf(fd)); v['f-text'] = stack(ft, fbOf(ft));
  const metaF = fa && fa.class === 'mono' ? fa : ft; v['f-meta'] = stack(metaF, fbOf(metaF));
  const cond = fd && (fd.class === 'condensed' || /condensed|anton|bebas|oswald|league gothic|compressed|narrow/i.test(fd.family));
  const dW = fd ? fd.files.map(x => +x.weight).filter(Boolean) : [700];
  const want = cond ? 700 : fd && (fd.class === 'serif' || fd.class === 'display') ? 600 : 700;
  v['display-weight'] = dW.reduce((a, b) => Math.abs(b - want) < Math.abs(a - want) ? b : a, dW[0] || 700);
  v['display-case'] = cond ? 'uppercase' : 'none'; v['display-track'] = cond ? '0.02em' : fd && fd.class === 'serif' ? '-0.005em' : '-0.01em';
  v['display-size'] = cond ? '1.375rem' : fd && fd.class === 'script' ? '1.5rem' : '1.1875rem';
  v['meta-case'] = 'uppercase'; v['meta-track'] = metaF && metaF.class === 'mono' ? '0.04em' : '0.08em'; v['meta-size'] = metaF && metaF.class === 'mono' ? '0.6875rem' : '0.6875rem';

  // shape
  const r = radius(css); const shape = r >= 999 ? 'round' : r <= 3 ? 'sharp' : 'soft';
  const rp = Math.min(r, 16);
  Object.assign(v, shape === 'sharp' ? { r: r + 'px', 'r-bubble': Math.max(r, 2) + 'px', 'r-btn': r + 'px', 'r-launch': r + 'px', 'r-panel': r + 'px' }
    : shape === 'round' ? { r: '10px', 'r-bubble': '18px', 'r-btn': '999px', 'r-launch': '999px', 'r-panel': '20px' }
    : { r: rp + 'px', 'r-bubble': Math.max(rp + 4, 10) + 'px', 'r-btn': rp + 'px', 'r-launch': '999px', 'r-panel': Math.max(rp + 4, 10) + 'px' });
  // repair any pair that still misses 4.5:1 by moving the background, not the brand ink
  for (const [f, bg] of [['launch-ink', 'launch-bg'], ['head-ink', 'head-bg'], ['me-ink', 'me-bg'], ['on-accent', 'accent']]) if (cr(v[f], v[bg]) < 4.5) v[bg] = ensure(v[bg], v[f], 4.5);
  const shadowC = isDark(v.surface) ? '#000000' : deep;
  v.shadow = `0 24px 60px -20px ${rgba(shadowC, isDark(v.surface) ? 0.7 : 0.42)}, 0 2px 8px ${rgba(shadowC, 0.14)}`;
  return { vars: v, tone, shape, motif: motifOf(concept.signature && concept.signature.name), fonts: [fd, ft, metaF].filter(Boolean) };
}

/* ---------- contrast QA ---------- */
function qa(v) {
  const pairs = [['surface-ink', 'surface', 4.5], ['muted', 'surface', 4.5], ['head-ink', 'head-bg', 4.5], ['head-muted', 'head-bg', 4.5], ['bot-ink', 'bot-bg', 4.5], ['me-ink', 'me-bg', 4.5], ['launch-ink', 'launch-bg', 4.5], ['on-accent', 'accent', 4.5], ['accent-ink', 'surface', 4.5], ['focus', 'surface', 3]];
  return pairs.map(([f, b, need]) => ({ fg: f, bg: b, ratio: +cr(v[f], v[b]).toFixed(2), need, ok: cr(v[f], v[b]) >= need }));
}

/* ---------- copy ---------- */
function copyOf(f, a) {
  const b = f.biz;
  return {
    launcher: 'Ask us', teaser: `Hi, need a price range or want to check if we cover your street? Ask me here.`,
    placeholder: 'Ask about prices, hours, your ZIP…',
    footnote: 'Sample assistant on a demo site. Answers come from this page only.',
    formLink: 'Use the full form',
    greeting: `Hi, I am the ${b.short} website assistant. I can answer the quick stuff: prices, hours, areas, and I can start a quote for you.`,
    greeting2: 'What can I help with?',
    chips: ['Get a quote', a.prices || f.proof.prices.length ? 'Prices' : 'Services', 'Do you serve my area?', 'Hours', 'Talk to a person']
  };
}

/* ---------- fonts ---------- */
function fontsCss(fonts, rel) {
  const seen = new Set(); let out = '';
  for (const f of fonts) {
    if (seen.has(f.slug)) continue; seen.add(f.slug);
    for (const file of f.files) {
      const src = path.join(ROOT, file.file), name = path.basename(file.file), dst = path.join(W, 'fonts', f.slug, name);
      if (!fs.existsSync(src)) continue;
      fs.mkdirSync(path.dirname(dst), { recursive: true }); if (!fs.existsSync(dst)) fs.copyFileSync(src, dst);
      const w = file.weight && /^\d+ \d+$/.test(file.weight) ? file.weight : file.weight || '400';
      out += `@font-face{font-family:"${f.family}";font-style:${file.style || 'normal'};font-weight:${w};font-display:swap;src:url("${rel}fonts/${f.slug}/${name}") format("woff2")}\n`;
    }
  }
  return out;
}

/* ---------- main ---------- */
const report = {}; const gallery = [];
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
for (const s of sites()) {
  const concept = JSON.parse(fs.readFileSync(path.join(s.d, 'plan/concept.json'), 'utf8'));
  const facts = JSON.parse(fs.readFileSync(path.join(s.d, 'facts.json'), 'utf8'));
  const css = fs.existsSync(path.join(s.d, 'src/style.css')) ? fs.readFileSync(path.join(s.d, 'src/style.css'), 'utf8') : '';
  const html = fs.readFileSync(path.join(s.d, 'dist/index.html'), 'utf8');
  const th = theme(s, concept, css), a = anchors(html);
  const out = path.join(W, 'themes', s.id); fs.mkdirSync(out, { recursive: true });

  const sel = `.swc[data-site="${s.id}"]`;
  const vars = Object.entries(th.vars).map(([k, val]) => `  --swc-${k}: ${val};`).join('\n');
  fs.writeFileSync(path.join(out, 'theme.css'), `/* ${s.id}: ${concept.signature?.name || ''} | ${th.tone}, ${th.motif}, ${th.shape}. Generated by tools/build.mjs, do not edit by hand. */\n${sel} {\n${vars}\n}\n`);
  fs.writeFileSync(path.join(out, 'fonts.css'), `/* Fonts for ${s.id}. Paths are relative to this file. */\n` + fontsCss(th.fonts, '../../'));

  const b = facts.biz, rev = (facts.proof.reviews || [])[0];
  const cfg = {
    id: s.id, side: 'right', teaserDelay: 9000,
    theme: { tone: th.tone, motif: th.motif, shape: th.shape, dial: th.motif === 'dial' ? '72%' : undefined },
    biz: { ...b, timezoneLabel: TZ[b.timezone] || 'local time' },
    services: facts.services.map(x => ({ name: x.name, short: x.short || x.name, blurb: x.blurb })),
    prices: facts.proof.prices || [],
    proof: { rating: facts.proof.rating, reviewCount: facts.proof.reviewCount, years: facts.proof.years || null, license: facts.proof.license || null, insured: !!facts.proof.insured, guarantee: facts.proof.guarantee || null, review: rev ? { text: rev.text, name: rev.name, town: rev.town } : null },
    anchors: a, copy: copyOf(facts, a)
  };
  fs.writeFileSync(path.join(out, 'config.js'), `/* ${s.id} chat config, generated from sites/${s.trade}/${s.dir}/facts.json. Re-run tools/build.mjs after a reskin. */\nwindow.SiteChatConfig = ${JSON.stringify(cfg, null, 2)};\n`);

  const embed = `<!-- ${s.id} chat widget: paste before </body>. Copy the widgets/chat folder next to the page (or fix the paths). -->
<link rel="stylesheet" href="widgets/chat/themes/${s.id}/fonts.css">
<link rel="stylesheet" href="widgets/chat/core/chat-widget.css">
<link rel="stylesheet" href="widgets/chat/themes/${s.id}/theme.css">
<script src="widgets/chat/themes/${s.id}/config.js" defer></script>
<script src="widgets/chat/core/chat-widget.js" defer></script>
`;
  fs.writeFileSync(path.join(out, 'embed.html'), embed);

  // preview: the real built page, with the widget injected. <base> points at the dist folder.
  const toDist = `../../../../sites/${s.trade}/${s.dir}/dist/`, fromDist = `../../../../widgets/chat/`;
  const inject = `
<link rel="stylesheet" href="${fromDist}themes/${s.id}/fonts.css">
<link rel="stylesheet" href="${fromDist}core/chat-widget.css">
<link rel="stylesheet" href="${fromDist}themes/${s.id}/theme.css">
<script src="${fromDist}themes/${s.id}/config.js" defer></script>
<script src="${fromDist}core/chat-widget.js" defer></script>
<script>/* preview only: keep #anchors on this page despite <base> */document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute('href').slice(1),t=id&&document.getElementById(id);e.preventDefault();if(t){t.scrollIntoView({behavior:'smooth'});history.replaceState(null,'','#'+id);}},true);</script>
`;
  let page = html.replace(/<head([^>]*)>/i, `<head$1>\n<base href="${toDist}">`);
  page = page.replace(/<\/body>/i, inject + '</body>');
  fs.writeFileSync(path.join(out, 'preview.html'), page);

  const q = qa(th.vars); report[s.id] = { tone: th.tone, motif: th.motif, shape: th.shape, anchors: a, pass: q.every(x => x.ok), pairs: q };
  gallery.push({ id: s.id, name: b.name, city: `${b.city}, ${b.state}`, sig: concept.signature?.name || '', ...th, v: th.vars });
}

fs.mkdirSync(path.join(W, 'qa'), { recursive: true });
fs.writeFileSync(path.join(W, 'qa/contrast.json'), JSON.stringify(report, null, 2));

if (!only.length) {
  const cards = gallery.map(g => `<li class="card"><a href="themes/${g.id}/preview.html">
  <span class="sw">${['surface', 'head-bg', 'accent', 'me-bg', 'signal'].map(k => `<i style="background:${g.v[k]}"></i>`).join('')}</span>
  <b>${esc(g.id)}</b><span>${esc(g.name)}</span><small>${esc(g.city)} · ${g.tone} · ${g.motif} · ${g.shape}</small></a></li>`).join('\n');
  fs.writeFileSync(path.join(W, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Chat Widget Library</title>
<style>:root{--bg:#f6f5f2;--ink:#1a1916;--mut:#5d5a53;--line:#dedad2;--card:#fff}@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#141412;--ink:#f1efe9;--mut:#a9a59c;--line:#2e2d29;--card:#1c1b19}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui,sans-serif;padding:32px 16px}h1{font-size:28px;margin:0 0 6px}p{color:var(--mut);margin:0 0 24px;max-width:70ch}
ul{list-style:none;padding:0;margin:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fill,minmax(240px,1fr))}.card a{display:grid;gap:2px;padding:14px;border:1px solid var(--line);border-radius:10px;background:var(--card);color:inherit;text-decoration:none}.card a:hover{border-color:var(--mut)}
.sw{display:flex;margin-bottom:8px}.sw i{flex:1;height:28px;border:1px solid rgba(128,128,128,.25)}.sw i:first-child{border-radius:6px 0 0 6px}.sw i:last-child{border-radius:0 6px 6px 0}b{font-size:15px}small{color:var(--mut)}</style></head>
<body><h1>Chat widget library</h1><p>${gallery.length} widgets, one per built site. Each card opens the real homepage with its widget injected. Open it with a local server from the repo root (e.g. <code>npx serve .</code>), then visit <code>/widgets/chat/</code>.</p><ul>
${cards}
</ul></body></html>
`);
}
const fails = Object.entries(report).filter(([, r]) => !r.pass);
console.log(`built ${gallery.length} widgets; contrast failures: ${fails.length}`);
for (const [id, r] of fails) console.log(' ', id, r.pairs.filter(p => !p.ok).map(p => `${p.fg}/${p.bg}=${p.ratio}`).join(' '));
const tally = k => gallery.reduce((o, g) => (o[g[k]] = (o[g[k]] || 0) + 1, o), {});
console.log('motifs', tally('motif'), 'shapes', tally('shape'), 'tones', tally('tone'));
