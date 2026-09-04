import * as React from 'react';
/**
 * Square initials avatar, 4px radius. sm 32px · lg 52px.
 */
export interface AvatarProps {
  initials: string;
  size?: 'sm' | 'lg' | number;
  bg?: string;
  fg?: string;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Avatar(props: AvatarProps): React.ReactElement | null;
