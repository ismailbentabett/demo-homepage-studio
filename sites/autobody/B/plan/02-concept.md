# autobody-B · Concept

## 1. Three obvious concepts, rejected
- **Desert glamour.** A clean car in golden-hour light with the Franklin Mountains behind, "Restore your shine".
  Rejected: every detailer in town does it; brief §4.1/§4.7 cliché; sells the dream, not proof.
- **Before/after wall.** Hero split slider of a peeled roof vs. a fresh roof, then a grid of pairs.
  Rejected: template move; brief §4.4 (no story between the frames); needs photos we may not have.
- **Gauge as decoration.** A big dial/speedometer hero graphic with "Precision body work".
  Rejected: the brief's seed taken literally as an illustration; a dial is a car-site cliché and says nothing.

## 2. Thesis
The page is the shop's probe printout: every section touches the probe to one panel and prints a reading,
so the visitor trusts a number before an adjective, and the clear coat drawn under each reading thins in the
sun and builds back as we fix it.

## 3. Signature system: "Probe Readout + Clear-Coat Strata"
Primitive (`.readout`): a mono LCD-style tag (value + unit + one-word status + "Sample reading" tag), sitting on
a small 4-layer strata bar (e-coat / primer / base / clear) drawn to scale, clear layer height = `--mil`.
Hook: `data-sw-signature` on each instance; `--sw-p` drives count + layer height.
- **Hero:** the readout answers the sorter. Dull 4.4 mils · chalky 3.6 · peeling 1.8 · bare 0.0; clear layer
  shrinks / cracks (peeling = clear drawn as lifted flakes), status word "polish / correct / refinish / prime + refinish".
- **Story "One hood, four readings"** (pinned ≥ 900px): one big strata section drawing; readout steps
  4.6 factory → 3.6 eight summers outside → 3.4 after one-step correction → 3.4 + coat (coat drawn as a thin
  glass line on top). Gloss bar moves in step. All labelled sample readings.
- **Services (test sheet):** each row's readout shows what we measure for that job: mils (paint), dent count
  (hail: "41 mapped", from a review), "per dent" (PDR), lens "yellowed → clear" (headlights).
- **Dent check + claim path:** readout swaps unit: dent size (coin / palm), then "days" on the claim path
  (typical, adjuster sets it).
- **Reviews:** each card carries the number its own text gives: 41 dents · 40 min · 8 months beading · < 1 hr.
- **Price sheet:** readout prints the sample range as a gauge tape.
- **Footer:** the readout becomes the live open-now status ("OPEN · closes 5:00 PM"), probe-off at close.
Never in registry: pool-B's scale/test pad and roofer-A's roof layers are different objects (ours is a handheld
readout + paint film, reading values change per section).

## 4. Type
- Display: **Schibsted Grotesk** 800/900 (newsroom grotesk, sturdy, slightly warm: a printed test sheet headline).
- Text: **Public Sans** 400/600 (plain, government-grade, reads as a form you can trust).
- Accent: **Martian Mono** wdth 87.5, 500 (every reading, mil value, day count, sample price, ZIP).
Why: two plain voices + one instrument voice; all the personality lives in the numbers, as the thesis says.
Registry: Schibsted 0 uses, pair unique, not in niche.

## 5. Palette: "Caliche Chalk + Probe Ink + Clear-Coat Blue + Sun-Fail Red"
| role | hex |
|---|---|
| paper (chalk) | #F5F2EB |
| mid (caliche sand) | #E7DDC9 |
| ink | #15181C |
| muted text | #575650 |
| accent (clear-coat blue) | #1748C8 |
| deep (probe night) | #10202F |
| signal (sun-fail red, out-of-range readings only) | #B42318 |
| on-deep accent / on-deep signal | #9DB9FF / #FF8A75 |

