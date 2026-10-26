// Captures the critic's evidence for one site and writes qa/render.json.
//   node tools/capture-screens.mjs <site-id>
// Shots: 1440/1024/390 first screen, 1440/390 full page, the same two full pages with
// reduced motion, and 1440 scroll frames at 25/50/75 %. It also measures sideways
// overflow at 390 and 320, page errors, and text left hidden under reduced motion.
import { chromium } from 'playwright';
import { mkdirSync, existsSync, readdirSync, unlinkSync, writeFileSync, readFileSync, statSync } from 'fs';
import { join, resolve, normalize, extname } from 'path';
import { createServer } from 'http';

const id = process.argv[2];
if (!id) { console.error('Usage: node capture-screens.mjs <site-id>'); process.exit(1); }

const [trade, dir] = id.split('-');
const distDir = resolve(`sites/${trade}/${dir}/dist`);
const qaDir = resolve(`sites/${trade}/${dir}/qa`);
const screensDir = join(qaDir, 'screens');

if (!existsSync(distDir)) { console.error(`dist/ not found at ${distDir}`); process.exit(1); }
mkdirSync(screensDir, { recursive: true });
// Old shots from earlier builds mislead the critic: start clean.
for (const f of readdirSync(screensDir)) if (/\.(png|jpe?g)$/i.test(f)) unlinkSync(join(screensDir, f));

// Serve dist over local HTTP: file:// blocks fonts (CORS) and gives false console errors.
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.avif': 'image/avif', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.webm': 'video/webm', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json' };
const server = createServer((req, res) => {
  const p = normalize(join(distDir, decodeURIComponent(req.url.split('?')[0]).replace(/\/$/, '/index.html')));
  if (!p.startsWith(distDir) || !existsSync(p) || !statSync(p).isFile()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'content-type': types[extname(p).toLowerCase()] || 'application/octet-stream' });
  res.end(readFileSync(p));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/index.html`;
const shots = [
  { name: '1440-first', width: 1440, height: 900 },
  { name: '1440-full', width: 1440, height: 900, fullPage: true },
  { name: '1024-first', width: 1024, height: 768 },
  { name: '390-first', width: 390, height: 844 },
  { name: '390-full', width: 390, height: 844, fullPage: true },
  { name: '1440-rm-full', width: 1440, height: 900, fullPage: true, rm: true },
  { name: '390-rm-full', width: 390, height: 844, fullPage: true, rm: true },
];

const errors = [];
const consoleErrors = [];
const overflow = {};
let hiddenUnderReducedMotion = [];
const files = [];

// Lazy content and scroll-triggered reveals: walk the page once before a full-page shot.
async function walk(page) {
  await page.evaluate(async () => {
    const step = innerHeight * 0.8;
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
    scrollTo(0, 0); await new Promise((r) => setTimeout(r, 300));
  });
}

async function open(browser, vp, rm) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, reducedMotion: rm ? 'reduce' : 'no-preference' });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push({ message: `page error at ${vp.width}${rm ? ' (reduced motion)' : ''}: ${e.message}` }));
  page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 200)); });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  return { ctx, page };
}

const measureOverflow = () => {
  const w = document.documentElement.clientWidth;
  const sw = document.documentElement.scrollWidth;
  const wide = [];
  if (sw > w) for (const el of document.querySelectorAll('body *')) {
    const r = el.getBoundingClientRect();
    if (r.right > w + 1 && r.width > 0 && getComputedStyle(el).position !== 'fixed') {
      wide.push(`${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : ''} (right ${Math.round(r.right)})`);
      if (wide.length >= 5) break;
    }
  }
  return { viewport: w, scrollWidth: sw, wide };
};

const browser = await chromium.launch();
try {
  for (const vp of shots) {
    const { ctx, page } = await open(browser, vp, vp.rm);
    if (vp.fullPage) await walk(page);
    if (vp.rm) {
      hiddenUnderReducedMotion.push(...await page.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll('main h1, main h2, main h3, main p, main li, main a, main button')) {
          if (!el.textContent.trim()) continue;
          let n = el, hidden = false;
          while (n && n !== document.body) { const s = getComputedStyle(n); if (s.visibility === 'hidden' || parseFloat(s.opacity) < 0.05) { hidden = true; break; } n = n.parentElement; }
          if (hidden && !el.closest('[hidden],[aria-hidden="true"],dialog:not([open])')) out.push(el.textContent.trim().slice(0, 60));
          if (out.length >= 5) break;
        }
        return out;
      }));
    }
    const out = join(screensDir, `${vp.name}.jpg`);
    await page.screenshot({ path: out, type: 'jpeg', quality: 84, fullPage: !!vp.fullPage });
    files.push(`${vp.name}.jpg`);
    console.log(`  ${vp.name}`);
    await ctx.close();
  }

  // Scroll frames: what the page looks like mid-scroll with motion on.
  {
    const { ctx, page } = await open(browser, { width: 1440, height: 900 }, false);
    for (const pct of [25, 50, 75]) {
      await page.evaluate(async (p) => {
        const target = (document.documentElement.scrollHeight - innerHeight) * p / 100;
        for (let y = scrollY; y < target; y += 200) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
        scrollTo(0, target);
      }, pct);
      await page.waitForTimeout(1200);
      const name = `1440-scroll-${pct}.jpg`;
      await page.screenshot({ path: join(screensDir, name), type: 'jpeg', quality: 80 });
      files.push(name);
      console.log(`  1440-scroll-${pct}`);
    }
    await ctx.close();
  }

  // Sideways overflow at phone widths.
  for (const width of [390, 320]) {
    const { ctx, page } = await open(browser, { width, height: 800 }, false);
    await walk(page);
    const o = await page.evaluate(measureOverflow);
    overflow[width] = o;
    if (o.scrollWidth > o.viewport) errors.push({ message: `horizontal overflow at ${width}px: page is ${o.scrollWidth}px wide; widest: ${o.wide.join(', ') || 'unknown'}` });
    await ctx.close();
  }
} finally {
  await browser.close();
  server.close();
}

if (hiddenUnderReducedMotion.length) errors.push({ message: `text hidden under reduced motion: ${[...new Set(hiddenUnderReducedMotion)].slice(0, 5).map((t) => `"${t}"`).join(', ')}` });

writeFileSync(join(qaDir, 'render.json'), JSON.stringify({
  id, at: new Date().toISOString(), screens: files, overflow, errors, consoleErrors: [...new Set(consoleErrors)],
}, null, 2));
console.log(`Captured ${files.length} screenshots for ${id}${errors.length ? `; ${errors.length} render error(s):\n  - ${errors.map((e) => e.message).join('\n  - ')}` : '; no render errors'}`);
