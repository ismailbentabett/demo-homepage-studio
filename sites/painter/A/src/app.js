/* painter-A: the Coat Schedule sheet (works with JS on, any motion setting) + film-build motion (motion only). */
(function () {
  if (typeof SW === 'undefined') return;

  /* ---------- Coat schedule tool ---------- */
  var DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var FULL = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var KEYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  var JOBS = {
    exterior: { label: 'Exterior', service: 'Exterior', steps: [['wash', 'Wash siding & trim'], ['dry', 'Let it dry'], ['prep', 'Scrape & sand'], ['prime', 'Spot-prime & caulk'], ['coat', 'Coat one'], ['coat2', 'Coat two'], ['done', 'Walk-through']] },
    interior: { label: 'Interior', service: 'Interior', steps: [['prep', 'Move & cover'], ['prep', 'Patch & sand'], ['prime', 'Prime patches'], ['coat', 'Coat one'], ['coat2', 'Coat two'], ['done', 'Walk-through']] },
    porch: { label: 'Porch & trim', service: 'Porch & trim', steps: [['wash', 'Wash the porch'], ['prep', 'Scrape & sand rails'], ['prime', 'Prime bare wood'], ['coat', 'Coat one'], ['coat2', 'Coat two & floor'], ['done', 'Walk-through']] },
    cabinets: { label: 'Cabinets', service: 'Cabinets', steps: [['prep', 'Doors off, degrease'], ['prime', 'Sand & bonding prime'], ['coat', 'Spray coat one'], ['coat2', 'Spray coat two'], ['dry', 'Cure'], ['done', 'Rehang & walk-through']] }
  };

  var form = SW.$('[data-schedule-form]');
  var sheet = SW.$('[data-schedule]');
  if (form && sheet) {
    var cal = SW.$('[data-sched-cal]', sheet);
    var out = SW.$('[data-sched-out]', sheet);
    var jobOut = SW.$('[data-sched-job]', sheet);
    var build = SW.$('[data-sched-build]', sheet);
    var cta = SW.$('[data-sched-cta]', sheet);
    var printBtn = SW.$('[data-sched-print]', sheet);
    var hours = SW.fact('biz.hours', 'hours') || {};
    var workday = KEYS.map(function (k, i) { return hours[k] === undefined ? i < 5 : !!hours[k]; });

    var plan = function () {
      var job = (form.querySelector('input[name="job"]:checked') || {}).value || 'exterior';
      var start = parseInt(form.elements.start.value, 10) || 0;
      var steps = JOBS[job].steps.slice();
      if (form.elements.older.checked && job !== 'cabinets') steps.unshift(['lead', 'Test paint, hang plastic']);
      if (form.elements.wood.checked && job !== 'interior') {
        var at = steps.findIndex(function (s) { return s[0] === 'prep'; });
        steps.splice(at + 1, 0, ['repair', 'Cut out soft wood']);
      }
      if (form.elements.rain.checked) steps.splice(Math.min(2, steps.length - 1), 0, ['rain', 'Rain day, all moved']);
      return { job: job, start: start, steps: steps };
    };

    var render = function (animate) {
      var p = plan();
      var cells = [];
      for (var b = 0; b < p.start; b++) cells.push({ blank: true, d: b });
      var d = p.start, i = 0, last = p.start;
      while (i < p.steps.length && cells.length < 42) {
        var wd = d % 7;
        if (workday[wd]) { cells.push({ day: wd, step: p.steps[i] }); i++; last = wd; }
        else cells.push({ day: wd, off: true });
        d++;
      }
      cal.textContent = '';
      cells.forEach(function (c, n) {
        var li = document.createElement('li');
        li.style.setProperty('--d', n);
        var dn = document.createElement('span'); dn.className = 'day__n';
        var tk = document.createElement('span'); tk.className = 'day__task';
        if (c.blank) { li.className = 'day is-blank'; li.setAttribute('aria-hidden', 'true'); dn.textContent = DAYS[c.d]; }
        else if (c.off) { li.className = 'day is-off'; dn.textContent = DAYS[c.day]; tk.textContent = 'Off'; }
        else { li.className = 'day is-work t-' + c.step[0]; dn.textContent = DAYS[c.day]; tk.textContent = c.step[1]; }
        li.appendChild(dn); li.appendChild(tk); cal.appendChild(li);
      });
      var kinds = p.steps.map(function (s) { return s[0]; });
      build.classList.toggle('has-prime', kinds.indexOf('prime') > -1);
      build.classList.toggle('has-coat', kinds.indexOf('coat') > -1);
      build.classList.toggle('has-coat2', kinds.indexOf('coat2') > -1);
      jobOut.textContent = JOBS[p.job].label + ' · start ' + FULL[p.start];
      out.textContent = p.steps.length + ' working days · ' + p.steps[p.steps.length - 1][1].toLowerCase() + ' on ' + FULL[last];
      cta.setAttribute('data-service', JOBS[p.job].service);
      if (animate) { cal.classList.remove('is-anim'); void cal.offsetWidth; cal.classList.add('is-anim'); }
    };
    form.addEventListener('change', function () { render(true); });
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    if (printBtn) printBtn.addEventListener('click', function () {
      document.documentElement.classList.add('sw-print-sched');
      window.print();
    });
    window.addEventListener('afterprint', function () { document.documentElement.classList.remove('sw-print-sched'); });
    render(false);
  }

  /* ---------- Motion: guarded ---------- */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  var root = document.documentElement;

  /* Intro: the cut line pulls across the hero elevation (≤ 1.1 s; the h1 is text from the first paint). */
  var elev = SW.$('[data-elev]');
  if (elev) {
    gsap.fromTo(elev, { '--cut': '100%' }, { '--cut': '50%', duration: 1.1, ease: 'power3.inOut', delay: 0.15 });
    gsap.from(SW.$$('.co', elev), { autoAlpha: 0, x: 12, duration: 0.4, stagger: 0.08, delay: 0.9, ease: 'power2.out' });
  }

  /* Signature: page-long film build on the right rail + each section's film layers draw down as it enters. */
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: function (s) { root.style.setProperty('--sw-p', s.progress.toFixed(4)); }
  });
  SW.$$('[data-coat] .film').forEach(function (film) {
    gsap.fromTo(film, { '--film': 0 }, {
      '--film': 1, ease: 'none',
      scrollTrigger: { trigger: film.parentNode, start: 'top 85%', end: 'top 25%', scrub: 0.5 }
    });
  });

  /* Story: the block of rowhouses gets painted house by house as it crosses the screen. */
  var street = SW.$('[data-street]');
  if (street) {
    var houses = SW.$$('svg', street);
    street.classList.add('is-story');
    ScrollTrigger.create({
      trigger: street, start: 'top 80%', end: 'bottom 30%',
      onUpdate: function (s) {
        var n = Math.round(s.progress * houses.length);
        houses.forEach(function (h, i) { if (i < n) h.classList.add('is-painted'); });
      },
      onLeave: function () { houses.forEach(function (h) { h.classList.add('is-painted'); }); }
    });
  }

  /* Desktop: the hero cut keeps moving as you scroll away, until the house is nearly all painted. */
  ScrollTrigger.matchMedia({
    '(min-width: 640px)': function () {
      if (!elev) return;
      gsap.to(elev, { '--cut': '6%', ease: 'none', immediateRender: false,
        scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom 20%', scrub: 0.6 } });
    }
  });

  document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
