/* compare: before/after slider.
   <div data-compare data-compare-labels="Before|After" data-compare-start="50">
     <img src="after.webp" alt="...">                       (bottom layer, the "after")
     <div data-compare-top><img src="before.webp" alt="..."></div>   (clipped to --pos by base.css)
     <button data-compare-handle></button>                  (optional; created when missing)
   </div>
   Sets --pos (0%..100%) on the box. The handle is a role="slider" with aria-valuetext "Before 40%, After 60%".
   Keys: arrows 1 (Shift 10), PageUp/PageDown 10, Home/End. Drag anywhere on the box (pointer capture). */
SW.mod('compare', function (SW) {
  SW.$$('[data-compare]').forEach(function (box) {
    var labels = (box.getAttribute('data-compare-labels') || 'Before|After').split('|');
    var a = (labels[0] || 'Before').trim(), b = (labels[1] || 'After').trim();
    var handle = SW.$('[data-compare-handle]', box);
    if (!handle) {
      handle = document.createElement('button');
      handle.type = 'button';
      handle.setAttribute('data-compare-handle', '');
      handle.className = 'sw-compare-handle';
      box.appendChild(handle);
    }
    handle.setAttribute('role', 'slider');
    handle.setAttribute('tabindex', '0');
    handle.setAttribute('aria-valuemin', '0');
    handle.setAttribute('aria-valuemax', '100');
    handle.setAttribute('aria-orientation', 'horizontal');
    if (!handle.hasAttribute('aria-label')) handle.setAttribute('aria-label', a + ' and ' + b + ' comparison');
    box.setAttribute('data-compare-ready', '');

    var pos = 50;
    function set(p) {
      pos = Math.round(Math.max(0, Math.min(100, p)) * 10) / 10;
      box.style.setProperty('--pos', pos + '%');
      var shown = Math.round(pos);
      handle.setAttribute('aria-valuenow', String(shown));
      handle.setAttribute('aria-valuetext', a + ' ' + shown + '%, ' + b + ' ' + (100 - shown) + '%');
    }
    set(parseFloat(box.getAttribute('data-compare-start')) || 50);

    handle.addEventListener('keydown', function (e) {
      var step = e.shiftKey ? 10 : 1, next = null;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') next = pos - step;
      else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') next = pos + step;
      else if (e.key === 'PageDown') next = pos - 10;
      else if (e.key === 'PageUp') next = pos + 10;
      else if (e.key === 'Home') next = 0;
      else if (e.key === 'End') next = 100;
      if (next === null) return;
      e.preventDefault();
      set(next);
    });

    var dragging = false;
    function fromEvent(e) {
      var r = box.getBoundingClientRect();
      set(((e.clientX - r.left) / r.width) * 100);
    }
    box.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      dragging = true;
      box.classList.add('is-dragging');
      try { box.setPointerCapture(e.pointerId); } catch (err) { /* old browsers */ }
      fromEvent(e);
      handle.focus({ preventScroll: true });
      e.preventDefault();
    });
    box.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
    function end() { dragging = false; box.classList.remove('is-dragging'); }
    box.addEventListener('pointerup', end);
    box.addEventListener('pointercancel', end);
    box.addEventListener('dragstart', function (e) { e.preventDefault(); });
  });
});
