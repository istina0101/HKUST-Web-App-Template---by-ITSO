/* HKUST Web docs · shell: band, sidebar, search, copy buttons, mobile preview. Each page sets <body data-page="…">. */
(function () {
  if (typeof document === 'undefined' || !document.body || !document.body.dataset || !document.body.dataset.page || !document.querySelector('link[href$="_static/site.css"]')) return;
  const I = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>',
    ext: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    forms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
    nav: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/></svg>',
    data: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    msg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    ext2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  };
  window.SITE_ICONS = I;
  const NAV = [
    { lbl: 'Start' }, { id: 'index', href: 'index.html', t: 'Getting started', i: 'zap' },
    { lbl: 'Foundations' }, { id: 'foundations', href: 'foundations.html', t: 'Colour, type & spacing', i: 'palette' }, { id: 'layout', href: 'layout.html', t: 'Layout & motion', i: 'layout' },
    { lbl: 'Components' }, { id: 'core', href: 'components-core.html', t: 'Core', i: 'grid' }, { id: 'forms', href: 'components-forms.html', t: 'Forms', i: 'forms' }, { id: 'feedback', href: 'components-feedback.html', t: 'Feedback', i: 'bell' }, { id: 'navigation', href: 'components-navigation.html', t: 'Navigation', i: 'nav' }, { id: 'data', href: 'components-data.html', t: 'Data', i: 'data' },
    { lbl: 'Guidance' }, { id: 'templates', href: 'templates.html', t: 'Templates', i: 'layout' }, { id: 'voice', href: 'voice.html', t: 'Voice & copy', i: 'msg' }, { id: 'dos-donts', href: 'dos-donts.html', t: 'Do & don\'t', i: 'check' }, { id: 'changelog', href: 'changelog.html', t: 'Changelog', i: 'clock' },
  ];
  const page = document.body.dataset.page || 'index';
  const el = (h) => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
  // band
  document.body.prepend(el(`<header class="sb">
    <div class="sb-l"><button class="sb-ib sb-menu" aria-label="Menu" id="sbMenu">${I.menu}</button><a href="index.html" style="display:flex"><img src="../assets/logo/hkust-fullname-white.png" alt="HKUST"></a><div class="sb-unit"><b>HKUST Web Design System</b><span class="sb-ver">v1.0</span><br>Information Technology Services Office (ITSO)</div></div>
    <div class="sb-r"><div class="sb-search"><input id="sbQ" type="search" placeholder="Search components…" autocomplete="off" aria-label="Search components">${I.search}<div class="sb-results" id="sbRes" role="listbox"></div></div><a class="sb-ib" href="../hkust-web-design-skill.zip" title="Download Claude skill (zip)" download>${I.download}</a></div>
  </header>`));
  // sidebar
  const side = el(`<nav class="sn" id="sn" aria-label="Documentation"></nav>`);
  NAV.forEach(n => { if (n.lbl) side.appendChild(el(`<div class="sn-lbl">${n.lbl}</div>`)); else side.appendChild(el(`<a href="${n.href}" class="${n.id === page ? 'on' : ''}" ${n.id === page ? 'aria-current="page"' : ''}>${I[n.i]}<span>${n.t}</span></a>`)); });
  side.appendChild(el(`<div class="sn-foot">Reference: IAM Self-Service Portal v4<br>Live demos: <a href="../ui_kits/iam-portal/index.html">IAM portal</a> · <a href="../ui_kits/hkust-web-app/index.html">Sample app</a></div>`));
  document.body.insertBefore(side, document.body.children[1]);
  const bd = el('<div class="sn-bd" id="snBd"></div>'); document.body.insertBefore(bd, side.nextSibling);
  document.getElementById('sbMenu').onclick = () => { side.classList.toggle('open'); bd.classList.toggle('on', side.classList.contains('open')); };
  bd.onclick = () => { side.classList.remove('open'); bd.classList.remove('on'); };
  // footer
  const main = document.querySelector('.main'); if (main) main.appendChild(el(`<footer class="foot"><span>Information Technology Services Office (ITSO) · The Hong Kong University of Science and Technology</span><span>HKUST Web Design System v1.0 · Muli · Lucide</span></footer>`));
  // search
  const q = document.getElementById('sbQ'), res = document.getElementById('sbRes');
  let idx = null, act = 0;
  const load = () => idx || fetch('_static/search-index.json').then(r => r.json()).then(j => (idx = j));
  const render = (list) => {
    res.innerHTML = list.length ? list.map((x, i) => `<a href="${x.href}" class="${i === act ? 'act' : ''}"><b>${x.name}</b><span>${x.desc}</span><em>${x.group}</em></a>`).join('') : '<div class="none">No components match</div>';
    res.classList.add('on');
  };
  const run = () => { const v = q.value.trim().toLowerCase(); if (!v) { res.classList.remove('on'); return; } load().then(j => { const l = j.filter(x => (x.name + ' ' + x.desc + ' ' + x.group).toLowerCase().includes(v)).slice(0, 8); act = Math.min(act, Math.max(0, l.length - 1)); render(l); }); };
  q.addEventListener('input', () => { act = 0; run(); });
  q.addEventListener('focus', () => { load(); run(); });
  q.addEventListener('keydown', e => { const links = res.querySelectorAll('a'); if (e.key === 'ArrowDown') { e.preventDefault(); act = Math.min(links.length - 1, act + 1); run(); } else if (e.key === 'ArrowUp') { e.preventDefault(); act = Math.max(0, act - 1); run(); } else if (e.key === 'Enter' && links[act]) { location.href = links[act].href; } else if (e.key === 'Escape') { res.classList.remove('on'); q.blur(); } });
  document.addEventListener('click', e => { if (!e.target.closest('.sb-search')) res.classList.remove('on'); });
  document.addEventListener('keydown', e => { if (e.key === '/' && document.activeElement !== q && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); q.focus(); } });
  // copy buttons
  const copyText = (btn, text) => navigator.clipboard.writeText(text).then(() => { const o = btn.innerHTML; btn.classList.add('ok'); btn.innerHTML = I.check + 'Copied'; setTimeout(() => { btn.classList.remove('ok'); btn.innerHTML = o; }, 1400); });
  window.siteEnhance = (root) => {
    (root || document).querySelectorAll('pre:not([data-copy])').forEach(pre => { pre.dataset.copy = '1'; const b = el(`<button class="copy" type="button">${I.copy}Copy</button>`); b.onclick = () => copyText(b, pre.querySelector('code') ? pre.querySelector('code').textContent : pre.textContent); pre.appendChild(b); });
    (root || document).querySelectorAll('.tok code:not([data-copy])').forEach(c => { c.dataset.copy = '1'; c.title = 'Copy'; c.onclick = () => navigator.clipboard.writeText(c.textContent).then(() => { const o = c.textContent; c.textContent = 'copied'; setTimeout(() => (c.textContent = o), 900); }); });
  };
  window.siteEnhance();
})();
