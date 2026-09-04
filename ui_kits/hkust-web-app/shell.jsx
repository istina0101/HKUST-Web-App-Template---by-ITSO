const { TopBand: STopBand, IconButton: SIconButton, Sidebar: SSidebar, NavLabel: SNavLabel, NavItem: SNavItem, PageHead: SPageHead, DropdownMenu: SDropdownMenu, MenuItem: SMenuItem, Toast: SToast, Button: SButton } = (window.HKUSTWebDesignSystem_46d20c || {});
const SBanner = (window.HKUSTWebDesignSystem_46d20c || {}).NotificationBanner || (() => null), SPanel = (window.HKUSTWebDesignSystem_46d20c || {}).NotificationPanel || (() => null);
const RC_NOTIFS = [{ id: 1, title: 'Request REQ-5115 approved · storage increase', meta: '2 hours ago · Research Computing', unread: true, icon: 'check', tone: 'green' }, { id: 2, title: 'RC-2038 passed 95% of its allocation', meta: 'Yesterday · System', unread: true, icon: 'triangle-alert', tone: 'gold' }, { id: 3, title: 'Monthly usage report is ready', meta: '01 Sep · System', icon: 'file-text', tone: 'navy' }];
function RcShell({ page, go, title, subtitle, actions, toast, children }) {
  const [menu, setMenu] = React.useState(false);
  const [bell, setBell] = React.useState(false);
  const [notifs, setNotifs] = React.useState(RC_NOTIFS);
  const unread = notifs.filter(n => n.unread).length;
  const meta = RC_META[page] || ['', ''];
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg2)' }}>
      <STopBand logoSrc="../../assets/logo/hkust-fullname-white.png" unit="Information Technology" unitSub="Services Office (ITSO)" user={{ initials: 'KM', name: 'WONG Ka Ming', role: 'Research Computing · ITSO' }} onUserClick={() => setMenu(m => !m)}>
        <SIconButton icon="search" title="Search" /><SIconButton icon="bell" dot={unread > 0} title="Notifications" onClick={() => { setBell(b => !b); setMenu(false); }} />
      </STopBand>
      {(menu || bell) && <div onClick={() => { setMenu(false); setBell(false); }} style={{ position: 'fixed', inset: 0, zIndex: 55 }} />}
      <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 60 }}>
        <SPanel open={bell} onClose={() => setBell(false)} onMarkAllRead={() => setNotifs(ns => ns.map(n => ({ ...n, unread: false })))} items={notifs.map(n => ({ ...n, onView: () => { setBell(false); go(n.id === 3 ? 'dashboard' : n.id === 2 ? 'projects' : 'requests'); } }))} />
      </div>
      <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 60 }}>
        <SDropdownMenu open={menu} heading="Account">
          <SMenuItem icon="user" label="My profile" onClick={() => { go('settings'); setMenu(false); }} />
          <SMenuItem icon="settings" label="Settings" onClick={() => { go('settings'); setMenu(false); }} />
          <SMenuItem icon="log-out" label="Sign out" tone="danger" onClick={() => setMenu(false)} />
        </SDropdownMenu>
      </div>
      <SSidebar collapsible title="Research Computing Portal" footer="HKUST Web · sample app">
        {RC_NAV.map((it, i) => it.pg ? <SNavItem key={it.pg} icon={it.icon} active={page === it.pg || (page === 'detail' && it.pg === 'projects')} count={it.count} onClick={() => go(it.pg)}>{it.label}</SNavItem> : <SNavLabel key={'l' + i}>{it.label}</SNavLabel>)}
      </SSidebar>
      <div style={{ marginLeft: 'var(--side-w-current, var(--side-w))', paddingTop: 'var(--band-h)', transition: 'margin-left var(--t-slow) ease' }}>
        {page === 'dashboard' && <SBanner tone="warning" title="Planned maintenance" action={<SButton variant="link" size="sm">Details →</SButton>}>The HPC login nodes will be unavailable on Sun 14 Sep, 02:00–06:00. Running jobs are not affected.</SBanner>}
        <SPageHead title={title || meta[0]} subtitle={subtitle || meta[1]} actions={actions} />
        <div style={{ padding: 'clamp(18px,2.5vw,26px) clamp(16px,3.5vw,32px) 64px', maxWidth: 'var(--content-max)' }}>{children}</div>
      </div>
      <SToast open={!!toast}>{toast}</SToast>
    </div>
  );
}
Object.assign(window, { RcShell });
