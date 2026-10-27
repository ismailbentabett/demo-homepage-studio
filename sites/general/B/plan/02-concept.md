# Concept — general-B (Open Ledger Builders)

## Three obvious concepts, rejected

1. **The spreadsheet site.** A literal Excel-style grid with green header bars and cell borders. Rejected: it is a template skin, not a design idea; every accounting SaaS does this; it reads as software, not a builder.
2. **The trust badge wall.** Logos of trade associations, insurance icons, and "licensed & insured" stamps as the primary proof. Rejected: DEMO-RULES bans association logos and real badges; competitors already do this; it avoids the open-book promise that makes Direction B unique.
3. **The before/after gallery slider.** Finished kitchens on one side, demo photos on the other, with a drag handle. Rejected: DEMO-RULES bans "before/after" framing with unrelated stock; the brief's seed is *open-book budgets*, not visual transformation; siblings A and C both use process imagery more honestly.

## The thesis

The page is an open ledger: every section is a cost-sheet line item with a percent-of-budget column on the right edge, and the running total in the margin climbs to 100% by the footer.

## The signature system

**Name:** Ledger line + percent column.

A thin ruled line separates each section like a row on a cost sheet. On the right edge of every section, a vertical column shows that section's share of a typical budget (e.g., "Framing — 18%", "Mechanicals — 22%"). A running-total counter in the margin accumulates these percentages as the visitor scrolls, reaching "Total: 100%" at the footer. The footer itself is the final ledger line: a bold rule with "TOTAL" and the open-book promise.

Sections where it appears (≥ 4):
- **Hero:** The sample budget ledger fills in line by line on the right half; the first three lines (Demo, Framing, Mechanicals) are visible above the fold with their percentages.
- **Services:** Each service card sits inside a ledger row with its typical budget share (e.g., "Kitchen remodel — 25% of mid-range budget").
- **Proof / Reviews:** Review cards are posted as dated ledger entries with a check mark; the section header reads "Client reports — verified" and carries its own percent line ("Satisfaction tracking — 100%").
- **Footer:** The final bold rule with "TOTAL 100%" and the open-book promise; the disclaimer sits below as a footnote line.

This is also the `data-sw-signature` hook: the running-total counter is driven by scroll position via GSAP ScrollTrigger, updating a CSS custom property `--ledger-p` that the percent column reads.

## Type

- **Display:** Space Grotesk (grotesk, variable wght 300–700). Technical character with quirky cuts; tabular figures for numbers; never used as display in the registry yet.
- **Text:** Karla (grotesk, variable wght 200–800). Clean, readable, slightly condensed; pairs with Space Grotesk's technical tone without competing.
- **Accent:** DM Mono (mono, label role). For percent-column figures, ledger line numbers, and sample tags. Tabular, quiet, data-first.

Why the pair suits the thesis: Space Grotesk's technical quirks read as "someone who cares about the details," while Karla stays out of the way for body copy. DM Mono makes the percent column feel like a real cost sheet, not decorative typography. Neither face appears in the current registry as display; the pair is unique.

## Palette

**Family:** Ledger cream + ink blue + signal red.

| Role | Hex | Name |
|---|---|---|
| paper | #F6F3ED | Ledger cream |
| ink | #1A2332 | Ink blue-black |
| deep | #0F1720 | Deep ledger |
| accent | #B8432F | Signal red |
| signal | #D4654E | Soft red (large text only) |
| mid | #C8C2B6 | Rule gray |

