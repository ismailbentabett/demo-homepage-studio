# Demo rules (fictional business, real city)

These homepages are **sales demos**. A contractor sees one and imagines it with their own name on it.
A demo must never pass itself off as a real business, invent a fact that could mislead someone, or
use another company's name. Every rule below is checked by `tools/check-static.mjs` or `tools/validate-niche.mjs`.

## 1. The business

| Thing | Rule | Example |
|---|---|---|
| Name | Fictional, memorable, owned by nobody we know of. No real chain, franchise or brand name (no "Mr. Rooter", "ARS", "Roto-Rooter", "One Hour", "Home Depot"). No city name *inside* the brand when another site in the library already does that. Search your memory: if it sounds like a real national company, pick another. | `Ridgeline Roof Co.`, `Copperpipe & Daughter` |
| City | A real US city from the niche group's pool (see the brief). Real nearby towns for the service area. | Tulsa, OK + Broken Arrow, Jenks, Bixby |
| Phone | Real area code of that city + **555-01NN** (the range reserved for fiction). The full number is unique across the library (pools in `docs/NICHE-TEMPLATE.md`). | `(918) 555-0104` |
| Email | `hello@<brandslug>.example` (`.example` is reserved and can never be a real domain). | `hello@ridgeline-roof.example` |
| Address | **No street address.** City + state only. JSON-LD uses `areaServed`, never `streetAddress`. | |
| Owner | A first name (+ optional last initial). Never a full real-sounding person name combined with a real city as if it were a real person. | `Dana R.` |
| ZIPs | Real ZIP codes of the city and the listed towns, only ones you are sure of. Used by the ZIP checker. | |
| Hours | Plausible for the trade. Emergency trades may have `emergency: true` (a phone line), never "24/7" wording unless `facts.json` says so. | |

## 2. Proof is always labelled "Sample"

- Reviews, star rating, review count, years in business, licence number, warranty length and prices are all
  **sample values** in `facts.json → proof`, with `"label": "Sample"`.
- On the page, every block that shows them carries a visible label: `Sample review`, `Sample rating`,
  `Sample pricing`, `Licence # (sample)`. Small, honest, designed in (a tag, a footnote, a stamp), never hidden.
- Review authors: first name + last initial + a real nearby town (`Marisol T., Jenks`). Never a full name.
- Licence numbers: obviously fake format with letters `SAMPLE-` or `XX-000000`. Never a format that matches a
  real state licence lookup.
- **No awards, no "#1", no "best in", no "voted", no BBB/Angi/HomeAdvisor/Google badges, no association logos.**
  These are real organisations; a demo cannot claim them.
- No "since 1987" unless `proof.years` exists; then show it as sample (the footer disclaimer covers it).

## 3. The page says it is a sample

- Footer line, always: `{{demo.disclaimer}}` (e.g. "Sample website by Site Sledge. Business details are illustrative.").
- The lead form works as a demo: on send it shows the honest success state:
  "Thanks, {name}. In your version this goes straight to your phone and inbox." (copy can vary, the honesty cannot).
  It never posts anywhere. No network request leaves the page except loading its own files.
- `<meta name="robots" content="noindex">` on every demo.
- Photo credits (Pexels photographer names) are kept in the footer credits list (`[[credits]]`).

## 4. Words the page may never use (unless `facts.json` makes it true)

licensed, bonded, insured, certified, accredited, guaranteed / guarantee, warranty, financing, 0% APR,
24/7, same-day, emergency (as a promise), award, award-winning, #1, best, top-rated, voted, A+ rating,
BBB, eco-friendly, green, family-owned (unless `facts.biz.familyOwned`), since <year>, <N> years
(unless from `proof.years`), "free estimate" (say "Price it" / "Get a number"), any dollar amount not in
`proof.prices`.

When `facts.json` contains the fact, the page says it through a token and it is labelled sample where §2 says so.

## 5. Photos and video

- Only from the niche's approved library (`niches/<trade>/media/manifest.json`). Pexels licence; credit kept.
- A photo shows what it shows. Captions describe the frame ("Shingle courses going down on a steep pitch"),
  **never** invent a job ("Our Jenks re-roof, 2023"). Never label stock as "our work", "our team", "our crew".
- Never "before / after" with two unrelated stock photos. Use "Planning / Build" or process framing.
- No people's faces as "the owner". A hand, a back, a crew from behind is fine and not called by a name.
- No visible brand logos, licence plates, house numbers or readable signs in hero photos (the curator rejects them).

## 6. Prospect reskin

`tools/reskin.mjs` swaps `facts.json` for a real prospect's facts (their name, phone, city, real reviews).
That is the only way a demo becomes real. It removes the "Sample" labels **only** for facts the prospect's file
marks `"verified": true`, and keeps `noindex` until a human removes it.
