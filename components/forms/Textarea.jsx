import React from 'react';
import { useFocusStyle } from './Input.jsx';
/** Multi-line input; vertical resize only. */
export function Textarea({ rows = 3, invalid, style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  const base = useFocusStyle(focused, invalid);
  return <textarea rows={rows} {...rest} onFocus={e => { setFocused(true); rest.onFocus && rest.onFocus(e); }} onBlur={e => { setFocused(false); rest.onBlur && rest.onBlur(e); }} style={{ ...base, height: 'auto', minHeight: 'var(--control-h)', padding: '10px 13px', lineHeight: 1.5, resize: 'vertical', ...style }} />;
}
