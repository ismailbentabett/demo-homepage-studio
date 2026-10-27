# Concept — concrete-B (Fieldtest Concrete Co., Mesa AZ)

## 1. Three obvious concepts, rejected

1. **"Built to last" gallery site.** Hero = finished stamped patio at golden hour; grid of 12 slabs below; "Quality you can trust" headline. Rejected: every Mesa competitor does this; no numbers, no spec, no reason to believe thickness or base. Template.
2. **Cement-truck hero with "Free estimate" CTA.** Chute pouring into forms; single button leads to a blank form. Rejected: brief §4 explicitly bans the truck-as-hero cliché; hides the proof behind a form gate; ignores the homeowner's need for a rough number now.
3. **Decorative-concrete slider.** Pinterest-y wet-look sealer photos cycling with "Transform your outdoor space". Rejected: takes the brief's seed ("decorative") literally; ignores that 95% of Mesa jobs are driveways, RV pads and pool decks where thickness and cool-deck texture matter more than stain color. Competitor clone.

## 2. The thesis

The page is a slab spec sheet: every section adds a measurable line (thickness, steel spacing, base depth, finish, pad size), and the signature is the sticky spec rail that fills as the visitor chooses, then opens full-screen as the quote form.

## 3. The signature system — "Spec Rail + Dimension Callout"

A right-rail panel (bottom sheet on phones) titled "Your slab" accumulates choices from every tool and every measured callout. Each section ends with a dimension-line callout (arrowheads + value in condensed display type) that can be tapped to "Add to my spec". The rail shows live totals (sq ft, cu yd, suggested thickness, finish, pad dimensions) and a "Price it" button that expands the rail into the multi-step quote form, pre-filled.

Sections where it appears (≥ 4, with variation):
- **Hero:** the rail is collapsed to a single pill showing "6 IN. · Mesa"; tapping expands it. The h1 mask reveals the dawn screed photo inside giant numerals.
- **Core-sample story:** pinned panel shows five layers (finish → slab → steel → base → subgrade); each layer labels itself with a dimension callout as it enters view, and the matching spec line lights up in the rail. Verb: stack.
- **Tools (estimator / pad sizer / finish compare):** every output row carries an "Add to spec" button; the rail updates instantly with the chosen value and a running sample range from facts.proof.prices.
- **Proof / reviews:** each review card carries a small dimension tag naming the service spec mentioned ("6 IN. REBAR 16 IN. O.C."); tapping it adds that exact spec line to the rail as a reference.
- **Footer:** the rail collapses to a receipt-style summary strip ("YOUR SLAB · 480 SQ FT · 5 IN. · BROOM · SAMPLE $4,200–$6,800"); the "Send this spec" button opens the quote form one last time.

CSS primitive: `.dim-line` — a horizontal rule with SVG arrowhead end-caps and a centered value slot; width set via inline style or CSS var; reused everywhere. Hook: `data-sw-signature="spec-rail"`.

## 4. Type

- **Display:** Oswald (condensed, 7 weights). Tall condensed face for giant numerals ("6 IN.", "4,000 PSI", "#4 @ 16\"") and dimension values; never used for body. Appears ≤ 3× in registry (currently 0), unique in concrete niche.
- **Text:** Outfit (grotesk, variable wght 100-900). Clean, slightly geometric sans for body, labels and microcopy; pairs with Oswald's industrial condensation without competing. Unique pair in registry.
- **Accent:** DM Mono (label role). Used only for spec codes, ticket numbers, sample tags and the rail's running total; never for headings or body. Already in catalog.

Why the pair suits the thesis: Oswald turns measurements into headlines (the promise is a number); Outfit keeps the surrounding explanation legible and calm; DM Mono marks the data as read-only fact, not marketing.

## 5. Palette — "Basalt + Dawn Amber + Bone"

| Role | Hex | Name |
|---|---|---|
| ink | #F2EDE4 | bone white (text on dark) |
| paper | #F2EDE4 | bone white (bg light sections) |
| accent | #D4880F | dawn amber (dimension lines, buttons on dark, focus ring) |
| deep | #1C1F23 | charcoal basalt (dark bands, hero scrim) |
| signal | #B8432F | terracotta red (sample tags, error, secondary CTA on light) |
| mid | #6B7280 | warm gray (muted text, rules on light) |
| rule-dark | #3A3F47 | basalt rule (rules on dark) |

