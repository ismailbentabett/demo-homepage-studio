# tattoo-B · Cycle Log · Concept

## 1. Three obvious concepts, rejected
- **"Clean studio" white-tile medical site.** Bright white, soft blue, stock gloved hands hero, "Your safety is our
  priority". Rejected: every dental/clinic template; kills the tattoo culture; a competitor would do it.
- **Dark tattoo-shop portfolio.** Black page, big artist photo, IG-style grid, one red accent. Rejected: brief §4
  items 1, 2, 7 verbatim; the cliché the buyer leaves in 5 s.
- **Autoclave dashboard.** The page as a live machine UI with blinking readouts and a "SYSTEM OK" status. Rejected:
  the brief's seed taken literally into gimmick; reads as a SaaS dashboard, not a place you'd sit for 3 hours.

## 2. Thesis
**The page is the studio's sterilization log, open on the counter: every section is a logged entry, and the
indicator tape seals each one, its stripes darkening as you read it, so the visitor watches the shop pass its
own check.**

## 3. Signature system: Indicator Tape
Primitive: a 28px (desktop) / 22px (phone) strip of tape-cream (#ECE5D2) with 45° stripes; stripes start pre-cycle
tan (#C8B68A, 1.4:1, shape only) and darken to cycled umber-black (#2B2620) as `--sw-p` 0→1 (scroll-driven per
section). A tiny mono label rides on the tape: `CYCLE 0412 · 134°C · PASS` (sample, labelled). Always slightly
skewed (rotate -0.6°), torn-edge ends via `mask` zigzag.
- **hero:** tape seals the top edge of the session sheet; intro darkens it once (900ms) and the "PASS" stamp lands.
- **services (story/list):** each service row is a log entry `No. 01-10`; its left edge carries a short vertical tape
  tab that darkens on hover/focus (the hover language).
- **cycle story:** the autoclave cycle (LOAD → HEAT → HOLD → DRY → LOG); a full-width tape runs under the gauge, one
  fifth of its stripes darkening per step.
- **proof (reviews + prices):** reviews logged as numbered entries with a round "CHECKED" stamp + a tape corner;
  price ledger rows close with a tape rule that darkens as the ledger enters.
- **ear map:** tapped piercing gets a tape tag label (name · heal time · metal).
- **footer:** the last tape crosses the whole footer, fully dark, label `LOG CLOSED · 90-DAY TOUCH-UP OPEN`.
- **section breaks:** every tone change is a tape strip (not a plain rule). `data-sw-signature` on each strip.

## 4. Type
- Display: **Geist** 800, tracking -0.04em (crisp, Swiss product sans: reads like a printed form header, not a shop sign).
- Text: **Hanken Grotesk** 400/500/600 (clean neo-grotesk, very legible at 18px on dark).
- Accent: **Martian Mono** (wdth 87.5, wght 400/600) for every reading: cycle numbers, times, prices, gauges, ZIPs, tags.
- Why: a log is a form filled by a technician: precise grotesk headers + monospace readings; zero tattoo-script clichés.

## 5. Palette: "Autoclave Graphite + Tape Cream + Indicator Rose"
| Role | Hex | Use |
|---|---|---|
| deep (field) | #121619 | t-deep bg, ink on light |
| mid (stainless shadow) | #252C31 | t-mid bg |
| steel (muted on dark) | #B9C2C7 / #9AA4AA | secondary text on dark |
| paper (tape cream) | #ECE5D2 | t-paper bg, tape body |
| light (stainless white) | #F4F5F3 | t-light bg, text on dark |
| accent / signal (indicator rose, pre-cycle ink) | #E77FA0 | words/buttons on dark, t-accent band |
| accent-ink (rose deep) | #9E2F55 | accent words on light/paper |
| cycled stripe | #2B2620 | tape stripes after cycle |
| pre-cycle stripe | #C8B68A | shapes only |
| paper muted | #5E5747 | captions on paper |

Contrast (node tools/contrast.mjs, real output):
| fg | bg | ratio | use |
|---|---|---|---|
| #F4F5F3 | #121619 | 16.63 | body on deep |
| #B9C2C7 | #121619 | 10.05 | muted on deep |
| #9AA4AA | #121619 | 7.15 | captions on deep |
| #E77FA0 | #121619 | 6.87 | rose words + focus on deep |
| #F4F5F3 | #252C31 | 12.94 | body on mid |
| #B9C2C7 | #252C31 | 7.82 | muted on mid |
| #9AA4AA | #252C31 | 5.57 | captions on mid |
| #E77FA0 | #252C31 | 5.35 | rose words + focus on mid |
| #121619 | #ECE5D2 | 14.46 | body on paper |
| #5E5747 | #ECE5D2 | 5.70 | muted on paper |
| #9E2F55 | #ECE5D2 | 5.58 | accent words + focus on paper |
| #2B2620 | #ECE5D2 | 11.92 | tape label text |
| #121619 | #F4F5F3 | 16.63 | body on light |
| #9E2F55 | #F4F5F3 | 6.41 | accent words + focus on light |
| #121619 | #E77FA0 | 6.87 | graphite on rose: primary button text, t-accent body, focus on rose |
| #3A2A30 | #E77FA0 | 5.11 | muted on rose band |
| #F4F5F3 | #9E2F55 | 6.41 | white on rose-deep: primary button on light/paper tones |
| #E77FA0 | #ECE5D2 | 2.10 | **FAIL: never words; rose shapes on paper not used either** |
Buttons: on dark tones the primary is rose #E77FA0 with graphite text (6.87; white on #E77FA0 fails, so not used);
on paper/light it is rose-deep #9E2F55 with white text (6.41).

## 6. Hero family: 14 Document object
The library cap (≤ 3) is already exceeded by every family; 14 is the brief's family for B, unique in the niche (A=12,
C=8). Noted, not stalled. **Cliché break:** not a white quote sheet floating on white (concrete-A, roofer-B,
carpenter-B): a cream session sheet clipped to a dark stainless tray, sealed with indicator tape that darkens in the
intro; every line is a working anchor (needle lot → #cycle, deposit → #prices, size band → #estimate, placement →
#ear-map), the sheet fields filled in a typed mono "hand" with Sample tags; a sealed needle-pack line-drawing (SVG,
no photo needed) sits beside it. Desktop: h1 left 5 cols, sheet right 6 cols tilted -1.2°. Phone: h1 + buttons first,
sheet below, untilted, first 3 lines peeking.

