import * as React from 'react';
/**
 * Intentional addition: shimmering placeholder bar; SkeletonTable and SkeletonCard ship alongside.
 */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): React.ReactElement | null;
