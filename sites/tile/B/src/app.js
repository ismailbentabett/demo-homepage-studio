/* tile-B signature + glue */
(function () {
 if (!window.SW) return;
 var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');
 if (reduced) return;

 /* Wait for fonts before measuring */
 document.fonts.ready.then(function () {
 if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
 });

 /* Intro: mosaic tiles clip-in staggered + straightedge slide (≤1.2s) */
 var mosaic = document.querySelector('.hero__mosaic');
 if (mosaic && typeof gsap !== 'undefined') {
 var frames = mosaic.querySelectorAll('.frame');
 gsap.set(frames, { clipPath: 'inset(0 0 100% 0)' });
 gsap.to(frames, {
 clipPath: 'inset(0)',
 duration: 0.5,
 stagger: 0.06,
 ease: 'power3.out',
 delay: 0.1
 });
 }

 /* Flatness story: pinned on ≥640px, lippage counter counts down */
 var flatSection = document.getElementById('flatness');
 if (flatSection && typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
 var counter = flatSection.querySelector('[data-count]');
 if (counter && window.matchMedia('(min-width: 640px)').matches) {
 ScrollTrigger.create({
 trigger: flatSection,
 start: 'top top',
 end: '+=165svh',
 pin: true,
 scrub: 0.5,
 onUpdate: function (self) {
 var progress = self.progress;
 var val = Math.round((1 - progress) * 4);
 if (val < 0) val = 0;
 counter.textContent = val;
 }
 });
 } else if (counter) {
 counter.textContent = '0';
 }
 }

 /* Estimator live sketch hook (delegates to kit estimator module) */
 /* The kit estimator handles data-est-* outputs; this just ensures refresh on input */
 var estForm = document.querySelector('[data-estimator] form');
 if (estForm) {
 estForm.addEventListener('input', function () {
 if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
 });
 }
})();