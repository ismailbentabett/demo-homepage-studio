# fencedeck-C · Torrey Rail · concept

## 1. Three obvious concepts, rejected
- **Sunset deck video + "Your outdoor oasis awaits".** Full-bleed golden-hour deck, scrim, two buttons. Every deck builder
  in the county does it; it's the template and our library has no such footage anyway.
- **The evening clock taken literally.** Hour stamps, background darkening, lamp dots. That's the brief's seed as written,
  and it's pest-C's "Dusk Clock + Lamp Glow" and hvac-C's hour-driven "Shade Line". Two siblings in the library already have it.
- **Coastal lifestyle magazine.** Big serif, beige, palm shadows, "Live the San Diego life". Every outdoor-living brand does
  this, and it says nothing about slope, footings or salt air, which is what a canyon-lot owner actually worries about.

## 2. The thesis
**The page is one canyon-rim deck drawn in section: under every band the same slope line gets the next part of the deck
built on it (footings, posts, joists, boards, rail, lamps), so the deck is finished at the hour its lights come on.**
Material: the drawn slope section (the ground the competitors never show). Verb: build.
The hours (4 PM → 10 PM) stay as the clock of the story, but the system is the building, not the clock.

## 3. Signature system: "Slope Section Build" (`data-sw-signature="slope-section"`)
One SVG drawn once (viewBox 1200×160): a single canyon grade line (sage 1.5px) with diagonal hatching under it, a rim at
x≈420, and a deck assembly whose parts carry `data-part="footing|post|beam|joist|board|rail|lamp"`. CSS var `--built`
(0-7) shows parts cumulatively; `--sw-p` draws the newest part (stroke-dashoffset). Mono tag on the line: "4:00 PM · FOOTINGS".
- **Hero:** under the 21:9 strip, the bare slope with only the rim and two dashed footing marks (built 0). Tag "4:00 PM · bare slope".
- **Story "Six hours on the rim" (pinned ≥ 900px):** the big section builds one part per step; each step = an hour + a local
  truth: 4 PM footings (slope), 5 PM posts & beams (soil), 6 PM joists + ledger flashing (marine layer), 7 PM ignition-
  resistant boards (fire zone), 8 PM stainless cable rail (salt air, the view), 9 PM lamps on. Phones: stacked cards, each
  with a cropped mini section at its level.
- **Services:** each card has a 1200×80 crop of the same grade line showing only its part; fence cards swap the deck for
  stepped fence panels on the same slope (variation: the slope steps instead of cantilevering).
- **Tools:** the fence estimator draws posts every 8 ft and stepped panels along the grade line live; the fire-zone
  checklist hatches boards amber as items are ticked.
- **Proof:** each review card's top edge is a 3-post slice of rail; the rating line shows {{proof.rating}} as lit lamps on a rail.
- **Footer (10 PM):** the finished deck silhouette, every lamp lit (amber dots with a 6px glow), areas listed along the
  grade like spot elevations. Tag "10:00 PM · lights on".

## 4. Type
- Display **Instrument Serif** 400 + italic (used 0× in registry, 0× in niche): a narrow, high-contrast editorial serif
  reads like a drawing's title block lettering and lets a 3-line h1 hold big on a phone. Italic for the hour words.
- Text **Geist** variable (400/500/600): crisp, technical Swiss sans that sits under a drawing like its notes; tabular numerals for prices. (Hanken Grotesk was rejected: the Instrument Serif + Hanken pair is reserved by tattoo-A.)
- Accent **JetBrains Mono** 500: hour tags, dimensions on the section ("16 in. o.c.", "8 ft"), sample tags.

