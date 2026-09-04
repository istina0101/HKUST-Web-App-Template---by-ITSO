import * as React from 'react';
/**
 * 60px HKUST-navy application band: logo + unit left, tools + user right. BandSwitch ships alongside.
 */
export interface TopBandProps {
  logoSrc?: string;
  logoAlt?: string;
  /** Bold first line, e.g. "Information Technology". */
  unit?: React.ReactNode;
  unitSub?: React.ReactNode;
  /** Extra left-side element (BandSwitch). */
  extra?: React.ReactNode;
  /** Right-side tools (IconButtons). */
  children?: React.ReactNode;
  user?: { initials: string; name: string; role?: string; bg?: string; fg?: string };
  onUserClick?: () => void;
  /** Override the default menu action (which opens the Sidebar drawer). */
  onMenu?: () => void;
  /** Show the menu button on narrow screens (default true). */
  menu?: boolean;
  /** Narrow breakpoint (default 880; 0 disables). */
  breakpoint?: number;
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function TopBand(props: TopBandProps): React.ReactElement | null;
