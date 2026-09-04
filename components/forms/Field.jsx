import React from 'react';
/** Label + control + optional hint/error. Label is 12px bold; required mark is red. */
export function Field({ label, required, hint, error, htmlFor, children, style }) {
  return (
    <div style={style}>
      {label && <label htmlFor={htmlFor} style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--fg2)', marginBottom: 6 }}>{label}{required && <span style={{ color: 'var(--danger)' }}> *</span>}</label>}
      {children}
      {(error || hint) && <p style={{ color: error ? 'var(--tint-danger-fg)' : 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 8 }}>{error || hint}</p>}
    </div>
  );
}
