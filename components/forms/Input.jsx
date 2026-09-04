import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function useFocusStyle(focused, invalid) {
  return {
    width: '100%', border: `1px solid ${invalid ? 'var(--danger)' : focused ? 'var(--action-primary)' : 'var(--border)'}`, borderRadius: 'var(--r-md)', padding: '0 13px', height: 'var(--control-h)', minHeight: 40, boxSizing: 'border-box', margin: 0, appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'textfield',
    fontFamily: 'inherit', fontSize: 'var(--text-sm)', lineHeight: '20px', color: 'var(--fg2)', background: 'var(--bg1)', outline: 'none', display: 'block',
    boxShadow: focused ? `0 0 0 3px ${invalid ? 'rgba(237,27,47,.12)' : 'var(--focus-ring)'}` : 'none', transition: 'border-color var(--t-fast),box-shadow var(--t-fast)',
  };
}
/** Text input. `icon` adds an 18px leading Lucide glyph (padding-left 38px). Focus = navy border + 3px 12% ring. */
export function Input({ icon, invalid, style, wrapStyle, type = 'text', ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const base = useFocusStyle(focused, invalid);
  const input = <input type={type} {...rest} onFocus={e => { setFocused(true); rest.onFocus && rest.onFocus(e); }} onBlur={e => { setFocused(false); rest.onBlur && rest.onBlur(e); }} style={{ ...base, ...(icon ? { paddingLeft: 'var(--input-pad-icon)', paddingRight: 13 } : {}), ...style }} />;
  if (!icon) return input;
  return (
    <div style={{ position: 'relative', ...wrapStyle }}>
      <Icon name={icon} size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--fg4)', pointerEvents: 'none' }} />
      {input}
    </div>
  );
}
