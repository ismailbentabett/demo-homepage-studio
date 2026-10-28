# autobody-A · Concept

## 1. Three obvious concepts, rejected
- **Glossy booth hero.** Full-bleed video of a spray gun in a dark booth, "Precision collision repair", carrier logos.
  Rejected: every competitor does this (brief §4.1/4.6); family 1 is capped; the buyer drives a 2017 crossover.
- **Before/after slider gallery.** Wrecked bumper left, shiny bumper right, drag the handle.
  Rejected: template; stock can never be honest before/after (T5); says nothing about the claim.
- **Nine-step timeline with icons.** Vertical stepper 1-9 with line icons and a progress bar.
  Rejected: the brief's seed taken literally as a SaaS onboarding pattern; looks like every "our process" block.

## 2. Thesis
**The page is a panel on the shop floor: every section is labelled in masking tape like a part waiting its turn,
and as you scroll the tape peels off to show the colour the panel ends up.**

## 3. Signature system: "Tape & Marker" (`data-sw-signature="tape-label"`)
Primitive: a strip of masking tape (yellow #E6C34E, torn ends via clip-path polygon, slight -1.5° to +1° rotation,
paper-fibre noise), carrying marker handwriting (Caveat 600) in ink: `STN 4 · Measure · Day 2 · You get a text`.
Peel = `--sw-p` 0→1 drives `clip-path` from the right edge plus a curled corner (a triangle pseudo-element whose size
grows), revealing the **basecoat red** strip underneath ("the finished panel colour").
- **Hero:** one long tape strip lays itself across the top of the h1 ("Detroit · Station 1 of 9 · Check-in"); each
  filmstrip frame carries a short tape tab with its station number.
- **Stations story (9):** the station header is a tape label; as each station completes the tape peels and the red
  strip under it reads "Done · we texted you". A single drawn panel (CSS/SVG door skin, no photo needed) changes
  finish per station: dented → bare steel → filler → guide-coat primer → basecoat → clear gloss sweep.