## 7. Motion score
- **Intro (≤ 1.1 s, skippable by any scroll/key, content in DOM):** sheet lines type in left→right (60ms stagger,
  clip wipe per line), the hero tape darkens (900ms), the round PASS stamp lands (scale 1.08→1, 160ms, no bounce).
- **Story 1: the cycle (verb: dial).** Pinned ≥ 640px, 5 steps, height `calc(5*55svh + 100svh)`: an SVG gauge needle
  dials 0→134°C→hold→down, the step label swaps, one fifth of the tape darkens per step. < 640: 5 stacked cards with
  clip reveal. Reduced motion: 5 cards static, gauge at HOLD, tape fully dark.
- **Story 2: the ledger (verb: count).** Price ledger rows enter and the sample figures count up (400ms), the closing
  tape darkens. Not pinned.
- **Hover (one language):** a rose tape tab grows from the left edge (`scaleY`/`scaleX` 0→1, 200ms) on rows, cards,
  links; inside `@media (hover:hover)`.
- **Reduced motion:** every tape is drawn fully cycled, gauge static, stamps in place, no counting.

## 8. Tools
1. **Ear map (piercing picker)** · kit `hotspots`. Input: tap one of 7 spots on a drawn SVG ear (lobe, upper lobe,
   helix, forward helix, conch, tragus, daith) + a nose toggle (nostril, septum). Output: tape tag with name, sample heal
   time (process words: "months, not weeks"), jewelry = implant-grade titanium, sample price from
   `proof.prices` (lobe / helix-nostril-conch rows), "needle, never a gun", free downsize. Hand-off: "Book this piercing"
   → form prefill `service=Ear piercing|Body piercing`, `notes=<spot>`.
2. **Sitting estimator + deposit math** · kit `estimator`. Inputs: placement (forearm, upper arm, calf, ribs,
   shoulder, hand), size (coin, palm, hand-span, half sleeve), style (fine line, black & grey, color, cover-up). Output:
   a printed "session sheet" (same primitive as the hero): sittings band in words, sample rate band from
   `proof.prices` (shop minimum / hourly / cover-up), deposit line and "applied to your final session", warning
   "fine line under ~2 cm not advised". Hand-off: "Book with this sheet" → form prefill all fields.
3. **Hygiene log** · kit `checklist`. 7 steps (hands washed + gloves, barrier film, needles sealed and opened in front
   of you, single-use ink caps, autoclave cycle + indicator, weekly spore test (sample dates), log signed). Each a
   ticked entry; "Ask to see the binder" → Text us.
4. **ZIP check** · kit `zip` with `{{biz.zips}}` → "inside our area" → #contact.
5. **Booking form** · kit `form`, 3 steps (what / when / you), deposit explained beside step 2.

## 9. Voice
- "Your needles come sealed. You watch us open them."
- "The price on this page is the price in the chair. Sample bands below; the consult writes yours down."
- "Too small to hold up? We'll tell you, and show you the size that will."
Never: "premium", "world-class", "passion", "ink slinger", "hygiene is our priority".
