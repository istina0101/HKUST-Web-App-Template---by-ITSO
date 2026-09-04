import * as React from 'react';
/**
 * 248px white sidebar with NavLabel groups and NavItem rows; footer pinned at the bottom. Becomes a drawer at ≤880px and can collapse to a 64px icon rail. Writes --side-w-current on <html> for content to follow.
 */
export interface SidebarProps {
  children: React.ReactNode;
  /** System name shown in the header row (14px bold navy, wraps to 2 lines max, full name on hover). */
  title?: React.ReactNode;
  footer?: React.ReactNode;
  fixed?: boolean;
  /** Addition: header-row toggle that collapses the rail to 64px (icon only) on desktop. */
  collapsible?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  /** Width at or below which the sidebar becomes a drawer (default 880; 0 disables). */
  breakpoint?: number;
  style?: React.CSSProperties;
}
export declare function Sidebar(props: SidebarProps): React.ReactElement | null;
