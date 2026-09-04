import * as React from 'react';
/**
 * Centred dialog on a navy scrim. 480px (lg 560).
 */
export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Leading element in the header, e.g. a red IconBox for destructive dialogs. */
  leading?: React.ReactNode;
  size?: 'md' | 'lg';
  footer?: React.ReactNode;
  children?: React.ReactNode;
  /** Render without the fixed scrim (previews). */
  inline?: boolean;
  style?: React.CSSProperties;
}
export declare function Modal(props: ModalProps): React.ReactElement | null;
