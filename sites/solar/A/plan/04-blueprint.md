# solar-A · Blueprint (Rafter Line Solar · "Roof first. Panels second.")

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-paper | first 5 s: roof check before any pitch; call or quiz | `hero-tool` (7: text left, photo clipped to a 5/12 roof plane right, quiz card overlapping its eave) | kicker city + areas.0-2, h1, lead, [[call]], "Check my roof first", proof line `{{hours\|today}}` · `{{proof.rating}}` [[sample rating]] · `{{proof.license}}` | hero (`rooftops-aerial`, eager) | `data-sw-signature` (pitched rafter row + pitch triangle), `data-hook="hero-quiz"` | intro 1.1 s: eave draws, ticks pop, chalk snaps, mount drops (text static) |
| 2 | `#roof-ready` | t-mid | obj 6 "is my roof even good for this" → quiz → form prefill | `tool-board` (heading column left, 5 question rows right, verdict plate sticky) | 5 radio groups, verdict Ready / Check first / Roof first + reason, "Book this roof check" | – | `data-hook="quiz"` | verdict mount bolts on "Ready" |
| 3 | `#install` | t-paper | obj 5 "I don't understand what I'm signing" | `sticky-strip` (sticky 9-rafter strip over an ol: step left, "what you see that day" right) | 9 steps, drawn icons | – (9 drawn line icons) | `data-sw-signature` + `data-hook="install-story"` | story 1 "bolt": each step snaps + bolts rafter n, counter 01→09 |
| 4 | `#shade` break | t-deep | obj 7 "the oaks shade everything" | `break` (full-bleed drawn roof elevation, heading overlaid top-left) | h2, one line, review echo (Jason R. via token in #reviews) | – (drawn) | `data-hook="shade"` | shade band slides across the front face on scroll (scrub) |
| 5 | `#detail` | t-paper | obj 3 "holes in my roof, it'll leak" | `exploded` (sticky drawing 6 cols left, parts list + photo + guarantee right) | 7 parts, `{{proof.guarantee}}` [[sample]] | detail-clamps (`hero-B3`, 4:5, scaled crop) | `data-sw-signature` + `data-hook="mount-story"` | story 2 "stack": parts assemble on `--sw-p` |
| 6 | `#services` | t-mid | obj 4 "gone in two years, nobody services it" | `index` (sticky heading left, 9 numbered rows in 2 cols right) | `<!-- each services -->`, `{{proof.years}}` [[sample]] | – | – | rows rise, stagger |
| 7 | `#panels` | t-paper | "how many panels do I need" → form prefill | `tool-split` (inputs left, drawn roof faces filling with panels right) | 4 faces, shade, range out, "Send me this range" | – | `data-hook="panel-count"` | panels pop into faces on input |
| 8 | `#prices` | t-deep | obj 2 "the numbers were made up" | `rails` (full-width rows: item · rail between two clamps · from/to) | `<!-- each proof.prices -->` + [[sample pricing]] + note | – | `data-sw-signature` | bars draw clamp to clamp |
| 9 | `#second-opinion` | t-accent | obj 1 "pushy pitch, lock me in" | `statement` (big statement left, questions accordion right) | review 5 (Dave W.) [[sample review]], 5 questions to ask any seller | – | – | still (quiet section) |
| 10 | `#reviews` | t-paper | social proof, every review hangs from a mount | `hung` (one rail across a scroll track, cards hung at staggered drops) | `<!-- each proof.reviews -->`, `{{proof.rating}}`, `{{proof.reviewCount}}` + [[sample review]] | – | `data-sw-signature` | mounts bolt as the rail enters |
| 11 | `#contact` | t-mid | the one conversion end-point | `form-split` (call / text / hours / area + ZIP left, 4-step form right) | `{{hours\|table}}`, `{{hours\|today}}`, `<!-- each biz.areas -->`, [[call]], sms, mailto, ZIP check, form | – | `data-hook="zip"` | form card rises |
| – | footer | t-ink | close | mirrored roof face with 9 bolted mounts, disclaimer, credits | `{{demo.disclaimer}}`, [[credits]], `{{proof.license}}` [[sample]] | – | `data-sw-signature` | mounts bolt left to right once |

## Rhythm gate check
- Sections: 11 (8-12 ✓). Hero `min-height: calc(100svh - var(--header-h))`; the `#roof-ready` band (t-mid) peeks 48-80px.
- Tones: paper, mid, paper, **deep**, paper, mid, paper, **deep**, accent, paper, mid (+ ink footer). No 3 of a category in a row ✓;
  the two deep bands never touch (deep → accent is allowed by 03-system) ✓. Contact (mid) → footer (ink) ✓.
- ≥1 t-deep ✓ (#shade, #prices) · colour band ✓ (#second-opinion t-accent) · full-bleed `.break` ✓ (#shade).
- Hooks: hero-quiz, quiz, install-story, shade, mount-story, panel-count, zip + 6 `data-sw-signature` (≥3 ✓, signature ✓).
- Layout families: 11 different, no neighbours alike ✓.
- One `#contact`; every CTA is `tel:`, `sms:` or `#contact` (quiz chips go to `#roof-ready`, a tool on the page, then to #contact) ✓.
- Required content: 9 services (#services repeater + form radios), area list + ZIP (#contact), hours + open-now (hero proof line,
  #contact), sample reviews (#reviews, #second-opinion), prices only in #prices with Sample tags, footer disclaimer + credits ✓.
- Signature in every `concept.json.signature.sections`: hero ✓, story (#install) ✓, detail (#detail) ✓, proof (#reviews) ✓,
  prices (#prices) ✓, footer ✓.
- Padding: tight / normal / loose alternate.

## Decisions taken headless
- Hero photo crop: `object-position: 100% 50%` instead of 62% 40%, so the drawn roof outline (SVG `xMaxYMid slice`) lines up with
  the same house at every width. The right-hand column of hip roofs with arrays is what shows.
- hero-B3: 4:5 frame, `object-position:18% 78%` plus `scale(1.7)` from the same origin: only panel ends, rail, clamps, conduit and
  tile show; the town, palms and chimneys fall outside the frame.
- Lead form has 4 steps (the static check asks for 4; the concept said 3): what you need → your roof → when → contact.
- "Questions to ask any seller" lives as an accordion in #second-opinion (no separate FAQ section, keeps 11 sections).
- No Lenis (native scroll), no SplitText: the h1 is readable at 0 ms; the hero motion is the signature, not the type.

## Open issues
(none yet)
