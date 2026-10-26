COPY: ok

## Five-second test (no screenshots available; scored from dist/index.html)

At 1440: "Termite Inspection in Wilmington, NC" is the h1 (6 words, trade + city). Station badge 01 sits beside it. Lead line reads "Sample report: Seen · Not seen · Conducive". Two CTAs: "Book an inspection" (primary) and "Call (910) 555-0155" (secondary with phone icon). Phone is visible in header and hero. At 390: same content stacks; both buttons should remain above the fold based on CSS min-height calc(100svh - var(--header-h)). Next section (#station-01) peeks because hero is not pinned to exactly 100vh. Scored as a strong 8 anchor; cannot confirm intro timing or reduced-motion visibility without screenshots, so capped at 8.5.

## First screen — 8.5

Earned: h1 states trade + city + outcome in 6 words; one primary action plus quieter secondary; phone visible in header and hero CTA; proof line under h1 names the sample report format; next band peeks via non-100vh hero.
Deductions: Cannot verify intro animation duration or reduced-motion text visibility (screenshots missing); cannot confirm h1 line count at 390 or button fold position. Capped at 8.5 until render evidence exists. No mustFix because static check passed and no DEMO-RULES breach is visible in the markup.

## Distinctiveness — 8.5

Earned: Station Tag Rail signature appears in hero (badge 01), story sections (badges 02–05 with finding tags), proof (report card rows), and footer (badge 06). Palette (Graphite/Paper/Field Green) and type pair (Zilla Slab + Source Sans 3 + DM Mono) are unique in the pest niche per concept.json. No sibling sites exist yet to compare against.
Deductions: Signature present in 4 section families as claimed, but without screenshots I cannot confirm the rail is visually distinct from a plain numbered list or that the finding-tag animation actually differentiates the page from a template. −0.5 for inability to verify visual execution. No AI-slop tells detected in markup or CSS.

## Typography — 8.5

Earned: Zilla Slab display with negative tracking (-0.02em), Source Sans 3 body at fluid scale ≥16px, DM Mono for station numbers/tags/prices. Fluid h1 clamp, tabular-nums on prices and hours. Measure capped at 65ch for paragraphs. ≤5 distinct sizes visible. No orphans detectable in markup.
Deductions: Cannot verify rag, line-height on display, or curly quotes/en-dashes without visual inspection. Body color var(--ink) #2D3436 on paper #F5F3EB passes AAA. −0.5 for unverified typographic refinements. No banned font families used.

## Layout and rhythm — 8.0

Earned: 11 sections with alternating tones (paper → mid → accent break → paper → mid → paper → mid → paper → mid → paper → deep footer). Station grid uses asymmetric 80px rail + 1fr content at ≥900px. Full-bleed accent break band provides rhythm reset. Compare section and report card break the grid intentionally.
Deductions: Without screenshots, cannot confirm two dark bands do not touch, cannot verify blank gaps or lopsided columns. Services list uses 3-column grid at ≥900px which risks template feel. −1.0 for unverified rhythm and potential three-in-a-row services layout. −0.5 for inability to confirm full-bleed break actually spans viewport. Total −1.5 from 9.5 anchor → 8.0.

## Photo and video — 7.5

Earned: All images reference niche-approved media slots (hero-A1, process-inspect-exterior, process-probe, etc.) with descriptive alt text. Consistent frame treatment via CSS filter (saturate .85, contrast 1.05, sepia .08) creates unified grade. Aspect ratios set per slot (16/9 hero, 4/3 stations).
Deductions: Cannot verify object-position, crop quality, or whether photos show faces/logos/house numbers without screenshots. Same filter applied uniformly may read as a "filter" rather than art direction. −1.0 for unverified photo quality. −0.5 for uniform filter risking AI-slop tell. No video present, so no poster/timing check needed. Floor is 6; pass mark is 8.5, so this category is below pass.

## Copy — 9.0

Earned: Voice matches concept samples ("We walk the perimeter first", "what we saw and what we did not"). Every service blurb answers a homeowner question in plain language. Sample labels present on prices, reviews, and report card. No banned phrases detected. Buttons named for action ("Book an inspection", "Check", "Send request"). Microcopy at ZIP checker and form steps. Primary action consistently named "Book an inspection" except services list uses "Get a price" — acceptable secondary naming.
Deductions: Services list CTA "Get a price →" differs from hero/header "Book an inspection" but serves a different intent (pricing vs booking); not penalized. No tricolons, no filler. One em dash in hero lead ("Seen · Not seen · Conducive") uses middle dots, not em dashes. Clean.

## Mobile — 8.0

Earned: CSS breakpoints at 640px and 900px reflow grids to single column. Mobile bar with sticky CTA and tel link, min-height 48px tap targets. Form inputs min-height 48px. No horizontal scroll expected from CSS (max-width containers, overflow-x auto only on prices table with -webkit-overflow-scrolling). Skip link present.
Deductions: Cannot verify mobile bar hides on scroll down or over form without screenshots. Cannot confirm h1 ≤4 lines at 390×844. Cannot verify tap target sizing on radio cards or identifier options. −1.0 for unverified mobile-specific composition decisions. Floor is 8; meets floor but not pass mark of 9.0.

## Accessibility — 8.0

Earned: Skip link, focus-visible outline 3px solid var(--focus) with 3px offset, aria-live on ZIP result and identifier result, aria-labels on stars and menu button, fieldset/legend on form groups, label elements on all inputs, honeypot field hidden, sr-only class defined. Reduced-motion media query kills all animations. Forced-colors borders on interactive elements. Print stylesheet hides nav and shows estimator.
Deductions: Cannot verify reduced-motion screenshot shows all content (no screenshots). Rotating word not present, so no aria-hidden/sr-only duplicate needed. Heading order: h1 → h2 (stations) → h3 (tools/services) — no skips detected in markup. −1.0 for unverified reduced-motion content visibility. Meets floor 8 but not pass 9.0.

## Motion and interaction — 7.5

Earned: Reveal system with fade and clip variants, stagger support, split-text hooks available. Compare slider has role="slider" with aria-valuemin/max/now. Marquee pause on hover/focus supported in kit CSS. Lenis loaded for smooth scroll.
Deductions: Concept promises flashlight cone intro ≤1.2s and dotted path draw via --sw-p clip-path wipe, but cannot verify execution without screenshots or render.json timings. Fewer than 3 verified hooks beyond plain reveals visible in markup (reveal, compare slider, zip live region). −1.0 for unverified signature motion. −0.5 for potentially insufficient hook variety. Capped at 7.5. MustFix candidate if intro blocks reading or motion hides content.

## Wow moment — 7.5

Earned: Termite-or-flying-ant identifier tool is trade-specific and outputs actionable next step. Report card renders the signature as a tangible deliverable. Both tied to thesis.
Deductions: Tool output is rendered in a div with dm-mono styling but cannot verify visual design without screenshots. Report card is static HTML, not animated into existence as concept promised. −1.0 for unverified wow execution. Generic compare slider is not the wow; identifier and report card carry it. Below pass mark 9.0.

## Polish — 8.0

Earned: SVG favicon, apple-touch-icon, OG image 1200×630, theme-color, JSON-LD HomeAndConstructionBusiness, print stylesheet, lazy images with width/height, consistent 3px radius, forced-colors handling. No transition:all detected. Credits list present.
Deductions: Cannot verify hero poster preload (no video). Cannot verify concentric nesting or icon stroke consistency without visual check. −0.5 for unverified detail consistency. −0.5 for missing video poster check. Meets floor 6, below pass 9.0.

## Arithmetic

14×8.5 + 12×8.5 + 10×8.5 + 10×8.0 + 8×7.5 + 8×9.0 + 7×8.0 + 7×8.0 + 12×7.5 + 8×7.5 + 4×8.0
= 119 + 102 + 85 + 80 + 60 + 72 + 56 + 56 + 90 + 60 + 32
= 812 / 100 = 8.12

## Must

- **Photo pass mark not met.** Photo score 7.5 < 8.5 pass mark. Cannot verify photo quality, crops, or face/logo absence without screenshots. Builder must ensure render check captures screenshots and verifies all frames are on-topic, region-appropriate, and free of identifying details.
- **Motion verification missing.** Concept promises flashlight intro ≤1.2s and dotted path draw. Cannot verify without render.json or screenshots. Builder must run render check to capture motion frames and confirm intro does not block reading.
- **Screenshots absent.** qa/screens/ directory does not exist. Render check must be re-run to generate screenshots before delivery can be considered. This is a blocker for any score above floor.

## Should

- **Layout rhythm unverified.** Run render check and inspect full-page 1440 screenshot to confirm no two dark bands touch, no blank gaps > half screen, and services grid does not read as template. Fix: adjust section padding or tone alternation if rhythm is flat.
- **Mobile bar behavior unverified.** Confirm mobile bar hides on scroll down and over form via render check at 390×844. Fix: add data-mobilebar-hide-on-scroll attribute or adjust app.js if bar covers form.
- **Tool output design unverified.** Identifier and conditions-check results use dm-mono but may lack visual distinction. Fix: add finding-tag pill styling to tool outputs to tie them to the signature system.
- **Services CTA inconsistency.** "Get a price →" in services list vs "Book an inspection" elsewhere. Consider aligning to one primary action name or making the distinction intentional with microcopy explaining the difference.
- **Report card animation missing.** Concept promises report card renders as signature culmination. Currently static HTML. Fix: add clip reveal or staggered row entrance tied to scroll to make the report card feel like the completed inspection.

## Elevate

**Layout (weight 10, score 8.0):** Turn the services list into a station-style grid with finding-tag pills for each service category (Termite → Not seen / Conducive / Seen based on homeowner situation), threading the signature into a fifth section family and breaking the template 3-column grid.

**Motion (weight 12, score 7.5):** Implement the dotted path draw from station 01→06 using --sw-p clip-path wipe as specified in concept.json, and tie the report card row entrances to the same draw so the signature moves in three places (rail, tags, report) instead of one.