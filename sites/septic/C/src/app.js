/* septic-C signature: Rain Almanac Strip */
(function () {
 if (typeof SW === 'undefined') return;

 // Almanac active month via IntersectionObserver
 var bars = document.querySelectorAll('.almanac__bar');
 if (!bars.length) return;

 function setActive(month) {
 bars.forEach(function (b) {
 b.classList.toggle('is-active', parseInt(b.getAttribute('data-month'), 10) === month);
 });
 }

 // Map section ids to peak months for almanac activation
 var sectionMonths = {
 hero: new Date().getMonth() + 1,
 services: 4, // spring maintenance
 process: 6, // hurricane season prep
 tools: 8, // storm restarts
 area: 3, // real estate season
 proof: 9, // post-storm reviews
 prices: 1, // annual planning
 contact: new Date().getMonth() + 1,
 footer: new Date().getMonth() + 1
 };

 if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
 var sections = Object.keys(sectionMonths);
 sections.forEach(function (id) {
 var el = document.getElementById(id);
 if (!el) return;
 var obs = new IntersectionObserver(function (entries) {
 entries.forEach(function (entry) {
 if (entry.isIntersecting) {
 setActive(sectionMonths[id]);
 }
 });
 }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
 obs.observe(el);
 });
 } else {
 // Static: light current month
 setActive(new Date().getMonth() + 1);
 }

 // Intro: bayou line draw (SVG stroke-dashoffset)
 if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
 var mapFrame = document.querySelector('.hero__frame img');
 if (mapFrame) {
 mapFrame.addEventListener('load', function () {
 // No SVG map in stock photo; skip draw animation gracefully
 }, { once: true });
 }
 }
})();