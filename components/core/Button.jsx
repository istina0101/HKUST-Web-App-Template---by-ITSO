import React from 'react';
import { Icon } from './Icon.jsx';
const V = {
  primary: { bg: 'var(--action-primary)', fg: '#fff', border: 'transparent', hoverBg: 'var(--action-primary-hover)' },
  ghost: { bg: 'var(--bg1)', fg: 'var(--fg2)', border: 'var(--border)', hoverBg: 'var(--bg2)', hoverBorder: 'var(--border-strong)' },
  danger: { bg: 'var(--bg1)', fg: 'var(--danger)', border: 'var(--tint-danger-border)', hoverBg: 'var(--tint-danger-bg)' },
  'danger-solid': { bg: 'var(--danger)', fg: '#fff', border: 'transparent', hoverFilter: 'brightness(.93)' },
  success: { bg: 'var(--success)', fg: '#fff', border: 'transparent', hoverFilter: 'brightness(.93)' },
  link: { bg: 'transparent', fg: 'var(--fg3)', border: 'transparent', hoverFg: 'var(--fg1)', hoverBg: 'var(--bg2)' },
};
/** Portal button. Variants primary · ghost · danger · danger-solid · success · link; sizes md (40px tall, 0 16px) · sm (32px tall, 0 11px) — the same heights as Input and Select. */
export function Button({ variant = 'primary', size = 'md', block, icon, iconRight, disabled, children, style, onClick, type = 'button', title, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const v = V[variant] || V.primary;
  const isLink = variant === 'link';
  const s = {
    display: 'inline-flex', alignItems: 'center', justifyContent: block ? 'center' : undefined, gap: isLink ? 6 : 7,
    fontFamily: 'inherit', fontSize: size === 'sm' ? 'var(--text-xs)' : 'var(--text-sm)', fontWeight: isLink ? 600 : 700,
    height: size === 'sm' ? 'var(--control-h-sm)' : 'var(--control-h)', minHeight: size === 'sm' ? 32 : 40, boxSizing: 'border-box',
    padding: isLink ? (size === 'sm' ? '0 4px' : '0 6px') : (size === 'sm' ? 'var(--btn-pad-sm)' : 'var(--btn-pad)'),
    borderRadius: 'var(--r-md)', border: `1px solid ${hover && v.hoverBorder ? v.hoverBorder : v.border}`,
    background: hover && v.hoverBg ? v.hoverBg : v.bg, color: hover && v.hoverFg ? v.hoverFg : v.fg,
    filter: hover && v.hoverFilter ? v.hoverFilter : undefined,
    cursor: disabled ? 'not-allowed' : 'pointer', whiteSpace: isLink ? 'normal' : 'nowrap', textAlign: 'left', lineHeight: 1.5,
    transition: 'background var(--t-fast),border-color var(--t-fast),color var(--t-fast)',
    transform: active && !disabled ? 'var(--press-sink)' : 'none', opacity: disabled ? .5 : 1, width: block ? '100%' : undefined,
    ...style,
  };
  const iconPx = isLink ? 15 : 16;
  return (
    <button type={type} title={title} disabled={disabled} onClick={onClick} style={s} {...rest}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
      {icon && <Icon name={icon} size={iconPx} />}{children}{iconRight && <Icon name={iconRight} size={iconPx} />}
    </button>
  );
}
