COPY: needs copy-chief

# general-B, round 3 critique (fast mode, final round)

Screenshots exist this round (render.json lists 10 frames; static.json and render.json are both clean). Round 2 was scored blind; this round is scored from the frames, so several scores move, both up and down.

## Five-second test
- **1440-first.jpg:** "A Madison general contractor that shows me every line of a remodel budget, including its own fee. I can call (608) 555-0123 or press Price it. Why them: the cost sheet on the right shows their fee as line 05 in the same ink as everything else." It passes. The hero is a cost sheet, not a stock photo.
- **390-first.jpg:** same answer. The h1 runs 4 lines, Call and Price it are both above the fold, the mobile bar repeats them, and the sample cost sheet starts at the fold.

## firstScreen: 8.5
**What earned it:** the h1 "Madison remodeling budgets, open line by line." gives the trade, the city and the outcome in 7 words. The proof line shows hours, three areas and a 4.8 rating labelled Sample. The quiet outlined Call sits next to the loud red Price it. The phone number is in the header at 1440 and in the hero and mobile bar at 390. The signature (the cost sheet with the red "Our fee" row) is on the first screen. The services band peeks about 120 px (1440-first.jpg).
**Deductions:**
- 1440-first.jpg: the h1 sets in 4 lines at 1440 (more than 3), −0.5.
- 1440-first.jpg: the hero text column starts at x≈135, but every band below starts at x≈60 (services h2 in the same frame). The grid jumps between hero and page. Not a formal deduction, but it is why this is not a 9.

## distinctiveness: 8.5
**What earned it:** the ledger signature shows in the hero cost sheet, the services rows (the "LINE 01–09" column), the estimator output with its fee row in red (1440-full.jpg, 390 full crop), the process cards ("LINE 01–04"), the review entries with check ticks, and the footer TOTAL 100% (1440-full.jpg). Sibling C (1440-first.jpg of general-C) is a dark slab serif with a topo map, so nothing is shared.
**Deductions:**
- 1440-full.jpg, footer: the closing "TOTAL 100%" double rule is drawn in near-white on cream, so the rules are invisible and the signature's payoff reads as two loose words. −0.5. The full fix is under polish/a11y.
- 1440-first.jpg / 1440-scroll-50.jpg / 1440-scroll-75.jpg: mono micro-labels everywhere (kicker, SAMPLE BUDGET, PERMIT SET · SHEET A-1, the review meta, LINE labels) are a §5 tell. −0.5 (net with the signature credit: 8.5).

## type: 8.5
**What earned it:** the Space Grotesk display has tight tracking. Karla body text is ≥ 16 px at full ink. DM Mono with tabular figures is used for the percentages, the estimator and the phone (1440-first.jpg, 1440-full.jpg estimator).
**Deductions:**
- 1440-scroll-25.jpg: service names ("Older-home updates", "Accessible remodels") are set in small bold body text, barely larger than the description, while the "LINE 08" figure on the right is 2× larger. The hierarchy is inverted. −0.5.
- 1440-first.jpg + 1440-scroll-50.jpg: 3+ tiny tracked caps labels in one view. Already counted under distinctiveness, so not double-charged here.
- 1440-scroll-75.jpg: the h2 "Client reports — verified" uses an em dash, and so does the button "We handle permits — start here". The page has 2 dashes, which is under the limit. Noted, not deducted.

## layout: 8
**What earned it:** 11 sections, tones alternate (light, light, deep, paper, light, deep, paper, deep, accent, deep, light), there is a full-bleed drawing break (the house elevation), and the permits section is asymmetric (1440-full.jpg).
**Deductions:**
- 1440-scroll-25.jpg: the services list is 9 rows across about 2 000 px. Each row is text on the left and a "LINE nn" figure on the right, with ~500 px of empty cream between them. The density is flat and the middle columns are unused for two screens. −0.5.
- 1440-full.jpg: estimator, reviews, areas and contact are all centred narrow stacks. Four centred bands make the second half of the scroll one shape. −0.5.

