/* Renders component docs: for each entry in window.DOCS[group] → header, live stage (with mobile toggle), tabs for Props / JSX. Also builds the page's own anchor list. */
(function () {
  if (typeof document === 'undefined' || !document.body || !document.body.dataset || !document.body.dataset.page) return;
  const I = window.SITE_ICONS;
  const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const el = h => { const t = document.createElement('template'); t.innerHTML = h.trim(); return t.content.firstChild; };
  window.renderDocs = function (group, root) {
    const items = window.DOCS[group];
    const NS = window.HKUSTWebDesignSystem_46d20c || {};
    root.innerHTML = '';
    // anchor strip
    root.appendChild(el(`<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px">${items.map(it => `<a href="#${it.name}" class="btn ghost sm">${it.name}</a>`).join('')}</div>`));
    items.forEach(it => {
      const card = el(`<section class="ex" id="${it.name}">
        <div class="ex-h"><div><h2>${it.name}${it.addition ? '<span class="tag">addition</span>' : ''}</h2><p>${it.desc}</p></div>
          <div class="ex-tools"><button type="button" data-act="mobile" title="Preview at 390px">${I.phone}Mobile</button><button type="button" data-act="code" title="Props and JSX">${I.code}Props &amp; code</button></div></div>
        <div class="ex-stage ${it.col ? 'col' : ''}"><div class="ex-frame" data-stage></div></div>
        <div class="ex-body"><div class="ex-tabs"><button type="button" class="on" data-tab="props">Props</button><button type="button" data-tab="code">JSX</button></div>
          <div class="ex-props" data-pane="props"><table><thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody>${it.props.map(p => `<tr><td>${p[0]}</td><td>${esc(p[1])}</td><td>${p[2] ? `<code>${esc(p[2])}</code>` : '—'}</td><td>${p[3]}</td></tr>`).join('')}</tbody></table></div>
          <div class="ex-code" data-pane="code" style="display:none"><pre><code>${esc(it.code.trim())}</code></pre></div>
        </div></section>`);
      root.appendChild(card);
      const stage = card.querySelector('[data-stage]');
      try { ReactDOM.createRoot(stage).render(React.createElement(it.render, { NS })); } catch (e) { stage.textContent = 'Example failed: ' + e.message; }
      card.querySelector('[data-act="mobile"]').onclick = e => { const on = card.querySelector('.ex-stage').classList.toggle('mobile'); e.currentTarget.classList.toggle('on', on); };
      card.querySelector('[data-act="code"]').onclick = e => { const on = card.classList.toggle('open'); e.currentTarget.classList.toggle('on', on); if (on) window.siteEnhance(card); };
      card.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { card.querySelectorAll('[data-tab]').forEach(x => x.classList.toggle('on', x === b)); card.querySelectorAll('[data-pane]').forEach(p => p.style.display = p.dataset.pane === b.dataset.tab ? '' : 'none'); });
    });
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => window.scrollTo(0, t.getBoundingClientRect().top + window.scrollY - 140), 50); }
  };
})();
