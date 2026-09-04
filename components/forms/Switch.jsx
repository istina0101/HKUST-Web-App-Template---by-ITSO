import React from 'react';
/** 38×22 toggle with 18px knob. Label sits right in 14px semibold. */
export function Switch({ checked = false, onChange, label, disabled, style }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer', fontSize: 'var(--text-sm)', color: 'var(--fg2)', fontWeight: 600, opacity: disabled ? .5 : 1, ...style }}>
      <input type="checkbox" checked={checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ display: 'none' }} />
      <span style={{ width: 38, height: 22, background: checked ? 'var(--action-primary)' : 'var(--border-strong)', borderRadius: 'var(--r-pill)', position: 'relative', transition: 'background var(--t-base)', flex: 'none' }}>
        <span style={{ position: 'absolute', top: 2, left: checked ? 18 : 2, width: 18, height: 18, background: '#fff', borderRadius: '50%', transition: 'left var(--t-base)', boxShadow: 'var(--shadow-sm)' }} />
      </span>
      {label}
    </label>
  );
}
