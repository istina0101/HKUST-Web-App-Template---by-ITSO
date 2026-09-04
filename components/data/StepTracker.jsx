import React from 'react';
import { Icon } from '../core/Icon.jsx';
const ST = {
  done: { bg: 'var(--success)', border: 'var(--success)', glyph: 'check', label: 'var(--fg3)', weight: 600 },
  active: { bg: 'var(--itso-blue-dark)', border: 'var(--itso-blue-dark)', glyph: 'clock', label: 'var(--itso-blue-dark)', weight: 700 },
  error: { bg: 'var(--danger)', border: 'var(--danger)', glyph: 'x', label: 'var(--danger)', weight: 700 },
  pending: { bg: 'var(--bg3)', border: 'var(--border)', glyph: null, label: 'var(--fg3)', weight: 600 },
};
/** Approval-route tracker: 30px dots joined by 3px bars. steps: [{label, state: done|active|error|pending}]. Bars after a done step turn green. `vertical` stacks for narrow layouts. */
export function StepTracker({ steps = [], vertical, style }) {
  return (
    <div style={{ display: 'flex', alignItems: vertical ? 'stretch' : 'flex-start', flexDirection: vertical ? 'column' : 'row', margin: '6px 0 4px', overflowX: vertical ? 'visible' : 'auto', minWidth: 0, ...style }}>
      {steps.map((s, i) => {
        const t = ST[s.state] || ST.pending;
        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: vertical ? 'row' : 'column', alignItems: 'center', textAlign: vertical ? 'left' : 'center', width: vertical ? 'auto' : 96, gap: vertical ? 11 : 0, flex: vertical ? 'none' : '0 1 96px', minWidth: vertical ? 0 : 72, zIndex: 2 }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: t.bg, border: `2px solid ${t.border}`, flex: 'none' }}>
                {t.glyph ? <Icon name={t.glyph} size={15} style={{ color: '#fff' }} /> : <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--border-strong)' }} />}
              </div>
              <div style={{ fontSize: 'var(--text-2xs)', lineHeight: 1.25, marginTop: vertical ? 0 : 7, color: t.label, fontWeight: t.weight, maxWidth: vertical ? 'none' : 84 }}>{s.label}</div>
            </div>
            {i < steps.length - 1 && <div style={vertical ? { width: 3, height: 16, background: s.state === 'done' ? 'var(--success)' : 'var(--border)', margin: '2px 0 2px 13.5px', borderRadius: 2 } : { height: 3, flex: 1, background: s.state === 'done' ? 'var(--success)' : 'var(--border)', marginTop: 13.5, borderRadius: 2, minWidth: 14 }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
