# Copy Deck — tile-B (Feeler Gauge Tile Works)

## Hero
- Kicker: Feeler Gauge Tile Works
- H1: Tile Installation in Oakland
- Lead: We measure before we set.
- Proof line: Flatness ≤ 1/16" over 10 ft · {{proof.rating}} ({{proof.label}} rating)
- CTA primary: Price my room
- CTA secondary: Call [[tel]]

## Trust rail
- Open now: {{hours|today}}
- Area: Serving {{biz.city}}, {{biz.areas.0}}, {{biz.areas.1}} and {{biz.areas.2}}
- Experience: {{proof.years}} years in tile ({{proof.label}})
- License: Lic. {{proof.license}} ({{proof.label}})

## Flatness story
- H2: Flat to a sixteenth
- Lead: Big tiles show every dip. We check the floor with a ten-foot straightedge before we set anything.
- Gauge tag: TARGET ≤ 1/16" · MEASURED on site · TOOL 10-ft straightedge
- Story step 1: Raking light finds the high spots.
- Story step 2: Self-leveler fills the lows.
- Story step 3: Clips keep each tile flush.
- Static fallback caption: Left: floor before prep. Right: same floor after leveling and setting.
- CTA: Measure my floor → #contact

## Services
- H2: What we set
- Lead: Every job gets the same checks: flatness, slope, coverage.
- Service card pattern: {{.name}} · {{.blurb}} · [[quote {{.short}} btn-ghost]]
- Gauge tags per service (inline mono):
 - Large-Format Tile: FLATNESS ≤ 1/16"
 - Floor Tile Installation: SUBFLOOR stiffened + flattened
 - Shower Tile & Surrounds: SLOPE to drain measured
 - Shower Waterproofing: FLOOD TEST logged
 - Kitchen Backsplashes: LAYOUT drawn to outlets
 - Natural Stone: SEALED against stains
 - Mosaic & Pattern Work: CENTER LINE snapped
 - Heated Floors: MAT tested 3×
 - Tile Repair: COVERAGE checked

## Break
- Caption: Large-format porcelain in raking daylight. Even joints, no lippage.

## Estimator
- H2: Price your room
- Lead: Pick your tile size and pattern. Get a sample range from our current book.
- Tool labels: Room length (ft), Room width (ft), Tile size, Pattern
- Tile size options: 12×24, 24×48, 3×6 subway, hex mosaic
- Pattern options: Straight, Offset, Herringbone
- Output labels: Square footage, Waste factor, Boxes needed, Sample price range
- Sample tag: [[sample pricing]]
- CTA: Send these numbers → #contact (prefills service + size)
- No-JS fallback: "Call or text your room size for a sample range."

## Area
- H2: Do we come to your ZIP?
- Lead: We work in {{biz.city}} and nearby: {{biz.areas|list}}.
- ZIP checker label: Enter your ZIP
- ZIP yes: "Yes — we work in {{.}}. Start your estimate."
- ZIP no: "We don't cover {{.}} yet. Call [[tel]] to ask."
- CTA after yes: Price it → #contact (ZIP prefilled)

## Reviews
- H2: What homeowners say
- Lead: {{proof.reviewCount}} reviews · {{proof.rating}} average ({{proof.label}})
- Review card: "{{.text}}" — {{.name}}, {{.town}} · {{.service}}
- Sample tag on section: [[sample review]]

## Guarantee
- Statement: {{proof.guarantee}}
- Tag: [[sample guarantee]]
- Microcopy: That's our promise, in writing.

## Contact
- H2: Get your number
- Lead: Tell us about the room. We'll call to set up a measure.
- Form steps: Service → Job details → When → Contact
- Step labels: What needs tile?, Size and scope, Timing, Your info
- Thank-you: Thanks, {name}. In your version this goes straight to your phone and inbox.
- Microcopy under button: We'll call you back to set up a visit.
- Hours beside phone: {{hours|today}}

## Footer
- Disclaimer: {{demo.disclaimer}}
- Credits: [[credits]]
- Nav: Services · Area · Price it · Call
- Year: © {{year}} {{biz.short}}