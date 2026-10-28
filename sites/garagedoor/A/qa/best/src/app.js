/* garagedoor-A · Winding Count: rail spring, hero ruler, the pinned "wind" story, the spring-age estimator. */
(function () {
  'use strict';
  var root = document.documentElement;
  var motion = function () { return !SW.reduced && root.classList.contains('sw-motion'); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };

  /* ---------- spring geometry (story drawing, viewBox 0 0 640 200) ---------- */
  var X0 = 96, X1 = 600, CY = 100, R = 44;
  function stripePath(count) {
    var wraps = count / 4, d = '', on = false;
    for (var x = X0; x <= X1; x += 2) {
      var f = 2 * Math.PI * wraps * (x - X0) / (X1 - X0);
      if (Math.cos(f) > 0) {
        d += (on ? 'L' : 'M') + x + ' ' + (CY - R * 0.92 * Math.sin(f)).toFixed(1);
        on = true;
      } else on = false;
    }
    return d;
  }

  /* ---------- turn marks per section (used by the phone chip and reduced motion) ---------- */
  function sectionTurns() {
    return SW.$$('main > section').map(function (s) {
      var t = SW.$('.turn', s);
      var m = t ? t.textContent.match(/(\d\d)\/30/) : null;
      if (!m && s.classList.contains('break')) m = (SW.$('.break__sub', s).textContent.match(/(\d\d)\/30/));
      return { el: s, n: m ? parseInt(m[1], 10) : null };
    }).filter(function (x) { return x.n !== null; });
  }

  SW.mod('winding', function () {
    var railN = SW.$('[data-rail-n]');
    var rail = SW.$('[data-rail]');
    var chip = SW.$('[data-mbar-n]');
    var heroChip = SW.$('.strip__chip b');
    var mark = SW.$('.ruler__mark');
    var marks = sectionTurns();
    var live = motion();
    var queued = false;

    function update() {
      queued = false;
      var y = window.scrollY, vh = window.innerHeight;
      var max = root.scrollHeight - vh;
      var p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      // section count: last section whose top passed the middle of the screen
      var sec = 0;
      marks.forEach(function (m) { if (m.el.getBoundingClientRect().top < vh * 0.5) sec = m.n; });
      if (y >= max - 2) sec = 30;
      if (chip) chip.textContent = pad(sec);
      if (live) {
        var n = Math.round(p * 30);
        if (rail) rail.style.setProperty('--sw-p', p.toFixed(4));
        if (railN) railN.textContent = pad(n);
        if (heroChip) heroChip.textContent = pad(n);
        if (mark) mark.setAttribute('transform', 'translate(' + (p * 960).toFixed(1) + ' 0)');
      } else if (railN) railN.textContent = pad(sec);
    }
    function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    update();
  });

  /* ---------- the story: 30 → 00, swap, 00 → 30, balance, reverse ---------- */
  SW.mod('windstory', function () {
    var story = SW.$('[data-story]');
    if (!story) return;
    var nEl = SW.$('[data-wind-n]', story);
    var label = SW.$('[data-wind-label]', story);
    var stripe = SW.$('[data-wind-stripe]', story);
    var bar = SW.$('[data-wind-bar] path', story);
    var knob = SW.$('[data-wind-bar] circle', story);
    var coil = SW.$('[data-wind-coil]', story);
    var steps = SW.$$('.step', story);
    var chips = SW.$$('.wind__marks li', story);
    var LABELS = ['Quarter turns, letting the tension off', 'Quarter turns, new pair on the shaft', 'Quarter turns, counted out loud', 'Wound, door let go at halfway', 'Reverse test passed'];

    function draw(count) {
      var c = Math.max(0, Math.min(30, count));
      nEl.textContent = pad(Math.round(c));
      stripe.setAttribute('d', stripePath(c));
      var th = c * Math.PI / 2, tip = 100 - 76 * Math.cos(th);
      bar.setAttribute('d', 'M70 100V' + tip.toFixed(1));
      knob.setAttribute('cy', tip.toFixed(1));
      coil.style.setProperty('--wp', (c / 30).toFixed(3));
    }
    function setStep(i) {
      steps.forEach(function (s, k) { s.classList.toggle('is-on', k === i); s.classList.toggle('is-past', k < i); });
      chips.forEach(function (c, k) { c.classList.toggle('is-on', k === i); });
      label.textContent = LABELS[i];
    }
    function scrub(p) {
      var seg = Math.min(4, Math.floor(p * 5)), t = p * 5 - seg;
      var ease = function (v) { return v < .5 ? 2 * v * v : 1 - Math.pow(-2 * v + 2, 2) / 2; };
      var count = seg === 0 ? 30 * (1 - ease(Math.min(1, t * 1.15))) : seg === 1 ? 0 : seg === 2 ? 30 * ease(Math.min(1, t * 1.15)) : 30;
      draw(count);
      setStep(seg);
    }

    if (!motion() || !window.gsap || !window.ScrollTrigger) return; // static drawing: fully wound, five stacked steps
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        story.classList.add('is-live');
        var st = ScrollTrigger.create({
          trigger: story,
          start: function () { return 'top ' + (SW.$('[data-header]') ? SW.$('[data-header]').offsetHeight : 0); },
          end: 'bottom bottom',
          onUpdate: function (self) { scrub(self.progress); },
          onRefresh: function (self) { scrub(self.progress); }
        });
        scrub(st.progress || 0);
        return function () {
          story.classList.remove('is-live');
          steps.forEach(function (s) { s.classList.remove('is-on', 'is-past'); });
          chips.forEach(function (c) { c.classList.remove('is-on'); });
          draw(30);
        };
      },
      '(max-width: 639px)': function () {
        // phone: no pin; the spring winds itself once when it scrolls into view
        var o = { c: 0 };
        draw(0);
        var tw = gsap.to(o, { c: 30, duration: 2.2, ease: 'power2.inOut', paused: true, onUpdate: function () { draw(o.c); } });
        var st = ScrollTrigger.create({ trigger: SW.$('.wind', story), start: 'top 75%', once: true, onEnter: function () { tw.play(); } });
        return function () { st.kill(); tw.kill(); draw(30); };
      }
    });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  });

  /* ---------- spring-age estimator (works with reduced motion; only the coil draw is animated) ---------- */
  SW.mod('springest', function () {
    var box = SW.$('[data-spring-est]');
    if (!box) return;
    var year = SW.$('#est-year', box), opens = SW.$('#est-opens', box);
    var opensOut = SW.$('[data-est-opens]', box);
    var cyclesEl = SW.$('[data-est-cycles]', box), ratingEl = SW.$('[data-est-rating]', box);
    var bar = SW.$('[data-est-bar]', box), verdict = SW.$('[data-est-verdict]', box);
    var book = SW.$('[data-est-book]', box);
    var now = new Date().getFullYear();
    var last = { cycles: 0, rating: 10000, year: 0, opens: 0 };
    var fmt = function (n) { return n.toLocaleString('en-US'); };

    function calc() {
      var y = parseInt(year.value, 10);
      if (isNaN(y)) y = now - 5;
      y = Math.max(1980, Math.min(now, y));
      var per = parseInt(opens.value, 10) || 4;
      var typ = SW.$('input[name="type"]:checked', box);
      var rating = typ ? parseInt(typ.value, 10) : 10000;
      var yrs = Math.max(0.5, now - y);
      var cycles = Math.round(yrs * 365 * per / 100) * 100;
      var pct = cycles / rating;
      opensOut.textContent = per;
      cyclesEl.textContent = fmt(cycles);
      ratingEl.textContent = fmt(rating);
      bar.style.setProperty('--used', Math.min(1, pct).toFixed(3));
      if (pct >= 1) bar.setAttribute('data-over', ''); else bar.removeAttribute('data-over');
      var head, body;
      if (pct >= 1) { head = 'Past its rated life.'; body = 'A spring this far along usually goes on a cold morning. Worth a check before it picks the day.'; }
      else if (pct >= 0.7) { head = 'Getting close.'; body = 'About ' + Math.round(pct * 100) + '% used. A heavy month or a cold snap can finish it. Ask for a look at your next tune-up.'; }
      else { head = 'Plenty of turns left.'; body = 'About ' + Math.round(pct * 100) + '% used. Keep an ear out for a bang, and oil the coils once a year.'; }
      verdict.innerHTML = '';
      var b = document.createElement('b'); b.textContent = head;
      verdict.appendChild(b); verdict.appendChild(document.createTextNode(' ' + body));
      last = { cycles: cycles, rating: rating, year: y, opens: per };
    }
    ['input', 'change'].forEach(function (ev) { box.addEventListener(ev, calc); });
    var form = SW.$('form', box);
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); calc(); });
    if (book) book.addEventListener('click', function () {
      setTimeout(function () {
        SW.prefillForm({ details: 'Spring estimate: about ' + fmt(last.cycles) + ' cycles of ' + fmt(last.rating) + ' (springs from ' + last.year + ', ' + last.opens + ' opens a day).' }, { scroll: false });
      }, 0);
    });
    calc();
    if (motion() && 'IntersectionObserver' in window) {
      var target = bar.style.getPropertyValue('--used');
      bar.style.setProperty('--used', '0');
      bar.removeAttribute('data-over');
      SW.inView(bar, function () { calc(); }, { rootMargin: '0px 0px -10% 0px' });
    }
  });
})();
