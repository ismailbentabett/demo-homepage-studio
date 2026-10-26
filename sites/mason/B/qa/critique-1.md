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

## Layout and rhythm — 8.5

What earned it: 10 sections (hero, trust, mortar-match, services, elevation, cta-band, formstone, estimator, reviews, contact) each with one job. Alternating tones: deep → paper → mid → paper → deep → accent → paper → mid → paper → deep. Full-bleed break at elevation (`.break` with absolute bg image). Asymmetric layouts in tools (controls left, preview right at ≥ 1100px). Dense services grid contrasts with quiet CTA band.

Deductions: Services section uses 9 identical `svc-tile` cards in an auto-fill grid; while each tile has the accent border, the rhythm of 9 same-shaped cards in a row reads flat (-0.5 for density map flatness). The trust band and services are both t-paper and t-paper respectively with only the mortar-match (t-mid) between them; however they are separated by the mid-tone match section so no three same-tone sections touch. No blank gaps over half a screen observable from CSS. Score 8.5.

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

What earned it: Skip link present. Focus-visible outline 3px solid var(--focus) with 3px offset on all tones. All form inputs have labels. ARIA live regions on ZIP result, checklist result, estimator result. Hotspots have role="button", tabindex="0", aria-label. Menu button has aria-expanded and aria-controls. Reduced motion safety net disables all animations and makes all revealed content visible. JS-off fallback: menu button, vid-btn, tablist, carousel controls, compare handle, est-print, marquee toggle all hidden via `html:not(.sw-js)` rules; content remains visible. Forced colors handled for buttons, tiles, sample tags. Heading order: h1 → h2 (trust has no h2, but stats are in stat-tiles; mortar-match h2 → services h2 → elevation h2 → cta-band has no h2 but is a statement → formstone h2 → estimator h2 → reviews h2 → contact h2). No heading skips detected.

Deductions: Trust band has no h2; it jumps from hero h1 to mortar-match h2. This is a minor heading-level skip (h1 → h2 is fine, but the trust section lacks any heading, which means the stats tiles are orphaned content without a section label). Not a mustFix but worth noting. Rotator not used, so no rotating-text a11y concern. Score 9.

## Motion and interaction — 8.5

What earned it: Intro uses clip-path unclip stagger on hero tiles (60ms stagger per CSS vars). Reveal system with fade, clip, and scale variants. Split-text on h1 with line-by-line entrance. Hover language: brass hairline grows from left on ghost buttons, svc-tiles, review-tiles (scaleX 0→1, 200ms, transform-origin left). Three hooks beyond plain reveals: mortar-match live panel (reactive CSS brick), facade estimator sketch (SVG updates), hotspot cards (opacity transition on click/focus). Reduced motion respected via `.sw-motion` gate and `prefers-reduced-motion` media query. No scroll-jacking (Lenis is smooth scroll, not capture). No bounce easing (ease-out and ease-in-out curves defined).

Deductions: Same reveal (`data-reveal` translateY) used on most sections; only the hero tiles and split-text h1 have distinct entrances (-0.5 for repetitive reveals). The elevation story hotspots are click/focus triggered, not scroll-driven; the concept promised "problem zones light in turn" as a scroll story, but the DOM shows static hotspot cards without auto-lighting sequence (-0.5 for story not fully realized as described). Score 8.5.

## Wow moment — 8.5

What earned it: The mortar-match live panel is tied to the thesis (mortar analysis report) and the trade. The facade estimator with SVG sketch that updates as you adjust width/stories/joint-share is a tool a homeowner would actually use. Both outputs are designed in the signature language (accent borders, mono numerals, sample tags). The hotspot elevation story is a visual diagnostic tool.

Deductions: The wow moments are strong but there are two disconnected tools rather than "two connected moments" where the signature motion and tool output share a language in motion. The mortar match panel is CSS-only (no animation tying it to the bond-grid signature). The estimator sketch is static SVG without scroll-driven reveal. Score 8.5.

## Polish — 9

