# appliance-A · Blueprint (Screw-Corner Access Panels)

## Round 1
Elevate: the panel became the page's grammar. Every section edge is now a screwed seam (4 screws that back out on scroll), every tool answer (symptoms, model tag, vent) is a screwed BEHIND THE PANEL verdict card, and all 10 services are screwed panels. Photo: the library has no approved photos, so the draft hero-A2 came off the page. The hero inset and story steps 03-05 open onto drawn appliance interiors (thermal fuse with meter probes, lit sheet-metal plates), and the review part tags carry drawn parts.
Tones re-cut to break the dark+dark hero→story: deep (hero) · paper (story, dark panels) · deep (fixes) · paper (symptoms, dark tool panel, head on top) · accent (tag) · mid (reviews) · paper (prices) · deep (vent) · accent (area) · paper (contact) · deep (footer). No dark touching, no 3 alike.
Copy-1 applied: one primary "Book a visit" (header outlined while the hero's own button is in view), Call is secondary, SMS is a text link, the hero kicker is 18px text face, 4 kickers deleted, the price range is nowrap, the thank-you is honest. Phones: the story keeps drawings only on 04/05, with tighter panels.
Open issues: the OG card still renders from hero-A2 (public domain, never shown on the page). Every other build path either fails or falls back to a CC-BY car photo.

| # id | tone | purpose (objection / path) | layout (`data-layout`) | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 `#top` hero | t-deep | first 5 s: symptom → cause, call/text, visit band, open-now | split | kicker `{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}`, h1 "Runs. No heat." + cause line, lead, `[[call]]`, sms, proof line `{{hours\|today}}` · `{{proof.prices.0.from}}–{{proof.prices.0.to}}` [[sample pricing]] · `{{proof.rating}}` [[sample rating]] | hero (hero-A2, cropped inset) + SVG dryer cutaway | `data-sw-signature="panel"` | intro: 4 screws spin out, seam opens, amber cone wipes onto BLOWN tag (≤1.1 s, h1 static) |
| 2 `#call` One service call | t-mid | "show up without the part" / process | story | 7 panels 01-07 (describe · model number · likely part · meter test · part in your hand · fix or don't · old part leaves) | 7 SVG spots | `data-hook="story"` | ≥900 + motion: sticky stage, scrubbed unscrew + lift + clip wipe; <900: stacked, behind-half wipes once on entry |
| 3 `#fixes` What we fix | t-paper | services, "all makes" cliché answered by parts | grid (4 big steel panels with part drawings + 6 compact rows) | `<!-- each services 0:4 -->`, `<!-- each services 4:10 -->`, `[[quote {{.short}}]]` | part SVGs | — | text rises, stagger |
| 4 `#symptoms` Symptom finder | t-deep | "do I even need a tech?" | tabs | 5 appliance tabs × 3 symptom `<details>` (homeowner words → causes, safe self-check, stop-and-call), prefill CTA | — | `data-hook="finder"` (tabs) | still (tool) |
| 5 `#tag` Model tag | t-accent `.break` | "show up without the part" → model number | break (full-bleed amber band, big drawn plate) | 5 tabs: appliance outline + plate marker + where/why, CTA to form | SVG outlines | `data-hook="tag"` (tabs) | marker pulse (motion only) |
| 6 `#reviews` What they saw | t-mid | trust: the failed part shown | list (two-cell rows: what they saw / behind it) | `{{proof.reviews.N.*}}` ×6, rating `{{proof.rating}}` / `{{proof.reviewCount}}`, [[sample review]] | — | — | rows rise |
| 7 `#prices` Visit + common fixes | t-paper | "$150 just to look" + "talk me into it" | statement (big line left + paper price panel right) | `<!-- each proof.prices -->`, [[sample pricing]], `{{proof.guarantee}}` (sample), fix-or-don't rule | — | — | price rows draw a rule |
| 8 `#vent` Dryer vent check | t-deep | "slow dryer, is it the dryer?" | tool-split | inputs ft / 90° / 45°, live bar vs 35 ft typical | — | `data-hook="vent"` | bar draws |
| 9 `#area` Area + hours | t-accent | "national call center" | stack | `{{biz.city}}`, `<!-- each biz.areas -->`, ZIP checker, `{{hours\|table}}`, `{{hours\|today}}` | — | `data-hook="zip"` | still |
| 10 `#contact` Book a visit | t-paper | the one form | form (panel, 4 steps, each tightens a screw) | services radios, model, zip, when, contact | — | `data-hook="form"` | screws tighten per step |
| footer | t-deep | panel shut | — | `{{demo.disclaimer}}`, `[[credits]]`, phone, hours | — | — | none |

## Rhythm gate
- 10 sections; hero `min-height: calc(100svh - var(--header-h))`, story band edge peeks. ✔
- Tones: deep · mid · paper · deep · accent · mid · paper · deep · accent · paper → no 3 alike, no dark+dark touching (t-mid is steel, separated from deep by its lit stage and panel frame). ✔
- t-deep ✔, colour bands ✔ (#tag, #area), full-bleed `.break` = #tag ✔.
- Hooks: signature + story, finder, tag, vent, zip, form (7). ✔
- Layout families: split, story, grid, tabs, break, list, statement, tool-split, stack, form; no neighbours alike. ✔
- One `#contact`; every CTA → `#contact` or `tel:` / `sms:`. ✔
- Required content: all 10 services, area + ZIP, hours + open-now, sample reviews, prices only in the sample price panel + hero band, footer disclaimer + credits. ✔
- Signature in: hero (panel 00), story (01-07), services (steel panels with screws), proof (review panels), pricing (paper panel), form (screws tighten), footer (panel shut). ✔

## Decisions (headless)
- Hero photo hero-A2: kept the planned `scale(1.7)` / origin `30% 100%`, but the frame is **2:1 at every width** (not 3/2 on phones): at 3/2 the scaled window starts at ≈42% of the source height = the mouth/chin; at 2:1 it starts at ≈56% (shirt and forearms only). Alt overridden (manifest alt names a real person).
- Pin = CSS sticky stage + ScrollTrigger scrub, only inside `matchMedia('(min-width: 900px)')` + `.sw-motion`.
- Hero at ≥900 is `calc(100svh - var(--header-h) - 56px)` so the story band peeks in; below 900 it is the full `calc(100svh - var(--header-h))`.
- Face check done on the 1440 and 390 screenshots: only the hands, the meter and the board show, so the photo stays as an inset under the drawn cutaway.
- Hero intro force-completes at 1.3 s (safety for slow frames); screws clear inline props after.
- Symptom finder uses native `<details>` inside tabs (works with JS off); vent check is the only tool logic in app.js.

## Open issues
(none)
