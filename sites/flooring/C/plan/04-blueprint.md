# Blueprint — flooring-C (Heart & Tide Floor Co.)

## Section sequence

| # | ID | Tone | Padding | Signature reading | Content hook | Job |
|---|---|---|---|---|---|---|
| 1 | hero | t-deep | loose | HEART PINE +0.0 ft | Type-mask h1 over grain, kicker, Price it + Text Andre, proof line | First 5s: trade + town + act + believe |
| 2 | trust-row | t-paper | tight | — | Open now · Sample 4.9 · 88 reviews · Norfolk VA · Licence SAMPLE-VA-63048 | Trust at a glance |
| 3 | heart-pine-story | t-deep | normal | KING TIDE 3.8 ft | Pinned cross-section story: crawlspace → joists → floor. Moisture reading, gap fill, amber finish. Photo: process-sander, detail-grain-redoak | Answer "they'll sand through my old floors" |
| 4 | water-damage | t-mid | normal | STORM SURGE 2.4 ft | Cupped boards, drying timeline, board replacement count. Photo: detail-cupping, weather-rain. Flood checklist tool hand-off | Answer "water will come back" |
| 5 | services | t-paper | normal | FINISH +0.0 ft | 3×3 grid of service cards with sample price ranges. Each card has [[quote]] button | Browse and price |
| 6 | break | t-deep | — | LOW WATER −0.5 ft | Full-bleed photo: finished-living. No text. Visual rest | Rhythm break |
| 7 | house-age-guide | t-accent | normal | READING 1.2 ft | House-age floor guide tool. Year-built slider → likely floor type → what can be done. Hand-off to form | Interactive qualification |
| 8 | proof | t-paper | normal | SAMPLE READING 4.9 | Review cards (6) with tide-line tag showing star count. Sample rating label. Photo: hands-sample | Social proof |
| 9 | stairs-detail | t-mid | tight | LANDING +0.2 ft | Stairs & landings spotlight. Before/after language as "Planning / Build". Photo: detail-stairs, detail-transition | Niche depth |
| 10 | zip-check | t-paper | tight | SERVICE AREA 0.0 ft | ZIP checker. Served/not answer in aria-live. Yes → form prefill | Qualify location |
| 11 | contact | t-deep | loose | CONTACT −1.0 ft | Multi-step quote form. Service → rooms → floor/water → photos → timing → contact. Honest demo thank-you | Primary conversion |
| 12 | footer | t-deep | tight | LOW TIDE −1.0 ft | Demo disclaimer, credits, nav anchors, phone, email. Tide line closes the gauge | Close |

## Rhythm check

- Tones: deep → paper → deep → mid → paper → deep → accent → paper → mid → paper → deep → deep.
- **Fix:** footer is t-deep and contact is t-deep → two dark bands touching. Change footer to t-paper.
- Revised footer: t-paper. Final sequence ends ...deep → paper. No two dark bands touch.
- Dark bands: hero(3), heart-pine(3), break(6), contact(11). Separated by paper/mid/accent. Good.
- Color band: t-accent at house-age-guide (7). One color band present.
- Break: section 6 is .break full-bleed. Present.
- Hooks: data-hook on hero, heart-pine-story, water-damage, services, house-age-guide, proof, contact = 7 hooks (≥3). Good.
- Signature: data-sw-signature on every tide-line instance (hero, heart-pine, water-damage, services, break, house-age-guide, proof, stairs-detail, zip-check, contact, footer) = 11 instances. Good.
- Forms: one #contact form. Good.

## Layout families used

1. Type-mask hero (family 3)
2. Horizontal trust row (minmax fr grid)
3. Pinned scroll story (tide rise cross-section)
4. Service card grid (3-col)
5. Full-bleed break photo
6. Tool panel (house-age guide)
7. Review card stack
8. Spotlight split (stairs: text left, photo right)
9. ZIP checker inline
10. Multi-step form
11. Footer columns

No three consecutive sections share the same layout family. Reading direction alternates between vertical scroll, horizontal scan, and pinned interaction.

## Mobile adaptations

- Pinned story (section 3) becomes stacked cards with clip-reveal below 640px.
- Service grid collapses to single column.
- Trust row wraps to 2×2 grid.
- Mobile bar fixed bottom with Call + Price it buttons.
- Tide-line tags move from margin column to inline above each section heading.