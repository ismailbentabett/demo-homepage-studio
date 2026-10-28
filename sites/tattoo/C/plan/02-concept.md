# tattoo-C · Concept (Crane Light · Long Beach · color-led)

## 1. Three obvious concepts, rejected
- **Sailor-tattoo nostalgia, black page.** Blackletter logo, red/black, a skull-and-rose hero, "Walk-ins welcome!".
  Obvious: every competitor in brief §4.1 already ships it; a jury sees a template, a first-timer sees a back room.
- **Beach-lifestyle surf site.** Big sunset video of the pier, script font, "Ink & Waves". Obvious: a template for
  any Long Beach business (surf shop, café); says nothing about tattoos; family 1 is capped.
- **The flash wall, taken literally.** Every section a paper sheet with four push pins, a crane icon on top. Obvious:
  the brief's seed verbatim; pins alone are a texture, not a system, and handyman-B already owns "hang-tag on pegboard".
  (Kept as the *layout* language, demoted from signature.)

## 2. Thesis
**The page is a sheet of traditional flash under glass: every answer the shop gives is lettered on a tattoo banner
ribbon, and the ribbons unfurl as you read, so prices, hours and healing days arrive the way flash names do.**

## 3. Signature system: "Flash Banner Ribbon"
One SVG primitive: a black-outlined (3px) traditional banner ribbon, flat body + two folded swallowtail ends (the
fold drawn as a darker triangle), carrying ONE short line in League Gothic. Scroll var `--sw-p` 0→1 unfurls it:
body `clip-path: inset(0 calc((1 - var(--sw-p)) * 50%))` from the center, ends rotate from 90deg (folded) to 0.
Hook: `data-sw-signature` on the hero ribbon. Variations:
- **hero:** long cream ribbon across the h1 tile: "{{biz.tradeLabel}} · {{biz.city}}"; unfurls in the intro (wow).
- **flash rail (story 1):** each sheet's code ribbon "No. 07 · SWALLOW"; on hover/focus/scroll-center it flips
  (rotateX 180°) to its back: size words + "price on the sheet".
- **tide line (story 2, healing):** short ribbons as day markers along a drawn wave: DAY 1 · 3 · 7 · 14 · 21; the
  "back in the ocean" ribbon is mustard, the rest cream.
- **cover-up check:** the answer lands on a red ribbon ("Cover in one go" / "Laser first" / "Rework instead").
- **reviews (proof):** each note is pinned under a small ribbon lettered with the first name + town, like a name banner.
- **price board:** guarantee sentence (facts.proof.guarantee) on a wide mustard ribbon under the prices.
- **footer:** the biggest ribbon, wrapping the hours, ends tucked behind the drawn harbor crane (logo).
Never in the registry: no banner/ribbon signature exists (checked 54 entries).

## 4. Type
- Display **League Gothic** 400 (0 uses in registry): tall condensed gothic, the lettering on old flash sheets,
  dock stencils and sign-painter show cards. Always uppercase, tracking -0.01em headings, +0.04em on ribbons.
- Text **Barlow** 400/500/700 (0 uses as text): Californian highway grotesk, slightly round, very legible at 18px.
- Accent **Caveat** 700, ONLY for hand-numbered sheet codes and ≤ 4 margin notes ("no ocean for 2 weeks"). ≥ 22px.
Why: flash sheets are lettered condensed caps over a plain hand; the pair reads "shop wall", not "brand agency".

## 5. Palette: "Sun-Faded Flash: Sea Teal + Flash Red + Mustard + Sheet Cream"
| Role | Hex | Use |
|---|---|---|
| ink (outline black) | #1A1714 | text on cream/teal/mustard, every outline |
| paper (sheet cream) | #F3E8CF | sheets, light bands |
| light | #FAF4E6 | form fields, tool panels |
| mid (sun-faded sea teal) | #8BB8AF | THE field: the wall the sheets hang on |
| deep (harbor night) | #12393B | dark bands, footer |
| accent (flash red) | #B62D1C | primary button, red ribbons, accent words on cream |
| signal (mustard) | #E8B030 | ribbons, highlights on deep/ink only |
| muted ink | #3D3630 | secondary text on teal/cream |
| deep-muted | #C9DCD6 | secondary text on deep |

