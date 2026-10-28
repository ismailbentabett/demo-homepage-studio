# windowdoor-C · Concept

## 1. Three obvious concepts (rejected)
1. **"Historic charm" sepia scrapbook.** Old photos with torn edges, a script font, "Since…" badges. Obvious: every
   restoration shop does it; it's the brief's "hundred years" read as nostalgia. Also invites invented years.
2. **Neighborhood photo marquee hero (the seed literally).** Centered line + a strip of house photos. Obvious: the brief's
   seed verbatim; and the approved library has ONE usable residential photo, so it can't be built honestly.
3. **Hurricane-ready impact pitch.** Storm sky, "Protect your family", order-by countdown. Obvious: competitor cliché #5,
   and B (Naples) owns the impact/label proof axis.

## 2. Thesis
The page is a hand-drawn St. Johns River route: the reader travels downstream from Riverside to the Beaches, and at every
stop a window elevation drawn to that neighborhood's build years **lifts its lower sash open** as you arrive.
(Arguable: it bets on drawing over photography for a trade usually sold by photos. That's deliberate: the drawings carry
knowledge — divided lites, meeting rails, transoms — that stock photos never show.)

## 3. Signature system: "River Route Stops + Lifting Sash" (`data-sw-signature`)
Primitive: a 3px river-blue SVG path in the 2-col left gutter; a stop = 18px brick ring (hollow → filled), condensed caps
stop name, year band ("Built 1909–1930", condensed 600, bark), and an elevation SVG (stroke 1.5px ink, sash group with
`data-sash`). Stop years are hedged neighborhood eras ("mostly built"), not facts about the business.
- **Hero:** route starts as a short vertical line under the centered h1 and bends left into the gutter; the marquee below
  is a "riverbank" of 8 elevation cards (window type + neighborhood + era) — drawings, not photos.
- **Stops story (#stops):** 5 stops (Riverside/Avondale 1909–1930 6-over-1 double-hung; Springfield 1900–1920 2-over-2 tall
  sash + "check the district first"; San Marco 1925–1955 steel casement / brick; Mandarin 1965–1990 ranch slider; the
  Beaches 1940s cottages → impact single-hung). Dot fills, sash lifts 38%. Each stop maps to a service + a [[quote]] CTA.
