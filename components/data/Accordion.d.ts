import * as React from 'react';
/**
 * Intentional addition: one-open-at-a-time sections; Disclosure ships alongside for a single row.
 */
export interface AccordionProps {
  items: Array<{ key: string; title: React.ReactNode; meta?: React.ReactNode; content: React.ReactNode }>;
  defaultOpen?: string | null;
  value?: string | null;
  onChange?: (key: string | null) => void;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): React.ReactElement | null;
