import * as React from 'react';
/**
 * Intentional addition: numbered pager in ghost-button style.
 */
export interface PaginationProps {
  page?: number;
  pages?: number;
  onChange?: (page: number) => void;
  summary?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Pagination(props: PaginationProps): React.ReactElement | null;
