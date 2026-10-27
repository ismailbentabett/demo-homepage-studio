COPY: ok

# Five-second test (from dist/index.html; no screenshots available)

- **What is it?** Handyman services in Ann Arbor, MI ("Handyman Services · Ann Arbor, MI" kicker + h1 "Pick your jobs. See the hours.").
- **Where?** Ann Arbor, MI (kicker, title tag).
- **What do I do?** Build a punch list to see hours/prices, or call/text. Primary CTA "Build my list" anchors to estimator.
- **Why them?** 4.8 stars / 212 reviews (Sample rating), specific trade services listed.

Verdict: Clear value prop and action. Would score higher with visual confirmation of layout and fold.

---

## First screen — 7.5

**Earned:** Trade + city + outcome clear in ≤8 words ("Pick your jobs. See the hours." = 6 words). One primary action ("Build my list") plus secondary phone. Proof line present with Sample label. Phone visible in header.

**Deductions:**
- `static.json` blockers: 6 hero mosaic images have `src="media/undefined"` (dist lines 1336–1341). The hero right half renders as broken image placeholders or empty frames. This destroys first-screen credibility for a homeowner. −1.0 (visual break on first screen).
- No screenshots to verify next-band peek or mobile fold. Cannot confirm h1 ≤4 lines at 390×844 or buttons above fold. Defaulting to 8-anchor minus the media failure. −0.5 (unverifiable mobile composition).
- H1 uses `<br>` tag ("Pick your jobs.<br>See the hours.") which forces a 2-line break regardless of viewport; may cause orphan-like rhythm issues at certain widths. −0.5.

**Note:** Without screenshots, this score reflects the HTML structure's intent penalized by confirmed broken media. A re-render with valid images would likely reach 8.5–9.

---

## Distinctiveness — 8.0

