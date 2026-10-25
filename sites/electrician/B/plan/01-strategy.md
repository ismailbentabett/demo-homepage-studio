# Strategy — electrician-B (Torque & Tag Electric)

## 1. The one job
A San Antonio homeowner with an old panel, a tripping breaker or a new EV lands here and clicks "Price it" or calls within 8 seconds, confident the electrician will label every circuit and torque every lug to spec.

## 2. Homeowner's first 5 seconds
- H1: "San Antonio electrical work, written into your panel schedule."
- Kicker above h1: "Torque & Tag Electric · {{biz.city}}, {{biz.stateName}}"
- Primary button: "Price it" (anchor to #contact)
- Secondary link: "Call [[tel]]"
- Proof line under h1: "Mon–Sat 7–6 · Sample rating 4.8 (158 reviews)"
- Next band peeks 80px below hero fold.

## 3. Contractor's first 5 seconds
The page is a filled-in panel schedule: two columns of numbered circuits with amperage and labels, each circuit opening into a service, tool or review. Nobody in San Antonio shows their work as a labeled schedule; competitors show lightning bolts and hard-hat poses. This becomes the signature system.

## 4. Objections mapped to sections
1. "Is this going to start a fire tonight?" → Hero proof line + Breaker trip sorter tool (circuit-breaker section).
2. "They'll tell me I need a whole new panel when I don't." → Panel replacement service card with sample price range + honest "an electrician confirms on site" note.
3. "They'll cut holes in every wall of my plaster house." → Aluminum wiring repair story (process photo, small cuts patched mentioned in copy).
4. "I don't know if my house can handle an EV charger." → EV / heat pump load check tool (dedicated circuit section).
5. "Nobody will pull the permit and it will bite me when I sell." → Permit mention in panel and generator sections + sample review from inspector.
6. "What does it usually cost?" → Sample pricing block (labeled) + estimator tool output.
7. "Do you serve my neighborhood?" → ZIP checker in service-area section.
8. "Can I get a plan for the next outage?" → Generator sizer tool + interlock/standby service cards.

## 5. Conversion paths
- Primary: "Price it" button → multi-step quote form (#contact), pre-filled by any service/tool CTA via `data-service`.
- Secondary: Sticky mobile bar with call button (visible on scroll up, hides over form); desktop header phone link always visible.
- Tool → form hand-off: Breaker trip sorter, Generator sizer, EV load check each end with a "Price it" button carrying `data-service` that scrolls to #contact and selects the service.
- Phone placement: header right on desktop; sticky bottom bar on mobile (≥ 48px tap target); also in hero secondary link.

## 6. What this direction is NOT
1. NOT Direction A's one-line diagram process walk (no vertical line with symbols, no teal/copper palette, no offset framed hero).
2. NOT Direction C's room-by-room bungalow tour (no arch shapes, no warm plaster palette, no serif type lead).
3. NOT a generic service-list template: no lightning-bolt icons, no 60-item grid, no hazard stripes, no chat widget over the phone. The schedule metaphor replaces all three.