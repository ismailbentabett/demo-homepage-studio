# Media Plan — landscaper-A (Tilth & Tine Landscape)

## Hero
- **hero-A1**: Stacked headline strip photo. Ground-level cross-section of turf edge meeting red clay soil, early morning side light. Crop: `object-position: 50% 60%` to keep soil layer visible in bottom third. Grade: global filter (saturate 0.8, contrast 1.08, sepia 0.12, brightness 0.95). Caption: "Turf edge and Piedmont red clay at ground level, side-lit."

## Slots

### break (full-bleed accent band visual)
- **process-grading**: Rake leveling soil in a residential yard. Crop: `object-position: 50% 40%`. Used as background for t-accent statement section with overlay. Caption: "Hands grading soil base before planting."

### process-aeration (lawn renovation section)
- **process-aeration**: Aerated lawn plugs on fescue grass. Crop: `object-position: 50% 50%`. Shows soil cores left on turf. Caption: "Core aeration plugs on fescue lawn after pass."

### process-soil-test (soil amendment section)
- **process-soil-test**: Soil sample in hand or trowel in turned earth. Crop: `object-position: 50% 50%`. Close tactile shot. Caption: "Red clay soil sample pulled from yard for pH test."

### process-planting (garden design section)
- **process-planting**: Hands placing a plant root ball into a hole. Crop: `object-position: 50% 60%`. No face visible. Caption: "Plant set into amended bed with root ball intact."

### detail-irrigation (drainage section)
- **detail-irrigation**: Sprinkler head or drip emitter close-up in residential garden. Crop: `object-position: 50% 50%`. Caption: "Drip emitter at base of shrub in Piedmont garden bed."

### region-carolina-home (service area context, optional use)
- **region-carolina-home**: Brick ranch or two-story suburban house with front yard in Southeast US. Crop: `object-position: 50% 70%` to show yard foreground. Caption: "Suburban Charlotte home with front yard bed line."

### plants-shade-south (garden design plant reference)
- **plants-shade-south**: Ferns, hostas, azaleas, camellias in shade. Crop: `object-position: 50% 50%`. Caption: "Shade-tolerant azalea and fern planting under tree canopy."

### hands-at-work (process texture, optional)
- **hands-at-work**: Gloved hands pulling weeds or planting. Crop: `object-position: 50% 50%`. Caption: "Gloved hands clearing bed edge before mulch."

### tools-hand (signature texture, optional)
- **tools-hand**: Garden fork, spade, shears resting on soil or grass. Crop: `object-position: 50% 60%`. Real used tools, not new. Caption: "Garden fork and spade on turned soil."

### material-stone (patio/walkway reference, optional)
- **material-stone**: Flagstone or limestone close-up texture. Crop: `object-position: 50% 50%`. Caption: "Natural flagstone surface texture for walkway."

### season-fall-leaves (seasonal cleanup reference, optional)
- **season-fall-leaves**: Deciduous leaves on lawn with rake. Crop: `object-position: 50% 70%`. Caption: "Fall leaves raked from fescue lawn."

## Rejections
- No hero-B* or hero-C* keys (wrong direction).
- No plants-native-texas (wrong region for Charlotte).
- No region-austin-home or region-savannah-street (wrong region).
- No crew-from-behind with visible logo risk (using hands-at-work instead for safety).
- No weather-rain (not needed for current section map; reserved if blueprint adds drainage photo).

## Notes
- All photos are placeholders per manifest; real Pexels assets will be curated when API key is available.
- Global grade applied uniformly: `saturate(0.8) contrast(1.08) sepia(0.12) brightness(0.95)`.
- No photo used twice. Hero key unique to this site (checked via check-unique).
- Captions describe frame content only, never "our work" or invented job details.