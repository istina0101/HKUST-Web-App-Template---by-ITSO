import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Centred empty state: 30px grey icon, 14px bold title, muted line, optional action. Place inside a Card. */
export function EmptyState({ icon = 'inbox', title, children, action, style }) {
  return (
    <div style={{ padding: '44px 20px', textAlign: 'center', color: 'var(--fg3)', ...style }}>
      <Icon name={icon} size={30} style={{ color: 'var(--fg4)', margin: '0 auto 10px', display: 'block' }} />
      {title && <div style={{ fontWeight: 700, color: 'var(--fg2)', fontSize: 'var(--text-sm)', marginBottom: 4 }}>{title}</div>}
      {children && <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>{children}</p>}
      {action && <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center', gap: 8 }}>{action}</div>}
    </div>
  );
}
