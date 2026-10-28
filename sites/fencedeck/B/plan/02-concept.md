# fencedeck-B · Concept (Tallyboard Fence & Deck, Denver)

## 1. Three obvious concepts, rejected
- **"Built for Colorado hail"**: hail-storm hero video, ice-ball icons, "tough decks for tough weather". Obvious: every Front
  Range roofer and decker leads with hail; competitor default; also fear-selling.
- **Before/after slider gallery**: grey deck → new composite, 12 sliders. Obvious: template move, banned captions, and the
  library has no honest before/after photos.
- **The brief seed literally: lumber yard look**: wood-grain backgrounds, kraft paper, grade stamps everywhere as decoration.
  Obvious: brief §4 cliché #6 (wood-grain wallpaper); the stamp alone is a texture, not a system.

## 2. Thesis
**The page is the takeoff sheet a builder fills in with a carpenter's pencil: Tallyboard counts every joist, board and post
in pencil tallies in front of you, and a grade stamp signs off each count before you pay.**
(Arguable: it bets the Denver buyer wants a bill of materials, not a lifestyle photo.)

## 3. Signature system: **Tally & Grade Stamp** (`data-sw-signature="tally"`)
Two primitives drawn once (03-system): `.tally` = SVG five-bar gate (4 graphite strokes + 1 stamp-blue slash, 2.5px round
caps, slight per-stroke rotation ±3deg so it reads hand-drawn); `.stamp` = ink box (2px stamp-blue border, 3px radius, mono
code line "TB · DEN · S-01", species/grade line in Arvo caps, 4% rough-edge SVG mask). Tallies always count something real.
- **hero**: the joist-plan tile counts its 10 drawn joists (a 12 ft run at 16 in. o.c. = 144/16 + 1) in tallies under the plan; the 5th
  slash crosses as the h1 settles. Stamp "TB-01 · COUNT FIRST" labels the hero.
- **counter (tool)**: result rows (boards, joists, sq ft) render their number + a tally strip (1 gate = 5 joists, capped at
  20 gates then "+n"); the running quote card in the margin keeps the tallies and becomes the form prefill.
- **posts story**: one tally stroke per post as the fence elevation draws post by post (8 ft spacing); stamp "POST · BELOW FROST".
- **proof**: each review card gets a stamp (town + service code); the 203 Sample reviews shown as 40 gates + 3 strokes in a
  dense tally block with the [Sample] tag.
- **prices**: each sample price row ends in a stamp "SAMPLE · per lin ft".
- **form**: step indicator = tally strokes (step 1 = 1 stroke … step 4 = slash); submit stamps "COUNTED" on the sheet.
- **footer**: a final tally of what the page counted (joists, boards, posts) + stamp with {{biz.license}} (SAMPLE-) line.
Variation: data (counter), structure (labels), motion (posts), detail (footer/form).

## 4. Type
Display **Arvo** 700/400 (slab serifs like stencilled ends on lumber; 1 use in registry, 0 in niche). Text **Onest** 400-650
(plain, wide-aperture sans; reads like printed spec text). Accent **Martian Mono** (wdth 87.5, 500) for stamp codes, counts,
dimensions, tabular numbers. Pair Arvo/Onest unique.

## 5. Palette: "Kiln Pine + Graphite + Grade-Stamp Blue + Lumber-Crayon Yellow"
| role | hex |
|---|---|
| ink (graphite) | #24221F |
| paper (kiln-dried pine) | #F1E6CC |
| card (hail white) | #FBF8F0 |
| mid (sawn pine) | #E6D6B2 |
| muted text | #5C5446 |
| accent (grade-stamp blue) | #22508F |
| deep (blue graphite) | #1B2433 |
| signal (lumber-crayon yellow) | #F2B84B |

