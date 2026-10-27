# Media Plan — flooring-A (Third Coat Floor Works)

## Hero

- **Key:** `hero-A1`
- **Section:** Hero filmstrip frame 5 (satin finish reflecting window). The full strip uses hero-A1 through hero-A3 plus two process frames; hero-A1 is the primary poster and first visible frame on load.
- **Crop:** `object-position: 50% 40%`. Wide shot of freshly sanded oak strip in soft window light; grain readable, no furniture. Subject centered vertically to survive 390px crop.
- **Treatment:** Standard grade (`saturate(.88) contrast(1.04) sepia(.1)`). No overlay. Grain layer at 5% opacity on this frame only.
- **Caption:** Freshly sanded red oak strip catching morning window light.

## Break

- **Key:** `material-sawdust`
- **Section:** Full-bleed atmospheric break between pinned story and estimator. Tones shift from t-paper to t-deep after this band.
- **Crop:** `object-position: 50% 60%`. Tight texture fill; sawdust and grit in raking light, no identifiable tools or workshop clutter.
- **Treatment:** Standard grade. Grain layer at 5% opacity. Slight warm push via existing sepia(.1).
- **Caption:** Sawdust and abrasive grit settled in raking window light.

## Story (pinned crossfade sequence)

- **story-1 / Key:** `process-sander`
  - **Section:** Pinned story step 1 (36 grit: old finish off).
  - **Crop:** `object-position: 40% 50%`. Drum sander path across floor, operator out of frame or seen from behind only. Dust visible in light beam.
  - **Treatment:** Standard grade. No overlay.
  - **Caption:** Drum sander revealing bare wood with dust caught in side light.

- **story-2 / Key:** `process-stain`
  - **Section:** Pinned story step 2 (stain wiped on bare oak).
  - **Crop:** `object-position: 55% 45%`. Hand and rag wiping stain across bare oak; hand only, no face.
  - **Treatment:** Standard grade.
  - **Caption:** Stain wiped across bare oak boards in one even stroke.

- **story-3 / Key:** `process-finish`
  - **Section:** Pinned story step 3 (first coat rolled on).
  - **Crop:** `object-position: 50% 50%`. T-bar applicator or roller laying wet finish; sheen visible, no face.
  - **Treatment:** Standard grade.
  - **Caption:** Waterborne finish rolled onto sanded oak with a wet sheen.

- **story-4 / Key:** `detail-grain-redoak`
  - **Section:** Pinned story step 4 (finished surface close-up). Also used as the "after" state in the crossfade.
  - **Crop:** `object-position: 50% 50%`. Tight grain fill; open red oak pores visible, no laminate print.
  - **Treatment:** Standard grade.
  - **Caption:** Red oak grain opened by sanding and sealed under satin finish.

## Detail slots

- **detail-1 / Key:** `detail-stain-samples`
  - **Section:** Stain sample picker tool output area. Shows real swatches brushed on bare floor.
  - **Crop:** `object-position: 50% 40%`. Row of 4–5 stain swatches on bare oak; no brand cans readable.
  - **Treatment:** Standard grade.
  - **Caption:** Five stain swatches brushed directly onto bare oak for comparison.

- **detail-2 / Key:** `detail-cupping`
  - **Section:** Refinish-or-recoat quiz result explanation (when cupping is detected). Also slab moisture explainer context.
  - **Crop:** `object-position: 50% 55%`. Cupped board edges near sink or door; the cup visible, no extreme flooding.
  - **Treatment:** Standard grade.
  - **Caption:** Hardwood boards cupped at the edges from moisture below.

- **detail-3 / Key:** `detail-stairs`
  - **Section:** Services card for stair treads & risers.
  - **Crop:** `object-position: 50% 35%`. Oak stair treads freshly finished; nosing and tread visible, no commercial stairs.
  - **Treatment:** Standard grade.
  - **Caption:** Oak stair treads sanded and finished to match the hall floor.

- **detail-4 / Key:** `detail-transition`
  - **Section:** Services card for thresholds & transitions.
  - **Crop:** `object-position: 50% 50%`. Clean wood-to-tile threshold flush; no clutter, no toe-catch lip.
  - **Treatment:** Standard grade.
  - **Caption:** Flush wood-to-tile transition cut to prevent toe catches.

## Gallery

- **gallery[0] / Key:** `finished-living`
  - **Section:** Proof / reviews section background or gallery grid. Modest living room with refinished floor.
  - **Crop:** `object-position: 50% 45%`. Real house scale; no staging excess, no mansion.
  - **Treatment:** Standard grade.
  - **Caption:** Refinished oak floor in a modest Knoxville living room.

- **gallery[1] / Key:** `detail-grain-whiteoak`
  - **Section:** Gallery grid. White oak grain with ray fleck for material variety.
  - **Crop:** `object-position: 50% 50%`. Tight grain fill; ray fleck visible, no laminate.
  - **Treatment:** Standard grade.
  - **Caption:** White oak grain showing ray fleck after sanding and sealing.

- **gallery[2] / Key:** `process-lacing`
  - **Section:** Gallery grid. Board repair & lacing service illustration.
  - **Crop:** `object-position: 45% 50%`. Hands weaving new boards into existing floor with mallet; hands only, no face.
  - **Treatment:** Standard grade.
  - **Caption:** New oak boards woven into an existing floor to replace damaged sections.

- **gallery[3] / Key:** `home-tennessee`
  - **Section:** Gallery grid or ZIP checker context. Establishes Knoxville/TN residential setting.
  - **Crop:** `object-position: 50% 55%`. Brick ranch or bungalow on leafy street; Southeast US architecture, no snow.
  - **Treatment:** Standard grade.
  - **Caption:** Brick ranch home on a tree-lined Knoxville street.

## Notes for builder

- All keys exist in `niches/flooring/media/manifest.json` (placeholder mode). No hot-links.
- Hero key `hero-A1` is unique to flooring-A; no sibling or delivered site uses it as hero.
- Photo grade is uniform: `saturate(.88) contrast(1.04) sepia(.1)` applied via `.frame img` selector in system tokens.
- Grain overlay (SVG noise at 5% opacity) applies ONLY to hero-A1 and material-sawdust (break). Not on any other frame.
- Reduced motion: all photos render statically in their assigned slots; no crossfade, no pin. Pinned story becomes four stacked photos with grit labels.
- No faces toward camera in any selected frame. No logos, plates, signs, or house numbers. All residential, all Tennessee/Southeast US appropriate.