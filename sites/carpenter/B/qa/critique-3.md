COPY: ok

# carpenter-B: critique, round 3 (fast mode)

Round 2 was scored from the DOM only, with no screenshots. This round has a full screenshot set, so every score below comes from the images. The round-2 mustFix (footer credit `<a>` with no href) is gone: the footer now says "Drawings were made for this sample site; no stock photos are used" (1440-full.jpg footer), and `dist/index.html` has no `<a>` without an href. The ruler now shows on phones as a horizontal pole under the header (390-first.jpg), and the planner output is now a drawn elevation sheet (1440-scroll-75.jpg, 1440-full.jpg #tool-builtin).

## Five-second test
- **1440-first.jpg:** "A carpenter in Albany who measures your trim and gives you a written range before cutting. I can call (518) 555-0168 or press Price it. Why them: 4.8 (Sample), 19 years on Albany rowhouses, a parlor-door elevation drawn with real heights." Passes.
- **390-first.jpg:** Same answer. The h1 runs 3 lines, Call and Price it are both above the fold, the phone is in the header, and the horizontal story pole sits under the header. Passes.

## Categories

### firstScreen: 9.0
**Earned:** In 1440-first.jpg the h1 "Albany carpentry, measured before it's priced" gives trade, city and outcome in 6 words on 3 lines. The phone is in the header and in the hero. Under the h1 there is a proof line with a Sample rating and the open status. The signature is visible: the left ruler runs 0–132″ and the elevation callouts sit at 132/108/84/36/9″. This is an offset-frame hero, not photo-plus-text. In 390-first.jpg the h1 runs 3 lines, both actions are above the fold, and the mobile bar is present.
**Deductions:**
- −0.5: 1440-first.jpg: the next band barely shows. Only a hairline of the services tone is visible at y≈893, about 7px, where 40–120px is needed.
- −0.5: The action hierarchy flips between viewports. In the hero (1440-first.jpg) Call is the solid dark button and Price it is the outline. In the mobile bar (390-first.jpg) Price it is the loud orange button and Call is the quiet one. One action should be primary everywhere.
- Note: the hero is crowded with mono text: kicker, proof line, three chips, caption and ruler labels (1440-first.jpg). It reads as dense rather than calm.

### distinctiveness: 9.5
**Earned:** The page climbs the story pole. Each section label is a real rowhouse height, in order: 9″ baseboard, 30″ window sill, 36″ stoop rail, 84″ door head, 96″ bookcase top, 108″ picture rail, 116″ transom, 124″ frieze, 132″ crown (1440-full.jpg). The footer closes on a horizontal pole that ends on "132″ crown" (1440-full.jpg footer). The signature organises the page; it is not decoration. Cover the logo and the rowhouse elevation band, the probe diagram or the Sheet B-1 planner still names the business. Every image on the page is drawn in one drafting language, and no other library site looks like this.
**Deductions:**
- −0.5: Mono micro-labels and middle-dot meta strings appear in almost every view, for example "ALBANY TRIM · BUILT-INS · STAIRS" and "1 · PICK THE PROFILE…" (1440-first.jpg, 1440-scroll-50.jpg). Both are on the §5 tell list, even though they fit the drafting idea.

### type: 9.0
**Earned:** Anybody (condensed width) for display, Figtree for text, DM Mono as the listed accent. There is a strong scale-contrast moment: the large Anybody pull-quote next to small review text (1440-scroll-75.jpg). Quotes are curly, ranges use en-dashes ($12–$28, 7:30 am – 4 pm), display tracking is tight, and numbers are tabular in the hours and the Sheet B-1 table (1440-full.jpg).
**Deductions:**
- −0.5: 1440-scroll-50.jpg shows three or more tiny tracked-caps labels in one view ("84″ DOOR HEAD", "1 · PICK THE PROFILE CLOSEST TO YOURS", "2 · ROOM PERIMETER IN FEET"). The ruler tick labels in 1440-first.jpg are about 10px, under 13px.

### layout: 9.0
**Earned:** 1440-full.jpg has 10 sections with alternating tones: paper / mid / paper / deep / accent / paper / mid / paper / deep / paper / footer mid. No two dark bands touch: the deep rowhouse band hands off to the accent molding band. The layout families vary: offset-frame hero, a featured trio plus a ruled list, a 3-column probe tool, a full-bleed drawing break, a centred accent tool, split heading plus drawing sheet, a big quote plus a list, and a split area/ZIP.
**Deductions:**
- −0.5: The #schedule band ("Clear schedule, clear invoice.", 1440-full.jpg) does two jobs, shop hours and the tolerance guarantee, under a heading that belongs to neither.
- Note: the #area band is thin, with one row of town chips beside a ZIP box (1440-full.jpg). It is the weakest density beat and reads as filler between reviews and hours.

### photo: 9.0
**Earned:** There is no stock on the page. Every image is a drawn plate in one line weight and one ink: the hero door elevation, the service details, the probe section, the full-bleed Center Square rowhouse elevation, the molding profiles and the bookcase sheet (1440-full.jpg, cpb crops of the same). Together they read as one hand and one "shoot". The rowhouse band is a real full-bleed moment.
**Deductions:**
- −0.5 from 9.5: the plates do not tell a plan → work → result sequence. Nothing shows a finished room, so a homeowner sees the drawings and never the result (1440-full.jpg).

### copy: 9.0
**Earned:** Real trade nouns throughout: dutchman, plinth, backband, profile gauge, "have a knife ground for it", newel, "Bring us a 6″ offcut" (1440-scroll-50.jpg, 1440-full.jpg). There is honest "it depends" copy: "The depth decides it." Microcopy appears at moments of doubt: "Rather talk? (518) 555-0168 · Closed · opens tomorrow" next to the form. Every price, review, guarantee and the licence carries a Sample label. There are no em dashes.
**Deductions:**
- −0.5 from 9.5: The #schedule heading "Clear schedule, clear invoice." is lifted from a customer review (Omar H., in facts) and used as the company's own slogan, and it does not describe the hours table under it (1440-full.jpg).

### mobile: 9.0
**Earned:** In 390-first.jpg the story pole is re-cut as a horizontal ruler under the header, so the signature survives on the phone. The h1 runs 3 lines and both actions are above the fold. The sticky bar has Call and Price it. The services featured trio stacks with its drawings intact (390-full.jpg). The rot verdict card and the rowhouse band are re-cropped for the narrow width. The overflow check is clean at 320 and 390 (render.json). The form's offset frame stays inside the viewport.
**Deductions:**
- −0.5: In 390-full.jpg the molding picker squeezes four profile cards into 2 columns, and the card titles wrap to 2–3 lines ("Victorian casing with plinth"). The hero elevation is the desktop drawing scaled down, not re-cut; the callout labels crowd the right edge.

### a11y: 9.0
**Earned:** 1440-rm-full.jpg and 390-rm-full.jpg show every section and every drawing. Nothing is missing in reduced motion. The fieldsets, the labelled inputs on the planner and the molding perimeter, and the ZIP field all have visible labels (1440-full.jpg). There is a skip link and an ARIA live region for the pole (dist). The round-2 empty-anchor issue is fixed.
**Deductions:**
- −0.5 from 9.5: In the #services list, the grey body text (`--muted`) on the mid tone looks lighter than the rest of the page (1440-scroll-25.jpg rows 06–09). Contrast is close to the limit, so verify it is ≥ 4.5:1.

### motion: 9.0
**Earned:** The motion explains something. The active tick and its label climb the pole to each section's height as you scroll: 9″ baseboard at 25%, 84″ door head at 50%, 108″ picture rail at 75% (1440-scroll-25/50/75.jpg). A visitor could describe it in one sentence. The planner redraws as you type, and the probe diagram marks depth. Split-line h1, a staggered services reveal, a clip reveal and the pole tick give four distinct hooks (dist).
**Deductions:**
- −0.5: The active label lags or is misplaced. In 1440-scroll-25.jpg the label "9″ · baseboard" sits beside the 30″ tick while the on-screen section is the 30″ window sill. In 1440-scroll-75.jpg the active "108″ · picture rail" label is drawn over the static "108″" tick label, and the two overprint.
- −0.5 from 10: There is no visible evidence of the intro (the ruler drawing down 0–132″). Most other sections use the same reveal.

### wow: 9.5
**Earned:** There are two connected moments: the pole that climbs with the page, and a planner whose output is a drawn sheet. "SHEET B-1 · BUILT-IN WALL" shows 4 bays at 26″, a 132″ ceiling dimension, a 30″ base and a spec table (1440-scroll-75.jpg, 1440-full.jpg #tool-builtin). The output is in the signature's language, and a homeowner would print it and keep it. The rot probe gives an answer with a drawn section (1440-full.jpg #tool-rot).
**Deductions:**
- −0.5: The molding picker's output is still a text line plus a row of bars ("48 ft of wall → 53 linear ft … → 7 sticks at 8 ft", 1440-scroll-50.jpg). It is the weakest of the three tools.

### polish: 8.5
**Earned:** SVG favicon, OG image, JSON-LD, print and forced-colors media queries (dist). One square radius on buttons and cards, and pills only for tags. The footer is a designed close on the 132″ crown tick (1440-full.jpg).
**Deductions:**
- −0.5: Footer nav baseline (1440-full.jpg and 390-full.jpg footer): "Price it" sits about 10px below "Top / Services / Rot check / Reviews", and the phone link is offset again. It reads as a broken row.
- −0.5: Stray fragments. In 1440-full.jpg, in the #brick rowhouse band at the left edge (x≈64–80, y≈4130), an orange ".1"-like glyph is clipped by the band edge. In 1440-scroll-75.jpg the active pole label overprints the static "108″" label.

## Arithmetic
14×9.0 + 12×9.5 + 10×9.0 + 10×9.0 + 8×9.0 + 8×9.0 + 7×9.0 + 7×9.0 + 12×9.0 + 8×9.5 + 4×8.5
= 126 + 114 + 90 + 90 + 72 + 72 + 63 + 63 + 108 + 76 + 34 = **908 / 100 = 9.08**

Polish 8.5 is under the 9.0 floor. The weighted score is between 8.5 and 9.5, so the expected verdict is **ELEVATE**.

## Must
None. There are no DEMO-RULES breaches: every price, review, guarantee and the licence is labelled Sample, and the owner name "Ruth" in a review comes from facts.json. Reduced motion shows everything, and nothing breaks on the phone.

## Should
1. **#hero, 1440-first.jpg:** the next band does not show. Cap the hero so 60–90px of #services shows at 1440×900, e.g. `min-height: calc(100svh - var(--header-h) - 72px)`, or reduce the top padding above the kicker.
2. **#hero + mobile bar, 1440-first.jpg / 390-first.jpg:** the primary action flips between viewports. Choose one. Make "Price it" the solid button in the hero and the phone the outline, or the other way round, and match it in the mobile bar.
3. **Pole label, 1440-scroll-25.jpg / 1440-scroll-75.jpg:** the active label lags and overprints. Move the label with the tick (same transform, same timeline). Hide the static tick label (`opacity:0`) while it is the active one, so "108″" is not printed twice.
4. **Footer nav, 1440-full.jpg footer:** the links sit on different baselines. Put all six links (Top, Services, Rot check, Reviews, Price it, phone) on one flex row with `align-items: baseline` and the same font size. Do not let "Price it" wrap to its own line.
5. **#brick left edge, 1440-full.jpg y≈4130:** there is a clipped orange glyph. Remove or reposition the label so it is not cut by the band's left edge.
6. **#schedule, 1440-full.jpg:** the band does two jobs under a borrowed review line. Rename the heading for the hours, e.g. "Open 7:30 to 4, Saturday mornings too". Move the tolerance promise next to the reviews (it is proof), or give it its own short line.
7. **#services list, 1440-scroll-25.jpg:** the `--muted` text on the mid tone is light. Darken it until it measures ≥ 4.5:1 on the mid tone; a darker graphite is enough.
8. **#tool-molding cards at 390, 390-full.jpg:** the titles wrap 2–3 lines. Use one column of horizontal cards (profile drawing left, name right), or shorten the names to "Victorian + plinth" etc.
9. **Mono density, 1440-first.jpg / 1440-scroll-50.jpg:** cut the hero chips from three to one ("miters under 1/32″"). Use sentence case for step labels inside tools ("Pick the closest profile") so tracked caps are kept for the height tags alone.

## Elevate
- **polish (8.5):** Make the footer and the pole a single finished drawing. The footer ruler should be an exact continuation of the left story pole, with the same tick spacing and labels at the same heights, so the page ends on the top of the pole the visitor has climbed. Every tag, rule and label should use one stroke weight and one label style. The page should look like it came off one drafting table, with no part drawn by a different hand.
- **firstScreen (9.0):** Make the first screen show the pole working, not just sitting there. When the page loads, the 132″ elevation drawing should draw itself on the same 0–132″ scale as the margin ruler, with each callout lining up horizontally with its tick in the margin, so the ruler and the doorway read as one measured object. The visitor should get "they measure everything" from the picture before reading a word. Leave room under it for the services band to show.
