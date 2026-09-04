const { Card: WCard, CardHeader: WCardHeader, CardFooter: WCardFooter, Progress: WProgress, StepTracker: WStepTracker, Field: WField, Input: WInput, Select: WSelect, Textarea: WTextarea, OptionRow: WOptionRow, Button: WButton, Callout: WCallout, KeyValueList: WKeyValueList, Badge: WBadge, Chip: WChip, ChipGroup: WChipGroup } = window.HKUSTWebDesignSystem_46d20c;
const WCombobox = window.HKUSTWebDesignSystem_46d20c.Combobox || (() => null), WMultiSelect = window.HKUSTWebDesignSystem_46d20c.MultiSelect || (() => null), WFileUpload = window.HKUSTWebDesignSystem_46d20c.FileUpload || (() => null);
function RequestWizard({ onDone }) {
  const [step, setStep] = React.useState(1);
  const [kind, setKind] = React.useState('cpu');
  const [dur, setDur] = React.useState('90 days');
  const [proj, setProj] = React.useState('RC-2041');
  const [members, setMembers] = React.useState(['jhli', 'kyc']);
  const [files, setFiles] = React.useState([{ id: 1, name: 'Justification-letter.pdf', size: 482000, progress: 100 }]);
  const PROJ_OPTS = RC_PROJECTS.map(pr => ({ value: pr.id, label: `${pr.id} · ${pr.name}`, meta: `${pr.pi} · ${pr.school}`, icon: 'briefcase' }));
  const MEMBER_OPTS = RC_MEMBERS.map((m, i) => ({ value: ['wchan', 'jhli', 'kyc', 'psso'][i], label: m.n, meta: m.role }));
  const kinds = { cpu: 'CPU hours · +200k', gpu: 'GPU nodes · 8 × A100 for 30 days', storage: 'Storage · 25 → 40 TB' };
  return (
    <div style={{ maxWidth: 760 }}>
      <WCard flush>
        <WCardHeader title={['Choose the change', 'Justify and set duration', 'Review and submit'][step - 1]} subtitle={`Step ${step} of 3 · ${proj || 'No project selected'}`} />
        <div style={{ padding: '18px 22px' }}>
          <WProgress variant="segments" steps={3} value={step} style={{ marginBottom: 20 }} />
          {step === 1 && <div>
            <WField label="Project" required hint="Search by ID, name or PI." style={{ marginBottom: 16 }}><WCombobox value={proj} onChange={setProj} placeholder="Search projects…" icon="briefcase" options={PROJ_OPTS} /></WField>
            <WField label="What do you need more of?" required>
              <WOptionRow name="k" value="cpu" checked={kind === 'cpu'} onChange={(_, v) => setKind(v)} title="CPU hours" description="Standard queue · approved by the Research Computing team" trailing={<WBadge tone="success">Usually same day</WBadge>} />
              <WOptionRow name="k" value="gpu" checked={kind === 'gpu'} onChange={(_, v) => setKind(v)} title="GPU nodes" description="A100 partition · time-bound · reviewed weekly" trailing={<WBadge tone="warning" icon="clock">Time-bound</WBadge>} />
              <WOptionRow name="k" value="storage" checked={kind === 'storage'} onChange={(_, v) => setKind(v)} title="Storage" description="Project scratch and archive · charged to the department" />
            </WField>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 6 }}><WField label="Amount" required><WInput defaultValue={kind === 'gpu' ? '8 nodes' : kind === 'storage' ? '40 TB' : '200,000 hours'} /></WField><WField label="Needed from"><WInput type="date" defaultValue="2026-09-15" /></WField></div>
          </div>}
          {step === 2 && <div>
            <WField label="Duration" hint="Time-bound allocations expire automatically and are logged."><WChipGroup>{['30 days', '90 days', '180 days', 'Rest of period'].map(d => <WChip key={d} selected={dur === d} onClick={() => setDur(d)}>{d}</WChip>)}</WChipGroup></WField>
            <WField label="Charge to" style={{ marginTop: 16 }}><WSelect options={['RGC General Research Fund · 16205826', 'Departmental research fund · CIVL', 'Start-up grant · R9321']} /></WField>
            <WField label="Members who will use it" style={{ marginTop: 16 }}><WMultiSelect value={members} onChange={setMembers} placeholder="Add members…" options={MEMBER_OPTS} /></WField>
            <WField label="Business justification" required style={{ marginTop: 16 }}><WTextarea rows={3} defaultValue="Ensemble runs for the typhoon-season paper (submission 30 Nov) need roughly 200k extra core-hours; current allocation is 82% used." /></WField>
            <WField label="Supporting documents" hint="Optional · a quotation is required for GPU nodes." style={{ marginTop: 16 }}><WFileUpload files={files} onFiles={fs => setFiles(f => [...f, ...fs.map((x, i) => ({ id: Date.now() + i, name: x.name, size: x.size, progress: 100 }))])} onRemove={f => setFiles(fs => fs.filter(x => x.id !== f.id))} /></WField>
            <WCallout style={{ marginTop: 16 }}>Requests over 100k hours are also seen by the school's research computing coordinator. You will be emailed at each step.</WCallout>
          </div>}
          {step === 3 && <div>
            <WKeyValueList items={[{ k: 'Project', v: (PROJ_OPTS.find(o => o.value === proj) || {}).label || '—' }, { k: 'Change', v: kinds[kind] }, { k: 'Duration', v: dur }, { k: 'Members', v: `${members.length} selected` }, { k: 'Documents', v: `${files.length} file${files.length === 1 ? '' : 's'}` }, { k: 'Charge to', v: 'RGC General Research Fund · 16205826' }, { k: 'Route', v: <WBadge tone="info" icon="zap" style={{ whiteSpace: 'normal', textAlign: 'left', alignItems: 'flex-start' }}>Research Computing team → SENG coordinator</WBadge> }]} />
            <div style={{ marginTop: 18 }}><WStepTracker steps={[{ label: 'Submitted', state: 'active' }, { label: 'Policy check', state: 'pending' }, { label: 'RC team', state: 'pending' }, { label: 'SENG coordinator', state: 'pending' }, { label: 'Provisioned', state: 'pending' }]} /></div>
          </div>}
        </div>
        <WCardFooter between>
          <WButton variant="link" icon="arrow-left" disabled={step === 1} onClick={() => setStep(s => s - 1)}>Back</WButton>
          <div style={{ display: 'flex', gap: 8 }}><WButton variant="link">Cancel</WButton>{step < 3 ? <WButton iconRight="arrow-right" onClick={() => setStep(s => s + 1)}>Continue</WButton> : <WButton icon="send" onClick={onDone}>Submit request</WButton>}</div>
        </WCardFooter>
      </WCard>
    </div>
  );
}
Object.assign(window, { RequestWizard });
