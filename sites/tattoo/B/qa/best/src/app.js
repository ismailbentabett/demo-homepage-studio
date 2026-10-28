/* tattoo-B · sitting estimator (always on) + the indicator-tape motion (motion only) */
(function () {
  'use strict';
  var doc = document;
  var root = doc.documentElement;

  /* ---------- sitting estimator: works with or without motion ---------- */
  function estimator() {
    var form = doc.querySelector('[data-est]');
    if (!form) return;
    var prices = (window.SW && SW.fact('proof.prices')) || [];
    var out = function (k) { return doc.querySelector('[data-est-o="' + k + '"]'); };
    var box = doc.querySelector('.estsheet__box');
    var book = doc.querySelector('[data-est-book]');
    var range = function (i, tail) { var p = prices[i]; return p ? p.from + '–' + p.to + (tail || '') : ''; };

    var sizes = {
      coin: { w: 20, label: 'Coin', sit: 'One short sitting' },
      palm: { w: 70, label: 'Palm', sit: 'One sitting, a few hours' },
      span: { w: 130, label: 'Hand span', sit: 'One or two sittings' },
      half: { w: 220, label: 'Half sleeve', sit: 'Three to five sittings, a few weeks apart' }
    };
    var styles = {
      fine: { label: 'fine line', service: 'Fine line tattoos' },
      bg: { label: 'black & grey', service: 'Custom tattoos' },
      color: { label: 'color', service: 'Color tattoos' },
      cover: { label: 'cover-up', service: 'Cover-ups' }
    };

    function val(name) { var c = form.querySelector('input[name="' + name + '"]:checked'); return c ? c.value : ''; }

    function render() {
      var place = val('est-place') || 'Forearm';
      var size = sizes[val('est-size')] || sizes.palm;
      var sizeKey = val('est-size') || 'palm';
      var style = styles[val('est-style')] || styles.bg;
      var styleKey = val('est-style') || 'bg';

      var sit = size.sit;
      var rate = range(1, prices[1] && prices[1].unit ? ' ' + prices[1].unit : '');
      if (styleKey === 'cover') {
        sit = 'Most cover-ups take two to three sittings';
        rate = range(2, ' · first sitting');
      } else if (sizeKey === 'coin') {
        rate = range(0, ' · shop minimum');
      } else if (styleKey === 'color' && sizeKey !== 'half') {
        sit = size.sit + ', plus time for color packing';
      }

      var warn = 'Bring photos and the size you want. We draw it at the consult.';
      var isWarn = false;
      if (styleKey === 'fine' && sizeKey === 'coin') {
        warn = 'Fine line under about 2 cm blurs as it heals. We will size it up a little and show you on the sheet.';
        isWarn = true;
      } else if (styleKey === 'cover') {
        warn = 'Send a clear photo of the old piece. Darker, larger designs cover best.';
      } else if (place === 'Hand') {
        warn = 'Hand work fades faster than most places. Expect a touch-up.';
        isWarn = true;
      } else if (place === 'Ribs') {
        warn = 'Ribs are a tender spot. We plan shorter sittings with breaks.';
      } else if (sizeKey === 'palm' || sizeKey === 'span') {
        warn = 'This size holds detail well as it heals. Bring photos to the consult.';
      }

      out('place').textContent = place;
      out('size').textContent = size.label + ' · ' + style.label;
      out('sit').textContent = sit;
      if (rate) out('rate').textContent = rate;
      var w = out('warn');
      w.textContent = warn;
      w.classList.toggle('is-warn', isWarn);
      if (box) box.setAttribute('width', String(size.w));
      if (book) {
        book.setAttribute('data-service', style.service);
        book.dataset.details = place + ', ' + size.label.toLowerCase() + ', ' + style.label + '. ' + sit + '.';
      }
    }

    form.addEventListener('change', render);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    if (book) {
      book.addEventListener('click', function (e) {
        if (!window.SW || !SW.prefillForm) return;
        e.preventDefault();
        e.stopPropagation();
        SW.prefillForm({ service: book.getAttribute('data-service'), details: book.dataset.details || '' }, { focus: 'service' });
      });
    }
    render();
  }

  /* ---------- motion ---------- */
  function tempToDeg(t) { return t <= 80 ? -90 + (t / 80) * 90 : ((t - 80) / 70) * 90; }

  function motion() {
    if (!window.SW || SW.reduced || !root.classList.contains('sw-motion')) return;
    if (!window.gsap || !window.ScrollTrigger) return;
    var gsap = window.gsap, ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);

    /* hero intro, under 1.1 s: the sheet prints, the seal tape darkens, the stamp lands. h1 is never touched. */
    var rows = gsap.utils.toArray('.sheet__rows li');
    var seal = doc.querySelector('.sheet .tape--seal');
    var stamp = doc.querySelector('.stamp--pass');
    var tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (rows.length) tl.from(rows, { clipPath: 'inset(0 100% 0 0)', duration: .32, stagger: .06, clearProps: 'clipPath' }, .1);
    if (seal) { seal.style.setProperty('--sw-p', 0); tl.to(seal, { '--sw-p': 1, duration: .45, ease: 'none' }, .35); }
    if (stamp) tl.from(stamp, { scale: 1.6, rotate: -30, opacity: 0, duration: .3, ease: 'back.out(2)', clearProps: 'transform,opacity' }, .78);

    /* every rail tape darkens as its section crosses the page: the cycle passing */
    gsap.utils.toArray('.tape--rail:not(.tape--done), .tape--close, .estsheet .tape--seal, .tape--tagrail').forEach(function (t) {
      gsap.fromTo(t, { '--sw-p': 0 }, {
        '--sw-p': 1, ease: 'none',
        scrollTrigger: { trigger: t.closest('section') || t, start: 'top 85%', end: 'top 25%', scrub: .4 }
      });
    });

    /* the ear spots ping once when the map arrives */
    var ear = doc.querySelector('.ear');
    if (ear) {
      gsap.utils.toArray('.spot', ear).forEach(function (s, i) { s.style.setProperty('--k', i); });
      ST.create({ trigger: ear, start: 'top 75%', once: true, onEnter: function () { ear.classList.add('is-in'); } });
    }

    /* the cycle story */
    var cycle = doc.getElementById('cycle');
    if (!cycle) return;
    var steps = gsap.utils.toArray('.step', cycle);
    var tempEl = cycle.querySelector('[data-gauge-temp]');
    var stepEl = cycle.querySelector('[data-gauge-step]');
    var names = ['Load', 'Heat', 'Hold', 'Dry', 'Log'];
    var gauge = { t: 22 };
    function paintGauge() {
      var d = tempToDeg(gauge.t);
      cycle.style.setProperty('--deg', d.toFixed(2) + 'deg');
      cycle.style.setProperty('--arc', ((d + 90) / 180 * 100).toFixed(2));
      if (tempEl) tempEl.textContent = Math.round(gauge.t) + '°C';
    }

    ST.matchMedia({
      '(min-width: 640px)': function () {
        cycle.classList.add('is-story');
        var temps = [22, 134, 134, 70, 22];
        var current = -1;
        function setStep(i) {
          if (i === current) return;
          current = i;
          steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); });
          if (stepEl) stepEl.textContent = names[i] + (i === 4 ? ' · Pass' : '');
          cycle.style.setProperty('--cyc-p', ((i + 1) / 5).toFixed(2));
        }
        var tlc = gsap.timeline({
          scrollTrigger: {
            trigger: cycle, start: 'top top', end: 'bottom bottom', scrub: .5,
            onUpdate: function (self) { setStep(Math.min(4, Math.floor(self.progress * 5))); }
          }
        });
        temps.forEach(function (t, i) {
          tlc.to(gauge, { t: t, duration: 1, ease: 'power2.inOut', onUpdate: paintGauge }, i);
        });
        gauge.t = 22; paintGauge(); setStep(0);
        return function () {
          cycle.classList.remove('is-story');
          steps.forEach(function (s) { s.classList.remove('is-on'); });
          cycle.style.removeProperty('--deg'); cycle.style.removeProperty('--arc'); cycle.style.removeProperty('--cyc-p');
          if (tempEl) tempEl.textContent = '134°C';
          if (stepEl) stepEl.textContent = 'Hold';
        };
      },
      '(max-width: 639px)': function () {
        /* phones: no pin; each step card unclips as it arrives, the needle sweeps once */
        var obs = steps.map(function (s) {
          return ST.create({ trigger: s, start: 'top 88%', once: true, onEnter: function () { s.classList.add('is-in'); } });
        });
        var g = cycle.querySelector('.gauge');
        var sweep = g && gsap.fromTo(gauge, { t: 22 }, { t: 134, duration: 1.1, ease: 'power2.out', onUpdate: paintGauge, paused: true });
        var st = g && ST.create({ trigger: g, start: 'top 80%', once: true, onEnter: function () { sweep.play(); } });
        return function () {
          obs.forEach(function (o) { o.kill(); });
          if (st) st.kill();
          steps.forEach(function (s) { s.classList.add('is-in'); });
        };
      }
    });

    if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(function () { ST.refresh(); });
  }

  function start() {
    estimator();
    try { motion(); } catch (e) { if (window.SW) SW.warn('motion failed', e); }
  }
  if (window.SW && SW.ready) SW.ready(start);
  else if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', start);
  else start();
})();
