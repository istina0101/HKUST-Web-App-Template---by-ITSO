import React from 'react';
let injected = false;
function ensureKeyframes() {
  if (injected || typeof document === 'undefined') return; injected = true;
  const s = document.createElement('style'); s.setAttribute('data-hkust-skeleton', ''); s.textContent = '@keyframes hkust-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@media(prefers-reduced-motion:reduce){[data-hkust-skeleton-bar]{animation:none!important}}'; document.head.appendChild(s);
}
/** Intentional addition: loading placeholder bar with a slow shimmer (1.6s, plain ease). Size with width/height; `radius` 4 by default, 50% for avatars. */
export function Skeleton({ width = '100%', height = 14, radius = 'var(--r-md)', style }) {
  React.useEffect(ensureKeyframes, []);
  return <span data-hkust-skeleton-bar aria-hidden="true" style={{ display: 'block', width, height, borderRadius: radius, background: 'linear-gradient(90deg,var(--bg3) 25%,#f6f8fb 50%,var(--bg3) 75%)', backgroundSize: '200% 100%', animation: 'hkust-shimmer 1.6s ease infinite', ...style }} />;
}
/** Ready-made skeleton for a table: `rows` × `cols` bars with the grey header strip. */
export function SkeletonTable({ rows = 4, cols = 4, style }) {
  return (
    <div style={style}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap: 14, padding: '11px 14px', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>{Array.from({ length: cols }, (_, i) => <Skeleton key={i} height={10} width="60%" />)}</div>
      {Array.from({ length: rows }, (_, r) => <div key={r} style={{ display: 'grid', gridTemplateColumns: `repeat(${cols},1fr)`, gap: 14, padding: '15px 14px', borderBottom: r === rows - 1 ? 'none' : '1px solid var(--border)' }}>{Array.from({ length: cols }, (_, i) => <Skeleton key={i} height={12} width={i === 0 ? '80%' : '55%'} />)}</div>)}
    </div>
  );
}
/** Skeleton for a StatTile / card: eyebrow, number and caption bars. */
export function SkeletonCard({ style }) {
  return (
    <div style={{ background: 'var(--bg1)', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: 'var(--card-pad)', display: 'grid', gap: 10, ...style }}>
      <Skeleton width="45%" height={10} /><Skeleton width="30%" height={28} /><Skeleton width="65%" height={10} />
    </div>
  );
}
