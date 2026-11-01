# locksmith-B · Concept

## 1. Three obvious concepts, rejected
- **Trust badges + price grid.** Hero photo of a door, "Honest prices" h1, 6 price tiles, badges.
  Obvious: every competitor does it with "$19" bursts; it's the template we're mocking.
- **Literal magazine skin.** Cover layout, then generic sections with a fake page number on top.
  Obvious: the brief's seed taken literally; plumber-C already owns masthead + page-number rail.
- **Padlock/security tech look.** Dark UI, glowing lock icon, "secure" everything. Obvious and
  brief §4.8: reads as threat. Also collides with A's dark night.

## 2. Thesis
The homepage is a consumer-magazine exposé that a locksmith wrote about its own trade: every price
and promise is footnoted to its sample source, and the editor's red pen strikes out the bait quote
and writes the real range in the margin.

## 3. Signature system: Red-Pen Errata + Margin Footnotes (`data-sw-signature`)
Primitive = `.errata` (strike line SVG, drawn by `--sw-p`) + `.caret-fix` (red caret + mono value) +
`sup.fn` → `.sidenote` in the margin column (3/12 desktop; inline toggle under 900px).
- **Hero cover:** cover price flag "Lockout: ~~$19~~ ^ $85-$165 (Sample)" — strike draws at 800ms;
  fn¹ → "Sample price card, p.06". Cover lines carry folio numbers and are the in-page nav.
- **Story p.02 bait-and-switch:** quote counts $19 → $300+ as you scroll (pinned ≥900px), then the
  red strike runs through it and the caret writes $85-$165; margin note quotes Priya N. (Sample).
- **Proof p.05 letters:** reviews set as "letters to the editor" pull-quotes; each has a footnote
  number whose margin note names service + town + "Sample review". Rating 4.9/148 as a mono stat.
- **Back cover p.06 prices (deep):** a typeset price table; each row has a brass tick + fn to the
  note in facts ("evenings at the top; quoted before we drive"). Variation: tick instead of strike.
- **Pull-out p.03 checklist:** answers marked with red tick ✓ / red cross ✗ drawn as pen strokes;
  score sentence "Two answers worried us" written as an editor's margin note.
- **Footer colophon:** the errata list: every footnote of the issue collected, numbered 1-n, plus
  "All prices and reviews in this issue are samples." Variation: the strike runs through "Issue
  closes" → hours.

## 4. Type
Display **Schibsted Grotesk** 800/900 (newspaper-house grotesk, made for a Norwegian news group:
headlines that sound reported, not sold). Text **Source Serif 4** (opsz) for article body: reads as
a long-form consumer piece. Accent **IBM Plex Mono** 400/600: the slab-serif mono is the closest to
a typewriter — prices, footnotes, folios, checklists, the corrected values.

## 5. Palette — "Newsprint + Press Black + Correction Red + Highlighter Brass"
| Role | Hex |
|---|---|
| paper | #F5F1E8 |
| ink | #17150F |
| muted | #5A5448 |
| accent (correction red) | #B42318 |
| mid (kraft pull-out) | #E8E0CE |
| deep (back cover) | #1C1B18 |
| signal (highlighter brass) | #E9C46A |
| rule (non-text only) | #CFC6B4 |

Contrast (tools/contrast.mjs):
| fg on bg | ratio | use |
|---|---|---|
| #17150F / #F5F1E8 | 16.19 | body |
| #5A5448 / #F5F1E8 | 6.66 | muted, footnotes |
| #B42318 / #F5F1E8 | 5.83 | red words, links, focus |
| #FFFFFF / #B42318 | 6.57 | primary button |
| #F5F1E8 / #B42318 | 5.83 | button text alt |
| #17150F / #E8E0CE | 13.89 | pull-out body |
| #5A5448 / #E8E0CE | 5.71 | pull-out muted |
| #B42318 / #E8E0CE | 5.00 | pull-out red marks/words |
| #F5F1E8 / #1C1B18 | 15.27 | back cover text |
| #B5AD9C / #1C1B18 | 7.72 | back cover muted |
| #E9C46A / #1C1B18 | 10.30 | brass ticks/focus on deep |
| #FF7A6B / #1C1B18 | 6.76 | red words on deep (lifted red) |
| #17150F / #E9C46A | 10.92 | ink on highlighter |
| #17150F / #FFFFFF | 18.25 | input text |
| #E9C46A / #B42318 | 3.93 | large / focus only, never body |
| #CFC6B4 / #F5F1E8 | 1.50 | FAIL: rules and shapes only |

## 6. Hero family 6 — editorial magazine cover
Cliché broken: the cover is not decoration. The "cover price" is the phone (Call button), cover
lines are real anchors to the issue pages, and the cover flag is the live signature (struck bait
price corrected to the sample range). Photo sits in a 4:5 frame on the right 6 cols, masthead
overlaps its top edge; no full-bleed photo, no scrim.

## 7. Motion score
- **Intro (1.0 s, skippable):** masthead clip-in 0-300ms → photo unclip upward 200-700ms → cover
  lines type in mono, 60ms stagger → red strike through $19 at 800ms. Any scroll/key ends it.
- **Story (count + draw):** p.02 pinned 3 steps (220svh, ≥900px only): $19 counts up to $300+,
  strike draws, caret writes $85-$165, margin note slides in. Under 640: 3 stacked cards, clip reveal.
- **Secondary (draw):** checklist ticks/crosses draw as pen strokes (stroke-dashoffset 300ms) on answer.
- **Hover:** red proofreader underline grows scaleX 0→1 from left, 200ms.
- **Reduced motion:** strikes and corrections shown drawn, story shows final state (struck $300+ with
  range beside), no pin, no typing.

## 8. Tools
1. **Scam checklist ("the pull-out")**, kit `checklist`: 6 yes/no (company name said, whole-job range,
   vehicle described/text, ID asked, open without drilling first, written receipt) → score + honest
   wording per "no". Hand-off: tel: "Call and ask us these six".
2. **Rekey or replace?**, kit `estimator` (+`tabs` for answers): locks work (smooth/sticky/broken),
   like the look (y/n), one key for all (y/n), outside locks (1-6) → rekey / replace some / replace
   all + range first lock $60-$90 + each added $20-$30 (Sample). Hand-off: form service=Rekeying, locks=N.
3. **Lock counter**, kit `hotspots` on a line-drawn house elevation (front, back, side, garage entry,
   basement, shared hall): count → same rekey range math. Hand-off: form locks=N, service=Rekeying.
4. **ZIP checker**, kit `zip`: facts.zips → yes / "outside our usual area, call and we'll tell you
   honestly". Hand-off: ZIP into form.
5. **Quote form**, kit `form`, 3 steps: what (service) → where (ZIP, town) → reach you (name, phone).

## 9. Voice
- "A lockout in Rochester runs $85 to $165. We say that on the phone, before we drive."
- "If the hardware is fine, we'll tell you a rekey will do."
- "We ask for your ID before we open the door. We'd want the same if it were your door."
Never: "fast", "affordable", "premium", "24/7 guaranteed", "trusted experts".
