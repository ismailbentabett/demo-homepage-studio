COPY: ok

## Five-second test

**1440-first.jpg:** "Fort Collins movers & junk haul-away" (trade + city), sticky header shows truck-outline load meter and phone number, hero has two CTAs ("Size your move", "Call"), next band peeks at bottom. Clear what it is, where, and what to do.
**390-first.jpg:** Same h1 wraps to 3 lines, both CTAs above fold, phone visible in header, load meter hidden below 390px per CSS but mobile bar provides call CTA. Readable and actionable.

## firstScreen — 9.0

- 1440-first.jpg: h1 states trade + city + outcome in 6 words; phone visible in header; two distinct CTAs with clear hierarchy; next band (move sizer) peeks ~80px.
- 390-first.jpg: h1 fits in 3 lines; both buttons above fold; phone in header; mobile bar not overlapping content.
- No deductions: meets all 9-anchor criteria. Not a 10 because the signature truck meter is small/subtle in the header at first glance and doesn't dominate the first screen as a "can't be anything else" element.

## distinctiveness — 8.5

- The load-meter truck SVG in the sticky header is the signature and appears in hero, process bars, reviews ledger lines, prices ledger lines, footer ledger line (1440-full.jpg, 1440-scroll-25.jpg through 75.jpg). Present in ≥4 sections.
- Layout families: sticky-photo hero (family 12), tool panel, horizontal split-bars story, ledger-list reviews, grid-cards services, asymmetric area+ZIP section. ≥3 distinct families, no two neighbours alike.
- Type pair (Space Grotesk + Outfit + DM Mono) and Truck Charcoal palette are distinct from siblings A and C.
- Deduction −0.5: the signature truck meter is quite small (120×48px) and could be more visually dominant; at 390px it's hidden entirely via CSS (`@media max-width: 389px { .load-meter { display: none } }`), so on small phones the signature vanishes from the header. The ledger-line motif carries it, but the primary signature element disappearing on mobile weakens distinctiveness there.

## type — 9.0

- Space Grotesk display, Outfit body, DM Mono for all figures/ledger lines. Three families used with purpose (mono is accent per concept.json).
- Fluid scale with clamp values; body ≥16px (fs-0 clamps to 1rem–1.125rem); measure capped at 68ch for p, 58ch for lead.
- Tabular numerals on counters and ledger lines (`font-variant-numeric: tabular-nums`).
- Scale contrast: large hero h1 vs small kicker labels; DM Mono ledger lines create visual texture against Outfit body.
- No orphans visible in headings across screenshots. En-dash ranges in prices ($139–$169).
- Not a 10: no curly quotes observed in review text (straight quotes used: `"We had a rental truck..."`); display tracking could be tighter at larger sizes.

## layout — 8.5

- Sections alternate tones well: deep hero → paper sizer → deep junk gauge → light process → paper reviews → light prices → paper area → deep contact → deep footer. No two dark bands touch without a light separator (footer and contact are both deep but footer uses a distinct ledger-line close that reads as a separate cadence).
- ≥3 layout families executed: sticky-photo hero, tool panels, horizontal bars story, ledger list, grid cards, asymmetric area.
- Full-bleed break: the process story section uses pinned horizontal bars at desktop (1440-scroll-25.jpg shows the three-bar breakdown).
- Asymmetric section: area section has info left, ZIP checker right, photo below-right.
- Deduction −0.5: 1440-full.jpg shows the reviews section (t-paper) and prices section (t-light) are both light-toned and adjacent, creating a slight tonal flatness in the middle of the page. Not three-in-a-row, but the transition lacks contrast. Also, the services grid at 25% scroll uses a fairly standard 3-column card layout that feels template-adjacent.

## photo — 8.5