- **Tool (#age):** style-by-house-age decade tabs = a mini horizontal river with 6 decade dots; picking one moves the
  brick dot and swaps the elevation.
- **Proof (#reviews):** horizontal "reach": the line runs left→right, each review card moored under its town's dot.
- **Prices (#prices):** each sample row starts with a 28px elevation glyph of that product, mile-dot bullet.
- **Footer:** the line widens (stroke 3→40px, paper→band) into the river mouth; the 10 areas sit on it as small stops.
Wow moment: scroll down #stops and each window literally opens as the river reaches it.

## 4. Type
Display **Sofia Sans Condensed** (wght 1-1000; 800 for h1, 650 for stop names, caps +.06em) + text **Public Sans** (civic,
map-legend clarity). Why: tall condensed caps read like river-chart place names and stack well centered; Public Sans is
the plain legend text of a public survey map. No accent face (stop years use the display at 600, tabular nums).
Registry: Sofia Sans Condensed 1 use (not this niche); pair unique (B uses Rethink Sans, A Onest — no shared text face).

## 5. Palette: "Spanish Moss + St. Johns Blue + Brick Stop"
| Role | Hex | On | Ratio (contrast.mjs) | Use |
|---|---|---|---|---|
| ink (river ink) | #14324A | paper #EEF0EA | 11.53 | body, headings, route line |
| muted | #4E5A5E | paper #EEF0EA | 6.20 | secondary text |
| muted | #4E5A5E | mid #E2E6DC | 5.62 | secondary on mid |
| muted | #4E5A5E | white | 7.12 | on cards |
| bark | #5A4632 | paper | 7.75 | year bands, captions |
| bark | #5A4632 | mid | 7.03 | year bands on mid |
| accent brick | #A63A2B | paper | 5.60 | stop names in accent, links, focus ring on light |
| brick | #A63A2B | mid | 5.08 | focus/links on mid |
| brick | #A63A2B | white | 6.43 | links on cards |
| white | #FFFFFF | brick | 6.43 | primary button text |
| white | #FFFFFF | brick hover #8C2F22 | 8.25 | button hover |
| ink | #14324A | mid | 10.46 | body on mid |
| band blue | #1F4E6E | paper | 7.70 | large accent words on paper |
| paper | #EEF0EA | band #1F4E6E | 7.70 | text on color band |
| white | #FFFFFF | band | 8.84 | headings on band |
| mist | #D7E3EA | band | 6.76 | muted on band |
| signal sand | #F2C9A0 | band | 5.74 | accent words + focus ring on band |
| paper | #EEF0EA | deep #0F2433 | 13.84 | text on deep |
| mist | #B9C6CC | deep | 9.09 | muted on deep |
| signal sand | #F2C9A0 | deep | 10.32 | accent words on deep |
| coral | #E07A5F | deep | 5.39 | focus ring + filled dots on deep |
| deep | #0F2433 | sand #F2C9A0 | 7.99 | button text on sand button (deep/band tones) |
| **brick** | #A63A2B | deep | **2.46** | **never on deep** (use coral #E07A5F) |
| **brick** | #A63A2B | band | **1.37** | **never on band** (dots there use sand) |
| **sand** | #F4A582 | band | 4.44 | rejected, not used |

## 6. Hero family 10 — centered statement + marquee
Unique in niche (A=5, B=6). Cliché broken: the marquee is not photos but a bank of line-drawn window elevations with
their neighborhood + era — it teaches window types while it moves; and the river line leaves the statement and becomes
the page's spine. Hero is photo-free (library has 1 usable house photo; it goes to the break).

## 7. Motion score
- **Intro (≤1.2s):** h1 line-mask rise (700ms, 70ms stagger); route stub draws 0→100% (600ms, starts 300ms); marquee eases
  from 0 to 40px/s over 1.2s. Text readable at t=0 under no-JS; nothing blocks.
- **Story (draw):** #stops river path `stroke-dashoffset` scrubbed by ScrollTrigger (`--sw-p`); when the line passes a stop
  (stop top at 55% viewport) the dot fills (200ms) and `[data-sash]` translateY(-38%) (520ms ease-out). Reverses on up.
  No pin anywhere. Under 640px: same, line is 2px at left 16px.
- **Secondary (dial):** #age tabs slide the brick dot along the mini river (transform, 520ms ease-io) and crossfade the
  elevation (200ms).
- **Hover:** 1.5px brick hairline scaleX 0→1 from left, 200ms, `(hover:hover)` only. Press scale(.97) 120ms.
- **Reduced motion:** full route drawn, all dots filled, all sashes shown closed-with-open-arrow (static), marquee static
  row (scrollable), tabs swap instantly.

## 8. Tools
1. **Repair or replace (wood windows)** — `checklist`. Inputs: sill soft? glass broken? cords broken? painted shut? house
   built before 1950? historic district? Output line: "Restore the sash" / "Repair parts" / "Replace this one", with the
   sample range from `{{proof.prices.3}}` (sash) or `{{proof.prices.4}}` (sill) or `{{proof.prices.0}}`. CTA
   `data-service="Wood window restoration"` prefills form. JS off: the list + "Text us a photo".
2. **Style by house age** — `tabs`. 6 decades (1910s, 1920s, 1950s, 1960s-70s, 1990s, new build) → elevation + 2 lines of
   fitting styles (from brief §5.7, process statements). CTA prefills "Window replacement" or "Wood window restoration".
3. **Count & price estimator** — `estimator`. Steppers: vinyl double-hung, impact windows, patio/slider doors, wood sashes
   to restore, sills. Output: sample total range from `proof.prices` from/to strings, labelled Sample, "your measured quote
   lists each opening"; `data-est-sketch` = row of elevation glyphs, one per opening counted. Prefills form details.
4. **ZIP checker** — `zip` on `{{biz.zips}}`; yes → form with ZIP.
5. **Quote form** — `form[data-lead]` 4 steps, #contact, once.

## 9. Voice
- "Most Riverside sashes are worth saving. We'll price both and tell you which is cheaper."
- "Broken cords are a two-day job, not a new window."
- "Near the ocean we fit impact glass that still looks like a cottage window."
Never: "premium", "state-of-the-art", "hurricane-proof", "transform", "dream home".
