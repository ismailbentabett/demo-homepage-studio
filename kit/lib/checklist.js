/* checklist: a self-check list ("Signs you need a new roof").
   <div data-checklist data-checklist-results="0:Tick what you see.|1:One sign: worth a free look.|3:{n} of {total}: time to call.">
     <label><input type="checkbox"> Shingles curling</label> ...
     <p data-checklist-result></p>   (aria-live; created when missing)
   </div>
   The result line uses the highest threshold that n reaches. Sets data-checked="n" and --checked / --total on the box. */
SW.mod('checklist', function (SW) {
  SW.$$('[data-checklist]').forEach(function (box) {
    var boxes = SW.$$('input[type="checkbox"]', box);
    if (!boxes.length) return;
    var out = SW.$('[data-checklist-result]', box);
    if (!out) { out = document.createElement('p'); out.setAttribute('data-checklist-result', ''); box.appendChild(out); }
    out.setAttribute('aria-live', 'polite');
    var rules = (box.getAttribute('data-checklist-results') || '0:{n} of {total} checked.')
      .split('|').map(function (r) {
        var i = r.indexOf(':');
        return { min: parseInt(r.slice(0, i), 10) || 0, text: r.slice(i + 1).trim() };
      }).sort(function (a, b) { return a.min - b.min; });
    function update() {
      var n = boxes.filter(function (b) { return b.checked; }).length;
      var rule = rules.filter(function (r) { return n >= r.min; }).pop() || rules[0];
      box.setAttribute('data-checked', String(n));
      box.style.setProperty('--checked', n);
      box.style.setProperty('--total', boxes.length);
      box.style.setProperty('--checked-pct', (n / boxes.length * 100).toFixed(1) + '%');
      out.textContent = rule.text.replace(/\{n\}/g, n).replace(/\{total\}/g, boxes.length);
      boxes.forEach(function (b) { var l = b.closest('label'); if (l) l.classList.toggle('is-checked', b.checked); });
    }
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    update();
  });
});
