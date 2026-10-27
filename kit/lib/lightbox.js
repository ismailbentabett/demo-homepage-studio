/* lightbox: <div data-lightbox> with <a href="big.webp" data-lightbox-item data-caption="..."><img src="small.webp" alt="..."></a>.
   (Plain <a> elements wrapping an <img> count too.) Without JS the links just open the image.
   Opens a modal <dialog>: a [data-lightbox-dialog] template on the page if there is one, else it builds
   dialog.sw-lightbox with [data-lb-img] [data-lb-caption] [data-lb-count] [data-lb-prev] [data-lb-next] [data-lb-close].
   Left/Right arrows move, Esc or a click on the backdrop closes, Tab stays inside, focus goes back to the link. */
SW.mod('lightbox', function (SW) {
  var groups = SW.$$('[data-lightbox]');
  if (!groups.length) return;
  var dlg = SW.$('dialog[data-lightbox-dialog]');
  if (!dlg) {
    dlg = document.createElement('dialog');
    dlg.className = 'sw-lightbox';
    dlg.setAttribute('data-lightbox-dialog', '');
    dlg.setAttribute('aria-label', 'Photo viewer');
    dlg.innerHTML =
      '<figure class="sw-lb-figure"><img data-lb-img alt=""><figcaption data-lb-caption></figcaption></figure>' +
      '<p class="sw-lb-count" data-lb-count aria-live="polite"></p>' +
      '<button type="button" class="sw-lb-prev" data-lb-prev aria-label="Previous photo">←</button>' +
      '<button type="button" class="sw-lb-next" data-lb-next aria-label="Next photo">→</button>' +
      '<button type="button" class="sw-lb-close" data-lb-close aria-label="Close">×</button>';
    document.body.appendChild(dlg);
  }
  if (typeof dlg.showModal !== 'function') return; // very old browser: links open the image
  dlg.setAttribute('data-lenis-prevent', '');
  var img = SW.$('[data-lb-img]', dlg), cap = SW.$('[data-lb-caption]', dlg), count = SW.$('[data-lb-count]', dlg);
  var prev = SW.$('[data-lb-prev]', dlg), next = SW.$('[data-lb-next]', dlg), closeBtn = SW.$('[data-lb-close]', dlg);
  var list = [], index = 0, opener = null, release = null;

  function itemsOf(g) {
    var marked = SW.$$('[data-lightbox-item]', g);
    return marked.length ? marked : SW.$$('a[href]', g).filter(function (a) { return a.querySelector('img'); });
  }
  function show(i) {
    index = (i + list.length) % list.length;
    var a = list[index], thumb = a.querySelector('img');
    img.src = a.getAttribute('href') || a.getAttribute('data-src') || (thumb && thumb.currentSrc) || '';
    img.alt = (thumb && thumb.alt) || a.getAttribute('aria-label') || '';
    if (cap) { cap.textContent = a.getAttribute('data-caption') || ''; cap.hidden = !cap.textContent; }
    if (count) count.textContent = list.length > 1 ? 'Photo ' + (index + 1) + ' of ' + list.length : '';
    if (prev) prev.hidden = list.length < 2;
    if (next) next.hidden = list.length < 2;
    dlg.setAttribute('data-index', String(index));
  }
  function open(group, i, from) {
    list = itemsOf(group);
    opener = from;
    show(i);
    dlg.showModal();
    dlg.classList.add('is-open');
    SW.lockScroll(true);
    release = SW.trapFocus(dlg);
    SW.focusEl(closeBtn || dlg);
  }
  function close() { if (dlg.open) dlg.close(); }
  dlg.addEventListener('close', function () {
    dlg.classList.remove('is-open');
    SW.lockScroll(false);
    if (release) { release(); release = null; }
    if (opener) { opener.focus(); opener = null; }
  });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); show(index + 1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); show(index - 1); }
  });
  dlg.addEventListener('click', function (e) {
    if (e.target !== dlg) return;
    var r = dlg.getBoundingClientRect(); // click on the ::backdrop lands on the dialog itself
    var inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (!inside || !SW.$('.sw-lb-figure, figure', dlg).contains(e.target)) close();
  });
  if (prev) prev.addEventListener('click', function () { show(index - 1); });
  if (next) next.addEventListener('click', function () { show(index + 1); });
  if (closeBtn) closeBtn.addEventListener('click', close);

  groups.forEach(function (g) {
    itemsOf(g).forEach(function (a, i) {
      if (!a.hasAttribute('aria-haspopup')) a.setAttribute('aria-haspopup', 'dialog');
      a.addEventListener('click', function (e) {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        open(g, i, a);
      });
    });
  });
});
