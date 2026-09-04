import * as React from 'react';
/**
 * Centred icon + title + line + optional action; place inside a Card.
 */
export interface EmptyStateProps {
  icon?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement | null;
