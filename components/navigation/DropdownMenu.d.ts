import * as React from 'react';
/**
 * White popover menu with optional uppercase heading; MenuItem rows ship alongside.
 */
export interface DropdownMenuProps {
  open?: boolean;
  heading?: React.ReactNode;
  children: React.ReactNode;
  /** Render in flow instead of absolutely positioned. */
  inline?: boolean;
  top?: number;
  right?: number;
  style?: React.CSSProperties;
}
export declare function DropdownMenu(props: DropdownMenuProps): React.ReactElement | null;
