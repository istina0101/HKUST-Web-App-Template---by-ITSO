import React from 'react';
/** Tiny brand-tinted label (e.g. "SSO"). 11px bold, 2px radius. */
export function Tag({ children, style }) {
  return <span style={{ display: 'inline-block', background: 'var(--bg-brand-light)', color: 'var(--itso-blue-dark)', borderRadius: 'var(--r-sm)', padding: 'var(--tag-pad)', fontSize: 'var(--text-2xs)', fontWeight: 700, lineHeight: 1.5, ...style }}>{children}</span>;
}
