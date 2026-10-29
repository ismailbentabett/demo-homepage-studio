# insulation-C · concept

## 1. Three obvious concepts, rejected
- **Snowy street hero + "Warm homes in Syracuse".** Full-bleed hero-C3, scrim, headline, 3 service cards. Every local
  contractor does exactly this; and our only photo is sunny with a readable yard sign at full width. Template.
- **Thermometer / "stay warm" comfort page.** Red-to-blue gradient, temperature counters. This is the thermal-camera
  cliché (brief §4.1) in a new coat; also slides into savings talk we're banned from.
- **Literal snow-band map with snow particles everywhere.** Brief §6 seed taken literally: a map hero, then generic
  sections with falling-snow canvas. A gimmick on one screen, nothing structural below the fold.

## 2. Thesis
The page is the lake-effect forecast map of Onondaga County: every section is a pin under a snow band, and the band
**sweeps south** across the page as you scroll until it settles over your street, so the house type, the weak spot and the
fix are always read *from where you live*.

## 3. Signature system: "Lake-Bearing Pin & Drift Band"
Primitive = a pin chip (brick dot + white ring + place label in wide caps + a mono compass bearing "↑ NNW · lake" whose
arrow points toward Lake Ontario) riding on a **drift band**: a 14° diagonal hatched band (repeating-linear-gradient,
white 18% on the tone) that crosses the section edge. The band's x-offset is driven by `--sw-p` (scroll progress), so the
band visibly drifts from the lake side (top-left) to the south (bottom-right) across the page. Hook: `data-sw-signature`.
- **Hero:** full drawn county map (SVG): Lake Ontario across the top, Oneida Lake east, 3 drift bands, 8 pins drop
  lake → south; the street plate (hero-C3) is pinned to the city pin like a clipped field photo.
- **Story "Three neighbourhoods":** pinned map zooms county → Eastwood → Tipp Hill → Liverpool; each zoom draws that
  area's house cut-away (2.5-story frame / narrow clapboard / colonial) with heat-leak arrows that seal one by one.
- **Services:** each service card is a pin card: house-type label + bearing + a mini drift band across its top edge whose
  angle differs per card (−14° … +14°) like bands seen from different towns.
- **Reviews:** sit at their town's pin on a strip map of the county (Syracuse ×3, North Syracuse, Liverpool, Camillus,
  Manlius); the active review lights its pin and the band slides over it.
- **ZIP checker:** a hit lights its town pin on a mini map and the band parks over it ("You're under the band.").
- **Form:** step 4 ends on "Your street on the map": the form's top edge is the band, a pin with the user's ZIP town.
- **Footer:** the whole county map again at 20% scale, band now at the bottom edge (drift complete), towns as a pinned list.

## 4. Type
- Display **Anybody** (wdth 125-135, wght 760-820): a width axis reads like a stretched snow band and like the wide caps on
  county road maps; place names set expanded become landmarks. Library uses: 1, niche: 0.
- Text **Public Sans** (400/600): the government-grade face of state maps and road signs; plain, honest.
- Accent **DM Mono** (bearings, ZIP, prices): map-legend data voice.

## 5. Palette: "Ontario Lake Blue + Snowbank + Tipp Hill Brick + Porch Yellow"
ink #13212C · paper (snow) #F4F6F3 · field (lake) #1D5A8A · deep (night lake) #0E2A3F · accent (brick) #A3303A ·
signal (porch yellow, from the yellow house) #F2C230 · mid (slush) #D9E2E6 · muted-on-paper #4A5A66 · muted-on-field #DCE7EF ·
muted-on-deep #A9BCCB.

