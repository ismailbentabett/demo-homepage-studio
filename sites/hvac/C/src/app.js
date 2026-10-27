/* hvac-C · Shade Line: the page is a sundial. Sorter logic + scroll-driven shade edge. */
(function () {
  /* ── Repair or replace sorter (works with or without motion) ── */
  var sorter = document.querySelector('[data-sorter]');
  if (sorter) {
    var verdict = sorter.querySelector('[data-sorter-verdict]');
    var reason = sorter.querySelector('[data-sorter-reason]');
    var bar = sorter.querySelector('[data-sorter-bar]');
    var reads = [
      { max: 2, v: 'Repair it', r: 'A system in this shape with this repair is almost always worth fixing. Fix it and keep the coil clean.' },
      { max: 4, v: 'Repair, then plan', r: 'Worth one more repair, but start pricing a replacement before next summer so a July failure is not a rush job.' },
      { max: 99, v: 'Price a replacement', r: 'Age, repair size and refrigerant all point the same way. Put the repair money toward a new system instead.' }
    ];
    var run = function () {
      var score = 0;
      ['age', 'quote', 'ref', 'repairs'].forEach(function (n) {
        var f = sorter.elements[n];
        if (f) score += parseInt(f.value, 10) || 0;
      });
      var pick = reads.filter(function (x) { return score <= x.max; })[0];
      verdict.textContent = pick.v;
      reason.textContent = pick.r;
      sorter.style.setProperty('--score', Math.min(1, 0.08 + score / 8).toFixed(2));
      sorter.setAttribute('data-verdict', score <= 2 ? 'repair' : score <= 4 ? 'plan' : 'replace');
    };
    sorter.addEventListener('change', run);
    sorter.addEventListener('submit', function (e) { e.preventDefault(); });
    run();
  }

  /* ── Open-now line: commas, not middle dots (the kit refreshes it every minute) ── */
  var tidy = function (el) {
    var t = el.textContent;
    if (t.indexOf(' · ') > -1) el.textContent = t.split(' · ').join(', ');
  };
  var openEls = document.querySelectorAll('[data-open-now]');
  for (var k = 0; k < openEls.length; k++) {
    tidy(openEls[k]);
    if ('MutationObserver' in window) {
      new MutationObserver(function (list) { tidy(list[0].target.closest ? list[0].target.closest('[data-open-now]') || list[0].target : list[0].target); })
        .observe(openEls[k], { childList: true, characterData: true, subtree: true });
    }
  }

  /* ── Sun clock: the band at the middle of the screen sets the hour ──
     Anchors are the scroll positions that centre each [data-hour] band; between them the clock
     runs linearly, so the header chip reads 05:00 on the 05:00 band, 10:00 on the 10:00 band... 23:00 at the end.
     Every band in view also gets its own --local (-1 entering, +1 leaving) so its seam swings while you scroll. */
  var clocks = document.querySelectorAll('[data-sunclock]');
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');
  var bands = document.querySelectorAll('.hero, [data-hook="shade-hour"], [data-seam]');
  var anchors = [];
  var measure = function () {
    var max = Math.max(1, root.scrollHeight - innerHeight);
    anchors = [{ y: 0, h: 5 }];
    document.querySelectorAll('[data-hour]').forEach(function (el) {
      var r = el.getBoundingClientRect();
      var y = Math.min(max, Math.max(0, r.top + scrollY + r.height / 2 - innerHeight / 2));
      anchors.push({ y: y, h: parseFloat(el.getAttribute('data-hour')) });
    });
    anchors.push({ y: max, h: 23 });
    anchors.sort(function (p, q) { return p.y - q.y; });
  };
  var hourAt = function () {
    var y = scrollY;
    for (var i = 1; i < anchors.length; i++) {
      var p = anchors[i - 1], q = anchors[i];
      if (y <= q.y) return q.y > p.y ? p.h + (q.h - p.h) * Math.max(0, (y - p.y) / (q.y - p.y)) : q.h;
    }
    return 23;
  };
  var paint = function () {
    var h = Math.max(5, Math.min(23, hourAt()));
    var hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
    var txt = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
    for (var i = 0; i < clocks.length; i++) clocks[i].textContent = txt;
    if (!motion) return;
    root.style.setProperty('--sw-hour', h.toFixed(2));
    for (var j = 0; j < bands.length; j++) {
      var r = bands[j].getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) continue;
      var p = (innerHeight - r.top) / (innerHeight + r.height);
      bands[j].style.setProperty('--local', (Math.max(0, Math.min(1, p)) * 2 - 1).toFixed(3));
    }
  };
  var queued = false;
  var tick = function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; paint(); });
  };
  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', function () { measure(); tick(); });
  measure();
  paint();
  if (document.fonts) document.fonts.ready.then(function () { measure(); paint(); });
  addEventListener('load', function () { measure(); paint(); });

  if (!motion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Seams and plate grades read --local per band; plate suns and the footer horizon read --sw-hour (paint above). */

  /* ── 18:00 dial: the giant hour slides in under the headline as the band arrives ── */
  var dial = document.querySelector('.dial__hour');
  if (dial) {
    gsap.fromTo(dial, { xPercent: -8 }, {
      xPercent: 0, ease: 'none',
      scrollTrigger: { trigger: dial, start: 'top bottom', end: 'top 35%', scrub: 0.4 }
    });
  }

  /* ── Hour stamps tick up from 00:00 once in view ── */
  document.querySelectorAll('.hour-stamp').forEach(function (stamp) {
    var m = stamp.textContent.trim().match(/^(\d{2}):(\d{2})$/);
    if (!m) return;
    var target = parseInt(m[1], 10) * 60 + parseInt(m[2], 10);
    var o = { v: Math.max(0, target - 240) };
    var fmt = function () {
      var v = Math.round(o.v), h = Math.floor(v / 60), mi = v % 60;
      stamp.textContent = (h < 10 ? '0' : '') + h + ':' + (mi < 10 ? '0' : '') + mi;
    };
    ScrollTrigger.create({
      trigger: stamp, start: 'top 85%', once: true,
      onEnter: function () { gsap.to(o, { v: target, duration: 0.6, ease: 'power2.out', onUpdate: fmt }); }
    });
  });

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
