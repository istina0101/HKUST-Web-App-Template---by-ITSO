import * as React from 'react';
/**
 * Intentional addition: dependency-free SVG bar chart in the brand series.
 */
export interface BarChartProps {
  data: Array<{ label: string; value: number; value2?: number; color?: string }>;
  height?: number;
  max?: number;
  showValues?: boolean;
  colors?: string[];
  formatValue?: (v: number) => React.ReactNode;
  /** Names for value / value2 in the hover tooltip. */
  seriesNames?: [string, string];
  style?: React.CSSProperties;
}
export declare function BarChart(props: BarChartProps): React.ReactElement | null;
