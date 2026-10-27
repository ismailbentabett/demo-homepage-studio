/* hvac-B · Wetbulb · comfort chart: the dew point tool, the travelling dot, the intro. */
(function () {
  if (!window.SW) return;

  /* chart space: temp 60–90 °F → x 24–308, RH 20–90 % → y 188–12 (same as the SVG paths) */
  function X(t) { return 24 + (t - 60) / 30 * 284; }
  function Y(rh) { return 188 - (rh - 20) / 70 * 176; }
  function dewPoint(tF, rh) {
    var tc = (tF - 32) * 5 / 9;
    var a = 17.27 * tc / (237.7 + tc) + Math.log(rh / 100);
    return (237.7 * a / (17.27 - a)) * 9 / 5 + 32;
  }
  function verdict(t, dp) {
    if (dp > 60) return { state: 'damp', text: 'Damp: dew point over 60' };
    if (dp < 45) return { state: 'dry', text: 'Dry: dew point under 45' };
    if (t < 68 || t > 78) return { state: 'off', text: 'Dew point fine, temperature off' };
    return { state: 'ok', text: 'Inside the comfort band' };
  }

  /* ── dew point tool (works with or without motion) ── */
  SW.mod('dew-point', function () {
    var box = document.querySelector('[data-dew-point]');
    if (!box) return;
    var tIn = box.querySelector('[data-dew-t]');
    var rIn = box.querySelector('[data-dew-rh]');
    var tOut = box.querySelector('[data-dew-t-out]');
    var rOut = box.querySelector('[data-dew-rh-out]');
    var dpOut = box.querySelector('[data-dew-dp]');
    var status = box.querySelector('[data-dew-status]');
    var dot = box.querySelector('[data-wb-dot]');
    var vx = box.querySelector('[data-wb-vx]');
    var hy = box.querySelector('[data-wb-hy]');
    if (!tIn || !rIn) return;
    var ro = document.querySelector('[data-dew-readout]');
    var roNum = document.querySelector('[data-dew-dp-big]');
    var roVerdict = document.querySelector('[data-dew-verdict]');
    var btnRead = box.querySelector('[data-dew-btn]');
    var fr = document.querySelector('[data-form-reading]');
    var frText = document.querySelector('[data-fr-text]');
    var frDot = document.querySelector('[data-fr-dot]');
    var LONG = { damp: 'Damp. Over 60 feels sticky at any temperature.', dry: 'Dry. Under 45 means static and dry skin.', off: 'The air is fine. The temperature is not.', ok: 'Inside the comfort band.' };
    var SHORT = { damp: 'Damp', dry: 'Dry', off: 'Temperature off', ok: 'In the band' };

    function update() {
      var t = +tIn.value, rh = +rIn.value;
      var dp = dewPoint(t, rh), v = verdict(t, dp);
      var x = X(t).toFixed(1), y = Y(rh).toFixed(1);
      tOut.textContent = t + '°F';
      rOut.textContent = rh + '%';
      dpOut.textContent = Math.round(dp) + '°F';
      tIn.setAttribute('aria-valuetext', t + ' degrees');
      rIn.setAttribute('aria-valuetext', rh + ' percent, dew point ' + Math.round(dp));
      if (status.textContent !== v.text) status.textContent = v.text;
      status.setAttribute('data-state', v.state);
      box.setAttribute('data-state', v.state);
      if (dot) {
        dot.setAttribute('transform', 'translate(' + x + ' ' + y + ')');
        dot.classList.toggle('is-in', v.state === 'ok');
      }
      if (vx) { vx.setAttribute('x1', x); vx.setAttribute('x2', x); vx.setAttribute('y1', y); }
      if (hy) { hy.setAttribute('x2', x); hy.setAttribute('y1', y); hy.setAttribute('y2', y); }
      var d = Math.round(dp);
      if (ro) ro.setAttribute('data-state', v.state);
      if (roNum) roNum.textContent = d;
      if (roVerdict) roVerdict.textContent = LONG[v.state];
      if (btnRead) btnRead.textContent = 'DP ' + d + '°F';
      if (fr) fr.setAttribute('data-state', v.state);
      if (frText) frText.textContent = t + '°F · ' + rh + '% RH · DP ' + d + ' (' + SHORT[v.state] + ')';
      if (frDot) {
        frDot.setAttribute('transform', 'translate(' + x + ' ' + Math.min(188, Math.max(12, +y)).toFixed(1) + ')');
        frDot.classList.toggle('is-in', v.state === 'ok');
      }
    }
    tIn.addEventListener('input', update);
    rIn.addEventListener('input', update);
    update();

    /* hand-off: the reading travels into the booking form's notes */
    var notes = document.getElementById('f-details');
    if (notes) document.querySelectorAll('[data-carry-reading]').forEach(function (carry) {
      carry.addEventListener('click', function () {
        var line = 'My reading: ' + tIn.value + '°F, ' + rIn.value + '% humidity, dew point ' + dpOut.textContent + '.';
        if (!notes.value || /^My reading:/.test(notes.value)) notes.value = line;
      });
    });
  });

  /* ── ZIP check plots a dot on the area chip: inside the ring when covered, outside when not ── */
  SW.mod('zip-dot', function () {
    var box = document.querySelector('[data-zip]');
    var dot = box && box.querySelector('[data-zip-dot]');
    var input = box && box.querySelector('input');
    if (!dot || !input || !window.MutationObserver) return;
    function place() {
      var st = box.getAttribute('data-zip-state');
      if (st !== 'yes' && st !== 'no') return;
      var z = input.value || '00000', a = (+z.slice(-3) % 360) * Math.PI / 180;
      var r = st === 'yes' ? 10 + (+z.slice(-1)) * 2.8 : 52;
      dot.setAttribute('transform', 'translate(' + (60 + Math.cos(a) * r).toFixed(1) + ' ' + (60 + Math.sin(a) * r).toFixed(1) + ')');
    }
    new MutationObserver(place).observe(box, { attributes: true, attributeFilter: ['data-zip-state'] });
  });

  /* ── motion: intro + the story dot ── */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  SW.mod('wb-motion', function () {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    /* intro ≤ 1.2 s: dew point curves draw, band fades, dot drops. The h1 is never delayed. */
    var hero = document.querySelector('.chart-hero');
    if (hero) {
      var curves = hero.querySelectorAll('.wb-curves path');
      curves.forEach(function (p) {
        var len = p.getTotalLength ? p.getTotalLength() : 400;
        gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: .8, ease: 'power2.out', delay: .1, clearProps: 'strokeDasharray,strokeDashoffset' });
      });
      gsap.from(hero.querySelector('.wb-band'), { opacity: 0, duration: .6, delay: .35, ease: 'power1.out' });
      gsap.from(hero.querySelector('[data-wb-dot] .wb-core'), { attr: { r: 0 }, duration: .45, delay: .7, ease: 'back.out(2)' });
      gsap.from(hero.querySelectorAll('.wb-cross'), { opacity: 0, duration: .4, delay: .9 });
    }

    if (typeof ScrollTrigger === 'undefined') return;

    /* story: the dot travels from reading to reading as each step crosses the middle (≥ 900px, sticky chart, no pin) */
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', function () {
      var dot = document.querySelector('[data-story-dot]');
      var readout = document.querySelector('[data-story-readout]');
      var trail = document.querySelector('[data-story-trail]');
      var steps = document.querySelectorAll('[data-story-step]');
      if (!dot || !steps.length) return;
      var pos = { x: +steps[0].getAttribute('data-x'), y: +steps[0].getAttribute('data-y') };
      function paint() { dot.setAttribute('transform', 'translate(' + pos.x.toFixed(1) + ' ' + pos.y.toFixed(1) + ')'); }
      var ro = document.querySelector('[data-story-ro]');
      var roLabel = document.querySelector('[data-story-label]');
      var roDp = document.querySelector('[data-story-dp]');
      var shown = { v: +steps[steps.length - 1].getAttribute('data-dp') };
      function read(s, i, instant) {
        if (readout) readout.textContent = s.getAttribute('data-read');
        if (roLabel) roLabel.textContent = s.getAttribute('data-label');
        if (ro) ro.setAttribute('data-state', i === steps.length - 1 ? 'ok' : 'damp');
        if (roDp) gsap.to(shown, { v: +s.getAttribute('data-dp'), duration: instant ? 0 : .9, ease: 'power3.inOut', overwrite: true, onUpdate: function () { roDp.textContent = Math.round(shown.v) + '°F'; } });
      }
      paint();
      dot.classList.remove('is-in');
      read(steps[0], 0, true);
      var len = trail && trail.getTotalLength ? trail.getTotalLength() : 0;
      if (trail) gsap.set(trail, { strokeDasharray: len, strokeDashoffset: len });

      function go(i) {
        var s = steps[i];
        gsap.to(pos, { x: +s.getAttribute('data-x'), y: +s.getAttribute('data-y'), duration: .9, ease: 'power3.inOut', onUpdate: paint, overwrite: true });
        dot.classList.toggle('is-in', i === steps.length - 1);
        read(s, i);
        if (trail) gsap.to(trail, { strokeDashoffset: len * (1 - i / (steps.length - 1)), duration: .9, ease: 'power3.inOut', overwrite: true });
        steps.forEach(function (o, k) { o.classList.toggle('is-current', k === i); });
      }
      steps.forEach(function (s, i) {
        ScrollTrigger.create({ trigger: s, start: 'top 55%', end: 'bottom 55%', onEnter: function () { go(i); }, onEnterBack: function () { go(i); } });
      });
      return function () { dot.classList.add('is-in'); read(steps[steps.length - 1], steps.length - 1, true); if (trail) gsap.set(trail, { clearProps: 'strokeDasharray,strokeDashoffset' }); };
    });

    /* prices: each sample range counts up from zero as its row wipes in (final text is already in the HTML) */
    document.querySelectorAll('.pt-range').forEach(function (cell) {
      var final = cell.textContent;
      var nums = final.match(/[\d,]+/g);
      if (!nums) return;
      var targets = nums.map(function (n) { return +n.replace(/,/g, ''); });
      var o = { k: 0 };
      function fmt(n) { return Math.round(n).toLocaleString('en-US'); }
      ScrollTrigger.create({ trigger: cell, start: 'top 88%', once: true, onEnter: function () {
        gsap.to(o, { k: 1, duration: 1.1, ease: 'power2.out', onUpdate: function () {
          var i = 0;
          cell.textContent = final.replace(/[\d,]+/g, function () { return fmt(targets[i++] * o.k); });
        }, onComplete: function () { cell.textContent = final; } });
      } });
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
