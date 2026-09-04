import React from 'react';
/** Native radio with navy accent colour and an optional inline label. */
export function Radio({ checked, onChange, name, value, label, disabled, style }) {
  const input = <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ accentColor: 'var(--action-primary)', width: 16, height: 16, margin: 0, cursor: disabled ? 'not-allowed' : 'pointer' }} />;
  if (!label) return input;
  return <label style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontSize: 'var(--text-sm)', color: disabled ? 'var(--fg4)' : 'var(--fg2)', cursor: disabled ? 'not-allowed' : 'pointer', ...style }}>{input}{label}</label>;
}
