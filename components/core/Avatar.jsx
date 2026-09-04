import React from 'react';
/** Square initials avatar (4px radius). size="sm" 32px (band, menus) · "lg" 52px (person header). Pass bg/fg to use a persona colour pair. */
export function Avatar({ initials, size = 'sm', bg = 'var(--bg-brand-light)', fg = 'var(--hkust-blue)', style, title }) {
  const px = typeof size === 'number' ? size : size === 'lg' ? 52 : 32;
  const lg = px >= 44;
  return (
    <div title={title} aria-label={title} style={{ width: px, height: px, borderRadius: 'var(--r-md)', background: bg, color: fg, fontWeight: 700, fontSize: lg ? 'var(--text-md)' : 'var(--text-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', letterSpacing: 'var(--tracking-tight)', flex: 'none', ...style }}>
      {initials}
    </div>
  );
}
