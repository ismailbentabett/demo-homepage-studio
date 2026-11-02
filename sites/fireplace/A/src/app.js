/* fireplace-A signature: flue-level brush marker + ember intro */
(function () {
  if (typeof SW === 'undefined') return;

  /* Symptom checker (works without JS via data-checklist kit; this adds plain-text mapping) */
  SW.mod('symptom-checker', function () {
    var map = {
      smoke: { meaning: 'poor draft or a blocked flue', visit: 'Camera inspection', urgency: 'before your next fire' },
      smell: { meaning: 'creosote odor or a missing cap', visit: 'Chimney sweep', urgency: 'this season' },
      flakes: { meaning: 'stage-2 creosote building up', visit: 'Chimney sweep', urgency: 'before your next fire' },
      sounds: { meaning: 'an animal or loose debris in the flue', visit: 'Camera inspection', urgency: 'before your next fire' },
      water: { meaning: 'a cracked crown or failed flashing', visit: 'Crown and brick repair', urgency: 'this season' },
      stove: { meaning: 'wet wood, a blocked pipe or a worn gasket', visit: 'Wood stove sweep and service', urgency: 'before your next fire' },
      unused: { meaning: 'flue tiles may be cracked or blocked', visit: 'Camera inspection', urgency: 'before you light it' }
    };
    var buttons = document.querySelectorAll('[data-symptom]');
    var result = document.querySelector('[data-checklist-result]');
    var cta = document.querySelector('.checker__symptom .btn-primary');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        var key = btn.getAttribute('data-symptom');
        var entry = map[key];
        if (entry && result) {
          result.textContent = 'That usually means ' + entry.meaning + '. Book a ' + entry.visit + ' ' + entry.urgency + '.';
        }
        if (cta && entry) {
          cta.setAttribute('data-service', entry.visit);
          cta.textContent = 'Book a ' + entry.visit;
        }
      });
    });
  });

  /* Signature moment: flue-level brush marker driven by scroll */
  SW.mod('flue-signature', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* Ember glow intro on hero arch */
    var heroFrame = document.querySelector('.hero__frame');
    if (heroFrame) {
      gsap.fromTo(heroFrame,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', delay: 0.1 }
      );
    }

    /* H1 line-mask reveal */
    var lines = document.querySelectorAll('.split-line');
    if (lines.length) {
      lines.forEach(function (line, i) {
        setTimeout(function () {
          line.classList.add('is-revealed');
        }, 200 + i * 70);
      });
    }

    /* Brush marker climbs through flue levels */
    var sections = document.querySelectorAll('[data-level]');
    sections.forEach(function (sec) {
      var level = parseInt(sec.getAttribute('data-level'), 10);
      ScrollTrigger.create({
        trigger: sec,
        start: 'top center',
        end: 'bottom center',
        onEnter: function () { setActiveLevel(level); },
        onEnterBack: function () { setActiveLevel(level); }
      });
    });

    function setActiveLevel(n) {
      document.querySelectorAll('[data-level]').forEach(function (el) {
        el.classList.toggle('is-active-level', parseInt(el.getAttribute('data-level'), 10) === n);
      });
      /* Expose as CSS var for future signature drawing */
      document.documentElement.style.setProperty('--flue-level', n);
    }

    /* Process story clip wipe (pinned ≥640px only) */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var processSec = document.getElementById('process');
        if (!processSec) return;
        gsap.to(processSec, {
          '--sw-p': 1,
          ease: 'none',
          scrollTrigger: {
            trigger: processSec,
            start: 'top top',
            end: '+=200%',
            pin: true,
            scrub: true
          }
        });
      }
    });

    /* Refresh after fonts load */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  });
})();