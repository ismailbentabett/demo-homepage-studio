/* plumber-A · Wrench & Wren: the tag-and-rail system.
   Tool glue runs for everyone (no motion needed). Motion lives behind the sw-motion gate. */
(function () {
  var doc = document.documentElement;

  /* ---- heater gauge: needle follows the ticked signs ---- */
  document.querySelectorAll('.tool').forEach(function (tool) {
    var list = tool.querySelector('[data-checklist]');
    if (!list || !tool.querySelector('.needle')) return;
    var sync = function () {
      var boxes = list.querySelectorAll('input[type=checkbox]');
      var on = list.querySelectorAll('input[type=checkbox]:checked').length;
      tool.style.setProperty('--n', boxes.length ? on / boxes.length : 0);
    };
    list.addEventListener('change', sync);
    sync();
  });

  /* ---- pressure gauge ---- */
  var psi = document.querySelector('[data-psi]');
  if (psi) {
    var input = psi.querySelector('input[type=range]');
    var out = psi.querySelector('output');
    var msg = psi.querySelector('[data-psi-out]');
    var tool = psi.closest('.tool');
    var setPsi = function () {
      var v = Number(input.value);
      out.textContent = v;
      var a = Math.max(-120, Math.min(120, -120 + (v / 160) * 240));
      tool.style.setProperty('--psi-a', a + 'deg');
      if (v < 40) msg.textContent = v + ' psi: low. Check the main is fully open, then ask us to look at the supply.';
      else if (v > 80) msg.textContent = v + ' psi: high. That strains every joint and the heater. A pressure regulator fixes it.';
      else msg.textContent = v + ' psi: inside the normal 40 to 80 range. Nothing to do.';
    };
    input.addEventListener('input', setPsi);
    setPsi();
  }

  /* ---- print the shut-off tag card ---- */
  var printBtn = document.querySelector('[data-print-tag]');
  if (printBtn) {
    printBtn.addEventListener('click', function () {
      doc.classList.add('sw-print-tag');
      window.print();
    });
    window.addEventListener('afterprint', function () { doc.classList.remove('sw-print-tag'); });
  }

  /* ---- footer stamp: press to tag ---- */
  var stamp = document.querySelector('[data-stamp]');
  if (stamp) {
    stamp.addEventListener('click', function () {
      var on = stamp.getAttribute('aria-pressed') !== 'true';
      stamp.setAttribute('aria-pressed', on ? 'true' : 'false');
      stamp.classList.remove('is-stamping');
      void stamp.offsetWidth;
      if (on) stamp.classList.add('is-stamping');
    });
  }

  /* ---- motion ---- */
  var reduced = (window.SW && SW.reduced) || matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !doc.classList.contains('sw-motion')) return;

  /* rails draw across when their section arrives */
  var rails = document.querySelectorAll('.rail:not(.rail--hero)');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-drawn'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -15% 0px' });
    rails.forEach(function (r) { io.observe(r.parentElement ? r : r); });
  } else rails.forEach(function (r) { r.classList.add('is-drawn'); });

  function start() {
    if (!window.gsap || !window.ScrollTrigger) {
      rails.forEach(function (r) { r.classList.add('is-drawn'); });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    var story = document.querySelector('#process');
    if (story) {
      var steps = story.querySelectorAll('.step');
      var list = story.querySelector('.story__steps');
      var setOn = function (n) {
        steps.forEach(function (s) { s.classList.toggle('is-on', Number(s.dataset.stepN) <= n); });
        story.querySelectorAll('.stag--story').forEach(function (t) { t.classList.toggle('is-on', Number(t.dataset.tag) <= n); });
        story.querySelectorAll('.ps').forEach(function (p) {
          var k = Number((p.getAttribute('class').match(/ps-(\d)/) || [])[1]);
          p.classList.toggle('is-on', k && k <= n);
        });
      };

      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          story.classList.add('is-live');
          setOn(1);
          steps.forEach(function (s) {
            var n = Number(s.dataset.stepN);
            ScrollTrigger.create({
              trigger: s, start: 'top 62%', end: 'bottom 38%',
              onEnter: function () { setOn(n); },
              onLeaveBack: function () { setOn(n - 1); }
            });
          });
          var pipe = ScrollTrigger.create({
            trigger: list, start: 'top 60%', end: 'bottom 60%', scrub: true,
            onUpdate: function (self) { list.style.setProperty('--sw-p', self.progress.toFixed(3)); }
          });
          list.style.setProperty('--sw-p', '0');
          return function () {
            story.classList.remove('is-live');
            list.style.removeProperty('--sw-p');
            setOn(6);
            pipe.kill();
          };
        }
      });
    }

    /* break band: the tags drop in on a swing as the band arrives */
    var tags = document.querySelectorAll('.btag');
    if (tags.length) {
      gsap.from(tags, {
        rotation: -24, y: -30, opacity: 0, duration: 1.2, ease: 'elastic.out(1, 0.45)', stagger: 0.12,
        transformOrigin: '50% -12px', clearProps: 'transform,opacity',
        scrollTrigger: { trigger: '#break', start: 'top 75%', once: true }
      });
    }

    /* service tags: swing on as each row arrives */
    gsap.utils.toArray('.board__item .ttag').forEach(function (t) {
      gsap.from(t, {
        rotation: -18, duration: 1.1, ease: 'elastic.out(1, 0.4)', transformOrigin: '50% -14px', clearProps: 'transform',
        scrollTrigger: { trigger: t, start: 'top 88%', once: true }
      });
    });

    document.fonts && document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }

  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start);
})();
