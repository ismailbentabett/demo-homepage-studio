/* nursery-A signature + scroll stories */
(function () {
 if (!window.SW) return;

 // Line-mask split for h1
 SW.mod('split', function () {
 var els = document.querySelectorAll('[data-split="lines"]');
 if (!els.length) return;
 els.forEach(function (el) {
 var text = el.textContent.trim();
 var lines = text.split(/\n/).filter(Boolean);
 if (lines.length <= 1) {
 el.innerHTML = '<span class="line"><span>' + text + '</span></span>';
 } else {
 el.innerHTML = lines.map(function (l) {
 return '<span class="line"><span>' + l.trim() + '</span></span>';
 }).join('');
 }
 });
 });

 // Signature moment: bench rail week counter on scroll
 if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
 document.fonts.ready.then(function () {
 if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
 gsap.registerPlugin(ScrollTrigger);

 // Refresh after fonts load
 ScrollTrigger.refresh();

 // Bench rail story: pinned on desktop only
 var sections = ['hero', 'services', 'process', 'calendar', 'reviews', 'prices', 'zip', 'contact'];
 var weekLabels = ['Week 0', 'Week 2', 'Week 4', 'Week 5', 'Week 6', 'Ready', 'Ready', 'Ready'];

 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 sections.forEach(function (id, i) {
 var sec = document.getElementById(id);
 if (!sec) return;
 ScrollTrigger.create({
 trigger: sec,
 start: 'top center',
 end: 'bottom center',
 onToggle: function (self) {
 if (self.isActive) {
 document.documentElement.style.setProperty('--bench-week', '"' + weekLabels[i] + '"');
 }
 }
 });
 });
 }
 });
 });
 }
})();