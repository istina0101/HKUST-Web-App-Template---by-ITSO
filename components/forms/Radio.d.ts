import * as React from 'react';
/**
 * Native radio with navy accent and optional label.
 */
export interface RadioProps {
  checked?: boolean;
  name?: string;
  value?: string;
  onChange?: (value?: string) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): React.ReactElement | null;
