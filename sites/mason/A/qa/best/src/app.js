/* mason-A · Mortar Joint Progression: process story, wall checks, signature draws */
(function () {
  if (typeof SW === 'undefined') return;
  var motion = !SW.reduced && document.documentElement.classList.contains('sw-motion');
  var hasGsap = typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined';
  if (hasGsap) gsap.registerPlugin(ScrollTrigger);

  /* ── Process story: one joint, four stages. Buttons everywhere; scroll pin on wide screens. ── */
  SW.mod('process-story', function () {
    var sec = document.querySelector('[data-story="joint-process"]');
    if (!sec) return;
    var diagram = sec.querySelector('.process__diagram');
    var label = sec.querySelector('[data-stage-label]');
    var why = sec.querySelector('[data-stage-why]');
    var btns = sec.querySelectorAll('[data-goto]');
    var data = [
      ['01 Rake out', 'A hand tool takes the old mortar back to twice the joint width, without nicking the brick.'],
      ['02 Pack', 'Lime mortar goes in two layers, each pressed home, so it bonds to both brick faces.'],
      ['03 Strike', 'A jointer presses the mortar tight and sets the edge before it skins over.'],
      ['04 Tool', 'The concave profile is matched to your old joints. It sheds water off the wall.']
    ];
    var cur = -1;
    function set(i) {
      if (i === cur) return;
      cur = i;
      diagram.setAttribute('data-s', String(i));
      label.textContent = data[i][0];
      why.textContent = data[i][1];
      btns.forEach(function (b, j) {
        b.classList.toggle('is-active', j === i);
        b.setAttribute('aria-pressed', j === i ? 'true' : 'false');
      });
    }
    var st = null;
    btns.forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-goto');
        if (st && st.isActive) {
          var y = st.start + (st.end - st.start) * ((i + 0.5) / data.length);
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
        set(i);
      });
    });
    cur = 0;

    if (!motion || !hasGsap) return;
    var mm = gsap.matchMedia();
    mm.add('(min-width: 900px) and (min-height: 700px)', function () {
      st = ScrollTrigger.create({
        trigger: sec,
        start: 'top top',
        end: function () { return '+=' + Math.round(window.innerHeight * 0.3 * data.length); },
        pin: true,
        anticipatePin: 1,
        onUpdate: function (self) { set(Math.min(data.length - 1, Math.floor(self.progress * data.length))); }
      });
      return function () { st = null; };
    });
  });

  /* ── Wall checks: answers fill the joint and give a plain verdict ── */
  SW.mod('wall-checks', function () {
    document.querySelectorAll('[data-kind]').forEach(function (box) {
      var kind = box.getAttribute('data-kind');
      var sets = box.querySelectorAll('fieldset');
      var result = box.querySelector('.checklist__result');
      var fill = box.querySelector('.joint-diagram__fill');
      var label = box.querySelector('[data-joint-label]');
      if (!sets.length || !fill || !label) return;

      function picked() {
        var out = [];
        sets.forEach(function (fs) { var c = fs.querySelector('input:checked'); out.push(c ? c.value : null); });
        return out;
      }
      function update() {
        var v = picked();
        var answered = v.filter(function (x) { return x !== null; }).length;
        fill.style.setProperty('--joint-fill', (answered / sets.length).toFixed(2));
        result.removeAttribute('data-verdict');
        if (answered < sets.length) {
          label.textContent = answered + ' of ' + sets.length + ' answered. Keep going.';
          return;
        }
        var msg;
        if (kind === 'mortar') {
          var score = 0, spall = false;
          v.forEach(function (x) { if (x === 'spall') spall = true; else score += +x; });
          if (score >= 3) msg = 'Likely lime mortar. It needs lime again, done in the four stages above. Cement would crack this brick.';
          else if (score <= -2) { msg = 'Likely modern cement mortar. We test the brick before choosing the mix.'; result.setAttribute('data-verdict', 'cement'); }
          else msg = 'Could be either. A scratch test on site and a small test panel beside your wall settle it.';
          if (spall) msg += ' Crumbled brick beside gray patches is the classic sign of cement on soft brick.';
        } else {
          var lean = v[0] === 'lean';
          var n = v.reduce(function (a, x) { return a + (x === 'lean' ? 1 : +x); }, 0);
          if (n === 0) msg = 'No warning signs. A look at the crown every few years is enough.';
          else if (lean || n >= 3) msg = 'Rebuild the top to sound brick, then a new crown.';
          else if (n === 2) msg = 'A partial rebuild of the top courses, plus the crown.';
          else msg = 'Likely a crown repair and some repointing, not a rebuild.';
        }
        label.textContent = msg;
      }
      box.addEventListener('change', update);
    });
  });

  /* ── When to book: mark this month on the year strip ── */
  SW.mod('when-to-book', function () {
    var out = document.querySelector('.timing__readout');
    if (!out) return;
    var m = new Date().getMonth();
    var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var cell = document.querySelector('.timing__months [data-m="' + m + '"]');
    if (cell) cell.classList.add('is-now');
    var msg;
    if (m === 11 || m <= 1) msg = 'It is ' + names[m] + ': too cold for lime to cure. We do site visits now and book March work, so this is a good time to get on the list.';
    else if (m <= 4) msg = 'It is ' + names[m] + ': spring, the busiest stretch for repointing. Book now to start before summer.';
    else if (m <= 7) msg = 'It is ' + names[m] + ': warm and steady, the best weather for lime. Book now to get on the summer list.';
    else msg = 'It is ' + names[m] + ': the last good weeks before frost. Book soon, or plan the work for March.';
    out.textContent = msg;
  });

  /* ── Reviews: say which one is showing ── */
  SW.mod('rail-position', function () {
    var box = document.querySelector('[data-carousel]');
    var pos = box && box.querySelector('[data-rail-pos]');
    var track = box && box.querySelector('[data-carousel-track]');
    if (!pos || !track) return;
    var slides = track.children;
    function update() {
      var w = slides[1] ? slides[1].offsetLeft - slides[0].offsetLeft : track.clientWidth;
      var i = Math.min(slides.length - 1, Math.round(track.scrollLeft / Math.max(1, w)));
      var text = 'Review ' + (i + 1) + ' of ' + slides.length;
      if (pos.textContent !== text) pos.textContent = text;
    }
    var raf = 0;
    track.addEventListener('scroll', function () { if (!raf) raf = requestAnimationFrame(function () { raf = 0; update(); }); }, { passive: true });
    update();
  });

  /* ── Guarantee: the concave joint draws across as the band scrolls in ── */
  SW.mod('guarantee-draw', function () {
    if (!motion || !hasGsap) return;
    var sec = document.querySelector('.guarantee-sec');
    if (!sec) return;
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 80%',
      end: 'center 45%',
      onUpdate: function (self) { sec.style.setProperty('--sw-p', self.progress.toFixed(3)); },
      onLeave: function () { sec.style.setProperty('--sw-p', '1'); }
    });
  });

  /* ── Hero: the jointer tools the joint as the hero scrolls away ── */
  SW.mod('hero-jointer', function () {
    if (!motion || !hasGsap) return;
    var art = document.querySelector('.art--hero');
    if (!art) return;
    var st = { p: 0 };
    gsap.to(st, { p: 0.62, duration: 1.1, delay: 0.3, ease: 'power3.out', onUpdate: function () { art.style.setProperty('--hp', st.p.toFixed(3)); },
      onComplete: function () {
        ScrollTrigger.create({ trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6,
          onUpdate: function (self) { art.style.setProperty('--hp', (0.62 + 0.38 * self.progress).toFixed(3)); } });
      } });
  });

  /* ── Bed joints: each section's course fills as it scrolls in ── */
  SW.mod('bed-joints', function () {
    if (!motion || !hasGsap) return;
    document.querySelectorAll('.bed').forEach(function (bed) {
      bed.style.setProperty('--bp', '0');
      ScrollTrigger.create({ trigger: bed, start: 'top 92%', end: 'top 45%', scrub: 0.4,
        onUpdate: function (self) { bed.style.setProperty('--bp', self.progress.toFixed(3)); } });
    });
  });

  /* ── Break: the raking light swings across the rowhouses ── */
  SW.mod('break-light', function () {
    if (!motion || !hasGsap) return;
    var light = document.querySelector('.break__light');
    if (!light) return;
    gsap.fromTo(light, { x: -260 }, { x: 260, ease: 'none', scrollTrigger: { trigger: '.break', start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  if (hasGsap && document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
