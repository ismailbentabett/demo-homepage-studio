# Concept — general-C (Switchback Building Co.)

## Three obvious concepts, rejected

1. **Mountain photo with overlaid text.** A scenic Blue Ridge backdrop with "Quality craftsmanship in Asheville" pasted on top. Rejected: every mountain-town contractor does this; it is a template hero that says nothing about slope, drainage or permits. The brief's seed ("building on the mountain") taken literally as scenery, not as structure.
2. **Craftsman bungalow gallery.** A grid of finished porches and kitchens with no prices, no process, no slope context. Rejected: competitor cliché #3 from the brief; reads like a luxury portfolio far above the homeowner's budget; ignores the ADU/addition/water-repair work that defines Switchback.
3. **Process timeline with icons.** Four steps (Consult → Design → Build → Enjoy) in a horizontal row. Rejected: competitor cliché #4; identical to Direction A's crosstie rhythm without the weekly-report specificity; says nothing about Asheville's terrain or the lot-check problem.

## The thesis

The page is a topographic map: each section sits on its own contour band with an elevation label, and scrolling climbs the mountain from river-level repairs to ridge-top additions.

## The signature system

**Name:** Contour bands with elevation tags.

A horizontal rule styled as a topo contour line (fine rust stroke, slight organic curve via SVG or border-radius trick) runs across the full width at every section boundary. Each contour carries an elevation tag in mono accent type ("2,100 ft", "2,200 ft") anchored to the left margin. The content between contours is the section. The system organises information by altitude: low ground = water repair, mid-slope = porches and kitchens, steep lots = ADUs and retaining walls, ridge = service area and team.

- **Hero:** The stylised topo map IS the hero background; contour lines draw outward from city centre on intro. Headline sits along a ridge line. ZIP checker embedded in the map. Elevation tag "2,100 ft · Asheville basin" anchors the bottom-left.
- **Story (water → porch → addition):** Three stacked contour bands. Each band's elevation tag marks the terrain level. The story scrolls vertically; the elevation counter in the corner climbs as you pass each contour. Photo frames are clipped with a subtle organic mask echoing the contour curve.
- **Proof / cards:** Service cards sit inside contour-bounded panels. Each card has a small elevation tag matching its terrain category (e.g. "2,300 ft · Steep lot" on the ADU card). Reviews appear as trail-marker quotes pinned to their contour.
- **Footer:** The final contour line closes the page. Elevation tag reads "Ridge · {{biz.areas|list}}". Footer content sits below the last contour as the summit plateau. The demo disclaimer and credits sit in a muted band beneath.

This is also `data-sw-signature`. The wow moment: the elevation counter climbs live as you scroll, and contour lines shift subtly (parallax-lite via GSAP ScrollTrigger), making the page feel like walking up a switchback trail.

## Type

- **Display:** Zilla Slab (slab serif, variable wght 300–700). Sturdy, bookish authority; reads like a carved trail sign. Used for h1, h2, elevation tags. Not in registry. Not used in general niche.
- **Text:** Source Serif 4 (serif, variable opsz 8–60, wght 200–900). Warm, dependable body text with optical sizes for lead paragraphs. Pairs with Zilla Slab as two serifs with different roles: one structural, one readable. Unique pair.
- **Accent:** DM Mono (mono, static 300/400/500). For elevation tags, tool outputs, sample labels, and micro-data. Quiet technical voice against the slab display.

Why: Zilla Slab's slab weight grounds the mountain metaphor; Source Serif 4's optical-size axis lets the lead paragraph breathe at larger opsz while body stays crisp. DM Mono's tabular figures make elevation numbers and price ranges align. No Inter/Roboto/system-ui as display. Pair is unique in registry.

## Palette

**Family:** Blue Ridge Slate + Moss + Rust

| Role | Hex | Name |
|---|---|---|
| ink | #1B2838 | Deep slate blue |
| paper | #F4F1EB | Warm cream |
| accent | #5A7D7C | Slate teal (shapes/rules/large-tags only; never body text) |
| accent-ink | #3A5453 | Dark teal (for accent words on paper; 6.1:1 vs #F4F1EB) |
| deep | #1B2838 | Same as ink (dark-led tone uses ink as deep field) |
| signal | #5E7D5E | Moss green |
| mid | #D6CFC4 | Warm grey |

Tone: **color-led** (deep slate blue as primary field, moss and rust as accents, cream panels for readability).

Contrast table (to be verified with `node tools/contrast.mjs`):

