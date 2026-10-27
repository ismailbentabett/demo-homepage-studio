COPY: ok

## Five-second test (no screenshots available)
Based on `dist/index.html`: "Kansas City bungalow rewiring, room by room" — trade + city + outcome in 6 words. Phone visible in header and hero CTA. Primary action "Price my rewire" is specific. However, without screenshots I cannot verify fold position at 390×844, next-band peek, or intro timing. Score capped at 8 pending visual verification.

## First screen — 8
**Earned:** h1 states trade + city + outcome in 6 words (line 793). Phone visible in header (line 757) and hero CTA (line 799). Proof line with sample rating present (line 795). Kicker provides context (line 792).
**Deductions:**
- No screenshots to verify next band peeks 40–120px; hero `min-height: calc(100svh - var(--header-h))` (CSS line 480) risks exact 100vh with no peek: −0.5.
- No screenshots to verify both CTAs above fold at 390×844: −0.5.
- Cannot verify intro runs under 1.2s or text readable at 0ms with reduced motion from screenshots: −0.5.
Note: render-check.json reports `qa/screens/ directory not found`. All visual anchors for 9+ are unverifiable.

## Distinctiveness — 8
**Earned:** Arch-frame clip-path is a clear signature primitive (CSS lines 388–396). Room marker system appears in hero (§1, line 802), decoder (§3, line 834), outlets (§4, line 878), services (§5, line 925), EV estimator (§6, line 1029), area (§7, line 1069). That is 6 sections, exceeding the 4-section threshold. Palette "Plaster + Oak + Brick" is unique per concept.json. Type pair Cormorant Garamond + Karla differs from siblings per registry check in concept.
**Deductions:**
- Services grid uses 9 identical `.svc-card.arch-frame` cards (lines 933–1012) in a uniform auto-fill grid. Three-plus identical card shapes in a row: −1.0.
- Without screenshots, cannot verify the arch frame reads as structural rather than decorative filter across all viewports: −0.5.
- Floor-plan margin highlight described in concept §3 ("floor plan in the margin highlights the current room") is absent from the built HTML; only inline room markers exist. Signature does less work than promised: −0.5.

## Typography — 8.5
**Earned:** Fluid scale with clamp (CSS lines 266–271). Body ≥16px via `--fs-0: clamp(1rem, ...)` (line 267). Measure controlled at `max-width: 65ch` (line 338). Display tracking −0.02em on headings (line 334). JetBrains Mono used consistently for technical labels, sample tags, and pricing (lines 340, 370, 541, 558). Tabular numerals on counters (line 131). Lead paragraph set apart with `.lead` class (line 339).
**Deductions:**
- Review text uses italic Cormorant at `--fs-1` (line 623), which is a display size for body-length quotes. Status sentence at display size: −0.5.
- No screenshots to verify orphan control in headings or rag quality: −0.5.
- Straight hyphen ranges in copy ("$180–$400", "5–10 working days") use en-dash correctly in HTML entities, but "Mon–Thu" (line 816) and "1920–1939" (line 845) also use en-dash. Actually correct. No deduction here.
- Kicker labels appear in multiple sections (hero, decoder, outlets, services, EV, area) — that is 6 kicker instances. Three-plus tiny tracked caps labels in one view likely at mobile: −0.5.

## Layout and rhythm — 8
**Earned:** 10 distinct sections with alternating tones: paper → deep → paper → mid → paper → break → accent → paper → deep → paper (form) → deep (footer). Full-bleed break between §5 and §6 (line 1019). Asymmetric statement section with bg image + glassmorphism tool (lines 1024–1063). Varied section shapes: arch-hero, split, rail, stack/tabs, grid, statement, mosaic.
**Deductions:**
- Two dark bands touch: §2 trust strip (t-deep, line 811) and §8 reviews (t-deep, line 1109) are separated by paper/mid/paper/accent/paper sections, so no violation there. However, §8 reviews (t-deep) and §10 footer (t-deep, line 1302) are adjacent with only the form section (t-paper) between them. Not touching. No deduction.
- Services grid (§5) has 9 identical cards in auto-fill layout — same section shape repeated 9 times: −0.5.
- FAQ nested inside §8 reviews section (line 1154) gives that section two jobs (reviews + FAQ): −0.5.
- Without screenshots, cannot verify blank gaps or density map at actual viewports: −0.5.
- Mosaic grid at 900px spans first review card across 2 columns (CSS line 634) but remaining cards are uniform. Grid is functional but not asymmetric enough for 9.

