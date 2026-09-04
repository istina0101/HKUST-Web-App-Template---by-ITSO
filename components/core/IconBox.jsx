import React from 'react';
import { Icon } from './Icon.jsx';
const TONES = {
  navy: ['var(--tint-info-bg)', 'var(--itso-blue-dark)'],
  gold: ['var(--tint-gold-bg)', 'var(--hkust-gold)'],
  green: ['var(--tint-success-bg)', 'var(--success)'],
  red: ['var(--tint-danger-bg)', 'var(--danger)'],
  cyan: ['var(--tint-cyan-bg)', 'var(--tint-cyan-fg)'],
  gray: ['var(--tint-neutral-bg)', 'var(--fg3)'],
};
/** Tinted square holding one icon. size 42 (default, 22px icon) · 34 / 30 (15px icon). Tones: navy · gold · green · red · cyan · gray. */
export function IconBox({ icon, tone = 'navy', size = 42, style }) {
  const [bg, fg] = TONES[tone] || TONES.navy;
  const iconPx = size >= 40 ? 22 : 15;
  return (
    <div style={{ width: size, height: size, borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none', background: bg, color: fg, ...style }}>
      <Icon name={icon} size={iconPx} />
    </div>
  );
}
