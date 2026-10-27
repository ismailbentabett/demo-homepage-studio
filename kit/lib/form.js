/* form: the 4-step lead form. It NEVER sends anything (no fetch, XHR or beacon); it shows the thank-you.
   <form data-lead method="dialog" novalidate data-thanks="Thanks, {name}. ...">
     <fieldset data-step><legend>Service</legend> ...radios name="service" required... </fieldset>
     <fieldset data-step><legend>Job details</legend> ... name="zip", name="details" ... </fieldset>
     <fieldset data-step><legend>When</legend> ... name="when" ... </fieldset>
     <fieldset data-step><legend>Contact</legend> name="name" required, name="phone" type="tel" required, name="email" type="email" </fieldset>
     <div class="hp" aria-hidden="true"><label>Website <input name="website2" tabindex="-1" autocomplete="off"></label></div>
     <input type="hidden" name="t">
     <button type="submit">Send my request</button>
   </form>
   Optional hooks: [data-form-progress] (role=progressbar, created when missing), [data-form-nav] holding
   [data-back] / [data-next] / [data-submit] buttons (created when missing; an existing submit button is reused),
   [data-form-status] (live region, created when missing), [data-thanks-box] (shown after sending, {name} replaced).
   Sets --step (1-based), --steps, --progress (0..1) and data-step-current on the form.
   Validation per step: required fields, one choice per required radio group, email shape, phone 10+ digits.
   Errors: p.field-error linked by aria-describedby, aria-invalid on the field, focus on the first problem.
   Spam: a filled website2 shows the thank-you and does nothing; sending in under 3 s (hidden t) asks to try again.
   Without JS every step shows at once (method="dialog" keeps a no-JS submit from going anywhere). */
