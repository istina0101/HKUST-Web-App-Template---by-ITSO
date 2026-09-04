import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
function useNarrow(bp) {
  const check = () => { if (!bp || typeof window === 'undefined') return false; const w = window.innerWidth; if (!w) return false; return w <= bp; };
  const [n, setN] = React.useState(check);
  React.useEffect(() => {
    const f = () => setN(check());
    f(); const t = setTimeout(f, 0); const r = requestAnimationFrame(f);
    window.addEventListener('resize', f);
    let ro = null; if (typeof ResizeObserver !== 'undefined') { ro = new ResizeObserver(f); ro.observe(document.documentElement); }
    return () => { clearTimeout(t); cancelAnimationFrame(r); window.removeEventListener('resize', f); if (ro) ro.disconnect(); };
  }, [bp]);
  return n;
}
/** Portal data table. columns: [{key,label,align?,width?,render?(row),sortable?,muted?,nowrap?}]; rows: objects. Header 11px uppercase on pale grey; cells 13px 14px; rows hover pale; `emphasis` column key renders bold navy. `subRows(row)` returns nested rows shown indented on grey (bundle expand).
 *  Additions: `sort` {key, dir:'asc'|'desc'} + `onSort(key)` make columns flagged `sortable` clickable (▲▼ always shown, active one navy); `selectable` adds a checkbox column — `selected` is the set of row keys, `onSelectionChange(keys)` receives the new set; pair with BulkBar.
 *  `responsive` (default true): at ≤760px each row stacks into a block (bold first cell, then label · value lines) separated by hairlines, so it sits cleanly inside a flush Card. */
