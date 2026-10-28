# insulation-A · Concept

## 1. Three obvious concepts, rejected
1. **Thermal camera house.** Red/blue IR image hero, "find your leaks". Every competitor does it (brief §4.1); also invents data.
2. **Cozy inside, cold outside.** Warm living-room photo, sweater, mug, window onto snow, "comfort you can feel". Template +
   cliché §4.3/§4.6, and we have no such photo.
3. **The brief seed literally: video + scrim + a left margin line.** Hero family 1 is already at 2 in the library (capped), and
   we have no video; a plain vertical line with level labels is also close to the delivered "Altitude Marker Rail".

## 2. Thesis
**The page is a section sawn through one Duluth house, roof peak to rim joist, and the warm air climbing it is stitched shut
level by level, top down, as you read.** (Material: the house cross-section. Verb: stitch.)

## 3. Signature system: "Heat Riser + Seal Stitch"  (`data-sw-signature="heat-riser"`)
Primitive: a 2px amber (#F2A541) vertical riser with upward chevrons (warm air) in a 64px left margin column. At every level it
meets a **leak notch** (a gap in the house line). When that level is in view the notch is **stitched**: 3-5 short ice-blue
(#8FD3E0) cross-stitches draw across the gap (stroke-dashoffset, 60ms stagger) and the riser below goes still and turns ice.
Each level carries a **level tag**: `L1 · ROOF DECK` in Big Shoulders caps + "Sample January night: −8 °F out / 68 °F in"
(illustrative, Sample-labelled; never a measured claim).
- **Hero:** 4-cell mosaic: the night photo huge under a gable-topped cell + 3 drawn
  level-cut tiles (roof deck, attic, rim joist); the riser starts at the gable peak and exits the
  ridge as 3 amber chevrons "leaking" into the night (the problem, unstitched).
- **Story (#order, pinned ≥ 900px):** a drawn SVG cut of a 2½-storey hillside house; amber arrows rise from the basement and
  slip out at 5 leak points (chimney chase, top plates, bath fan, knee wall, rim joist); each scroll step stitches one leak,
  the arrow stops there and turns ice; final step: the roof gets an even white snow line.
- **Levels / services cards:** 8 services hang off the riser as level cards (L1 Roof deck ice dams → L2 Attic sealing + top-up
  + fans/hatches → L3 Knee walls → L4 Walls dense-pack → L5 Rim joist → L6 Crawl/porch floors); each card's top-left notch is
  stitched on hover/focus (the hover language).
- **Proof (reviews):** each review is pinned to the level it fixed (Karin L. → L1, Tom B. → L3, Rhonda K. → L5...) with a
  stitched notch as the quote mark.
- **Price:** each sample range row ends in a stitch count (rows = levels), riser runs down the table's left edge.
- **Form:** 4 steps = 4 stitches across the form's notch; completed step = stitched.
- **Footer:** the riser reaches the ground line (frost line), fully ice, with "L0 · Footing" tag and the hours/licence.

## 4. Type
- Display **Big Shoulders** (variable wght 100-900, opsz 10-72; used once in the library, never in the niche): tall, cold,
  Great-Lakes industrial, built for stacked level labels and a 3-line condensed h1.
- Text **Source Sans 3** (wght 200-900): plain humanist-leaning sans, very readable at 18px on dark, tabular figures for
  temperatures and prices. No accent face: level tags use Big Shoulders opsz 10 caps at wght 700, tracking .08em.

## 5. Palette: "Lake Superior Ink + Rime + Leak Amber + Stitch Ice"
| Role | Hex |
|---|---|
| deep (bg dark) | #0B171C |
| mid (dark alt band) | #1C2E36 |
| paper (rime) | #EEF1EC |
| paper-2 (snowbank) | #DDE3DD |
| ink | #0F1C22 |
| muted on dark | #A9BCC2 |
| muted on paper | #4A5A60 |
| accent amber (warm air, CTA) | #F2A541 |
| amber-text on paper | #8A5A12 |
| signal ice (sealed, focus on dark) | #8FD3E0 |
| teal-text / focus on paper | #1F6F80 |

Contrast (node tools/contrast.mjs, real):
| fg on bg | ratio | use |
|---|---|---|
| #EEF1EC on #0B171C | 15.97 | body on deep |
| #A9BCC2 on #0B171C | 9.24 | muted on deep |
| #F2A541 on #0B171C | 8.87 | amber words on deep |
| #8FD3E0 on #0B171C | 10.88 | ice words + focus on deep |
| #EEF1EC on #1C2E36 | 12.33 | body on mid |
| #A9BCC2 on #1C2E36 | 7.13 | muted on mid |
| #F2A541 on #1C2E36 | 6.85 | amber words on mid |
| #8FD3E0 on #1C2E36 | 8.41 | ice words + focus on mid |
| #0F1C22 on #EEF1EC | 15.23 | body on paper |
| #4A5A60 on #EEF1EC | 6.30 | muted on paper |
| #8A5A12 on #EEF1EC | 5.18 | amber-text on paper |
| #1F6F80 on #EEF1EC | 5.05 | focus ring + ice-text on paper |
| #0F1C22 on #DDE3DD | 13.31 | body on paper-2 |
| #4A5A60 on #DDE3DD | 5.51 | muted on paper-2 |
| #8A5A12 on #DDE3DD | 4.53 | amber-text on paper-2 (borderline: ≥ 18px only) |
| #0B171C on #F2A541 | 8.87 | **primary button text (dark on amber)** |
| #FFFFFF on #8A5A12 | 5.91 | primary button on paper tones (white on amber-dark) |
| #0B171C on #8FD3E0 | 10.88 | ice chip/tag |
| #F2A541 on #EEF1EC | **1.80 FAIL** | never on paper: shapes only, words use #8A5A12 |
| #8FD3E0 on #EEF1EC | **1.46 FAIL** | never on paper (use #1F6F80) |

## 6. Hero family: 8 (photo mosaic)
Niche: B=5, C=15. check-unique refused 13 and 5 (6/6 in the library, 5 also reserved by B) and 1 is capped at 2, so 8 (5 → 6).
Cliché broken: a mosaic usually means 4 job photos; here ONE night photo (lit windows in snow) is the big cell (≈ 62% width,
gable-topped clip-path) and the 3 small cells are DRAWN level cuts in the site's line language (L1 roof deck with an ice dam at
the eave, L2 attic with the open chimney-chase gap, L5 rim joist at the sill), each with an open amber leak notch. The riser
threads all 4 cells top-down. The h1 sits on the plain deep band, never on the photo's bright snow.

## 7. Motion score
- **Intro (≤ 1.1 s, no blocking):** h1 lines rise in a line mask (700ms, 70ms stagger); the 4 mosaic cells wipe in top-down
  (600ms, 60ms stagger, starts at 150ms); the riser draws from the gable peak to the hero's bottom edge (900ms) and
  3 amber chevrons drift up out of the ridge on a 4s loop (paused on hover/focus, off with reduced motion). Any key/scroll skips.
- **Story 1, stitch (#order, pinned ≥ 900px, 5 steps, height calc(5*55svh+100svh)):** each step stitches one leak in the SVG
  house, its arrow stops and turns ice, step copy swaps in a fixed slot; last step draws the even snow line on the roof.
- **Story 2, draw (whole page):** the margin riser draws down with scroll (scrub) and each level notch stitches as its section
  hits 60% of the viewport.
- **Hover (one language):** stitch: on hover/focus a card's/button's notch draws 3 ice stitches (200ms, 60ms stagger).
- **Reduced motion:** every notch already stitched, riser fully drawn and ice below each level, story shown as a static
  5-panel list with the SVG in its final sealed state; chevron loop removed.

## 8. Tools
1. **Heat path picker** (`hotspots`): inputs = tap a zone on the house SVG (attic, top-floor ceiling, knee walls, walls, rim
   joist, crawl/porch floor). Output: what usually leaks there, how we fix it, the sample range from facts.proof.prices if
   priced (attic, knee walls, rim joist, dense-pack). Hand-off: "Get this level priced" → form step 1 area pre-checked
   (`data-prefill="area:<zone>"`). JS-off: a definition list of all 6 zones.
2. **Ice dam risk check** (`checklist`): 5 yes/no from brief §5.2. Output: low/medium/high + likely heat paths + "what we check
   first". Hand-off: "Book an attic look before the next snow" → form step 2 "what you see" pre-filled with the ticked items.
3. **Season planner** (`tabs`): 12 month tabs (grouped Jan-Feb / Mar-Apr / May-Jun / Jul-Aug / Sep-Nov / Dec): what can be done,
   honest lead time in words (no numbers we do not have). Hand-off: "Book for <month>" → form timing pre-filled.
4. **ZIP checker** (`zip`): facts.biz.zips → yes/no + area name; pre-fills form ZIP.
5. **Quote form** (`form`, 4 steps): area of the house → what you see → ZIP and timing → contact.

## 9. Voice
- "Warm air leaves through the top of your house. We start there."
- "We seal the gaps around the chimney and the wires first, then we blow in insulation, not the other way round."
- "If the attic has grey-brown pebbles in it, we stop, and you get it tested before anyone touches it."
Never: "save", "eco", "comfort you can feel", "energy audit", "cozy".
