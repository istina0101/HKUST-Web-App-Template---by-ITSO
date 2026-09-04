import * as React from 'react';
/**
 * Tiny brand-tinted label (11px, 2px radius), e.g. "SSO".
 */
export interface TagProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): React.ReactElement | null;
