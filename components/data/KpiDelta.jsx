import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Intentional addition: change indicator for KPIs. `value` is the delta (e.g. "+12%"); `direction` up | down | flat sets icon and tint; `invert` makes "down" the good outcome (errors, cost). */
export function KpiDelta({ value, direction = 'flat', invert, label, style }) {
  const good = direction === 'flat' ? null : (direction === 'up') !== !!invert;
  const bg = good == null ? 'var(--tint-neutral-bg)' : good ? 'var(--tint-success-bg)' : 'var(--tint-danger-bg)';
  const fg = good == null ? 'var(--tint-neutral-fg)' : good ? 'var(--tint-success-fg)' : 'var(--tint-danger-fg)';
  const glyph = direction === 'up' ? 'trending-up' : direction === 'down' ? 'trending-down' : 'arrow-right';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', flexWrap: 'wrap', rowGap: 4, ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: bg, color: fg, fontWeight: 700, padding: '2px 7px', borderRadius: 'var(--r-md)', lineHeight: 1.5, whiteSpace: 'nowrap', flex: 'none' }}><Icon name={glyph} size={13} />{value}</span>
      {label && <span style={{ color: 'var(--fg3)' }}>{label}</span>}
    </span>
  );
}