## 5. Palette: "Marine Layer Navy + Deck Lamp Amber + Chaparral Sage"
| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep (night) | #141B26 | paper #F2EEE6 | 14.94 | body on deep / ink on paper |
| paper (haze) | #F2EEE6 | deep | 14.94 | reversed body |
| accent (lamp amber) | #E8A33D | deep #141B26 | 8.01 | accent words, focus ring on deep, lamps |
| accent | #E8A33D | mid #263548 | 5.77 | accent words + focus on mid |
| accent | #E8A33D | dusk #1E2A38 | 6.74 | accent words on dusk band |
| accent | #E8A33D | paper | 1.86 | **never words**, shapes only (lamp dots on paper get a deep 1px ring) |
| deep on amber | #141B26 | #E8A33D | 8.01 | primary button text (amber button) |
| white on amber | #FFFFFF | #E8A33D | 2.15 | **FAIL, never used**: button text is deep |
| amber-ink | #8A5A12 | paper | 5.10 | accent words on paper |
| amber-ink-2 | #7A4F0E | sand #E4DCCD | 5.22 | accent words on sand (#8A5A12 on sand = 4.34, fails) |
| mid (twilight) | #263548 | paper text | 10.76 | t-mid band |
| muted on mid | #B8C1CC | #263548 | 6.84 | secondary text on mid |
| muted on deep | #A9B2BF | #141B26 | 8.07 | secondary text on deep |
| muted on dusk | #A9B2BF | #1E2A38 | 6.79 | secondary text on dusk |
| sage (signal) | #9DB09A | deep | 7.50 | grade line, OK ticks, labels on deep |
| sage | #9DB09A | mid | 5.40 | labels on mid |
| sage-ink | #4E6B4A | paper | 5.14 | labels on paper (on sand 4.37, large only) |
| muted on paper | #5B6472 | paper | 5.16 | secondary text on paper |
| muted on sand | #58606D | #E4DCCD | 4.65 | secondary text on sand |
| deep on sand | #141B26 | #E4DCCD | 12.69 | body on sand |
| focus on paper/sand | #141B26 | — | 14.94 / 12.69 | focus ring on light tones |

## 6. Hero family: 4, stacked headline above cinematic strip
Brief's family; unique in the niche (A=9, B=8). Library already has 4 uses (autotuneup-A, roofer-C, plumber-A, landscaper-A),
under the tool's cap of 6; orchestrator noted no family meets the old cap of 3. Cliché broken: the strip isn't a stock
sunset photo. It's a night plate: the strip's left 58% is the drawn slope section (bare canyon grade, rim, footing marks) in
sage/amber line on navy, and the right 42% is hero-C1 (a public-domain B&W survey photo of a stone wall that follows the edge
of a steep slope) duotoned amber-on-navy, so photo and drawing read as one engraved plate. The grade line runs straight from
the drawing into the photo's wall edge. (hero-A2 was the first pick, but fencedeck-A took it as its hero.)

## 7. Motion score
- **Intro (≤ 1.1 s, skippable):** h1 rises line by line (line mask, 70ms stagger, 700ms) while the strip's duotone warms
  from blue-grey to amber (filter transition 1000ms); the two footing marks drop onto the grade line at 800ms. Text is readable from frame 0.
- **Story 1, "build":** pinned slope section, `--sw-p` per step draws the next part's strokes (dashoffset) and the hour tag
  ticks to the next hour; the band's background steps from #263548 to #141B26 across the six steps.
- **Story 2, "draw":** fence estimator: changing length/height redraws posts every 8 ft along the grade with stepped panels
  (transform only, 60ms stagger per post).
- **Hover:** one language: a 1.5px amber grade-line underline that draws left→right (scaleX, 200ms) under links, cards and tabs.
- **Reduced motion:** every section shows its final built state, the strip in final amber grade, the story as static stacked
  steps, lamps lit.

## 8. Tools
1. **Fire-zone checklist** (`checklist`): 6 static items (ignition-resistant boards, ember-resistant gaps/vents, non-combustible
   under the deck, 5 ft clear zone, spark-safe lamps, city rules), a link out to the CAL FIRE hazard map (photo-credit-style
   external link is not allowed, so it's plain text naming the map; no href), "we build to what your city requires". Ticked items →
   form prefill `fireZone=…`.
2. **Material by exposure** (`tabs`): Coast / Inland canyon / Rim and wind. Output: board, fasteners (stainless near the
   coast), rail type, upkeep note. No brands. "Use this" → form prefill `material`.
3. **Fence estimator on a slope** (`estimator`): length (ft), height (4/6 ft), material (redwood/vinyl), gates (0-3), slope
   (flat/gentle/steep). Output: posts = ceil(len/8)+1+gates, stepped panel drawing, sample range from
   `{{proof.prices.*}}` × length labelled Sample, "811 before anyone digs". → form prefill length/height/material/gates/posts.
4. **ZIP checker** (`zip`) on `{{biz.zips}}`, in the 10 PM band.
5. **Quote form** (`form`): multi-step: project (deck/fence/rail/repair/pool) → yard (slope, length/area, notes) → contact.

## 9. Voice
- "A deck on a canyon edge starts in the dirt: we size every footing for your slope and show it to you before anything sits on it."
- "Near the water, plain steel rusts by the second summer, so every cable, screw and hinge we use is stainless."
- "The sun drops behind the ridge around six. That's when you find out whether a deck was built for the evening."
Never: quality, solutions, oasis, craftsmanship, premier.
