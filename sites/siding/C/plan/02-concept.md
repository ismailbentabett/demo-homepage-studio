# siding-C · Concept

## Rejected
1. **Painted-lady postcard.** Hero = a sunny row of pastel Victorians, script logo, "Restoring Providence's beauty". *Obvious:* every exterior contractor's template; the brief's photo mood taken literally; we also have no such approved photo.
2. **Before/after slider street.** A Providence street drawing where each house flips from tired to new. *Obvious:* before/after is banned in captions, and the slider is the #1 contractor-site gimmick.
3. **Era timeline 1850→1930.** A horizontal timeline of house styles with a card per decade. *Obvious:* the seed taken literally, and too close to drywall-C "Era Plates" in the registry.

## Thesis
**The page is a Providence pattern book read from the gable down: every band ends in the cut edge of a real shingle pattern, and scrolling lays each course from the bottom up.** (Arguable: no straight section edges anywhere; the shingle profile *is* the layout.)

## Signature system: Course-Cut Edges (`data-sw-signature`)
One CSS/SVG primitive: `.cut` = a 28–44px band at the bottom of a section, `mask-image` of a repeating shingle butt profile in the *next* band's color, so the lower band appears to overlap like a course. Each carries a legend chip (`.cut__tag`: "Pattern 02 · Fishscale · 1880s").
| Section | Profile | Variation |
|---|---|---|
| hero (deep sage → paper) | **fishscale** scallop, r 22px | the mask word's baseline sits on it; intro lays scallops L→R |
| patterns / pattern book (paper → mid sage) | **diamond** point | the edge switches to the active tab's profile (5 profiles) |
| story "Under the courses" (mid → paper) | **staggered square** 3 rows offset ½ | rows lay in as the 4 steps progress (scrub) |
| proof / reviews (paper → salmon) | **hexagon** | each review card's top edge is a single 3-shingle hexagon cut |
| prices (salmon → deep) | **clapboard drip**: straight 4-in. reveal lines with shadow | price rows are clapboard courses, reveal = row gap |
| footer index (deep) | **all five** in a row as the book's index tabs | each tab = an anchor to its plate; ZIP checker under |
Wow moment: hero intro + the pattern book where clicking "Hexagon" re-cuts the section edge live.

## Type
**Gloock** (display, high-contrast 19th-c. book face, heavy enough to carry the photo mask) + **Karla** (text 400/500/700, plain grotesk for labels and body). Plate numbers and chips in Karla 700 caps tracking .12em. Gloock: 0 uses in registry, new to niche.

## Palette — "Painted-Lady Sage + Salmon Gable + Red Door"
ink #1E2A2B · paper (cream trim) #F4EEDF · deep (sage body) #3E5A4B · mid (light sage) #A9BC9E · signal (salmon gable) #E9A58C · accent (red door) #A3412C · cedar #8A5A36. White #FFFFFF on buttons.
| Pair | Ratio | Use |
|---|---|---|
| ink / paper | 12.76 | body |
| muted #55605A / paper | 5.65 | meta |
| accent #A3412C / paper | 5.41 | links, chips, focus on paper |
| white / accent | 6.26 | primary button |
| accent / white | 6.26 | inputs/cards on white |
| cedar #8A5A36 / paper | 5.04 | plate numbers, small labels |
| deep sage #3E5A4B / paper | 6.55 | headings on paper |
| paper / deep | 6.55 | body on sage field |
| white / deep | 7.58 | h1 on sage |
| #D7E0CF / deep | 5.58 | muted on sage |
| signal #E9A58C / deep | **3.69** | large text ≥24px + focus ring only, never body |
| ink / mid #A9BC9E | 7.29 | body on light sage |
| #33413B / mid | 5.29 | muted on light sage |
| accent / mid | **3.09** | FAIL body: rules/shapes only; links on mid use ink + underline |
| ink / signal | 7.19 | body on salmon band |
| paper / ink | 12.76 · signal / ink 7.19 · #C9D6C0 / ink 9.75 | footer |
| signal / paper | **1.77** | FAIL: shapes (scallops) only |
Focus ring ≥3 everywhere: accent on paper 5.41, signal on deep 3.69, ink on mid 7.29, ink on salmon 7.19, signal on ink 7.19.

## Hero family 3 — type mask
FISHSCALE in Gloock at ~22vw, cedar-shingle photo clipped into the letters (`background-clip:text` fallback solid cream). **Cliché broken:** the masked word sits *on* a fishscale-cut edge so the letters look like a shingled gable; it's the pattern name, not the brand; a drawn fishscale swatch completes the word's right counter and carries the legend chip. h1 sits below in white on sage.

## Motion
- Intro (≤1.1s, text readable at 0): mask word clip bottom-up 700ms; scallop edge lays L→R 40ms stagger; skipped under reduced motion.
- Story 1 "lay": each `.cut` edge lays in bottom-up as it enters (desktop scrubbed via `--sw-p`, phone one-shot IO).
- Story 2 "draw": "Under the courses" (4 steps: open the wall, check sheathing, wrap+flash, lay courses) — pinned ≥900px, `calc(4*55svh + 100svh)`; staggered-square rows lay one row per step.
- Hover: 2px red-door hairline scaleX 0→1 from left, 200ms, `(hover:hover)` only.
- Reduced motion: every edge drawn complete, story stacked, no pin, no clip.

## Tools
1. **Pattern book** (`tabs`): 5 tabs (Straight, Staggered, Fishscale, Diamond, Hexagon) → era, house type, where used, matching service; edge re-cuts; "Match this pattern" → form `service=Fancy-cut shingles&pattern=Fishscale`.
2. **Color by street** (`tabs`): 3 sample schemes on a drawn triple-decker (body/trim/accent swatches from palette + review's "sage body, cream trim, deep red door"); → form `service=Color`.
3. **Squares calculator** (`estimator`): wall length ft, stories 1/2/3, gables 0-2, windows+doors count, material (cedar shingle per sq ft from facts $14–$24) → wall area, squares +10% waste, Sample range; → form `sqft`, `service`.
4. **ZIP** (`zip`): facts zips in footer index. 5. **Quote form** (`form`): 3 steps (what & where → house era/pattern → contact), prefilled.

## Voice
- "If your gable is missing fishscales, we cut new ones to the curve of the ones still on it."
- "We open the wall first, and you see what's under it before we price the rest."
- "A triple-decker should still look like three floors when we're done."
Never: *premium, elevate, transform, lifetime, act now*.
