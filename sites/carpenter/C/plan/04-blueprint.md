# Blueprint — carpenter-C (Three Porches Carpentry)

## Round 3
Placeholders replaced by drawn blueprint treatments: an inline triple-decker elevation in the hero draws in floor by floor (phone crop frames the porch stack). Line drawings fill the post-rot, baluster, clapboard-rain and street frames. Checklist boxes are custom ticks with an accent pulse and a signal bar on the row. The h1 fill is clapboard lines, not the broken photo. Also: real alt text, a Sample stats tag, curly quotes, empty credits replaced by a drawing note, fixed the mobile-bar secondary button, and the menu button now hides on desktop.

10 sections. Rhythm: no 3 same tones in a row, no two dark touching, one dark band minimum, one color band, one full-bleed break, 3+ interactive hooks including signature, 3+ layout families, one #contact form.

## Section list

### 1. Hero — `t-dark` — layout: type-mask (family 3)
- Purpose: trade + city + action in 5 seconds.
- Content: kicker "{{biz.tradeLabel}} for {{biz.city}}'s stacked porches"; H1 "PORCHES" (type mask over hero-C1); subhead "{{proof.reviewCount}} sample reviews · {{proof.years}} yrs in {{biz.city}}"; CTAs [[call]] + [[quote porch-rebuilds]].
- Media: hero-C1 (stacked porches at dusk).
- Hooks: `data-split="chars"` on H1 for intro animation.
- Entrance: text rises, image unclips.

### 2. Floor 1: Safety & Structure — `t-paper` — layout: split (tool left, photo right)
- Purpose: answer "Is my porch safe?" and "They'll paint over rot."
- Content: floor label "1F · SAFETY & STRUCTURE"; H2 "What to check before someone gets hurt"; porch safety checklist tool; photo material-rotten-wood with caption "Soft wood at a post base, probe depth over 1/4 inch".
- Hooks: `data-checklist`, `data-sw-signature="floor-band"`.
- Entrance: baluster rule draws L→R, text rises.

### 3. Services: Floors & Posts, Framing — `t-dark` — layout: grid (3-col cards)
- Purpose: show core structural services with sample prices.
- Content: 3 service cards from facts (Porch floors & posts, Framing, Decks); each has name, blurb, [[sample pricing]], [[quote]] CTA.
- Hooks: `data-service` on each quote button.
- Entrance: stagger cards 60ms.

### 4. Break — full-bleed photo — `t-dark` (image fills, scrim overlay)
- Purpose: visual pause, reinforce Worcester housing stock.
- Media: region-victorian-house (full bleed, object-position 50% 40%).
- Caption: "Victorian-era clapboard facade with original trim profiles".
- Entrance: unclip.

### 5. Floor 2: Rails & Trim — `t-deep` — layout: split (photo left, content right)
- Purpose: answer "Won't match old profile" and show finish work.
- Content: floor label "2F · RAILS & TRIM"; H2 "Matched profiles, not flat pine"; detail-stair-balusters photo; molding-profile picker tool summary; services (Railings, Exterior trim, Doors).
- Hooks: `data-tabs` (profile picker simplified as tabs by era), `data-sw-signature="floor-band"`.
- Entrance: baluster rule draws, text rises.

### 6. Proof — `t-paper` — layout: stack (reviews vertical)
- Purpose: answer "Deposit taken, no show" with named-town reviews.
- Content: H2 "From {{biz.city}} porches"; 3 review cards (Fatima R. Worcester, Kevin D. Worcester, Luis C. Worcester); each has [[sample review]] tag, stars, service name, town.
- Hooks: `data-reveal-stagger`.
- Entrance: stagger 60ms.

### 7. Floor 3: Season & Booking — `t-accent` (color band) — layout: split (tool left, photo right)
- Purpose: answer "When can they start?" and drive booking.
- Content: floor label "3F · SEASON & BOOKING"; H2 "Book porches in April for June starts"; season planner tool; photo season-rain-wood with caption "Wet clapboard after rain, primed trim ready for paint cure window".
- Hooks: `data-tabs` (season planner), `data-sw-signature="floor-band"`.
- Entrance: baluster rule draws, text rises.

### 8. Service Area + ZIP — `t-dark` — layout: statement (centered text + ZIP checker)
- Purpose: confirm coverage and capture leads.
- Content: H2 "Serving {{biz.city}}, {{biz.areas|list}}"; ZIP checker; open-now badge.
- Hooks: `data-zip`, `data-open-now`.
- Entrance: text rises.

### 9. Contact Form — `t-paper` — layout: stack (form centered, max-width 640px)
- Purpose: primary conversion.
- Content: H2 "Price it"; multi-step form (owner/landlord → service → details → contact); honest thank-you state.
- Hooks: `data-lead`, id="contact".
- Entrance: text rises.

### 10. Footer — `t-dark` — layout: rail (horizontal credits)
- Purpose: legal, credits, demo disclaimer.
- Content: baluster rule top; {{biz.name}} · {{biz.city}}, MA; {{demo.disclaimer}}; [[credits]]; hours table; phone/email.
- Hooks: none.
- Entrance: none (always visible).

## Rhythm verification

Tones: dark → paper → dark → dark(break) → deep → paper → accent → dark → paper → dark.
- No 3 same in a row ✓ (dark-paper-dark-dark is max 2 dark touching? Wait: section 3 dark, section 4 break-dark = two dark touching. Fix: make break use a scrim but count as neutral, OR change section 3 to t-paper... but then paper-paper at 2-3. Better fix: change section 4 break to NOT be a tone section (it's a full-bleed image, not counted in tone rhythm per METHOD §4 which says ".break" is exempt). Confirmed: .break sections are exempt from tone-counting. So sequence is dark → paper → dark → [break] → deep → paper → accent → dark → paper → dark. No two dark touching ✓. No 3 same ✓. One dark band (multiple) ✓. One color band (accent) ✓. One .break ✓.
- Layout families: type-mask, split, grid, break, split, stack, split, statement, stack, rail = 6 families ✓. No two neighbours share ✓.
- Interactive hooks: data-checklist (1), data-tabs (2 instances), data-zip (1), data-open-now (1), data-lead (1), data-sw-signature (3 instances) = 7 hooks ✓. Signature present ✓.
- One #contact ✓.
- Required content: services ✓, service area + ZIP ✓, hours/open-now ✓, sample reviews ✓, sample prices (via estimator/cards with [[sample pricing]]) ✓, footer disclaimer + credits ✓.

## Round 4 (fix, from qa/last/src)
The triple-decker became the navigation: the hero porches are links (1F/2F/3F), and a margin house rail at 1400px and up builds each porch (posts, then rail, then balusters) on scroll as its floor enters. The safety check lights the chosen floor in rust. Distinctiveness and motion were the weakest categories; this answers both with one idea.
Also: copy-4 applied, the break moved between #proof and #floor-3 (no touching navies), the floor-1 plate redrawn tall and sticky, #area split with a drawn town map, #contact split with a call card, the form moved to kit nav markup, tabs moved to kit markup (panels visible with JS off), the mobile bar held until the hero buttons leave the screen, reveal hiding scoped to .sw-motion, and the empty credits list hidden with :empty.
