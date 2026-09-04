import * as React from 'react';
/**
 * Text input with optional leading icon. Focus = navy border + 3px 12% ring.
 */
export interface InputProps {
  icon?: string;
  invalid?: boolean;
  type?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
  wrapStyle?: React.CSSProperties;
  [attr: string]: any;
}
export declare function Input(props: InputProps): React.ReactElement | null;
