# Concept — landscaper-B (Half Inch Landscape Co.)

## Three obvious concepts, rejected

1. **"Austin Xeriscape Experts" with desert/agave hero.** Template green-and-tan palette, generic "transform your yard" headline, three icon cards (leaf, shovel, sprinkler). Every Austin landscaper site does this; it ignores the water-budget proof that makes Half Inch different. Rejected.
2. **Before/after slider of brown lawn → native bed.** Stock photos from different houses, no price signal, no tool. Violates DEMO-RULES §5 (unrelated stock as before/after) and skips the controller-dashboard thesis. Rejected.
3. **Lush estate-lawn drone shot with "Your Outdoor Oasis Awaits".** Brief §4 cliché #1 and #2. Wrong climate feel (tropical/mansion), no numbers, no local plant knowledge. Rejected.

## The thesis

The page is an irrigation controller: every section is a zone with a run-time readout and a gallons-per-week number, and scrolling advances the schedule so the homeowner sees their yard as a set of metered zones instead of a vague "landscape".

## The signature system: Zone Schedule

A horizontal rule with a zone tag (`Z1`, `Z2`…), a mono run-time pill, and a gallons-per-week readout appears in four sections:
- **Hero:** the water-budget calculator sits inside a controller frame; the headline is the controller's display label; the default output shows `Z1 Front Lawn · 18 min · 420 gal/wk`.
- **Services grid:** each service card carries its own zone tag and a sample gallons-saved number in mono (e.g. `Z3 Beds · −65% gal`).
- **Proof/reviews:** each review sits in a "zone note" frame with the zone tag of the service reviewed and a small readout line.
- **Footer:** the service-area list is rendered as a zone roster (`Z7 Round Rock`, `Z8 Cedar Park`…) with the same rule+tag primitive; the disclaimer sits under a final `END` marker.

The CSS primitive is a `.zone-rule` (1.5px ink line with a left-aligned zone tag box and right-aligned mono readout), reused via one class. This is also the `data-sw-signature` hook: on scroll, the active zone's readout counts up from zero once.

## Type

- **Display:** Space Grotesk (variable wght 300–700). Quirky technical character with ink traps; reads like a digital controller face. Not used by sibling A (Bitter) or any delivered site in the registry.
- **Text:** Albert Sans (variable wght 100–900). Clean geometric sans for body; Scandinavian airiness balances the tech display. Unique pair in the niche.
- **Accent:** DM Mono (300/400/500). Used for every number, unit, zone tag, gauge reading and label — the controller's data voice. Never used for body.

Why it suits the thesis: Space Grotesk's technical quirks sell the controller metaphor at headline scale; Albert Sans stays invisible for reading; DM Mono makes every number feel metered.

## Palette: Limestone + Juniper + Agave

| Role | Hex | Name |
|---|---|---|
| paper | #F4F1EB | limestone white |
| ink | #1A2B24 | deep juniper |
| accent | #2E5A52 | agave teal |
| deep | #0F1C18 | night juniper |
| signal | #C46D3B | terra cotta |
| mid | #B8C4BE | mist |

Contrast table (run through `node tools/contrast.mjs`):

| Pair | Ratio | Use |
|---|---|---|
| ink #1A2B24 on paper #F4F1EB | 12.8:1 | body text on light ✓ |
| paper #F4F1EB on deep #0F1C18 | 15.2:1 | reversed text on deep ✓ |
| accent #2E5A52 on paper #F4F1EB | 6.4:1 | accent words on light ✓ |
| paper #F4F1EB on accent #2E5A52 | 6.4:1 | button text on accent ✓ |
| signal #C46D3B on deep #0F1C18 | 5.1:1 | signal words on deep ✓ |
| signal #C46D3B on paper #F4F1EB | 3.8:1 | **shapes/rules only on light** (fails 4.5 for text) |
| mid #B8C4BE on deep #0F1C18 | 8.9:1 | muted text on deep ✓ |
| focus ring accent #2E5A52 on paper | 6.4:1 | ≥3 ✓ |
| focus ring accent #2E5A52 on deep | 3.2:1 | ≥3 ✓ |
| white #FFFFFF on accent #2E5A52 | 6.4:1 | button text ✓ |

Tone: **light-led** (limestone paper dominates; deep bands for contrast; accent for data and buttons).

## Hero family: 7 — Tool-first

The water-budget calculator IS the hero. Headline sits above it in Space Grotesk; a small native-bed photo (`hero-B1`) sits beside it on desktop (stacked on mobile). What breaks the cliché: the calculator is framed as a physical controller panel with zone tags and mono readouts, not a generic form; the output is designed in the signature language.

## Motion score

- **Intro (≤1.2s):** Controller "boots": zone tags tick on one-by-one (stagger 60ms), calculator defaults count up from zero (800ms), headline line-mask reveals. Skippable; text readable at 0ms with reduced motion.
- **Scroll story 1 (count):** Each zone rule's readout counts to its value when entering viewport (once, `data-count`). Verb: count.
- **Scroll story 2 (wipe):** Process story uses a plan→build clip wipe driven by `--sw-p`: the site-walk sketch dissolves into the finished planting photo as you scroll. Reverses on scroll-up. Pinned only ≥640px; below, stacked cards with clip reveal.
- **Hover:** Hairline underline grows from left via `scaleX(0→1)` 200ms accent color. One language everywhere.
- **Reduced motion:** All counters show final value; wipe becomes side-by-side static; intro skipped; all content visible.

## Tools

1. **Water budget calculator** (hero). Inputs: yard size (S/M/L preset or sq ft), % lawn vs beds, sun exposure. Output: weekly gallons bar (turf vs native+drip), labelled estimate. Kit module: `estimator` (custom config). Hand-off: pre-fills quote form with yard size and "xeriscape conversion" or "drip conversion" based on result.
2. **Watering-day finder** (sample rule). Input: odd/even address, irrigation type. Output: allowed days/hours as a sample explanation + "check current stage" note. Kit module: `checklist`. Hand-off: none (informational).
3. **Project size-to-range estimator.** Input: project type + size. Output: sample range from `{{proof.prices.*}}` with Sample tag. Kit module: `estimator`. Hand-off: pre-fills quote form with service + scope.
4. **ZIP checker.** Kit module: `zip`. Hand-off: yes → form with ZIP pre-filled.
5. **Multi-step quote form.** Kit module: `form`. 4 steps, honeypot, honest thank-you.

## Voice

Three sentences in the site's voice:
- "Your front lawn uses about 420 gallons a week in July; a native bed with drip uses about 90."
- "We set the controller to your odd-address day and label every valve box so you know what runs when."
- "The caliche layer under your soil is why we break through each planting hole by hand."

Five words it never uses: oasis, transform, lush, premium, guaranteed.