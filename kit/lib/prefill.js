/* prefill: any link or button with data-service="Leak repair" (outside the lead form) fills the form's
   "service" field, scrolls to #contact and focuses that field. The [[quote]] macro writes these links
   (href="#contact" so they still work without JS). The value can be a service name or its short name. */
SW.mod('prefill', function (SW) {
  // capture phase: runs before the smooth-scroll anchor handler
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var t = e.target.closest ? e.target.closest('[data-service]') : null;
    if (!t || t.closest('form[data-lead]')) return;
    var form = SW.$('form[data-lead]');
    if (!form) return; // plain anchor behaviour
    e.preventDefault();
    var want = (t.getAttribute('data-service') || '').trim().toLowerCase();
    var services = SW.fact('services') || [];
    var hit = services.find(function (s) {
      return String(s.name || '').toLowerCase() === want || String(s.short || '').toLowerCase() === want;
    });
    var name = hit ? hit.name : t.getAttribute('data-service');
    SW.prefillForm(name ? { service: name } : {}, { focus: 'service' });
    if (t.getAttribute('href') && t.getAttribute('href').charAt(0) === '#') {
      try { history.pushState(null, '', t.getAttribute('href')); } catch (err) { /* file:// */ }
    }
  }, true);
});
