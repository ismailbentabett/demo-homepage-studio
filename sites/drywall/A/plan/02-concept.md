# drywall-A · Concept (Knife & Hawk)

## 1. Rejected (obvious)
- **"Smooth walls, guaranteed."** Full-bleed photo of a painted living room, three service cards, review slider.
  Obvious: every competitor; the "after" is a painted room, which brief §4 names as a cliché.
- **Before/after slider hero.** Drag the handle, hole → fixed wall. Obvious: template plugin, and stock frames would
  never be the same wall (DEMO-RULES forbids fake before/after).
- **The brief seed literally: left-margin coat counter 0→5 + sticky photo hero (family 12).** Obvious and taken:
  painter-A already ships "Coat Schedule Stripe" (left-edge numbered stripe, hero 12), and family 12 is at the library cap.

## 2. Thesis
The page is a wall under a twelve-inch knife: every pass **skims** a section flatter and paler, until the rough gray
board at the top is primed white at the form.

## 3. Signature system: "Feathered Knife Pass" (`data-sw-signature`)
Primitive: a blade shape (12-inch taping knife seen face-on: a long rectangle, hard leading edge, ragged *feathered*
trailing edge drawn as an SVG mask with 14 irregular teeth + blur 1.5px). It moves left→right via `--sw-p`; behind it the
surface is smoother. Never a margin rail, never numbered stripes.
- **Hero:** hero-A1 sits in a *square-cut patch frame* (hard 2px cut edge + paper-tape strips at the 4 seams, tilted
  -1.2°, offset right, h1 overlapping the left edge). Intro pass feathers the frame's cut edges into the wall (tape strips
  fade to a soft mud halo). Wow moment.
- **Seams between bands:** every band boundary is a feathered knife edge (SVG `mask-image`), coarse at top (amplitude
  14px) → finer each band (10, 7, 4, 2px) → a straight line above the form. The page literally gets smoother.
- **Coats story:** a drawn wall panel (CSS: board gray + tape + mud tone) gets one pass per step; the blade crosses it on
  each step change.
- **Ledger (prices):** each price row is skimmed on entry (row bg wipes from mud gray to paper, 60ms stagger).
- **Proof:** reviews sit on square "test boards" (the scrap board sprayed in the driveway, review Tom H.) with a texture
  swatch corner; hover = one small pass across the board.
