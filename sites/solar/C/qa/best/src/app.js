/* solar-C · Parapet Shadow Clock: page-wide sun, pinned sun-path story, shadow calculator, battery planner. */
(function () {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');

  /* ---------- tools (work with or without motion) ---------- */
  function ftIn(ft) {
    var inches = Math.round(ft * 12);
    return Math.floor(inches / 12) + ' ft ' + (inches % 12) + ' in';
  }
  function fmtH(h) { return (h % 1 ? h.toFixed(1) : String(h)) + ' ft'; }

  var range = SW.$('[data-calc-range]');
  if (range) {
    var val = SW.$('[data-calc-val]'), say = SW.$('[data-calc-say]');
    var wall = SW.$('[data-wall]'), mark = SW.$('[data-mark]');
    var wedges = SW.$$('#calculator [data-w]');
    var outs = SW.$$('[data-calc]');
    var BASE = 150, X = 470, PX = 34; // deck y, wall x, px per foot
    var draw = function () {
      var h = parseFloat(range.value) || 2;
      val.textContent = fmtH(h);
      outs.forEach(function (o) { o.textContent = ftIn(h * parseFloat(o.getAttribute('data-calc'))); });
      say.textContent = 'In December, keep the first row about ' + ftIn(h * 1.63) + ' back from a ' + fmtH(h) + ' parapet.';
      var top = BASE - h * PX;
      wall.setAttribute('y', top); wall.setAttribute('height', h * PX);
      wedges.forEach(function (w) {
        var len = h * PX * parseFloat(w.getAttribute('data-w'));
        w.setAttribute('points', X + ',' + top + ' ' + X + ',' + BASE + ' ' + (X - len).toFixed(1) + ',' + BASE);
      });
      var dx = (X - h * PX * 1.63).toFixed(1);
      mark.setAttribute('x1', dx); mark.setAttribute('x2', dx);
    };
    range.addEventListener('input', draw);
    draw();
    var send = SW.$('[data-calc-send]');
    if (send) send.addEventListener('click', function () {
      SW.prefillForm({ service: 'Roof assessment', parapet: fmtH(parseFloat(range.value)) }, { focus: 'service' });
    });
  }

  var batt = SW.$('[data-batt]');
  if (batt) {
    var kwh = SW.$('[data-batt-kwh]'), count = SW.$('[data-batt-count]');
    var calcB = function () {
      var hrs = parseFloat((SW.$('input[name="hrs"]:checked', batt) || {}).value || 8);
      var lo = 0, hi = 0;
      SW.$$('input[name="load"]:checked', batt).forEach(function (c) {
        lo += parseFloat(c.getAttribute('data-lo')); hi += parseFloat(c.getAttribute('data-hi'));
      });
      lo = Math.max(0, Math.round(lo * hrs)); hi = Math.max(1, Math.round(hi * hrs));
      if (!SW.$$('input[name="load"]:checked', batt).length) {
        kwh.textContent = 'Tick a load'; count.textContent = 'Pick what has to keep running.'; return;
      }
      kwh.textContent = 'about ' + Math.max(1, lo) + ' to ' + hi + ' kWh';
      count.textContent = hi <= 12 ? 'One battery likely covers it.' : hi <= 24 ? 'Two batteries likely, or fewer hours.' : 'More than two batteries, or run fewer loads at once.';
    };
    batt.addEventListener('change', calcB);
    calcB();
    var bsend = SW.$('[data-batt-send]');
    if (bsend) bsend.addEventListener('click', function () {
      var loads = SW.$$('input[name="load"]:checked', batt).map(function (c) { return c.value; }).join(', ');
      var hrs = (SW.$('input[name="hrs"]:checked', batt) || {}).value || '8';
      SW.prefillForm({ service: 'Battery backup', loads: loads + ' · ' + hrs + ' h' }, { focus: 'service' });
    });
  }

  /* ---------- motion ---------- */
  if (!motion) return;

  // Story 2 "draw": page-wide --sun (east 0 → west 1); wedge length 1/tan(altitude)
  var ticking = false;
  function sun() {
    ticking = false;
    var max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    var s = Math.min(1, Math.max(0, scrollY / max));
    var sx = Math.sin(Math.PI * s);
    var alt = (12 + 66 * sx) * Math.PI / 180;
    var len = Math.min(3, 1 / Math.tan(alt));
    root.style.setProperty('--sun', s.toFixed(4));
    root.style.setProperty('--sx', sx.toFixed(4));
    root.style.setProperty('--len', len.toFixed(3));
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(sun); } }, { passive: true });
  addEventListener('resize', sun);
  sun();

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // Story 1 "cast": pinned top-down roof plan, 4 stops (≥900px only)
  var story = SW.$('#story'), stage = SW.$('.story__stage'), clock = SW.$('[data-clock]');
  var LABELS = ['09:00 · morning', 'Jun 21 · 12:00', 'Dec 21 · 12:00', '16:00 · afternoon'];
  function setStop(i) {
    if (stage.getAttribute('data-stop') === String(i)) return;
    stage.setAttribute('data-stop', String(i));
    if (clock) clock.textContent = LABELS[i];
  }
  ScrollTrigger.matchMedia({
    '(min-width: 900px)': function () {
      story.classList.add('is-pinning');
      setStop(0);
      var st = ScrollTrigger.create({
        trigger: stage,
        start: 'top top+=' + (parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 72),
        end: function () { return '+=' + Math.round(4 * 0.55 * innerHeight); },
        pin: true,
        scrub: true,
        onUpdate: function (self) { setStop(Math.min(3, Math.floor(self.progress * 4))); }
      });
      return function () { st.kill(); story.classList.remove('is-pinning'); setStop(2); };
    }
  });

  // phone: stops appear one by one as they enter
  ScrollTrigger.matchMedia({
    '(max-width: 899px)': function () {
      var stops = SW.$$('.stop');
      var tws = stops.map(function (el) {
        return gsap.fromTo(el, { clipPath: 'inset(0 0 100% 0)' }, {
          clipPath: 'inset(0 0 0% 0)', duration: .7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 95%', once: true,
            onEnter: function () { setStop(+el.getAttribute('data-i')); } }
        });
      });
      return function () { tws.forEach(function (t) { t.scrollTrigger && t.scrollTrigger.kill(); t.kill(); gsap.set(stops, { clearProps: 'clipPath' }); }); };
    }
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
