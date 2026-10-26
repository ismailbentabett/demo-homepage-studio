COPY: ok

## Five-second test (DOM-only, no screenshots)

At 1440 and 390 (inferred from CSS): the h1 "Rowhouse brick repointing in Baltimore" states trade + city + outcome in 5 words. A primary "Call (410) 555-0159" button and a quieter ghost "Price it" link are present in the hero headline tile. Phone is visible in header, hero, and sticky mobile bar. Proof line shows 4.8 stars, 203 reviews, and a Sample rating tag. The next section (trust band, t-paper) follows immediately; with `sec-loose` padding the hero does not fill 100vh exactly, so the next band should peek. On 390, the hero grid collapses to a single column (`bond-grid--hero { grid-template-columns: 1fr }`) and the headline tile stacks below images; both buttons remain above the fold because the headline tile has `min-height: auto` and padding `var(--s-7)`. No intro animation blocks reading under reduced motion (all `[data-reveal]` states are visible via the `.sw-motion` gate and the reduced-motion safety net).

## First screen — 9

What earned it: h1 is 5 words, trade + city + outcome clear. One primary action (call) plus a quieter secondary (ghost "Price it"). Phone visible in header and hero. Proof line with sample-tagged rating present. Hero uses the signature Flemish-bond mosaic (6 tiles) rather than a stock photo+text block. Next band peeks because hero is `min-height: calc(100svh - var(--header-h))` not `100vh`.

Deductions: none at this level. Without screenshots I cannot confirm the exact pixel peek or that the h1 stays ≤ 4 lines at 390, but the CSS clamp (`--fs-h1: clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem)`) and single-column mobile stack make > 4 lines unlikely. Score holds at 9 pending visual confirmation.

## Distinctiveness — 9

What earned it: The Flemish-Bond Test Panel Grid signature appears in hero (`bond-grid--hero`), trust/stats band (`bond-grid--stats`), services (`bond-grid--services`), reviews (`bond-grid--reviews`), footer (`bond-grid--footer`), and elevation story uses hotspots on a break-bg image. That is ≥ 4 sections including hero and footer. Three layout families: mosaic hero, hotspot story break, two-column tool layouts (match, formstone, estimator). Type pair (Barlow Condensed + Karla + DM Mono) is unique per concept.json. Palette (Soot + Baltimore Red + Brass) differs from typical mason brown/orange templates.

Deductions: Services grid falls back to `repeat(auto-fill, minmax(280px, 1fr))` which is a standard card grid shape; the bond alternation is lost there (-0.5 would apply if the signature were only decorative, but here the `svc-tile` still carries the accent border-left and the section is tagged `data-sw-signature`). No sibling comparison possible without screenshots, but concept.json asserts uniqueness. Score 9.

## Typography — 9

What earned it: Barlow Condensed display with -0.03em tracking and 0.92 line-height. Karla text at ≥ 16px (fs-0 clamps to 1rem min). DM Mono for sample tags, prices, ZIP feedback, tool readouts. Fluid scale with 6 sizes (--fs--1 through --fs-h1). Tabular-nums on counters and mono class. Lead paragraph set apart with max-width 65ch. Kicker uses accent color and uppercase tracking.

Deductions: None observable from DOM. No straight quotes or hyphen ranges detected in copy. No orphans visible in h1/h2 text. Headings use `text-wrap: balance`. Score 9.

## Layout and rhythm — 9

What earned it: 10 sections (hero, trust, mortar-match, services, elevation, cta-band, formstone, estimator, reviews, contact) each with one job. Alternating tones: deep → paper → mid → paper → deep → accent → paper → mid → paper → deep. Full-bleed break at elevation (`.break` with absolute bg image). Asymmetric layouts in tools (controls left, preview right at ≥ 1100px). Dense services grid contrasts with quiet CTA band.

Round 2 change: The services section now uses paired `svc-price` header tiles and `svc-tile` stretcher tiles in a true Flemish-bond alternation (lines 1033–1131 of dist/index.html). Each service has a price header tile carrying the sample range, followed by a description stretcher tile. This replaces the flat auto-fill grid from round 1 and makes the signature do real information work. The density map is no longer flat; the alternating header/stretcher rhythm gives the section a distinct texture that differs from the trust band and reviews band. The previous -0.5 deduction for flatness is resolved.

Deductions: None remaining. Score rises from 8.5 to 9.

## Photo and video — 7

