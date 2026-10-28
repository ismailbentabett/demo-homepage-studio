/* Site Chat widget: behaviour.
   Vanilla JS, no dependencies, no network requests. A scripted assistant that answers from the
   site's facts (hours, areas, ZIPs, prices, services, proof) and runs a demo quote request.
   Usage: SiteChat.mount(config)   (config is generated per site by tools/build.mjs) */
(function () {
  'use strict';
  if (window.SiteChat) return;

  var DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var DAY_NAMES = { sun: 'Sunday', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday' };
  var ORDER = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  var ICONS = {
    chat: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H10l-4.5 4v-4h0A1.5 1.5 0 0 1 4 14.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8.5h8M8 11.5h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
    close: '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    image: '<rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="10" r="1.6" fill="currentColor"/><path d="M4 17l5-4.5 3.5 3 3-2.5L20 17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    x: '<path d="M7 7l10 10M17 7L7 17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    send: '<path d="M4 12l16-8-6 16-2.5-6.5z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/>',
    phone: '<path d="M6.6 3.5l2.6.5 1.3 4-2 1.6a12 12 0 0 0 5.9 5.9l1.6-2 4 1.3.5 2.6a2 2 0 0 1-2 2.1A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2.1-2z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    sms: '<path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7a2.5 2.5 0 0 1-2.5 2.5H9l-4 3.5V16A2 2 0 0 1 4 14z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="9" cy="10.3" r="1.1" fill="currentColor"/><circle cx="12" cy="10.3" r="1.1" fill="currentColor"/><circle cx="15" cy="10.3" r="1.1" fill="currentColor"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>',
    arrow: '<path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  function icon(name) { return '<svg class="swc-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONS[name] + '</svg>'; }

  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function norm(s) { return String(s || '').toLowerCase().replace(/[’']/g, "'").replace(/[^a-z0-9$&' ]+/g, ' ').replace(/\s+/g, ' ').trim(); }
  function words(s) { return norm(s).split(' ').filter(function (w) { return w.length > 2 && STOP.indexOf(w) < 0; }); }
  var STOP = ['the', 'and', 'for', 'you', 'your', 'how', 'much', 'does', 'cost', 'what', 'can', 'get', 'need', 'with', 'are', 'any', 'have', 'price', 'prices', 'pricing', 'quote', 'about', 'want', 'like', 'would', 'could', 'this', 'that', 'there', 'my', 'our', 'roughly', 'typical', 'usually', 'charge', 'rate', 'rates', 'per', 'new'];
  function stem(w) { return w.replace(/(ies)$/, 'y').replace(/(ing|ers|er|es|s)$/, ''); }
  function store() { try { return window.sessionStorage; } catch (e) { return null; } }
  function reduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
  function fmtTime(hm) { var p = hm.split(':'), h = +p[0], m = p[1]; var ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12; return h + (m === '00' ? '' : ':' + m) + ' ' + ap; }
  function list(a) { if (a.length < 2) return a.join(''); return a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }

  /* ---------- Hours (in the business's own time zone) ---------- */
  function nowIn(tz) {
    try {
      var parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
      var o = {}; parts.forEach(function (p) { o[p.type] = p.value; });
      return { day: o.weekday.slice(0, 3).toLowerCase(), mins: (+o.hour % 24) * 60 + +o.minute };
    } catch (e) { var d = new Date(); return { day: DAYS[d.getDay()], mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  function toMins(hm) { var p = hm.split(':'); return +p[0] * 60 + +p[1]; }
  function openState(biz) {
    var n = nowIn(biz.timezone), h = biz.hours || {}, today = h[n.day];
    if (today && n.mins >= toMins(today[0]) && n.mins < toMins(today[1])) return { open: true, day: n.day, until: today[1] };
    var start = DAYS.indexOf(n.day);
    for (var i = 0; i < 8; i++) {
      var d = DAYS[(start + i) % 7], s = h[d];
      if (!s) continue;
      if (i === 0 && n.mins >= toMins(s[0])) continue;
      return { open: false, day: n.day, next: { day: d, at: s[0], rel: i === 0 ? 'today' : i === 1 ? 'tomorrow' : DAY_NAMES[d] } };
    }
    return { open: false, day: n.day };
  }

  /* ---------- Widget ---------- */
  function Chat(cfg) {
    this.c = cfg; this.b = cfg.biz;
    this.key = 'swc:' + cfg.id;
    this.state = { msgs: [], flow: null, open: false, teased: false };
    var s = store(); if (s) { try { var saved = JSON.parse(s.getItem(this.key) || 'null'); if (saved && saved.v === 2) this.state = saved; } catch (e) {} }
    this.state.v = 2;
    this.build();
    this.restore();
  }

  Chat.prototype.save = function () { var s = store(); if (s) try { s.setItem(this.key, JSON.stringify(this.state)); } catch (e) {} };

  Chat.prototype.build = function () {
    var c = this.c, b = this.b, t = c.theme || {}, self = this;
    var root = this.root = el('div', 'swc');
    root.setAttribute('data-site', c.id);
    root.setAttribute('data-tone', t.tone || 'light-led');
    root.setAttribute('data-motif', t.motif || 'ruler');
    root.setAttribute('data-shape', t.shape || 'soft');
    root.setAttribute('data-side', c.side || 'right');
    root.setAttribute('data-open', 'false');
    if (t.dial) root.style.setProperty('--swc-dial', t.dial);

    var uid = 'swc-' + c.id.replace(/[^a-z0-9-]/gi, '');

    // Teaser
    var teaser = this.teaser = el('div', 'swc-teaser'); teaser.hidden = true;
    var tOpen = el('button', 'swc-teaser__open', c.copy.teaser); tOpen.type = 'button';
    var tX = el('button', 'swc-teaser__x'); tX.type = 'button'; tX.setAttribute('aria-label', 'Dismiss'); tX.innerHTML = icon('close');
    teaser.appendChild(tOpen); teaser.appendChild(tX);
    tOpen.addEventListener('click', function () { self.open(); });
    tX.addEventListener('click', function () { teaser.hidden = true; self.state.teased = true; self.save(); self.launch.focus(); });

    // Launcher
    var launch = this.launch = el('button', 'swc-launch'); launch.type = 'button';
    launch.setAttribute('aria-controls', uid + '-panel'); launch.setAttribute('aria-expanded', 'false');
    launch.innerHTML = icon('chat');
    launch.appendChild(el('span', 'swc-launch__label', c.copy.launcher));
    var dot = this.dot = el('span', 'swc-launch__dot'); dot.hidden = true; dot.setAttribute('aria-hidden', 'true');
    launch.appendChild(dot);
    launch.addEventListener('click', function () { self.open(); });

    // Panel
    var panel = this.panel = el('section', 'swc-panel'); panel.id = uid + '-panel'; panel.hidden = true;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-modal', 'false'); panel.setAttribute('aria-labelledby', uid + '-title');

    var head = el('header', 'swc-head');
    var mono = el('span', 'swc-mono'); mono.setAttribute('aria-hidden', 'true'); mono.appendChild(el('span', 'swc-mono__t', b.initials));
    var ht = el('div', 'swc-head__text');
    var title = el('h2', 'swc-title', b.short); title.id = uid + '-title';
    var status = this.statusEl = el('p', 'swc-status');
    ht.appendChild(title); ht.appendChild(status);
    var close = el('button', 'swc-close'); close.type = 'button'; close.setAttribute('aria-label', 'Close chat'); close.innerHTML = icon('close');
    close.addEventListener('click', function () { self.close(); });
    head.appendChild(mono); head.appendChild(ht); head.appendChild(close);

    var motif = el('div', 'swc-motif'); motif.setAttribute('aria-hidden', 'true');
    var log = this.log = el('div', 'swc-log'); log.setAttribute('role', 'log'); log.setAttribute('aria-live', 'polite'); log.setAttribute('aria-label', 'Conversation'); log.tabIndex = 0;
    var chips = this.chips = el('div', 'swc-chips'); chips.setAttribute('role', 'group'); chips.setAttribute('aria-label', 'Suggested replies');

    var form = el('form', 'swc-compose'); form.setAttribute('novalidate', '');
    var lab = el('label', 'swc-sr', 'Type a message'); lab.htmlFor = uid + '-input';
    var input = this.input = el('textarea', 'swc-input'); input.id = uid + '-input'; input.rows = 1; input.placeholder = c.copy.placeholder; input.setAttribute('autocomplete', 'off'); input.maxLength = 600;
    var send = this.sendBtn = el('button', 'swc-send'); send.type = 'submit'; send.setAttribute('aria-label', 'Send'); send.innerHTML = icon('send'); send.disabled = true;
    // Add-image control: UI only, the picked photo is previewed but never uploaded.
    var tray = el('div', 'swc-tray'); tray.hidden = true;
    var file = el('input', 'swc-sr'); file.type = 'file'; file.accept = 'image/*'; file.tabIndex = -1; file.setAttribute('aria-hidden', 'true');
    var attach = el('button', 'swc-attach'); attach.type = 'button'; attach.setAttribute('aria-label', 'Add a photo'); attach.title = 'Add a photo'; attach.innerHTML = icon('image');
    attach.addEventListener('click', function () { file.click(); });
    function clearTray() { tray.innerHTML = ''; tray.hidden = true; file.value = ''; }
    file.addEventListener('change', function () {
      var f = file.files && file.files[0]; if (!f || !/^image\//.test(f.type)) return clearTray();
      tray.innerHTML = '';
      var th = el('div', 'swc-thumb'); var img = el('img'); img.alt = f.name; img.src = URL.createObjectURL(f);
      var rm = el('button', 'swc-thumb__x'); rm.type = 'button'; rm.setAttribute('aria-label', 'Remove photo'); rm.innerHTML = icon('x');
      rm.addEventListener('click', function () { URL.revokeObjectURL(img.src); clearTray(); attach.focus(); });
      th.appendChild(img); th.appendChild(rm); tray.appendChild(th); tray.appendChild(el('span', 'swc-tray__name', f.name)); tray.hidden = false;
    });
    form.appendChild(tray); form.appendChild(file); form.appendChild(attach);
    form.appendChild(lab); form.appendChild(input); form.appendChild(send);
    input.addEventListener('input', function () { send.disabled = !input.value.trim(); input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit', { cancelable: true })); } });
    form.addEventListener('submit', function (e) { e.preventDefault(); var v = input.value.trim(); if (!v) return; input.value = ''; input.style.height = ''; send.disabled = true; clearTray(); self.user(v); });

    var foot = el('footer', 'swc-foot');
    foot.appendChild(this.footLink('tel:' + b.phoneE164, 'phone', 'Call'));
    if (b.sms) foot.appendChild(this.footLink('sms:' + b.phoneE164, 'sms', 'Text'));
    foot.appendChild(this.footLink('mailto:' + b.email, 'mail', 'Email'));
    foot.appendChild(el('p', 'swc-foot__note', c.copy.footnote));

    panel.appendChild(head); panel.appendChild(motif); panel.appendChild(log); panel.appendChild(chips); panel.appendChild(form); panel.appendChild(foot);
    panel.addEventListener('keydown', function (e) { if (e.key === 'Escape') { e.stopPropagation(); self.close(); } });

    root.appendChild(teaser); root.appendChild(panel); root.appendChild(launch);
    document.body.appendChild(root);

    this.renderStatus();
    setInterval(function () { self.renderStatus(); }, 60000);

    // Lift above fixed bottom bars (sticky "Call now" bars on phones)
    var lift = function () { self.lift(); };
    window.addEventListener('resize', lift, { passive: true });
    window.addEventListener('scroll', throttle(lift, 300), { passive: true });
    setTimeout(lift, 400); setTimeout(lift, 2000);

    if (!this.state.teased && !this.state.open && c.teaserDelay !== false) {
      setTimeout(function () { if (!self.state.open && !self.state.teased) { teaser.hidden = false; dot.hidden = false; self.state.teased = true; self.save(); } }, c.teaserDelay || 7000);
    }
  };

  function throttle(fn, ms) { var t = 0; return function () { var n = Date.now(); if (n - t > ms) { t = n; fn(); } }; }

  Chat.prototype.lift = function () {
    var h = 0, vh = window.innerHeight, root = this.root;
    var all = document.body.querySelectorAll('body > *, body > * > *, body > * > * > *');
    for (var i = 0; i < all.length && i < 1500; i++) {
      var n = all[i]; if (n === root || root.contains(n)) continue;
      var cs = getComputedStyle(n); if (cs.position !== 'fixed' && cs.position !== 'sticky') continue;
      if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) continue;
      var r = n.getBoundingClientRect();
      if (r.height < 20 || r.height > 220 || r.width < window.innerWidth * 0.5) continue;
      if (r.bottom >= vh - 4 && r.top < vh && r.top > vh * 0.5) h = Math.max(h, vh - r.top);
    }
    root.style.setProperty('--swc-lift', Math.round(h) + 'px');
  };

  Chat.prototype.footLink = function (href, ic, label) { var a = el('a', 'swc-foot__link'); a.href = href; a.innerHTML = icon(ic); a.appendChild(document.createTextNode(label)); return a; };

  Chat.prototype.renderStatus = function () {
    var s = openState(this.b), st = this.statusEl;
    st.textContent = '';
    st.setAttribute('data-open', s.open ? 'true' : 'false');
    var d = el('span', 'swc-status__dot'); d.setAttribute('aria-hidden', 'true'); st.appendChild(d);
    var txt = s.open ? 'Open now · until ' + fmtTime(s.until) : s.next ? 'Closed · opens ' + s.next.rel + ' ' + fmtTime(s.next.at) : 'Closed';
    st.appendChild(el('span', null, txt));
  };

  Chat.prototype.open = function () {
    if (this.state.open && !this.panel.hidden) return;
    this.state.open = true; this.save();
    this.teaser.hidden = true; this.dot.hidden = true;
    this.root.setAttribute('data-open', 'true'); this.launch.setAttribute('aria-expanded', 'true');
    this.panel.hidden = false;
    if (window.matchMedia && window.matchMedia('(max-width: 560px)').matches) document.documentElement.classList.add('swc-lock');
    if (!this.state.msgs.length) this.greet(); else this.scroll();
    var input = this.input; setTimeout(function () { try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); } }, 60);
  };

  Chat.prototype.close = function () {
    this.state.open = false; this.save();
    this.root.setAttribute('data-open', 'false'); this.launch.setAttribute('aria-expanded', 'false');
    this.panel.hidden = true; document.documentElement.classList.remove('swc-lock');
    this.launch.focus();
  };

  /* ---------- Rendering ---------- */
  Chat.prototype.restore = function () {
    var self = this, last = null;
    this.state.msgs.forEach(function (m) { self.draw(m, false); last = m; });
    if (last && last.chips) this.setChips(last.chips);
    if (this.state.open) { this.state.open = false; this.open(); }
  };

  Chat.prototype.scroll = function () { var l = this.log; requestAnimationFrame(function () { l.scrollTop = l.scrollHeight; }); };

  Chat.prototype.draw = function (m) {
    if (m.who === 'day') { this.log.appendChild(el('p', 'swc-day', m.text)); return; }
    var wrap = el('div', 'swc-msg swc-msg--' + m.who);
    if (m.text) {
      var bub = el('div', 'swc-bubble');
      if (m.who === 'me') { bub.appendChild(el('span', 'swc-sr', 'You: ')); bub.appendChild(document.createTextNode(m.text)); }
      else { bub.appendChild(el('span', 'swc-sr', this.b.short + ': ')); this.rich(bub, m.text); }
      wrap.appendChild(bub);
    }
    if (m.card) wrap.appendChild(this.card(m.card));
    if (m.actions && m.actions.length) {
      var acts = el('div', 'swc-actions');
      m.actions.forEach(function (a) {
        var n = el('a', 'swc-act' + (a.ghost ? ' swc-act--ghost' : '')); n.href = a.href;
        if (a.icon) n.innerHTML = icon(a.icon);
        n.appendChild(document.createTextNode(a.label));
        acts.appendChild(n);
      });
      wrap.appendChild(acts);
    }
    if (m.meta) wrap.appendChild(el('span', 'swc-meta', m.meta));
    this.log.appendChild(wrap);
    this.scroll();
  };

  // **bold** only; everything else is plain text (no HTML from config or user ever reaches innerHTML).
  Chat.prototype.rich = function (node, text) {
    String(text).split(/(\*\*[^*]+\*\*)/).forEach(function (part) {
      if (/^\*\*[^*]+\*\*$/.test(part)) node.appendChild(el('strong', null, part.slice(2, -2)));
      else if (part) node.appendChild(document.createTextNode(part));
    });
  };

  Chat.prototype.card = function (c) {
    var box = el('div', 'swc-card'), h = el('div', 'swc-card__head');
    h.appendChild(el('span', null, c.title)); if (c.tag) h.appendChild(el('span', 'swc-tag', c.tag));
    box.appendChild(h);
    var ul = el('ul', 'swc-rows');
    c.rows.forEach(function (r) {
      var li = el('li', 'swc-row'); if (r.today) li.setAttribute('data-today', 'true');
      var k = el('span', 'swc-row__k', r.k); if (r.note) k.appendChild(el('small', null, r.note));
      li.appendChild(k); li.appendChild(el('span', 'swc-row__v', r.v)); ul.appendChild(li);
    });
    box.appendChild(ul);
    if (c.foot) box.appendChild(el('div', 'swc-card__foot', c.foot));
    return box;
  };

  Chat.prototype.setChips = function (chips) {
    var self = this; this.chips.textContent = '';
    (chips || []).forEach(function (label) {
      var b = el('button', 'swc-chip', label); b.type = 'button';
      b.addEventListener('click', function () { self.user(label); });
      self.chips.appendChild(b);
    });
  };

  Chat.prototype.push = function (m) {
    var keep = Object.assign({}, m); delete keep.delay;
    this.state.msgs.push(keep);
    if (this.state.msgs.length > 120) this.state.msgs = this.state.msgs.slice(-120);
    this.save(); this.draw(keep);
  };

  // Bot replies arrive one by one with a short typing pause.
  Chat.prototype.say = function (msgs, chips) {
    var self = this, q = msgs.slice();
    this.flush();
    this.setChips([]);
    this.busy = true;
    var job = this.job = { q: q, chips: chips, timer: null, typing: null };
    var next = function () {
      var m = q.shift(); if (!m) { self.busy = false; self.job = null; self.setChips(chips || []); return; }
      var len = (m.text || '').length + (m.card ? 60 : 0);
      var wait = reduced() ? 120 : Math.min(450 + len * 9, 1500);
      var typing = el('div', 'swc-typing'); typing.setAttribute('aria-hidden', 'true'); typing.innerHTML = '<i></i><i></i><i></i>';
      self.log.appendChild(typing); self.scroll(); job.typing = typing; job.cur = m;
      job.timer = setTimeout(function () { typing.remove(); job.typing = null; job.cur = null; self.push(m); next(); }, wait);
    };
    next();
  };

  /* A new message while replies are still "typing": show the rest at once so order is kept. */
  Chat.prototype.flush = function () {
    var j = this.job; if (!j) return;
    clearTimeout(j.timer); if (j.typing) j.typing.remove();
    if (j.cur) this.push(j.cur);
    while (j.q.length) this.push(j.q.shift());
    this.job = null; this.busy = false;
  };

  Chat.prototype.user = function (text) {
    this.flush();
    this.push({ who: 'me', text: text });
    var out = this.state.flow ? this.flowStep(text) : this.answer(text);
    if (out) this.say(out.msgs, out.chips);
  };

  /* ---------- Copy helpers ---------- */
  Chat.prototype.callAct = function (ghost) { return { href: 'tel:' + this.b.phoneE164, label: 'Call ' + this.b.phone, icon: 'phone', ghost: !!ghost }; };
  Chat.prototype.smsAct = function () { return this.b.sms ? { href: 'sms:' + this.b.phoneE164, label: 'Text us', icon: 'sms', ghost: true } : null; };
  Chat.prototype.formAct = function () { return this.c.anchors.contact ? { href: '#' + this.c.anchors.contact, label: this.c.copy.formLink, icon: 'arrow', ghost: true } : null; };
  function compact(a) { return a.filter(Boolean); }
  Chat.prototype.mainChips = function () { return this.c.copy.chips.slice(); };

  Chat.prototype.greet = function () {
    var c = this.c, s = openState(this.b);
    this.push({ who: 'day', text: 'Sample assistant · ' + (s.open ? 'open now' : 'after hours') });
    this.say([{ who: 'bot', text: c.copy.greeting }, { who: 'bot', text: c.copy.greeting2 }], this.mainChips());
  };

  /* ---------- Understanding ---------- */
  var RX = {
    cancel: /\b(cancel|stop|never ?mind|start over|restart|exit|quit)\b/,
    greet: /^(hi|hello|hey|hiya|howdy|yo|good (morning|afternoon|evening))\b/,
    thanks: /\b(thanks|thank you|thx|ty|cheers|appreciate)\b/,
    bye: /\b(bye|goodbye|see ya|that'?s all|that is all)\b/,
    urgent: /\b(emergency|urgent|asap|right now|immediately|tonight|flood\w*|burst|gushing|sparking|smoke|no heat|no ac|no air|no hot water|dangerous|leaking now|stuck open|stuck shut)\b/,
    quote: /\b(quote|estimate|book|booking|schedule|appointment|come out|send someone|someone out|visit|get a number|price it|price my|hire|start a job|request)\b/,
    price: /(\$|\bprice|\bpricing|\bcost|\bhow much|\bcharge|\brates?\b|\bexpensive|\bcheap|\bballpark|\bbudget|\bfee)/,
    hours: /\b(hours?|open|opening|close|closed|closing|today|tomorrow|weekend|saturday|sunday|monday|tuesday|wednesday|thursday|friday|when are you|what time)\b/,
    area: /\b(area|areas|serve|service area|cover|travel|come to|near|nearby|towns?|city|zip|zips|zipcode|postcode|location|located|where are you|do you go)\b/,
    services: /\b(services|what do you do|what do you offer|offer|do you do|do you fix|do you install|do you repair|kinds of work|menu|list)\b/,
    trust: /\b(licen[cs]e\w*|insur\w*|bonded|guarantee\w*|warrant\w*|reviews?|ratings?|stars|years|experience|trust|legit|reputable)\b/,
    contact: /\b(phone|call|number|email|e-mail|text|sms|talk to|speak to|human|real person|someone real|agent|representative)\b/,
    owner: /\b(owner|who runs|who owns|who are you|about you|about the company|who is this)\b/,
    zip: /\b(\d{5})\b/
  };

  Chat.prototype.answer = function (raw) {
    var t = norm(raw), b = this.b;
    if (RX.cancel.test(t)) return { msgs: [{ who: 'bot', text: 'No problem. What else can I help with?' }], chips: this.mainChips() };
    var zip = raw.match(RX.zip);
    if (zip) return this.zipCheck(zip[1]);
    var town = this.findTown(t);
    if (RX.urgent.test(t)) return this.urgent();
    if (RX.quote.test(t) && !RX.price.test(t)) return this.startQuote(this.findService(t));
    if (RX.price.test(t)) return this.price(t);
    if (town && (RX.area.test(t) || t.split(' ').length <= 4)) return this.townCheck(town);
    if (RX.hours.test(t)) return this.hours(t);
    if (RX.area.test(t)) return this.areas();
    if (RX.trust.test(t)) return this.trust(t);
    if (RX.owner.test(t)) return this.about();
    if (RX.contact.test(t)) return this.contact();
    var svc = this.findService(t);
    if (svc) return this.service(svc);
    if (RX.services.test(t)) return this.services();
    if (RX.greet.test(t)) return { msgs: [{ who: 'bot', text: 'Hi! Ask me anything about ' + b.tradeLabel.toLowerCase() + ' work with ' + b.short + ', or tap one of these.' }], chips: this.mainChips() };
    if (RX.thanks.test(t) || RX.bye.test(t)) return { msgs: [{ who: 'bot', text: 'Anytime. If something comes up, ' + b.short + ' is at ' + b.phone + '.', actions: compact([this.callAct(true), this.smsAct()]) }], chips: this.mainChips() };
    return this.fallback();
  };

  Chat.prototype.fallback = function () {
    return { msgs: [{ who: 'bot', text: "I'm a simple assistant, so I may have missed that. I can share prices, hours and areas, or pass a request to the team. For anything else, a person is one call away.", actions: compact([this.callAct(), this.smsAct()]) }], chips: this.mainChips() };
  };

  Chat.prototype.findService = function (t) {
    var tw = words(t).map(stem); if (!tw.length) return null;
    var best = null, score = 0;
    this.c.services.forEach(function (s) {
      var sw = words(s.name + ' ' + s.short).map(stem), hit = 0;
      sw.forEach(function (w) { if (tw.indexOf(w) >= 0) hit += w.length > 4 ? 2 : 1; });
      if (norm(t).indexOf(norm(s.short)) >= 0) hit += 3;
      if (hit > score) { score = hit; best = s; }
    });
    return score >= 2 ? best : null;
  };

  Chat.prototype.findTown = function (t) {
    var all = [this.b.city].concat(this.b.areas);
    for (var i = 0; i < all.length; i++) if ((' ' + t + ' ').indexOf(' ' + norm(all[i]) + ' ') >= 0) return all[i];
    return null;
  };

  /* ---------- Answers ---------- */
  Chat.prototype.hours = function (t) {
    var b = this.b, s = openState(b), rows = [];
    ORDER.forEach(function (d) { var h = b.hours[d]; rows.push({ k: DAY_NAMES[d], v: h ? fmtTime(h[0]) + ' – ' + fmtTime(h[1]) : 'Closed', today: d === s.day }); });
    var lead = s.open ? "We're open right now, until **" + fmtTime(s.until) + '** today.' : s.next ? "We're closed right now. Next opening is **" + s.next.rel + ' at ' + fmtTime(s.next.at) + '**.' : "We're closed right now.";
    if (!s.open && b.emergency) lead += ' For an urgent problem, the phone line still picks up.';
    else if (!s.open) lead += ' Leave a request here and it will be waiting first thing.';
    return { msgs: [{ who: 'bot', text: lead, card: { title: 'Hours', tag: b.timezoneLabel, rows: rows } }], chips: ['Get a quote', 'Do you serve my area?', 'Prices'] };
  };

  Chat.prototype.areas = function () {
    var b = this.b;
    return { msgs: [{ who: 'bot', text: 'We work across **' + b.city + '** and nearby: ' + list(b.areas) + '.\n\nType your 5-digit ZIP and I will check it for you.' }], chips: [b.areas[0], b.areas[1], 'Get a quote'].filter(Boolean) };
  };

  Chat.prototype.zipCheck = function (zip) {
    var b = this.b, ok = b.zips.indexOf(zip) >= 0;
    if (ok) return { msgs: [{ who: 'bot', text: '**' + zip + '** is inside our service area. Want me to start a quote request?' }], chips: ['Yes, get a quote', 'Prices first', 'Hours'] };
    return { msgs: [{ who: 'bot', text: "**" + zip + "** isn't on our regular list (" + b.city + ', ' + list(b.areas.slice(0, 4)) + ' and nearby). Give us a call and we will tell you straight whether we can make the trip.', actions: compact([this.callAct(), this.smsAct()]) }], chips: ['Get a quote anyway', 'See all areas'] };
  };

  Chat.prototype.townCheck = function (town) {
    return { msgs: [{ who: 'bot', text: 'Yes, **' + town + '** is in our area. Want a number for a job there?' }], chips: ['Get a quote', 'Prices', 'Hours'] };
  };

  Chat.prototype.price = function (t) {
    var p = this.c.prices, tw = words(t).map(stem), best = null, score = 0;
    p.forEach(function (row) {
      var hit = 0; words(row.item).map(stem).forEach(function (w) { if (tw.indexOf(w) >= 0) hit += w.length > 4 ? 2 : 1; });
      if (hit > score) { score = hit; best = row; }
    });
    var svc = this.findService(t);
    if (!best && svc) p.forEach(function (row) { var s = words(svc.name).map(stem), hit = 0; words(row.item).map(stem).forEach(function (w) { if (s.indexOf(w) >= 0) hit++; }); if (hit > score) { score = hit; best = row; } });
    function rowOf(r) { return { k: r.item, note: r.note || '', v: r.from + (r.to ? '–' + r.to : '') + (r.unit ? ' ' + r.unit : '') }; }
    var foot = 'Sample pricing. Your real number comes after a look at the job.';
    if (best && score >= 1) {
      return { msgs: [{ who: 'bot', text: 'Here is the usual range for that:', card: { title: 'Typical price', tag: 'Sample', rows: [rowOf(best)], foot: foot } }, { who: 'bot', text: 'Want an exact number for your place?' }], chips: ['Get a quote', 'All prices', 'Do you serve my area?'] };
    }
    return { msgs: [{ who: 'bot', text: 'These are the ranges most jobs fall into:', card: { title: 'Typical prices', tag: 'Sample', rows: p.slice(0, 6).map(rowOf), foot: foot } }], chips: ['Get a quote', 'Do you serve my area?', 'Hours'] };
  };

  Chat.prototype.services = function () {
    var s = this.c.services;
    return { msgs: [{ who: 'bot', text: 'Here is what we do most:\n' + s.slice(0, 8).map(function (x) { return '• ' + x.name; }).join('\n') + '\n\nTap one to hear how we handle it.' }], chips: s.slice(0, 6).map(function (x) { return x.short; }) };
  };

  Chat.prototype.service = function (svc) {
    var self = this, pr = null;
    var sw = words(svc.name + ' ' + svc.short).map(stem);
    this.c.prices.forEach(function (r) { var hit = 0; words(r.item).map(stem).forEach(function (w) { if (sw.indexOf(w) >= 0) hit++; }); if (hit && !pr) pr = r; });
    var msgs = [{ who: 'bot', text: '**' + svc.name + '.** ' + svc.blurb }];
    if (pr) msgs.push({ who: 'bot', text: 'Typical range: **' + pr.from + (pr.to ? '–' + pr.to : '') + (pr.unit ? ' ' + pr.unit : '') + '**' + (pr.note ? ' (' + pr.note + ')' : '') + '. Sample pricing.' });
    self.state.lastService = svc.name; self.save();
    return { msgs: msgs, chips: ['Get a quote for this', 'Other services', 'Hours'] };
  };

  Chat.prototype.trust = function (t) {
    var b = this.b, p = this.c.proof, lines = [];
    if (/review|rating|star|trust|legit|reput/.test(t) || true) lines.push('**' + p.rating + '★** from ' + p.reviewCount + ' reviews (sample).');
    if (p.years) lines.push(p.years + ' years in ' + b.tradeLabel.toLowerCase() + ' (sample).');
    if (p.license) lines.push('Licence # ' + p.license + ' (sample).');
    if (p.insured) lines.push('Insured (sample).');
    if (p.guarantee) lines.push('Our promise: ' + p.guarantee + ' (sample)');
    var msgs = [{ who: 'bot', text: lines.join('\n') }];
    if (p.review) msgs.push({ who: 'bot', text: '“' + p.review.text + '”\n— ' + p.review.name + ', ' + p.review.town, meta: 'Sample review' });
    return { msgs: msgs, chips: ['Get a quote', 'Prices', 'Do you serve my area?'] };
  };

  Chat.prototype.about = function () {
    var b = this.b;
    return { msgs: [{ who: 'bot', text: b.name + ' is a ' + b.tradeLabel.toLowerCase() + ' business in ' + b.city + ', ' + b.state + (b.familyOwned ? ', family-owned' : '') + '. ' + b.owner + ' and the team handle the calls. I am the website assistant, here to save you a phone call for the simple stuff.' }], chips: this.mainChips() };
  };

  Chat.prototype.contact = function () {
    var b = this.b, s = openState(b);
    return { msgs: [{ who: 'bot', text: 'Talk to a person: **' + b.phone + '**' + (b.sms ? ' (call or text)' : '') + '. Email works too: ' + b.email + '.' + (s.open ? ' Someone is in right now.' : ' We are closed right now, so a text or a request here gets answered when we open.'), actions: compact([this.callAct(), this.smsAct(), { href: 'mailto:' + b.email, label: 'Email', icon: 'mail', ghost: true }]) }], chips: ['Get a quote', 'Hours'] };
  };

  Chat.prototype.urgent = function () {
    var b = this.b;
    if (b.emergency) return { msgs: [{ who: 'bot', text: 'That sounds like it can’t wait. Please **call ' + b.phone + '** now, the phone line is the fastest way to reach someone for urgent problems. A chat message is slower.', actions: [this.callAct()] }], chips: ['Hours', 'Get a quote'] };
    var s = openState(b);
    return { msgs: [{ who: 'bot', text: 'For anything urgent, a phone call is faster than chat: **' + b.phone + '**.' + (s.open ? '' : ' We are closed right now; if anyone is in danger, call 911 first.'), actions: compact([this.callAct(), this.smsAct()]) }], chips: ['Hours', 'Get a quote'] };
  };

  /* ---------- Quote request flow ---------- */
  Chat.prototype.startQuote = function (svc) {
    var f = this.state.flow = { step: 'service', data: {} };
    var pre = svc ? svc.name : this.state.lastService;
    if (pre) { f.data.service = pre; f.step = 'zip'; this.save(); return { msgs: [{ who: 'bot', text: 'Let’s get you a number for **' + pre + '**. Four quick questions, about a minute.' }, { who: 'bot', text: 'First, what ZIP is the job in?' }], chips: ['Cancel'] }; }
    this.save();
    return { msgs: [{ who: 'bot', text: 'Let’s get you a number. Four quick questions, about a minute.' }, { who: 'bot', text: 'What do you need done?' }], chips: this.c.services.slice(0, 5).map(function (s) { return s.short; }).concat(['Something else']) };
  };

  Chat.prototype.flowStep = function (raw) {
    var f = this.state.flow, d = f.data, t = norm(raw), b = this.b, self = this;
    if (RX.cancel.test(t) && f.step !== 'details') { this.state.flow = null; this.save(); return { msgs: [{ who: 'bot', text: 'Cancelled, nothing was kept. Anything else?' }], chips: this.mainChips() }; }
    if (RX.urgent.test(t) && f.step === 'service') { this.state.flow = null; this.save(); return this.urgent(); }
    var reply;
    switch (f.step) {
      case 'service':
        var svc = this.findService(t);
        d.service = svc ? svc.name : (t === 'something else' ? 'Something else' : raw.slice(0, 80));
        f.step = 'zip';
        reply = { msgs: [{ who: 'bot', text: 'Got it: **' + d.service + '**. What ZIP is the job in?' }], chips: ['Cancel'] };
        break;
      case 'zip':
        var z = raw.match(RX.zip), town = this.findTown(t);
        if (!z && !town) { reply = { msgs: [{ who: 'bot', text: 'A 5-digit ZIP works best, or the town name.' }], chips: ['Cancel'] }; break; }
        d.zip = z ? z[1] : town;
        d.inArea = z ? b.zips.indexOf(z[1]) >= 0 : true;
        f.step = 'name';
        reply = { msgs: [{ who: 'bot', text: (d.inArea ? 'Good, that’s in our area.' : 'That one is outside our usual list, but the team will tell you honestly if they can make the trip.') + ' What’s your first name?' }], chips: ['Cancel'] };
        break;
      case 'name':
        var nm = raw.replace(/^(i'?m|i am|my name is|it'?s|this is)\s+/i, '').trim().split(/\s+/).slice(0, 2).join(' ');
        if (!/[a-z]/i.test(nm)) { reply = { msgs: [{ who: 'bot', text: 'Just a first name is fine.' }], chips: ['Cancel'] }; break; }
        d.name = nm.charAt(0).toUpperCase() + nm.slice(1, 40);
        f.step = 'phone';
        reply = { msgs: [{ who: 'bot', text: 'Thanks, ' + d.name + '. Best number to reach you?' }], chips: ['I’d rather call them', 'Cancel'] };
        break;
      case 'phone':
        if (/rather call|i'll call|ill call|call them/.test(t)) { this.state.flow = null; this.save(); return { msgs: [{ who: 'bot', text: 'Sure. Mention ' + d.service.toLowerCase() + ' in ' + d.zip + ' and they’ll pick it up from there.', actions: compact([this.callAct(), this.smsAct()]) }], chips: this.mainChips() }; }
        var digits = raw.replace(/\D/g, '').replace(/^1(?=\d{10}$)/, '');
        if (digits.length !== 10) { reply = { msgs: [{ who: 'bot', text: 'That doesn’t look like a 10-digit number. Try again, like ' + b.phone + '.' }], chips: ['I’d rather call them', 'Cancel'] }; break; }
        d.phone = '(' + digits.slice(0, 3) + ') ' + digits.slice(3, 6) + '-' + digits.slice(6);
        f.step = 'when';
        reply = { msgs: [{ who: 'bot', text: 'When would you like this done?' }], chips: ['As soon as possible', 'This week', 'Next few weeks', 'Just want a price'] };
        break;
      case 'when':
        d.when = raw.slice(0, 60);
        f.step = 'details';
        reply = { msgs: [{ who: 'bot', text: 'Anything the team should know? Size, age, what you’ve noticed. Or skip.' }], chips: ['Skip'] };
        break;
      case 'details':
        d.details = /^(skip|no|nope|none|n\/a|nothing)$/.test(t) ? '' : raw.slice(0, 400);
        f.step = 'confirm';
        var rows = [{ k: 'Job', v: d.service }, { k: 'Where', v: d.zip }, { k: 'Name', v: d.name }, { k: 'Phone', v: d.phone }, { k: 'When', v: d.when }];
        if (d.details) rows.push({ k: 'Notes', v: d.details.length > 40 ? d.details.slice(0, 38) + '…' : d.details });
        reply = { msgs: [{ who: 'bot', text: 'Here’s your request:', card: { title: 'Quote request', tag: 'Sample', rows: rows } }], chips: ['Send it', 'Start over'] };
        break;
      case 'confirm':
        if (/^(send|yes|yep|yeah|ok|okay|sure|correct|looks good|go)/.test(t)) {
          this.state.flow = null;
          var s = openState(b);
          reply = { msgs: [
            { who: 'bot', text: 'Thanks, ' + d.name + '. In your version this goes straight to ' + b.short + '’s phone and inbox, and ' + (s.open ? 'someone calls back while you’re still on the page.' : 'it’s first on the list when we open ' + (s.next ? s.next.rel + ' at ' + fmtTime(s.next.at) : '') + '.') },
            { who: 'bot', text: 'This is a demo, so nothing was sent anywhere. Can’t wait? Call now.', actions: compact([this.callAct(true), this.smsAct()]), meta: 'Demo · no data leaves this page' }
          ], chips: ['Prices', 'Hours', 'Something else'] };
        } else { this.state.flow = { step: 'service', data: {} }; reply = { msgs: [{ who: 'bot', text: 'Okay, from the top. What do you need done?' }], chips: this.c.services.slice(0, 5).map(function (s) { return s.short; }).concat(['Something else']) }; }
        break;
    }
    this.save();
    return reply;
  };

  /* ---------- Public API ---------- */
  var instance = null;
  window.SiteChat = {
    mount: function (cfg) {
      if (instance) return instance;
      var go = function () { instance = new Chat(cfg); window.SiteChat.instance = instance; };
      if (document.body) go(); else document.addEventListener('DOMContentLoaded', go);
      return instance;
    },
    open: function () { instance && instance.open(); },
    close: function () { instance && instance.close(); },
    reset: function () { var s = store(); if (s && instance) s.removeItem(instance.key); location.reload(); }
  };
  var pending = window.SiteChatConfig; if (pending) window.SiteChat.mount(pending);
})();