## Photo and video — 7.5
**Earned:** All images use `.photo-grade` filter for consistent grade (CSS line 385). Alt text present on every img tag. Width/height attributes set for CLS prevention. Lazy loading on below-fold images. Hero and break images preloaded (lines 25–26).
**Deductions:**
- All alt texts read "Placeholder for [filename]" (e.g., line 789, 867, 893, 1020, 1026, 1151). These describe the file, not the frame content. Not useful for accessibility or SEO: −0.5.
- Footer credits say "Photo by unknown on Pexels" repeated 7 times (line 1331). No actual photographer attribution: −0.5.
- Without screenshots, cannot verify object-position puts subjects on thirds, crops tell a sequence, or frames feel like one shoot. Stock photo ceiling applies: −0.5.
- No video present despite concept mentioning video poster. Not required but limits ceiling.
- Same photo-grade filter on everything may flatten distinction between hero warmth and process documentation. Cannot verify without screenshots.

## Copy — 8.5
**Earned:** Voice matches concept's three sample sentences — specific trade nouns ("knob-and-tube", "plaster patches", "push-button switches", "brass plates"). No banned phrases detected. Buttons named for action ("Price my rewire", "Book an inspection", "Get my EV quote", "Send request"). Sample labels on reviews, pricing, hours, timeline, and ID. FAQ answers are concrete and honest ("patches are ready for paint when we leave", "we recommend a plaster specialist").
**Deductions:**
- "Get a quote" used as primary CTA in header nav (line 757) and footer nav (line 1315), while hero uses "Price my rewire" (line 798) and service cards use "Price it" (lines 938–1010). Three different names for the primary action: −0.5.
- Form thanks message says "In your version this goes straight to your phone and inbox" (line 1292) — breaks the fictional business voice momentarily. Meta-commentary in demo: −0.5.
- Trust strip says "Family-owned since 31 years ago" (line 819) — awkward phrasing. Should be "Family-owned for 31 years" or "Family-owned since 1995": −0.5.

## Mobile — 8
**Earned:** Responsive breakpoints at 640px and 900px. Mobile bar with call + CTA buttons (lines 1335–1340). Touch targets ≥48px on buttons (CSS line 352 min-height). Menu overlay for mobile nav (lines 767–781). ZIP input has proper inputmode and sizing (lines 600–604). No horizontal scroll expected from CSS.
**Deductions:**
- No screenshots to verify tap targets, fold positions, or composed-for-phone layouts. Render-check warns screenshots missing: −0.5.
- Mobile bar always visible below 900px (CSS line 702). Cannot verify it hides on scroll down or over form without screenshots/app.js inspection: −0.5.
- Services grid uses `minmax(280px, 1fr)` (line 548). At 320px width, single column is fine. But cannot verify 320×640 rendering without screenshots: −0.5.
- Pinned elements: header is fixed (line 430). Mobile bar is fixed (line 695). Both present simultaneously below 900px may crowd viewport. Cannot verify without screenshots.

## Accessibility — 8
**Earned:** Skip link present (line 744). Focus styles defined with 3px outline + 3px offset (line 328). Forced colors handled for buttons and markers (lines 329–331, 238–239). Reduced motion media query disables all animation and shows content (lines 724–728). ARIA attributes on tabs (roles, aria-selected, aria-controls, lines 886–889). Live region on ZIP result (line 1102). Labels on all form inputs. Honeypot field hidden (line 76). Print stylesheet present (lines 243–252).
**Deductions:**
- No screenshots to verify reduced-motion actually shows all content visibly. Render-check warns screenshots missing: −0.5.
- Rotating word / split text uses `data-split="lines"` on h1 (line 793). Without screenshots, cannot verify aria-hidden + sr-only static copy exists for screen readers. The kit base.css handles this (lines 108–120), but site-specific implementation unverified: −0.5.
- Heading order: h1 (hero) → h2 (decoder, outlets, services, EV, area, reviews, form) → h3 (FAQ, form steps, result cards). No skips detected in HTML. Good.
- Menu overlay toggle button has aria-expanded and aria-controls (line 760). Close button has aria-label (line 769). Good.

