# Concept — landscaper-C

## Three obvious concepts, rejected

1. **The Savannah garden photo gallery.** A masonry grid of courtyard and oak photos with minimal captions. Rejected: every local landscaper does a gallery; it's a portfolio template, not a story about *this* place's gardening conditions.
2. **The botanical-illustration wallpaper.** Hand-drawn ferns and azaleas as background patterns behind service cards. Rejected: decorative, not structural; reads as a wedding-stationery theme rather than a working garden practice; doesn't answer cost or climate fears.
3. **The iron-gate entrance.** An animated gate that swings open to reveal the site. Rejected: takes the brief's "arch" seed literally as a one-time gimmick; no system beyond the intro; gates are cliché in Savannah tourism sites.

## The thesis

The page is a botanical garden index: every section is an embossed plant marker that names what thrives *here*, where in Savannah it lives, and what light and season it needs, so the homeowner trusts that the plants chosen will survive their specific yard.

## The signature system — Botanical Plant Marker

A CSS primitive drawn once: a tall narrow tag shape with a rounded top, a punched hole at top center, an embossed border, and three text zones (common name in display serif, Latin name in italic, location/light line in small caps sans). It appears as:

- **Hero:** oversized marker beside the arch-masked photo, reading "Shade Garden · *Hortus umbrosus* · Live-oak canopy, part sun".
- **Services:** each service card carries its own marker (e.g. "Courtyard Garden · *Hortus conclusus* · Downtown squares, deep shade").
- **Proof / Reviews:** review quotes hang from small markers tagged with the neighborhood and service.
- **Footer:** the service-area list is rendered as a row of mini-markers, one per town.

Variation: hero marker is large and centered; service markers are left-aligned with a rule; review markers are inline tags; footer markers are compact pills. All share the same CSS class `.marker` with size modifiers. `data-sw-signature` is on the hero marker.

## Type

Display: **Cormorant Garamond** (serif, variable wght 300–700, italic available). Text: **Albert Sans** (grotesk, variable wght 100–900). Accent: none.

Why: Cormorant's high-contrast old-style forms and long italic ascenders read as heritage botanical plates, while Albert Sans is clean and Scandinavian-neutral for labels and body, giving the marker its two-voice structure without competing. Cormorant appears 0 times in the registry; Albert Sans appears 0 times. Pair is unique. Neither is Inter/Roboto/system-ui.

## Palette — "Live Oak + Lantern Gold"

| Role | Hex | Name |
|---|---|---|
| Ink | #1A2418 | Deep oak shade |
| Paper | #F2ECE4 | Warm cream |
| Accent | #D4A855 | Lantern gold |
| Deep | #2E3B2C | Moss green-black |
| Signal | #8B5E3C | Tabby brown |
| Mid | #6B7F6A | Spanish moss |

Contrast table (verified via `tools/contrast.mjs`):

| Foreground | Background | Ratio | Body ≥4.5 | Large ≥3 | Notes |
|---|---|---|---|---|---|
| #F2ECE4 | #1A2418 | 13.66:1 | pass | pass | paper on ink |
| #F2ECE4 | #2E3B2C | 10.06:1 | pass | pass | paper on deep |
| #D4A855 | #1A2418 | 7.27:1 | pass | pass | accent on ink |
| #D4A855 | #2E3B2C | 5.36:1 | pass | pass | accent on deep |
| #1A2418 | #F2ECE4 | 13.66:1 | pass | pass | ink on paper |
| #2E3B2C | #F2ECE4 | 10.06:1 | pass | pass | deep on paper |
| #FFFFFF | #2E3B2C | 11.81:1 | pass | pass | white button on deep |
| #FFFFFF | #6B7F6A | 4.31:1 | FAIL | pass | mid used only for shapes/rules, never body text bg |

Mid (#6B7F6A) is reserved for borders, rules, and non-text decorative elements. Focus ring uses #D4A855 (7.27:1 on ink, 5.36:1 on deep, both ≥3).

## Hero family

Family **13 — arch / shape-masked photo**. Unique in the niche (A uses family 4, B uses family 7). ≤3 in library. The arch echoes courtyard gates and the natural arch of live-oak limbs over Savannah streets. Cliché broken: the arch is not a decorative frame but a *place-specific* shape tied to the city's architecture and canopy; the headline wraps the arch curve rather than sitting in a box beside it.

## Motion score

Intro (≤1.2s, skippable): the arch mask opens from a vertical slit to full arch (clip-path animation, 900ms, ease-out) while headline letters fade in with 70ms stagger. Scroll stories: (1) dappled-light shadows drift across dark sections via CSS gradient animation (slow, 8s cycle, paused with reduced motion); (2) each plant marker presses in on scroll entry (scale .96→1 + subtle box-shadow emboss, 500ms, ease-out). Hover language: hairline underline grows from left (scaleX 0→1, 200ms, accent color) on all links and buttons. Reduced motion: arch is static open, markers are fully visible, dapple animation paused, hover underline still appears instantly.

## Tools

1. **Plant Picker by Light** (`filter` kit module). Inputs: sun hours (full/part/shade), wet/dry, deer pressure. Output: 6 plant cards from a fixed Savannah-appropriate list (ferns, azaleas, camellias, muhly grass, wax myrtle, cast iron plant) with height and bloom month. Hand-off: "Book a shade design" button pre-fills quote form with service=garden-design.
2. **Season Planner** (`tabs` kit module). Input: month selector. Output: what is planted, pruned, installed this month in Savannah (from facts services + brief seasonality table). Hand-off: "Book this window" pre-fills form with service + month.
3. **ZIP Checker** (`zip` kit module). Validates service area. Pre-fills form.
4. **Multi-step Quote Form** (`form` kit module). Steps: contact → project type → details. No budget field. Prefill from tools above.

## Voice

Three sample sentences:
- "Under the live oaks, the light moves all day; we plant for the shade that will be there in July, not just the sun you see in March."
- "Your courtyard gets two hours of morning sun and salt air from the marsh; the plants we choose have lived in that exact combination before."
- "We prune azaleas right after they finish blooming, feed them for acid soil, and tell you exactly when to expect flowers next spring."

Five words never used: oasis, transform, stunning, curb appeal, paradise.