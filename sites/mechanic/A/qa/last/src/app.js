/* mechanic-A · app.js */
(function () {
  if (typeof SW === 'undefined') return;

  /* Signature intro: line 01 chip flips waiting → doing, clock starts */
  SW.mod('signature-intro', function () {
    if (SW.reduced) return;
    var card = document.querySelector('.hero .ro-card');
    if (!card) return;
    var line01 = card.querySelector('.ro-line:first-child');
    if (!line01) return;
    var chip = line01.querySelector('.chip');
    var clock = line01.querySelector('.ro-line__clock');
    if (!chip || !clock) return;

    gsap.set(chip, { opacity: 0, scale: 0.8 });
    gsap.set(clock, { opacity: 0 });

    var tl = gsap.timeline({ delay: 0.3 });
    tl.to(chip, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' })
      .to(clock, { opacity: 1, duration: 0.3, ease: 'power2.out' }, '-=0.2');
  });

  /* Process story: lines write in via clip-path wipe on scroll */
  SW.mod('process-story', function () {
    if (SW.reduced) return;
    var lines = document.querySelectorAll('.ro-line--story');
    if (!lines.length) return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        lines.forEach(function (line) {
          var media = line.nextElementSibling;
          var targets = [line];
          if (media && media.classList.contains('ro-line__media')) targets.push(media);

          gsap.set(targets, { clipPath: 'inset(0 0 100% 0)' });

          ScrollTrigger.create({
            trigger: line,
            start: 'top 85%',
            once: true,
            onEnter: function () {
              gsap.to(targets, {
                clipPath: 'inset(0 0 0% 0)',
                duration: 0.9,
                ease: 'power2.out',
                stagger: 0.1
              });
            }
          });
        });
      }
    });
  });

  /* Role-specific reveals via IntersectionObserver */
  SW.mod('role-reveals', function () {
    if (SW.reduced) return;
    var els = document.querySelectorAll('[data-reveal]');
    if (!els.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -15% 0px', threshold: 0.02 });

    els.forEach(function (el) { io.observe(el); });
  });

  /* Brake wear estimator: pad bar micro-interaction + ro-line output */
  SW.mod('brake-estimator', function () {
    var slider = document.querySelector('[data-est-input]');
    if (!slider) return;
    var bars = document.querySelectorAll('.estimator__pad-bar');
    var chip = document.querySelector('[data-est-chip]');
    var statusEl = document.querySelector('[data-est-status]');
    var timeEl = document.querySelector('[data-est-time]');

    var states = [
      { label: 'New', chip: 'done', status: 'Pads are new (12 mm). No work needed.', time: 'Check again in 6–12 months.' },
      { label: 'Half', chip: 'done', status: 'Pads at half life (6 mm). Still safe.', time: 'Plan for replacement in 3–6 months.' },
      { label: 'Low', chip: 'waiting', status: 'Pads at 3 mm — book within two months.', time: 'Metal-on-metal risk if delayed past 4 weeks.' },
      { label: 'Metal', chip: 'doing', status: 'Metal-on-metal. Stop driving and call now.', time: 'Rotors likely scored; full brake job needed.' }
    ];

    function update() {
      var val = parseInt(slider.value, 10);
      bars.forEach(function (bar) {
        var pad = parseInt(bar.getAttribute('data-pad'), 10);
        bar.removeAttribute('data-state');
        if (pad === val) bar.setAttribute('data-state', 'active');
        else if (pad < val) bar.setAttribute('data-state', 'worn');
      });
      var s = states[val];
      if (chip && s) {
        chip.className = 'chip chip--' + s.chip;
        chip.setAttribute('data-status', s.chip);
        chip.textContent = s.label;
      }
      if (statusEl && s) statusEl.textContent = s.status;
      if (timeEl && s) timeEl.textContent = s.time;
    }

    slider.addEventListener('input', update);
    update();
  });

  /* Scale-in reveal for guarantee band and other scale-in hooks */
  SW.mod('scale-reveal', function () {
    if (SW.reduced) return;
    var els = document.querySelectorAll('[data-reveal="scale-in"]');
    if (!els.length) return;

    gsap.set(els, { scale: 0.92, opacity: 0 });

    ScrollTrigger.batch(els, {
      start: 'top 88%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.4)', stagger: 0.08 });
      }
    });
  });

  /* Refresh ScrollTrigger after fonts load */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();