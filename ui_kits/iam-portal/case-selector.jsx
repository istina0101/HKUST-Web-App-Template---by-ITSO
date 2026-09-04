/** Full-navy cover shown before the portal: pick a business case. */
function CaseSelector({ onEnter }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'var(--hkust-blue)', zIndex: 'var(--z-cover)', overflow: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 920, width: '100%', padding: '48px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 38 }}>
          <img src="../../assets/logo/hkust-fullname-white.png" alt="HKUST" style={{ height: 38, display: 'block' }} />
          <div style={{ color: '#fff', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-tight)', borderLeft: '1px solid rgba(255,255,255,.4)', paddingLeft: 16, lineHeight: 1.3 }}><b>Information Technology</b><br />Services Office (ITSO)</div>
        </div>
        <div style={{ color: 'var(--hkust-yellow)', fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps-wide)', textTransform: 'uppercase', marginBottom: 10 }}>IAM Self-Service Portal · prototype v4</div>
        <h1 style={{ color: '#fff', fontSize: 'var(--text-xl)', fontWeight: 700, margin: 0 }}>Choose a business case</h1>
        <p style={{ color: 'var(--on-navy-muted)', fontSize: 'var(--text-sm)', marginTop: 8, maxWidth: 560 }}>Each case opens the same portal with that case's people and events. You can switch to another case at any time from the top bar.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 28 }}>
          {Object.entries(IAM_CASES).map(([k, c]) => <CaseCard key={k} c={c} onClick={() => onEnter(k)} />)}
        </div>
      </div>
    </div>
  );
}
function CaseCard({ c, onClick }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: '#fff', border: 'none', textAlign: 'left', padding: '24px 24px 20px', cursor: 'pointer', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)', display: 'block', fontFamily: 'inherit', transition: 'transform var(--t-fast)', outline: h ? '3px solid var(--itso-blue-light)' : 'none', transform: h ? 'translateY(-2px)' : 'none' }}>
      <div style={{ color: 'var(--hkust-gold)', fontSize: 'var(--text-2xs)', fontWeight: 700, letterSpacing: 'var(--tracking-caps-wide)', textTransform: 'uppercase' }}>{c.tag}</div>
      <div style={{ fontWeight: 700, color: 'var(--hkust-blue)', fontSize: 'var(--text-md)', margin: '7px 0 8px', lineHeight: 1.3 }}>{c.title}</div>
      <p style={{ color: 'var(--fg3)', fontSize: 'var(--text-sm)', lineHeight: 1.55, margin: 0 }}>{c.blurb}</p>
      <span style={{ display: 'inline-block', marginTop: 14, color: 'var(--itso-blue-dark)', fontWeight: 700, fontSize: 'var(--text-sm)' }}>Enter case →</span>
    </button>
  );
}
Object.assign(window, { CaseSelector });
