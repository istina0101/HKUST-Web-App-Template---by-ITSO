const { Card: GCard, CardHeader: GCardHeader, CardFooter: GCardFooter, Field: GField, Input: GInput, Select: GSelect, Switch: GSwitch, Button: GButton, Callout: GCallout, Modal: GModal, IconBox: GIconBox, Divider: GDivider, Avatar: GAvatar, Badge: GBadge, KeyValueList: GKeyValueList } = window.HKUSTWebDesignSystem_46d20c;
const GAccordion = window.HKUSTWebDesignSystem_46d20c.Accordion || (({ items = [] }) => <div style={{ display: 'grid', gap: 16 }}>{items.map(it => <GCard key={it.key}><div style={{ fontWeight: 700, color: 'var(--fg1)', marginBottom: 12 }}>{it.title}</div>{it.content}</GCard>)}</div>);
function SettingsPage({ say }) {
  const [n, setN] = React.useState({ decided: true, weekly: false, quota: true, failures: true });
  const [confirm, setConfirm] = React.useState(false);
  const t = k => v => setN(o => ({ ...o, [k]: v }));
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16, alignItems: 'start' }}>
      <GAccordion defaultOpen="profile" items={[
        { key: 'profile', title: 'Profile', meta: 'Synced from the HR record · changes go through HR', content: <div><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}><GField label="Display name"><GInput defaultValue="WONG Ka Ming" /></GField><GField label="Email"><GInput defaultValue="kaming@ust.hk" disabled /></GField><GField label="Department"><GInput defaultValue="Information Technology Services Office" disabled /></GField><GField label="Preferred language"><GSelect options={['English', '繁體中文']} /></GField></div><div style={{ display: 'flex', gap: 8, marginTop: 16 }}><GButton size="sm" onClick={() => say('Profile saved')}>Save changes</GButton><GButton size="sm" variant="link">Discard</GButton></div></div> },
        { key: 'notify', title: 'Notifications', meta: 'Email goes to kaming@ust.hk', content: <div style={{ display: 'grid', gap: 14 }}><GSwitch checked={n.decided} onChange={t('decided')} label="A request I made is decided" /><GSwitch checked={n.quota} onChange={t('quota')} label="A project I administer passes 80% and 95% of its allocation" /><GSwitch checked={n.failures} onChange={t('failures')} label="Job failure rate exceeds 5% in a day" /><GSwitch checked={n.weekly} onChange={t('weekly')} label="Weekly usage digest" /></div> },
        { key: 'danger', title: 'Danger zone', meta: 'Close your research computing account', content: <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}><p className="muted" style={{ fontSize: 'var(--text-xs)', maxWidth: 420 }}>Running jobs are cancelled; project data stays with the PI. This is written to the audit log.</p><GButton variant="danger" icon="trash-2" onClick={() => setConfirm(true)}>Close account</GButton></div> },
      ]} />
      <div style={{ display: 'grid', gap: 16 }}>
        <GCard><div style={{ display: 'flex', gap: 14, alignItems: 'center' }}><GAvatar initials="KM" size="lg" /><div><div style={{ fontWeight: 700, color: 'var(--fg1)' }}>WONG Ka Ming</div><div className="muted" style={{ fontSize: 'var(--text-xs)' }}>Research Computing · ITSO</div></div></div><GDivider /><GKeyValueList keyWidth={90} items={[{ k: 'Staff ID', v: 'UST-P-0045210' }, { k: 'Sign-in', v: <GBadge tone="success" icon="shield-check">MFA active</GBadge> }, { k: 'Last sign-in', v: 'Today 08:52 · Hong Kong' }]} /></GCard>
        <GCallout>Sign-in methods and passwords are managed in the IAM self-service portal, not here.</GCallout>
      </div>
      {confirm && <GModal title="Close account" leading={<GIconBox icon="triangle-alert" tone="red" size={34} />} onClose={() => setConfirm(false)} footer={<><GButton variant="link" onClick={() => setConfirm(false)}>Cancel</GButton><GButton variant="danger-solid" icon="trash-2" onClick={() => { setConfirm(false); say('Account closure requested'); }}>Close account</GButton></>}>
        <p style={{ fontSize: 'var(--text-sm)' }}>Close the research computing account for <b style={{ color: 'var(--fg1)' }}>WONG Ka Ming</b>?</p>
        <GCallout tone="warning" icon="info" style={{ marginTop: 12 }}>This takes effect immediately and is written to the audit log. Your manager is notified for the record.</GCallout>
      </GModal>}
    </div>
  );
}
Object.assign(window, { SettingsPage });