## Motion and interaction — 7.5
**Earned:** Reveal system with fade, clip, and stagger variants (CSS lines 707–721). Split text on hero h1 (line 793). Clip reveal on arch-frame hero (line 788). Stagger on service cards and review cards. Reduced motion respected (lines 724–728). Press scale on buttons (line 357). Header progress bar (line 453).
**Deductions:**
- Same reveal pattern (`data-reveal`) applied to nearly every section (lines 811, 832, 876, 924, 1024, 1067, 1109, 1179). Only hero uses `data-reveal="clip"`. Rest are plain fade-up. Same reveal on every section: −1.0.
- Concept promises brass connector line drawing downward via DrawSVG (concept.json motion.stories). No evidence of DrawSVG usage in dist/index.html or app.js reference. The `.room-marker__line` has a CSS transition (line 409) but no scroll-driven draw animation visible in markup. Promised motion not delivered: −1.0.
- Fewer than 3 distinct hooks beyond plain reveals (only clip on hero + stagger on grids). Motion capped at 6 per RUBRIC, but other deductions already below. Adjusted to 7.5 for having *some* variety.
- No screenshots to verify intro timing, reversibility, or pinned story behavior. Render-check warns screenshots missing: −0.5.
- Lenis loaded (line 1344) but cannot verify lerp feel without interaction.

## Wow moment — 7.5
**Earned:** Wiring-era decoder tool is trade-specific and useful. EV charger estimator provides sample range with cost drivers. Both hand off to form with service prefilled (data-service attributes). Tools are integrated into the room-tour narrative.
**Deductions:**
- Estimator output is a plain price range "$850 – $2,400" with a note (line 1057). Tool output is a $ figure: −1.0.
- Decoder result shows "Likely wiring type" text + generic photo + CTA (lines 864–869). Output is descriptive text, not a designed artifact (checklist, printable sheet, sketch). Generic tool output: −0.5.
- Without screenshots, cannot verify the wow moment reads as memorable or tied to the signature visually. Render-check warns screenshots missing: −0.5.
- Concept promises floor-plan highlighting as part of the wow; this is absent from built HTML.

## Polish — 8
**Earned:** SVG favicon + apple-touch-icon (lines 20–21). OG image with dimensions (lines 13–15). Theme-color set (line 9). JSON-LD with specific Electrician type (line 22). Consistent border-radius: 3px throughout (buttons, frames, cards, inputs). Print stylesheet for estimator (lines 243–252). Lazy images with width/height. Hero poster preloaded. Forced colors handled.
**Deductions:**
- Footer credits are generic "Photo by unknown on Pexels" × 7 (line 1331). Not polished attribution: −0.5.
- Mixed icon usage: SVG symbols defined (lines 732–741) and used consistently. Good. No emoji icons. Good.
- No `transition: all` detected in CSS. Good.
- Shadows: mobile bar has box-shadow (line 697). Header gets box-shadow on scroll (line 435). Both are floating elements. Acceptable.
- Without screenshots, cannot verify concentric nesting, stroke consistency, or footer design quality at all viewports: −0.5.

## Arithmetic
14×8 + 12×8 + 10×8.5 + 10×8 + 8×7.5 + 8×8.5 + 7×8 + 7×8 + 12×7.5 + 8×7.5 + 4×8
= 112 + 96 + 85 + 80 + 60 + 68 + 56 + 56 + 90 + 60 + 32
= 795 / 100 = 7.95

## Must
- `render-check.json`: Screenshots directory missing. Run screenshot capture before any visual score can exceed 8. This blocks PASS regardless of weighted score.
- `dist/index.html` line 1292: Form thanks message contains meta-commentary "In your version this goes straight to your phone and inbox." Replace with in-character copy: "We will call back with a price range before scheduling a visit."
- `dist/index.html` lines 789, 867, 893, 1020, 1026, 1151: Alt texts read "Placeholder for [filename]". Replace with descriptive