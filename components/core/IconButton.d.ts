import * as React from 'react';
/**
 * 36×36 icon-only button. tone navy for the top band, light for white surfaces.
 */
export interface IconButtonProps {
  icon: string;
  tone?: 'navy' | 'light';
  /** Orange unread pip. */
  dot?: boolean;
  /** Orange counter (cart). */
  count?: number | string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: number;
  iconSize?: number;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): React.ReactElement | null;
