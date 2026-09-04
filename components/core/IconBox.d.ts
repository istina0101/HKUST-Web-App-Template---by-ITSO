import * as React from 'react';
/**
 * Tinted 42px square holding a 22px icon (30/34px variants hold 15px).
 */
export interface IconBoxProps {
  icon: string;
  tone?: 'navy' | 'gold' | 'green' | 'red' | 'cyan' | 'gray';
  size?: 42 | 34 | 30 | number;
  style?: React.CSSProperties;
}
export declare function IconBox(props: IconBoxProps): React.ReactElement | null;
