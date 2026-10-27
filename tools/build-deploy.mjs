// Builds the static folder that Vercel (or any static host) serves.
//   deploy/index.html          the showcase of every homepage
//   deploy/<id>/               each site's dist/ folder, e.g. deploy/roofer-A/index.html
//   deploy/shots/<id>-*.jpg    showcase screenshots
//   deploy/fonts/              the showcase's two fonts
//   deploy/robots.txt, 404.html
// Uses only Node built-ins, so the host needs no npm install.
// Usage: node tools/build-deploy.mjs [outDir]   (default: deploy)
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync, cpSync, statSync } from 'fs';
import { join, resolve, relative } from 'path';
import { execFileSync } from 'child_process';

const ROOT = process.cwd();
const OUT = process.argv[2] || 'deploy';
const outAbs = resolve(ROOT, OUT);
if (relative(ROOT, outAbs).startsWith('..') || outAbs === ROOT) throw new Error(`refusing to write outside the repo: ${OUT}`);
// Nothing is deleted: files are copied over in place. On Vercel the checkout is fresh, so deploy/ starts empty.
mkdirSync(join(outAbs, 'shots'), { recursive: true });
mkdirSync(join(outAbs, 'fonts'), { recursive: true });

let sites = 0, shots = 0, bytes = 0;
const problems = [];
const size = p => { let n = 0; for (const e of readdirSync(p, { withFileTypes: true })) n += e.isDirectory() ? size(join(p, e.name)) : statSync(join(p, e.name)).size; return n; };

for (const trade of readdirSync(join(ROOT, 'sites')).sort()) {
  for (const dir of ['A', 'B', 'C']) {
    const base = join(ROOT, 'sites', trade, dir);
    if (!existsSync(join(base, 'site.json'))) continue;
    const site = JSON.parse(readFileSync(join(base, 'site.json'), 'utf8'));
    if (!existsSync(join(base, 'dist/index.html'))) { problems.push(`${site.id}: no dist/index.html`); continue; }
    if (site.stage !== 'done') problems.push(`${site.id}: stage is "${site.stage}", published anyway`);
    const html = readFileSync(join(base, 'dist/index.html'), 'utf8');
    if (!/<meta name="robots" content="noindex/i.test(html)) problems.push(`${site.id}: missing noindex meta`);
    if (/\{\{\s*biz\./.test(html)) problems.push(`${site.id}: unrendered {{biz.*}} token in dist`);
    const mediaDir = join(base, 'dist/media');
    if (existsSync(mediaDir)) {
      const stubs = readdirSync(mediaDir).filter(f => /\.(jpe?g|webp|png|avif)$/i.test(f) && statSync(join(mediaDir, f)).size < 2048);
      if (stubs.length) problems.push(`${site.id}: ${stubs.length} placeholder photo(s) under 2 KB in dist/media (e.g. ${stubs[0]})`);
    }
    cpSync(join(base, 'dist'), join(outAbs, site.id), { recursive: true });
    bytes += size(join(base, 'dist'));
    sites++;
    for (const [f, tag] of [['1440-first.jpg', 'desk'], ['390-first.jpg', 'phone']]) {
      const src = join(base, 'qa/screens', f);
      if (existsSync(src)) { cpSync(src, join(outAbs, 'shots', `${site.id}-${tag}.jpg`)); shots++; }
    }
  }
}

// Same font lookup as tools/build-showcase.mjs.
for (const fam of ['instrument-sans', 'dm-mono', 'jetbrains-mono']) {
  const d = join(ROOT, 'assets/fonts', fam);
  if (!existsSync(d)) continue;
  const f = readdirSync(d).find(x => x.endsWith('normal.woff2'));
  if (f) cpSync(join(d, f), join(outAbs, 'fonts', `${fam}-${f}`));
}

execFileSync(process.execPath, [join(ROOT, 'tools/build-showcase.mjs'), '--deploy', OUT], { cwd: ROOT, stdio: 'inherit' });

// Demo sites are fictional: keep every page out of search engines (docs/DEMO-RULES.md).
writeFileSync(join(outAbs, 'robots.txt'), 'User-agent: *\nDisallow: /\n');

writeFileSync(join(outAbs, '404.html'), `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow"><title>Page not found</title>
<style>
:root{--bg:#f5f3ee;--ink:#17181a;--muted:#5d6066;--accent:#1f5f4a;--accent-ink:#fff}
@media (prefers-color-scheme:dark){:root{--bg:#141517;--ink:#ecebe7;--muted:#a3a5aa;--accent:#6cc4a1;--accent-ink:#0d1f18}}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:var(--ink);font:16px/1.55 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;padding:24px;box-sizing:border-box}
main{max-width:34rem;text-align:center}h1{font-size:clamp(28px,6vw,44px);line-height:1.1;margin:0 0 12px}p{color:var(--muted);margin:0 0 24px}
a{display:inline-flex;align-items:center;min-height:44px;padding:0 18px;border-radius:10px;background:var(--accent);color:var(--accent-ink);text-decoration:none;font-weight:600}
</style></head>
<body><main><h1>That page isn't here</h1><p>Every demo is a single homepage. Pick one from the library.</p><a href="/">Back to the library</a></main></body></html>
`);

const mb = n => (n / 1048576).toFixed(1) + ' MB';
console.log(`${OUT}/: ${sites} sites (${mb(bytes)}), ${shots} screenshots, total ${mb(size(outAbs))}`);
if (problems.length) { console.log('Notes:'); problems.forEach(p => console.log('  - ' + p)); }
if (problems.some(p => /noindex|token/.test(p))) process.exit(1);
