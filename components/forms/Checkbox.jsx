import React from 'react';
/** Native checkbox with navy accent colour and an optional inline label. */
export function Checkbox({ checked, onChange, label, disabled, indeterminate, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = !!indeterminate; }, [indeterminate]);
  const input = <input ref={ref} type="checkbox" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ accentColor: 'var(--action-primary)', width: 16, height: 16, margin: 0, cursor: disabled ? 'not-allowed' : 'pointer' }} />;
  if (!label) return input;
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 'var(--text-sm)', color: disabled ? 'var(--fg4)' : 'var(--fg2)', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>{input}{label}</label>;
}
