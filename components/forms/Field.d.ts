import * as React from 'react';
/**
 * Label (12px bold) + control + hint/error line.
 */
export interface FieldProps {
  label?: React.ReactNode;
  required?: boolean;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  htmlFor?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): React.ReactElement | null;
