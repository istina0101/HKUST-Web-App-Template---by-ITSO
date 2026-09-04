import * as React from 'react';
/**
 * Intentional addition: underline tabs for content panes.
 */
export interface TabsProps {
  items: Array<{ key: string; label: React.ReactNode; icon?: string; count?: number | string }>;
  value?: string;
  onChange?: (key: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): React.ReactElement | null;
