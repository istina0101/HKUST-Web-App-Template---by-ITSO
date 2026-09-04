import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Checkbox } from './Checkbox.jsx';
import { useFocusStyle } from './Input.jsx';
/** Intentional addition: pick several options from a dropdown of checkboxes. The field shows a count ("3 selected") — never tags. options: [{value,label,meta?}]; value: array. */
export function MultiSelect({ options = [], value = [], onChange, placeholder = 'Select…', searchable = true, invalid, countLabel = (n, total) => `${n} selected`, style }) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const base = useFocusStyle(open, invalid);
  const list = q ? options.filter(o => (o.label + ' ' + (o.meta || '')).toLowerCase().includes(q.toLowerCase())) : options;
  const toggle = v => { const next = value.includes(v) ? value.filter(x => x !== v) : [...value, v]; onChange && onChange(next); };
  const allShown = list.length && list.every(o => value.includes(o.value));
  return (
    <div style={{ position: 'relative', ...style }} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(o => !o)} style={{ ...base, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, textAlign: 'left', cursor: 'pointer', color: value.length ? 'var(--fg2)' : 'var(--fg4)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minWidth: 0 }}>{value.length ? <><span style={{ background: 'var(--bg-brand-light)', color: 'var(--itso-blue-dark)', fontSize: 'var(--text-2xs)', fontWeight: 700, borderRadius: 9, padding: '1px 7px' }}>{value.length}</span><span>{countLabel(value.length, options.length)}</span></> : placeholder}</span>
        <Icon name="chevron-down" size={16} style={{ color: 'var(--fg3)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--t-base)' }} />
      </button>
      {open && (
        <div role="listbox" aria-multiselectable="true" style={{ position: 'absolute', left: 0, right: 0, top: 'calc(100% + 4px)', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', zIndex: 'var(--z-menu)', padding: 4 }}>
          {searchable && <div style={{ position: 'relative', padding: 4 }}><Icon name="search" size={15} style={{ position: 'absolute', left: 13, top: 13, color: 'var(--fg4)', pointerEvents: 'none' }} /><input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Filter…" style={{ width: '100%', height: 32, border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '0 10px 0 30px', fontFamily: 'inherit', fontSize: 'var(--text-xs)', outline: 'none', boxSizing: 'border-box' }} /></div>}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px 4px', fontSize: 'var(--text-2xs)', color: 'var(--fg4)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase' }}><span>{list.length} options</span><button type="button" onMouseDown={e => e.preventDefault()} onClick={() => onChange && onChange(allShown ? value.filter(v => !list.some(o => o.value === v)) : Array.from(new Set([...value, ...list.map(o => o.value)])))} style={{ background: 'none', border: 'none', color: 'var(--itso-blue-dark)', fontFamily: 'inherit', fontSize: 'var(--text-2xs)', fontWeight: 700, cursor: 'pointer', letterSpacing: 'inherit', textTransform: 'inherit' }}>{allShown ? 'Clear' : 'Select all'}</button></div>
          <div style={{ maxHeight: 260, overflowY: 'auto' }}>
            {list.map(o => <Row key={o.value} o={o} on={value.includes(o.value)} onToggle={() => toggle(o.value)} />)}
            {!list.length && <div style={{ padding: '10px', fontSize: 'var(--text-sm)', color: 'var(--fg3)' }}>No matches</div>}
          </div>
        </div>
      )}
    </div>
  );
}
function Row({ o, on, onToggle }) {
  const [hover, setHover] = React.useState(false);
  return (
    <label role="option" aria-selected={on} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onMouseDown={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 'var(--r-md)', cursor: 'pointer', background: hover ? 'var(--bg2)' : 'transparent', fontSize: 'var(--text-sm)' }}>
      <Checkbox checked={on} onChange={onToggle} />
      <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: 'block', fontWeight: 600, color: 'var(--fg1)' }}>{o.label}</span>{o.meta && <span style={{ display: 'block', fontSize: 'var(--text-xs)', color: 'var(--fg3)' }}>{o.meta}</span>}</span>
    </label>
  );
}
