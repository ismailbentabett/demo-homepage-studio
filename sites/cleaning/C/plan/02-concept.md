# Concept — cleaning-C (Riverfog Housekeeping)

## Three obvious concepts, rejected

1. **"Sparkling Clean Chattanooga" — smiling woman with spray bottle.** Every franchise does this; brief §4 bans it; reads as stock-template, not local.
2. **"Checklist & Receipt" — itemised quote builder front and center.** That is cleaning-B's axis (proof & tools); duplicating it wastes the C slot.
3. **"Minute-by-Minute Visit" — timeline of a 3-bed clean.** That is cleaning-A's axis (process); reusing it ignores the local-story direction entirely.

## The thesis

The page is a house almanac: each season opens as an editorial spread datelined to a Chattanooga neighborhood, and the signature is a brass season dial that turns as you scroll through the year's care.

## The signature system — Season Dial

A circular four-segment dial (Spring · Summer · Fall · Winter) in brass rule color, pinned top-right on desktop and as a sticky pill on mobile. Each quarter lights when its almanac spread enters view; the active segment fills via `--sw-p`. Reused in:
- **Hero:** masthead carries the dial at small scale beside the edition label.
- **Almanac spreads (×4):** each spread opens with the dial turning to that season; the dateline and seasonal task list sit beside it.
- **Proof band:** review cards carry the month/season tag inside a mini dial segment.
- **Footer:** dial resets to current season; acts as a visual close.

Hook: `data-sw-signature="season-dial"`.

## Type

- **Display:** Fraunces — soft optical-size serif with warmth for editorial headlines; appears ≤ 3× in registry, 0× in cleaning niche.
- **Text:** Source Sans 3 — quiet, readable grotesk for body and UI; pairs well with Fraunces' old-style feel.
- **Accent:** DM Mono — for datelines, season tags, sample-price figures, and dial labels.

Pair rationale: Fraunces gives the almanac its editorial voice; Source Sans 3 keeps checklists and forms legible; DM Mono anchors data and timestamps without competing.

## Palette — Riverfog Charcoal + Evergreen + Brass

| Role | Hex | Use |
|------|-----|-----|
| Ink | #1E2420 | Body text on paper/light tones |
| Paper | #F3EFE6 | Light-tone backgrounds |
| Accent (Brass) | #B8945F | Rules, dial, borders only (no body text on paper) |
| Deep | #141916 | Dark-tone section backgrounds |
| Signal | #9E4428 | Alerts, required-field markers, large-text CTAs only |
| Mid | #3A4440 | Muted text on paper, rules on deep |

**Contrast table (verified):**
- #F3EFE6 on #1E2420: 13.77:1 ✓ body
- #F3EFE6 on #141916: 15.50:1 ✓ body on deep
- #1E2420 on #F3EFE6: 13.77:1 ✓ body inverse
- #1E2420 on #B8945F: 5.60:1 ✓ button text on brass
- #9E4428 on #F3EFE6: 5.52:1 ✓ signal large text only
- #B8945F on #141916: 6.30:1 ✓ brass rules on deep
- #B8945F on #F3EFE6: 2.45:1 ✗ decorative/rules only, never text

Focus ring: #B8945F on #141916 (6.30:1) and on #1E2420 (5.60:1) both ≥ 3:1 ✓.

## Hero family — 6 (Editorial Cover)

Unique in cleaning niche (A uses 7, B uses 10). Magazine-cover layout: masthead "Riverfog Housekeeping · The House Almanac, Spring Edition", cover photo of morning fog over the Tennessee River with a riverside neighborhood, cover lines ("Pollen week: what we add", "Old tubs, gently"), phone number in brass rule. No video.

## Motion score

- **Intro (≤ 1.2 s):** Fog overlay fades from 40% to 0%; cover lines rise in stagger (0.8 s total); skippable via `prefers-reduced-motion`.
- **Scroll stories:** (1) Season dial turns 90° at each almanac spread entry (draw). (2) Dateline underline wipes left-to-right on entry (wipe).
- **Hover:** Hairline brass rule grows from left via `scaleX` on links and cards.
- **Reduced motion:** Static dial showing current season; no fog fade; content fully visible.

## Tools

1. **Season Planner** (`season-planner` kit module): inputs = recurring frequency + month; output = 12-month strip with suggested add-ons and sample add-on prices from `{{proof.prices}}`; hand-off = prefills quote form with selected month + add-ons.
2. **Guest-Ready Countdown** (`countdown` kit module): inputs = arrival date + house size; output = latest booking date + two-visit plan with sample ranges; hand-off = prefills form with dates.
3. **ZIP Checker** (`zip` kit module): input = 5-digit ZIP; output = served/not from `{{biz.zips}}`.
4. **Multi-step Quote Form** (`form` kit module): steps = visit type → house size → frequency → pets/entry → preferred day → contact.

## Voice

Three sample sentences:
- "Late March on Signal Mountain: the pollen coats the porch rail yellow, and we add the screen wash to your regular list."
- "Your North Shore plaster needs dusting, not scrubbing; we keep water off the heart pine and use a pH-neutral soap."
- "Fourteen people for Thanksgiving? We come Tuesday, make up the guest rooms, and do the kitchen floor twice."

Five words never used: spotless, sparkling, eco-friendly, satisfaction, professional.