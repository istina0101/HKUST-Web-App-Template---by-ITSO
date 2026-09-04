const { Card: RCard, CardHeader: RCardHeader, Chip: RChip, ChipGroup: RChipGroup, Field: RField, Input: RInput, Badge: RBadge, Button: RButton, IconBox: RIconBox, Table: RTable, Checkbox: RCheckbox, Textarea: RTextarea, Modal: RModal, OptionRow: ROptionRow, Callout: RCallout, Select: RSelect, Divider: RDivider, SectionTitle: RSectionTitle } = (window.HKUSTWebDesignSystem_46d20c || {});
function SystemCard({ s, onOpen }) {
  return (
    <RCard hoverable onClick={onOpen} style={{ display: 'flex', flexDirection: 'column', minHeight: 150 }}>
      <RIconBox icon={s.icon} tone={s.tone} />
      <h3 style={{ fontSize: 'var(--text-md)', margin: '12px 0 2px' }}>{s.name}</h3>
      <p style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)' }}>{s.full}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 14, fontSize: 'var(--text-xs)' }}>
        {s.sensitive ? <RBadge tone="warning" icon="clock">Sensitive</RBadge> : <span className="muted">{s.roles.length} roles</span>}<span style={{ color: 'var(--itso-blue-dark)', fontWeight: 700 }}>View roles →</span>
      </div>
    </RCard>
  );
}
function RequestPage({ onSubmit, cartOpen, setCartOpen }) {
  const [behalf, setBehalf] = React.useState(false);
  const [tab, setTab] = React.useState('browse');
  const [filter, setFilter] = React.useState('All');
  const [roleSys, setRoleSys] = React.useState(null);
  const [role, setRole] = React.useState(null);
  const [sel, setSel] = React.useState({ ECM: true, HRMS: true });
  const cats = ['All', 'HR systems', 'IT tools', 'Finance', 'Student admin'];
  const nSel = Object.values(sel).filter(Boolean).length;
  return (
    <div>
      <RCard style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}><span style={{ fontWeight: 700, color: 'var(--fg1)', fontSize: 'var(--text-sm)' }}>Requesting for</span><RChipGroup><RChip selected={!behalf} onClick={() => setBehalf(false)}>Myself</RChip><RChip selected={behalf} onClick={() => setBehalf(true)}>On behalf of someone</RChip></RChipGroup></div>
          <RChipGroup><RChip selected={tab === 'browse'} onClick={() => setTab('browse')}>Browse catalogue</RChip><RChip selected={tab === 'clone'} onClick={() => setTab('clone')}>Copy a colleague</RChip></RChipGroup>
        </div>
        {behalf && <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
          <RField label="Colleague you are requesting for" required>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}><RInput icon="user" placeholder="Search name or staff ID…" wrapStyle={{ maxWidth: 340, flex: 1 }} /><RBadge tone="neutral" icon="info">Approvals follow each system's own route, on the colleague's chain</RBadge></div>
          </RField>
        </div>}
      </RCard>
      {tab === 'browse' && <div>
        <RInput icon="search" placeholder="Search systems, business roles, or functions…" wrapStyle={{ marginBottom: 12 }} />
        <RChipGroup style={{ marginBottom: 18 }}>{cats.map(c => <RChip key={c} selected={filter === c} onClick={() => setFilter(c)}>{c}</RChip>)}</RChipGroup>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>{IAM_SYSTEMS.map(s => <SystemCard key={s.key} s={s} onOpen={() => { setRoleSys(s); setRole(s.roles[0]); }} />)}</div>
      </div>}
      {tab === 'clone' && <RCard flush>
        <div style={{ padding: '18px 22px', borderBottom: '1px solid var(--border)' }}>
          <RSectionTitle>Copy a colleague's access</RSectionTitle>
          <p className="muted" style={{ fontSize: 'var(--text-xs)', marginTop: 3 }}>Restricted to your own department. Each selected item still goes through policy check and its system's approval route.</p>
          <RInput icon="user" placeholder="Search name or staff ID…" wrapStyle={{ maxWidth: 360, marginTop: 12 }} defaultValue="CHEUNG Sara" />
        </div>
        <RTable emphasis="sys" rows={IAM_CLONE_ROWS} rowKey={r => r.sys} columns={[
          { key: 'cb', label: '', width: 42, render: r => <RCheckbox checked={r.owned || !!sel[r.sys]} disabled={r.owned} onChange={v => setSel(o => ({ ...o, [r.sys]: v }))} /> },
          { key: 'sys', label: 'System', render: r => <span style={{ color: r.owned ? 'var(--fg4)' : undefined }}>{r.sys}</span> }, { key: 'role', label: 'Business role', render: r => <span style={{ color: r.owned ? 'var(--fg4)' : undefined }}>{r.role}</span> },
          { key: 'st', label: 'Status', render: r => <RBadge tone={r.tone} icon={r.ic}>{r.st}</RBadge> }]} />
        <div style={{ padding: '16px 22px', borderTop: '1px solid var(--border)' }}>
          <RField label="Business justification" required><RTextarea rows={2} defaultValue="Taking over document-management duties for the UX team during Q3." placeholder="Why do you need the same access as this colleague?" /></RField>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}><RButton variant="link" onClick={() => setSel({})}>Clear</RButton><RButton icon="shopping-cart" onClick={() => setCartOpen(true)}>Add selected ({nSel}) to cart</RButton></div>
        </div>
      </RCard>}
      {roleSys && <RModal title="Request access" subtitle={`${roleSys.name} · ${roleSys.full}`} onClose={() => setRoleSys(null)} footer={<><RButton variant="link" onClick={() => setRoleSys(null)}>Cancel</RButton><RButton icon="shopping-cart" onClick={() => { setRoleSys(null); setCartOpen(true); }}>Add to cart</RButton></>}>
        <RField label="Choose the business role you need">
          {roleSys.roles.map((r, i) => <ROptionRow key={r} name="role" value={r} checked={role === r} onChange={(_, v) => setRole(v)} title={r} description={i === 0 ? 'Standard · approved by your manager' : roleSys.sensitive ? 'Sensitive · time-bound · manager + resource owner' : 'Standard · approved by your manager'} trailing={roleSys.sensitive && i > 0 ? <RBadge tone="warning" icon="clock">Sensitive</RBadge> : null} />)}
        </RField>
        <RCallout style={{ marginTop: 6 }}>Sensitive roles are granted for a fixed period and expire automatically. You will set the duration in the cart.</RCallout>
      </RModal>}
      {cartOpen && <RModal size="lg" title="Your access cart" subtitle="Review before submitting · items may route to different approvers" onClose={() => setCartOpen(false)}
        footer={<><span className="muted" style={{ fontSize: 'var(--text-xs)' }}>Every item runs a policy &amp; SoD check before any approver sees it.</span><RButton icon="send" onClick={() => { setCartOpen(false); onSubmit(); }}>Submit request</RButton></>}>
        <CartRow name="ECM · Department Admin" badge={<RBadge tone="neutral">Standard</RBadge>} />
        <CartRow name="HRMS · Department HR Viewer" badge={<><RBadge tone="warning" icon="clock">Sensitive · time-bound</RBadge><RSelect size="sm" options={['30 days', '90 days', '180 days']} defaultValue="90 days" /></>} />
        <RDivider />
        <RField label="Business justification" required><RTextarea rows={3} defaultValue="Taking over document-management and HR-cover duties for the UX team in Q3." /></RField>
      </RModal>}
    </div>
  );
}
function CartRow({ name, badge }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '12px 14px', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', marginBottom: 10 }}>
      <div><div style={{ fontWeight: 700, color: 'var(--fg1)', fontSize: 'var(--text-sm)' }}>{name}</div><div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>{badge}</div></div>
      <RButton variant="link" icon="trash-2" style={{ color: 'var(--danger)' }}>Remove</RButton>
    </div>
  );
}
Object.assign(window, { RequestPage });
