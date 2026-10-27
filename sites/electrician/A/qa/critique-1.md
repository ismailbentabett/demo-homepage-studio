COPY: ok

## Five-second test (no screenshots available; judged from dist/index.html)
At 1440 and 390 the first screen shows: trade + city in the h1 ("Columbus electrical work, drawn line by line"), a primary CTA ("Get a panel evaluation") and a ghost call button, phone visible in header and hero, proof line with hours + areas + sample rating, and the one-line copper trace with its first node is present in the hero. The next section peeks because the hero is `min-height: calc(100svh - var(--header-h))` not 100vh. Without screenshots I cannot confirm fold positions at 390×844 or intro timing, so firstScreen is capped at 8.5 pending render capture.

## Categories

### firstScreen — 8.5
What earned it: h1 names trade + city + concept in 7 words; one primary action plus a quieter call button; phone visible in header and hero; proof line includes hours, service area list and "Sample rating"; next band peeks via sub-100svh hero height; signature node visible in hero.
Deductions:
- qa/render-check.json: screenshots not captured — cannot verify 390×844 fold, h1 line count or intro ≤ 1.2 s; cap at 8.5 until render evidence exists (-0.5 vs potential 9).

### distinctiveness — 9
What earned it: One-Line Diagram Trace signature runs through hero, services-main, tool-panel-id, services-circuits, tool-ev-load, proof, contact and footer (8 sections ≥ 4 required); layout families include offset-frame hero, branch-grid, annotation-callout (normal + mirrored), split-rail, statement-stack break, mosaic reviews, map-check, form-single and ground-rule footer (≥ 3 non-template families); type pair Archivo/Outfit + DM Mono accent differs from sibling directions per concept.json; palette Teal Field + Copper Trace + Chalk is unique in registry.
Deductions: none observed in built output.

### type — 9
What earned it: Archivo variable display with wdth 75 on h1/logo; Outfit body ≥ 16px via clamp scale; DM Mono used consistently for kickers, mono-note, prices, ZIP input, tool results and sample tags (accent family permitted); tabular-nums on price-range and hours dd; lead paragraph set apart via `.lead`; heading hierarchy h1 > h2 > h3 with no skipped levels; tracking -0.03em on display headings; no orphans visible in source copy.
Deductions: none observed.

### layout — 9
What earned it: 9 sections each with one job; tones alternate deep → paper → mid → paper → deep → accent → paper → mid → paper → deep (no two dark bands touch except break which is intentional full-bleed); ≥ 3 layout families with no two neighbours alike; full-bleed break at #break-process; asymmetric annotation-callout--mirrored; dense mosaic reviews; quiet map-check; gap between sections (--sec-y clamp 96–120px) exceeds internal card gaps (--s-5 = 24px).
Deductions: none observed.

### photo — 8
What earned it: two photos (hero-A1, process-wire-strip) both carry data-fallback text describing the frame; consistent filter grade applied via `.frame img` (saturate .8, contrast 1.08, hue-rotate -4deg); widths/heights set for CLS; fetchpriority high on both; alt text present.
Deductions:
- dist/index.html lines 831, 933: only 2 photos across 9 sections; reviews and tools use no imagery, making the page feel image-light for a contractor homepage. Stock ceiling applies but 8.5 pass mark requires "one grade across every photo and the video poster" — there is no video and only 2 frames, so photo stays at 8 until more media slots are filled or render proves art-direction quality (-0.5 vs 8.5 anchor).

### copy — 9
What earned it: voice matches concept sentences (specific trade nouns: Federal Pacific, Zinsco, fuse panels, load check, NEC 220.82, nameplate, lug); every Sample label present on prices, reviews and licence; buttons named for action ("Price it", "Book a panel evaluation", "Get a charger quote", "Send it"); no banned phrases detected; microcopy under form ("No spam. Your info stays between you and Priya S."); open-now hook present; primary action consistently "Price it" in service cards and mobile bar, "Get a panel evaluation" in hero (contextually distinct, not duplicate naming).
Deductions: none observed.

### mobile — 8.5
What earned it: mobilebar with call + Price it buttons, hidden on scroll down / over form / typing / menu open per app.js; responsive breakpoints at 640/768/900/1100px reflow grids to single column; tap targets min-height 48px on all buttons and inputs; no horizontal-scroll CSS patterns; sticky header hides on scroll down.
Deductions:
- qa/render-check.json: no 390×844 screenshot to confirm tap-target sizing, h1 ≤ 4 lines or mobilebar clearance over form; cap at 8.5 until verified (-0.5 vs potential 9).

