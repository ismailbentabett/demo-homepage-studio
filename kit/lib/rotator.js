/* rotator: <span data-rotate="hail|wind|time">hail</span> cycles the words in place.
   The element's own text stays for screen readers (sr-only copy); the words sit in an aria-hidden
   .sw-rotate-slot (an inline grid, so its width is the widest word) as .sw-rotate-word, the shown one .is-active.
   Every 2.6s (data-rotate-interval in ms), paused off-screen and in a hidden tab; never moves under reduced motion. */
SW.mod('rotator', function (SW) {
  SW.$$('[data-rotate]').forEach(function (el) {
    var words = el.getAttribute('data-rotate').split('|').map(function (w) { return w.trim(); }).filter(Boolean);
    if (words.length < 2 || el.querySelector('.sw-rotate-slot')) return;
    var staticText = el.textContent.trim() || words[0];
    el.textContent = '';
    var sr = document.createElement('span');
    sr.className = 'sr-only';
    sr.textContent = staticText;
    var slot = document.createElement('span');
    slot.className = 'sw-rotate-slot';
    slot.setAttribute('aria-hidden', 'true');
    var items = words.map(function (w, i) {
      var s = document.createElement('span');
      s.className = 'sw-rotate-word' + (i === 0 ? ' is-active' : '');
      s.textContent = w;
      slot.appendChild(s);
      return s;
    });
    el.appendChild(sr);
    el.appendChild(slot);
    if (SW.reduced) return;

    var index = 0, timer = null, onScreen = false;
    var every = Math.max(1200, parseInt(el.getAttribute('data-rotate-interval'), 10) || 2600);
    function step() {
      items[index].classList.remove('is-active');
      items[index].classList.add('is-leaving');
      var leaving = items[index];
      setTimeout(function () { leaving.classList.remove('is-leaving'); }, 700);
      index = (index + 1) % items.length;
      items[index].classList.add('is-active');
      el.style.setProperty('--rotate-i', index);
    }
    function sync() {
      var run = onScreen && !document.hidden;
      if (run && !timer) timer = setInterval(step, every);
      if (!run && timer) { clearInterval(timer); timer = null; }
    }
    SW.inView(el, function (inside) { onScreen = inside; sync(); }, { once: false });
    document.addEventListener('visibilitychange', sync);
  });
});
