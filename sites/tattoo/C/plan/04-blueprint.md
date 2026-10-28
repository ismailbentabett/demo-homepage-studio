# tattoo-C · Blueprint (Crane Light · flash sheet under glass)

## Round 1
Photo + distinctiveness: hero-C (healed color piece on a forearm) now hangs as a pinned cream photo sheet with a "Healed · on skin" ribbon in hero tile (a). It comes after the price and open-now tiles on phones, as a 4:3 card. Every tracked eyebrow is now a small ribbon that unfurls (#contact has none). The price board is one wide pinned cream sheet, centered across the deep band, and the visit hours are a tilted card with the today ribbon across it, on the right. The flash rail slides without a pin, so there is no blank spacer. The heads no longer wait on a fade. All 21 copy-1 replacements are applied.
- Only one photo sheet: the manifest has 3 approved photos and hero-A / hero-B-2 are the siblings' frames, so a second healed sheet (rail, DAY 21) would mean reuse.
- "2-3 sittings" stays a hyphen: it is a fact token (proof.prices.2.note), and BUILD-CONTRACT has no token filter that could render an en dash.

| # | id | tone | purpose | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-wall (color) | "Can I walk in today, what does it cost?" | mosaic | ribbon {{biz.tradeLabel}} · {{biz.city}}, h1, rating {{proof.rating}} (Sample), hygiene line, Call / Text; tiles: flash {{proof.prices.0.from}}–{{proof.prices.0.to}} (Sample), {{hours|today}}, areas | drawn swallow + rose + crane | data-sw-signature (hero ribbon) | tiles pin up 60ms stagger, ribbon unfurls |
| 2 | flash | t-paper (light) | price fear → fixed on the sheet; flash board tool | rail | 6 drawn sheets, filter, code ribbons flip, "Hold this sheet" → form | drawn | data-hook="flash-rail" | ≥1024 pinned horizontal slide; < 1024 grid, ribbons flip at center |
| 3 | clean | t-deep (dark) | "Is it clean? needles? piercing gun?" | split | 4 process steps, {{services.6.name}}–{{services.8.name}} | — | — | text rises |
| 4 | services | t-wall (color) | every service by name | board | repeater services 0:6 + 6:10, each "Price it" → form | drawn heart | — | stagger rows |
| 5 | tide | t-light (light) | "Will it stay bright at the beach?" healing tool | timeline | drawn wave + day ribbons 1/3/7/14/21, tabs Tattoo / Lobe / Cartilage / Nostril, "Book a touch-up check" | — | data-hook="tide-line" | wave draws with scroll, ribbons unfurl |
| 6 | ocean (.break) | t-red (color) | voice: the honest rule | statement (full-bleed) | "Two weeks out of the ocean. We know." | drawn sun-wave | — | none (quiet) |
| 7 | cover-up | t-paper (light) | "Can my old tattoo be covered?" | tool | 3 inputs → answer on red ribbon; Rudy's review (Sample) ; sms + form | drawn arm band | data-hook="cover-check" | ribbon unfurls on answer |
| 8 | reviews | t-wall (color) | "Will they rush me?" | notes | reviews 0,1,3,4,5 under name ribbons, {{proof.rating}} / {{proof.reviewCount}} (Sample) | — | — | notes pin up |
| 9 | prices | t-deep (dark) | "What will it cost?" | ledger | repeater proof.prices (Sample pricing), guarantee on mustard ribbon (Sample) | — | — | rows rise |
| 10 | visit | t-paper (light) | "When, and is it near me?" | split | {{hours|table}}, open-now, ZIP checker, areas repeater | — | — | none |
| 11 | contact | t-wall (color) | conversion | form | 4-step form, call/text, thank-you | — | — | none |
| — | footer | t-deep | close | — | big hours ribbon + crane, disclaimer, licence (sample), [[credits]] | drawn crane | — | — |

## Rhythm check
- 11 sections. Hero `calc(100svh - var(--header-h))` on ≥ 900; the flash band's top peeks in.
- Tones: color, light, dark, color, light, color, light, color, dark, light, color → never 3 same in a row; the two deep bands never touch (footer deep follows contact wall).
- t-deep ×2, colour bands (wall, red), full-bleed `.break` = #ocean (red statement band).
- Hooks: data-sw-signature (hero ribbon), flash-rail, tide-line, cover-check (4).
- Layout families: mosaic, rail, split, board, timeline, statement, tool, notes, ledger, split, form; no neighbours share one.
- One #contact; every CTA → #contact, tel: or sms:.
- Required content: all 10 services (#services repeater), ZIP checker + areas (#visit), hours/open-now (header, hero, visit, footer), sample reviews (#reviews, #cover-up), prices only in the Sample price block / flash tile, footer disclaimer + credits.
- Signature present in: hero, flash-rail (code ribbons), tide-line (day ribbons), cover-up (answer ribbon), reviews (name ribbons), prices (guarantee ribbon), footer (hours ribbon).

## Decisions (headless)
- (round 0) hero-C was wrongly read as foamboard. It is a healed forearm piece: it is now in hero tile (a), see Round 1.
- The h1 is now "{{biz.city}} flash, off the wall today." (copy-1).
- No hamburger menu: anchors show ≥ 1100; phones get the sticky Call | Text bar (one-page, short distances).

## Open issues
- none yet
