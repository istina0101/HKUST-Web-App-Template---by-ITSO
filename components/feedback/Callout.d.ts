import * as React from 'react';
/**
 * Inline tinted message with icon. Shares the Badge tint set.
 */
export interface CalloutProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  /** Override the default glyph (info / shield-check / triangle-alert / circle-alert). */
  icon?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Callout(props: CalloutProps): React.ReactElement | null;
