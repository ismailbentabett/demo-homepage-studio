# drywall-C — Concept

## 1. Three obvious concepts, rejected
- **A. "New England craftsman":** barn-wood texture, script logo, smiling owner photo, 30-icon services grid. Rejected: every NH contractor's template; brief §4 clichés.
- **B. "Before/after slider wall":** hero is a draggable slider cracked → smooth. Rejected: stock "afters" are different rooms; competitors already do it; brief bans fake before/after.
- **C. "Mill history museum":** sepia, Victorian ornament, a timeline of the Amoskeag mills. Rejected: costume, the brief's seed taken literally, sells history instead of repair, invites invented facts.

## 2. Thesis
**The page is a surveyor's book of Manchester walls: every section is cut open to show its era's layers, drawn lath-first as you arrive, because we repair the wall you actually have instead of the one a gut job assumes.**

## 3. Signature system — "Era Plates"
A drawn cut-away wall section (inline SVG, 1.5px ink lines + hatch fills) captioned like a book plate ("Plate II · c. 1950 · rock lath + gypsum plaster"). Layers draw in order (stud → lath → scratch coat → finish) via `--sw-p`. Hook: `data-sw-signature="era-plate"`.
- **Hero:** Plate I (1890 horsehair on wood lath, plaster *keys* curling behind the lath) sits under the arch sill like a drawing caption; builds on load.
- **Eras story (sticky):** plates I / II / III swap as the three era panels scroll; keys → rock lath → board + paper tape; each caption ends "keep / pin / replace".
- **Wall-era identifier:** the result card shows the matching plate; a "knock: hollow" answer highlights the lost-key gap in brick.
- **Service cards:** a 64px micro-plate in each card corner of the layer it touches (crack = keys, nail pop = screw through board, stain = ceiling board with a dashed water line).
- **Season strip:** a plate of a ceiling under a roof edge with the ice-dam layer; year line Dec-Feb "crack & pop season", Mar-Apr "ice dam stains".
- **Footer:** "Plate IV · your wall": a dashed empty outline that fills with the era picked in the tool/form (static outline without JS).
Partner frame: mill-window arches (`clip-path` semicircle top + thin SVG muntins) for hero, break photo, gallery and review pins.

## 4. Type
- Display **Newsreader** (opsz 72, wght 500-650; italic for plate numbers and years): a sturdy newspaper serif that reads like a 19th-c. city directory, period without costume. 0 display uses in the library.
- Text **Libre Franklin** (400/600, tabular figures for prices and years): Franklin Gothic is the American mill-era sans, plain and legible in forms.
- Accent: none. Newsreader italic does labels; no mono (that is B's language).

## 5. Palette — "Millyard Brick + Horsehair Cream + Winter Slate"
| role | hex |
|---|---|
| ink | #1E1B1A |
| paper (plaster cream) | #F2EADB |
| paper-hi | #FAF6EE |
| accent / brick ground | #8F3A28 |
| deep (Merrimack night) | #1C2530 |
| mid (winter slate) | #3E5568 |
| signal (lamp amber) | #E9B872 |
| muted on cream | #5E554D |
| muted on brick | #F0D9C4 |
| muted on deep | #B9C6D0 |

Contrast (`tools/contrast.mjs`, real ratios):
| fg / bg | ratio | use |
|---|---|---|
| ink #1E1B1A / cream #F2EADB | 14.31 | body |
| ink / paper-hi #FAF6EE | 15.87 | body, form |
| muted #5E554D / cream | 6.09 | meta |
| brick #8F3A28 / cream | 6.26 | links, accent words |
| brick / paper-hi | 6.94 | links in form |
| white / brick | 7.48 | primary button text |
| cream / brick | 6.26 | text on brick bands |
| #F0D9C4 / brick | 5.50 | muted on brick |
| cream / deep #1C2530 | 12.94 | text on deep |
| #B9C6D0 / deep | 8.88 | muted on deep |
| amber #E9B872 / deep | 8.52 | signal words, focus on deep |
| ink / amber | 9.42 | amber chip text |
| deep / amber | 8.52 | amber button on brick/deep |
| white / slate #3E5568 | 7.76 | slate band text |
| cream / slate | 6.49 | slate band text |
| slate / cream | 6.49 | winter labels on cream |
| deep / cream | 12.94 | focus on cream / paper |
| **amber / brick** | **4.12, FAILS body** | only ≥24px display words + focus ring on brick (≥3 ok) |

## 6. Hero family — 13, shape-masked photo
A tall mill-window arch (semicircle top, ratio 4:5.4) holds the photo in the right 5 columns; h1 left on brick. Cliché-breaker: the arch is glazed with thin muntin lines (SVG overlay) and Plate I sits *under* the sill as its caption, so the shape is a drawing, not decoration; the same arch returns for the break photo and review pins.

## 7. Motion score
- **Intro (≤1.1 s):** the arch opens from a 12%-wide vertical slit to full (`clip-path: inset()`, 900ms ease-out) while Plate I draws stud → lath → keys → coats (stagger 60ms). Text visible from frame 0; any scroll/click jumps to the end.
- **Story 1 "draw":** sticky Eras section; each plate draws layer by layer as its era panel scrolls in (`--sw-p` 0→1).
- **Story 2 "wipe":** the season strip wipes a slate band Dec→Apr across the year line; month ticks follow.
- **Hover (one language, "the window opens"):** arch muntins fade and the photo pans 2% up; card micro-plates gain their finish coat.
- **Reduced motion:** plates complete, arches open, season band static, no pan.

## 8. Tools
1. **Wall-era identifier** (`checklist` + app.js result): decade (pre-1920 / 1920-49 / 1950-69 / 1970+), knock (hollow / solid), thumbtack (easy / hard), long branching cracks (y/n) → horsehair on wood lath / gypsum on rock lath / drywall, the repair approach, the matching plate. CTA "Ask us to look at it" → prefill `era`, `wall`.
2. **Crack & nail pop timer** (`tabs`): problem (nail pop / seam crack / plaster crack / stain), month it appeared, growing (y/n) → "fix now" or "spring list" + reason; plaster crack adds "pin it, don't just caulk it". CTA prefills `timing`.
3. **Patch sizer, sample price band** (`estimator`): size (coin / fist / plate / door), wall / ceiling, textured / smooth, paint after → "Sample range" from facts.proof.prices + visit count. CTA prefills `size`.
4. **ZIP checker** (`zip`) from facts zips.
5. **Quote form** (`form`): what's wrong → size + photos → wall/ceiling + era of house → timing → contact.

## 9. Voice
- "Most horsehair plaster isn't failing. It has lost its grip on the lath, and we can give it back."
- "A crack that shows up in January is the house drying out. Some we fix now; some go on the spring list."
- "If a wall can't be saved, we take it to the studs and keep your casings."
Never: "seamless", "premium", "no job too big or small", "passion", "state-of-the-art".
