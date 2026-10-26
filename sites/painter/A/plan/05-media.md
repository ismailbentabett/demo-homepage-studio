# Media Plan — painter-A

## Hero
- **Key:** `hero-A1`
- **Section:** #hero (sticky-split right column)
- **Crop:** `object-position: 50% 40%` (focus on brush edge at trim)
- **Treatment:** grade `saturate(.85) contrast(1.05) sepia(.08)`; no overlay
- **Caption:** Brush cutting a crisp line at window trim against fresh primer

## Break
- **Key:** `region-richmond-rowhouse`
- **Section:** #break (full-bleed)
- **Crop:** `object-position: 50% 60%` (keep porch railings and brick texture in lower third)
- **Treatment:** grade + duotone multiply using `--deep` at 18% opacity for stripe continuity
- **Caption:** Brick rowhouses with porches in Richmond's Fan district

## Process Story (#prep)
- **Key:** `process-wash`
  - **Crop:** `object-position: 50% 30%` (water spray pattern visible)
  - **Treatment:** grade only
  - **Caption:** Pressure washing siding to remove chalked paint before scraping
- **Key:** `process-scrape`
  - **Crop:** `object-position: 40% 50%` (scraper blade and lifted paint centered)
  - **Treatment:** grade only
  - **Caption:** Scraper lifting old peeling paint from wood substrate
- **Key:** `process-prime`
  - **Crop:** `object-position: 50% 45%` (primer sheen on bare wood)
  - **Treatment:** grade only
  - **Caption:** Primer applied to bare wood after sanding for adhesion

## Service Rail Thumbnails (#services)
- **Key:** `detail-trim`
  - **Crop:** `object-position: 50% 50%`
  - **Treatment:** grade only
  - **Caption:** Freshly painted window trim with clean cut lines
- **Key:** `detail-cabinets`
  - **Crop:** `object-position: 50% 40%`
  - **Treatment:** grade only
  - **Caption:** Painted kitchen cabinets with sprayed factory-smooth finish
- **Key:** `room-living`
  - **Crop:** `object-position: 50% 55%`
  - **Treatment:** grade only
  - **Caption:** Freshly painted living room walls in calm neutral tone
- **Key:** `material-peeling`
  - **Crop:** `object-position: 50% 50%`
  - **Treatment:** grade only
  - **Caption:** Peeling exterior paint showing adhesion failure on older wood

## Proof & Detail Slots (#proof / #oldhouse context)
- **Key:** `tools-brushes`
  - **Crop:** `object-position: 50% 60%`
  - **Treatment:** grade only
  - **Caption:** Angled sash brushes and roller tray staged for cut-in work
- **Key:** `process-protect`
  - **Crop:** `object-position: 50% 70%`
  - **Treatment:** grade only
  - **Caption:** Drop cloths and plastic sheeting protecting floors and furniture during prep

## Notes
- All assets are placeholders per manifest; no real niche photography yet approved for painter.
- No video slots used (hero family is static photo).
- Each key used exactly once; no reuse within page.
- Alt text avoids generic "construction" or "worker" language; every caption names a painting-specific action or material.
- Builder must apply the single grade filter globally via CSS custom property so treatment stays consistent if assets swap later.