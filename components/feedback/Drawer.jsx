import React from 'react';
import { CloseButton } from './Modal.jsx';
/** Intentional addition: right-hand side panel (480px) on a navy scrim for detail views that should not leave the list. Closes with its header button only. Header/body/footer insets match Modal. `inline` renders without the fixed layer for previews. */
export function Drawer({ open = true, onClose, title, subtitle, leading, footer, width = 480, children, inline, style }) {
  if (!open) return null;
  const panel = (
    <aside role="dialog" aria-modal={!inline} aria-label={typeof title === 'string' ? title : undefined} style={{ width: inline ? '100%' : width, maxWidth: '100vw', height: inline ? undefined : '100%', background: 'var(--bg1)', boxShadow: inline ? 'none' : 'var(--shadow-lg)', border: inline ? '1px solid var(--border)' : 'none', borderRadius: inline ? 'var(--r-lg)' : 0, display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ padding: 'var(--modal-pad)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, flex: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>{leading}<div style={{ minWidth: 0 }}><h3 style={{ fontSize: 'var(--text-md)', margin: 0, color: 'var(--fg1)', fontWeight: 700, lineHeight: 1.2 }}>{title}</h3>{subtitle && <div style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 2 }}>{subtitle}</div>}</div></div>
        {onClose && <CloseButton onClick={onClose} />}
      </div>
      <div style={{ padding: 'var(--modal-pad)', overflowY: 'auto', flex: 1 }}>{children}</div>
      {footer && <div style={{ padding: '16px 22px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flex: 'none' }}>{footer}</div>}
    </aside>
  );
  if (inline) return panel;
  return <div style={{ position: 'fixed', inset: 0, background: 'var(--overlay)', display: 'flex', justifyContent: 'flex-end', zIndex: 'var(--z-modal)' }}>{panel}</div>;
}
