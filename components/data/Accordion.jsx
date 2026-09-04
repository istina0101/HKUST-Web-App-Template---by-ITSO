import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Intentional addition: expand/collapse sections. Accordion opens one item at a time (`items: [{key, title, meta?, content}]`); Disclosure is a single row. Chevron rotates 180° in 150ms like the portal's bundle rows. */
export function Accordion({ items = [], defaultOpen, value, onChange, style }) {
  const [inner, setInner] = React.useState(defaultOpen ?? (items[0] && items[0].key));
  const open = value !== undefined ? value : inner;
  const toggle = k => { const next = open === k ? null : k; if (value === undefined) setInner(next); onChange && onChange(next); };
  return (
    <div style={{ background: 'var(--bg1)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', ...style }}>
      {items.map((it, i) => <Disclosure key={it.key} title={it.title} meta={it.meta} open={open === it.key} onToggle={() => toggle(it.key)} last={i === items.length - 1} flush>{it.content}</Disclosure>)}
    </div>
  );
}
export function Disclosure({ title, meta, open: openProp, defaultOpen = false, onToggle, children, last = true, flush, style }) {
  const [inner, setInner] = React.useState(defaultOpen);
  const open = openProp !== undefined ? openProp : inner;
  const [hover, setHover] = React.useState(false);
  const click = () => { if (openProp === undefined) setInner(o => !o); onToggle && onToggle(!open); };
  return (
    <div style={{ borderBottom: last ? 'none' : '1px solid var(--border)', ...(flush ? {} : { background: 'var(--bg1)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)' }), ...style }}>
      <button type="button" aria-expanded={open} onClick={click} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '16px 22px', background: hover ? 'var(--bg2)' : 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', borderRadius: flush ? 0 : 'var(--r-lg)', transition: 'background var(--t-fast)' }}>
        <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--fg1)' }}>{title}</span>{meta && <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--fg3)', marginTop: 2 }}>{meta}</span>}</span>
        <Icon name="chevron-down" size={18} style={{ color: 'var(--fg3)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--t-base)' }} />
      </button>
      {open && <div style={{ padding: '0 22px 18px', fontSize: 'var(--text-sm)', color: 'var(--fg2)' }}>{children}</div>}
    </div>
  );
}
