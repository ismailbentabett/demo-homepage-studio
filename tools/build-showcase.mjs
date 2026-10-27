// Builds library/index.html: one readable page that shows every delivered homepage,
// grouped by trade, with screenshots, score, concept and a link to open the site.
// Usage: node tools/build-showcase.mjs            -> library/index.html (links into the repo folders)
//        node tools/build-showcase.mjs --deploy D  -> D/index.html (links to /<id>/, shots/ and fonts/ inside D;
//                                                     tools/build-deploy.mjs copies those files)
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const ROOT = process.cwd();
const di = process.argv.indexOf('--deploy');
const DEPLOY = di > -1 ? (process.argv[di + 1] || 'deploy') : null;
const read = p => JSON.parse(readFileSync(join(ROOT, p), 'utf8'));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const trades = Object.fromEntries(read('data/demo-trades.json').map(t => [t.slug, t.label]));
const firstSentence = s => {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  const m = t.match(/^.{40,}?[.:;](\s|$)/);
  const out = (m ? m[0] : t).trim().replace(/[:;]$/, '.');
  return out.length > 190 ? out.slice(0, 187).replace(/\s\S*$/, '') + '…' : out;
};

const sites = [];
for (const trade of readdirSync(join(ROOT, 'sites')).sort()) {
  for (const dir of ['A', 'B', 'C']) {
    const base = `sites/${trade}/${dir}`;
    if (!existsSync(join(ROOT, base, 'site.json')) || !existsSync(join(ROOT, base, 'dist/index.html'))) continue;
    const site = read(`${base}/site.json`);
    const facts = existsSync(join(ROOT, base, 'facts.json')) ? read(`${base}/facts.json`) : {};
    const concept = existsSync(join(ROOT, base, 'plan/concept.json')) ? read(`${base}/plan/concept.json`) : {};
    const score = site.deliveredScore ?? site.best?.weighted ?? null;
    const shot = (f, tag) => !existsSync(join(ROOT, base, 'qa/screens', f)) ? null
      : DEPLOY ? `shots/${site.id}-${tag}.jpg` : `../${base}/qa/screens/${f}`;
    const pal = concept.palette || {};
    sites.push({
      id: site.id, trade, dir,
      tradeLabel: trades[trade] || facts.biz?.tradeLabel || trade,
      name: facts.biz?.name || site.id,
      city: [facts.biz?.city, facts.biz?.state].filter(Boolean).join(', '),
      stage: site.stage, score,
      thesis: firstSentence(concept.thesis),
      signature: concept.signature?.name || '',
      fonts: [concept.fonts?.display, concept.fonts?.text].filter(Boolean),
      paletteName: pal.family || '',
      swatches: ['paper', 'ink', 'deep', 'accent', 'signal'].map(k => pal[k]).filter(c => /^#[0-9a-f]{3,8}$/i.test(c || '')),
      tone: concept.tone || '',
      tools: concept.tools || [],
      href: DEPLOY ? `${site.id}/` : `../${base}/dist/index.html`,
      desk: shot('1440-first.jpg', 'desk') || (!DEPLOY && existsSync(join(ROOT, 'library/cards', `${site.id}.jpg`)) ? `cards/${site.id}.jpg` : null),
      phone: shot('390-first.jpg', 'phone'),
    });
  }
}

const done = sites.filter(s => s.stage === 'done');
const avg = done.length ? (done.reduce((a, s) => a + (s.score || 0), 0) / done.length).toFixed(2) : '–';
const top = done.filter(s => s.score >= 9).length;
const groups = [...new Set(sites.map(s => s.trade))].map(t => ({ trade: t, label: sites.find(s => s.trade === t).tradeLabel, items: sites.filter(s => s.trade === t) }));

const fontFile = fam => {
  const d = join(ROOT, 'assets/fonts', fam);
  if (!existsSync(d)) return null;
  const f = readdirSync(d).find(x => x.endsWith('normal.woff2'));
  return f ? (DEPLOY ? `fonts/${fam}-${f}` : `../assets/fonts/${fam}/${f}`) : null;
};
const sans = fontFile('instrument-sans'), mono = fontFile('dm-mono') || fontFile('jetbrains-mono');

const badge = s => s.stage !== 'done' ? `<span class="badge badge--wip">In progress</span>`
  : s.score >= 9 ? `<span class="badge badge--top" title="Passed the 9.0 bar">${s.score.toFixed(2)}</span>`
  : `<span class="badge" title="Passed at the round cap (8.8–8.99)">${(s.score ?? 0).toFixed(2)}</span>`;

const card = s => `
      <article class="card" data-trade="${esc(s.trade)}" data-score="${s.score ?? 0}" data-search="${esc([s.name, s.city, s.tradeLabel, s.signature, s.paletteName, ...s.fonts, s.id].join(' ').toLowerCase())}">
        <a class="shots" href="${esc(s.href)}" target="_blank" rel="noopener" aria-label="Open ${esc(s.name)} homepage in a new tab">
          ${s.desk ? `<img class="shot-desk" src="${esc(s.desk)}" alt="" loading="lazy" decoding="async" width="1440" height="900">` : '<span class="shot-missing">No screenshot</span>'}
          ${s.phone ? `<img class="shot-phone" src="${esc(s.phone)}" alt="" loading="lazy" decoding="async" width="390" height="844">` : ''}
        </a>
        <div class="body">
          <div class="row">
            <span class="variant">${esc(s.dir)}</span>
            <h3>${esc(s.name)}</h3>
            ${badge(s)}
          </div>
          <p class="city">${esc(s.tradeLabel)} · ${esc(s.city)}</p>
          ${s.signature ? `<p class="sig"><span class="label">Signature</span> ${esc(s.signature)}</p>` : ''}
          ${s.thesis ? `<p class="thesis">${esc(s.thesis)}</p>` : ''}
          <dl class="meta">
            ${s.fonts.length ? `<div><dt>Type</dt><dd>${esc(s.fonts.join(' + '))}</dd></div>` : ''}
            ${s.swatches.length ? `<div><dt>Palette</dt><dd><span class="swatches" title="${esc(s.paletteName)}">${s.swatches.map(c => `<i style="background:${c}"></i>`).join('')}</span></dd></div>` : ''}
          </dl>
          <div class="actions">
            <a class="btn" href="${esc(s.href)}" target="_blank" rel="noopener">Open site<span class="sr"> for ${esc(s.name)}</span>&nbsp;<span aria-hidden="true">↗</span></a>
            <span class="id">${esc(s.id)}</span>
          </div>
        </div>
      </article>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Homepage Library</title>
${DEPLOY ? '<meta name="robots" content="noindex, nofollow">' : ''}
<meta name="description" content="Every demo homepage in the studio, grouped by trade, with score, concept and a link to open it.">
<style>
${sans ? `@font-face{font-family:"Showcase Sans";src:url("${sans}") format("woff2");font-weight:400 700;font-display:swap}` : ''}
${mono ? `@font-face{font-family:"Showcase Mono";src:url("${mono}") format("woff2");font-weight:400 500;font-display:swap}` : ''}
:root{
  --bg:#f5f3ee;--surface:#fffefb;--ink:#17181a;--muted:#5d6066;--line:#e2ded4;--chip:#ebe7dd;
  --accent:#1f5f4a;--accent-ink:#fff;--gold:#8a5a00;--gold-bg:#fbefd5;--shadow:0 1px 2px rgba(20,20,20,.05),0 8px 24px -12px rgba(20,20,20,.18);
  --sans:"Showcase Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;
  --mono:"Showcase Mono",ui-monospace,"SFMono-Regular",Consolas,monospace;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --bg:#141517;--surface:#1c1d20;--ink:#ecebe7;--muted:#a3a5aa;--line:#2e3034;--chip:#26282c;
  --accent:#6cc4a1;--accent-ink:#0d1f18;--gold:#f1c46b;--gold-bg:#3a2e14;--shadow:0 1px 2px rgba(0,0,0,.3),0 10px 30px -14px rgba(0,0,0,.6);
}}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:120px}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 var(--sans);-webkit-font-smoothing:antialiased}
a{color:inherit}
.wrap{max-width:1320px;margin:0 auto;padding:0 24px}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:6px}

header.top{padding:56px 0 28px}
.eyebrow{font:500 12px/1 var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin:0 0 14px}
h1{font-size:clamp(34px,5vw,56px);line-height:1.02;letter-spacing:-.025em;margin:0 0 14px;font-weight:700;max-width:16ch}
.lede{font-size:18px;color:var(--muted);max-width:60ch;margin:0}
.stats{display:flex;flex-wrap:wrap;gap:12px;margin:28px 0 0;padding:0;list-style:none}
.stats li{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:12px 16px;min-width:130px}
.stats b{display:block;font-size:24px;line-height:1.1;letter-spacing:-.01em}
.stats span{font-size:13px;color:var(--muted)}

.bar{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.bar .wrap{display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center;padding-top:12px;padding-bottom:12px}
.search{flex:1 1 260px;display:flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--line);border-radius:10px;padding:0 12px;min-height:44px}
.search input{flex:1;border:0;background:transparent;font:inherit;color:inherit;min-height:42px;outline:none}
.search:focus-within{border-color:var(--accent)}
.controls{display:flex;gap:8px;flex-wrap:wrap}
.controls select,.controls button{font:inherit;font-size:14px;color:inherit;background:var(--surface);border:1px solid var(--line);border-radius:10px;min-height:44px;padding:0 12px;cursor:pointer}
.controls button[aria-pressed="true"]{background:var(--ink);color:var(--bg);border-color:var(--ink)}
.chips{display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;width:100%;padding-bottom:2px}
.chips::-webkit-scrollbar{display:none}
.chips[hidden],#grouped[hidden]{display:none}
.chips a{flex:none;text-decoration:none;font-size:13px;padding:7px 12px;border-radius:999px;background:var(--chip);color:var(--ink);white-space:nowrap}
.chips a:hover{background:var(--ink);color:var(--bg)}

main{padding:12px 0 80px}
section.trade{padding-top:44px}
section.trade[hidden]{display:none}
.trade-head{display:flex;align-items:baseline;gap:12px;margin:0 0 18px;border-bottom:1px solid var(--line);padding-bottom:12px}
.trade-head h2{margin:0;font-size:26px;letter-spacing:-.015em}
.trade-head span{font:500 12px/1 var(--mono);color:var(--muted);letter-spacing:.06em}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}
@media (max-width:1080px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:680px){.grid{grid-template-columns:1fr}.bar{position:static}.wrap{padding:0 16px}header.top{padding-top:36px}}

.card{background:var(--surface);border:1px solid var(--line);border-radius:16px;overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .2s ease,box-shadow .2s ease}
.card:hover{transform:translateY(-2px)}
.card[hidden]{display:none}
.shots{position:relative;display:block;aspect-ratio:16/10;background:var(--chip);overflow:hidden;border-bottom:1px solid var(--line)}
.shot-desk{width:100%;height:100%;object-fit:cover;object-position:top;display:block;transition:transform .5s ease}
.card:hover .shot-desk{transform:scale(1.025)}
.shot-phone{position:absolute;right:14px;bottom:14px;width:19%;aspect-ratio:390/844;object-fit:cover;object-position:top;border-radius:12px;border:3px solid #111;box-shadow:0 12px 24px -8px rgba(0,0,0,.45);background:#111}
.shot-missing{display:grid;place-items:center;height:100%;color:var(--muted);font-size:14px}
.body{padding:16px 18px 18px;display:flex;flex-direction:column;gap:8px;flex:1}
.row{display:flex;align-items:center;gap:10px}
.variant{flex:none;display:grid;place-items:center;width:26px;height:26px;border-radius:7px;background:var(--ink);color:var(--bg);font:600 13px/1 var(--mono)}
.row h3{margin:0;font-size:18px;line-height:1.25;letter-spacing:-.01em;flex:1;min-width:0}
.badge{flex:none;font:500 13px/1 var(--mono);padding:6px 8px;border-radius:7px;background:var(--chip);color:var(--ink)}
.badge--top{background:var(--gold-bg);color:var(--gold)}
.badge--wip{background:transparent;border:1px dashed var(--line);color:var(--muted)}
.city{margin:-4px 0 0 36px;font-size:14px;color:var(--muted)}
.sig{margin:4px 0 0;font-size:14px;font-weight:600}
.label{font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.thesis{margin:0;font-size:14px;color:var(--muted)}
.meta{margin:4px 0 0;display:grid;gap:6px;font-size:13px}
.meta div{display:flex;gap:10px;align-items:center}
.meta dt{font:500 11px/1 var(--mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted);width:56px;flex:none}
.meta dd{margin:0}
.swatches{display:inline-flex}
.swatches i{width:20px;height:20px;border-radius:50%;border:2px solid var(--surface);margin-left:-5px;box-shadow:0 0 0 1px var(--line)}
.swatches i:first-child{margin-left:0}
.actions{margin-top:auto;padding-top:10px;display:flex;align-items:center;justify-content:space-between;gap:10px}
.btn{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:10px;background:var(--accent);color:var(--accent-ink);text-decoration:none;font-weight:600;font-size:15px}
.btn:hover{filter:brightness(1.08)}
.id{font:12px/1 var(--mono);color:var(--muted)}
.empty{padding:60px 0;text-align:center;color:var(--muted)}
footer{border-top:1px solid var(--line);padding:24px 0 40px;font-size:13px;color:var(--muted)}
</style>
</head>
<body>
<header class="top">
  <div class="wrap">
    <p class="eyebrow">Demo Homepage Studio</p>
    <h1>Homepage library</h1>
    <p class="lede">Every demo homepage, grouped by trade. Each trade has three different takes (A, B, C). Click a card to open the live page; the small phone shows how it looks on mobile.</p>
    <ul class="stats">
      <li><b>${done.length}</b><span>homepages delivered</span></li>
      <li><b>${groups.length}</b><span>trades</span></li>
      <li><b>${avg}</b><span>average score / 10</span></li>
      <li><b>${top}</b><span>scored 9.0 or higher</span></li>
    </ul>
  </div>
</header>

<div class="bar">
  <div class="wrap">
    <label class="search"><span aria-hidden="true">⌕</span><span class="sr">Search homepages</span>
      <input id="q" type="search" placeholder="Search by business, city, trade, font…" autocomplete="off"></label>
    <div class="controls">
      <label class="sr" for="sort">Sort</label>
      <select id="sort">
        <option value="trade">Group by trade</option>
        <option value="score">Highest score first</option>
      </select>
      <button id="topOnly" type="button" aria-pressed="false">9.0+ only</button>
    </div>
    <nav class="chips" aria-label="Jump to trade">
      ${groups.map(g => `<a href="#t-${esc(g.trade)}">${esc(g.label)}</a>`).join('')}
    </nav>
  </div>
</div>

<main class="wrap" id="main">
  <div id="grouped">
${groups.map(g => `    <section class="trade" id="t-${esc(g.trade)}" aria-labelledby="h-${esc(g.trade)}">
      <div class="trade-head"><h2 id="h-${esc(g.trade)}">${esc(g.label)}</h2><span>${g.items.length} HOMEPAGES</span></div>
      <div class="grid">${g.items.map(card).join('')}
      </div>
    </section>`).join('\n')}
  </div>
  <section class="trade" id="ranked" hidden aria-label="All homepages by score"><div class="grid"></div></section>
  <p class="empty" id="empty" hidden>No homepage matches that search.</p>
</main>

<footer><div class="wrap">Fictional businesses for sales demos. Built ${new Date().toISOString().slice(0, 10)}. Gold score = passed the 9.0 bar; grey = passed at the round cap (8.8–8.99).</div></footer>

<script>
(() => {
  const q = document.getElementById('q'), sort = document.getElementById('sort'), topBtn = document.getElementById('topOnly');
  const grouped = document.getElementById('grouped'), ranked = document.getElementById('ranked'), rankedGrid = ranked.querySelector('.grid');
  const empty = document.getElementById('empty'), chips = document.querySelector('.chips');
  const cards = [...grouped.querySelectorAll('.card')];
  const homes = new Map(cards.map(c => [c, c.parentElement]));
  function apply() {
    const term = q.value.trim().toLowerCase(), top = topBtn.getAttribute('aria-pressed') === 'true', byScore = sort.value === 'score';
    let shown = 0;
    for (const c of cards) {
      const ok = (!term || c.dataset.search.includes(term)) && (!top || +c.dataset.score >= 9);
      c.hidden = !ok; if (ok) shown++;
    }
    if (byScore) {
      [...cards].sort((a, b) => b.dataset.score - a.dataset.score).forEach(c => rankedGrid.appendChild(c));
    } else {
      cards.forEach(c => homes.get(c).appendChild(c));
    }
    grouped.hidden = byScore; ranked.hidden = !byScore; chips.hidden = byScore;
    grouped.querySelectorAll('section.trade').forEach(s => { s.hidden = !s.querySelector('.card:not([hidden])'); });
    empty.hidden = shown > 0;
  }
  q.addEventListener('input', apply);
  sort.addEventListener('change', apply);
  topBtn.addEventListener('click', () => { topBtn.setAttribute('aria-pressed', topBtn.getAttribute('aria-pressed') !== 'true'); apply(); });
})();
</script>
</body>
</html>
`;

const outDir = DEPLOY || 'library';
mkdirSync(join(ROOT, outDir), { recursive: true });
writeFileSync(join(ROOT, outDir, 'index.html'), html);
console.log(`${outDir}/index.html: ${sites.length} homepages, ${groups.length} trades, avg ${avg}`);
