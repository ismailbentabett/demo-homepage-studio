# drywall-C — Blueprint (Horsehair & Board)

## Round 1
Photo + first screen elevate: hero arch now holds hero-A1-2 with Plate I drawn over its lower half, a surveyor title line (city, 1890 to now) sits on the h1, and at 390 the cropped arch + plate lead the hero; era windows pair Plate I/III with hero-A2/hero-A2-2 (Plate II drawn, no approved rock-lath photo). Also: break moved after #identify (no dark bands touching), one CTA name, era ranges match the identifier, Roman outline numerals, ledes full ink under h2, nowrap prices, comma captions, plate index peeks under the hero.


Media reality (build round 0): the drywall manifest holds only hero-A1/A2/A3 + video-1, and A uses A1/A2/video-1.
So the page ships **without photos**: every arch frame holds a drawn Era Plate on plaster-cream "glass".
The only media key is `og → hero-A3` (unused by siblings), used for the OG share image alone, because the build
falls back to the first manifest photo (drywall-A's hero) when no OG slot exists. Photos come in the fix round.

| # id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 #hero | t-brick | "do they save old plaster?" → call / price | arch-split | kicker tradeLabel·city·state, h1, lead, [[call]], Price my wall, proof line (rating, reviewCount, hours today) | none: arch holds Plate I drawn | `data-sw-signature` (Plate I), `data-hook="arch-open"` | arch opens from slit + Plate I draws ≤1.1 s; text static |
| 2 #eras | t-paper | "they'll tell me to gut it" | sticky-story | 3 era panels (1890 / 1950 / 2005), keep · pin · replace, review Ray O. | none | `data-hook="eras-draw"`, signature ×3 | plates scrub-draw per panel (all widths, no pin) |
| 3 #services | t-light | every service, small jobs welcome | ledger | services repeater (9), micro-plate per card, [[quote]] | none | signature micro-plates | stagger rise |
| 4 #season | t-slate | "fix now or after winter?" | yearline-band | yearline Sep→Aug, bands Dec–Feb / Feb–Apr, ceiling plate, crack timer tabs | none | `data-hook="season-wipe"`, signature (ceiling plate) | band wipes (scrub) |
| 5 .break #keys | t-deep | thesis statement | statement (full-bleed) | quote "Most horsehair plaster isn't failing…" + full-width lath/key profile | none | — | profile draws once |
| 6 #identify | t-paper | "is my wall plaster or board?" | tool-split | 4 questions → plate result + approach → prefill era | none | `data-hook="era-identifier"`, signature (result plates) | none (tool) |
| 7 #prices | t-light | "small job ignored / overpriced", dust, visits | sheet | patch sizer (estimator), hole sketch, visits table, sample price ledger (proof.prices repeater), visit run 3 steps | none | `data-hook="patch-sizer"` | rise |
| 8 #reviews | t-brick | proof, crack comes back | pin-wall | rating + count (Sample), 5 reviews in arch pins, guarantee token (Sample) | none | — | stagger |
| 9 #area | t-paper | "do you come to my town?", hours | map-list | city + areas repeater, ZIP checker, hours table + open now | none | — | none (quiet) |
| 10 #contact | t-deep | conversion | form-split | 4-step form (what's wrong → the wall → when → you), call/text card, hours today | none | — | rise |
| footer | t-brick | close, legal | — | Plate IV (fills with picked era), disclaimer, licence (sample), years (sample), credits | none | signature (Plate IV) | — |
| mobile bar | t-deep | Call · Text · Price my wall | — | | | | |

## Rhythm gate
- 10 sections ✔. Hero `min-height: calc(100svh - var(--header-h) - 56px)` at ≥900 so the cream eras band peeks 56px; on phones the arch runs past the fold and pulls the eye down.
- Tones: color, light, light, color, dark, light, light, color, light, dark: never 3 alike in a row ✔, the two darks (5, 10) never touch ✔; footer is brick so contact (deep) does not run into another dark ✔.
- t-deep ≥1 (break, contact) ✔; color bands: brick ×2 + slate ✔; full-bleed `.break` ✔ (#keys).
- Hooks: arch-open, eras-draw, season-wipe, era-identifier, patch-sizer + `data-sw-signature="era-plate"` ✔.
- Layout families: arch-split, sticky-story, ledger, yearline-band, statement, tool-split, sheet, pin-wall, map-list, form-split: 10 families, no neighbours alike ✔.
- Exactly one `#contact`; every CTA goes to `#contact`, `tel:` or `sms:` ✔.
- Required content: 9 services (repeater) ✔, areas + ZIP ✔, hours + open-now ✔, sample reviews ✔, prices via estimator + Sample ledger ✔, footer disclaimer + credits ✔.
- Signature sections (concept.json): hero ✔, eras-story ✔, tool (#identify) ✔, services ✔, season ✔, footer ✔.

## Decisions taken headless
- No pin anywhere: the eras story uses `position: sticky` plates inside each panel + a scrub, so phones get the same draw without scroll-jacking.
- Hero arch with no photo: fanlight spokes in the semicircle, the plate as the "view through the window". The concept's photo grade waits for real photos.

## Open issues
- Photos: hero-C1/C3, season, material, problem slots are not curated. Fix round: swap the arch "glass" for photos where they land (keep the plates as captions).
