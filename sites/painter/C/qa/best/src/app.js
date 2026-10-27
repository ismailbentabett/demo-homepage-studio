/* painter-C — Haint & Harbor: shutters swing open on the street + the porch ceiling painted coat by coat */
(function () {
  if (!window.SW || SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }

  ready(function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* 1. Signature intro (≤ 1.1 s, h1 untouched): the centre house's shutters start closed over
          the glass, swing out on their hinges, the windows light, then the street plaque is hung.
          The final state is the static HTML: shutters flung open, lamps on. */
    var street = document.querySelector('[data-sw-signature]');
    if (street) {
      var shutters = street.querySelectorAll('[data-shutters] .sh');
      var panes = street.querySelectorAll('[data-shutters] .pane');
      var plaque = street.querySelector('.plaque--street');
      var tl = gsap.timeline({ delay: 0.1, defaults: { ease: 'power3.out' } });
      shutters.forEach(function (sh, i) {
        tl.from(sh, { attr: { d: sh.getAttribute('data-closed') }, fill: '#24332c', duration: 0.62, ease: 'back.out(1.6)' }, 0.08 + (i % 4) * 0.05 + Math.floor(i / 4) * 0.08);
      });
      tl.from(panes, { fill: '#1a1c1e', attr: { opacity: 0.6 }, duration: 0.45, stagger: 0.05 }, 0.45);
      if (plaque) tl.from(plaque, { y: -10, rotation: -2, autoAlpha: 0, transformOrigin: '50% 0%', duration: 0.45 }, 0.7);
    }

    /* 2. Story: the piazza ceiling is painted as you scroll — mildewed grey, washed, primed,
          then haint blue in two sweeps across the bead boards. Pinned (CSS sticky) at ≥ 640px;
          on a phone the same sweeps scrub while the drawing crosses the screen. */
    var haint = document.getElementById('story-haint');
    var ceil = haint && haint.querySelector('.ceil');
    function paintTimeline() {
      var q = function (s) { return ceil.querySelector(s); };
      var edge = q('.ceil__edge');
      var t = gsap.timeline({ defaults: { ease: 'none' } });
      t.set(['.sweep--wash', '.sweep--prime', '.sweep--coat1', '.sweep--coat2'].map(q), { attr: { width: 0, x: 0 } })
        .set(q('.sweep--coat2'), { attr: { x: 600 } })
        .set(q('.ceil__spots'), { opacity: 0.9 })
        .set(edge, { attr: { x: -40 }, opacity: 0 });
      // step 1 → 2: wash (spots lift with it)
      t.to(q('.sweep--wash'), { attr: { width: 600 }, duration: 0.9 }, 1.15)
        .to(q('.ceil__spots'), { opacity: 0, duration: 0.7 }, 1.3)
        .fromTo(edge, { attr: { x: 0 }, opacity: 0.55 }, { attr: { x: 600 }, duration: 0.9, immediateRender: false }, 1.15)
      // step 3: primer
        .to(q('.sweep--prime'), { attr: { width: 600 }, duration: 0.9 }, 2.3)
        .fromTo(edge, { attr: { x: 0 } }, { attr: { x: 600 }, duration: 0.9, immediateRender: false }, 2.3)
      // step 4: two coats of haint blue, there and back
        .to(q('.sweep--coat1'), { attr: { width: 600 }, duration: 0.5 }, 3.45)
        .fromTo(edge, { attr: { x: 0 } }, { attr: { x: 600 }, duration: 0.5, immediateRender: false }, 3.45)
        .to(q('.sweep--coat2'), { attr: { width: 600, x: 0 }, duration: 0.5 }, 3.95)
        .fromTo(edge, { attr: { x: 600 } }, { attr: { x: -40 }, duration: 0.5, immediateRender: false }, 3.95)
        .to(edge, { opacity: 0, duration: 0.1 }, 4.45);
      return t;
    }

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        if (!haint || !ceil) return;
        var t = paintTimeline();
        var st = ScrollTrigger.create({
          trigger: haint,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          animation: t,
          onUpdate: function (self) {
            var step = Math.min(4, Math.floor(self.progress * 4) + 1);
            if (haint.getAttribute('data-step') !== String(step)) haint.setAttribute('data-step', String(step));
          }
        });
        haint.setAttribute('data-step', '1');
        return function () { st.kill(); t.progress(1).kill(); haint.removeAttribute('data-step'); };
      },
      '(max-width: 639px)': function () {
        if (!haint || !ceil) return;
        var t = paintTimeline();
        var st = ScrollTrigger.create({ trigger: ceil, start: 'top 85%', end: 'bottom 35%', scrub: 0.5, animation: t });
        return function () { st.kill(); t.progress(1).kill(); };
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

    /* 4. The two streets: houses settle onto their ground line one by one. */
    gsap.utils.toArray('.prep__item .row__house, .svc__house').forEach(function (h, i) {
      gsap.from(h, { yPercent: 8, duration: 0.9, ease: 'power3.out', delay: (i % 9) * 0.06,
        scrollTrigger: { trigger: h, start: 'top 92%', once: true } });
    });

    document.fonts && document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