| Pair | Ratio | Use |
|---|---|---|
| ink on paper | 15.07 | body |
| muted #4A5A66 on paper | 6.56 | captions |
| brick on paper | 6.35 | links, kicker, pin labels |
| lake #1D5A8A on paper | 6.70 | headings accent, focus ring on paper |
| white on brick | 6.90 | primary button text |
| white on field | 7.28 | body/h on lake band |
| #DCE7EF on field | 5.80 | muted on lake band |
| #C7D6E2 on field | 4.90 | small labels on lake band |
| yellow on field | 4.34 | **FAIL normal** → large ≥ 24px or rules/pins/focus ring (≥3) only |
| white on deep | 14.77 | body on deep |
| yellow on deep | 8.81 | accent text + focus ring on deep |
| #A9BCCB on deep | 7.55 | muted on deep |
| ink on mid | 12.46 · brick on mid 5.25 · muted on mid 5.42 · lake on mid 5.54 | mid band |
| ink/deep on yellow | 9.78 / 8.81 | yellow chip/secondary button |
| yellow on brick | 4.12 | **FAIL** → never text; shapes only |
| white on ink | 16.38 | mobile bar |
Focus: paper → #1D5A8A (6.70); mid → #1D5A8A (5.54); field → #F2C230 (4.34 ≥ 3); deep → #F2C230 (8.81); brick bg → #FFFFFF (6.90).

## 6. Hero family 15: map / area-led
4 uses in the library (max 6), 0 in niche. Cliché of the family: a flat service-area map with a radius circle and a list of
towns. Broken by: the map is weather, not coverage: lake-effect bands crossing it give it direction and time; pins carry
house types not just names; a real street photo plate is clipped to the city pin; the headline sits *on the lake*.

## 7. Motion score
- **Intro (≤ 1.1 s, never blocks text):** shoreline strokes draw (DrawSVG 500ms) → 3 drift bands slide in from the lake
  (x −8% → 0, 400ms, 80ms stagger) → pins drop lake → south (8 × 60ms, 8px drop, no bounce). Text is static from frame 0.
- **Story 1 "zoom" (≥ 900px, pinned):** map viewBox tweens county → Eastwood → Tipp Hill → Liverpool (3 steps, height
  `calc(3*55svh + 100svh)`); at each, the cut-away house draws and its amber-free brick arrows **seal** one by one (arrow
  → short rule + tick). < 900: 3 stacked cards with clip reveal.
- **Story 2 "drift":** global `--sw-p` moves every drift band's background-position (0 → 100%) so the band travels down the page.
- **Hover:** pin lift: card/pin raises 3px and its bearing arrow rotates 0 → −14° (toward lake), 200ms ease-out.
- **Reduced motion:** final map with pins and bands static, story shows the 3 neighbourhoods as stacked cards, no drift.

## 8. Tools
1. **House type guide** (`tabs`): 5 house types (1910s-30s 2.5-story frame · story-and-a-half with knee walls · 1950s-70s
   ranch · split-level · 2000s two-story with bonus room); output 3 usual problem spots + order of work + matching service
   & sample price row; hand-off "This is my house" → form `houseType` prefilled.
2. **Ice dam risk quiz** (`checklist`): 5 yes/no from brief §5.2; output low/medium/high + likely heat paths + what we check
   first; hand-off → form `winter` field prefilled with ticked items.
3. **Cold room log** (`checklist` + small app.js): tap rooms (front bedroom, back bedroom, kitchen over porch, room over
   garage, bathroom, basement edge) × when (Dec / Jan-Feb / always); output a note in pro words → form `note`.
4. **ZIP checker** (`zip`): facts.zips; hit lights the town pin.
5. **Quote form** (`form`, 4 steps): house type → what winter does → ZIP + timing → contact.

## 9. Voice
- "Ice dams start in the attic. Warm air leaks up, melts the snow from underneath, and it refreezes at the gutter."
- "An Eastwood two-and-a-half-story leaks at the knee walls first; we seal those before we add any fill."
- "If the snow on your roof still melts in stripes over a spot we sealed, we come back that winter."
Never: "save", "energy bills", "eco", "comfort you can feel", "cozy".
