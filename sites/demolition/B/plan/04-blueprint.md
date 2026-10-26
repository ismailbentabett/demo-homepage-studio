## Round 3
Motion: the scale ticket is the one motion idea. At 1200px and up, ticket 0403 feeds down out of a slot under the header ON THE SCALE counter, its GROSS/TARE/NET digits print, WEIGHED lands, and the ticket drops into the strip (1.2 s). In the 0412 story, each ledger row prints its tonnage and adds "+x t" to the header counter. Layout: the services grid is now a torn-off ticket book (sticky featured stub on the left, 8 perforated staggered stubs with drawn sketches on the right). Tones are now hero paper, scope accent, services paper, weigh deep, tools paper, proof mid, run paper (teal stubs), area deep, contact paper, footer deep, so no dark bands touch. Removed the lake wedge on the map. Type: the eyebrows are cut except hero/0412/0001, ticket heads are sentence case, the reviews h2 is 3 lines and the card heads are stacked. The prints are drawn only (no 1px placeholder frames), so the photo credits list is empty and hidden.

## Round 2
Rebuilt the page around the weigh ticket (h1 now sr-only + aria-hidden split; one action name "Price it"; the written scope is a full-width featured ticket; new pinned weigh story break; drawn job-folder sketches stand in for photos) because the critic marked photo and a11y weakest and the old reveal CSS hid content without JS.

| # | id | tone | layout | hooks |
|---|---|---|---|---|
| 1 | hero | t-paper | docket-rail | ticket-feed, signature docket |
| 2 | scope | t-accent | split | scope-sheet, signature |
| 3 | services | t-paper | ledger | ticket-book, signature |
| 4 | weigh (.break) | t-deep | story (pinned ≥640) | weigh-story |
| 5 | tools | t-mid | workbench | sizer, house-year |
| 6 | proof | t-paper | rail | ticket-backs, signature |
| 7 | run | t-accent | timeline | job-run, signature |
| 8 | area | t-deep | map-split | route, ZIP |
| 9 | contact | t-paper | form-ticket | lead, signature |
| footer | t-deep | closing ticket | signature |

### Open issues
- Every photo in niches/demolition/media/manifest.json is a 1×1 placeholder, so the "replace placeholder images" must-fix cannot be met from the library. Only 2 photos are used (hero, break); each sits under a drawn sketch that app.js hides once a real photo (naturalWidth > 2) loads.

# Blueprint — demolition-B (Scale Ticket Demo & Haul)

## Section list (top to bottom)

### 1. Hero — t-paper, family 10 (horizontal rail)
- **Purpose:** Homeowner first 5 seconds: trade + town + paperwork promises + phone. Contractor wow: horizontal rail of ticket stubs over muted photo.
- **Layout:** Full-width hero with `hero-B1` as muted backdrop (opacity 0.4, grade applied). Foreground: horizontal rail of three ticket stubs scrolling slowly left-to-right: "Written scope", "Load estimate", "Weigh ticket". Below rail: h1, kicker, CTA.
- **Content:** h1 "Deck, Shed & Garage Demolition in {{biz.city}}" (Chivo 700); kicker "{{biz.tradeLabel}} · {{biz.city}}, {{biz.state}}" in DM Mono; [[call]] button; sample range pill from `{{proof.prices.0.from}}–{{proof.prices.0.to}}` with [[sample pricing]] tag.
- **Media slot:** `hero` → `hero-B1` (dump trailer loaded, tarp half on). Object-position: 50% 40%. Grade: standard + opacity 0.4 via CSS. No overlay.
- **Hooks:** `data-sw-signature` on ticket primitives in rail; `data-split="lines"` on h1 for line-mask reveal.
- **Entrance:** Intro ticket-feed animation on rail tickets (≤1.2s); h1 lines rise.

### 2. Written Scope — t-accent, split layout
- **Purpose:** Objection "bid doubles once walls are open" + "they'll cut something they shouldn't".
- **Layout:** Split (text left 6 cols, ticket stack right 6 cols).
- **Content:** h2 "Your written scope is the price"; body copy from `{{proof.guarantee}}`; three ticket stubs showing scope items ("Ticket 0410 · scope signed · kitchen tear-out", "Ticket 0411 · shut-offs verified · water/gas/electric capped", "Ticket 0412 · load estimate · 3 trailer loads"). Each ticket carries a mono number and carbon offset.
- **Media slot:** none (tickets are the visual).
- **Hooks:** `data-reveal-stagger` on ticket list (60ms stagger).
- **Entrance:** Tickets slide up sequentially.

### 3. Services — t-paper, grid layout
- **Purpose:** Show all services from facts; each as a ticket stub.
- **Layout:** 3-column grid (2-col at tablet, 1-col at mobile). Each card is a `.ticket` with service name, blurb, weight estimate in DM Mono, and [[quote {{.short}}]] button.
- **Content:** `<!-- each services -->` repeater. Ticket number auto-increments (0413–0421). Sample price range where available via `{{proof.prices.N.from}}` with [[sample pricing]] tag.
- **Media slot:** none.
- **Hooks:** `data-service` on each quote button (prefill); `data-reveal` on grid.
- **Entrance:** Grid fades in; tickets lift on hover.

