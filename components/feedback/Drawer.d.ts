import * as React from 'react';
/**
 * Intentional addition: right-hand 480px side panel on a navy scrim; closes with its header button.
 */
export interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  leading?: React.ReactNode;
  footer?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
  inline?: boolean;
  style?: React.CSSProperties;
}
export declare function Drawer(props: DrawerProps): React.ReactElement | null;
