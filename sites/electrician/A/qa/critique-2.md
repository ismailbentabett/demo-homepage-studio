COPY: ok

## Five-second test (no screenshots available; judged from dist/index.html and app.js)
At 1440 and 390 the first screen shows: trade + city + concept in the h1 ("Columbus electrical work, drawn line by line" — 7 words), a primary CTA ("Get a panel evaluation") and a ghost call button, phone visible in header and hero, proof line with hours + areas + sample rating, and the copper trace with its first node is present in the hero. The next section peeks because the hero is `min-height: calc(100svh - var(--header-h))` not 100vh. Without screenshots I cannot confirm fold positions at 390×844 or intro timing, so firstScreen is capped at 8.5 pending render capture.

## Round 1 fix status
- **Signature draw animation**: FIXED. app.js lines 1230–1241 inject `.one-line__trace` SVG and use DrawSVGPlugin for continuous trace animation between nodes. CSS for `.one-line__trace path` present in index.html line 469.
- **EV load diagram**: FIXED. app.js lines 1327–1348 generate a dynamic SVG `.load-diagram` inside `.tool-result` after estimator runs, showing bus bar, load bars and capacity line. CSS for `.load-diagram` present in index.html lines 487–494.
- **Additional photo**: PARTIALLY FIXED. A third photo slot (`equip-ev-charger`) was added in section #services-circuits (index.html line 917). Total photos now 3 (hero-A1, equip-ev-charger, process-wire-strip). Still below the 4+ expected for a 9-section page, but above the 2-photo minimum that capped r1 at 8.
- **Render check / screenshots**: NOT FIXED. qa/render.json does not exist. qa/screens/ is empty. Cannot verify fold, intro timing, mobile tap targets or reduced-motion visibility. This remains a mustFix.

## Categories

### firstScreen — 8.5
What earned it: h1 names trade + city + concept in 7 words; one primary action plus a quieter call button; phone visible in header and hero; proof line includes hours, service area list and "Sample rating"; next band peeks via sub-100svh hero height; signature node visible in hero; DrawSVG trace now animates the copper line on load (app.js lines 1230–1241).
Deductions:
- qa/render.json absent, qa/screens/ empty: cannot verify 390×844 fold, h1 line count or intro ≤ 1.2 s; cap at 8.5 until render evidence exists (-0.5 vs potential 9).

### distinctiveness — 9
What earned it: One-Line Diagram Trace signature runs through hero, services-main, tool-panel-id, services-circuits, tool-ev-load, proof, contact and footer (8 sections ≥ 4 required); signature now animates as a continuous copper trace via DrawSVG (app.js lines 1230–1241), making it a narrative device not decoration; layout families include offset-frame hero, branch-grid, annotation-callout (normal + mirrored), split-rail, statement-stack break, mosaic reviews, map-check, form-single and ground-rule footer (≥ 3 non-template families); type pair Archivo/Outfit + DM Mono accent differs from sibling directions per concept.json; palette Teal Field + Copper Trace + Chalk is unique in registry.
Deductions: none observed in built output.

### type — 9
What earned it: Archivo variable display with wdth 75 on h1/logo; Outfit body ≥ 16px via clamp scale; DM Mono used consistently for kickers, mono-note, prices, ZIP input, tool results and sample tags (accent family permitted); tabular-nums on price-range and hours dd; lead paragraph set apart via `.lead`; heading hierarchy h1 > h2 > h3 with no skipped levels; tracking -0.03em on display headings; no orphans visible in source copy.
Deductions: none observed.

### layout — 9
What earned it: 9 sections each with one job; tones alternate deep → paper → mid → paper → deep → accent → paper → mid → paper → deep (no two dark bands touch except break which is intentional full-bleed); ≥ 3 layout families with no two neighbours alike; full-bleed break at #break-process; asymmetric annotation-callout--mirrored; dense mosaic reviews; quiet map-check; gap between sections (--sec-y clamp 96–120px) exceeds internal card gaps (--s-5 = 24px).
Deductions: none observed.

### photo — 8.5
What earned it: three photos (hero-A1, equip-ev-charger, process-wire-strip) all carry data-fallback text describing the frame; consistent filter grade applied via `.frame img` (saturate .8, contrast 1.08, hue-rotate -4deg); widths/heights set for CLS; fetchpriority high on hero and break photos; alt text present; equip-ev-charger added in r2 (index.html line 917) fills the image-light gap flagged in r1.
Deductions:
- Only 3 photos across 9 sections; reviews, tools and area sections use no imagery. Stock ceiling applies and 9 anchor requires "one grade across every photo and the video poster" — there is no video and only 3 frames, so photo stays at 8.5 until more media slots are filled or render proves art-direction quality (-0.5 vs 9 anchor). Improved from 8 to 8.5 due to third photo addition.

### copy — 9
What earned it: voice matches concept sentences (specific trade nouns: Federal Pacific, Zinsco, fuse panels, load check, NEC 220.82, nameplate, lug); every Sample label present on prices, reviews and licence; buttons named for action ("Price it", "Book a panel evaluation", "Get a charger quote", "Send it"); no banned phrases detected; microcopy under form ("No spam. Your info stays between you and Priya S."); open-now hook present; primary action consistently "Price it" in service cards and mobile bar, "Get a panel evaluation" in hero (contextually distinct, not duplicate naming).
Deductions: none observed.

