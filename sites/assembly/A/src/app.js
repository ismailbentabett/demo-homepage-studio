/* assembly-A: the exploded views close (intro + steps story) and the two bench tools. */
(function () {
  var root = document.documentElement;
  var motion = !SW.reduced && root.classList.contains('sw-motion') && window.gsap;

  /* ---------- tools (work with or without motion) ---------- */
  var planner = SW.$('[data-hook="planner"]');
  if (planner) {
    var date = SW.$('[data-plan-date]', planner);
    var outDate = SW.$('[data-plan-out-date]', planner);
    var rooms = SW.$$('[data-plan-room]', planner);
    var lines = SW.$$('.plan__out li', planner);
    var book = SW.$('[data-plan-book]', planner);
    var render = function () {
      var on = rooms.filter(function (r) { return r.checked; }).map(function (r) { return r.value; });
      lines.forEach(function (li) {
        var need = li.getAttribute('data-rooms').split(' ');
        li.hidden = !(need.indexOf('all') > -1 || need.some(function (n) { return on.indexOf(n) > -1; }));
      });
      var d = date && date.value ? new Date(date.value + 'T12:00:00') : null;
      if (outDate) outDate.textContent = d && !isNaN(d) ? d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : '';
    };
    rooms.forEach(function (r) { r.addEventListener('change', render); });
    if (date) date.addEventListener('change', render);
    render();
    if (book) book.addEventListener('click', function () {
      var list = lines.filter(function (li) { return !li.hidden; }).map(function (li, i) { return (i + 1) + '. ' + li.textContent.trim(); });
      var when = outDate && outDate.textContent ? 'Move-in ' + outDate.textContent + '. ' : '';
      SW.prefillForm({ details: when + 'Order of the day: ' + list.join(' / '), when: when ? 'On my move-in date' : '' });
    });
  }

  var tip = SW.$('[data-hook="tipover"]');
  if (tip) {
    var res = SW.$('[data-tip-res]', tip);
    var svg = SW.$('.tip__svg', tip);
    var val = function (n) { var c = SW.$('input[name="' + n + '"]:checked', tip); return c ? c.value : ''; };
    var setP = function (p) { if (svg) svg.style.setProperty('--sw-p', p); };
    if (motion) setP(0);
    var answer = function () {
      var h = val('tip-h'), k = val('tip-k'), w = val('tip-w');
      if (!h || !k || !w) return;
      var low = h === 'low' || (h === 'mid' && k === 'no');
      var txt;
      if (low) txt = 'Low risk. We can still strap it.';
      else if (w === 'plaster') txt = 'Strap it, with toggle anchors in the plaster.';
      else if (w === 'masonry') txt = 'Strap it, with sleeve anchors in the masonry.';
      else txt = 'Strap it to a stud.';
      res.textContent = txt;
      setP(1);
    };
    SW.$$('[data-tip]', tip).forEach(function (i) { i.addEventListener('change', answer); });
  }

  if (!motion) return;
  var gsap = window.gsap, ST = window.ScrollTrigger;
  if (ST) gsap.registerPlugin(ST);

  /* ---------- intro: the hero dresser closes, 02 and 03 tick ---------- */
  var hero = SW.$('.hero .xv');
  var heroLines = SW.$$('.hero__line');
  if (hero) {
    /* the parts drift in from further out and settle into the exploded plate */
    var st = { k: 1.9, o: 0 };
    hero.style.setProperty('--xk', st.k);
    gsap.to(st, {
      k: 1, o: 1, duration: 1.1, delay: 0.05, ease: 'power3.out',
      onUpdate: function () { hero.style.setProperty('--xk', st.k.toFixed(3)); },
      onComplete: function () { hero.style.removeProperty('--xk'); }
    });
    heroLines.forEach(function (l, i) { setTimeout(function () { l.classList.add('is-done'); }, 450 + i * 260); });
  }

  /* ---------- story: each step's drawing closes as it crosses the viewport (scrub, no pin) ---------- */
  if (ST) {
    /* FIG. 1: as the hero scrolls away, the top drops on and the drawers slide shut */
    if (hero) ST.create({
      trigger: '.hero', start: 'top top', end: 'bottom 35%', scrub: 0.5,
      onUpdate: function (self) { hero.style.setProperty('--sw-p', self.progress.toFixed(3)); }
    });
    SW.$$('.step').forEach(function (step) {
      var xv = SW.$('.step__fig .xv', step);
      if (!xv) return;
      ST.create({
        trigger: step,
        start: 'top 82%',
        end: 'center 45%',
        scrub: 0.6,
        onUpdate: function (self) {
          xv.style.setProperty('--sw-p', self.progress.toFixed(3));
          step.classList.toggle('is-done', self.progress >= 0.9);
        }
      });
    });
    var foot = SW.$('.foot__step');
    if (foot) ST.create({ trigger: foot, start: 'top 85%', once: true, onEnter: function () { foot.classList.add('is-done'); } });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ST.refresh(); });
  }
})();
