/* farm-B signature: crate-tag drop intro + freezer-math scroll story */
(function () {
  if (!window.SW) return;

  /* Tag drop intro on hero mosaic */
  SW.mod('crate-tag-intro', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    var tags = document.querySelectorAll('.hero__mosaic .tag');
    if (!tags.length) return;

    gsap.set(tags, { y: -40, opacity: 0 });
    gsap.to(tags, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
      delay: 0.2
    });
  });

  /* Freezer math visual fill on scroll (desktop only) */
  SW.mod('freezer-story', function () {
    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;
    var section = document.getElementById('freezer-math');
    if (!section) return;

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1
          }
        });

        var result = section.querySelector('.tool-result');
        if (result) {
          tl.from(result, { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'none' });
        }
      }
    });
  });

  /* Picked-out check interaction */
  SW.mod('picked-out-check', function () {
    var select = document.getElementById('fc-day');
    var statusEl = document.querySelector('#field-check .tool-result__status');
    var noteEl = document.querySelector('#field-check .tool-result__note');
    if (!select || !statusEl || !noteEl) return;

    var states = {
      sat: { status: 'Open · best before 10 am', note: 'Rows mowed Friday evening. Buckets at the gate.' },
      sun: { status: 'Closed · opens Tue 8 am', note: 'Stand closed Sundays. Text to confirm Monday status.' },
      weekday: { status: 'Open · 8 am – 5 pm', note: 'Lighter crowds midweek. Field status posted each evening.' }
    };

    select.addEventListener('change', function () {
      var s = states[select.value] || states.sat;
      statusEl.textContent = s.status;
      noteEl.textContent = s.note;
    });
  });

  /* Share sizer interaction */
  SW.mod('share-sizer', function () {
    var select = document.getElementById('ss-people');
    var statusEl = document.querySelector('#share-sizer .tool-result__status');
    var noteEl = document.querySelector('#share-sizer .tool-result__note');
    if (!select || !statusEl || !noteEl) return;

    var sizes = {
      '1': { share: 'Half share recommended', items: '4–6 items/week' },
      '2': { share: 'Half share recommended', items: '6–8 items/week' },
      '3': { share: 'Full share recommended', items: '8–12 items/week' },
      '5': { share: 'Full share recommended', items: '10–14 items/week' }
    };

    select.addEventListener('change', function () {
      var s = sizes[select.value] || sizes['2'];
      statusEl.textContent = s.share;
      noteEl.textContent = s.items + ' · Pause anytime by text';
    });
  });

  /* Freezer math interaction */
  SW.mod('freezer-math-calc', function () {
    var select = document.getElementById('fm-size');
    var statusEl = document.querySelector('#freezer-math .tool-result__status');
    if (!select || !statusEl) return;

    select.addEventListener('change', function () {
      if (select.value === 'quarter') {
        statusEl.textContent = 'Fits a 7 cu ft chest';
      } else {
        statusEl.textContent = 'Fits a 15 cu ft chest';
      }
    });
  });
})();