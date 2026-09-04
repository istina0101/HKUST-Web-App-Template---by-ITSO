import React from 'react';
/** Audit / activity rows: 150px grey timestamp, 14px body, optional 12px muted meta line. items: [{time, text, meta?}]. */
export function ActivityList({ items = [], timeWidth = 150, style }) {
  return (
    <div style={style}>
      {items.map((it, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--border)', fontSize: 'var(--text-sm)' }}>
          <div style={{ color: 'var(--fg4)', fontSize: 'var(--text-xs)', flex: 'none', width: timeWidth, lineHeight: 1.6 }}>{it.time}</div>
          <div style={{ minWidth: 0 }}><div style={{ color: 'var(--fg2)' }}>{it.text}</div>{it.meta && <div style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 2 }}>{it.meta}</div>}</div>
        </div>
      ))}
    </div>
  );
}
