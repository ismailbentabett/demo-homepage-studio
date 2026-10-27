/* popup: <dialog data-popup id="offer" data-popup-delay="12000" aria-labelledby="offer-title"> ... <button data-popup-close>No thanks</button></dialog>
   Shown at most once per browser session (sessionStorage "sw-popup-<id>"), never on load: only after
   max(8 s, data-popup-delay) and then on exit intent (mouse leaves the top of the window) or when the visitor
   has scrolled 60% of the page. Not while the menu or another dialog is open, a field has focus, or the tab is hidden.
   [data-popup-close], Esc, a click on the backdrop or on any "#..." link inside closes it; Tab stays inside;
   focus returns to where it was. data-popup-scroll="0.6" changes the scroll trigger. */
SW.mod('popup', function (SW) {
  SW.$$('dialog[data-popup]').forEach(function (dlg, n) {
    if (typeof dlg.showModal !== 'function') return;
    var key = 'sw-popup-' + (dlg.id || n);
    if (SW.store.get(key)) return;
    var delay = Math.max(8000, parseInt(dlg.getAttribute('data-popup-delay'), 10) || 0);
    var depth = parseFloat(dlg.getAttribute('data-popup-scroll')) || 0.6;
    var armed = false, done = false, back = null, release = null;
    dlg.setAttribute('data-lenis-prevent', '');

    function canPop() {
      if (done || !armed || document.hidden) return false;
      if (document.documentElement.classList.contains('sw-menu-open')) return false;
      if (SW.$('dialog[open]')) return false;
      var a = document.activeElement;
      if (a && /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName)) return false;
      return true;
    }
    function open() {
      if (!canPop()) return;
      done = true;
      SW.store.set(key, '1');
      back = document.activeElement;
      dlg.showModal();
      dlg.classList.add('is-open');
      SW.lockScroll(true);
      release = SW.trapFocus(dlg);
      var first = SW.$('[data-popup-first]', dlg) || SW.focusables(dlg)[0];
      SW.focusEl(first || dlg);
      cleanup();
    }
    function close() { if (dlg.open) dlg.close(); }
    dlg.addEventListener('close', function () {
      dlg.classList.remove('is-open');
      SW.lockScroll(false);
      if (release) { release(); release = null; }
      if (back && back.focus && document.contains(back)) back.focus();
    });
    dlg.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('[data-popup-close]')) { close(); return; }
      var link = t.closest('a[href^="#"]');
      if (link) { close(); return; } // let the anchor scroll after closing
      if (t === dlg) {
        var r = dlg.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) close();
      }
    });

    function onLeave(e) { if (e.clientY <= 0 && !e.relatedTarget && SW.finePointer) open(); }
    function onScroll() {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= depth) open();
    }
    function cleanup() {
      document.removeEventListener('mouseout', onLeave);
      window.removeEventListener('scroll', onScroll);
    }
    setTimeout(function () {
      armed = true;
      document.addEventListener('mouseout', onLeave);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }, delay);
    // test/demo hook: SW.popup.open('offer') ignores the wait, not the other guards
    SW.popup = SW.popup || { open: function (id) { var d = id ? document.getElementById(id) : SW.$('dialog[data-popup]'); if (d && d._swOpen) d._swOpen(); } };
    dlg._swOpen = function () { armed = true; open(); };
  });
});
