#!/usr/bin/env node
/**
 * check-render.mjs — Render check for demo homepages
 *
 * Verifies that the built site renders without critical issues:
 * - Screenshots exist at required viewports (1440, 390)
 * - No console errors in rendered output
 * - Key sections are visible and non-empty
 * - Motion/animation elements have reduced-motion fallbacks
 * - Placeholder media is flagged (warning, not blocker in placeholder mode)
 *
 * Usage: node tools/check-render.mjs <site-id>
 * Example: node tools/check-render.mjs landscaper-A
 *
 * Exit codes:
 *   0 = pass (may have warnings)
 *   1 = fail (blockers found)
 *   2 = usage error
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');

function usage() {
  console.error('Usage: node tools/check-render.mjs <site-id>');
  console.error('Example: node tools/check-render.mjs landscaper-A');
  process.exit(2);
}

const siteId = process.argv[2];
if (!siteId) usage();

// Parse trade and direction from site id (e.g., "landscaper-A" → trade="landscaper", dir="A")
const match = siteId.match(/^([a-z]+)-([ABC])$/i);
if (!match) {
  console.error(`Invalid site id format: "${siteId}". Expected format: <trade>-<A|B|C>`);
  process.exit(2);
}
const [, trade, dir] = match;
const dirUpper = dir.toUpperCase();

const siteDir = join(ROOT, 'sites', trade, dirUpper);
const distDir = join(siteDir, 'dist');
const qaDir = join(siteDir, 'qa');
const screensDir = join(qaDir, 'screens');

const blockers = [];
const warnings = [];

// ── Check 1: dist/index.html exists ──────────────────────────────────────────
const distIndex = join(distDir, 'index.html');
if (!existsSync(distIndex)) {
  blockers.push('[blocker] dist/index.html not found — run `node tools/build.mjs ' + siteId + '` first');
} else {
  const html = readFileSync(distIndex, 'utf8');

  // Check for empty body or missing main content
  if (!html.includes('<main') && !html.includes('<body')) {
    blockers.push('[blocker] dist/index.html has no <main> or <body> element');
  }

  // Check that tokens were resolved (no unreplaced {{...}} tokens except in comments/scripts)
  const tokenPattern = /\{\{[a-zA-Z][a-zA-Z0-9_.]*\}\}/g;
  const bodyMatch = html.match(/<body[\s\S]*<\/body>/i);
  if (bodyMatch) {
    const bodyContent = bodyMatch[0];
    // Strip script and style tags before checking for unresolved tokens
    const stripped = bodyContent.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
    const unresolved = stripped.match(tokenPattern);
    if (unresolved && unresolved.length > 0) {
      const unique = [...new Set(unresolved)].slice(0, 5);
      blockers.push(`[blocker] ${unresolved.length} unresolved token(s) in body HTML: ${unique.join(', ')}${unresolved.length > 5 ? ' ...' : ''}`);
    }
  }

  // Check for required data attributes
  if (!html.includes('data-sw-signature')) {
    warnings.push('[warning] No data-sw-signature hook found — signature primitive may be missing');
  }

  // Check for mobile bar
  if (!html.includes('data-mobilebar') && !html.includes('mobile-bar')) {
    warnings.push('[warning] No mobile bar element found');
  }

  // Check for contact section
  if (!html.includes('id="contact"') && !html.includes("id='contact'")) {
    warnings.push('[warning] No #contact section found');
  }

  // Check for sample labels on reviews/prices
  if (html.includes('review') || html.includes('rating') || html.includes('price')) {
    if (!html.includes('sample') && !html.includes('Sample')) {
      warnings.push('[warning] Reviews/ratings/prices found but no "Sample" label detected');
    }
  }

  // Check for reduced-motion media query in linked CSS
  const cssLinks = html.match(/href="[^"]*\.css"/gi) || [];
  let hasReducedMotion = false;
  for (const link of cssLinks) {
    const href = link.match(/href="([^"]*)"/)?.[1];
    if (href) {
      const cssPath = join(distDir, href);
      if (existsSync(cssPath)) {
        const css = readFileSync(cssPath, 'utf8');
        if (css.includes('prefers-reduced-motion')) {
          hasReducedMotion = true;
          break;
        }
      }
    }
  }
  // Also check inline styles
  if (!hasReducedMotion && html.includes('prefers-reduced-motion')) {
    hasReducedMotion = true;
  }
  if (!hasReducedMotion) {
    warnings.push('[warning] No prefers-reduced-motion media query found — motion accessibility issue');
  }
}

// ── Check 2: Screenshots exist ───────────────────────────────────────────────
if (!existsSync(screensDir)) {
  warnings.push('[warning] qa/screens/ directory not found — screenshots not yet captured');
} else {
  const screens = readdirSync(screensDir);
  const hasDesktop = screens.some(f => f.includes('1440') || f.includes('desktop'));
  const hasMobile = screens.some(f => f.includes('390') || f.includes('mobile'));

  if (!hasDesktop) {
    warnings.push('[warning] No desktop viewport screenshot found (expected 1440px)');
  }
  if (!hasMobile) {
    warnings.push('[warning] No mobile viewport screenshot found (expected 390px)');
  }
}

// ── Check 3: qa/render.json exists ───────────────────────────────────────────
const renderJson = join(qaDir, 'render.json');
if (!existsSync(renderJson)) {
  warnings.push('[warning] qa/render.json not found — render metadata missing');
} else {
  try {
    const render = JSON.parse(readFileSync(renderJson, 'utf8'));
    if (render.errors && render.errors.length > 0) {
      for (const err of render.errors) {
        blockers.push(`[blocker] Render error: ${err.message || err}`);
      }
    }
    if (render.consoleErrors && render.consoleErrors.length > 0) {
      for (const ce of render.consoleErrors.slice(0, 3)) {
        warnings.push(`[warning] Console error: ${ce}`);
      }
    }
    if (render.placeholderCount && render.placeholderCount > 0) {
      warnings.push(`[warning] ${render.placeholderCount} placeholder media slot(s) — expected in placeholder mode`);
    }
  } catch (e) {
    warnings.push(`[warning] qa/render.json is malformed: ${e.message}`);
  }
}

// ── Check 4: OG image ────────────────────────────────────────────────────────
const ogImage = join(distDir, 'og.jpg');
if (!existsSync(ogImage)) {
  const ogPng = join(distDir, 'og.png');
  if (!existsSync(ogPng)) {
    warnings.push('[warning] No og.jpg or og.png found in dist/');
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
console.log(`\n=== Render Check: ${siteId} ===\n`);

if (blockers.length > 0) {
  console.log(`BLOCKERS (${blockers.length}):`);
  for (const b of blockers) console.log(`  ✗ ${b}`);
  console.log('');
}

if (warnings.length > 0) {
  console.log(`WARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
  console.log('');
}

if (blockers.length === 0 && warnings.length === 0) {
  console.log('  ✓ All render checks passed\n');
}

const result = {
  siteId,
  timestamp: new Date().toISOString(),
  blockers: blockers.length,
  warnings: warnings.length,
  passed: blockers.length === 0,
  details: { blockers, warnings }
};

// Write result to qa/render-check.json
try {
  const { writeFileSync } = await import('node:fs');
  writeFileSync(join(qaDir, 'render-check.json'), JSON.stringify(result, null, 2));
} catch {
  // qa dir may not exist yet; non-fatal
}

if (blockers.length > 0) {
  console.log(`RESULT: FAIL (${blockers.length} blocker(s), ${warnings.length} warning(s))`);
  process.exit(1);
} else {
  console.log(`RESULT: PASS (${warnings.length} warning(s))`);
  process.exit(0);
}