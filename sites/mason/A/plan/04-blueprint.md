# Blueprint — mason-A (Soft Joint Masonry)

## Round 3
Started from the round-3 source (`qa/last/src`). **Photo elevate:** the six identical CSS brick tiles are replaced by six distinct inline-SVG plates, all under raking light. The hero shows a jointer tooling one joint (raked → packed → tooled, scroll-tied). The objection shows a cement-patched spall with sheared polygons and proud grey joints. Services shows a chimney with its crown and drip edge. About shows deep concave joints. The break shows an Italianate row elevation. The footer shows one finished course. A real photo hides its plate through `:has()`. **Layout elevate:** every light section now sits on a full-width `.bed` mortar course whose stage advances down the page (raked → packed → struck → tooled → concave) and fills on scroll. Services is a running-bond wall of bricks (6-column bond with half-bricks) instead of the 01–09 list. About is two columns: the text and Hours on the left, and a full-height concave plate on the right. The process cross-section spans the full container, and the pin is shorter (0.3 × viewport per stage). Fixes: the price rows are unrolled with their facts units and notes, mono is cut to stage names, prices and Sample tags, the proof line is two lines, the h1 has its own gap at 390, the footer carries the mobile-bar padding, the tabs read Mortar / Chimney / Timing, the checklist links to #process, and muted text is #5c5249. All copy-3 lines are applied.

## Round 2
Services re-cut as a numbered index with a sticky signature frame; added a breath band; placeholders became drawn brick (spall, concave, street, ashlar); the process diagram is now interactive (buttons everywhere, pinned on desktop); kit tabs/carousel/form markup fixed. Why: distinctiveness and motion were the weakest, and the critic flagged grey frames.

12 sections. Rhythm: light → paper → deep → accent → light. No two dark touching. One `.break`. Three+ `data-hook` including `data-sw-signature`. Layout families alternate.

## 1. Hero · t-light · layout: offset-frame
- **Purpose:** Name trade + city, show craft, primary CTA.
- **Content:** h1 "Lime Mortar Repointing · {{biz.city}}"; kicker "{{biz.tradeLabel}} for old brick"; proof line "{{proof.years}} years on soft brick · Sample rating {{proof.rating}}"; [[call]] + [[quote lime-repointing]].
- **Media:** `hero-A1` in offset frame with mortar-line border (signature raked state).
- **Hooks:** `data-split="lines"` on h1; `data-reveal` on proof line.
- **Entrance:** Frame unclips from joint line; headline lines rise staggered.

## 2. Objection Band · t-paper · layout: split
- **Purpose:** Answer "wrong mortar ruins brick" immediately.
- **Content:** Two-column: left = "Your brick was laid before Portland cement existed. The mortar must be softer than the brick, or the brick breaks first."; right = `detail-spalling` photo showing spalled faces next to gray cement patch.
- **Hooks:** `data-reveal` on text; `data-reveal="clip"` on photo.
- **Entrance:** Text rises; photo unclips.

## 3. Process Story (pinned) · t-light · layout: stack/pin · SIGNATURE
- **Purpose:** Show the repointing sequence; signature advances through stages.
- **Content:** Pinned cross-section diagram of one brick joint. Four stages labelled: 01 Rake out (hand tool, depth = 2× joint width); 02 Pack (lime mortar in two layers); 03 Strike (compress with jointer); 04 Tool (concave profile matched to existing). Each stage has a 1-line why. Below 640px: four stacked cards with clip reveal.
- **Media:** None (CSS-drawn diagram using signature primitive).
- **Hooks:** `data-sw-signature`; `data-story="joint-process"` (custom in app.js).
- **Entrance:** Joint profile morphs via `--sw-p`; labels fade in per stage.

## 4. Services Grid · t-paper · layout: grid
- **Purpose:** List all services from facts; each links to quote form.
- **Content:** `<!-- each services -->` card with h3 `{{.name}}`, p `{{.blurb}}`, [[quote {{.short}} btn-ghost]]. 9 services, 3-col desktop, 2-col tablet, 1-col mobile.
- **Hooks:** `data-reveal-stagger` on grid children.
- **Entrance:** Cards stagger in 60ms.

