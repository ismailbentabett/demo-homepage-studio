/* consulting-A signature + scroll stories */
(function () {
 if (typeof SW === 'undefined') return;

 /* Line-mask h1 reveal handled by kit split module via data-split="lines" */

 /* Session counter story: advance "Thursday N of 6" as slips enter view */
 SW.mod('session-counter', function () {
 if (SW.reduced) return;
 var slips = document.querySelectorAll('.slip__title');
 if (!slips.length) return;

 var observer = new IntersectionObserver(
 function (entries) {
 entries.forEach(function (entry) {
 if (entry.isIntersecting) {
 entry.target.classList.add('is-counted');
 }
 });
 },
 { rootMargin: '0px 0px -20% 0px', threshold: 0.3 }
 );

 slips.forEach(function (el) {
 observer.observe(el);
 });
 });

 /* Plan stack stagger is handled by CSS + data-reveal-stagger in kit reveal */

 /* Hover language: hairline grow from left is pure CSS in style.css */
})();