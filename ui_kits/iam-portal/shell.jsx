const DS = window.HKUSTWebDesignSystem_46d20c;
const { TopBand, BandSwitch, IconButton, Sidebar, NavLabel, NavItem, PageHead, DropdownMenu, MenuItem, Avatar, Toast } = DS;
function iamNav(persona) {
  const s = IAM_PERSONAS[persona].seats;
  const items = [{ pg: 'home', icon: 'layout-grid', label: 'Home & Apps' }, { label: 'My account' }, { pg: 'security', icon: 'shield-check', label: 'Sign-in & Security' },
    { label: 'My access' }, { pg: 'request', icon: 'circle-plus', label: 'Request Access' }, { pg: 'requests', icon: 'clipboard-list', label: 'My Requests' }, { pg: 'access', icon: 'key-round', label: 'My Current Access' }];
  if (s.manager || s.owner) items.push({ label: 'Approvals & reviews' }, { pg: 'approvals', icon: 'stamp', label: 'Approvals', count: s.manager ? 1 : 2 }, { pg: 'certify', icon: 'clipboard-check', label: 'Certifications', count: 8 });
  if (s.manager) items.push({ label: 'My team' }, { pg: 'team', icon: 'users-round', label: 'Team lifecycle', count: 2 }, { pg: 'members', icon: 'users', label: 'Team members' });
  if (s.deptAdmin || s.platform) { items.push({ label: 'Administration' }, { pg: 'profiles', icon: 'fingerprint', label: 'Identity profiles' }); if (s.platform) items.push({ pg: 'ops', icon: 'refresh-cw', label: 'Lifecycle ops' }, { pg: 'audit', icon: 'file-search', label: 'Audit log' }); }
  return items;
}
/** App shell: band + persona menu + sidebar + page head. Children render inside the content wrap. */
function IamShell({ caseKey, persona, setPersona, page, go, onSwitchCase, cartCount, onCart, toast, children, title, subtitle }) {
  const [menu, setMenu] = React.useState(false);
  const P = IAM_PERSONAS[persona];
  const meta = IAM_META[page] || ['', ''];
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg2)' }}>
      <TopBand logoSrc="../../assets/logo/hkust-fullname-white.png" unit="Information Technology" unitSub="Services Office (ITSO)" extra={<BandSwitch label={IAM_CASES[caseKey].tag} hint="Switch case" onClick={onSwitchCase} />}
        user={{ initials: P.av, name: P.name, role: P.role, bg: P.bg, fg: P.fg }} onUserClick={() => setMenu(m => !m)}>
        <IconButton icon="search" title="Search" /><IconButton icon="bell" dot title="Notifications" /><IconButton icon="shopping-cart" count={cartCount || undefined} title="Access cart" onClick={onCart} />
      </TopBand>
      {menu && <div onClick={() => setMenu(false)} style={{ position: 'fixed', inset: 0, zIndex: 55 }} />}
      <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 60 }}>
        <DropdownMenu open={menu} heading="Switch user · prototype" top={52} right={12}>
          {IAM_CASES[caseKey].personas.map(k => { const d = IAM_PERSONAS[k]; return <MenuItem key={k} leading={<Avatar initials={d.av} bg={d.bg} fg={d.fg} />} label={d.name} description={d.role} selected={k === persona} onClick={() => { setPersona(k); setMenu(false); }} />; })}
        </DropdownMenu>
      </div>
      <Sidebar collapsible title="IAM Self-Service Portal" footer="prototype v4 · staff identity">
        {iamNav(persona).map((it, i) => it.pg ? <NavItem key={it.pg} icon={it.icon} active={page === it.pg} count={it.count} onClick={() => go(it.pg)}>{it.label}</NavItem> : <NavLabel key={'l' + i}>{it.label}</NavLabel>)}
      </Sidebar>
      <div style={{ marginLeft: 'var(--side-w-current, var(--side-w))', paddingTop: 'var(--band-h)', transition: 'margin-left var(--t-slow) ease' }}>
        <PageHead title={title || meta[0]} subtitle={subtitle || meta[1]} />
        <div style={{ padding: 'clamp(18px,2.5vw,26px) clamp(16px,3.5vw,32px) 64px', maxWidth: 'var(--content-max)' }}>{children}</div>
      </div>
      <Toast open={!!toast}>{toast}</Toast>
    </div>
  );
}
Object.assign(window, { IamShell, iamNav });
