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
  var segRotation = {
    'almanac-spring': 0,
    'almanac-summer': 90,
    'almanac-fall': 180,
    'almanac-winter': 270
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
      /* Rotate dial to point at active season */
      if (activeId && segRotation[activeId] !== undefined) {
        gsap.to(dial, {
          rotation: segRotation[activeId],
          duration: 0.6,
          ease: 'power2.out',
          transformOrigin: '50% 50%'
        });
      }
    });
    /* Also update countdown tool's embedded dial if present */
    var cdDials = document.querySelectorAll('.countdown-dial');
    cdDials.forEach(function (dial) {
      dial.querySelectorAll('.countdown-dial__seg').forEach(function (seg) {
        seg.classList.remove('is-active');
      });
      if (activeId) {
        var cdSeg = dial.querySelector('.countdown-dial__seg--' + activeId.replace('almanac-', ''));
        if (cdSeg) cdSeg.classList.add('is-active');
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

    /* Varied reveals per section role */
    document.querySelectorAll('[data-reveal="scale"]').forEach(function (el) {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.92 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    document.querySelectorAll('[data-reveal="clip-up"]').forEach(function (el) {
      gsap.fromTo(el,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0 0 0 0)',
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    /* Parallax depth on break section image */
    var breakImg = document.querySelector('.break img');
    if (breakImg) {
      gsap.to(breakImg, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: '.break',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    /* Season dial activation per section — drives rotation */
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

  /* Countdown tool: guest-ready calculator with dial integration */
  SW.mod('countdown', function () {
    var input = document.querySelector('#guest-date');
    var resultText = document.querySelector('.countdown-tool__text');
    var resultWrap = document.querySelector('.countdown-tool__result');
    if (!input || !resultText) return;

    input.addEventListener('change', function () {
      var val = input.value;
      if (!val) { resultText.textContent = ''; return; }
      var arrival = new Date(val + 'T16:00:00');
      var now = new Date();
      var diff = Math.ceil((arrival - now) / (1000 * 60 * 60 * 24));
      if (diff < 0) {
        resultText.textContent = 'That date is in the past. Pick a future arrival.';
        return;
      }
      /* Determine season from arrival month */
      var month = arrival.getMonth();
      var seasonId;
      if (month >= 2 && month <= 4) seasonId = 'almanac-spring';
      else if (month >= 5 && month <= 7) seasonId = 'almanac-summer';
      else if (month >= 8 && month <= 10) seasonId = 'almanac-fall';
      else seasonId = 'almanac-winter';

      /* Highlight matching season in the embedded dial */
      var cdDials = document.querySelectorAll('.countdown-dial');
      cdDials.forEach(function (dial) {
        dial.querySelectorAll('.countdown-dial__seg').forEach(function (seg) {
          seg.classList.remove('is-active');
        });
        var seg = dial.querySelector('.countdown-dial__seg--' + seasonId.replace('almanac-', ''));
        if (seg) seg.classList.add('is-active');
      });

      if (diff < 3) {
        resultText.textContent = 'Less than 3 days — call ' + SW.facts.biz.phone + ' to check availability.';
      } else if (diff <= 14) {
        resultText.textContent = 'Book within ' + Math.max(1, diff - 2) + ' days. A deep clean first, then a touch-up the day before.';
      } else {
        resultText.textContent = diff + ' days out. Plenty of time to schedule a deep clean and a follow-up visit.';
      }
    });
  });
})();