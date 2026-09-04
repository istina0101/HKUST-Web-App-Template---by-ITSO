import * as React from 'react';
/**
 * Intentional addition: ITSO-blue ring spinner.
 */
export interface SpinnerProps {
  size?: 18 | 24 | 32 | number;
  /** Centre in a padded block with an optional label. */
  center?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Spinner(props: SpinnerProps): React.ReactElement | null;
