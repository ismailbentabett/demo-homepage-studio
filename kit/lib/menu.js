/* menu: [data-menu-btn] opens/closes [data-menu] (full-screen or drawer).
   Sets aria-controls / aria-expanded, .is-open on the menu, html.sw-menu-open, inert while closed,
   traps focus, locks the page scroll; Esc, [data-menu-close] or a link click closes it and focus returns.
   data-menu-mq="(max-width: 899px)" on the menu: it only acts as a menu while that media query matches
   (for a nav that is a plain bar on wide screens). */
SW.mod('menu', function (SW) {
  var menu = SW.$('[data-menu]');
  var btns = SW.$$('[data-menu-btn]');
  if (!menu || !btns.length) return;
  var root = document.documentElement;
  var mqText = menu.getAttribute('data-menu-mq');
  var mq = mqText ? window.matchMedia(mqText) : null;
  var open = false, release = null, opener = null;

  if (!menu.id) menu.id = 'sw-menu';
  menu.setAttribute('data-lenis-prevent', '');
  btns.forEach(function (b) {
    b.setAttribute('aria-controls', menu.id);
    b.setAttribute('aria-expanded', 'false');
    b.addEventListener('click', function () { if (open) close(true); else show(b); });
  });
  function active() { return !mq || mq.matches; }
  function setClosedState() { menu.inert = active(); }
  setClosedState();
  if (mq) {
    var onChange = function () { if (open && !active()) close(false); setClosedState(); };
    if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
  }

  function announce() { document.dispatchEvent(new CustomEvent('sw:menu', { detail: { open: open } })); }
  function show(btn) {
    if (open || !active()) return;
    open = true; opener = btn || btns[0];
    menu.inert = false;
    menu.classList.add('is-open');
    root.classList.add('sw-menu-open');
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
    SW.lockScroll(true);
    release = SW.trapFocus(menu, btns.filter(function (b) { return !menu.contains(b); }));
    // wait a frame so a visibility change has applied before focusing
    requestAnimationFrame(function () {
      var first = SW.$('[data-menu-first]', menu) ||
        SW.focusables(menu).filter(function (el) { return !el.hasAttribute('data-menu-close'); })[0];
      SW.focusEl(first || menu);
    });
    announce();
  }
  function close(returnFocus) {
    if (!open) return;
    open = false;
    menu.classList.remove('is-open');
    root.classList.remove('sw-menu-open');
    btns.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
    if (release) release();
    release = null;
    SW.lockScroll(false);
    setClosedState();
    if (returnFocus && opener) SW.focusEl(opener);
    announce();
  }
  document.addEventListener('keydown', function (e) { if (open && e.key === 'Escape') { e.preventDefault(); close(true); } });
  menu.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-menu-close], a[href]') : null;
    if (!t) return;
    close(t.hasAttribute('data-menu-close')); // a link: let it navigate, its target takes focus
  });
  SW.menu = { open: show, close: close, get isOpen() { return open; } };
});
