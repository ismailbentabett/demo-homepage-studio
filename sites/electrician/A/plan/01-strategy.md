# Strategy — electrician-A (Lineside Electric)

## 1. The one job
Homeowner in Columbus with an old panel, flickering lights or a new EV lands here and either calls `(614) 555-0110` or taps "Price it" within 8 seconds, confident this is a local pro who explains before selling.

## 2. Homeowner's first 5 seconds
- **h1:** "Columbus electrical work, drawn line by line." (trade + city + process promise, ≤ 7 words)
- **Kicker above h1:** "From the pole to the plug"
- **Primary CTA:** `[[quote panel-eval btn-primary]]` → "Price it"
- **Secondary CTA:** `[[call btn-ghost]]` visible in header + hero
- **Proof line under h1:** "Mon–Sat 7:30–5:30 · Upper Arlington to Westerville · 4.9 ★ (Sample rating)"
- **Hero visual:** offset framed photo of a clean labeled panel (family 5), one-line diagram symbol peeking below frame

## 3. Contractor's first 5 seconds
The page *is* a one-line diagram: a single vertical line with real electrical symbols connects every section from utility to device. No competitor in Columbus visualizes the system; they show men pointing at boxes. This becomes the signature.

## 4. Objections → sections
| Objection | Section that answers it |
|---|---|
| "Is this going to start a fire tonight?" | Hero kicker + Troubleshooting service card (plain cause language) |
| "They'll upsell a panel I don't need" | Old Panel Identifier tool → honest output + sample price range |
| "They'll cut holes in my plaster walls" | Process story (fishing wire, small cuts, patching) |
| "Can my house handle an EV charger?" | EV / Heat Pump Load Check tool → load calc result |
| "Will they pull the permit?" | Service upgrade card + review mentioning permit |
| "Do they serve my street?" | ZIP checker in service area band |
| "What does it cost?" | Sample pricing on every relevant service card + estimator ranges |
| "Are they open when I need them?" | Open-now widget in header + hours in footer |

## 5. Conversion paths
- **Primary:** `[[quote ...]]` buttons on every service card → scroll to `#contact` form with service prefilled.
- **Secondary:** `[[call]]` in sticky mobile bar (always thumb-reach on phone), header, and hero.
- **Tool → form hand-off:** Old Panel Identifier and EV Load Check end with a "Book this evaluation" button carrying `data-service`. ZIP checker "yes" state offers the form with ZIP prefilled.
- **Phone placement:** header right (desktop), sticky bottom bar (mobile < 900px), hero secondary button. Never more than one tap away.

## 6. What this direction is NOT
1. **Not B's panel schedule grid.** B uses two-column numbered circuits as its signature; A uses a single vertical line with diagram symbols. No circuit numbers, no breaker handles.
2. **Not C's room-by-room arch tour.** C organizes by bungalow rooms with arched doorways; A organizes by electrical system flow (utility → meter → main → circuits → devices → test). No arches, no floor plan.
3. **Not a generic "services + reviews" template.** No lightning-bolt clip art, no hazard stripes, no 60-item list, no mascot. The one-line diagram *is* the layout, not decoration applied to a standard grid.