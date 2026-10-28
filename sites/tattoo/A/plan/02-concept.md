# tattoo-A · Concept (Vellum & Needle · Brooklyn · PROCESS)

## 1. Three obvious concepts, rejected
- **Ink-black gallery.** Black page, big masonry of fresh work, artist bio with crossed arms. Every Brooklyn shop
  site + the brief's §4 clichés 1, 4, 7. Fresh shiny work is exactly what makes buyers leave. Rejected.
- **Sketchbook scrapbook.** Kraft paper, washi tape, handwritten font everywhere, doodles in the margins. A Squarespace
  "artist" template; handwriting as body text kills legibility and reads twee to the 41-year-old first-timer. Rejected.
- **Tracing paper as a texture.** Translucent cards with a paper grain on a normal 3-col services template. That is
  the brief's seed taken literally as wallpaper: it decorates and doesn't *do* anything. Rejected; the sheets must
  carry the process (a drawing that changes under them), not just look papery.

## 2. Thesis
The page is a pad of tracing vellum laid over your idea: every section is one more sheet, and with each sheet you
scroll the drawing underneath is redrawn sharper, until the last sheet is healed skin.

## 3. Signature system: **Tracing Sheet Stack + Register Mark**
Primitive (`.sheet` + `.reg`): a semi-opaque vellum panel (paper at 86% + 6px backdrop blur) with a 1px graphite
edge, the edges of the 1-2 sheets beneath peeking out offset 6/12px top-left, a pencil register crosshair (⊕ SVG, 18px)
on two opposite corners, and a tab "0N · word" in Hanken caps. Stencil violet appears ONLY where something is
transferred (a line drawn onto the next sheet / onto skin). `data-sw-signature` sits on the process stack.
- **hero:** sheet "01 · idea" lies over the healed forearm photo; its register marks line up with the photo frame
  corners; the 3 statements scroll on the sheet while the photo stays. Intro: violet transfer line draws under h1.
- **story (process, the wow):** 5 sheets (01 idea · 02 drawing · 03 stencil · 04 lines · 05 healed) stack one onto
  the next over a drawn SVG botanical sprig + script word; under each sheet the drawing is redrawn: wobbly graphite
  scribble → clean graphite line → violet dashed stencil → solid ink line → softened healed line with grey shading
  and a "6 wk" check tick. Fully SVG: no photo dependency.
- **tools:** the estimator result is a sheet laid over a drawn forearm/calf/ribs outline; the chosen size is drawn
  on it as a violet stencil outline (palm, hand, half sleeve) that redraws on change.
- **proof:** reviews are vellum slips, each overlapping the one before by 24px, quote marks in violet; the Sample
  tag sits on the tab.
- **services:** 8 cards are sheets numbered S1-S8; hover lifts the top sheet 4px and the sheet beneath peeks 10px.
- **form:** the 3 booking steps are 3 stacked sheets; the active one is on top, previous ones show as edges.
- **footer:** the stack ends at "06 · yours" with a big register mark and the phone; edges of 5 sheets visible above.

## 4. Type
- Display **Instrument Serif** 400 + italic (0 uses in registry; never used in niche): hairline-thin, high-contrast
  strokes = fine-line needle work; its condensed width allows big h1s. Italic for the "transferred" words.
- Text **Hanken Grotesk** (variable 100-900; 0 uses as text in registry): quiet neo-grotesk, legible at 18px, caps
  labels at 600 for sheet tabs. Pair unique.
- Accent **Caveat** 500, ≤ 6 short pencil annotations total ("¼ in. lower", "2 cm min."), never body, always ≥ 20px,
  aria-hidden when decorative or carrying text duplicated nearby.

## 5. Palette: **Tracing White + Graphite + Stencil Violet** (light-led)
| Role | Hex | Use |
|---|---|---|
| paper | #F5F2EA | main field (tracing white) |
| mid (vellum gray) | #E6E2DA | alternating band, sheet edges |
| ink | #17151C | type, solid lines |
| graphite (muted) | #55525A on paper / #4E4B54 on mid | secondary text, pencil lines |
| accent (stencil violet) | #4B36A6 | transfer lines, links, primary button bg, focus on light |
| deep (ink plum-black) | #1C1924 | one deep band (hygiene) + footer |
| signal (violet light) | #B9ABEB | accent/focus on deep |
| rule-only | #8E86A0 | hairlines, register marks (3.09 on paper: NOT for text) |

