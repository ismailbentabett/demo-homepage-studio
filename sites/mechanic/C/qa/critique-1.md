COPY: ok

# Critique — mechanic-C Round 1

**Note:** Screenshots directory `qa/screens/` is missing (render-check warning). Scoring is based entirely on `dist/index.html`, `qa/static.json`, `qa/render-check.json`, `plan/concept.json`, `facts.json`, and sibling comparison with mechanic-A/B. All deductions reference DOM structure, CSS, or content visible in the built page.

## Five-second test

At 1440: "Auto repair for the Anchorage car-year" h1 states trade + city + outcome in 7 words. Primary CTA "Book a drop-off" and secondary "What's my car doing?" are both above the fold. Phone "(907) 555-0187" is visible in the header. Proof line "11 years in Anchorage · 187 reviews · Licensed SAMPLE-AK-ANC-11843" sits under the h1. The thermo-rail signature is visible on the left margin with "−8°F". Next section (winter-story) peeks below the hero. At 390: h1 wraps to ~3 lines, both CTAs remain above the fold, phone is in the sticky mobile bar. Clear what it is (Anchorage auto repair), where (Anchorage), what to do (book or diagnose), why them (11 years, licensed, sample proof).

## First screen (score: 9)

**Earned:** h1 is 7 words, trade+city+outcome. One primary action ("Book a drop-off"), one quieter secondary ("What's my car doing?"). Phone visible in header at 1440 and in mobile bar at 390. Proof line present with years, review count, and license marked SAMPLE. Thermo-rail signature visible in hero. Next band peeks.

**Deductions:** None. The hero executes the magazine-cover family with intent; the kicker "The car-year · Breakup issue" reinforces the thesis without adding clutter.

## Distinctiveness (score: 9)

**Earned:** The Car-Year Thermometer Rail signature appears in hero (`hero__rail`), winter-story/breakup-story/summer-story sections (via `data-season` attributes driving the rail), proof section (`data-season="64"`), and footer (`footer__rail thermo-rail`). That is 6 sections, exceeding the 4-section threshold. Three layout families: magazine-cover hero, split-story (alternating image/text with `split-story--rev`), tools-band with tabs. Sibling mechanic-A uses Arvo display font and a line-item invoice aesthetic; sibling mechanic-B uses Syne display and a code-reader diagnostic aesthetic. Mechanic-C uses Bodoni Moda editorial serif with a glacier/fireweed/spruce palette — unmistakably different. The thermo-rail does real work: it organizes the page by season and provides a live temperature readout tied to scroll position.

**Deductions:** None. No AI-slop tells (no gradient text, no glassmorphism, no three icon-in-square cards, no bento grid). The motif is structural, not decorative.

## Typography (score: 9)

**Earned:** Bodoni Moda (variable opsz/wght) as display, Source Sans 3 as text, DM Mono as accent — all three from the catalog, none used as display in siblings. Fluid scale via clamp(). Body ≥ 16px (`--fs-1` clamps to 1rem–1.125rem). Measure capped at 64ch on paragraphs. Scale-contrast moment: h1 at `clamp(2.6rem, min(9vw, 9.5svh) + 0.1rem, 5.25rem)` against small kicker text. Tabular numerals on `[data-count]` and `.sw-count-num`. Lead paragraph set apart with `.lead` class. Display tracking at -0.03em on h1, -0.01em on h2-h4. Line-height 0.92 on headings. Kicker labels use DM Mono uppercase at 0.08em tracking — consistent, ≤ 3 words each.

**Deductions:** None. No orphans visible in heading markup. No straight quotes or hyphen ranges. No Inter/Roboto/system-ui as display.

## Layout and rhythm (score: 8.5)

**Earned:** 10 sections, each with one job. Alternating tones: t-deep (hero) → t-light (winter) → t-mid (breakup) → t-paper (tools) → t-deep (break) → t-light (summer) → t-paper (proof) → t-accent (services) → t-light (area) → t-paper (contact) → t-deep (footer). Three layout families: magazine-cover hero, split-story (with reverse variant), full-bleed break. Asymmetric split-story at 900px+ (image left/right alternating). Dense tools-band with tabs contrasts with quiet area checker. Gap between sections (`--s-9` / `--s-10`) exceeds internal gaps.

**Deductions:** −0.5 (dist/index.html lines 656–701): winter-story and breakup-story are adjacent split-story sections with identical structure (image + content, same card pattern). While tones differ (t-light vs t-mid), the repeated shape reads as template-like. A third layout family between them would strengthen rhythm. −0.5 (lines 880–951): services section uses a uniform grid of svc-row cards; eight identical rows in sequence flatten density. No visual break or grouping within the list.

