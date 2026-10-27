# Media Plan — concrete-C

## Hero
- **hero-C1** → hero slot. Crop: `object-position: 50% 40%`. Treatment: grade only (no duotone); used as inset tile on topo map. Caption: "Red rock and granite grit above a Front Range driveway." Chosen for C-direction map hero; survives small crop. Not used by A or B heroes.

## Slots
- **story-1** → winter-story section (#3). Key: `scaling`. Crop: `object-position: 50% 60%`. Treatment: grade + duotone multiply #8C3B2E @ 18%. Caption: "Surface scaling after a winter of magnesium chloride exposure." Shows freeze-thaw damage honestly.
- **process-1** → base-spec section (#5). Key: `rebar`. Crop: `object-position: 50% 50%`. Treatment: grade only. Caption: "#4 rebar on chairs over compacted road base before the pour." Proves thickness/steel claim.
- **break** → full-bleed break (#6). Key: `finished-driveway`. Crop: `object-position: 50% 35%`. Treatment: grade only. Caption: "Broom-finished driveway at a split-level home in Manitou Springs." Contextual finished work, not a gallery glamour shot.
- **gallery-1** → reserved for future use if builder adds gallery. Key: `walkway`. Crop: `object-position: 50% 50%`. Treatment: grade only. Caption: "Front walk with broom texture for icy-morning grip."
- **gallery-2** → reserved. Key: `patio`. Crop: `object-position: 50% 45%`. Treatment: grade only. Caption: "Patio on a thick base beside ponderosa pine."
- **gallery-3** → reserved. Key: `steps`. Crop: `object-position: 50% 55%`. Treatment: grade only. Caption: "Poured steps with tooled edges at a steep Manitou lot."
- **gallery-4** → reserved. Key: `garage-floor`. Crop: `object-position: 50% 50%`. Treatment: grade only. Caption: "Sealed garage floor shedding winter slush."
- **gallery-5** → reserved. Key: `stamped`. Crop: `object-position: 50% 40%`. Treatment: grade only. Caption: "Flagstone-pattern stamped concrete in granite tones."
- **gallery-6** → reserved. Key: `exposed-aggregate`. Crop: `object-position: 50% 50%`. Treatment: grade only. Caption: "Exposed aggregate surface showing local stone."
- **gallery-7** → reserved. Key: `cracked-concrete`. Crop: `object-position: 50% 60%`. Treatment: grade only. Caption: "Random cracking from missing control joints."
- **gallery-8** → reserved. Key: `sunken-slab`. Crop: `object-position: 50% 55%`. Treatment: grade only. Caption: "Driveway panel settled toward the foundation."
- **gallery-9** → reserved. Key: `boots`. Crop: `object-position: 50% 70%`. Treatment: grade only. Caption: "Work boots on fresh broom finish, no face shown."
- **gallery-10** → reserved. Key: `crew-behind`. Crop: `object-position: 50% 40%`. Treatment: grade only. Caption: "Crew from behind finishing a pour at dawn."

## Rejections
No frames rejected: all keys are residential-scale, no faces to camera, no logos, no plates, no commercial sites, correct region (Front Range / Colorado). Hero-C1 is direction-specific and unused by siblings (A uses hero-A*, B uses hero-B*).

## Notes for builder
- Hero-C1 is the only hero photo; it must survive aggressive cropping for map tiles. If placeholder renders poorly, fall back to hero-C2 (snow on driveway edge) with same treatment.
- Signal color #E07A5F fails AA on paper; never use it for text on t-paper or t-mid backgrounds. It is safe only on t-deep.
- Contour SVG pattern should be defined once in style.css and reused via .contour-bg class.