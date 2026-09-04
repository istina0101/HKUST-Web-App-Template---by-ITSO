import * as React from 'react';
/**
 * Stat card: eyebrow, 32px number, caption, optional action and IconBox.
 */
export interface StatTileProps {
  eyebrow?: React.ReactNode;
  value?: React.ReactNode;
  unit?: React.ReactNode;
  caption?: React.ReactNode;
  action?: React.ReactNode;
  icon?: string;
  tone?: 'navy' | 'gold' | 'green' | 'red' | 'cyan' | 'gray';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function StatTile(props: StatTileProps): React.ReactElement | null;
