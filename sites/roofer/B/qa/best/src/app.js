/* roofer-B · Squarecount · square count tool + the pinned-plan moments */
(function () {
  'use strict';
  var doc = document.documentElement;
  var fmt = function (n) { return n.toLocaleString('en-US'); };
  var one = function (n) { return (Math.round(n * 10) / 10).toFixed(1); };

  /* ---------- evidence frames: the drawing stays until a real photo has loaded ---------- */
  document.querySelectorAll('.ev img, .hero__img').forEach(function (img) {
    var box = img.closest('.ev, .hero__surface');
    var check = function () { if (img.naturalWidth >= 64 && box) box.classList.add('has-photo'); };
    if (img.complete) check(); else img.addEventListener('load', check, { once: true });
  });

  /* ---------- typography for text that comes from the facts file ---------- */
  document.querySelectorAll('[data-typo]').forEach(function (el) {
    el.textContent = el.textContent
      .replace(/(\d)-(\d)/g, function (m, a, b) { return a + '–' + b; })
      .replace(/(\w)'(\w)/g, function (m, a, b) { return a + '’' + b; })
      .replace(/(^|[\s(])"/g, function (m, a) { return a + '“'; }).replace(/"/g, '”')
      .replace(/(^|[\s(])'/g, function (m, a) { return a + '‘'; }).replace(/'/g, '’');
  });

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

  /* hero: page 1 turns open beside the cover, the pins drop, the tally counts.
     ≤ 1.2 s, the cover and its h1 never move or fade. */
  var spread = document.querySelector('.spread');
  if (spread) {
    var wide = window.matchMedia('(min-width: 1024px)').matches;
    var pageOne = spread.querySelector('.page--one');
    var pins = spread.querySelectorAll(wide ? '.planbox--hero .pin' : '.planbox--strip .pin');
    var tallies = spread.querySelectorAll('[data-tally]');
    var pen = spread.querySelector('.sheet__sum .pen-circle');
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (wide && pageOne) tl.from(pageOne, { rotationY: -32, transformPerspective: 1800, transformOrigin: '0% 50%', duration: 0.75, ease: 'power3.out' }, 0);
    tl.from(pins, { y: -18, scale: 0.4, duration: 0.4, stagger: 0.05, ease: 'back.out(2)' }, 0.3);
    if (pen) tl.fromTo(pen, { '--sw-c': 0 }, { '--sw-c': 1, duration: 0.45, ease: 'power2.inOut' }, 0.7);
    tallies.forEach(function (tally) {
      var end = parseFloat(tally.getAttribute('data-tally')) || 0;
      var o = { v: 0 };
      tl.to(o, { v: end, duration: 0.8, ease: 'power2.out', onUpdate: function () { tally.textContent = one(o.v) + ' sq'; } }, 0.3);
    });
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
      var leader = art.querySelector('.ev__leader');
      var mark = art.querySelector('.ev__mk .pen-circle');
      var t = gsap.timeline({ scrollTrigger: { trigger: art, start: 'top 72%', end: 'top 30%', scrub: 0.6 } });
      if (line) t.fromTo(line, { '--sw-p': 0 }, { '--sw-p': 1, ease: 'none', duration: 1 }, 0);
      if (leader) t.fromTo(leader, { '--sw-d': 0 }, { '--sw-d': 1, ease: 'none', duration: 0.6 }, 1);
      if (mark) t.fromTo(mark, { '--sw-c': 0 }, { '--sw-c': 1, ease: 'none', duration: 0.6 }, 1.6);
      if (circle) t.fromTo(circle, { '--sw-c': 0 }, { '--sw-c': 1, ease: 'none', duration: 0.5 }, 1.8);
      if (dockPin) {
        ScrollTrigger.create({
          trigger: art, start: 'top 60%', end: 'bottom 40%',
          onToggle: function (self) { dockPin.classList.toggle('is-active', self.isActive); }
        });
      }
    });
  });

  /* every other evidence frame: the red pen circles its defect once, on arrival */
  document.querySelectorAll('.ev__mk .pen-circle').forEach(function (c) {
    if (c.closest('[data-finding]') || c.closest('.hero')) return;
    gsap.fromTo(c, { '--sw-c': 0 }, { '--sw-c': 1, duration: 0.6, ease: 'power2.inOut', scrollTrigger: { trigger: c.closest('.ev'), start: 'top 75%', once: true } });
  });
  var sig = document.querySelector('.sig-path');
  if (sig) {
    sig.style.strokeDasharray = 1;
    gsap.fromTo(sig, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut', scrollTrigger: { trigger: sig, start: 'top 85%', once: true } });
  }

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
    var cp = est.querySelectorAll('.planbox--count .pin');
    ScrollTrigger.create({
      trigger: est, start: 'top 70%', once: true,
      onEnter: function () {
        gsap.from(cf, { opacity: 0.15, duration: 0.35, stagger: 0.06, ease: 'power2.out' });
        gsap.from(cp, { y: -14, scale: 0.4, duration: 0.35, stagger: 0.06, delay: 0.35, ease: 'back.out(2)' });
      }
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
