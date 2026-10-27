/* electrician-A: the one-line diagram trace, two drawn stories, and the EV load check */
(function () {
  var root = document.documentElement;
  var motion = !(window.SW && SW.reduced) && root.classList.contains('sw-motion');

  /* Photos are optional on top of the drawings: show one only when it really loaded */
  document.querySelectorAll('.art-frame .art-photo img').forEach(function (img) {
    var frame = img.closest('.art-frame');
    function check() { if (img.naturalWidth > 8) frame.classList.add('has-photo'); }
    if (img.complete) check(); else img.addEventListener('load', check);
  });

  /* EV load check: works with or without motion */
  var ev = document.querySelector('[data-ev-load]');
  if (ev) {
    var out = ev.querySelector('[data-ev-result]');
    var dia = ev.querySelector('[data-ev-diagram]');
    var BASE = 30;
    var calc = function () {
      var svc = parseInt(ev.querySelector('#ev-service').value, 10) || 200;
      var amps = parseInt(ev.querySelector('#ev-amps').value, 10) || 40;
      var loads = [];
      ev.querySelectorAll('[name="loads"]:checked').forEach(function (c) {
        loads.push({ a: parseInt(c.value, 10) || 0, l: c.getAttribute('data-label') || '' });
      });
      var other = loads.reduce(function (s, x) { return s + x.a; }, 0);
      var total = BASE + other + amps;
      var safe = Math.round(svc * 0.8);
      var verdict, why;
      if (total <= safe) {
        verdict = 'Likely fits.';
        why = 'About ' + total + ' A of steady load against an 80% line of ' + safe + ' A on a ' + svc + ' A service. We confirm with a load calculation before we pull the permit.';
      } else if (total <= svc) {
        verdict = 'Tight. Ask about load management.';
        why = 'About ' + total + ' A against ' + safe + ' A. A smaller charger or a load-sharing switch often makes it fit without a new service.';
      } else {
        verdict = 'Likely needs a service upgrade.';
        why = 'About ' + total + ' A is more than a ' + svc + ' A service carries. A 200 A upgrade or a load-managed charger are the two routes.';
      }
      out.innerHTML = '<b>' + verdict + '</b>' + why;

      /* stacked bar drawing */
      var W = 440, H = 260, top = 30, bot = 222, x = 170, w = 96;
      var max = Math.max(svc, total) * 1.05;
      var sc = (bot - top) / max;
      var y = bot, segs = '';
      var parts = [{ a: BASE, l: 'House', c: 'seg--base' }].concat(loads.map(function (p) { return { a: p.a, l: p.l, c: 'seg--load' }; }));
      parts.push({ a: amps, l: 'EV ' + amps + ' A', c: 'seg--ev' });
      parts.forEach(function (p) {
        var h = p.a * sc; y -= h;
        segs += '<rect class="seg ' + p.c + '" x="' + x + '" y="' + y.toFixed(1) + '" width="' + w + '" height="' + h.toFixed(1) + '"/>';
        if (h > 16) segs += '<text x="' + (x + w + 10) + '" y="' + (y + h / 2 + 5).toFixed(1) + '">' + p.l + '</text>';
      });
      var capY = bot - svc * sc, limY = bot - safe * sc;
      dia.innerHTML = '<svg viewBox="0 0 ' + W + ' ' + H + '">' +
        (total > svc ? '<rect class="over" x="' + (x - 6) + '" y="' + y.toFixed(1) + '" width="' + (w + 12) + '" height="' + (capY - y).toFixed(1) + '"/>' : '') +
        segs +
        '<line class="cap" x1="20" y1="' + capY.toFixed(1) + '" x2="' + (x + w + 6) + '" y2="' + capY.toFixed(1) + '"/>' +
        '<text class="hd" x="20" y="' + (capY - 6).toFixed(1) + '">' + svc + ' A service</text>' +
        '<line class="lim" x1="20" y1="' + limY.toFixed(1) + '" x2="' + (x + w + 6) + '" y2="' + limY.toFixed(1) + '"/>' +
        '<text x="20" y="' + (limY + 18).toFixed(1) + '">80% · ' + safe + ' A</text>' +
        '<line class="cap" x1="20" y1="' + bot + '" x2="' + (W - 10) + '" y2="' + bot + '"/>' +
        '<text x="20" y="' + (bot + 22) + '">Total ≈ ' + total + ' A</text>' +
        '</svg>';
    };
    ev.addEventListener('change', calc);
    ev.addEventListener('submit', function (e) { e.preventDefault(); calc(); });
    calc();
  }

  if (!motion) return;

  /* Signature: the copper line fills each section as you scroll, nodes light as they pass */
  var lines = Array.prototype.slice.call(document.querySelectorAll('.one-line'));
  if (lines.length) {
    root.classList.add('sig-on');
    var ticking = false;
    var update = function () {
      ticking = false;
      var vh = window.innerHeight;
      lines.forEach(function (ln) {
        var r = ln.getBoundingClientRect();
        var p = r.height ? (vh * 0.62 - r.top) / r.height : 0;
        p = Math.max(0, Math.min(1, p));
        ln.style.setProperty('--sp', p.toFixed(3));
        var node = ln.querySelector('.one-line__node');
        if (node) node.classList.toggle('is-lit', node.getBoundingClientRect().top < vh * 0.7);
      });
    };
    var req = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    update();
  }

  if (typeof gsap === 'undefined') return;
  if (typeof DrawSVGPlugin !== 'undefined') gsap.registerPlugin(DrawSVGPlugin);
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  var canDraw = typeof DrawSVGPlugin !== 'undefined';

  /* Intro (≤ 1.2 s): the hero diagram draws itself; the h1 is readable from frame one */
  /* the service drop runs pole → meter, down the bus, then each proof circuit branches off */
  var wires = document.querySelectorAll('.sec-hero .drop-wire');
  var bus = document.querySelector('.hero-bus');
  if (wires.length && bus) {
    var tl = gsap.timeline({ delay: 0.1 });
    tl.from(wires, { scaleX: 0, duration: 0.4, ease: 'power2.inOut' })
      .from('.hero-sheet .meter', { scale: 0.6, opacity: 0, duration: 0.25, ease: 'back.out(2)' }, 0.32)
      .fromTo(bus, { '--bus-s': 0 }, { '--bus-s': 1, duration: 0.4, ease: 'power2.inOut' }, 0.45)
      .from('.hero-bus .brk, .hero-bus .ckt-no', { opacity: 0, x: -6, duration: 0.25, stagger: 0.05 }, 0.75);
  }

  if (typeof ScrollTrigger === 'undefined') return;

  /* Story 1: the fished wire runs through the wall cuts as the break scrolls past */
  document.querySelectorAll('.break__svg--wide .draw').forEach(function (wire) {
    if (!canDraw) return;
    gsap.fromTo(wire, { drawSVG: '0%' }, {
      drawSVG: '100%', ease: 'none',
      scrollTrigger: { trigger: wire.closest('svg'), start: 'top 80%', end: 'bottom 55%', scrub: 0.6 }
    });
  });

  /* Story 2: each sheet drawing traces its copper run when it enters */
  if (canDraw) {
    document.querySelectorAll('.plate--ev .draw, .plate--house .draw').forEach(function (p) {
      gsap.fromTo(p, { drawSVG: '0%' }, {
        drawSVG: '100%', duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: p.closest('figure'), start: 'top 78%', once: true }
      });
    });
  }

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
