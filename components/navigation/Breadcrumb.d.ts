import * as React from 'react';
/**
 * Intentional addition: 12px trail with chevrons.
 */
export interface BreadcrumbProps {
  items: Array<{ label: React.ReactNode; href?: string; onClick?: () => void }>;
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): React.ReactElement | null;