SW.mod('form', function (SW) {
  SW.$$('form[data-lead]').forEach(function (form, formIndex) {
    var steps = SW.$$('[data-step]', form);
    if (!steps.length) steps = [form];
    var total = steps.length;
    var cur = 0;
    var uid = form.id || 'sw-lead-' + formIndex;
    form.setAttribute('method', 'dialog');
    form.setAttribute('novalidate', '');
    form.removeAttribute('action');

    // time trap
    var tField = SW.$('input[name="t"]', form);
    if (!tField) { tField = document.createElement('input'); tField.type = 'hidden'; tField.name = 't'; form.appendChild(tField); }
    var bornAt = Date.now();
    tField.value = String(bornAt);

    function make(tag, attr, text) {
      var el = document.createElement(tag);
      Object.keys(attr || {}).forEach(function (k) { el.setAttribute(k, attr[k]); });
      if (text) el.textContent = text;
      return el;
    }
    function titleOf(i) {
      var s = steps[i];
      if (s === form) return '';
      var l = s.getAttribute('data-step-title') || (s.querySelector('legend') ? s.querySelector('legend').textContent : '') || s.getAttribute('data-step');
      return (l || '').trim();
    }

    // progress
    var progress = SW.$('[data-form-progress]', form);
    if (!progress && total > 1) { progress = make('div', { 'data-form-progress': '' }); form.insertBefore(progress, form.firstChild); }
    if (progress) {
      progress.setAttribute('role', 'progressbar');
      progress.setAttribute('aria-valuemin', '1');
      progress.setAttribute('aria-valuemax', String(total));
      if (!progress.hasAttribute('aria-label')) progress.setAttribute('aria-label', 'Form progress');
    }

    // buttons
    var submitBtn = SW.$('[data-submit]', form) || SW.$('button[type="submit"], input[type="submit"]', form);
    var nav = SW.$('[data-form-nav]', form);
    if (!nav) {
      nav = make('div', { 'data-form-nav': '' });
      if (submitBtn && submitBtn.parentElement !== form) submitBtn.parentElement.appendChild(nav); else form.appendChild(nav);
    }
    if (!submitBtn) submitBtn = make('button', { type: 'submit' }, form.getAttribute('data-submit-label') || 'Send my request');
    submitBtn.setAttribute('data-submit', '');
    var backBtn = SW.$('[data-back]', form) || make('button', { type: 'button', 'data-back': '' }, 'Back');
    var nextBtn = SW.$('[data-next]', form) || make('button', { type: 'button', 'data-next': '' }, 'Next');
    backBtn.type = 'button';
    nextBtn.type = 'button';
    if (!nav.contains(backBtn)) nav.appendChild(backBtn);
    if (!nav.contains(nextBtn)) nav.appendChild(nextBtn);
    if (!nav.contains(submitBtn)) nav.appendChild(submitBtn);

    // status
    var status = SW.$('[data-form-status]', form);
    if (!status) { status = make('p', { 'data-form-status': '' }); nav.parentElement.insertBefore(status, nav.nextSibling); }
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');

    function say(msg) { status.textContent = ''; setTimeout(function () { status.textContent = msg; }, 30); }

    function show(i, focus) {
      cur = Math.max(0, Math.min(total - 1, i));
      steps.forEach(function (s, j) {
        if (s === form) return;
        s.hidden = j !== cur;
        s.classList.toggle('is-current', j === cur);
      });
      var last = cur === total - 1;
      backBtn.hidden = cur === 0;
      nextBtn.hidden = last;
      submitBtn.hidden = !last;
      form.style.setProperty('--step', cur + 1);
      form.style.setProperty('--steps', total);
      form.style.setProperty('--progress', ((cur + 1) / total).toFixed(3));
      form.setAttribute('data-step-current', String(cur + 1));
      if (progress) {
        progress.setAttribute('aria-valuenow', String(cur + 1));
        progress.setAttribute('aria-valuetext', 'Step ' + (cur + 1) + ' of ' + total + (titleOf(cur) ? ': ' + titleOf(cur) : ''));
      }
      if (focus) {
        var f = SW.focusables(steps[cur])[0];
        SW.focusEl(f || steps[cur]);
        if (total > 1) say('Step ' + (cur + 1) + ' of ' + total + (titleOf(cur) ? ': ' + titleOf(cur) : ''));
      }
    }

    // ---- validation ----
    function labelFor(f) {
      var l = (f.id && SW.$('label[for="' + f.id + '"]', form)) || f.closest('label');
      var txt = f.getAttribute('data-label') || (l ? l.textContent : '') || f.getAttribute('aria-label') || f.name || 'this field';
      return txt.replace(/\*/g, '').replace(/\s+/g, ' ').trim();
    }
    function errorHost(f) {
      if (f.type === 'radio' || f.type === 'checkbox') return f.closest('fieldset, [role="radiogroup"], [data-group]') || f.parentElement;
      return f.closest('label') && f.closest('label').contains(f) ? f.closest('label') : f;
    }
    function clearError(f) {
      var group = f.type === 'radio' ? SW.$$('input[name="' + f.name + '"]', form) : [f];
      group.forEach(function (g) {
        g.removeAttribute('aria-invalid');
        var id = uid + '-err-' + (g.name || g.id);
        var d = (g.getAttribute('aria-describedby') || '').split(' ').filter(function (x) { return x && x !== id; }).join(' ');
        if (d) g.setAttribute('aria-describedby', d); else g.removeAttribute('aria-describedby');
      });
      var old = document.getElementById(uid + '-err-' + (f.name || f.id));
      if (old) old.remove();
    }
    function setError(f, msg) {
      clearError(f);
      var id = uid + '-err-' + (f.name || f.id);
      var p = make('p', { 'class': 'field-error', id: id }, msg);
      var host = errorHost(f);
      if (host === f) f.insertAdjacentElement('afterend', p); else host.appendChild(p);
      var group = f.type === 'radio' ? SW.$$('input[name="' + f.name + '"]', form) : [f];
      group.forEach(function (g) {
        g.setAttribute('aria-invalid', 'true');
        g.setAttribute('aria-describedby', ((g.getAttribute('aria-describedby') || '') + ' ' + id).trim());
      });
    }
    function problem(f) {
      var v = (f.value || '').trim();
      if (f.type === 'radio' || f.type === 'checkbox') {
        if (!f.required) return '';
        var any = SW.$$('input[name="' + f.name + '"]', form).some(function (g) { return g.checked; });
        return any ? '' : (f.getAttribute('data-error') || 'Please pick one.');
      }
      if (f.required && !v) return f.getAttribute('data-error') || 'Please add your ' + labelFor(f).toLowerCase() + '.';
      if (!v) return '';
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter an email like name@example.com.';
      if ((f.type === 'tel' || f.name === 'phone') && v.replace(/\D/g, '').length < 10) return 'Enter a 10-digit phone number.';
      if (f.name === 'zip' && !/^\d{5}$/.test(v.replace(/\s/g, ''))) return 'Enter a 5-digit ZIP code.';
      if (f.pattern && !new RegExp('^(?:' + f.pattern + ')$').test(v)) return f.getAttribute('data-error') || 'Please check ' + labelFor(f).toLowerCase() + '.';
      return '';
    }
    function fieldsOf(step) {
      return SW.$$('input, select, textarea', step).filter(function (f) {
        return f.type !== 'hidden' && f.name !== 'website2' && !f.disabled && !f.closest('[aria-hidden="true"]');
      });
    }
    function validate(step) {
      var seen = {}, first = null;
      fieldsOf(step).forEach(function (f) {
        if (f.type === 'radio') { if (seen[f.name]) return; seen[f.name] = true; }
        var msg = problem(f);
        if (msg) { setError(f, msg); if (!first) first = f; } else clearError(f);
      });
      if (first) {
        var pick = first.type === 'radio' ? (SW.$('input[name="' + first.name + '"]', form) || first) : first;
        SW.focusEl(pick);
        say('Please fix the highlighted field.');
        return false;
      }
      return true;
    }
    form.addEventListener('input', function (e) { if (e.target.getAttribute && e.target.getAttribute('aria-invalid') && !problem(e.target)) clearError(e.target); });
    form.addEventListener('change', function (e) { if (e.target.getAttribute && e.target.getAttribute('aria-invalid') && !problem(e.target)) clearError(e.target); });

    // ---- navigation ----
    nextBtn.addEventListener('click', function () { if (validate(steps[cur])) show(cur + 1, true); });
    backBtn.addEventListener('click', function () { show(cur - 1, true); });
    form.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' || cur === total - 1) return;
      var t = e.target;
      if (!t || t.tagName === 'TEXTAREA' || t.tagName === 'BUTTON' || t.tagName === 'A') return;
      e.preventDefault();
      nextBtn.click();
    });
    form.addEventListener('sw:prefill', function () { show(0, false); });

    // ---- send (never leaves the page) ----
    function thanks() {
      var nameField = SW.$('[name="name"]', form);
      var first = nameField && nameField.value.trim() ? nameField.value.trim().split(/\s+/)[0] : 'there';
      var box = SW.$('[data-thanks-box]', form.parentElement) || null;
      if (!box) {
        box = make('div', { 'data-thanks-box': '', 'class': 'sw-thanks' });
        var p = make('p', {}, (form.getAttribute('data-thanks') ||
          'Thanks, {name}. In your version this goes straight to your phone and inbox.'));
        box.appendChild(p);
        form.insertAdjacentElement('afterend', box);
      }
      var walker = document.createTreeWalker(box, NodeFilter.SHOW_TEXT);
      var node;
      while ((node = walker.nextNode())) {
        if (!node._swTpl) node._swTpl = node.nodeValue;
        node.nodeValue = node._swTpl.replace(/\{name\}/g, first);
      }
      box.setAttribute('role', 'status');
      box.hidden = false;
      form.hidden = true;
      form.classList.add('is-sent');
      SW.focusEl(box);
      form.dispatchEvent(new CustomEvent('sw:lead', { bubbles: true, detail: { demo: true } }));
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (cur < total - 1) { nextBtn.click(); return; }
      var hp = SW.$('[name="website2"]', form);
      if (hp && hp.value) { thanks(); return; }
      for (var i = 0; i < total; i++) { if (!validate(steps[i])) { show(i, false); validate(steps[i]); return; } }
      if (Date.now() - bornAt < 3000) { say('That was fast. Please check your details and press send again.'); bornAt = 0; return; }
      thanks();
    });

    form.setAttribute('data-form-ready', '');
    show(0, false);
  });
});