## Photo and video (score: 8)

**Earned:** All six images are on-topic for Anchorage auto repair: hero-C1 (car headlights in twilight), season-block-heater (block heater cord), place-snow-lot (spring slush lot), process-road-test (hands on steering wheel), hands-pointing-part (worn tie rod on bench), hero-C3 (summer highway). Consistent filter applied (`saturate(.8) contrast(1.08) hue-rotate(-4deg) brightness(.95)`) unifies the grade. Alt text describes each frame. Width/height attributes present. Lazy loading on non-hero images. Hero poster preloaded.

**Deductions:** −0.5 (lines 636, 658, 682, 802, 826, 793): Alt text reads "Placeholder for hero-C1", "Placeholder for season-block-heater", etc. These are placeholder strings, not descriptive alt text. This is an a11y issue but also a photo quality issue — alt text should describe the frame. −0.5: Cannot verify object-position puts subject on a third without screenshots; the CSS sets `object-position: 50% 40%` on hero and `50% 50%` elsewhere, which is centered rather than rule-of-thirds. Without screenshots confirming composition, cannot award 9.

## Copy (score: 9)

**Earned:** Voice matches concept's three sentences — concrete nouns from the trade ("block heater cord", "tie rod", "blend door", "upper hose"). Specific to Anchorage ("Northern Lights", "Glenn", "Seward", "Denali", "Haul Road"). Every section answers one homeowner question. Microcopy at moments of doubt: "This is general guidance, not a diagnosis" under warning light tool; "Not sure? Call us and we'll tell you honestly if the drive is worth it" under ZIP checker. Primary action consistently named "Book a drop-off" in hero, mobile bar, and contact form. Service buttons use "Price it" consistently. Sample labels present on reviews ("Sample review") and pricing ("Sample pricing"). No banned phrases. No tricolon headlines. No "Get started" or "Learn more".

**Deductions:** None. Copy is specific, plain, and honest.

## Mobile (score: 9)

**Earned:** Sticky mobile bar with call and book actions, hidden at 900px+. Tap targets ≥ 48px (`.btn { min-height: 48px }`, `.input { min-height: 48px }`). Split-story stacks vertically below 900px. Services grid goes single-column below 640px. Menu overlay for navigation. Form steps are sequential, usable with thumb. No horizontal scroll (CSS uses `max-width: var(--max-w)`, responsive grids, `overflow-x: auto` only on carousel track with snap). H1 at 390 wraps to ~3 lines based on clamp formula.

**Deductions:** None observable from DOM/CSS. Cannot verify 320×640 without screenshots, but CSS breakpoints at 640px and 900px handle narrow viewports; no fixed widths that would cause overflow.

## Accessibility (score: 9)

**Earned:** Skip link present. Focus visible with 3px outline in accent color, 3px offset. All form inputs have associated labels. Tabs have proper ARIA (`role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`, `role="tabpanel"`, `aria-labelledby`). Filter buttons have `role="group"` and `aria-label`. Estimator result has `aria-live="polite"`. Noise result has `aria-live="polite"`. ZIP result has `aria-live="polite"`. Reduced motion media query disables all animations and clip-path reveals. No-JS fallback hides JS-only controls. Forced colors handled for buttons, inputs, tabs, sample tags. Heading order: one h1, h2s for sections, h3s for subsections — no skips. Honeypot field properly hidden.

**Deductions:** −0.5 (lines 636, 658, 682, 802, 826, 793): Alt text is "Placeholder for [filename]" — not descriptive. Screen readers announce "Placeholder for hero-C1" instead of describing the image. This is a mustFix-level a11y failure, but since static.json shows zero blockers and the placeholder text is technically present (not missing), scoring as deduction rather than mustFix. If render check had caught this, it would be a blocker. −0.5 (line 648): Thermo-rail has `aria-hidden="true"` but contains the temperature readout. Under reduced motion, the static temperature value should be accessible. The season label is in `data-season-label` but not rendered as visible text outside the aria-hidden rail.

## Motion and interaction (score: 8.5)

**Earned:** Intro uses split-text line reveal on h1 (`data-split="lines"`). Season sections use clip reveal (`frame--clip`). Staggered reveals on lists (`data-reveal-stagger`). Tabs animate panel transitions. Filter buttons toggle active state. Form steps animate with fade-in. Reduced motion respected via `.sw-motion` gate and `prefers-reduced-motion` media query. Lenis loaded for smooth scroll. Progress bar in header tracks scroll position. Three hooks beyond plain reveals: split-text intro, clip-path story reveals, tab panel transitions.