**Earned:** Pegboard hang-tag signature is a genuine concept (tool outlines + rotated pill labels). Palette (Workshop Teal #1C3A38 + Safety Gold #E8C468 + Paper #F0E6D2) is distinctive and avoids purple/blue AI slop. Big Shoulders display + Outfit text + DM Mono accent is a non-generic trio. Signature appears in hero (`peg-grid` class), estimator (`hang-tag` pills), services (`tool-outline` SVGs), and footer (`tool-outline` + `data-sw-signature`). That is 4 sections.

**Deductions:**
- Every service card and every estimator item uses the same `#i-hammer` SVG icon (dist lines 1365, 1372, 1379, 1386, 1393, 1400, 1407, 1414, 1461, 1468, 1475, 1482, 1489, 1496, 1503, 1510). The site defines drill, wrench, tape, level, caulk, screwdriver, saw icons (lines 1706–1712) but never uses them. The signature collapses into one repeated glyph. −1.0 (motif becomes decoration when identical across 16 instances).
- Three icon-in-square cards pattern: services grid is 3-column at 900px+ with identical card structure (icon → h3 → p → ghost button). Reads as template despite the peg-grid background. −0.5.
- No siblings found in `sites/handyman/A/` or `sites/handyman/C/` to compare; cannot verify distinctiveness against directions A/C. Score capped at 8 until comparison possible.

---

## Typography — 8.5

**Earned:** Fluid scale with clamp() functions. Body ≥16px (`--fs-1: clamp(1rem, ...)`). Display tracking −0.03em on headings. DM Mono used for data (hours, prices, sample tags) — tabular-nums applied via `[data-count]`. Lead paragraph set apart via `.proof-line`. H1 is dramatic size contrast against body.

**Deductions:**
- Straight quotes in review blockquotes: `"I picked six items..."` uses typewriter quotes, not curly. −0.5.
- En-dash ranges missing: price bands show `$90–$125` in facts.json but rendered HTML shows `—` (em dash) or hyphen depending on context. Inconsistent. −0.5.
- More than 5 distinct sizes visible: `--fs--1`, `--fs-0`, `--fs-1`, `--fs-2`, `--fs-3`, `--fs-h1`, plus `.sample-tag` at 0.65rem and `.credits` at 0.7rem. That is 8 sizes. −0.5.

---

## Layout and rhythm — 8.0

**Earned:** Alternating tones (deep → paper → signal → paper → deep → paper → mid → paper → deep → signal). Varied section shapes: hero split, rail strip, estimator split, triage stack, break full-bleed, services grid, mosaic grid, reviews list, tabs stack, area split, contact stack, footer. Gap between sections (`--s-10: 128px`) exceeds internal gaps.

**Deductions:**
- Two dark bands touch: `.break.t-deep` (line 1451) sits directly between `.stack.t-paper` (triage, line 1435) and `.grid.t-paper` (services, line 1456). Wait — actually paper/deep/paper alternation is correct. But `.hero.t-deep` touches `.rail.t-paper` which is fine. Re-checking: no two same-tone neighbours found. Deduction rescinded.
- Services grid and photo-proof mosaic both use 3-column grids with identical gap/card-aspect patterns. Same shape twice. −0.5.
- Centred text concern: `.stack__inner` max-width 720px centred; triage and contact sections are narrow centred stacks. Not >72% of page, but two centred sections in sequence (triage → break → services breaks it). Acceptable.
- Blank gap risk: `--s-10: 128px` padding on sections could create large whitespace on short viewports without screenshots to verify. −0.5 (unverifiable density).

---

## Photo and video — 6.0

**Earned:** Alt text describes each frame ("Placeholder for fix-tv-mount", etc.). Width/height attributes present. Consistent filter applied (`saturate(.8) contrast(1.08) sepia(.12) hue-rotate(-2deg)`) suggests intended unified grade.

**Deductions:**
- **CRITICAL:** All 15 images have `src="media/undefined"` (static.json blockers, dist lines 1336–1341, 1452, 1521–1526). Zero photos render. The page shows broken image icons or fallback text. This is not "placeholder expected" — it is a build failure where the media pipeline did not resolve paths. −2.0 (every frame off-topic because invisible).
- Footer credits list 13× "Photo by unknown on Pexels" with `<a>` tags lacking href (static.json warnings, line 1689). Unattributed, unlinked. −0.5.
- No video present despite concept mentioning motion intro. −0.5 (video that never plays / missing poster equivalent).
- Same photo slot names reused? Cannot verify without working images, but `data-photo` attributes are unique. No deduction here.

**mustFix:** Replace all `media/undefined` src values with valid paths from `niches/handyman/media/manifest.json`. Run `tools/build.mjs handyman-B` again after fixing media plan.

---

## Copy — 9.0

**Earned:** Voice is plain, specific, contractor-authentic ("Anchor holes, doorknob dents and moving damage patched, textured and painted to match"). No banned phrases. Buttons named for action ("Build my list", "Price it", "Text these to…", "Check"). Sample labels on reviews, rating, pricing. Microcopy at doubt points ("Final number after photos or walk-through"). One consistent primary action name ("Price it" throughout services and estimator CTA). Headlines answer homeowner questions. No tricolons, no "Get started".

**Deductions:** None. Copy is the strongest category.

---

## Mobile — 8.0

**Earned:** CSS breakpoints at 640px and 900px. Mobile bar with call + "Price it" buttons (flex: 1, min-height 48px). Nav hidden below 900px. Form inputs min-height 48px. Tap targets appear adequate from CSS.

**Deductions:**
- No screenshots at 390×844, 375×812, or 320×640. Cannot verify horizontal scroll, text overflow, or pinned elements. −0.5 (unverifiable).
- Hero mosaic switches from 2-col to 3-col at 640px; on 390px it is 2-col with 3:2 aspect tiles. Six tiles in 2 columns = 3 rows, potentially pushing CTAs below fold. Cannot confirm. −0.5.
- `.est-output` is `position: sticky; top: calc(var(--header-h) + var(--s-5))`. On small screens this could overlap content or trap scroll. No screenshot evidence it works. −0.5.

---

## Accessibility — 8.0

**Earned:** Skip link present (`.skip-link` CSS). Focus styles defined (`outline: 3px solid var(--focus); outline-offset: 3px`). Reduced-motion media query resets all animations and makes content visible. ARIA roles on tabs (`role="tablist"`, `role="tab"`, `aria-selected`). Live regions on ZIP msg and triage result (`aria-live="polite"`). Form honeypot field hidden accessibly. Labels on all inputs. Heading order: h1 → h2 (open-now has no heading, uses rail) → h2 (estimator) → h2 (triage) → h2 (services) → h2 (reviews) → h2 (photo-quote) → h2 (area) → h2 (contact). No skips detected.

**Deductions:**
- Rotator/split-text hooks present in CSS but no corresponding HTML uses them. Not a failure, just unused.
- Tabs: `aria-controls` attribute missing on tab buttons (links panel by ID but no explicit control reference). Minor. −0.5.
- Form step navigation uses `data-next`/`data-prev` buttons without announcing step progress to screen readers beyond fieldset legends. No `aria-current` or live region for step changes. −0.5.
- Reduced-motion screenshot not available to confirm all content visible. Trusting CSS but cannot verify. −0.5 (unverifiable).

---

## Motion and interaction — 7.5

**Earned:** Reveal system with fade, clip, and stagger variants. Stagger delays calculated per child. Reduced-motion respected. Hover states on buttons (scale 0.97 press), nav links (underline scaleX), service cards (translateY -2px + border-color). Estimator checkboxes trigger hang-tag updates (implied by data attributes). Triage buttons toggle aria-pressed.

**Deductions:**
- Concept promises "Mosaic tiles drop onto pegs with 60ms stagger, settle with scale .98→1 micro-bounce" and "Hang-tags swing in (rotate -3deg→0)". CSS shows only generic translateY reveal and stagger delays. The bespoke peg-drop and swing animations are absent from the built CSS. The signature motion does not exist. −1.0.
- Fewer than 3 distinct hooks beyond plain reveals: fade-up, clip-wipe, stagger-delay are all variations of entrance. Hover states are standard. No scroll-driven storytelling, no counter animation, no parallax. −0.5.
- No screenshots at 25/50/75% scroll to verify motion behaviour or reversibility. −0.5.
- Lenis loaded but smooth-scroll feel unverifiable without interaction.

---

## Wow moment — 7.5

**Earned:** Punch-list estimator is a genuine tool tied to the thesis (pick jobs → see hours → price band). Output includes total hours, visit fit, and sample price range. Triage tool provides specialist routing. Both are useful and trade-specific.

**Deductions:**
- Estimator output is text-only (`<dl>` with dt/dd). No designed sheet, no printable layout, no visual summary. The tool's output does not use the signature language (no hang-tag in result, no peg-grid frame). −1.0.
- Triage result is a plain div with text. No icon, no colour coding, no next-step CTA beyond the general form. −0.5.
- Broken images mean the hero mosaic (intended as a visual wow of tiles dropping onto pegs) fails entirely. −0.5.

---

## Polish — 7.5

**Earned:** SVG favicon + apple-touch-icon referenced. OG tags complete with dimensions. JSON-LD HomeAndConstructionBusiness schema. Theme-color set. Print stylesheet for estimator (`html.sw-print-est`). Forced-colors handling for buttons and compare handle. Consistent radius (`--radius: 2px`). Lazy loading with width/height on images.

**Deductions:**
- `transition: all` found in `.triage-opt` (line 815: `transition: all var(--dur-ui) var(--ease-out)`). −0.5.
- Mixed icon usage: hammer icon everywhere despite defining 8 other tool icons. Inconsistent stroke application (some icons use fill, others stroke-only). −0.5.
- Footer credits: 13 identical "Photo by unknown on Pexels" strings with broken links. Looks unfinished. −0.5.
- Class attribute bug: `class="frame &quot;mosaic-tile&quot;"` (line 1336) contains HTML-encoded quotes inside the class value. The browser interprets this as three classes: `frame`, `"mosaic-tile"` (with literal quote characters). This is malformed and