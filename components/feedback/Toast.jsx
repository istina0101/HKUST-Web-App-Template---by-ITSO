import React from 'react';
/** Bottom-centre navy toast. Controlled: `open` shows it; fades/slides 16px over 180ms. `fixed={false}` renders inline for previews. */
export function Toast({ open = true, children, fixed = true, style }) {
  return (
    <div role="status" style={{ position: fixed ? 'fixed' : 'relative', bottom: fixed ? 26 : undefined, left: fixed ? '50%' : undefined, transform: fixed ? `translateX(-50%) translateY(${open ? 0 : 16}px)` : `translateY(${open ? 0 : 16}px)`,
      background: 'var(--hkust-blue)', color: '#fff', fontSize: 'var(--text-sm)', fontWeight: 600, padding: '11px 18px', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', opacity: open ? 1 : 0, pointerEvents: 'none',
      transition: 'opacity 180ms,transform 180ms', zIndex: 'var(--z-toast)', maxWidth: 'min(560px,90vw)', textAlign: 'center', display: 'inline-block', ...style }}>
      {children}
    </div>
  );
}
