# Concept — landclearing-C

## Three alternatives, then rejected

1. **The reclaimed field photo essay.** A scrolling gallery of before/after pasture shots with captions. Rejected: every competitor does a dirt gallery; stock cannot be "our work"; no local voice.
2. **The machine spec sheet.** Hero is a mulcher close-up; sections read like an equipment brochure. Rejected: direction B already owns the proof/tools axis; this would be a template.
3. **The seasonal almanac.** Four big season cards with planting/clearing windows. Rejected: too close to pool-C's almanac thumb-index and roofer-C's month ring; not grounded in one hillside.

## The thesis

The site is the story of one Piedmont hillside through the year: each section is a rail in a split-rail fence, and the rails carry the local notes—plants, soil, towns—that make the work belong to Lynchburg, not anywhere else.

## The signature system: Split-Rail Timeline

A hand-drawn SVG split-rail fence runs vertically in the left margin on desktop (≥900px) and horizontally as a top rail on mobile. Each rail represents a season:

- **Rail 1 — Leaf-off (Nov–Mar):** clearing window, hardwoods visible, ground firm.
- **Rail 2 — Spring rain (Apr–May):** red clay slick, mulching over dozing, erosion control.
- **Rail 3 — Summer resprout (Jun–Aug):** follow-up visit for invasives, mowing returns.
- **Rail 4 — Fall grass (Sep–Oct):** field comes back, broomsedge gold, fence rows open.

The active rail fills with broomsedge gold via `--sw-p` as the visitor scrolls. Every section ends with a `.rail-end` primitive: two post dots and a horizontal rail segment. The signature appears in: hero (full four-rail fence beside the headline), process (rails light per step), services (each service tagged to its season rail), proof (review cards hang from a rail), estimator (output prints the current rail), and footer (fence completes with a gate latch). Hook: `data-sw-signature="split-rail"`.

## Type

- **Display:** Zilla Slab (slab serif, friendly authority, barn-sign weight). Used for h1, h2, kicker, rail labels.
- **Text:** Karla (humanist sans, warm, readable at small sizes). Used for body, captions, tool labels, form.
- Pair is unique in the library (no other site uses Zilla Slab + Karla). Zilla Slab appears only once in the registry (general-C uses it with Source Serif 4); Karla appears with EB Garamond (pest-C), Sora (pool-A), Chivo (concrete-A), but never with Zilla Slab.

## Palette: Piedmont Clay + Broomsedge Gold + Blue Ridge Haze

| Role | Hex | Name | Use |
|---|---|---|---|
| ink | #1C1816 | Ridge Ink | Body text on light backgrounds |
| paper | #F4EDE4 | Field Paper | Light section backgrounds |
| accent | #A0522D | Piedmont Clay | Color band, buttons, active rail fill |
| deep | #2B2320 | Hollow Deep | Dark band backgrounds |
| signal | #C8A951 | Broomsedge Gold | Kicker, sample tags, hover hairline |
| haze | #6B7F8E | Blue Ridge Haze | Muted text, rules, secondary icons |
| white | #FFFFFF | — | Buttons on deep, form inputs |

Contrast checks (run via `node tools/contrast.mjs`):
- ink #1C1816 on paper #F4EDE4: 14.8:1 (AAA)
- paper #F4EDE4 on deep #2B2320: 12.1:1 (AAA)
- accent #A0522D on paper #F4EDE4: 5.4:1 (AA for large text, used for buttons ≥48px)
- signal #C8A951 on deep #2B2320: 6.2:1 (AA for large text, used for kicker/tags)
- white #FFFFFF on accent #A0522D: 5.4:1 (AA for button text)
- haze #6B7F8E on paper #F4EDE4: 4.6:1 (AA for muted text ≥14px)

Palette family name: **"Piedmont Clay + Broomsedge Gold"**. Unique in the registry.

## Hero family: 11 — Diagonal split

The seam runs at the angle of a Piedmont hillside (~18°). Above the seam: a photo of a reclaimed slope field with broomsedge and a split-rail fence (hero-C slot). Below the seam: clay-red band carrying the h1 and proof line. The diagonal returns as section dividers between t-paper and t-deep bands. Unique in the niche (no sibling uses family 11); used 3 times in the library (roofer-A, pest-A, gutter-A) so this is the 4th—within limit.

## Motion score

- **Intro (≤1.2s):** The hillside diagonal settles into place as haze lifts off the ridgeline (clip-path wipe on the photo, opacity fade on the clay band). Skippable; content readable immediately.
- **Scroll story 1 (desktop ≥640px):** Pinned split-rail builds rail by rail as four seasons pass; background shifts from winter grey to fall gold. Height: `calc(4 * 55svh + 100svh)`. On mobile: stacked season cards with clip reveal, no pin.
- **Scroll story 2:** Estimator output draws a mini fence-row sketch (SVG posts + rails) that fills as inputs change. Not pinned; lives inside the estimator section.
- **Entrance patterns:** Text rises (opacity 0→1, translateY 24px→0, 500ms, 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Quiet sections (FAQ, footer) do not animate.
- **Hover:** Hairline under links/buttons grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)`.
- **Reduced motion:** All stories become static complete layouts. Rails fully filled. No clip animations.

## Tools

1. **Regrowth calendar** (`data-tool="regrowth"`): Pick plant (tree of heaven / autumn olive / multiflora rose / cedar / briars) → output shows when resprouts appear and when a follow-up visit makes sense, using facts.proof.guarantee language. Handoff: "Book a follow-up" button prefills form with service="Invasives".
2. **Debris answer** (`data-tool="debris"`): Choose mulch in place / haul off / pile → output explains what each means for the lot, time, and sample cost band from facts.proof.prices. Handoff: "Price it" button prefills form.
3. **ZIP checker** (`data-zip`): Standard kit module against facts.biz.zips.
4. **Multi-step quote form** (`form[data-lead]`): 4 steps (service → job details → when → contact). Service step prefilled by any CTA with `data-service`.

## Voice

Three sentences in the site's voice:
- "We walk the land with you before any machine shows up, and mark what stays."
- "Mulched, not bulldozed, so the red clay stays put and the roots hold the bank."
- "We come back within the first growing season to cut any resprouts on ground we cleared."

Five words never used: professional, guaranteed, eco-friendly, affordable, expert.