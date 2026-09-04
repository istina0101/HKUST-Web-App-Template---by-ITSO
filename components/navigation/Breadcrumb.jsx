import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Intentional addition: 12px trail with chevron separators; last item is the current page in navy. items: [{label, href?, onClick?}]. */
export function Breadcrumb({ items = [], style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', color: 'var(--fg3)', fontWeight: 600, ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last ? <span aria-current="page" style={{ color: 'var(--fg1)', fontWeight: 700 }}>{it.label}</span>
              : <a href={it.href || '#'} onClick={e => { if (it.onClick) { e.preventDefault(); it.onClick(); } }} style={{ color: 'var(--fg3)', textDecoration: 'none' }}>{it.label}</a>}
            {!last && <Icon name="chevron-right" size={13} style={{ color: 'var(--fg4)' }} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
