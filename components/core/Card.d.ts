import * as React from 'react';
/**
 * White bordered surface, 8px radius, 22px padding. CardHeader / CardFooter / SectionTitle / Divider ship alongside.
 */
export interface CardProps {
  children?: React.ReactNode;
  /** Remove padding so headers, tables and rows run edge to edge. */
  flush?: boolean;
  /** Lift 1px + medium shadow on hover (app launcher, system cards). */
  hoverable?: boolean;
  onClick?: React.MouseEventHandler;
  /** Render as another tag, e.g. "a". */
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): React.ReactElement | null;
