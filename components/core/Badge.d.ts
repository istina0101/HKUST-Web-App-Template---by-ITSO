import * as React from 'react';
/**
 * Tinted status pill-rectangle (4px radius) with bold 12px text and optional 13px icon.
 */
export interface BadgeProps {
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'gold' | 'cyan' | 'neutral';
  icon?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): React.ReactElement | null;
