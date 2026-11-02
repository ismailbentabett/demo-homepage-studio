/* pinestraw-C signature + glue */
(function () {
  if (!window.SW) return;

  /* Season ribbon: interpolates from spring green to fall clay based on scroll */
  SW.mod('season-ribbon', function () {
    var ribbon = document.querySelector('[data-season-ribbon]');
    var label = document.querySelector('[data-season-label]');
    if (!ribbon || !label) return;

    var springColor = { r: 107, g: 143, b: 94 }; /* #6B8F5E */
    var fallColor = { r: 180, g: 90, b: 44 };     /* #B45A2C */

    function lerp(a, b, t) {
      return Math.round(a + (b - a) * t);
    }

    function update() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var t = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      var r = lerp(springColor.r, fallColor.r, t);
      var g = lerp(springColor.g, fallColor.g, t);
      var b = lerp(springColor.b, fallColor.b, t);
      ribbon.style.background = 'rgb(' + r + ',' + g + ',' + b + ')';
      label.style.color = 'rgb(' + r + ',' + g + ',' + b + ')';
      label.textContent = t < 0.5 ? 'Spring' : 'Fall';
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  });

  /* Refresh clock tool */
  SW.mod('refresh-clock', function () {
    var form = document.querySelector('[data-refresh-form]');
    var result = document.querySelector('[data-refresh-result]');
    var cta = form && form.querySelector('[data-service]');
    if (!form || !result) return;
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    function compute() {
      var month = parseInt(form.month.value, 10);
      var exposure = form.exposure.value;
      var topUpMonth, refreshSeason;

      if (exposure === 'sun') {
        topUpMonth = month + 3;
      } else {
        topUpMonth = month + 5;
      }
      if (topUpMonth > 12) topUpMonth -= 12;

      var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
      refreshSeason = topUpMonth >= 3 && topUpMonth <= 8 ? 'Fall' : 'Spring';

      result.textContent = 'Top-up in ' + months[topUpMonth - 1] + ' · Next full refresh: ' + refreshSeason;
      if (cta) cta.setAttribute('data-service', refreshSeason + ' refresh');
    }

    form.addEventListener('change', compute);
    compute();
  });

  /* HOA deadline planner */
  SW.mod('hoa-planner', function () {
    var form = document.querySelector('[data-hoa-form]');
    var result = document.querySelector('[data-hoa-result]');
    if (!form || !result) return;
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    function compute() {
      var dateVal = form.hoaDate.value;
      var beds = form.beds.value;
      if (!dateVal) {
        result.textContent = 'Pick a walk-through date to see your book-by date.';
        return;
      }
      var d = new Date(dateVal + 'T00:00:00');
      var crewDays;
      switch (beds) {
        case 'small': crewDays = 1; break;
        case 'medium': crewDays = 2; break;
        case 'large': crewDays = 3; break;
        case 'xlarge': crewDays = 5; break;
        default: crewDays = 2;
      }
      var bookBy = new Date(d);
      bookBy.setDate(bookBy.getDate() - (crewDays * 2 + 7));
      var opts = { month: 'short', day: 'numeric' };
      result.textContent = 'Book by ' + bookBy.toLocaleDateString('en-US', opts) + ' · Crew estimate: ' + crewDays + (crewDays === 1 ? ' day' : ' days');
    }

    form.addEventListener('change', compute);
    form.addEventListener('input', compute);
    compute();
  });

  /* Signature moment: intro petal drift across kidney mask (motion only) */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
      gsap.registerPlugin(ScrollTrigger);

      document.fonts.ready.then(function () {
        ScrollTrigger.refresh();
      });

      /* Intro: photo unclip inside kidney mask */
      var heroFrame = document.querySelector('.hero__frame');
      if (heroFrame) {
        gsap.fromTo(heroFrame,
          { clipPath: 'inset(0 0 100% 0)' },
          { clipPath: 'inset(0)', duration: 1, ease: 'power2.out', delay: 0.2 }
        );
      }

      /* Scroll story: season transition at midpoint (desktop only) */
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          var seasonsSec = document.getElementById('seasons');
          if (!seasonsSec) return;

          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: seasonsSec,
              start: 'top center',
              end: 'bottom center',
              scrub: 1
            }
          });

          var springCard = seasonsSec.querySelector('.season-card--spring');
          var fallCard = seasonsSec.querySelector('.season-card--fall');
          if (springCard && fallCard) {
            tl.to(springCard, { opacity: 0.4, scale: 0.97, duration: 1 })
              .to(fallCard, { opacity: 1, scale: 1, duration: 1 }, '<');
          }
        }
      });
    }
  }
})();