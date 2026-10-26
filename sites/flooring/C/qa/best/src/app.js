/* flooring-C app.js — Tide Line Gauge signature + scroll stories */
(function () {
  if (!window.SW) return;

  /* ── House Age Guide tool logic ─────────────────────── */
  SW.mod('house-age-guide', function () {
    var slider = document.querySelector('[data-year-input]');
    var output = document.querySelector('[data-year-output]');
    var result = document.querySelector('[data-age-result]');
    if (!slider || !output || !result) return;

    function update() {
      var year = parseInt(slider.value, 10);
      output.textContent = year;
      var floorType, advice;
      if (year < 1920) {
        floorType = 'Likely: Heart pine or old-growth oak';
        advice = 'Can be sanded gently. Check for painted-over boards and nail-set issues. Reclaimed sliver gap fill recommended.';
      } else if (year < 1960) {
        floorType = 'Likely: Oak strip flooring';
        advice = 'Can be sanded and refinished. Check for pet stains and water rings near exterior walls.';
      } else if (year < 1990) {
        floorType = 'Likely: Plywood subfloor or early engineered';
        advice = 'May have vinyl or carpet over plywood. Engineered hardwood or waterproof plank are good options.';
      } else {
        floorType = 'Likely: Slab-on-grade with carpet or tile';
        advice = 'Engineered hardwood or waterproof plank work well on slab. Moisture test first.';
      }
      result.innerHTML = '<p class="house-age__floor-type">' + floorType + '</p><p class="house-age__advice">' + advice + '</p>';
    }

    slider.addEventListener('input', update);
    update();
  });

  /* ── Signature + Scroll Stories (GSAP) ──────────────── */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  document.fonts.ready.then(function () {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    /* Intro: hero mask grain drift + headline stagger */
    var mask = document.querySelector('.hero__mask');
    if (mask) {
      gsap.fromTo(mask, { backgroundPosition: '50% 40%' }, {
        backgroundPosition: '50% 45%',
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.2
      });
    }

    var h1Lines = document.querySelectorAll('[data-split="lines"] > *');
    if (h1Lines.length) {
      gsap.from(h1Lines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'cubic-bezier(.2,.7,.1,1)',
        delay: 0.1
      });
    }

    /* Scroll Story 1: Tide Rise (pinned cross-section) — desktop only */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var track = document.querySelector('[data-scroll-story="tide-rise"]');
        if (!track) return;
        var steps = track.querySelectorAll('.story__step');
        if (!steps.length) return;

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: track,
            start: 'top top',
            end: '+=' + (steps.length * 55) + 'svh',
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        });

        steps.forEach(function (step, i) {
          var text = step.querySelector('.story__text');
          var media = step.querySelector('.story__media');
          var tideLine = step.querySelector('.tide-line');

          if (i > 0) {
            tl.fromTo(step, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, i);
          }
          if (text) {
            tl.fromTo(text, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, i + 0.2);
          }
          if (media) {
            tl.fromTo(media, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0)', duration: 0.9, ease: 'power2.inOut' }, i + 0.3);
          }
          if (tideLine) {
            tl.fromTo(tideLine, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, i + 0.5);
          }
        });
      }
    });

    /* Scroll Story 2: Board lace-in unclip at stairs-detail */
    var stairsFrame = document.querySelector('#stairs-detail .frame');
    if (stairsFrame) {
      gsap.fromTo(stairsFrame,
        { clipPath: 'inset(0 0 100% 0)' },
        {
          clipPath: 'inset(0)',
          duration: 0.9,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: '#stairs-detail',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    /* Tide line reveals across all sections */
    var tideLines = document.querySelectorAll('.tide-line[data-sw-signature]');
    tideLines.forEach(function (line) {
      gsap.fromTo(line,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    ScrollTrigger.refresh();
  });
})();