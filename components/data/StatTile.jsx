import React from 'react';
import { IconBox } from '../core/IconBox.jsx';
/** Home-page stat card: gold eyebrow, 32px extrabold number, muted caption, optional link-style action and a tinted IconBox on the right. */
export function StatTile({ eyebrow, value, unit, caption, action, icon, tone = 'navy', children, style }) {
  const ref = React.useRef(null); const [narrow, setNarrow] = React.useState(false);
  React.useEffect(() => { const el = ref.current; if (!el || typeof ResizeObserver === 'undefined') return; const ro = new ResizeObserver(() => setNarrow(el.clientWidth < 200)); ro.observe(el); return () => ro.disconnect(); }, []);
  return (
    <div ref={ref} style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'var(--card-pad)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, ...style }}>
      <div style={{ minWidth: 0, flex: 1, overflowWrap: 'break-word' }}>
        {eyebrow && <div style={{ color: 'var(--text-eyebrow)', fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps-wide)', textTransform: 'uppercase' }}>{eyebrow}</div>}
        {value != null && <div style={{ fontSize: 'var(--type-stat-size)', fontWeight: 700, color: 'var(--fg1)', margin: '6px 0 2px', lineHeight: 1 }}>{value}{unit && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--fg3)' }}> {unit}</span>}</div>}
        {children}
        {caption && <p style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', margin: 0 }}>{caption}</p>}
        {action && <div style={{ marginTop: 6 }}>{action}</div>}
      </div>
      {icon && !narrow && <IconBox icon={icon} tone={tone} />}
    </div>
  );
}
