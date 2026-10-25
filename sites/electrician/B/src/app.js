/* electrician-B signature: Panel Schedule Flip */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Circuit flip on scroll */
  function initCircuits() {
    var circuits = document.querySelectorAll('.circuit:not(.is-on)');
    if (!circuits.length) return;

    if (reduced) {
      circuits.forEach(function (c) { c.classList.add('is-on'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-on');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    circuits.forEach(function (c) { observer.observe(c); });
  }

  /* Hero mosaic stagger */
  function initHeroMosaic() {
    var tiles = document.querySelectorAll('.hero__tile');
    if (!tiles.length || reduced) return;

    tiles.forEach(function (tile, i) {
      tile.style.opacity = '0';
      tile.style.transform = 'translateY(24px)';
      setTimeout(function () {
        tile.style.transition = 'opacity 500ms var(--ease-out), transform 500ms var(--ease-out)';
        tile.style.opacity = '1';
        tile.style.transform = 'translateY(0)';
      }, 80 * i + 200);
    });
  }

  /* Amperage count-up for estimator */
  function initCountUp() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          var target = parseInt(entry.target.dataset.count, 10) || 0;
          if (reduced || target === 0) {
            entry.target.textContent = target;
            return;
          }
          var duration = 900;
          var start = performance.now();
          function step(now) {
            var progress = Math.min((now - start) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            entry.target.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { observer.observe(c); });
  }

  /* Wire estimator output to count-up target */
  function initEstimatorWiring() {
    var estimator = document.querySelector('[data-estimator]');
    if (!estimator) return;
    var checkboxes = estimator.querySelectorAll('input[type="checkbox"][data-watts]');
    var totalEl = estimator.querySelector('[data-count]');
    var recEl = estimator.querySelector('[data-est-result]');
    if (!checkboxes.length || !totalEl) return;

    function update() {
      var total = 0;
      checkboxes.forEach(function (cb) {
        if (cb.checked) total += parseInt(cb.dataset.watts, 10) || 0;
      });
      totalEl.dataset.count = String(total);
      totalEl.textContent = String(total);
      if (recEl) {
        if (total === 0) {
          recEl.textContent = 'Select what must stay on to see a recommendation.';
        } else if (total <= 3000) {
          recEl.textContent = 'A portable generator with an interlock kit covers this load comfortably.';
        } else if (total <= 7000) {
          recEl.textContent = 'A larger portable with interlock works, but a standby gives you automatic switchover and no extension cords.';
        } else {
          recEl.textContent = 'This load needs a standby generator with an automatic transfer switch.';
        }
      }
    }

    checkboxes.forEach(function (cb) { cb.addEventListener('change', update); });
    update();
  }

  /* Mobile bar visibility */
  function initMobileBar() {
    var bar = document.querySelector('[data-mobilebar]');
    if (!bar) return;
    var lastY = window.scrollY;
    var contactSection = document.getElementById('contact');

    function check() {
      var y = window.scrollY;
      var contactVisible = contactSection && contactSection.getBoundingClientRect().top < window.innerHeight;
      if (y > 300 && !contactVisible && y < lastY) {
        bar.classList.add('is-visible');
      } else {
        bar.classList.remove('is-visible');
      }
      lastY = y;
    }

    window.addEventListener('scroll', check, { passive: true });
    check();
  }

  /* Init all */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initCircuits();
    initHeroMosaic();
    initCountUp();
    initEstimatorWiring();
    initMobileBar();
  }
})();