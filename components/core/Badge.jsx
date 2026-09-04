import React from 'react';
import { Icon } from './Icon.jsx';
export const TINTS = {
  info: ['var(--tint-info-bg)', 'var(--tint-info-fg)', 'var(--tint-info-border)'],
  success: ['var(--tint-success-bg)', 'var(--tint-success-fg)', 'var(--tint-success-border)'],
  warning: ['var(--tint-warning-bg)', 'var(--tint-warning-fg)', 'var(--tint-warning-border)'],
  danger: ['var(--tint-danger-bg)', 'var(--tint-danger-fg)', 'var(--tint-danger-border)'],
  gold: ['var(--tint-gold-bg)', 'var(--tint-gold-fg)', 'var(--tint-gold-border)'],
  cyan: ['var(--tint-cyan-bg)', 'var(--tint-cyan-fg)', 'var(--tint-cyan-border)'],
  neutral: ['var(--tint-neutral-bg)', 'var(--tint-neutral-fg)', 'var(--tint-neutral-border)'],
};
/** Status badge: tinted background, bold 12px text, optional 13px leading icon. Tones: info · success · warning · danger · gold · cyan · neutral. */
export function Badge({ tone = 'neutral', icon, children, style, onClick, title }) {
  const [bg, fg] = TINTS[tone] || TINTS.neutral;
  return (
    <span title={title} onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 'var(--text-xs)', fontWeight: 700, padding: 'var(--badge-pad)', borderRadius: 'var(--r-md)', lineHeight: 1.4, background: bg, color: fg, whiteSpace: 'nowrap', cursor: onClick ? 'pointer' : undefined, ...style }}>
      {icon && <Icon name={icon} size={13} />}{children}
    </span>
  );
}
