/* consulting-B app.js — worksheet tools + signature cell ref */
(function () {
  'use strict';

  /* Cash runway check */
  SW.mod('cash-runway', function () {
    var panel = document.querySelector('[data-cash-runway]');
    if (!panel) return;
    var cashEl = panel.querySelector('#cr-cash');
    var fixedEl = panel.querySelector('#cr-fixed');
    var daysEl = panel.querySelector('#cr-days');
    var bar = panel.querySelector('#cr-bar');
    var result = panel.querySelector('#cr-result');
    var cta = panel.querySelector('#cr-cta');

    function calc() {
      var cash = parseFloat(cashEl.value) || 0;
      var fixed = parseFloat(fixedEl.value) || 0;
      var days = parseFloat(daysEl.value) || 0;
      if (fixed <= 0 || cash <= 0) {
        bar.style.width = '0%';
        bar.classList.remove('is-gap');
        result.textContent = 'Enter your numbers above to see your runway.';
        cta.hidden = true;
        return;
      }
      var months = cash / fixed;
      var pct = Math.min(months / 6, 1) * 100;
      bar.style.width = pct + '%';
      if (months < 2) {
        bar.classList.add('is-gap');
        result.textContent = 'About ' + months.toFixed(1) + ' months. Cash is tight — call to talk through options.';
      } else {
        bar.classList.remove('is-gap');
        var lever = days > 30 ? 'Customers paying in ' + days + ' days is the biggest lever.' : 'Fixed costs are your biggest lever.';
        result.textContent = 'About ' + months.toFixed(1) + ' months. ' + lever;
      }
      cta.hidden = false;
    }

    cashEl.addEventListener('input', calc);
    fixedEl.addEventListener('input', calc);
    daysEl.addEventListener('input', calc);
  });

  /* Price gap worksheet */
  SW.mod('price-gap', function () {
    var panel = document.querySelector('[data-price-gap]');
    if (!panel) return;
    var chargeEl = panel.querySelector('#pg-charge');
    var hoursEl = panel.querySelector('#pg-hours');
    var overheadEl = panel.querySelector('#pg-overhead');
    var billableEl = panel.querySelector('#pg-billable');
    var result = panel.querySelector('#pg-result');
    var cta = panel.querySelector('#pg-cta');

    function calc() {
      var charge = parseFloat(chargeEl.value) || 0;
      var hours = parseFloat(hoursEl.value) || 0;
      var overhead = parseFloat(overheadEl.value) || 0;
      var billable = parseFloat(billableEl.value) || 0;
      if (charge <= 0 || hours <= 0 || billable <= 0) {
        result.textContent = 'Enter your numbers to see the gap.';
        cta.hidden = true;
        return;
      }
      var overheadPerHour = overhead / billable;
      var trueCost = overheadPerHour * hours;
      var gap = charge - trueCost;
      var gapPct = ((gap / trueCost) * 100).toFixed(0);
      if (gap < 0) {
        result.textContent = 'True cost: $' + trueCost.toFixed(0) + '. You charge $' + charge.toFixed(0) + '. Gap: ' + gapPct + '% under cost.';
      } else {
        result.textContent = 'True cost: $' + trueCost.toFixed(0) + '. You charge $' + charge.toFixed(0) + '. Margin: ' + gapPct + '% above cost.';
      }
      cta.hidden = false;
    }

    chargeEl.addEventListener('input', calc);
    hoursEl.addEventListener('input', calc);
    overheadEl.addEventListener('input', calc);
    billableEl.addEventListener('input', calc);
  });

  /* Reporting checklist */
  SW.mod('reporting-checklist', function () {
    var panel = document.querySelector('[data-reporting-checklist]');
    if (!panel) return;
    var items = panel.querySelectorAll('[data-rc-item]');
    var result = panel.querySelector('#rc-result');
    var cta = panel.querySelector('#rc-cta');
    var labels = ['Profit & loss', 'Balance sheet', 'Cash flow', 'AR aging', 'Job cost'];

    function calc() {
      var checked = [];
      var missing = [];
      items.forEach(function (el, i) {
        if (el.checked) checked.push(labels[i]);
        else missing.push(labels[i]);
      });
      if (checked.length === 0) {
        result.textContent = 'Tick what you get today to see what is missing.';
        cta.hidden = true;
        return;
      }
      if (missing.length === 0) {
        result.textContent = 'You have all five. Let us review them together monthly.';
      } else {
        result.textContent = 'Missing: ' + missing.join(', ') + '.';
      }
      cta.hidden = false;
    }

    items.forEach(function (el) {
      el.addEventListener('change', calc);
    });
  });

  /* Signature: worksheet grid cell ref advance */
  if (!SW.reduced && document.documentElement.classList.contains('sw-motion')) {
    var cells = document.querySelectorAll('.cell-ref');
    if (cells.length > 0 && 'IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.color = 'var(--accent)';
            entry.target.style.fontWeight = '700';
          } else {
            entry.target.style.color = '';
            entry.target.style.fontWeight = '';
          }
        });
      }, { rootMargin: '0px 0px -40% 0px', threshold: 0.1 });
      cells.forEach(function (el) { observer.observe(el); });
    }
  }
})();