export function Table({ columns = [], rows = [], rowKey, emphasis, subRows, expanded = {}, onRowClick, sort, onSort, selectable, selected = [], onSelectionChange, responsive = true, breakpoint = 760, style }) {
  const narrow = useNarrow(breakpoint) && responsive;
  const keyOf = (r, i) => rowKey ? rowKey(r, i) : i;
  const isSel = k => selected.includes(k);
  const toggle = k => onSelectionChange && onSelectionChange(isSel(k) ? selected.filter(x => x !== k) : [...selected, k]);
  const allKeys = rows.map(keyOf); const allOn = rows.length > 0 && allKeys.every(isSel); const someOn = allKeys.some(isSel);
  const toggleAll = () => onSelectionChange && onSelectionChange(allOn ? selected.filter(k => !allKeys.includes(k)) : Array.from(new Set([...selected, ...allKeys])));
  const cols = selectable ? [{ key: '__sel', label: <Checkbox checked={allOn} indeterminate={!allOn && someOn} onChange={toggleAll} />, width: 42, render: (r, i) => <Checkbox checked={isSel(keyOf(r, i))} onChange={() => toggle(keyOf(r, i))} /> }, ...columns] : columns;
  if (narrow) {
    return (
      <div style={{ ...style }}>
        {rows.map((r, i) => {
          const k = keyOf(r, i);
          const cells = columns.map(c => ({ c, v: c.render ? c.render(r, i) : r[c.key] })).filter(x => x.v !== undefined && x.v !== null && x.v !== '');
          return (
            <div key={k} onClick={onRowClick ? () => onRowClick(r) : undefined} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border)', padding: '6px 0 8px', cursor: onRowClick ? 'pointer' : undefined, background: selectable && isSel(k) ? 'var(--bg-brand-light)' : 'transparent' }}>
              {cells.map(({ c, v }, ci) => ci === 0
                ? <div key={c.key} style={{ padding: '8px 14px 6px', fontWeight: 700, color: 'var(--fg1)', fontSize: 'var(--text-sm)', display: 'flex', alignItems: 'center', gap: 10 }}>{selectable && <Checkbox checked={isSel(k)} onChange={() => toggle(k)} />}<span style={{ minWidth: 0 }}>{v}</span></div>
                : <div key={c.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, padding: '5px 14px', fontSize: 'var(--text-sm)', textAlign: 'right' }}>{c.label ? <span style={{ fontWeight: 700, color: 'var(--fg3)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: '.05em', flex: 'none', textAlign: 'left' }}>{c.label}</span> : <span />}<span style={{ minWidth: 0 }}>{v}</span></div>)}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)', ...style }}>
        <thead><tr>{cols.map(c => <Th key={c.key} c={c} sort={sort} onSort={onSort} />)}</tr></thead>
        <tbody>
          {rows.map((r, i) => {
            const k = keyOf(r, i);
            const kids = subRows && expanded[k] ? subRows(r) || [] : [];
            return (
              <React.Fragment key={k}>
                <Row row={r} index={i} columns={cols} emphasis={emphasis} selectedRow={selectable && isSel(k)} onClick={onRowClick ? () => onRowClick(r) : undefined} last={i === rows.length - 1 && !kids.length} />
                {kids.map((kr, j) => <Row key={k + '-' + j} row={kr} index={j} columns={cols} emphasis={emphasis} sub last={i === rows.length - 1 && j === kids.length - 1} />)}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
function Th({ c, sort, onSort }) {
  const [hover, setHover] = React.useState(false);
  const active = sort && sort.key === c.key;
  const base = { textAlign: c.align || 'left', fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-table)', textTransform: 'uppercase', color: active ? 'var(--fg1)' : 'var(--fg3)', background: hover && c.sortable ? 'var(--bg3)' : 'var(--bg2)', padding: 'var(--table-head-pad)', borderBottom: '1px solid var(--border)', width: c.width, whiteSpace: 'nowrap', cursor: c.sortable ? 'pointer' : undefined, userSelect: 'none', transition: 'background var(--t-fast)' };
  if (!c.sortable) return <th style={base}>{c.label}</th>;
  return (
    <th style={base} aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'} onClick={() => onSort && onSort(c.key)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, flexDirection: c.align === 'right' ? 'row-reverse' : 'row' }}>{c.label}
        <span aria-hidden="true" style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0, gap: 1 }}>
          <Icon name="chevron-up" size={9} style={{ color: active && sort.dir === 'asc' ? 'var(--itso-blue-dark)' : 'var(--border-strong)' }} />
          <Icon name="chevron-down" size={9} style={{ color: active && sort.dir === 'desc' ? 'var(--itso-blue-dark)' : 'var(--border-strong)' }} />
        </span>
      </span>
    </th>
  );
}
function Row({ row, index, columns, emphasis, onClick, sub, last, selectedRow }) {
  const [hover, setHover] = React.useState(false);
  return (
    <tr onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ background: selectedRow ? 'var(--bg-brand-light)' : sub ? 'var(--bg2)' : hover ? 'var(--bg2)' : 'transparent', cursor: onClick ? 'pointer' : undefined, transition: 'background var(--t-fast)' }}>
      {columns.map((c, ci) => {
        const v = c.render ? c.render(row, index) : row[c.key];
        return <td key={c.key} onClick={c.key === '__sel' ? e => e.stopPropagation() : undefined} style={{ padding: sub && ci === 0 ? '13px 14px 13px 40px' : c.key === '__sel' ? '13px 6px 13px 14px' : 'var(--table-cell-pad)', borderBottom: last ? 'none' : '1px solid var(--border)', verticalAlign: 'middle', textAlign: c.align || 'left', fontWeight: c.key === emphasis ? 700 : undefined, color: c.key === emphasis ? 'var(--fg1)' : c.muted ? 'var(--fg3)' : undefined, whiteSpace: c.nowrap ? 'nowrap' : undefined, width: c.width }}>{v}</td>;
      })}
    </tr>
  );
}
/** Sort helper for consumers: returns rows ordered by `sort` ({key, dir}); strings compare case-insensitively, numbers numerically. Capitalised so the bundle exposes it. */
export function SortRows(rows, sort) {
  if (!sort || !sort.key) return rows;
  const dir = sort.dir === 'desc' ? -1 : 1;
  return [...rows].sort((a, b) => { const x = a[sort.key], y = b[sort.key]; if (x == null) return 1; if (y == null) return -1; if (typeof x === 'number' && typeof y === 'number') return (x - y) * dir; return String(x).localeCompare(String(y), undefined, { sensitivity: 'base', numeric: true }) * dir; });
}
/** Bar above a selectable table: "N selected" + actions, Clear on the right. Renders nothing when count is 0. */
export function BulkBar({ count = 0, children, onClear, style }) {
  if (!count) return null;
  return (
    <div role="toolbar" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 14px', background: 'var(--bg-brand-light)', border: '1px solid var(--tint-info-border)', borderRadius: 'var(--r-md)', marginBottom: 12, fontSize: 'var(--text-sm)', flexWrap: 'wrap', ...style }}>
      <span style={{ fontWeight: 700, color: 'var(--hkust-blue)', marginRight: 4 }}>{count} selected</span>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{children}</div>
      {onClear && <button type="button" onClick={onClear} style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--fg3)', fontFamily: 'inherit', fontSize: 'var(--text-xs)', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 4 }}><Icon name="x" size={14} />Clear</button>}
    </div>
  );
}
export const sortRows = SortRows;
