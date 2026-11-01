# locksmith-C · Concept

## 1. Three obvious concepts, rejected
- **Key ring hero.** Full-bleed photo of a brass key ring, "Tacoma's trusted locksmith", 3 trust badges.
  Obvious: it is brief §4 cliché #1 and every competitor's template.
- **Rainy Tacoma mood film.** Video of rain on a door, dark scrim, "We'll get you back inside".
  Obvious: family 1 default, mood without a mechanism; also rain-as-wallpaper is the brief seed taken literally.
- **Neighborhood map with pins.** Drawn Tacoma map, a pin per neighborhood, service tiles below.
  Obvious: every "local" contractor site does the pin map; it shows coverage, not jobs.

## 2. Thesis
The page is a wall of painted Tacoma front doors: every section is a door you open on its hinge, and each
door's enamel word-plate names the job waiting behind it.

## 3. Signature system: "Hinged Door Wall" (`data-sw-signature="door-wall"`)
Primitive: `.door` = flat painted panel (aspect 5:9 tall / 4:3 tile variant), 2 inset panel moulds (1.5px
inner rule at 18% black), a 12px brass knob dot at 82% / 54%, and a **word-plate**: Roboto Slab 700 caps on
paper enamel, 2px ink border, 3px radius, tracking .08em. Hinge edge = left; open state = `rotateY(-64deg)`
with `transform-origin: left`, perspective 1400px, revealing the "door-back" (paper) with content.
- **Hero:** 4x2 mosaic (desktop) / 2x4 (390). 5 painted doors (plates MOVE-IN, LOCKED OUT, RAIN, OLD BRASS,
  TURNOVER) + headline tile (paper) + call tile (oxblood) + 1 photo tile (duotone porch). Each painted
  door is a `<label>` over a checkbox: tap = "this door has a lock", plate gets a mustard tick and the
  counter tile updates "5 locks → Sample $158–$240" (computed from first lock + each added). Variation: plates
  are words, doors closed.
- **Services ("A row of doors"):** 8 tall narrow doors, one per facts service; hover/tap opens on the hinge
  to the blurb + matching sample price. Variation: doors open, back face carries text. Mobile: horizontal
  snap row, doors pre-opened 100% (content readable without interaction).
- **Rain story:** one big slate door in section (SVG): plate RAIN; the slab swells, the bolt misses the
  strike, the strike moves, the bolt throws. Variation: the door is seen edge-on, as a diagram.
- **Proof:** reviews are door-backs: paper panels with a hinge strip in the reviewer's service color, plate
  turned to the town ("LAKEWOOD", "STEILACOOM"). Variation: plates name places, not jobs.
- **Move-in checklist:** each checklist row is a small door chip that closes (fills with color) when ticked.
- **Footer:** the back door: one full-width slate door, plate "MANY DOORS. ONE KEY RING.", area list on
  the panel moulds, knob = the phone button. Variation: one door instead of many.

## 4. Type
Display **Roboto Slab** (var wght 100-900; plates 700, h1 800, h2 600), text **Public Sans** (400/600),
accent **DM Mono** (prices, ZIPs, counter numbers, tabular). Why: a sturdy slab reads like stamped enamel
house plates and hardware castings; Public Sans is civic and plain (the voice of a city, not a brand); mono
is the cut-key number. Roboto Slab: 1 use in registry, 0 in niche; pair unique.

## 5. Palette: "Front-Door Teal + Oxblood Enamel + Knob Mustard + Narrows Slate"
| Role | Hex | Use |
|---|---|---|
| ink | #1c2326 | text on paper / mustard |
| paper | #f2ede3 | panels, door-backs |
| paper-2 (mid) | #e3dccd | alt band |
| muted | #4a5357 | secondary text on paper |
| accent (door teal) | #1f5f5c | links, primary button, teal doors |
| deep (Narrows slate) | #1d3a44 | deep bands, slate doors, footer |
| oxblood | #7a2630 | call tile, oxblood doors |
| signal (knob mustard) | #d9a12b | knobs, ticks, focus on dark, button on deep |
| muted-on-deep | #c9d2d4 | secondary text on deep |

