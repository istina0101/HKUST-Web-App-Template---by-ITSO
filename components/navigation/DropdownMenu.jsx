import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** White popover menu (persona switcher pattern): 1px border, 4px radius, large shadow, 250px min width, 4px inset. `heading` renders the 11px uppercase header. `anchor` top/right offsets when absolutely positioned; `inline` renders in flow. */
export function DropdownMenu({ open = true, heading, children, inline, top = 52, right = 12, style }) {
  if (!open) return null;
  return (
    <div role="menu" style={{ position: inline ? 'relative' : 'absolute', top: inline ? undefined : top, right: inline ? undefined : right, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', minWidth: 250, zIndex: 'var(--z-menu)', overflow: 'hidden', padding: 4, display: 'inline-block', ...style }}>
      {heading && <div style={{ fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--fg4)', padding: '8px 10px 6px' }}>{heading}</div>}
      {children}
    </div>
  );
}
/** Row inside DropdownMenu: optional `leading` (Avatar/Icon), bold label, muted description, green check when `selected`. `tone="danger"` colours the label red (sign out, delete). */
export function MenuItem({ leading, icon, label, description, selected, onClick, tone, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button role="menuitem" type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%', border: 'none', background: hover ? 'var(--bg2)' : '#fff', textAlign: 'left', padding: '9px 10px', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'var(--text-sm)', color: tone === 'danger' ? 'var(--danger)' : 'var(--fg2)', borderRadius: 'var(--r-md)', transition: 'background var(--t-fast)', lineHeight: 1.4, ...style }}>
      {leading}{icon && <Icon name={icon} size={16} style={{ color: tone === 'danger' ? 'var(--danger)' : 'var(--fg3)' }} />}
      <span style={{ flex: 1 }}><b style={{ color: tone === 'danger' ? 'var(--danger)' : 'var(--fg1)', fontWeight: description ? 700 : 600 }}>{label}</b>{description && <><br /><span style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)' }}>{description}</span></>}</span>
      <Icon name="check" size={16} style={{ color: 'var(--success)', visibility: selected ? 'visible' : 'hidden' }} />
    </button>
  );
}
