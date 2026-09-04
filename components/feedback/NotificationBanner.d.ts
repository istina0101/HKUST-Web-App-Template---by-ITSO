import * as React from 'react';
/**
 * Intentional addition: full-width dismissible notice under the band (maintenance, session expiry, outage).
 */
export interface NotificationBannerProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  icon?: string;
  /** Bold lead-in before the message. */
  title?: React.ReactNode;
  children: React.ReactNode;
  /** Right-side action (link Button). */
  action?: React.ReactNode;
  onDismiss?: () => void;
  open?: boolean;
  style?: React.CSSProperties;
}
export declare function NotificationBanner(props: NotificationBannerProps): React.ReactElement | null;
