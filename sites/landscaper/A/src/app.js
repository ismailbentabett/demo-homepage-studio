/* landscaper-A signature: depth gauge + horizon scroll story */
(function () {
  if (!window.SW) return;

  /* Depth gauge: update --depth-pct based on which section is in view */
  SW.mod('depth-gauge', function () {
    var gauge = document.querySelector('.depth-gauge');
    if (!gauge) return;

    var sections = Array.prototype.slice.call(gauge.querySelectorAll('[data-depth]'));
    if (!sections.length) return;

    var maxDepth = 18; // inches, from blueprint
    var depthMap = { '0': 0, '2': 2, '6': 6, '12': 12, '18': 18 };

    function update() {
      var viewH = window.innerHeight;
      var center = viewH * 0.5;
      var activeDepth = 0;

      for (var i = 0; i < sections.length; i++) {
        var rect = sections[i].getBoundingClientRect();
        if (rect.top < center && rect.bottom > center) {
          var d = sections[i].getAttribute('data-depth');
          activeDepth = depthMap[d] || 0;
          break;
        }
      }

      // Also factor in overall scroll progress for smooth fill
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - viewH;
      var scrollPct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Blend: use section depth as target, scroll progress as secondary
      var sectionPct = (activeDepth / maxDepth) * 100;
      var blended = Math.max(sectionPct, scrollPct * 0.8);
      blended = Math.min(100, Math.max(0, blended));

      gauge.style.setProperty('--depth-pct', blended.toFixed(1));
    }

    // Throttled scroll handler
    var ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(function () {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  });

  /* Countdown to fall overseeding window (mid-Sept to mid-Oct) */
  SW.mod('countdown', function () {
    var el = document.querySelector('[data-countdown-days]');
    if (!el) return;

    var now = new Date();
    var year = now.getFullYear();
    var windowStart = new Date(year, 8, 15); // Sept 15
    var windowEnd = new Date(year, 9, 15);   // Oct 15

    // If past this year's window, point to next year
    if (now > windowEnd) {
      windowStart = new Date(year + 1, 8, 15);
      windowEnd = new Date(year + 1, 9, 15);
    }

    var diff = windowStart - now;
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days <= 0 && now <= windowEnd) {
      // We are inside the window
      var remaining = Math.ceil((windowEnd - now) / (1000 * 60 * 60 * 24));
      el.textContent = remaining + ' days left';
      el.parentElement.querySelector('.countdown-label').textContent = 'Overseeding window open';
    } else if (days > 0) {
      el.textContent = days + ' days away';
    } else {
      el.textContent = 'Next fall';
    }
  });

  /* Scroll story: pinned horizon sequence on desktop only */
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    document.fonts.ready.then(function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      gsap.registerPlugin(ScrollTrigger);

      // Refresh after fonts load
      ScrollTrigger.refresh();

      // Horizon cross-section SVG draw on scroll (desktop only)
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          var storySections = document.querySelectorAll('[data-depth]');
          if (!storySections.length) return;

          storySections.forEach(function (sec) {
            var tag = sec.querySelector('.depth-tag');
            if (!tag) return;

            gsap.from(tag, {
              scrollTrigger: {
                trigger: sec,
                start: 'top 85%',
                end: 'top 50%',
                toggleActions: 'play reverse play reverse'
              },
              opacity: 0,
              x: -20,
              duration: 0.6,
              ease: 'power2.out'
            });
          });
        }
      });
    });
  }
})();