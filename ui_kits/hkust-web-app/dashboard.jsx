const { Card: DCard, CardHeader: DCardHeader, StatTile: DStatTile, KpiDelta: DKpiDelta, BarChart: DBarChart, LineChart: DLineChart, Table: DTable, Badge: DBadge, Button: DButton, ActivityList: DActivityList, Progress: DProgress } = (window.HKUSTWebDesignSystem_46d20c || {});
function Dashboard({ go }) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 16 }}>
        <DStatTile eyebrow="Active projects" value={38} icon="briefcase" tone="navy"><DKpiDelta value="+3" direction="up" label="this quarter" style={{ margin: '4px 0 6px' }} /></DStatTile>
        <DStatTile eyebrow="Allocation used" value="71%" icon="zap" tone="gold" caption="of 9.6M CPU hours · FY26"><DProgress value={71} width={150} style={{ margin: '6px 0 8px' }} /></DStatTile>
        <DStatTile eyebrow="Pending requests" value={2} icon="clipboard-list" tone="cyan" caption="Oldest waiting 2 hours" action={<DButton variant="link" style={{ paddingLeft: 0 }} onClick={() => go('requests')}>Review requests →</DButton>} />
        <DStatTile eyebrow="Job failures · 7 days" value="1.8%" icon="triangle-alert" tone="red"><DKpiDelta value="-0.6 pts" direction="down" invert label="vs previous week" style={{ margin: '4px 0 6px' }} /></DStatTile>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16, marginBottom: 16 }}>
        <DCard flush><DCardHeader title="CPU hours by school" subtitle="Thousands of core-hours · last five months" actions={<DButton size="sm" variant="ghost" icon="download">CSV</DButton>} /><div style={{ padding: '14px 22px 18px' }}><DBarChart height={210} data={[{ label: 'SENG', value: 1420, value2: 1180 }, { label: 'SSCI', value: 640, value2: 590 }, { label: 'SBM', value: 96, value2: 110 }, { label: 'SHSS', value: 150, value2: 120 }, { label: 'IPO', value: 380, value2: 260 }]} formatValue={v => v >= 1000 ? (v / 1000).toFixed(1) + 'M' : v + 'k'} seriesNames={['Aug 2026', 'Aug 2025']} /><div style={{ display: 'flex', gap: 16, marginTop: 8, fontSize: 'var(--text-xs)', color: 'var(--fg3)' }}><span><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--viz-1)', borderRadius: 2, marginRight: 6 }} />Aug 2026</span><span><span style={{ display: 'inline-block', width: 10, height: 10, background: 'var(--viz-2)', borderRadius: 2, marginRight: 6 }} />Aug 2025</span></div></div></DCard>
        <DCard flush><DCardHeader title="Jobs per day" subtitle="Completed vs failed · this week" /><div style={{ padding: '14px 22px 18px' }}><DLineChart height={210} labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} series={[{ name: 'Completed', values: [2140, 2380, 2510, 2290, 2620, 1410, 980] }, { name: 'Failed', values: [61, 48, 39, 52, 44, 21, 12], color: 'var(--danger)' }]} formatValue={v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v} /></div></DCard>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
        <DCard flush><DCardHeader title="Requests waiting on you" actions={<DButton size="sm" variant="ghost" onClick={() => go('requests')}>All requests</DButton>} />
          <DTable emphasis="id" rows={RC_REQUESTS.slice(0, 3)} rowKey={r => r.id} columns={[{ key: 'id', label: 'Request', nowrap: true }, { key: 'what', label: 'Change' }, { key: 'by', label: 'Requested by', muted: true }, { key: 'st', label: 'Status', render: r => <DBadge tone={r.tone} icon={r.tone === 'warning' ? 'clock' : r.tone === 'success' ? 'check' : 'x'}>{r.st}</DBadge> }]} /></DCard>
        <DCard flush><DCardHeader title="Recent activity" /><div style={{ padding: '4px 22px 8px' }}><DActivityList timeWidth={124} items={RC_ACTIVITY} /></div></DCard>
      </div>
    </div>
  );
}
Object.assign(window, { Dashboard });
