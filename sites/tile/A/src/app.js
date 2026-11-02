/* tile-A signature + glue */
(function () {
  if (typeof SW === 'undefined') return;

  /* Layer ruler: activate bands as sections enter view */
  SW.mod('layer-ruler', function () {
    var rulers = document.querySelectorAll('.layer-ruler');
    if (!rulers.length) return;

    var sections = [
      { id: 'hero', band: 'stud' },
      { id: 'process', band: 'membrane' },
      { id: 'guarantee', band: 'tile' }
    ];

    sections.forEach(function (s) {
      var el = document.getElementById(s.id);
      if (!el) return;
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          rulers.forEach(function (r) {
            var band = r.querySelector('.ruler__band--' + s.band);
            if (band) band.style.opacity = e.isIntersecting ? '1' : '';
          });
        });
      }, { threshold: 0.3 });
      obs.observe(el);
    });
  });

  /* Leak symptom check (client-side, no network) */
  SW.mod('leak-check', function () {
    var form = document.querySelector('.leak-form');
    if (!form) return;
    var btn = form.querySelector('.leak-check__run');
    var result = form.querySelector('.leak-check__result');
    var cta = form.querySelector('.leak-check__cta');
    if (!btn || !result) return;

    btn.addEventListener('click', function () {
      var q1 = form.q1.checked;
      var q2 = form.q2.checked;
      var q3 = form.q3.checked;
      var q4 = form.q4.checked;
      var msg = '';
      var showCta = false;

      if (q1 && !q2 && !q3) {
        msg = 'Likely pan or membrane. We can open it safely and rebuild.';
        showCta = true;
      } else if (q2 || q3) {
        msg = 'Likely grout or caulk failure. Regrout or spot repair may be enough.';
        showCta = true;
      } else if (q4 && !q1 && !q2 && !q3) {
        msg = 'Musty smell without visible damage often means hidden moisture. Send a photo so we can triage.';
        showCta = true;
      } else if (q1 && q2) {
        msg = 'Stain below plus loose tile points to a failed pan. Call before using the shower again.';
        showCta = true;
      } else {
        msg = 'No clear pattern from these answers. Text a photo and we will tell you what we see.';
        showCta = true;
      }

      result.textContent = msg;
      if (showCta && cta) cta.hidden = false;
    });
  });

  /* Process story: highlight active layer card on scroll */
  SW.mod('process-story', function () {
    var cards = document.querySelectorAll('.layer-card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          card.classList.toggle('is-active', e.isIntersecting);
        });
      }, { threshold: 0.5, rootMargin: '0px 0px -30% 0px' });
      obs.observe(card);
    });
  });

  /* Hero statements rotator (scroll-driven on desktop, time-based fallback) */
  SW.mod('hero-statements', function () {
    var stmts = document.querySelectorAll('.hero__statements .statement');
    if (!stmts.length) return;

    stmts[0].classList.add('is-on');

    if (window.innerWidth >= 640 && typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: function (self) {
          var p = self.progress;
          var idx = Math.min(Math.floor(p * stmts.length), stmts.length - 1);
          stmts.forEach(function (s, i) {
            s.classList.toggle('is-on', i === idx);
          });
        }
      });
    } else {
      var idx = 0;
      setInterval(function () {
        stmts[idx].classList.remove('is-on');
        idx = (idx + 1) % stmts.length;
        stmts[idx].classList.add('is-on');
      }, 2600);
    }
  });

  /* Refresh ScrollTrigger after fonts load */
  if (typeof ScrollTrigger !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();