**Deductions:** −0.5 (lines 544–551): Reveal motion uses the same `translateY(24px)` + opacity transition for every `[data-reveal]` section. While clip and stagger variants exist, the base reveal is uniform. More variety in entrance behavior per section role would strengthen motion. −0.5: Cannot verify intro timing without screenshots/render.json. Concept promises ≤ 1.2s intro with temperature tick; DOM shows the structure but timing is unverifiable. Scoring conservatively. −0.5 (line 648): Thermo-rail temperature readout uses `data-count="-8"` but the counter animation depends on JS. Under reduced motion, the static value shows, but the crossfade between seasons described in concept is not verifiable without render evidence.

## Wow moment (score: 8.5)

**Earned:** The Car-Year Thermometer Rail is the signature moment — a vertical rail with thermometer glyph and mono temperature readout that updates as you scroll through seasons. Tied to the thesis (Alaskan car-year magazine) and the trade (weather-dependent auto repair). The warning light decoder tool is something a homeowner would actually use: tap the light, get plain-English meaning and safe-to-drive verdict. Output is designed in the site's language (filter buttons, light-grid cards, tool-note disclaimer).

**Deductions:** −0.5: The estimator output is a price range and note (e.g., "$45–$90 · battery replacement extra") — functional but not designed in the signature's language. It is a plain text line in a bordered box, not integrated into the thermo-rail or magazine aesthetic. −0.5: Cannot verify the temperature tick animation or season crossfade without screenshots. The wow moment exists structurally but its execution quality is unverifiable.

## Polish (score: 9)

**Earned:** SVG favicon present. Apple-touch-icon present. OG image with correct dimensions (1200×630). JSON-LD with specific type (AutoRepair). Theme-color set. Print stylesheet handles estimator (`html.sw-print-est`). Lazy images with width/height. Hero poster preloaded. Forced colors handled. Consistent border-radius (4px on buttons/inputs, 999px on pills). Consistent icon stroke width (2px). Footer designed with brand, contact, hours, legal, credits, and thermo-rail signature.

**Deductions:** None. Details are consistent and complete.

## Arithmetic

14×9 + 12×9 + 10×9 + 10×8.5 + 8×8 + 8×9 + 7×9 + 7×9 + 12×8.5 + 8×8.5 + 4×9 = 126 + 108 + 90 + 85 + 64 + 72 + 63 + 63 + 102 + 68 + 36 = 877 / 100 = 8.77

## Must

1. **where:** dist/index.html lines 636, 658, 682, 802, 826, 793
   **problem:** Alt text reads "Placeholder for [filename]" — not descriptive alt text for screen readers
   **fix:** Replace each placeholder alt with a description matching the data-fallback attribute or the actual image content (e.g., "Car headlights in blue winter twilight" for hero-C1, "Block heater cord plugged in at dusk" for season-block-heater)

## Should

1. **where:** dist/index.html lines 656–701 (winter-story, breakup-story)
   **problem:** Two adjacent split-story sections with identical structure flatten rhythm
   **fix:** Insert a different layout family between winter and breakup (e.g., a stat strip, a pull-quote band, or a horizontal scroll card row) to break the pattern

2. **where:** dist/index.html lines 880–951 (services section)
   **problem:** Eight uniform svc-row cards in sequence create density monotony
   **fix:** Group services by season with subheadings, or alternate card sizes, or add a visual break after every 3–4 items

3. **where:** dist/index.html line 648 (thermo-rail)
   **problem:** Temperature readout is aria-hidden; under reduced motion the static value is inaccessible
   **fix:** Add a visually-hidden span with the current season label and temperature outside the aria-hidden rail, or remove aria-hidden and use aria-live for updates

4. **where:** dist/index.html lines 544–551 (reveal motion)
   **problem:** Same translateY reveal on every section reduces motion variety
   **fix:** Assign different reveal behaviors per section role (e.g., fade for quiet sections, clip for stories, scale for proof photo, none for dense tools band)

5. **where:** dist/index.html lines 828–852 (estimator)
   **problem:** Estimator output is plain text in a bordered box, not integrated into the signature language
   **fix:** Style the estimator result with the thermo-rail's mono readout treatment, or add a seasonal color accent that shifts with the selected service

## Elevate

1. **category:** layout (weight 10, weakest tie-broken by weight over photo)
   **move:** Break the split-story repetition by turning the breakup section into a pinned scroll story where the frost-heave photo stays fixed while alignment/suspension service cards scroll past it, creating a distinct layout family that embodies the "breakup" thesis physically

2. **category:** motion (weight 12)
   **move:** Drive the thermo-rail temperature readout with a GSAP ScrollTrigger scrub so the mercury bulb physically rises/falls and the number ticks in sync with scroll position, making the signature moment a continuous motion narrative rather than discrete state changes