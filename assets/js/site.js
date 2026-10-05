/* Consent-gated Google Analytics + lightweight event tracking.
   Consent is stored in localStorage for 13 months (CNIL guidance). */
(function () {
  var KEY = 'analytics-consent', MAX_AGE = 1000 * 60 * 60 * 24 * 395;
  var GA = window.SITE_GA4;
  var banner = document.getElementById('consent');

  function read() {
    try {
      var v = JSON.parse(localStorage.getItem(KEY));
      if (v && Date.now() - v.t < MAX_AGE) return v.choice;
    } catch (e) {}
    return null;
  }
  function save(choice) {
    try { localStorage.setItem(KEY, JSON.stringify({ choice: choice, t: Date.now() })); } catch (e) {}
  }
  function loadGA() {
    if (!GA || window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA);
    var s = document.createElement('script');
    s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA;
    document.head.appendChild(s);
  }
  function clearGACookies() {
    document.cookie.split(';').forEach(function (c) {
      var n = c.split('=')[0].trim();
      if (n.indexOf('_ga') === 0) {
        var host = location.hostname;
        document.cookie = n + '=; Max-Age=0; path=/; domain=' + host;
        document.cookie = n + '=; Max-Age=0; path=/; domain=.' + host;
      }
    });
  }

  if (GA && banner) {
    var choice = read();
    if (choice === 'granted') loadGA();
    else if (choice === null) banner.hidden = false;

    banner.addEventListener('click', function (e) {
      var c = e.target.getAttribute('data-consent');
      if (!c) return;
      save(c); banner.hidden = true;
      if (c === 'granted') loadGA(); else clearGACookies();
    });
  }
  document.querySelectorAll('[data-consent-open]').forEach(function (b) {
    if (!banner) { b.hidden = true; return; }
    b.addEventListener('click', function () { banner.hidden = false; });
  });

  /* Event tracking: email, DOI/PDF, outbound profile links, positions.
     Sent to GoatCounter (always) and GA4 (only if consented). */
  function track(name) {
    if (window.goatcounter && window.goatcounter.count)
      window.goatcounter.count({ path: 'event-' + name, title: name, event: true });
    if (window.gtag) gtag('event', 'click', { event_label: name });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var t = a.getAttribute('data-track');
    if (!t) {
      var h = a.href || '';
      if (h.indexOf('mailto:') === 0) t = 'email';
      else if (/doi\.org|\.pdf$/i.test(h)) t = 'paper';
      else if (a.host && a.host !== location.host) t = 'out-' + a.host.replace(/^www\./, '');
    }
    if (t) track(t);
  });

  /* Reveal e-mail as a clickable link (keeps it out of the raw HTML). */
  document.querySelectorAll('.email').forEach(function (el) {
    var addr = el.textContent.replace(/\s*\[at\]\s*/, '@').trim();
    var a = document.createElement('a');
    a.href = 'mailto:' + addr; a.textContent = addr;
    el.textContent = ''; el.appendChild(a);
  });
})();
