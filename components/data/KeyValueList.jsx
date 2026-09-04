import React from 'react';
/** Definition list: 150px muted key column, 14px, 7px rows with hairline dividers. items: [{k, v}] — `v` may be a React node (Badge). */
export function KeyValueList({ items = [], keyWidth = 150, style }) {
  return (
    <div style={style}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', gap: 14, padding: '7px 0', fontSize: 'var(--text-sm)', borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border)', alignItems: 'flex-start' }}>
          <div style={{ color: 'var(--fg3)', width: keyWidth, flex: 'none', fontWeight: 600 }}>{it.k}</div>
          <div style={{ color: 'var(--fg2)', minWidth: 0 }}>{it.v}</div>
        </div>
      ))}
    </div>
  );
}
