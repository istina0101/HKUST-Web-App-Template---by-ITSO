import * as React from 'react';
/**
 * Joined button group for a one-of decision; each option may colour its selected state.
 */
export interface SegmentedControlProps {
  options: Array<{ value: string; label: React.ReactNode; tone?: 'brand' | 'success' | 'danger' }>;
  value?: string;
  onChange?: (value: string) => void;
  size?: 'md' | 'sm';
  style?: React.CSSProperties;
}
export declare function SegmentedControl(props: SegmentedControlProps): React.ReactElement | null;