- **Claim path tool:** each step row is a tape strip with WHO in marker (YOU / INSURER / BOOTH NINE).
- **Services:** cards hang by a tape corner; the tape carries the sample price band (from facts.prices) or service short.
- **Proof/reviews:** each review is "taped to the hood"; the tape gives service + town; Marek's "station 6, day 4"
  review gets the hero treatment (the one honest echo of the system in a customer's words).
- **Footer:** the last tape is torn off and left peeled: "STN 9 · Wash · Keys back", fully red underneath.
Variation rule: hero = lays (draw-in), story = peels, tools = static strips (readable), proof = pinned corner, footer = torn.

## 4. Type
- Display **League Gothic** (0 uses in registry, none in niche): tall stencil-door condensed caps, station numbers huge.
- Text **Libre Franklin** (0 uses): American Franklin Gothic, Detroit plant-signage plainness, very legible body.
- Accent **Caveat** 600: marker on tape only, ≤ 8 words, ≥ 20px. Never body, never a button label.
Why: the gothic is what's stencilled on the booth door, Franklin is the work order, Caveat is the tech's marker.

## 5. Palette: "Booth Gunmetal + Masking Tape + Basecoat Red" (dark-led)
| Role | Hex |
|---|---|
| deep (gunmetal night) | #15191D |
| mid (booth wall) | #283037 |
| paper (booth-light white) | #ECEDE8 |
| light | #F7F7F4 |
| ink | #121417 |
| accent / tape | #E6C34E |
| tape-ink (accent words on light) | #6E5300 |
| signal / basecoat red (on light, white-on) | #B23A17 |
| signal bright (on dark only) | #E8532B |
| muted on dark | #A7B0B8 |
| muted on light | #555E66 |

Contrast (node tools/contrast.mjs, real output):
| fg | bg | ratio | use |
|---|---|---|---|
| #F7F7F4 | #15191D | 16.45 | body on deep |
| #A7B0B8 | #15191D | 8.03 | muted on deep |
| #E6C34E | #15191D | 10.33 | tape words, links, focus on deep |
| #E8532B | #15191D | 4.79 | signal words on deep (≥ 18px only, by choice) |
| #F7F7F4 | #283037 | 12.47 | body on mid |
| #A7B0B8 | #283037 | 6.08 | muted on mid |
| #E6C34E | #283037 | 7.83 | tape words/focus on mid |
| #121417 | #ECEDE8 | 15.67 | body on paper |
| #555E66 | #ECEDE8 | 5.61 | muted on paper |
| #6E5300 | #ECEDE8 | 6.15 | accent words, links, focus on paper |
| #B23A17 | #ECEDE8 | 5.08 | signal words on paper |
| #121417 | #F7F7F4 | 17.19 | body on light |
| #555E66 | #F7F7F4 | 6.15 | muted on light |
| #6E5300 | #F7F7F4 | 6.74 | accent words on light |
| #B23A17 | #F7F7F4 | 5.57 | signal words on light |
| #121417 | #E6C34E | 10.78 | marker on tape; primary button text; body on t-tape band |
| #15191D | #E6C34E | 10.33 | focus ring on t-tape band |
| #F7F7F4 | #B23A17 | 5.57 | white on red (peeled strip text, secondary solid button) |
| #121417 | #E8532B | 5.01 | ink on bright red (small chips on dark) |
| **#E6C34E** | **#ECEDE8** | **1.45 FAIL** | tape on paper: shape only (the tape strip itself), never words |
| **#F7F7F4** | **#E8532B** | **3.43 FAIL** | never; white goes on #B23A17 |
| **#B23A17** | **#E6C34E** | **3.49 FAIL** | never red words on tape |
Primary button = tape yellow with ink text (10.78), not white text.

## 6. Hero family: 9, horizontal filmstrip
Library already has 3 (flooring-A, painter-C, carpenter-A); every family is over cap per orchestrator; this is the
brief's family for A. Cliché break: the strip is not a photo gallery but the **nine stations as numbered frames**, each
taped with its station number and what you hear from us; frames without an honest photo are drawn (SVG panel at that
finish stage), so the strip is half photo, half shop drawing. It drifts left at 18 s/loop, pauses on hover/focus-within,
has a visible pause button, stops with reduced motion (becomes a scroll-snap row).

## 7. Motion score
- **Intro (≤ 1.1 s):** h1 lines mask up (70 ms stagger, 700 ms) while the hero tape strip lays left→right
  (clip-path inset 100%→0, 600 ms, delay 250 ms); filmstrip fades in at 800 ms. Text is in the DOM from first paint.
- **Story 1, "peel" (stations, pinned ≥ 640px):** height `calc(9 * 55svh + 100svh)`; a big League Gothic station
  counter 1→9 ticks, the drawn door panel swaps finish per station, and each station's tape peels (`--sw-p`) to the red
  "Done" strip. < 640px: stacked station cards, each tape peels once on entry (IO, threshold .02).
- **Story 2, "lay" (services):** tapes lay onto service cards in a 60 ms stagger as the grid enters; once only.
- **Hover:** the tape lifts: `translateY(-2px) rotate(-.5deg)` + curled corner grows 6→12px, 200 ms ease-out; links get a
  2px tape-coloured underline scaleX 0→1 from left. Inside `@media (hover:hover)`.
- **Reduced motion:** filmstrip static scroll-snap row; all tapes shown already peeled halfway (label readable, red visible);
  story = 9 stacked cards with the panel drawing at each finish; no counters.

## 8. Tools
1. **Claim path** (`tabs`): input "What happened?" (someone hit me / my fault / deer or pothole / parking lot, no other
   car) + "Claim number yet?" yes/no. Output 5-6 tape rows: WHO (You / Insurer / Booth Nine) + what, incl. "You choose the
   shop" and "the supplement call". No day counts (not in facts). JS off: all four tabs as readable lists. Hand-off:
   "Start my claim repair" → #quote with `situation` prefilled.
2. **Dent check** (`estimator`): size (coin / palm / larger), paint cracked? (y/n), on a body line or edge? (y/n).
   Output "Likely paintless" + sample $125-$400 per dent, or "Likely body and paint" + bumper/panel sample ranges, Sample tag.
   Hand-off → #quote `service` + `notes`.
3. **ZIP checker** (`zip`) with facts.zips; out-of-list → "Call, we'll tell you straight."
4. **Quote form** (`form`): step 1 photos (4 guided slots: corner, damage straight, damage angle, optional odometer),
   step 2 what happened + insurer y/n, step 3 name/phone/ZIP. Microcopy: "We text you a range, then a time to bring it in."
Rejected: "days without a car": needs day counts that are not in facts.json.

## 9. Voice
- "Station 3 is the phone call nobody likes. We make it, not you."
- "Your insurer pays for the repair. Where it's done is your choice."
- "If we find a bent bar behind the bumper, you get a photo before anyone gets a bill."
Never: "premier", "state-of-the-art", "passion", "quality you can trust", "hassle-free".
