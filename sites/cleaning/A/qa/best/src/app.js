/* cleaning-A · Visit Timeline Tick signature + two scroll stories */
(function () {
  if (typeof SW === 'undefined') return;

  /* Story 1: pinned timeline rail with advancing clock and room ticks (draw) */
  SW.mod('timeline-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    var rail = document.querySelector('.timeline-rail');
    if (!rail || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    var cards = rail.querySelectorAll('.room-card');
    var times = ['0:00', '0:50', '1:40', '2:30', '3:10'];
    var clockEl = document.createElement('div');
    clockEl.className = 'timeline-clock mono';
    clockEl.setAttribute('aria-hidden', 'true');
    clockEl.textContent = '0:00';
    rail.appendChild(clockEl);

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: rail,
        start: 'top top+=80',
        end: 'bottom bottom-=80',
        scrub: 0.6,
        pin: true,
        matchMedia: '(min-width: 640px)'
      }
    });

    cards.forEach(function (card, i) {
      var tick = card.querySelector('.tick-line');
      tl.to(clockEl, { textContent: times[i + 1] || times[i], duration: 0.4, snap: { textContent: 1 }, ease: 'none' }, i * 0.8);
      if (tick) {
        tl.to(tick, { strokeDashoffset: 0, duration: 0.4, ease: 'power2.out' }, i * 0.8 + 0.1);
      }
    });

    ScrollTrigger.refresh();
  });

  /* Story 2: estimator timeline bar fills to duration (dial) + tick signature at end */
  SW.mod('estimator-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    var sketch = document.querySelector('[data-est-sketch]');
    if (!sketch || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    var fill = sketch.querySelector('.est-sketch__fill');
    if (!fill) return;

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: sketch,
        start: 'top 85%',
        end: 'top 40%',
        scrub: 0.4
      }
    });

    tl.fromTo(fill, { attr: { width: 0 } }, { attr: { width: 300 }, duration: 1, ease: 'none' });
    tl.to(sketch, { className: '+=is-complete', duration: 0.01 }, '-=0.05');
  });

  /* Signature intro: hero ticks draw sequentially (handled by CSS animation; ensure refresh after fonts) */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  }
})();