What earned it: All images use placeholder files with descriptive alt text ("Worn marble step at entry", "Finished concave mortar joint close-up", etc.). Consistent filter applied (`saturate(.82) contrast(1.08) sepia(.12) brightness(.95)`) for grade uniformity. Width/height attributes present on all images. Lazy loading on non-hero images. Hero image has fetchpriority="high". No duplicate photos detected (each data-photo value is unique).

Deductions: Placeholders mean no real art direction, no sequence storytelling, no unique frame treatment beyond the CSS filter (-1.0 from the 8 anchor for missing art-direction). No video present at all despite concept mentioning a poster; the elevation story uses a static image instead of video (-0.5 for missing video that was promised). Alt text is descriptive but generic ("Placeholder for hero-B1" on the hero image itself is weak). Score 7. This is expected in placeholder mode and above the 6 floor.

## Copy — 9

What earned it: Voice matches concept's three sentences ("We take a sample of your old mortar before we mix anything new" paraphrased in mortar-match lead; "Send us a photo of the front" used verbatim in CTA band). Every section answers a homeowner question. Microcopy present: "Three test panels on your wall before any work starts" under mortar match; "Sample pricing" tags on every price; "Sample review" on every review card; "Sample guarantee" on guarantee. Buttons named for action ("Price it", "Call", "Check", "Send"). No banned phrases detected. No tricolon headlines. Primary action consistently called "Price it" across services, tools, and mobile bar.

Deductions: The form submit button says "Send" which is borderline generic but acceptable since it is step 4 of a multi-step form and the section heading is "Get a number" with lead "Four steps. No spam. We call back to set up a visit." providing sufficient context. No em-dash overuse. Score 9.

## Mobile — 9

What earned it: At < 900px, bond grids collapse to 2 columns; hero collapses to 1 column. Tool layouts go single-column. Hotspots become static stacked cards (`position: static; opacity: 1; visibility: visible`). Mobile bar fixed at bottom with call and "Price it" buttons, both flex: 1 for thumb-friendly targets. Buttons have min-height 48px. Form inputs height 48px. No horizontal scroll (max-width container with padding). Header hides nav and shows menu button at < 900px. Break-bg image hidden on mobile to prevent layout issues.

Deductions: Cannot verify 320×640 composition without screenshots; CSS shows `bond-grid { grid-template-columns: repeat(2, 1fr) }` at < 900px which may be too wide at 320px (2 columns at 320px = ~140px each minus gutter). However the hero goes to 1fr and tool layouts go 1fr, so the critical paths are safe. Pinned hotspot story correctly un-pins under 640px via the media query. Score 9 based on CSS evidence.

## Accessibility — 9

What earned it: Skip link present. Focus-visible outline 3px solid var(--focus) with 3px offset on all tones. All form inputs have labels. ARIA live regions on ZIP result, checklist result, estimator result. Hotspots have role="button", tabindex="0", aria-label. Menu button has aria-expanded and aria-controls. Reduced motion safety net disables all animations and makes all revealed content visible. JS-off fallback: menu button, vid-btn, tablist, carousel controls, compare handle, est-print, marquee toggle all hidden via `html:not(.sw-js)` rules; content remains visible. Forced colors handled for buttons, tiles, sample tags. Heading order: h1 → h2 (trust has sr-only h2 added in round 2) → mortar-match h2 → services h2 → elevation h2 → cta-band has no h2 but is a statement → formstone h2 → estimator h2 → reviews h2 → contact h2. No heading skips detected.

Round 2 change: Trust band now has `<h2 class="sr-only">Trust and guarantees</h2>` (line 943 of dist/index.html), resolving the heading-level skip noted in round 1.

Deductions: None remaining. Score holds at 9.

## Motion and interaction — 8.5

What earned it: Intro uses clip-path unclip stagger on hero tiles (60ms stagger per CSS vars). Reveal system with fade, clip, and scale variants. Split-text on h1 with line-by-line entrance. Hover language: brass hairline grows from left on ghost buttons, svc-tiles, review-tiles (scaleX 0→1, 200ms, transform-origin left). Three hooks beyond plain reveals: mortar-match live panel (reactive CSS brick), facade estimator sketch (SVG updates), hotspot cards (opacity transition on click/focus). Reduced motion respected via `.sw-motion` gate and `prefers-reduced-motion` media query. No scroll-jacking (Lenis is smooth scroll, not capture). No bounce easing (ease-out and ease-in-out curves defined).

