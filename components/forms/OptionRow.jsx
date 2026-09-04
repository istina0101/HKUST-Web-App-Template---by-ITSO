import React from 'react';
/** Bordered selectable row wrapping a native radio or checkbox: title, optional description and trailing slot (badge). Hover turns the border navy. */
export function OptionRow({ type = 'radio', name, checked, onChange, title, description, trailing, children, value, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <label onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 13px', border: `1px solid ${hover ? 'var(--action-primary)' : 'var(--border)'}`, borderRadius: 'var(--r-md)', cursor: 'pointer', marginBottom: 9, background: hover ? 'var(--bg2)' : 'transparent', transition: 'border-color var(--t-fast),background var(--t-fast)', fontSize: 'var(--text-sm)', color: 'var(--fg2)', ...style }}>
      <input type={type} name={name} value={value} checked={checked} onChange={e => onChange && onChange(e.target.checked, value)} style={{ accentColor: 'var(--action-primary)', width: 16, height: 16, margin: 0, flex: 'none' }} />
      <span style={{ flex: 1 }}>
        {title && <b style={{ color: 'var(--fg1)', fontWeight: 700 }}>{title}</b>}{title && description && <br />}
        {description && <span style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)' }}>{description}</span>}
        {children}
      </span>
      {trailing}
    </label>
  );
}
