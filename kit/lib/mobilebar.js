/* mobilebar: [data-mobilebar] (sticky call/quote bar; the site's CSS shows it under 900px).
   Gets .is-hidden + inert while scrolling down past 200px, while #contact / form[data-lead] / [data-mobilebar-hide]
   is on screen, while a text field has focus (the phone keyboard is up) and while the menu is open. */
SW.mod('mobilebar', function (SW) {
  var bar = SW.$('[data-mobilebar]');
  if (!bar) return;
  var lastY = window.scrollY, goingDown = false, typing = false, menuOpen = false, queued = false;
  var blocking = [];

  function update() {
    queued = false;
    var y = window.scrollY;
    if (y > lastY + 4) goingDown = true; else if (y < lastY - 4) goingDown = false;
    if (Math.abs(y - lastY) > 4) lastY = y;
    var focusInBar = bar.contains(document.activeElement);
    var hide = !focusInBar && ((goingDown && y > 200) || blocking.length > 0 || typing || menuOpen);
    bar.classList.toggle('is-hidden', hide);
    bar.inert = hide;
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', queue, { passive: true });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var i = blocking.indexOf(en.target);
        if (en.isIntersecting && i < 0) blocking.push(en.target);
        if (!en.isIntersecting && i >= 0) blocking.splice(i, 1);
      });
      queue();
    });
    SW.$$('#contact, form[data-lead], [data-mobilebar-hide]').forEach(function (el) { io.observe(el); });
  }
  function isField(el) {
    return !!(el && el.matches && el.matches('input:not([type="checkbox"]):not([type="radio"]):not([type="range"]), textarea, select'));
  }
  document.addEventListener('focusin', function (e) { typing = isField(e.target) && !bar.contains(e.target); queue(); });
  document.addEventListener('focusout', function () { typing = false; queue(); });
  document.addEventListener('sw:menu', function (e) { menuOpen = !!(e.detail && e.detail.open); queue(); });
  update();
});