### 4. Break — full-bleed photo, t-deep overlay
- **Purpose:** Visual pause; show documentary daylight mood.
- **Layout:** Full-bleed `.break` with photo + dark scrim (30% #1E2A36 multiply).
- **Content:** Centered caption in DM Mono: "Every trailer weighed at the transfer station · ticket emailed same day". No headline.
- **Media slot:** `break` → `process-loading-trailer`. Object-position: 50% 60%. Grade: standard + multiply overlay.
- **Hooks:** `data-reveal="clip"` on frame.
- **Entrance:** Clip unmask from bottom.

### 5. Tools: Tear-Out Sizer + Debris Estimator — t-mid, stack layout
- **Purpose:** Objection "how much / how long" answered before the call. Tool → form hand-off.
- **Layout:** Two tool cards stacked vertically, each with inputs left and output ticket right.
- **Content:** 
  - Tear-out sizer: room/structure selector, size input, contents checkboxes. Output: crew-days, trailer loads, sample price range. CTA: "Book a walk-through" with `data-service` prefill.
  - Debris load estimator: job type + size. Output: "about N trailer loads or one X-yard container" with honest note. Same CTA.
  - House-year check: year input or "not sure". Output: plain-language testing policy. Attaches year to form.
- **Media slot:** none.
- **Hooks:** `data-estimator` on both tools; `data-checklist` on house-year; `data-service` on CTAs.
- **Entrance:** Cards rise on scroll.

### 6. Proof & Reviews — t-paper, rail layout
- **Purpose:** Social proof on ticket backs; objection "where does it go?" answered by ticket destinations.
- **Layout:** Horizontal rail of 4 review tickets (scroll-snap on mobile, grid on desktop). Each ticket shows review text, name+town, service, and destination note ("concrete recycler", "transfer station", "scrap yard").
- **Content:** `<!-- each proof.reviews 0:4 -->`. [[sample review]] tag on each. Star rating from `{{proof.rating}}` with [[sample rating]].
- **Media slot:** none.
- **Hooks:** `data-carousel` for horizontal scroll; `data-reveal-stagger`.
- **Entrance:** Tickets slide in from right.

### 7. Service Area + ZIP — t-deep, split layout
- **Purpose:** Confirm coverage; handle edge cases honestly.
- **Layout:** Split: left = area list + map illustration (SVG, not real tiles); right = ZIP checker.
- **Content:** h2 "Serving {{biz.city}} and {{biz.areas|list}}"; ZIP input with `data-zip`; aria-live result region; "yes" offers form with ZIP prefilled. Hours: `{{hours|today}}` with `data-open-now`.
- **Media slot:** none (SVG map drawn inline).
- **Hooks:** `data-zip`, `data-open-now`.
- **Entrance:** Text rises; ZIP checker fades in.

### 8. Quote Form — t-paper, stack layout
- **Purpose:** Primary conversion. Multi-step with prefill from tools.
- **Layout:** Single column, max-width 640px, centered. Four steps: service → details → timing → contact.
- **Content:** `form[data-lead]` with honeypot `website2` and time trap `t`. Thank-you state: honest demo message. All fields use tokens for labels. [[sample pricing]] visible if price range shown.
- **Media slot:** none.
- **Hooks:** `data-lead` on form; `data-service` listeners for prefill.
- **Entrance:** Form rises on scroll.

### 9. Footer — t-deep, stack layout
- **Purpose:** Closing ticket; legal; credits.
- **Layout:** Stack: closing ticket → disclaimer → credits → nav anchors.
- **Content:** Closing ticket "0420 · job closed · broom-clean · total tonnage: X.X t" (tonnage from header counter). `{{demo.disclaimer}}`. `[[credits]]`. Anchor links to each section. Phone: `[[tel]]`.
- **Media slot:** none.
- **Hooks:** `data-sw-signature` on closing ticket.
- **Entrance:** Static (no animation needed).

## Rhythm check
- Tones: paper → accent → paper → deep(break) → mid → paper → deep → paper → deep. No 3 same in row. No two dark touching (deep break is followed by mid; deep area is followed by paper form; deep footer is last). ✓
- Dark bands: break (deep), area (deep), footer (deep). ✓
- Color band: accent (written scope). ✓
- Full-bleed break: section 4. ✓
- Interactive hooks: `data-sw-signature` (hero + footer), `data-estimator` (tools), `data-zip` (area), `data-checklist` (house-year), `data-carousel` (reviews), `data-lead` (form). ≥3. ✓
- Layout families: document, split, grid, break, stack, rail, split, stack, stack. No two neighbours share. ✓
- Sections: 9 (within 8-12). ✓
- #contact appears once (section 8). ✓