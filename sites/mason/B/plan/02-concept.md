# Concept — mason-B (Flemish Bond Masonry)

## Three obvious concepts, rejected

1. **The brick wall background.** A trowel logo, a clip-art brick pattern, and "quality masonry since 1998". Obvious because every competitor does it; it says nothing about old Baltimore brick or mortar analysis. Rejected.
2. **The before/after slider.** Two stock photos of a spalled wall and a repointed one with a drag handle. Obvious because it treats masonry as cosmetic, not structural; the brief bans before/after framing. Rejected.
3. **The process reel.** A video loop of hands pointing a joint with step labels. Obvious because mason-A already owns the process axis; this direction is proof-and-tools. Rejected.

## The thesis

The page is the mortar analysis report: every section is a test panel on the wall, and the Flemish-bond grid is the layout that holds the evidence together.

## The signature system

**Name:** Flemish-Bond Test Panel Grid.
A CSS grid whose columns alternate header-tile (short) and stretcher-tile (long) widths, with mortar-colored gutters. Each tile is a "test panel": numbers sit in header tiles, photos and copy in stretchers. The grid appears in four sections with variation:
- **Hero:** 6-tile mosaic (3 stretchers + 3 headers); headline occupies one dark stretcher tile.
- **Proof/stats band:** three header tiles carrying sample rating, review count, and years; one stretcher carries the guarantee text.
- **Services cards:** each service is a stretcher tile; lintels/arches and marble steps get paired header tiles with sample price ranges.
- **Footer:** a single stretcher tile with the disclaimer and credits; header tile carries the initials "FB" as a maker's mark.
Hook: `data-sw-signature` on the grid container; the builder drives gutter color and tile aspect from tokens.

## Type

- **Display:** Barlow Condensed (condensed grotesk, 400–700). Tall, rhythmic, like rowhouse fronts stacked shoulder to shoulder. Unique pair with Karla in the registry.
- **Text:** Karla (grotesk, 300–800 variable). Plain, legible at small sizes, pairs with Barlow Condensed's height without competing.
- **Accent:** DM Mono (300–500). For sample tags, price units, ZIP feedback, and tool readouts.
Why: Barlow Condensed's vertical rhythm matches the Flemish-bond header/stretcher alternation; Karla stays out of the way; DM Mono signals "measurement, not marketing".

## Palette

**Family:** Soot + Baltimore Red + Brass.
- ink: #F2EBE0 (warm paper, used as body text on dark grounds)
- paper: #F2EBE0 (same warm paper for light-tone sections)
- accent: #C9A66B (brass; passes 7.71:1 on soot, 5.71:1 on mid-brown; used for words)
- deep: #1A1815 (soot charcoal; primary dark ground)
- signal: #B8432F (Baltimore red; FAILS 4.5 on soot for body text → used ONLY for large UI: buttons ≥ 24px bold, rules, tile borders; never for body copy)
- mid: #3A2E28 (warm brown for t-mid bands)

Contrast table (verified):
| FG | BG | Ratio | Use |
|---|---|---|---|
| #F2EBE0 | #1A1815 | 14.96 | body on deep ✓ |
| #1A1815 | #F2EBE0 | 14.96 | body on paper ✓ |
| #C9A66B | #1A1815 | 7.71 | accent words on deep ✓ |
| #C9A66B | #3A2E28 | 5.71 | accent words on mid ✓ |
| #F2EBE0 | #3A2E28 | 11.07 | body on mid ✓ |
| #B8432F | #1A1815 | 3.27 | LARGE ONLY (buttons, rules) ✗ body |

## Hero family

**Family 8 — Photo mosaic.** Unique in mason niche; ≤ 3 in library. Six tiles laid as Flemish bond: two long stretcher tiles (home-baltimore rowhouse front, detail-joint-concave), three short header tiles (detail-marble-step, material-lime, detail-formstone), one dark stretcher tile holding the headline. Breaks the cliché by making the mosaic structural (the grid IS the layout system, not a decorative hero-only effect).

## Motion score

- **Intro (≤ 1.2 s):** Mosaic tiles drop in course-by-course from bottom row up (clip-path unclip, 60 ms stagger). Headline rises after last tile. Skippable via reduced-motion class.
- **Scroll story 1 (Facade Elevation Pin):** A rowhouse elevation is pinned from 640 px up; problem zones (parapet, lintels, front joints, marble steps, formstone) light in turn with their fix and sample price. Verb: *light*. Under 640 px: stacked labelled cards with clip reveal.
- **Scroll story 2 (Mortar Match Live Panel):** The CSS-drawn brick panel updates live as the visitor picks swatch/profile; no pin, just reactive state. Verb: *update*.
- **Hover language:** A brass hairline grows from left (`scaleX(0→1)`, 200 ms, `transform-origin: left`) under tiles and buttons. One language, inside `@media (hover:hover)`.
- **Reduced motion:** All tiles visible, elevation becomes a static labelled diagram, mortar match still works (it is JS-driven state, not animation), hover line disabled.

## Tools

1. **Mortar Match** (`kit/lib/match.js` → custom module in app.js using `data-match`). Inputs: brick swatch (6 CSS colors), mortar color, joint profile. Output: live CSS brick panel + "we make three test samples on your wall" line. Hand-off: [[quote Mortar analysis]] button.
2. **Formstone Keep/Fix/Remove** (`kit/lib/checklist.js` mapped to `data-checklist="formstone"`). Inputs: cracked / loose / know what's under / selling. Output: keep/patch/remove recommendation + sample range from facts. Hand-off: [[quote Formstone]] button.
3. **Facade-Width Repointing Estimator** (`kit/lib/estimator.js` on `data-estimator="facade"`). Inputs: width (12–20 ft), stories (2–3), joint share (some/most/all). Output: sq ft estimate + sample range from `{{proof.prices.0}}`, labelled Sample. Hand-off: [[quote Front repointing]] button.
4. **ZIP checker** (`kit/lib/zip.js` on `data-zip`). Standard.
5. **Multi-step quote form** (`kit/lib/form.js` on `form[data-lead]`). Steps: service → house age → photo → timing → contact.

## Voice

Three sentences:
- "We take a sample of your old mortar before we mix anything new."
- "Your rowhouse was built with soft brick; the mortar has to be softer."
- "Send us a photo of the front and we'll tell you what you're looking at."

Five words never used: guaranteed, best, affordable, experienced, professional.