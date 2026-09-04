import * as React from 'react';
/**
 * Bottom-centre navy toast, controlled by open.
 */
export interface ToastProps {
  open?: boolean;
  children: React.ReactNode;
  /** false renders in flow for previews. */
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): React.ReactElement | null;
