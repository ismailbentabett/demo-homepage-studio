# gutter-C — Concept

## 1. Three obvious concepts (rejected)
- **Rain-on-gutter video + left scrim.** Brief's seed taken literally; family 1 is capped (2 in library, blocked by
  check-unique) and the only gutter-in-rain frame we have (hero-C1) reads as a garden channel. Every guard brand does it.
- **"Pacific Northwest" moody forest template.** Dark photo of firs, white serif headline, green buttons. That's every
  Portland landscaper and roofer; it says "Oregon", not "gutters", and it'd need photos we don't have.
- **Leaf-icon service grid.** Clip-art leaves and drops in cards ("Cleaning / Guards / Repair"). Competitor cliché §4.4/§4.7,
  and it's a template: it shows nothing about *which* tree, *when*.

## 2. Thesis
**The page is a pocket field guide to what Portland trees drop into gutters: every clog is a numbered specimen
plate, and every plate carries a drop-season bar that fills in the months you should book.**
(Material: the field guide's ruled plate and its phenology bar. Verb: fill.)

## 3. Signature system — "Drop-Season Bars"
Primitive: a 12-cell month strip `J F M A M J J A S O N D`, 1px bone rules, cells 100% wide / 12, height 10px
(28px in tool), filled cells in moss (or rust for "act now" months), a tiny Newsreader-italic legend at the end.
Sits under a hairline plate header `No. 2 · Bigleaf maple · Acer macrophyllum`. `data-sw-signature` on the hero bar stack.
- **Hero (range-map plate, family 15):** "Plate 0 · Portland service range". A drawn SVG range map (stylized river
  lines + a moss-hatched service range blob, not real geography) and beside it a stacked key of 5 bars, one per
  specimen (fir, maple, moss, cottonwood, ice). On load they fill left→right staggered: the city's whole gutter year
  in 1 s. ZIP checker sits in the map's legend box.
- **Specimen plates (story):** 5 plates, each a ruled card: number, common + Latin name, line drawing (SVG, stroke draws
  on entry), "what it does to a gutter", "the fix" (→ service), and its own bar filling as the plate enters. Variation:
  fir = 12 months filled (all year), maple = O N D in rust, moss = N–Mar, cottonwood = Jun only, ice = dashed outline cells
  (occasional, Dec–Feb) — the dashed variant is the "rare specimen" mark.
- **Field notes (proof):** reviews as field-note cards; each card's bar has a *single* tick on the month the note names
  when the review states it (Doug F. → Jan, Mike O. → Nov); others show the service's plate number instead of a month.
  Never invents a date: tick only where the text says the month.
- **Cleaning calendar tool:** the output IS a big bar: union of the chosen trees' months = visits. Printable.
- **Sample price ledger:** each row ends with a mini 12-dot "when we usually book it" bar (cleaning: Oct–Dec + Apr;
  seamless: Jun–Sep dry season, from brief §2 seasonality).
- **Footer:** the full-width year bar with the current month outlined in rust (JS reads the date; no-JS shows none),
  label "This month in the field guide" + the specimen that's falling now.
Never seen in registry: not a ring (Season Dial / Month Ring Almanac), not a plant marker; it's a linear phenology bar.

## 4. Type
- Display: **Rethink Sans** 800/700, tight tracking (-0.035em): a tidy, slightly quirky grotesk = field guide headings
  and specimen names. Not used anywhere in the registry.
- Text: **Rethink Sans** 400/500 (brief asks for one grotesk family; the pair Rethink/Rethink is unique).
- Accent: **Newsreader** italic 400 (opsz) for Latin binomials, plate legends and field-note bylines only — the
  botanist's voice beside the tradesman's. Numbers stay Rethink tabular (`font-variant-numeric: tabular-nums`) so
  nothing looks like B's mono.

## 5. Palette — "Fir Shade + Herbarium Bone + Moss + Rust Tag"
| Role | Hex | Use |
|---|---|---|
| deep (fir shade) | #0e1712 | dark-led base bg |
| mid (fir green) | #1f3a2b | plate cards, secondary dark band |
| paper (herbarium bone) | #ede7d8 | light bands, text on dark |
| ink | #17211b | text on bone |
| accent (moss) | #9dbb63 | filled bar cells, links/focus on dark, color band bg |
| signal (rust tag) | #a8471b | primary button, rust cells, links on bone |
| rust-light | #e0773f | rust on deep only (text ok), rules/shapes on mid |
| muted-dark | #a9b4a6 / #b5c2a8 | secondary text on deep / mid |
| muted-light | #55604f | secondary text on bone |
| moss-ink | #2b3a1c | secondary text on moss band |

Contrast (real `tools/contrast.mjs` output):
| Pair | Ratio | Verdict |
|---|---|---|
| #ede7d8 on #0e1712 | 14.80 | body ✓ |
| #a9b4a6 on #0e1712 | 8.49 | muted body ✓ |
| #9dbb63 on #0e1712 | 8.45 | accent text + focus ✓ |
| #e0773f on #0e1712 | 5.98 | rust text on deep ✓ |
| #ffffff on #0e1712 | 18.26 | ✓ |
| #ede7d8 on #1f3a2b | 10.02 | body ✓ |
| #b5c2a8 on #1f3a2b | 6.62 | muted ✓ |
| #9dbb63 on #1f3a2b | 5.72 | accent text + focus ✓ |
| #e0773f on #1f3a2b | 4.05 | **FAIL body** → rules/shapes/≥24px only on mid |
| #17211b on #ede7d8 | 13.40 | body ✓ |
| #55604f on #ede7d8 | 5.36 | muted ✓ |
| #a8471b on #ede7d8 | 4.75 | rust link text + focus on bone ✓ |
| #4d6b2a on #ede7d8 | 4.93 | dark moss for filled-cell labels on bone ✓ |
| #ffffff on #a8471b | 5.86 | button label ✓ |
| #0e1712 on #9dbb63 | 8.45 | text + focus on moss band ✓ |
| #2b3a1c on #9dbb63 | 5.63 | muted on moss ✓ |
| #0e1712 on #e0773f | 5.98 | ink on rust-light chip ✓ |
| #a8471b on #9dbb63 | 2.71 | **FAIL** → never put rust on the moss band (button there is ink #0e1712 bg + bone text) |

## 6. Hero family: 15 — Map / area-led
Unique in niche (A=11, B=10), 5 uses in library (cap 6). Cliché of family 15 = a pin map of towns with "We serve…".
Broken here: the map is a *field-guide range map* (hatched range, river lines, a scale bar reading "Sample · not to
scale"), paired with the 5 drop-season bars as its key, so the hero answers "when" as well as "where". Town names are a
token legend list (reskin-safe), never pinned positions. ZIP checker lives in the legend. No photo in the hero: the
photo library can't carry it, and a drawn plate is the point.

## 7. Motion score
- **Intro (≤ 1.1 s, never blocks):** h1 visible at first paint; the range hatch draws (stroke-dashoffset, 700ms) while
  the 5 bars fill cell by cell (40ms stagger, ease-out), total ≤ 1.1 s; any scroll/key skips to end state.
- **Story 1 — draw:** each specimen plate's line drawing draws (DrawSVG / dashoffset, 900ms) as the plate enters, then
  its bar fills (60ms per cell). ≥ 640px: plates sit in a sticky 2-col layout (drawing column sticky, text scrolls),
  55svh per plate; < 640px: stacked cards, clip reveal.
- **Story 2 — fill:** cleaning calendar: picking trees fills the big bar's cells live (200ms each).
- **Hover (one language):** on any card/row, its bar's empty cells take a 1px moss outline and the plate number
  shifts 4px right (200ms). Buttons: press scale .98 (120ms).
- **Reduced motion:** all bars render filled, drawings drawn, no stagger, no sticky; footer month outline static.

## 8. Tools
1. **Tree debris sorter** (`filter` + `checklist`): checkboxes Douglas fir / bigleaf maple / oak / cottonwood / pine /
   none overhang; output per tree: what it drops, when (bar), guard type that tends to handle it (fir → fine micro-mesh,
   still 1 cleaning/yr; maple → micro-mesh or screen; cottonwood → mesh clogs, cleaning instead), rhythm. Hand-off:
   `?trees=fir,maple&service=Gutter guards for fir needles` → form fields `trees`, `service`.
2. **Downspout disconnection check** (`estimator` in logic mode): distance foundation → property line (ft), ground slope
   away (yes / flat / toward house), basement or crawl space (y/n). Output: splash block / extension / "ask about a drain
   line, check City rules first". Hand-off: service = "Downspout extensions and splash blocks", note = result.
3. **Cleaning calendar** (`checklist` + app.js bar): trees + stories (1/2) → the 12-month bar + "N visits a year";
   print button (`window.print`, print CSS). Hand-off: service = "Cleaning plans by tree", visits = N.
4. **ZIP checker** (`zip`) against `{{biz.zips}}`, in the hero legend and the contact band.
5. **Quote form** (`form`, multi-step): trees → problem (service) → photo optional → stories → time window → contact.
   One `#contact` form only.

## 9. Voice
- "Douglas fir drops needles twelve months a year. Mesh helps; it doesn't end the ladder."
- "Bigleaf maple fills a gutter in three weeks of November. We book that week, not after it."
- "Tell us which trees hang over the roof. The price starts there."
Never: "never clean again", "hassle-free", "premium", "solutions", "today only".
