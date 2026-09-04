import * as React from 'react';
/**
 * Intentional addition: dropdown of checkboxes; the field shows a count, never tags.
 */
export interface MultiSelectProps {
  options: Array<{ value: string; label: string; meta?: string }>;
  value?: string[];
  onChange?: (values: string[]) => void;
  placeholder?: string;
  searchable?: boolean;
  invalid?: boolean;
  countLabel?: (n: number, total: number) => React.ReactNode;
  style?: React.CSSProperties;
}
export declare function MultiSelect(props: MultiSelectProps): React.ReactElement | null;
