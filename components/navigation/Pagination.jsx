import React from 'react';
import { Icon } from '../core/Icon.jsx';
/** Intentional addition: numbered pager in ghost-button style. Shows first/last, a window around `page`, and ellipses. `summary` renders "1–20 of 143" on the left. */
export function Pagination({ page = 1, pages = 1, onChange, summary, style }) {
  const nums = [];
  for (let i = 1; i <= pages; i++) { if (i === 1 || i === pages || Math.abs(i - page) <= 1) nums.push(i); else if (nums[nums.length - 1] !== '…') nums.push('…'); }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: summary ? 'space-between' : 'flex-end', gap: 12, fontSize: 'var(--text-xs)', ...style }}>
      {summary && <span style={{ color: 'var(--fg3)' }}>{summary}</span>}
      <div style={{ display: 'flex', gap: 4 }}>
        <PageBtn disabled={page <= 1} onClick={() => onChange && onChange(page - 1)} aria="Previous page"><Icon name="chevron-left" size={15} /></PageBtn>
        {nums.map((n, i) => n === '…' ? <span key={'e' + i} style={{ width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg4)' }}>…</span> : <PageBtn key={n} active={n === page} onClick={() => onChange && onChange(n)}>{n}</PageBtn>)}
        <PageBtn disabled={page >= pages} onClick={() => onChange && onChange(page + 1)} aria="Next page"><Icon name="chevron-right" size={15} /></PageBtn>
      </div>
    </div>
  );
}
function PageBtn({ active, disabled, onClick, children, aria }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" aria-label={aria} aria-current={active ? 'page' : undefined} disabled={disabled} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: 32, height: 32, borderRadius: 'var(--r-md)', border: `1px solid ${active ? 'transparent' : hover && !disabled ? 'var(--border-strong)' : 'var(--border)'}`, background: active ? 'var(--bg-brand-light)' : hover && !disabled ? 'var(--bg2)' : 'var(--bg1)', color: active ? 'var(--hkust-blue)' : 'var(--fg2)', fontFamily: 'inherit', fontSize: 'var(--text-xs)', fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--t-fast),border-color var(--t-fast)' }}>
      {children}
    </button>
  );
}
