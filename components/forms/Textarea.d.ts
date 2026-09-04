import * as React from 'react';
/**
 * Multi-line input, vertical resize.
 */
export interface TextareaProps {
  rows?: number;
  invalid?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  style?: React.CSSProperties;
  [attr: string]: any;
}
export declare function Textarea(props: TextareaProps): React.ReactElement | null;
