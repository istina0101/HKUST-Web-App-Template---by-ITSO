import React from 'react';
const SERIES = ['var(--viz-1)', 'var(--viz-2)', 'var(--viz-3)', 'var(--viz-4)', 'var(--viz-5)', 'var(--viz-6)'];
/** Shared hover tooltip for the SVG charts: white card with hairline border and medium shadow (contrasts with every series colour), navy title, muted series names. */
export function ChartTooltip({ tip }) {
  if (!tip) return null;
  return (
    <div role="tooltip" style={{ position: 'absolute', left: tip.x, top: tip.y, transform: 'translate(-50%,calc(-100% - 10px))', background: 'var(--bg1)', color: 'var(--fg2)', border: '1px solid var(--border)', fontSize: 'var(--text-xs)', padding: '6px 10px', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 2, lineHeight: 1.5 }}>
      <div style={{ fontWeight: 700, color: 'var(--fg1)' }}>{tip.title}</div>
      {tip.rows.map((r, i) => <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{r.color && <span style={{ width: 8, height: 8, borderRadius: 2, background: r.color, display: 'inline-block' }} />}{r.name && <span style={{ color: 'var(--fg3)' }}>{r.name}</span>}<span style={{ fontWeight: 700, color: 'var(--fg1)' }}>{r.value}</span></div>)}
    </div>
  );
}
/** Intentional addition: dependency-free SVG bar chart. data: [{label, value, value2?}] — a second value renders grouped bars in viz-2. Square corners, 4 horizontal grid lines, 11px grey labels. Hovering a bar dims the others and shows a navy tooltip (matches the Chart.js theme). */
export function BarChart({ data = [], height = 200, max, showValues, colors = SERIES, formatValue = v => v, seriesNames = ['Value', 'Value 2'], style }) {
  const ref = React.useRef(null); const [W, setW] = React.useState(600); const [hover, setHover] = React.useState(null);
  React.useEffect(() => { const el = ref.current; if (!el) return; const m = () => setW(Math.max(200, Math.round(el.getBoundingClientRect().width) || 600)); m(); const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(m) : null; if (ro) ro.observe(el); return () => ro && ro.disconnect(); }, []);
  const H = height, padL = 36, padB = 26, padT = showValues ? 18 : 8;
  const grouped = data.some(d => d.value2 != null);
  const m = max || Math.max(1, ...data.flatMap(d => [d.value, d.value2 || 0])) * 1.1;
  const plotH = H - padB - padT, plotW = W - padL - 8;
  const slot = plotW / Math.max(1, data.length);
  const barW = grouped ? slot * .3 : slot * .56;
  const y = v => padT + plotH - (v / m) * plotH;
  const d0 = hover != null ? data[hover] : null;
  const tip = d0 ? { x: padL + slot * hover + slot / 2, y: y(Math.max(d0.value, d0.value2 || 0)), title: d0.label, rows: grouped ? [{ name: seriesNames[0], value: formatValue(d0.value), color: colors[0] }, { name: seriesNames[1], value: formatValue(d0.value2), color: colors[1] }] : [{ value: formatValue(d0.value) }] } : null;
  return (
    <div ref={ref} style={{ position: 'relative', ...style }} onMouseLeave={() => setHover(null)}>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', fontFamily: 'inherit' }} role="img" aria-label="Bar chart">
        {[0, .25, .5, .75, 1].map(f => <g key={f}><line x1={padL} x2={W - 8} y1={y(m * f)} y2={y(m * f)} stroke="var(--viz-grid)" strokeWidth="1" /><text x={padL - 8} y={y(m * f) + 4} textAnchor="end" fontSize="11" fill="var(--viz-axis)">{formatValue(Math.round(m * f))}</text></g>)}
        {data.map((d, i) => {
          const cx = padL + slot * i + slot / 2;
          const bars = grouped ? [[d.value, cx - barW - 2, colors[0]], [d.value2, cx + 2, colors[1]]] : [[d.value, cx - barW / 2, d.color || colors[0]]];
          const dim = hover != null && hover !== i;
          return (
            <g key={i} onMouseEnter={() => setHover(i)} style={{ cursor: 'default' }}>
              <rect x={padL + slot * i} y={padT} width={slot} height={plotH} fill="transparent" />
              {bars.map(([v, x, c], j) => <g key={j}><rect x={x} y={y(v)} width={barW} height={Math.max(0, padT + plotH - y(v))} fill={c} opacity={dim ? .35 : 1} style={{ transition: 'opacity var(--t-fast)' }} />{showValues && <text x={x + barW / 2} y={y(v) - 5} textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--fg2)" opacity={dim ? .35 : 1}>{formatValue(v)}</text>}</g>)}
              <text x={cx} y={H - 8} textAnchor="middle" fontSize="11" fill={hover === i ? 'var(--fg1)' : 'var(--viz-axis)'} fontWeight={hover === i ? 700 : 400}>{d.label}</text>
            </g>
          );
        })}
        <line x1={padL} x2={W - 8} y1={padT + plotH} y2={padT + plotH} stroke="var(--border-strong)" strokeWidth="1" />
      </svg>
      <ChartTooltip tip={tip} />
    </div>
  );
}
