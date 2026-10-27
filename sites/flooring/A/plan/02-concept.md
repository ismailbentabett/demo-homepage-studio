# Concept — flooring-A (Third Coat Floor Works)

## Three obvious concepts, rejected

1. **Showroom catalogue.** Endless product tiles with "shop by color" filters. Rejected: every big-box flooring site does this; brief §4 bans it; Direction A is process-ordered, not product-ordered.
2. **Before/after slider.** Worn floor vs finished floor side-by-side. Rejected: DEMO-RULES §5 bans before/after framing; stock photos can't honestly show the same floor; Direction A tells the process in order, not as a binary.
3. **Craftsman badge wall.** Clip-art badges ("Licensed · Insured · 17 Years") around a generic hero. Rejected: template look; brief §4 lists it as a competitor cliché; Direction A's proof comes from the grit sequence and real sanding-pass photos, not badges.

## The thesis

The page is the sanding pass: each section is one grit, and the signature is the grit number that gets finer as you scroll from bare wood to finish coat.

## The signature system

**Name:** Grit Sequence Rail

A horizontal rail carries the grit number (36 · 60 · 100 · STAIN · COAT 1 · COAT 2 · COAT 3) at the top of each section. The rail has a subtle noise texture whose grain size matches the grit: coarse speckle at 36, smooth at coat 3. The grit number is set in DM Mono at `--fs-2`, the section title in Crimson Pro beside it. The rail draws left-to-right on scroll via `--sw-p` clip-path wipe.

**Sections:**
- **Hero:** Filmstrip frames unclip left-to-right; the grit rail sits under the headline with "36 → FINISH" spanning the width.
- **Process story (pinned):** One floor photo crossfades through four states (worn → sanded → stained → finished); the grit counter ticks up as you scroll, and the rail advances.
- **Proof / reviews:** Each review card carries a small grit pill matching the service mentioned (e.g., "100" for sand & refinish, "STAIN" for stain samples). The rail appears as a thin divider between review groups.
- **Footer:** The rail completes with "COAT 3" and the initials TC in a finish-coat sheen. The noise texture is now smooth.

**CSS primitive:** `.grit-rail` with `data-grit="36|60|100|stain|coat1|coat2|coat3"`, `data-sw-signature` on the first instance. Noise texture via inline SVG data URI with varying `stdDeviation`.

## Type

- **Display:** Crimson Pro (serif, variable wght 200–900). Warm book serif for headings; crafted, calm. Not in registry.
- **Text:** Karla (grotesk, variable wght 100–900). Simple, readable sans for body and tool labels. Pairs with Crimson Pro by contrast of class (serif display + grotesk text). Not used as display in registry.
- **Accent:** DM Mono (mono, weights 300–500). Grit numbers, spec labels, price ranges. Tabular figures for alignment.

Why this pair suits the thesis: Crimson Pro reads like a craft book's chapter heading (the refinish as a documented process), Karla stays out of the way for body copy, and DM Mono gives the grit numbers the mechanical precision of a sanding machine's dial.

## Palette

**Family:** Raw Maple + Walnut Ink + Finish Amber

Light-led. Warm paper tones from raw maple and sanded oak, dark walnut for ink, one deep amber accent from satin finish catching window light.

| Role | Hex | Use |
|---|---|---|
| paper | #F5F0E8 | Background, body text ground |
| ink | #2C241E | Body text, headings on paper |
| accent | #B87333 | Grit numbers, buttons, rules on paper |
| deep | #1A1612 | Dark sections (break, footer), reversed text |
| signal | #C44D2B | Form submit, phone CTA, error states |
| mid | #D9CDB8 | Muted text, secondary rules on paper |
| cream | #FAF7F2 | Card backgrounds, form fields |

Contrast pairs to verify with `node tools/contrast.mjs`:
- ink #2C241E on paper #F5F0E8 (body ≥ 4.5)
- paper #F5F0E8 on deep #1A1612 (reversed body ≥ 4.5)
- accent #B87333 on paper #F5F0E8 (accent words ≥ 4.5)
- signal #C44D2B on cream #FAF7F2 (button text ≥ 4.5)
- mid #D9CDB8 on deep #1A1612 (muted on dark ≥ 3)
- focus ring #B87333 on paper #F5F0E8 (≥ 3)

## Hero family

**Family 9: Horizontal filmstrip.** Five frames in a scrollable strip: worn floor → 36 grit bare wood → 100 grit smooth → stain swatch → satin finish reflecting window. Headline sits above. Strip is swipeable with arrow buttons, no autoplay. Unique in the niche (no flooring site in registry uses family 9). Breaks the cliché: filmstrips are usually auto-playing carousels of finished rooms; this one is a manual, tactile progression through the actual work stages.

## Motion score

- **Intro (≤ 1.2s):** Filmstrip frames unclip left-to-right like a sander's pass, 70ms stagger, skippable via `prefers-reduced-motion`. Never blocks reading.
- **Scroll story 1 (pinned, ≥ 640px only):** One floor photo pinned; crossfades through four states driven by `--sw-p`; grit counter ticks. Verb: crossfade + count. Height: `calc(4 * 55svh + 100svh)`.
- **Scroll story 2 (estimator):** As rooms are added, an SVG floor plan sketch builds block-by-block with staggered clip-path reveal. Verb: draw.
- **Hover language:** Hairline underline grows `scaleX(0→1)` from left, 200ms, `@media (hover:hover)` only.
- **Reduced motion:** Filmstrip shows all five frames stacked vertically with captions. Pinned story becomes four stacked photos with grit labels. Estimator sketch is fully drawn on load. No animation, all content visible.

## Tools

1. **Stain sample picker** (`kit module: filter`). Inputs: wood type (red oak / white oak / heart pine / maple / not sure), room light (north / south / mixed), stain swatch (6 CSS-drawn swatches over grain photo), sheen (matte / satin). Output: swatch over grain, note on wood undertone, "we lay real samples on your floor before you choose". Prefill hand-off: selected stains passed to quote form via URL params.
2. **Refinish-or-recoat quiz** (`kit module: checklist`). Inputs: finish worn through to gray wood (y/n), deep scratches or pet stains (y/n), sanded before (count / not sure), cupping (y/n). Output: likely job (sand & refinish / screen & recoat / board repair + refinish), why, sample per-sq-ft range from facts. CTA: "Get it checked" → quote form with result prefilled.
3. **Square-foot estimator** (`kit module: estimator`). Inputs: rooms (add length × width or pick common size), service (from facts prices), stairs count. Output: total sq ft, sample range (low × sq ft to high × sq ft) labelled Sample, days out of room. Live SVG sketch builds as rooms added. Printable scope sheet via `@media print`. CTA: "Send these numbers" → quote form with sq ft and service prefilled.
4. **ZIP checker** (`kit module: zip`). Input: 5-digit ZIP. Output: served or not, from facts zips. Placed in mobile bar and quote form step 1.
5. **Multi-step quote form** (`kit module: form`). Steps: service → rooms and approx sq ft → current floor and any water → photos → timing → contact. Microcopy under submit: "We'll call you back to set up a visit." Beside phone: hours via `{{hours|today}}`.

## Voice

**Three sample sentences:**
1. "We sand to bare wood in three passes, then stain on your own boards so you choose in your light."
2. "If the finish is dull but unscratched, a screen-and-recoat brings it back in a day — no sanding needed."
3. "Seventeen years of Knoxville oak: we know which boards lace in clean and which ones need replacing."

**Five words never used:** premium, luxury, state-of-the-art, affordable, expert.