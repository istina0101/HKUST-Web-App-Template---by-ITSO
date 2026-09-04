import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { IconBox } from '../core/IconBox.jsx';
import { Button } from '../core/Button.jsx';
/** Intentional addition: the panel the band's bell opens. items: [{id, title, meta, unread, icon?, tone?, onView?}]. White card, 340px, shadow-lg; header with "Mark all as read"; per-item View action. `inline` renders in flow for previews. */
export function NotificationPanel({ items = [], open = true, onMarkAllRead, onClose, inline, top = 52, right = 60, emptyText = 'You are all caught up', style }) {
  if (!open) return null;
  const unread = items.filter(i => i.unread).length;
  return (
    <div role="dialog" aria-label="Notifications" style={{ position: inline ? 'relative' : 'absolute', top: inline ? undefined : top, right: inline ? undefined : right, width: 340, maxWidth: 'calc(100vw - 24px)', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', boxShadow: 'var(--shadow-lg)', zIndex: 'var(--z-menu)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '12px 14px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--fg1)' }}>Notifications{unread ? <span style={{ marginLeft: 8, background: 'var(--itso-orange)', color: '#fff', fontSize: 'var(--text-2xs)', fontWeight: 700, borderRadius: 9, padding: '1px 6px' }}>{unread}</span> : null}</div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {unread > 0 && <Button variant="link" size="sm" icon="check-check" onClick={onMarkAllRead}>Mark all as read</Button>}
          {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--fg4)', cursor: 'pointer', padding: 4, display: 'inline-flex' }}><Icon name="x" size={16} /></button>}
        </div>
      </div>
      <div style={{ maxHeight: 420, overflowY: 'auto' }}>
        {!items.length && <div style={{ padding: '28px 14px', textAlign: 'center', color: 'var(--fg3)', fontSize: 'var(--text-sm)' }}><Icon name="bell" size={22} style={{ color: 'var(--fg4)', display: 'block', margin: '0 auto 8px' }} />{emptyText}</div>}
        {items.map((it, i) => <Row key={it.id ?? i} it={it} last={i === items.length - 1} />)}
      </div>
    </div>
  );
}
function Row({ it, last }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 14px', borderBottom: last ? 'none' : '1px solid var(--border)', background: hover ? 'var(--bg2)' : it.unread ? 'var(--bg1)' : 'var(--bg1)', transition: 'background var(--t-fast)' }}>
      <IconBox icon={it.icon || 'bell'} tone={it.tone || 'navy'} size={34} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 'var(--text-sm)', fontWeight: it.unread ? 700 : 600, color: 'var(--fg1)', display: 'flex', alignItems: 'center', gap: 8 }}>{it.unread && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--itso-orange)', flex: 'none' }} />}<span style={{ minWidth: 0 }}>{it.title}</span></div>
        {it.meta && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--fg3)', marginTop: 2 }}>{it.meta}</div>}
      </div>
      {it.onView && <Button variant="link" size="sm" icon="eye" onClick={it.onView} style={{ flex: 'none', marginTop: -4 }}>View</Button>}
    </div>
  );
}
