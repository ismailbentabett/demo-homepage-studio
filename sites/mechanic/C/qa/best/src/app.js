/* mechanic-C · the car-year thermometer rail (signature) + two scroll stories + the noise finder */
(function () {
  if (typeof SW === 'undefined') return;
  var root = document.documentElement;

  /* ── Signature: the outside-temperature readout follows the page ──
     State only (text + one CSS var), so it also runs under reduced motion; the number only
     tweens when motion is allowed. */
  SW.mod('thermo-rail', function () {
    var motion = !SW.reduced && root.classList.contains('sw-motion');
    var seasons = SW.$$('[data-season]');
    var outs = SW.$$('[data-temp-out]');
    var labels = SW.$$('[data-season-out]');
    if (!seasons.length) return;
    var shown = -8, tween = null;

    function k(t) { return Math.max(0.04, Math.min(1, (t + 20) / 90)); }
    function fmt(v) { v = Math.round(v); return (v < 0 ? '−' : '') + Math.abs(v); }
    function paint(v) { outs.forEach(function (o) { o.textContent = fmt(v); }); }
    function set(el) {
      var t = parseInt(el.getAttribute('data-season'), 10);
      if (isNaN(t)) return;
      root.setAttribute('data-season-now', el.getAttribute('data-season-key') || 'winter');
      root.style.setProperty('--temp-k', k(t).toFixed(3));
      var label = el.getAttribute('data-season-label') || '';
      labels.forEach(function (l) { if (l.textContent !== label) l.textContent = label; });
      if (t === shown) return;
      if (motion && window.gsap) {
        if (tween) tween.kill();
        var o = { v: shown };
        tween = gsap.to(o, { v: t, duration: 0.8, ease: 'power2.out', onUpdate: function () { paint(o.v); } });
      } else paint(t);
      shown = t;
    }

    /* intro: the hero readout ticks up from −20 (≤ 1.1 s, the h1 is readable throughout) */
    if (motion && window.gsap) {
      var o0 = { v: -20 };
      paint(-20);
      root.style.setProperty('--temp-k', k(-20).toFixed(3));
      gsap.to(o0, { v: -8, duration: 1.1, ease: 'power2.out', delay: 0.15, onUpdate: function () { paint(o0.v); },
        onComplete: function () { root.style.setProperty('--temp-k', k(-8).toFixed(3)); } });
    } else {
      set(seasons[0]);
    }

    /* the season under the middle of the screen drives the rail */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) set(e.target); });
      }, { rootMargin: '-50% 0px -50% 0px' });
      seasons.forEach(function (s) { io.observe(s); });
    }
  });

  /* ── Scroll stories (motion only) ── */
  SW.mod('stories', function () {
    if (SW.reduced || !root.classList.contains('sw-motion')) return;
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    /* 1. the cover: the twilight road drifts slower than the page */
    gsap.to('.hero__art', { yPercent: 9, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

    /* 2. each spread: the huge season temperature slides across its gutter as the page turns */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        SW.$$('.spread').forEach(function (sp) {
          var t = sp.querySelector('.spread__temp');
          if (!t) return;
          gsap.fromTo(t, { yPercent: 28 }, { yPercent: -18, ease: 'none',
            scrollTrigger: { trigger: sp, start: 'top bottom', end: 'bottom top', scrub: true } });
        });
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });

  /* ── Estimator output as a repair ticket: job in mono, range at display size ── */
  SW.mod('ticket', function () {
    var out = SW.$('.ticket [data-est-out]');
    if (!out) return;
    function shape() {
      var line = out.querySelector('.sw-est-range');
      if (!line || line.querySelector('.est-range')) return;
      var txt = line.textContent, cut = txt.indexOf(': ');
      if (cut < 0) return;
      line.textContent = '';
      var a = document.createElement('span'); a.className = 'est-item'; a.textContent = txt.slice(0, cut);
      var b = document.createElement('span'); b.className = 'est-range'; b.textContent = txt.slice(cut + 2);
      line.appendChild(a); line.appendChild(b);
      var note = out.querySelector('.sw-est-note');
      if (note) note.textContent = note.textContent.replace(/^\s*\(|\)\s*$/g, '');
    }
    shape();
    new MutationObserver(shape).observe(out, { childList: true });
  });

  /* ── Noise finder ── */
  SW.mod('noise-finder', function () {
    var form = SW.$('[data-noise]');
    var out = SW.$('[data-noise-out]');
    if (!form || !out) return;
    var causes = {
      'braking-grinding': 'Pads worn to the metal or a scored rotor. Book a brake check this week.',
      'braking-squeal': 'Pad wear indicators or glazed pads. Safe to drive in; book soon.',
      'braking-clunk': 'A loose caliper bracket or pad clip. Book today.',
      'braking-hum': 'Usually a wheel bearing that is louder under load. Book a look.',
      'braking-click': 'Often a pad shifting in its bracket. Mention it at drop-off.',
      'turning-clunk': 'A worn ball joint or sway bar link. Get it checked before highway miles.',
      'turning-click': 'An outer CV joint wearing out. Book this week.',
      'turning-hum': 'A wheel bearing starting to go. Book within two weeks.',
      'turning-grinding': 'A dry CV joint or a brake shield touching the rotor. Book soon.',
      'turning-squeal': 'Low power steering fluid or a slipping belt. Book a look.',
      'bumps-clunk': 'Sway bar link or strut mount, common after breakup. Book when it suits you.',
      'bumps-squeal': 'Dry suspension bushings. Note it at your next visit.',
      'bumps-click': 'A loose heat shield or a tired strut mount. Book a look.',
      'bumps-hum': 'Usually a tire, not the suspension. We check tread and balance.',
      'bumps-grinding': 'A worn ball joint. Book this week and drive gently.',
      'speed-hum': 'A wheel bearing or cupped tires. Book a diagnosis.',
      'speed-grinding': 'A dragging brake or a bearing. Book soon.',
      'speed-click': 'Something stuck in the tread, or a CV joint. Book a look.',
      'speed-clunk': 'Loose suspension parts. Book today.',
      'speed-squeal': 'A belt or a pulley bearing. Book a look.',
      'cold-squeal': 'A glazed belt or a tired tensioner, common on dark winter mornings. Mention it at drop-off.',
      'cold-click': 'A starter that is struggling, or the battery. Book a battery test.',
      'cold-grinding': 'The starter gear not engaging cleanly. Book before it strands you.',
      'cold-clunk': 'Engine or transmission mounts stiff in the cold. Book a look.',
      'cold-hum': 'A cold power steering pump or a bearing. Mention it at drop-off.'
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var w = form.querySelector('[name="noise-when"]:checked');
      var t = form.querySelector('[name="noise-type"]:checked');
      out.textContent = '';
      if (!w || !t) { out.textContent = 'Pick one answer in each row first.'; return; }
      var head = document.createElement('strong');
      head.textContent = w.parentElement.textContent.trim() + ', ' + t.parentElement.textContent.trim().toLowerCase();
      var p = document.createElement('p');
      p.textContent = causes[w.value + '-' + t.value] || 'Less common. Bring it in and we will listen with you on a short drive.';
      var a = document.createElement('a');
      a.href = '#contact'; a.className = 'link-arrow'; a.setAttribute('data-service', 'Check engine'); a.textContent = 'Book a diagnosis';
      out.appendChild(head); out.appendChild(p); out.appendChild(a);
    });
  });
})();
