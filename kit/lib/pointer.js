/* pointer: fine-pointer (mouse) effects that only set CSS variables; the site's CSS decides what they do.
   [data-magnetic="0.3"]  --mx / --my in px toward the cursor (strength 0..1, default 0.3)     off under reduced motion
   [data-tilt="8"]        --rx / --ry in deg (max angle, default 8), --px / --py 0..1            off under reduced motion
   [data-spotlight]       --sx / --sy in px inside the element, .is-lit while hovered            kept under reduced motion */
SW.mod('pointer', function (SW) {
  if (!SW.finePointer) return;

  function track(el, onMove, onLeave) {
    var frame = 0, last = null;
    el.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      last = e;
      if (!frame) frame = requestAnimationFrame(function () { frame = 0; onMove(last, el.getBoundingClientRect()); });
    });
    el.addEventListener('pointerleave', function () {
      if (frame) { cancelAnimationFrame(frame); frame = 0; }
      onLeave();
    });
  }

  if (!SW.reduced) {
    SW.$$('[data-magnetic]').forEach(function (el) {
      var k = parseFloat(el.getAttribute('data-magnetic')) || 0.3;
      track(el, function (e, r) {
        el.style.setProperty('--mx', ((e.clientX - (r.left + r.width / 2)) * k).toFixed(1) + 'px');
        el.style.setProperty('--my', ((e.clientY - (r.top + r.height / 2)) * k).toFixed(1) + 'px');
        el.classList.add('is-pulled');
      }, function () {
        el.style.setProperty('--mx', '0px');
        el.style.setProperty('--my', '0px');
        el.classList.remove('is-pulled');
      });
    });
    SW.$$('[data-tilt]').forEach(function (el) {
      var max = parseFloat(el.getAttribute('data-tilt')) || 8;
      track(el, function (e, r) {
        var px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.setProperty('--px', px.toFixed(3));
        el.style.setProperty('--py', py.toFixed(3));
        el.style.setProperty('--ry', ((px - 0.5) * 2 * max).toFixed(2) + 'deg');
        el.style.setProperty('--rx', ((0.5 - py) * 2 * max).toFixed(2) + 'deg');
        el.classList.add('is-tilting');
      }, function () {
        el.style.setProperty('--rx', '0deg');
        el.style.setProperty('--ry', '0deg');
        el.classList.remove('is-tilting');
      });
    });
  }
  SW.$$('[data-spotlight]').forEach(function (el) {
    track(el, function (e, r) {
      el.style.setProperty('--sx', (e.clientX - r.left).toFixed(0) + 'px');
      el.style.setProperty('--sy', (e.clientY - r.top).toFixed(0) + 'px');
      el.classList.add('is-lit');
    }, function () { el.classList.remove('is-lit'); });
  });
});