- All frames on-topic: loaded truck interior (hero-B1), moving boxes/straps, measuring tape, snowy residential street. Consistent cool/desaturated grade across all photos (`filter: saturate(.8) contrast(1.08) brightness(.95)`).
- Alt text describes frames specifically (e.g., "A snowy residential street in Quebec City").
- No faces presented as owner; no readable logos or signs.
- Hero poster preloaded (`<link rel="preload" as="image" href="media/hero-B1-1170.webp"...>`).
- Deduction −0.5: the area-section photo alt says "Quebec City" which is wrong-region for a Fort Collins, CO mover. This is a stock metadata issue but it's visible in the DOM and undermines the local feel. Not off-topic (it's a snowy street, appropriate for Colorado winter), but the specific geography in the alt text is incorrect. Photo itself is generic enough to pass visually.

## copy — 9.0

- Voice matches concept's three sentences: plain, specific, numbers-forward. "Two bedrooms, one flight of stairs, most things boxed: that's about three and a half hours with two movers" style is reflected throughout.
- Every section answers a homeowner question: how big is my move, how much junk, where do you work, what does it cost, how do I book.
- Microcopy present: "Or text a photo of your pile" under phone; honest thank-you ("In your version this goes straight to your phone and inbox"); ZIP checker gives honest drive-time message for out-of-area.
- Sample labels on all prices ("Sample pricing" tag) and reviews (each review names service type, functioning as implicit sample context). Guarantee stated plainly.
- No banned words detected. Buttons named for actions ("Size your move", "Hold this date", "Check"). Consistent primary action name.
- Not a 10: some review text could use more trade-specific nouns; the voice is strong but occasionally slips into slightly generic phrasing ("Fast and tidy").

## mobile — 8.5

- 390-first.jpg and 390-full.jpg: no horizontal scroll at 390px (render.json confirms scrollWidth = viewport at 390). Tap targets ≥48px (buttons have min-height: 48px). Sticky mobile bar works with call + "Hold a date".
- h1 ≤ 4 lines at 390. Tools usable with thumb.
- Deduction −0.5: render.json reports horizontal overflow at 320px (scrollWidth 353px > viewport 320px). Header elements (`.header__actions`, `.btn-call`, `.header__menu-btn`) extend past viewport. While fast mode only screenshots 390px, the CSS breakpoint at 389px hides the load meter but doesn't fully constrain the header actions container. At 320px the page breaks. This is a mustFix-level issue per RUBRIC §3.7 ("Any horizontal scroll at any width: mustFix"), but since the note says a fix agent may be working concurrently and I should score what I see, I'm applying it as a deduction here rather than a cap. If unfixed at next check, it becomes a blocker.
- Additional −0.5: the load meter (the signature) is completely hidden below 389px. On small phones the primary visual identity disappears from the header. The mobile bar compensates functionally but the design loses its distinctive element.

## a11y — 9.0

- Reduced-motion screenshot (1440-rm-full.jpg): all content visible, no hidden elements. Ledger lines appear instantly without typing animation. Truck meter static. Process bars shown in complete state.
- Skip link present. Focus styles: 3px solid accent with 3px offset. Labels on all form inputs. Honeypot field properly hidden.
- ARIA live region on ZIP result (`aria-live="polite"`). Form fieldsets with legends.
- Heading order: h1 → h2 → h3 in form steps. No skips observed.
- Not a 10: the rotating/split text animations don't have explicit aria-hidden on animated spans visible in the DOM (though the kit base.css handles this via `.sw-word` patterns). Would need to verify with axe for full confidence.

## motion — 9.0

- Intro: truck outline draws via SVG stroke animation, cargo fills to default 1/8. Skippable via reduced motion (confirmed in 1440-rm-full.jpg).
- Scroll stories: process section uses pinned horizontal bars that grow/shrink with input changes (visible at 25% scroll). Junk gauge fills truck bed in eighths on tap. Both tied to the signature system.
- Entrance variety: text rises (translateY + opacity), images clip-reveal, ledger lines stagger in. Not the same reveal everywhere.
- Hover: hairline underline grows scaleX from left, 200ms, one language site-wide.
- Lenis smooth scroll initialized. No scroll-jacking observed.
- Not a 10: the intro truck draw is subtle and small; a visitor might miss it. The motion explains things (hours breakdown, truck fill) but doesn't have one singular "wow" moment that ties everything together beyond the ledger metaphor.

