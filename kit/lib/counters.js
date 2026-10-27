/* counters: <span data-count="143">143 reviews</span> counts the first number in the text up from 0 once in view.
   Write the final value in the HTML too (it is what shows without JS). Decimals follow the data-count value ("4.9").
   data-count-duration in ms (default 1200). Screen readers get the final text; the moving copy is aria-hidden.
   Static (final value) under reduced motion. */
SW.mod('counters', function (SW) {
  SW.$$('[data-count]').forEach(function (el) {
    if (el.querySelector('.sw-count-num')) return;
    var raw = el.getAttribute('data-count');
    var target = parseFloat(String(raw).replace(/[^0-9.\-]/g, ''));
    if (isNaN(target)) return;
    var decimals = (String(raw).split('.')[1] || '').replace(/\D/g, '').length;
    var fmt = new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    var text = el.textContent;
    var m = text.match(/\d[\d,]*(\.\d+)?/);
    var before = m ? text.slice(0, m.index) : '';
    var after = m ? text.slice(m.index + m[0].length) : text;
    var finalText = fmt.format(target);

    el.textContent = '';
    var sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = (before + finalText + after).trim();
    var visual = document.createElement('span');
    visual.setAttribute('aria-hidden', 'true');
    var num = document.createElement('span');
    num.className = 'sw-count-num';
    visual.appendChild(document.createTextNode(before));
    visual.appendChild(num);
    visual.appendChild(document.createTextNode(after));
    el.appendChild(sr);
    el.appendChild(visual);

    if (SW.reduced) { num.textContent = finalText; el.classList.add('is-counted'); return; }
    num.textContent = fmt.format(0);
    var duration = parseInt(el.getAttribute('data-count-duration'), 10) || 1200;
    SW.inView(el, function () {
      var t0 = performance.now();
      function frame(now) {
        var k = Math.min(1, (now - t0) / duration);
        var eased = 1 - Math.pow(1 - k, 3);
        num.textContent = fmt.format(target * eased);
        if (k < 1) requestAnimationFrame(frame);
        else { num.textContent = finalText; el.classList.add('is-counted'); }
      }
      requestAnimationFrame(frame);
    }, { threshold: 0.4 });
    window.addEventListener('beforeprint', function () { num.textContent = finalText; });
  });
});
