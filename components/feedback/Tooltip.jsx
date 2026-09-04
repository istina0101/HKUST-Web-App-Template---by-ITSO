import React from 'react';
/** Intentional addition (not in the portal): hover/focus tooltip in navy with 12px white text. `side` top | bottom. */
export function Tooltip({ label, side = 'top', children, style }) {
  const [show, setShow] = React.useState(false);
  const pos = side === 'bottom' ? { top: 'calc(100% + 6px)' } : { bottom: 'calc(100% + 6px)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex', ...style }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      <span role="tooltip" style={{ position: 'absolute', left: '50%', transform: `translateX(-50%) translateY(${show ? 0 : side === 'bottom' ? -4 : 4}px)`, ...pos, background: 'var(--hkust-blue)', color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 600, padding: '6px 9px', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap', opacity: show ? 1 : 0, visibility: show ? 'visible' : 'hidden', pointerEvents: 'none', transition: 'opacity var(--t-fast),transform var(--t-fast),visibility 0s linear ' + (show ? '0s' : 'var(--t-fast)'), zIndex: 'var(--z-menu)', lineHeight: 1.4 }}>{label}</span>
    </span>
  );
}
