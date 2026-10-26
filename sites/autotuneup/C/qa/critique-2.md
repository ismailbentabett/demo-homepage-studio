COPY: needs copy-chief

# autotuneup-C · critique round 2 (mode: fast; scored the same as strict)

render.json shows no errors, overflow is gone at 390 and 320, and static.json is clean. This round is a real step up. The night-sky page, centred statement, marquee row and altitude rail all render now. One thing has not changed: all 12 files in `dist/media/` are still 48-byte placeholder webps. Every photo slot is a designed navy gradient with a caption, and there is no photograph on the page.

## Five-second test
- **1440-first.jpg:** "A tune-up shop in Santa Fe that tunes for altitude. Book a time, or text. 4.9 stars from 164 reviews (sample)." I get what, where, what to do and why within the first screen. The three frames under the buttons are empty dark panes with captions where photos should be.
- **390-first.jpg:** The eyebrow, the 3-line h1 with the city, the lead, both buttons and the proof line all sit above y≈500, and the call bar is pinned. It passes. The marquee peeks in as empty panes.

## firstScreen: 7.5
- Earned: a centred 2-line h1 with the city and the trade ("Santa Fe tune-ups, set for seven thousand feet."), one teal primary plus an outline secondary, a Sample-labelled proof line, and readable header contrast with a visible phone (1440-first.jpg). On a phone everything decisive is above the fold (390-first.jpg).
- 1440-first.jpg: the lower 40% of the screen is three photo-less gradient panes. The promised photo marquee is a row of captions (−1.5).
- 1440-first.jpg: the mono eyebrow, mono proof line, mono header status and mono rail make four tracked-mono labels in one view (−0.5, light).

## distinctiveness: 7.5
- Earned: the altitude rail now reads in every section and counts with the scroll: 7,199 at the Plaza (1440-first.jpg), 7,450 on the Eldorado road (1440-scroll-25.jpg), 8,200 at the Ski Basin turnoff (1440-scroll-50.jpg), 6,300 at Cerrillos (1440-scroll-75.jpg). The same marker is set into frame corners and review tags (1440-full.jpg). The night-sky + turquoise palette lands. Sibling first screens A/B don't look like this.
- 1440-full.jpg: "What your car needs up here" is still a 2×4 rule-and-link list. It's honest, but it's the standard services block (−0.5).
- With no photos, half of the concept ("sticky photo statements") is just dark rectangles. The signature carries the page alone (−1.0).

## type: 8.0
- Earned: Outfit Black at a confident size with tight tracking, Space Mono kept to data (altitude, prices, labels), curly quotes and apostrophes now correct (1440-first.jpg, 1440-scroll-75.jpg).
- 1440-scroll-25.jpg / 1440-scroll-50.jpg: the photo captions are full sentences set in mono ("Red dust settled on a hood after a week of dirt-road driving to Eldorado.") (−0.5). Mono should stay instrument data, and running sentences should be in Outfit.
- 1440-scroll-25.jpg: form labels "Mileage" and "Roads you drive" are bold mono at ~13px, so a third voice creeps in (−0.5, light).
- 1440-scroll-50.jpg: the overlay heading "a short written list: what's due, and what can wait." starts lowercase as a continuation of the eyebrow. It reads like a typo on the screen (−0.5 combined with the mono note, counted once).

## layout: 7.0
- Earned: real tonal rhythm, dark → paper → dark → teal → dark → dark → paper → dark → teal → dark (1440-full.jpg). Story bands alternate sides. The tools sit as two dark cards on teal instead of four identical grey boxes (1440-scroll-25.jpg).
- 1440-scroll-50.jpg: the full-bleed "Santa Fe street at golden hour" band is ~900px of empty navy gradient, with its caption floating top-right and the statement card bottom-left. It reads as a broken section (−1.0, because the dead area is over half a screen).
- 1440-full.jpg ≈ y 6400–6900 ("What happens while you wait"): three empty gradient panes form the whole section (−0.5).
- 1440-full.jpg: reviews and pricing (dark) follow the dark full-bleed band and the dark UV story, so 3 dark sections run together from ≈ y 3300 to 5800 (−0.5).

## photo: 2.5
- 1440-first.jpg, 1440-scroll-25.jpg, 1440-scroll-50.jpg, 1440-scroll-75.jpg, 390-full.jpg: no photograph renders anywhere. `dist/media/placeholder-*.webp` are 48 bytes each. mustFix, so the category is capped.
- +0.5 over round 1: the empty slots are now a designed dusk-gradient with captions and altitude tags instead of raw alt text, so the page no longer looks broken. It still has no photography.

## copy: 8.5
- Earned: specific and local copy, e.g. "The road out to Eldorado fills cabin and engine filters with red dust long before the mileage interval", "you hear it from us in the bay, not from a dead click in a cold parking lot". Zero em dashes. One action name ("Book a time") everywhere. The leaked heading and the doubled SAMPLE are gone (1440-scroll-75.jpg).
- 1440-full.jpg ≈ y 1000–1400: "Book this" repeats 8 times under the service list, one generic link per row (−0.5).
- 1440-scroll-75.jpg: "6,300 ft Cerrillos". Cerrillos sits near 5,700 ft. The altitudes are not in facts.json and one of them looks wrong. On a page whose whole thesis is elevation, a local will catch it (−0.5).
- 1440-scroll-50.jpg: the hero lead and the "Every visit ends with" band repeat the "what's due, what can wait" idea already used in the UV story (−0.5, light; counted with the line above to stay at 8.5).

