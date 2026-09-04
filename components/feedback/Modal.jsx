import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Centred dialog on a navy 45% scrim. width 480 (lg 560). `title`/`subtitle`/`leading` fill the header; `footer` receives the action row (space-between). `inline` renders without the fixed scrim for previews. */
export function Modal({ open = true, onClose, title, subtitle, leading, size = 'md', footer, children, inline, style }) {
  if (!open) return null;
  const dialog = (
    <div role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} style={{ background: 'var(--bg1)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: size === 'lg' ? 560 : 480, maxHeight: inline ? undefined : '90vh', overflow: 'auto', ...style }}>
      <div style={{ padding: 'var(--modal-pad)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{leading}<div><h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--fg1)', fontWeight: 700, lineHeight: 1.2 }}>{title}</h3>{subtitle && <div style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 2 }}>{subtitle}</div>}</div></div>
        {onClose && <CloseButton onClick={onClose} />}
      </div>
      <div style={{ padding: 'var(--modal-pad)' }}>{children}</div>
      {footer && <div style={{ padding: '16px 22px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>{footer}</div>}
    </div>
  );
  if (inline) return dialog;
  return <div onClick={e => { if (e.target === e.currentTarget && onClose) onClose(); }} style={{ position: 'fixed', inset: 0, background: 'var(--overlay)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 'var(--z-modal)', padding: 20 }}>{dialog}</div>;
}
export function CloseButton({ onClick }) {
  const [hover, setHover] = React.useState(false);
  return <button type="button" aria-label="Close" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ background: 'none', border: 'none', color: hover ? 'var(--fg2)' : 'var(--fg4)', cursor: 'pointer', padding: 2, display: 'inline-flex', flex: 'none' }}><Icon name="x" size={18} /></button>;
}
