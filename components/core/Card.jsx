import React from 'react';
/** White surface with 1px border and 8px radius. padding 22px by default; `flush` removes it so headers/tables can sit edge-to-edge. `hoverable` lifts 1px and adds the medium shadow. */
export function Card({ children, flush, hoverable, onClick, as = 'div', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return (
    <Tag onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} {...rest}
      style={{ background: 'var(--surface-card)', border: `1px solid ${hoverable && hover ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--r-lg)', padding: flush ? 0 : 'var(--card-pad)',
        boxShadow: hoverable && hover ? 'var(--shadow-md)' : 'none', transform: hoverable && hover ? 'var(--hover-lift)' : 'none', cursor: hoverable || onClick ? 'pointer' : undefined,
        transition: 'box-shadow var(--t-base),transform var(--t-base),border-color var(--t-base)', textDecoration: 'none', color: 'inherit', display: 'block', ...style }}>
      {children}
    </Tag>
  );
}
/** Header row inside a flush Card: 18px 22px inset, bottom border. Pass `title`/`subtitle` or children; `actions` sits right. */
export function CardHeader({ title, subtitle, actions, children, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: 'var(--card-head-pad)', borderBottom: '1px solid var(--border)', ...style }}>
      <div>{title && <div style={{ fontSize: 'var(--type-section-title-size)', fontWeight: 700, color: 'var(--fg1)' }}>{title}</div>}{subtitle && <p style={{ color: 'var(--fg3)', fontSize: 'var(--text-xs)', marginTop: 2 }}>{subtitle}</p>}{children}</div>
      {actions && <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 'none' }}>{actions}</div>}
    </div>
  );
}
/** Footer row inside a flush Card: 14px 22px inset, top border. */
export function CardFooter({ children, between, style }) {
  return <div style={{ padding: '14px 22px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: between ? 'space-between' : 'flex-start', gap: 10, ...style }}>{children}</div>;
}
/** Section title text style (16px bold navy). */
export function SectionTitle({ children, style }) {
  return <div style={{ fontSize: 'var(--type-section-title-size)', fontWeight: 700, color: 'var(--fg1)', ...style }}>{children}</div>;
}
/** 1px rule, 18px vertical margin. */
export function Divider({ style }) {
  return <hr style={{ height: 1, background: 'var(--border)', border: 0, margin: '18px 0', ...style }} />;
}
