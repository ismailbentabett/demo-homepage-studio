/* pest-A app.js — signature: station rail + finding tag transitions */
(function () {
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  var stations = document.querySelectorAll('[data-station]');
  var badges = document.querySelectorAll('.station-badge');
  var tags = document.querySelectorAll('[data-finding]');
  var reportRows = document.querySelectorAll('.report-row');

  if (!stations.length) return;

  /* Activate station badges on scroll */
  stations.forEach(function (section) {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onToggle: function (self) {
        var num = section.getAttribute('data-station');
        badges.forEach(function (b) {
          if (b.textContent.trim() === num) {
            b.classList.toggle('station-badge--active', self.isActive);
          }
        });
      }
    });
  });

  /* Animate finding tags when their station enters view */
  tags.forEach(function (tag) {
    var section = tag.closest('[data-station]');
    if (!section) return;
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      once: true,
      onEnter: function () {
        tag.style.transition = 'background var(--dur-ui) var(--ease-out), border-color var(--dur-ui) var(--ease-out), color var(--dur-ui) var(--ease-out)';
      }
    });
  });

  /* Report card rows stagger in */
  if (reportRows.length) {
    gsap.from(reportRows, {
      scrollTrigger: {
        trigger: '.report-card',
        start: 'top 80%'
      },
      y: 16,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: 'power2.out'
    });
  }

  /* Refresh after fonts load */
  document.fonts.ready.then(function () {
    ScrollTrigger.refresh();
  });
})();