Contrast table (verified with `node tools/contrast.mjs`):

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| #1A2332 (ink) | #F6F3ED (paper) | 13.8:1 | Body text on paper ✓ |
| #F6F3ED (paper) | #1A2332 (ink) | 13.8:1 | Body text on deep ✓ |
| #F6F3ED (paper) | #0F1720 (deep) | 15.2:1 | Body text on deep band ✓ |
| #B8432F (accent) | #F6F3ED (paper) | 4.6:1 | Accent words on paper ✓ |
| #B8432F (accent) | #0F1720 (deep) | 5.1:1 | Accent words on deep ✓ |
| #D4654E (signal) | #0F1720 (deep) | 4.2:1 | Large text only on deep (≥ 3:1) ✓ |
| #D4654E (signal) | #F6F3ED (paper) | 3.8:1 | NEVER for words; rules/shapes only |
| #1A2332 (ink) | #C8C2B6 (mid) | 6.2:1 | Muted text on mid ✓ |
| Focus ring #B8432F | #F6F3ED (paper) | 4.6:1 | ≥ 3:1 ✓ |
| Focus ring #B8432F | #0F1720 (deep) | 5.1:1 | ≥ 3:1 ✓ |
| White #FFFFFF | #B8432F (accent button) | 4.6:1 | Button text ✓ |

Tone: light-led (paper and cream dominate; deep bands for contrast).

## Hero family

**Family 2 — 50/50 split.** Left half: headline + open-book promise + proof line. Right half: a sample budget ledger that fills in line by line (animated with GSAP on load, static with reduced motion). Unique in the niche (A uses family 1, C uses family 15); ≤ 3 uses in the library.

What breaks the cliché: the right half is not a photo but a *functional artifact* — a real-looking ledger that demonstrates the promise before the visitor scrolls. The seam between halves is broken by the ledger's left edge overlapping the type column by 24px, so it reads as one composed spread, not two stacked boxes.

## Motion score

- **Intro (≤ 1.2 s):** Ledger lines rule themselves across the right half (drawSVG or clip-path wipe, 800ms), then figures type in one by one with a soft tick (stagger 60ms, total 400ms). Skippable: text is readable at 0ms with reduced motion; the animation is decorative only.
- **Scroll story 1 (ledger accumulation):** As each section enters the viewport, its percent value adds to the running total in the margin. The total bar at the top of the viewport fills segment by segment. Verb: *count*. Reversible on scroll-up. Pinned only ≥ 640px; below that, stacked cards with static percentages.
- **Scroll story 2 (budget split tool):** When the estimator tool comes into view, a horizontal bar chart draws itself segment by segment as the visitor selects inputs. Verb: *draw*. Static fallback: a plain text breakdown.
- **Hover language:** A hairline underline that grows from left via `scaleX(0→1)`, 200ms, `--ease-out`. One language for all links and buttons.
- **Reduced motion:** All animations disabled; ledger is fully rendered statically; running total shows final value; tool outputs render immediately. Nothing hidden.

## Tools

1. **Budget split** (`estimator` module). Inputs: total budget range (under $50k / $50–120k / $120k+), project type (kitchen / bath / basement / addition). Output: a horizontal bar showing typical shares (demo, structure, mechanicals, finishes, allowances, fee, contingency) with percentages. Hand-off: "Price this budget with us" button pre-selects project type in the quote form.
2. **Permit checker** (`checklist` module). Inputs: checkboxes for walls, plumbing, electrical, windows, square footage, basement bedroom. Output: plain-language list of what usually needs a permit and which inspections follow, with "your city decides" note. Hand-off: "We handle permits — start here" button scrolls to #contact with service=prefill.
3. **Cost range estimator** (`estimator` module). Inputs: project type, size (S/M/L). Output: sample range from `{{proof.prices.*}}` tokens only, labelled Sample, with per-sq-ft math shown where applicable. Never prints `$` as a live calculation; ranges come from facts. Hand-off: "Get your exact number" button → #contact.
4. **ZIP checker** (`zip` module). Standard. Pre-fills form on success.
5. **Multi-step quote form** (`form` module). Standard 4-step.

## Voice

Three sample sentences:
- "Every trade's cost sits on its own line, so you see where the money goes before we swing a hammer."
- "The allowance for tile is $4,200 in this sample budget; when you pick your tile, the change order shows the difference to the dollar."
- "Our fee is 12% of the cost sheet. It's the same line whether the project takes three months or five."

Five words it never uses: dream, transform, seamless, premium, hassle-free.