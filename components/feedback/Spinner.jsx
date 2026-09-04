import React from 'react';
let injected = false;
function ensureKeyframes() {
  if (injected || typeof document === 'undefined') return; injected = true;
  const s = document.createElement('style'); s.setAttribute('data-hkust-spinner', ''); s.textContent = '@keyframes hkust-spin{to{transform:rotate(360deg)}}'; document.head.appendChild(s);
}
/** Intentional addition: ring spinner in ITSO blue. Use centred in a page or section (`center` wraps it with padding and an optional label). sizes 18 · 24 · 32. */
export function Spinner({ size = 24, center, label, style }) {
  React.useEffect(ensureKeyframes, []);
  const ring = <span role="status" aria-label={label || 'Loading'} style={{ display: 'inline-block', width: size, height: size, borderRadius: '50%', border: `${size >= 32 ? 3 : 2}px solid var(--bg3)`, borderTopColor: 'var(--action-primary)', animation: 'hkust-spin .9s linear infinite', flex: 'none', ...(!center ? style : {}) }} />;
  if (!center) return ring;
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '44px 20px', color: 'var(--fg3)', fontSize: 'var(--text-sm)', ...style }}>{ring}{label && <span>{label}</span>}</div>;
}
