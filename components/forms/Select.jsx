import React from 'react';
import { useFocusStyle } from './Input.jsx';
/** Native select styled like Input. `options` = strings or {value,label}. size="sm" is the compact inline variant used in cart rows (5px 9px, 12px). */
export function Select({ options = [], size = 'md', invalid, style, children, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const base = useFocusStyle(focused, invalid);
  const sm = size === 'sm';
  return (
    <select {...rest} onFocus={e => { setFocused(true); rest.onFocus && rest.onFocus(e); }} onBlur={e => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
      style={{ ...base, width: sm ? 'auto' : '100%', height: sm ? 'var(--control-h-sm)' : base.height, padding: sm ? '0 28px 0 9px' : '0 34px 0 13px', fontSize: sm ? 'var(--text-xs)' : base.fontSize, backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235a6478' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: sm ? 'right 8px center' : 'right 12px center', cursor: 'pointer', ...style }}>
      {options.map(o => typeof o === 'string' ? <option key={o} value={o}>{o}</option> : <option key={o.value} value={o.value}>{o.label}</option>)}{children}
    </select>
  );
}
