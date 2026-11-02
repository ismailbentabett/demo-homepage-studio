# Concept — consulting-B (Plain Figures Business Advisors)

## Three alternatives, rejected

1. **The dashboard hero.** A fake analytics dashboard with charts and KPIs as the hero image. Rejected: it is the stock SaaS template every consulting firm uses; owners do not trust dashboards they cannot touch, and it violates brief §4 (no glass towers, no generic growth claims).
2. **The founder portrait + bio.** Owen T. at a desk with a bookshelf, three paragraphs of credentials. Rejected: brief §4 explicitly bans five-paragraph founder bios; the buyer trusts process over pedigree, and we have no real photo of Owen anyway.
3. **The literal worksheet screenshot.** A static PNG of an Excel sheet as the hero. Rejected: it reads as a template download, not a service; it cannot respond to the owner's own numbers; it fails the "works with JS off" requirement because a screenshot has no interactive fallback.

## The thesis

The site is the first hour of the engagement, done in the browser before any call: three live worksheets give a Frederick owner a real number about their own business, in plain words, and the call is to talk through a number they already hold.

## The signature system: Worksheet Grid

Every section sits on faint squared paper (CSS background-image of 24px grid lines at 8% opacity). A left margin column shows cell references (A1, B4, C7…) in DM Mono 12px, advancing per section. Each claim carries a small dotted-underline footnote that opens a plain-language formula explanation. Sample prices are rows in the same grid with a "Sample" tag in the status column. The grid appears in: hero (cell A1), services (B2–B9), proof (C3), prices (D4), area (E5), process (F6), contact (G7), footer (H8). Hook: `data-sw-signature="worksheet-grid"`.

## Type

- **Display + text:** DM Sans (variable, opsz 9–40, wght 100–1000). Used for headings at weight 600–700 and body at 400–500. Its optical-size axis makes it read cleanly from 14px body to 64px headlines without switching families.
- **Mono accent:** DM Mono (300, 400, 500). Every figure, input, cell reference, sample price, and tool output. It is the spreadsheet voice.
- Pair rationale: one family for human warmth, one for numerical precision. Both are OFL, both are in the catalog, neither is used by any existing site in the registry as display+mono combo.

## Palette: Graph Paper + Pencil + Ledger Green + Gap Orange

| Role | Hex | On | Ratio | Use |
|---|---|---|---|---|
| paper | #F6F4F0 | ink #1A1A1A | 15.8:1 | body bg, card bg |
| ink | #1A1A1A | paper #F6F4F0 | 15.8:1 | body text, headings |
| grid | #D8D4CC | paper #F6F4F0 | 1.4:1 | grid lines only, never text |
| deep | #1E2228 | paper #F6F4F0 | 13.9:1 | deep band bg |
| deep-ink | #F6F4F0 | deep #1E2228 | 13.9:1 | text on deep |
| green | #2D6A4F | paper #F6F4F0 | 7.2:1 | "covered" state, positive signals |
| orange | #B44A1E | paper #F6F4F0 | 5.1:1 | "gap" state, warning signals |
| muted | #6B6560 | paper #F6F4F0 | 5.0:1 | captions, footnotes |

Palette family name: "Graph Paper + Ledger Green". Unique in the registry (no other site uses this combination).

## Hero family: 7 (Tool-first)

The cash runway check IS the hero. Three inputs (cash on hand, monthly fixed costs, days to get paid), a horizontal bar that fills in months, a plain sentence result ("About X months. Y is your biggest lever."), and beside it the promise line and phone. With JS off: a worked example with sample numbers and the call button.

## Motion score

- **Intro (≤ 1.2 s):** The grid draws in from top-left (clip-path wipe on the background) and the first input receives focus. No autoplay animation after that. Skippable via reduced-motion.
- **Scroll story 1:** A sample monthly report fills its five lines one by one as it scrolls into view, each missing line circled in orange. Pinned at ≥ 640px, stacked cards below.
- **Scroll story 2:** The worksheet grid cell reference advances (A1 → H8) via IntersectionObserver updating a CSS custom property; the active cell highlights in green.
- **Entrance patterns:** Text rises (opacity + translateY, 500ms, 85% viewport). Images unclip (clip-path inset). Tool results appear instantly (no entrance animation on computed output).
- **Hover:** A hairline underline grows from left via scaleX(0→1), 200ms, on links and buttons. One language, whole site.
- **Reduced motion:** Grid is static, all content visible, no clip reveals, no stagger. Tool works identically.

## Tools

1. **Cash runway check** (hero): Inputs — cash, fixed costs, days to pay. Output — months bar + sentence + "Walk me through my runway" button → form prefill.
2. **Price gap worksheet** (tools section): Inputs — charge per job, hours per job, materials, overhead, billable hours. Output — true cost vs price, gap %, "Check my prices" button → form prefill.
3. **Reporting checklist** (tools section): Tick what you receive today. Output — five-number preview with missing lines highlighted in orange, "Set up my monthly numbers" → form prefill.
4. **ZIP checker** (area section): Against `biz.zips`. Answers in aria-live region; yes → form with ZIP prefilled.
5. **Multi-step request form** (#contact): Service → what's going on → when → contact. Never sends. Honest thank-you.

## Voice

Three sentences in the site's voice:
1. "Your cash covers about two months. Customers paying in 45 days is the biggest lever."
2. "Five numbers on one page by the tenth of every month, and a call to read them together."
3. "Your fee is fixed in writing before we start, and it does not go up mid-project."

Five words it will never use: unlock, potential, strategic, solutions, leverage.