import * as React from 'react';
/**
 * Native select styled like Input; size="sm" is the compact inline variant.
 */
export interface SelectProps {
  options?: Array<string | { value: string; label: string }>;
  size?: 'md' | 'sm';
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  [attr: string]: any;
}
export declare function Select(props: SelectProps): React.ReactElement | null;