## mobile: 8.0
- Earned: no overflow (render.json), h1 and both actions above the fold, call bar with a 48px+ phone and Book (390-first.jpg). The marquee becomes a swipe strip that peeks at the right edge. Price rows are re-cut as stacked rows (390-full.jpg).
- 390-full.jpg: the services list is one tall column of 8 items, each with its own "Book this", roughly 1.5 screens of the same shape (−0.5).
- 390-full.jpg: empty gradient panes take several full screens on a phone, and the "while you wait" gallery stacks 3 empty frames (−0.5).
- The altitude pill on mobile was in the concept but isn't visible as a pinned element in 390-full.jpg (−0.5, light, folded into the above; scored 8).

## a11y: 8.0
- Earned: header contrast fixed (1440-first.jpg). 1440-rm-full.jpg and 390-rm-full.jpg show every heading, paragraph and tool. Form fields have visible labels (1440-scroll-25.jpg).
- 1440-scroll-75.jpg: the "STOP 03 · COLD" eyebrow is ~13px teal on #e7e2da. It looks near 3:1, under 4.5:1 (−0.5).
- 1440-scroll-75.jpg: the price-row notes ("most cars and small SUVs") are mid-grey on navy at ~14px. That's borderline; use the ink at 80% or more (−0.5).

## motion: 7.5
- Earned: the rail visibly changes value between frames (7,199 / 7,450 / 8,200 / 6,300 in 1440-first.jpg → scroll-25 → scroll-50 → scroll-75), with the dot travelling down the track. The intro doesn't block the h1 (1440-first.jpg).
- The sticky-photo unclip and marquee drift have nothing to move. Wiping open an empty gradient pane is not a moment (−1.0).
- 1440-full.jpg: outside the rail, the remaining motion is the same reveal on every block (−0.5).

## wow: 6.5
- Earned: the altitude rail counting up and down the road out of Santa Fe is a real idea, and it now works (1440-scroll-25.jpg → 1440-scroll-75.jpg). The checklist + mileage tools on teal are useful (1440-scroll-25.jpg).
- Nothing on the page is a screen you'd screenshot for a partner. The climb has no landscape to climb through, and the tool outputs are plain text lines in a box (1440-full.jpg ≈ y 2700) (−1.0, −0.5).

## polish: 6.0
- dist/media: placeholder webps shipped again, and the OG image is still a flat-colour fallback. mustFix (capped).
- Earned: radii now consistent (pills for actions, 16px cards), favicon, JSON-LD, a demo-honest form ("Got it (demo)"), one Sample tag per price (1440-scroll-75.jpg).

## Arithmetic
14×7.5 + 12×7.5 + 10×8 + 10×7 + 8×2.5 + 8×8.5 + 7×8 + 7×8 + 12×7.5 + 8×6.5 + 4×6
= 105 + 90 + 80 + 70 + 20 + 68 + 56 + 56 + 90 + 52 + 24 = 711 / 100 = **7.11**

## Must
1. **No photography anywhere (1440-first.jpg, 1440-scroll-50.jpg, 390-full.jpg).** Where: all 12 `dist/media/placeholder-*.webp` (48 bytes each). Problem: every image slot is an empty gradient, and og.jpg falls back to flat colour. Fix: populate the approved library in `niches/autotuneup/media/manifest.json`, re-run the media plan so every slot points at a real frame, rebuild, and confirm `dist/media/*.webp` are tens of KB and og.jpg is built from the hero. If the library can't be filled, this site can't pass and should go to needs-human. That decision belongs to the orchestrator.

## Should
- **Full-bleed place band (1440-scroll-50.jpg).** With no image, it's ~900px of dead navy. Once a photo is in, cap it at `min(80svh, 760px)`. Move the caption into the bottom-left beside the statement card instead of floating top-right.
- **Overlay heading (1440-scroll-50.jpg).** "a short written list: what's due, and what can wait." Make it a full sentence: "Every visit ends with a short written list: what's due, and what can wait.", set as h2, with the eyebrow removed.
- **Captions in mono (1440-scroll-25.jpg, 1440-first.jpg).** Set `figcaption` sentences in Outfit 15px. Keep only the altitude chip ("7,450 ft") in Space Mono.
- **Altitude figures (1440-scroll-75.jpg).** "6,300 ft Cerrillos" looks wrong (≈ 5,700 ft). Check every elevation against a real source, or round to "~" values. Elevation is the whole thesis.
- **"Book this" ×8 (1440-full.jpg services, 390-full.jpg).** Drop the per-row link and make each row's title the link to `#book` with the service preselected. Keep one "Book a time" under the list.
- **Eyebrow contrast on paper (1440-scroll-75.jpg "STOP 03 · COLD").** Use a darker teal (≤ #1f7a6c) on #e7e2da so it reaches ≥ 4.5:1.
- **Price notes (1440-scroll-75.jpg).** Raise `.price-table` note colour to #c9c4bb or lighter on navy.
- **Dark run (1440-full.jpg ≈ y 3300–5800).** Reviews + pricing follow two dark bands. Put reviews on paper (#e7e2da) to break the run.
- **Mobile rail (390-full.jpg).** The pinned altitude pill from the concept isn't visible. Pin a slim "7,450 ft · Eldorado road" bar under the header on phones so the signature exists below the hero.

## Elevate (two weakest: photo 2.5, wow 6.5)
- **photo:** Once real frames exist, make them the ascent. Grade all frames as one dusk shoot, order them by elevation, and give each frame its altitude chip in the same corner position, so photo + rail read as one sequence: town → dirt road → ski road → back down.
- **wow:** Turn the mileage/season tools into the altitude instrument. The output draws your road as a small elevation profile in the rail's language, with each due task pinned as a marker at the altitude where it matters (filters at Eldorado, battery at the cold stop). Tools and signature become one moment worth showing.
