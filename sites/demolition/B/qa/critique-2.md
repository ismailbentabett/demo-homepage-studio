COPY: ok

**Five-second test (from dist/index.html, no screenshots available):**
"Deck, Shed & Garage Demolition in Toledo" — trade + city + outcome clear in h1 (7 words). Primary action is "Call (419) 555-0180", secondary is sample pricing pill. Phone visible in header and hero. Kicker line adds "Demolition & Haul-Away · Toledo, OH". Without screenshots I cannot verify fold position at 390x844 or 1440x900, intro timing, reduced-motion visibility, or whether the next band peeks. Scores remain provisional pending render capture. Round 1 must-fix items for placeholder alt text were partially addressed (alt text improved but images remain placeholders); sr-only fallback for h1 was NOT added; screenshots still missing.

---

### firstScreen — 8.0
dist/index.html lines 688-693: h1 states trade + city + outcome ("Deck, Shed & Garage Demolition in Toledo") in 7 words. One primary CTA (call), one secondary (sample price pill). Phone visible in header (line 647) and hero (line 691). Kicker provides trade label. Deductions: cannot confirm next band peeks 40-120px without screenshot (-0.5); cannot confirm both actions above fold at 390x844 (-0.5); cannot verify intro <=1.2s or text readable at 0ms reduced motion (-0.5); h1 has data-split="lines" but no sr-only static fallback visible in HTML (line 688) which is a mustFix from round 1 that was NOT fixed (-0.5 would apply but capped by mustFix rule). Ticket rail is aria-hidden="true" which is correct for decorative stubs. **Needs screenshot verification.**

### distinctiveness — 8.5
dist/index.html: Perforated Weigh Ticket signature with dashed-left-border, carbon-teal offset, mono ticket number appears in: hero rail (line 682), scope stack (lines 706-723), services grid (lines 734-813, 9 tickets), tools output cards (lines 873, 903, 921), review rail (lines 937-983), footer closing ticket (line 1128). That is 6 sections including hero and footer, meeting the >=4 threshold. Three layout families: split-layout (scope, area), grid (services), stack (tools, reviews). Palette (paper/deep/accent/signal) differs from typical contractor templates. Deductions: cannot compare against demolition-A/C siblings because no sibling screenshots found (-0.5); ticket motif risks reading as decoration if carbon offset is not functional (-0.5). Cover-the-logo test unverified without screenshots.

### type — 8.5
dist/index.html: Chivo display, Work Sans body, DM Mono accent. Fluid clamp scale (lines 276-281). Body >=16px (fs-1 clamps to 1rem-1.125rem). Tabular-nums on counters (line 646) and ticket numbers. h1 letter-spacing -0.03em, h2 -0.02em. Deductions: cannot verify orphans in headings without screenshots (-0.5); cannot confirm <=5 distinct sizes on screen (-0.5); straight quotes check requires visual inspection. No Inter/Roboto/system-ui as display. Sample-tag uses single span wrapper (double-wrapper issue from round 1 appears fixed per grep showing no nested sample-tag).

### layout — 8.0
dist/index.html: 9 sections alternating paper(hero) -> accent(scope) -> paper(services) -> deep(break) -> mid(tools) -> paper(proof) -> deep(area) -> paper(contact) -> deep(footer). Varied layouts: split, grid, full-bleed break, stack, rail. Deductions: cannot verify two dark bands touching (deep break touches mid tools? need screenshot) (-0.5); cannot confirm blank gaps over half-screen (-0.5); services grid is 3-column at 1200px (line 534) which may read as uniform (-0.5); review rail becomes 4-col grid at 1200px (line 570) which is standard. Full-bleed break provides rhythm interruption. Round 1 elevate move to make "Written scope" ticket span full width was NOT implemented.

### photo — 7.0
dist/index.html lines 679, 821: Images remain placeholders (placeholder-hero-B1.jpg, placeholder-process-loading-trailer.jpg). Alt text was improved from round 1 ("Placeholder for..." replaced with descriptive text), but images are still not curated niche media. Consistent filter applied (saturate 0.85, contrast 1.05, sepia 0.08). Object-position set. Deductions: images are placeholders, not curated niche media (-1.0); cannot verify frames are on-topic residential demolition without seeing them (-0.5); same filter applied uniformly which is good but cannot confirm object-position puts subject on third. **This remains a mustFix: replace placeholder images with approved niche media.**

### copy — 8.5
dist/index.html: Voice is plain and specific: "Boards, joists and posts taken down, footings pulled and the screws picked up with a magnet." Services use homeowner language from brief. Sample labels present on pricing (line 692), reviews (lines 946, 958, 970, 982), rating (line 934). Guarantee line matches concept voice. Deductions: menu drawer (line 664) says "Get a Price" but service cards say "Price it" — two names for primary action (-0.5); form submit button now says "Get my estimate" (line 1111) which is an improvement from round 1's "Send". No banned phrases detected in HTML.

### mobile — 8.0
dist/index.html: Mobile bar fixed bottom (line 1149), min-height 48px on buttons/inputs. Review rail horizontal scroll on mobile, grid at 1200px. Header hides on scroll via CSS (line 408). Menu drawer with backdrop. Deductions: cannot verify tap targets >=48px visually (-0.5); cannot confirm mobile bar hides on scroll down and over form (-0.5); cannot verify h1 <=4 lines at 390x844 (-0.5); pinned scroll under 640px check requires screenshot. CSS shows [data-mobilebar].is-hidden transform but cannot verify behavior.

