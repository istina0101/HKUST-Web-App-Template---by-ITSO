import * as React from 'react';
/**
 * Intentional addition: navy hover tooltip.
 */
export interface TooltipProps {
  label: React.ReactNode;
  side?: 'top' | 'bottom';
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): React.ReactElement | null;
