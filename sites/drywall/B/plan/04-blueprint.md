# drywall-B · Blueprint (Raking Light, dark room + one work light)

Header (t-deep, sticky): mark + name · nav · call · **grade strip** (L0-L5, lit cell = grade of the section in view).

## Round 1
Elevate: the levels wall became a full-bleed, full-height left half of the pinned stage (the beam is the image), and the sunset band became a 60svh pause with a real finished-wall photo (hero-A2-2) under a drawn west-window parallelogram. Prices are now the one primed (t-primed) mid-light band. A paper review card breaks over the rating column. Level badges stay only on levels, texture and prices. Services gets a full-width display h2 plus a skim-coat clip (video-1-2). Must: inactive steps keep text at #C9C3B8 or better, and the state is shown on the rule and strip. Should 1-12: city and trade in the h1, a text-link phone, an 80px hero peek, Knockdown as the default, a raking Smooth swatch, the popcorn result card in the left column, dust steps moved to contact, "Price my wall" everywhere, the ↳ glyph removed, 2px chips, and sans labels instead of tracked caps. Pinning starts at 900px.

| # | id | tone | purpose | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-deep | "Will the patch show when the sun hits it?" Call ≤ 10 s | mask-split (7/5) | kicker {{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}; masked h1; lead; [[call]] + "Price my wall"; proof line {{proof.rating}} · {{proof.reviewCount}} [[sample rating]] · {{proof.license}} (sample) · insured; finish-level picker | drawn lit-wall (knockdown) behind picker; h1 mask data-URI | `data-hook="beam"`, `data-hook="level-picker"` | beam sweep 1.1 s (text readable at t=0) |
| 2 | levels | t-room | "What finish am I paying for?" GA-214 L0-L5 | pinned-story (sticky wall + step list) | 4 steps: L0-L2, L3, L4, L5 | drawn seam wall, surfaceScale 6→0 | `data-sw-signature="grade-strip"` | pin ≥ 640 (--n 4), phone: stacked steps unclip |
| 3 | services | t-mid | "Do you do my job?" every service | index-ledger (numbered rows, grade chip) | `<!-- each services -->` name/blurb/[[quote]] | none | - | stagger rise |
| 4 | texture | t-room | "Can you match my knockdown?" | swatch-tabs (4 swatches → panel) | texture matcher (tabs), Mira's review quote | 4 drawn swatches | `data-hook="texture-wipe"` | light rakes each swatch once (verb: wipe) |
| 5 | break | t-deep `.break` | breath: Level 5 under sunset light | full-bleed band | one line + caption | drawn smooth wall, beam crosses on scroll | `data-hook="break-beam"` | beam scrub |
| 6 | prices | t-mid | "Is a small patch worth it / what does it cost?" | ledger-table + sizer | patch sizer (prices.0), inspection readout table `<!-- each proof.prices -->` [[sample pricing]] | none | `data-hook="patch-sizer"` | rows rise |
| 7 | popcorn | t-room | "Is my popcorn asbestos?" | checker-split (inputs left, steps right) | decade/painted/tested → test first; lab fee {{proof.prices.2.from}}-{{proof.prices.2.to}} sample; DEQ hedge (plain text) | none | `data-hook="popcorn-check"` | still (quiet) |
| 8 | proof | t-mid | "Are they careful? Dust? Do they fix what I see?" | dial-asym 4/8 | rating strip {{proof.rating}} [[sample rating]], `<!-- each proof.reviews -->` cards with grade chip, guarantee walk {{proof.guarantee}} | none | - | cards rise |
| 9 | area | t-room | "Do you serve my town? Open now?" | zip-band (3 columns) | {{biz.areas|list}}, ZIP checker, {{hours|table}}, {{hours|today}}, dust steps | none | - | still |
| 10 | contact | t-light | quote form: "the room light comes on when the wall is done" | form-split | 4-step form (level/texture/size/decade hidden fields), [[call]], hours | none | - | form panel rise |
| - | footer | t-deep | close | footer | strip at L5, "Light off. Wall done.", {{demo.disclaimer}}, [[credits]] | none | `data-hook="light-off"` | beam fades |

## Rhythm check
- 10 sections. Hero `min-height: calc(100svh - var(--header-h))`; levels band peeks in.
- Tones: deep · room · mid · room · deep · mid · room · mid · room · light. No two dark (t-deep) touch; never 3 same in a row.
- t-deep ×2 (hero, break) + footer; colour band = t-room (counted as colour by check-static); `.break` = #break.
- Hooks: beam, level-picker, grade-strip (signature), texture-wipe, break-beam, patch-sizer, popcorn-check, light-off.
- 10 layout families, no neighbours share one.
- One `#contact`; every CTA → `#contact` (data-service prefill) or `tel:`/`sms:`.
- Required content: 8 services (repeater), areas + ZIP checker, hours table + open-now, 6 sample reviews (Sample tag), prices only in the ledger/sizer with Sample tags, footer disclaimer + credits.
- Signature sections (concept.json): hero (header strip + picker strip), levels-story, texture-tool (swatch mini-strips), proof (grade chips + rating strip), footer (L5 strip, light off).

## Decisions (headless)
- No photos (src/media.json empty, library has no B photos): every picture is a drawn `feDiffuseLighting` surface. `[[credits]]` renders an empty list (hidden by CSS).
- OG image: build needs a manifest photo or it dies on an unknown key; `ogPhoto: "hero-A2"` (smooth plaster close-up, approved, not a sibling hero, no face). Used only in og.jpg, never on the page.
- Pin from 640px with --n 4 (L0-L2 grouped as one step: those levels sit behind tile or in attics).
- Picker, patch sizer and popcorn checker are small hand-written tools in app.js (they run without motion); JS-off shows the plain-language rule and the call button.

## Open issues
(none yet)
