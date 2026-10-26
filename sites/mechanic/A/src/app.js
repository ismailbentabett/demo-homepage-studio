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

  /* Service cards stagger */
  SW.mod('services-stagger', function () {
    if (SW.reduced) return;
    var list = document.querySelector('.svc-list');
    if (!list) return;
    var items = list.querySelectorAll('.ro-line--svc');
    if (!items.length) return;

    ScrollTrigger.create({
      trigger: list,
      start: 'top 85%',
      once: true,
      onEnter: function () {
        gsap.from(items, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power2.out'
        });
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