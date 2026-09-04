const { Card, StatTile, Badge, Button, IconBox, Tag, Callout, SectionTitle } = window.HKUSTWebDesignSystem_46d20c;
function HomePage({ persona, go, requestCount = 0 }) {
  const s = IAM_PERSONAS[persona].seats;
  const link = (label, pg) => <Button variant="link" style={{ paddingLeft: 0 }} onClick={() => go(pg)}>{label} →</Button>;
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 24 }}>
        <StatTile eyebrow="Sign-in security" icon="shield-check" tone="green" action={link('Manage sign-in', 'security')}>
          <div style={{ marginTop: 8 }}><Badge tone="success" icon="shield-check">MFA active</Badge></div><p className="muted" style={{ fontSize: 'var(--text-xs)', marginTop: 8 }}>2 methods registered</p>
        </StatTile>
        <StatTile eyebrow="Requests in progress" value={requestCount} caption={requestCount ? `${requestCount} transfer request${requestCount > 1 ? 's' : ''} active` : 'Nothing in progress'} icon="clipboard-list" tone="navy" action={link('Track requests', 'requests')} />
        {s.manager || s.owner
          ? <StatTile eyebrow="Approvals waiting on you" value={s.manager ? 1 : 2} caption="Review each item individually" icon="stamp" tone="gold" action={link('Review approvals', 'approvals')} />
          : <StatTile eyebrow="Active access" value={4} unit="items" caption="3 come with your position" icon="key-round" tone="gold" action={link('Review access', 'access')} />}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
        <div><SectionTitle>Your apps</SectionTitle><p className="muted" style={{ fontSize: 'var(--text-sm)', marginTop: 2 }}>Single sign-on · one login covers everything below. An app appears here once you hold access to it.</p></div>
        <Button icon="circle-plus" onClick={() => go('request')}>Request an app</Button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
        {IAM_APPS.map(([n, d, ic, tone]) => (
          <Card key={n} as="a" hoverable style={{ display: 'flex', flexDirection: 'column', gap: 11, padding: 16 }}>
            <IconBox icon={ic} tone={tone} /><div><div style={{ fontWeight: 700, color: 'var(--fg1)', fontSize: 'var(--text-sm)' }}>{n}</div><div style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 2 }}>{d}</div></div><Tag style={{ alignSelf: 'flex-start' }}>SSO</Tag>
          </Card>
        ))}
      </div>
      <Callout style={{ marginTop: 22 }}>Forgot your password? You can reset it yourself with MFA · no helpdesk ticket needed. <a onClick={() => go('security')} style={{ cursor: 'pointer', fontWeight: 700 }}>Reset password →</a></Callout>
    </div>
  );
}
Object.assign(window, { HomePage });