Contrast (tools/contrast.mjs, real):
| pair | ratio | use |
|---|---|---|
| ink #24221F / paper #F1E6CC | 12.79 | body |
| ink / card #FBF8F0 | 14.94 | body |
| ink / mid #E6D6B2 | 11.05 | body |
| muted #5C5446 / paper | 6.02 | small text |
| muted / card | 7.03 | small text |
| muted / mid | 5.20 | small text |
| accent #22508F / paper | 6.48 | links, stamps, focus |
| accent / card | 7.57 | links |
| accent / mid | 5.59 | links |
| white / accent | 8.03 | primary button |
| paper / accent | 6.48 | t-accent band text |
| #D6DEEC / accent | 5.94 | t-accent muted |
| paper / deep #1B2433 | 12.57 | t-deep body |
| #B9BFCC / deep | 8.45 | t-deep muted |
| #9DB8E6 / deep | 7.74 | t-deep links/accent |
| signal #F2B84B / deep | 8.71 | t-deep focus + highlight text |
| signal / accent | 4.49 | FOCUS RING ONLY on t-accent (≥3); never text |
| ink / signal | 8.86 | yellow tag / highlighter chip text |
| accent / deep | 1.93 | FAILS: never pair; shapes only |
| #A39A86 / paper | 2.25 | FAILS: rules/hairlines only |

## 6. Hero family: 8 (photo mosaic)
Brief's family. Note: family 8 is at 3 in the library (cap not meetable by any family this run, orchestrator said pick the
brief's). Cliché break: only ONE tile is a photo (B&W lumber stacks in snow, graded blue-graphite duotone); the other three
tiles are drawn takeoff sheets (joist plan with tally, hidden-clip section at board gap, post-below-frost section) so the
mosaic reads as photo + its count. Type on paper left, mosaic right (12-col: 5 / 7); on 390 the mosaic is a 2×2 under the CTAs.

## 7. Motion score
- **Intro (≤ 1.1 s, never blocks):** h1 line-mask rise 700ms; joist plan tile draws its joists (stroke-dashoffset, 40ms
  stagger) and the tally strokes draw 1-2-3-4, then the slash at 900ms. Content is in the DOM from frame 0.
- **Story 1 "draw" (posts):** ≥ 900px, pinned `calc(4*55svh + 100svh)`: a fence elevation draws post by post via `--sw-p`,
  each post adding a tally stroke and a depth line dropping below a dashed frost line. < 640 no pin: stacked cards, clip reveal.
- **Story 2 "stamp":** section stamps thunk in once (scale 1.08→1, opacity .0→1 + 4px ink-spread box-shadow fading, 260ms
  ease-out) when the label hits 80% viewport.
- **Hover:** pencil underline: a 2px graphite line grows scaleX 0→1 from left, 200ms, slight 1deg skew (one language).
- **Reduced motion:** all drawings at final state, all tallies complete, stamps flat; no pin (posts as a static elevation).

## 8. Tools
1. **Deck board counter** (`estimator`): width ft, depth ft, board width (5.5 in. wood / 5.5 in. composite), joist spacing
   12/16 in., material. Output: sq ft, boards (≈ (depth·12 / (5.5+gap)) rows × length factor, +10% waste, rounded), joists
   (width·12/spacing +1), sample range from facts prices (composite $60-95, wood $40-65 per sq ft), all Sample. Live drawn plan
   updates. Hand-off: "Put these counts on my quote" → form prefill (w, d, spacing, material, sqft, boards, joists).
2. **Material compare** (`compare`): pressure-treated, cedar, composite, PVC: upkeep/yr, hail notes, UV notes, look; upkeep
   slider. No brands. Hand-off: chosen material → form `material`.
3. **Permit checklist** (`checklist`): deck height > 30 in.? attached to house? fence > 6 ft? front yard? Output hedged:
   "usually needs a permit / usually does not; we check your city". Hand-off: `permit` hidden field.
4. **ZIP checker** (`zip`) against {{biz.zips}} → form zip. 5. **Quote form** (`form`) 4 steps, tally step marker.

## 9. Voice
- "A lump sum tells you nothing. A count tells you what goes in your yard, board by board."
- "If a deck sits more than 30 inches up, it usually needs a permit. We check with your city before anyone digs."
- "Count them when we're done."
Never: quality, solutions, craftsmanship, premier, dream.
