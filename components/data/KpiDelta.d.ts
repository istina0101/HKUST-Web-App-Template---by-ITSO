import * as React from 'react';
/**
 * Intentional addition: KPI change indicator.
 */
export interface KpiDeltaProps {
  value: React.ReactNode;
  direction?: 'up' | 'down' | 'flat';
  /** Down is the good outcome. */
  invert?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function KpiDelta(props: KpiDeltaProps): React.ReactElement | null;
