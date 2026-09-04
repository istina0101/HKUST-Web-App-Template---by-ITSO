import * as React from 'react';
/**
 * Portal data table with uppercase header row, hover rows and optional indented sub-rows.
 */
export interface TableProps {
  columns: Array<{ key: string; label: React.ReactNode; align?: 'left' | 'right' | 'center'; width?: number | string; render?: (row: any, index: number) => React.ReactNode; muted?: boolean; nowrap?: boolean; sortable?: boolean }>;
  rows: any[];
  rowKey?: (row: any, index: number) => string | number;
  /** Column key rendered bold navy (the "System" column). */
  emphasis?: string;
  subRows?: (row: any) => any[];
  expanded?: Record<string | number, boolean>;
  onRowClick?: (row: any) => void;
  /** Current sort; columns flagged `sortable` become clickable (▲▼ always shown). */
  sort?: { key: string; dir: 'asc' | 'desc' } | null;
  onSort?: (key: string) => void;
  /** Adds a checkbox column; `selected` holds row keys. */
  selectable?: boolean;
  selected?: Array<string | number>;
  onSelectionChange?: (keys: Array<string | number>) => void;
  /** Stack rows into labelled blocks at or below `breakpoint` (default true / 760px; 0 disables). */
  responsive?: boolean;
  breakpoint?: number;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): React.ReactElement | null;
/** Orders rows by {key, dir}: numbers numerically, strings case-insensitively. */
export declare function SortRows<T>(rows: T[], sort?: { key: string; dir: 'asc' | 'desc' } | null): T[];
