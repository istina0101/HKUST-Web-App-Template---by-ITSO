import React from 'react';
import { Icon } from '../core/Icon.jsx';
const SidebarCtx = React.createContext({ collapsed: false });
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
/** 248px white sidebar under the band. Responsive like the portal: at ≤880px it becomes a 264px drawer (opened by the band's menu button, closed by the 42% navy backdrop).
 *  `collapsible` (addition) adds a header row — `title` left, collapse toggle right — that shrinks it to a 64px icon rail on desktop. Both write `--side-w-current` on <html> so page content can follow with `margin-left:var(--side-w-current,var(--side-w))`. */
export function Sidebar({ children, title, footer, fixed = true, collapsible = false, collapsed: collapsedProp, onCollapse, breakpoint = 880, style }) {
  const narrow = useNarrow(breakpoint);
  const [open, setOpen] = React.useState(false);
  const [collapsedState, setCollapsed] = React.useState(false);
  const collapsed = collapsedProp != null ? collapsedProp : collapsedState;
  const toggle = () => { const v = !collapsed; if (collapsedProp == null) setCollapsed(v); onCollapse && onCollapse(v); };
  React.useEffect(() => {
    const f = () => { if (narrow) setOpen(o => !o); else if (collapsible) toggle(); };
    const c = () => setOpen(false);
    window.addEventListener('hkust:nav-toggle', f); window.addEventListener('hkust:nav-close', c);
    return () => { window.removeEventListener('hkust:nav-toggle', f); window.removeEventListener('hkust:nav-close', c); };
  });

  React.useEffect(() => { const w = narrow ? '0px' : collapsed ? '64px' : 'var(--side-w)'; document.documentElement.style.setProperty('--side-w-current', w); return () => document.documentElement.style.removeProperty('--side-w-current'); }, [narrow, collapsed]);
  React.useEffect(() => { if (!narrow) setOpen(false); }, [narrow]);
  const drawer = narrow;
  const width = drawer ? 'var(--side-w-mobile)' : collapsed ? 64 : 'var(--side-w)';
  return (
    <SidebarCtx.Provider value={{ collapsed: collapsed && !drawer }}>
      {drawer && open && <div onClick={() => setOpen(false)} style={{ position: 'fixed', inset: 'var(--band-h) 0 0 0', background: 'var(--overlay-nav)', zIndex: 'var(--z-nav-backdrop)' }} />}
      <aside style={{ position: fixed || drawer ? 'fixed' : 'relative', top: fixed || drawer ? 'var(--band-h)' : undefined, bottom: fixed || drawer ? 0 : undefined, left: 0, width, background: 'var(--bg1)', borderRight: '1px solid var(--border)', padding: collapsed && !drawer ? '16px 8px' : '16px 12px', display: 'flex', flexDirection: 'column', zIndex: 'var(--z-sidebar)', overflowY: 'auto', overflowX: 'hidden', transform: drawer && !open ? 'translateX(-100%)' : 'none', boxShadow: drawer && open ? 'var(--shadow-lg)' : 'none', transition: 'transform var(--t-slow) ease,width var(--t-slow) ease,padding var(--t-slow) ease', ...style }}>
        {(title || (collapsible && !drawer)) && <div style={{ display: 'flex', alignItems: 'center', justifyContent: collapsed && !drawer ? 'center' : 'space-between', gap: 8, padding: collapsed && !drawer ? '0 0 10px' : '0 0 10px 10px', marginBottom: 8, borderBottom: '1px solid var(--border)', minHeight: 46 }}>
          {title && !(collapsed && !drawer) && <div title={typeof title === 'string' ? title : undefined} style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--fg1)', lineHeight: 1.3, minWidth: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', textWrap: 'balance', paddingTop: 2 }}>{title}</div>}
          {collapsible && !drawer && <CollapseButton collapsed={collapsed} onClick={toggle} />}
        </div>}
        <nav style={{ display: 'flex', flexDirection: 'column' }}>{children}</nav>
        {footer && !(collapsed && !drawer) && <div style={{ marginTop: 'auto', padding: 10, borderTop: '1px solid var(--border)', color: 'var(--fg4)', fontSize: 'var(--text-2xs)', lineHeight: 1.5, minWidth: 0 }}>{footer}</div>}
      </aside>
    </SidebarCtx.Provider>
  );
}
function CollapseButton({ collapsed, onClick }) {
  const [hover, setHover] = React.useState(false);
  const label = collapsed ? 'Expand menu' : 'Collapse menu';
  return <button type="button" onClick={onClick} title={label} aria-label={label} aria-pressed={collapsed} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ width: 36, height: 36, flex: 'none', border: 'none', background: hover ? 'var(--bg2)' : 'transparent', color: hover ? 'var(--fg1)' : 'var(--fg3)', borderRadius: 'var(--r-md)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background var(--t-fast),color var(--t-fast)' }}><Icon name={collapsed ? 'panel-left-open' : 'panel-left-close'} size={18} /></button>;
}
/** Uppercase 11px group label inside the Sidebar (a hairline when the rail is collapsed). */
export function NavLabel({ children, style }) {
  const { collapsed } = React.useContext(SidebarCtx);
  if (collapsed) return <div style={{ height: 1, background: 'var(--border)', margin: '12px 8px' }} />;
  return <div style={{ fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps)', textTransform: 'uppercase', color: 'var(--fg4)', padding: '0 10px', margin: '14px 0 6px', whiteSpace: 'nowrap', ...style }}>{children}</div>;
}
/** Sidebar row: 18px icon + 14px semibold label, optional orange `count`. Active = pale-navy fill, navy text and a 3px left bar. Collapsed rail shows the icon only (label as tooltip). */
export function NavItem({ icon, active, count, children, onClick, href, style }) {
  const [hover, setHover] = React.useState(false);
  const { collapsed } = React.useContext(SidebarCtx);
  const Tag = href ? 'a' : 'button';
  const label = typeof children === 'string' ? children : undefined;
  return (
    <Tag href={href} type={href ? undefined : 'button'} title={collapsed ? label : undefined} onClick={e => { onClick && onClick(e); window.dispatchEvent(new Event('hkust:nav-close')); }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} aria-current={active ? 'page' : undefined}
      style={{ display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: 11, width: '100%', border: 'none', background: active ? 'var(--bg-brand-light)' : hover ? 'var(--bg2)' : 'transparent', color: active ? 'var(--hkust-blue)' : 'var(--fg2)', fontFamily: 'inherit', fontSize: 'var(--text-sm)', fontWeight: 600, textAlign: 'left', padding: collapsed ? '11px 0' : 'var(--nav-item-pad)', borderRadius: 'var(--r-md)', cursor: 'pointer', transition: 'background var(--t-fast),color var(--t-fast)', position: 'relative', textDecoration: 'none', lineHeight: 1.5, whiteSpace: 'nowrap', ...style }}>
      {active && <span style={{ position: 'absolute', left: collapsed ? -8 : 0, top: 7, bottom: 7, width: 3, background: 'var(--itso-blue-dark)', borderRadius: '0 2px 2px 0' }} />}
      {icon && <Icon name={icon} size={18} style={{ color: active ? 'var(--itso-blue-dark)' : 'var(--fg3)' }} />}
      {!collapsed && <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>{children}</span>}
      {count != null && count !== '' && <span style={{ marginLeft: collapsed ? 0 : 'auto', position: collapsed ? 'absolute' : 'static', top: 4, right: 6, background: 'var(--itso-orange)', color: '#fff', fontSize: 'var(--text-2xs)', fontWeight: 700, borderRadius: 9, minWidth: collapsed ? 14 : 18, height: collapsed ? 14 : 18, padding: collapsed ? '0 3px' : '0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1, fontSize: collapsed ? 9 : 'var(--text-2xs)' }}>{count}</span>}
    </Tag>
  );
}
