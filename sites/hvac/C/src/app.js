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
    };
    sorter.addEventListener('change', run);
    sorter.addEventListener('submit', function (e) { e.preventDefault(); });
    run();
  }

  /* ── Sun clock: page progress is the hour, 05:00 → 23:00 ── */
  var clocks = document.querySelectorAll('[data-sunclock]');
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion');
  var hourAt = function () {
    var max = root.scrollHeight - innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    return 5 + p * 18;
  };
  var paint = function () {
    var h = hourAt();
    var hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
    var txt = (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm;
    for (var i = 0; i < clocks.length; i++) clocks[i].textContent = txt;
    if (motion) root.style.setProperty('--sw-hour', h.toFixed(2));
  };
  var queued = false;
  addEventListener('scroll', function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; paint(); });
  }, { passive: true });
  paint();

  if (!motion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  /* Every seam, plate grade, plate sun and the footer horizon read --sw-hour (set in paint above),
     so one scroll position is one hour across the whole page. */

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
