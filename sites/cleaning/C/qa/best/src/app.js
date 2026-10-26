/* cleaning-C · Riverfog Housekeeping · Season Dial signature */
(function () {
  if (typeof SW === 'undefined') return;

  /* Season dial: activate segment per almanac section */
  var sections = ['almanac-spring', 'almanac-summer', 'almanac-fall', 'almanac-winter'];
  var segClass = {
    'almanac-spring': 'season-dial__seg--spring',
    'almanac-summer': 'season-dial__seg--summer',
    'almanac-fall': 'season-dial__seg--fall',
    'almanac-winter': 'season-dial__seg--winter'
  };

  function updateDial(activeId) {
    var dials = document.querySelectorAll('.season-dial');
    dials.forEach(function (dial) {
      dial.querySelectorAll('.season-dial__seg').forEach(function (seg) {
        seg.classList.remove('is-active');
      });
      if (activeId && segClass[activeId]) {
        var active = dial.querySelector('.' + segClass[activeId]);
        if (active) active.classList.add('is-active');
      }
    });
  }

  SW.mod('season-dial', function () {
    if (!document.documentElement.classList.contains('sw-motion')) {
      /* Static: show all segments dimly, no animation */
      return;
    }

    /* GSAP ScrollTrigger for dial turn */
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    /* Intro: fog fade on hero */
    var scrim = document.querySelector('.hero__scrim');
    if (scrim) {
      gsap.fromTo(scrim, { opacity: 0.4 }, {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    /* H1 line mask reveal */
    var h1 = document.querySelector('.hero__title');
    if (h1 && h1.classList.contains('is-split')) {
      var lines = h1.querySelectorAll('.split-line');
      if (lines.length) {
        gsap.from(lines, {
          yPercent: 100,
          duration: 0.7,
          stagger: 0.07,
          ease: 'cubic-bezier(.2,.7,.1,1)',
          delay: 0.2
        });
      }
    }

    /* Dateline wipes */
    document.querySelectorAll('.dateline').forEach(function (el) {
      gsap.fromTo(el,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    /* Season dial activation per section */
    sections.forEach(function (id) {
      var el = document.getElementById(id);
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: function () { updateDial(id); },
        onEnterBack: function () { updateDial(id); }
      });
    });

    /* Refresh after fonts load */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        ScrollTrigger.refresh();
      });
    }
  });

  /* Countdown tool: simple guest-ready calculator */
  SW.mod('countdown', function () {
    var input = document.querySelector('#guest-date');
    var result = document.querySelector('.countdown-tool__result');
    if (!input || !result) return;

    input.addEventListener('change', function () {
      var val = input.value;
      if (!val) { result.textContent = ''; return; }
      var arrival = new Date(val + 'T16:00:00');
      var now = new Date();
      var diff = Math.ceil((arrival - now) / (1000 * 60 * 60 * 24));
      if (diff < 0) {
        result.textContent = 'That date is in the past. Pick a future arrival.';
        return;
      }
      if (diff < 3) {
        result.textContent = 'Less than 3 days — call ' + SW.facts.biz.phone + ' to check availability.';
      } else if (diff <= 14) {
        result.textContent = 'Book within ' + Math.max(1, diff - 2) + ' days. A deep clean first, then a touch-up the day before.';
      } else {
        result.textContent = diff + ' days out. Plenty of time to schedule a deep clean and a follow-up visit.';
      }
    });
  });
})();