import * as React from 'react';
/**
 * Definition rows with a 150px muted key column.
 */
export interface KeyValueListProps {
  items: Array<{ k: React.ReactNode; v: React.ReactNode }>;
  keyWidth?: number;
  style?: React.CSSProperties;
}
export declare function KeyValueList(props: KeyValueListProps): React.ReactElement | null;
