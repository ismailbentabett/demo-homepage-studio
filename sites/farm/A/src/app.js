/* farm-A signature: Morning Clock Rail */
(function () {
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  var rail = document.querySelector('.clock-rail');
  if (!rail) return;

  var timeEl = rail.querySelector('.clock-rail__time');
  var labelEl = rail.querySelector('.clock-rail__label');
  if (!timeEl || !labelEl) return;

  var sections = [
    { id: 'hero', time: '5:45', label: 'PICKING' },
    { id: 'process', time: '8:00', label: 'COOLED' },
    { id: 'ripe', time: '10:00', label: 'ON THE STAND' },
    { id: 'services', time: '10:00', label: 'OPEN' },
    { id: 'csa', time: '9:30', label: 'PACKED' },
    { id: 'beef', time: '14:00', label: 'PICKUP' },
    { id: 'proof', time: '12:00', label: 'VISITED' },
    { id: 'prices', time: '10:00', label: 'POSTED' },
    { id: 'tours', time: '10:00', label: 'WELCOME' },
    { id: 'contact', time: '18:00', label: 'CLOSES' }
  ];

  /* Scroll story 1: clock advances through process section (pinned ≥640px) */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });

    /* Intro: sky lightens + first timestamp chalks on */
    var heroTl = gsap.timeline({ delay: 0.1 });
    heroTl.from('.hero__photo img', { opacity: 0.3, duration: 1.1, ease: 'power2.out' });
    heroTl.from('.clock-rail__time', { opacity: 0, y: 12, duration: 0.4, ease: 'power2.out' }, '-=0.6');
    heroTl.from('.clock-rail__label', { opacity: 0, x: -8, duration: 0.3, ease: 'power2.out' }, '-=0.2');

    /* Pinned process story on desktop */
    ScrollTrigger.matchMedia({
      '(min-width: 640px)': function () {
        var processSection = document.getElementById('process');
        if (!processSection) return;

        var steps = processSection.querySelectorAll('.process__step');
        var times = ['7:15', '8:00', '9:30'];
        var labels = ['EGGS', 'COOLED', 'PACKED'];

        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: processSection,
            start: 'top top',
            end: '+=165svh',
            pin: true,
            scrub: 0.5
          }
        });

        steps.forEach(function (step, i) {
          tl.to(step, { opacity: 1, y: 0, duration: 0.3 }, i * 0.33);
          tl.to(rail, { '--clock-time': '"' + times[i] + '"', duration: 0.01 }, i * 0.33);
          tl.call(function () {
            timeEl.textContent = times[i];
            labelEl.textContent = labels[i];
          }, null, i * 0.33);
        });
      }
    });

    /* Update clock rail as sections enter view */
    sections.forEach(function (sec) {
      var el = document.getElementById(sec.id);
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: function () {
          timeEl.textContent = sec.time;
          labelEl.textContent = sec.label;
        },
        onEnterBack: function () {
          timeEl.textContent = sec.time;
          labelEl.textContent = sec.label;
        }
      });
    });
  }

  /* Ripe board line-by-line wipe */
  var ripeBoard = document.querySelector('[data-ripe-board]');
  if (ripeBoard && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    var rows = ripeBoard.querySelectorAll('.ripe__row');
    gsap.from(rows, {
      scrollTrigger: {
        trigger: ripeBoard,
        start: 'top 85%'
      },
      opacity: 0,
      x: -20,
      stagger: 0.12,
      duration: 0.4,
      ease: 'power2.out'
    });
  }
})();