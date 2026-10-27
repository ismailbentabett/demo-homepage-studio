/* handyman-A: Time Card Punch */
(function () {
  if (typeof SW === 'undefined') return;

  /* ---------- the visit card (tool behaviour: runs with or without motion) ---------- */
  SW.mod('visitcard', function () {
    var form = document.querySelector('[data-checklist]');
    if (!form) return;
    var boxes = Array.prototype.slice.call(form.querySelectorAll('input[type="checkbox"]'));
    var holes = form.querySelectorAll('.pcard__holes i');
    var list = form.querySelector('[data-planner-list]');
    var book = form.querySelector('[data-planner-book]');
    var print = form.querySelector('[data-planner-print]');
    var shown = {};

    function picked() { return boxes.filter(function (b) { return b.checked; }).map(function (b) { return b.value; }); }

    function render() {
      var names = picked();
      boxes.forEach(function (b, i) { if (holes[i]) holes[i].classList.toggle('is-punched', b.checked); });
      var next = {};
      list.innerHTML = '';
      names.forEach(function (n) {
        var li = document.createElement('li');
        li.textContent = n;
        if (!shown[n]) li.classList.add('is-new');
        next[n] = true;
        list.appendChild(li);
      });
      shown = next;
    }
    boxes.forEach(function (b) { b.addEventListener('change', render); });
    render();

    if (book) book.addEventListener('click', function (e) {
      var names = picked();
      if (!names.length || !SW.prefillForm) return;
      e.preventDefault();
      SW.prefillForm({ service: names[0], details: 'Visit card: ' + names.join(', ') + '.' }, { focus: 'service' });
    });
    if (print) print.addEventListener('click', function () {
      document.documentElement.classList.add('sw-print-card');
      window.print();
      setTimeout(function () { document.documentElement.classList.remove('sw-print-card'); }, 400);
    });
  });

  /* ---------- signature: stamps punch in, rails ink down, the clock runs ---------- */
  SW.mod('signature', function () {
    var root = document.documentElement;
    var stamps = document.querySelectorAll('[data-sw-signature] .time-stamp');

    if (SW.reduced || !root.classList.contains('sw-motion') || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      stamps.forEach(function (s) { s.classList.add('is-active'); });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    /* the page is the clock: scroll runs 08:00 → 12:00, the footer punch-out lands at 12:00 */
    var clockEl = document.querySelector('[data-page-clock]');
    var heroCard = document.querySelector('.hero__card');
    var punch = document.querySelector('[data-punch]');
    function fmt(p) {
      var mins = Math.round(p * 240 / 5) * 5;
      var h = 8 + Math.floor(mins / 60), m = mins % 60;
      return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    }
    function setClock(p) {
      if (clockEl) clockEl.textContent = fmt(p);
      if (heroCard) heroCard.style.setProperty('--clock', p.toFixed(3));
      root.style.setProperty('--clock', p.toFixed(3));
    }
    setClock(0);
    ScrollTrigger.create({
      trigger: document.body, start: 'top top',
      endTrigger: punch || document.body, end: punch ? 'top 88%' : 'bottom bottom', scrub: true,
      onUpdate: function (st) {
        setClock(st.progress);
        if (punch && st.progress > 0.995 && !punch.classList.contains('is-slammed')) punch.classList.add('is-slammed');
      }
    });

    /* each section's time pill presses in and inks solid when the clock line reaches it (reverses on the way back) */
    stamps.forEach(function (stamp) {
      var section = stamp.closest('section, footer');
      if (!section) return;
      stamp.classList.remove('is-active');
      ScrollTrigger.create({
        trigger: stamp, start: 'top 80%',
        onEnter: function () { stamp.classList.add('is-active', 'is-inked'); },
        onLeaveBack: function () { stamp.classList.remove('is-inked'); }
      });
    });
    if (punch) ScrollTrigger.create({
      trigger: punch, start: 'top 96%', once: true,
      onEnter: function () { punch.classList.add('is-slammed'); }
    });

    /* break: the caulk bead runs along the tub as you scroll */
    var brk = document.querySelector('.break');
    if (brk) {
      brk.style.setProperty('--bead', 0.35);
      ScrollTrigger.create({
        trigger: brk, start: 'top 85%', end: 'bottom 40%', scrub: 0.4,
        onUpdate: function (st) { brk.style.setProperty('--bead', (0.35 + 0.65 * st.progress).toFixed(3)); }
      });
    }

    ScrollTrigger.matchMedia({
      /* desktop rails ink down their section */
      '(min-width: 900px)': function () {
        var rails = document.querySelectorAll('.has-rail > .time-rail');
        rails.forEach(function (rail) {
          var sec = rail.parentElement;
          rail.style.setProperty('--rail', 0);
          ScrollTrigger.create({
            trigger: sec, start: 'top 70%', end: 'bottom 60%', scrub: 0.3,
            onUpdate: function (st) { rail.style.setProperty('--rail', st.progress.toFixed(3)); }
          });
        });
        return function () { rails.forEach(function (r) { r.style.removeProperty('--rail'); }); };
      },

      /* the story: a four-hour visit scrubbed by scroll, the clock runs 8 to 12 (no pin: the page never stalls) */
      '(min-width: 900px) and (min-height: 640px) and (max-height: 1400px)': function () {
        var how = document.querySelector('[data-story]');
        if (!how) return;
        var steps = how.querySelectorAll('.step');
        var line = how.querySelector('[data-steps]');
        var dial = how.querySelector('.dial__svg');
        var clock = how.querySelector('[data-clock]');
        var n = steps.length;
        how.classList.add('is-story');
        function set(p) {
          line.style.setProperty('--sw-p', p.toFixed(3));
          dial.style.setProperty('--sw-p', p.toFixed(3));
          var mins = Math.round(p * 240 / 5) * 5;
          var h = 8 + Math.floor(mins / 60), m = mins % 60;
          clock.textContent = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
          var on = Math.min(n - 1, Math.floor(p * n * 0.999 + 0.0001));
          steps.forEach(function (s, i) { s.classList.toggle('is-on', i <= on); });
        }
        set(0);
        var st = ScrollTrigger.create({
          trigger: line, start: 'top 75%', end: 'bottom 40%', scrub: 0.5,
          onUpdate: function (self) { set(self.progress); }
        });
        return function () {
          st.kill();
          how.classList.remove('is-story');
          line.style.removeProperty('--sw-p');
          dial.style.removeProperty('--sw-p');
          clock.textContent = '08:00 → 12:00';
          steps.forEach(function (s) { s.classList.add('is-on'); });
        };
      }
    });

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  });
})();