## photo: 8
The niche photos are placeholders, so I judge the drawn treatments. The page currently carries no photographs at all (1440-full.jpg, 390-full.jpg).
**What earned it:** one line-drawing language runs through the page: blueprint-grid process cards, the permit sheet, the house elevation with red service runs, and the egress section. The stroke weight and ink/red palette stay consistent (1440-full.jpg, crops of 1440-full at the process and house sections).
**Deductions:**
- 1440-scroll-75.jpg: the egress diagram is the weakest drawing. The ladder, well and wall are loose lines with labels floating in a large empty box, and it reads as a sketch, not a section drawing. Combined with no image doing anything stock never does, this holds at 8.

## copy: 8 (capped by mustFix)
**What earned it:** the trade nouns are real ("egress window", "knob-and-tube", "frost line", "grab-bar backing", "change order"). "Price it" is used consistently. The microcopy "We'll call you back to set up a visit." is under the form. Every review is labelled Sample (1440-scroll-75.jpg).
**Deductions:**
- 1440-scroll-75.jpg / 1440-full.jpg #proof: the h2 "Client reports — verified" calls reviews labelled SAMPLE REVIEW "verified". That is an invented claim on fictional reviews. **mustFix**, caps copy at 8.

## mobile: 8 (capped by mustFix)
**What earned it:** 390-first.jpg has both actions above the fold, a 4-line h1 and a mobile bar with Call and Price it. render.json shows no overflow at 320 or 390. The estimator is usable at 390 with the fee row in red, and the process becomes a swipe rail with 48 px arrow buttons (390-full.jpg).
**Deductions:**
- 390-full.jpg + 1440-full.jpg #contact: step 1 of the quote form shows 8 radios and then nothing. No "Next" button is visible between the last radio and "We'll call you back…". The visitor has no visible way to move forward, so the main conversion path is broken on the phone. **mustFix**.
- 390-full.jpg #areas: the ZIP field has no visible button or hint that it checks as you type. It is a label and an empty red box. −0.5, inside the cap.

## a11y: 8 (capped by mustFix)
**What earned it:** the skip link, labelled inputs, fieldset/legend, aria-live on the ZIP, estimator and checklist, and aria-hidden on the drawings (dist/index.html). 1440-rm-full.jpg and 390-rm-full.jpg show every section's content.
**Deductions:**
- 1440-full.jpg + 390-full.jpg + 1440-rm-full.jpg, footer: "Sample website by Site Sledge. Business details are illustrative." and "© 2026 Open Ledger Builders" are near-white on cream, about 1.1:1. They are effectively invisible. This is a contrast failure, and it also hides the demo disclosure. **mustFix**.

## motion: 8.5
**What earned it:** this round the scroll frames show the running-total bar along the top edge growing with scroll: ~25% in 1440-scroll-25.jpg, 50% in 1440-scroll-50.jpg, 75% in 1440-scroll-75.jpg. That is the thesis expressed in motion. The dist hooks add `data-tick` counters on the cost-sheet percentages and LINE numbers, `data-split` lines on the h1, a carousel, and the estimator bars. There are more than 3 hooks beyond reveals, and reduced motion shows everything (1440-rm-full.jpg). Raised from 8 because the frames now prove it.
**Deductions:**
- 1440-scroll-25/50/75.jpg: the bar is a 3 px line at the top of the viewport. It never lands anywhere: the footer TOTAL does not visibly receive it, so the "climbs to 100%" idea is only half-told.

## wow: 8.5
**What earned it:** the estimator output is set as a real cost sheet: project range labelled Sample price, a bar per trade, "Our fee" in red, a double rule and Total 100% (390-full.jpg estimator crop, 1440-full.jpg). A homeowner would use it.
**Deductions:**
- 1440-full.jpg footer: the payoff of the running total (TOTAL 100%) is visually broken (invisible rules, invisible fine print). That undercuts the second half of the moment. Held at 8.5.

## polish: 7.5
**What earned it:** the head is complete (SVG favicon, OG, JSON-LD GeneralContractor, theme-color, print styles). Static and render checks are clean, and the credit links are gone.
**Deductions:**
- 1440-full.jpg footer: the footer is classed `t-accent` but renders on cream, so its rules and muted text inherit white values. The disclaimer and © are also offset left of centre (x≈137 and x≈248 while everything else is centred). −0.5.
- 1440-first.jpg + 1440-scroll-50.jpg: drop shadows on the hero cost sheet and the permit sheet, which are static, non-floating cards. −0.5.