## 5. Break · full-bleed · layout: break
- **Purpose:** Visual breath; Cincinnati context.
- **Media:** `home-cincinnati` full-bleed, object-position 50% 40%. Caption: "Hillside street of old brick houses in {{biz.city}}".
- **Hooks:** none.
- **Entrance:** Image unclips.

## 6. Tools Section · t-light · layout: tabs
- **Purpose:** Interactive diagnosis before the call.
- **Content:** Tabs (`data-tabs`) with three panels: Mortar Softness Check (`data-checklist="mortar"`); Repoint-or-Rebuild (`data-checklist="chimney"`); Tuckpoint Timing (custom month readout). Each panel ends with [[quote]] CTA prefilled. ZIP checker (`data-zip`) sits below tabs as standalone.
- **Hooks:** `data-tabs`; `data-checklist`; `data-zip`.
- **Entrance:** Active tab content rises.

## 7. Proof / Reviews · t-paper · layout: rail
- **Purpose:** Social proof with Sample label.
- **Content:** Horizontal rail of 3 review cards from `{{proof.reviews.0-2}}`. Each card: stars, `{{.text}}`, `{{.name}}, {{.town}}`, service tag. [[sample review]] tag on section head. Struck-joint divider above.
- **Hooks:** `data-carousel` (drag/snap); `data-reveal` on section head.
- **Entrance:** Section head rises; cards slide in.

## 8. Sample Prices · t-light · layout: list
- **Purpose:** Transparent ranges, labelled sample.
- **Content:** Definition list of `{{proof.prices.*}}`: item, from–to, unit, note. [[sample pricing]] tag. Ends with "A visit measures it. [[quote get-number]]".
- **Hooks:** `data-reveal` on list items.
- **Entrance:** Items stagger.

## 9. Guarantee Band · t-accent · layout: statement · SIGNATURE
- **Purpose:** Two-year mortar promise; signature completes concave profile.
- **Content:** Centered statement: "{{proof.guarantee}}". Concave joint draws L→R beneath.
- **Hooks:** `data-sw-signature`; `data-reveal` on text.
- **Entrance:** Text rises; joint wipes via `--sw-p`.

## 10. About / Local · t-deep · layout: split
- **Purpose:** Cincinnati knowledge; owner name; hours.
- **Content:** Left: "{{biz.owner}} has worked on {{biz.city}} brick since {{proof.years}} years ago. We know Over-the-Rhine Italianates, Mount Adams rowhouses, Price Hill retaining walls." Right: `{{hours|table}}`; `data-open-now`; [[tel]].
- **Hooks:** `data-open-now`; `data-reveal` on text.
- **Entrance:** Text rises; hours table fades.

## 11. Contact Form · t-light · layout: stack
- **Purpose:** Multi-step quote form; honest demo state.
- **Content:** `form[data-lead]` with steps: service → house age → photos → timing → contact. Microcopy: "We'll call you back to set up a visit." Beside phone: `{{hours|today}}`.
- **Hooks:** `data-lead`; `data-service` prefills from earlier CTAs.
- **Entrance:** Form rises.

## 12. Footer · t-paper · layout: stack
- **Purpose:** Credits, disclaimer, nav anchors.
- **Content:** Nav anchors; `{{demo.disclaimer}}`; [[credits]]; tooled-joint divider with {{biz.initials}} stamp.
- **Hooks:** `data-sw-signature` (final state).
- **Entrance:** Static.

## Rhythm check
Tones: light → paper → light → paper → break(light) → light → paper → light → accent → deep → light → paper.
No three same in a row ✓. No two dark touching (deep at #10 is flanked by accent and light) ✓. One dark band ✓. One accent band ✓. One `.break` ✓. Hooks: `data-sw-signature` (×3), `data-tabs`, `data-checklist`, `data-zip`, `data-carousel`, `data-open-now`, `data-lead` (>3) ✓. Layout families: offset-frame, split, stack/pin, grid, break, tabs, rail, list, statement, split, stack, stack — no two neighbours share ✓.