Contrast (node tools/contrast.mjs):
| Pair | Ratio | Verdict |
|---|---|---|
| ink #1c2326 on paper #f2ede3 | 13.65 | body ✓ |
| muted #4a5357 on paper | 6.75 | body ✓ |
| teal #1f5f5c on paper | 6.31 | words/links ✓, focus ✓ |
| ink on paper-2 #e3dccd | 11.67 | ✓ |
| muted on paper-2 | 5.77 | ✓ |
| teal on paper-2 | 5.39 | ✓ |
| white on teal | 7.36 | button ✓ |
| paper on teal | 6.31 | text on teal door ✓ |
| paper on deep #1d3a44 | 10.33 | ✓ |
| #c9d2d4 on deep | 7.84 | ✓ |
| mustard on deep | 5.21 | accent words + focus on deep ✓ |
| ink on mustard | 6.89 | button on deep, text on mustard door ✓ |
| paper on oxblood | 8.38 | ✓ ; white on oxblood 9.77 ✓ |
| oxblood on paper | 8.38 | words ✓ |
| mustard on oxblood | 4.22 | large text ≥24px / focus ring only ✗ body |
| mustard on teal | 3.18 | focus ring + shapes only ✗ text |
| mustard on paper | 1.98 | **never text, never focus**: knobs/ticks with an ink 1.5px outline only |
| mustard on ink | 6.89 | ✓ |

## 6. Hero family 8: photo mosaic
Unique in niche (A=4, B=6 per brief), 7th use in library (tool max 7; family 7 was full). Cliché broken:
the tiles are not stock photos; they are painted door panels drawn in CSS, and the mosaic is the lock-counter
tool. Only one tile is a photo (duotone teal porch). No photo is repeated below.

## 7. Motion score
- **Intro (≤1.1s, skippable on any input):** hero doors swing from rotateY(-78deg)→0 on their left hinge,
  520ms each, 60ms cascade, headline tile last; h1 text in the DOM and visible from first paint (only
  doors animate). Reduced motion: none.
- **Story 1 Rain (draw/scrub):** pinned ≥ 900px, 3 steps at 55svh each; `--sw-p` drives slab swell
  (scaleX 1→1.03), bolt-gap red line, strike slide 6px, bolt throw. < 640px: 3 stacked frames.
- **Story 2 Services (stack):** doors open one by one as the row enters, 60ms stagger.
- **Hover (one language):** a door opens 12deg on its hinge + hinge shadow line, 200ms, `(hover:hover)` only.
- **Reduced motion:** all doors shown in final state (services open, rain diagram in 3 static frames side by side).

## 8. Tools
1. **Lock counter (hero door wall)**: inputs = tap doors (front, back, side, garage entry, basement/shared
   hall, mailbox) — checkboxes; output = count + Sample range: first lock {{proof.prices.2}} + (n-1) ×
   each added {{proof.prices.3}}; kit `estimator`; hand-off: "Price these locks" → form `service=Move-in
   rekeys&locks=N`. JS off: checkboxes + static price list + call.
2. **Move-in / PCS rekey checklist**: doors, garage keypad code, mailbox, previous owner's spares, smart-lock
   codes; kit `checklist`; output = count of items to change + printable list; hand-off: form note "Move-in".
3. **Sticking-bolt self-check** (rain story footer): 3 steps (bolt binds only with door shut? key turns with
   door open? worse after rain?) → "likely strike alignment" + Sticky bolts sample note; kit `tabs`/`checklist`;
   hand-off: call or form `service=Sticking deadbolts`.
4. **ZIP checker** (kit `zip`, {{biz.zips}}): yes / "outside our usual area, call and we'll tell you honestly".
5. **Quote form** (kit `form`, multi-step: which door → which job → where (ZIP) → how to reach you).

## 9. Voice
- "Tell us which door. We'll tell you the range before we drive."
- "The November rain swells the door; the bolt misses the plate. We move the plate."
- "Glass knob, old mortise lock? We keep it on the door and make it work."
Never: "fast", "affordable", "best", "trusted", "24/7 guaranteed".