---

## Arithmetic
14×8.5 + 12×8.5 + 10×8.5 + 10×8 + 8×8 + 8×8 + 7×8 + 7×8 + 12×8.5 + 8×8.5 + 4×7.5
= 119 + 102 + 85 + 80 + 64 + 64 + 56 + 56 + 102 + 68 + 30
= 826 / 100 = **8.26**

## Must
1. **where:** 1440-scroll-75.jpg, #proof h2 | **problem:** "Client reports — verified" calls Sample-labelled fictional reviews verified (invented claim, DEMO-RULES) | **fix:** replace with "Client reports, line by line" or "What homeowners said about the cost sheet". No "verified" anywhere on the page.
2. **where:** 390-full.jpg and 1440-full.jpg, #contact step 1 | **problem:** no visible Next button after the 8 radios, so the visitor cannot move forward | **fix:** make `.lead-form__step[data-step="1"] .lead-form__next` render as a cream (#F6F3ED) button with ink text, min-height 48 px and full width under 640 px, directly under the fieldset. Confirm it in the next 390-full.jpg.
3. **where:** 1440-full.jpg / 390-full.jpg / 1440-rm-full.jpg, footer | **problem:** the disclaimer and © are near-white on cream (≈1.1:1), and the demo disclosure is unreadable | **fix:** pick one tone for the footer. Either let `.footer.t-accent` actually paint #B8432F (white text then passes), or switch the footer to `t-light` so `--muted` is #5A6170 and `--ink` is #1A2332. Either way the ledger-total rules must use a colour visible on that background.

## Should
1. **where:** 1440-scroll-25.jpg, #services `.ledger-row` | **problem:** service names are body-size bold, weaker than the LINE figure, and each row leaves ~500 px of dead width | **fix:** set the service name at the h3 step (≈1.375 rem Space Grotesk 600), move the blurb into a second column (name 4 cols / blurb 6 cols / LINE 2 cols), and cut the row padding so the 9 rows fit in about 1.2 screens.
2. **where:** 1440-first.jpg, hero | **problem:** the hero column starts at x≈135, the rest of the page at x≈60 | **fix:** put the hero on the same container and `--page-margin` as the sections below.
3. **where:** 1440-first.jpg, h1 | **problem:** 4 lines at 1440 | **fix:** widen the h1 measure to ~13ch, or clamp the max to ~4.5 rem, so it sets in 3 lines.
4. **where:** 1440-first.jpg, 1440-scroll-50.jpg | **problem:** shadows on static cards (hero cost sheet, permit sheet) | **fix:** remove the box-shadow and use the 1 px `--rule` border only.
5. **where:** 390-full.jpg, #areas | **problem:** the ZIP input has no action or hint | **fix:** add the microcopy "Type 5 digits, we check as you type" under the field, or a "Check" button in the cream button style.
6. **where:** 1440-full.jpg, footer | **problem:** the disclaimer and © sit off-centre (x≈137 / x≈248) | **fix:** set `text-align:center; margin-inline:auto` on both, inside the same max-width as `.ledger-total__rule`.
7. **where:** 1440-scroll-50.jpg, #permits button | **problem:** the em dash in "We handle permits — start here" | **fix:** use "Start a permit job".

## Elevate
1. **layout (8):** give the second half of the page a shape. Right now estimator, reviews, areas and contact are four centred narrow stacks. Make the reviews a two-column ledger (entry date and service in a left margin column, quote in the body column, tick in the right percent column), so the signature organises the proof. Make the contact a split, with the form on the left and a live "your cost sheet" summary on the right that fills in line by line as the visitor picks options.
2. **polish (7.5):** make the footer the designed close of the ledger. Pick one tone (deep ink or a real accent red). Set TOTAL 100% as the final row of the hero's cost sheet with the same double rule, and have the running-total bar land into it. Put the disclaimer, nav and © on that sheet's grid. This also resolves Must 3 and the distinctiveness/wow deductions at once.
