/* moving-A signature + scroll stories */
(function () {
 if (typeof SW === 'undefined') return;

 /* Inventory tag counter in sticky header */
 SW.mod('inventory-tag', function () {
 var el = document.querySelector('[data-sw-signature="inventory-tag"]');
 if (!el) return;

 var sections = [
 { id: 'hero', num: '001' },
 { id: 'trust', num: '008' },
 { id: 'process', num: '014' },
 { id: 'services', num: '032' },
 { id: 'estimate', num: '048' },
 { id: 'junk', num: '061' },
 { id: 'reviews', num: '074' },
 { id: 'prices', num: '089' },
 { id: 'area', num: '097' },
 { id: 'contact', num: '104' },
 { id: 'footer', num: '112' }
 ];

 var current = '001';

 if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
 var observer = new IntersectionObserver(
 function (entries) {
 entries.forEach(function (entry) {
 if (entry.isIntersecting) {
 var match = sections.find(function (s) { return s.id === entry.target.id; });
 if (match) {
 current = match.num;
 el.textContent = 'No. ' + current;
 }
 }
 });
 },
 { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
 );

 sections.forEach(function (s) {
 var sec = document.getElementById(s.id);
 if (sec) observer.observe(sec);
 });
 } else {
 el.textContent = 'No. 001';
 }
 });

 /* Dresser travel scroll story (desktop only, pinned) */
 SW.mod('dresser-story', function () {
 if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
 if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

 var processSection = document.getElementById('process');
 if (!processSection) return;

 var steps = processSection.querySelectorAll('.process-step');
 if (steps.length < 2) return;

 ScrollTrigger.matchMedia({
 '(min-width: 640px)': function () {
 steps.forEach(function (step, i) {
 gsap.from(step, {
 opacity: 0,
 x: -40,
 duration: 0.9,
 ease: 'power3.out',
 scrollTrigger: {
 trigger: step,
 start: 'top 85%',
 end: 'top 50%',
 toggleActions: 'play none none reverse'
 }
 });
 });
 }
 });
 });

 /* Filmstrip marquee pause on hover/focus is handled by kit marquee module */

 /* Init order */
 document.addEventListener('DOMContentLoaded', function () {
 document.fonts.ready.then(function () {
 if (typeof ScrollTrigger !== 'undefined') {
 ScrollTrigger.refresh();
 }
 });
 });
})();