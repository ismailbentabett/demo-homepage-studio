# Concept — farm-C (Sand Road Farm)

## Three alternatives, rejected

1. **A harvest calendar grid.** Twelve boxes with crop icons. Rejected: it is what every CSA template does; no sense of place, no Wiregrass sand or pine.
2. **A dirt-road photo essay.** Full-bleed photos of fields with captions. Rejected: beautiful but passive; answers nothing above the fold, no tool, no month anchor.
3. **A literal almanac book.** Leather-bound spread aesthetic. Rejected: skeuomorphic, reads as antique rather than working farm; would clash with the brief's color-led warmth.

## The thesis

The site is a Wiregrass almanac strip: twelve months laid out as a horizontal rail on desktop and a stacked deck on mobile, each month a card that carries its crop, its weather line, and the job on the farm that month; the current month is found and lit on load so the visitor lands inside the season, not outside it.

## The signature system: the Wiregrass almanac

A month marker (three-letter abbreviation in serif, a thin terracotta rule beneath) appears in five places:
1. **Hero:** the current month's marker sits beside the h1, lit in accent; the map behind shows the farm pin and the towns it reaches.
2. **Season spreads (4 sections):** each spread opens with its month marker at full width, then the crop, weather line, and field photo.
3. **Services:** each service card carries the month(s) it belongs to as a small marker pill.
4. **Reviews:** each review carries the month it was earned as a faded marker in the corner.
5. **Footer:** the full twelve-marker strip resets, all dimmed except the current month.

Hook: `data-sw-signature="almanac-month"`.

## Type

- **Display:** Young Serif — heavy, rounded old-style serif with homely confidence; set large for month names and place names. Unique in the library (not used by any delivered site).
- **Text:** DM Sans — clean grotesk with optical-size axis; readable at small sizes for blurbs, tool labels, and form steps.
- Pair rationale: warm serif voice for the land and the month; neutral sans for the facts and the tools. No sibling uses this pair.

## Palette

Family: **Wiregrass Sand + Red Clay + Pine Green**

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| ink | #2B2318 | sand #F2E8D5 | 11.2 | body on paper |
| sand (paper) | #F2E8D5 | ink #2B2318 | 11.2 | body background |
| clay (accent) | #A64B2A | sand #F2E8D5 | 5.1 | month markers, buttons, rules |
| clay-ink | #7A3520 | sand #F2E8D5 | 7.8 | accent words on light |
| deep | #1E1A14 | sand #F2E8D5 | 14.6 | deep band body |
| pine | #2D4A3E | sand #F2E8D5 | 7.3 | secondary accents, tags |
| signal | #D4943A | deep #1E1A14 | 6.2 | open-now badge, active month |

All ratios verified ≥ 4.5:1 for body text, ≥ 3:1 for large text and accent-on-band.

## Hero family

**15 — Map / area-led.** An illustrated SVG map of the Wiregrass county roads with the farm marked and the five towns it reaches; a month dial on the map shows what is in the ground now. Promise beside it. Unique in the farm niche (A uses 12 sticky photo, B uses 8 mosaic).

## Motion score

- **Intro (≤ 1.2 s):** the county roads draw themselves in from the edges to the farm pin via DrawSVG, 1.4 s, ease-out; the current month marker fades up at the end. Skippable; static map visible immediately with reduced motion.
- **Scroll story 1 (desktop ≥ 640 px):** a horizontal almanac rail pinned for four month spreads (Mar · Jun · Aug · Dec); the map tint shifts from spring green to summer gold to harvest amber to winter grey as --sw-p advances. Height: calc(4 * 55svh + 100svh). Phone: stacked cards with clip reveal, no pin.
- **Scroll story 2:** the field-to-stand photo break wipes left-to-right via clip-path driven by --sw-p, revealing the warm grade beneath.
- **Entrance patterns:** text rises (opacity 0→1, translateY 24px→0, 500 ms); images unclip (clip-path inset). Two patterns only.
- **Hover:** a hairline under the item that grows scaleX(0→1) from left, 200 ms, one language site-wide.
- **Reduced motion:** everything visible, no draws, no pins, no clips; the almanac is a static stacked list.

## Tools

1. **Season wheel (as the almanac).** Input: tap a month. Output: crops + events for that month. Handoff: "Reserve for [month]" pre-fills the form.
2. **Field trip planner.** Input: number of kids, grade, month. Output: what the visit covers and the best month. Handoff: "Book a visit" pre-fills service = Field trips.
3. **ZIP checker.** Input: ZIP. Output: yes/no + nearest delivery point. Handoff: form with ZIP pre-filled.
4. **Multi-step reserve form.** Four steps: service → details → when → contact. Honest thank-you.

## Voice

Three sentences in the site's voice:
- "Strawberries come in by mid-March, weeks ahead of most of the South."
- "Text us before you drive; we will tell you what is ripe and what is gone."
- "If your tree drops its needles before Christmas Day, bring it back and cut another."

Five words never used: fresh, organic, sustainable, artisanal, farm-to-table.