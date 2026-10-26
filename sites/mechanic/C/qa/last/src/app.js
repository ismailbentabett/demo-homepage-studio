/* mechanic-C · Car-Year Thermometer Rail signature */
(function () {
  if (typeof SW === 'undefined') return;

  /* ── Thermo-rail signature moment (scrub-driven) ─────────────── */
  SW.mod('thermo-rail', function () {
    if (SW.reduced) return;
    var rails = document.querySelectorAll('[data-sw-signature="thermo-rail"]');
    if (!rails.length) return;

    var seasons = [];
    document.querySelectorAll('[data-season]').forEach(function (el) {
      seasons.push({
        el: el,
        temp: parseInt(el.getAttribute('data-season'), 10),
        label: el.getAttribute('data-season-label') || ''
      });
    });
    if (!seasons.length) return;

    /* Intro tick: -20 → first season temp over 1.1s */
    var heroRail = document.querySelector('.hero .thermo-rail__readout [data-count]');
    if (heroRail && typeof gsap !== 'undefined') {
      var startTemp = -20;
      var endTemp = seasons[0].temp;
      var obj = { v: startTemp };
      gsap.to(obj, {
        v: endTemp,
        duration: 1.1,
        ease: 'power2.out',
        onUpdate: function () {
          heroRail.textContent = Math.round(obj.v);
        }
      });
    }

    /* Scroll-driven scrub: continuous temperature interpolation */
    if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
      var state = { temp: seasons[0].temp };

      /* Build a timeline that scrubs through all season temps */
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'main',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8
        },
        onUpdate: function () {
          var t = Math.round(state.temp);
          rails.forEach(function (rail) {
            var span = rail.querySelector('.thermo-rail__readout [data-count]') ||
                       rail.querySelector('.thermo-rail__readout span');
            if (span) span.textContent = t;
          });
        }
      });

      /* Add keyframes for each season boundary */
      var totalH = document.documentElement.scrollHeight - window.innerHeight;
      seasons.forEach(function (s, i) {
        var rect = s.el.getBoundingClientRect();
        var top = rect.top + window.scrollY;
        var progress = Math.max(0, Math.min(1, top / totalH));
        tl.to(state, { temp: s.temp, duration: 0.01 }, progress);
      });
    }
  });

  /* ── Varied reveal motions by section role ───────────────────── */
  SW.mod('varied-reveal', function () {
    if (SW.reduced) return;
    if (typeof IntersectionObserver === 'undefined') return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: '0px 0px -5% 0px' });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      observer.observe(el);
    });
  });

  /* ── Breakup pinned story (desktop only) ─────────────────────── */
  SW.mod('breakup-pin', function () {
    if (SW.reduced) return;
    if (typeof ScrollTrigger === 'undefined') return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var section = document.querySelector('.breakup-pin');
        if (!section) return;
        var cards = section.querySelectorAll('.breakup-card');
        if (!cards.length) return;

        var n = cards.length;
        section.style.height = 'calc(' + n + ' * 55svh + 100svh)';

        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          pin: '.breakup-pin__sticky',
          scrub: true
        });

        cards.forEach(function (card, i) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              scrub: true
            },
            opacity: 0,
            y: 40
          });
        });
      }
    });
  });

  /* ── Noise finder tool (local logic, no kit module) ──────────── */
  SW.mod('noise-finder', function () {
    var form = document.querySelector('.noise-form');
    var result = document.querySelector('[data-noise-result]');
    if (!form || !result) return;

    var causes = {
      'braking-grinding': 'Worn brake pads or scored rotors. Book a brake check soon.',
      'braking-squeal': 'Glazed pads or wear indicators. Safe to drive in this week.',
      'braking-clunk': 'Loose caliper bracket or worn pad retainer. Book today.',
      'turning-clunk': 'CV joint or ball joint wear. Get it checked before highway driving.',
      'turning-click': 'CV axle joint wearing. Book this week.',
      'turning-hum': 'Wheel bearing starting to go. Book within two weeks.',
      'bumps-clunk': 'Sway bar link or strut mount. Common after breakup. Book when convenient.',
      'bumps-squeal': 'Bushings drying out. Note it at your next service.',
      'speed-hum': 'Wheel bearing or tire cupping. Book a diagnosis.',
      'speed-grinding': 'Brake drag or rotor runout. Book soon.',
      'cold-squeal': 'Belt glaze or tensioner. Common in winter mornings. Mention at drop-off.',
      'cold-click': 'Starter bendix or valve train. Note it when you book.'
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var when = form.querySelector('[name="noise-when"]:checked');
      var type = form.querySelector('[name="noise-type"]:checked');
      if (!when || !type) {
        result.innerHTML = '<p>Pick both a "when" and a "what" above.</p>';
        return;
      }
      var key = when.value + '-' + type.value;
      var answer = causes[key] || 'That combination is less common. Drop the car off and we\'ll listen with you.';
      result.innerHTML = '<div class="thermo-readout"><p class="thermo-readout__value">' + when.value.charAt(0).toUpperCase() + when.value.slice(1) + ', ' + type.value + '</p><p class="thermo-readout__note">' + answer + '</p></div><p style="margin-top:var(--s-3)"><a href="#contact" class="btn btn-primary" data-service="Check engine">Book a diagnosis</a></p>';
    });
  });
})();