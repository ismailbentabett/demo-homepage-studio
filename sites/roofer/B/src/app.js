/* roofer-B · Squarecount · square count tool + the pinned-plan moments */
(function () {
  'use strict';
  var doc = document.documentElement;
  var fmt = function (n) { return n.toLocaleString('en-US'); };
  var one = function (n) { return (Math.round(n * 10) / 10).toFixed(1); };

  /* ---------- square count (a tool: works with or without motion) ---------- */
  var est = document.querySelector('[data-est]');
  var lastCount = '';
  if (est) {
    var ft = est.querySelector('#est-ft');
    var ftOut = est.querySelector('#est-ft-out');
    var q = function (s) { return est.querySelector(s); };
    var facets = est.querySelectorAll('.facet');
    var update = function () {
      var shape = est.querySelector('input[name="est-shape"]:checked');
      var pitch = est.querySelector('input[name="est-pitch"]:checked');
      if (!ft || !shape || !pitch) return;
      var foot = +ft.value, p = +pitch.value, w = +shape.value;
      var area = foot * 1.08 * p / 100;
      var total = area * (1 + w / 100);
      var lo = Math.round(total * 0.95), hi = Math.round(total * 1.05);
      if (ftOut) ftOut.textContent = fmt(foot) + ' sq ft';
      q('[data-est-area-calc]').textContent = fmt(foot) + ' × 1.08 eaves × ' + p.toFixed(2) + ' pitch';
      q('[data-est-area]').textContent = one(area);
      q('[data-est-waste]').textContent = w;
      q('[data-est-shape]').textContent = shape.getAttribute('data-label');
      q('[data-est-total]').textContent = one(total);
      q('[data-est-range]').textContent = lo + '–' + hi;
      q('[data-est-big]').textContent = one(total);
      var lit = Math.max(2, Math.min(7, Math.round(total / 6)));
      facets.forEach(function (f, i) { f.classList.toggle('is-counted', i < lit); });
      lastCount = 'About ' + lo + '–' + hi + ' squares, ' + shape.getAttribute('data-label') + ', ' + pitch.getAttribute('data-label') + ' pitch, ' + fmt(foot) + ' sq ft footprint.';
    };
    est.addEventListener('input', update);
    est.addEventListener('change', update);
    update();
    var send = est.querySelector('[data-count-send]');
    var details = document.getElementById('f-details');
    if (send && details) {
      send.addEventListener('click', function () {
        if (lastCount && !details.value) details.value = 'Rough count from the site: ' + lastCount;
      });
    }
  }

  /* ---------- motion (only with sw-motion, never under reduced motion) ---------- */
  if (!(window.SW && !SW.reduced && doc.classList.contains('sw-motion'))) return;
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  /* hero: the sheet lands, the pins drop, the tally counts. ≤ 1.2 s, no opacity on the h1. */
  var sheet = document.querySelector('.sheet');
  if (sheet) {
    var pins = sheet.querySelectorAll('.planbox--hero .pin');
    var tally = sheet.querySelector('[data-tally]');
    var pen = sheet.querySelector('.sheet__sum .pen-circle');
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from(sheet, { y: 40, duration: 0.7 }, 0)
      .from(pins, { y: -18, scale: 0.4, duration: 0.42, stagger: 0.06, ease: 'back.out(2)' }, 0.25);
    if (pen) tl.fromTo(pen, { '--sw-c': 0 }, { '--sw-c': 1, duration: 0.5, ease: 'power2.inOut' }, 0.7);
    if (tally) {
      var end = parseFloat(tally.getAttribute('data-tally')) || 0;
      var o = { v: 0 };
      tl.to(o, { v: end, duration: 0.8, ease: 'power2.out', onUpdate: function () { tally.textContent = one(o.v) + ' sq'; } }, 0.3);
    }
    var skip = function () { tl.progress(1); off(); };
    var off = function () { ['wheel', 'keydown', 'touchstart', 'pointerdown'].forEach(function (e) { window.removeEventListener(e, skip); }); };
    ['wheel', 'keydown', 'touchstart', 'pointerdown'].forEach(function (e) { window.addEventListener(e, skip, { passive: true, once: true }); });
    tl.eventCallback('onComplete', off);
  }

  /* findings: the leader draws from the margin plan to the photo, the pen circles the verdict */
  var mm = gsap.matchMedia();
  mm.add('(min-width: 1024px)', function () {
    document.querySelectorAll('[data-finding]').forEach(function (art) {
      var id = art.getAttribute('data-finding');
      var line = art.querySelector('.lead-line');
      var circle = art.querySelector('.finding__head .pen-circle');
      var rail = art.closest('.rail');
      var dockPin = rail ? rail.querySelector('[data-dock="' + id + '"]') : null;
      var t = gsap.timeline({ scrollTrigger: { trigger: art, start: 'top 72%', end: 'top 38%', scrub: 0.6 } });
      if (line) t.fromTo(line, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none' }, 0);
      if (circle) t.fromTo(circle, { '--sw-c': 0 }, { '--sw-c': 1, ease: 'none' }, 0.4);
      if (dockPin) {
        ScrollTrigger.create({
          trigger: art, start: 'top 60%', end: 'bottom 40%',
          onToggle: function (self) { dockPin.classList.toggle('is-active', self.isActive); }
        });
      }
    });
  });

  /* claim line: drawn once, the deductible circled last */
  var steps = document.querySelector('[data-hook="claim-line"]');
  if (steps) {
    var ded = steps.querySelector('.pen-word .pen-circle');
    var ct = gsap.timeline({ scrollTrigger: { trigger: steps, start: 'top 78%', once: true } });
    ct.fromTo(steps, { '--sw-p': 0 }, { '--sw-p': 1, duration: 1.1, ease: 'power2.inOut' })
      .from(steps.querySelectorAll('.pin'), { scale: 0.5, duration: 0.3, stagger: 0.07, ease: 'back.out(2)' }, 0);
    if (ded) ct.fromTo(ded, { '--sw-c': 0 }, { '--sw-c': 1, duration: 0.5, ease: 'power2.inOut' }, 0.9);
  }

  /* square count: facets fill one by one the first time the sheet comes in */
  if (est) {
    var cf = est.querySelectorAll('.planbox--count .facet');
    var big = est.querySelector('[data-est-big]');
    ScrollTrigger.create({
      trigger: est, start: 'top 70%', once: true,
      onEnter: function () {
        gsap.from(cf, { opacity: 0.15, duration: 0.35, stagger: 0.06, ease: 'power2.out' });
        if (big) {
          var target = parseFloat(big.textContent) || 0, c = { v: 0 };
          gsap.to(c, { v: target, duration: 0.7, ease: 'power2.out', onUpdate: function () { big.textContent = one(c.v); } });
        }
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