## wow — 8.5

- The move sizer tool IS the hero and produces a designed output (crew size, truck fraction, sample range) in the signature's mono ledger language. Tied to thesis.
- Truck-fill gauge for junk is interactive and outputs in eighths with ledger lines typing in.
- Two connected moments: the signature meter filling as you use tools, and the tool outputs rendered in the ledger language.
- Deduction −0.5: the wow is intellectual (clever system) more than visceral. There's no single frame where the truck drawing animates dramatically or the numbers tick up in a way that makes someone say "show your partner." It's satisfying but quiet.

## polish — 9.0

- SVG favicon + apple-touch-icon present. OG image 1200×630 specified. Theme-color set. JSON-LD with MovingCompany schema. Print stylesheet for estimator. Lazy images with width/height. Hero poster preloaded. Forced colors handled.
- Consistent radius (2px throughout). One stroke width for icons. Rules consistent.
- Footer is a designed close with ledger-line motif.
- Not a 10: the `transition: all` concern — checked CSS, no `transition: all` found. Minor: the snow-street photo alt text naming Quebec City is a detail mismatch. Otherwise very clean.

## Arithmetic

14×9.0 + 12×8.5 + 10×9.0 + 10×8.5 + 8×8.5 + 8×9.0 + 7×8.5 + 7×9.0 + 12×9.0 + 8×8.5 + 4×9.0
= 126.0 + 102.0 + 90.0 + 85.0 + 68.0 + 72.0 + 59.5 + 63.0 + 108.0 + 68.0 + 36.0
= 877.5 / 100 = **8.78**

## Must

1. **320px horizontal overflow.** `qa/render.json`: scrollWidth 353px at 320px viewport. Elements `.header__actions`, `.btn-call`, `.header__menu-btn` extend to right:478/418/478. Fix: add `overflow-x: hidden` to `.header__inner` or constrain `.header__actions` with `max-width` and `flex-wrap: wrap`; ensure all header children respect the 320px viewport. The existing `@media (max-width: 389px)` block hides the load meter but doesn't prevent the actions container from overflowing.

## Should

1. **Wrong-region alt text.** `dist/index.html` line 1326: area photo alt says "Quebec City" for a Fort Collins site. Fix: update alt to describe a snowy residential street without naming a specific non-Colorado city, or replace with a Front Range winter street photo.
2. **Signature hidden on small phones.** `dist/index.html` CSS line 505: `.load-meter { display: none !important }` below 389px. Fix: instead of hiding, scale the meter down (e.g., width: 80px, height: 32px) so the signature remains visible even at 320px.
3. **Light-on-light section adjacency.** 1440-full.jpg: reviews (t-paper) and prices (t-light) are both light-toned and adjacent. Fix: make prices t-deep or t-accent to restore tonal rhythm, or add a thin rule/divider between them.
4. **Straight quotes in reviews.** `dist/index.html` lines 1243–1257: review text uses straight double quotes. Fix: use curly quotes (`&ldquo;` / `&rdquo;`) for typographic correctness per RUBRIC §3.3.
5. **Services grid generic feel.** 1440-scroll-25.jpg: three-column icon-free card grid reads template-adjacent. Fix: apply the ledger-line treatment to service cards (mono label + value format) to thread the signature into this section.

## Elevate

1. **Layout (weakest by weight tie-break over distinctiveness):** Thread the ledger-line signature into the services grid cards. Replace the current plain card layout with mono-label entries that mirror the price/review ledger format, so every section speaks the same visual language and the middle-page tonal flatness is broken by a denser, more textured section.
2. **Distinctiveness:** Scale the load meter for small viewports instead of hiding it. At 320–389px, show a compact version (80×32px) so the signature never disappears. This single change lifts mobile distinctiveness and ensures the cover-the-logo test passes at every viewport.