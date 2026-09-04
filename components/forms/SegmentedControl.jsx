import React from 'react';
const ON = { brand: ['var(--tint-info-bg)', 'var(--tint-info-fg)'], success: ['var(--tint-success-bg)', 'var(--tint-success-fg)'], danger: ['var(--tint-danger-bg)', 'var(--tint-danger-fg)'] };
/** Joined button group for a one-of decision (Keep / Revoke). Each option: {value,label,tone?} — tone colours the selected state (brand · success · danger). */
export function SegmentedControl({ options = [], value, onChange, size = 'md', style }) {
  return (
    <div style={{ display: 'inline-flex', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', overflow: 'hidden', ...style }}>
      {options.map((o, i) => {
        const on = o.value === value; const [bg, fg] = ON[o.tone || 'brand'];
        return (
          <button key={o.value} type="button" onClick={() => onChange && onChange(o.value)}
            style={{ padding: size === 'sm' ? '5px 13px' : '8px 14px', fontSize: 'var(--text-xs)', fontWeight: 700, background: on ? bg : '#fff', color: on ? fg : 'var(--fg3)', border: 'none', borderLeft: i ? '1px solid var(--border)' : 'none', cursor: 'pointer', fontFamily: 'inherit', lineHeight: 1.5, transition: 'background var(--t-fast),color var(--t-fast)' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
