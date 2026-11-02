# Copy Deck — junkremoval-B

## Hero (#hero)
- Kicker: Katy, TX · Junk Removal
- H1 line 1: Know the price and where it goes
- H1 line 2: before the truck comes
- Lead: Type any item. Get yes, no, or a note. Then see your load share and the sample range.
- Proof line: {{hours|today}} · {{biz.city}}, {{biz.state}} · {{proof.rating}} [[sample rating]]
- CTA primary: Price it → #contact
- CTA secondary: Call [[tel]] 
- Tool label: What do you need hauled?
- Tool placeholder: e.g. sofa, fridge, mattress, paint cans
- Tool chips: Sofa · Mattress · Fridge · Boxes · Treadmill · Patio set
- Tool answer yes: Yes, we take that.
- Tool answer no: No — here is where the county takes it.
- Tool answer note: Yes, with a note: {note}
- Tool load result: About {share} of the truck · Sample range: {from}–{to}

## Trust (#trust)
- Open now label: {{hours|today}}
- Years: {{proof.years}} years in Katy (Sample)
- Rating: {{proof.rating}} stars · {{proof.reviewCount}} reviews [[sample rating]]
- Guarantee: {{proof.guarantee}}
- Insured: Insured (Sample)

## Services (#services)
- Section kicker: What we haul
- Section heading: Filed by where it goes
- Sheet column headers: Donate · Recycle · Landfill
- CTA per card: Price it
- Repeater: {{services.*.name}}, {{services.*.blurb}}
- Destination assignment per service:
  - Furniture removal → Donate
  - Appliance removal → Recycle
  - Garage cleanouts → Mixed (primary: Landfill)
  - Move-out cleanouts → Mixed (primary: Donate)
  - Mattress removal → Recycle
  - Construction debris → Landfill
  - Flood-damaged items → Landfill
  - Donation drop-off → Donate
  - Short-notice hauling → Mixed
  - Junk removal by the load → Mixed

## Prices (#prices)
- Section kicker: Sample pricing
- Section heading: By the share of the truck
- Label: [[sample pricing]]
- Sheet headers: Item · Range · Destination
- Repeater: {{proof.prices.*.item}}, {{proof.prices.*.from}}–{{proof.prices.*.to}}, {{proof.prices.*.note}}
- Estimator label: Build your load
- Estimator result: Your sample range: {from}–{to} [[sample pricing]]

## Sort Story (#sort-story)
- Section kicker: One garage, sorted
- Section heading: Where twelve things went
- Items: Sofa → Donate · Mattress → Recycle · Fridge → Recycle · Boxes (4) → Donate · Treadmill → Recycle · Patio set → Landfill · Paint cans → No (county HHW) · TV → Recycle · Bike → Donate · Desk → Donate · Carpet scraps → Landfill · Metal shelving → Recycle

## Area (#area)
- Section kicker: Service area
- Section heading: Katy and seven towns around it
- Areas: {{biz.areas|list}}
- ZIP checker label: Check your ZIP
- ZIP placeholder: e.g. 77494
- ZIP yes: Yes, we cover {zip}.
- ZIP no: A little outside our usual area — call and we will tell you honestly.
- ZIP CTA: Price it

## Reviews (#reviews)
- Section kicker: Sample reviews
- Section heading: Filed under what left
- Label: [[sample review]]
- Repeater: {{proof.reviews.*.text}}, {{proof.reviews.*.name}}, {{proof.reviews.*.town}}, {{proof.reviews.*.service}}

## Process (#process)
- Section kicker: How the day goes
- Section heading: You point. We carry. We sort.
- Step 1: Point and price on site. The number you hear is the number on the sheet.
- Step 2: Crew carries, you do not lift. Dollies, straps, floors protected.
- Step 3: We sort: donate what is usable, recycle metal and foam, landfill last. Blue tape on anything you want to keep — we check drawers before anything goes.

## Contact (#contact)
- Section kicker: Get your number
- Section heading: Tell us what is going
- Form step labels: What → Details → When → You
- Step 1 label: What are we hauling?
- Step 2 label: Anything tricky? (stairs, tight gate, hoarder pile)
- Step 3 label: When works?
- Step 4 label: How do we reach you?
- Button: Get my number
- Microcopy under button: We will call you back to set up a visit.
- Thank-you: Thanks, {name}. In your version this goes straight to your phone and inbox.

## Footer (#footer)
- Disclaimer: {{demo.disclaimer}}
- Nav: Services · Pricing · Area · Reviews · Price it
- Signature line: Sort Sheet Hauling · Katy, TX · [[tel]]