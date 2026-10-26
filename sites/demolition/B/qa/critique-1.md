COPY: ok

**Five-second test (from dist/index.html, no screenshots available):**
"Deck, Shed & Garage Demolition in Toledo" — trade + city + outcome clear in h1. Primary action is "Call (419) 555-0180", secondary is sample pricing pill. Phone visible in header and hero. Next section (#scope) should peek below hero. Without screenshots I cannot verify fold position at 390×844 or 1440×900, intro timing, or reduced-motion visibility. Scores are provisional pending render capture.

---

### firstScreen — 8.0
h1 states trade + city + outcome ("Deck, Shed & Garage Demolition in Toledo") in 7 words. One primary CTA (call), one secondary (sample price). Phone visible in header and hero. Kicker line adds "Demolition & Haul-Away · Toledo, OH". Deductions: cannot confirm next band peeks 40–120px without screenshot (−0.5); cannot confirm both actions above fold at 390×844 (−0.5); cannot verify intro ≤1.2s or text readable at 0ms reduced motion (−0.5). Ticket rail is aria-hidden="true" which is correct for decorative stubs. **Needs screenshot verification.**

### distinctiveness — 8.5
Signature "Perforated Weigh Ticket" with dashed-left-border, carbon-teal offset, mono ticket number appears in: hero rail, scope stack, services grid (9 tickets), tools output cards, review rail, footer closing ticket. That is ≥6 sections including hero and footer. Three layout families: split-layout (scope, area), grid (services), stack (tools, reviews). Palette (paper/deep/accent/signal) differs from typical contractor templates. Deductions: cannot compare against demolition-A/C siblings because no sibling screenshots found (−0.5); ticket motif risks reading as decoration if carbon offset is not functional (−0.5). Cover-the-logo test unverified without screenshots.

### type — 8.5
Chivo display, Work Sans body, DM Mono accent. Fluid scale with clamp(). Body ≥16px (fs-1 clamps to 1rem–1.125rem). Tabular-nums on counters and ticket numbers. h1 letter-spacing −0.03em, h2 −0.02em. Deductions: cannot verify orphans in headings without screenshots (−0.5); cannot confirm ≤5 distinct sizes on screen (−0.5); straight quotes check requires visual inspection; sample-tag uses nested span which may cause double styling. No Inter/Roboto/system-ui as display.

### layout — 8.0
Nine sections with alternating tones: paper(hero) → accent(scope) → paper(services) → deep(break) → mid(tools) → paper(proof) → deep(area) → paper(contact) → deep(footer). Varied layouts: split, grid, full-bleed break, stack, rail. Deductions: cannot verify two dark bands touching (deep break touches mid tools? need screenshot) (−0.5); cannot confirm blank gaps over half-screen (−0.5); services grid is 3-column at 1200px which may read as uniform (−0.5); review rail becomes 4-col grid at 1200px which is standard. Full-bleed break provides rhythm interruption.

### photo — 7.0
Hero uses placeholder-hero-B1.jpg with alt="Placeholder for hero-B1". Break uses placeholder-process-loading-trailer.jpg. Both have filter: saturate(0.85) contrast(1.05) sepia(0.08) for consistent grade. Object-position set. Deductions: images are placeholders, not curated niche media (−1.0); alt text says "Placeholder for..." which is not descriptive (−0.5); cannot verify frames are on-topic residential demolition without seeing them (−0.5); same filter applied uniformly which is good but cannot confirm object-position puts subject on third. **This is a mustFix: replace placeholder alt text and verify media matches niche manifest.**

### copy — 8.5
Voice is plain and specific: "Boards, joists and posts taken down, footings pulled and the screws picked up with a magnet." Services use homeowner language from brief. Sample labels present on pricing, reviews, rating. Guarantee line: "Your written scope is the price; if we find more, we stop and show you before any extra work." Deductions: "Get a Price" in mobile bar vs "Price it" in service cards — two names for primary action (−0.5); form submit button says "Send" which is generic (−0.5); cannot verify microcopy at moments of doubt without screenshots. No banned phrases detected in HTML.

### mobile — 8.0
Mobile bar fixed bottom with call + "Get a Price" buttons. Header hides on scroll. Menu drawer with backdrop. Form inputs min-height 48px. Buttons min-height 48px. Review rail scrolls horizontally on mobile, becomes grid at 1200px. Deductions: cannot verify tap targets ≥48px visually (−0.5); cannot confirm mobile bar hides on scroll down and over form (−0.5); cannot verify h1 ≤4 lines at 390×844 (−0.5); pinned scroll under 640px check requires screenshot. CSS shows [data-mobilebar].is-hidden transform but cannot verify behavior.

### a11y — 8.0
Skip link present. Focus-visible outline 3px solid var(--focus) with 3px offset. Reduced-motion media query disables all transforms and animations. Forced-colors borders on interactive elements. Labels on all form inputs. aria-live on ZIP result and tonnage counter. aria-expanded on menu button. Deductions: cannot verify content visible in reduced-motion screenshot (mustFix if hidden) (−0.5); rotating word / split text needs aria-hidden with sr-only static copy — data-split="lines" on h1 but no sr-only fallback visible in HTML (−0.5); ticket rail aria-hidden="true" is correct; star ratings have aria-label. Heading order: h1 → h2 → h3 in sections, no skips detected.

### motion — 8.0
Reveal system with translate-y and clip-path. Stagger delays via --i custom property. Split text on h1. Counter in header. Ticket hover lifts 2px with carbon shift. Lenis loaded. Deductions: cannot verify intro ≤1.2s or skippable (−0.5); cannot confirm ≥3 different hooks beyond plain reveals (ticket hover, counter, split text, reveal-stagger = 4, but need visual confirmation) (−0.5); cannot verify story reversibility or pinned-only-at-≥640px (−0.5); bounce/elastic easing check requires seeing motion. CSS shows ease-out and ease-in-out curves which are appropriate.

### wow — 8.0
Tear-Out Sizer and Debris Load Estimator tools output into ticket-styled cards with mono EST/LOAD numbers. House-Year Check provides testing policy. Tools are tied to the thesis (paperwork trust). Output is designed in signature language (ticket primitive). Deductions: cannot verify tool actually works and produces useful output without JS execution (−0.5); cannot confirm output is more than plain text line (−0.5); wow moment in reduced motion unverified. The concept of weigh-ticket-as-trust is strong but execution unconfirmed.

### polish — 8.0
SVG favicon + apple-touch-icon. OG image 1200×630 specified. JSON-LD GeneralContractor with hours, areas, phone. Print stylesheet for estimator. Theme-color #1E2A36. Consistent 2px border-radius on buttons and inputs. Deductions: cannot verify forced-colors handling visually (−0.5); credits list says "Photo by Demo Homepage Studio on Pexels" twice which is generic (−0.5); transition: all not found in CSS (good); mixed radius check needs visual. Footer is designed with closing ticket.

---

**Arithmetic:**
14×8.0 + 12×8.5 + 10×8.5 + 10×8.0 + 8×7.0 + 8×8.5 + 7×8.0 + 7×8.0 + 12×8.0 + 8×8.0 + 4×8.0
= 112 + 102 + 85 + 80 + 56 + 68 + 56 + 56 + 96 + 64 + 32
= 807 / 100 = **8.07**

**Must:**
1. `dist/index.html` line 679, 821: Replace placeholder alt text ("Placeholder for hero-B1", "Placeholder for process-loading-trailer") with descriptive alt matching niche media manifest. Verify images exist in niches/demolition/media/manifest.json.
2. `qa/screens/`: Capture screenshots. Render-check warns directory missing. Cannot verify firstScreen fold, mobile layout, reduced-motion visibility, or motion timing without them. Run render check before round 2.
3. `dist/index.html` line 688: h1 has data-split="lines" but no sr-only static fallback. Add `<span class="sr-only">Deck, Shed & Garage Demolition in Toledo</span>` inside h1 before the split wrapper so screen readers get stable text.

**Should:**
1. `dist/index.html` line 1151: Mobile bar says "Get a Price" but service cards say "Price it". Pick one name for the primary action and use it everywhere. Recommend "Price it" to match service cards.
2. `dist/index.html` line 1111: Form submit button says "Send". Change to "Send scope request" or "Get my estimate" to be specific.
3. `dist/index.html` line 958, 970, 982, 946: Nested `<span class="sample-tag"><span class="sample-tag">Sample review</span></span>` — double wrapper causes double padding/styling. Remove inner span.
4. `dist/index.html` line 1135: Credits list has two identical "Photo by Demo Homepage Studio on Pexels" entries. Replace with actual photographer credits from niche media manifest.
5. Verify at 390×844 that hero h1 is ≤4 lines and both CTAs are above fold. If not, reduce h1 size or move sample-price-pill below fold intentionally.

**Elevate:**
1. **photo (weakest, weight 8):** Replace placeholder images with curated niche media showing residential-scale demolition (deck tear-down, shed removal, basement gut). Use object-position to place worker/action on right third so left-aligned ticket stubs don't overlap subject. Apply the sepia/saturate grade consistently but vary crop ratios: hero wide, break square or portrait to create visual tension. This moves photo from 7.0 toward 8.5+.
2. **layout (weight 10, tied weakest with firstScreen/mobile/a11y/motion/wow/polish at 8.0):** Break the services grid uniformity by making one ticket (e.g., "Written scope and load estimate") span full width as a featured card with larger type and the carbon-offset signature visible. This creates hierarchy within the grid and makes the signature do structural work rather than repeating identically nine times. Pair with an asymmetric overlap where the break photo bleeds into the tools section margin, creating a deliberate grid break that ties the full-bleed moment to the next dense section.