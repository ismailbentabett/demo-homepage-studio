# Blueprint — mechanic-B (Plain Code Auto Repair)

## Round 2 (reopened, fix + elevate)
Rebuilt src from scratch: the old CSS left the page white and section-level reveals hid everything below the hero. Elevate layout: the scroll now alternates "scan screen" (dark) and "printout" (warm paper) bands with a green proof band and a green footer, ten sections in ten different shapes. Elevate motion: no section is ever hidden (reveals only on small items, plus a CSS failsafe if the kit never starts); motion comes from the signature itself — the code types in the hero, every code line scrambles and resolves as it enters, the proof readings count, and one real scroll story: a brake pad wears from 10 mm to metal on a sticky stage (desktop), stacked drawn pads on phones. Photos are placeholders, so the hero carries a drawn live-data scope (O2 sensor traces) over the photo and the brake story is fully drawn.

Tone note: the #0D1117 tone is named `t-ink` in code (check-static reads `t-paper` as light). the concept is dark-led; the light tone (`t-light`, warm paper #E8E4DC) is the scan-tool printout. Dark stays the lead: hero, services, tools, routine, break; paper carries the human side (promise, reviews, brakes, contact).

| # | id | tone | purpose | layout family | content (tokens) | media | hooks | entrance |
|---|---|---|---|---|---|---|---|---|
| 1 | hero | t-paper (dark) | "Is this the kind of shop that explains?" | diagonal split (11): copy left, clipped photo panel right with drawn O2 scope | {{biz.city}}, {{biz.tradeLabel}}, {{hours\|today}}, {{proof.rating}} + Sample tag, [[call]] | hero | data-sw-signature (type-in), data-open-now | code types ≤0.5 s, h1 static |
| 2 | promise | t-light | "Will they do work without asking?" | statement split (huge h2 left, numbered rules right) | {{proof.prices.0.*}} + Sample pricing | — | — | none (quiet) |
| 3 | services | t-paper | every service, code + plain | sticky rail + readout rows | each services: {{#2}}, {{.short}}, {{.name}}, {{.blurb}}, [[quote]] | — | data-sw-signature ×8, data-scan meter | code lines scramble-resolve |
| 4 | proof | t-accent (color band) | "Can I trust the numbers?" | 4-up stat strip, minmax columns | {{proof.rating}}, {{proof.reviewCount}}, {{proof.years}}, {{proof.prices.0.*}}, {{proof.guarantee}}, Sample tags | — | data-count, data-sw-signature | numbers count |
| 5 | break | photo | breath + Billings highway texture | full-bleed `.break` | caption only | break | data-reveal="clip" | image unclips |
| 6 | reviews | t-light | "What did other people hear?" | staggered printout columns | each proof.reviews + Sample review tags | — | data-sw-signature, data-reveal-stagger | cards rise, staggered |
| 7 | tools | t-deep | "What's my car doing? Safe to drive?" | tabbed console | warning lights (8, drawn icons), code in plain English (sample list), fix-or-move-on (sample prices) | — | data-tabs, data-sw-signature | none (interactive) |
| 8 | brakes | t-light | "How long do my brakes have?" | scroll story: sticky drawn stage + 4 steps (desktop), stacked drawn cards (phone) | process copy only | — | data-story, data-sw-signature | pad wears with scroll (scrub) |
| 9 | routine | t-paper | "What happens after I drop it off?" | horizontal 5-step log | process copy | — | data-reveal-stagger | steps rise |
| 10 | contact | t-light | the one form + area/ZIP + hours | two-column: info rail + order slip form | [[call]], sms, email, {{hours\|table}}, open-now, {{biz.areas\|list}}, ZIP checker, 4-step form | — | data-lead, data-zip, data-open-now | none |
| — | footer | t-accent | close the loop: NO CODES · READY TO DRIVE | centered sign-off | {{demo.disclaimer}}, [[credits]] | — | data-sw-signature | resolves once |

## Rhythm gate
- Sections: 10 (+ footer). Hero `min-height: calc(100svh - var(--header-h) - 80px)` at ≥900 so the promise band peeks ~80px. ✓
- Tones in order: dark, paper, dark, green, photo, paper, deep, paper, dark, paper, green. Never 3 alike in a row; no two dark bands touch (the photo break sits between green and paper). ✓
- ≥1 t-deep (tools), ≥1 color band (proof + footer), ≥1 full-bleed `.break`. ✓
- Hooks: data-sw-signature, data-tabs, data-zip, data-lead, data-count, data-open-now, data-story. ✓
- Layout families: 10 different; no neighbours share one. ✓
- Exactly one #contact; every CTA → #contact, #tools (secondary hero entry the brief asks for), tel: or sms:. ✓
- Required content: all 8 services (repeater), area + ZIP checker, hours + open-now, sample reviews with tags, prices only in the sample price blocks, footer disclaimer + credits. ✓
- Signature in hero, services, proof, footer (concept list) + reviews, tools, brakes. ✓

## Open issues
- All mechanic stock is placeholder art; real photos replace it later. Design does not depend on them.
- hero-B1.jpg will not decode (OG image falls back to a plain color; the hero panel draws a green grid behind the scope, and the break uses a drawn dusk gradient and hides the broken-image glyph).

## Round 3
Elevate: first screen now reads machine → human (P0420 types in inside the LIVE DATA panel, left h1 = "Your car’s code, in plain English." + {{biz.tradeLabel}} in {{biz.city}}); photo slot replaced by a sharp drawn road-test trace (P0303 · CYL 3 · 74 MPH header, plain caption) in the same LIVE DATA chrome, because the placeholder photo read as a brown blur. Fixes: eyebrows cut to scan list + decoder, one CTA name "Book a drop-off", price nowrap on one baseline, brake pin made compact (sticky list, active step highlighted, no 350px gaps), phone scan rows use an inline "Price it" link, light-tone muted darkened to #3A4149, decoder brake verdict links to #brakes. The break slot `place-montana-highway` stays in media.json but is no longer placed.
