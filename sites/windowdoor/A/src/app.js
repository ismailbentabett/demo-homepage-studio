/* windowdoor-A · Opening Schedule: tool glue (always on) + the schedule-strip story (motion only). */
(function () {
  var root = document.documentElement;

  /* ---- Tool 1: measure your opening (behaviour, works under reduced motion) ---- */
  var mForm = document.querySelector('[data-measure]');
  if (mForm) {
    var sizeOut = mForm.querySelector('[data-measure-size]');
    var msg = mForm.querySelector('[data-measure-msg]');
    var send = mForm.querySelector('[data-measure-send]');
    var last = '';
    var fmt = function (n) {
      var whole = Math.floor(n), frac = Math.round((n - whole) * 8) / 8;
      if (frac === 1) { whole += 1; frac = 0; }
      var map = { 0.125: '⅛', 0.25: '¼', 0.375: '⅜', 0.5: '½', 0.625: '⅝', 0.75: '¾', 0.875: '⅞' };
      return whole + (frac ? map[frac] : '');
    };
    var smallest = function (names) {
      var vals = names.map(function (n) { return parseFloat(mForm.elements[n].value); })
        .filter(function (v) { return isFinite(v) && v >= 6 && v <= 200; });
      return vals.length ? Math.min.apply(null, vals) : null;
    };
    var update = function () {
      var w = smallest(['w1', 'w2', 'w3']), h = smallest(['h1', 'h2', 'h3']);
      if (w && h) {
        last = fmt(w) + ' × ' + fmt(h) + ' in';
        sizeOut.textContent = last;
        var ws = ['w1', 'w2', 'w3'].map(function (n) { return parseFloat(mForm.elements[n].value); }).filter(isFinite);
        var spread = ws.length > 1 ? Math.max.apply(null, ws) - Math.min.apply(null, ws) : 0;
        msg.textContent = spread >= 0.5
          ? 'The widths differ by ' + fmt(spread) + ' in: the opening is out of square. Good to know before ordering.'
          : 'Smallest width × smallest height. Text it to us with a photo.';
      } else {
        last = '';
        sizeOut.textContent = '— × — in';
        msg.textContent = 'Fill in at least one width and one height.';
      }
    };
    mForm.addEventListener('input', update);
    if (send) send.addEventListener('click', function () {
      if (!last) { msg.textContent = 'Fill in at least one width and one height first.'; return; }
      SW.prefillForm({ size: last }, { focus: 'service' });
    });
  }

  /* ---- Tool 2: glass by wall direction → notes field ---- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-glass-note]');
    if (!b) return;
    SW.prefillForm({ details: b.getAttribute('data-glass-note') + '. ' }, { focus: 'service' });
  });

  /* ---- Key plan: tags wait for the house photo (start state lives under .sw-motion only) ---- */
  var kpCrop = document.querySelector('.keyplan__crop');
  if (kpCrop) {
    var kpImg = kpCrop.querySelector('img');
    var kpReady = function () { kpCrop.classList.add('kp-ready'); };
    if (!kpImg || (kpImg.complete && kpImg.naturalWidth)) kpReady();
    else { kpImg.addEventListener('load', kpReady); kpImg.addEventListener('error', kpReady); }
  }

  /* ---- Story: the schedule strip ticks as each opening passes (motion only, no pin) ---- */
  if (SW.reduced || !root.classList.contains('sw-motion') || !('IntersectionObserver' in window)) return;
  var proc = document.querySelector('.process');
  if (!proc) return;
  var steps = Array.prototype.slice.call(proc.querySelectorAll('.step'));
  var rows = Array.prototype.slice.call(proc.querySelectorAll('.strip__row'));
  var reached = 0;
  var setActive = function (n) {
    proc.setAttribute('data-active', String(Math.max(1, n)));
    rows.forEach(function (r, i) {
      r.classList.toggle('is-done', i < n);
      r.classList.toggle('is-current', i === n - 1);
    });
    steps.forEach(function (s, i) { s.classList.toggle('is-done', i < n); });
  };
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      var n = parseInt(en.target.getAttribute('data-step-n'), 10);
      if (en.isIntersecting) { if (n > reached) { reached = n; setActive(n); } }
      else if (en.boundingClientRect.top > 0 && n <= reached) { reached = n - 1; setActive(reached); }
    });
  }, { rootMargin: '0px 0px -45% 0px', threshold: 0.02 });
  steps.forEach(function (s) { io.observe(s); });
  proc.setAttribute('data-active', '1');
})();