Contrast (node tools/contrast.mjs, real ratios):
| fg / bg | ratio | verdict |
|---|---|---|
| #17151C / #F5F2EA | 16.17 | body ✓ |
| #55525A / #F5F2EA | 6.84 | muted body ✓ |
| #4B36A6 / #F5F2EA | 7.89 | accent text + focus ✓ |
| #17151C / #E6E2DA | 14.00 | body on mid ✓ |
| #4E4B54 / #E6E2DA | 6.61 | muted on mid ✓ |
| #4B36A6 / #E6E2DA | 6.83 | accent/focus on mid ✓ |
| #FFFFFF / #4B36A6 | 8.83 | button text ✓ |
| #F5F2EA / #4B36A6 | 7.89 | text + focus on violet band ✓ |
| #C9C2D6 / #4B36A6 | 5.11 | muted on violet band ✓ |
| #F5F2EA / #1C1924 | 15.46 | text on deep ✓ |
| #A9A4B2 / #1C1924 | 7.11 | muted on deep ✓ |
| #B9ABEB / #1C1924 | 8.31 | accent text + focus on deep ✓ |
| #1C1924 / #B9ABEB | 8.31 | button text on signal (deep tone) ✓ |
| #17151C / #FFFFFF | 18.09 | form inputs ✓ |
| #8E86A0 / #F5F2EA | 3.09 | **rules/marks only, never text** |
| #B9ABEB / #4B36A6 | 4.24 | **FAIL for text: shapes only** |
| #4B36A6 / #1C1924 | 1.95 | **FAIL: never violet on deep** |

## 6. Hero family: 12 (sticky photo, scrolling text)
Brief's family for A. Library count is 4 (autotuneup-C, demolition-A, painter-A, hvac-A): over the cap of 3, as is
every family; orchestrator said take the brief's family. Cliché broken: the photo is not full-bleed with text on top;
it sits as a framed 5-col plate (right on desktop) under a translucent tracing sheet that the statements are written
on, register marks pinning sheet to photo. Statement 1 is visible without scroll; statements 2-3 replace it on the
same sheet while the violet stencil line grows. ≤ 640: no pin; photo plate first (4:5, 62svh), then the 3 statements
stacked as 3 small overlapping slips.

## 7. Motion score
- **Intro (≤ 1.0 s, never blocks):** h1 text present at paint; a violet transfer line draws under "Drawn for you."
  (DrawSVG 650ms), the sheet's backdrop goes 0 → 6px blur and settles 10px → 0 (520ms). Skipped if scrolled/reduced.
- **Story 1 (stack):** process section pinned ≥ 900px, height calc(5*55svh+100svh); each step a sheet slides up
  from 40px and lands with a 1px shadow, and the SVG drawing beneath swaps stroke state (scribble → clean → dashed
  violet → ink → healed), crossfade 300ms driven by --sw-p. < 900: 5 stacked cards, each with its own drawing state.
- **Story 2 (draw):** healing timeline: a violet line draws along day 1 → 42 as it scrolls into view; day dots tick.
- **Hover (one language):** the sheet lift: translateY(-4px) + the peeking edge grows 6 → 10px, 200ms ease-out,
  inside @media(hover:hover). Links: hairline scaleX from left.
- **Reduced motion:** no pin; all 5 sheets shown as a 5-up grid (desktop) / stack (phone) each with its final
  drawing state; lines fully drawn; nothing hidden.

## 8. Tools
1. **Size & sitting estimator** (`estimator`): placement (forearm, upper arm, calf, ribs, shoulder, ankle/wrist),
   size (coin · palm · hand · half sleeve), style (fine line · black & grey · custom). Output: sittings band in
   words (1 · 1-2 · 2-4 · several over months) + sample price band from {{proof.prices}} (minimum / fine line palm /
   by the hour) with Sample tag + note "Fine line under 2 cm is not advised". Drawn outline on SVG limb. Hand-off:
   "Book a consult with this" → form prefilled (placement, size, style) via `prefill`.
2. **Healing timeline** (`tabs` for tattoo / lobe piercing + small own JS for date): input session date; output days
   1, 3, 7, 14, 30, 42 with what it looks like (film off, flaking, no swimming until ~day 14-21 as process advice,
   6-week check). Hand-off: "Book my six-week check" → form prefilled service "Six-week aftercare check".
3. **Deposit ledger** (static, `checklist` for the 3 ticks): ledger rows: deposit {{proof.prices.3}} range · holds
   your date and drawing time · comes off your final session (from facts note). No reschedule rule invented.
   Hand-off: Book a consult.
4. **ZIP check** (`zip`): 8 ZIPs/areas from facts → "You're a short ride from the studio" or "Still welcome: plan
   your trip"; feeds form.
5. **Quote/booking form** (`form`): 3 sheets: 1 idea (style, text, "I'll text a photo" checkbox) · 2 placement &
   size · 3 name, phone, preferred days. Microcopy: "We'll text to set up your consult."

## 9. Voice
- "Bring the screenshot. We'll redraw it until it looks like yours, not like a font."
- "We say no to lines too small to last, and we'll tell you why at the consult."
- "Your deposit holds the date and the drawing time, and it comes off your last session."
Never: "ink slinger", "badass", "epic", "world-class", "passion".