### a11y — 7.5
dist/index.html: Skip link present (line 632). Focus-visible outline 3px solid var(--focus) with 3px offset (line 334). Reduced-motion media query disables all transforms and animations (lines 473-475). Forced-colors borders on interactive elements (lines 335-337). Labels on all form inputs. aria-live on ZIP result and tonnage counter. aria-expanded on menu button. Deductions: h1 has data-split="lines" (line 688) but no sr-only static fallback — this was a mustFix from round 1 that was NOT fixed (-1.5 per rubric for content invisible/unannounced properly); cannot verify content visible in reduced-motion screenshot (-0.5). Heading order: h1 -> h2 -> h3 in sections, no skips detected. Star ratings have aria-label. **mustFix carries forward.**

### motion — 8.0
dist/index.html: Reveal system with translate-y and clip-path (lines 468-475). Stagger delays via --i custom property. Split text on h1 (line 688). Counter in header (line 646). Ticket hover lifts 2px with carbon shift (lines 383-384). Lenis loaded (line 1156). Deductions: cannot verify intro <=1.2s or skippable (-0.5); cannot confirm >=3 different hooks beyond plain reveals (ticket hover, counter, split text, reveal-stagger = 4, but need visual confirmation) (-0.5); cannot verify story reversibility or pinned-only-at->=640px (-0.5); bounce/elastic easing check requires seeing motion. CSS shows ease-out and ease-in-out curves which are appropriate.

### wow — 8.0
dist/index.html: Tear-Out Sizer (line 831), Debris Load Estimator (line 880), House-Year Check (line 910) output into ticket-styled cards with mono EST/LOAD/YR numbers. Tools are tied to the thesis (paperwork trust). Output is designed in signature language (ticket primitive). Deductions: cannot verify tool actually works and produces useful output without JS execution (-0.5); cannot confirm output is more than plain text line (-0.5); wow moment in reduced motion unverified. The concept of weigh-ticket-as-trust is strong but execution unconfirmed.

### polish — 8.0
dist/index.html: SVG favicon + apple-touch-icon (lines 20-21). OG image 1200x630 specified (lines 13-15). JSON-LD GeneralContractor with hours, areas, phone (line 22). Print stylesheet for estimator (lines 244-253). Theme-color #1E2A36 (line 9). Consistent 2px border-radius on buttons and inputs. Deductions: credits list (line 1135) has two identical "Photo by Demo Homepage Studio on Pexels" entries which is generic (-0.5); cannot verify forced-colors handling visually (-0.5); transition: all not found in CSS (good). Footer is designed with closing ticket.

---

**Arithmetic:**
14x8.0 + 12x8.5 + 10x8.5 + 10x8.0 + 8x7.0 + 8x8.5 + 7x8.0 + 7x7.5 + 12x8.0 + 8x8.0 + 4x8.0
= 112 + 102 + 85 + 80 + 56 + 68 + 56 + 52.5 + 96 + 64 + 32
= 803.5 / 100 = **8.04**

**Must:**
1. `dist/index.html` line 688: h1 has data-split="lines" but no sr-only static fallback for screen readers. This was a mustFix from round 1 and was NOT fixed. Add `<span class="sr-only">Deck, Shed & Garage Demolition in Toledo</span>` inside h1 before the split wrapper.
2. `dist/index.html` lines 679, 821: Images remain placeholders (placeholder-hero-B1.jpg, placeholder-process-loading-trailer.jpg). Alt text was improved but images are not curated niche media. Replace with approved media from niches/demolition/media/manifest.json.
3. `qa/screens/`: Screenshots directory still missing per render-check.json warning. Cannot verify firstScreen fold, mobile layout, reduced-motion visibility, or motion timing. Run render check to capture screenshots before any further scoring rounds.

**Should:**
1. `dist/index.html` line 664: Menu drawer says "Get a Price" but service cards say "Price it". Pick one name for the primary action and use it everywhere. Recommend "Price it" to match service cards.
2. `dist/index.html` line 1135: Credits list has two identical "Photo by Demo Homepage Studio on Pexels" entries. Replace with actual photographer credits from niche media manifest once real images are used.
3. Verify at 390x844 that hero h1 is <=4 lines and both CTAs are above fold. If not, reduce h1 size or move sample-price-pill below fold intentionally.
4. Implement round 1 elevate moves: (a) make "Written scope and load estimate" ticket span full width as featured card in services grid; (b) create asymmetric overlap where break photo bleeds into tools section margin.

**Elevate:**
1. **photo (weakest, weight 8):** Replace placeholder images with curated niche media showing residential-scale demolition (deck tear-down, shed removal, basement gut). Use object-position to place worker/action on right third so left-aligned ticket stubs don't overlap subject. Apply the sepia/saturate grade consistently but vary crop ratios: hero wide, break square or portrait to create visual tension. This moves photo from 7.0 toward 8.5+.
2. **a11y (second weakest at 7.5, weight 7):** Add sr-only static fallback for h1 split text immediately. Then audit reduced-motion screenshot to ensure all content is visible. Consider adding aria-hidden="true" to the rotating/split elements with a parallel sr-only span containing the full static text, so screen readers get stable content while sighted users see the animation. This addresses the mustFix and moves a11y toward 9.0.