### a11y — 9
What earned it: skip-link present; focus-visible outline 3px solid var(--focus) with 3px offset on all tones; reduced-motion media query forces opacity 1 / transform none / clip-path none on all reveal/split elements; JS-off fallbacks via html:not(.sw-js) rules hide JS-only controls and show static content; aria-live polite on tool-result, zip-result, checklist-result; aria-expanded/controls on menu button; aria-label on star ratings; forced-colors borders on interactive elements; heading order h1 → h2 → h3 with no skips; form labels explicit via for/id; honeypot field hidden accessibly.
Deductions: none observed in built output.

### motion — 8.5
What earned it: intro timeline (photo slide 600ms + h1 split reveal at 200ms) under 1.2 s budget; scroll stories vary by role (hero slide+split, break clip-wipe, signature node activation via IO); hover language consistent (btn press scale .97, link underline grow); reduced motion respected via SW.reduced gate and CSS media query; Lenis loaded with lerp .1; no layout property animations (only transform/opacity/clip-path).
Deductions:
- Fewer than 3 distinct hooks beyond plain reveals: hero-story, break-story and signature are the only custom hooks; other sections rely on generic data-reveal fade-up. Motion capped at 8.5 per RUBRIC §3.9 deduction "Fewer than 3 different hooks beyond plain reveals" (-0.5 vs 9 anchor).

### wow — 8.5
What earned it: signature moment (copper line drawing down the page with node activation) is tied to the thesis and trade; EV Load Check tool outputs a designed result inside annotation-callout styled like an engineer's note, using mono type and accent color.
Deductions:
- Tool output is text-only (no sketch/diagram visual); RUBRIC §3.10 anchor 9 requires "a sketch, a printable sheet, a checklist with an answer" — the estimator here returns plain text range, not a visual artifact. Stays at 8.5 until output gains a designed visual form (-0.5 vs 9).

### polish — 9
What earned it: SVG favicon + apple-touch-icon preload; OG 1200×630 declared; JSON-LD Electrician schema with openingHoursSpecification; theme-color set; consistent radius 3px throughout; print stylesheet for estimator; lazy images with width/height; hero poster preloaded; forced-colors handled; no transition:all; no mixed icon strokes.
Deductions: none observed.

## Arithmetic
14×8.5 + 12×9 + 10×9 + 10×9 + 8×8 + 8×9 + 7×8.5 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 119 + 108 + 90 + 90 + 64 + 72 + 59.5 + 63 + 102 + 68 + 36
= 871.5 / 100 = 8.72

## Must
(none)

## Should
- **where:** qa/render-check.json  
  **problem:** Screenshots directory missing; render.json absent. Cannot verify fold, intro timing, mobile tap targets or reduced-motion visibility.  
  **fix:** Run `node tools/check-render.mjs electrician-A` to capture all viewports before round 2 scoring.

- **where:** dist/index.html lines 831, 933  
  **problem:** Only 2 photos across 9 sections; page feels image-light for a contractor homepage and photo score caps at 8.  
  **fix:** Add niche-approved media to at least one more section (e.g., a detail shot in the proof mosaic or a process frame in services-circuits) using [[img]] macro, ensuring no reuse of hero-A1 or process-wire-strip.

- **where:** dist/app.js lines 1225–1242 (signature module)  
  **problem:** Signature nodes toggle class but have no draw/pulse animation; the "line draws down the page" promise from concept.json §7 is not implemented, reducing wow and motion distinctiveness.  
  **fix:** Add a GSAP DrawSVG or clip-path wipe that animates the copper line segment between nodes as each section enters, respecting SW.reduced.

- **where:** dist/index.html #tool-ev-load .tool-result  
  **problem:** Estimator output is plain text; no sketch or visual diagram despite concept.json promising "annotation callout box styled like an annotation".  
  **fix:** Render a simple SVG one-line diagram snippet inside .tool-result that updates based on service-size and loads selections, using the same copper/chalk palette.

## Elevate
1. **motion (weakest by weight among ties):** Implement the copper line draw animation between signature nodes using DrawSVG or a clip-path wipe synced to ScrollTrigger, so the signature becomes a continuous animated trace rather than discrete class toggles. This converts the signature from decoration into a narrative device and unlocks motion 9+.
2. **wow (second weakest):** Replace the plain-text estimator output with a dynamic SVG annotation diagram that visualizes the load calculation result in the signature's engineering-drawing language. This ties the tool output to the thesis and creates the "two connected moments" anchor for wow 10.