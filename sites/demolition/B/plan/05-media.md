# Media Plan — demolition-B (Scale Ticket Demo & Haul)

## Hero
- **Key:** `hero-B1`
- **Section:** 1 (Hero)
- **Crop:** `object-position: 50% 40%`
- **Treatment:** Standard grade (`saturate(0.85) contrast(1.05) sepia(0.08)`). Clipped to top-right corner of ticket document via CSS clip-path. No overlay.
- **Caption:** Dump trailer loaded with demolition debris, tarp half on. Documentary daylight, flat and honest. Shows what actually leaves the house.

## Slots

### break
- **Key:** `process-loading-trailer`
- **Section:** 4 (Break)
- **Crop:** `object-position: 50% 60%`
- **Treatment:** Standard grade + 30% #1E2A36 multiply overlay for deep band integration.
- **Caption:** Worker loading debris into a dump trailer from wheelbarrow. Full-bleed visual pause showing the haul-away moment.

### story-1
- **Key:** `process-deck-boards`
- **Section:** 3 (Services, optional inline with deck removal card)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade. Used only if builder adds an inline photo to the services grid; otherwise omitted.
- **Caption:** Deck boards being pried up and stacked. Shows careful deconstruction, not destruction.

### detail-1
- **Key:** `finished-swept-subfloor`
- **Section:** 6 (Proof, optional background texture or inline)
- **Crop:** `object-position: 50% 70%`
- **Treatment:** Standard grade. Shows the end state: broom-clean subfloor ready for the next trade.
- **Caption:** Swept subfloor after kitchen tear-out. Clean, level, ready for new flooring.

### detail-2
- **Key:** `material-scrap-metal`
- **Section:** 6 (Proof, supporting "where does it go" narrative)
- **Crop:** `object-position: 50% 50%`
- **Treatment:** Standard grade. Pile of sorted metal at scrap yard. Reinforces ticket destination claims.
- **Caption:** Sorted scrap metal pile at recycling yard. Metal goes to scrap, not landfill.

### gallery
- **Keys:** `["process-containment-zipper", "process-water-valve", "tool-pry-bar", "hands-gloved-pry"]`
- **Section:** Optional lightbox gallery after proof section (builder discretion)
- **Crop:** All `object-position: 50% 50%`
- **Treatment:** Standard grade. Four process/tool shots showing containment, shut-offs, tools, and gloved hands.
- **Captions:**
  - `process-containment-zipper`: Plastic containment wall with zipper door in doorway. Dust control in action.
  - `process-water-valve`: Water valve being shut off before wall opening. Safety first.
  - `tool-pry-bar`: Pry bar resting on exposed stud. The tool of careful demo.
  - `hands-gloved-pry`: Gloved hands pulling material with pry bar. Crew from behind, mask on.

## Rejections
- No faces presented as owner or crew lead.
- No readable signs, logos, license plates, or house numbers.
- No commercial-scale excavator imagery (wrong scale for residential demo).
- No before/after sliders with unrelated stock.
- All keys verified against `niches/demolition/media/manifest.json`.
- Hero key `hero-B1` not used by any sibling (demolition-A uses hero-A*, demolition-C uses hero-C*).

## Notes for Builder
- Hero photo is clipped into the ticket document corner; use `clip-path: polygon(...)` to create the folded-corner effect. The photo should feel like a printout attached to the scope sheet.
- Break photo needs the multiply overlay to sink into the deep band without losing readability.
- Gallery is optional; if included, use `data-lightbox` hook. If omitted, the four keys remain available for future use.
- All photos get the standard grade filter defined in 03-system.md. Never apply per-photo filters unless specified above.