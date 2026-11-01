# locksmith-B · Blueprint ("The honest locksmith issue")

| # | id | tone | purpose (objection / path) | layout family | content (tokens) | media keys | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | #cover | t-paper | 5-s answer: what a lockout costs, phone as the cover price | cover | masthead {{biz.short}}, issue line {{biz.city}}, {{biz.state}}; h1; Call {{biz.phone}}; cover flag errata → {{proof.prices.0.from}}–{{proof.prices.0.to}} fn¹; cover lines = TOC anchors p.02-p.10; proof line {{hours\|today}} · {{biz.areas\|list}} · {{proof.rating}} Sample | hero (4:5 frame, eager) | data-sw-signature (cover flag) | CSS print-run intro ≤1.0 s: masthead clip, photo unclip, cover lines stagger, strike draws at 800 ms (@property --sw-p) |
| 2 | #correction | t-accent | "starts low" bait named in one line | strip | "Correction" kicker + one sentence | — | — | none (quiet) |
| 3 | #bait | t-paper | "$29 on the phone, $300 at the door" | story (pinned ≥900) | p.02; 3 steps; the door bill grows line by line (words, no bait dollars), red pen strikes it, caret writes {{proof.prices.0.from}}–{{proof.prices.0.to}}; sidenote fn² Priya N. (Sample review) | — | data-hook="story" | GSAP scrub (pin ≥900); stacked + strike draw on view < 900 |
| 4 | #services | t-light | "Will he drill and sell me a lock?" + every service | index (numbered contents list + margin fig.) | p.03; repeater services (9) {{.name}} {{.blurb}} [[quote]]; fig.2 mortise lock line drawing; fn³ | — | — | stagger rise |
| 5 | #pullout | t-mid | "How do I spot a scam call?" | pullout (dashed perforation, -0.6deg ≥900) | p.04; checklist 6 yes/no; red ticks drawn; [[call]] "Call and ask us these six" | — | data-hook="checklist" | ticks draw on check |
| 6 | #door | t-paper | "Random guy, unmarked car" + "they'd open anyone's door" | article (8 + margin 3) | p.05; arrival text preview (static Sample text, {{biz.owner}}); ID check paragraph; fn⁴ Sofia T. | — | — | rise |
| 7 | #rekey | t-light | "Do I need new locks?" | tool (tabs left, lock counter right) | p.06; tabs smooth / sticky / broken → advice + {{proof.prices.2.*}} {{proof.prices.3.*}} Sample; fig.3 pin-tumbler cylinder; fig.4 house outline lock counter (checklist) → form (service + locks); fn⁵ Marcus D. | — | data-hook="rekey" | figure draws (stroke) |
| 8 | #rule | t-deep | thesis restated as a correction | break (full-bleed type) | errata "Replace every lock." ‸ "Rekey the ones that work." | — | — | strike draws on view |
| 9 | #letters | t-paper | "Are they real people near me?" | letters (lead letter on plate + 2-col letters) | p.07; 7 reviews repeater-by-index, name + town + service + Sample review; {{proof.rating}}/{{proof.reviewCount}} Sample rating | letters (decorative plate, alt="") | — | rise; count on rating |
| 10 | #prices | t-deep | prices without a phone call | table (typeset price list) | p.08; 6 rows {{proof.prices.N.*}}, brass tick + fn⁶ per note; Sample pricing; {{proof.license}} (sample) | — | — | rows stagger |
| 11 | #area | t-paper | "Do you come to me?" + hours | split (towns list / ZIP + hours) | p.09; {{biz.city}} + biz.areas repeater; ZIP checker; {{hours\|table}}; open-now | — | data-hook="zip" | rise |
| 12 | #contact | t-light | the one form | form (4 steps) | p.10; service → where (ZIP, locks) → when → you; honest thanks | — | — | none |
| — | footer | t-deep | colophon = the errata list | colophon | fn 1-6 collected; {{demo.disclaimer}}; [[credits]]; hours; licence (sample) | — | — | — |

## Rhythm gate
- Sections: 12 (footer not counted). Hero `min-height: calc(100svh - var(--header-h))`; the red correction strip peeks under it.
- Tones: paper · accent · paper · light · mid · paper · light · deep · paper · deep · paper · light. Never 3 lights in a row (cover/correction/bait = L C L; bait/services = L L then mid; door/rekey = L L then deep; area/contact = L L then footer). Dark bands never touch (deep · paper · deep).
- t-deep ×2 (#rule, #prices) ✓ · colour band #correction (t-accent) ✓ · full-bleed `.break` = #rule ✓.
- Hooks: data-sw-signature (cover), story, checklist, rekey, zip = 5 ✓.
- Layout families: 12 distinct, no neighbours alike ✓.
- One #contact; every CTA = tel:, sms: or #contact (prefill) ✓.
- Required content: 9 services ✓, area + ZIP ✓, hours + open-now (header + area) ✓, sample reviews with Sample tag ✓, prices only in the Sample price table / tool ranges ✓, footer disclaimer + credits ✓.
- Signature in concept.json sections: hero (cover flag) ✓, story (bill strike + caret) ✓, proof (footnoted letters) ✓, prices (brass tick + fn rows) ✓, checklist (red ticks) ✓, footer (errata list + struck "Issue closes") ✓; plus #rule and #services fn.

## Decisions (headless)
- **No bait dollar figures.** check-static refuses any $ amount not in proof.prices, so "$19" and "$300+" from the concept cannot appear. The bait is struck as words ("It starts low.") and the story's "growing quote" is a door bill that grows *line by line* (night fee, "had to drill", new lockset, "total at the end"), then the pen strikes it and writes the real sample range. Same story, no invented price.
- Sidenotes: margin column ≥1100; inline bordered note under 1100 (always visible, no toggle) — simpler and nothing hidden.
- Form is 4 steps (kit + check-static expect 4): what → where → when → you.
- Lock counter uses the kit `checklist` on checkboxes over the drawn house; the "Price N locks" hand-off is 6 lines of glue in app.js outside the motion guard (it is behaviour, not motion).
- Pin from 900px (concept) inside a `(min-width: 900px)` matchMedia; 640-899 gets the stacked version.
- Photos: only hero-B2 (typewriter, cover) and hero-A1 (letter, decorative plate). Drawn figures fill the rest.

## Open issues
- (none yet)
