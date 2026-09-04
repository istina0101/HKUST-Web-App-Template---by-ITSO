import * as React from 'react';
/**
 * Intentional addition: dependency-free SVG line chart.
 */
export interface LineChartProps {
  series: Array<{ name: string; values: number[]; color?: string }>;
  labels: string[];
  height?: number;
  max?: number;
  area?: boolean;
  legend?: boolean;
  colors?: string[];
  formatValue?: (v: number) => React.ReactNode;
  style?: React.CSSProperties;
}
export declare function LineChart(props: LineChartProps): React.ReactElement | null;
