const { Button: XButton } = window.HKUSTWebDesignSystem_46d20c;
function RcApp() {
  const [page, setPage] = React.useState('dashboard');
  const [toast, setToast] = React.useState('');
  const go = p => { setPage(p); window.scrollTo(0, 0); };
  const say = m => { setToast(m); clearTimeout(window.__rcT); window.__rcT = setTimeout(() => setToast(''), 3600); };
  const body = page === 'dashboard' ? <Dashboard go={go} /> : page === 'projects' ? <ProjectsList go={go} /> : page === 'requests' ? <RequestsList go={go} /> : page === 'detail' ? <ProjectDetail go={go} /> : page === 'wizard' ? <RequestWizard onDone={() => { say('Request REQ-5121 submitted'); go('requests'); }} /> : page === 'settings' ? <SettingsPage say={say} /> : <StatesPage go={go} />;
  const custom = page === 'detail' ? ['Coastal wind-field modelling', 'RC-2041 · Civil & Environmental Engineering · SENG'] : null;
  const actions = page === 'projects' ? <XButton icon="circle-plus" onClick={() => go('wizard')}>New request</XButton> : page === 'dashboard' ? <XButton variant="ghost" icon="download">Monthly report</XButton> : null;
  return <RcShell page={page} go={go} toast={toast} title={custom && custom[0]} subtitle={custom && custom[1]} actions={actions}>{body}</RcShell>;
}
ReactDOM.createRoot(document.getElementById('root')).render(<RcApp />);
