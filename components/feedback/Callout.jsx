import React from 'react';
import { Icon } from '../core/Icon.jsx';
const T = {
  info: { bg: 'var(--tint-info-bg)', border: 'var(--tint-info-border)', fg: 'var(--tint-info-fg)', icon: 'var(--info)', glyph: 'info' },
  success: { bg: 'var(--tint-success-bg)', border: 'var(--tint-success-border)', fg: 'var(--tint-success-fg)', icon: 'var(--success)', glyph: 'shield-check' },
  warning: { bg: 'var(--tint-warning-bg)', border: 'var(--tint-warning-border)', fg: 'var(--tint-warning-fg)', icon: 'var(--warning)', glyph: 'triangle-alert' },
  danger: { bg: 'var(--tint-danger-bg)', border: 'var(--tint-danger-border)', fg: 'var(--tint-danger-fg)', icon: 'var(--danger)', glyph: 'circle-alert' },
};
/** Inline message box: tinted fill, 1px tinted border, 18px icon, 14px text. Tones info · success · warning · danger. */
export function Callout({ tone = 'info', icon, children, style }) {
  const t = T[tone] || T.info;
  return (
    <div role={tone === 'danger' || tone === 'warning' ? 'alert' : 'status'} style={{ display: 'flex', gap: 11, padding: 'var(--callout-pad)', borderRadius: 'var(--r-md)', fontSize: 'var(--text-sm)', border: `1px solid ${t.border}`, background: t.bg, color: t.fg, ...style }}>
      <Icon name={icon || t.glyph} size={18} style={{ marginTop: 1, color: t.icon }} />
      <p style={{ lineHeight: 1.5, margin: 0 }}>{children}</p>
    </div>
  );
}