What earned it: SVG favicon + apple-touch-icon present. OG image 1200x630 declared. Theme-color set. JSON-LD with HomeAndConstructionBusiness type and correct openingHoursSpecification. Print stylesheet hides header/mobile-bar/menu/break-bg/hotspot-dots and shows estimator when `.sw-print-est` is active. All images have width/height. Hero image preloaded. Forced colors handled. Consistent radius (2px throughout). One stroke width for icons (stroke-width 2). No `transition: all` in CSS. Footer designed with bond-grid, maker-mark, disclaimer, credits, areas.

Deductions: Credits list shows "Photo by unknown on Pexels" with `<a>` tags missing href (static.json warnings). This is a polish issue (-0.5 would apply if mixed radius or shadows on non-floating things, but neither is present). The missing hrefs are already flagged in static.json as warnings, not blockers. Score 9.

## Arithmetic

14×9 + 12×9 + 10×9 + 10×8.5 + 8×7 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9
= 126 + 108 + 90 + 85 + 56 + 72 + 63 + 63 + 102 + 68 + 36
= 869 / 100 = 8.69

## Must

None. No DEMO-RULES breaches detected: all reviews have Sample tags, all prices have Sample tags, no "our work/our team" language, no before/after framing, no face presented as owner, form does not pretend to send (thanks message says "In your version this goes straight to your phone and inbox"), no invented claims outside facts.json. Static check has zero blockers. Render check is absent (placeholder mode) but no visual failures can be confirmed.

## Should

1. **Where:** dist/index.html line 1338, `ul.credits > li > a`
   **Problem:** Eight `<a>` tags wrapping "Pexels" have no href attribute, generating static.json warnings.
   **Fix:** Either add `href="https://www.pexels.com"` (or the actual credit URL) or replace `<a>Pexels</a>` with plain text `<span>Pexels</span>` since these are demo placeholders and linking nowhere is worse than no link.

2. **Where:** dist/index.html line 1086, `.elevation-stage` hotspots
   **Problem:** Concept promised "problem zones light in turn with fix and sample price" as a scroll-driven story, but the implementation is click/focus-triggered static hotspot cards. The auto-lighting sequence is missing.
   **Fix:** Add a ScrollTrigger-driven sequence that activates each hotspot (adds `.is-open` class) at scroll positions corresponding to its vertical position in the frame, with the previous card closing as the next opens. Respect reduced motion by showing all cards open statically.

3. **Where:** dist/index.html line 927, trust band section
   **Problem:** Section has no heading element; stats tiles are orphaned content without a section label for screen readers and document outline.
   **Fix:** Add `<h2 class="sr-only">Trust and guarantees</h2>` as the first child of `.sec-trust .container`, before the bond-grid. This preserves the visual design while fixing the heading skip.

4. **Where:** dist/index.html line 895, hero image alt text
   **Problem:** Alt text reads "Placeholder for hero-B1" which is not descriptive for accessibility or SEO.
   **Fix:** Replace with a descriptive alt matching the niche, e.g., "Baltimore rowhouse front with freshly repointed brick joints". Update the build token or media manifest so reskins inherit proper alt text.

## Elevate

**Layout (weakest at 8.5, weight 10):** The services section's 9 identical auto-fill cards flatten the rhythm. Turn the services grid into a true Flemish-bond alternation: pair each service stretcher tile with a header tile carrying the sample price range and an icon or detail photo. This makes the signature do real information work (price + service in one bond unit) instead of falling back to a generic card grid at the section where density matters most.

**Motion (weakest tied at 8.5, weight 12):** The reveal system uses the same translateY fade on nearly every section. Differentiate entrances by role: let tool preview panels (brick-panel, est-sketch, formstone-frame) use clip-path reveals tied to their respective control interactions, let stat numbers count up on scroll into view, and let the elevation hotspots auto-light in sequence as designed. This gives the scroll a readable shape (quiet → reactive → diagnostic → quiet) that matches the thesis of a report being assembled.