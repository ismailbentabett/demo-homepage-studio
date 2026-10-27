/* general-A · crosstie track: hero today-marker, scrubbed rail fill + DONE stamps, timeline builder. */
(function () {
  if (typeof SW === 'undefined') return;
  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
  var hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* ---- Timeline builder (works with or without motion) ---- */
  var PLANS = {
    addition: { svc: 'Additions', p: [['Permits & demo', 2], ['Footings', 3], ['Framing & dry-in', 4], ['Rough-in', 3], ['Insulation & drywall', 3], ['Finishes', 4], ['Walk-through', 1]] },
    kitchen: { svc: 'Kitchens', p: [['Demo & protection', 1], ['Rough-in', 2], ['Inspection & drywall', 2], ['Cabinets & counters', 3], ['Finishes', 1], ['Walk-through', 1]] },
    bath: { svc: 'Bathrooms', p: [['Demo', 1], ['Rough-in & waterproofing', 2], ['Tile', 2], ['Fixtures & finishes', 1], ['Walk-through', 1]] },
    whole: { svc: 'Whole home', p: [['Permits & demo', 3], ['Structure & framing', 4], ['Rough-in', 4], ['Insulation & drywall', 4], ['Finishes', 6], ['Walk-through', 1]] },
    second: { svc: 'Second story', p: [['Engineering & permits', 3], ['Roof off & framing', 5], ['Dry-in', 2], ['Rough-in', 4], ['Insulation & drywall', 3], ['Finishes', 5], ['Walk-through', 1]] },
    porch: { svc: 'Porches', p: [['Permits & footings', 2], ['Framing & roof tie-in', 2], ['Screens & finishes', 2], ['Walk-through', 1]] }
  };

  SW.mod('timeline', function () {
    var box = document.querySelector('[data-tl]');
    var bars = document.querySelector('[data-tl-bars]');
    if (!box || !bars) return;
    var job = box.querySelector('[data-tl-job]');
    var sizes = box.querySelectorAll('[data-tl-size]');
    var weeksEl = document.querySelector('[data-tl-weeks]');
    var labelEl = document.querySelector('[data-tl-label]');
    var cta = document.querySelector('.tl__cta');

    function fill() {
      if (!motion || !hasGsap) return;
      gsap.fromTo(bars.querySelectorAll('.tl__bar'), { scaleX: 0 }, { scaleX: 1, duration: 0.6, stagger: 0.08, ease: 'power2.inOut', overwrite: true });
    }

    function render() {
      var plan = PLANS[job.value] || PLANS.addition;
      var mult = 1;
      sizes.forEach(function (r) { if (r.checked) mult = parseFloat(r.value) || 1; });
      var total = 0;
      var rows = plan.p.map(function (ph, i) {
        var w = i === plan.p.length - 1 ? ph[1] : Math.max(1, Math.round(ph[1] * mult));
        total += w;
        return [ph[0], w];
      });
      bars.textContent = '';
      bars.style.setProperty('--total', total);
      rows.forEach(function (r) {
        var li = document.createElement('li');
        li.style.setProperty('--w', r[1]);
        var bar = document.createElement('span'); bar.className = 'tl__bar';
        var b = document.createElement('b'); b.textContent = r[0];
        var s = document.createElement('span'); s.className = 'tnum'; s.textContent = r[1] + ' wk';
        li.appendChild(bar); li.appendChild(b); li.appendChild(s);
        bars.appendChild(li);
      });
      weeksEl.textContent = total;
      labelEl.textContent = 'weeks, walk-through in week ' + total;
      if (cta) cta.setAttribute('data-service', plan.svc);
      fill();
    }

    job.addEventListener('change', render);
    sizes.forEach(function (r) { r.addEventListener('change', render); });

    if (motion && hasGsap) {
      gsap.set(bars.querySelectorAll('.tl__bar'), { scaleX: 0 });
      ScrollTrigger.create({ trigger: bars, start: 'top 80%', once: true, onEnter: fill });
    }
  });

  if (!motion || !hasGsap) return;

  /* ---- Signature intro: studs go up, today marker runs WK 01 → WK 06 (≤ 1.2 s) ---- */
  SW.mod('signature-intro', function () {
    var track = document.querySelector('.htrack');
    var studs = document.querySelectorAll('.hero .studs line');
    if (studs.length) {
      gsap.from(studs, { scaleY: 0, transformOrigin: '50% 100%', duration: 0.5, stagger: 0.035, ease: 'power3.out', delay: 0.15 });
    }
    if (track) {
      gsap.fromTo(track, { '--wk': 1 }, { '--wk': 6, duration: 1.0, ease: 'power2.inOut', delay: 0.2 });
    }
  });

  /* ---- Track story: the amber line fills the rails; each tie it crosses is stamped DONE ---- */
  SW.mod('track-story', function () {
    var ts = document.querySelector('.ts');
    if (!ts) return;
    var ties = ts.querySelectorAll('[data-tie]');
    ts.classList.add('is-live');
    ScrollTrigger.create({
      trigger: ts,
      start: 'top 60%',
      end: 'bottom 60%',
      scrub: 0.4,
      onUpdate: function (self) { ts.style.setProperty('--fill', self.progress.toFixed(4)); }
    });
    ties.forEach(function (tie) {
      ScrollTrigger.create({ trigger: tie, start: 'top 60%', toggleClass: { targets: tie, className: 'is-done' } });
    });
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
