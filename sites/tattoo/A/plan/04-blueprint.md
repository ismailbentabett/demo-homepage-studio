## Round 1 (fix + elevate)
Photo + first screen: the healed moth photo (hero-A) now sits under sheet 01 as the hero plate, with register marks on its corners and a vellum stencil slip over it. The healed portrait (hero-C, approved, not a sibling hero) is the 05 break. Both get one graphite-cool grade and a mat, so the sheets lie over real healed skin. hero-B-2 is B's hero, so the page has 2 photos, not 3.
Fixes: the timeline rule now runs through the dot centres. The cause was kit `ol[role=list]` padding:0 beating `.tl__days`, and the same bug made the text sit flush on the 390 rail. The h1 now carries trade + city. The phone shows as text in the header at 1024+ and in the proof line. The deposit ledger moved into #price as a 4-column sheet and dropped its duplicate button; Day 42 keeps "Book my six-week check". There is an S9 "No" sheet, the services are 2-up on phones, the card buttons say "Ask about this", the process sheets are shorter with Caveat notes, and the rules and timeline sit on sheets. A rating tally slip balances the reviews, the footer hours table is gone, and the card drop shadows are gone.

# tattoo-A · Blueprint (Vellum & Needle)

| # id | tone | purpose | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|
| 1 #top (hero) | t-paper | "Will they draw MY idea?" + first path | plate-split (sheet left 7, drawn plate right 5, sticky plate ≥900) | kicker {{biz.tradeLabel}} · {{biz.city}}; h1 "Drawn *for you.*"; 2 next statements; hygiene line; Book a consult / Text us a photo; proof line {{hours|today}} · {{proof.rating}} [[sample rating]] | drawn SVG forearm + sprig stencil | data-hook="intro" | violet transfer line draws (650ms), sheet settles; h1 painted at once |
| 2 #styles (services) | t-mid | "Do they do my style / cover-ups / piercing?" | sheet-grid (8 sheets S1-S8, 1 wide + 7) | `each services` name/blurb + [[quote]] | – | – | stagger rise |
| 3 #process | t-paper | "Will it be MY drawing?" (the wow) | sticky-board + 5 step sheets | 01 idea · 02 drawing · 03 stencil · 04 lines · 05 healed; Maya L. slip | SVG sprig in 5 states | data-sw-signature | board redraws per sheet (ScrollTrigger ≥900), phone: each sheet its own drawing |
| 4 #clean | t-deep | "Is it clean?" | rules-list (big statement left, numbered rules right) | 4 studio rules (process statements), piercing needle line | – | – | none (quiet) |
| 5 #healed (.break) | t-paper | "Does line work hold up healed?" | full-bleed photo + vellum strip caption | caption + "05 · healed" tab | healed (hero-A) | – | unclip |
| 6 #price (estimator) | t-mid | "What will it cost?" | tool-split (controls sheet left, result sheet over drawn limb right) | kit estimator over {{proof.prices}}, sittings band, "fine line under 2 cm" note, Sample | drawn limb | data-hook="estimator" | stencil outline redraws on change |
| 7 #reviews | t-paper | "Will they rush me?" | diagonal-slips (6 overlapping slips, staggered) | `each proof.reviews` + [[sample review]] + rating | – | data-hook="slips" | slips land one by one |
| 8 #aftercare | t-deep | "Will it blur / what's the deposit?" | timeline (day line across) + ledger | days 1-42, deposit {{proof.prices.3.*}} [[sample pricing]], {{proof.guarantee}} [[sample]] | – | data-hook="timeline" | violet line draws day 1 → 42 |
| 9 #cta | t-violet | Last nudge: send the screenshot | statement (centered, huge serif) | "Bring the screenshot." Book / Text | – | – | none |
| 10 #contact | t-paper | Book: area + ZIP + hours + 4-sheet form | form-split (info left, stacked form sheets right) | {{hours|table}}, ZIP check, areas list, form 4 steps | – | – | none |
| footer | t-deep | 06 · yours | end sheet | phone, email, areas, licence [[sample]], {{demo.disclaimer}}, [[credits]] | – | – | – |

## Rhythm gate
- 10 sections ✓. Hero `calc(100svh - var(--header-h))`; #styles pulls up by `--overlap` as a sheet so its tab and edge peek in ✓.
- Tones: paper, mid, paper, deep, paper, mid, paper, deep, violet, paper (+ deep footer after paper) → never 3 alike, deeps never touch ✓.
- t-deep ×2 ✓, colour band t-violet ✓, full-bleed `.break` #healed ✓.
- Hooks: intro, signature (process), estimator, slips, timeline = 5 ✓.
- Layout families: 10 different, no neighbours alike ✓.
- One #contact; every CTA → #contact, tel: or sms: ✓.
- Required content: 8 services (repeater), ZIP check + areas, hours table + open-now, sample reviews, prices only in estimator + deposit ledger (Sample), footer disclaimer + credits ✓.
- Signature in: hero (sheet 01 + reg marks), process, services (S-sheets), estimator (result sheet), reviews (slips), form (step sheets), footer (06 · yours) = every section listed in concept.json ✓.

## Decisions (headless)
- Drawn hero instead of a photo: the drawing carries the thesis; hero-A (healed luna moth) is used once, as the 05-healed break.
- Hero statements: "Drawn for you." is the h1; "Placed on you." / "Healed with you." sit beneath as the next two sheets' lines
  (no hero scrub, so the h1 is never replaced).
- Form uses 4 sheets (contract: 4 steps): idea · placement & size · when · you.
- Process "pin" is a sticky drawing board with 55svh step sheets (≈ 5×55svh + 100svh), board state driven by ScrollTrigger ≥900px.

## Open issues
(none yet)
