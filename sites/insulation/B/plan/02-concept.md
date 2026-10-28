# insulation-B · Stage 2 concept

## 1. Rejected (obvious)
- **R1 Clipboard report hero (family 14).** The brief seed taken literally: a report sheet on a clipboard, F-01..F-06 boxes,
  SAMPLE stamp. Family 14 is full in the library (6 uses: roofer-B, carpenter-B, hvac-B, painter-B, tattoo-B, concrete-A) and
  roofer-B already did "Report White + Red Pen". Rejected: template, and it would read as roofer-B in blue.
- **R2 Thermal comparison.** A heat map of a ranch with a slider. Every competitor's thermal-camera hero (brief §4 #1), and
  comparison captions are banned. Rejected: cliché.
- **R3 Prairie wind.** Big sky photo, wind lines sweeping across the page, "the wind finds every gap". Atmospheric, but it sells
  weather, not measurement; any Fargo roofer or siding site could run it. Rejected: a competitor would do it.

## 2. Thesis
The page is the attic itself, read off the cardboard depth rulers Inchwise staples to the rafters: every section is one ruler
reading, and the loose-fill rises up those rulers as you scroll until the attic reaches its target.
(Arguable: it bets that a homeowner trusts an inch number more than a photo or a promise.)

## 3. Signature system: Stapled Depth Rulers
Primitive: a vertical yellow card strip (#E9C44A, 28px wide desktop / 22px mobile), inch ticks every 1 in (long tick every 2),
two staple marks at the top, finding tag "F-0n" above, a loose-fill band drawn as a stippled SVG mass rising to the reading;
the reading itself in Martian Mono beside the ruler. Below target = fill outlined in orange + reading in #B23A0B.
- **Hero:** drawn attic cut (rafters, ceiling joists, eave baffle) overlapping the photo plate; six rulers at 3.5 / 1 / 6 / 4.5 / 2 / 5 in,
  labelled "Over bedroom · By hatch · Center · North eave · Garage side · South eave" (sample readings, tagged Sample). The 1-in one is orange.
- **Story (F-01 Depth):** one big ruler pinned left of a ranch attic section; fill rises 3.5 → 17 in; R estimate (in × 3, "typical")
  counts up; dashed R-49 and R-60 lines (ENERGY STAR / DOE, zone 6, typical) light when passed.
- **Services (line items):** each service row has a 40px mini ruler with its own variation (air sealing: ruler with gap ticks
  closed; rim joist: ruler laid sideways along the band joist; bonus room: ruler standing on a floor line; vermiculite: ruler stopped,
  pebble texture, no fill).
- **Proof:** homeowner notes (reviews) clipped to a short ruler stub; Dale's stub reads 3.5 in (his own words), the others carry
  the service name on the stub. No new numbers.
- **Tool:** the attic ruler tool IS a big ruler (range input styled as the ruler, fill follows the thumb); the pebbles answer swaps
  the fill for drawn pebbles and greys the ruler out.
- **Form:** step 4 header is a ruler reading "your depth: __ in", prefilled from the tool.
- **Footer:** a ruler laid flat across the full width as the sign-off rule, ticks 0-20, "F-06 Sign-off" + licence token.
Hook: `data-sw-signature` on the hero ruler group. Wow: the six hero rulers filling unevenly, one going orange.

## 4. Type
Display **Bitter** (slab, wght 100-900; 2 library uses, none in niche): sturdy printed-form slab for headings and labels.
Text **Instrument Sans** (wdth 75-100): crisp neutral sans; condensed width for table labels. Accent **Martian Mono** (wdth, wght):
the readings, tabular, like a printed gauge. Pair Bitter + Instrument Sans is unique. Why: slab = the printed report, mono = the measurement.

## 5. Palette: Carbonless Paper + Rafter Graphite + Below-Target Orange + Ruler Card Yellow
| Role | Hex |
|---|---|
| ink (graphite) | #22252A |
| paper (carbonless) | #F4F1EA |
| mid (frost grey) | #E6E9EA |
| accent (below-target orange) | #B23A0B |
| deep (rafter night) | #1E2A33 |
| signal (ruler card yellow) | #E9C44A |
| muted text | #5A5F66 (paper) / #555B61 (mid) / #B9C2C9 (deep) |
| accent words on deep | #F2B48F |
| focus | #1E5FA8 light tones, #7FB2EE deep, #FFFFFF on accent |

Contrast (node tools/contrast.mjs, real):
| fg on bg | ratio | use |
|---|---|---|
| #22252A / #F4F1EA | 13.62 | body |
| #5A5F66 / #F4F1EA | 5.70 | muted |
| #B23A0B / #F4F1EA | 5.31 | accent words, below-target readings |
| #FFFFFF / #B23A0B | 5.99 | primary button text, accent band text, focus on accent |
| #22252A / #FFFFFF | 15.37 | inputs/cards |
| #22252A / #E6E9EA | 12.59 | body on mid |
| #555B61 / #E6E9EA | 5.63 | muted on mid |
| #B23A0B / #E6E9EA | 4.91 | accent words on mid |
| #F4F1EA / #1E2A33 | 12.98 | body on deep |
| #B9C2C9 / #1E2A33 | 8.10 | muted on deep |
| #F2B48F / #1E2A33 | 8.15 | accent words on deep |
| #E9C44A / #1E2A33 | 8.68 | ruler yellow on deep |
| #22252A / #E9C44A | 9.12 | ruler tick labels |
| #22252A / #F6D9C8 | 11.47 | orange-tint highlight row |
| #FFFFFF / #22252A | 15.37 | secondary dark button |
| #1E5FA8 / #F4F1EA | 5.71 | focus ring paper |
| #1E5FA8 / #E6E9EA | 5.28 | focus ring mid |
| #1E5FA8 / #FFFFFF | 6.44 | focus ring white |
| #7FB2EE / #1E2A33 | 6.62 | focus ring deep |
| **#B23A0B / #1E2A33** | **2.44 FAIL** | never text; orange on deep only as fill shapes ≥ 3px, use #F2B48F for words |

## 6. Hero family 5: Offset framed photo
hero-B3 (ranch on a frosted street) framed off-axis as "Photo plate P-01 · exterior" with two tape corners, rotated -1.5deg, right
7 of 12 columns; the h1 overlaps its left edge on paper. Cliché broken: the frame is not decoration, it is a report plate, and the
drawn six-ruler attic cut overlaps the plate's bottom edge, so the photo shows the outside and the drawing shows what's above the
ceiling. Unique in niche (A plans 1, C plans 15); library use 6 of 6 (tool clean). Family 14 was the brief's lead but is full.

## 7. Motion
- Intro (≤ 1.1 s): plate settles 8px / 400ms; rulers fill bottom-up, 60ms stagger, 520ms each; the thin ruler turns orange at the end.
  Text never hidden; skipped if the user scrolls or under reduced motion.
- Story 1 (verb: fill): pinned 4-step attic section ≥ 900px, height calc(4 * 55svh + 100svh); loose-fill rises 3.5 → 10 → 14 → 17 in;
  R estimate counts (in × 3, typical); dashed R-49 / R-60 lines light as passed. Under 640: four stacked ruler cards with a clip reveal.
- Hover: ruler nudge, fill +4px, label weight 600, 200ms ease-out. Buttons press scale .98, 120ms.
- Reduced motion: every ruler shows its final reading; story shows the 17-in end state with all four captions as a list.

## 8. Tools
1. **Attic ruler (R estimator)** · kit `estimator` · inputs: depth slider 0-20 in, material (loose grey/white, loose yellow/pink, batts,
   grey-brown pebbles, not sure) · output: R range (depth × 2.5-3.7), typical target R-49 / R-60 (ENERGY STAR / DOE, zone 6), inches to add
   as a range · pebbles → vermiculite stop note · hand-off: `depth`, `material` prefill the form.
2. **Price range builder** · kit `checklist` · ticks from facts.proof.prices only (5 items) · output summed low-high, "Sample pricing,
   your attic decides the real number" · hand-off: ticked items → form `services`.
3. **Vermiculite check** · kit `tabs` (3 yes/no steps) · output: "Possibly vermiculite: do not touch, keep kids out, get a lab test; we
   will not blow over it until you know" · hand-off: call button.
4. **ZIP checker** · kit `zip` · facts.biz.zips · hand-off: zip → form.
5. **Quote form** · kit `form` · 4 steps: house type → cold rooms → ZIP & timing → contact.

## 9. Voice
- "Over the bedroom it read three and a half inches. That is the number your price starts from."
- "We seal the gaps first. Fill on top of a leak just hides it."
- "See pebbles that look like kitty litter? We stop, explain the lab test, and leave it alone."
Never: "comfort you can feel", "save", "eco", "energy audit", "premium".
