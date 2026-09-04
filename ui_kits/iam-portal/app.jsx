const { Card: ACard, EmptyState: AEmptyState, Button: AButton } = (window.HKUSTWebDesignSystem_46d20c || {});
function NotRecreated({ page, go }) {
  return <ACard flush><AEmptyState icon="file-text" title={`${IAM_META[page] ? IAM_META[page][0] : page} is not recreated in this kit`} action={<AButton variant="ghost" size="sm" icon="arrow-left" onClick={() => go('home')}>Back to Home &amp; Apps</AButton>}>Only Case selector, Home &amp; Apps, Request Access, Team lifecycle and Team members were rebuilt. The live prototype has the rest.</AEmptyState></ACard>;
}
function IamApp() {
  const [caseKey, setCaseKey] = React.useState(null);
  const [persona, setPersonaRaw] = React.useState('fomgr');
  const [page, setPage] = React.useState('home');
  const [cartOpen, setCartOpen] = React.useState(false);
  const [requests, setRequests] = React.useState(0);
  const [toast, setToast] = React.useState('');
  const go = p => { setPage(p); window.scrollTo(0, 0); };
  const setPersona = k => { setPersonaRaw(k); const visible = iamNav(k).filter(i => i.pg).map(i => i.pg); if (!visible.includes(page)) setPage('home'); };
  const enter = k => { setCaseKey(k); setPersonaRaw(IAM_CASES[k].defaultPersona); setPage('home'); };
  const say = m => { setToast(m); clearTimeout(window.__iamT); window.__iamT = setTimeout(() => setToast(''), 3600); };
  if (!caseKey) return <CaseSelector onEnter={enter} />;
  let body;
  if (page === 'home') body = <HomePage persona={persona} go={go} requestCount={requests} />;
  else if (page === 'request') body = <RequestPage cartOpen={cartOpen} setCartOpen={setCartOpen} onSubmit={() => { setRequests(n => n + 1); say('Request submitted · TRF-' + (1032 + requests)); go('requests'); }} />;
  else if (page === 'team') body = <TeamPage go={go} />;
  else if (page === 'members') body = <MembersPage go={go} />;
  else body = <NotRecreated page={page} go={go} />;
  const custom = page === 'event' ? ['Lifecycle event · LVR-2213', 'Johnley · Resignation'] : page === 'person' ? ['Identity profile', 'WONG Ka Ming · Finance Office'] : null;
  return (
    <IamShell caseKey={caseKey} persona={persona} setPersona={setPersona} page={page} go={go} onSwitchCase={() => setCaseKey(null)} cartCount={page === 'request' ? 2 : 0} onCart={() => { go('request'); setCartOpen(true); }} toast={toast} title={custom && custom[0]} subtitle={custom && custom[1]}>
      {body}
    </IamShell>
  );
}
{ const r = document.getElementById('root'); if (r && !r.dataset.mounted) { r.dataset.mounted = '1'; ReactDOM.createRoot(r).render(<IamApp />); } }
