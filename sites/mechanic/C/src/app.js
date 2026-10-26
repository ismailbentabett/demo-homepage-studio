/* mechanic-C · Car-Year Thermometer Rail signature */
(function () {
  if (typeof SW === 'undefined') return;

  /* ── Thermo-rail signature moment ─────────────────────────────── */
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

    var currentReadout = null;

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

    /* Scroll-driven crossfade between seasons */
    if (typeof ScrollTrigger !== 'undefined') {
      seasons.forEach(function (s, i) {
        ScrollTrigger.create({
          trigger: s.el,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: function () { updateRail(s); },
          onEnterBack: function () { updateRail(s); }
        });
      });
    }

    function updateRail(season) {
      if (currentReadout === season.temp) return;
      currentReadout = season.temp;
      rails.forEach(function (rail) {
        var readout = rail.querySelector('.thermo-rail__readout');
        if (!readout) return;
        /* Animate number if GSAP available */
        var span = readout.querySelector('[data-count]') || readout.querySelector('span');
        if (span && typeof gsap !== 'undefined' && !SW.reduced) {
          var cur = parseInt(span.textContent, 10) || 0;
          var target = season.temp;
          var o = { v: cur };
          gsap.to(o, {
            v: target,
            duration: 0.6,
            ease: 'power1.out',
            onUpdate: function () {
              span.textContent = Math.round(o.v);
            }
          });
        } else if (span) {
          span.textContent = season.temp;
        }
      });
    }
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
      result.innerHTML = '<p><strong>' + when.value.charAt(0).toUpperCase() + when.value.slice(1) + ', ' + type.value + ':</strong> ' + answer + '</p><p style="margin-top:var(--s-3)"><a href="#contact" class="btn btn-primary" data-service="Check engine">Book a diagnosis</a></p>';
    });
  });
})();