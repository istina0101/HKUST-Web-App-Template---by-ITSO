import React from 'react';
/** Filter / toggle chip. Selected chips fill navy. Use `ChipGroup` to lay several out with 8px gaps. */
export function Chip({ selected, children, onClick, disabled, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ fontFamily: 'inherit', fontSize: 'var(--text-xs)', fontWeight: 600, padding: 'var(--chip-pad)', borderRadius: 'var(--r-md)', lineHeight: 1.5, cursor: disabled ? 'not-allowed' : 'pointer',
        border: `1px solid ${selected ? 'var(--hkust-blue)' : hover ? 'var(--border-strong)' : 'var(--border)'}`,
        background: selected ? 'var(--hkust-blue)' : hover ? 'var(--bg2)' : 'var(--bg1)', color: selected ? '#fff' : 'var(--fg3)',
        opacity: disabled ? .5 : 1, transition: 'background var(--t-fast),border-color var(--t-fast),color var(--t-fast)', whiteSpace: 'nowrap', ...style }}>
      {children}
    </button>
  );
}
export function ChipGroup({ children, style }) {
  return <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', ...style }}>{children}</div>;
}
