const { Card: PCard, CardHeader: PCardHeader, Breadcrumb: PBreadcrumb, Tabs: PTabs, KeyValueList: PKeyValueList, Table: PTable, Badge: PBadge, Button: PButton, ActivityList: PActivityList, Callout: PCallout, Avatar: PAvatar, Progress: PProgress, StatTile: PStatTile, KpiDelta: PKpiDelta } = (window.HKUSTWebDesignSystem_46d20c || {});
const PDrawer = (window.HKUSTWebDesignSystem_46d20c || {}).Drawer || (() => null);
function ProjectDetail({ go }) {
  const p = RC_PROJECTS[0];
  const [tab, setTab] = React.useState('overview');
  const [member, setMember] = React.useState(null);
  return (
    <div>
      <PBreadcrumb items={[{ label: 'Projects', onClick: () => go('projects') }, { label: p.id }]} style={{ marginBottom: 14 }} />
      <PCard style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}><PAvatar initials="WH" size="lg" /><div><div style={{ fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--fg1)', display: 'flex', alignItems: 'center', gap: 10 }}>{p.name}<PBadge tone="success" icon="check">Active</PBadge></div><div style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 3 }}>{p.id} · {p.pi} · {p.dept}</div></div></div>
          <div style={{ display: 'flex', gap: 8 }}><PButton variant="ghost" icon="user-plus">Add member</PButton><PButton icon="circle-plus" onClick={() => go('wizard')}>Request more</PButton></div>
        </div>
        <PTabs style={{ marginTop: 18, marginBottom: -22 }} value={tab} onChange={setTab} items={[{ key: 'overview', label: 'Overview' }, { key: 'members', label: 'Members', count: RC_MEMBERS.length }, { key: 'activity', label: 'Activity' }]} />
      </PCard>
      {tab === 'overview' && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            <PStatTile eyebrow="CPU hours used" value="412k" caption="of 500k allocated"><PProgress value={82} width={120} tone="warning" style={{ margin: '6px 0 8px' }} /></PStatTile>
            <PStatTile eyebrow="Storage" value="18 TB" caption="of 25 TB" />
            <PStatTile eyebrow="Jobs · 30 days" value="1,603"><PKpiDelta value="+14%" direction="up" label="vs previous 30 days" style={{ margin: '4px 0 6px' }} /></PStatTile>
          </div>
          <PCard flush><PCardHeader title="Project details" /><div style={{ padding: '6px 22px 10px' }}><PKeyValueList items={[{ k: 'Project ID', v: p.id }, { k: 'Principal investigator', v: p.pi }, { k: 'Department', v: p.dept }, { k: 'School', v: p.school }, { k: 'Funding', v: 'RGC General Research Fund · 16205826' }, { k: 'Allocation period', v: '01 Jan 2026 – 31 Dec 2026' }, { k: 'Queue', v: <PBadge tone="info">standard · 64 cores max</PBadge> }]} /></div></PCard>
        </div>
        <div style={{ display: 'grid', gap: 16, alignContent: 'start' }}>
          <PCallout tone="warning">82% of this year's CPU hours are used with four months left. Ask for an extension before usage reaches 95%, when new jobs queue at low priority.</PCallout>
          <PCard flush><PCardHeader title="Recent activity" /><div style={{ padding: '4px 22px 8px' }}><PActivityList timeWidth={110} items={RC_ACTIVITY.slice(0, 3)} /></div></PCard>
        </div>
      </div>}
      {tab === 'members' && <PCard flush><PTable emphasis="n" rows={RC_MEMBERS} rowKey={r => r.email} columns={[{ key: 'n', label: 'Member', nowrap: true }, { key: 'role', label: 'Role', nowrap: true }, { key: 'email', label: 'Email', muted: true, nowrap: true }, { key: 'jobs', label: 'Jobs · 30 days', align: 'right', nowrap: true }, { key: 'status', label: 'Status', render: r => r.status === 'Active' ? <PBadge tone="success" icon="check">Active</PBadge> : <PBadge tone="warning" icon="clock">Pending</PBadge> }, { key: 'a', label: '', align: 'right', render: r => <PButton variant="link" size="sm" icon="eye" onClick={() => setMember(r)}>View</PButton> }]} onRowClick={r => setMember(r)} /></PCard>}
      {member && <PDrawer title={member.n} subtitle={`${member.role} · ${p.id}`} leading={<PAvatar initials={member.n.replace(/^(Prof\.|Dr\.)\s*/, '').split(' ').slice(0, 2).map(s => s[0]).join('').toUpperCase()} size="lg" />} onClose={() => setMember(null)}
        footer={<><PButton variant="link" onClick={() => setMember(null)}>Close</PButton><PButton variant="danger" icon="user-x">Remove from project</PButton></>}>
        <PKeyValueList keyWidth={130} items={[{ k: 'Email', v: member.email }, { k: 'Role', v: member.role }, { k: 'Jobs · 30 days', v: member.jobs.toLocaleString() }, { k: 'Status', v: member.status === 'Active' ? <PBadge tone="success" icon="check">Active</PBadge> : <PBadge tone="warning" icon="clock">Pending</PBadge> }, { k: 'Added', v: '03 Mar 2026 · by Prof. CHAN Wing Hong' }]} />
        <div style={{ fontSize: 'var(--text-md)', fontWeight: 700, color: 'var(--fg1)', margin: '22px 0 6px' }}>Recent activity</div>
        <PActivityList timeWidth={110} items={RC_ACTIVITY.slice(0, 2)} />
      </PDrawer>}
      {tab === 'activity' && <PCard><PActivityList items={RC_ACTIVITY} /></PCard>}
    </div>
  );
}
Object.assign(window, { ProjectDetail });
