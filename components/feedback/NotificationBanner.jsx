import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T = {
  info: { bg: 'var(--tint-info-bg)', border: 'var(--tint-info-border)', fg: 'var(--tint-info-fg)', icon: 'var(--info)', glyph: 'info' },
  success: { bg: 'var(--tint-success-bg)', border: 'var(--tint-success-border)', fg: 'var(--tint-success-fg)', icon: 'var(--success)', glyph: 'check-circle-2' },
  warning: { bg: 'var(--tint-warning-bg)', border: 'var(--tint-warning-border)', fg: 'var(--tint-warning-fg)', icon: 'var(--warning)', glyph: 'triangle-alert' },
  danger: { bg: 'var(--tint-danger-bg)', border: 'var(--tint-danger-border)', fg: 'var(--tint-danger-fg)', icon: 'var(--danger)', glyph: 'circle-alert' },
};
/** Intentional addition: full-width page notice under the band (maintenance, session expiry, outage). Tinted like Callout, one line with optional action, always dismissible. */
export function NotificationBanner({ tone = 'info', icon, title, children, action, onDismiss, open = true, style }) {
  const [closed, setClosed] = React.useState(false);
  if (!open || closed) return null;
  const t = T[tone] || T.info;
  return (
    <div role={tone === 'danger' || tone === 'warning' ? 'alert' : 'status'} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px clamp(16px,3.5vw,32px)', background: t.bg, borderBottom: `1px solid ${t.border}`, color: t.fg, fontSize: 'var(--text-sm)', ...style }}>
      <Icon name={icon || t.glyph} size={18} style={{ color: t.icon }} />
      <div style={{ flex: 1, minWidth: 0 }}>{title && <b style={{ fontWeight: 700, marginRight: 6 }}>{title}</b>}{children}</div>
      {action && <div style={{ flex: 'none' }}>{action}</div>}
      <button type="button" aria-label="Dismiss" onClick={() => { setClosed(true); onDismiss && onDismiss(); }} style={{ background: 'none', border: 'none', color: t.fg, opacity: .7, cursor: 'pointer', padding: 4, display: 'inline-flex', flex: 'none', borderRadius: 'var(--r-md)' }}><Icon name="x" size={16} /></button>
    </div>
  );
}
