/* hvac-A · Ticket Clock Rail signature + scroll stories */
(function () {
  if (!window.SW) return;

  /* Print one artifact only: the ticket or the hot-day list */
  function printOnly(cls) {
    document.body.classList.add(cls);
    var done = function () { document.body.classList.remove(cls); window.removeEventListener('afterprint', done); };
    window.addEventListener('afterprint', done);
    window.print();
    setTimeout(done, 1000);
  }

  /* ── Symptom sorter tool (Elevate: Wow — diagnosis ticket) ── */
  SW.mod('symptom-sorter', function () {
    var panel = document.querySelector('[data-symptom-sorter]');
    if (!panel) return;
    var select = panel.querySelector('#symptom-select');
    var output = panel.querySelector('[data-symptom-output]');
    var cta = panel.querySelector('[data-symptom-cta]');
    if (!select || !output) return;
    var tearEl = output.querySelector('.diag-ticket__tear');
    var stubTear = tearEl ? tearEl.innerHTML : '';
    var stubHtml = output.innerHTML;

    var map = {
      warm: {
        symptom: 'Blowing warm air',
        causes: ['Low refrigerant charge', 'Failed compressor capacitor', 'Stuck reversing valve (heat pump)'],
        check: ['Is the outdoor fan spinning?', 'Any ice on the copper lines?', 'Breaker tripped?'],
        action: 'call',
        actionLabel: 'Call now'
      },
      fan: {
        symptom: 'Fan not spinning',
        causes: ['Bad fan motor capacitor', 'Seized fan motor bearings', 'Contactor not pulling in'],
        check: ['Power off at disconnect, spin blade by hand — does it turn freely?', 'Listen for a hum when thermostat calls for cool.'],
        action: 'call',
        actionLabel: 'Call now'
      },
      ice: {
        symptom: 'Ice on lines or coil',
        causes: ['Dirty air filter or blocked return', 'Low refrigerant from a leak', 'Failing blower motor'],
        check: ['Replace the filter today.', 'Turn cooling OFF and leave fan ON to thaw.', 'Do not chip ice off coils.'],
        action: 'watch',
        actionLabel: 'Watch & recheck'
      },
      water: {
        symptom: 'Water at the unit',
        causes: ['Clogged condensate drain line', 'Cracked drain pan', 'Frozen coil thawing too fast'],
        check: ['Find the PVC drain outside — is it dripping?', 'Check the float switch in the attic pan.'],
        action: 'call',
        actionLabel: 'Call now'
      },
      short: {
        symptom: 'Short-cycling on and off',
        causes: ['Oversized unit for the space', 'Thermostat placement near a heat source', 'Low refrigerant causing freeze-thaw cycles'],
        check: ['How many minutes between cycles?', 'Is the thermostat in direct sun or above a lamp?'],
        action: 'book',
        actionLabel: 'Book a visit'
      },
      noise: {
        symptom: 'Loud or new noise',
        causes: ['Loose panel screw or grille', 'Worn fan motor bearings', 'Compressor hard-starting'],
        check: ['Does the sound change when you press on the access panel?', 'Screech vs. grind vs. rattle matters.'],
        action: 'book',
        actionLabel: 'Book a visit'
      }
    };

    function pad(n) { return n < 10 ? '0' + n : '' + n; }
    function timestamp() {
      var d = new Date();
      return pad(d.getHours()) + ':' + pad(d.getMinutes());
    }

    function render(symptom) {
      var entry = map[symptom];
      if (!entry) { output.innerHTML = stubHtml; if (cta) cta.hidden = true; if (printBtn) printBtn.hidden = true; return; }

      var causesHtml = '';
      entry.causes.forEach(function (c, i) {
        causesHtml += '<span class="diag-ticket__cause"><b>' + (i + 1) + '</b> ' + c + '</span>';
      });

      var checksHtml = '';
      entry.check.forEach(function (c) {
        checksHtml += '<li>' + c + '</li>';
      });

      var recText = entry.action === 'call'
        ? 'This usually needs a meter and a part.'
        : entry.action === 'watch'
          ? 'Try the checks above first; call if it returns tomorrow.'
          : 'We need to measure what is happening on site.';

      var no = timestamp().replace(':', '') + '-' + symptom.toUpperCase().slice(0, 3);
      var html = '<article class="diag-ticket" aria-label="Diagnosis ticket">';
      html += '<header class="diag-ticket__header"><span>Diagnosis ticket · No. ' + no + '</span><span class="timestamp is-lit">' + timestamp() + '</span></header>';
      html += '<div class="diag-ticket__body">';
      html += '<div class="diag-ticket__row"><span class="diag-ticket__label">Symptom</span><span class="diag-ticket__val">' + entry.symptom + '</span></div>';
      html += '<div class="diag-ticket__row"><span class="diag-ticket__label">Likely causes</span><div class="diag-ticket__val">' + causesHtml + '</div></div>';
      html += '<div class="diag-ticket__row"><span class="diag-ticket__label">Safe checks</span><ul class="diag-ticket__checks">' + checksHtml + '</ul></div>';
      html += '<div class="diag-ticket__row"><span class="diag-ticket__label">Note</span><span class="diag-ticket__val">' + recText + '</span></div>';
      html += '<div class="diag-ticket__row diag-ticket__verdict is-' + entry.action + '"><span class="diag-ticket__label">Action</span><span class="diag-ticket__val">' + entry.actionLabel + '</span></div>';
      html += '</div>';
      html += '<div class="diag-ticket__tear">' + stubTear + '</div>';
      html += '</article>';

      output.innerHTML = html;
      if (cta) {
        cta.setAttribute('data-service', symptom);
        cta.hidden = false;
      }
      if (printBtn) printBtn.hidden = false;
    }

    var printBtn = panel.querySelector('[data-ticket-print]');
    if (printBtn) SW.on(printBtn, 'click', function () { printOnly('print-ticket'); });

    SW.on(select, 'change', function () { render(select.value); });
  });

  /* ── Hot-day plan print trigger ──────────────────────── */
  SW.mod('hot-day-plan', function () {
    var btn = document.querySelector('[data-hot-day-print]');
    if (!btn) return;
    SW.on(btn, 'click', function () { printOnly('print-plan'); });
  });

  /* ── Mobilebar hide on form intersection (Should-fix #5) ── */
  SW.mod('mobilebar-hide', function () {
    var bar = document.querySelector('[data-mobilebar]');
    var contact = document.getElementById('contact');
    if (!bar || !contact || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { bar.classList.add('is-hidden'); }
        else { bar.classList.remove('is-hidden'); }
      });
    }, { threshold: 0.1 });
    obs.observe(contact);
  });

  /* ── Signature moment: ticket clock rail lighting ────── */
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    document.fonts.ready.then(function () {
      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
      gsap.registerPlugin(ScrollTrigger);

      /* Hero intro: the drawn plate rises from the pad (≤ 1 s, text untouched) */
      var heroArt = document.querySelector('.plate-hero .plate-art');
      if (heroArt) gsap.from(heroArt, { scale: 1.08, opacity: 0.2, duration: 1, ease: 'power3.out' });

      /* Timestamps light as they enter view */
      var stamps = document.querySelectorAll('.timestamp');
      stamps.forEach(function (el) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: function () { el.classList.add('is-lit'); }
        });
      });

      /* Process story: pin the ticket, swap entries in place, the drawn plate pushes in on A, B, C */
      ScrollTrigger.matchMedia({
        '(min-width: 640px)': function () {
          var section = document.querySelector('.sec-process');
          var pin = section && section.querySelector('.process-pin');
          var entries = section ? section.querySelectorAll('.process-entry') : [];
          if (!pin || entries.length < 2) return;
          section.classList.add('is-story');
          var n = entries.length;
          gsap.set(Array.prototype.slice.call(entries, 1), { autoAlpha: 0, y: 40 });
          var tl = gsap.timeline({
            scrollTrigger: {
              trigger: pin,
              start: 'top top+=' + (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) + 48),
              end: function () { return '+=' + Math.round(window.innerHeight * 0.55 * n); },
              pin: true,
              scrub: 0.6,
              invalidateOnRefresh: true
            }
          });
          entries.forEach(function (entry, i) {
            var art = entry.querySelector('.plate-art');
            var stamp = entry.querySelector('.timestamp');
            if (i > 0) {
              tl.to(entries[i - 1], { autoAlpha: 0, y: -40, duration: 0.3 }, i);
              tl.to(entry, { autoAlpha: 1, y: 0, duration: 0.3 }, i + 0.1);
              tl.call(function () { if (stamp) stamp.classList.add('is-lit'); }, null, i + 0.1);
            }
            if (art) tl.fromTo(art, { scale: 1.16, transformOrigin: '50% 50%' }, { scale: 1, duration: 1, ease: 'none' }, i);
          });
          return function () { section.classList.remove('is-story'); };
        }
      });

      ScrollTrigger.refresh();
    });
  }
})();