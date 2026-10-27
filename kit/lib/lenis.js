/* lenis: smooth scrolling when <html data-smooth> is set, window.Lenis is loaded and motion is allowed.
   lerp .1, wheelMultiplier 1, driven by the GSAP ticker (and synced to ScrollTrigger) when GSAP is loaded.
   Sets SW.lenis. Same-page anchor links scroll through Lenis and focus their target. */
SW.mod('lenis', function (SW) {
  var root = document.documentElement;
  if (!root.hasAttribute('data-smooth') || SW.reduced || typeof window.Lenis !== 'function') return;
  var lenis = new window.Lenis({
    lerp: 0.1,
    wheelMultiplier: 1,
    // never hijack scrolling inside an open dialog or an element that scrolls itself
    prevent: function (node) { return !!(node && node.closest && node.closest('[data-lenis-prevent], dialog[open]')); },
  });
  SW.lenis = lenis;

  if (window.gsap && window.gsap.ticker) {
    if (window.ScrollTrigger) lenis.on('scroll', window.ScrollTrigger.update);
    window.gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    window.gsap.ticker.lagSmoothing(0);
  } else {
    var raf = function (time) { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var hash = a.getAttribute('href');
    if (hash.length < 2) return;
    var target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    SW.scrollTo(target);
    if (history.pushState) history.pushState(null, '', hash);
  });
});
