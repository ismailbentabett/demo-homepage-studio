# Concept — carpenter-B (Story Pole Carpentry)

## Three obvious concepts, rejected

1. **"Craftsmanship you can trust" with a smiling carpenter.** Rejected: every competitor does this; brief §4 lists it as cliché #1 and #2. No measurement, no Albany specificity.
2. **A gallery of new-build kitchens and decks.** Rejected: brief §4 cliché #3; Albany's housing stock is 1850-1925 rowhouses and Victorians, not new builds. Visitor leaves in 5 seconds.
3. **A literal story pole photo as hero background.** Rejected: takes the seed literally; a photo of a stick is not a system. The story pole must be the page's structure, not its wallpaper.

## The thesis

The page is the story pole itself: a vertical ruler marks every section at a real Albany rowhouse height, and every claim is a measurement, a tolerance, or a sample price that the homeowner can verify before calling.

## The signature system — Story Pole Ruler

A 1px graphite rule runs the full page height in the left margin (desktop) or top edge (mobile). Tick marks appear at real rowhouse heights: 0″ floor, 9″ baseboard, 36″ rail, 42″ chair rail, 84″ door head, 132″ ceiling crown. Each section's content matches its height (baseboard section talks about base, crown section about crown). The current tick highlights in signal orange as you scroll; the ruler draws down on intro. Variations:
- **Hero:** dimension callouts overlap the framed photo like a measured drawing; numbers count up on load.
- **Services:** each card carries a mono height tag on its left edge aligned to the ruler.
- **Tools:** tool outputs include a measurement readout that snaps into the ruler's scale.
- **Proof/reviews:** review cards carry a "tolerance met" pill (e.g., "miters < 1/32″") in mono accent.
- **Footer:** the ruler terminates at the floor line with the initials SP and the disclaimer.

Hook: `data-sw-signature` on the ruler primitive.

## Type

- **Display:** Anybody (variable, wdth 50-150, wght 100-900). Used only for h1 and section titles; width axis lets the headline compress on narrow screens without breaking. Not in registry as display.
- **Text:** Figtree (variable grotesk, wght 300-900). Clean, friendly, reads well at 17-19px; pairs with Anybody's geometric character without competing.
- **Accent:** DM Mono (label role). Every measurement, tick label, price range, tolerance, and tool readout uses DM Mono. This is the "mono-accent" the brief demands.

Pair rationale: Anybody's variable width gives architectural headlines that breathe; Figtree's softness keeps body readable; DM Mono makes every number feel like a field note. None of these three appear together in the registry; Anybody has 0 display uses, Figtree has 0 text uses in carpenter niche.

## Palette — Graphite Vellum + Pencil Mark

| Role | Hex | Name |
|------|-----|------|
| Ink | #1a1c20 | Graphite |
| Paper | #f4f1ea | Vellum |
| Mid | #e8e4dc | Trace paper |
| Deep | #2c2e33 | Charcoal |
| Accent | #b54200 | Pencil mark |
| Signal | #b54200 | (same as accent) |

Family name: "Graphite Vellum + Pencil Mark". Unique in registry.

### Contrast table

| FG | BG | Ratio | Body ≥4.5 | Large ≥3 | Use |
|----|----|-------|-----------|----------|-----|
| #1a1c20 | #f4f1ea | 15.12 | pass | pass | Body on paper |
| #1a1c20 | #e8e4dc | 13.45 | pass | pass | Body on mid |
| #f4f1ea | #2c2e33 | 13.01 | pass | pass | Text on deep |
| #b54200 | #f4f1ea | 4.97 | pass | pass | Accent text on paper |
| #b54200 | #e8e4dc | 4.38 | FAIL | pass | Large-only on mid (tick marks, tags) |
| #f4f1ea | #b54200 | 4.97 | pass | pass | Button text on accent bg |
| #1a1c20 | #b54200 | 3.04 | FAIL | pass | NEVER body on accent; shapes/rules only |
| #2c2e33 | #f4f1ea | 11.89 | pass | pass | Muted on paper |

Rule: accent #b54200 carries words only on paper (#f4f1ea) or as button bg with white text. On mid/deep it is used only for tick marks, rules and large tags (≥24px bold). Focus ring uses #b54200 on paper (4.97 ≥ 3) and #f4f1ea on deep (13.01 ≥ 3).

## Hero family — 14 (Document object)

Unique in carpenter niche (A uses 9, C uses 3). Family 14 appears twice in registry (concrete-A, painter-B); third use total, within limit. What breaks the cliché: the document is not a generic invoice but a story-pole measurement sheet — a tall vellum card with graphite tick marks, dimension callouts in DM Mono, and the headline handwritten across the top like a field note. The sheet sits on a drafting table with hero-B1 (parlor doorway) visible through a cutout window in the paper, tying document to house. No logo, no fake signature.

## Motion score

- **Intro (≤1.2s):** The story-pole ruler draws down from 0″ to 132″ via clip-path wipe; hero dimension callouts count to their values. Skippable via `prefers-reduced-motion`; without JS the ruler and callouts render statically.
- **Scroll story 1:** The ruler's active tick slides down and each section "snaps" to its mark as it enters view; the height label updates in mono. Verb: slide.
- **Scroll story 2:** Service cards unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`) staggered 60ms. Verb: unclip.
- **Hover:** One language — a 1px pencil-mark underline grows from left via `scaleX(0)→scaleX(1)` on links and buttons.
- **Reduced motion:** Ruler fully drawn, all ticks visible, no counting, no sliding; content complete and readable without animation.

## Tools

1. **Molding profile picker** (brief §5 #2). Inputs: silhouette select (Victorian casing, Greek Revival flat, colonial crown, ogee base), room perimeter ft. Output: profile name, stock vs custom knife, sample $/lf range from facts.proof.prices. Kit module: `estimator` (reused with custom UI). Prefill: service = "Trim & molding", notes = profile name.
2. **Built-in planner** (brief §5 #3). Inputs: wall width in, ceiling height in, window/radiator checkbox. Output: bay count, shelf count, depth, sample range. Kit module: `estimator`. Prefill: service = "Built-ins", notes = dimensions.
3. **Repair or replace check** (brief §5 #1). Inputs: part select, screwdriver test radio, soft length %, paint condition. Output: repairable / replace / inspect + sample range. Kit module: `checklist`. Prefill: service = "Rot repair", notes = diagnosis.
4. **ZIP checker** (required). Module: `zip`. Checks against {{biz.zips}}; yes → form with ZIP prefilled.
5. **Multi-step quote form** (required). Module: `form`. Steps: service → job details → when → contact. Honest thank-you state.

## Voice

Three sample sentences:
- "We measure twice and price once: every number on this page comes from a real Albany job, labelled sample so you know what you're comparing."
- "Your rowhouse was built before standard lumber sizes; we bring a profile gauge and a story pole, not assumptions."
- "If the screwdriver goes in less than a quarter inch, the sill can probably be patched. We'll tell you which before we quote."

Five words never used: craftsmanship, quality, trust, affordable, expert.