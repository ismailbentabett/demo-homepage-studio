/* estimator: shows the sample price ranges from facts proof.prices. It never does math on dollars.
   <div data-estimator>
     <label for="est-item">Job</label> <select id="est-item" data-est-item></select>   (filled from the prices when empty)
     <label for="est-size">Size</label> <input id="est-size" type="range" min="0" max="2" value="1" data-est-size>   (optional)
     <div data-est-sketch></div>      (optional; gets data-item / data-level / --est for a drawing)
     <p data-est-out></p>             (aria-live; created when missing)
     <button data-est-print>Print this price</button>   (optional)
   </div>
   The range only sets a level (low / mid / high) and --est 0..1 for the sketch; the shown range stays the facts' from-to.
   Output: "Leak repair: $300 to $950", the note, and a .sample-tag "Sample price". */
SW.mod('estimator', function (SW) {
  var LEVELS = ['low', 'mid', 'high'];
  SW.$$('[data-estimator]').forEach(function (box) {
    var prices = SW.fact('proof.prices', 'prices') || [];
    var sel = SW.$('[data-est-item]', box);
    var size = SW.$('[data-est-size]', box);
    var sketch = SW.$('[data-est-sketch]', box);
    var out = SW.$('[data-est-out]', box);
    var printBtn = SW.$('[data-est-print]', box);
    if (!sel || !prices.length) { SW.warn('estimator: needs [data-est-item] and proof.prices', box); return; }
    if (!out) { out = document.createElement('p'); out.setAttribute('data-est-out', ''); box.appendChild(out); }
    out.setAttribute('aria-live', 'polite');
    if (!sel.options.length) {
      prices.forEach(function (p, i) {
        var o = document.createElement('option');
        o.value = String(i);
        o.textContent = p.item;
        sel.appendChild(o);
      });
    }
    function money(v) {
      if (typeof v === 'number') return '$' + v.toLocaleString('en-US');
      return String(v);
    }
    function current() {
      var v = sel.value;
      var byIndex = /^\d+$/.test(v) ? prices[parseInt(v, 10)] : null;
      return byIndex || prices.find(function (p) { return p.item.toLowerCase() === String(sel.options[sel.selectedIndex] ? sel.options[sel.selectedIndex].text : v).toLowerCase(); }) || prices[0];
    }
    function update() {
      var p = current();
      var level = 1, k = 0.5;
      if (size) {
        var min = parseFloat(size.min) || 0, max = parseFloat(size.max) || 100, val = parseFloat(size.value);
        k = max > min ? (val - min) / (max - min) : 0.5;
        level = k < 1 / 3 ? 0 : k < 2 / 3 ? 1 : 2;
        size.setAttribute('aria-valuetext', LEVELS[level] === 'low' ? 'Small job' : LEVELS[level] === 'mid' ? 'Typical job' : 'Large job');
      }
      box.style.setProperty('--est', k.toFixed(3));
      box.setAttribute('data-level', LEVELS[level]);
      if (sketch) {
        sketch.setAttribute('data-item', p.item);
        sketch.setAttribute('data-level', LEVELS[level]);
        sketch.style.setProperty('--est', k.toFixed(3));
      }
      out.textContent = '';
      var line = document.createElement('span');
      line.className = 'sw-est-range';
      line.textContent = p.item + ': ' + money(p.from) + ' to ' + money(p.to) + (p.unit ? ' ' + p.unit : '');
      out.appendChild(line);
      if (p.note) {
        var note = document.createElement('span');
        note.className = 'sw-est-note';
        note.textContent = ' (' + p.note + ')';
        out.appendChild(note);
      }
      out.appendChild(document.createTextNode(' '));
      var tag = document.createElement('span');
      tag.className = 'sample-tag';
      tag.textContent = 'Sample price';
      out.appendChild(tag);
    }
    sel.addEventListener('change', update);
    if (size) size.addEventListener('input', update);
    if (printBtn) {
      printBtn.type = 'button';
      printBtn.addEventListener('click', function () {
        document.documentElement.classList.add('sw-print-est');
        box.classList.add('is-printing');
        window.print();
      });
      window.addEventListener('afterprint', function () {
        document.documentElement.classList.remove('sw-print-est');
        box.classList.remove('is-printing');
      });
    }
    box.setAttribute('data-estimator-ready', '');
    update();
  });
});