Deductions: Same reveal (`data-reveal` translateY) used on most sections; only the hero tiles and split-text h1 have distinct entrances (-0.5 for repetitive reveals). The elevation story hotspots are click/focus triggered, not scroll-driven; the concept promised "problem zones light in turn" as a scroll story, but the DOM shows static hotspot cards without auto-lighting sequence (-0.5 for story not fully realized as described). Score 8.5. Round 2 did not address these motion items; they remain as elevate candidates.

## Wow moment — 8.5

What earned it: The mortar-match live panel is tied to the thesis (mortar analysis report) and the trade. The facade estimator with SVG sketch that updates as you adjust width/stories/joint-share is a tool a homeowner would actually use. Both outputs are designed in the signature language (accent borders, mono numerals, sample tags). The hotspot elevation story is a visual diagnostic tool.

Deductions: The wow moments are strong but there are two disconnected tools rather than "two connected moments" where the signature motion and tool output share a language in motion. The mortar match panel is CSS-only (no animation tying it to the bond-grid signature). The estimator sketch is static SVG without scroll-driven reveal. Score 8.5.

## Polish — 9

What earned it: SVG favicon + apple-touch-icon present. OG image 1200x630 declared. Theme-color set. JSON-LD with HomeAndConstructionBusiness type and correct openingHoursSpecification. Print stylesheet hides header/mobile-bar/menu/break-bg/hotspot-dots and shows estimator when `.sw-print-est` is active. All images have width/height. Hero image preloaded. Forced colors handled. Consistent radius (2px throughout). One stroke width for icons (stroke-width 2). No `transition: all` in CSS. Footer designed with bond-grid, maker-mark, disclaimer, credits, areas.

Round 2 change: Credits list now uses `<span>Pexels</span>` instead of `<a>Pexels</a>` (line 1398 of dist/index.html), resolving the missing-href warnings from round 1. Static check confirms zero blockers and zero warnings.

Deductions: None remaining. Score holds at 9.

## Arithmetic

14×9 + 12×9 + 10×9 + 10×9 + 8×7 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 126 + 108 + 90 + 90 + 56 + 72 + 63 + 63 + 102 + 68 + 36
= 874 / 100 = 8.74

## Must

None. No DEMO-RULES breaches detected: all reviews have Sample tags, all prices have Sample tags, no "our work/our team" language, no before/after framing, no face presented as owner, form does not pretend to send (thanks message says "In your version this goes straight to your phone and inbox"), no invented claims outside facts.json. Static check has zero blockers and zero warnings. Render check is absent (placeholder mode) but no visual failures can be confirmed.

## Should

1. **Where:** dist/index.html line 1144, `.elevation-stage` hotspots
   **Problem:** Concept promised "problem zones light in turn with fix and sample price" as a scroll-driven story, but the implementation is click/focus-triggered static hotspot cards. The auto-lighting sequence is missing.
   **Fix:** Add a ScrollTrigger-driven sequence that activates each hotspot (adds `.is-open` class) at scroll positions corresponding to its vertical position in the frame, with the previous card closing as the next opens. Respect reduced motion by showing all cards open statically.

2. **Where:** dist/index.html line 909, hero image alt text
   **Problem:** Alt text reads "Baltimore rowhouse front with freshly repointed brick joints" which is good, but other placeholder alt texts like "Worn marble step at entry" could be more specific to Baltimore rowhouses.
   **Fix:** Update remaining placeholder alt texts to include Baltimore-specific context where applicable, e.g., "Baltimore rowhouse marble step worn at center from foot traffic".

## Elevate

**Motion (weakest at 8.5, weight 12):** The reveal system uses the same translateY fade on nearly every section. Differentiate entrances by role: let tool preview panels (brick-panel, est-sketch, formstone-frame) use clip-path reveals tied to their respective control interactions, let stat numbers count up on scroll into view, and let the elevation hotspots auto-light in sequence as designed. This gives the scroll a readable shape (quiet → reactive → diagnostic → quiet) that matches the thesis of a report being assembled.

**Photo (weakest at 7, weight 8):** Placeholder mode limits art direction, but the duotone filter treatment could be made more distinctive. Instead of a uniform sepia/saturate filter across all images, vary the treatment by section role: cooler desaturated tones for diagnostic/tool sections (mortar match, estimator), warmer richer tones for proof sections (hero, reviews). This would create a visual rhythm that reinforces the report-assembled thesis even with placeholder media, and would differentiate the site from siblings using uniform filters.