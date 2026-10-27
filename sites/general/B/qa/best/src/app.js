/* general-B — Open Ledger signature + scroll stories */
(function () {
  if (typeof SW === 'undefined') return;

  /* Guard: only run when motion is allowed */
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  /* Wait for GSAP + ScrollTrigger */
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Refresh after fonts load so measurements are accurate */
  document.fonts.ready.then(function () {
    ScrollTrigger.refresh();
  });

  /* ── Running total bar (desktop only) ── */
  var progressEl = document.createElement('div');
  progressEl.className = 'ledger-progress';
  progressEl.setAttribute('aria-hidden', 'true');
  document.body.prepend(progressEl);

  var sections = document.querySelectorAll('[data-ledger-pct]');
  var totalPct = 0;

  sections.forEach(function (sec) {
    var pct = parseFloat(sec.getAttribute('data-ledger-pct')) || 0;
    totalPct += pct;

    ScrollTrigger.create({
      trigger: sec,
      start: 'top center',
      end: 'bottom center',
      matchMedia: '(min-width: 640px)',
      onEnter: function () { updateBar(totalPct); },
      onEnterBack: function () { updateBar(totalPct); },
      onLeave: function () { updateBar(Math.min(totalPct + pct, 100)); },
      onLeaveBack: function () { updateBar(Math.max(totalPct - pct, 0)); }
    });
  });

  function updateBar(val) {
    document.documentElement.style.setProperty('--ledger-total', Math.min(val, 100) + '%');
  }

  /* ── Hero ledger lines draw-in (intro ≤1.2s) ── */
  var heroRows = document.querySelectorAll('.ledger-sample__row');
  if (heroRows.length) {
    gsap.from(heroRows, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.6,
      stagger: 0.08,
      ease: 'power3.out',
      delay: 0.2
    });
  }

  /* ── Services stagger clip + counter tick ── */
  var svcRows = document.querySelectorAll('.ledger-row');
  if (svcRows.length) {
    ScrollTrigger.batch(svcRows, {
      start: 'top 85%',
      matchMedia: '(min-width: 640px)',
      onEnter: function (batch) {
        gsap.from(batch, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out'
        });
        /* Counter-driven number tick on pct column */
        batch.forEach(function (row) {
          var pctEl = row.querySelector('[data-count]');
          if (!pctEl) return;
          var target = parseFloat(row.getAttribute('data-ledger-pct')) || 0;
          var obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.2,
            ease: 'power2.out',
            onUpdate: function () {
              pctEl.textContent = Math.round(obj.val) + '%';
            }
          });
        });
      }
    });
  }

  /* ── Proof reviews stagger rise ── */
  var reviewItems = document.querySelectorAll('.ledger-review');
  if (reviewItems.length) {
    ScrollTrigger.batch(reviewItems, {
      start: 'top 85%',
      onEnter: function (batch) {
        gsap.from(batch, {
          y: 24,
          opacity: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power3.out'
        });
      }
    });
  }

})();