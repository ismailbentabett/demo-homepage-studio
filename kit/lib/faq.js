/* faq: <div data-accordion> with <details><summary>Question</summary><div>Answer</div></details> items.
   Native details/summary does the keyboard and ARIA work (works without JS); this adds a height animation
   on the answer (the first element after <summary>). data-accordion="single" keeps only one open.
   The <details> gets .is-opening / .is-closing while it moves. Under reduced motion the native toggle is left alone. */
SW.mod('faq', function (SW) {
  SW.$$('[data-accordion]').forEach(function (group) {
    var single = group.getAttribute('data-accordion') === 'single';
    var items = SW.$$('details', group);

    function body(d) { return d.querySelector(':scope > summary ~ *'); }
    function animate(d, open) {
      var el = body(d);
      if (d._swAnim) { d._swAnim.cancel(); d._swAnim = null; }
      if (SW.reduced || !el || !el.animate) { d.open = open; return; }
      if (open) d.open = true;
      var h = el.scrollHeight;
      d.classList.toggle('is-opening', open);
      d.classList.toggle('is-closing', !open);
      el.style.overflow = 'hidden';
      var anim = el.animate(
        { height: open ? ['0px', h + 'px'] : [h + 'px', '0px'], opacity: open ? [0, 1] : [1, 0] },
        { duration: open ? 280 : 200, easing: 'cubic-bezier(.23,1,.32,1)' }
      );
      d._swAnim = anim;
      anim.onfinish = function () {
        d._swAnim = null;
        if (!open) d.open = false;
        el.style.overflow = '';
        d.classList.remove('is-opening', 'is-closing');
      };
    }

    items.forEach(function (d) {
      var summary = d.querySelector('summary');
      if (!summary) return;
      summary.addEventListener('click', function (e) {
        if (SW.reduced) return; // native toggle
        e.preventDefault();
        var opening = !d.open || d.classList.contains('is-closing');
        if (opening && single) items.forEach(function (o) { if (o !== d && o.open) animate(o, false); });
        animate(d, opening);
      });
      d.addEventListener('toggle', function () {
        if (single && d.open) items.forEach(function (o) { if (o !== d && o.open && !o._swAnim) o.open = false; });
      });
    });
  });
});