Contrast (node tools/contrast.mjs):
| pair | ratio | use |
|---|---|---|
| #15181C on #F5F2EB | 15.92 | body |
| #15181C on #E7DDC9 | 13.21 | body on sand |
| #575650 on #F5F2EB | 6.58 | muted |
| #575650 on #E7DDC9 | 5.46 | muted on sand |
| #1748C8 on #F5F2EB | 6.71 | links, readings, focus ring |
| #1748C8 on #E7DDC9 | 5.57 | links on sand, focus |
| #FFFFFF on #1748C8 | 7.50 | primary button |
| #F5F2EB on #1748C8 | 6.71 | text on accent band, focus ring on accent |
| #C9D2DC on #1748C8 | 4.91 | muted on accent band |
| #B42318 on #F5F2EB | 5.88 | out-of-range reading |
| #B42318 on #E7DDC9 | 4.87 | out-of-range on sand |
| #FFFFFF on #B42318 | 6.57 | status chip |
| #F5F2EB on #10202F | 14.79 | text on deep |
| #A9B2BC on #10202F | 7.70 | muted on deep |
| #9DB9FF on #10202F | 8.51 | readings / focus / button bg on deep |
| #FF8A75 on #10202F | 7.20 | out-of-range on deep |
| #FFFFFF on #15181C | 17.80 | ink button |
| #9DB9FF on #1748C8 | 3.86 | FAIL for text: shapes/rules only |

## 6. Hero family 2: 50/50 split, the tool on one half
Brief asked for family 7 (tool-first), but check-unique reported family 7 full (6/6 incl. assembly-B reservation).
Family 2 has 3 uses, unique in the niche (A = 9, C = 13). The tool still leads: the left half holds kicker, h1,
the sun-damage sorter (4 drawn paint swatches) and the call/text buttons; the right half is the panel being read
(macro of sun-peeled clear if the library has an honest one, else the drawn strata cross-section at 1:400 scale).
Cliché broken (SaaS split): the **probe readout straddles the seam**, its tag on the photo, its strata bar on paper,
and it re-prints when a swatch is chosen, so the seam is a measurement line, not a layout gutter. At 390 the
photo becomes a 4:3 band under the sorter with the readout overlapping its top edge. JS off: swatches are a
readable 4-row list (look → fix → sample range) and the phone.

## 7. Motion score
- Intro (≤ 1.1 s): readout digits count 0.0 → 4.6 (Martian Mono, tabular) while the strata layers fill bottom-up
  60ms stagger; h1 line-mask reveal in parallel; any scroll/tap ends it; text readable before.
- Story 1, verb **count**: pinned hood strata (≥ 900px, `calc(4*55svh + 100svh)`), readout counts between
  readings and the clear layer height eases with `--sw-p`; <640px stacked cards with clip reveal.
- Story 2, verb **draw**: claim path line draws down through its steps, day ticks print as it passes.
- Hover (one language): "probe touch": a 6px crosshair dot drops 4px onto the card's top-left corner and the
  card's readout value re-counts once (200ms, ease-out).
- Reduced motion: final values printed, layers at final heights, no counts, no pin.

## 8. Tools
| tool | inputs | output | module | hand-off |
|---|---|---|---|---|
| Sun-damage sorter (hero) | dull / chalky / peeling / bare | fix (polish / correct + coat / refinish clear / prime + refinish), sample reading, sample range from prices | `tabs` | "Send this to the shop" → #quote, `service`, `condition` |
| Dent check | size coin/palm/larger, paint cracked y/n, on body line or edge y/n | likely paintless ($100–$350 per dent, Sample) or likely body + paint | `estimator` | → #quote `service=Paintless dent removal` or `Hail dent repair`/`Collision` |
| Claim path | what happened (someone hit me / my fault / hail / parking lot), claim number yet y/n | 4–6 steps: who acts (you / insurer / shop), "you choose the shop" first | `tabs` (+ checklist styling) | → sms: photos or #quote `service=Insurance claim help` |
| ZIP check | ZIP | in area / call us | `zip` | prefill `zip` |
| Quote form | service, condition, ZIP → name, phone, best time → photos note | sent state | `form` + `prefill` | — |

## 9. Voice
- "We put a gauge on the paint before we tell you what it needs."
- "Your hood reads 3.6. That's a polish, not a paint job." (sample)
- "You pick the shop. We call the adjuster, send the photos and handle the supplement."
Never: premium, state-of-the-art, flawless, passion, trust us.
