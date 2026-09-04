const { Card: LCard, Chip: LChip, ChipGroup: LChipGroup, Input: LInput, Select: LSelect, Table: LTable, Badge: LBadge, Button: LButton, Pagination: LPagination, Progress: LProgress, Tooltip: LTooltip, IconButton: LIconButton, EmptyState: LEmptyState } = window.HKUSTWebDesignSystem_46d20c;
const LBulkBar = window.HKUSTWebDesignSystem_46d20c.BulkBar || (() => null), lSortRows = window.HKUSTWebDesignSystem_46d20c.SortRows || (rows => rows);
const statusTone = s => s === 'Active' ? ['success', 'check'] : s === 'Expiring' ? ['warning', 'calendar-clock'] : ['danger', 'ban'];
function ProjectsList({ go }) {
  const [f, setF] = React.useState('All');
  const [q, setQ] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState({ key: 'used', dir: 'desc' });
  const [sel, setSel] = React.useState([]);
  const onSort = k => setSort(s => s && s.key === k ? { key: k, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key: k, dir: 'asc' });
  const rows = lSortRows(RC_PROJECTS.filter(p => (f === 'All' || p.status === f) && (!q || (p.name + p.pi + p.id).toLowerCase().includes(q.toLowerCase()))), sort);
  const counts = { All: RC_PROJECTS.length, Active: RC_PROJECTS.filter(p => p.status === 'Active').length, Expiring: RC_PROJECTS.filter(p => p.status === 'Expiring').length, Suspended: RC_PROJECTS.filter(p => p.status === 'Suspended').length };
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
        <LChipGroup>{Object.keys(counts).map(k => <LChip key={k} selected={f === k} onClick={() => setF(k)}>{k} ({counts[k]})</LChip>)}</LChipGroup>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', flex: '1 1 320px' }}><LInput icon="search" placeholder="Search project, PI or ID…" value={q} onChange={e => setQ(e.target.value)} wrapStyle={{ flex: '1 1 240px', minWidth: 0 }} /><div style={{ display: 'flex', gap: 10, alignItems: 'center', flex: '0 0 auto' }}><LSelect options={['All schools', 'SENG', 'SSCI', 'SBM', 'SHSS', 'IPO']} style={{ width: 150 }} /><LTooltip label="Download CSV" side="bottom"><LIconButton tone="light" icon="download" title="Download CSV" /></LTooltip></div></div>
      </div>
      <LBulkBar count={sel.length} onClear={() => setSel([])}><LButton size="sm" variant="ghost" icon="mail">Email PIs</LButton><LButton size="sm" variant="ghost" icon="download">Export</LButton><LButton size="sm" variant="danger" icon="ban">Suspend</LButton></LBulkBar>
      <LCard flush>
        {rows.length ? <LTable emphasis="name" rows={rows} rowKey={r => r.id} onRowClick={() => go('detail')} selectable selected={sel} onSelectionChange={setSel} sort={sort} onSort={onSort} columns={[
          { key: 'id', label: 'ID', muted: true, nowrap: true, sortable: true }, { key: 'name', label: 'Project', sortable: true }, { key: 'pi', label: 'Principal investigator', sortable: true }, { key: 'school', label: 'School', muted: true, sortable: true },
          { key: 'used', label: 'Allocation used', sortable: true, render: r => <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><LProgress value={r.used} width={90} tone={r.used >= 95 ? 'danger' : r.used >= 80 ? 'warning' : 'brand'} /><span style={{ fontSize: 'var(--text-xs)', color: 'var(--fg3)', width: 34 }}>{r.used}%</span></div> },
          { key: 'status', label: 'Status', sortable: true, render: r => { const [t, i] = statusTone(r.status); return <LBadge tone={t} icon={i}>{r.status}</LBadge>; } },
          { key: 'expires', label: 'Expires', muted: true, nowrap: true },
          { key: 'a', label: '', align: 'right', render: () => <LButton variant="link" size="sm" icon="eye">View</LButton> }]} />
          : <LEmptyState icon="search" title="No projects match" action={<LButton variant="ghost" size="sm" onClick={() => { setQ(''); setF('All'); }}>Clear filters</LButton>}>Try another name, PI or ID, or clear the filters.</LEmptyState>}
      </LCard>
      <LPagination style={{ marginTop: 16 }} page={page} pages={4} onChange={setPage} summary={`1–${rows.length} of 38 projects`} />
    </div>
  );
}
function RequestsList({ go }) {
  return (
    <LCard flush>
      <LTable emphasis="id" rows={RC_REQUESTS} rowKey={r => r.id} columns={[{ key: 'id', label: 'Request', nowrap: true }, { key: 'project', label: 'Project', muted: true }, { key: 'what', label: 'Change' }, { key: 'by', label: 'Requested by' }, { key: 'when', label: 'When', muted: true, nowrap: true },
        { key: 'st', label: 'Status', render: r => <LBadge tone={r.tone} icon={r.tone === 'warning' ? 'clock' : r.tone === 'success' ? 'check' : 'x'}>{r.st}</LBadge> },
        { key: 'a', label: '', align: 'right', render: r => r.tone === 'warning' ? <div style={{ display: 'inline-flex', gap: 6 }}><LButton size="sm" variant="ghost" icon="x">Reject</LButton><LButton size="sm" variant="success" icon="check">Approve</LButton></div> : <LButton variant="link" size="sm" icon="eye">View</LButton> }]} />
    </LCard>
  );
}
Object.assign(window, { ProjectsList, RequestsList });
