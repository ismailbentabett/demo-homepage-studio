/* moving-B: load-meter signature + hours-bars story */
(function () {
  if (!window.SW) return;

  /* --- Load meter signature --- */
  SW.mod('load-meter', function () {
    var meter = document.querySelector('[data-sw-signature="load-meter"]');
    if (!meter) return;

    var sections = [
      'hero', 'move-sizer', 'junk-gauge', 'process-break',
      'hours-story', 'services', 'where-it-goes', 'reviews',
      'prices', 'area', 'contact'
    ];
    var total = sections.length;
    var current = 0;

    if (SW.reduced) {
      meter.style.setProperty('--sw-p', '0.15');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var idx = sections.indexOf(entry.target.id || entry.target.className.split(' ')[1]);
          if (idx >= 0 && idx + 1 > current) {
            current = idx + 1;
            meter.style.setProperty('--sw-p', String(current / total));
          }
        }
      });
    }, { rootMargin: '0px 0px -40% 0px', threshold: 0.1 });

    sections.forEach(function (id) {
      var el = document.getElementById(id) || document.querySelector('.' + id);
      if (el) observer.observe(el);
    });
  });

  /* --- Hours bars entrance animation --- */
  SW.mod('hours-bars', function () {
    if (SW.reduced) return;
    var bars = document.querySelectorAll('.hours-bar__fill');
    if (!bars.length) return;

    var section = document.getElementById('hours-story');
    if (!section) return;

    var animated = false;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !animated) {
          animated = true;
          bars.forEach(function (bar, i) {
            bar.style.transitionDelay = (i * 150) + 'ms';
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);
  });

  /* --- Junk gauge interaction --- */
  SW.mod('junk-gauge', function () {
    var items = document.querySelectorAll('[data-junk]');
    var fill = document.querySelector('.truck-bed__fill');
    var readout = document.querySelector('[data-junk-readout]');
    if (!items.length || !fill || !readout) return;

    var fractions = {
      couch: 2, mattress: 1, fridge: 1, bags: 1, boxes: 1, hottub: 3
    };
    var active = {};
    var maxEighths = 8;

    function update() {
      var total = 0;
      Object.keys(active).forEach(function (k) {
        if (active[k]) total += (fractions[k] || 1);
      });
      var pct = Math.min(total / maxEighths, 1) * 192;
      fill.setAttribute('width', String(pct));

      if (total === 0) {
        readout.textContent = 'Tap items above';
      } else if (total <= 1) {
        readout.textContent = 'About 1/8 of a truck';
      } else if (total <= 2) {
        readout.textContent = 'About 2/8 (quarter) of a truck';
      } else if (total <= 4) {
        readout.textContent = 'About ' + total + '/8 (half) of a truck';
      } else if (total <= 6) {
        readout.textContent = 'About ' + total + '/8 (three-quarter) of a truck';
      } else {
        readout.textContent = 'Full truck or more';
      }
    }

    items.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-junk');
        var pressed = btn.getAttribute('aria-pressed') === 'true';
        btn.setAttribute('aria-pressed', String(!pressed));
        active[key] = !pressed;
        update();
      });
    });
  });
})();