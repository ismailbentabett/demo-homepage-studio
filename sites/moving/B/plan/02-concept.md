# Concept — moving-B

## Three rejected alternatives

1. **The dashboard.** A full-screen SaaS-style dashboard with gauges and charts. Rejected: looks like a software product, not a mover; no warmth or trust for someone handing over their grandmother's dresser.
2. **The clipboard checklist.** A literal clipboard graphic with checkboxes that fill as you scroll. Rejected: too close to A's inventory-tag system (both are paper artifacts with numbers); doesn't capture the "number before the truck" thesis.
3. **The calculator hero.** A generic quote calculator widget centered on a white background. Rejected: every competitor has one; it's a tool without a visual identity; doesn't carry through the page as a signature system.

## The thesis

The site is a load ledger: everything a mover usually keeps in their head (cubic feet per bedroom, hours per flight of stairs, truck fractions per junk pile) is put on the page as a running number the visitor builds themselves, and the sticky header shows a slim truck outline filling in real time.

## The signature system

**The running load meter.** A slim side-view truck outline (SVG, 48px tall) lives in the sticky header at desktop and as a pill in the mobile bar. Its cargo box fills left-to-right via `--sw-p` as the visitor uses any tool or scrolls past ledger-entry sections. Every section ends with a mono ledger line (`+ 2 flights: +0.5 h`, `+ couch to haul: 1/8 truck`) that types in on entry. Reviews are shown as ledger entries ("estimated 4 h · actual 3 h 50"). The closing contact section prints the full ledger as a ready-to-send summary. Hook: `data-sw-signature="load-meter"`.

Sections carrying the signature: hero, move-sizer output, junk-gauge output, process story, reviews, prices, contact, footer.

## Type

- **Display:** Space Grotesk (variable wght 300–700). Technical character from its Space Mono lineage; distinct from A's condensed Antonio. Used for headlines and the large hero number.
- **Text:** Outfit (variable wght 100–900). Clean geometric sans for body; pairs well with Space Grotesk's quirks. Distinct from A's Public Sans.
- **Accent / mono:** DM Mono (300/400/500). Every figure, hour, cubic foot, truck fraction, price range, and ledger line is set in DM Mono. This is the voice of the load ledger.

Registry check: Space Grotesk appears once in the library (as text for landscaper-B display); Outfit appears many times as text but never paired with Space Grotesk; DM Mono appears once as label for pool-B. Pair is unique. Display face count ≤ 3.

## Palette

**Family:** Truck Charcoal + Load-Strap Yellow + Cool Grey

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| deep (truck charcoal) | #1C1F23 | paper #E8E6E1 | 14.8:1 | body on dark bands, header bg |
| paper (cool grey) | #E8E6E1 | deep #1C1F23 | 14.8:1 | body on light bands |
| accent (load-strap yellow) | #D4A017 | deep #1C1F23 | 7.2:1 | numbers, active states, rules on dark |
| accent-ink (dark gold) | #7A5C00 | paper #E8E6E1 | 5.4:1 | accent words on light bands |
| signal (safety orange) | #C44B1C | deep #1C1F23 | 5.1:1 | CTAs, urgent labels |
| muted | #6B7178 | paper #E8E6E1 | 4.6:1 | captions, secondary text |
| rule | #3A3E44 | deep #1C1F23 | 1.8:1 | dividers on dark (decorative only) |

Tone: **dark-led**. The hero and most interactive sections sit on the deep charcoal; light paper bands break up the rhythm.

## Hero family

**7 — Tool-first hero.** The move sizer IS the hero: three taps (home size → stairs/elevator → boxes already packed) and a drawn truck fills beside the sample range. The phone number sits beside the tool output. A photo strip runs along the right edge at desktop (hero-B1 from manifest). At mobile the tool stacks above a single photo. Must work with JS off as a plain explanation + call button.

Unique in niche (A uses family 9). Library count for family 7: autotuneup-B, pest-C, landscaper-B = 3. This would be the 4th. Checking brief §2: "at most 3 times in the library." I need a different family.

**Revised hero family: 12 — Sticky photo, scrolling text.** A loaded truck interior photo (hero-B1) stays pinned at desktop while three short statements scroll past on the left: (1) "The number before the truck rolls," (2) "Size your move in three taps," (3) "Sample range, no commitment." At mobile: stacked, no pin. The tool sits immediately below as the first interactive band. Family 12 count in library: autotuneup-C, demolition-A = 2. This is the 3rd. Acceptable.

## Motion

- **Intro (≤ 1.2 s):** The truck outline in the header draws itself in one continuous SVG stroke (DrawSVG or clip-path), then the cargo box fills to a default 1/8 to show it's alive. Skippable via reduced motion (static truck at 1/8 fill).
- **Scroll story 1 (desktop ≥ 640 px, pinned):** "Where the hours go." A sample 4-hour move splits into three horizontal bars (Load · Drive · Unload) that grow and shrink as the visitor changes stairs/distance inputs in the adjacent tool. Height: `calc(3 * 55svh + 100svh)`. Phone: stacked cards with clip reveal, no pin.
- **Scroll story 2:** Junk-fill gauge. Tapping items (couch, mattress, fridge, bags) fills a drawn truck bed in eighths. Each tap adds a ledger line. Not pinned; it's an interactive section with entrance reveal.
- **Entrance patterns:** Text rises (opacity + translateY, 500 ms, 85% viewport). Images unclip (`clip-path: inset(0 0 100% 0)` → `inset(0)`). Ledger lines type in via staggered opacity on children.
- **Hover:** Hairline under item grows `scaleX(0→1)` from left, 200 ms. One language site-wide.
- **Reduced motion:** Truck outline static at current fill. All stories become complete static layouts. No typing animation on ledger lines (they appear instantly).

## Tools

1. **Room-by-room move sizer (hero).** Inputs: home type (studio / 1–4 bed), floors + stairs at each end, elevator yes/no, how much boxed. Output: crew size, truck size, sample hour range, sample price range from `{{proof.prices.*}}`. Hand-off: "Hold this number" scrolls to #contact with service prefilled.
2. **Truck-fill gauge (junk).** Tap items (couch, mattress, fridge, bags, boxes, hot tub). Each adds to a drawn truck bed in eighths. Output: "about 3/8 of a truck" with sample load ranges. Hand-off: "Send a photo of the pile" step of form.
3. **Stairs and long-carry check.** Inputs: floors, distance door-to-truck, narrowest turn. Output: plain-words notes ("sofa may need legs off," "third person saves an hour on three flights") and adjusted sample hours.
4. **ZIP checker.** Against `{{biz.zips}}`. Yes → form with ZIP prefilled. No → honest drive-time message + call CTA.
5. **Multi-step quote form (#contact).** Service → job details → when → contact. Honest thank-you: "Thanks, {name}. In your version this goes straight to your phone and inbox."

## Voice

Three sentences in the site's voice:
- "Two bedrooms, one flight of stairs, most things boxed: that's about three and a half hours with two movers."
- "Your garage pile looks like three-eighths of a truck. We'll measure it in eighths before we load, and you pay for what fits."
- "If the job runs past the high end of your written estimate, the extra time is on us."

Five words it will never use: stress-free, best, affordable, professional, guaranteed (unless from facts token with Sample label).