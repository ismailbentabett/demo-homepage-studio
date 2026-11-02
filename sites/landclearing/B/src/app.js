/* landclearing-B signature + glue */
(function () {
 if (!window.SW) return;
 var reduced = SW.reduced || !document.documentElement.classList.contains('sw-motion');

 /* Estimator: live range from facts.proof.prices */
 SW.mod('estimator', function () {
 var el = document.querySelector('[data-estimator]');
 if (!el) return;
 var prices = (SW.facts && SW.facts.proof && SW.facts.proof.prices) || [];
 var acresInput = el.querySelector('[data-est-input="acres"]');
 var densityInputs = el.querySelectorAll('[data-est-input="density"]');
 var rangeEl = el.querySelector('[data-est-range]');

 function update() {
 var acres = parseFloat(acresInput && acresInput.value) || 0;
 var idx = 0;
 densityInputs.forEach(function (r, i) { if (r.checked) idx = parseInt(r.value, 10); });
 var p = prices[idx];
 if (!p || acres <= 0) {
 if (rangeEl) rangeEl.textContent = '';
 return;
 }
 var lo = parseInt((p.from || '').replace(/[^0-9]/g, ''), 10) || 0;
 var hi = parseInt((p.to || '').replace(/[^0-9]/g, ''), 10) || 0;
 var totalLo = lo * acres;
 var totalHi = hi * acres;
 var fmt = function (n) { return '$' + n.toLocaleString('en-US'); };
 if (rangeEl) {
 rangeEl.textContent = fmt(totalLo) + ' – ' + fmt(totalHi) + ' (' + acres + ' acres × ' + p.from + '–' + p.to + ' / acre)';
 }
 }

 if (acresInput) acresInput.addEventListener('input', update);
 densityInputs.forEach(function (r) { r.addEventListener('change', update); });
 update();
 });

 /* Mosaic hatch intro */
 if (!reduced) {
 document.addEventListener('DOMContentLoaded', function () {
 var tiles = document.querySelectorAll('.mosaic-tile');
 tiles.forEach(function (t, i) {
 setTimeout(function () { t.classList.add('is-revealed'); }, 200 + i * 150);
 });
 });
 }
})();