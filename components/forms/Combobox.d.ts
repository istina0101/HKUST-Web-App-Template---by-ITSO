import * as React from 'react';
/**
 * Intentional addition: typeahead search with avatar rows.
 */
export interface ComboboxProps {
  options: Array<{ value: string; label: string; meta?: string; initials?: string; icon?: string; bg?: string; fg?: string }>;
  value?: string | null;
  onChange?: (value: string | null, option: any) => void;
  placeholder?: string;
  icon?: string;
  emptyText?: React.ReactNode;
  maxItems?: number;
  invalid?: boolean;
  style?: React.CSSProperties;
}
export declare function Combobox(props: ComboboxProps): React.ReactElement | null;
