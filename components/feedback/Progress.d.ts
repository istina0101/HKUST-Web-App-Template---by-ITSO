import * as React from 'react';
/**
 * Bar (6px pill) or wizard segments (4px strip).
 */
export interface ProgressProps {
  variant?: 'bar' | 'segments';
  /** Percent for bar; completed count for segments. */
  value?: number;
  steps?: number;
  width?: number;
  tone?: 'brand' | 'success' | 'warning' | 'danger';
  style?: React.CSSProperties;
}
export declare function Progress(props: ProgressProps): React.ReactElement | null;
