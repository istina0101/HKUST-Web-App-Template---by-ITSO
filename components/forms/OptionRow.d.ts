import * as React from 'react';
/**
 * Bordered row wrapping a native radio/checkbox with title, description and trailing slot.
 */
export interface OptionRowProps {
  type?: 'radio' | 'checkbox';
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (checked: boolean, value?: string) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  trailing?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function OptionRow(props: OptionRowProps): React.ReactElement | null;
