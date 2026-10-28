# drywall-A · Media plan

**Library state (2026-10-28):** the drywall approved library holds only 3 photos (hero-A1/A2/A3) + 1 video. So this page
uses 3 keys, not 10-16. Everything else is DRAWN in CSS/SVG (the wall panel in the coats story, texture swatches, test
boards, feather seams) — that suits the thesis (the page's own surface is the material). If the curator adds `step-*`,
`protection-plastic`, `region-rowhouses` or `finished-*` later, the builder may add them as `story-2..4` / `detail-*`.

| key | section | crop | treatment | caption |
|---|---|---|---|---|
| hero-A1 | hero, inside the square-cut patch frame (4:5 ≥900, 3:2 <900) | `object-position: 38% 45%` (glove + paper-tape edge + board seam; keep OSB at right edge only) | site grade `saturate(.78) contrast(1.06) sepia(.06) brightness(1.02)`; 2px cut edge + tape strips; feathered by the intro pass | "Gloved hand pressing paper tape into an inside corner of new board." |
| hero-A2 | `.break` full-bleed between the coats story and the ledger, with one line of big type ("Three coats. Dry between each.") on a paper chip | `object-position: 50% 50%`, 21:9 ≥900, 4:3 <640 | grade + multiply #D5D6D2 at 35% so it reads as wet gypsum mud; the blade pass wipes a smooth stripe across it on scroll (`--sw-p`) | "Hand-troweled mud, before the skim coat." |
| video-1 | coats story, step 3 "coats 1-3" panel (poster first, plays only in view, muted, loop, no autoplay under reduced motion) | `object-position: 50% 40%`, 16:9 | grade; poster `video-1-poster.webp`; pause button visible (≥44px) | "A knife laying a coat of mud across the wall." |

**Rejected:** hero-A3: a woman's face in profile, front and center, would read as the owner (facts owner is Gil): DEMO-RULES §5.
Its plaster also looks like European restoration, not a Harrisburg house.

**Known weaknesses (tell the critic nothing; builder must handle):**
- hero-A1 glove has a small printed wordmark ("TEN / PROFESSIONAL") on the knuckle strap. At the 4:5 crop it is ~10px
  tall at 1440. Keep the frame ≤ 520px wide, which keeps it illegible. Don't put the photo full-bleed.
- hero-A1 shows tape going into a corner, not a knife. The h1 copy must match the photo ("tape it"), not claim a knife.
- video-1 is coarse cement-like mud on a rough wall: crop tight at 50% 40% and keep it small (≤ 6 cols), never full-bleed.
- Photo is stock (Sweden / unknown location): captions describe the action, never a place.
