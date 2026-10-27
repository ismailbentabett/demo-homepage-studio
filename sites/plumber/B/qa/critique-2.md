COPY: ok

# Critique — plumber-B (Ledgerline Plumbing), round 2

## Five-second test
1440-first.jpg / 390-first.jpg: "Pittsburgh plumbing, written down." Trade + city + outcome clear. Primary action "Price it" (copper) vs secondary "Call". Phone visible. Proof line present. The ledger signature (No.01/02/03) is visible. Passes the 5-second test. The hero image is a solid bright green block which clashes with the palette, but the text hierarchy holds.

## firstScreen — 9.0
Earned: h1 states trade+city+outcome in 4 words; primary/secondary button hierarchy clear; phone visible at 1440 (header) and 390 (sticky bar); proof line under h1; ledger entries visible in hero. Held below 10: the hero photo is a placeholder green block, creating a jarring color clash with the muted iron/copper palette, and the composition reads as text-left / color-block-right.

## distinctiveness — 8.5
Earned: Ledger Rule + Status Stamp signature in ≥4 sections (hero, services, reviews, footer). IBM Plex Mono display face is distinct. Palette avoids plumber clichés. Held below 9: signature decorates more than organizes past the hero; section shapes are conventional splits/stacks.

## type — 9.0
Earned: IBM Plex Mono + Outfit pair; fluid clamp scale; tabular-nums on data; lead paragraph set apart; tracked caps kickers. Type carries the "field ledger" voice.

## layout — 7.5
Earned: Real grid, varied shapes. Deduction: Unchanged from R1. Three dark bands touch in the lower half — "From the ledger" (t-deep) → "Sample ranges" pricing (t-deep) → "Where we work" (t-deep) read as one long undifferentiated block (1440-full.jpg, ~62–86% scroll) (−1.0). The steel-blue tool band floats without enough contrast against the deep sections.

## photo — 6.0
Deduction: Every frame is a placeholder. The hero is a solid bright green block (1440-first.jpg) which is actively dissonant with the site's muted palette (worse than a neutral grey). Story/area frames are grey/white voids (1440-full.jpg). The framing CSS exists but no photography is visible to assess. Floor is 6; this sits at floor because the visible "media" detracts from the design.

## copy — 9.0
Earned: Concrete trade nouns; "Sample" tags on all prices/reviews; honest form success state; buttons named for action; voice matches concept.

## mobile — 9.0
Earned: Composed-for-phone layout; sticky bar; stacked ledger entries; no horizontal scroll; tap targets ≥48px.

## a11y — 9.0
Earned: Skip-link; focus-visible; labeled inputs; reduced-motion safety net; forced-colors borders; honeypot aria-hidden.

## motion — 8.0
Earned: Structure implies clip-path wipes, count-ups, SplitText. Capped below 9 because static screenshots cannot confirm easing/timing or that the tool interaction works.

## wow — 7.5
Deduction: Lowered from 8.0. The "Take your own readings" steel-blue band (1440-full.jpg) appears visually empty in the screenshot — no tool UI, inputs, or output are rendered. It reads as a flat color block rather than an interactive moment. The concept is tied to the thesis, but the execution is invisible.

## polish — 9.0
Earned: SVG favicon, OG tags, JSON-LD, print stylesheet, lazy images, consistent zero-radius system.

## Arithmetic
14×9.0 + 12×8.5 + 10×9.0 + 10×7.5 + 8×6.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×8.0 + 8×7.5 + 4×9.0
= 126 + 102 + 90 + 75 + 48 + 72 + 63 + 63 + 96 + 60 + 36 = 831 / 100 = **8.31**

## Must
(none — placeholder media is expected per task instructions, though the green block is poor. No demo-rule breaches found.)

## Should
- **where:** 1440-full.jpg ~62–86% scroll, #reviews → #pricing → #area | **problem:** three t-deep bands touch and read as one long dark block (unchanged from R1) | **fix:** make the pricing section t-paper so the run becomes deep → paper → deep.
- **where:** 1440-first.jpg hero right half | **problem:** bright green placeholder block clashes with the muted palette | **fix:** replace with a neutral grey placeholder or land the approved sewer-camera media.
- **where:** 1440-full.jpg, the steel-blue "Take your own readings" band | **problem:** the tool area reads as a flat empty accent block; the wow tool is not visually doing anything | **fix:** ensure the tool UI (inputs/output) renders visibly in the static build, styled as a ledger entry.

## Elevate
The two weakest categories are **photo** (weight 8, score 6.0) and **layout** (weight 10, score 7.5).

- **photo → move:** Replace the dissonant green placeholder with a neutral tone or land the art-directed media (sewer-camera still, gauge, brick house) with the saturate/contrast grade to unify the shoot.
- **layout → move:** Re-tone the lower half to break the dark run: deep hero → paper services → deep tools → paper estimator → deep reviews → **paper** pricing → deep area → paper form → deep footer. Let the ledger rule run continuously across tonal breaks.