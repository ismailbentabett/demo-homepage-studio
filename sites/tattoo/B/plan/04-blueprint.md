# tattoo-B · Cycle Log · Blueprint

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | `#top` hero | t-deep | "Is it clean, what will it cost" in 5 s → Book / Text | document (h1 left, session sheet right) | tradeLabel, city, state, hours\|today, rating + reviewCount (Sample), prices.1 + prices.5 (Sample) | drawn sheet + needle pack | `data-sw-signature` seal tape, `data-hook="sheet"` | sheet lines type in (clip wipe, 60ms), tape darkens, PASS stamp lands; ≤ 1.1 s, h1 never hidden |
| 2 | `#services` | t-paper | "Will they draw MY idea / cover this / gun?" | ledger rows (mono margin column) | `each services` name/blurb, data-service CTA | — | tape rail + row tape tabs | rows rise, stagger |
| 3 | `#cycle` | t-deep | "Are the needles new?" | pinned story (gauge left, steps right) ≥ 640; stacked cards < 640 | process text | drawn gauge | `data-hook="cycle"` + tape (5 segments) | dial: needle sweeps 0→134→hold→down, tape darkens 1/5 per step |
| 4 | `#hygiene` | t-light | "Show me, don't tell me" | split checklist + stamp | 7 checks, sms link | drawn stamp | `data-hook="log"` checklist | quiet (no entrance) |
| 5 | `#tray` .break | t-mid | proof photo, breath | full-bleed photo | caption | tray (hero-B-2) | — | image unclip |
| 6 | `#prices` | t-paper | "Why a deposit, what will it cost" | ledger + deposit aside | `each proof.prices` item/from/to/unit/note, Sample pricing | — | `data-hook="ledger"` counters + closing tape | count 400ms, closing tape darkens |
| 7 | `#estimate` | t-deep | "Too small? how many sittings?" | tool (inputs left, printed sheet right) | prices 0/1/2/5 from facts in JS | drawn size marks | `data-hook="estimator"` | sheet re-prints on change |
| 8 | `#ear-map` | t-paper | "Gun? what metal?" | map (drawn ear + tag panel) | prices 3/4 | drawn ear | `data-hook="ear-map"` hotspots, tape tag | spots pulse once |
| 9 | `#proof` | t-accent | "Will I feel stupid asking?" | logged entries, offset 3-col | `each proof.reviews 0:6`, rating (Sample) | — | tape corners + CHECKED stamps | entries rise, stagger |
| 10 | `#faq` | t-light | plain-word answers | accordion | guarantee, prices.5 | — | — | none (quiet) |
| 11 | `#contact` | t-deep | book | form + side ledger (text/call/hours/ZIP) | phone, sms, hours\|table, areas\|list, zips (kit) | — | form, zip, opennow | none |
| — | footer | (deep, under a paper rail) | close the log | 3-col | disclaimer, licence (sample), guarantee, credits | — | LOG CLOSED tape (fully dark) | — |

## Rhythm gate
- 11 sections ✓. Hero `min-height: calc(100svh - var(--header-h))`, services' tape rail + heading peek in.
- Tones: deep · paper · deep · light · mid · paper · deep · paper · accent · light · deep → no dark pair touches, never 3 alike ✓.
- t-deep ✓, colour band `#proof` t-accent ✓, full-bleed `.break` `#tray` ✓.
- Hooks: sheet, cycle, log, ledger, estimator, ear-map + `data-sw-signature` tapes ✓.
- Layout families: document, ledger, story, split, bleed, ledger, tool, map, entries, accordion, form → 10 families, no neighbours alike ✓.
- One `#contact`; every CTA → `#contact`, `tel:` or `sms:` ✓.
- Required: every service (repeater), area + ZIP checker, hours + open-now, sample reviews (Sample tag), prices only in the sample ledger/estimator, footer disclaimer + credits ✓.
- Signature in hero, services, cycle, proof, prices, ear-map, footer ✓ (+ every section's top rail).

## Decisions (headless)
- Form has 4 steps (contract) instead of the concept's 3: what / details / when / you.
- One photo only (hero-B-2) as the `.break`; the hero is drawn (document object), per the media plan.
- Sitting estimator logic lives in app.js (reads `proof.prices` from sw-facts, prints no literal dollars); works as text + call without JS.
- Nose piercings: no nose drawing; the nostril price shares the ear-map helix/conch line (prices.4) in the copy. Ledger rows drop `unit` (only one price has it); hourly reads from the item name + note.
- CSS avoids adjacent closing braces (build rejects `}}` in CSS as a token).

## Round 1
Re-cut the only photo (exact fractional crop, x .29–1 / y .33–.66) so the grip lettering and sticker wall are gone, and set it in a graphite/rose duotone. Put trade and city in the h1 ("{{biz.city}} tattoos, logged clean.") and cut the hero to 88svh so Entry 01 peeks. Fixed the tape-label artefact (inline-block label). Shortened the estimator and ear-map h2s, gave the ear hint solid tag styling with a filled lobe example, split the ledger into Tattoo / Piercing / Consult & care, cut "No." prefixes. All 11 copy-1 replacements applied.

### Open issues
- Elevate "2-3 taped duotone prints" not done: the tattoo manifest has only 3 approved photos. hero-A is tattoo-A's, hero-C is tattoo-C's OG, and hero-B-2 is already on this page (a photo can't appear twice). The media-curator needs to approve more B frames (tray setup, sealed pouch, healed piece) before prints can be added.
- The h1 runs 3 lines at 1440 and 390 ("Philadelphia / tattoos, / logged clean."). At 13ch, "Philadelphia tattoos," can't fit on one line in the 5fr copy column.
- The ear map does not open on the lobe at load: the hotspots kit moves focus when it opens a card, which would scroll the page. The filled hint covers it.
