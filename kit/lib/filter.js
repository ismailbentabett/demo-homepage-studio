/* filter: filter a grid of work by tag.
   <div data-filter>
     <div data-filter-buttons aria-label="Filter projects">
       <button data-filter-btn="all">All</button> <button data-filter-btn="repair">Repairs</button> ...
     </div>
     <p data-filter-status></p>                      (aria-live "Showing 4 of 9"; created when missing)
     <ul> <li data-tags="repair storm">...</li> ... </ul>
   </div>
   The pressed button has aria-pressed="true" and .is-active; hidden items get hidden. Items slide into place (FLIP with WAAPI,
   none under reduced motion). Without JS base.css hides [data-filter-buttons] and every item shows. */
SW.mod('filter', function (SW) {
  SW.$$('[data-filter]').forEach(function (box) {
    var btns = SW.$$('[data-filter-btn]', box);
    var items = SW.$$('[data-tags]', box);
    if (!btns.length || !items.length) return;
    var bar = SW.$('[data-filter-buttons]', box);
    if (bar && !bar.hasAttribute('role')) bar.setAttribute('role', 'group');
    var status = SW.$('[data-filter-status]', box);
    if (!status) {
      status = document.createElement('p');
      status.setAttribute('data-filter-status', '');
      status.className = 'sr-only';
      (bar || btns[0].parentElement).insertAdjacentElement('afterend', status);
    }
    status.setAttribute('aria-live', 'polite');
    status.setAttribute('role', 'status');

    function apply(tag, announce) {
      var before = new Map();
      if (!SW.reduced) items.forEach(function (it) { if (!it.hidden) before.set(it, it.getBoundingClientRect()); });
      var shown = 0;
      items.forEach(function (it) {
        var tags = (it.getAttribute('data-tags') || '').toLowerCase().split(/[\s,]+/);
        var on = tag === 'all' || tags.indexOf(tag) >= 0;
        it.hidden = !on;
        if (on) shown++;
      });
      btns.forEach(function (b) {
        var on = (b.getAttribute('data-filter-btn') || 'all').toLowerCase() === tag;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        b.classList.toggle('is-active', on);
      });
      box.setAttribute('data-filter-current', tag);
      if (announce) status.textContent = 'Showing ' + shown + ' of ' + items.length;
      if (SW.reduced) return;
      items.forEach(function (it) {
        if (it.hidden || !it.animate) return;
        var a = before.get(it), b = it.getBoundingClientRect();
        if (a) {
          var dx = a.left - b.left, dy = a.top - b.top;
          if (dx || dy) it.animate({ transform: ['translate(' + dx + 'px,' + dy + 'px)', 'none'] }, { duration: 420, easing: 'cubic-bezier(.23,1,.32,1)' });
        } else {
          it.animate({ opacity: [0, 1], transform: ['scale(.96)', 'none'] }, { duration: 320, easing: 'cubic-bezier(.23,1,.32,1)' });
        }
      });
    }
    btns.forEach(function (b) {
      if (b.tagName === 'BUTTON') b.type = 'button';
      b.addEventListener('click', function () { apply((b.getAttribute('data-filter-btn') || 'all').toLowerCase(), true); });
    });
    var start = SW.$('[data-filter-btn][aria-pressed="true"]', box) || btns[0];
    apply((start.getAttribute('data-filter-btn') || 'all').toLowerCase(), false);
  });
});
