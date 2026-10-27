/* carousel: a scroll-snap row (reviews, photos). Native scrolling does the work; this adds buttons and drag.
   <div data-carousel aria-label="Reviews">
     <div data-carousel-track> <article>...</article> <article>...</article> </div>
     <button data-carousel-prev aria-label="Previous">...</button> <button data-carousel-next aria-label="Next">...</button>
   </div>
   Buttons scroll one slide and get aria-disabled="true" at the ends. Slides get role="group" + aria-label "2 of 6".
   The track is focusable (tabindex 0); Left/Right arrows scroll it. Mouse drag scrolls (.is-dragging) and
   swallows the click that ends a drag. Without JS base.css hides the buttons; the row still scrolls. */
SW.mod('carousel', function (SW) {
  SW.$$('[data-carousel]').forEach(function (box) {
    var track = SW.$('[data-carousel-track]', box);
    if (!track) return;
    var slides = Array.prototype.slice.call(track.children);
    var prev = SW.$('[data-carousel-prev]', box), next = SW.$('[data-carousel-next]', box);
    if (!box.hasAttribute('role')) box.setAttribute('role', 'region');
    if (!box.hasAttribute('aria-roledescription')) box.setAttribute('aria-roledescription', 'carousel');
    track.setAttribute('tabindex', '0');
    track.setAttribute('data-lenis-prevent', '');
    if (!track.hasAttribute('aria-label')) track.setAttribute('aria-label', (box.getAttribute('aria-label') || 'Slides') + ', scroll sideways');
    slides.forEach(function (s, i) {
      s.setAttribute('role', 'group');
      s.setAttribute('aria-roledescription', 'slide');
      if (!s.hasAttribute('aria-label')) s.setAttribute('aria-label', (i + 1) + ' of ' + slides.length);
    });

    function stepSize() {
      var a = slides[0], b = slides[1];
      if (!a) return track.clientWidth;
      return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth;
    }
    function go(dir) {
      track.scrollBy({ left: dir * stepSize(), behavior: SW.reduced ? 'auto' : 'smooth' });
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth - 2;
      var atStart = track.scrollLeft <= 2, atEnd = track.scrollLeft >= max;
      if (prev) prev.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      if (next) next.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      box.classList.toggle('is-start', atStart);
      box.classList.toggle('is-end', atEnd);
      box.classList.toggle('is-static', max <= 0);
      var i = Math.round(track.scrollLeft / Math.max(1, stepSize()));
      box.style.setProperty('--slide', Math.min(slides.length - 1, i));
    }
    [[prev, -1], [next, 1]].forEach(function (p) {
      if (!p[0]) return;
      p[0].type = 'button';
      p[0].addEventListener('click', function () { if (p[0].getAttribute('aria-disabled') !== 'true') go(p[1]); });
    });
    track.addEventListener('keydown', function (e) {
      if (e.target !== track) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    });
    var frame = 0;
    track.addEventListener('scroll', function () { if (!frame) frame = requestAnimationFrame(function () { frame = 0; update(); }); }, { passive: true });
    window.addEventListener('resize', update);

    // mouse drag (touch already scrolls natively)
    var down = null, moved = false;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = { x: e.clientX, left: track.scrollLeft, id: e.pointerId };
      moved = false;
    });
    track.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - down.x;
      if (!moved && Math.abs(dx) > 5) {
        moved = true;
        box.classList.add('is-dragging');
        try { track.setPointerCapture(down.id); } catch (err) { /* fine */ }
      }
      if (moved) track.scrollLeft = down.left - dx;
    });
    function end() {
      if (!down) return;
      down = null;
      if (moved) {
        box.classList.remove('is-dragging');
        // let snap settle on the nearest slide
        var i = Math.round(track.scrollLeft / Math.max(1, stepSize()));
        track.scrollTo({ left: i * stepSize(), behavior: SW.reduced ? 'auto' : 'smooth' });
      }
    }
    track.addEventListener('pointerup', end);
    track.addEventListener('pointercancel', end);
    track.addEventListener('click', function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });
    update();
  });
});
