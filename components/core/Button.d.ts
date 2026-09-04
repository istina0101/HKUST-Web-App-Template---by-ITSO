import * as React from 'react';
/**
 * Primary action control. 14px bold, 4px radius, 40px tall (sm 32px), 0 16px inset; presses sink 1px.
 */
export interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'danger' | 'danger-solid' | 'success' | 'link';
  size?: 'md' | 'sm';
  /** Full-width, centred. */
  block?: boolean;
  /** Leading Lucide icon id (16px). */
  icon?: string;
  iconRight?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): React.ReactElement | null;
