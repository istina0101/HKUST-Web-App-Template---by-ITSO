import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Intentional addition: underline tabs for switching content within a page (the portal uses Chips for filters). items: [{key,label,icon?,count?}]. */
export function Tabs({ items = [], value, onChange, style }) {
  return (
    <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border)', ...style }}>
      {items.map(t => <Tab key={t.key} {...t} active={t.key === value} onClick={() => onChange && onChange(t.key)} />)}
    </div>
  );
}
function Tab({ label, icon, count, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button role="tab" aria-selected={active} type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '10px 14px', marginBottom: -1, background: 'transparent', border: 'none', borderBottom: `2px solid ${active ? 'var(--itso-blue-dark)' : 'transparent'}`, color: active ? 'var(--hkust-blue)' : hover ? 'var(--fg1)' : 'var(--fg3)', fontFamily: 'inherit', fontSize: 'var(--text-sm)', fontWeight: active ? 700 : 600, cursor: 'pointer', transition: 'color var(--t-fast),border-color var(--t-fast)', lineHeight: 1.5 }}>
      {icon && <Icon name={icon} size={16} />}{label}
      {count != null && <span style={{ background: active ? 'var(--bg-brand-light)' : 'var(--bg3)', color: active ? 'var(--itso-blue-dark)' : 'var(--fg3)', fontSize: 'var(--text-2xs)', fontWeight: 700, borderRadius: 9, minWidth: 18, height: 18, padding: '0 5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{count}</span>}
    </button>
  );
}
