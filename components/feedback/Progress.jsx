import React from 'react';
/** Progress. variant="bar": 6px pill track (170px wide by default) with navy fill at `value`%. variant="segments": the wizard's 4px step strip — `steps` total, `value` completed. */
export function Progress({ variant = 'bar', value = 0, steps = 3, width = 170, tone = 'brand', style }) {
  const fill = tone === 'success' ? 'var(--success)' : tone === 'warning' ? 'var(--warning)' : tone === 'danger' ? 'var(--danger)' : 'var(--action-primary)';
  if (variant === 'segments') {
    return <div role="progressbar" aria-valuenow={value} aria-valuemax={steps} style={{ display: 'flex', gap: 6, width: width === 170 ? '100%' : width, ...style }}>{Array.from({ length: steps }, (_, i) => <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < value ? fill : 'var(--bg3)', transition: 'background var(--t-base)' }} />)}</div>;
  }
  return (
    <div role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} style={{ width, height: 6, background: 'var(--bg3)', borderRadius: 'var(--r-pill)', overflow: 'hidden', ...style }}>
      <div style={{ height: '100%', width: `${Math.max(0, Math.min(100, value))}%`, background: fill, borderRadius: 'var(--r-pill)', transition: 'width var(--t-slow)' }} />
    </div>
  );
}
