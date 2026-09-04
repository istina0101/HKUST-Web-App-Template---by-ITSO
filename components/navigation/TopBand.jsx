import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Avatar } from '../core/Avatar.jsx';
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
/** 60px navy top band. Left: logo (34px tall) + unit block; right: children (IconButtons) then the user chip. `fixed` pins it to the viewport (default) — pass false inside previews.
 *  At ≤880px (the portal's breakpoint) the unit block hides and a ☰ button appears before the logo (as in the portal) to open the Sidebar drawer; `onMenu` overrides it. Desktop collapse lives in the Sidebar header. */
export function TopBand({ logoSrc, logoAlt = 'HKUST', unit, unitSub, extra, children, user, onUserClick, onMenu, menu = true, breakpoint = 880, fixed = true, style }) {
  const [uHover, setUHover] = React.useState(false);
  const narrow = useNarrow(breakpoint);
  const showMenu = onMenu || (menu && narrow);
  const menuLabel = 'Menu';
  const menuClick = onMenu || (() => window.dispatchEvent(new Event('hkust:nav-toggle')));
  return (
    <header style={{ position: fixed ? 'fixed' : 'relative', top: 0, left: 0, right: 0, height: 'var(--band-h)', background: 'var(--hkust-blue)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: narrow ? '0 12px' : '0 22px', zIndex: 'var(--z-band)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 0, overflow: 'hidden', flex: '1 1 auto' }}>
        {showMenu && <button type="button" aria-label={menuLabel} title={menuLabel} onClick={menuClick} style={{ width: 36, height: 36, border: 'none', background: 'transparent', color: 'var(--on-navy-icon)', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flex: 'none' }}><Icon name="menu" size={18} /></button>}
        {logoSrc && <img src={logoSrc} alt={logoAlt} style={{ height: 34, display: 'block' }} />}
        {unit && !narrow && <div style={{ color: '#fff', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-tight)', borderLeft: '1px solid rgba(255,255,255,.4)', paddingLeft: 16, lineHeight: 1.3, whiteSpace: 'nowrap' }}><b style={{ fontWeight: 700 }}>{unit}</b>{unitSub && <><br />{unitSub}</>}</div>}
        {extra}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: 'none', marginLeft: 12 }}>
        {children}
        {user && (
          <div onClick={onUserClick} onMouseEnter={() => setUHover(true)} onMouseLeave={() => setUHover(false)} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '4px 8px 4px 10px', marginLeft: 4, borderLeft: '1px solid var(--on-navy-divider)', borderRadius: 'var(--r-md)', cursor: onUserClick ? 'pointer' : 'default', background: uHover && onUserClick ? 'rgba(255,255,255,.08)' : 'transparent', transition: 'background var(--t-fast)' }}>
            <Avatar initials={user.initials} bg={user.bg} fg={user.fg} />
            {!narrow && <div><div style={{ color: '#fff', fontSize: 'var(--text-xs)', fontWeight: 600, lineHeight: 1.2 }}>{user.name}</div><div style={{ color: 'var(--on-navy-muted)', fontSize: 'var(--text-2xs)', lineHeight: 1.2 }}>{user.role}</div></div>}
            {onUserClick && <Icon name="chevron-down" size={16} style={{ color: 'var(--on-navy-muted)' }} />}
          </div>
        )}
      </div>
    </header>
  );
}
/** Outlined pill on the band (case / context switcher): `<BandSwitch label="Case 1" hint="Switch case" />`. */
export function BandSwitch({ label, hint, onClick, style }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ marginLeft: 0, padding: '6px 12px', background: hover ? 'var(--on-navy-hover)' : 'transparent', border: '1px solid var(--on-navy-border)', color: '#fff', fontSize: 'var(--text-xs)', lineHeight: 1.3, cursor: 'pointer', borderRadius: 'var(--r-md)', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'inherit', transition: 'background var(--t-fast)', whiteSpace: 'nowrap', ...style }}>
      <b style={{ fontWeight: 700 }}>{label}</b>{hint && <span style={{ color: 'var(--on-navy-muted)' }}>· {hint}</span>}
    </button>
  );
}
