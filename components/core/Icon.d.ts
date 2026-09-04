import * as React from 'react';
/**
 * Inline Lucide glyph from the portal icon map (24×24, stroke 2). Colour follows currentColor.
 */
export interface IconProps {
  /** Lucide id, e.g. "shield-check". Must exist in ICONS. */
  name: string;
  /** Preset sm 15 · md 18 · lg 22 · btn 16 · badge 13, or a px number. */
  size?: 'sm' | 'md' | 'lg' | 'btn' | 'badge' | number;
  color?: string;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Icon(props: IconProps): React.ReactElement | null;
