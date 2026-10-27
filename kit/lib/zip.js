/* zip: "Do you serve my area?" checker against facts biz.zips.
   <form data-zip>
     <label for="zip-in">Your ZIP code</label> <input id="zip-in" name="zip" inputmode="numeric" autocomplete="postal-code">
     <button type="submit">Check</button>
     <p data-zip-result></p>          (aria-live; created when missing)
   </form>
   Text can be set with data-zip-yes / data-zip-no ({zip}, {phone}, {city} are replaced).
   A yes shows a button "Get a price for {zip}" that fills the lead form (SW.prefillForm({zip})).
   A no shows a call link. Anything but 5 digits: "Enter a 5-digit ZIP code." with aria-invalid. Never sends anything. */
SW.mod('zip', function (SW) {
  SW.$$('[data-zip]').forEach(function (box) {
    var input = SW.$('input', box);
    if (!input) return;
    var out = SW.$('[data-zip-result]', box);
    if (!out) { out = document.createElement('p'); out.setAttribute('data-zip-result', ''); box.appendChild(out); }
    out.setAttribute('aria-live', 'polite');
    out.setAttribute('role', 'status');
    out.id = out.id || (input.id || 'sw-zip') + '-result';
    input.setAttribute('aria-describedby', ((input.getAttribute('aria-describedby') || '') + ' ' + out.id).trim());
    var form = box.tagName === 'FORM' ? box : null;
    if (form) { form.setAttribute('novalidate', ''); form.setAttribute('method', 'dialog'); }

    function fill(tpl, zip) {
      return tpl.replace(/\{zip\}/g, zip).replace(/\{phone\}/g, SW.fact('biz.phone') || '').replace(/\{city\}/g, SW.fact('biz.city') || '');
    }
    function check() {
      var zip = (input.value || '').replace(/\D/g, '');
      input.value = zip;
      out.textContent = '';
      box.removeAttribute('data-zip-state');
      if (zip.length !== 5) {
        input.setAttribute('aria-invalid', 'true');
        out.textContent = 'Enter a 5-digit ZIP code.';
        box.setAttribute('data-zip-state', 'invalid');
        input.focus();
        return;
      }
      input.removeAttribute('aria-invalid');
      var zips = (SW.fact('biz.zips', 'zips') || []).map(String);
      var yes = zips.indexOf(zip) >= 0;
      box.setAttribute('data-zip-state', yes ? 'yes' : 'no');
      var msg = document.createElement('span');
      msg.className = 'sw-zip-msg';
      msg.textContent = fill(box.getAttribute(yes ? 'data-zip-yes' : 'data-zip-no') ||
        (yes ? 'Yes, we work in {zip}.' : 'We don’t usually cover {zip}. Call us and we’ll tell you straight.'), zip);
      out.appendChild(msg);
      out.appendChild(document.createTextNode(' '));
      if (yes) {
        var go = document.createElement('button');
        go.type = 'button';
        go.className = 'sw-zip-go';
        go.textContent = 'Get a price for ' + zip;
        go.addEventListener('click', function () { SW.prefillForm({ zip: zip }); });
        out.appendChild(go);
      } else {
        var phone = SW.fact('biz.phone'), e164 = SW.fact('biz.phoneE164');
        if (phone) {
          var a = document.createElement('a');
          a.className = 'sw-zip-call';
          a.href = 'tel:' + (e164 || phone.replace(/[^\d+]/g, ''));
          a.textContent = 'Call ' + phone;
          out.appendChild(a);
        }
      }
    }
    if (form) form.addEventListener('submit', function (e) { e.preventDefault(); check(); });
    else {
      var btn = SW.$('button', box);
      if (btn) { btn.type = 'button'; btn.addEventListener('click', check); }
      input.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check(); } });
    }
    input.addEventListener('input', function () { input.removeAttribute('aria-invalid'); });
  });
});
