import React from 'react';
/** White page header under the band: 20px bold title, 14px muted subtitle, optional right actions. Sticky by default. Inset shrinks from 18px 32px to 14px 16px on narrow screens (portal behaviour). */
export function PageHead({ title, subtitle, actions, sticky = true, style }) {
  return (
    <div style={{ background: 'var(--bg1)', borderBottom: '1px solid var(--border)', padding: 'clamp(14px,2vw,18px) clamp(16px,3.5vw,32px)', position: sticky ? 'sticky' : 'relative', top: sticky ? 'var(--band-h)' : undefined, zIndex: 'var(--z-pagehead)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', ...style }}>
      <div style={{ minWidth: 0 }}><h1 style={{ fontSize: 'var(--type-page-title-size)', fontWeight: 700, color: 'var(--fg1)', margin: 0, lineHeight: 1.2 }}>{title}</h1>{subtitle && <div style={{ color: 'var(--fg3)', fontSize: 'var(--text-sm)', marginTop: 3 }}>{subtitle}</div>}</div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none' }}>{actions}</div>}
    </div>
  );
}
