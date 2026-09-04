import * as React from 'react';
/**
 * Filter / toggle chip; selected chips fill HKUST navy. ChipGroup lays several out with 8px gaps.
 */
export interface ChipProps {
  selected?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Chip(props: ChipProps): React.ReactElement | null;
