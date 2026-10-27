# Concept — mason-A (Soft Joint Masonry)

## Three obvious concepts, rejected

1. **"Old Brick Experts" heritage template.** Sepia photos, serif script, "since 19XX" badge. Rejected: every historic-preservation contractor does this; it reads as a museum plaque, not a working mason who understands mortar chemistry.
2. **"Before/After Gallery" showcase.** Split-screen sliders of spalled vs repointed walls. Rejected: stock photos cannot honestly be "our work"; the brief bans before/after with unrelated images; it skips the *why* of soft mortar.
3. **"Masonry Services Checklist" listicle.** Icon grid of services with checkmarks. Rejected: template pattern from every home-services theme; ignores the process axis that defines direction A; no signature system.

## The thesis

The page is the repointing sequence: every section is a course of work, and the mortar joint between them advances from raked-out gap to finished concave profile as you scroll.

## The signature system

**Name:** Mortar Joint Progression
**Summary:** A horizontal divider drawn as two brick courses with a mortar gap; the gap's profile changes at each section boundary in the order of real repointing work (raked → packed → struck → tooled → concave). The joint is the `data-sw-signature` hook and animates via `--sw-p` scroll variable.
**Sections:**
- **Hero:** Raked-out joint (empty gap) beneath the headline frame; the frame border itself is drawn as a mortar line.
- **Process story:** Packed joint (filled but rough) as the pinned cross-section diagram transitions between stages.
- **Proof/reviews:** Struck joint (compressed, defined edge) separating testimonial cards.
- **Guarantee:** Finished concave joint (smooth, curved profile) closing the promise band.
- **Footer:** Full tooled joint with the business initials stamped into the mortar.

## Type

- **Display:** Manrope (grotesk, variable wght 200-800). Precise, slightly industrial, redrawn 19th-century trade lettering feel. Used ≤ 3 times in registry (currently 0). Never used in mason niche.
- **Text:** Source Sans 3 (grotesk, variable wght 200-900). Humanist, readable at body sizes, pairs with Manrope's geometric precision.
- **Accent:** DM Mono (mono, label role). For joint-stage labels, sample tags, tool readouts, and step numbers.
- **Why:** Manrope's clean geometry echoes the precision of joint profiling; Source Sans 3 provides warm readability for technical explanations; DM Mono marks measurements and stages like a mason's pencil notation.

## Palette

**Family:** Lime Cream + Soft Brick + Iron Ink
- ink: #2b2520
- paper: #f4efe6
- accent: #a04e38 (soft brick red)
- deep: #3d322c (warm charcoal)
- signal: #c76f4e (warm terracotta, buttons only)

**Contrast table:**
| Pair | Ratio | Body ≥4.5 | Large ≥3 | Use |
|---|---|---|---|---|
| ink on paper | 13.20:1 | pass | pass | body text, headings on light |
| accent on paper | 5.03:1 | pass | pass | links, accent text on light |
| paper on ink | 13.20:1 | pass | pass | text on deep bands |
| paper on accent | 5.03:1 | pass | pass | button text, labels on signal |
| accent on deep | 2.62:1 | FAIL | FAIL | shapes/rules only, never text |
| signal on deep | ~3.8:1 | FAIL | pass | large button text only |

**Tone:** light-led. Paper dominates; deep used for one band (guarantee); accent used for signal buttons and joint highlights.

## Hero family

**Family 5: Offset framed photo.** A close photo of hands tooling a fresh lime joint sits in a frame offset from the grid, overlapping a cream panel with the headline. The frame's border is drawn as a mortar line (the signature's first state: raked). Unique in mason niche; family 5 used 2 times in registry (electrician-A, handyman-C) — within ≤3 limit. Breaks the cliché by making the frame itself part of the signature system, not just a decorative border.

## Motion score

- **Intro (≤1.2s):** Framed hero photo unclips from the raked-joint line outward (`clip-path: inset(0 100% 0 0)` → `inset(0)`); headline lines rise with 70ms stagger. Skippable via `sw-motion` gate.
- **Scroll story 1 (process):** Pinned cross-section of one brick joint at ≥640px; as you scroll, the joint is raked out, packed in two layers, struck, and tooled, each stage labelled. Height: `calc(4 * 55svh + 100svh)`. Below 640px: four static stacked cards with clip reveal.
- **Scroll story 2 (guarantee):** Concave joint draws left-to-right via `--sw-p` clip-path wipe as the guarantee text rises.
- **Hover:** Hairline under nav/service items grows `scaleX(0→1)` from left origin, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** All joints render in their final state; process story shows four static diagrams side-by-side; intro is instant; hover effects disabled.

## Tools

1. **Mortar Softness Check** (`checklist` module). Inputs: house age, mortar color, key-scratch test, spalling near gray patches. Output: likely mortar type + why hard cement causes spalling + sample repointing range from `{{proof.prices.0}}`. Hand-off: prefills quote form service = "Lime mortar repointing".
2. **Repoint-or-Rebuild (Chimney)** (`checklist` module). Inputs: leaning, loose bricks, cracked crown, ceiling stain. Output: likely job (crown / repair / rebuild) + sample range from `{{proof.prices.1-2}}`. Hand-off: prefills service = "Chimney rebuild" or "Chimney crown".
3. **Tuckpoint Timing** (`opennow`-adjacent, custom in app.js). Input: current month. Output: season window (no work below 40°F) + next bookable month. Hand-off: prefills "when" step in quote form.
4. **ZIP Checker** (`zip` module). Validates against `{{biz.zips}}`; yes → offers form with ZIP prefilled.
5. **Multi-step Quote Form** (`form` module). Steps: service → house age → photos → timing → contact. Honest thank-you state per DEMO-RULES §3.

## Voice

**Three sentences:**
- "Your brick was laid before Portland cement existed. The mortar must be softer than the brick, or the brick breaks first."
- "We rake out the old joint by hand, mix lime mortar matched to your wall, pack it in layers, and tool the profile to match."
- "If a new joint cracks or loosens within two years, we come back and repoint it at no charge."

**Five words never used:** guaranteed (use "two-year mortar promise"), expert, premium, affordable, best.