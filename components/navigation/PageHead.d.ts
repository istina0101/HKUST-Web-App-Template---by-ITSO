import * as React from 'react';
/**
 * Sticky white page header: 20px title, 14px muted subtitle, optional right actions.
 */
export interface PageHeadProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  sticky?: boolean;
  style?: React.CSSProperties;
}
export declare function PageHead(props: PageHeadProps): React.ReactElement | null;
