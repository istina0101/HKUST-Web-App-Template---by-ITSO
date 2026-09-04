import * as React from 'react';
/**
 * 38×22 toggle with label on the right.
 */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): React.ReactElement | null;
