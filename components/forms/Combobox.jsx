import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';
import { useFocusStyle } from './Input.jsx';
/** Intentional addition: typeahead search. options: [{value, label, meta?, initials?, icon?}] filtered as you type; rows show an Avatar (or icon), label and a muted second line. Arrow keys + Enter select, Esc closes. */
export function Combobox({ options = [], value, onChange, placeholder = 'Search…', icon = 'search', emptyText = 'No matches', maxItems = 6, invalid, style }) {
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const base = useFocusStyle(focused, invalid);
  const sel = options.find(o => o.value === value);
  const list = q ? options.filter(o => (o.label + ' ' + (o.meta || '')).toLowerCase().includes(q.toLowerCase())).slice(0, maxItems) : options.slice(0, maxItems);
  const pick = o => { onChange && onChange(o.value, o); setQ(''); setOpen(false); };
  const onKey = e => {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter')) { setOpen(true); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(list.length - 1, a + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(0, a - 1)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (list[active]) pick(list[active]); }
    else if (e.key === 'Escape') setOpen(false);
  };
  return (
    <div style={{ position: 'relative', ...style }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) { setOpen(false); setFocused(false); } }}>
      <Icon name={icon} size={18} style={{ position: 'absolute', left: 12, top: 11, color: 'var(--fg4)', pointerEvents: 'none' }} />
      <input role="combobox" aria-expanded={open} aria-autocomplete="list" value={open || !sel ? q : ''} placeholder={sel && !open ? '' : placeholder} onChange={e => { setQ(e.target.value); setOpen(true); setActive(0); }} onFocus={() => { setFocused(true); setOpen(true); }} onKeyDown={onKey}
        style={{ ...base, paddingLeft: 38, paddingRight: sel ? 36 : 13, color: 'var(--fg2)' }} />
      {sel && !open && <div style={{ position: 'absolute', left: 38, top: 0, height: 40, display: 'flex', alignItems: 'center', gap: 8, pointerEvents: 'none', fontSize: 'var(--text-sm)', color: 'var(--fg2)', maxWidth: 'calc(100% - 80px)', overflow: 'hidden', whiteSpace: 'nowrap' }}>{sel.initials && <Avatar initials={sel.initials} size={22} style={{ fontSize: 10 }} />}<b style={{ fontWeight: 600 }}>{sel.label}</b>{sel.meta && <span style={{ color: 'var(--fg3)' }}>· {sel.meta}</span>}</div>}
      {sel && !open && <button type="button" aria-label="Clear" onMouseDown={e => e.preventDefault()} onClick={() => { onChange && onChange(null, null); setQ(''); }} style={{ position: 'absolute', right: 8, top: 8, width: 24, height: 24, border: 'none', background: 'none', color: 'var(--fg4)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--r-md)' }}><Icon name="x" size={14} /></button>}
      {open && (
        <div role="listbox" style={{ position: 'absolute', left: 0, right: 0, top: 'calc(100% + 4px)', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', zIndex: 'var(--z-menu)', padding: 4, maxHeight: 320, overflowY: 'auto' }}>
          {!list.length && <div style={{ padding: '12px 10px', fontSize: 'var(--text-sm)', color: 'var(--fg3)' }}>{emptyText}</div>}
          {list.map((o, i) => (
            <div key={o.value} role="option" aria-selected={o.value === value} tabIndex={-1} onMouseDown={e => e.preventDefault()} onMouseEnter={() => setActive(i)} onClick={() => pick(o)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 'var(--r-md)', cursor: 'pointer', background: i === active ? 'var(--bg2)' : 'transparent', fontSize: 'var(--text-sm)' }}>
              {o.initials ? <Avatar initials={o.initials} size={28} style={{ fontSize: 11 }} bg={o.bg} fg={o.fg} /> : o.icon ? <Icon name={o.icon} size={16} style={{ color: 'var(--fg3)', margin: '0 6px' }} /> : null}
              <span style={{ flex: 1, minWidth: 0 }}><b style={{ display: 'block', fontWeight: 600, color: 'var(--fg1)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{o.label}</b>{o.meta && <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--fg3)' }}>{o.meta}</span>}</span>
              {o.value === value && <Icon name="check" size={16} style={{ color: 'var(--success)' }} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