Contrast (node tools/contrast.mjs, real):
| Pair | Ratio | Verdict |
|---|---|---|
| #1A1714 on #F3E8CF | 14.66 | body |
| #1A1714 on #FAF4E6 | 16.27 | body |
| #1A1714 on #8BB8AF | 8.13 | body on teal field |
| #3D3630 on #8BB8AF | 5.41 | muted on teal |
| #12393B on #8BB8AF | 5.71 | ok |
| #B62D1C on #F3E8CF | 5.10 | accent words on cream OK |
| #B62D1C on #FAF4E6 | 5.66 | accent words on light OK |
| #FFFFFF on #B62D1C | 6.21 | primary button label |
| #F3E8CF on #B62D1C | 5.10 | red ribbon lettering |
| #F3E8CF on #12393B | 10.30 | body on deep |
| #C9DCD6 on #12393B | 8.77 | muted on deep |
| #E8B030 on #12393B | 6.38 | signal words on deep, focus on deep |
| #E8B030 on #1A1714 | 9.08 | signal on ink |
| #1A1714 on #E8B030 | 9.08 | mustard ribbon lettering |
| #12393B on #E8B030 | 6.38 | ok |
| #1A1714 on #C9DCD6 | 12.48 | ok |
| #B62D1C on #8BB8AF | 2.83 | **shapes only** (red ribbon body on teal is fine, words on it are cream) |
| #E8B030 on #F3E8CF | 1.61 | **never words**, fills only |
| #B62D1C on #12393B | 2.01 | **never words**, fills only |
| #1A1714 on #B62D1C | 2.87 | **never words** (ribbon lettering on red is cream) |
| #F3E8CF on #8BB8AF | ~2.1 | **never** cream text on teal |
Focus ring: ink #1A1714 on cream/light/teal/mustard (≥ 8.1), mustard #E8B030 on deep/ink (≥ 6.38), cream #F3E8CF on red (5.10).

## 6. Hero family 8: Photo mosaic (per the brief; the library cap of 3 is already met by every family, noted, not stalled)
12-col tight grid, 6px ink gaps (the gaps are the "glass frame" lines). Tiles: (a) one big healed color piece
outdoors (photo, 6 cols × 2 rows); (b) flash sheets / ink caps photo (optional, 3×1); (c) cream h1 tile with the hero
ribbon; (d) red tile: "Flash {{range}} · fixed on the sheet" in League Gothic; (e) mustard tile: open-now/today's hours;
(f) teal tile: the drawn harbor crane + "a block from the water". **Breaks the cliché:** half the mosaic is
information (price, hours, place), not stock; it works with ONE photo if the library is thin (tiles a/b swap to drawn
flash tiles). Phone: 2-col, h1 tile first, then big photo, then red + mustard tiles side by side.

## 7. Motion score
- **Intro (≤ 1.1 s, any input skips, content in DOM first):** tiles pin up in 60ms stagger (opacity + rotate 2°→0 +
  translateY 12px→0, 520ms), then the hero ribbon unfurls from center (ends flip open, 600ms). Reduced motion: all flat.
- **Story 1, slide (flash rail):** ≥ 1024px the 6 drawn flash sheets slide along the wall horizontally on scroll
  (pinned, height `calc(6 * 40svh + 100svh)`), each code ribbon flips as its sheet crosses center. < 1024 stacked
  2-col grid, flip on tap/focus only. Reduced motion: static grid, ribbon fronts + backs printed both.
- **Story 2, draw (tide line):** a wave line draws left→right with scroll (stroke-dashoffset), day ribbons unfurl
  as the line reaches them; the mustard "ocean" ribbon at day 21 last. No pin. Reduced motion: line drawn, all ribbons open.
- **Hover (one language): the sheet nudge.** Pinned things (sheets, cards, review notes) rotate -1deg and lift 3px with
  a harder ink offset shadow (2px→4px), 200ms `--ease-out`, `@media (hover:hover)` only. Buttons press scale(.97).

## 8. Tools
1. **Flash board** (kit `filter` + `form` prefill): 6 drawn sheets filterable by "small / palm" and "color / black & grey";
   each has "Hold this sheet" → form step 1 prefilled `service=Flash walk-ins`, `notes=Sheet No. NN`. No per-design price:
   the board says flash runs {{proof.prices.0.from}}–{{proof.prices.0.to}}, price fixed on each sheet (Sample).
2. **Salt & sun healing timeline** (kit `tabs`): tabs Tattoo / Lobe piercing / Cartilage / Nostril; each shows day rows
   (1, 3, 7, 14, 21) with sun + water rules as process statements, no medical promises; ends "Book a touch-up check" →
   form prefilled `service=Tattoo touch-ups`.
3. **Cover-up check** (kit `estimator`): inputs darkness of old piece (light / mid / solid black), size (palm / bigger),
   colors (black only / color). Output one of 3 honest answers on a red ribbon, never a promise; CTA "Text us a photo"
   (sms:) + "Ask in the form" → prefill `service=Cover-ups`, `answer=...`.
4. **ZIP checker** (kit `zip`): "How far from the water?" Confirms {{biz.areas}}/ZIPs, else "still welcome, call first".
5. **Quote form** (kit `form`, 3 steps): what (service radio) → idea (size, placement, photo-by-text note) → you (name,
   phone, best time). Microcopy: "We'll text you back to set a time."

## 9. Voice
- "Pick a sheet off the wall, pay what's written on it, wear it home before sunset."
- "Two weeks out of the ocean. We know. It's the price of a bright ship."
- "Bring the old tribal band. We'll draw over a photo of it so you can see where the dark goes."
Never: "ink-credible", "masterpiece", "artistry", "elevate", "journey".
