/* painter-C — Haint & Harbor: shutter intro on the street + the four-coat porch story */
(function () {
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* 1. Signature intro (≤ 1.1 s, h1 untouched): the feature house's shutters swing open,
          its windows light, then the street plaque is hung. Final state = the static HTML. */
    var street = document.querySelector('[data-sw-signature]');
    if (street) {
      var left = street.querySelectorAll('.house--feature .sh--l');
      var right = street.querySelectorAll('.house--feature .sh--r');
      var panes = street.querySelectorAll('.house--feature rect[opacity=".6"]');
      var plaque = street.querySelector('.plaque--street');
      var tl = gsap.timeline({ delay: 0.15, defaults: { ease: 'power3.out' } });
      /* scaleX -1 around the hinge = the shutter folded over its window (closed) */
      tl.from(left, { scaleX: -1, transformOrigin: '100% 50%', duration: 0.7, stagger: 0.06 }, 0)
        .from(right, { scaleX: -1, transformOrigin: '0% 50%', duration: 0.7, stagger: 0.06 }, 0)
        .from(panes, { attr: { opacity: 0.95 }, fill: '#f2d9a0', duration: 0.5, stagger: 0.04 }, 0.35)
        .from(plaque, { y: -14, rotation: -3, autoAlpha: 0, transformOrigin: '50% 0%', duration: 0.5 }, 0.55);
    }

    /* 2. Story: the porch ceiling goes mildew → wash → prime → haint blue as you scroll (≥ 640px, CSS-sticky). */
    var haint = document.getElementById('story-haint');
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        if (!haint) return;
        haint.setAttribute('data-step', '1');
        var st = ScrollTrigger.create({
          trigger: haint,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: function (self) {
            var step = Math.min(4, Math.floor(self.progress * 4) + 1);
            if (haint.getAttribute('data-step') !== String(step)) haint.setAttribute('data-step', String(step));
          }
        });
        return function () { st.kill(); haint.removeAttribute('data-step'); };
      }
    });

    /* 3. The marsh: the sun climbs and the haze lifts while the band crosses the screen. */
    var sun = document.querySelector('.marsh__sun');
    var haze = document.querySelector('.marsh__haze');
    if (sun) {
      var mt = gsap.timeline({ scrollTrigger: { trigger: '#break', start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
      mt.fromTo(sun, { y: 60 }, { y: -50, ease: 'none' }, 0);
      if (haze) mt.fromTo(haze, { opacity: 0.32 }, { opacity: 0.08, ease: 'none' }, 0);
    }

    /* 4. Prep row: houses rise onto the street one by one (stagger handled by the kit; add a small settle). */
    gsap.utils.toArray('.prep__item .row__house').forEach(function (h, i) {
      gsap.from(h, { yPercent: 8, duration: 0.9, ease: 'power3.out', delay: i * 0.08,
        scrollTrigger: { trigger: h, start: 'top 90%', once: true } });
    });

    document.fonts && document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
