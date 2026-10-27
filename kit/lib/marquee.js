/* marquee: <div data-marquee="60"> ...items... </div> scrolls its items sideways forever (60 px/s, the attribute value).
   The items move into .sw-marquee-inner > .sw-marquee-group; aria-hidden, inert copies are added until it is wide enough.
   CSS (base.css) animates .sw-marquee-inner over --marquee-dur. .is-paused on hover, focus inside and off-screen.
   An optional <button data-marquee-toggle> inside pauses/plays it (aria-pressed="true" = paused).
   Under reduced motion it stays one static group (it can wrap or scroll by hand). */
SW.mod('marquee', function (SW) {
  SW.$$('[data-marquee]').forEach(function (el) {
    if (SW.$('.sw-marquee-inner', el)) return;
    var toggle = SW.$('[data-marquee-toggle]', el);
    if (toggle) toggle.remove();
    var inner = document.createElement('div');
    inner.className = 'sw-marquee-inner';
    var group = document.createElement('div');
    group.className = 'sw-marquee-group';
    while (el.firstChild) group.appendChild(el.firstChild);
    inner.appendChild(group);
    el.appendChild(inner);
    if (toggle) el.appendChild(toggle);
    if (SW.reduced) { el.classList.add('is-static'); if (toggle) toggle.hidden = true; return; }

    var speed = parseFloat(el.getAttribute('data-marquee')) || 60;
    function fill() {
      SW.$$('.sw-marquee-group[aria-hidden]', inner).forEach(function (c) { c.remove(); });
      var w = group.getBoundingClientRect().width;
      if (!w) return;
      var copies = Math.max(1, Math.ceil(el.clientWidth / w));
      for (var i = 0; i < copies; i++) {
        var c = group.cloneNode(true);
        c.setAttribute('aria-hidden', 'true');
        c.setAttribute('inert', '');
        SW.$$('[id]', c).forEach(function (n) { n.removeAttribute('id'); });
        inner.appendChild(c);
      }
      el.style.setProperty('--marquee-dur', (w / speed).toFixed(2) + 's');
      el.style.setProperty('--marquee-shift', '-' + w.toFixed(1) + 'px');
      el.classList.add('is-running');
    }
    fill();
    var timer;
    window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(fill, 200); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fill);

    var hover = false, focus = false, off = false, user = false;
    function sync() {
      el.classList.toggle('is-paused', hover || focus || off || user);
      if (toggle) toggle.setAttribute('aria-pressed', user ? 'true' : 'false');
    }
    el.addEventListener('pointerenter', function () { hover = true; sync(); });
    el.addEventListener('pointerleave', function () { hover = false; sync(); });
    el.addEventListener('focusin', function () { focus = true; sync(); });
    el.addEventListener('focusout', function () { focus = el.contains(document.activeElement); sync(); });
    if (toggle) {
      toggle.type = 'button';
      toggle.addEventListener('click', function () { user = !user; sync(); });
    }
    SW.inView(el, function (inside) { off = !inside; sync(); }, { once: false });
    sync();
  });
});