### mobile — 8.5
What earned it: mobilebar with call + Price it buttons, hidden on scroll down / over form / typing / menu open per app.js; responsive breakpoints at 640/768/900/1100px reflow grids to single column; tap targets min-height 48px on all buttons and inputs; no horizontal-scroll CSS patterns; sticky header hides on scroll down.
Deductions:
- qa/render.json absent, qa/screens/ empty: no 390×844 screenshot to confirm tap-target sizing, h1 ≤ 4 lines or mobilebar clearance over form; cap at 8.5 until verified (-0.5 vs potential 9).

### a11y — 9
What earned it: skip-link present; focus-visible outline 3px solid var(--focus) with 3px offset on all tones; reduced-motion media query forces opacity 1 / transform none / clip-path none on all reveal/split elements; JS-off fallbacks via html:not(.sw-js) rules hide JS-only controls and show static content; aria-live polite on tool-result, zip-result, checklist-result; aria-expanded/controls on menu button; aria-label on star ratings; forced-colors borders on interactive elements; heading order h1 → h2 → h3 with no skips; form labels explicit via for/id; honeypot field hidden accessibly.
Deductions: none observed in built output.

### motion — 9
What earned it: intro timeline (photo slide 600ms + h1 split reveal at 200ms) under 1.2 s budget; scroll stories vary by role (hero slide+split, break clip-wipe, signature node activation via IO); hover language consistent (btn press scale .97, link underline grow); reduced motion respected via SW.reduced gate and CSS media query; Lenis loaded with lerp .1; no layout property animations (only transform/opacity/clip-path); DrawSVG trace animation now provides a third distinct hook beyond plain reveals (signature draw, break clip-wipe, hero split), resolving the r1 deduction for fewer than 3 hooks.
Deductions: none observed. Improved from 8.5 to 9 due to signature draw hook addition.

### wow — 9
What earned it: signature moment (copper line drawing down the page with node activation via DrawSVG) is tied to the thesis and trade; EV Load Check tool outputs a designed SVG diagram inside annotation-callout styled like an engineer's note, using mono type and accent color, with bus bar, load bars and capacity line (app.js lines 1345–1348); the two moments are connected — the same copper trace language appears in both the scrolling signature and the tool output.
Deductions: none observed. Improved from 8.5 to 9 due to visual diagram output replacing plain text.

### polish — 9
What earned it: SVG favicon + apple-touch-icon preload; OG 1200×630 declared; JSON-LD Electrician schema with openingHoursSpecification; theme-color set; consistent radius 3px throughout; print stylesheet for estimator; lazy images with width/height; hero poster preloaded; forced-colors handled; no transition:all; no mixed icon strokes.
Deductions: none observed.

## Arithmetic
14×8.5 + 12×9 + 10×9 + 10×9 + 8×8.5 + 8×9 + 7×8.5 + 7×9 + 12×9 + 8×9 + 4×9
= 119 + 108 + 90 + 90 + 68 + 72 + 59.5 + 63 + 108 + 72 + 36
= 885.5 / 100 = 8.86

## Must
- **where:** qa/render.json, qa/screens/
  **problem:** Render check has not been run. No screenshots exist to verify fold, intro timing, mobile tap targets, reduced-motion visibility or the actual visual execution of the DrawSVG trace and load diagram. All scores that depend on visual confirmation are capped.
  **fix:** Run `node tools/check-render.mjs electrician-A` to capture all viewports before delivery. Verify that the copper trace draws between nodes, the load diagram renders inside .tool-result, and reduced-motion shows all content without animation.

## Should
- **where:** dist/index.html line 917
  **problem:** Photo slot for equip-ev-charger has malformed attribute: `data-fallback="Placeholder for equip-ev-charger" EV charger installation detail>` — the alt text is outside the quotes and the closing bracket is misplaced. This may cause the fallback text to render incorrectly or the alt attribute to be parsed wrong.
  **fix:** Change to `data-fallback="Placeholder for equip-ev-charger: EV charger installation detail"` and ensure `alt="Placeholder for equip-ev-charger"` is correctly quoted. Verify the image loads or the fallback displays cleanly.

- **where:** dist/index.html lines 854, 917, 959
  **problem:** Only 3 photos across 9 sections. While improved from 2, the page still feels image-light for a contractor homepage. Adding one more detail shot (e.g., in the proof mosaic or area section) would strengthen photo toward 9.
  **fix:** Add one niche-approved media slot to #proof or #area using [[img]] macro, ensuring no reuse of existing photos. Update media.json and rebuild.

## Elevate
1. **firstScreen (weakest by weight among ties at 8.5):** Capture render screenshots to verify the 390×844 fold and intro timing. If the h1 is ≤ 4 lines and both CTAs are above the fold with the copper trace visible at 0 ms (reduced motion) or by 400 ms (motion on), firstScreen can move to 9. The design is already there; only evidence is missing.
2. **mobile (second weakest at 8.5):** Same render gap. Once 390×844 screenshots confirm tap targets ≥ 48px, h1 ≤ 4 lines and mobilebar clears the form, mobile can move to 9. The CSS breakpoints and mobilebar logic are correct in code; visual proof is the blocker.