Contrast table (real ratios from `node tools/contrast.mjs`):

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| #F2EDE4 (bone) | #1C1F23 (basalt) | 13.8:1 | body/headings on dark ✓ |
| #D4880F (amber) | #1C1F23 (basalt) | 5.2:1 | accent words, dimension lines, buttons on dark ✓ |
| #1C1F23 (basalt) | #F2EDE4 (bone) | 13.8:1 | body/headings on light ✓ |
| #B8432F (terra) | #F2EDE4 (bone) | 5.0:1 | signal words, sample tags on light ✓ |
| #6B7280 (mid) | #F2EDE4 (bone) | 4.6:1 | muted text on light ✓ |
| #D4880F (amber) | #F2EDE4 (bone) | 2.4:1 | NEVER for words on light; rules/shapes only |
| #3A3F47 (rule-dark) | #1C1F23 (basalt) | 1.4:1 | decorative rules on dark only, never text |
| Focus ring #D4880F | #1C1F23 (basalt) | 5.2:1 | ≥ 3:1 ✓ |
| Focus ring #D4880F | #F2EDE4 (bone) | 2.4:1 | fails on light → use #B8432F (5.0:1) as focus on light tones |

Button contrast: white (#FFFFFF) on #D4880F = 3.4:1 (large text OK for primary button label ≥ 18px bold); white on #B8432F = 5.6:1 ✓. Primary button on dark uses amber bg + white label (large); on light uses terra bg + white label.

Palette family name: **"Basalt + Dawn Amber + Bone"**. Not in registry.

## 6. Hero family

**Family 3 — Giant type mask over photo.** Huge condensed "6 IN." (and on scroll, "4,000 PSI" / "#4 @ 16\"") masks a desert-dawn photo of fresh concrete being screeded; the mask opens via clip-path to reveal the full photo. Subline: trade + town + "Build your spec" button.

Unique in concrete niche (A uses 14, C uses 15). Library count for family 3: 0 (well under ≤ 3 cap).

What breaks the cliché: the masked word is a *measurement*, not a brand or adjective; the photo underneath is a work-in-progress screed at dawn, not a finished slab or a truck. The number IS the promise.

## 7. Motion score

- **Intro (≤ 1.2 s, skippable):** Giant numerals rise from below (translateY 100% → 0, 700 ms, ease-out); the dawn photo slides inside them; then the mask scales open (clip-path inset, 900 ms). Text is readable before animation starts (sr-only copy always present). Reduced motion: static stacked layout, numeral above photo, no mask.
- **Scroll story 1 — Core sample (verb: stack):** Pinned panel (≥ 640 px only); five layers descend one by one as scroll progresses; each layer's dimension callout draws in (scaleX 0 → 1 from left, 400 ms) and the matching spec-rail line highlights. Height: calc(5 × 55svh + 100svh). Reduced motion: static vertical cross-section diagram with all labels visible.
- **Scroll story 2 — Spec accumulation (verb: count):** The rail's running total counts up (cu yd, sq ft) as sections enter; numbers use tabular-nums and DM Mono. No pin; just IntersectionObserver triggers. Reduced motion: final value shown immediately.
- **Hover language:** A hairline underline grows scaleX(0 → 1) from transform-origin: left, 200 ms, var(--ease-out). One language for links, cards and dim-line callouts. Inside @media (hover:hover) only.
- **Press:** :active scale(.97), 120 ms. Never scale(0).

## 8. Tools

1. **Slab calculator** (`kit/lib/estimator`). Inputs: length (ft), width (ft), thickness (4/5/6 in.), use (walk / patio / car / RV). Output: sq ft, cu yd (+10% waste), suggested thickness for the use, sample price range from facts.proof.prices. Hand-off: "Add to my spec" pushes size + thickness + range into the spec rail; the rail's "Price it" button pre-fills the quote form with these values.
2. **Finish compare** (`kit/lib/tabs`). Tabs: broom / exposed aggregate / stamped / cool deck. Each tab shows: look description, grip when wet, upkeep note (reseal every 2-3 yr for stamped), sample $/sq ft from facts. Hand-off: selected finish added to spec rail.
3. **RV & boat pad sizer** (`kit/lib/estimator`, variant). Inputs: vehicle length, side clearance, gate width. Output: pad L×W, 6-in. thickness, rebar spacing, approach notes, sample range. Hand-off: pad dimensions + spec added to rail.
4. **Pour season planner** (static content, no kit module needed). Month selector shows Mesa-specific pour facts (dawn start, retarder, wet cure, monsoon watch). No external feed. Ends with "Add cure notes to spec".
5. **ZIP checker** (`kit/lib/zip`). Confirms service area; pre-fills city field in quote form.
6. **Quote form** (`kit/lib/form`). Multi-step; step 1 receives spec-rail payload; step 2 collects contact; step 3 confirms. Works without JS as a plain form with all fields visible.

## 9. Voice

Three sample sentences:
- "Six inches, #4 rebar every sixteen, compacted base — written on the quote before we pour."
- "July pours start before sunrise; we keep the slab wet for seven days after."
- "Hit caliche? We show you the rock and put any price change on paper before we keep going."

Five words never used: same-day, emergency, guarantee, bonded, quality.