import React from 'react';
import { ChartTooltip } from './BarChart.jsx';
const SERIES = ['var(--viz-1)', 'var(--viz-2)', 'var(--viz-3)', 'var(--viz-4)', 'var(--viz-5)', 'var(--viz-6)'];
/** Intentional addition: dependency-free SVG line chart. series: [{name, values:[...]}]; labels: x labels. 2px strokes, 3px dots, optional 8%-opacity area under the first series. Hovering a column shows a guide line, enlarged dots and a navy tooltip with every series' value (matches the Chart.js theme). */
export function LineChart({ series = [], labels = [], height = 200, max, area = true, colors = SERIES, formatValue = v => v, legend = true, style }) {
  const ref = React.useRef(null); const [W, setW] = React.useState(600); const [hover, setHover] = React.useState(null);
  React.useEffect(() => { const el = ref.current; if (!el) return; const m = () => setW(Math.max(120, Math.round(el.getBoundingClientRect().width) || 600)); m(); const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(m) : null; if (ro) ro.observe(el); return () => ro && ro.disconnect(); }, []);
  const H = height, padL = 36, padB = 26, padT = 10, padR = 12;
  const m = max || Math.max(1, ...series.flatMap(s => s.values)) * 1.1;
  const plotH = H - padB - padT, plotW = W - padL - padR;
  const n = Math.max(2, labels.length || (series[0] && series[0].values.length) || 2);
  const x = i => padL + (i / (n - 1)) * plotW, y = v => padT + plotH - (v / m) * plotH;
  const col = (s, i) => s.color || colors[i % colors.length];
  const tip = hover != null ? { x: x(hover), y: Math.min(...series.map(s => y(s.values[hover] ?? 0))), title: labels[hover], rows: series.map((s, i) => ({ name: s.name, value: formatValue(s.values[hover]), color: col(s, i) })) } : null;
  return (
    <div ref={ref} style={{ position: 'relative', ...style }} onMouseLeave={() => setHover(null)}>
      <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" style={{ display: 'block', fontFamily: 'inherit' }} role="img" aria-label="Line chart">
        {[0, .25, .5, .75, 1].map(f => <g key={f}><line x1={padL} x2={W - padR} y1={y(m * f)} y2={y(m * f)} stroke="var(--viz-grid)" strokeWidth="1" /><text x={padL - 8} y={y(m * f) + 4} textAnchor="end" fontSize="11" fill="var(--viz-axis)">{formatValue(Math.round(m * f))}</text></g>)}
        {labels.map((l, i) => <text key={i} x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill={hover === i ? 'var(--fg1)' : 'var(--viz-axis)'} fontWeight={hover === i ? 700 : 400}>{l}</text>)}
        {hover != null && <line x1={x(hover)} x2={x(hover)} y1={padT} y2={padT + plotH} stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="3 3" />}
        {series.map((s, si) => {
          const pts = s.values.map((v, i) => `${x(i)},${y(v)}`).join(' ');
          const c = col(s, si);
          return (
            <g key={si}>
              {area && si === 0 && <polygon points={`${x(0)},${y(0)} ${pts} ${x(s.values.length - 1)},${y(0)}`} fill={c} opacity=".08" />}
              <polyline points={pts} fill="none" stroke={c} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
              {s.values.map((v, i) => <circle key={i} cx={x(i)} cy={y(v)} r={hover === i ? 5 : 3} fill="#fff" stroke={c} strokeWidth="2" style={{ transition: 'r var(--t-fast)' }} />)}
            </g>
          );
        })}
        {labels.map((_, i) => <rect key={'h' + i} x={x(i) - plotW / (n - 1) / 2} y={padT} width={plotW / (n - 1)} height={plotH} fill="transparent" onMouseEnter={() => setHover(i)} />)}
        <line x1={padL} x2={W - padR} y1={padT + plotH} y2={padT + plotH} stroke="var(--border-strong)" strokeWidth="1" />
      </svg>
      <ChartTooltip tip={tip} />
      {legend && series.length > 1 && <div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 'var(--text-xs)', color: 'var(--fg3)', flexWrap: 'wrap' }}>{series.map((s, i) => <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: col(s, i) }} />{s.name}</span>)}</div>}
    </div>
  );
}