| FG | BG | Ratio | Use |
|---|---|---|---|
| #F4F1EB (paper) | #1B2838 (deep) | ≥ 12:1 | Body on dark sections |
| #1B2838 (ink) | #F4F1EB (paper) | ≥ 12:1 | Body on light sections |
| #A65D3F (accent) | #F4F1EB (paper) | TBD (must ≥ 4.5) | Accent words on light |
| #A65D3F (accent) | #1B2838 (deep) | TBD (check) | Accent on dark — may fail; if < 4.5, use only for rules/shapes |
| #5E7D5E (signal) | #F4F1EB (paper) | TBD (check) | Signal on light — likely fails for text; rules/moss shapes only |
| #1B2838 (ink) | #D6CFC4 (mid) | TBD | Muted text on mid |
| Focus ring (#A65D3F) | #1B2838 (deep) | TBD (must ≥ 3) | Focus on dark |
| Focus ring (#A65D3F) | #F4F1EB (paper) | TBD (must ≥ 3) | Focus on light |
| White (#FFFFFF) | #A65D3F (accent btn) | TBD (must ≥ 4.5) | Button text |

**Builder must run `node tools/contrast.mjs` for every pair above before shipping.** If accent-on-dark fails 4.5, accent words on dark sections swap to paper color and accent is reserved for rules, tags and button backgrounds only. Signal green is never used for body text; it appears only as moss-shaped dividers, icon fills and focus-ring fallback on mid tones.

## Hero family

**15 — Map / area-led.** The hero is a stylised SVG topo map of Asheville and surrounding towns (Weaverville, Black Mountain, Fletcher, Arden, Candler, Fairview, Woodfin). Contour lines in fine rust (#A65D3F) draw outward from the city centre on intro. Town names fade in at their geographic positions. The headline ("Hillside builder in Asheville") is set along a ridge line in Zilla Slab. The ZIP checker is embedded in the map: type a ZIP and the corresponding town lights up in moss green. This breaks the family-15 cliché because the map is not decorative — it is the functional entry point (ZIP check) and the organising metaphor for the entire page. No real street-map tiles; drawn SVG only.

Unique in the general niche (siblings A and B use families 1 and 2 per brief directions). Not yet in registry.

## Motion score

- **Intro (≤ 1.2 s, skippable):** Contour lines draw outward from city centre (SVG stroke-dashoffset animation, 900ms, ease-out). Town names fade in at 600ms stagger. Headline reveals via line-mask (70ms stagger, 700ms). Text is readable at 0ms with reduced motion (all lines visible, no clip). Skippable: clicking anywhere during intro jumps to end state.
- **Scroll story 1 (climb):** Elevation counter in bottom-right corner counts up as you scroll through contour bands (GSAP ScrollTrigger scrub). Contour lines shift vertically at 0.3× scroll speed (parallax-lite). Each section's content rises into view (text translateY 24px→0, 500ms at 85% viewport). Reverses on scroll-up.
- **Scroll story 2 (plan → build wipe):** In the story section, a line drawing of a hillside foundation sits over its photo. Scroll var `--sw-p` drives a clip-path wipe from drawing to photo. Static with reduced motion: drawing and photo side-by-side.
- **Hover language:** Hairline underline grows from left (`scaleX(0→1)`, `transform-origin: left`, 200ms, ease-out) on all interactive elements. One language, consistent.
- **Reduced motion:** All content visible. No parallax, no clip wipes, no counters. Elevation tags remain static. Intro shows final state immediately. Stories render as stacked cards with full content.

## Tools

1. **Lot and slope check** (`kit/lib/checklist`). Inputs: steep yes/no, driveway access narrow/wide, near creek yes/no. Output: plain-language list of what usually affects cost (grading, retaining wall, stepped footings, pump truck). Ends with "Price this job" button → quote form with service="Additions on sloped lots" prefilled. Works JS-off as a static checklist + call button.
2. **Project timeline builder** (`kit/lib/tabs` + custom). Inputs: project type (kitchen/bath/addition/ADU), size S/M/L, start month. Output: week-by-week schedule in tabular layout (design → permits → demo → framing → rough-in → inspections → drywall → finishes → final). Labelled "Typical, not a quote". Ends with "Get your timeline" → quote form with project type prefilled.
3. **Cost range estimator** (`kit/lib/estimator`). Inputs: project type, size. Output: range from `{{proof.prices.*}}` tokens only, labelled Sample. Live SVG sketch hook (`data-est-sketch`) draws a simple hillside cross-section that adds layers (footing → framing → finish) as scope increases. Printable sheet via `@media print`. Never prints `$` symbol; shows "from X to Y per sq ft" strings verbatim from facts.
4. **ZIP checker** (`kit/lib/zip`). Embedded in hero map. Checks against `{{biz.zips|csv}}`. Yes → highlights town on map + offers form with ZIP prefilled. No → suggests calling.
5. **Quote form** (`kit/lib/form`). 4 steps: service → job details → when → contact. Honeypot `website2`, time trap `t`. Honest thank-you: "Thanks, {name}. In your version this goes straight to your phone and inbox." Never sends.

## Voice

Three sentences in the site's voice:
1. "Your lot drops eleven feet from the street to the back fence; we step the footings down the slope so the addition sits level and drains away from the house."
2. "After the flood we opened the walls, dried everything with meters, and only rebuilt what needed it — no upsell, no rush."
3. "The porch on your 1918 bungalow can be rebuilt on new footings with the old stone piers kept; from the street it looks the same, just level."

Five words it never uses: dream, luxury, seamless, turnkey, hassle-free.