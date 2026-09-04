const { Card: ECard, CardHeader: ECardHeader, EmptyState: EEmptyState, Button: EButton, Callout: ECallout, IconBox: EIconBox } = window.HKUSTWebDesignSystem_46d20c;
const ESkeletonCard = window.HKUSTWebDesignSystem_46d20c.SkeletonCard || (() => null), ESkeletonTable = window.HKUSTWebDesignSystem_46d20c.SkeletonTable || (() => null), ESpinner = window.HKUSTWebDesignSystem_46d20c.Spinner || (() => null);
function StatesPage({ go }) {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <ECard flush><ECardHeader title="Loading" subtitle="Skeletons mirror the layout they replace; the spinner covers indeterminate waits" /><div style={{ padding: 22, display: 'grid', gap: 16 }}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 16 }}><ESkeletonCard /><ESkeletonCard /><ESkeletonCard /></div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}><ECard flush><ESkeletonTable rows={4} cols={4} /></ECard><ECard flush><ESpinner center label="Loading recent activity…" /></ECard></div></div></ECard>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        <ECard flush><ECardHeader title="Nothing yet" subtitle="First-run list" /><EEmptyState icon="briefcase" title="No projects yet" action={<EButton size="sm" icon="circle-plus" onClick={() => go('wizard')}>New request</EButton>}>Projects appear here once an allocation is approved for you.</EEmptyState></ECard>
        <ECard flush><ECardHeader title="Filtered out" subtitle="Search or filter with no hits" /><EEmptyState icon="search" title="No projects match" action={<EButton size="sm" variant="ghost">Clear filters</EButton>}>Try another name, PI or ID, or clear the filters.</EEmptyState></ECard>
        <ECard flush><ECardHeader title="All done" subtitle="Queue cleared" /><EEmptyState icon="check-circle-2" title="Nothing waiting on you">New requests will show here and in the sidebar count.</EEmptyState></ECard>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
        <ECard flush><ECardHeader title="Could not load" subtitle="Server or network error inside a panel" /><EEmptyState icon="wifi-off" title="We couldn't load recent activity" action={<EButton size="sm" variant="ghost" icon="refresh-cw">Try again</EButton>}>Check your connection and try again. If it keeps failing, contact the ITSO Service Desk (cchelp@ust.hk).</EEmptyState></ECard>
        <ECard flush><ECardHeader title="Inline errors" subtitle="Callouts for recoverable problems" /><div style={{ padding: '18px 22px', display: 'grid', gap: 10 }}>
          <ECallout tone="danger">Your session has expired. Sign in again to continue; unsaved changes on this page are kept for 10 minutes.</ECallout>
          <ECallout tone="warning" icon="info">The HR directory is being refreshed (until 09:30). Names may be up to a day old.</ECallout>
          <ECallout tone="success">Request REQ-5121 submitted. You will be emailed at each step.</ECallout></div></ECard>
      </div>
      <ECard style={{ textAlign: 'center', padding: '56px 22px' }}>
        <EIconBox icon="file-search" tone="gray" style={{ margin: '0 auto 16px' }} />
        <div style={{ color: 'var(--text-eyebrow)', fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps-wide)', textTransform: 'uppercase' }}>Error 404</div>
        <h2 style={{ fontSize: 'var(--text-lg)', marginTop: 8 }}>This page does not exist</h2>
        <p className="muted" style={{ fontSize: 'var(--text-sm)', marginTop: 6, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>The link may be out of date, or you may not have access to this project. Project pages are visible to their members and administrators.</p>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 18 }}><EButton variant="ghost" icon="arrow-left" onClick={() => go('dashboard')}>Back to dashboard</EButton><EButton icon="briefcase" onClick={() => go('projects')}>Browse projects</EButton></div>
      </ECard>
    </div>
  );
}
Object.assign(window, { StatesPage });
