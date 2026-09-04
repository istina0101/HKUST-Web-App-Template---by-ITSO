import * as React from 'react';
/**
 * Intentional addition: the list the band's bell opens.
 */
export interface NotificationPanelProps {
  items: Array<{ id?: string | number; title: React.ReactNode; meta?: React.ReactNode; unread?: boolean; icon?: string; tone?: 'navy' | 'gold' | 'green' | 'red' | 'cyan' | 'gray'; onView?: () => void }>;
  open?: boolean;
  onMarkAllRead?: () => void;
  onClose?: () => void;
  /** Render in flow (previews). */
  inline?: boolean;
  top?: number;
  right?: number;
  emptyText?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function NotificationPanel(props: NotificationPanelProps): React.ReactElement | null;
