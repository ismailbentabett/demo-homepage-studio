# 02 Concept: garagedoor-A — "Thirty Quarter Turns"

## 1. Rejected (obvious)
- **Hero slider of white doors + coupon ribbon.** Every DFW chain site. Template, brief §4 cliché.
- **Smiling tech + "24/7 emergency" red banner + icon grid of 11 services.** Competitor default; no process.
- **Literal door that slides up over the whole page on load.** Brief seed taken literally; a gimmick
  that hides content and blocks reading (fails JS-off and reduced motion).

## 2. Thesis
The page is a torsion spring being wound: every section is one more quarter turn, and you can't
call the repair done until the count reaches 30 and the door holds itself halfway.

## 3. Signature system: "Winding Count" (spring + turn marks + panel seams)
Primitive: a drawn SVG torsion spring (coil path + winding cone with 4 bar holes) and a mono counter
`¼ TURNS 00/30`; section edges are door-panel seams (2px rule + 1px highlight below) ending in a round
roller at the right edge. `data-sw-signature` on the margin spring.
- **Hero:** spring laid across the 21:9 strip photo; counter reads `00/30`; panel seam under the strip.
- **Story (5 pinned steps):** margin spring winds; each step lands on a turn mark 0 / 8 / 16 / 30 /
  ✓ ("unwind · swap pair · wind 30 · balance · reverse test"); the active mark fills sodium.
- **Estimator (tool):** result bar is a spring: coils fill used-vs-left cycles, gap drawn at end of life.
- **Proof / prices:** each price row hangs on a turn-mark tick; reviews separated by panel seams with a
  roller dot.
- **Footer:** counter reads `30/30 · balanced` and the seam roller sits at the bottom of the track.
- Reduced motion: spring drawn fully wound, counter static per section (`08/30` printed in each
  section's kicker), panels stacked.

## 4. Type
- Display **Saira Condensed** 700/800 uppercase-capable, squarish condensed: reads like stencilled door
  labels and spring tags. 0 uses in registry.
- Text **Libre Franklin** (var 100-900) 400/500/600: sturdy American gothic, clear at 18px.
- Accent **JetBrains Mono** 500: the turn counter, prices, ZIPs, hours (tabular).
Why: tall stencil voice for the garage, a plain workmanlike body, a counter voice for the winding.

## 5. Palette: "Garage Night Concrete + Sodium Driveway Lamp"
| role | hex |
|---|---|
| paper (dark field) | #15161A |
| deep | #0C0D0F |
| mid (concrete panel) | #2A2C31 |
| ink (on dark) | #F1ECE4 |
| muted (on dark) | #A9A69F |
| accent / sodium (hue 20°, moved off C's amber) | #F26B2A |
| signal (focus/highlight on dark) | #FFB547 |
| light band (concrete chalk) | #E7E2D9 |
| ink-light / muted-light / accent-light | #15161A / #55575C / #A6470A |

Contrast (node tools/contrast.mjs):
| pair | ratio | use |
|---|---|---|
| #F1ECE4 / #15161A | 15.37 | body on paper |
| #A9A69F / #15161A | 7.44 | muted on paper |
| #F26B2A / #15161A | 5.95 | accent words on paper |
| #15161A / #F26B2A | 5.95 | **button text** on sodium (dark ink, not white) |
| #FFFFFF / #F26B2A | 3.03 | FAIL: never white on sodium |
| #F1ECE4 / #0C0D0F | 16.53 | body on deep |
| #F26B2A / #0C0D0F | 6.39 | accent on deep |
| #A9A69F / #0C0D0F | 8.00 | muted on deep |
| #F1ECE4 / #2A2C31 | 11.88 | body on mid |
| #B4B1AA / #2A2C31 | 6.52 | muted on mid |
| #F26B2A / #2A2C31 | 4.59 | accent on mid |
| #15161A / #E7E2D9 | 14.01 | body on light |
| #55575C / #E7E2D9 | 5.60 | muted on light |
| #A6470A / #E7E2D9 | 4.61 | accent words + focus on light |
| #FFFFFF / #A6470A | 5.95 | button text on light band (burnt button) |
| #F26B2A / #E7E2D9 | 2.35 | FAIL: sodium is shapes only on light |
| #FFB547 / #15161A, #2A2C31, #0C0D0F | 10.29 / 7.95 / 11.06 | focus ring on dark tones |
| #15161A / #F26B2A | 5.95 | focus ring on sodium band (ink) |
| #3A3C42 / #15161A | 1.63 | seam rules only, never text |

## 6. Hero family 4: stacked headline over a cinematic strip
h1 stacked on dark paper; under it a 21:9 (3:1 at ≥1100) strip: the torsion spring photo on a warm-lit
field, read as the light under a half-open door. Cliché broken: the strip is not scenery, it is the
part that failed, labelled with turn marks, and it opens upward like a door (clip from bottom). Strip
in first screen at 1440×900.

## 7. Motion score
- **Intro (≤1.1 s):** strip clip-path `inset(100% 0 0 0) → inset(0)` 900ms ease-io, as a door rising;
  h1 line mask 70ms stagger in parallel; counter rolls 00. Text readable before; skip on any input.
- **Story 1 (wind):** pinned process, 5 steps × 55svh + 100svh; margin spring coils compress/rotate via
  scrub, counter counts 00 → 30 (tabular), each step panel *rises* (translateY 100% → 0, clip seam).
- **Story 2 (draw):** estimator spring bar draws used cycles left→right, gap snaps open at end of life.
- **Hover (one language):** "lift": cards/buttons translateY(-3px) and the seam roller slides 8px right,
  200ms ease-out.
- **Reduced motion:** spring fully wound, counters printed per section, story = 5 stacked panels.
  No pin < 640px (stacked cards with clip reveal).

## 8. Tools
1. **Spring age estimator** (`estimator`): inputs year installed/built (select 1990-2026), opens/day
   slider 2-12, type standard 10k / high-cycle 25k / not sure. Output: cycles used = years × 365 × opens/day
   (1 cycle = one open + close), rounded to 100; spring bar vs rating; plain line; sample range
   $260–$420. Hand-off: "Book a spring check" → form `problem=spring`, `notes="est. N cycles of 10,000"`.
2. **Car-stuck safe-release guide** (`tabs` or `checklist`): tap what you see (gap in spring / loose
   cable / crooked door / opener hums / nothing looks wrong). Safe cases → 4 steps (door closed, pull
   red cord, two people lift). Spring gap / cable / crooked → "Stop. Don't lift it." panel = big call.
3. **ZIP checker** (`zip`) from `zips`; ok → prefill form zip.
4. **Quote form** (`form`) 5 steps; first question "Is your car stuck inside?" yes/no.

## 9. Voice
- "A snapped spring isn't a DIY job. Leave the door down and call; we'll talk you through the car."
- "Thirty quarter turns on a two-car door. We count them out loud, then let go of it halfway."
- "If a section is dented and the rest is sound, we swap the section. That's the whole pitch."
Never: "premier", "state-of-the-art", "one-stop", "unbeatable", "hassle-free".
