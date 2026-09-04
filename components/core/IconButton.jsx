import React from 'react';
import { Icon } from './Icon.jsx';
/** 36×36 square icon button. tone="navy" for the top band (pale icon, white on hover), tone="light" for white surfaces. `dot` shows the orange unread pip; `count` shows an orange counter. */
export function IconButton({ icon, tone = 'navy', dot, count, title, onClick, size = 36, iconSize = 18, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const navy = tone === 'navy';
  const s = {
    position: 'relative', width: size, height: size, border: 'none', borderRadius: 'var(--r-md)', cursor: 'pointer', padding: 0,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'inherit',
    background: hover ? (navy ? 'var(--on-navy-hover)' : 'var(--bg2)') : 'transparent',
    color: navy ? (hover ? '#fff' : 'var(--on-navy-icon)') : (hover ? 'var(--fg1)' : 'var(--fg3)'),
    transition: 'background var(--t-fast),color var(--t-fast)', ...style,
  };
  return (
    <button type="button" title={title} aria-label={title} onClick={onClick} style={s} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}>
      <Icon name={icon} size={iconSize} />
      {dot && <span style={{ position: 'absolute', top: 7, right: 8, width: 7, height: 7, background: 'var(--itso-orange)', borderRadius: '50%', border: `1.5px solid ${navy ? 'var(--hkust-blue)' : 'var(--bg1)'}` }} />}
      {count != null && count !== '' && <span style={{ position: 'absolute', top: 3, right: 3, minWidth: 16, height: 16, padding: '0 3px', background: 'var(--itso-orange)', color: '#fff', fontSize: 'var(--text-2xs)', fontWeight: 700, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>{count}</span>}
    </button>
  );
}
