const { Card: TCard, Chip: TChip, ChipGroup: TChipGroup, Badge: TBadge, Button: TButton, IconBox: TIconBox, Table: TTable, EmptyState: TEmptyState, StatTile: TStatTile } = window.HKUSTWebDesignSystem_46d20c;
function TeamPage({ go }) {
  const [f, setF] = React.useState('all');
  const counts = { all: IAM_EVENTS.length, needs: IAM_EVENTS.filter(e => e.bucket === 'needs').length, progress: IAM_EVENTS.filter(e => e.bucket === 'progress').length, completed: IAM_EVENTS.filter(e => e.bucket === 'completed').length };
  const shown = IAM_EVENTS.filter(e => f === 'all' || e.bucket === f);
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16, marginBottom: 22 }}>
        <TStatTile eyebrow="Joining" value={2} caption="Position access granted automatically" />
        <TStatTile eyebrow="Moving" value={0} caption="No changes this month" />
        <TStatTile eyebrow="Leaving" value={2} caption={`${counts.needs} transfer decisions pending`} />
      </div>
      <TChipGroup style={{ marginBottom: 16 }}>{[['all', 'All events'], ['needs', 'Needs action'], ['progress', 'In progress'], ['completed', 'Completed']].map(([k, l]) => <TChip key={k} selected={f === k} onClick={() => setF(k)}>{l} ({counts[k]})</TChip>)}</TChipGroup>
      {!shown.length && <TCard flush><TEmptyState icon="users-round" title="No events in this view">Switch filter to see other team events.</TEmptyState></TCard>}
      {shown.map(e => {
        const joiner = e.type === 'joiner';
        return (
          <TCard key={e.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <TIconBox icon={joiner ? 'user-plus' : 'user-minus'} tone={joiner ? 'green' : 'gray'} />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--fg1)', display: 'flex', alignItems: 'center', gap: 8 }}>{e.name}{joiner ? <TBadge tone="success" icon="user-plus">Joiner</TBadge> : <TBadge tone="neutral" icon="user-minus">Leaver</TBadge>}</div>
                <div style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 3, display: 'flex', gap: 6, flexWrap: 'wrap' }}><span>{e.meta}</span><span style={{ color: 'var(--border-strong)' }}>·</span><span>{e.when}</span></div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 'none', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <TBadge tone={e.status[0]} icon={e.status[1]}>{e.status[2]}</TBadge>
              {e.bucket === 'needs' ? <TButton size="sm" icon="arrow-right" onClick={() => go('event')}>Review &amp; Clone</TButton> : <TButton size="sm" variant="ghost" icon="eye" onClick={() => go('event')}>View</TButton>}
            </div>
          </TCard>
        );
      })}
    </div>
  );
}
function MembersPage({ go }) {
  return (
    <div>
      <p className="muted" style={{ fontSize: 'var(--text-sm)', marginBottom: 16, maxWidth: 680 }}>Your current direct reports. Open a person to see what they hold and to start a request for them. Lifecycle events, including former staff, stay on Team lifecycle.</p>
      <TCard flush>
        <TTable emphasis="n" rows={IAM_REPORTS} rowKey={r => r.email} columns={[
          { key: 'n', label: 'Person' }, { key: 'email', label: 'Email', muted: true }, { key: 'title', label: 'Title' },
          { key: 'ev', label: 'Lifecycle', render: r => r.ev ? <TBadge tone={r.evTone} icon="refresh-cw" onClick={() => go('event')}>{r.ev}</TBadge> : <span className="muted">—</span> },
          { key: 'status', label: 'Status', render: r => r.status === 'Active' ? <TBadge tone="success" icon="check">Active</TBadge> : <TBadge tone="neutral" icon="ban">Disabled</TBadge> },
          { key: 'a', label: '', align: 'right', render: () => <TButton variant="link" size="sm" icon="eye" onClick={() => go('person')}>View</TButton> }]} />
      </TCard>
    </div>
  );
}
Object.assign(window, { TeamPage, MembersPage });
