# gutter-A · Concept

## 1. Three obvious concepts (rejected)
- **A. "Rain-ready Memphis"**: storm-cloud hero, blue water drops, a guard video poured from a bucket, "never clean again" badge. *Obvious:* it is every competitor's site (brief §4 #1, #2, #4).
- **B. "Clean house, clean gutters"**: white card grid, smiling tech on a ladder, 3 service icons, review carousel, "Free inspection". *Obvious:* the template; a 7 at best, and the ladder shot is §4 #3.
- **C. "The slope line, literally"**: a thin diagonal SVG stroke painted down the page behind sections, decoration only. *Obvious:* the brief's seed taken literally; a line that means nothing (no units, no fittings) is wallpaper.

## 2. Thesis
**The page is one gutter run hung by Quarter-Inch: a copper line that *falls* a measured quarter inch every ten feet of scroll, and each section is a fitting bolted onto it, until the water reaches the splash block in the footer.**

## 3. Signature system: "Pitch Run" (`data-sw-signature="pitch-run"`)
One CSS/SVG primitive: `.run` = 3px copper line (`--accent`) with tick marks every 80px labelled in JetBrains Mono ("10 ft", "20 ft"…) and a level-vial readout `fall ¼ in`. Fittings are drawn SVG nodes on it (end cap, hanger, seam, outlet, elbow, splash block). A fixed margin readout (≥1100px, left 64px column) counts cumulative fall `0 in → 2¼ in` and length `0 → 90 ft` as you scroll.
- **Hero (family 11, diagonal split):** the split edge IS the run: the hero-A2 photo panel is clipped on the pitch of its own gutter line; a copper run crosses the hero from the kicker (end cap) down to the photo where it meets the real gutter, ticked every 10 ft in mono. One copper drop rolls it on load and parks at the photo seam.
- **Story (Fittings, #how):** 6 steps sit as fittings on a horizontal run that falls 6px per step: End cap (we look) · Hanger (we measure) · Seam (we form it in your driveway) · Outlet (we place the drop) · Elbow (we turn it away) · Splash block (we check where it lands). The drop rolls fitting to fitting with scroll (pinned ≥900px, stacked <640 with a tick per card).
- **Services (#services):** 8 cards hang under a run on hanger brackets (short vertical copper strap + screw dot); each card hangs a few px lower than the last (the run falls across the row). Hover: the hanger strap tightens and the card's top rule levels.
- **Proof (#reviews + #prices):** reviews hang as fittings at a ft mark: each card carries a mono stamp `38 ft · Germantown · Gutter guards`. Sample pricing rows are a rack: each row's left notch is a drawn trough profile (5-in / 6-in K-style).
- **Tools:** Size check output draws the trough profile (5-in vs 6-in) and the fall over the typed run length (`40 ft run → 1 in fall`); Downspout count draws drops on a run.
- **Footer:** the run turns down into an SVG downspout + elbow kicking out to a splash block; the drop lands with one splash ring, and the readout ends `90 ft · 2¼ in fall · to the splash block`. Contact + ZIP sit on the splash block.
Not in registry (closest: fencedeck-A Mason's String, hvac-C Shade Line, cleaning-A Visit Timeline Tick; none falls by a measured pitch with fittings).

## 4. Type
- Display **Aleo** (slab, 1 use in registry, 0 in niche), wght 700-800 headlines, 500 for measurements. A slab has the weight of a hanger bracket and reads like lettering stamped on trim coil; its soft semi-round terminals keep the warm Southern tone.
- Text **Public Sans** (0 uses) 400/600: plain, civic, honest about prices.
- Accent **JetBrains Mono** (0 uses) 500, only for run marks, ft/in readouts, Sample tags, fitting stamps.
Pair Aleo + Public Sans is unique.

## 5. Palette: "Magnolia + River Mud + Downspout Copper + Chalk-Line Blue"
| Role | Hex |
|---|---|
| paper (magnolia) | #F7F2E8 |
| mid (fascia tan) | #EADFCB |
| ink (river mud) | #2B2018 |
| muted | #6B5646 |
| accent (copper) | #96471B |
| accent-on-deep (bright copper) | #E0874F |
| deep (Mississippi mud) | #241A12 |
| signal (chalk-line blue) | #1E5A96 / on deep #7FB0E0 |

Contrast (tools/contrast.mjs, real):
| Pair | Ratio | Use |
|---|---|---|
| #2B2018 on #F7F2E8 | 14.23 | body |
| #6B5646 on #F7F2E8 | 6.18 | muted |
| #96471B on #F7F2E8 | 5.85 | copper words/links |
| #2B2018 on #EADFCB | 12.03 | body on mid |
| #6B5646 on #EADFCB | 5.22 | muted on mid |
| #96471B on #EADFCB | 4.95 | copper words on mid |
| #FFFFFF on #96471B | 6.53 | primary button / copper band |
| #F7F2E8 on #96471B | 5.85 | band text |
| #2B2018 on #FFFFFF | 15.87 | inputs |
| #96471B on #FFFFFF | 6.53 | copper words on input/card white |
| #F7F2E8 on #241A12 | 15.28 | deep body |
| #C8B8A4 on #241A12 | 8.80 | deep muted |
| #E0874F on #241A12 | 6.29 | copper words on deep |
| #241A12 on #E0874F | 6.29 | button on deep |
| #1E5A96 on #F7F2E8 | 6.36 | focus ring / signal marks light |
| #1E5A96 on #EADFCB | 5.38 | focus on mid |
| #7FB0E0 on #241A12 | 7.46 | focus/signal on deep |
| #FFFFFF on #1E5A96 | 7.09 | signal chip text |
| **#A4501F on #EADFCB** | 4.24 FAIL | rejected (why copper went to #96471B) |
| **#1E5A96 on #241A12** | 2.40 FAIL | never; use #7FB0E0 on deep |
| **#A4501F on #241A12** | 3.04 FAIL (large pass) | copper on deep only as a 3px stroke, never words |

## 6. Hero family: 11 (diagonal split)
Unique in the niche (B = 9, C = 15). Cliché broken: the diagonal is the gutter's measured pitch, ticked and labelled, continuous with the real gutter edge in the photo and with the run that continues down the page.

**Gate:** first blocked (every family at cap 6, 15 taken by gutter-C); the coordinator raised the cap to 7, check-unique --concept clean, reserved 2026-10-28.

## 7. Motion score
- **Intro (≤1.1 s, skippable, text visible from frame 0):** a chalk-line snap: the copper run draws from the end cap to the photo seam (DrawSVG, 520ms, ease-io), the photo unclips along the slanted edge (600ms, starts 150ms), then one copper drop rolls the run (400ms) and parks. Any scroll/keypress jumps to the end state.
- **Story 1 "roll" (#how):** pinned ≥900px, height `calc(6 * 55svh + 100svh)`; the drop rolls fitting to fitting (scrubbed `--sw-p`), each fitting's label rises as the drop arrives; <640 stacked cards, tick per card.
- **Story 2 "count + draw" (margin readout + footer):** the margin readout counts fall in ¼ in steps (tabular) with scroll; in the footer the downspout draws down and the drop lands on the splash block (one ring, 600ms).
- **Hover language (one):** the hanger strap: a 2px copper underline that drops in at a pitch (scaleX 0→1 from left, rotate(.6deg)), 200ms, inside `@media (hover:hover)`.
- **Reduced motion:** run, fittings and readouts drawn static at their final state; the drop sits on the splash block; no pin, no scrub; readout shows "90 ft · 2¼ in".

## 8. Tools
1. **Gutter size check** (`estimator`): inputs one-side roof footprint (length × depth ft), pitch (low/medium/steep), heavy-rain intensity (picked: low/med/high). Output: "5-inch is usually enough / 6-inch is the safer choice" + reason + trough profile drawn + fall over the run ("40 ft run hung at ¼ in per 10 ft = 1 in fall"). Sample $/ft from facts (seamless $9–$24/ft). Hand-off: `service=Seamless gutter installation | Six-inch gutter upgrades`, note = summary.
2. **Downspout count** (`estimator`): inputs run length (ft), gutter size (5/6 in), corners. Output: suggested drops (about 1 per 30–40 ft) drawn on a run + "Downspout addition $175–$900 (Sample)". Hand-off: `service=Downspout additions`.
3. **Tree debris sorter** (`filter` + `tabs`): chips oak / sweetgum / pine / maple / none. Output: what drops and when (Memphis), screen vs micro-mesh vs none, cleaning rhythm. Hand-off: `service=Gutter guards | Gutter cleaning`.
4. **ZIP checker** (`zip`) against facts zips, in the contact band.
5. **Quote form** (`form`), 4 steps: house height (1/2 story) → problem → time window → contact; optional note "or text a photo to {{biz.phone}}".

## 9. Voice
- "Most overflow isn't the gutter. It's a run hung flat, or one outlet doing the work of three."
- "We form each run in your driveway, in one piece, and hang it to fall a quarter inch every ten feet."
- "Send a photo of the corner where the water lands. We'll tell you whether it's a cleaning or a new drop."
Never: "hassle-free", "never clean again", "lifetime", "premium", "solutions".