- **Contact + footer:** the form sits on the smoothest surface (#FFFFFF, no feather); footer starts with one last pass
  line and the words "Primed. Ready for your painter."

## 4. Type
Display **Hanken Grotesk** 800 (tight -0.035em, tabular numerals for prices, visits and the phone); text **Public Sans**
400/600 (quiet, government-plain, made for forms). Why: a firm, flat-sided grotesk reads like a straight-edge on the wall;
the body stays out of the way. No mono (B owns mono), no serif (C owns serif).

## 5. Palette: "Gypsum Gray + Primer White + Spruce Knife" (light-led)
| role | hex |
|---|---|
| ink | #1D2327 |
| paper (primer) | #F3F0E8 |
| white (final coat) | #FFFFFF |
| mid (gypsum board) | #D5D6D2 |
| skim (between) | #E6E2D8 |
| mud (shapes only) | #7D8B91 |
| accent (spruce, actions only) | #0E5C4C |
| deep | #16282A |
| signal (paper-tape buff) | #E0C98F |
| on-deep accent | #7FC7BF |

Contrast (tools/contrast.mjs):
| pair | ratio | use |
|---|---|---|
| #1D2327 on #F3F0E8 | 13.94 | body |
| #50595D on #F3F0E8 | 6.29 | muted |
| #0E5C4C on #F3F0E8 | 6.94 | links, focus |
| #FFFFFF on #0E5C4C | 7.91 | primary button |
| #F3F0E8 on #0E5C4C | 6.94 | accent band text |
| #E0C98F on #0E5C4C | 4.86 | focus ring on accent band, small labels |
| #1D2327 on #D5D6D2 | 10.87 | body on board gray |
| #4A5357 on #D5D6D2 | 5.39 | muted on board gray |
| #0E5C4C on #D5D6D2 | 5.41 | link/focus on board gray |
| #1D2327 on #E6E2D8 | 12.28 | body on skim |
| #50595D on #E6E2D8 | 5.54 | muted on skim |
| #0E5C4C on #E6E2D8 | 6.11 | link/focus on skim |
| #0E5C4C on #FFFFFF | 7.91 | link/focus on white |
| #1D2327 on #FFFFFF | 15.88 | body on white |
| #F3F0E8 on #16282A | 13.44 | text on deep |
| #A9B6B8 on #16282A | 7.34 | muted on deep |
| #E0C98F on #16282A | 9.42 | labels on deep |
| #7FC7BF on #16282A | 7.89 | links/focus on deep |
| #16282A on #7FC7BF | 7.89 | button on deep |
| #1D2327 on #E0C98F | 9.77 | text on tape strip |
| #7D8B91 on #F3F0E8 | 3.08 | **shapes/rules only, never text** |
| #1D2327 on #0E5C4C | 2.00 | **FAIL: never** |

## 6. Hero family 5: offset framed photo
Cliché broken: the frame is not a decorative border but a *drywall patch* cut square into the wall (taped seams), and the
signature pass feathers it into the wall, so the frame performs the service. h1 overlaps the patch's left seam on a paper
chip (overlap ≤ 24px at 320, text never over the photo at 320). Siblings: B = 3 (type mask), C = 13 (arch).

## 7. Motion score
- **Intro (0.9s, once, skippable by scroll/keys):** blade sweeps the hero left→right; patch edges feather; h1 static and
  readable from frame 0. Reduced motion: final feathered state shown.
- **Story 1 "coats" (wipe):** pinned ≥640px, 4 steps, height `calc(4*55svh + 100svh)`; panel texture steps rough→smooth,
  step label "visit 1/2/3"; <640 stacked cards with clip reveal.
- **Story 2 "ledger" (wipe):** price rows skimmed in sequence on enter, 60ms stagger, once.
- **Hover:** 2px spruce underline wipes in from left (scaleX 0→1, 200ms, feathered 8px tail gradient); same on cards.
- **Reduced motion:** no blade, no pin; bands keep their tone steps and feathered seams (static), all content visible.

## 8. Tools
1. **Patch sizer** (`estimator`): inputs size [coin, fist, plate, door-sized], surface [wall, ceiling], finish
   [smooth, textured], painted after [y/n]. Output: Sample range from facts.prices (coin/fist → "Small hole or dent patch",
   plate/door ceiling → "Water-damaged ceiling section", textured adds note "Texture match, one wall" band), visits = 3
   (coats) or 4 (textured / door-sized), dust note. CTA "Book this size of repair" → form prefill {service, size, surface,
   visits}.
2. **Texture matcher** (`tabs`): 4 swatches drawn in CSS (smooth, orange peel, knockdown, skip trowel) → name, how applied,
   blend difficulty, "we spray a test board first". CTA "Send a photo with the light from the side" → form {texture}.
3. **Crack & nail-pop timer** (`checklist`): type [nail pop, seam crack, plaster crack, stain], when [this winter, older],
   growing [y/n] → "Fix now" or "Put me on the spring list" + reason (heating season dries framing). Plaster crack: "pin
   it, don't just caulk it". CTA → form {timing}.
4. **ZIP checker** (`zip`) from facts.zips.
5. **Quote form** (`form`), "final coat": problem → size + photos → wall/ceiling + texture → timing → contact.

## 9. Voice
- "Cut it square, back it, tape it, three coats. Then it's gone."
- "Mud has to dry between coats, so a fist-size hole is three short visits, not one long one."
- "We hang plastic at the doorway before the first sanding block comes out."
Never: "premier", "solutions", "seamless" (as marketing), "no job too big or too small", "state-of-the-art".
