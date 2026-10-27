/* flooring-B — Sample Chip Cross-Section signature + scroll stories */
(function () {
  if (typeof SW === 'undefined') return;

  /* ── Hero chip stack entrance ─────────────────────── */
  SW.mod('hero-chips', function () {
    var stack = document.querySelector('.chip-stack[data-sw-signature]');
    if (!stack) return;

    if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
      var chips = stack.querySelectorAll('.chip--hero');
      chips.forEach(function (chip, i) {
        chip.style.opacity = '0';
        chip.style.transform = 'translateY(24px)';
        chip.style.clipPath = 'inset(0 0 100% 0)';
        chip.style.transition = 'opacity 500ms cubic-bezier(.23,1,.32,1), transform 500ms cubic-bezier(.23,1,.32,1), clip-path 500ms cubic-bezier(.23,1,.32,1)';
        chip.style.transitionDelay = (i * 60) + 'ms';
      });

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          chips.forEach(function (chip) {
            chip.style.opacity = '1';
            chip.style.transform = 'translateY(0)';
            chip.style.clipPath = 'inset(0)';
          });
        });
      });
    }
  });

  /* ── Cross-section peel story (pinned, 640px+) ───── */
  SW.mod('cross-peel', function () {
    var section = document.querySelector('.story-cross');
    if (!section || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', function () {
      var layers = section.querySelectorAll('.cross-layer');
      var labels = section.querySelectorAll('.cross-label');
      var statements = section.querySelectorAll('.story-cross__statements p');

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.story-cross__pin',
          start: 'top top',
          end: 'bottom bottom',
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });

      // Layers separate
      tl.to('.cross-layer--wear', { y: -40, duration: 1, ease: 'power2.out' }, 0);
      tl.to('.cross-layer--core', { y: 40, duration: 1, ease: 'power2.out' }, 0);

      // Labels draw in
      labels.forEach(function (label, i) {
        tl.to(label, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.3 + (i * 0.15));
      });

      // Statements appear
      statements.forEach(function (stmt, i) {
        tl.from(stmt, { opacity: 0, y: 20, duration: 0.5, ease: 'power2.out' }, 0.6 + (i * 0.2));
      });
    });
  });

  /* ── Estimator spec counter dial ──────────────────── */
  SW.mod('est-dial', function () {
    var output = document.querySelector('[data-est-output]');
    if (!output) return;

    if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

    var observer = new MutationObserver(function () {
      var nums = output.querySelectorAll('[data-count]');
      nums.forEach(function (el) {
        if (el.dataset.dialed) return;
        el.dataset.dialed = '1';
        var target = parseInt(el.dataset.count, 10);
        if (isNaN(target)) return;
        var obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 0.8,
          ease: 'power2.out',
          onUpdate: function () {
            el.textContent = Math.round(obj.val);
          }
        });
      });
    });

    observer.observe(output, { childList: true, subtree: true });
  });

})();