/* excavation-A · Grade Stakes signature + scroll stories */
(function () {
  if (!window.SW || SW.reduced) return;
  if (!document.documentElement.classList.contains('sw-motion')) return;

  /* Entrance reveals */
  const revealEls = document.querySelectorAll(
    'h1, h2, h3, .lead, .kicker, .section-lead, .service-card, .review-card, .process-step, .tool-result, .form-step, .break-frame img, .split-media img, .step-photo img, .hero-photo img'
  );
  revealEls.forEach(el => el.classList.add('sw-reveal'));
  document.querySelectorAll('.hero-photo img, .split-media img, .step-photo img, .break-frame img').forEach(el => {
    el.classList.remove('sw-reveal');
    el.classList.add('sw-unclip');
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -15% 0px' });
  revealEls.forEach(el => io.observe(el));

  /* Signature stake advance via --sw-p */
  const stakeSections = ['hero','locate','process','drainage-tool','rock-clause','services','prices','reviews','contact','footer'];
  const stakeMarks = ['C 4.0 · FOUNDATION CUT','F 0.0 · PAINT DRY','C 2.4 → F 1.2','F 0.6 · SWALE GRADE','R ? · LEDGE CHECK','0.0 · ON GRADE','0.0 · SAMPLE RANGE','✓ · FIELD NOTES','✓ · STAKES PULLED','0.0 · JOB CLOSED'];
  const activeStake = document.querySelector('[data-sw-signature] .stake-mark');
  if (activeStake) {
    const sio = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = stakeSections.indexOf(e.target.id || e.target.tagName.toLowerCase());
          if (idx >= 0 && stakeMarks[idx]) activeStake.textContent = stakeMarks[idx];
        }
      });
    }, { threshold: 0.4 });
    stakeSections.forEach(id => {
      const el = document.getElementById(id) || document.querySelector(`[data-sw-signature="${id}"]`) || document.querySelector(`footer`);
      if (el) sio.observe(el);
    });
  }

  /* GSAP scroll story: process cross-section (desktop only) */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    ScrollTrigger.matchMedia({
      '(min-width: 640px)': () => {
        const steps = document.querySelectorAll('.process-step');
        if (steps.length) {
          steps.forEach((step, i) => {
            gsap.from(step, {
              scrollTrigger: { trigger: step, start: 'top 85%', toggleActions: 'play none none reverse' },
              opacity: 0, y: 24, duration: 0.5, ease: 'power3.out', delay: i * 0.06
            });
          });
        }
      }
    });
  }

  /* Rock clause slider */
  const rockSlider = document.getElementById('rock-level');
  const rockExp = document.querySelector('.rock-explanation');
  const rockTexts = [
    'Soft dig. The sample range holds as written. Most yards in {{biz.city}} fall here.',
    'Some rock expected. Add a breaker hour buffer; sample range shifts up one band.',
    'Ledge likely. We price breaker time separately at the hourly rate shown above, agreed before we start.'
  ];
  if (rockSlider && rockExp) {
    const update = () => { rockExp.textContent = rockTexts[rockSlider.value] || rockTexts[0]; };
    rockSlider.addEventListener('input', update);
    update();
  }

  /* Drainage picker */
  const picker = document.querySelector('.drainage-picker');
  if (picker) {
    const answer = picker.querySelector('.tool-answer');
    const handoff = picker.querySelector('.tool-handoff');
    const radios = picker.querySelectorAll('input[type="radio"]');
    const fixes = {
      foundation: 'Regrade + downspout extensions. Sample range: {{proof.prices.3.from}} – {{proof.prices.3.to}}.',
      yard: 'French drain to daylight. Sample range: {{proof.prices.2.from}} – {{proof.prices.2.to}}.',
      driveway: 'Culvert + swale regrade. Sample range: {{proof.prices.3.from}} – {{proof.prices.3.to}}.',
      basement: 'Exterior French drain + grade fix. Sample range: {{proof.prices.2.from}} – {{proof.prices.2.to}}.'
    };
    radios.forEach(r => r.addEventListener('change', () => {
      const spot = picker.querySelector('input[name="water-spot"]:checked');
      if (spot && fixes[spot.value]) {
        answer.textContent = fixes[spot.value];
        handoff.hidden = false;
      }
    }));
  }

  /* ZIP checker */
  const zipBtn = document.querySelector('[data-zip-check]');
  const zipInput = document.getElementById('zip-input');
  const zipResult = document.querySelector('.zip-result');
  if (zipBtn && zipInput && zipResult) {
    const zips = (SW.facts && SW.facts.zips) ? SW.facts.zips : [];
    zipBtn.addEventListener('click', () => {
      const v = zipInput.value.trim();
      if (zips.includes(v)) {
        zipResult.textContent = 'Yes — ' + v + ' is in our service area.';
        zipResult.style.color = 'var(--c-accent)';
      } else {
        zipResult.textContent = 'That ZIP is outside our current area. Call to check.';
        zipResult.style.color = 'var(--muted)';
      }
    });
  }

  /* Multi-step form */
  const form = document.querySelector('.quote-form');
  if (form) {
    const steps = form.querySelectorAll('.form-step');
    const thanks = form.querySelector('.form-thanks');
    let current = 0;
    const show = (i) => {
      steps.forEach((s, idx) => { s.hidden = idx !== i; });
    };
    form.querySelectorAll('[data-next]').forEach(btn => btn.addEventListener('click', () => {
      if (current < steps.length - 1) { current++; show(current); }
    }));
    form.querySelectorAll('[data-prev]').forEach(btn => btn.addEventListener('click', () => {
      if (current > 0) { current--; show(current); }
    }));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      steps.forEach(s => { s.hidden = true; });
      if (thanks) thanks.hidden = false;
    });
  }

  /* Open-now */
  const openEl = document.querySelector('[data-hook="open-now"]');
  if (openEl && typeof SW.openNow === 'function') {
    const state = SW.openNow();
    openEl.textContent = state.isOpen ? 'Open now · until ' + state.closesAt : 'Closed · opens ' + state.opensAt;
  }
})();