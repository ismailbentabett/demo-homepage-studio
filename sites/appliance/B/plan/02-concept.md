# appliance-B · Concept

## 1. Rejected (obvious)
- **"Honest repair" trust page.** Big smiling headline, 3 trust badges, price table, reviews carousel. Every
  competitor with a decent agency does this; it's the template with "honest" swapped in.
- **The receipt / invoice.** Page as an itemised repair ticket. Already a library trope (cleaning-B receipt,
  demolition-B weigh ticket, mechanic-A RO line) and it argues about price, not the decision.
- **Scales of justice / weigh-up.** A balance tipping between repair and replace. The brief's question taken
  literally as a clip-art metaphor; cute once, can't carry 8 sections, reads as a legal site.

## 2. Thesis
**The page is a verdict seam: one 12° copper/teal fault line that every fact on the site must pick a side of,
and that you can push with your own appliance's age.**

## 3. Signature system: "Verdict Seam + FIX/NEW tag"
Primitive: a 12° diagonal hard edge between field `--fix` (copper #A8431C) and `--new` (teal #0E4746), position set
by one CSS var `--seam` (0-100%, default 50), plus a small Martian Mono tag `FIX` / `CALL` (borderline) / `NEW`.
`data-sw-signature="verdict-seam"` on the hero; `app.js` writes `--seam` on :root so every instance follows.
- **Hero:** full seam, copper REPAIR left / teal REPLACE right; the calculator card straddles the seam. Verdict sets
  `--seam` (fix → 72%, borderline → 50%, replace → 28%) and the giant verdict word swaps.
- **Age-line story (pinned ≥1024):** SVG line appliance outline centre; age ruler 0→15 yrs scrubs; seam slides
  80% → 20% as age passes the typical lifespan; tag flips FIX → CALL → NEW at half-life / lifespan.
- **Price bands:** each sample price row is a ruler bar from→to with a FIX tag; the diagnostic row carries
  "applied to the repair". The section's top edge is cut at 12°. No "new price" numbers are invented.
- **Symptom finder:** each cause card has a 12° clipped corner tinted copper (safe self-check / fixable) or teal
  (stop and call / big job).
- **Reviews:** the grid sits on a split band; 5 cards on the copper side tagged FIX; Aisha N.'s microwave review on
  the teal side tagged NEW (they priced the part and said new cost about the same).
- **Form:** step header shows "Your verdict: FIX / CALL / NEW" carried from the calculator (blank if unused).
- **Footer:** the seam flattens to 0° — a level copper|teal hairline ("decided") — above the NAP.

## 4. Type
- Display **Archivo** at `font-stretch:125%`, wght 800 (wide, flat, verdict-loud; 2 uses in registry, 0 in niche).
- Text **Plus Jakarta Sans** 400/600 (0 uses; open counters, reads well at 18px).
- Accent **Martian Mono** `font-stretch:87.5%`, wght 500, tabular (ages, prices, tags).
Why: the wide display is the verdict shouted; the narrow mono is the evidence muttered. Two widths = two sides.

## 5. Palette: "Ohm Copper + Hinge Teal + Bone"
| role | hex |
|---|---|
| ink | #1B2120 |
| paper (bone) | #F4F0E8 |
| paper-2 (sand) | #E7DFD1 |
| accent / fix (copper) | #A8431C |
| deep / new (teal) | #0E4746 |
| signal (gold verdict) | #E9B949 |
| mid (muted) | #5E605B |
| teal-muted text | #B9CFCB |
| footer muted | #A9ABA5 |

Contrast (node tools/contrast.mjs, real ratios):
| pair | ratio | use |
|---|---|---|
| #1B2120 on #F4F0E8 | 14.37 | body |
| #5E605B on #F4F0E8 | 5.59 | muted text |
| #A8431C on #F4F0E8 | 5.30 | copper words, links |
| #0E4746 on #F4F0E8 | 9.19 | teal words; focus ring on paper |
| #1B2120 on #E7DFD1 | 12.35 | body on sand |
| #5E605B on #E7DFD1 | 4.80 | muted on sand |
| #A8431C on #E7DFD1 | 4.55 | copper words on sand (≥18px only) |
| #0E4746 on #E7DFD1 | 7.90 | focus on sand |
| #FFFFFF on #A8431C | 6.02 | primary button text |
| #F4F0E8 on #A8431C | 5.30 | text on copper field; focus ring on copper |
| #F3D9C9 on #A8431C | 4.47 | FAIL — never used |
| #F4F0E8 on #0E4746 | 9.19 | text on teal |
| #FFFFFF on #0E4746 | 10.45 | |
| #B9CFCB on #0E4746 | 6.39 | muted on teal |
| #E9B949 on #0E4746 | 5.72 | gold tags; focus ring on teal |
| #1B2120 on #E9B949 | 8.94 | ink on gold button |
| #0E4746 on #E9B949 | 5.72 | |
| #F4F0E8 on #1B2120 | 14.37 | footer text |
| #A9ABA5 on #1B2120 | 7.04 | footer muted |
| #E9B949 on #1B2120 | 8.94 | footer focus |
| #E9B949 on #A8431C | 3.30 | **shapes/rules only, never words** |

## 6. Hero family 11 — diagonal split
Cliché: a decorative slash between photo and text. Here the angle IS the answer: the seam is data (position =
verdict) and moves when you answer 3 questions. The one photo (kitchen, teal duotone) is a framed inset in the
REPLACE field, never the seam itself. At 390: h1 on a bone strip, seam band below it with the calculator on it.
(Registry: family 11 used 5×, tool limit 6; brief prescribes it; niche-unique.)

## 7. Motion score
- **Intro (≤1.1 s, skippable, text visible from frame 0):** seam line draws corner→corner 500ms (`--ease-io`),
  copper and teal fields wipe in from opposite sides 520ms with 60ms offset; h1 static.
- **Story 1 "dial":** Age-line: pinned ≥1024 (`calc(4*55svh + 100svh)`), age 0→15 counts in tabular mono, seam
  slides 80%→20%, tag flips at thresholds. <640: 4 stacked age cards (2 / 6 / 10 / 14 yrs) with clip reveal, no pin.
- **Story 2 "wipe":** review band: seam wipes across once (clip-path), cards settle onto their side, 60ms stagger.
- **Hover:** 12° slash underline scaleX 0→1 from left, 200ms, inside `(hover:hover)`.
- **Reduced motion:** seam static (50% or the verdict value, no transition), age story as a static 4-row table,
  no pin, no wipe.

## 8. Tools
1. **Repair-or-replace calculator (hero)** — `estimator`. Inputs: appliance chips (fridge, washer, dryer,
   dishwasher, range), age 0-20 (stepper + slider), optional "price you were quoted for a new one". Output: Worth
   fixing / Borderline / Probably replace + "Typical lifespan: fridge ~13 yrs (typical)" + matching sample band from
   facts.proof.prices with Sample tag; 50% rule applied only when a new price is typed. Sets `--seam`.
   Hand-off: "Book a visit, we'll tell you the same in person" → form `appliance`, `age`, `verdict` prefilled.
2. **Symptom finder** — `tabs` (appliance) + symptom chips. Output: 2-3 causes in homeowner words, one safe
   self-check, when to stop and call. Hand-off: `symptom` prefilled.
3. **Model-tag locator** — `hotspots` on 4 SVG outlines (dryer: inside door frame; dishwasher: door edge / tub rim;
   fridge: fresh-food side wall; washer: under lid or back). Labelled "typical spot". Hand-off: focus `model` field,
   plus "Text a photo of the tag" sms: link.
4. **ZIP check** — `zip` with {{biz.zips}}.
5. **Quote form** — `form`, 3 steps: appliance + symptom → model number (optional) + time window → contact.

## 9. Voice
- "If it's a 12-year-old fridge with a tired compressor, we'll say so on the phone and save you the visit."
- "The visit fee goes toward the repair. If no repair is worth doing, you paid to know, not to be sold."
- "Find the tag inside the dryer door and read us the model. We'll bring the likely part."
Never: "same-day", "emergency", "factory authorized", "all makes and models", "quality you can trust".
