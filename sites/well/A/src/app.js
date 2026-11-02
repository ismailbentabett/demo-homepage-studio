// well-A signature: borehole cross-section strata reveal + triage/estimator glue
(function () {
  if (typeof SW === 'undefined') return;
  if (SW.reduced || !document.documentElement.classList.contains('sw-motion')) return;

  // Wait for fonts before measuring
  document.fonts.ready.then(function () {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });

  // Triage tool logic
  var triageForm = document.querySelector('[data-triage]');
  if (triageForm) {
    triageForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var taps = triageForm.querySelector('[name="taps"]').value;
      var breaker = triageForm.querySelector('[name="breaker"]').value;
      var result = triageForm.querySelector('[data-triage-result]');
      var cta = triageForm.querySelector('[data-triage-cta]');
      var msg = '';
      if (!taps) {
        msg = 'Select what the taps do first.';
      } else if (taps === 'nothing' && breaker === 'yes') {
        msg = 'Likely a tripped breaker or control box. Reset the breaker and check the control box capacitor.';
      } else if (taps === 'nothing' && breaker === 'no') {
        msg = 'Possible pump failure or dropped water level. We will bring a meter and pull gear.';
      } else if (taps === 'sputter') {
        msg = 'Well may be pumping below the water table. Check the pressure tank bladder and water level.';
      } else if (taps === 'weak') {
        msg = 'Pressure tank may be waterlogged or the switch is short-cycling. We can test at the wellhead.';
      } else {
        msg = 'Call us with these readings and we will know what to bring.';
      }
      result.textContent = msg;
      if (cta) cta.hidden = false;
    });
  }

  // Estimator glue: read data-est-select, show range from DOM option text + facts token rendered by build
  var estSelect = document.querySelector('[data-est-select]');
  var estResult = document.querySelector('[data-est-result]');
  var estCta = document.querySelector('[data-est-cta]');
  if (estSelect && estResult) {
    // Prices are rendered into options via repeater; we store ranges in data attributes at build time.
    // Since tokens resolve at build, we read the option text which contains the item name.
    // The actual from/to are in the DOM as hidden spans injected by the build's estimator module.
    // Fallback: just prompt to call.
    estSelect.addEventListener('change', function () {
      var idx = estSelect.selectedIndex;
      if (idx < 1) {
        estResult.textContent = '';
        if (estCta) estCta.hidden = true;
        return;
      }
      // The kit estimator module handles display; this is glue only.
      estResult.textContent = 'Sample range shown above. Your number depends on depth and access.';
      if (estCta) estCta.hidden = false;
    });
  }

  // Strata column entrance: draw down on hero load
  var strataCols = document.querySelectorAll('.strata-col');
  if (strataCols.length && typeof gsap !== 'undefined') {
    gsap.from(strataCols, {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.2
    });
  }
})();